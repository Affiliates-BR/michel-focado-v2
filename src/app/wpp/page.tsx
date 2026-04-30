"use client";

import Image from "next/image";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function trackEvent(name: string) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", name);
  }
}

// TODO: substituir por link real do grupo
const WHATSAPP_GROUP_URL = "#";

export default function WhatsAppLanding() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start">
      {/* Background Images */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/banner-mobile.jpg"
          alt="Michel Focado Background"
          fill
          sizes="(max-width: 768px) 100vw, 0vw"
          className="object-cover object-center md:hidden"
          priority
        />
        <Image
          src="/banner-desktop.jpg"
          alt="Michel Focado Background"
          fill
          sizes="(min-width: 768px) 100vw, 0vw"
          className="hidden md:block object-cover object-center"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 pt-[15vh] pb-8 md:py-8 flex flex-col items-center gap-4 md:gap-6">
        {/* Profile Header */}
        <div
          className="animate-fade-in-up flex flex-col items-center gap-3"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Avatar (visible on all sizes here, since it's the focal element) */}
          <div className="avatar-ring">
            <div className="avatar-ring-inner">
              <Image
                src="/avatar.jpg"
                alt="Michel Focado"
                width={96}
                height={96}
                className="rounded-full object-cover w-24 h-24"
                priority
              />
            </div>
          </div>

          {/* Name + Verified Badge */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-white">Michel Focado</h1>
            <svg
              className="w-5 h-5 text-blue-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          {/* Subtitle */}
          <p className="text-xs text-white/50 uppercase tracking-widest text-center">
            Grupo Exclusivo no WhatsApp
          </p>
        </div>

        {/* Hero call-out */}
        <div
          className="animate-fade-in-up flex flex-col items-center gap-3 text-center"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#25d366]/15 ring-1 ring-[#25d366]/30">
            <svg
              className="w-10 h-10 text-[#25d366]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>

          <h2 className="text-2xl font-extrabold text-white leading-tight">
            Entre no grupo VIP do Michel
          </h2>
          <p className="text-sm text-white/70 leading-relaxed max-w-sm">
            Dicas, palpites e oportunidades exclusivas direto no seu WhatsApp.
            Acesso gratuito por tempo limitado.
          </p>
        </div>

        {/* Disclaimer */}
        <p
          className="animate-fade-in-up text-xs text-white text-center font-medium"
          style={{ animationDelay: "0.5s" }}
        >
          Jogos de azar não são soluções financeiras. +18 Jogue com responsabilidade.
        </p>

        {/* CTA Button */}
        <a
          href={WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("wpp_button")}
          className="animate-fade-in-up card-whatsapp w-full"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-[#1a8a47] to-[#25d366] p-[1px]">
            <div className="flex items-center justify-center gap-3 rounded-[14px] bg-[#25d366] px-6 py-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-bold text-white text-base">
                Entrar no Grupo
              </span>
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </a>

        {/* Footer */}
        <div
          className="animate-fade-in-up flex flex-col items-center gap-2 mt-4"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5">
            <span className="text-[10px] font-bold">
              powered by{" "}
              <span className="text-[#e94560]">Affiliates</span>
              <span className="text-white/60">BR</span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
