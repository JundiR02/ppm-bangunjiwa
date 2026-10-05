/** Full-width green band with the hadith on planting trees. */
export function QuoteBand() {
  return (
    <section className="full-bleed mt-24 bg-hijau py-16 text-frost sm:py-20">
      <figure className="mx-auto max-w-3xl text-center">
        <p dir="rtl" lang="ar" className="font-arabic text-3xl leading-loose sm:text-4xl">
          مَنْ غَرَسَ غَرْسًا فَلَهُ مِثْلُ أَجْرِ مَا أُكِلَ مِنْهُ
        </p>
        <blockquote className="mt-6 text-balance font-heading text-2xl leading-snug sm:text-3xl">
          &ldquo;Barang siapa menanam tanaman, baginya pahala seperti apa yang dimakan darinya.&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-[14px] text-frost/70">HR. Ahmad</figcaption>
      </figure>
    </section>
  );
}
