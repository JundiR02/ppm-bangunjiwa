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
    href: "/pendidikan/ppm#program-riset",
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

export const PROFIL_PESANTREN = {
  alamat: "Wonotawang, Bangunjiwa, Kasihan, Bantul, DI Yogyakarta",
  pengasuh: ["Dr. H. Idham Ibty, S.IP., M.Si", "Dr. Drh. Zulkhah Noor, M.Kes"],
  infoUrl: "https://s.id/PPM-BANGUNJIWA",
  instagram: { handle: "@ppm_bangunjiwa", url: "https://www.instagram.com/ppm_bangunjiwa/" },
};

export const DONASI_NOMINAL = [100000, 250000, 500000, 1000000];

export const DONASI_PEMBAYARAN = {
  penerima: "Yayasan PPM Bangunjiwa",
  bank: { nama: "Bank Syariah Indonesia (BSI)", noRekening: "7788443336", layanan: "Layanan UPZ-Baznas" },
  qris: { src: "/brand/qris-yayasan-ppm-bangunjiwa.jpg", nmid: "ID1024319078993" },
};

export type KontakLembaga = {
  kind: "alamat" | "whatsapp" | "telepon" | "email" | "instagram" | "nss";
  label: string;
  href?: string;
};

export type BagianUnit = { judul: string; keterangan: string; sub?: string[] };

export type Lembaga = {
  id: "ppm" | "mdt" | "tpq-plus" | "pra-tpq";
  singkatan: string;
  nama: string;
  namaLengkap: string;
  peran: string;
  /** Siapa yang dilayani — dipakai untuk membantu pengunjung memilih unit. */
  untuk: string;
  ringkas: string;
  href: string;
  logo?: string;
  /** Nama jalur penerimaan: PMB untuk PPM, PSB untuk unit lain. */
  penerimaan: { singkatan: "PMB" | "PSB"; nama: string };
  kontak: KontakLembaga[];
  /** Kerangka halaman unit; semuanya masih menunggu isi resmi. */
  bagian: BagianUnit[];
};

export const YAYASAN = {
  nama: "Yayasan Pesantren Masyarakat Bangunjiwa",
  logo: "/images/lembaga/yayasan.png",
  deskripsi:
    "Menyelenggarakan pendidikan dirosah islamiyah dari usia PAUD hingga mahasiswa, pendidikan vokasi, kewirausahaan, dan Dana Abadi Pesantren Hijau.",
  segera: [
    { judul: "Visi & Misi Yayasan", keterangan: "Arah dan tujuan yayasan yang menaungi seluruh program." },
    { judul: "Sejarah", keterangan: "Perjalanan Bangunjiwa dari awal berdiri hingga sekarang." },
    { judul: "Pengurus & Pengelola", keterangan: "Susunan pengurus yayasan dan pengelola tiap unit." },
    { judul: "Legalitas", keterangan: "Dokumen dan status kelembagaan yayasan." },
  ],
};

const SUB_PENERIMAAN = ["Biaya", "Seleksi", "Pengumuman"];

function kerangkaUnit(nama: string, penerimaan: Lembaga["penerimaan"], tambahan: BagianUnit[] = []): BagianUnit[] {
  return [
    { judul: `Tentang ${nama}`, keterangan: "Profil dan sejarah singkat." },
    { judul: "Visi & Misi", keterangan: "Arah dan tujuan pendidikan." },
    { judul: "Program Unggulan", keterangan: "Program khas yang ditawarkan." },
    { judul: "Kurikulum", keterangan: "Materi dan jenjang belajar." },
    { judul: `${penerimaan.singkatan} — ${penerimaan.nama}`, keterangan: "Pendaftaran peserta baru.", sub: SUB_PENERIMAAN },
    ...tambahan,
    { judul: "Prestasi", keterangan: "Capaian santri dan lembaga." },
  ];
}

