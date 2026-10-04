import { HandCoins, MapPinned, TreePine } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, PanelHeader, CircleLink, Eyebrow } from "@/components/hub/panel";
import { Kpi } from "@/components/hub/kpi";
import { Gauge } from "@/components/hub/gauge";
import { BarStat } from "@/components/hub/bar-stat";
import { SampleDataBadge } from "@/components/content/sample-data";
import { ProgramsPanel } from "@/components/home/programs-panel";
import { QuotePanel } from "@/components/home/quote-panel";
import { ActivityTable } from "@/components/home/activity-table";
import { TestimonialPanel } from "@/components/home/testimonial-panel";
import { MapPreview } from "@/components/maps/map-preview";
import { IMPACT_METRICS, THREE_PILLARS, TESTIMONIALS, MAP_POINTS } from "@/lib/dummy-data";
import { DONASI_ALOKASI, DONASI_TARGET, DONASI_TERKUMPUL } from "@/lib/bangunjiwa-data";
import { formatMetric, formatRupiahShort } from "@/lib/format";

export default function Home() {
  const percent = Math.round((DONASI_TERKUMPUL / DONASI_TARGET) * 100);

  return (
    <>
      <PageTop />

      <section className="grid gap-4 xl:grid-cols-12">
        <div className="flex flex-col justify-between gap-8 pb-2 xl:col-span-8 xl:pr-6">
          <div>
            <Eyebrow>Pesantren Hijau · Riset Ekologi</Eyebrow>
            <h1 className="mt-5 max-w-2xl text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
              Merawat bumi dengan ilmu, iman, dan komunitas
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-iron-soft">
              Portal digital PPM Riset Ekologi Bangunjiwa — pendidikan, riset ekologi, dan pengabdian
              masyarakat dalam satu tempat.
            </p>
          </div>
          <div className="border-t border-dashed border-ash-deep/70 pt-6">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {IMPACT_METRICS.map((metric) => (
                <Kpi key={metric.id} icon={metric.icon} label={metric.label}>
                  {formatMetric(metric.value, metric.unit)}
                  {metric.unit === "KK" && <span className="ml-1 text-xl text-iron-soft">KK</span>}
                </Kpi>
              ))}
            </div>
            <SampleDataBadge className="mt-5" />
          </div>
        </div>

        <Panel className="flex flex-col items-center justify-between gap-4 xl:col-span-4">
          <PanelHeader
            title="Progres Donasi Riset"
            icon={HandCoins}
            className="w-full"
            action={<CircleLink href="/donasi" label="Buka halaman donasi" />}
          />
          <Gauge value={percent} label="terkumpul" />
          <div className="w-full text-center">
            <p className="text-[13px] text-iron-soft">
              <span className="font-semibold text-iron-deep">{formatRupiahShort(DONASI_TERKUMPUL)}</span> dari target{" "}
              {formatRupiahShort(DONASI_TARGET)}
            </p>
            <SampleDataBadge className="mt-3" />
          </div>
        </Panel>
      </section>

      <section className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-12">
        <ProgramsPanel className="xl:col-span-4" />
        <QuotePanel className="xl:col-span-4" />
        <Panel className="flex flex-col md:col-span-2 xl:col-span-4">
          <PanelHeader title="Alokasi Donasi" icon={HandCoins} />
          <p className="mt-1.5 text-[13px] text-iron-soft">Rencana penyaluran dana asesmen komunitas.</p>
          <BarStat items={DONASI_ALOKASI} className="mt-auto pt-5 xl:h-72" />
          <SampleDataBadge className="mt-4 self-start" label="Alokasi contoh" />
        </Panel>
      </section>

      <section className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {THREE_PILLARS.map((pillar, i) => (
          <Panel key={pillar.id} className="flex flex-col gap-6 p-5 sm:p-5">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-iron-soft">{pillar.subtitle}</p>
              <span className="font-heading text-xs text-ash-deep">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div>
              <h3 className="font-heading text-xl font-medium text-iron-deep">{pillar.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-iron-soft">{pillar.description}</p>
            </div>
          </Panel>
        ))}
        <Panel className="flex flex-col gap-6 p-5 sm:p-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-iron-soft">Profil</p>
          <div>
            <h3 className="font-heading text-xl font-medium text-iron-deep">Kenali Bangunjiwa</h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-iron-soft">Visi-misi, kurikulum, dan program riset ekologi.</p>
          </div>
          <div className="mt-auto flex items-center justify-between border-t border-ash/60 pt-3">
            <span className="text-[13px] font-medium text-iron">Tentang kami</span>
            <CircleLink href="/tentang" label="Tentang kami" />
          </div>
        </Panel>
        <Panel className="flex flex-col gap-6 bg-linen/70 p-5 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-iron-soft">Wakaf</p>
            <span className="rounded-full bg-frost px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-iron-soft">
              Segera hadir
            </span>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-heading text-xl font-medium text-iron-deep">
              <TreePine className="size-5 text-pine-deep" strokeWidth={1.75} /> Wakaf Pohon
            </h3>
            <p className="mt-1.5 text-[13px] leading-relaxed text-iron-soft">
              Sedang disiapkan. Mekanisme pengelolaan dan pelaporannya diumumkan setelah siap.
            </p>
          </div>
        </Panel>
      </section>

      <section className="mt-4">
        <ActivityTable />
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-12">
        <Panel className="xl:col-span-7">
          <PanelHeader
            title="Peta Dampak"
            icon={MapPinned}
            className="flex-wrap"
            action={<SampleDataBadge label="Titik contoh" />}
          />
          <div className="mt-4">
            <MapPreview points={MAP_POINTS} />
          </div>
        </Panel>
        <TestimonialPanel items={TESTIMONIALS} className="xl:col-span-5" />
      </section>
    </>
  );
}
