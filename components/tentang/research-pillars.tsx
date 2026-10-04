import { EqualGrid } from "@/components/programs/equal-grid";
import { RISET_PILLARS, PEMINATAN_RISET } from "@/lib/bangunjiwa-data";

const ACCENTS = ["bg-sage-100 text-forest-700", "bg-water-100 text-water-600", "bg-earth-100 text-earth-600"];

export function ResearchPillars() {
  return (
    <div>
      <EqualGrid columns={{ base: 1, lg: 3 }} gap="md">
        {RISET_PILLARS.map((pillar, i) => (
          <div key={pillar.id} className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7">
            <span
              className={`flex size-10 items-center justify-center rounded-full font-heading text-sm font-bold ${ACCENTS[i % ACCENTS.length]}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-lg font-bold text-foreground">{pillar.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </EqualGrid>

      <div className="mt-12 border-t border-border pt-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.06em] text-forest-600 dark:text-sage-300">
          Peminatan Riset Ekologi — Semester IV & V
        </p>
        <div className="mt-6">
          <EqualGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="sm">
            {PEMINATAN_RISET.map((item) => (
              <div key={item.tag} className="rounded-2xl bg-earth-50 p-5 dark:bg-forest-900/40">
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.05em] text-earth-600 dark:text-earth-300">
                  {item.tag}
                </span>
                <p className="mt-2 text-sm text-foreground/85">{item.description}</p>
              </div>
            ))}
          </EqualGrid>
        </div>
      </div>
    </div>
  );
}
