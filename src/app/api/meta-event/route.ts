import { NextRequest, NextResponse } from "next/server";

// Meta Conversions API endpoint.
// Browser pixel and this server-side endpoint share an event_id for each
// event so Meta deduplicates them automatically — we get redundancy
// (CAPI fires even when adblockers/ITP kill the browser pixel) without
// double-counting.

const PIXEL_ID = "1374967867804016";
const GRAPH_API_VERSION = "v21.0";

// Run on the Edge runtime — lower latency, suitable for fire-and-forget
// outbound calls to Meta's Graph API.
export const runtime = "edge";

interface IncomingEvent {
  event_name: string;
  event_id?: string;
  event_source_url?: string;
  custom_data?: Record<string, unknown>;
}

export async function POST(req: NextRequest) {
  let body: IncomingEvent;
  try {
    body = (await req.json()) as IncomingEvent;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body.event_name !== "string" || body.event_name.length === 0) {
    return NextResponse.json({ error: "event_name_required" }, { status: 400 });
  }

  const accessToken = process.env.META_ACCESS_TOKEN;
  if (!accessToken) {
    // Token not configured yet — accept the request silently so the client
    // doesn't error during the brief window between deploy and env var setup.
    return NextResponse.json({ ok: true, capi: "skipped_no_token" });
  }

  // Extract IP / UA / fbp / fbc from the request — Meta uses these for
  // matching the server-side event back to a browser session.
  const ipHeader =
    req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "";
  const clientIp = ipHeader.split(",")[0].trim() || undefined;
  const userAgent = req.headers.get("user-agent") ?? undefined;
  const fbp = req.cookies.get("_fbp")?.value;
  const fbc = req.cookies.get("_fbc")?.value;

  const referer = req.headers.get("referer") ?? undefined;
  const eventSourceUrl = body.event_source_url ?? referer;

  const eventPayload = {
    event_name: body.event_name,
    event_time: Math.floor(Date.now() / 1000),
    event_id: body.event_id,
    event_source_url: eventSourceUrl,
    action_source: "website" as const,
    user_data: {
      client_ip_address: clientIp,
      client_user_agent: userAgent,
      fbp,
      fbc,
    },
    custom_data: body.custom_data,
  };

  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(accessToken)}`;

  try {
    const metaRes = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ data: [eventPayload] }),
    });

    const metaJson = (await metaRes.json().catch(() => ({}))) as Record<string, unknown>;

    if (!metaRes.ok) {
      // Log but don't expose internal error details to the client.
      console.error("[meta-capi] error", metaRes.status, metaJson);
      return NextResponse.json(
        { ok: false, error: "meta_api_error", status: metaRes.status },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, meta: metaJson });
  } catch (err) {
    console.error("[meta-capi] fetch failed", err);
    return NextResponse.json({ ok: false, error: "fetch_failed" }, { status: 502 });
  }
}
