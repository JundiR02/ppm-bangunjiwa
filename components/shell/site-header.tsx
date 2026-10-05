"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { PENDIDIKAN_LINKS, PRIMARY_NAV, PROGRAM_LINKS, type NavLink } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function isActive(item: NavLink, pathname: string) {
  return [item.href, ...(item.match ?? [])].some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const links = PRIMARY_NAV.filter((item) => item.href !== "/" && item.href !== "/donasi");

  return (
    <header className="sticky top-0 z-40 border-b border-ash bg-frost/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6">
        <Logo />

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
          {links.map((item) => {
            const active = isActive(item, pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-[14px] transition-colors",
                  active ? "font-semibold text-hijau" : "text-iron hover:text-hijau"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/donasi"
            className="ml-3 rounded-md bg-hijau px-4 py-2 text-[14px] font-medium text-frost transition-colors hover:bg-hijau-deep"
          >
            Donasi
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Buka menu"
            className="flex size-10 items-center justify-center rounded-md border border-ash text-iron lg:hidden"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] overflow-y-auto border-ash bg-frost p-6">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <MobileNav pathname={pathname} onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MobileNav({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  const groups = [
    { title: "Program", links: PROGRAM_LINKS },
    { title: "Lembaga Pendidikan", links: PENDIDIKAN_LINKS },
  ];
  return (
    <div className="flex flex-col gap-7 pt-6">
      <ul className="flex flex-col">
        {PRIMARY_NAV.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "block border-b border-ash py-3 font-heading text-lg",
                (item.href === "/" ? pathname === "/" : isActive(item, pathname)) ? "text-hijau" : "text-iron-deep"
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {groups.map((g) => (
        <div key={g.title}>
          <p className="text-[12px] font-semibold text-emas-deep">{g.title}</p>
          <ul className="mt-2 flex flex-col gap-1">
            {g.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className={cn("block py-1 text-[14px]", pathname === link.href ? "font-medium text-hijau" : "text-iron-soft")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
