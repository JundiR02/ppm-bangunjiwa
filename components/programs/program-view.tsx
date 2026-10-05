"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, CalendarClock, ChartPie, CircleAlert, FileText, HandCoins, MapPin, Quote, SearchX, Sprout, Users } from "lucide-react";
import { usePublishedPrograms } from "@/components/programs/use-programs";
import { ProgramCard, ProgramChips } from "@/components/programs/program-card";
import { DonationInteractive } from "@/components/donasi/donation-interactive";
import { Panel, PanelHeader, Eyebrow } from "@/components/hub/panel";
import { Kpi } from "@/components/hub/kpi";
import { Gauge } from "@/components/hub/gauge";
import { BarStat, type BarTone } from "@/components/hub/bar-stat";
import { EmptyState } from "@/components/hub/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { CROWDFUNDING_PATH, getProgram, progressPercent, PROGRAM_TYPES, type Program, type ProgramType } from "@/lib/programs";
import { formatDate, formatRupiahShort } from "@/lib/format";
import { cn } from "@/lib/utils";

const TONES: BarTone[] = ["pine", "iron", "ash"];
const SITE = "Bangunjiwa";

export function ProgramView() {
  const id = useSearchParams().get("id");
  return id ? <ProgramDetail key={id} slug={id} /> : <ProgramList />;
}

function ProgramList() {
  const state = usePublishedPrograms();
  const [filter, setFilter] = React.useState<ProgramType | "semua">("semua");
  const typesPresent = PROGRAM_TYPES.filter((t) => state.programs.some((p) => p.type === t.id));
  const shown = filter === "semua" ? state.programs : state.programs.filter((p) => p.type === filter);

  return (
    <>
      <Eyebrow>Crowdfunding · Dana Abadi Pesantren Hijau</Eyebrow>
      <h1 className="mt-5 max-w-2xl text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
        Kampanye yang dapat Anda dukung
      </h1>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-iron-soft">
        Kampanye penggalangan dana untuk pendidikan dan program Yayasan Pesantren Masyarakat Bangunjiwa.
      </p>

      <Panel className="mt-8">
        {typesPresent.length > 1 && (
          <div className="mb-5 flex flex-wrap gap-1.5" role="group" aria-label="Saring jenis program">
            {[{ id: "semua" as const, label: "Semua" }, ...typesPresent].map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={filter === t.id}
                onClick={() => setFilter(t.id)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors",
                  filter === t.id ? "bg-iron text-frost" : "bg-linen text-iron-soft hover:text-iron"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        )}
        {state.status === "loading" ? (
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }, (_, i) => (
              <Skeleton key={i} className="h-44 rounded-2xl bg-linen" />
            ))}
          </div>
        ) : state.status === "error" ? (
          <EmptyState icon={CircleAlert} title="Program gagal dimuat">
            Periksa koneksi internet Anda, lalu muat ulang halaman.
          </EmptyState>
        ) : shown.length === 0 ? (
          <EmptyState icon={Sprout} title="Belum ada program yang dipublikasikan">
            Program akan tampil di sini setelah ditambahkan oleh admin yayasan.
          </EmptyState>
        ) : (
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {shown.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        )}
      </Panel>
    </>
  );
}

type DetailState = { status: "loading" } | { status: "missing" } | { status: "error" } | { status: "ready"; program: Program };

