"use client";

import * as React from "react";
import Image from "next/image";
import { Check, Coins, Download, Landmark, QrCode, ReceiptText, Wallet } from "lucide-react";
import { Panel, PanelHeader } from "@/components/hub/panel";
import { CopyButton } from "@/components/donasi/copy-button";
import { cn } from "@/lib/utils";
import { formatRupiah } from "@/lib/format";
import { DONASI_PEMBAYARAN, DONASI_TIERS } from "@/lib/bangunjiwa-data";

const { penerima, bank, qris } = DONASI_PEMBAYARAN;

export function DonationInteractive() {
  const defaultTier = DONASI_TIERS.find((t) => t.highlight) ?? DONASI_TIERS[0];
  const [selectedTierId, setSelectedTierId] = React.useState<string | null>(defaultTier.id);
  const [customAmount, setCustomAmount] = React.useState("");

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

  return (
    <div id="donasi-form" className="grid items-start gap-4 xl:grid-cols-12">
        <Panel className="xl:col-span-8 xl:row-start-1">
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

        <Panel className="xl:sticky xl:top-6 xl:col-span-4 xl:col-start-9 xl:row-span-2 xl:row-start-1">
          <PanelHeader title="Ringkasan" icon={ReceiptText} />
          <div className="mt-5 flex flex-col text-[13px]">
            <div className="flex justify-between border-b border-ash/60 py-2.5 text-iron-soft">
              <span>Tingkatan</span>
              <span className="tabular-nums text-iron-deep">{summaryLabel}</span>
            </div>
            <div className="flex justify-between border-b border-ash/60 py-2.5 text-iron-soft">
              <span>Penerima</span>
              <span className="text-right text-iron-deep">{penerima}</span>
            </div>
          </div>
          <p className="mt-5 text-xs text-iron-soft">Nominal yang ditransfer</p>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-heading text-[2.25rem] font-light leading-tight tracking-tight text-iron-deep tabular-nums">
              {formatRupiah(amount)}
            </p>
            {amount > 0 && <CopyButton value={String(amount)} label="nominal" />}
          </div>
          <a
            href="#cara-berdonasi"
            className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-iron text-[14px] font-medium text-frost shadow-panel transition-colors hover:bg-iron-deep"
          >
            Lihat cara berdonasi
          </a>
          <p className="mt-4 text-xs leading-relaxed text-iron-soft">
            Situs ini belum mencatat donasi secara otomatis dan belum mengirim bukti donasi digital. Simpan bukti
            transfer Anda.
          </p>
        </Panel>

        <Panel id="cara-berdonasi" className="xl:col-span-8 xl:row-start-2">
          <PanelHeader title="Cara Berdonasi" icon={Wallet} />
          <p className="mt-1.5 text-[13px] text-iron-soft">
            Pilih salah satu. Donasi masuk langsung ke rekening {penerima}.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-white bg-frost p-5">
              <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.08em] text-iron-soft">
                <Landmark className="size-3.5" /> Transfer bank
              </p>
              <p className="mt-4 text-[13px] text-iron-soft">{bank.nama}</p>
              <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
                <p className="font-heading text-[1.75rem] font-light tracking-[0.04em] text-iron-deep tabular-nums">
                  {bank.noRekening}
                </p>
                <CopyButton value={bank.noRekening} label="nomor rekening" />
              </div>
              <p className="mt-1 text-[13px] text-iron">a.n. {penerima}</p>
              <ol className="mt-5 flex flex-col gap-2 border-t border-ash/60 pt-4 text-[12.5px] leading-relaxed text-iron-soft">
                <li>1. Transfer sesuai nominal di ringkasan.</li>
                <li>2. Pastikan nama penerima: {penerima}.</li>
                <li>3. Simpan bukti transfer sebagai arsip Anda.</li>
              </ol>
            </div>

            <div className="flex flex-col rounded-2xl border border-white bg-frost p-5">
              <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.08em] text-iron-soft">
                <QrCode className="size-3.5" /> QRIS
              </p>
              <a
                href={qris.src}
                target="_blank"
                rel="noopener"
                className="mx-auto mt-4 block w-full max-w-[220px] overflow-hidden rounded-xl border border-ash/60 bg-white"
                aria-label="Buka QRIS ukuran penuh"
              >
                <Image
                  src={qris.src}
                  alt={`QRIS ${penerima}, NMID ${qris.nmid}`}
                  width={726}
                  height={1024}
                  className="h-auto w-full"
                />
              </a>
              <p className="mt-3 text-center text-[11px] text-iron-soft">NMID {qris.nmid}</p>
              <a
                href={qris.src}
                download="QRIS-Yayasan-PPM-Bangunjiwa.jpg"
                className="mt-3 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-iron px-4 text-[13px] font-medium text-frost shadow-panel transition-colors hover:bg-iron-deep"
              >
                <Download className="size-4" /> Unduh QRIS
              </a>
              <p className="mt-3 text-[12.5px] leading-relaxed text-iron-soft">
                Scan dengan aplikasi bank atau e-wallet, lalu <span className="font-medium text-iron">ketik nominalnya sendiri</span>.
                Berdonasi dari HP? Unduh QRIS, lalu pilih &ldquo;scan dari galeri&rdquo; di aplikasi Anda.
              </p>
            </div>
          </div>
        </Panel>

    </div>
  );
}
