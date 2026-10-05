import type { Metadata } from "next";
import Link from "next/link";
import { PageTop } from "@/components/shell/page-top";
import { Eyebrow } from "@/components/hub/panel";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import { UnitContacts } from "@/components/lembaga/unit-page";
import { LEMBAGA_BANGUNJIWA } from "@/lib/bangunjiwa-data";

export const metadata: Metadata = {
  title: "PMB & PSB",
  description:
    "Penerimaan Mahasantri Baru (PMB) PPM Bangunjiwa dan Penerimaan Santri Baru (PSB) MDT, TPQ Plus, dan Pra-TPQ Bangunjiwa: biaya, seleksi, dan pengumuman.",
};

export default function PsbPage() {
  return (
    <>
      <PageTop crumb="PMB & PSB" />

      <div className="max-w-2xl">
        <Eyebrow>Pendaftaran</Eyebrow>
        <h1 className="mt-3 text-balance font-heading text-[2.4rem] leading-[1.1] text-iron-deep sm:text-5xl">
          Penerimaan mahasantri dan santri baru
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-iron-soft">
          Setiap lembaga membuka pendaftarannya sendiri. Rincian biaya, seleksi, dan pengumuman akan dimuat di halaman
          ini. Sebelum itu, silakan bertanya langsung ke kontak lembaga yang dituju.
        </p>
      </div>

      <ul className="mt-12 border-t border-ash">
        {LEMBAGA_BANGUNJIWA.map((l) => (
          <li key={l.id} id={l.id} className="grid scroll-mt-24 gap-6 border-b border-ash py-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            <div className="flex gap-5">
              <UnitLogo src={l.logo} alt={`Logo ${l.nama}`} fallback={l.singkatan} className="size-16 rounded-full border-0 bg-linen" />
              <div>
                <p className="text-[13px] font-semibold text-emas-deep">
                  {l.penerimaan.singkatan} · {l.untuk}
                </p>
                <h2 className="mt-1 font-heading text-2xl text-iron-deep">{l.penerimaan.nama}</h2>
                <p className="mt-1 text-[15px] text-iron">
                  <Link href={l.href} className="hover:text-hijau hover:underline">
                    {l.nama}
                  </Link>
                </p>
                <p className="mt-3 text-[14px] text-iron-soft">Biaya, seleksi, dan pengumuman segera diumumkan.</p>
              </div>
            </div>
            <div>
              <p className="text-[14px] font-medium text-iron-deep">Tanya pendaftaran</p>
              <UnitContacts lembaga={l} className="mt-3" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
