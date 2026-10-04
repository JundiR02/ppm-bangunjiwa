"use client";

import * as React from "react";
import { Check, Coins, ReceiptText, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel, PanelHeader } from "@/components/hub/panel";
import { PrototypeNotice } from "@/components/content/sample-data";
import { cn } from "@/lib/utils";
import { formatRupiah } from "@/lib/format";
import { DONASI_TIERS } from "@/lib/bangunjiwa-data";

const FIELD =
  "w-full rounded-xl border border-border bg-frost px-3.5 py-2.5 text-sm text-iron-deep outline-none transition-shadow placeholder:text-iron-soft/60 focus:border-pine focus:ring-3 focus:ring-pine/20";

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
    <div id="donasi-form" className="grid items-start gap-4 xl:grid-cols-12">
      <div className="flex flex-col gap-4 xl:col-span-8">
        <Panel>
          <PanelHeader title="Pilih Nominal" icon={Coins} />
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {DONASI_TIERS.map((tier) => {
              const selected = selectedTierId === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => pickTier(tier.id)}
                  className={cn(
                    "relative flex flex-col rounded-2xl border p-4 pt-5 text-left transition-colors",
                    selected ? "border-iron bg-iron text-frost shadow-panel" : "border-white bg-frost hover:border-ash-deep"
                  )}
                >
                  {tier.highlight && (
                    <span className="absolute -top-2.5 left-4 rounded-full border border-pine/30 bg-pine-soft px-2.5 py-0.5 text-[10px] font-semibold text-pine-deep">
                      Paling dipilih
                    </span>
                  )}
                  <span className="font-heading text-2xl font-light tracking-tight">{tier.label}</span>
                  <span className={cn("mt-2 min-h-10 text-[12.5px] leading-relaxed", selected ? "text-frost/75" : "text-iron-soft")}>
                    {tier.description}
                  </span>
                  <span className={cn("mt-4 flex items-center gap-1.5 text-xs font-semibold", selected ? "text-frost" : "text-iron-soft")}>
                    {selected && <Check className="size-3.5" />}
                    {selected ? "Dipilih" : "Pilih"}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3 rounded-2xl border border-white bg-linen/70 px-4 py-3.5">
            <label htmlFor="customAmount" className="text-[13px] text-iron-soft">
              Atau masukkan jumlah lain
            </label>
            <div className="flex min-w-[160px] flex-1 items-center gap-2">
              <span className="text-sm text-iron-soft">Rp</span>
              <input
                id="customAmount"
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className="w-full min-w-0 bg-transparent font-heading text-xl font-light text-iron-deep outline-none placeholder:text-iron-soft/50"
              />
            </div>
          </div>
        </Panel>

        <Panel>
          <PanelHeader title="Data Donatur" icon={UserRound} />
          <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="donorName" className="text-xs font-medium text-iron-soft">
                Nama
              </label>
              <input id="donorName" type="text" placeholder="Nama lengkap" value={name} onChange={(e) => setName(e.target.value)} className={FIELD} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="donorEmail" className="text-xs font-medium text-iron-soft">
                Email
              </label>
              <input id="donorEmail" type="email" placeholder="nama@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className={FIELD} />
            </div>
          </div>
          <div className="mt-3.5 flex flex-col gap-1.5">
            <label htmlFor="donorMsg" className="text-xs font-medium text-iron-soft">
              Pesan dukungan (opsional)
            </label>
            <textarea
              id="donorMsg"
              rows={3}
              placeholder="Tulis dukungan Anda untuk komunitas DAS Oyo & DAS Ulin"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={FIELD}
            />
          </div>
          <label className="mt-4 flex items-center gap-2 text-[13px] text-iron-soft">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
              className="size-4 rounded border-border accent-iron"
            />
            Sembunyikan nama saya dari daftar donatur publik
          </label>
        </Panel>
      </div>

      <Panel className="xl:sticky xl:top-6 xl:col-span-4">
        <PanelHeader title="Ringkasan" icon={ReceiptText} />
        <div className="mt-5 flex flex-col text-[13px]">
          <div className="flex justify-between border-b border-ash/60 py-2.5 text-iron-soft">
            <span>Tingkatan</span>
            <span className="tabular-nums text-iron-deep">{summaryLabel}</span>
          </div>
          <div className="flex justify-between border-b border-ash/60 py-2.5 text-iron-soft">
            <span>Biaya admin</span>
            <span className="tabular-nums text-iron-deep">Rp 0</span>
          </div>
        </div>
        <p className="mt-5 text-xs text-iron-soft">Total</p>
        <p className="font-heading text-[2.25rem] font-light leading-tight tracking-tight text-iron-deep tabular-nums">
          {formatRupiah(amount)}
        </p>
        {showError && (
          <p role="alert" className="mt-3 text-xs text-destructive">
            Lengkapi nama, email, dan jumlah donasi terlebih dahulu.
          </p>
        )}
        <p className="mt-4 text-xs leading-relaxed text-iron-soft">
          Prototype: pembayaran online belum aktif. Data yang Anda isi tidak dikirim atau disimpan.
        </p>
        <Button className="mt-3 h-11 w-full rounded-xl text-[14px]" onClick={handleSubmit}>
          Lanjutkan donasi
        </Button>
        {submitted && (
          <div role="status" className="mt-4">
            <PrototypeNotice title={`Terima kasih atas niat baik Anda, ${name.trim().split(" ")[0]}.`}>
              Pembayaran online belum aktif, jadi donasi ini belum diproses dan data Anda tidak disimpan.
              Informasi rekening dan kontak resmi akan dicantumkan di halaman ini setelah tersedia.
            </PrototypeNotice>
          </div>
        )}
      </Panel>
    </div>
  );
}
