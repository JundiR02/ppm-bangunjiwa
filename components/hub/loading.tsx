/**
 * Wraps skeleton placeholders so a screen reader hears what is loading
 * instead of a silent grey block.
 */
export function Loading({ label, className, children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <div role="status" aria-busy="true" className={className}>
      <span className="sr-only">{label}</span>
      <div aria-hidden>{children}</div>
    </div>
  );
}
