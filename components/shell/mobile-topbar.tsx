"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { SidebarContent } from "@/components/shell/sidebar-content";

export function MobileTopbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-40 flex items-center justify-between border-b border-white/70 bg-frost/85 px-4 py-3 backdrop-blur-md lg:hidden">
      <Logo />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          aria-label="Buka menu"
          className="flex size-10 items-center justify-center rounded-xl border border-white/80 bg-frost text-iron shadow-panel"
        >
          <Menu className="size-5" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[290px] overflow-y-auto border-white/60 bg-linen p-4">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SidebarContent onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
