import type { Metadata } from "next";
import { BidangPage } from "@/components/lembaga/bidang-page";
import { getBidang } from "@/lib/bangunjiwa-data";

const BIDANG = getBidang("kewirausahaan");

export const metadata: Metadata = {
  title: BIDANG.nama,
  description: `${BIDANG.nama} — ${BIDANG.ringkas}`,
};

export default function KewirausahaanPage() {
  return <BidangPage bidang={BIDANG} />;
}
