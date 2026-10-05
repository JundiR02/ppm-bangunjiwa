import type { Metadata } from "next";
import { UnitPage } from "@/components/lembaga/unit-page";
import { getLembaga } from "@/lib/bangunjiwa-data";

const MDT = getLembaga("mdt");

export const metadata: Metadata = {
  title: MDT.nama,
  description: `${MDT.namaLengkap} — ${MDT.ringkas}`,
};

export default function MdtPage() {
  return <UnitPage lembaga={MDT} crumb="MDT" />;
}
