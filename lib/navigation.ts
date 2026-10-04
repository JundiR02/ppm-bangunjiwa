import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  Landmark,
  Sprout,
  HandHeart,
  PiggyBank,
  TreePine,
  Recycle,
  ChartPie,
} from "lucide-react";

export type NavLink = { label: string; href: string; icon: LucideIcon };

export const PRIMARY_NAV: NavLink[] = [
  { label: "Beranda", href: "/", icon: LayoutGrid },
  { label: "Tentang", href: "/tentang", icon: Landmark },
  { label: "Program", href: "/program", icon: Sprout },
  { label: "Donasi", href: "/donasi", icon: HandHeart },
];

export const PROFILE_LINKS = [
  { label: "Program Riset", href: "/tentang#program-riset" },
  { label: "Visi & Misi", href: "/tentang#visi-misi" },
  { label: "Kurikulum", href: "/tentang#kurikulum" },
  { label: "Ekosistem", href: "/tentang#ekosistem" },
  { label: "Kegiatan", href: "/tentang#kegiatan" },
];

/** Planned hub sections — rendered as disabled items, never as links, until the pages exist. */
export const HUB_COMING_SOON: { label: string; icon: LucideIcon }[] = [
  { label: "Dana Abadi", icon: PiggyBank },
  { label: "Wakaf", icon: TreePine },
  { label: "Ekonomi Sirkuler", icon: Recycle },
  { label: "Transparansi", icon: ChartPie },
];
