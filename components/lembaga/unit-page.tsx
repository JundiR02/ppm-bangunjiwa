import { Phone } from "lucide-react";
import { PageTop } from "@/components/shell/page-top";
import { Panel, PanelHeader, Eyebrow } from "@/components/hub/panel";
import { SectionHeading } from "@/components/hub/section-heading";
import { ComingSoonGrid } from "@/components/lembaga/coming-soon-grid";
import { ContactList } from "@/components/lembaga/contact-list";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import type { Lembaga } from "@/lib/bangunjiwa-data";

export const PENDIDIKAN_PARENT = { label: "Pendidikan Dirosah Islamiyah", href: "/pendidikan" };

/** Unit outline items, with the admission item linked to its section on /psb. */
export function unitOutline(lembaga: Lembaga, exclude: string[] = []) {
  return lembaga.bagian
    .filter((b) => !exclude.includes(b.judul))
    .map((b) => (b.judul.startsWith(lembaga.penerimaan.singkatan) ? { ...b, href: `/psb#${lembaga.id}` } : b));
}

export function UnitContacts({ lembaga, className }: { lembaga: Lembaga; className?: string }) {
  if (lembaga.kontak.length === 0) {
    return <p className={`text-[13px] leading-relaxed text-iron-soft ${className ?? ""}`}>Kontak {lembaga.nama} akan segera ditambahkan.</p>;
  }
  return <ContactList kontak={lembaga.kontak} className={className} />;
}

/** Page for a unit that so far only has its identity and contacts; everything else is listed as coming soon. */
export function UnitPage({ lembaga, crumb }: { lembaga: Lembaga; crumb: string }) {
  return (
    <>
      <PageTop parent={PENDIDIKAN_PARENT} crumb={crumb} />

      <section className="grid gap-4 xl:grid-cols-12">
        <div className="flex flex-col gap-6 pb-2 xl:col-span-7 xl:pr-6">
          <div className="flex items-center gap-3">
            <UnitLogo src={lembaga.logo} alt={`Logo ${lembaga.nama}`} fallback={lembaga.singkatan} className="size-16" />
            <Eyebrow>
              {lembaga.peran} · {lembaga.untuk}
            </Eyebrow>
          </div>
          <div>
            <h1 className="text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
              {lembaga.nama}
            </h1>
            <p className="mt-2 text-[14px] font-medium text-iron">{lembaga.namaLengkap}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-iron-soft">{lembaga.ringkas}</p>
          </div>
        </div>
        <Panel className="xl:col-span-5">
          <PanelHeader title="Kontak" icon={Phone} />
          <UnitContacts lembaga={lembaga} className="mt-4" />
        </Panel>
      </section>

      <section id="segera">
        <SectionHeading
          eyebrow="Sedang Disiapkan"
          title={`Informasi ${lembaga.nama} selengkapnya`}
          description="Bagian berikut akan diisi setelah informasi resminya tersedia. Untuk sementara, hubungi kontak di atas."
        />
        <ComingSoonGrid items={unitOutline(lembaga)} />
      </section>
    </>
  );
}
