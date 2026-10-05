import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, Eyebrow } from "@/components/hub/panel";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import { PROGRAM_PARENT } from "@/components/lembaga/bidang-page";
import { getBidang, LEMBAGA_BANGUNJIWA } from "@/lib/bangunjiwa-data";

const BIDANG = getBidang("dirosah-islamiyah");

export const metadata: Metadata = {
  title: BIDANG.nama,
  description:
    "Pendidikan Dirosah Islamiyah Bangunjiwa: PPM untuk mahasiswa & umum, MDT (usia SD–remaja), TPQ Plus (usia TK), dan Pra-TPQ (usia PAUD).",
};

export default function PendidikanPage() {
  return (
    <>
      <PageTop parent={PROGRAM_PARENT} crumb={BIDANG.nama} />

      <div className="max-w-2xl pb-2">
        <Eyebrow>{BIDANG.nama}</Eyebrow>
        <h1 className="mt-5 text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
          Mau belajar di Bangunjiwa? Pilih sesuai usia dan kebutuhan
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-iron-soft">{BIDANG.ringkas}</p>
      </div>

      <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {LEMBAGA_BANGUNJIWA.map((l) => (
          <li key={l.id} className="flex">
            <Panel className="flex w-full flex-col gap-5">
              <div className="flex items-start justify-between gap-3">
                <UnitLogo src={l.logo} alt={`Logo ${l.nama}`} fallback={l.singkatan} className="size-16" />
                <span className="rounded-full bg-pine-soft px-2.5 py-1 text-[11px] font-medium text-pine-deep">{l.untuk}</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-pine-deep">{l.peran}</p>
                <h2 className="mt-1 font-heading text-xl font-medium text-iron-deep">{l.nama}</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-iron-soft">{l.ringkas}</p>
              </div>
              <Link
                href={l.href}
                className="mt-auto inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-iron px-4 text-[13px] font-medium text-frost shadow-panel transition-colors hover:bg-iron-deep"
              >
                Pelajari <ArrowUpRight className="size-4" />
              </Link>
            </Panel>
          </li>
        ))}
      </ul>
    </>
  );
}
