# Portal Pesantren Hijau PPM Bangunjiwa — Design & Architecture Master Document

**Status:** Phase 1 foundation document. No code has been written yet — this is the spec every page and component is built against.
**Depth policy for this round:** Home and Dana Abadi are specified to full production depth. Dharma Pendidikan, Khidmah Diniyah, Amal Usaha, Kajian & Riset, Komunitas KWT, and Akidah Hijau Aswaja are specified at IA + wireframe + component-list depth, ready to be expanded to full UI specs in the next round.

## Table of Contents

1. [Philosophy & Core Principles](#1-philosophy--core-principles)
2. [Information Architecture](#2-information-architecture)
3. [Sitemap](#3-sitemap)
4. [User Flows](#4-user-flows)
5. [Design System Overview](#5-design-system-overview)
6. [Color System](#6-color-system)
7. [Typography Scale](#7-typography-scale)
8. [Spacing System](#8-spacing-system)
9. [Responsive Rules](#9-responsive-rules)
10. [Wireframe Descriptions](#10-wireframe-descriptions)
11. [Complete UI Specification](#11-complete-ui-specification)
12. [Component Library](#12-component-library)
13. [Folder Structure](#13-folder-structure)
14. [Next.js Project Architecture](#14-nextjs-project-architecture)
15. [All Pages Reference](#15-all-pages-reference)
16. [Reusable Components — Detailed Spec](#16-reusable-components--detailed-spec)
17. [Dummy Data](#17-dummy-data)
18. [API Interface Examples](#18-api-interface-examples)
19. [Future Scalability Notes](#19-future-scalability-notes)
20. [WordPress + Elementor Recommendations](#20-wordpress--elementor-recommendations)

---

## 1. Philosophy & Core Principles

The portal is not a company profile. It is simultaneously a Digital Office, Digital Campus, Digital Marketplace, Carbon MRV Portal, Endowment Fund Portal, and Community Platform. Three Islamic principles govern every design decision, not just the "About" page.

### 1.1 At-Tawassuth — Moderation (technology serves humanity)

Carbon is never the hero metric on its own. Every environmental number is displayed alongside an equally-weighted social number.

**UI rule:** wherever an impact metric appears (hero counters, dashboard, program cards), it must appear as a *set of three equal-sized cards*, no card larger, bolder, or higher than another:

```
[ Ton CO₂ Tersimpan ]   [ Kesejahteraan Keluarga ]   [ Air Terhemat ]
      1,204 t                   312 KK                    8,4 M L
```

No card gets a primary-color background while others get neutral. No card gets a bigger font size. This rule applies to `<ImpactTriad>` (§16.2) everywhere in the app — home hero, Dana Abadi dashboard, program detail pages, annual report page.

### 1.2 At-Tawazun — Balance (Education / Community / Business)

The three pillars of pesantren activity — Dharma Pendidikan (education), Khidmah Diniyah (community service), Amal Usaha (business) — are always presented as co-equal, never as primary/secondary. Concretely:

- Primary navigation lists them in fixed order with identical visual treatment (same font weight, same icon size, no badge on one and not the others).
- The homepage "Featured Programs" grid gives each pillar the same card size and grid position weight (never a 2-col hero card next to two 1-col cards).
- Color is not used to rank pillars — Forest Green is the *institutional* color, not a "top pillar" color. Sage/Earth/Water are used as neutral category tags, one per pillar, but none carries higher visual priority than another.

### 1.3 I'tidal — Transparency

Every donation, every tree, every rupiah, every carbon credit is traceable to a source and a destination.

**UI rule:** any monetary or environmental record shown to a user must expose, at minimum, three fields together: **amount/quantity, timestamp, and verifiable status** (`Terverifikasi` / `Diproses` / `Tertunda`) — see `<StatusChip>` (§16.6). Financial and impact pages default to *public* visibility unless the data is personally identifying (e.g., donor identity can be anonymized, but the fund flow itself cannot be hidden).

### 1.4 Tone

Trust, calm, editorial — closer to a National Geographic feature or a Stripe product page than a mosque flyer or a NGO fundraising popup. No countdown timers, no urgency red banners, no stock Islamic clip-art, no gold borders, no auto-playing nasheed audio.

---

## 2. Information Architecture

```
Portal Pesantren Hijau PPM Bangunjiwa
│
├── Home (/)
│
├── Dharma Pendidikan (/dharma-pendidikan)              — Digital Campus / LMS
│   ├── Modul (/dharma-pendidikan/modul)
│   │   └── [modul-slug] (/dharma-pendidikan/modul/[slug])
│   │       └── [pelajaran-slug] (.../pelajaran/[slug])
│   ├── Pengajar (/dharma-pendidikan/pengajar)
│   │   └── [pengajar-slug]
│   ├── Sertifikat Saya (/dharma-pendidikan/sertifikat)  [auth]
│   └── Progres Belajar (/dharma-pendidikan/progres)     [auth]
│
├── Khidmah Diniyah (/khidmah-diniyah)                  — Community Service
│   ├── Kalender Kegiatan (/khidmah-diniyah/kalender)
│   ├── [kegiatan-slug] (/khidmah-diniyah/kegiatan/[slug])
│   ├── Daftar Relawan (/khidmah-diniyah/relawan)        [auth]
│   ├── Unggah Dokumentasi (/khidmah-diniyah/dokumentasi) [auth]
│   └── Laporan Kegiatan (/khidmah-diniyah/laporan)
│
├── Amal Usaha (/amal-usaha)                             — Marketplace
│   ├── Bank Sampah (/amal-usaha/bank-sampah)
│   ├── Panen Air Hujan (/amal-usaha/panen-air-hujan)
│   ├── Kompos (/amal-usaha/kompos)
│   ├── Offset Karbon (/amal-usaha/offset-karbon)
│   ├── [produk-slug] (/amal-usaha/produk/[slug])
│   ├── Keranjang (/amal-usaha/keranjang)
│   └── Checkout (/amal-usaha/checkout)
│
├── Kajian & Riset (/kajian-riset)                       — Knowledge Mgmt System
│   ├── Repositori Riset (/kajian-riset/repositori)
│   │   └── [dokumen-slug]
│   ├── Peta Riset (/kajian-riset/peta)
│   ├── Arsip Video (/kajian-riset/video)
│   ├── Laporan Karbon (/kajian-riset/laporan-karbon)
│   └── Akidah Hijau Aswaja (/kajian-riset/akidah-hijau)  — manifesto page
│
├── Dana Abadi (/dana-abadi)                             — Endowment Fund Portal ★ full depth
│   ├── Wakaf Pohon (/dana-abadi/wakaf-pohon)
│   ├── Lacak Pohon Saya (/dana-abadi/lacak/[kode-pohon]) [auth optional]
│   ├── Transparansi Keuangan (/dana-abadi/transparansi)
│   ├── Laporan Bulanan (/dana-abadi/laporan)
│   ├── Peta Dampak (/dana-abadi/peta-dampak)
│   └── Donasi QRIS (/dana-abadi/donasi)
│
├── Komunitas KWT (/komunitas-kwt)                       — Community Platform
│   ├── Masuk / Login (/komunitas-kwt/masuk)
│   ├── Forum (/komunitas-kwt/forum)
│   │   └── [thread-slug]
│   ├── MRV Nexus (/komunitas-kwt/mrv-nexus)             [auth]
│   ├── Formulir Pengaduan (/komunitas-kwt/pengaduan)
│   ├── FPIC (/komunitas-kwt/fpic)
│   └── Musyawarah Digital (/komunitas-kwt/musyawarah)   [auth]
│
├── Dasbor (/dasbor)                                     — Analytics Dashboard [auth-gated for internal roles, public read-only summary]
│
└── Utility
    ├── Tentang Kami (/tentang)
    ├── Kontak (/kontak)
    ├── Kebijakan Privasi (/privasi)
    ├── Syarat & Ketentuan (/syarat)
    └── 404 / 500
```

**Depth note:** Amal Usaha's four stores share one product/cart data model (§17.6) — they are categories, not separate apps.

---

## 3. Sitemap

Flat list with route, auth requirement, and primary CTA — useful for QA and for generating `sitemap.xml`.

| Route | Nav label | Auth | Primary CTA |
|---|---|---|---|
| `/` | Home | Public | Jelajahi Portal |
| `/dharma-pendidikan` | Dharma Pendidikan | Public (enroll = auth) | Mulai Belajar |
| `/dharma-pendidikan/modul/[slug]` | — | Public preview / auth to complete | Lanjutkan Modul |
| `/khidmah-diniyah` | Khidmah Diniyah | Public | Daftar Relawan |
| `/khidmah-diniyah/kegiatan/[slug]` | — | Public / auth to register | Ikut Kegiatan |
| `/amal-usaha` | Amal Usaha | Public (checkout = auth) | Belanja Sekarang |
| `/kajian-riset` | Kajian & Riset | Public | Telusuri Repositori |
| `/kajian-riset/akidah-hijau` | — | Public | Baca Manifesto |
| `/dana-abadi` | Dana Abadi | Public | Wakaf Pohon Sekarang |
| `/dana-abadi/lacak/[kode-pohon]` | — | Public | Lihat di Peta |
| `/komunitas-kwt` | Komunitas KWT | Public landing / auth for forum+MRV | Masuk Komunitas |
| `/dasbor` | — (footer link) | Public summary / auth for full | Lihat Dasbor |
| `/tentang`, `/kontak`, `/privasi`, `/syarat` | Footer | Public | — |

---

## 4. User Flows

### 4.1 Donor — Wakaf Pohon (Tree Endowment)

```
Home hero "Wakaf Pohon" CTA
  → /dana-abadi (dashboard: live counters + map preview)
  → /dana-abadi/wakaf-pohon (select tree species + qty + duration)
  → Konfirmasi ringkasan wakaf (amount, species, planting zone)
  → /dana-abadi/donasi (QRIS payment sheet, modal, non-blocking)
  → Payment webhook confirms → Konfirmasi page: "Pohon Anda telah dicatat"
  → Email + in-app: kode pohon (e.g. TRK-2026-00842)
  → /dana-abadi/lacak/TRK-2026-00842 (GPS pin, growth photos timeline, CO₂ estimate)
```
Drop-off risk points: payment step (must show trust markers — verified badge, bank/QRIS logos, no dark patterns) and post-donation (must send confirmation within seconds, not "processing" limbo).

### 4.2 Prospective Santri / Learner — Dharma Pendidikan

```
Home → Dharma Pendidikan nav
  → Browse modules (Fiqih Lingkungan, MRV, Pranata Mangsa)
  → Open module preview (first lesson free, rest gated)
  → Sign up / login
  → Enroll → lesson player (video/text/quiz)
  → Progress auto-saves → /dharma-pendidikan/progres
  → Complete module → certificate auto-generated (PDF + verifiable link)
```

### 4.3 KWT Community Member — MRV Reporting

```
/komunitas-kwt → Masuk (login)
  → Dashboard: my plots, pending reports, forum notifications
  → MRV Nexus → submit field data (species, GPS, photo, measurement)
  → Status: Diproses → Terverifikasi (by field officer)
  → Data flows into public /dana-abadi/peta-dampak and /kajian-riset/laporan-karbon
```

### 4.4 Researcher / Public — Kajian & Riset

```
Home or search engine → /kajian-riset
  → Filter repositori by topic/year/type (peer-reviewed, laporan lapangan, skripsi santri)
  → Open document → PDF viewer + citation block + related map layer
  → Optional: open Akidah Hijau Aswaja manifesto from related-reading rail
```

### 4.5 Volunteer — Khidmah Diniyah

```
Home or /khidmah-diniyah → Kalender Kegiatan
  → Filter (Jumat Bersih, Jumat Menanam, kegiatan komunitas)
  → Open kegiatan detail → Daftar Relawan (form: name, contact, availability)
  → Confirmation → reminder before event
  → Post-event: Unggah Dokumentasi (photo/report) → appears in Laporan Kegiatan + home timeline
```

---

## 5. Design System Overview

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, Server Components by default) |
| Language | TypeScript, strict mode |
| Styling | TailwindCSS + CSS variables for tokens (theme-able, dark-mode ready) |
| Component primitives | shadcn/ui (Radix-based), customized to token set below — never used unstyled/default |
| Motion | Framer Motion — fade/parallax/count-up/hover-lift/scroll-reveal only, no bounce/spring showmanship |
| Maps | LeafletJS + OpenStreetMap tiles, `react-leaflet` wrapper |
| Charts | Recharts, restyled to token palette |
| Forms | React Hook Form + Zod validation |
| Data fetching | React Query (client), native `fetch` with Next.js caching (server) |
| Icons | Lucide, 1.5px stroke, sized 20/24 |

Design personality in one line: **"Apple's calm + National Geographic's warmth + Stripe's precision — never a template."**

---

## 6. Color System

### 6.1 Brand palette (base tokens from brief)

| Token | Hex | Role |
|---|---|---|
| `--color-primary` (Forest Green) | `#1B4332` | Institutional color, nav, primary buttons, headings on light bg |
| `--color-secondary` (Sage Green) | `#95D5B2` | Education pillar accent, soft backgrounds, success states |
| `--color-accent-earth` | `#D4A373` | Business/marketplace pillar accent, warm highlights |
| `--color-accent-water` | `#4EA8DE` | Carbon/water metrics, informational accents, links on dark bg |
| `--color-bg` (Warm White) | `#FAFAF7` | Page background |
| `--color-text` | `#111111` | Primary text |
| `--color-bg-muted` (Light Gray) | `#F3F4F6` | Section alternation, card backgrounds, input fields |

### 6.2 Full scales (generated at consistent HSL lightness steps from each base — use for hover/active/border/disabled states, not for introducing new brand colors)

**Forest (primary) — `forest-*`**
| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 (base) | 800 | 900 | 950 |
|---|---|---|---|---|---|---|---|---|---|---|
| `#F0F7F3` | `#DCEEE3` | `#B9DDC8` | `#8FC7A8` | `#5FA97F` | `#3D8760` | `#276A49` | `#1B4332` | `#143627` | `#0F2A1E` | `#081712` |

**Sage (secondary) — `sage-*`**
| 50 | 100 | 200 | 300 (base) | 400 | 500 | 600 | 700 |
|---|---|---|---|---|---|---|---|
| `#F3FBF7` | `#E1F5EA` | `#C3EBD5` | `#95D5B2` | `#6FC594` | `#4CAE79` | `#398D5F` | `#2C6F4B` |

**Earth (accent) — `earth-*`**
| 50 | 100 | 200 | 300 (base) | 400 | 500 | 600 |
|---|---|---|---|---|---|---|
| `#FBF6F0` | `#F3E5D3` | `#E7CBA7` | `#D4A373` | `#C08750` | `#A66E3C` | `#93673D` |

**Water (accent) — `water-*`**
| 50 | 100 | 200 | 300 (base) | 400 | 500 | 600 |
|---|---|---|---|---|---|---|
| `#EEF7FD` | `#D3EAFA` | `#A7D5F5` | `#4EA8DE` | `#2A8FCB` | `#2277B0` | `#1D6C9C` |

**Neutral — `neutral-*`** (warm-tinted gray, not pure gray, to sit next to `#FAFAF7`)
| 0 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|---|
| `#FFFFFF` | `#FAFAF7` | `#F3F4F6` | `#E7E7E2` | `#D4D4CD` | `#A8A89E` | `#7A7A6E` | `#5C5C52` | `#3F3F38` | `#26261F` | `#111111` |

### 6.3 Semantic colors

| Token | Light mode | Usage |
|---|---|---|
| `--success` | `sage-600 #398D5F` | Verified status, positive delta |
| `--warning` | `earth-500 #A66E3C` | Pending/diproses status |
| `--error` | `#B3261E` | Failed payment, form errors |
| `--info` | `water-400 #2A8FCB` | Informational banners, links |

### 6.4 Dark mode

Dark mode is not "invert everything" — it follows Apple/Vercel convention: near-black warm background, desaturated brand colors for text/icons, saturated brand colors reserved for accents/buttons only.

| Token | Dark value |
|---|---|
| `--color-bg` | `#0F1210` |
| `--color-bg-muted` | `#181B18` |
| `--color-text` | `#F3F4F1` |
| `--color-primary` (surfaces) | `sage-300 #95D5B2` (forest-700 is too dark to read as text on near-black) |
| Card surface | `#161915` with 1px `neutral-800`-equivalent border, no drop shadow (use border instead) |

### 6.5 Accessibility rules

- Body text must hit **WCAG AA (4.5:1)** against its background at all times; `forest-700` on `#FAFAF7` = 10.9:1 (pass). `sage-300` on white fails for text — sage is background/accent only, never body text on light mode.
- Never convey status by color alone — `<StatusChip>` always pairs color with an icon + label (§16.6).
- Focus rings: 2px `water-400`, 2px offset, visible in both themes, never removed via `outline: none` without replacement.

---

## 7. Typography Scale

Fonts: **Manrope** (headings, weights 500/700/800), **Inter** (body/UI, weights 400/500/600), **Noto Naskh Arabic** (Arabic quotes only, weight 400/700).

| Token | Font | Desktop size/line-height | Mobile size/line-height | Weight | Usage |
|---|---|---|---|---|---|
| `display` | Manrope | 64px / 72px | 40px / 48px | 800 | Hero headline only |
| `h1` | Manrope | 48px / 56px | 32px / 40px | 700 | Page titles |
| `h2` | Manrope | 36px / 44px | 28px / 36px | 700 | Section titles |
| `h3` | Manrope | 28px / 36px | 22px / 30px | 700 | Card group titles |
| `h4` | Manrope | 22px / 30px | 18px / 26px | 600 | Card titles |
| `h5` | Manrope | 18px / 26px | 16px / 24px | 600 | Eyebrow/label headers |
| `body-lg` | Inter | 18px / 28px | 17px / 27px | 400 | Lead paragraphs |
| `body` | Inter | 16px / 26px | 15px / 24px | 400 | Default body |
| `body-sm` | Inter | 14px / 22px | 14px / 22px | 400 | Meta, captions on cards |
| `caption` | Inter | 12px / 18px | 12px / 18px | 500 | Timestamps, labels, chips |
| `arabic-quote` | Noto Naskh Arabic | 32px / 56px | 24px / 44px | 400 | Qur'an/hadith excerpts |
| `mono-stat` | Manrope (tabular-nums) | 40px / 44px | 32px / 36px | 800 | Counter numbers (trees, tons CO₂) |

Letter-spacing: headings `-0.01em`, `display` `-0.02em`, body `0`, `caption` `0.02em` (uppercase labels get `0.04em`).

---

## 8. Spacing System

Base unit: **4px**. Scale exposed as Tailwind spacing tokens:

`0, 1(4px), 2(8px), 3(12px), 4(16px), 5(20px), 6(24px), 8(32px), 10(40px), 12(48px), 16(64px), 20(80px), 24(96px), 32(128px), 40(160px), 48(192px)`

| Context | Value |
|---|---|
| Card internal padding | 24px mobile / 32px desktop |
| Section vertical rhythm | 64px mobile / 128px desktop between major sections |
| Grid gutter | 16px mobile / 24–32px desktop |
| Page gutter (margin) | 20px mobile / 64px desktop / 96px on ≥1536px |
| Component-to-component gap (buttons, chips) | 8–12px |

### Layout grid & containers

| Container | Max-width |
|---|---|
| `container-sm` | 640px (forms, single-column reading) |
| `container-md` | 768px (article body, manifesto page) |
| `container-lg` | 1024px (standard page content) |
| `container-xl` | 1280px (dashboards, grids) |
| `container-2xl` | 1440px (marketing sections) |
| Full-bleed hero | 100vw, inner content pinned to `container-xl` |

12-column grid on desktop (24px gutter), 4-column on mobile (16px gutter).

---

## 9. Responsive Rules

| Breakpoint | Width | Behavior |
|---|---|---|
| `xs` | <640px | Single column, mobile drawer nav, stacked stat cards, sticky bottom CTA on donation/checkout flows |
| `sm` | ≥640px | 2-column card grids begin |
| `md` | ≥768px | Tablet: sidebar nav collapses to icon rail on internal apps (LMS, MRV Nexus) |
| `lg` | ≥1024px | Full desktop nav (mega menu), 3-column grids, map + sidebar split layouts |
| `xl` | ≥1280px | Dashboard multi-panel layouts activate |
| `2xl` | ≥1536px | Max content width caps, extra whitespace added at page gutters, not content stretch |

Rules:
- Touch targets minimum 44×44px on all interactive elements at `xs`/`sm`.
- Mega menu (desktop `lg`+) becomes a full-height slide-in drawer with accordion sections below `lg`.
- Maps default to 40vh height on mobile, 60–70vh on desktop, always with a "fullscreen" expand control.
- Tables (transparency ledger, marketplace orders) become stacked card-rows below `md`, never horizontal-scroll-only.
- WCAG AA target throughout; all interactive components keyboard-navigable (Radix primitives via shadcn/ui handle most of this by default).

---

## 10. Wireframe Descriptions

### 10.1 Home (`/`) — full depth

```
┌────────────────────────────────────────────────────────┐
│ [Navbar: logo | Home Dharma Khidmah Amal Kajian Dana    │
│  Komunitas | 🌙 | Masuk]  (transparent → solid on scroll)│
├────────────────────────────────────────────────────────┤
│ HERO — full-bleed cinematic drone video/image            │
│   Overlay gradient (forest-900 → transparent, bottom-up) │
│   Arabic quote (Noto Naskh) + Indonesian translation      │
│   "Menanam Pohon adalah Shodaqah Jariyah"                │
│   [Jelajahi Portal]  [Pelajari Lebih Lanjut]              │
│   scroll-cue chevron, subtle bounce                       │
├────────────────────────────────────────────────────────┤
│ LIVE IMPACT DASHBOARD (ImpactTriad, count-up on scroll)   │
│   [Pohon]  [Karbon]  [Air]  [Keluarga]  [Dana Abadi]      │
│   5 equal stat cards, responsive 2-col mobile / 5-col xl  │
├────────────────────────────────────────────────────────┤
│ THREE PILLARS (At-Tawassuth / At-Tawazun / I'tidal)       │
│   3 equal illustrated cards, alternating layout on scroll │
├────────────────────────────────────────────────────────┤
│ FEATURED PROGRAMS — grid, 7 co-equal cards                │
│   Dharma Pendidikan / Khidmah Diniyah / Amal Usaha /       │
│   Kajian & Riset / Dana Abadi / Forest / Komunitas KWT     │
├────────────────────────────────────────────────────────┤
│ LATEST ACTIVITIES — horizontal timeline + photo gallery    │
├────────────────────────────────────────────────────────┤
│ MAP SECTION — Leaflet/OSM preview, "Lihat Peta Lengkap"    │
├────────────────────────────────────────────────────────┤
│ TESTIMONIALS — quiet carousel, santri/KWT/donor voices      │
├────────────────────────────────────────────────────────┤
│ DONATION CTA — Wakaf Pohon / Track Your Tree, split panel  │
├────────────────────────────────────────────────────────┤
│ FOOTER — minimal, 4-col link groups + newsletter + socials │
└────────────────────────────────────────────────────────┘
```

### 10.2 Dana Abadi (`/dana-abadi`) — full depth

```
┌────────────────────────────────────────────────────────┐
│ Page header: "Dana Abadi" + one-line mission statement    │
│ ImpactTriad (funds raised / trees endowed / families      │
│   supported) — same equal-weight rule as home              │
├────────────────────────────────────────────────────────┤
│ TABS: Ringkasan | Wakaf Pohon | Transparansi | Peta Dampak │
│──────────────────────────────────────────────────────────│
│ RINGKASAN (default tab)                                   │
│  ┌─────────────────────┐ ┌────────────────────────────┐  │
│  │ Fund progress bar    │ │ Recent transactions ledger  │  │
│  │ target vs. terkumpul │ │ (amount, date, status chip, │  │
│  │                       │ │ anonymized/named donor)     │  │
│  └─────────────────────┘ └────────────────────────────┘  │
│  Monthly report cards (PDF download, 1 per month)          │
├────────────────────────────────────────────────────────┤
│ WAKAF POHON tab                                            │
│  Species picker (cards: Trembesi, Alpukat, Aren...)         │
│  Quantity stepper + duration + price summary                │
│  → CTA "Lanjutkan ke Donasi" → QRIS modal sheet              │
├────────────────────────────────────────────────────────┤
│ TRANSPARANSI tab                                            │
│  Sankey-style or stacked-bar flow: Sumber Dana → Alokasi     │
│  Full ledger table (paginated), filter by month/category     │
├────────────────────────────────────────────────────────┤
│ PETA DAMPAK tab                                              │
│  Full Leaflet map: tree markers (clustered), watershed layer, │
│  carbon layer toggle, search by kode pohon                    │
└────────────────────────────────────────────────────────┘
```

### 10.3 Other pages (light wireframe notes)

- **Dharma Pendidikan:** hero + module grid (cards: cover, level, duration, progress bar if enrolled) + instructor rail + certificate CTA.
- **Khidmah Diniyah:** hero + filterable calendar (list/calendar toggle) + activity detail template (cover photo, description, volunteer count, register CTA) + report gallery masonry.
- **Amal Usaha:** hero + 4 store tiles → shared PLP (product listing page: filter/sort/grid) → PDP (product detail: gallery, price, impact note, add-to-cart) → cart → checkout (address, payment, confirmation).
- **Kajian & Riset:** hero + repository search/filter bar + document grid (type badge: Riset/Laporan/Skripsi) + document detail (PDF viewer + citation + map/video embeds) + Akidah Hijau manifesto entry card.
- **Komunitas KWT:** gated landing (public teaser + login) → authenticated dashboard shell (sidebar: Forum, MRV Nexus, Pengaduan, FPIC, Musyawarah) each as its own module.
- **Akidah Hijau Aswaja (manifesto):** single long-form editorial scroll, large type (`display`/`h1` scale), full-bleed section breaks between Tauhid Ekologi / Sunnah Konservasi / Ijma Ulama Lokal / 'Urf Nusantara, no sidebar, no ads, reading progress bar.
- **Dasbor:** grid of stat cards + Recharts (line/bar/area) + mini map + MRV status table; public view shows aggregate-only, authenticated internal roles see drill-down.

---

## 11. Complete UI Specification

### 11.1 Home — section-by-section spec

| Section | Component(s) | Data needed | States |
|---|---|---|---|
| Navbar | `<Navbar>`, `<MegaMenu>`, `<MobileDrawer>`, `<ThemeToggle>` | nav tree (§2) | transparent-on-hero → solid-on-scroll, mobile drawer open/closed |
| Hero | `<Hero video/image>`, `<ArabicQuote>`, `<CtaGroup>` | media URL, quote text+translation, 2 CTA links | video loading fallback = static image poster |
| Live Impact | `<ImpactTriad count={5}>` | `GET /api/impact/summary` (§18.1) | loading skeleton, count-up animation triggers once on viewport enter |
| Three Pillars | `<PillarCard>` × 3 | static content (title, description, illustration, philosophy tag) | hover-lift |
| Featured Programs | `<ProgramCard>` × 7 in `<EqualGrid>` | static + live counts per program | hover-lift, focus-visible ring |
| Latest Activities | `<Timeline>` + `<GalleryMasonry>` | `GET /api/activities?limit=6` | empty state: "Belum ada kegiatan terbaru" |
| Map preview | `<MapPreview>` (Leaflet, non-interactive zoom-lock) | `GET /api/map/points?preview=true` | loading skeleton, "Lihat Peta Lengkap →" link to full map page |
| Testimonials | `<TestimonialCarousel>` | `GET /api/testimonials` | auto-advance paused on hover/focus, manual dots |
| Donation CTA | `<SplitCta>` (Wakaf Pohon / Lacak Pohon) | 2 CTA links | — |
| Footer | `<Footer>` | nav tree + socials + newsletter form | newsletter submit success/error toast |

### 11.2 Dana Abadi — section-by-section spec

| Section | Component(s) | Data needed | States |
|---|---|---|---|
| Header + ImpactTriad | `<PageHeader>`, `<ImpactTriad>` | `GET /api/dana-abadi/summary` | loading skeleton |
| Tabs | `<Tabs>` (Ringkasan/Wakaf Pohon/Transparansi/Peta Dampak) | — | URL-synced (`?tab=`), keyboard arrow navigation |
| Fund progress | `<ProgressBar>` + target/terkumpul labels | `target`, `raised` from summary | — |
| Ledger table | `<TransparencyTable>` | `GET /api/dana-abadi/ledger?page=` | paginated, empty, error-retry |
| Monthly reports | `<ReportCard>` grid | `GET /api/dana-abadi/reports` | PDF download link, "Segera hadir" for current month |
| Species picker | `<SpeciesCard>` selectable grid | static species catalog with price | selected state, out-of-stock/season disabled state |
| Wakaf form | `<QuantityStepper>`, `<PriceSummary>`, RHF+Zod form | computed total | validation errors inline |
| QRIS modal | `<DonationSheet>` | `POST /api/donations` → QRIS payload | pending (polling)/success/failed/timeout states |
| Transparency flow | `<FundFlowChart>` (Recharts sankey/stacked bar) | `GET /api/dana-abadi/flow` | — |
| Impact map | `<MapView full>` with cluster + layer toggle | `GET /api/map/points`, `GET /api/map/layers` | cluster expand, marker popup with tree detail + photo |
| Tree tracker | `<TreeTrackerCard>` (from `/lacak/[kode]`) | `GET /api/trees/[kode]` | photo timeline, CO₂ estimate, GPS pin, "belum ada foto terbaru" empty state |

Full specs for the remaining five pages + Akidah Hijau + Dasbor will follow the same table format in the next round, once Dana Abadi and Home are validated.

---

## 12. Component Library

Inventory (built once, reused everywhere). ✅ = fully specified in §16 this round.

**Navigation:** Navbar ✅, MegaMenu ✅, MobileDrawer, Breadcrumb, Sidebar (internal apps), Tabs ✅, Pagination
**Layout:** PageHeader, EqualGrid ✅, Section, Container, SplitCta
**Content:** Card ✅, ProgramCard ✅, PillarCard, StatCard ✅, ImpactTriad ✅, Timeline, GalleryMasonry, TestimonialCarousel, ArabicQuote
**Data display:** Table / TransparencyTable ✅, StatusChip ✅, Badge, ProgressBar ✅, Accordion, ReportCard
**Forms:** Input, Select, QuantityStepper, Textarea, Checkbox/Radio, FileUpload (dokumentasi/MRV photo), FormField wrapper (RHF+Zod bound)
**Commerce:** ProductCard, Cart, PriceSummary, DonationSheet ✅, SpeciesCard
**Maps & charts:** MapView / MapPreview ✅, LayerToggle, ChartCard (Recharts wrapper)
**Feedback:** Toast, Skeleton, EmptyState, ErrorState, Modal/Sheet
**Buttons:** Button ✅ (primary/secondary/ghost/link × sm/md/lg), IconButton
**Brand:** Logo, ThemeToggle, StatCounter (count-up primitive used inside StatCard/ImpactTriad)

---

## 13. Folder Structure

```
ppm-riset-ekologi-bangunjiwa/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                         # Home
│   │   ├── tentang/page.tsx
│   │   ├── kontak/page.tsx
│   │   ├── privasi/page.tsx
│   │   └── syarat/page.tsx
│   ├── dharma-pendidikan/
│   │   ├── page.tsx
│   │   ├── modul/[slug]/page.tsx
│   │   ├── modul/[slug]/pelajaran/[lessonSlug]/page.tsx
│   │   ├── pengajar/[slug]/page.tsx
│   │   ├── sertifikat/page.tsx
│   │   └── progres/page.tsx
│   ├── khidmah-diniyah/
│   │   ├── page.tsx
│   │   ├── kalender/page.tsx
│   │   ├── kegiatan/[slug]/page.tsx
│   │   ├── relawan/page.tsx
│   │   ├── dokumentasi/page.tsx
│   │   └── laporan/page.tsx
│   ├── amal-usaha/
│   │   ├── page.tsx
│   │   ├── bank-sampah/page.tsx
│   │   ├── panen-air-hujan/page.tsx
│   │   ├── kompos/page.tsx
│   │   ├── offset-karbon/page.tsx
│   │   ├── produk/[slug]/page.tsx
│   │   ├── keranjang/page.tsx
│   │   └── checkout/page.tsx
│   ├── kajian-riset/
│   │   ├── page.tsx
│   │   ├── repositori/[slug]/page.tsx
│   │   ├── peta/page.tsx
│   │   ├── video/page.tsx
│   │   ├── laporan-karbon/page.tsx
│   │   └── akidah-hijau/page.tsx
│   ├── dana-abadi/
│   │   ├── page.tsx                          # tabs: ringkasan/wakaf/transparansi/peta
│   │   ├── wakaf-pohon/page.tsx
│   │   ├── lacak/[kodePohon]/page.tsx
│   │   ├── transparansi/page.tsx
│   │   ├── laporan/page.tsx
│   │   ├── peta-dampak/page.tsx
│   │   └── donasi/page.tsx
│   ├── komunitas-kwt/
│   │   ├── page.tsx
│   │   ├── masuk/page.tsx
│   │   ├── forum/page.tsx
│   │   ├── forum/[thread]/page.tsx
│   │   ├── mrv-nexus/page.tsx
│   │   ├── pengaduan/page.tsx
│   │   ├── fpic/page.tsx
│   │   └── musyawarah/page.tsx
│   ├── dasbor/page.tsx
│   ├── api/                                   # Next.js route handlers (BFF layer, proxies to CMS/Nexus)
│   │   ├── impact/summary/route.ts
│   │   ├── dana-abadi/[...]/route.ts
│   │   ├── trees/[kode]/route.ts
│   │   ├── activities/route.ts
│   │   └── donations/route.ts
│   ├── layout.tsx                             # root layout: fonts, ThemeProvider, Navbar, Footer
│   ├── globals.css                            # Tailwind base + CSS variable tokens
│   ├── not-found.tsx
│   └── error.tsx
├── components/
│   ├── ui/                                    # shadcn/ui primitives, restyled (button, card, tabs, dialog...)
│   ├── layout/                                # Navbar, MegaMenu, MobileDrawer, Footer, Sidebar
│   ├── impact/                                # ImpactTriad, StatCard, StatCounter, PillarCard
│   ├── programs/                               # ProgramCard, EqualGrid
│   ├── maps/                                   # MapView, MapPreview, LayerToggle, ClusterMarker
│   ├── charts/                                 # ChartCard, FundFlowChart
│   ├── commerce/                               # ProductCard, Cart, DonationSheet, SpeciesCard
│   ├── forms/                                  # FormField, FileUpload, QuantityStepper
│   └── content/                                # ArabicQuote, Timeline, GalleryMasonry, TestimonialCarousel
├── lib/
│   ├── api/                                    # typed fetch clients per domain (see §18)
│   │   ├── client.ts                           # base fetch wrapper (auth header, error normalization)
│   │   ├── impact.ts
│   │   ├── dana-abadi.ts
│   │   ├── lms.ts
│   │   ├── marketplace.ts
│   │   └── mrv.ts
│   ├── schemas/                                # Zod schemas (mirror API interfaces §18)
│   ├── hooks/                                  # useImpactSummary, useCart, useTreeTracker (React Query)
│   ├── utils.ts                                # cn(), formatRupiah(), formatCO2()
│   └── constants.ts                            # nav tree, brand tokens re-exported for JS usage
├── content/                                     # MDX for Akidah Hijau + static editorial content (if not CMS-driven)
├── public/
│   ├── fonts/
│   ├── images/
│   └── icons/
├── types/                                       # shared TS types generated/mirrored from API interfaces
├── middleware.ts                                # auth gate for /komunitas-kwt/*, /dharma-pendidikan/sertifikat etc.
├── tailwind.config.ts
├── next.config.ts
└── design.md                                    # this document
```

---

## 14. Next.js Project Architecture

- **Rendering strategy:** Server Components by default for all content pages (SEO-critical: Home, Kajian & Riset, Akidah Hijau, program pages). Client Components only where interaction demands it: maps, cart, forms, tabs with client state, count-up animations, dashboard charts.
- **Data fetching:** Server Components fetch directly via `lib/api/*` typed clients using Next.js `fetch` with tagged caching (`next: { revalidate, tags }`). Client-side interactive data (cart, MRV submissions, dashboard live-refresh) uses React Query, hydrated from the same typed clients.
- **Revalidation:** ISR per content domain — marketing/program pages `revalidate: 3600`, impact counters `revalidate: 60`, ledger/transparency `revalidate: 300`, on-demand `revalidateTag` triggered by CMS webhook when content publishes.
- **Auth:** middleware-based route protection for `/komunitas-kwt/*` (except landing), `/dharma-pendidikan/sertifikat`, `/dharma-pendidikan/progres`, `/khidmah-diniyah/relawan`, `/amal-usaha/checkout`. Session via httpOnly cookie issued by backend (Laravel/WordPress) — Next.js never holds credentials, only validates a signed session token.
- **API layer abstraction:** every domain has one typed client module (`lib/api/dana-abadi.ts` etc.) that hides whether the backend is WordPress Headless, Laravel, or MRV Nexus — see §18 and §19 for the adapter pattern.
- **State management:** no global client store needed beyond React Query cache + small Zustand slice for cart/UI state (theme, mobile drawer open) — avoid Redux, avoid prop-drilling by keeping state colocated.
- **i18n-ready:** all copy in `lib/content/id/*.json`-style dictionaries from day one even though only Bahasa Indonesia ships first, so English/Arabic can be added later without refactor (see §19).
- **SEO:** `generateMetadata` per route, JSON-LD structured data for Organization + Article (Kajian & Riset) + Product (Amal Usaha) + Event (Khidmah Diniyah kegiatan), `sitemap.ts` + `robots.ts` generated from the route table in §3.

---

## 15. All Pages Reference

Quick reference table (route → purpose → status this round). Full UI-spec tables like §11 will be produced for each ★ page in the next round.

| Page | Purpose | This round |
|---|---|---|
| Home | Portal front door, live impact, program discovery | ★ Full spec (§11.1) |
| Dana Abadi | Endowment fund transparency + tree wakaf + tracking | ★ Full spec (§11.2) |
| Dharma Pendidikan | LMS: modules, certificates, instructors | IA + wireframe only |
| Khidmah Diniyah | Volunteer calendar + reporting | IA + wireframe only |
| Amal Usaha | 4-store marketplace | IA + wireframe only |
| Kajian & Riset | Research repository + KMS | IA + wireframe only |
| Akidah Hijau Aswaja | Editorial manifesto | IA + wireframe only |
| Komunitas KWT | Gated community platform + MRV | IA + wireframe only |
| Dasbor | Cross-domain analytics | IA + wireframe only |

---

## 16. Reusable Components — Detailed Spec

Prop-level spec for the components used by Home + Dana Abadi (the two fully-specified pages). All are React Server Components unless marked **(client)**.

### 16.1 `<Button>`
```ts
type ButtonProps = {
  variant: "primary" | "secondary" | "ghost" | "link"
  size: "sm" | "md" | "lg"
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  loading?: boolean
  disabled?: boolean
} & (AnchorProps | NativeButtonProps)
```
`primary` = `forest-700` bg / white text, hover `forest-800`. `secondary` = `sage-100` bg / `forest-700` text. `ghost` = transparent / `forest-700` text, hover `neutral-100` bg. `link` = no bg, underline on hover. All variants: 8px radius, 44px min height at `md`.

### 16.2 `<ImpactTriad>` **(client — count-up on scroll)**
```ts
type ImpactMetric = { id: string; label: string; value: number; unit: string; icon: LucideIcon }
type ImpactTriadProps = { metrics: ImpactMetric[] /* 3 or 5, always equal-weight */ }
```
Renders `metrics` in an `EqualGrid` — every card identical width/height/font-size/weight regardless of value magnitude (enforces §1.1). Uses `<StatCounter>` internally with `IntersectionObserver`-triggered count-up (1.2s ease-out), respects `prefers-reduced-motion` (renders final value immediately if set).

### 16.3 `<StatCard>`
```ts
type StatCardProps = { icon: LucideIcon; label: string; value: string; delta?: { value: string; direction: "up"|"down"|"flat" }; tone?: "neutral" }
```
`tone` intentionally has only `"neutral"` as a default — no `"success"`/`"primary"` tone variant is exposed on this component, precisely so no single stat can be visually promoted above its siblings (§1.1 guardrail baked into the type, not just the design).

### 16.4 `<ProgramCard>`
```ts
type ProgramCardProps = { title: string; description: string; href: string; illustration: string; pillar: "pendidikan"|"khidmah"|"usaha"|"kajian"|"dana"|"forest"|"komunitas" }
```
`pillar` maps to a tag color (sage/earth/water/neutral rotation) purely for visual variety/wayfinding — never maps to card size or grid order priority.

### 16.5 `<MapView>` / `<MapPreview>` **(client)**
```ts
type MapPoint = { id: string; lat: number; lng: number; type: "pohon"|"watershed"|"carbon-plot"|"kegiatan"; title: string; meta?: Record<string,string> }
type MapViewProps = {
  points: MapPoint[]
  layers?: ("watershed"|"carbon"|"tree")[]
  clustered?: boolean
  interactive?: boolean       // false = MapPreview mode (no zoom/pan, click-through to full map)
  height?: string             // default "60vh" desktop / "40vh" mobile
  onSelectPoint?: (id: string) => void
}
```
Built on `react-leaflet` + OSM tiles; clustering via `react-leaflet-cluster`; layer toggle renders as a top-right `<LayerToggle>` control panel.

### 16.6 `<StatusChip>`
```ts
type StatusChipProps = { status: "terverifikasi" | "diproses" | "tertunda" | "gagal" }
```
`terverifikasi` = success color + `CheckCircle2` icon. `diproses` = info color + `Loader2` (subtle, no spin unless live-updating) icon. `tertunda` = warning color + `Clock` icon. `gagal` = error color + `XCircle` icon. Always icon + label together (§6.5 accessibility rule).

### 16.7 `<TransparencyTable>`
```ts
type LedgerRow = { id: string; date: string; amount: number; category: string; status: StatusChipProps["status"]; donor?: string /* null = anonymized */ }
type TransparencyTableProps = { rows: LedgerRow[]; page: number; totalPages: number; onPageChange: (p:number)=>void }
```
Collapses to stacked card-rows below `md` (§9). Amount always formatted via `formatRupiah()`; donor defaults to "Hamba Allah" when `null`.

### 16.8 `<DonationSheet>` **(client)**
```ts
type DonationSheetProps = { amount: number; treeSpecies?: string; onSuccess: (donationId: string) => void; open: boolean; onOpenChange: (v:boolean)=>void }
```
Modal/bottom-sheet (sheet on mobile, dialog on desktop) rendering QRIS code from `POST /api/donations`, polls `GET /api/donations/[id]/status` every 3s up to 5 minutes, then shows timeout state with manual "Cek Status" retry.

### 16.9 `<Tabs>`
Thin wrapper over shadcn/ui `Tabs` (Radix), URL-synced via `useSearchParams`/`router.replace` so tab state is shareable and back-button-safe — used by Dana Abadi's four tabs.

### 16.10 `<EqualGrid>`
```ts
type EqualGridProps = { columns: { base: number; sm?: number; md?: number; lg?: number; xl?: number }; gap?: "sm"|"md"|"lg"; children: ReactNode }
```
CSS grid utility that forces `grid-auto-rows: 1fr` and equal column tracks — the structural enforcement mechanism behind §1.1 and §1.2's "no visual hierarchy between siblings" rule.

---

## 17. Dummy Data

### 17.1 Impact summary (`/api/impact/summary`)
```json
{
  "updatedAt": "2026-08-01T23:00:00+07:00",
  "metrics": [
    { "id": "trees", "label": "Pohon Ditanam", "value": 18420, "unit": "pohon" },
    { "id": "co2", "label": "Ton CO₂ Tersimpan", "value": 1204, "unit": "ton" },
    { "id": "water", "label": "Air Terhemat", "value": 8400000, "unit": "liter" },
    { "id": "families", "label": "Kesejahteraan Keluarga", "value": 312, "unit": "KK" },
    { "id": "endowment", "label": "Dana Abadi Terkumpul", "value": 842500000, "unit": "rupiah" }
  ]
}
```

### 17.2 Tree record (`/api/trees/[kode]`)
```json
{
  "kodePohon": "TRK-2026-00842",
  "species": "Trembesi (Samanea saman)",
  "plantedAt": "2025-11-14",
  "location": { "lat": -7.8291, "lng": 110.3735, "zone": "Blok Watershed Utara" },
  "sponsor": { "name": "Hamba Allah", "anonymized": true },
  "co2EstimateKg": 42.6,
  "status": "terverifikasi",
  "photos": [
    { "date": "2025-11-14", "url": "/images/trees/TRK-2026-00842-01.jpg", "caption": "Penanaman" },
    { "date": "2026-05-01", "url": "/images/trees/TRK-2026-00842-02.jpg", "caption": "Pertumbuhan 6 bulan" }
  ]
}
```

### 17.3 Ledger row (`/api/dana-abadi/ledger`)
```json
{
  "id": "LDG-000391",
  "date": "2026-07-28",
  "amount": 500000,
  "category": "Wakaf Pohon",
  "status": "terverifikasi",
  "donor": null
}
```

### 17.4 Program (home featured programs)
```json
{
  "id": "dharma-pendidikan",
  "title": "Dharma Pendidikan",
  "description": "Kelas fiqih lingkungan, MRV, dan pranata mangsa untuk santri dan masyarakat.",
  "href": "/dharma-pendidikan",
  "pillar": "pendidikan",
  "illustration": "/images/illustrations/pendidikan.svg"
}
```

### 17.5 Activity / kegiatan
```json
{
  "slug": "jumat-menanam-agustus-2026",
  "title": "Jumat Menanam — Agustus 2026",
  "type": "khidmah-diniyah",
  "date": "2026-08-07",
  "location": "Lahan Wakaf Blok C",
  "volunteersRegistered": 24,
  "volunteersNeeded": 40,
  "cover": "/images/activities/jumat-menanam-aug26.jpg"
}
```

### 17.6 Marketplace product
```json
{
  "slug": "kompos-organik-5kg",
  "store": "kompos",
  "name": "Kompos Organik Premium 5kg",
  "price": 45000,
  "currency": "IDR",
  "impactNote": "Setiap pembelian mendukung pengelolaan sampah organik pesantren.",
  "stock": 120,
  "images": ["/images/products/kompos-5kg-1.jpg"]
}
```

### 17.7 MRV field report
```json
{
  "id": "MRV-2026-0143",
  "plotId": "PLOT-KWT-07",
  "submittedBy": "KWT Sekar Wangi",
  "submittedAt": "2026-07-30T09:12:00+07:00",
  "species": "Bambu Petung",
  "measurement": { "diameterCm": 12.4, "heightM": 6.1 },
  "gps": { "lat": -7.8305, "lng": 110.3729 },
  "photoUrl": "/images/mrv/MRV-2026-0143.jpg",
  "status": "diproses"
}
```

---

## 18. API Interface Examples

Modular so the same frontend works against WordPress Headless, Laravel, or the MRV Nexus API — every domain client implements one interface; only the adapter implementation changes.

### 18.1 Impact domain
```ts
// lib/api/impact.ts
export interface ImpactMetric {
  id: string; label: string; value: number; unit: string;
}
export interface ImpactSummary {
  updatedAt: string;
  metrics: ImpactMetric[];
}
export interface ImpactApi {
  getSummary(): Promise<ImpactSummary>;
}
// GET /api/impact/summary → ImpactSummary
```

### 18.2 Dana Abadi domain
```ts
export interface LedgerRow {
  id: string; date: string; amount: number; category: string;
  status: "terverifikasi" | "diproses" | "tertunda" | "gagal";
  donor: string | null;
}
export interface TreeRecord {
  kodePohon: string; species: string; plantedAt: string;
  location: { lat: number; lng: number; zone: string };
  sponsor: { name: string; anonymized: boolean };
  co2EstimateKg: number;
  status: LedgerRow["status"];
  photos: { date: string; url: string; caption: string }[];
}
export interface DanaAbadiApi {
  getSummary(): Promise<ImpactSummary>;
  getLedger(page: number, pageSize?: number): Promise<{ rows: LedgerRow[]; totalPages: number }>;
  getTree(kode: string): Promise<TreeRecord>;
  createDonation(input: { amount: number; treeSpeciesId?: string; donorName?: string; anonymize: boolean }): Promise<{ donationId: string; qrisPayload: string }>;
  getDonationStatus(id: string): Promise<{ status: "pending" | "success" | "failed" | "timeout" }>;
}
// POST /api/donations              → { donationId, qrisPayload }
// GET  /api/donations/[id]/status  → { status }
// GET  /api/dana-abadi/ledger?page=1&pageSize=20
// GET  /api/trees/[kode]
```

### 18.3 LMS domain
```ts
export interface Module {
  slug: string; title: string; level: "pemula"|"menengah"|"lanjutan";
  durationMinutes: number; instructorSlug: string; lessons: { slug: string; title: string; free: boolean }[];
}
export interface LmsApi {
  listModules(): Promise<Module[]>;
  getModule(slug: string): Promise<Module>;
  getProgress(userId: string): Promise<{ moduleSlug: string; completedLessons: string[] }[]>;
  issueCertificate(userId: string, moduleSlug: string): Promise<{ certificateUrl: string; verifyUrl: string }>;
}
```

### 18.4 Marketplace domain
```ts
export interface Product {
  slug: string; store: "bank-sampah"|"panen-air-hujan"|"kompos"|"offset-karbon";
  name: string; price: number; currency: "IDR"; stock: number; images: string[];
}
export interface MarketplaceApi {
  listProducts(store?: Product["store"]): Promise<Product[]>;
  getProduct(slug: string): Promise<Product>;
  createOrder(input: { items: { slug: string; qty: number }[]; addressId: string }): Promise<{ orderId: string; total: number }>;
}
```

### 18.5 MRV domain (Nexus MRK API)
```ts
export interface MrvReport {
  id: string; plotId: string; submittedBy: string; submittedAt: string;
  species: string; measurement: { diameterCm: number; heightM: number };
  gps: { lat: number; lng: number }; photoUrl: string;
  status: "diproses" | "terverifikasi" | "ditolak";
}
export interface MrvApi {
  submitReport(input: Omit<MrvReport, "id"|"status"|"submittedAt">): Promise<MrvReport>;
  listReportsByPlot(plotId: string): Promise<MrvReport[]>;
}
```

### 18.6 Adapter pattern
```ts
// lib/api/client.ts
export interface BackendAdapter {
  impact: ImpactApi; danaAbadi: DanaAbadiApi; lms: LmsApi; marketplace: MarketplaceApi; mrv: MrvApi;
}
// lib/api/adapters/wordpress.ts   implements BackendAdapter via WP REST + ACF
// lib/api/adapters/laravel.ts     implements BackendAdapter via Laravel API resources
// lib/api/adapters/nexus-mrk.ts   implements MrvApi (Nexus is MRV-only; other domains fall back to primary backend)
// Selected at runtime via env var BACKEND_ADAPTER=wordpress|laravel, with mrv always routed to nexus-mrk when configured.
```

---

## 19. Future Scalability Notes

- **i18n:** dictionary structure (`lib/content/id/*.json`) is in place from day one; add `en` and `ar` (for the Akidah Hijau manifesto and Arabic quotes) without touching component code — components consume `t("key")`, never hardcoded strings.
- **Multi-tenant:** if other pesantren adopt the same portal, the `pillar`/`program` and `nav tree` config (§13 `lib/constants.ts`) should move to a per-tenant config object keyed by subdomain, so the same Next.js deployment can serve multiple institutions with different branding tokens (§6) loaded at runtime via CSS variables.
- **Offline-first MRV:** `mrv-nexus` submission form should use an IndexedDB queue (e.g. via a service worker) so KWT field volunteers in low-connectivity areas can submit reports that sync when back online — flagged as a v2 requirement, not blocking this phase.
- **Blockchain/verifiable-credential option:** tree certificates and carbon credit records could later anchor a hash to a public ledger for tamper-evidence; the `TreeRecord.status` and certificate `verifyUrl` fields are already designed to support swapping in a verifiable-credential URL without a schema change.
- **Mobile app:** the typed `lib/api/*` interfaces (§18) are backend-agnostic and framework-agnostic by design, so a future React Native app can reuse the same interface contracts against the same adapters.
- **AI assistant:** a future "Tanya Portal" chat assistant (RAG over Kajian & Riset repository + Akidah Hijau content) fits naturally as a new domain client (`lib/api/assistant.ts`) without restructuring existing domains.
- **Headless CMS migration:** because every page is server-rendered from typed API clients rather than hardcoded content, switching primary CMS (WordPress → Laravel or vice versa) only requires a new adapter (§18.6), not page-level rewrites.

---

## 20. WordPress + Elementor Recommendations

If a non-headless, editor-managed version is required (e.g. for staff who need to publish without a dev):

**Stack**
- WordPress core + Elementor Pro (or Bricks Builder for finer design-token control) + ACF Pro for custom fields (tree records, ledger rows, MRV reports as custom post types).
- Custom Post Types: `program`, `kegiatan`, `produk`, `dokumen_riset`, `pohon`, `transaksi_dana_abadi`, `laporan_mrv`.
- Global Colors/Fonts in Elementor's Site Settings should be set to exactly the tokens in §6/§7 — do not let editors pick ad-hoc colors; lock the palette via Elementor's Global Colors and disable the custom color picker for non-admin roles.
- Recreate `EqualGrid` behavior using Elementor's "Equal Height" container setting on every 3/5/7-card row — this is the one rule that must never be skipped, since WYSIWYG editors will otherwise be tempted to enlarge one card (violates §1.1/§1.2).
- Map sections via the "Maps" widget backed by an OSM/Leaflet plugin (e.g. "Leaflet Maps Marker" or a custom Elementor widget) rather than embedding Google Maps, to stay OSM-consistent with the headless spec.
- Donation/QRIS: use a payment gateway plugin (Midtrans/Xendit WooCommerce integration is common in Indonesia) rather than building custom — WooCommerce also covers Amal Usaha's four stores directly.
- LMS: LearnDash or Tutor LMS for Dharma Pendidikan, styled via the same global tokens.
- Forum/Community: bbPress or BuddyBoss for Komunitas KWT forum; MRV Nexus integration would need a custom plugin or an embedded iframe/API-connected block since it's a specialized data-entry tool no off-the-shelf plugin covers.
- **Limitation to flag to stakeholders:** WordPress/Elementor can reach ~80% visual fidelity to this spec but will not match the Next.js version's animation restraint (Framer Motion scroll-reveal/count-up), route-level performance (Server Components + ISR), or the strict `EqualGrid`/status-chip type-safety guarantees baked into the component props in §16 — those guardrails become editorial discipline (a style guide + admin training) rather than code-enforced rules. Recommend headless Next.js as the primary path and WordPress/Elementor only as a fallback if there is no frontend dev resourcing.
