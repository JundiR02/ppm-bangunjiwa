import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArabicQuote } from "@/components/content/arabic-quote";

export function Hero() {
  return (
    <section className="relative -mt-16 flex min-h-[92vh] items-center justify-center overflow-hidden bg-forest-950">
      {/* Cinematic canopy backdrop — swap for drone footage/video when media is supplied by CMS */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(149,213,178,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(78,168,222,0.14), transparent 40%), radial-gradient(circle at 50% 100%, rgba(27,67,50,0.9), rgba(8,23,18,1) 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/10" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 py-32 text-center">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur">
          PPM Riset Ekologi Bangunjiwa — Portal Pesantren Hijau
        </span>

        <ArabicQuote
          arabic="مَنْ غَرَسَ غَرْسًا فَلَهُ مِثْلُ أَجْرِ مَا أُكِلَ مِنْهُ"
          translation="Menanam Pohon adalah Shodaqah Jariyah"
          source="HR. Ahmad — dari hadits keutamaan menanam"
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="h-12 px-7 text-[0.95rem]"
            nativeButton={false}
            render={<Link href="/dharma-pendidikan" />}
          >
            Jelajahi Portal
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="h-12 border border-white/15 bg-white/10 px-7 text-[0.95rem] text-white hover:bg-white/20"
            nativeButton={false}
            render={<Link href="/tentang" />}
          >
            Pelajari Lebih Lanjut
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/60">
        <ChevronDown className="size-6" />
      </div>
    </section>
  );
}
