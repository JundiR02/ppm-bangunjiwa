import type { Metadata } from "next";
import { BidangPage } from "@/components/lembaga/bidang-page";
import { getBidang } from "@/lib/bangunjiwa-data";

const BIDANG = getBidang("vokasi");

export const metadata: Metadata = {
  title: BIDANG.nama,
  description: `${BIDANG.nama} — ${BIDANG.ringkas}`,
};

export default function VokasiPage() {
  return <BidangPage bidang={BIDANG} />;
}