function ProgramDetail({ slug }: { slug: string }) {
  const [state, setState] = React.useState<DetailState>({ status: "loading" });

  React.useEffect(() => {
    let alive = true;
    getProgram(slug).then(
      (program) => {
        if (!alive) return;
        if (!program || program.status === "draft") return setState({ status: "missing" });
        setState({ status: "ready", program });
        document.title = `${program.title} — ${SITE}`;
      },
      () => alive && setState({ status: "error" })
    );
    return () => {
      alive = false;
    };
  }, [slug]);

  if (state.status === "loading") return <Skeleton className="h-96 w-full rounded-[22px] bg-linen" />;
  if (state.status !== "ready") {
    return (
      <Panel>
        <EmptyState icon={state.status === "error" ? CircleAlert : SearchX} title={state.status === "error" ? "Program gagal dimuat" : "Program tidak ditemukan"}>
          {state.status === "error" ? "Periksa koneksi internet Anda, lalu muat ulang halaman." : "Program ini mungkin sudah tidak dipublikasikan."}
          <Link href={CROWDFUNDING_PATH} className="mt-3 block font-medium text-iron underline-offset-4 hover:underline">
            Lihat semua kampanye
          </Link>
        </EmptyState>
      </Panel>
    );
  }

  const p = state.program;
  const percent = progressPercent(p);
  const hasFigures = p.target != null || p.collected != null || p.donorCount != null;

  return (
    <>
      <Link href={CROWDFUNDING_PATH} className="inline-flex items-center gap-1.5 text-[13px] text-iron-soft hover:text-iron">
        <ArrowLeft className="size-3.5" /> Semua kampanye
      </Link>

      <section className="mt-5 grid gap-4 xl:grid-cols-12">
        <div className="flex flex-col justify-between gap-8 pb-2 xl:col-span-8 xl:pr-6">
          <div>
            <ProgramChips program={p} />
            <h1 className="mt-4 max-w-2xl text-balance font-heading text-[2.2rem] font-normal leading-[1.1] tracking-[-0.02em] text-iron-deep sm:text-[2.75rem]">
              {p.title}
            </h1>
            {p.summary && <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-iron-soft">{p.summary}</p>}
            {p.location && (
              <p className="mt-3 flex items-center gap-1.5 text-[13px] text-iron-soft">
                <MapPin className="size-3.5" /> {p.location}
              </p>
            )}
          </div>
          {hasFigures && (
            <div className="border-t border-dashed border-ash-deep/70 pt-6">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                {p.collected != null && <Kpi icon={HandCoins} label="Dana terkumpul">{formatRupiahShort(p.collected)}</Kpi>}
                {p.target != null && <Kpi icon={ChartPie} label="Target">{formatRupiahShort(p.target)}</Kpi>}
                {p.donorCount != null && <Kpi icon={Users} label="Donatur">{p.donorCount.toLocaleString("id-ID")}</Kpi>}
              </div>
              {p.figuresUpdatedAt && (
                <p className="mt-5 flex items-center gap-1.5 text-xs text-iron-soft">
                  <CalendarClock className="size-3.5" /> Dicatat admin yayasan, diperbarui {formatDate(p.figuresUpdatedAt)}
                </p>
              )}
            </div>
          )}
        </div>
        {percent != null && (
          <Panel className="flex flex-col items-center gap-3 xl:col-span-4">
            <PanelHeader title="Progres Dana" icon={HandCoins} className="w-full" />
            <Gauge value={percent} label="dari target" />
          </Panel>
        )}
      </section>

      {(p.description || p.allocation.length > 0) && (
        <section className="mt-4 grid gap-4 xl:grid-cols-12">
          {p.description && (
            <Panel className={p.allocation.length > 0 ? "xl:col-span-7" : "xl:col-span-12"}>
              <PanelHeader title="Tentang Program" icon={FileText} />
              <div className="mt-4 whitespace-pre-line text-[14px] leading-relaxed text-iron">{p.description}</div>
            </Panel>
          )}
          {p.allocation.length > 0 && (
            <Panel className={cn("flex flex-col", p.description ? "xl:col-span-5" : "xl:col-span-12")}>
              <PanelHeader title="Rencana Penyaluran Dana" icon={ChartPie} />
              <BarStat
                className="mt-6"
                items={p.allocation.map((a, i) => ({ id: `${i}`, label: a.label, percent: a.percent, tone: TONES[i % TONES.length] }))}
              />
            </Panel>
          )}
        </section>
      )}

      {p.testimonials.length > 0 && (
        <section className="mt-4 grid gap-4 md:grid-cols-2">
          {p.testimonials.map((t, i) => (
            <Panel key={i} className="flex flex-col">
              <PanelHeader title="Suara Komunitas" icon={Quote} />
              <blockquote className="mt-5 flex-1 text-balance font-heading text-lg font-medium leading-snug text-iron-deep">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              {t.who && (
                <p className="mt-5 flex items-center gap-2 border-t border-ash/60 pt-4 text-[13px] text-iron-soft">
                  <span className="size-1.5 rounded-full bg-pine" aria-hidden />
                  {t.who}
                </p>
              )}
            </Panel>
          ))}
        </section>
      )}

      {p.status === "berjalan" && (
        <div className="mt-4">
          <DonationInteractive programTitle={p.title} />
        </div>
      )}
    </>
  );
}
