export const MISI_BANGUNJIWA = [
  "Menyelenggarakan kegiatan pembelajaran yang berbasis sosial kemasyarakatan untuk menghasilkan santri yang cerdas, mandiri, serta menguasai ilmu pengetahuan dan teknologi.",
  "Membina dan mengembangkan pendidikan pesantren dalam arti seluas-luasnya dengan semangat ta'awanu 'ala al-birri wat taqwa serta menerapkan konsep amar ma'ruf nahi munkar.",
  "Menerapkan kurikulum pembelajaran yang disesuaikan dengan kebutuhan riset ekologi, pemetaan, dan pengabdian masyarakat berbasis data.",
  "Meningkatkan kualitas pendidik maupun tenaga kependidikan agar lembaga semakin berkualitas dan profesional.",
  "Membina santri dalam bidang IT dan pengelolaan data agar mampu membangun serta merawat infrastruktur digital MRV Nexus.",
  "Menyiapkan tenaga pemetaan (GIS) dan enumerator lapangan yang cakap melakukan survei ekologi di DAS dan kawasan hutan sosial.",
];

export const RISET_PILLARS = [
  {
    id: "it-data",
    title: "Teknologi Informasi & Data",
    description:
      "Mahasantri dibina mengelola infrastruktur digital, basis data, dan sistem pelaporan yang menjadi tulang punggung platform MRV Nexus, dari pengembangan web hingga pemeliharaan data lapangan.",
  },
  {
    id: "pemetaan-survei",
    title: "Pemetaan & Survei Lapangan",
    description:
      "Pelatihan pemetaan (GIS) dan penginderaan jauh dipadukan dengan teknik survei langsung, agar mahasantri mampu memetakan kondisi DAS dan kawasan hutan sosial secara akurat.",
  },
  {
    id: "sdm-enumerator",
    title: "Pengelolaan SDM & Enumerator",
    description:
      "Mahasantri dilatih mengoordinasikan tim enumerator, merancang pendataan partisipatif, dan mendampingi masyarakat selama proses asesmen lapangan berlangsung.",
  },
];

export const PEMINATAN_RISET = [
  { tag: "IT", description: "Pengelolaan basis data & sistem pelaporan MRV Nexus" },
  { tag: "Pemetaan", description: "Dasar GIS & pemetaan DAS / hutan sosial" },
  { tag: "Survei", description: "Teknik enumerator & pendataan partisipatif" },
  { tag: "SDM", description: "Koordinasi tim lapangan & pendampingan warga" },
];

export type KurikulumRow = {
  mataPelajaran: string;
  semester: boolean[];
  kitab: string;
};

export const KURIKULUM_SEMESTERS = ["Sem I", "Sem II", "Sem III", "Sem IV", "Sem V"];

export const KURIKULUM_ROWS: KurikulumRow[] = [
  { mataPelajaran: "Tahsin", semester: [true, true, true, true, false], kitab: "Al-Qur'an" },
  { mataPelajaran: "Tahfidz", semester: [true, true, true, true, false], kitab: "Al-Qur'an" },
  { mataPelajaran: "Nahwu", semester: [true, false, false, false, false], kitab: "Modul" },
  { mataPelajaran: "Shorof", semester: [true, false, false, false, false], kitab: "Modul" },
  { mataPelajaran: "Tajwid", semester: [true, false, false, false, false], kitab: "Modul" },
  { mataPelajaran: "Akidah", semester: [false, true, false, false, false], kitab: "Aqidatul Awwam" },
  {
    mataPelajaran: "Akhlak",
    semester: [false, true, false, false, false],
    kitab: "Adabul 'Alim wal Muta'allim",
  },
  { mataPelajaran: "Ushul Fiqh", semester: [false, true, false, false, false], kitab: "Matan Waroqot" },
  {
    mataPelajaran: "Fikih",
    semester: [false, false, true, false, false],
    kitab: "Matnul Ghoyatu wat Taqrib",
  },
  { mataPelajaran: "Hadits", semester: [false, false, true, false, false], kitab: "Arba'in Nawawi" },
  { mataPelajaran: "Tasawwuf", semester: [false, false, false, true, false], kitab: "Bidayatul Hidayah" },
  { mataPelajaran: "Qiroatul Kutub", semester: [false, false, false, true, false], kitab: "Modul" },
  { mataPelajaran: "Pengabdian Masyarakat", semester: [false, false, false, false, true], kitab: "—" },
];

export const EKOSISTEM_NODES: {
  id: string;
  label: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}[] = [
  {
    id: "bangunjiwa",
    label: "Simpul 1",
    title: "PPM Riset Ekologi Bangunjiwa — Pendidikan & SDM",
    description:
      "Mencetak mahasantri yang cakap IT, pemetaan, dan pengelolaan SDM survei, siap terjun ke lapangan maupun mengelola sistem digital.",
    href: "/tentang#program-riset",
    linkLabel: "Lihat program riset",
  },
  {
    id: "mrv-nexus",
    label: "Simpul 2",
    title: "MRV Nexus — Platform Data & Monitoring",
    description:
      "Sistem monitoring, reporting, dan verification untuk DAS Oyo, DAS Ulin, dan kawasan hutan sosial lain, dijalankan oleh alumni dan mahasantri Bangunjiwa.",
  },
  {
    id: "donasi",
    label: "Simpul 3",
    title: "Donasi & Crowdfunding",
    description:
      "Pendanaan publik untuk membiayai kunjungan lapangan, pengolahan data, dan pelatihan SDM Bangunjiwa yang terjun di MRV Nexus.",
    href: "/donasi",
    linkLabel: "Lihat halaman donasi",
  },
];

export const KEGIATAN_GALLERY = [
  {
    id: "kajian-musholla",
    src: "/images/bangunjiwa/kajian-musholla.jpg",
    caption: "Kajian rutin bersama pengasuh",
    alt: "Kajian bersama di musholla",
  },
  {
    id: "santriwati-menulis",
    src: "/images/bangunjiwa/santriwati-menulis.jpg",
    caption: "Sesi menulis dan tahsin",
    alt: "Santriwati menulis kitab",
  },
  {
    id: "santri-menulis",
    src: "/images/bangunjiwa/santri-menulis.jpg",
    caption: "Belajar kitab bersama",
    alt: "Santri menulis kitab",
  },
  {
    id: "fasad-asrama",
    src: "/images/bangunjiwa/fasad-asrama.jpg",
    caption: "Asrama mahasantri",
    alt: "Bangunan asrama Bangunjiwa",
  },
  {
    id: "ruang-tamu",
    src: "/images/bangunjiwa/ruang-tamu.jpg",
    caption: "Ruang tamu & diskusi",
    alt: "Ruang tamu pesantren",
  },
];

export const DONASI_NOMINAL = [100000, 250000, 500000, 1000000];

export const DONASI_PEMBAYARAN = {
  penerima: "Yayasan PPM Bangunjiwa",
  bank: { nama: "Bank Syariah Indonesia (BSI)", noRekening: "7788443336" },
  qris: { src: "/brand/qris-yayasan-ppm-bangunjiwa.jpg", nmid: "ID1024319078993" },
};
