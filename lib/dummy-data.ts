import type { LucideIcon } from "lucide-react";
import { TreePine, Cloud, Droplets, Users } from "lucide-react";

export type ImpactMetric = {
  id: string;
  label: string;
  value: number;
  unit: string;
  icon: LucideIcon;
};

export const IMPACT_METRICS: ImpactMetric[] = [
  { id: "trees", label: "Pohon ditanam", value: 18420, unit: "pohon", icon: TreePine },
  { id: "co2", label: "Ton CO₂ tersimpan", value: 1204, unit: "ton", icon: Cloud },
  { id: "water", label: "Air terhemat", value: 8400000, unit: "liter", icon: Droplets },
  { id: "families", label: "Keluarga terlibat", value: 312, unit: "KK", icon: Users },
];

export const THREE_PILLARS = [
  {
    id: "at-tawassuth",
    title: "At-Tawassuth",
    subtitle: "Moderasi",
    description:
      "Teknologi melayani manusia. Setiap metrik lingkungan selalu berdampingan setara dengan dampak sosial.",
  },
  {
    id: "at-tawazun",
    title: "At-Tawazun",
    subtitle: "Keseimbangan",
    description:
      "Pendidikan, komunitas, dan usaha berjalan setara, tanpa satu pilar diutamakan dari yang lain.",
  },
  {
    id: "itidal",
    title: "I'tidal",
    subtitle: "Transparansi",
    description:
      "Setiap donasi, pohon, dan dana harus dapat ditelusuri. Keterbukaan adalah amanah, bukan pilihan.",
  },
];

export type ProgramGroup = "pendidikan-riset" | "komunitas" | "usaha-dana";

export const PROGRAM_GROUPS: { id: ProgramGroup; label: string }[] = [
  { id: "pendidikan-riset", label: "Ilmu & Riset" },
  { id: "komunitas", label: "Komunitas" },
  { id: "usaha-dana", label: "Usaha & Dana" },
];

export const FEATURED_PROGRAMS: {
  id: string;
  title: string;
  description: string;
  tag: string;
  group: ProgramGroup;
}[] = [
  {
    id: "dharma-pendidikan",
    title: "Dharma Pendidikan",
    description: "Kelas fiqih lingkungan, MRV, dan pranata mangsa untuk santri dan masyarakat.",
    tag: "Pendidikan",
    group: "pendidikan-riset",
  },
  {
    id: "kajian-riset",
    title: "Kajian & Riset",
    description: "Repositori riset, peta, dan arsip pengetahuan pesantren hijau.",
    tag: "Riset",
    group: "pendidikan-riset",
  },
  {
    id: "forest",
    title: "Hutan Pesantren",
    description: "Kawasan konservasi dan reboisasi yang dikelola bersama santri dan KWT.",
    tag: "Konservasi",
    group: "pendidikan-riset",
  },
  {
    id: "khidmah-diniyah",
    title: "Khidmah Diniyah",
    description: "Jumat Bersih, Jumat Menanam, dan kegiatan pengabdian komunitas.",
    tag: "Pengabdian",
    group: "komunitas",
  },
  {
    id: "komunitas-kwt",
    title: "Komunitas KWT",
    description: "Forum, MRV Nexus, dan musyawarah digital bagi Kelompok Wanita Tani.",
    tag: "KWT",
    group: "komunitas",
  },
  {
    id: "amal-usaha",
    title: "Amal Usaha",
    description: "Bank sampah, panen air hujan, kompos, dan offset karbon.",
    tag: "Usaha",
    group: "usaha-dana",
  },
  {
    id: "dana-abadi",
    title: "Dana Abadi",
    description: "Penghimpunan dana abadi untuk keberlanjutan program pesantren.",
    tag: "Segera hadir",
    group: "usaha-dana",
  },
];

export const LATEST_ACTIVITIES = [
  {
    slug: "jumat-menanam-agustus-2026",
    title: "Jumat Menanam — Agustus 2026",
    date: "2026-08-07",
    excerpt: "Penanaman 500 bibit trembesi dan aren di Blok Watershed Utara bersama santri dan KWT Sekar Wangi.",
  },
  {
    slug: "panen-kompos-juli-2026",
    title: "Panen Kompos Perdana",
    date: "2026-07-22",
    excerpt: "Hasil kompos organik pertama dari unit Amal Usaha siap dipasarkan ke warga sekitar.",
  },
  {
    slug: "sertifikasi-mrv-juni-2026",
    title: "Pelatihan MRV untuk Fasilitator KWT",
    date: "2026-06-30",
    excerpt: "20 fasilitator KWT menyelesaikan pelatihan pengukuran, pelaporan, dan verifikasi karbon.",
  },
  {
    slug: "penanaman-mei-2026",
    title: "Penanaman Bibit Tahap Kedua",
    date: "2026-05-14",
    excerpt: "Penanaman bibit tahap kedua di kawasan resapan bersama santri dan warga sekitar.",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Ust. Ahmad Ridwan",
    role: "Pengajar Fiqih Lingkungan",
    quote:
      "Portal ini membuat santri melihat langsung bagaimana ilmu fiqih dan kerja nyata merawat bumi saling menyambung.",
  },
  {
    id: "t2",
    name: "Siti Marfu'ah",
    role: "Ketua KWT Sekar Wangi",
    quote:
      "Lewat MRV Nexus, laporan lapangan kami akhirnya terlihat dan dihargai — bukan sekadar catatan di buku tulis.",
  },
];

export type MapPoint = {
  id: string;
  lat: number;
  lng: number;
  type: "pohon" | "watershed" | "carbon-plot";
  title: string;
};

export const MAP_POINTS: MapPoint[] = [
  { id: "TRK-2026-00842", lat: -7.8291, lng: 110.3735, type: "pohon", title: "Trembesi — TRK-2026-00842" },
  { id: "TRK-2026-00913", lat: -7.8305, lng: 110.3729, type: "pohon", title: "Bambu Petung — TRK-2026-00913" },
  { id: "TRK-2026-01002", lat: -7.8276, lng: 110.3751, type: "pohon", title: "Alpukat — TRK-2026-01002" },
  { id: "WATERSHED-01", lat: -7.8288, lng: 110.3742, type: "watershed", title: "Kawasan Resapan Air Blok Utara" },
];
