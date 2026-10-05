import type { Metadata } from "next";
import Image from "next/image";
import { PageTop } from "@/components/shell/page-top";
import { Eyebrow } from "@/components/hub/panel";
import { SectionHeading } from "@/components/hub/section-heading";
import { CurriculumTable } from "@/components/tentang/curriculum-table";
import { EcosystemFlow } from "@/components/tentang/ecosystem-flow";
import { ActivityGallery } from "@/components/tentang/activity-gallery";
import { ComingSoonGrid } from "@/components/lembaga/coming-soon-grid";
import { PENDIDIKAN_PARENT, UnitContacts, unitOutline } from "@/components/lembaga/unit-page";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import { getLembaga, MISI_BANGUNJIWA, PEMINATAN_RISET, PPM_PROGRAM, RISET_PILLARS } from "@/lib/bangunjiwa-data";

export const metadata: Metadata = {
  title: "PPM Bangunjiwa",
  description:
    "PPM Bangunjiwa — pesantren mahasiswa yang mencetak SDM riset ekologi untuk ekosistem MRV Nexus, memadukan pendidikan keislaman dengan IT, pemetaan, dan pengabdian masyarakat.",
};

const PPM = getLembaga("ppm");
/** Outline sections this page already covers with real content. */
const PPM_SUDAH_ADA = ["Tentang PPM", "Visi & Misi", "Program Unggulan", "Kurikulum"];

