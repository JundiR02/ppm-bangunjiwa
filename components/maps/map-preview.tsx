"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { MapPoint } from "@/lib/dummy-data";

const MapView = dynamic(() => import("@/components/maps/map-view").then((m) => m.MapView), {
  ssr: false,
  loading: () => <Skeleton className="h-[420px] w-full rounded-2xl" />,
});

export function MapPreview({ points }: { points: MapPoint[] }) {
  return (
    <div className="relative">
      <MapView points={points} interactive={false} height="420px" />
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6">
        <Link
          href="/dana-abadi/peta-dampak"
          className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-white/95 px-5 py-2.5 text-sm font-medium text-forest-800 shadow-lg backdrop-blur transition-colors hover:bg-white dark:bg-neutral-900/95 dark:text-sage-100"
        >
          Lihat Peta Lengkap
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
