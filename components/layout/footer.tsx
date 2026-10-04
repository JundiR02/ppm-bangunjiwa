import Link from "next/link";
import { Camera, Play, Mail } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { FOOTER_LINKS } from "@/lib/constants";

function LinkGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-heading text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-neutral-50 dark:bg-[#0d100e]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Digital Office, Digital Campus, Digital Marketplace, Portal MRV Karbon, dan Dana
              Abadi PPM Riset Ekologi Bangunjiwa.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-forest-700 hover:border-forest-300"
              >
                <Camera className="size-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-forest-700 hover:border-forest-300"
              >
                <Play className="size-4" />
              </a>
              <a
                href="mailto:kontak@bangunjiwa.id"
                aria-label="Email"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-forest-700 hover:border-forest-300"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <LinkGroup title="Portal" links={FOOTER_LINKS.portal} />
          <LinkGroup title="Dana Abadi" links={FOOTER_LINKS.dana} />
          <LinkGroup title="Institusi" links={FOOTER_LINKS.institusi} />
          <LinkGroup title="Legal" links={FOOTER_LINKS.legal} />
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PPM Riset Ekologi Bangunjiwa. Menanam Pohon adalah
            Shodaqah Jariyah.
          </p>
        </div>
      </div>
    </footer>
  );
}
