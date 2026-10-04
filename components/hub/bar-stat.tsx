import { cn } from "@/lib/utils";

export type BarTone = "pine" | "iron" | "ash";

const TONE: Record<BarTone, string> = {
  pine: "bg-pine",
  iron: "bg-iron",
  ash: "bg-ash-deep",
};

export function BarStat({
  items,
  className,
}: {
  items: { id: string; label: string; percent: number; tone: BarTone }[];
  className?: string;
}) {
  const max = Math.max(...items.map((i) => i.percent));
  return (
    <div className={cn("flex h-48 items-end gap-2", className)}>
      {items.map((item) => (
        <div key={item.id} className="flex h-full min-w-0 flex-1 flex-col justify-end gap-2">
          <div
            className={cn("relative w-full rounded-t-[18px] rounded-b-lg", TONE[item.tone])}
            style={{ height: `${(item.percent / max) * 100}%` }}
          >
            <span className="absolute top-2 left-1/2 -translate-x-1/2 rounded-full bg-frost/90 px-2 py-0.5 text-[10px] font-semibold text-iron tabular-nums">
              {item.percent}%
            </span>
          </div>
          <span className="line-clamp-2 min-h-[2lh] text-center text-[11px] leading-tight text-iron-soft">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
