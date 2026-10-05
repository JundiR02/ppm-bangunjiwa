import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { campaignHref, progressPercent, typeLabel, type Program } from "@/lib/programs";
import { formatRupiahShort } from "@/lib/format";
import { cn } from "@/lib/utils";

export function ProgressBar({ percent, className }: { percent: number; className?: string }) {
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-linen", className)} role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-pine" style={{ width: `${percent}%` }} />
    </div>
  );
}

export function ProgramChips({ program }: { program: Program }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="rounded-full border border-white bg-linen px-2.5 py-0.5 text-[11px] font-medium text-iron">
        {typeLabel(program.type)}
      </span>
      <span
        className={cn(
          "rounded-full px-2.5 py-0.5 text-[11px] font-medium",
          program.status === "berjalan" ? "bg-pine-soft text-pine-deep" : "bg-muted text-iron-soft"
        )}
      >
        {program.status === "berjalan" ? "Berjalan" : program.status === "selesai" ? "Selesai" : "Draft"}
      </span>
    </div>
  );
}

export function ProgramCard({ program, className }: { program: Program; className?: string }) {
  const percent = progressPercent(program);
  return (
    <Link
      href={campaignHref(program.slug)}
      className={cn(
        "group flex h-full flex-col gap-4 rounded-2xl border border-white bg-frost p-5 transition-colors hover:border-ash-deep",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <ProgramChips program={program} />
        <ArrowUpRight className="size-4 shrink-0 text-iron-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <div>
        <h3 className="font-heading text-[16px] font-semibold text-iron-deep">{program.title}</h3>
        {program.summary && <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-iron-soft">{program.summary}</p>}
        {program.location && (
          <p className="mt-2 flex items-center gap-1 text-xs text-iron-soft">
            <MapPin className="size-3" /> {program.location}
          </p>
        )}
      </div>
      {percent != null && (
        <div className="mt-auto">
          <ProgressBar percent={percent} />
          <p className="mt-2 flex justify-between text-xs text-iron-soft">
            <span>
              <span className="font-semibold text-iron-deep">{formatRupiahShort(program.collected ?? 0)}</span> dari{" "}
              {formatRupiahShort(program.target ?? 0)}
            </span>
            <span className="tabular-nums">{percent}%</span>
          </p>
        </div>
      )}
    </Link>
  );
}
