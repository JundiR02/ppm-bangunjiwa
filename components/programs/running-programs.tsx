"use client";

import Link from "next/link";
import { CircleAlert, Sprout } from "lucide-react";
import { usePublishedPrograms } from "@/components/programs/use-programs";
import { ProgramCard } from "@/components/programs/program-card";
import { EmptyState } from "@/components/hub/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function RunningPrograms({ limit, columns = "md:grid-cols-2", className }: { limit?: number; columns?: string; className?: string }) {
  const state = usePublishedPrograms();

  if (state.status === "loading") {
    return (
      <div className={cn("grid gap-3", columns, className)}>
        {Array.from({ length: 2 }, (_, i) => (
          <Skeleton key={i} className="h-40 rounded-2xl bg-linen" />
        ))}
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <EmptyState icon={CircleAlert} title="Program gagal dimuat" className={className}>
        Periksa koneksi internet Anda, lalu muat ulang halaman.
      </EmptyState>
    );
  }

  const running = state.programs.filter((p) => p.status === "berjalan");
  if (running.length === 0) {
    return (
      <EmptyState icon={Sprout} title="Belum ada program yang berjalan" className={className}>
        Program akan tampil di sini setelah ditambahkan oleh admin yayasan.
      </EmptyState>
    );
  }

  const shown = limit ? running.slice(0, limit) : running;
  return (
    <div className={className}>
      <div className={cn("grid gap-3", columns)}>
        {shown.map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>
      {limit && running.length > limit && (
        <Link href="/program" className="mt-4 inline-block text-[13px] font-medium text-iron underline-offset-4 hover:underline">
          Lihat semua {running.length} program
        </Link>
      )}
    </div>
  );
}
