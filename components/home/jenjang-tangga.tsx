import Link from "next/link";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import { LEMBAGA_BANGUNJIWA, type Lembaga } from "@/lib/bangunjiwa-data";
import { cn } from "@/lib/utils";

/** Youngest to oldest: each step is one age band higher than the last. */
const URUTAN: Lembaga["id"][] = ["pra-tpq", "tpq-plus", "mdt", "ppm"];

/**
 * Per step: green deepens and the step rises as the learners get older, so the colour and the
 * height both carry the progression. The lightest green is the floor that keeps the pale-gold
 * label at 4.5:1 (checked), so no step goes lighter than #1d6a43.
 */
const ANAK_TANGGA = [
  // Phone: a stack stepping right. Tablet: 70%-wide steps climbing diagonally. Desktop: four columns rising.
  { from: "#1d6a43", to: "#175c3a", height: "lg:min-h-[15rem]", indent: "ml-0 md:w-[70%]" },
  { from: "#145a38", to: "#0f4e31", height: "lg:min-h-[18.5rem]", indent: "ml-4 sm:ml-8 md:ml-[10%] md:w-[70%]" },
  { from: "#0f4e31", to: "#0a4329", height: "lg:min-h-[22rem]", indent: "ml-8 sm:ml-16 md:ml-[20%] md:w-[70%]" },
  { from: "#0a4329", to: "#072f1d", height: "lg:min-h-[25.5rem]", indent: "ml-12 sm:ml-24 md:ml-[30%] md:w-[70%]" },
];

export function JenjangTangga() {
  const units = URUTAN.map((id) => LEMBAGA_BANGUNJIWA.find((l) => l.id === id)!);

  return (
    <section aria-labelledby="jenjang-judul" className="mt-14 sm:mt-20">
      <div className="max-w-2xl">
        <h2 id="jenjang-judul" className="font-heading text-3xl leading-tight text-iron-deep sm:text-4xl">
          Jenjang pendidikan
        </h2>
        <p className="mt-3 text-[16px] leading-relaxed text-iron-soft">
          Dari usia PAUD sampai mahasiswa, setiap jenjang punya lembaganya sendiri.
        </p>
      </div>

      <ol className="mt-10 flex flex-col gap-3 lg:grid lg:grid-cols-4 lg:items-end lg:gap-0 lg:border-b-2 lg:border-hijau-ink">
        {units.map((l, i) => {
          const step = ANAK_TANGGA[i];
          return (
            <li key={l.id} className={cn(step.indent, "lg:ml-0 lg:w-auto")}>
              <Link
                href={l.href}
                className={cn(
                  "group flex h-full flex-col justify-between gap-8 border-t-[3px] border-emas p-6 text-frost transition-[filter] hover:brightness-110 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-emas-deep lg:p-7",
                  step.height
                )}
                style={{ backgroundImage: `linear-gradient(165deg, ${step.from} 0%, ${step.to} 100%)` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[14px] font-semibold text-emas-muda">{l.untuk}</p>
                  <UnitLogo
                    src={l.logo}
                    alt=""
                    fallback={l.singkatan}
                    className="size-12 rounded-full border-0 bg-frost ring-2 ring-emas-muda/70"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl leading-snug group-hover:underline group-hover:decoration-emas-muda group-hover:underline-offset-4">
                    {l.nama}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-frost/90">{l.ringkas}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
