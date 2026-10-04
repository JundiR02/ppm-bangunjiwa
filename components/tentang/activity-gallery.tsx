import Image from "next/image";
import { KEGIATAN_GALLERY } from "@/lib/bangunjiwa-data";

export function ActivityGallery() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {KEGIATAN_GALLERY.map((item, i) => (
        <figure
          key={item.id}
          className={`group relative overflow-hidden rounded-[22px] border border-white/80 shadow-panel ${
            i === 0 ? "col-span-2 row-span-2 min-h-[280px]" : "aspect-square"
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
          />
          <figcaption className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-full bg-frost/90 px-3 py-1 text-[11px] font-medium text-iron-deep backdrop-blur">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
