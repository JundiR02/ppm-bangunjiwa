"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, HandHeart } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { PRIMARY_NAV, PROFILE_LINKS, HUB_COMING_SOON } from "@/lib/navigation";
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

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col gap-7">
      <Logo onClick={onNavigate} />

      <nav aria-label="Navigasi utama" className="grid grid-cols-2 gap-2">
        {PRIMARY_NAV.map((item) => {
          const active = item.href === pathname;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex h-[76px] flex-col items-center justify-center gap-1.5 rounded-2xl border px-2 text-center text-[12.5px] font-medium transition-colors",
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

      <SidebarGroup title="Profil Pesantren">
        <ul className="flex flex-col gap-0.5 pl-1">
          {PROFILE_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onNavigate}
                className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] text-iron-soft transition-colors hover:bg-frost/70 hover:text-iron"
              >
                <span className="size-1.5 rounded-full bg-pine" aria-hidden />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </SidebarGroup>

      <SidebarGroup title="Digital Hub">
        <ul className="flex flex-col gap-1.5">
          {HUB_COMING_SOON.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 rounded-xl border border-white/70 bg-frost/40 px-2.5 py-2.5 text-[13px] whitespace-nowrap text-iron-soft"
            >
              <item.icon className="size-4 shrink-0" strokeWidth={1.75} />
              {item.label}
              <span className="ml-auto rounded-full bg-linen px-1.5 py-0.5 text-[9.5px] font-medium uppercase tracking-wide text-iron-soft">
                Segera
              </span>
            </li>
          ))}
        </ul>
      </SidebarGroup>

      <Link
        href="/donasi"
        onClick={onNavigate}
        className="mt-auto flex items-center gap-3 rounded-2xl bg-iron p-3 text-frost shadow-panel transition-colors hover:bg-iron-deep"
      >
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-frost text-pine-deep">
          <HandHeart className="size-4" />
        </span>
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="text-[13px] font-semibold">Dukung Program</span>
          <span className="text-[11px] text-frost/65">Donasi riset ekologi</span>
        </span>
        <ArrowUpRight className="ml-auto size-4 text-frost/70" />
      </Link>
    </div>
  );
}
