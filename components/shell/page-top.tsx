import Link from "next/link";

/** Breadcrumb above a page's heading; the home page passes nothing and gets top spacing only. */
export function PageTop({ crumb, parent }: { crumb?: string; parent?: { label: string; href: string } }) {
  if (!crumb) return <div className="pt-8" />;
  return (
    <nav aria-label="Breadcrumb" className="pt-8 pb-6 text-[13px] text-iron-soft">
      <Link href="/" className="hover:text-hijau">
        Beranda
      </Link>
      {parent && (
        <>
          <span className="mx-2 text-ash-deep" aria-hidden>
            /
          </span>
          <Link href={parent.href} className="hover:text-hijau">
            {parent.label}
          </Link>
        </>
      )}
      <span className="mx-2 text-ash-deep" aria-hidden>
        /
      </span>
      <span aria-current="page" className="text-iron">
        {crumb}
      </span>
    </nav>
  );
}
