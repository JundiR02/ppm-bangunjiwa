import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
  CalendarRange,
  Compass,
  Database,
  ExternalLink,
  Landmark,
  Layers,
  Map as MapIcon,
  MapPin,
  Target,
  UserRound,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, PanelHeader, Eyebrow } from "@/components/hub/panel";
import { Kpi } from "@/components/hub/kpi";
import { SectionHeading } from "@/components/hub/section-heading";
import { CurriculumTable } from "@/components/tentang/curriculum-table";
import { EcosystemFlow } from "@/components/tentang/ecosystem-flow";
import { ActivityGallery } from "@/components/tentang/activity-gallery";
import {
  KURIKULUM_ROWS,
  KURIKULUM_SEMESTERS,
  MISI_BANGUNJIWA,
  PEMINATAN_RISET,
  PROFIL_PESANTREN,
  RISET_PILLARS,
} from "@/lib/bangunjiwa-data";

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
  title: "Tentang Kami",
  description:
    "PPM Riset Ekologi Bangunjiwa — pesantren mahasiswa yang mencetak SDM riset ekologi untuk ekosistem MRV Nexus, memadukan pendidikan keislaman dengan IT, pemetaan, dan pengabdian masyarakat.",
};

const PILLAR_ICON: Record<string, LucideIcon> = {
  "it-data": Database,
  "pemetaan-survei": MapIcon,
  "sdm-enumerator": Users,
};

