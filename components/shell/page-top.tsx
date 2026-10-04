import Link from "next/link";
import { HandHeart } from "lucide-react";
import { ShareButton } from "@/components/shell/share-button";

export function PageTop({ crumb }: { crumb?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 pt-5 pb-6 lg:pt-1">
      <nav aria-label="Breadcrumb" className="text-[13px] text-iron-soft">
        <Link href="/" className="font-medium text-iron hover:text-iron-deep">
          Beranda
        </Link>
        {crumb && (
          <>
            <span className="mx-1.5 text-ash-deep" aria-hidden>
              /
            </span>
            <span aria-current="page">{crumb}</span>
          </>
        )}
      </nav>
      <div className="flex items-center gap-2">
        <ShareButton />
        <Link
          href="/donasi"
          className="hidden h-10 items-center gap-2 rounded-xl bg-iron px-4 text-[13px] font-medium text-frost shadow-panel transition-colors hover:bg-iron-deep sm:flex"
        >
          <HandHeart className="size-4" />
          Donasi
        </Link>
      </div>
    </div>
  );
}