const PMB = { singkatan: "PMB", nama: "Penerimaan Mahasantri Baru" } as const;
const PSB = { singkatan: "PSB", nama: "Penerimaan Santri Baru" } as const;

export const LEMBAGA_BANGUNJIWA: Lembaga[] = [
  {
    id: "ppm",
    singkatan: "PPM",
    nama: "PPM Bangunjiwa",
    namaLengkap: "Pesantren Mahasiswa Bangunjiwa",
    peran: "Pesantren mahasiswa",
    untuk: "Mahasiswa & umum",
    ringkas: "Pesantren bagi mahasiswa dan santri umum, sekaligus pusat diklat guru dan wali santri.",
    href: "/pendidikan/ppm",
    logo: "/images/lembaga/ppm-bangunjiwa.png",
    penerimaan: PMB,
    kontak: [
      { kind: "alamat", label: "Wonotawang, Bangunjiwa, Kasihan, Bantul, DIY" },
      { kind: "instagram", label: "@ppm_bangunjiwa", href: "https://www.instagram.com/ppm_bangunjiwa/" },
    ],
    bagian: kerangkaUnit("PPM", PMB, [
      { judul: "Khidmah / Pengabdian", keterangan: "Kegiatan pengabdian mahasantri di tengah masyarakat." },
      { judul: "Asrama", keterangan: "Fasilitas, tata tertib, dan kehidupan mahasantri di asrama." },
    ]),
  },
  {
    id: "mdt",
    singkatan: "MDT",
    nama: "MDT Bangunjiwa",
    namaLengkap: "Madinta — Madrasah Diniyah Takmiliyah Ngudi Luhur",
    peran: "Madrasah diniyah takmiliyah",
    untuk: "Usia SD–remaja",
    ringkas: "Pendidikan diniyah bagi santri usia SD hingga remaja.",
    href: "/pendidikan/mdt",
    logo: "/images/lembaga/mdt-ngudi-luhur.png",
    penerimaan: PSB,
    kontak: [
      { kind: "alamat", label: "Tegalrejo RT 07 DK II Ngentak, Bangunjiwo, Kasihan, Bantul, DIY" },
      { kind: "nss", label: "NSS 311234020118" },
      { kind: "whatsapp", label: "0838-6257-6483", href: "https://wa.me/6283862576483" },
      { kind: "email", label: "madin.ngudi.luhur@gmail.com", href: "mailto:madin.ngudi.luhur@gmail.com" },
    ],
    bagian: kerangkaUnit("MDT", PSB),
  },
  {
    id: "tpq-plus",
    singkatan: "TPQ",
    nama: "TPQ Plus Bangunjiwa",
    namaLengkap: "Taman Pendidikan Al-Qur'an Plus Bangunjiwa",
    peran: "Pendidikan Al-Qur'an",
    untuk: "Usia TK",
    ringkas: "Pendidikan Al-Qur'an bagi anak usia TK.",
    href: "/pendidikan/tpq-plus",
    logo: "/images/lembaga/tpq-plus.png",
    penerimaan: PSB,
    kontak: [
      { kind: "alamat", label: "Wonotawang RT 09, Ngentak, Bangunjiwa, Kasihan, Bantul, DIY" },
      { kind: "telepon", label: "0877-3886-6689", href: "tel:+6287738866689" },
      { kind: "telepon", label: "0895-4172-64882", href: "tel:+62895417264882" },
      { kind: "email", label: "tpq.bangunjiwa01@gmail.com", href: "mailto:tpq.bangunjiwa01@gmail.com" },
      { kind: "instagram", label: "@tpq.plus_bangunjiwa", href: "https://www.instagram.com/tpq.plus_bangunjiwa/" },
    ],
    bagian: kerangkaUnit("TPQ Plus", PSB),
  },
  {
    id: "pra-tpq",
    singkatan: "Pra-TPQ",
    nama: "Pra-TPQ Bangunjiwa",
    namaLengkap: "Playground Ngaji",
    peran: "Pra-TPQ",
    untuk: "Usia PAUD",
    ringkas: "Playground ngaji: mengenalkan Al-Qur'an kepada anak usia PAUD sambil bermain.",
    href: "/pendidikan/pra-tpq",
    penerimaan: PSB,
    kontak: [],
    bagian: kerangkaUnit("Pra-TPQ", PSB),
  },
];

