import { Eyebrow } from "@/components/hub/panel";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mt-14 mb-5 max-w-2xl", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-balance font-heading text-[1.75rem] font-normal leading-tight tracking-[-0.015em] text-iron-deep sm:text-[2rem]">
        {title}
      </h2>
      {description && <p className="mt-2.5 text-[14px] leading-relaxed text-iron-soft">{description}</p>}
    </div>
  );
}
