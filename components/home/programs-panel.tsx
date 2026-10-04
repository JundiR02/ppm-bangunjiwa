"use client";

import { Tabs } from "@base-ui/react/tabs";
import { Sprout } from "lucide-react";
import { Panel, PanelHeader } from "@/components/hub/panel";
import { FEATURED_PROGRAMS, PROGRAM_GROUPS } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";

export function ProgramsPanel({ className }: { className?: string }) {
  return (
    <Panel className={cn("flex flex-col", className)}>
      <Tabs.Root defaultValue={PROGRAM_GROUPS[0].id} className="flex flex-1 flex-col">
        <PanelHeader title="Program Pesantren" icon={Sprout} />
        <Tabs.List className="mt-4 flex gap-1 rounded-full border border-white bg-linen/80 p-1">
          {PROGRAM_GROUPS.map((group) => (
            <Tabs.Tab
              key={group.id}
              value={group.id}
              className="flex-1 rounded-full px-2.5 py-1.5 text-[12px] font-medium whitespace-nowrap text-iron-soft outline-none transition-colors hover:text-iron focus-visible:ring-2 focus-visible:ring-pine data-active:bg-iron data-active:text-frost"
            >
              {group.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {PROGRAM_GROUPS.map((group) => (
          <Tabs.Panel key={group.id} value={group.id} className="mt-4 flex flex-col gap-2.5 outline-none">
            {FEATURED_PROGRAMS.filter((p) => p.group === group.id).map((program, i) => (
              <div
                key={program.id}
                className={cn(
                  "rounded-2xl border p-4",
                  i === 0 ? "border-pine/30 bg-pine-soft" : "border-white bg-frost"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-[15px] font-semibold text-iron-deep">{program.title}</h3>
                  <span className="shrink-0 rounded-full border border-white bg-frost/80 px-2 py-0.5 text-[11px] text-iron-soft">
                    {program.tag}
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-iron">{program.description}</p>
              </div>
            ))}
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </Panel>
  );
}
