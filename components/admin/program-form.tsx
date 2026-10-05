"use client";

import * as React from "react";
import { FilePenLine, Plus, Trash2, TriangleAlert } from "lucide-react";
import { Panel, PanelHeader } from "@/components/hub/panel";
import { Field, FIELD, GhostButton, PrimaryButton } from "@/components/admin/fields";
import {
  campaignHref,
  getProgram,
  isValidSlug,
  PROGRAM_STATUSES,
  PROGRAM_TYPES,
  saveProgram,
  slugify,
  type Program,
  type ProgramInput,
  type ProgramStatus,
  type ProgramType,
} from "@/lib/programs";
import { formatDate } from "@/lib/format";

type Row = { label: string; percent: string };
type Testi = { quote: string; who: string };

function digits(v: string) {
  return v.replace(/[^0-9]/g, "");
}

function toNumber(v: string): number | null {
  return v === "" ? null : Number(v);
}

export function ProgramForm({ program, onDone }: { program: Program | null; onDone: (saved: boolean) => void }) {
  const isNew = program === null;
  const [title, setTitle] = React.useState(program?.title ?? "");
  const [slug, setSlug] = React.useState(program?.slug ?? "");
  const [slugTouched, setSlugTouched] = React.useState(!isNew);
  const [type, setType] = React.useState<ProgramType>(program?.type ?? "donasi");
  const [status, setStatus] = React.useState<ProgramStatus>(program?.status ?? "draft");
  const [summary, setSummary] = React.useState(program?.summary ?? "");
  const [description, setDescription] = React.useState(program?.description ?? "");
  const [location, setLocation] = React.useState(program?.location ?? "");
  const [target, setTarget] = React.useState(program?.target?.toString() ?? "");
  const [collected, setCollected] = React.useState(program?.collected?.toString() ?? "");
  const [donorCount, setDonorCount] = React.useState(program?.donorCount?.toString() ?? "");
  const [allocation, setAllocation] = React.useState<Row[]>(
    program?.allocation.map((a) => ({ label: a.label, percent: String(a.percent) })) ?? []
  );
  const [testimonials, setTestimonials] = React.useState<Testi[]>(program?.testimonials ?? []);
  const [errors, setErrors] = React.useState<string[]>([]);
  const [saving, setSaving] = React.useState(false);

  const effectiveSlug = slugTouched ? slug : slugify(title);
  const allocationSum = allocation.reduce((s, r) => s + (Number(r.percent) || 0), 0);

  function validate(): string[] {
    const e: string[] = [];
    if (!title.trim()) e.push("Judul wajib diisi.");
    if (!isValidSlug(effectiveSlug)) e.push("Alamat halaman hanya boleh huruf kecil, angka, dan tanda hubung (-).");
    if (allocation.some((r) => !r.label.trim() || r.percent === "")) e.push("Setiap baris alokasi harus punya nama dan persentase.");
    if (allocationSum > 100) e.push(`Total alokasi ${allocationSum}%, tidak boleh lebih dari 100%.`);
    if (testimonials.some((t) => !t.quote.trim())) e.push("Kutipan testimoni tidak boleh kosong.");
    return e;
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (e.length) return;
    setSaving(true);
    try {
      if (isNew && (await getProgram(effectiveSlug))) {
        setErrors(["Alamat halaman ini sudah dipakai program lain. Ganti alamatnya."]);
        return;
      }
      const input: ProgramInput = {
        title: title.trim(),
        type,
        status,
        summary: summary.trim(),
        description: description.trim(),
        location: location.trim(),
        target: toNumber(target),
        collected: toNumber(collected),
        donorCount: toNumber(donorCount),
        allocation: allocation.map((r) => ({ label: r.label.trim(), percent: Number(r.percent) })),
        testimonials: testimonials.map((t) => ({ quote: t.quote.trim(), who: t.who.trim() })),
      };
      await saveProgram(effectiveSlug, input, program);
      onDone(true);
    } catch (err) {
      setErrors([`Gagal menyimpan: ${err instanceof Error ? err.message : String(err)}`]);
    } finally {
      setSaving(false);
    }
  }

  return (
    <Panel>
      <PanelHeader title={program ? `Edit: ${program.title}` : "Program Baru"} icon={FilePenLine} />
      <form onSubmit={submit} className="mt-6 flex flex-col gap-8">
        <fieldset className="grid gap-4 md:grid-cols-2">
          <legend className="mb-3 text-[13px] font-semibold text-iron-deep">Informasi program</legend>
          <Field label="Judul program *" htmlFor="title" className="md:col-span-2">
            <input id="title" className={FIELD} maxLength={160} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Field>
          <Field
            label="Alamat halaman"
            htmlFor="slug"
            className="md:col-span-2"
            hint={isNew ? <>Tautan program: {campaignHref(effectiveSlug || "…")}</> : "Alamat tidak bisa diubah setelah program dibuat."}
          >
            <input
              id="slug"
              className={FIELD}
              value={effectiveSlug}
              disabled={!isNew}
              maxLength={80}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(e.target.value.toLowerCase());
              }}
            />
          </Field>
          <Field label="Jenis" htmlFor="type">
            <select id="type" className={FIELD} value={type} onChange={(e) => setType(e.target.value as ProgramType)}>
              {PROGRAM_TYPES.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Status" htmlFor="status" hint="Draft tidak tampil di situs. Hanya Berjalan dan Selesai yang terlihat publik.">
            <select id="status" className={FIELD} value={status} onChange={(e) => setStatus(e.target.value as ProgramStatus)}>
              {PROGRAM_STATUSES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </Field>
          {type === "wakaf" && (
            <p className="flex gap-2 rounded-xl bg-pine-soft/70 p-3 text-[12.5px] leading-relaxed text-iron md:col-span-2">
              <TriangleAlert className="mt-0.5 size-4 shrink-0 text-pine-deep" />
              Wakaf uang wajib dikelola nazhir yang terdaftar di Badan Wakaf Indonesia. Pastikan program ini sudah
              memenuhi ketentuan sebelum dipublikasikan.
            </p>
          )}
          <Field label="Ringkasan singkat" htmlFor="summary" className="md:col-span-2" hint="Tampil di kartu program. Maksimal 400 karakter.">
            <textarea id="summary" rows={2} maxLength={400} className={FIELD} value={summary} onChange={(e) => setSummary(e.target.value)} />
          </Field>
          <Field label="Deskripsi lengkap" htmlFor="description" className="md:col-span-2">
            <textarea id="description" rows={8} maxLength={10000} className={FIELD} value={description} onChange={(e) => setDescription(e.target.value)} />
          </Field>
          <Field label="Lokasi" htmlFor="location" className="md:col-span-2">
            <input id="location" className={FIELD} maxLength={160} placeholder="contoh: DAS Oyo, Gunungkidul" value={location} onChange={(e) => setLocation(e.target.value)} />
          </Field>
        </fieldset>

        <fieldset className="grid gap-4 md:grid-cols-3">
          <legend className="mb-1 text-[13px] font-semibold text-iron-deep">Angka program</legend>
          <p className="mb-2 text-[12px] leading-relaxed text-iron-soft md:col-span-3">
            Isi sesuai catatan dan mutasi rekening yayasan. Kosongkan jika belum ada, maka angka itu tidak
            ditampilkan.
            {program?.figuresUpdatedAt && <> Terakhir diperbarui {formatDate(program.figuresUpdatedAt)}.</>}
          </p>
          <Field label="Target dana (Rp)" htmlFor="target">
            <input id="target" inputMode="numeric" className={FIELD} value={target} onChange={(e) => setTarget(digits(e.target.value))} />
          </Field>
          <Field label="Dana terkumpul (Rp)" htmlFor="collected">
            <input id="collected" inputMode="numeric" className={FIELD} value={collected} onChange={(e) => setCollected(digits(e.target.value))} />
          </Field>
          <Field label="Jumlah donatur" htmlFor="donorCount">
            <input id="donorCount" inputMode="numeric" className={FIELD} value={donorCount} onChange={(e) => setDonorCount(digits(e.target.value))} />
          </Field>
        </fieldset>

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-1 text-[13px] font-semibold text-iron-deep">Rencana penyaluran dana (opsional)</legend>
          {allocation.map((row, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                aria-label={`Nama alokasi ${i + 1}`}
                className={FIELD}
                placeholder="contoh: Lapangan & enumerator"
                maxLength={60}
                value={row.label}
                onChange={(e) => setAllocation(allocation.map((r, j) => (j === i ? { ...r, label: e.target.value } : r)))}
              />
              <input
                aria-label={`Persentase alokasi ${i + 1}`}
                inputMode="numeric"
                className={`${FIELD} w-24`}
                placeholder="%"
                value={row.percent}
                onChange={(e) =>
                  setAllocation(allocation.map((r, j) => (j === i ? { ...r, percent: digits(e.target.value).slice(0, 3) } : r)))
                }
              />
              <GhostButton aria-label={`Hapus alokasi ${i + 1}`} onClick={() => setAllocation(allocation.filter((_, j) => j !== i))}>
                <Trash2 className="size-4" />
              </GhostButton>
            </div>
          ))}
          <div className="flex items-center justify-between gap-3">
            <GhostButton onClick={() => setAllocation([...allocation, { label: "", percent: "" }])} disabled={allocation.length >= 10}>
              <Plus className="size-4" /> Tambah alokasi
            </GhostButton>
            {allocation.length > 0 && <span className="text-xs text-iron-soft">Total: {allocationSum}%</span>}
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-1 text-[13px] font-semibold text-iron-deep">Testimoni (opsional)</legend>
          <p className="text-[12px] text-iron-soft">Pastikan sudah ada izin dari orang yang dikutip.</p>
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border border-ash bg-linen/50 p-3">
              <textarea
                aria-label={`Kutipan testimoni ${i + 1}`}
                rows={2}
                maxLength={500}
                className={FIELD}
                placeholder="Kutipan"
                value={t.quote}
                onChange={(e) => setTestimonials(testimonials.map((x, j) => (j === i ? { ...x, quote: e.target.value } : x)))}
              />
              <div className="flex items-center gap-2">
                <input
                  aria-label={`Nama atau peran ${i + 1}`}
                  className={FIELD}
                  placeholder="Nama / peran, contoh: Perwakilan warga, DAS Oyo"
                  maxLength={120}
                  value={t.who}
                  onChange={(e) => setTestimonials(testimonials.map((x, j) => (j === i ? { ...x, who: e.target.value } : x)))}
                />
                <GhostButton aria-label={`Hapus testimoni ${i + 1}`} onClick={() => setTestimonials(testimonials.filter((_, j) => j !== i))}>
                  <Trash2 className="size-4" />
                </GhostButton>
              </div>
            </div>
          ))}
          <GhostButton className="self-start" onClick={() => setTestimonials([...testimonials, { quote: "", who: "" }])} disabled={testimonials.length >= 10}>
            <Plus className="size-4" /> Tambah testimoni
          </GhostButton>
        </fieldset>

        {errors.length > 0 && (
          <ul role="alert" className="flex flex-col gap-1 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-[13px] text-destructive">
            {errors.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 border-t border-ash/60 pt-5">
          <PrimaryButton type="submit" disabled={saving}>
            {saving ? "Menyimpan…" : "Simpan program"}
          </PrimaryButton>
          <GhostButton className="h-10" onClick={() => onDone(false)} disabled={saving}>
            Batal
          </GhostButton>
        </div>
      </form>
    </Panel>
  );
}
