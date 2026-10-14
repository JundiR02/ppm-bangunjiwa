import { cn } from "@/lib/utils";

/** Eight-pointed star (two overlapping squares), the motif behind the site's ornaments. */
export function StarPath({ size, className }: { size: number; className?: string }) {
  const d = (size / 2) * 0.7071;
  return (
    <g className={className}>
      <rect x={-d} y={-d} width={d * 2} height={d * 2} />
      <rect x={-d} y={-d} width={d * 2} height={d * 2} transform="rotate(45)" />
    </g>
  );
}

/**
 * Repeating eight-pointed-star lattice. `id` must be unique on the page because SVG pattern ids are global.
 * The mask keeps the lattice at the band's edges and clears it behind the content in the middle.
 */
export function GeometricPattern({
  id,
  opacity = 0.28,
  mask = "radial-gradient(ellipse 45% 70% at 50% 50%, transparent 30%, black 100%)",
  className,
}: {
  id: string;
  opacity?: number;
  mask?: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 size-full text-emas", className)}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <defs>
        <pattern id={id} width="64" height="64" patternUnits="userSpaceOnUse">
          <g transform="translate(32 32)" fill="none" stroke="currentColor" strokeWidth="1" opacity={opacity}>
            <StarPath size={40} />
            <circle r="7" />
          </g>
          <path
            d="M0 0 L12 12 M64 0 L52 12 M0 64 L12 52 M64 64 L52 52"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity={opacity * 0.65}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function StarDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("mx-auto flex max-w-xs items-center gap-4 text-emas", className)}>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-emas/70" />
      <svg width="18" height="18" viewBox="-9 -9 18 18" className="shrink-0">
        <StarPath size={14} className="fill-current" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-emas/70" />
    </div>
  );
}
