import Link from "next/link";
import Image from "next/image";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5"
      aria-label="PPM Riset Ekologi Bangunjiwa — Beranda"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white bg-frost p-1.5 shadow-panel">
        <Image
          src="/brand/logo-mark.png"
          alt=""
          width={256}
          height={256}
          className="size-full object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-[14px] font-bold text-iron-deep">PPM Riset Ekologi</span>
        <span className="text-[11px] tracking-wide text-iron-soft">Bangunjiwa</span>
      </span>
    </Link>
  );
}
