import type { Metadata } from "next";
import { PageTop } from "@/components/shell/page-top";
import { Eyebrow } from "@/components/hub/panel";
import { DonationInteractive } from "@/components/donasi/donation-interactive";
import { InfoNote } from "@/components/content/info-note";
import { RunningCampaignsSection } from "@/components/home/running-campaigns-section";

export const metadata: Metadata = {
  title: "Donasi",
  description:
    "Dukung Yayasan Pesantren Masyarakat Bangunjiwa. Donasi masuk langsung ke rekening Yayasan PPM Bangunjiwa melalui transfer BSI atau QRIS.",
};

export default function DonasiPage() {
  return (
    <>
      <PageTop crumb="Donasi" />

      <section className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <Eyebrow>Donasi</Eyebrow>
          <h1 className="mt-3 max-w-2xl text-balance font-heading text-[2.4rem] leading-[1.1] text-iron-deep sm:text-5xl">
            Dukung pendidikan dan program Bangunjiwa
          </h1>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-iron-soft">
            Donasi masuk langsung ke rekening Yayasan PPM Bangunjiwa melalui transfer BSI atau QRIS, untuk mendukung
            pendidikan dan program Yayasan Pesantren Masyarakat Bangunjiwa.
          </p>
        </div>
        <InfoNote title="Ingin mendukung kampanye tertentu?" className="self-end">
          Buka halaman kampanyenya, lalu tulis nama kampanye di berita transfer agar yayasan dapat mencatat donasi Anda
          untuk kampanye tersebut.
        </InfoNote>
      </section>

      <div className="mt-10">
        <DonationInteractive />
      </div>

      <RunningCampaignsSection />
    </>
  );
}
