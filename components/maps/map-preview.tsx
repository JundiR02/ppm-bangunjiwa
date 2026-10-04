"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import type { MapPoint } from "@/lib/dummy-data";

const MapView = dynamic(() => import("@/components/maps/map-view").then((m) => m.MapView), {
  ssr: false,
  loading: () => <Skeleton className="h-[340px] w-full rounded-2xl bg-linen" />,
});

export function MapPreview({ points }: { points: MapPoint[] }) {
  return (
    <div className="isolate">
      <MapView points={points} interactive={false} height="340px" />
    </div>
  );
}
