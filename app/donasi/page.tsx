import type { Metadata } from "next";
import { Sprout } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, PanelHeader, CircleLink, Eyebrow } from "@/components/hub/panel";
import { DonationInteractive } from "@/components/donasi/donation-interactive";
import { InfoNote } from "@/components/content/info-note";
import { RunningPrograms } from "@/components/programs/running-programs";
import { CROWDFUNDING_PATH } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Donasi",
  description:
    "Dukung Yayasan Pesantren Masyarakat Bangunjiwa. Donasi masuk langsung ke rekening Yayasan PPM Bangunjiwa melalui transfer BSI atau QRIS.",
};

export default function DonasiPage() {
  return (
    <>
      <PageTop crumb="Donasi" />

      <section className="grid gap-4 xl:grid-cols-12">
        <div className="flex flex-col gap-6 pb-2 xl:col-span-7 xl:pr-6">
          <div>
            <Eyebrow>Donasi</Eyebrow>
            <h1 className="mt-5 max-w-2xl text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
              Dukung pendidikan dan program Bangunjiwa
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-iron-soft">
              Donasi masuk langsung ke rekening Yayasan PPM Bangunjiwa melalui transfer BSI atau QRIS, untuk
              mendukung pendidikan dan program Yayasan Pesantren Masyarakat Bangunjiwa.
            </p>
          </div>
          <InfoNote title="Ingin mendukung kampanye tertentu?">
            Buka halaman kampanyenya, lalu tulis nama kampanye di berita transfer agar yayasan dapat mencatat
            donasi Anda untuk kampanye tersebut.
          </InfoNote>
        </div>
        <Panel className="xl:col-span-5">
          <PanelHeader title="Kampanye Berjalan" icon={Sprout} action={<CircleLink href={CROWDFUNDING_PATH} label="Semua kampanye" />} />
          <RunningPrograms limit={2} columns="grid-cols-1" className="mt-5" />
        </Panel>
      </section>

      <div className="mt-4">
        <DonationInteractive />
      </div>
    </>
  );
}
