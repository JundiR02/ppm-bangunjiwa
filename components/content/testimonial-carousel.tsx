"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
};

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const active = items[index];

  return (
    <div
      className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Quote className="size-8 text-sage-300" strokeWidth={1.5} />
      <p className="text-balance font-heading text-xl font-medium leading-snug text-foreground sm:text-2xl">
        &ldquo;{active.quote}&rdquo;
      </p>
      <div>
        <p className="text-sm font-semibold text-foreground">{active.name}</p>
        <p className="text-xs text-muted-foreground">{active.role}</p>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Testimoni sebelumnya"
          onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <div className="flex gap-1.5">
          {items.map((item, i) => (
            <button
              key={item.id}
              aria-label={`Ke testimoni ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "size-1.5 rounded-full transition-all",
                i === index ? "w-4 bg-forest-700 dark:bg-sage-300" : "bg-neutral-300 dark:bg-neutral-700"
              )}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Testimoni berikutnya"
          onClick={() => setIndex((i) => (i + 1) % items.length)}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
