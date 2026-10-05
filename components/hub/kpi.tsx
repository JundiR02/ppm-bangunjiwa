import type { LucideIcon } from "lucide-react";

export function Kpi({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className="font-heading text-[2rem] font-light leading-none tracking-tight text-iron-deep tabular-nums sm:text-[2.25rem]">
        {children}
      </p>
      <p className="mt-2.5 flex items-center gap-1.5 text-[13px] text-iron-soft">
        <span className="flex size-5 shrink-0 items-center justify-center rounded-md border border-ash bg-frost/80">
          <Icon className="size-3" strokeWidth={2} />
        </span>
        {label}
      </p>
    </div>
  );
}
