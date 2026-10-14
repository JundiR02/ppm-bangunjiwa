/**
 * The hadith on planting, set like a page of kitab kuning being studied: each Arabic word carries its
 * meaning written slanting beneath it (makna gandul), the way santri annotate their texts.
 * Glosses are aria-hidden; the full translation below is what assistive tech reads.
 *
 * The word-by-word meanings are our own rendering and should be checked by an ustadz before launch.
 */
const KATA: { ar: string; makna: string }[] = [
  { ar: "مَنْ", makna: "siapa" },
  { ar: "غَرَسَ", makna: "menanam" },
  { ar: "غَرْسًا", makna: "tanaman" },
  { ar: "فَلَهُ", makna: "maka baginya" },
  { ar: "مِثْلُ", makna: "seperti" },
  { ar: "أَجْرِ", makna: "pahala" },
  { ar: "مَا", makna: "apa yang" },
  { ar: "أُكِلَ", makna: "dimakan" },
  { ar: "مِنْهُ", makna: "darinya" },
];

export function KitabHadits() {
  return (
    <section aria-label="Hadits tentang menanam" className="mt-16 sm:mt-24">
      <figure className="mx-auto max-w-4xl">
        {/* Double printed frame, like the border around a kitab page. */}
        <div className="bg-kertas p-1.5 shadow-[0_1px_2px_rgb(30_26_20/0.08)] ring-1 ring-tinta/50">
          <div className="border border-tinta/35 px-4 py-8 sm:px-12 sm:py-12">
            {/* Each word is a column as wide as its word or its gloss, whichever is longer,
                so a long gloss can never run under the next word. */}
            <p
              lang="ar"
              dir="rtl"
              className="flex flex-wrap items-start justify-center gap-x-4 gap-y-6 font-arabic text-tinta sm:gap-x-6"
            >
              {KATA.map((k) => (
                <span key={k.ar} className="inline-flex flex-col items-center">
                  <span className="text-[2.1rem] leading-[1.7] sm:text-[2.7rem]">{k.ar}</span>
                  <span
                    aria-hidden
                    dir="ltr"
                    className="mt-0.5 -rotate-[12deg] whitespace-nowrap pb-3 font-heading text-[13px] leading-none text-hijau italic sm:text-[14px]"
                  >
                    {k.makna}
                  </span>
                </span>
              ))}
            </p>
          </div>
        </div>
        <figcaption className="mx-auto mt-8 max-w-2xl text-center">
          <blockquote className="text-balance font-heading text-2xl leading-snug text-iron-deep sm:text-[1.75rem]">
            &ldquo;Barang siapa menanam tanaman, baginya pahala seperti apa yang dimakan darinya.&rdquo;
          </blockquote>
          <p className="mt-3 text-[14px] text-iron-soft">
            HR. Ahmad. Arti tiap kata ditulis menggantung di bawahnya, seperti santri memaknai kitab kuning.
          </p>
        </figcaption>
      </figure>
    </section>
  );
}
