import { SiteHeader } from "@/components/shell/site-header";
import { SiteFooter } from "@/components/shell/site-footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* First Tab stop: lets keyboard users skip the logo and the five nav links on every page. */}
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-hijau focus:px-4 focus:py-3 focus:text-[15px] focus:font-medium focus:text-frost"
      >
        Lewati ke konten
      </a>
      <SiteHeader />
      <main id="konten" className="mx-auto w-full max-w-[1200px] flex-1 px-4 sm:px-6">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
