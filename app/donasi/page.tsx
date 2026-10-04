import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { EqualGrid } from "@/components/programs/equal-grid";
import { DonationInteractive } from "@/components/donasi/donation-interactive";
import {
  DONASI_STATS,
  DONASI_TARGET,
  DONASI_TERKUMPUL,
  DONASI_ALOKASI,
  DONASI_TESTIMONIAL,
} from "@/lib/bangunjiwa-data";

export const metadata: Metadata = {
  title: "Donasi",
  description:
    "Danai satu putaran asesmen komunitas di DAS Oyo & DAS Ulin bersama MRV Nexus — donasi Anda membiayai kunjungan lapangan, pengolahan data, dan pendampingan warga.",
};

function formatRupiahShort(n: number) {
  if (n >= 1_000_000) return `Rp ${(n / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} jt`;
  return `Rp ${(n / 1000).toLocaleString("id-ID")}rb`;
}

export default function DonasiPage() {
  const percent = Math.round((DONASI_TERKUMPUL / DONASI_TARGET) * 100);

  return (
    <>
      <PageHeader
        eyebrow="Dukung Asesmen Komunitas"
        title="Danai satu putaran asesmen di DAS Oyo & DAS Ulin"
        description="Setiap donasi membiayai kunjungan lapangan, pengolahan data, dan pendampingan warga hingga hasil bisa dipakai mengambil keputusan."
      >
        <Button size="lg" className="h-12 px-7 text-[0.95rem]" nativeButton={false} render={<Link href="#donasi-form" />}>
          Donasi sekarang
        </Button>
      </PageHeader>

      <Section className="pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="mx-auto max-w-lg">
          <Progress value={percent} className="flex-col items-stretch gap-2">
            <div className="flex items-baseline justify-between">
              <span className="font-heading text-2xl font-bold text-foreground">{percent}%</span>
              <span className="text-sm text-muted-foreground">
                <b className="font-semibold text-foreground">{formatRupiahShort(DONASI_TERKUMPUL)}</b> dari
                target {formatRupiahShort(DONASI_TARGET)}
              </span>
            </div>
          </Progress>
        </div>

        <div className="mt-10">
          <EqualGrid columns={{ base: 1, sm: 3 }} gap="md">
            {DONASI_STATS.map((stat) => (
              <div key={stat.id} className="rounded-2xl border border-border bg-card p-6 text-center">
                <p className="font-heading text-3xl font-extrabold tabular-nums text-foreground">
                  {stat.value.toLocaleString("id-ID")}
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </EqualGrid>
        </div>
      </Section>

      <Section className="bg-neutral-50 pt-0 dark:bg-[#0d100e]">
        <DonationInteractive />
      </Section>

      <Section>
        <SectionHeader eyebrow="Transparansi" title="Ke mana donasi disalurkan" />
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="flex h-2.5 overflow-hidden rounded-full">
            {DONASI_ALOKASI.map((slice) => (
              <div key={slice.id} className={slice.className} style={{ width: `${slice.percent}%` }} />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {DONASI_ALOKASI.map((slice) => (
              <span key={slice.id} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className={`inline-block size-2 rounded-full ${slice.className}`} />
                {slice.label} {slice.percent}%
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50 pt-0 dark:bg-[#0d100e]">
        <SectionHeader eyebrow="Dari Komunitas" title="Suara warga terdampak" />
        <div className="mt-8 rounded-2xl border border-border bg-card p-7">
          <p className="text-base leading-relaxed text-foreground">&ldquo;{DONASI_TESTIMONIAL.quote}&rdquo;</p>
          <p className="mt-3 text-sm text-muted-foreground">{DONASI_TESTIMONIAL.who}</p>
        </div>
      </Section>
    </>
  );
}
