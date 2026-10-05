import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Eyebrow } from "@/components/hub/panel";
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

      <div className="max-w-2xl">
        <Eyebrow>{BIDANG.nama}</Eyebrow>
        <h1 className="mt-3 text-balance font-heading text-[2.4rem] leading-[1.1] text-iron-deep sm:text-5xl">
          Pilih lembaga sesuai usia
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-iron-soft">{BIDANG.ringkas}</p>
      </div>

      <ul className="mt-12 border-t border-ash">
        {LEMBAGA_BANGUNJIWA.map((l) => (
          <li key={l.id} className="border-b border-ash">
            <Link href={l.href} className="group grid items-center gap-5 py-7 sm:grid-cols-[auto_1fr_auto] sm:gap-8">
              <UnitLogo src={l.logo} alt={`Logo ${l.nama}`} fallback={l.singkatan} className="size-20 rounded-full border-0 bg-linen" />
              <div>
                <p className="text-[13px] font-semibold text-emas-deep">{l.untuk}</p>
                <h2 className="mt-1 font-heading text-2xl text-iron-deep group-hover:text-hijau">{l.nama}</h2>
                <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-iron-soft">{l.ringkas}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-[14px] font-medium text-hijau">
                Selengkapnya <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
