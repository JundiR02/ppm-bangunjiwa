import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { AboutSplit } from "@/components/tentang/about-split";
import { VisionMission } from "@/components/tentang/vision-mission";
import { ResearchPillars } from "@/components/tentang/research-pillars";
import { CurriculumTable } from "@/components/tentang/curriculum-table";
import { EcosystemFlow } from "@/components/tentang/ecosystem-flow";
import { ActivityGallery } from "@/components/tentang/activity-gallery";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "PPM Riset Ekologi Bangunjiwa — pesantren mahasiswa yang mencetak SDM riset ekologi untuk ekosistem MRV Nexus, memadukan pendidikan keislaman dengan IT, pemetaan, dan pengabdian masyarakat.",
};

export default function TentangPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pondok Pesantren Riset Ekologi"
        title="Menyeimbangkan ilmu duniawi dan ukhrowi, mencetak SDM riset ekologi untuk MRV Nexus"
        description="Bangunjiwa mendampingi mahasantri menempuh pendidikan keislaman sambil kuliah, sekaligus membina mereka menjadi tenaga IT, pemetaan, dan pengelola SDM survei yang siap mengoperasikan ekosistem MRV Nexus di lapangan."
      >
        <Button size="lg" className="h-12 px-7 text-[0.95rem]" nativeButton={false} render={<Link href="#program-riset" />}>
          Lihat Program Riset
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="h-12 border border-white/15 bg-white/10 px-7 text-[0.95rem] text-white hover:bg-white/20"
          nativeButton={false}
          render={<Link href="/donasi" />}
        >
          Dukung Lewat Donasi
        </Button>
      </PageHeader>

      <Section>
        <AboutSplit />
      </Section>

      <Section className="bg-neutral-50 dark:bg-[#0d100e]">
        <VisionMission />
      </Section>

      <Section id="program-riset">
        <SectionHeader
          eyebrow="Program Riset Ekologi"
          title="Tiga pilar SDM untuk ekosistem MRV Nexus"
          description="Selain pendidikan keislaman, mahasantri Bangunjiwa dibina lintas tiga bidang agar siap terjun langsung mengelola MRV Nexus — platform monitoring, reporting, dan verification untuk DAS dan hutan sosial."
        />
        <div className="mt-10">
          <ResearchPillars />
        </div>
      </Section>

      <Section className="bg-neutral-50 dark:bg-[#0d100e]">
        <SectionHeader
          eyebrow="Kurikulum"
          title="Kurikulum Pesantren Riset Ekologi Bangunjiwa"
          description="Disusun bertahap dari semester I hingga V, memadukan penguasaan Al-Qur'an, ilmu alat, dan fikih dengan peminatan riset ekologi serta pengabdian masyarakat di akhir masa belajar."
        />
        <div className="mt-10">
          <CurriculumTable />
        </div>
      </Section>

      <Section id="ekosistem">
        <SectionHeader
          eyebrow="Ekosistem Terintegrasi"
          title="Satu ekosistem, tiga simpul yang saling menghidupi"
          description="Bangunjiwa mencetak SDM, MRV Nexus mengoperasikan data lapangan, dan donasi publik mendanai keberlangsungan keduanya."
        />
        <div className="mt-10">
          <EcosystemFlow />
        </div>
      </Section>

      <Section className="bg-neutral-50 dark:bg-[#0d100e]">
        <SectionHeader
          eyebrow="Kegiatan & Fasilitas"
          title="Keseharian mahasantri Bangunjiwa"
          description="Dari kajian malam, tahsin bersama, hingga ruang tinggal yang nyaman untuk belajar dan beristirahat."
        />
        <div className="mt-10">
          <ActivityGallery />
        </div>
      </Section>
    </>
  );
}
