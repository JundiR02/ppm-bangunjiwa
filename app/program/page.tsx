import type { Metadata } from "next";
import { Suspense } from "react";
import { PageTop } from "@/components/shell/page-top";
import { ProgramView } from "@/components/programs/program-view";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Program",
  description:
    "Program PPM Riset Ekologi Bangunjiwa — pendidikan, riset ekologi, dana abadi, dan ekonomi sirkuler yang dapat Anda dukung.",
};

export default function ProgramPage() {
  return (
    <>
      <PageTop crumb="Program" />
      <Suspense fallback={<Skeleton className="h-64 w-full rounded-[22px] bg-linen" />}>
        <ProgramView />
      </Suspense>
    </>
  );
}
