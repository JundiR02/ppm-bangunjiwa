import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Eyebrow } from "@/components/hub/panel";
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

      <ul className="mt-10 border-t border-ash">
        {BIDANG_PROGRAM.map((bidang) => (
          <li key={bidang.id} className="grid gap-4 border-b border-ash py-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
            <div>
              <h2 className="font-heading text-2xl text-iron-deep">
                <Link href={bidang.href} className="hover:text-hijau">
                  {bidang.nama}
                </Link>
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-iron-soft">{bidang.ringkas}</p>
              <Link href={bidang.href} className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-hijau hover:underline">
                Selengkapnya <ArrowRight className="size-4" />
              </Link>
            </div>
            <ul className="flex flex-col gap-2 lg:pt-1">
              {bidang.items.map((item) => (
                <li key={item.judul} className="text-[15px] text-iron">
                  {item.href ? (
                    <Link href={item.href} className="hover:text-hijau hover:underline">
                      {item.judul}
                    </Link>
                  ) : (
                    item.judul
                  )}
                  {item.keterangan && <span className="text-iron-soft"> · {item.keterangan}</span>}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
