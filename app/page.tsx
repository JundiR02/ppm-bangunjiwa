import Image from "next/image";
import Link from "next/link";
import { PageTop } from "@/components/shell/page-top";
import { KitabHadits } from "@/components/home/kitab-hadits";
import { JenjangTangga } from "@/components/home/jenjang-tangga";
import { RunningCampaignsSection } from "@/components/home/running-campaigns-section";
import { BIDANG_PROGRAM, PROFIL_PESANTREN } from "@/lib/bangunjiwa-data";

export default function Home() {
  return (
    <>
      <PageTop />

      <section className="grid items-center gap-10 pt-2 pb-4 md:grid-cols-[1.05fr_1fr] md:gap-8 lg:gap-12 lg:pt-12">
        <div>
          <h1 className="text-balance font-heading text-[2.4rem] leading-[1.08] text-iron-deep sm:text-[3rem] md:text-[2.6rem] lg:text-[3.4rem]">
            Yayasan Pesantren Masyarakat Bangunjiwa
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-iron-soft">
            Mengaji dan belajar ilmu agama untuk anak usia PAUD hingga mahasiswa di Bangunjiwa, Kasihan, Bantul,
            ditambah pendidikan vokasi dan unit usaha yayasan.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/pendidikan"
              className="inline-flex items-center rounded-md bg-hijau px-5 py-3 text-[15px] font-medium text-frost transition-colors hover:bg-hijau-deep"
            >
              Lihat lembaga pendidikan
            </Link>
            <Link
              href="/psb"
              className="inline-flex items-center rounded-md border border-garis px-5 py-3 text-[15px] font-medium text-iron-deep transition-colors hover:border-hijau hover:text-hijau"
            >
              Pendaftaran santri baru
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] pb-10 sm:pb-16 md:mx-0">
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

      <JenjangTangga />

      <section className="mt-16 grid gap-8 sm:mt-24 lg:grid-cols-[1fr_2fr] lg:gap-10">
        <div>
          <h2 className="font-heading text-3xl leading-tight text-iron-deep sm:text-4xl">Program yayasan</h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-iron-soft">
            Empat bidang yang dijalankan yayasan, dari pendidikan sampai pendanaan.
          </p>
          <Link href="/program" className="mt-4 inline-flex min-h-11 items-center gap-2 text-[15px] font-medium text-hijau hover:underline">
            Lihat keempat bidang program
          </Link>
        </div>
        <ul className="border-t border-ash">
          {BIDANG_PROGRAM.map((bidang) => (
            <li key={bidang.id} className="border-b border-ash">
              <Link href={bidang.href} className="group grid gap-2 py-6 sm:grid-cols-[1fr_1.2fr] sm:gap-8">
                <span className="font-heading text-xl text-iron-deep group-hover:text-hijau">{bidang.nama}</span>
                <span className="text-[14px] leading-relaxed text-iron-soft">
                  {bidang.items.map((item) => item.judul).join(", ")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <KitabHadits />

      <RunningCampaignsSection />

      <section className="mt-16 grid items-center gap-8 sm:mt-24 md:grid-cols-2 lg:gap-10">
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
          <div className="mt-4 flex flex-wrap gap-x-6 text-[15px] font-medium">
            <Link href="/kontak" className="inline-flex min-h-11 items-center text-hijau hover:underline">
              Kontak setiap lembaga
            </Link>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROFIL_PESANTREN.alamat)}`}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-11 items-center text-hijau hover:underline"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
