import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Panel({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-[22px] border border-white/80 bg-frost/80 p-5 shadow-panel backdrop-blur-sm sm:p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function PanelHeader({
  title,
  icon: Icon,
  action,
  className,
}: {
  title: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-3", className)}>
      <div className="flex min-w-0 items-center gap-2.5">
        {Icon && (
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white bg-linen text-iron">
            <Icon className="size-4" strokeWidth={1.75} />
          </span>
        )}
        <h2 className="font-heading text-[15px] font-semibold text-iron-deep">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function CircleLink({ href, label, className }: { href: string; label: string; className?: string }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full border border-white bg-frost text-iron shadow-panel transition-colors hover:bg-iron hover:text-frost",
        className
      )}
    >
      <ArrowUpRight className="size-4" />
    </Link>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/80 bg-frost/70 px-3 py-1 text-xs font-medium text-iron shadow-panel",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-pine" aria-hidden />
      {children}
    </span>
  );
}
