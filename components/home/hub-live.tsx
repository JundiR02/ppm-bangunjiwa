"use client";

import Link from "next/link";
import { CalendarClock, Gauge as GaugeIcon, HandCoins, Sprout, Users } from "lucide-react";
import { usePublishedPrograms } from "@/components/programs/use-programs";
import { Kpi } from "@/components/hub/kpi";
import { Gauge } from "@/components/hub/gauge";
import { Panel, PanelHeader, CircleLink } from "@/components/hub/panel";
import { EmptyState } from "@/components/hub/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { campaignHref, progressPercent } from "@/lib/programs";
import { formatDate, formatRupiahShort } from "@/lib/format";

export function HubKpis() {
  const state = usePublishedPrograms();

  if (state.status === "loading") return <Skeleton className="h-20 w-full rounded-2xl bg-linen" />;

  const running = state.programs.filter((p) => p.status === "berjalan");
  if (state.status === "error" || state.programs.length === 0) {
    return (
      <p className="text-[13px] text-iron-soft">
        {state.status === "error"
          ? "Ringkasan program gagal dimuat."
          : "Ringkasan dana dan donatur akan tampil di sini setelah admin yayasan menambahkan program."}
      </p>
    );
  }

  const collected = state.programs.reduce((sum, p) => sum + (p.collected ?? 0), 0);
  const donors = state.programs.reduce((sum, p) => sum + (p.donorCount ?? 0), 0);
  const latest = state.programs
    .map((p) => p.figuresUpdatedAt)
    .filter((d): d is Date => d != null)
    .sort((a, b) => b.getTime() - a.getTime())[0];

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
        <Kpi icon={Sprout} label="Program berjalan">{running.length}</Kpi>
        <Kpi icon={HandCoins} label="Dana terkumpul">{formatRupiahShort(collected)}</Kpi>
        <Kpi icon={Users} label="Donatur">{donors.toLocaleString("id-ID")}</Kpi>
      </div>
      {latest && (
        <p className="mt-5 flex items-center gap-1.5 text-xs text-iron-soft">
          <CalendarClock className="size-3.5" /> Dicatat admin yayasan, diperbarui {formatDate(latest)}
        </p>
      )}
    </div>
  );
}

export function FeaturedProgress({ className }: { className?: string }) {
  const state = usePublishedPrograms();
  const featured = state.programs
    .filter((p) => p.status === "berjalan" && progressPercent(p) != null)
    .sort((a, b) => (b.figuresUpdatedAt?.getTime() ?? 0) - (a.figuresUpdatedAt?.getTime() ?? 0))[0];

  return (
    <Panel className={className}>
      <PanelHeader
        title={featured ? "Progres Program" : "Progres Donasi"}
        icon={HandCoins}
        action={featured ? <CircleLink href={campaignHref(featured.slug)} label={`Buka ${featured.title}`} /> : undefined}
      />
      {state.status === "loading" ? (
        <Skeleton className="mt-5 h-52 w-full rounded-2xl bg-linen" />
      ) : featured ? (
        <div className="mt-2 flex flex-col items-center gap-3">
          <Gauge value={progressPercent(featured) ?? 0} label="terkumpul" />
          <Link href={campaignHref(featured.slug)} className="text-center font-heading text-[15px] font-semibold text-iron-deep hover:underline">
            {featured.title}
          </Link>
          <p className="text-[13px] text-iron-soft">
            <span className="font-semibold text-iron-deep">{formatRupiahShort(featured.collected ?? 0)}</span> dari target{" "}
            {formatRupiahShort(featured.target ?? 0)}
          </p>
        </div>
      ) : (
        <EmptyState icon={GaugeIcon} title="Belum ada data progres" className="mt-5">
          Progres tampil setelah admin mengisi target dan dana terkumpul pada program yang berjalan.
        </EmptyState>
      )}
    </Panel>
  );
}