export function getLembaga(id: Lembaga["id"]) {
  return LEMBAGA_BANGUNJIWA.find((l) => l.id === id)!;
}

/** Program unggulan PPM menurut struktur yayasan. */
export const PPM_PROGRAM = [
  {
    judul: "Pesantren Mahasiswa",
    keterangan: "Untuk mahasiswa dan santri umum.",
  },
  {
    judul: "Diklat Guru / Magang",
    keterangan: "Pendidikan dan pemagangan guru TPQ, Madin, dan PPM.",
  },
  {
    judul: "Diklat Wali / Orang Tua & Pendamping KBM",
    keterangan: "Kelas bagi wali santri, orang tua, dan pendamping kegiatan belajar mengajar.",
  },
];

export type BidangProgram = {
  id: "dirosah-islamiyah" | "vokasi" | "kewirausahaan" | "dana-abadi";
  nama: string;
  ringkas: string;
  href: string;
  /** Sub-program; `href` hanya diisi bila halamannya sudah ada. */
  items: { judul: string; keterangan?: string; href?: string; anak?: string[] }[];
};

export const BIDANG_PROGRAM: BidangProgram[] = [
  {
    id: "dirosah-islamiyah",
    nama: "Pendidikan Dirosah Islamiyah",
    ringkas: "Pendidikan keislaman berjenjang, dari usia PAUD hingga mahasiswa.",
    href: "/pendidikan",
    items: [
      {
        judul: "PPM Bangunjiwa",
        href: "/pendidikan/ppm",
        anak: PPM_PROGRAM.map((p) => p.judul),
      },
      { judul: "Madinta / MDT", keterangan: "Usia SD–remaja", href: "/pendidikan/mdt" },
      { judul: "TPQ Plus Bangunjiwa", keterangan: "Usia TK", href: "/pendidikan/tpq-plus" },
      { judul: "Pra-TPQ (Playground Ngaji)", keterangan: "Usia PAUD", href: "/pendidikan/pra-tpq" },
    ],
  },
  {
    id: "vokasi",
    nama: "Pendidikan Vokasi",
    ringkas: "Pendidikan keterampilan berbasis pesantren hijau.",
    href: "/vokasi",
    items: [
      {
        judul: "AKPH — Akademi Komunitas Pesantren Hijau",
        anak: ["Pesantren Mahasiswa / Sobat Hijau (ESG)", "LPPM ESG"],
      },
    ],
  },
  {
    id: "kewirausahaan",
    nama: "Pengembangan Kewirausahaan & BUMP",
    ringkas: "Unit usaha yayasan yang menopang kemandirian pesantren.",
    href: "/kewirausahaan",
    items: [
      { judul: "Perniagaan & Grosir Sembako & Air" },
      { judul: "Kitabumi Media", keterangan: "e-medsos, e-jurnal, e-pop/book" },
      { judul: "Lab Digital Dev" },
    ],
  },
  {
    id: "dana-abadi",
    nama: "Dana Abadi Pesantren Hijau",
    ringkas: "Pendanaan berkelanjutan untuk pendidikan dan program yayasan.",
    href: "/dana-abadi",
    items: [
      { judul: "UPZIS & Wakaf" },
      { judul: "Crowdfunding Management", keterangan: "Kampanye yang dapat Anda dukung", href: "/dana-abadi/crowdfunding" },
    ],
  },
];

export function getBidang(id: BidangProgram["id"]) {
  return BIDANG_PROGRAM.find((b) => b.id === id)!;
}
