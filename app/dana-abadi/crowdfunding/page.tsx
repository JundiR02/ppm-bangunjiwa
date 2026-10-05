import type { Metadata } from "next";
import { Suspense } from "react";
import { PageTop } from "@/components/shell/page-top";
import { ProgramView } from "@/components/programs/program-view";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Crowdfunding",
  description:
    "Kampanye crowdfunding Dana Abadi Pesantren Hijau — dukung pendidikan dan program Yayasan Pesantren Masyarakat Bangunjiwa.",
};

export default function CrowdfundingPage() {
  return (
    <>
      <PageTop parent={{ label: "Dana Abadi Pesantren Hijau", href: "/dana-abadi" }} crumb="Crowdfunding" />
      <Suspense fallback={<Skeleton className="h-64 w-full rounded-xl bg-linen" />}>
        <ProgramView />
      </Suspense>
    </>
  );
}
