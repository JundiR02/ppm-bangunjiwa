import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BidangProgram } from "@/lib/bangunjiwa-data";
import { cn } from "@/lib/utils";

/** Sub-programs of a bidang: linked cards for those with a page, dashed "segera hadir" cards for the rest. */
export function BidangItems({ items, className }: { items: BidangProgram["items"]; className?: string }) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li
          key={item.judul}
          className={cn(
            "flex flex-col gap-2 rounded-2xl p-4",
            item.href ? "border border-white bg-frost shadow-panel" : "border border-dashed border-ash-deep/70 bg-linen/50"
          )}
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-[15px] font-medium leading-snug text-iron-deep">
              {item.href ? (
                <Link href={item.href} className="hover:underline">
                  {item.judul}
                </Link>
              ) : (
                item.judul
              )}
            </h3>
            {item.href ? (
              <Link
                href={item.href}
                aria-label={`Buka ${item.judul}`}
                className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white bg-frost text-iron shadow-panel transition-colors hover:bg-iron hover:text-frost"
              >
                <ArrowUpRight className="size-3.5" />
              </Link>
            ) : (
              <span className="shrink-0 rounded-full bg-frost px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-iron-soft">
                Segera hadir
              </span>
            )}
          </div>
          {item.keterangan && <p className="text-[13px] text-iron-soft">{item.keterangan}</p>}
          {item.anak && (
            <ul className="mt-1 flex flex-col gap-1">
              {item.anak.map((a) => (
                <li key={a} className="flex items-center gap-2 text-[13px] text-iron">
                  <span className="size-1.5 shrink-0 rounded-full bg-pine" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
