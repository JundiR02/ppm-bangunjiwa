import type { Metadata } from "next";
import Link from "next/link";
import { BidangPage } from "@/components/lembaga/bidang-page";
import { RunningCampaignsSection } from "@/components/home/running-campaigns-section";
import { DONASI_PEMBAYARAN, getBidang } from "@/lib/bangunjiwa-data";

const BIDANG = getBidang("dana-abadi");

export const metadata: Metadata = {
  title: BIDANG.nama,
  description: `${BIDANG.nama} — ${BIDANG.ringkas} Donasi, UPZIS & wakaf, dan kampanye crowdfunding.`,
};

export default function DanaAbadiPage() {
  return (
    <BidangPage bidang={BIDANG}>
      <section className="full-bleed mt-20 bg-linen py-12">
        <div className="mx-auto grid max-w-[1200px] items-center gap-6 md:grid-cols-[1.5fr_auto]">
          <div>
            <h2 className="font-heading text-3xl text-iron-deep">Donasi langsung ke yayasan</h2>
            <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-iron-soft">
              Transfer ke rekening {DONASI_PEMBAYARAN.bank.nama} {DONASI_PEMBAYARAN.bank.layanan} atas nama{" "}
              {DONASI_PEMBAYARAN.penerima}, atau pindai QRIS yayasan.
            </p>
          </div>
          <Link
            href="/donasi"
            className="inline-flex w-fit items-center rounded-md bg-hijau px-5 py-3 text-[15px] font-medium text-frost transition-colors hover:bg-hijau-deep"
          >
            Lihat rekening & QRIS
          </Link>
        </div>
      </section>
      <RunningCampaignsSection />
    </BidangPage>
  );
}
