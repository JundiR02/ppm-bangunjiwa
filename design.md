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
| `frost` | `#fbfaf6` | Latar halaman: putih tulang yang dingin, sengaja tidak krem, supaya kuning kitab menonjol. |
| `linen` / `ash` | `#f1efe7` / `#e2ded2` | Pita terang, garis pemisah dekoratif. |
| `kertas` | `#efe2b3` | Kertas kitab kuning. Hanya untuk halaman kitab bermakna gandul. |
| `tinta` | `#1e1a14` | Tinta teks Arab di atas `kertas` (13.4:1). |
| `garis` | `#8c826b` | Tepi kolom isian dan tombol bergaris (3.7:1 di `frost`, 3.3:1 di `linen`). `ash` terlalu samar untuk batas komponen. |
| `iron` / `iron-deep` / `iron-soft` | `#2e3832` / `#18211b` / `#5a645d` | Teks: hijau-hitam hangat, bukan abu netral. |

Aturan: hijau dan putih tulang adalah dasar, emas untuk garis, kuning kitab hanya di satu tempat. Merah logo tidak dipakai di UI.

## Tipografi

- Judul: Source Serif 4 (permintaan pengelola: "seperti Claude").
- Teks dan antarmuka: Inter.
- Arab: Amiri, naskh bergaya cetakan kitab klasik. Hanya untuk kutipan Qur'an/hadits.
- Makna gandul: Source Serif miring, kecil, hijau, dimiringkan 12 derajat di bawah tiap kata Arab.
- Tanpa label kecil di atas judul, tanpa titik tengah sebagai pemisah, tanpa panah di tombol. Informasi tambahan ditulis sebagai kalimat.

## Motif

- Halaman kitab bermakna gandul (Beranda): hadits di atas `kertas` dalam bingkai garis ganda seperti halaman kitab, setiap kata dengan artinya menggantung miring di bawahnya. Ini satu-satunya elemen yang mencolok; bagian lain tenang. Terjemahan per kata perlu ditinjau ustadz.
- Garis emas sebagai "pijakan" pada tangga jenjang pendidikan.

## Tata letak

- Navigasi di atas, footer hijau tua. Tidak ada sidebar dashboard.
- Halaman disusun dari bagian yang bentuknya berbeda-beda: hero teks + foto, daftar editorial bergaris, kolom dengan garis hijau di atas, pita selebar layar. Bukan grid kartu yang diulang.
- Kartu hanya untuk hal yang memang berupa objek terpisah (kampanye). Sudut kecil (`rounded-lg`), tanpa bayangan besar, tanpa efek kaca.
- Gradasi hanya bila membawa makna: tangga jenjang (makin tua usia, makin gelap dan makin tinggi).

## Gerak

- Hover dan fokus saja. Tidak ada animasi muncul saat menggulir, tidak ada loop.

## Aksesibilitas

- Semua teks lolos WCAG AA; pasangan warna di atas diperiksa dengan pemeriksa kontras.
- Fokus keyboard: garis hijau 3px (7.5:1 di krem), emas muda di footer gelap. Jangan pakai `outline-none` tanpa pengganti.
- Tautan "Lewati ke konten" sebagai tab pertama; `scroll-padding-top` menjaga elemen terfokus tidak tertutup header lengket.
- Kerangka memuat dibungkus `Loading` agar pembaca layar mendengar apa yang sedang dimuat.
- Di HP tidak boleh ada gulir horizontal; susunan multi-kolom menjadi tumpukan.
