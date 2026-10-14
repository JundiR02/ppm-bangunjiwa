import type { Metadata } from "next";
import { Source_Serif_4, Inter, Amiri } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/shell/app-shell";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Amiri follows the Bulaq naskh used in printed kitab kuning, so Arabic reads like the texts santri study.
const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bangunjiwa | Yayasan Pesantren Masyarakat",
    template: "%s | Bangunjiwa",
  },
  description:
    "Portal digital Yayasan Pesantren Masyarakat Bangunjiwa: pendidikan dirosah islamiyah, pendidikan vokasi, kewirausahaan, dan Dana Abadi Pesantren Hijau.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${sourceSerif.variable} ${inter.variable} ${amiri.variable} antialiased`}
    >
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
