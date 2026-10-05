import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, Eyebrow } from "@/components/hub/panel";
import { LegacyCampaignRedirect } from "@/components/programs/legacy-campaign-redirect";
import { BIDANG_PROGRAM } from "@/lib/bangunjiwa-data";

export const metadata: Metadata = {
  title: "Program",
  description:
    "Program Yayasan Pesantren Masyarakat Bangunjiwa: Pendidikan Dirosah Islamiyah, Pendidikan Vokasi, Kewirausahaan & BUMP, dan Dana Abadi Pesantren Hijau.",
};

export default function ProgramPage() {
  return (
    <>
      <Suspense fallback={null}>
        <LegacyCampaignRedirect />
      </Suspense>
      <PageTop crumb="Program" />

      <div className="max-w-2xl pb-2">
        <Eyebrow>Program Yayasan</Eyebrow>
        <h1 className="mt-5 text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
          Empat bidang program Bangunjiwa
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-iron-soft">
          Dari pendidikan keislaman usia PAUD hingga mahasiswa, pendidikan vokasi, unit usaha, sampai pendanaan
          berkelanjutan.
        </p>
      </div>

      <ol className="mt-8 grid gap-4 md:grid-cols-2">
        {BIDANG_PROGRAM.map((bidang, i) => (
          <li key={bidang.id} className="flex">
            <Panel className="flex w-full flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-semibold text-pine-deep">{String(i + 1).padStart(2, "0")}</span>
                <Link
                  href={bidang.href}
                  aria-label={`Buka ${bidang.nama}`}
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white bg-frost text-iron shadow-panel transition-colors hover:bg-iron hover:text-frost"
                >
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
              <div>
                <h2 className="font-heading text-xl font-medium text-iron-deep">
                  <Link href={bidang.href} className="hover:underline">
                    {bidang.nama}
                  </Link>
                </h2>
                <p className="mt-1.5 text-[13px] leading-relaxed text-iron-soft">{bidang.ringkas}</p>
              </div>
              <ul className="mt-auto flex flex-col gap-1.5 border-t border-ash/60 pt-4">
                {bidang.items.map((item) => (
                  <li key={item.judul} className="flex items-center gap-2 text-[13px] text-iron">
                    <span className="size-1.5 shrink-0 rounded-full bg-pine" aria-hidden />
                    {item.href ? (
                      <Link href={item.href} className="hover:text-pine-deep hover:underline">
                        {item.judul}
                      </Link>
                    ) : (
                      item.judul
                    )}
                  </li>
                ))}
              </ul>
            </Panel>
          </li>
        ))}
      </ol>
    </>
  );
}
