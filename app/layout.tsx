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
    default: "PPM Riset Ekologi Bangunjiwa",
    template: "%s — PPM Riset Ekologi Bangunjiwa",
  },
  description:
    "Portal digital PPM Riset Ekologi Bangunjiwa — pesantren mahasiswa yang memadukan pendidikan keislaman, riset ekologi, dan pengabdian masyarakat.",
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
