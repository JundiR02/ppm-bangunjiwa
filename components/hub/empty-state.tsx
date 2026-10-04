import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmptyState({
  icon: Icon,
  title,
  children,
  className,
}: {
  icon: LucideIcon;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-ash-deep/60 px-5 py-8 text-center", className)}>
      <span className="flex size-10 items-center justify-center rounded-full bg-linen text-iron-soft">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <p className="text-[14px] font-medium text-iron-deep">{title}</p>
      {children && <div className="max-w-sm text-[13px] leading-relaxed text-iron-soft">{children}</div>}
    </div>
  );
}
