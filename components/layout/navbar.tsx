"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { MegaMenuPanel } from "@/components/layout/mega-menu";
import { MobileDrawer } from "@/components/layout/mobile-drawer";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { NAV_TREE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = React.useState(false);
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpenItem(null), [pathname]);

  const transparent = isHome && !scrolled && !openItem;
  const activeItem = NAV_TREE.find((item) => item.href === openItem);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        transparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md border-b border-border"
      )}
      onMouseLeave={() => setOpenItem(null)}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo inverted={transparent} />

        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          {NAV_TREE.map((item) => {
            const hasChildren = !!item.children?.length;
            const isOpen = openItem === item.href;
            return (
              <div
                key={item.href}
                onMouseEnter={() => hasChildren && setOpenItem(item.href)}
              >
                {hasChildren ? (
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenItem(isOpen ? null : item.href)}
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      transparent
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("size-3.5 transition-transform", isOpen && "rotate-180")}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      transparent
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/80 hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className={cn(!transparent && "contents", transparent && "[&_button]:text-white [&_button]:hover:bg-white/10")}>
            <ThemeToggle />
          </div>
          <Button
            className="hidden sm:inline-flex"
            variant={transparent ? "secondary" : "default"}
            nativeButton={false}
            render={<Link href="/dana-abadi/wakaf-pohon" />}
          >
            Wakaf Pohon
          </Button>
          <MobileDrawer />
        </div>
      </div>

      {activeItem && <MegaMenuPanel item={activeItem} onNavigate={() => setOpenItem(null)} />}
    </header>
  );
}
