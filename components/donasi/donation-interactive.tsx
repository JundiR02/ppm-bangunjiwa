"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PrototypeNotice } from "@/components/content/sample-data";
import { cn } from "@/lib/utils";
import { DONASI_TIERS } from "@/lib/bangunjiwa-data";

function formatRupiah(n: number) {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

export function DonationInteractive() {
  const defaultTier = DONASI_TIERS.find((t) => t.highlight) ?? DONASI_TIERS[0];
  const [selectedTierId, setSelectedTierId] = React.useState<string | null>(defaultTier.id);
  const [customAmount, setCustomAmount] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [anonymous, setAnonymous] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const selectedTier = DONASI_TIERS.find((t) => t.id === selectedTierId);
  const amount = selectedTier ? selectedTier.amount : Number(customAmount || 0);
  const summaryLabel = selectedTier ? selectedTier.label : customAmount ? "Kustom" : "—";

  function pickTier(id: string) {
    setSelectedTierId(id);
    setCustomAmount("");
  }

  function handleCustomAmountChange(value: string) {
    const digits = value.replace(/[^0-9]/g, "");
    setCustomAmount(digits);
    if (digits) setSelectedTierId(null);
  }

  function handleSubmit() {
    const nameOk = name.trim().length > 0;
    const emailOk = /^\S+@\S+\.\S+$/.test(email.trim());
    const amountOk = amount > 0;
    if (!nameOk || !emailOk || !amountOk) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setSubmitted(true);
  }

  return (
    <div id="donasi-form">
      <p className="text-sm font-medium text-muted-foreground">Pilih tingkatan donasi</p>
      <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
        {DONASI_TIERS.map((tier) => {
          const selected = selectedTierId === tier.id;
          return (
            <button
              key={tier.id}
              type="button"
              onClick={() => pickTier(tier.id)}
              className={cn(
                "relative rounded-2xl border p-5 text-left transition-colors",
                selected
                  ? "border-forest-600 bg-sage-50 dark:bg-forest-900/40"
                  : "border-border bg-card hover:border-forest-300/60"
              )}
            >
              {tier.highlight && (
                <span className="absolute -top-2.5 left-4 rounded-full bg-forest-700 px-3 py-0.5 text-[0.65rem] font-semibold text-white">
                  Paling dipilih
                </span>
              )}
              <p className="font-heading text-lg font-bold text-foreground">{tier.label}</p>
              <p className="mt-1.5 min-h-10 text-[0.8rem] leading-relaxed text-muted-foreground">
                {tier.description}
              </p>
              <span
                className={cn(
                  "mt-3 flex items-center gap-1.5 text-xs font-semibold",
                  selected ? "text-forest-700 dark:text-sage-300" : "text-muted-foreground"
                )}
              >
                {selected && <Check className="size-3.5" />}
                {selected ? "Dipilih" : "Pilih"}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4">
        <label htmlFor="customAmount" className="text-sm text-muted-foreground">
          Atau masukkan jumlah lain
        </label>
        <div className="flex flex-1 items-center gap-2">
          <span className="text-sm text-muted-foreground">Rp</span>
          <input
            id="customAmount"
            type="text"
            inputMode="numeric"
            placeholder="0"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            className="w-full min-w-0 bg-transparent font-heading text-lg font-semibold text-foreground outline-none placeholder:text-muted-foreground/50"
          />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 items-start gap-5 lg:grid-cols-[1.3fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="mb-4 text-sm font-medium text-muted-foreground">Data donatur</p>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="donorName" className="text-xs text-muted-foreground">
                Nama
              </label>
              <input
                id="donorName"
                type="text"
                placeholder="Nama lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-forest-500"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="donorEmail" className="text-xs text-muted-foreground">
                Email
              </label>
              <input
                id="donorEmail"
                type="text"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-forest-500"
              />
            </div>
          </div>
          <div className="mt-3.5 flex flex-col gap-1.5">
            <label htmlFor="donorMsg" className="text-xs text-muted-foreground">
              Pesan dukungan (opsional)
            </label>
            <textarea
              id="donorMsg"
              rows={3}
              placeholder="Tulis dukungan Anda untuk komunitas DAS Oyo & DAS Ulin"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-forest-500"
            />
          </div>
          {showError && (
            <p className="mt-2 text-xs text-destructive">
              Lengkapi nama, email, dan jumlah donasi terlebih dahulu.
            </p>
          )}
          <label className="mt-3 flex items-center gap-2 text-[0.8rem] text-muted-foreground">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
              className="size-3.5 rounded border-border"
            />
            Sembunyikan nama saya dari daftar donatur publik
          </label>
          <p className="mt-3 text-xs text-muted-foreground">
            Prototype: pembayaran online belum aktif. Data yang Anda isi tidak dikirim atau disimpan.
          </p>
          <Button className="mt-3 w-full" onClick={handleSubmit}>
            Lanjutkan donasi
          </Button>
          {submitted && (
            <div role="status" className="mt-4">
              <PrototypeNotice title={`Terima kasih atas niat baik Anda, ${name.trim().split(" ")[0]}.`}>
                Pembayaran online belum aktif, jadi donasi ini belum diproses dan data Anda tidak
                disimpan. Informasi rekening dan kontak resmi PPM Riset Ekologi Bangunjiwa akan
                dicantumkan di halaman ini setelah tersedia.
              </PrototypeNotice>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Ringkasan</p>
          <div className="flex justify-between border-b border-border py-2 text-sm text-muted-foreground">
            <span>Tingkatan</span>
            <span className="tabular-nums text-foreground">{summaryLabel}</span>
          </div>
          <div className="flex justify-between border-b border-border py-2 text-sm text-muted-foreground">
            <span>Biaya admin</span>
            <span className="tabular-nums text-foreground">Rp 0</span>
          </div>
          <div className="flex justify-between pt-3.5 text-base font-semibold text-foreground">
            <span>Total</span>
            <span className="tabular-nums">{formatRupiah(amount)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
