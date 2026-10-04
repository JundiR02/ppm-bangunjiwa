import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function SampleDataBadge({
  label = "Data contoh, bukan angka sebenarnya",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-ash bg-frost/70 px-2.5 py-1 text-[11px] font-medium text-iron-soft",
        className
      )}
    >
      <Info className="size-3.5 text-pine-deep" />
      {label}
    </span>
  );
}

export function PrototypeNotice({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      role="note"
      className={cn(
        "flex gap-3 rounded-[18px] border border-pine/30 bg-pine-soft/70 p-4 text-[13px] leading-relaxed text-iron",
        className
      )}
    >
      <Info className="mt-0.5 size-4 shrink-0 text-pine-deep" />
      <div>
        <p className="font-semibold text-iron-deep">{title}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  );
}