export default function PpmPage() {
  return (
    <>
      <PageTop parent={PENDIDIKAN_PARENT} crumb="PPM" />

      <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <div>
          <UnitLogo src={PPM.logo} alt={`Logo ${PPM.nama}`} className="size-24 rounded-full border-0 bg-linen" />
          <Eyebrow className="mt-6">Pesantren Mahasiswa · {PPM.untuk}</Eyebrow>
          <h1 className="mt-2 font-heading text-[2.4rem] leading-[1.1] text-iron-deep sm:text-5xl">{PPM.nama}</h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-iron-soft">
            Bangunjiwa mendampingi mahasantri menempuh pendidikan keislaman sambil kuliah, sekaligus membina mereka
            menjadi tenaga IT, pemetaan, dan pengelola SDM survei untuk ekosistem MRV Nexus.
          </p>
        </div>
        <figure>
          <Image
            src="/images/bangunjiwa/kajian-quran.jpg"
            alt="Kajian Al-Qur'an bersama santri Bangunjiwa"
            width={496}
            height={348}
            priority
            className="w-full max-w-[496px] rounded-lg object-cover"
          />
          <figcaption className="mt-2 text-[13px] text-iron-soft">Kajian Al-Qur&apos;an bersama mahasantri</figcaption>
        </figure>
      </section>

      <section id="visi-misi" className="mt-20 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="font-heading text-3xl text-iron-deep">Tentang PPM</h2>
          <div className="mt-5 flex flex-col gap-4 text-[16px] leading-relaxed text-iron">
            <p>
              PPM Riset Ekologi Bangunjiwa berawal sebagai Pesantren Mahasiswa yang menaungi mahasantri untuk
              menyeimbangkan keilmuan duniawi dan ukhrowi. Kini, Bangunjiwa berkembang menjadi pusat pendidikan yang
              juga mencetak sumber daya manusia untuk mengelola ekosistem riset ekologi MRV Nexus.
            </p>
            <p>
              Di sini, mahasantri tidak hanya belajar tahsin, tahfidz, dan kitab kuning, tetapi juga dibina menguasai
              IT, pemetaan (GIS), dan pengelolaan SDM survei, sambil tetap menjalankan peran mereka sebagai mahasiswa
              aktif di kampus masing-masing.
            </p>
            <p>
              Bangunjiwa menjadi jembatan bagi mahasantri untuk melaksanakan pengabdian masyarakat secara nyata: turun
              ke DAS dan kawasan hutan sosial sebagai enumerator, pengelola data, dan pemetaan bersama MRV Nexus,
              menerapkan semangat ta&apos;awanu &apos;ala al-birri wat taqwa dalam kehidupan sehari-hari.
            </p>
          </div>
        </div>
        <figure className="self-start border-l-4 border-hijau pl-6">
          <figcaption className="text-[13px] font-semibold text-emas-deep">Visi</figcaption>
          <blockquote className="mt-2 font-heading text-2xl leading-snug text-iron-deep">
            Menjadi lembaga pendidikan keislaman berbasis riset ekologi dan pengabdian masyarakat, sekaligus sumber SDM
            bagi ekosistem MRV Nexus.
          </blockquote>
        </figure>
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-2xl text-iron-deep">Misi</h2>
        <ol className="mt-6 grid list-decimal gap-x-12 gap-y-4 pl-5 marker:font-heading marker:text-hijau md:grid-cols-2">
          {MISI_BANGUNJIWA.map((misi) => (
            <li key={misi} className="pl-2 text-[15px] leading-relaxed text-iron">
              {misi}
            </li>
          ))}
        </ol>
      </section>

      <section id="program-unggulan">
        <SectionHeading
          eyebrow="Program Unggulan"
          title="Tiga program PPM Bangunjiwa"
          description="Selain pesantren bagi mahasiswa dan santri umum, PPM menyelenggarakan diklat bagi guru serta wali santri dan pendamping belajar."
        />
        <ul className="grid gap-x-8 gap-y-8 md:grid-cols-3">
          {PPM_PROGRAM.map((program) => (
            <li key={program.judul} className="border-t-2 border-hijau pt-5">
              <h3 className="font-heading text-xl text-iron-deep">{program.judul}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-iron-soft">{program.keterangan}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="program-riset">
        <SectionHeading
          eyebrow="Program Riset Ekologi"
          title="Tiga pilar SDM untuk ekosistem MRV Nexus"
          description="Selain pendidikan keislaman, mahasantri dibina lintas tiga bidang agar siap mengelola MRV Nexus, platform monitoring, reporting, dan verification untuk DAS dan hutan sosial."
        />
        <ul className="grid gap-x-8 gap-y-8 md:grid-cols-3">
          {RISET_PILLARS.map((pillar) => (
            <li key={pillar.id} className="border-t-2 border-hijau pt-5">
              <h3 className="font-heading text-xl text-iron-deep">{pillar.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-iron-soft">{pillar.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <h3 className="font-heading text-xl text-iron-deep">Peminatan riset, semester IV dan V</h3>
          <dl className="mt-4 border-t border-ash">
            {PEMINATAN_RISET.map((item) => (
              <div key={item.tag} className="grid gap-1 border-b border-ash py-3 sm:grid-cols-[160px_1fr]">
                <dt className="text-[15px] font-medium text-hijau">{item.tag}</dt>
                <dd className="text-[15px] text-iron">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="kurikulum">
        <SectionHeading
          eyebrow="Kurikulum"
          title="Kurikulum Pesantren Riset Ekologi Bangunjiwa"
          description="Disusun bertahap dari semester I hingga V, memadukan Al-Qur'an, ilmu alat, dan fikih dengan peminatan riset ekologi serta pengabdian masyarakat."
        />
        <CurriculumTable />
        <p className="mt-4 text-[13px] text-iron-soft">
          Ditetapkan oleh Direktur Pendidikan PPM Riset Ekologi Bangunjiwa, M. Hamid Lufafi, S.Pd.
        </p>
      </section>

      <section id="ekosistem">
        <SectionHeading
          eyebrow="Ekosistem Terintegrasi"
          title="Bangunjiwa, MRV Nexus, dan donasi publik"
          description="Bangunjiwa mencetak SDM, MRV Nexus mengoperasikan data lapangan, dan donasi publik mendanai keberlangsungan keduanya."
        />
        <EcosystemFlow />
      </section>

      <section id="kegiatan">
        <SectionHeading
          eyebrow="Kegiatan & Fasilitas"
          title="Keseharian mahasantri Bangunjiwa"
          description="Dari kajian malam, tahsin bersama, hingga ruang tinggal untuk belajar dan beristirahat."
        />
        <ActivityGallery />
      </section>

      <ComingSoonGrid items={unitOutline(PPM, PPM_SUDAH_ADA)} title="Informasi PPM yang sedang disiapkan" />

      <section id="kontak" className="mt-16 border-t border-ash pt-8">
        <h2 className="font-heading text-xl text-iron-deep">Kontak PPM</h2>
        <UnitContacts lembaga={PPM} className="mt-4" />
      </section>
    </>
  );
}
