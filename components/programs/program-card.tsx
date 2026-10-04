import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PILLAR_TAG: Record<string, { label: string; className: string }> = {
  pendidikan: { label: "Pendidikan", className: "bg-sage-100 text-forest-700" },
  khidmah: { label: "Komunitas", className: "bg-water-100 text-water-600" },
  usaha: { label: "Usaha", className: "bg-earth-100 text-earth-600" },
  kajian: { label: "Riset", className: "bg-sage-100 text-forest-700" },
  dana: { label: "Dana Abadi", className: "bg-earth-100 text-earth-600" },
  forest: { label: "Konservasi", className: "bg-water-100 text-water-600" },
  komunitas: { label: "KWT", className: "bg-sage-100 text-forest-700" },
};

export function ProgramCard({
  title,
  description,
  href,
  pillar,
}: {
  title: string;
  description: string;
  href: string;
  pillar: keyof typeof PILLAR_TAG;
}) {
  const tag = PILLAR_TAG[pillar];
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-7",
        "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-forest-300/60"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={cn("rounded-full px-3 py-1 text-xs font-medium", tag.className)}>
          {tag.label}
        </span>
        <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-forest-700" />
      </div>
      <div>
        <h3 className="font-heading text-lg font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
