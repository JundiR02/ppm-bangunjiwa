import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BidangProgram } from "@/lib/bangunjiwa-data";
import { cn } from "@/lib/utils";

/** Sub-programs of a bidang as ruled rows; only those with a page get a link. */
export function BidangItems({ items, className }: { items: BidangProgram["items"]; className?: string }) {
  return (
    <ul className={cn("border-t border-ash", className)}>
      {items.map((item) => (
        <li key={item.judul} className="grid gap-3 border-b border-ash py-7 md:grid-cols-[1fr_1.3fr] md:gap-12">
          <div>
            <h2 className="font-heading text-2xl text-iron-deep">
              {item.href ? (
                <Link href={item.href} className="hover:text-hijau">
                  {item.judul}
                </Link>
              ) : (
                item.judul
              )}
            </h2>
            {item.keterangan && <p className="mt-1 text-[15px] text-iron-soft">{item.keterangan}</p>}
          </div>
          <div className="flex flex-col gap-3 md:pt-1">
            {item.anak && (
              <ul className="flex flex-col gap-1.5">
                {item.anak.map((a) => (
                  <li key={a} className="text-[15px] text-iron">
                    {a}
                  </li>
                ))}
              </ul>
            )}
            {item.href ? (
              <Link href={item.href} className="inline-flex w-fit items-center gap-2 text-[14px] font-medium text-hijau hover:underline">
                Selengkapnya <ArrowRight className="size-4" />
              </Link>
            ) : (
              <p className="text-[14px] text-iron-soft">Informasi lengkap segera ditambahkan.</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
