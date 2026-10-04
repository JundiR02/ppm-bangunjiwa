import { cn } from "@/lib/utils";

export const FIELD =
  "w-full rounded-xl border border-border bg-frost px-3.5 py-2.5 text-sm text-iron-deep outline-none transition-shadow placeholder:text-iron-soft/60 focus:border-pine focus:ring-3 focus:ring-pine/20 disabled:bg-linen disabled:text-iron-soft";

export function Field({
  label,
  htmlFor,
  hint,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-xs font-medium text-iron">
        {label}
      </label>
      {children}
      {hint && <p className="text-[11.5px] leading-relaxed text-iron-soft">{hint}</p>}
    </div>
  );
}

export function GhostButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-9 items-center justify-center gap-1.5 rounded-xl border border-white bg-frost px-3 text-[13px] font-medium text-iron shadow-panel transition-colors hover:bg-linen disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export function PrimaryButton({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-iron px-4 text-[13px] font-medium text-frost shadow-panel transition-colors hover:bg-iron-deep disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
