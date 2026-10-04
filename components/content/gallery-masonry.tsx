import Link from "next/link";

type ActivityItem = {
  slug: string;
  title: string;
  date: string;
};

const GRADIENTS = [
  "from-forest-700 to-sage-400",
  "from-earth-400 to-earth-100",
  "from-water-400 to-water-100",
  "from-forest-600 to-forest-200",
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "short" });
}

/**
 * Photography placeholders — real drone/field photography will replace these
 * gradient tiles once media assets are supplied by the CMS.
 */
export function GalleryMasonry({ items }: { items: ActivityItem[] }) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 lg:grid-cols-4">
      {items.map((item, i) => (
        <Link
          key={item.slug}
          href={`/khidmah-diniyah/kegiatan/${item.slug}`}
          className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} ${i === 0 ? "col-span-2 row-span-2" : "aspect-square lg:aspect-[4/5]"}`}
        >
          <div className="absolute inset-0 bg-forest-950/0 transition-colors duration-300 group-hover:bg-forest-950/20" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="text-xs font-medium text-white/80">{formatDate(item.date)}</p>
            <p className="mt-0.5 text-sm font-semibold text-white line-clamp-2">{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
