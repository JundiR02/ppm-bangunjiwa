import Link from "next/link";
import { TreePine, MapPinned, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SplitCta() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="flex flex-col justify-between gap-6 rounded-2xl bg-forest-700 p-9 text-white">
        <span className="flex size-11 items-center justify-center rounded-xl bg-white/15">
          <TreePine className="size-5" />
        </span>
        <div>
          <h3 className="font-heading text-2xl font-bold">Wakaf Pohon</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
            Wakafkan satu pohon dan jadikan ia amal yang terus mengalir — tertanam, terverifikasi,
            dan tercatat atas nama Anda.
          </p>
        </div>
        <Button
          variant="secondary"
          className="w-fit"
          nativeButton={false}
          render={<Link href="/dana-abadi/wakaf-pohon" />}
        >
          Mulai Wakaf <ArrowRight className="size-4" />
        </Button>
      </div>

      <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-9">
        <span className="flex size-11 items-center justify-center rounded-xl bg-sage-100 text-forest-700 dark:bg-forest-900 dark:text-sage-300">
          <MapPinned className="size-5" />
        </span>
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground">Lacak Pohon Anda</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Sudah pernah berwakaf? Masukkan kode pohon Anda untuk melihat titik GPS, foto
            pertumbuhan, dan estimasi serapan karbonnya.
          </p>
        </div>
        <Button
          variant="outline"
          className="w-fit"
          nativeButton={false}
          render={<Link href="/dana-abadi/lacak/TRK-2026-00842" />}
        >
          Lacak Sekarang <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
