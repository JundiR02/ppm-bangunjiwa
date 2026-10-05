import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera, ExternalLink, MapPin, UserRound } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, PanelHeader, Eyebrow } from "@/components/hub/panel";
import { SectionHeading } from "@/components/hub/section-heading";
import { OrgStructure } from "@/components/lembaga/org-structure";
import { ComingSoonGrid } from "@/components/lembaga/coming-soon-grid";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import { LEMBAGA_BANGUNJIWA, PROFIL_PESANTREN, YAYASAN } from "@/lib/bangunjiwa-data";

function initials(name: string) {
  return name
    .split(",")[0]
    .split(" ")
    .filter((w) => w && !w.endsWith("."))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export const metadata: Metadata = {
  title: "Tentang Yayasan",
  description:
    "Yayasan Pesantren Masyarakat Bangunjiwa di Kasihan, Bantul: pendidikan dirosah islamiyah (PPM, MDT, TPQ Plus, Pra-TPQ), pendidikan vokasi, kewirausahaan, dan Dana Abadi Pesantren Hijau.",
};

export default function TentangPage() {
  return (
    <>
      <PageTop crumb="Tentang" />

      <section className="grid gap-4 xl:grid-cols-12">
        <div className="flex flex-col justify-between gap-8 pb-2 xl:col-span-7 xl:pr-6">
          <div>
            <Eyebrow>Tentang Yayasan</Eyebrow>
            <h1 className="mt-5 text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
              {YAYASAN.nama}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-iron-soft">{YAYASAN.deskripsi}</p>
          </div>
          <ul className="grid grid-cols-2 gap-3 border-t border-dashed border-ash-deep/70 pt-6 sm:grid-cols-4">
            {LEMBAGA_BANGUNJIWA.map((l) => (
              <li key={l.id}>
                <Link href={l.href} className="flex items-center gap-3 hover:opacity-80">
                <UnitLogo src={l.logo} alt="" fallback={l.singkatan} className="size-10 rounded-xl" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[13px] font-semibold text-iron-deep">{l.nama}</span>
                  <span className="text-[11.5px] text-iron-soft">{l.untuk}</span>
                </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <figure className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[22px] border border-white/80 bg-[#f7f7f7] shadow-panel xl:col-span-5">
          <Image
            src={YAYASAN.logo}
            alt={`Logo ${YAYASAN.nama}`}
            width={512}
            height={512}
            priority
            className="size-[280px] object-contain"
          />
        </figure>
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-12">
        <Panel className="xl:col-span-7">
          <PanelHeader title="Pengasuh" icon={UserRound} />
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {PROFIL_PESANTREN.pengasuh.map((name) => (
              <li key={name} className="flex items-center gap-3 rounded-2xl border border-white bg-frost p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-pine-soft font-heading text-sm font-semibold text-pine-deep">
                  {initials(name)}
                </span>
                <span className="text-[14px] font-medium leading-snug text-iron-deep">{name}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel className="flex flex-col xl:col-span-5">
          <PanelHeader title="Alamat & Informasi" icon={MapPin} />
          <p className="mt-4 text-[14px] leading-relaxed text-iron">{PROFIL_PESANTREN.alamat}</p>
          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROFIL_PESANTREN.alamat)}`}
              target="_blank"
              rel="noopener"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-white bg-frost px-4 text-[13px] font-medium text-iron shadow-panel transition-colors hover:bg-linen"
            >
              <MapPin className="size-4" /> Buka di Google Maps
            </a>
            <a
              href={PROFIL_PESANTREN.infoUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-iron px-4 text-[13px] font-medium text-frost shadow-panel transition-colors hover:bg-iron-deep"
            >
              <ExternalLink className="size-4" /> Informasi pesantren
            </a>
            <a
              href={PROFIL_PESANTREN.instagram.url}
              target="_blank"
              rel="noopener"
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-white bg-frost px-4 text-[13px] font-medium text-iron shadow-panel transition-colors hover:bg-linen"
            >
              <Camera className="size-4" /> Instagram {PROFIL_PESANTREN.instagram.handle}
            </a>
          </div>
        </Panel>
      </section>

      <section id="struktur">
        <SectionHeading
          eyebrow="Struktur Organisasi"
          title="Satu yayasan, empat bidang program"
          description="Pendidikan dirosah islamiyah dari usia PAUD hingga mahasiswa, pendidikan vokasi, kewirausahaan, dan Dana Abadi Pesantren Hijau."
        />
        <OrgStructure />
      </section>

      <section id="segera">
        <SectionHeading
          eyebrow="Sedang Disiapkan"
          title="Profil yayasan selengkapnya"
          description="Bagian berikut akan diisi setelah informasi resminya tersedia."
        />
        <ComingSoonGrid items={YAYASAN.segera} />
      </section>
    </>
  );
}
