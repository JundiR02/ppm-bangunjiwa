import type { Metadata } from "next";
import { Manrope, Inter, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/shell/app-shell";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bangunjiwa — Yayasan Pesantren Masyarakat",
    template: "%s — Bangunjiwa",
  },
  description:
    "Portal digital Yayasan Pesantren Masyarakat Bangunjiwa — pendidikan dirosah islamiyah, pendidikan vokasi, kewirausahaan, dan Dana Abadi Pesantren Hijau.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${inter.variable} ${notoNaskhArabic.variable} antialiased`}
    >
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
