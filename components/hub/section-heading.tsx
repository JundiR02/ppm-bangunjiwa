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
    <div className={cn("mt-14 mb-6 max-w-2xl sm:mt-20 sm:mb-8", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-2 text-balance font-heading text-3xl leading-tight text-iron-deep sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-[16px] leading-relaxed text-iron-soft">{description}</p>}
    </div>
  );
}
