import { EqualGrid } from "@/components/programs/equal-grid";
import { StatCard } from "@/components/impact/stat-card";
import { StatCounter } from "@/components/impact/stat-counter";
import type { ImpactMetric } from "@/lib/dummy-data";

const UNIT_SUFFIX: Record<string, string> = {
  pohon: " pohon",
  ton: " ton",
  KK: " KK",
};

export function ImpactTriad({ metrics }: { metrics: ImpactMetric[] }) {
  return (
    <EqualGrid columns={{ base: 1, sm: 2, lg: 5 }} gap="md">
      {metrics.map((metric) => (
        <StatCard key={metric.id} icon={metric.icon} label={metric.label}>
          <StatCounter value={metric.value} unit={metric.unit} />
          {UNIT_SUFFIX[metric.unit] ?? ""}
        </StatCard>
      ))}
    </EqualGrid>
  );
}
