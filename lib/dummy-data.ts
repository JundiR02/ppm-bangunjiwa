import type { LucideIcon } from "lucide-react";
import { TreePine, Cloud, Droplets, Users, Landmark } from "lucide-react";

export type ImpactMetric = {
  id: string;
  label: string;
  value: number;
  unit: string;
  icon: LucideIcon;
};

export const IMPACT_SUMMARY: { updatedAt: string; metrics: ImpactMetric[] } = {
  updatedAt: "2026-08-01T23:00:00+07:00",
  metrics: [
    { id: "trees", label: "Pohon Ditanam", value: 18420, unit: "pohon", icon: TreePine },
    { id: "co2", label: "Ton CO₂ Tersimpan", value: 1204, unit: "ton", icon: Cloud },
    { id: "water", label: "Air Terhemat", value: 8400000, unit: "liter", icon: Droplets },
    { id: "families", label: "Kesejahteraan Keluarga", value: 312, unit: "KK", icon: Users },
    { id: "endowment", label: "Dana Abadi Terkumpul", value: 842500000, unit: "rupiah", icon: Landmark },
  ],
};

export const THREE_PILLARS = [
  {
    id: "at-tawassuth",
    title: "At-Tawassuth",
    subtitle: "Moderasi",
    description:
      "Teknologi melayani manusia. Karbon tidak pernah menjadi tokoh utama sendirian — setiap metrik lingkungan selalu berdampingan setara dengan dampak sosial.",
  },
  {
    id: "at-tawazun",
    title: "At-Tawazun",
    subtitle: "Keseimbangan",
    description:
      "Pendidikan, komunitas, dan usaha berjalan setara. Tidak ada satu pilar yang lebih diutamakan dari yang lain dalam navigasi maupun perhatian.",
  },
  {
    id: "itidal",
    title: "I'tidal",
    subtitle: "Transparansi",
    description:
      "Setiap donasi, setiap pohon, setiap dana, setiap kredit karbon dapat ditelusuri. Keterbukaan adalah amanah, bukan pilihan.",
  },
];

export const FEATURED_PROGRAMS = [
  {
    id: "dharma-pendidikan",
    title: "Dharma Pendidikan",
    description: "Kelas fiqih lingkungan, MRV, dan pranata mangsa untuk santri dan masyarakat.",
    href: "/dharma-pendidikan",
    pillar: "pendidikan" as const,
  },
  {
    id: "khidmah-diniyah",
    title: "Khidmah Diniyah",
    description: "Jumat Bersih, Jumat Menanam, dan kegiatan pengabdian komunitas.",
    href: "/khidmah-diniyah",
    pillar: "khidmah" as const,
  },
  {
    id: "amal-usaha",
    title: "Amal Usaha",
    description: "Bank sampah, panen air hujan, kompos, dan offset karbon.",
    href: "/amal-usaha",
    pillar: "usaha" as const,
  },
  {
    id: "kajian-riset",
    title: "Kajian & Riset",
    description: "Repositori riset, peta, dan arsip pengetahuan pesantren hijau.",
    href: "/kajian-riset",
    pillar: "kajian" as const,
  },
  {
    id: "dana-abadi",
    title: "Dana Abadi",
    description: "Wakaf pohon dan transparansi penuh atas setiap rupiah yang diamanahkan.",
    href: "/dana-abadi",
    pillar: "dana" as const,
  },
  {
    id: "forest",
    title: "Hutan Pesantren",
    description: "Kawasan konservasi dan reboisasi yang dikelola bersama santri dan KWT.",
    href: "/kajian-riset/peta",
    pillar: "forest" as const,
  },
  {
    id: "komunitas-kwt",
    title: "Komunitas KWT",
    description: "Forum, MRV Nexus, dan musyawarah digital bagi Kelompok Wanita Tani.",
    href: "/komunitas-kwt",
    pillar: "komunitas" as const,
  },
];

export const LATEST_ACTIVITIES = [
  {
    slug: "jumat-menanam-agustus-2026",
    title: "Jumat Menanam — Agustus 2026",
    date: "2026-08-07",
    excerpt: "Penanaman 500 bibit trembesi dan aren di Blok Watershed Utara bersama santri dan KWT Sekar Wangi.",
    cover: "/images/activities/jumat-menanam.jpg",
  },
  {
    slug: "panen-kompos-juli-2026",
    title: "Panen Kompos Perdana",
    date: "2026-07-22",
    excerpt: "Hasil kompos organik pertama dari unit Amal Usaha siap dipasarkan ke warga sekitar.",
    cover: "/images/activities/panen-kompos.jpg",
  },
  {
    slug: "sertifikasi-mrv-juni-2026",
    title: "Pelatihan MRV untuk Fasilitator KWT",
    date: "2026-06-30",
    excerpt: "20 fasilitator KWT menyelesaikan pelatihan pengukuran, pelaporan, dan verifikasi karbon.",
    cover: "/images/activities/pelatihan-mrv.jpg",
  },
  {
    slug: "wakaf-1000-pohon-mei-2026",
    title: "Wakaf 1.000 Pohon Tercapai",
    date: "2026-05-14",
    excerpt: "Target wakaf pohon tahap kedua tercapai berkat 640 donatur dari seluruh Indonesia.",
    cover: "/images/activities/wakaf-1000-pohon.jpg",
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
  {
    id: "t3",
    name: "Bapak Hendra",
    role: "Donatur Wakaf Pohon",
    quote:
      "Saya bisa melacak pohon yang saya wakafkan sampai titik GPS-nya. Rasanya donasi ini benar-benar nyata.",
  },
];

export const TREE_SPECIES = [
  { id: "trembesi", name: "Trembesi", latin: "Samanea saman", price: 150000 },
  { id: "alpukat", name: "Alpukat", latin: "Persea americana", price: 175000 },
  { id: "aren", name: "Aren", latin: "Arenga pinnata", price: 200000 },
  { id: "bambu-petung", name: "Bambu Petung", latin: "Dendrocalamus asper", price: 125000 },
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