export default function TentangPage() {
  return (
    <>
      <PageTop crumb="Tentang" />

      <section className="grid gap-4 xl:grid-cols-12">
        <div className="flex flex-col justify-between gap-8 pb-2 xl:col-span-7 xl:pr-6">
          <div>
            <Eyebrow>Pondok Pesantren Riset Ekologi</Eyebrow>
            <h1 className="mt-5 text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
              Rumah kedua bagi mahasantri, dapur SDM riset ekologi
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-iron-soft">
              Bangunjiwa mendampingi mahasantri menempuh pendidikan keislaman sambil kuliah, sekaligus membina
              mereka menjadi tenaga IT, pemetaan, dan pengelola SDM survei untuk ekosistem MRV Nexus.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 border-t border-dashed border-ash-deep/70 pt-6 sm:grid-cols-4">
            <Kpi icon={CalendarRange} label="Semester">{KURIKULUM_SEMESTERS.length}</Kpi>
            <Kpi icon={BookOpen} label="Mata pelajaran">{KURIKULUM_ROWS.length}</Kpi>
            <Kpi icon={Layers} label="Pilar SDM">{RISET_PILLARS.length}</Kpi>
            <Kpi icon={Compass} label="Peminatan riset">{PEMINATAN_RISET.length}</Kpi>
          </div>
        </div>
        <figure className="relative min-h-[320px] overflow-hidden rounded-[22px] border border-white/80 shadow-panel xl:col-span-5">
          <Image
            src="/images/bangunjiwa/kajian-quran.jpg"
            alt="Kajian Al-Qur'an bersama santri Bangunjiwa"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1280px) 40vw, 100vw"
          />
          <figcaption className="absolute bottom-3 left-3 rounded-full bg-frost/90 px-3 py-1 text-[11px] font-medium text-iron-deep backdrop-blur">
            Kajian Al-Qur&apos;an bersama mahasantri
          </figcaption>
        </figure>
      </section>

      <section id="visi-misi" className="mt-4 grid gap-4 xl:grid-cols-12">
        <Panel className="xl:col-span-7">
          <PanelHeader title="Tentang Kami" icon={Landmark} />
          <div className="mt-4 flex flex-col gap-3 text-[14px] leading-relaxed text-iron-soft">
            <p>
              PPM Riset Ekologi Bangunjiwa berawal sebagai Pesantren Mahasiswa yang menaungi mahasantri untuk
              menyeimbangkan keilmuan duniawi dan ukhrowi. Kini, Bangunjiwa berkembang menjadi pusat pendidikan
              yang juga mencetak sumber daya manusia untuk mengelola ekosistem riset ekologi MRV Nexus.
            </p>
            <p>
              Di sini, mahasantri tidak hanya belajar tahsin, tahfidz, dan kitab kuning, tetapi juga dibina
              menguasai IT, pemetaan (GIS), dan pengelolaan SDM survei — sambil tetap menjalankan peran mereka
              sebagai mahasiswa aktif di kampus masing-masing.
            </p>
            <p>
              Bangunjiwa menjadi jembatan bagi mahasantri untuk melaksanakan pengabdian masyarakat secara nyata:
              turun ke DAS dan kawasan hutan sosial sebagai enumerator, pengelola data, dan pemetaan bersama MRV
              Nexus, menerapkan semangat ta&apos;awanu &apos;ala al-birri wat taqwa dalam kehidupan sehari-hari.
            </p>
          </div>
        </Panel>
        <div
          className="flex flex-col justify-between gap-8 rounded-[22px] bg-iron p-6 text-frost shadow-panel sm:p-7 xl:col-span-5"
          style={{ backgroundImage: "radial-gradient(circle at 100% 0%, rgb(138 147 127 / 0.45), transparent 55%)" }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-frost/60">Visi</span>
          <h2 className="text-balance font-heading text-xl font-normal leading-snug sm:text-2xl">
            Menjadi lembaga pendidikan keislaman berbasis riset ekologi dan pengabdian masyarakat, sekaligus
            sumber SDM bagi ekosistem MRV Nexus
          </h2>
          <p className="flex items-center gap-2 border-t border-frost/15 pt-4 text-[13px] text-frost/70">
            <span className="size-1.5 rounded-full bg-pine" aria-hidden />
            Ilmu duniawi dan ukhrowi, berjalan seimbang
          </p>
        </div>
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
          </div>
        </Panel>
      </section>

      <Panel className="mt-4">
        <PanelHeader title="Misi" icon={Target} />
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {MISI_BANGUNJIWA.map((misi, i) => (
            <li key={misi} className="rounded-2xl border border-white bg-frost p-4">
              <span className="font-heading text-sm font-semibold text-pine-deep">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-[13px] leading-relaxed text-iron">{misi}</p>
            </li>
          ))}
        </ol>
      </Panel>

      <section id="program-riset">
        <SectionHeading
          eyebrow="Program Riset Ekologi"
          title="Tiga pilar SDM untuk ekosistem MRV Nexus"
          description="Selain pendidikan keislaman, mahasantri dibina lintas tiga bidang agar siap mengelola MRV Nexus — platform monitoring, reporting, dan verification untuk DAS dan hutan sosial."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {RISET_PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICON[pillar.id];
            return (
              <Panel key={pillar.id} className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-pine-soft text-pine-deep">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-heading text-xs text-ash-deep">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-medium text-iron-deep">{pillar.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-iron-soft">{pillar.description}</p>
                </div>
              </Panel>
            );
          })}
        </div>
        <Panel className="mt-4">
          <PanelHeader title="Peminatan Riset — Semester IV & V" icon={Compass} />
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {PEMINATAN_RISET.map((item) => (
              <div key={item.tag} className="rounded-2xl bg-linen p-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-pine-deep">{item.tag}</span>
                <p className="mt-1.5 text-[13px] leading-relaxed text-iron">{item.description}</p>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      <section id="kurikulum">
        <SectionHeading
          eyebrow="Kurikulum"
          title="Kurikulum Pesantren Riset Ekologi Bangunjiwa"
          description="Disusun bertahap dari semester I hingga V, memadukan Al-Qur'an, ilmu alat, dan fikih dengan peminatan riset ekologi serta pengabdian masyarakat."
        />
        <Panel className="px-3 sm:px-4">
          <CurriculumTable />
          <p className="mt-4 px-1 text-xs text-iron-soft">
            Ditetapkan oleh Direktur Pendidikan PPM Riset Ekologi Bangunjiwa, M. Hamid Lufafi, S.Pd.
          </p>
        </Panel>
      </section>

      <section id="ekosistem">
        <SectionHeading
          eyebrow="Ekosistem Terintegrasi"
          title="Satu ekosistem, tiga simpul yang saling menghidupi"
          description="Bangunjiwa mencetak SDM, MRV Nexus mengoperasikan data lapangan, dan donasi publik mendanai keberlangsungan keduanya."
        />
        <EcosystemFlow />
      </section>

      <section id="kegiatan">
        <SectionHeading
          eyebrow="Kegiatan & Fasilitas"
          title="Keseharian mahasantri Bangunjiwa"
          description="Dari kajian malam, tahsin bersama, hingga ruang tinggal yang nyaman untuk belajar dan beristirahat."
        />
        <ActivityGallery />
      </section>
    </>
  );
}
