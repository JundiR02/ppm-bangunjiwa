import type { Metadata } from "next";
import Link from "next/link";
import { Camera, ExternalLink, MapPin } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, PanelHeader, Eyebrow } from "@/components/hub/panel";
import { UnitContacts } from "@/components/lembaga/unit-page";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import { LEMBAGA_BANGUNJIWA, PROFIL_PESANTREN, YAYASAN } from "@/lib/bangunjiwa-data";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Alamat dan kontak Yayasan Pesantren Masyarakat Bangunjiwa, PPM, MDT, TPQ Plus, dan Pra-TPQ Bangunjiwa.",
};

export default function KontakPage() {
  return (
    <>
      <PageTop crumb="Kontak" />

      <div className="max-w-2xl pb-2">
        <Eyebrow>Kontak</Eyebrow>
        <h1 className="mt-5 text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
          Hubungi Bangunjiwa
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-iron-soft">
          Setiap lembaga punya kontak sendiri. Pilih sesuai keperluan Anda.
        </p>
      </div>

      <Panel className="mt-8">
        <PanelHeader title={YAYASAN.nama} icon={MapPin} />
        <p className="mt-4 text-[14px] leading-relaxed text-iron">{PROFIL_PESANTREN.alamat}</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-iron">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROFIL_PESANTREN.alamat)}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 hover:text-pine-deep"
          >
            <MapPin className="size-3.5 text-iron-soft" /> Google Maps
          </a>
          <a href={PROFIL_PESANTREN.infoUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-pine-deep">
            <ExternalLink className="size-3.5 text-iron-soft" /> Informasi pesantren
          </a>
          <a href={PROFIL_PESANTREN.instagram.url} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-pine-deep">
            <Camera className="size-3.5 text-iron-soft" /> {PROFIL_PESANTREN.instagram.handle}
          </a>
        </div>
      </Panel>

      <ul className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {LEMBAGA_BANGUNJIWA.map((l) => (
          <li key={l.id} className="flex">
            <Panel className="flex w-full flex-col gap-4">
              <div className="flex items-center gap-3">
                <UnitLogo src={l.logo} alt="" fallback={l.singkatan} className="size-12 rounded-xl" />
                <div>
                  <h2 className="font-heading text-[15px] font-semibold text-iron-deep">
                    <Link href={l.href} className="hover:underline">
                      {l.nama}
                    </Link>
                  </h2>
                  <p className="text-[12px] text-iron-soft">{l.peran}</p>
                </div>
              </div>
              <UnitContacts lembaga={l} className="border-t border-ash/60 pt-4" />
            </Panel>
          </li>
        ))}
      </ul>
    </>
  );
}
