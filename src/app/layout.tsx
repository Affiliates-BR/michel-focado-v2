import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Michel Focado | Links",
  description: "Acesse todos os links e ofertas exclusivas do Michel Focado",
  openGraph: {
    title: "Michel Focado | Links",
    description: "Acesse todos os links e ofertas exclusivas do Michel Focado",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-black text-white font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
