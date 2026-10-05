import type { LucideIcon } from "lucide-react";
import { LayoutGrid, Landmark, Sprout, ClipboardList, HandHeart, Phone } from "lucide-react";
import { BIDANG_PROGRAM, LEMBAGA_BANGUNJIWA } from "@/lib/bangunjiwa-data";

/** `match` lists extra path prefixes that should highlight the item. */
export type NavLink = { label: string; href: string; icon: LucideIcon; match?: string[] };

export const PRIMARY_NAV: NavLink[] = [
  { label: "Beranda", href: "/", icon: LayoutGrid },
  { label: "Tentang", href: "/tentang", icon: Landmark },
  { label: "Program", href: "/program", icon: Sprout, match: BIDANG_PROGRAM.map((b) => b.href) },
  { label: "PMB & PSB", href: "/psb", icon: ClipboardList },
  { label: "Donasi", href: "/donasi", icon: HandHeart },
  { label: "Kontak", href: "/kontak", icon: Phone },
];

export const PROGRAM_LINKS = BIDANG_PROGRAM.map((b) => ({ label: b.nama, href: b.href }));

export const PENDIDIKAN_LINKS = LEMBAGA_BANGUNJIWA.map((l) => ({ label: l.nama, href: l.href }));
