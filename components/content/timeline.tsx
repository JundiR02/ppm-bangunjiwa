import Link from "next/link";
import { CalendarDays } from "lucide-react";

type ActivityItem = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function Timeline({ items }: { items: ActivityItem[] }) {
  return (
    <ol className="flex flex-col">
      {items.map((item, i) => (
        <li key={item.slug} className="relative flex gap-5 pb-10 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-forest-200 bg-sage-50 text-forest-700 dark:bg-forest-900 dark:text-sage-300">
              <CalendarDays className="size-4" />
            </span>
            {i !== items.length - 1 && (
              <span className="mt-1 w-px flex-1 bg-border" aria-hidden />
            )}
          </div>
          <Link href={`/khidmah-diniyah/kegiatan/${item.slug}`} className="group -mt-1 flex-1 pb-1">
            <p className="text-xs font-medium tracking-wide text-muted-foreground">
              {formatDate(item.date)}
            </p>
            <h4 className="mt-1 font-heading text-base font-semibold text-foreground group-hover:text-forest-700 dark:group-hover:text-sage-300">
              {item.title}
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
          </Link>
        </li>
      ))}
    </ol>
  );
}
