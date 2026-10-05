import type { Metadata } from "next";
import Link from "next/link";
import { HandHeart, Sprout } from "lucide-react";
import { BidangPage } from "@/components/lembaga/bidang-page";
import { Panel, PanelHeader, CircleLink } from "@/components/hub/panel";
import { RunningPrograms } from "@/components/programs/running-programs";
import { DONASI_PEMBAYARAN, getBidang } from "@/lib/bangunjiwa-data";
import { CROWDFUNDING_PATH } from "@/lib/programs";

const BIDANG = getBidang("dana-abadi");

export const metadata: Metadata = {
  title: BIDANG.nama,
  description: `${BIDANG.nama} — ${BIDANG.ringkas} Donasi, UPZIS & wakaf, dan kampanye crowdfunding.`,
};

export default function DanaAbadiPage() {
  return (
    <BidangPage bidang={BIDANG}>
      <section className="mt-4 grid gap-4 xl:grid-cols-12">
        <Panel className="flex flex-col gap-4 xl:col-span-5">
          <PanelHeader title="Donasi Langsung" icon={HandHeart} />
          <p className="text-[13px] leading-relaxed text-iron-soft">
            Transfer ke rekening {DONASI_PEMBAYARAN.bank.nama} {DONASI_PEMBAYARAN.bank.layanan} atas nama{" "}
            {DONASI_PEMBAYARAN.penerima}, atau pindai QRIS yayasan.
          </p>
          <Link
            href="/donasi"
            className="mt-auto inline-flex h-10 w-fit items-center gap-2 rounded-xl bg-iron px-4 text-[13px] font-medium text-frost shadow-panel transition-colors hover:bg-iron-deep"
          >
            <HandHeart className="size-4" /> Buka halaman donasi
          </Link>
        </Panel>
        <Panel className="xl:col-span-7">
          <PanelHeader title="Kampanye Berjalan" icon={Sprout} action={<CircleLink href={CROWDFUNDING_PATH} label="Semua kampanye" />} />
          <RunningPrograms limit={2} className="mt-5" />
        </Panel>
      </section>
    </BidangPage>
  );
}
