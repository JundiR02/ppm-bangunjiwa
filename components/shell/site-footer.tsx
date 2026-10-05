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
      <p className="text-[13px] font-semibold text-emas">{title}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[14px] text-frost/75 transition-colors hover:text-frost">
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
    <footer className="mt-24 bg-hijau-ink text-frost">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src={YAYASAN.logo} alt="" width={512} height={512} className="size-12" />
            <p className="font-heading text-lg leading-tight">{YAYASAN.nama}</p>
          </div>
          <p className="max-w-xs text-[14px] leading-relaxed text-frost/70">{PROFIL_PESANTREN.alamat}</p>
          <div className="flex gap-4 text-[14px]">
            <a href={PROFIL_PESANTREN.instagram.url} target="_blank" rel="noopener" className="text-frost/75 hover:text-frost">
              Instagram
            </a>
            <a href={PROFIL_PESANTREN.infoUrl} target="_blank" rel="noopener" className="text-frost/75 hover:text-frost">
              Informasi pesantren
            </a>
          </div>
        </div>
        <Column title="Program" links={PROGRAM_LINKS} />
        <Column title="Lembaga Pendidikan" links={PENDIDIKAN_LINKS} />
        <Column title="Lainnya" links={LAINNYA} />
      </div>
      <div className="border-t border-frost/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-2 px-4 py-5 text-[12.5px] text-frost/55 sm:flex-row sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {YAYASAN.nama}</p>
          <Link href="/admin" className="hover:text-frost">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
