import Image from "next/image";
import Link from "next/link";
import { PENDIDIKAN_LINKS, PROGRAM_LINKS } from "@/lib/navigation";
import { PROFIL_PESANTREN, YAYASAN } from "@/lib/bangunjiwa-data";

const LAINNYA = [
  { label: "Tentang Yayasan", href: "/tentang" },
  { label: "PMB & PSB", href: "/psb" },
  { label: "Donasi", href: "/donasi" },
  { label: "Kontak", href: "/kontak" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-[14px] font-semibold text-emas">{title}</p>
      {/* Each link is a full 44px tap row; the row height replaces the old gap between links. */}
      <ul className="mt-1 flex flex-col">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="inline-flex min-h-11 items-center text-[14px] text-frost/75 transition-colors hover:text-frost">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-hijau-ink text-frost sm:mt-24 [&_a:focus-visible]:outline-emas-muda">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src={YAYASAN.logo} alt="" width={512} height={512} className="size-12" />
            <p className="font-heading text-lg leading-tight">{YAYASAN.nama}</p>
          </div>
          <p className="max-w-xs text-[14px] leading-relaxed text-frost/70">{PROFIL_PESANTREN.alamat}</p>
          <div className="flex flex-wrap gap-x-6 text-[14px]">
            <a href={PROFIL_PESANTREN.instagram.url} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center text-frost/75 hover:text-frost">
              Instagram
            </a>
            <a href={PROFIL_PESANTREN.infoUrl} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center text-frost/75 hover:text-frost">
              Informasi pesantren
            </a>
          </div>
        </div>
        <Column title="Program" links={PROGRAM_LINKS} />
        <Column title="Lembaga Pendidikan" links={PENDIDIKAN_LINKS} />
        <Column title="Lainnya" links={LAINNYA} />
      </div>
      <div className="border-t border-frost/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 px-4 py-3 text-[14px] text-frost/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {YAYASAN.nama}</p>
          <Link href="/admin" className="inline-flex min-h-11 min-w-11 w-fit items-center hover:text-frost">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
