import type { Metadata } from "next";
import Link from "next/link";
import { PageTop } from "@/components/shell/page-top";
import { Eyebrow } from "@/components/hub/panel";
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

      <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <Eyebrow>Kontak</Eyebrow>
          <h1 className="mt-3 font-heading text-[2.4rem] leading-[1.1] text-iron-deep sm:text-5xl">Hubungi Bangunjiwa</h1>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-iron-soft">
            Setiap lembaga punya kontak sendiri. Pilih sesuai keperluan Anda.
          </p>
        </div>
        <div className="lg:pt-2">
          <h2 className="font-heading text-xl text-iron-deep">{YAYASAN.nama}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-iron">{PROFIL_PESANTREN.alamat}</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-medium">
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
              {PROFIL_PESANTREN.instagram.handle}
            </a>
          </div>
        </div>
      </section>

      <ul className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">
        {LEMBAGA_BANGUNJIWA.map((l) => (
          <li key={l.id} className="border-t-2 border-hijau pt-6">
            <div className="flex items-center gap-4">
              <UnitLogo src={l.logo} alt="" fallback={l.singkatan} className="size-14 rounded-full border-0 bg-linen" />
              <div>
                <h2 className="font-heading text-xl text-iron-deep">
                  <Link href={l.href} className="hover:text-hijau">
                    {l.nama}
                  </Link>
                </h2>
                <p className="text-[14px] text-iron-soft">{l.peran}</p>
              </div>
            </div>
            <UnitContacts lembaga={l} className="mt-5" />
          </li>
        ))}
      </ul>
    </>
  );
}
