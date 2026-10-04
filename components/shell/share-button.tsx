"use client";

import * as React from "react";
import { Check, Share2 } from "lucide-react";

export function ShareButton() {
  const [copied, setCopied] = React.useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url });
      } catch {
        // user dismissed the share sheet
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={share}
      aria-label={copied ? "Tautan disalin" : "Bagikan halaman"}
      title={copied ? "Tautan disalin" : "Bagikan halaman"}
      className="flex size-10 items-center justify-center rounded-xl border border-white/80 bg-frost/80 text-iron shadow-panel transition-colors hover:bg-frost"
    >
      {copied ? <Check className="size-4 text-pine-deep" /> : <Share2 className="size-4" />}
    </button>
  );
}
