"use client";

import * as React from "react";
import Image from "next/image";
import { Coins, Download, Landmark, QrCode, ReceiptText, Wallet } from "lucide-react";
import { Panel, PanelHeader } from "@/components/hub/panel";
import { CopyButton } from "@/components/donasi/copy-button";
import { cn } from "@/lib/utils";
import { formatRupiah, formatRupiahShort } from "@/lib/format";
import { DONASI_NOMINAL, DONASI_PEMBAYARAN } from "@/lib/bangunjiwa-data";

const { penerima, bank, qris } = DONASI_PEMBAYARAN;

export function DonationInteractive({ programTitle }: { programTitle?: string }) {
  const [preset, setPreset] = React.useState<number | null>(DONASI_NOMINAL[2]);
  const [customAmount, setCustomAmount] = React.useState("");

  const amount = preset ?? Number(customAmount || 0);
  const transferNote = programTitle ? `Donasi ${programTitle}`.slice(0, 60) : null;

  function handleCustomAmountChange(value: string) {
    const digits = value.replace(/[^0-9]/g, "");
    setCustomAmount(digits);
    if (digits) setPreset(null);
  }

  return (
    <div id="donasi-form" className="grid items-start gap-4 xl:grid-cols-12">
      <Panel className="xl:col-span-8 xl:row-start-1">
        <PanelHeader title="Pilih Nominal" icon={Coins} />
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {DONASI_NOMINAL.map((value) => {
            const selected = preset === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setPreset(value);
                  setCustomAmount("");
                }}
                className={cn(
                  "rounded-2xl border px-4 py-4 text-left font-heading text-xl font-light tracking-tight transition-colors",
                  selected ? "border-iron bg-iron text-frost shadow-panel" : "border-white bg-frost text-iron-deep hover:border-ash-deep"
                )}
              >
                {formatRupiahShort(value)}
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
          <div className="flex justify-between gap-4 border-b border-ash/60 py-2.5 text-iron-soft">
            <span>Untuk</span>
            <span className="text-right text-iron-deep">{programTitle ?? "Program yayasan (umum)"}</span>
          </div>
          <div className="flex justify-between gap-4 border-b border-ash/60 py-2.5 text-iron-soft">
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
            {transferNote && (
              <div className="mt-4 rounded-xl bg-linen/80 p-3">
                <p className="text-[11px] text-iron-soft">Tulis di berita transfer:</p>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="text-[13px] font-medium text-iron-deep">{transferNote}</p>
                  <CopyButton value={transferNote} label="berita transfer" />
                </div>
              </div>
            )}
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
              <Image src={qris.src} alt={`QRIS ${penerima}, NMID ${qris.nmid}`} width={726} height={1024} className="h-auto w-full" />
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
