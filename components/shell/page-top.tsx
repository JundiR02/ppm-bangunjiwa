import Link from "next/link";

const CRUMB_LINK = "inline-flex min-h-11 items-center hover:text-hijau";

/** Breadcrumb above a page's heading; the home page passes nothing and gets top spacing only. */
export function PageTop({ crumb, parent }: { crumb?: string; parent?: { label: string; href: string } }) {
  if (!crumb) return <div className="pt-8" />;
  return (
    // Links are 44px tall for touch; the reduced padding keeps the heading where it was.
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center pt-5 pb-3 text-[13px] text-iron-soft">
      <Link href="/" className={CRUMB_LINK}>
        Beranda
      </Link>
      {parent && (
        <>
          <span className="mx-2 text-ash-deep" aria-hidden>
            /
          </span>
          <Link href={parent.href} className={CRUMB_LINK}>
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
