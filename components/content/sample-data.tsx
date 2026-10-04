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
        "inline-flex items-center gap-1.5 rounded-full border border-earth-200 bg-earth-50 px-2.5 py-1 text-xs font-medium text-earth-600",
        "dark:border-earth-600/40 dark:bg-earth-600/10 dark:text-earth-300",
        className
      )}
    >
      <Info className="size-3.5" />
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
        "flex gap-3 rounded-2xl border border-earth-200 bg-earth-50 p-5 text-sm leading-relaxed text-earth-600",
        "dark:border-earth-600/40 dark:bg-earth-600/10 dark:text-earth-200",
        className
      )}
    >
      <Info className="mt-0.5 size-4 shrink-0" />
      <div>
        <p className="font-semibold">{title}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
