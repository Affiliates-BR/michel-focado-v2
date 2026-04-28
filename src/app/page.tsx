import Image from "next/image";

const bettingHouses = [
  {
    name: "4Play",
    description: "Bonus especial para voce!",
    logo: "/logos/4play.png",
    link: "https://go.aff.4play.bet.br/9p7hgs45?utm_source=affbrcmtfcfp",
  },
  {
    name: "Gol de Bet",
    description: "Aposte com seguranca!",
    logo: "/logos/goldebet.png",
    link: "https://go.aff.goldebet.bet.br/3wxyd9w2?utm_source=affbrcmtfc1",
  },
  {
    name: "Vera Bet",
    description: "Jogue agora com bonus!",
    logo: "/logos/verabet.png",
    link: "https://go.aff.ana.partners/v88g8ncr?utm_source=affbrcmtfcvb",
  },
  {
    name: "bet.bet",
    description: "Cadastre-se e ganhe bonus!",
    logo: "/logos/betbet.png",
    link: "https://go.aff.bet.bet/ajam62yw?utm_source=affbrcmtfcbt",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start">
      {/* Background Images */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/banner-mobile.jpg"
          alt="Michel Focado Background"
          fill
          className="object-cover object-center md:hidden"
          priority
        />
        <Image
          src="/banner-desktop.jpg"
          alt="Michel Focado Background"
          fill
          className="hidden md:block object-cover object-center"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-4 pt-[15vh] pb-8 md:py-8 flex flex-col items-center gap-3 md:gap-6">
        {/* Profile Header */}
        <div
          className="animate-fade-in-up flex flex-col items-center gap-3"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Avatar with ring */}
          <div className="avatar-ring hidden md:block">
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
            <h1 className="text-xl font-extrabold text-white">
              Michel Focado
            </h1>
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
            Influencer / Apostas Esportivas
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-2 mt-1">
            {/* Instagram */}
            <a
              href="https://instagram.com/michelfocado"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p
          className="animate-fade-in-up text-xs text-white text-center font-medium"
          style={{ animationDelay: "0.35s" }}
        >
          Jogos de azar não são soluções financeiras. +18 Jogue com responsabilidade.
        </p>

        {/* WhatsApp CTA Card */}
        <a
          href="https://chat.whatsapp.com/CcKYAYwRiyk1O9zbsF0wkR?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in-up card-whatsapp w-full"
          style={{ animationDelay: "0.52s" }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-[#111111] to-[#1a1a1a] p-[1px]">
            <div className="flex items-center gap-4 rounded-[14px] bg-[#111111] px-4 py-3.5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#25d366]/10">
                <svg
                  className="w-6 h-6 text-[#25d366]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-white text-base leading-tight">
                  Grupo WhatsApp
                </h2>
                <p className="text-xs text-white/50 leading-snug">
                  Entre no grupo exclusivo!
                </p>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center cta-button">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>

        {/* Betting Houses */}
        {bettingHouses.map((house, index) => (
          <a
            key={house.name}
            href={house.link}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-in-up card-bet w-full"
            style={{ animationDelay: `${0.6 + index * 0.08}s` }}
          >
            <div className="rounded-2xl bg-gradient-to-r from-[#111111] to-[#1a1a1a] p-[1px]">
              <div className="flex items-center gap-4 rounded-[14px] bg-[#111111] px-4 py-3.5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 overflow-hidden">
                  <Image
                    src={house.logo}
                    alt={house.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-white text-base leading-tight">
                    {house.name}
                  </h2>
                  <p className="text-xs text-white/50 leading-snug">
                    {house.description}
                  </p>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e94560] flex items-center justify-center cta-button">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}

        {/* Footer */}
        <div
          className="animate-fade-in-up flex flex-col items-center gap-4 mt-4 mb-8"
          style={{ animationDelay: "1.2s" }}
        >
          <p className="animate-float text-[10px] text-white/20 uppercase tracking-[0.2em]">
            Escolha sua plataforma
          </p>
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
