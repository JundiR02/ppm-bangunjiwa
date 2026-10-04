import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { EKOSISTEM_NODES } from "@/lib/bangunjiwa-data";

export function EcosystemFlow() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {EKOSISTEM_NODES.map((node, i) => (
        <div key={node.id} className="contents">
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.06em] text-forest-600 dark:text-sage-300">
              {node.label}
            </p>
            <h3 className="font-heading text-base font-bold text-forest-800 dark:text-sage-100">
              {node.title}
            </h3>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{node.description}</p>
            <Link
              href={node.href}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 hover:gap-2.5 dark:text-sage-300 transition-all"
            >
              {node.linkLabel}
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          {i < EKOSISTEM_NODES.length - 1 && (
            <div className="flex items-center justify-center text-forest-500 dark:text-sage-400">
              <ArrowRight className="hidden size-5 lg:block" />
              <ArrowDown className="size-5 lg:hidden" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
