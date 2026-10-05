import Link from "next/link";
import Image from "next/image";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5"
      aria-label="Yayasan Pesantren Masyarakat Bangunjiwa — Beranda"
    >
      <span className="flex size-11 shrink-0 items-center justify-center">
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
        <span className="font-heading text-[17px] font-semibold text-iron-deep">Bangunjiwa</span>
        <span className="text-[12px] text-iron-soft">Pesantren Masyarakat</span>
      </span>
    </Link>
  );
}
