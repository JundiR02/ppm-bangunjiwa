import { PageTop } from "@/components/shell/page-top";
import { Eyebrow } from "@/components/hub/panel";
import { BidangItems } from "@/components/lembaga/bidang-items";
import type { BidangProgram } from "@/lib/bangunjiwa-data";

export const PROGRAM_PARENT = { label: "Program", href: "/program" };

/** Landing page for one of the yayasan's program areas. */
export function BidangPage({ bidang, children }: { bidang: BidangProgram; children?: React.ReactNode }) {
  return (
    <>
      <PageTop parent={PROGRAM_PARENT} crumb={bidang.nama} />

      <div className="max-w-2xl pb-2">
        <Eyebrow>Program Yayasan</Eyebrow>
        <h1 className="mt-5 text-balance font-heading text-[2.4rem] font-normal leading-[1.08] tracking-[-0.02em] text-iron-deep sm:text-5xl">
          {bidang.nama}
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-iron-soft">{bidang.ringkas}</p>
      </div>

      <BidangItems items={bidang.items} className="mt-8" />
      {children}
    </>
  );
}
