import Link from "next/link";
import { HandHeart, TreePine, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SplitCta() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="flex flex-col justify-between gap-6 rounded-2xl bg-forest-700 p-9 text-white">
        <span className="flex size-11 items-center justify-center rounded-xl bg-white/15">
          <HandHeart className="size-5" />
        </span>
        <div>
          <h3 className="font-heading text-2xl font-bold">Donasi Riset Ekologi</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
            Dukung asesmen komunitas di DAS Oyo &amp; DAS Ulin bersama mahasantri Bangunjiwa.
            Halaman donasi masih dalam tahap prototype.
          </p>
        </div>
        <Button
          variant="secondary"
          className="w-fit"
          nativeButton={false}
          render={<Link href="/donasi" />}
        >
          Lihat Program <ArrowRight className="size-4" />
        </Button>
      </div>

      <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-9">
        <div className="flex items-start justify-between gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-sage-100 text-forest-700 dark:bg-forest-900 dark:text-sage-300">
            <TreePine className="size-5" />
          </span>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Segera hadir
          </span>
        </div>
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground">Wakaf Pohon</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Program wakaf pohon sedang disiapkan. Mekanisme pengelolaan, pencatatan, dan
            pelaporannya akan diumumkan setelah siap.
          </p>
        </div>
      </div>
    </div>
  );
}
