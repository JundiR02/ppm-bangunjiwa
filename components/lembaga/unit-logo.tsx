import Image from "next/image";
import { cn } from "@/lib/utils";

/** Unit logo tile; units without a logo yet get their initials instead. */
export function UnitLogo({ src, alt, fallback, className }: { src?: string; alt: string; fallback?: string; className?: string }) {
  return (
    <span
      className={cn(
        "flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white shadow-panel",
        src ? "bg-frost p-1" : "bg-pine-soft",
        className
      )}
    >
      {src ? (
        <Image src={src} alt={alt} width={512} height={512} className="size-full object-contain" />
      ) : (
        <span aria-label={alt} className="flex flex-col items-center font-heading text-[11px] font-semibold leading-tight text-pine-deep">
          {fallback?.split("-").map((part) => (
            <span key={part}>{part}</span>
          ))}
        </span>
      )}
    </span>
  );
}
