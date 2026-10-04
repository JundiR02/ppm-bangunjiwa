import { ArrowDown, ArrowRight } from "lucide-react";
import { Panel, CircleLink } from "@/components/hub/panel";
import { EKOSISTEM_NODES } from "@/lib/bangunjiwa-data";

export function EcosystemFlow() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {EKOSISTEM_NODES.map((node, i) => (
        <div key={node.id} className="contents">
          <Panel className={i === 1 ? "flex flex-col gap-3 border-iron bg-iron text-frost" : "flex flex-col gap-3"}>
            <p className={i === 1 ? "text-[11px] font-medium uppercase tracking-[0.08em] text-frost/60" : "text-[11px] font-medium uppercase tracking-[0.08em] text-iron-soft"}>
              {node.label}
            </p>
            <h3 className={i === 1 ? "font-heading text-lg font-medium text-frost" : "font-heading text-lg font-medium text-iron-deep"}>
              {node.title}
            </h3>
            <p className={i === 1 ? "flex-1 text-[13px] leading-relaxed text-frost/75" : "flex-1 text-[13px] leading-relaxed text-iron-soft"}>
              {node.description}
            </p>
            {node.href && node.linkLabel && (
              <div className="flex items-center justify-between border-t border-ash/60 pt-3">
                <span className="text-[13px] font-medium text-iron">{node.linkLabel}</span>
                <CircleLink href={node.href} label={node.linkLabel} />
              </div>
            )}
          </Panel>
          {i < EKOSISTEM_NODES.length - 1 && (
            <div className="flex items-center justify-center text-iron-soft" aria-hidden>
              <span className="flex size-8 items-center justify-center rounded-full border border-white bg-frost shadow-panel">
                <ArrowRight className="hidden size-4 lg:block" />
                <ArrowDown className="size-4 lg:hidden" />
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
