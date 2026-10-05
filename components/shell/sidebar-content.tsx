"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, HandHeart } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { PRIMARY_NAV, PENDIDIKAN_LINKS, PROGRAM_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function SidebarGroup({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-1.5 text-[13px] font-semibold text-iron-deep"
      >
        <ChevronDown className={cn("size-3.5 text-iron-soft transition-transform", !open && "-rotate-90")} />
        {title}
      </button>
      {open && <div className="mt-2.5">{children}</div>}
    </div>
  );
}

function LinkList({ links, onNavigate }: { links: { label: string; href: string }[]; onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-0.5 pl-1">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={onNavigate}
            aria-current={pathname === link.href ? "page" : undefined}
            className={cn(
              "flex items-start gap-2.5 rounded-lg px-2 py-1.5 text-[13px] leading-snug transition-colors hover:bg-frost/70 hover:text-iron",
              pathname === link.href ? "bg-frost/70 font-medium text-iron-deep" : "text-iron-soft"
            )}
          >
            <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-pine" aria-hidden />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col gap-7">
      <Logo onClick={onNavigate} />

      <nav aria-label="Navigasi utama" className="grid grid-cols-2 gap-2">
        {PRIMARY_NAV.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : [item.href, ...(item.match ?? [])].some((p) => pathname.startsWith(p));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex h-[68px] flex-col items-center justify-center gap-1.5 rounded-2xl border px-2 text-center text-[12.5px] font-medium transition-colors",
                active
                  ? "border-iron bg-iron text-frost shadow-panel"
                  : "border-white/80 bg-frost/70 text-iron hover:bg-frost"
              )}
            >
              <item.icon className="size-[18px]" strokeWidth={1.75} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <SidebarGroup title="Program">
        <LinkList links={PROGRAM_LINKS} onNavigate={onNavigate} />
      </SidebarGroup>

      <SidebarGroup title="Lembaga Pendidikan">
        <LinkList links={PENDIDIKAN_LINKS} onNavigate={onNavigate} />
      </SidebarGroup>

      <Link
        href="/dana-abadi"
        onClick={onNavigate}
        className="mt-auto flex items-center gap-3 rounded-2xl bg-iron p-3 text-frost shadow-panel transition-colors hover:bg-iron-deep"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-frost text-pine-deep">
          <HandHeart className="size-4" />
        </span>
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="text-[13px] font-semibold">Dana Abadi Pesantren Hijau</span>
          <span className="text-[11px] text-frost/65">Donasi, wakaf & crowdfunding</span>
        </span>
        <ArrowUpRight className="ml-auto size-4 text-frost/70" />
      </Link>
    </div>
  );
}
