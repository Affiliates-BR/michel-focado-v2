// Helpers for firing Meta Pixel events with browser/server deduplication.
//
// Each call generates an event_id and fires the event in two places:
//   1. Browser:  fbq('track' | 'trackCustom', ...)  with the eventID
//   2. Server:   POST /api/meta-event             with the same event_id
// Meta dedupes by event_id, so we don't double-count. Whichever path
// reaches Meta wins — gives us coverage even when the browser Pixel is
// blocked (adblockers, iOS ITP, etc.).

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type PixelMethod = "track" | "trackCustom";

interface FireOptions {
  custom_data?: Record<string, unknown>;
  /** When true, also POST to /api/meta-event for server-side coverage. */
  capi?: boolean;
}

function generateEventId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  // RFC4122-ish fallback (good enough for dedup, not for crypto).
  return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function fireMetaEvent(
  method: PixelMethod,
  eventName: string,
  options: FireOptions = {},
): string {
  const eventId = generateEventId();
  const customData = options.custom_data;

  // Browser pixel.
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (customData) {
      window.fbq(method, eventName, customData, { eventID: eventId });
    } else {
      window.fbq(method, eventName, {}, { eventID: eventId });
    }
  }

  // Conversions API. Default true for standard 'track' events (the ones
  // that matter for ad optimization), opt-in for custom events.
  const shouldCallCapi = options.capi ?? method === "track";
  if (shouldCallCapi && typeof window !== "undefined") {
    void fetch("/api/meta-event", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_source_url: window.location.href,
        custom_data: customData,
      }),
      // keepalive lets the request complete even if the user navigates
      // away (e.g. clicked a link). Critical for outbound-link tracking.
      keepalive: true,
    }).catch(() => {
      // Silent failure — browser pixel may still have succeeded.
    });
  }

  return eventId;
}
