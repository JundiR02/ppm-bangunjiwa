import Link from "next/link";
import { SidebarContent } from "@/components/shell/sidebar-content";
import { MobileTopbar } from "@/components/shell/mobile-topbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:p-3 xl:p-4">
      <div className="hub-surface flex min-h-screen lg:min-h-[calc(100vh-1.5rem)] lg:rounded-[28px] lg:border lg:border-white/60 lg:shadow-[0_30px_80px_-40px_rgb(63_66_68/0.45)] xl:min-h-[calc(100vh-2rem)]">
        <aside className="hidden w-[252px] shrink-0 border-r border-white/60 bg-linen/60 lg:block lg:rounded-l-[28px]">
          <div className="sticky top-3 h-[calc(100vh-1.5rem)] overflow-y-auto p-4 xl:top-4 xl:h-[calc(100vh-2rem)]">
            <SidebarContent />
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <MobileTopbar />
          <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 pb-8 sm:px-6 lg:px-8 lg:pt-5">
            {children}
          </main>
          <footer className="mx-auto w-full max-w-[1280px] px-4 pb-6 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-1.5 border-t border-ash/70 pt-5 text-xs text-iron-soft sm:flex-row sm:justify-between">
              <p>
                © {new Date().getFullYear()} PPM Riset Ekologi Bangunjiwa. Menanam pohon adalah
                shodaqah jariyah.
              </p>
              <Link href="/admin" className="hover:text-iron">
                Admin
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
