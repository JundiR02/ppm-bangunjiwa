# Bangunjiwa: arah desain

Dokumen ini mencatat arah desain situs Yayasan Pesantren Masyarakat Bangunjiwa sebagaimana sudah dibangun dan disetujui pengelola (Oktober 2026). Ia menggantikan spesifikasi lama "Portal Pesantren Hijau" (Manrope, Forest #1B4332, peta MRV, dsb.) yang tidak pernah dibangun.

Dial: ENERGY 2 / RHYTHM 2 / MOTION 1

## Identitas

- Situs milik yayasan, bukan satu unit. Struktur mengikuti dokumen yayasan: Tentang, Program (4 bidang), PMB & PSB, Donasi, Kontak.
- Nada: pesantren yang tenang dan apa adanya. Kalimat biasa, fakta konkret, tanpa slogan, tanpa angka yang tidak ada sumbernya.
- Isi yang belum ada ditampilkan sebagai satu daftar pendek "Sedang disiapkan", tidak dikarang dan tidak dijadikan deretan kotak kosong.

## Warna (diambil dari logo)

| Token | Hex | Asal / peran |
|---|---|---|
| `hijau` | `#0f5f3a` | Cincin hijau logo yayasan. Tombol utama, tautan, pita penting. |
| `hijau-deep` | `#0a4329` | Hover tombol, ujung gradasi. |
| `hijau-ink` | `#072f1d` | Footer, ujung tergelap gradasi. |
| `emas` | `#c9952b` | Ujung kelopak logo. Ornamen dan garis, di atas krem atau hijau tergelap saja. |
| `emas-deep` | `#8a6414` | Teks label emas di atas krem (4.6:1 di `linen`). |
| `emas-muda` | `#f2d38a` | Teks emas di atas hijau. Emas logo hanya 2.9:1 di atas `hijau`, jadi tidak dipakai untuk teks di sana. |
| `frost` | `#fffcf5` | Latar halaman (krem kelopak). |
| `linen` / `ash` | `#f4eddc` / `#e7dcc4` | Pita krem, garis pemisah dekoratif. |
| `garis` | `#8c826b` | Tepi kolom isian dan tombol bergaris (3.7:1 di `frost`, 3.3:1 di `linen`). `ash` terlalu samar untuk batas komponen. |
| `iron` / `iron-deep` / `iron-soft` | `#2e3832` / `#18211b` / `#5a645d` | Teks: hijau-hitam hangat, bukan abu netral. |

Aturan: hijau dan krem adalah dasar, emas satu-satunya aksen. Merah logo tidak dipakai di UI.

## Tipografi

- Judul: Source Serif 4. Dipilih karena serif yang tenang dan editorial terasa lebih dekat ke lembaga pendidikan ketimbang sans teknologi.
- Teks dan antarmuka: Inter.
- Arab: Noto Naskh Arabic, hanya untuk kutipan Qur'an/hadits.
- Label kecil di atas judul: teks emas biasa (`emas-deep`), bukan pil, bukan huruf kapital berjarak lebar.

## Motif

- Bintang delapan (dua persegi bertumpuk) dalam garis emas tipis. Dipakai sebagai pola latar yang memudar di belakang konten (pita hadits) dan sebagai pembatas kecil. Satu motif, diulang, tidak ditambah ornamen lain.
- Garis emas sebagai "pijakan" pada tangga jenjang pendidikan.

## Tata letak

- Navigasi di atas, footer hijau tua. Tidak ada sidebar dashboard.
- Halaman disusun dari bagian yang bentuknya berbeda-beda: hero teks + foto, daftar editorial bergaris, kolom dengan garis hijau di atas, pita selebar layar. Bukan grid kartu yang diulang.
- Kartu hanya untuk hal yang memang berupa objek terpisah (kampanye). Sudut kecil (`rounded-lg`), tanpa bayangan besar, tanpa efek kaca.
- Gradasi hanya bila membawa makna: pita hadits (hijau ke hijau tua) dan tangga jenjang (makin tua usia, makin gelap dan makin tinggi).

## Gerak

- Hover dan fokus saja. Tidak ada animasi muncul saat menggulir, tidak ada loop.

## Aksesibilitas

- Semua teks lolos WCAG AA; pasangan warna di atas diperiksa dengan pemeriksa kontras.
- Fokus keyboard: garis hijau 3px (7.5:1 di krem), emas muda di footer gelap. Jangan pakai `outline-none` tanpa pengganti.
- Tautan "Lewati ke konten" sebagai tab pertama; `scroll-padding-top` menjaga elemen terfokus tidak tertutup header lengket.
- Kerangka memuat dibungkus `Loading` agar pembaca layar mendengar apa yang sedang dimuat.
- Di HP tidak boleh ada gulir horizontal; susunan multi-kolom menjadi tumpukan.
