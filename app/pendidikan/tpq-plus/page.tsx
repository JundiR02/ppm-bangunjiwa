import type { Metadata } from "next";
import { UnitPage } from "@/components/lembaga/unit-page";
import { getLembaga } from "@/lib/bangunjiwa-data";

const TPQ = getLembaga("tpq-plus");

export const metadata: Metadata = {
  title: TPQ.nama,
  description: `${TPQ.namaLengkap} — ${TPQ.ringkas}`,
};

export default function TpqPlusPage() {
  return <UnitPage lembaga={TPQ} crumb="TPQ Plus" />;
}
