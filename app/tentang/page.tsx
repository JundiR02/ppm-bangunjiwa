import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTop } from "@/components/shell/page-top";
import { Eyebrow } from "@/components/hub/panel";
import { OrgStructure } from "@/components/lembaga/org-structure";
import { ComingSoonGrid } from "@/components/lembaga/coming-soon-grid";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import { LEMBAGA_BANGUNJIWA, PROFIL_PESANTREN, YAYASAN } from "@/lib/bangunjiwa-data";

export const metadata: Metadata = {
  title: "Tentang Yayasan",
  description:
    "Yayasan Pesantren Masyarakat Bangunjiwa di Kasihan, Bantul: pendidikan dirosah islamiyah (PPM, MDT, TPQ Plus, Pra-TPQ), pendidikan vokasi, kewirausahaan, dan Dana Abadi Pesantren Hijau.",
};

export default function TentangPage() {
  return (
    <>
      <PageTop crumb="Tentang" />

      <section className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Eyebrow>Tentang Yayasan</Eyebrow>
          <h1 className="mt-3 text-balance font-heading text-[2.4rem] leading-[1.1] text-iron-deep sm:text-5xl">{YAYASAN.nama}</h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-iron-soft">{YAYASAN.deskripsi}</p>
        </div>
        <Image
          src={YAYASAN.logo}
          alt={`Logo ${YAYASAN.nama}`}
          width={512}
          height={512}
          priority
          className="mx-auto size-56 sm:size-72"
        />
      </section>

      <section aria-label="Lembaga pendidikan" className="mt-14 border-y border-ash py-6">
        <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {LEMBAGA_BANGUNJIWA.map((l) => (
            <li key={l.id}>
              <Link href={l.href} className="group flex items-center gap-3">
                <UnitLogo src={l.logo} alt="" fallback={l.singkatan} className="size-11 rounded-full border-0" />
                <span className="leading-tight">
                  <span className="block text-[15px] font-medium text-iron-deep group-hover:text-hijau">{l.nama}</span>
                  <span className="block text-[13px] text-iron-soft">{l.untuk}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl text-iron-deep">Pengasuh</h2>
          <ul className="mt-4 flex flex-col gap-2 text-[16px] text-iron">
            {PROFIL_PESANTREN.pengasuh.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-2xl text-iron-deep">Alamat</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-iron">{PROFIL_PESANTREN.alamat}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-medium">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROFIL_PESANTREN.alamat)}`}
              target="_blank"
              rel="noopener"
              className="text-hijau hover:underline"
            >
              Google Maps
            </a>
            <a href={PROFIL_PESANTREN.infoUrl} target="_blank" rel="noopener" className="text-hijau hover:underline">
              Informasi pesantren
            </a>
            <a href={PROFIL_PESANTREN.instagram.url} target="_blank" rel="noopener" className="text-hijau hover:underline">
              Instagram {PROFIL_PESANTREN.instagram.handle}
            </a>
          </div>
        </div>
      </section>

      <section id="struktur" className="mt-20">
        <h2 className="font-heading text-3xl text-iron-deep sm:text-4xl">Struktur organisasi</h2>
        <p className="mt-3 mb-10 max-w-2xl text-[16px] leading-relaxed text-iron-soft">
          Yayasan menjalankan empat bidang program. Lembaga pendidikan berada di bawah bidang Pendidikan Dirosah
          Islamiyah.
        </p>
        <OrgStructure />
      </section>

      <ComingSoonGrid items={YAYASAN.segera} title="Profil yayasan yang sedang disiapkan" />
    </>
  );
}
