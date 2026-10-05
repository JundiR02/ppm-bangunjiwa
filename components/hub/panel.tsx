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
        "rounded-xl border border-ash bg-frost p-5 sm:p-6",
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
          <Icon className="size-[18px] shrink-0 text-pine-deep" strokeWidth={1.75} />
        )}
        <h2 className="font-heading text-lg font-medium text-iron-deep">{title}</h2>
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
        "flex size-9 shrink-0 items-center justify-center rounded-full border border-ash text-pine-deep transition-colors hover:border-hijau hover:bg-hijau hover:text-frost",
        className
      )}
    >
      <ArrowUpRight className="size-4" />
    </Link>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-block text-[13px] font-semibold text-emas-deep", className)}>{children}</span>
  );
}
