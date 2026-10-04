"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Panel, PanelHeader } from "@/components/hub/panel";
import { SampleDataBadge } from "@/components/content/sample-data";
import { cn } from "@/lib/utils";

type Testimonial = { id: string; name: string; role: string; quote: string };

function initials(name: string) {
  return name
    .replace(/^(Ust\.|Bapak|Ibu)\s+/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function TestimonialPanel({ items, className }: { items: Testimonial[]; className?: string }) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused || items.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const active = items[index];
  const step = (d: number) => setIndex((i) => (i + d + items.length) % items.length);

  return (
    <Panel
      className={cn("flex flex-col", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <PanelHeader title="Suara Komunitas" icon={Quote} className="flex-wrap" action={<SampleDataBadge label="Testimoni contoh" />} />
      <blockquote className="mt-6 flex-1 text-balance font-heading text-lg font-medium leading-snug text-iron-deep sm:text-xl" aria-live="polite">
        &ldquo;{active.quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-ash/60 pt-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-pine-soft text-[13px] font-semibold text-pine-deep">
            {initials(active.name)}
          </span>
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-iron-deep">{active.name}</p>
            <p className="text-xs text-iron-soft">{active.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button type="button" aria-label="Testimoni sebelumnya" onClick={() => step(-1)} className="flex size-8 items-center justify-center rounded-full border border-white bg-frost text-iron hover:bg-linen">
            <ChevronLeft className="size-4" />
          </button>
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Ke testimoni ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn("h-1.5 rounded-full transition-all", i === index ? "w-4 bg-iron" : "w-1.5 bg-ash-deep")}
            />
          ))}
          <button type="button" aria-label="Testimoni berikutnya" onClick={() => step(1)} className="flex size-8 items-center justify-center rounded-full border border-white bg-frost text-iron hover:bg-linen">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </Panel>
  );
}
