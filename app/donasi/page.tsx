import type { Metadata } from "next";
import { ChartPie, HandCoins, House, Map as MapIcon, Quote, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, PanelHeader, Eyebrow } from "@/components/hub/panel";
import { Kpi } from "@/components/hub/kpi";
import { Gauge } from "@/components/hub/gauge";
import { BarStat } from "@/components/hub/bar-stat";
import { DonationInteractive } from "@/components/donasi/donation-interactive";
import { PrototypeNotice, SampleDataBadge } from "@/components/content/sample-data";
import { formatRupiahShort } from "@/lib/format";
import {
  DONASI_STATS,
  DONASI_TARGET,
  DONASI_TERKUMPUL,
  DONASI_ALOKASI,
  DONASI_TESTIMONIAL,
} from "@/lib/bangunjiwa-data";

export const metadata: Metadata = {
  title: "Donasi",
  description:
    "Danai satu putaran asesmen komunitas di DAS Oyo & DAS Ulin bersama MRV Nexus — donasi Anda membiayai kunjungan lapangan, pengolahan data, dan pendampingan warga.",
};

const STAT_ICON: Record<string, LucideIcon> = {
  donatur: Users,
  dusun: House,
  hektar: MapIcon,
};

export default function DonasiPage() {
  const percent = Math.round((DONASI_TERKUMPUL / DONASI_TARGET) * 100);

  return (
    <>
      <PageTop crumb="Donasi" />

      <section className="grid gap-4 xl:grid-cols-12">
        <div className="flex flex-col justify-between gap-8 pb-2 xl:col-span-8 xl:pr-6">
          <div>
            <Eyebrow>Dukung Asesmen Komunitas</Eyebrow>
            <h1 className="mt-5 max-w-2xl text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
              Danai satu putaran asesmen di DAS Oyo &amp; DAS Ulin
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-iron-soft">
              Setiap donasi membiayai kunjungan lapangan, pengolahan data, dan pendampingan warga hingga hasil
              bisa dipakai mengambil keputusan.
            </p>
          </div>
          <div className="border-t border-dashed border-ash-deep/70 pt-6">
            <div className="grid grid-cols-3 gap-6">
              {DONASI_STATS.map((stat) => (
                <Kpi key={stat.id} icon={STAT_ICON[stat.id]} label={stat.label}>
                  {stat.value.toLocaleString("id-ID")}
                </Kpi>
              ))}
            </div>
            <SampleDataBadge className="mt-5" />
          </div>
        </div>

        <Panel className="flex flex-col items-center justify-between gap-4 xl:col-span-4">
          <PanelHeader title="Dana Terkumpul" icon={HandCoins} className="w-full" />
          <Gauge value={percent} label="dari target" />
          <p className="text-center text-[13px] text-iron-soft">
            <span className="font-semibold text-iron-deep">{formatRupiahShort(DONASI_TERKUMPUL)}</span> dari target{" "}
            {formatRupiahShort(DONASI_TARGET)}
          </p>
        </Panel>
      </section>

      <PrototypeNotice title="Tentang angka di halaman ini" className="mt-4">
        Donasi lewat transfer BSI atau QRIS masuk langsung ke rekening Yayasan PPM Bangunjiwa. Namun angka
        target, dana terkumpul, jumlah donatur, dan alokasi di halaman ini masih data contoh dan belum
        mencerminkan donasi yang benar-benar masuk.
      </PrototypeNotice>

      <div className="mt-4">
        <DonationInteractive />
      </div>

      <section className="mt-4 grid gap-4 xl:grid-cols-12">
        <Panel className="flex flex-col xl:col-span-5">
          <PanelHeader
            title="Ke Mana Donasi Disalurkan"
            icon={ChartPie}
            className="flex-wrap"
            action={<SampleDataBadge label="Alokasi contoh" />}
          />
          <BarStat items={DONASI_ALOKASI} className="mt-6" />
        </Panel>
        <Panel className="flex flex-col xl:col-span-7">
          <PanelHeader
            title="Dari Komunitas"
            icon={Quote}
            className="flex-wrap"
            action={<SampleDataBadge label="Testimoni contoh" />}
          />
          <blockquote className="mt-6 flex-1 text-balance font-heading text-xl font-medium leading-snug text-iron-deep sm:text-2xl">
            &ldquo;{DONASI_TESTIMONIAL.quote}&rdquo;
          </blockquote>
          <p className="mt-6 flex items-center gap-2 border-t border-ash/60 pt-4 text-[13px] text-iron-soft">
            <span className="size-1.5 rounded-full bg-pine" aria-hidden />
            {DONASI_TESTIMONIAL.who}
          </p>
        </Panel>
      </section>
    </>
  );
}
