import type { Metadata } from "next";
import { UnitPage } from "@/components/lembaga/unit-page";
import { getLembaga } from "@/lib/bangunjiwa-data";

const PRA_TPQ = getLembaga("pra-tpq");

export const metadata: Metadata = {
  title: PRA_TPQ.nama,
  description: `${PRA_TPQ.nama} (${PRA_TPQ.namaLengkap}) — ${PRA_TPQ.ringkas}`,
};

export default function PraTpqPage() {
  return <UnitPage lembaga={PRA_TPQ} crumb="Pra-TPQ" />;
}
