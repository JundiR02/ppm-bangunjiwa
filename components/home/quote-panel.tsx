/** Eight-pointed star (two overlapping squares), the motif used for the band's pattern and divider. */
function StarPath({ size, className }: { size: number; className?: string }) {
  const h = size / 2;
  const d = h * 0.7071;
  return (
    <g className={className}>
      <rect x={-d} y={-d} width={d * 2} height={d * 2} />
      <rect x={-d} y={-d} width={d * 2} height={d * 2} transform="rotate(45)" />
    </g>
  );
}

function GeometricPattern() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 size-full text-emas"
      style={{
        // Strongest at the sides, fading out behind the text so the quote stays legible.
        maskImage: "radial-gradient(ellipse 45% 70% at 50% 50%, transparent 30%, black 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 45% 70% at 50% 50%, transparent 30%, black 100%)",
      }}
    >
      <defs>
        <pattern id="bintang-delapan" width="64" height="64" patternUnits="userSpaceOnUse">
          <g transform="translate(32 32)" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.28">
            <StarPath size={40} />
            <circle r="7" />
          </g>
          <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.18">
            <path d="M0 0 L12 12 M64 0 L52 12 M0 64 L12 52 M64 64 L52 52" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bintang-delapan)" />
    </svg>
  );
}

function StarDivider() {
  return (
    <div aria-hidden className="mx-auto mt-7 flex max-w-xs items-center gap-4 text-emas">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-emas/70" />
      <svg width="18" height="18" viewBox="-9 -9 18 18" className="shrink-0">
        <StarPath size={14} className="fill-current" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-emas/70" />
    </div>
  );
}

/** Full-width green band with the hadith on planting trees. */
export function QuoteBand() {
  return (
    <section
      className="full-bleed relative mt-24 overflow-hidden py-16 text-frost sm:py-20"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 60% 55% at 50% 0%, rgb(201 149 43 / 0.22), transparent 70%), linear-gradient(135deg, var(--color-hijau) 0%, var(--color-hijau-deep) 55%, var(--color-hijau-ink) 100%)",
      }}
    >
      <GeometricPattern />
      <figure className="relative mx-auto max-w-3xl text-center">
        <p dir="rtl" lang="ar" className="font-arabic text-3xl leading-loose sm:text-4xl">
          مَنْ غَرَسَ غَرْسًا فَلَهُ مِثْلُ أَجْرِ مَا أُكِلَ مِنْهُ
        </p>
        <StarDivider />
        <blockquote className="mt-7 text-balance font-heading text-2xl leading-snug sm:text-3xl">
          &ldquo;Barang siapa menanam tanaman, baginya pahala seperti apa yang dimakan darinya.&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-[14px] text-emas">HR. Ahmad</figcaption>
      </figure>
    </section>
  );
}
