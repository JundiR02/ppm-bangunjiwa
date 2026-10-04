export function ArabicQuote({
  arabic,
  translation,
  source,
}: {
  arabic: string;
  translation: string;
  source?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p dir="rtl" className="font-arabic text-2xl leading-loose text-white sm:text-3xl">
        {arabic}
      </p>
      <p className="max-w-xl text-balance font-heading text-xl font-semibold text-white sm:text-2xl">
        &ldquo;{translation}&rdquo;
      </p>
      {source && <p className="text-sm text-white/70">{source}</p>}
    </div>
  );
}
