"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_TREE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileDrawer() {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | null>(null);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Buka menu" />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-sm">
        <SheetHeader className="border-b border-border">
          <SheetTitle>Menu Portal</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-6">
          {NAV_TREE.map((item) => {
            const hasChildren = !!item.children?.length;
            const isExpanded = expanded === item.href;
            return (
              <div key={item.href} className="border-b border-border/60 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex-1 py-3.5 text-[0.95rem] font-medium text-foreground"
                  >
                    {item.label}
                  </Link>
                  {hasChildren && (
                    <button
                      type="button"
                      aria-label={`Buka submenu ${item.label}`}
                      aria-expanded={isExpanded}
                      onClick={() => setExpanded(isExpanded ? null : item.href)}
                      className="flex size-10 items-center justify-center text-muted-foreground"
                    >
                      <ChevronDown
                        className={cn("size-4 transition-transform", isExpanded && "rotate-180")}
                      />
                    </button>
                  )}
                </div>
                {hasChildren && isExpanded && (
                  <div className="flex flex-col gap-0.5 pb-3 pl-3">
                    {item.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="border-t border-border p-4">
          <Button
            className="w-full"
            nativeButton={false}
            render={<Link href="/donasi" onClick={() => setOpen(false)} />}
          >
            Donasi
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
