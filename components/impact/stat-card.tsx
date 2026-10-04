import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * `tone` is deliberately not a prop here — every stat card renders with the
 * same neutral surface so no single metric can be visually promoted above
 * its siblings (design.md §1.1 / §16.3).
 */
export function StatCard({ icon: Icon, label, children, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm",
        className
      )}
    >
      <span className="flex size-10 items-center justify-center rounded-xl bg-muted text-forest-700 dark:text-sage-300">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <div>
        <p className="font-heading text-3xl font-extrabold tabular-nums text-foreground sm:text-[2.25rem]">
          {children}
        </p>
        <p className="mt-1.5 text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
