import { GeometricPattern, StarDivider } from "@/components/home/ornament";

/** Full-width green band with the hadith on planting trees. */
export function QuoteBand() {
  return (
    <section
      className="full-bleed relative mt-24 overflow-hidden py-16 text-frost sm:py-20"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 60% 55% at 50% 0%, rgb(201 149 43 / 0.22), transparent 70%), linear-gradient(135deg, var(--color-hijau) 0%, var(--color-hijau-deep) 55%, var(--color-hijau-ink) 100%)",
      }}
    >
      <GeometricPattern id="pola-hadits" />
      <figure className="relative mx-auto max-w-3xl text-center">
        <p dir="rtl" lang="ar" className="font-arabic text-3xl leading-loose sm:text-4xl">
          مَنْ غَرَسَ غَرْسًا فَلَهُ مِثْلُ أَجْرِ مَا أُكِلَ مِنْهُ
        </p>
        <StarDivider className="mt-7" />
        <blockquote className="mt-7 text-balance font-heading text-2xl leading-snug sm:text-3xl">
          &ldquo;Barang siapa menanam tanaman, baginya pahala seperti apa yang dimakan darinya.&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-[14px] text-emas">HR. Ahmad</figcaption>
      </figure>
    </section>
  );
}
