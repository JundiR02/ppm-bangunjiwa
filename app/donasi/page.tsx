import type { Metadata } from "next";
import { Sprout } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, PanelHeader, CircleLink, Eyebrow } from "@/components/hub/panel";
import { DonationInteractive } from "@/components/donasi/donation-interactive";
import { InfoNote } from "@/components/content/info-note";
import { RunningPrograms } from "@/components/programs/running-programs";

export const metadata: Metadata = {
  title: "Donasi",
  description:
    "Dukung program PPM Riset Ekologi Bangunjiwa. Donasi masuk langsung ke rekening Yayasan PPM Bangunjiwa melalui transfer BSI atau QRIS.",
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
              Dukung program PPM Riset Ekologi Bangunjiwa
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-iron-soft">
              Donasi masuk langsung ke rekening Yayasan PPM Bangunjiwa melalui transfer BSI atau QRIS, untuk
              mendukung pendidikan, riset ekologi, dan pengabdian masyarakat.
            </p>
          </div>
          <InfoNote title="Ingin mendukung program tertentu?">
            Buka halaman programnya, lalu tulis nama program di berita transfer agar yayasan dapat mencatat
            donasi Anda untuk program tersebut.
          </InfoNote>
        </div>
        <Panel className="xl:col-span-5">
          <PanelHeader title="Program Berjalan" icon={Sprout} action={<CircleLink href="/program" label="Semua program" />} />
          <RunningPrograms limit={2} columns="grid-cols-1" className="mt-5" />
        </Panel>
      </section>

      <div className="mt-4">
        <DonationInteractive />
      </div>
    </>
  );
}
