import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { QuoteBand } from "@/components/home/quote-panel";
import { RunningCampaignsSection } from "@/components/home/running-campaigns-section";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import { BIDANG_PROGRAM, LEMBAGA_BANGUNJIWA, PROFIL_PESANTREN } from "@/lib/bangunjiwa-data";

export default function Home() {
  return (
    <>
      <PageTop />

      <section className="grid items-center gap-12 pt-6 pb-4 lg:grid-cols-[1.05fr_1fr] lg:pt-12">
        <div>
          <p className="text-[14px] font-semibold text-emas-deep">Bangunjiwa, Kasihan, Bantul</p>
          <h1 className="mt-4 text-balance font-heading text-[2.6rem] leading-[1.08] text-iron-deep sm:text-[3.4rem]">
            Yayasan Pesantren Masyarakat Bangunjiwa
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-iron-soft">
            Mengaji dan belajar ilmu agama untuk anak usia PAUD hingga mahasiswa, ditambah pendidikan vokasi dan
            unit usaha yayasan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/pendidikan"
              className="inline-flex items-center gap-2 rounded-md bg-hijau px-5 py-3 text-[15px] font-medium text-frost transition-colors hover:bg-hijau-deep"
            >
              Lihat lembaga pendidikan <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/psb"
              className="inline-flex items-center rounded-md border border-ash-deep px-5 py-3 text-[15px] font-medium text-iron-deep transition-colors hover:border-hijau hover:text-hijau"
            >
              Pendaftaran santri baru
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] pb-10 sm:pb-16">
          <Image
            src="/images/bangunjiwa/kajian-quran.jpg"
            alt="Santri mengaji Al-Qur'an bersama ustadz"
            width={496}
            height={348}
            priority
            className="w-[88%] rounded-lg object-cover"
          />
          <Image
            src="/images/bangunjiwa/santriwati-menulis.jpg"
            alt="Santriwati menulis pelajaran"
            width={496}
            height={348}
            className="absolute right-0 bottom-0 w-[52%] rounded-lg border-4 border-frost object-cover"
          />
        </div>
      </section>

      <section aria-label="Lembaga pendidikan" className="full-bleed mt-16 bg-linen py-10">
        <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-ash">
          {LEMBAGA_BANGUNJIWA.map((l) => (
            <li key={l.id} className="px-2 lg:px-6">
              <Link href={l.href} className="group flex items-center gap-4">
                <UnitLogo src={l.logo} alt="" fallback={l.singkatan} className="size-14 rounded-full border-0 bg-frost" />
                <span>
                  <span className="block font-heading text-[17px] text-iron-deep group-hover:text-hijau">{l.nama}</span>
                  <span className="block text-[13px] text-iron-soft">{l.untuk}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-24 grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="font-heading text-3xl leading-tight text-iron-deep sm:text-4xl">Program yayasan</h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-iron-soft">
            Empat bidang yang dijalankan yayasan, dari pendidikan sampai pendanaan.
          </p>
          <Link href="/program" className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-hijau hover:underline">
            Semua program <ArrowRight className="size-4" />
          </Link>
        </div>
        <ul className="border-t border-ash">
          {BIDANG_PROGRAM.map((bidang) => (
            <li key={bidang.id} className="border-b border-ash">
              <Link href={bidang.href} className="group grid gap-2 py-6 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
                <span className="font-heading text-xl text-iron-deep group-hover:text-hijau">{bidang.nama}</span>
                <span className="text-[14px] leading-relaxed text-iron-soft">
                  {bidang.items.map((item) => item.judul).join(" · ")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <QuoteBand />

      <RunningCampaignsSection />

      <section className="mt-24 grid items-center gap-10 lg:grid-cols-2">
        <Image
          src="/images/bangunjiwa/fasad-asrama.jpg"
          alt="Bangunan asrama Bangunjiwa"
          width={484}
          height={405}
          className="w-full max-w-[480px] rounded-lg object-cover"
        />
        <div>
          <h2 className="font-heading text-3xl leading-tight text-iron-deep sm:text-4xl">Berkunjung ke Bangunjiwa</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-iron-soft">{PROFIL_PESANTREN.alamat}</p>
          <p className="mt-2 text-[15px] text-iron-soft">Pengasuh: {PROFIL_PESANTREN.pengasuh.join(" dan ")}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-[15px] font-medium">
            <Link href="/kontak" className="text-hijau hover:underline">
              Kontak setiap lembaga
            </Link>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROFIL_PESANTREN.alamat)}`}
              target="_blank"
              rel="noopener"
              className="text-hijau hover:underline"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
