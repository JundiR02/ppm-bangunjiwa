import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, Eyebrow } from "@/components/hub/panel";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import { UnitContacts } from "@/components/lembaga/unit-page";
import { LEMBAGA_BANGUNJIWA } from "@/lib/bangunjiwa-data";

export const metadata: Metadata = {
  title: "PMB & PSB",
  description:
    "Penerimaan Mahasantri Baru (PMB) PPM Bangunjiwa dan Penerimaan Santri Baru (PSB) MDT, TPQ Plus, dan Pra-TPQ Bangunjiwa: biaya, seleksi, dan pengumuman.",
};

const TAHAP = [
  { judul: "Biaya", keterangan: "Rincian biaya pendaftaran dan pendidikan." },
  { judul: "Seleksi", keterangan: "Persyaratan dan alur seleksi." },
  { judul: "Pengumuman", keterangan: "Hasil seleksi dan jadwal daftar ulang." },
];

export default function PsbPage() {
  return (
    <>
      <PageTop crumb="PMB & PSB" />

      <div className="max-w-2xl pb-2">
        <Eyebrow>Pendaftaran</Eyebrow>
        <h1 className="mt-5 text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
          Penerimaan mahasantri & santri baru
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-iron-soft">
          Setiap lembaga membuka pendaftarannya sendiri. Informasi biaya, seleksi, dan pengumuman akan diumumkan
          di halaman ini; untuk sementara, tanyakan langsung ke kontak lembaga.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {LEMBAGA_BANGUNJIWA.map((l) => (
          <Panel key={l.id} id={l.id} className="scroll-mt-24 grid gap-6 xl:grid-cols-12">
            <div className="flex flex-col gap-4 xl:col-span-7">
              <div className="flex items-center gap-3">
                <UnitLogo src={l.logo} alt={`Logo ${l.nama}`} fallback={l.singkatan} className="size-12 rounded-xl" />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-pine-deep">
                    {l.penerimaan.singkatan} · {l.untuk}
                  </p>
                  <h2 className="font-heading text-lg font-medium text-iron-deep">
                    {l.penerimaan.nama} —{" "}
                    <Link href={l.href} className="hover:underline">
                      {l.nama}
                    </Link>
                  </h2>
                </div>
              </div>
              <ul className="grid gap-3 sm:grid-cols-3">
                {TAHAP.map((t) => (
                  <li key={t.judul} className="flex flex-col gap-1 rounded-2xl border border-dashed border-ash-deep/70 bg-linen/50 p-3.5">
                    <span className="flex items-center justify-between gap-2">
                      <span className="font-heading text-[14px] font-medium text-iron-deep">{t.judul}</span>
                      <span className="rounded-full bg-frost px-1.5 py-0.5 text-[9.5px] font-medium uppercase tracking-wide text-iron-soft">
                        Segera
                      </span>
                    </span>
                    <span className="text-[12px] leading-relaxed text-iron-soft">{t.keterangan}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="xl:col-span-5 xl:border-l xl:border-ash/60 xl:pl-6">
              <p className="flex items-center gap-2 text-[13px] font-semibold text-iron-deep">
                <Phone className="size-3.5 text-iron-soft" /> Tanya pendaftaran
              </p>
              <UnitContacts lembaga={l} className="mt-3" />
            </div>
          </Panel>
        ))}
      </div>
    </>
  );
}
