"use client";

import Link from "next/link";
import { ProgramCard } from "@/components/programs/program-card";
import { usePublishedPrograms } from "@/components/programs/use-programs";
import { CROWDFUNDING_PATH, isAcceptingDonations } from "@/lib/programs";

/** Home-page campaigns band; renders nothing until there is at least one running campaign. */
export function RunningCampaignsSection() {
  const state = usePublishedPrograms();
  const running = state.programs.filter((p) => isAcceptingDonations(p));
  if (state.status !== "ready" || running.length === 0) return null;

  return (
    <section className="mt-24">
      <div className="flex items-end justify-between gap-4 border-b border-ash pb-4">
        <h2 className="font-heading text-3xl text-iron-deep">Kampanye yang sedang berjalan</h2>
        <Link href={CROWDFUNDING_PATH} className="shrink-0 text-[14px] font-medium text-hijau hover:underline">
          Lihat semua
        </Link>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {running.slice(0, 3).map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>
    </section>
  );
}
