import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 shrink-0"
      aria-label="PPM Riset Ekologi Bangunjiwa — Beranda"
    >
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-full p-1",
          inverted && "bg-white/90"
        )}
      >
        <Image
          src="/brand/logo-mark.png"
          alt="Logo PPM Riset Ekologi Bangunjiwa"
          width={256}
          height={256}
          className="size-full object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[0.95rem] font-bold tracking-tight",
            inverted ? "text-white" : "text-forest-800 dark:text-sage-100"
          )}
        >
          PPM Riset Ekologi
        </span>
        <span
          className={cn(
            "text-[0.7rem] tracking-wide",
            inverted ? "text-white/70" : "text-neutral-500 dark:text-neutral-400"
          )}
        >
          Bangunjiwa
        </span>
      </span>
    </Link>
  );
}
