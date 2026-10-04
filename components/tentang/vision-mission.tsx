import { EqualGrid } from "@/components/programs/equal-grid";
import { MISI_BANGUNJIWA } from "@/lib/bangunjiwa-data";

export function VisionMission() {
  return (
    <div className="rounded-3xl bg-forest-950 px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-earth-300">Visi</p>
        <h2 className="mt-3 text-balance font-heading text-xl font-medium leading-relaxed text-white sm:text-2xl">
          Menjadi lembaga pendidikan keislaman berbasis riset ekologi dan pengabdian masyarakat,
          sekaligus sumber SDM bagi ekosistem MRV Nexus
        </h2>
      </div>

      <div className="mt-12">
        <EqualGrid columns={{ base: 1, sm: 2 }} gap="md">
          {MISI_BANGUNJIWA.map((misi, i) => (
            <div
              key={misi}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"
            >
              <p className="font-heading text-xl font-bold text-earth-300">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-white/80">{misi}</p>
            </div>
          ))}
        </EqualGrid>
      </div>
    </div>
  );
}
