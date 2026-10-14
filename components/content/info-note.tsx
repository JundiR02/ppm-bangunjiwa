import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function InfoNote({
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
