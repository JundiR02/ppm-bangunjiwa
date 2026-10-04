import Image from "next/image";
import { KEGIATAN_GALLERY } from "@/lib/bangunjiwa-data";

export function ActivityGallery() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:grid-cols-4">
      {KEGIATAN_GALLERY.map((item, i) => (
        <div
          key={item.id}
          className={`group relative overflow-hidden rounded-2xl ${
            i === 0 ? "col-span-2 row-span-2" : "aspect-square lg:aspect-[4/5]"
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 640px) 25vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/85 to-transparent p-3.5">
            <p className="text-xs font-medium text-white">{item.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
