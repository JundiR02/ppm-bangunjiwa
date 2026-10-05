import { Sprout } from "lucide-react";
import { CircleLink } from "@/components/hub/panel";
import { cn } from "@/lib/utils";

export function QuotePanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between gap-8 overflow-hidden rounded-[22px] bg-iron p-6 text-frost shadow-panel sm:p-7",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(circle at 100% 0%, rgb(138 147 127 / 0.45), transparent 55%), radial-gradient(circle at 0% 100%, rgb(43 45 47 / 0.9), transparent 60%)",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-frost/60">Hadits pilihan</span>
        <Sprout className="size-5 text-pine-soft" strokeWidth={1.5} />
      </div>
      <div>
        <p dir="rtl" lang="ar" className="font-arabic text-2xl leading-loose sm:text-[1.7rem]">
          مَنْ غَرَسَ غَرْسًا فَلَهُ مِثْلُ أَجْرِ مَا أُكِلَ مِنْهُ
        </p>
        <p className="mt-4 text-balance font-heading text-xl font-medium leading-snug sm:text-2xl">
          &ldquo;Menanam pohon adalah shodaqah jariyah.&rdquo;
        </p>
        <p className="mt-2 text-[13px] text-frost/60">HR. Ahmad — dari hadits keutamaan menanam</p>
      </div>
      <div className="flex items-center justify-between border-t border-frost/15 pt-4">
        <span className="text-[13px] text-frost/75">Kenali pesantren kami</span>
        <CircleLink href="/tentang" label="Tentang Yayasan Pesantren Masyarakat Bangunjiwa" className="border-frost/20 bg-frost/10 text-frost hover:bg-frost hover:text-iron" />
      </div>
    </div>
  );
}
