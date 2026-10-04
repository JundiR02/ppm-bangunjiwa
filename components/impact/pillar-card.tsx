const ACCENTS = ["bg-sage-100 text-forest-700", "bg-earth-100 text-earth-600", "bg-water-100 text-water-600"];

export function PillarCard({
  index,
  title,
  subtitle,
  description,
}: {
  index: number;
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-8">
      <span
        className={`flex size-11 items-center justify-center rounded-full font-heading text-sm font-bold ${ACCENTS[index % ACCENTS.length]}`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-heading text-xl font-bold text-forest-800 dark:text-sage-100">
          {title}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-muted-foreground">{subtitle}</p>
      </div>
      <p className="text-sm leading-relaxed text-foreground/75">{description}</p>
    </div>
  );
}
