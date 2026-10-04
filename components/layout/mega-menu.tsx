"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NavItem } from "@/lib/constants";

export function MegaMenuPanel({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  if (!item.children?.length) return null;

  return (
    <div className="absolute inset-x-0 top-full z-40 border-t border-border bg-popover shadow-lg">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:px-10">
        <div className="flex flex-col justify-between gap-4">
          <div>
            <p className="font-heading text-lg font-semibold text-forest-800 dark:text-sage-100">
              {item.label}
            </p>
            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            )}
          </div>
          <Link
            href={item.href}
            onClick={onNavigate}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 hover:gap-2.5 dark:text-sage-300 transition-all"
          >
            Lihat semua {item.label}
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
