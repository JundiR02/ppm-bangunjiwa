import Link from "next/link";
import { cn } from "@/lib/utils";

export type ComingSoonItem = { judul: string; keterangan?: string; sub?: string[]; href?: string };

/** Sections whose official content isn't available yet — shown so visitors see what's planned. */
export function ComingSoonGrid({ items, className }: { items: ComingSoonItem[]; className?: string }) {
  return (
    <ul className={cn("grid gap-3 sm:grid-cols-2 xl:grid-cols-3", className)}>
      {items.map((item) => (
        <li key={item.judul} className="flex flex-col gap-1.5 rounded-2xl border border-dashed border-ash-deep/70 bg-linen/50 p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-[15px] font-medium text-iron-deep">
              {item.href ? (
                <Link href={item.href} className="hover:underline">
                  {item.judul}
                </Link>
              ) : (
                item.judul
              )}
            </h3>
            <span className="shrink-0 rounded-full bg-frost px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-iron-soft">
              Segera hadir
            </span>
          </div>
          {item.keterangan && <p className="text-[13px] leading-relaxed text-iron-soft">{item.keterangan}</p>}
          {item.sub && (
            <ul className="mt-1 flex flex-wrap gap-1.5">
              {item.sub.map((s) => (
                <li key={s} className="rounded-full bg-frost px-2.5 py-1 text-[11.5px] text-iron">
                  {s}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
