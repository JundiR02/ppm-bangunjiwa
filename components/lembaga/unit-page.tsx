import { PageTop } from "@/components/shell/page-top";
import { Eyebrow } from "@/components/hub/panel";
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
    return <p className={`text-[14px] leading-relaxed text-iron-soft ${className ?? ""}`}>Kontak {lembaga.nama} akan segera ditambahkan.</p>;
  }
  return <ContactList kontak={lembaga.kontak} className={className} />;
}

/** Page for a unit that so far only has its identity and contacts; everything else is listed as coming soon. */
export function UnitPage({ lembaga, crumb }: { lembaga: Lembaga; crumb: string }) {
  return (
    <>
      <PageTop parent={PENDIDIKAN_PARENT} crumb={crumb} />

      <section className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div>
          <UnitLogo
            src={lembaga.logo}
            alt={`Logo ${lembaga.nama}`}
            fallback={lembaga.singkatan}
            className="size-24 rounded-full border-0 bg-linen"
          />
          <Eyebrow className="mt-6">
            {lembaga.peran} · {lembaga.untuk}
          </Eyebrow>
          <h1 className="mt-2 text-balance font-heading text-[2.4rem] leading-[1.1] text-iron-deep sm:text-5xl">{lembaga.nama}</h1>
          <p className="mt-2 text-[15px] text-iron">{lembaga.namaLengkap}</p>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-iron-soft">{lembaga.ringkas}</p>
        </div>
        <aside className="border-t border-ash pt-6 lg:mt-24 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <h2 className="font-heading text-xl text-iron-deep">Kontak</h2>
          <UnitContacts lembaga={lembaga} className="mt-4" />
        </aside>
      </section>

      <ComingSoonGrid items={unitOutline(lembaga)} title={`Informasi ${lembaga.nama} yang sedang disiapkan`} />
    </>
  );
}
