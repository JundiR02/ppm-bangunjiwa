import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative -mt-16 overflow-hidden bg-forest-950 pt-32 pb-16 lg:pb-20", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(149,213,178,0.16), transparent 45%), radial-gradient(circle at 80% 10%, rgba(78,168,222,0.12), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        {eyebrow && (
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-balance font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-white/75">
            {description}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
