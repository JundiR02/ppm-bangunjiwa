import { cn } from "@/lib/utils";

type EqualGridProps = {
  columns?: { base?: number; sm?: number; md?: number; lg?: number; xl?: number };
  gap?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const GAP = { sm: "gap-3", md: "gap-5 lg:gap-6", lg: "gap-6 lg:gap-8" };

const COL = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  7: "grid-cols-7",
} as const;

const SM_COL = { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 5: "sm:grid-cols-5" } as const;
const MD_COL = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 5: "md:grid-cols-5" } as const;
const LG_COL = { 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 7: "lg:grid-cols-7" } as const;
const XL_COL = { 5: "xl:grid-cols-5", 7: "xl:grid-cols-7" } as const;

/**
 * Grid utility that forces equal-height, equal-weight siblings — the structural
 * enforcement behind the At-Tawassuth / At-Tawazun "no card outranks another" rule.
 */
export function EqualGrid({ columns = { base: 1 }, gap = "md", className, children }: EqualGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-fr items-stretch",
        GAP[gap],
        COL[(columns.base ?? 1) as keyof typeof COL],
        columns.sm && SM_COL[columns.sm as keyof typeof SM_COL],
        columns.md && MD_COL[columns.md as keyof typeof MD_COL],
        columns.lg && LG_COL[columns.lg as keyof typeof LG_COL],
        columns.xl && XL_COL[columns.xl as keyof typeof XL_COL],
        className
      )}
    >
      {children}
    </div>
  );
}
