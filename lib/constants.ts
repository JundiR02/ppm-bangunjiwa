export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: { label: string; href: string; description?: string }[];
};

export const NAV_TREE: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Dharma Pendidikan",
    href: "/dharma-pendidikan",
    description: "Kampus digital — modul, sertifikat, dan pengajar.",
    children: [
      { label: "Modul Belajar", href: "/dharma-pendidikan/modul" },
      { label: "Pengajar", href: "/dharma-pendidikan/pengajar" },
      { label: "Sertifikat Saya", href: "/dharma-pendidikan/sertifikat" },
      { label: "Progres Belajar", href: "/dharma-pendidikan/progres" },
    ],
  },
  {
    label: "Khidmah Diniyah",
    href: "/khidmah-diniyah",
    description: "Kalender kegiatan, relawan, dan laporan komunitas.",
    children: [
      { label: "Kalender Kegiatan", href: "/khidmah-diniyah/kalender" },
      { label: "Daftar Relawan", href: "/khidmah-diniyah/relawan" },
      { label: "Laporan Kegiatan", href: "/khidmah-diniyah/laporan" },
    ],
  },
  {
    label: "Amal Usaha",
    href: "/amal-usaha",
    description: "Marketplace — bank sampah, panen air hujan, kompos, offset karbon.",
    children: [
      { label: "Bank Sampah", href: "/amal-usaha/bank-sampah" },
      { label: "Panen Air Hujan", href: "/amal-usaha/panen-air-hujan" },
      { label: "Kompos", href: "/amal-usaha/kompos" },
      { label: "Offset Karbon", href: "/amal-usaha/offset-karbon" },
    ],
  },
  {
    label: "Kajian & Riset",
    href: "/kajian-riset",
    description: "Repositori riset, peta, arsip video, dan manifesto Akidah Hijau.",
    children: [
      { label: "Repositori Riset", href: "/kajian-riset/repositori" },
      { label: "Peta Riset", href: "/kajian-riset/peta" },
      { label: "Arsip Video", href: "/kajian-riset/video" },
      { label: "Laporan Karbon", href: "/kajian-riset/laporan-karbon" },
      { label: "Akidah Hijau Aswaja", href: "/kajian-riset/akidah-hijau" },
    ],
  },
  {
    label: "Dana Abadi",
    href: "/dana-abadi",
    description: "Wakaf pohon, transparansi keuangan, dan peta dampak.",
    children: [
      { label: "Wakaf Pohon", href: "/dana-abadi/wakaf-pohon" },
      { label: "Transparansi Keuangan", href: "/dana-abadi/transparansi" },
      { label: "Peta Dampak", href: "/dana-abadi/peta-dampak" },
      { label: "Laporan Bulanan", href: "/dana-abadi/laporan" },
    ],
  },
  {
    label: "Komunitas KWT",
    href: "/komunitas-kwt",
    description: "Forum, MRV Nexus, pengaduan, dan musyawarah digital.",
    children: [
      { label: "Forum", href: "/komunitas-kwt/forum" },
      { label: "MRV Nexus", href: "/komunitas-kwt/mrv-nexus" },
      { label: "Formulir Pengaduan", href: "/komunitas-kwt/pengaduan" },
      { label: "Musyawarah Digital", href: "/komunitas-kwt/musyawarah" },
    ],
  },
];

export const FOOTER_LINKS = {
  portal: [
    { label: "Dharma Pendidikan", href: "/dharma-pendidikan" },
    { label: "Khidmah Diniyah", href: "/khidmah-diniyah" },
    { label: "Amal Usaha", href: "/amal-usaha" },
    { label: "Kajian & Riset", href: "/kajian-riset" },
  ],
  dana: [
    { label: "Dana Abadi", href: "/dana-abadi" },
    { label: "Wakaf Pohon", href: "/dana-abadi/wakaf-pohon" },
    { label: "Transparansi Keuangan", href: "/dana-abadi/transparansi" },
    { label: "Donasi Riset Ekologi", href: "/donasi" },
    { label: "Dasbor Publik", href: "/dasbor" },
  ],
  institusi: [
    { label: "Tentang Kami", href: "/tentang" },
    { label: "Komunitas KWT", href: "/komunitas-kwt" },
    { label: "Kontak", href: "/kontak" },
    { label: "Akidah Hijau Aswaja", href: "/kajian-riset/akidah-hijau" },
  ],
  legal: [
    { label: "Kebijakan Privasi", href: "/privasi" },
    { label: "Syarat & Ketentuan", href: "/syarat" },
  ],
};
