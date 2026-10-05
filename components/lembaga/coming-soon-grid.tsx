import Link from "next/link";
import { cn } from "@/lib/utils";

export type ComingSoonItem = { judul: string; keterangan?: string; sub?: string[]; href?: string };

/**
 * Sections whose official content isn't available yet. Kept to a quiet list so the
 * page reads as "what's coming" rather than a wall of empty boxes.
 */
export function ComingSoonGrid({
  items,
  title = "Sedang disiapkan",
  className,
}: {
  items: ComingSoonItem[];
  title?: string;
  className?: string;
}) {
  return (
    <section className={cn("mt-20 border-t border-ash pt-8", className)}>
      <h2 className="font-heading text-xl text-iron-deep">{title}</h2>
      <p className="mt-1 text-[14px] text-iron-soft">Informasi berikut akan ditambahkan setelah tersedia.</p>
      <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.judul} className="text-[14px] leading-relaxed">
            <span className="font-medium text-iron-deep">
              {item.href ? (
                <Link href={item.href} className="hover:text-hijau hover:underline">
                  {item.judul}
                </Link>
              ) : (
                item.judul
              )}
            </span>
            {item.keterangan && <span className="block text-iron-soft">{item.keterangan}</span>}
            {item.sub && <span className="block text-iron-soft">{item.sub.join(" · ")}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
