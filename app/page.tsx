import { Sprout, TreePine } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, PanelHeader, CircleLink, Eyebrow } from "@/components/hub/panel";
import { QuotePanel } from "@/components/home/quote-panel";
import { HubKpis, FeaturedProgress } from "@/components/home/hub-live";
import { RunningPrograms } from "@/components/programs/running-programs";
import { THREE_PILLARS } from "@/lib/dummy-data";

export default function Home() {
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
            <HubKpis />
          </div>
        </div>
        <FeaturedProgress className="flex flex-col xl:col-span-4" />
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-12">
        <Panel className="xl:col-span-8">
          <PanelHeader title="Program Berjalan" icon={Sprout} action={<CircleLink href="/program" label="Semua program" />} />
          <RunningPrograms limit={4} className="mt-5" />
        </Panel>
        <QuotePanel className="xl:col-span-4" />
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
    </>
  );
}
