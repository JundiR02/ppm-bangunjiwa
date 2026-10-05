"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyButton({ value, label, className }: { value: string; label: string; className?: string }) {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} disalin` : `Salin ${label}`}
      className={cn(
        "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-xl border border-ash bg-frost px-3 text-xs font-medium text-iron shadow-panel transition-colors hover:bg-linen",
        className
      )}
    >
      {copied ? <Check className="size-3.5 text-pine-deep" /> : <Copy className="size-3.5" />}
      {copied ? "Disalin" : "Salin"}
    </button>
  );
}
