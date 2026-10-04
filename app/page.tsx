import { Hero } from "@/components/home/hero";
import { SplitCta } from "@/components/home/split-cta";
import { Section, SectionHeader } from "@/components/layout/section";
import { ImpactTriad } from "@/components/impact/impact-triad";
import { PillarCard } from "@/components/impact/pillar-card";
import { EqualGrid } from "@/components/programs/equal-grid";
import { ProgramCard } from "@/components/programs/program-card";
import { Timeline } from "@/components/content/timeline";
import { GalleryMasonry } from "@/components/content/gallery-masonry";
import { TestimonialCarousel } from "@/components/content/testimonial-carousel";
import { MapPreview } from "@/components/maps/map-preview";
import { SampleDataBadge } from "@/components/content/sample-data";
import {
  IMPACT_SUMMARY,
  THREE_PILLARS,
  FEATURED_PROGRAMS,
  LATEST_ACTIVITIES,
  TESTIMONIALS,
  MAP_POINTS,
} from "@/lib/dummy-data";

export default function Home() {
  return (
    <>
      <Hero />

      <Section className="pt-14 pb-16 lg:pt-20 lg:pb-24">
        <SectionHeader
          eyebrow="Dampak Langsung"
          title="Dasbor Dampak"
          description="Tiga wajah dampak yang berjalan bersama, tanpa satu pun diutamakan dari yang lain."
        />
        <SampleDataBadge className="mt-4" />
        <div className="mt-8">
          <ImpactTriad metrics={IMPACT_SUMMARY.metrics} />
        </div>
      </Section>

      <Section className="bg-neutral-50 dark:bg-[#0d100e]">
        <SectionHeader
          eyebrow="Filosofi Kami"
          title="Tiga Pilar yang Menopang Portal Ini"
          description="At-Tawassuth, At-Tawazun, dan I'tidal bukan slogan — melainkan aturan yang membentuk setiap halaman di portal ini."
        />
        <div className="mt-10">
          <EqualGrid columns={{ base: 1, md: 3 }} gap="md">
            {THREE_PILLARS.map((pillar, i) => (
              <PillarCard
                key={pillar.id}
                index={i}
                title={pillar.title}
                subtitle={pillar.subtitle}
                description={pillar.description}
              />
            ))}
          </EqualGrid>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Program Unggulan"
          title="Tujuh Wajah Pesantren Hijau"
          description="Pendidikan, komunitas, usaha, riset, dana abadi, hutan, dan komunitas KWT — ditampilkan setara, sesuai prinsip At-Tawazun."
        />
        <div className="mt-10">
          <EqualGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="md">
            {FEATURED_PROGRAMS.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </EqualGrid>
        </div>
      </Section>

      <Section className="bg-neutral-50 dark:bg-[#0d100e]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,380px)_1fr]">
          <div>
            <SectionHeader
              eyebrow="Kegiatan Terbaru"
              title="Yang Sedang Berlangsung"
              description="Sorotan kegiatan Khidmah Diniyah dan capaian komunitas dalam beberapa bulan terakhir."
            />
            <SampleDataBadge className="mt-4" label="Kegiatan contoh, belum dari laporan nyata" />
            <div className="mt-8">
              <Timeline items={LATEST_ACTIVITIES} />
            </div>
          </div>
          <div className="lg:pt-24">
            <GalleryMasonry items={LATEST_ACTIVITIES} />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Peta Dampak"
          title="Setiap Titik, Dapat Ditelusuri"
          description="Pohon, kawasan resapan air, dan plot karbon — dipetakan secara terbuka di atas OpenStreetMap."
        />
        <SampleDataBadge className="mt-4" label="Titik contoh, belum dari data lapangan" />
        <div className="mt-8">
          <MapPreview points={MAP_POINTS} />
        </div>
      </Section>

      <Section className="bg-neutral-50 dark:bg-[#0d100e]">
        <div className="mb-8 flex justify-center">
          <SampleDataBadge label="Testimoni contoh" />
        </div>
        <TestimonialCarousel items={TESTIMONIALS} />
      </Section>

      <Section>
        <SplitCta />
      </Section>
    </>
  );
}
