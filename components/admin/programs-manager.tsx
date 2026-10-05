"use client";

import * as React from "react";
import Link from "next/link";
import { ExternalLink, LayoutList, Pencil, Plus, Trash2 } from "lucide-react";
import { Panel, PanelHeader } from "@/components/hub/panel";
import { EmptyState } from "@/components/hub/empty-state";
import { GhostButton, PrimaryButton } from "@/components/admin/fields";
import { ProgramForm } from "@/components/admin/program-form";
import { ProgramChips } from "@/components/programs/program-card";
import { invalidatePrograms } from "@/components/programs/use-programs";
import { Skeleton } from "@/components/ui/skeleton";
import { campaignHref, deleteProgram, listAllPrograms, type Program } from "@/lib/programs";
import { formatDate, formatRupiahShort } from "@/lib/format";

export function ProgramsManager() {
  const [programs, setPrograms] = React.useState<Program[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [editing, setEditing] = React.useState<Program | null | "new">(null);

  const load = React.useCallback(() => {
    listAllPrograms().then(setPrograms, (e) => setError(e instanceof Error ? e.message : String(e)));
  }, []);

  React.useEffect(load, [load]);

  async function remove(p: Program) {
    if (!window.confirm(`Hapus program "${p.title}"? Tindakan ini tidak bisa dibatalkan.`)) return;
    try {
      await deleteProgram(p.slug);
      invalidatePrograms();
      load();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  if (editing) {
    return (
      <ProgramForm
        program={editing === "new" ? null : editing}
        onDone={(saved) => {
          setEditing(null);
          if (saved) {
            invalidatePrograms();
            load();
          }
        }}
      />
    );
  }

  return (
    <Panel className="px-0 sm:px-0">
      <PanelHeader
        title="Program"
        icon={LayoutList}
        className="flex-wrap px-5 sm:px-6"
        action={
          <PrimaryButton onClick={() => setEditing("new")}>
            <Plus className="size-4" /> Program baru
          </PrimaryButton>
        }
      />
      {error && <p role="alert" className="mx-5 mt-4 text-[13px] text-destructive sm:mx-6">Terjadi kesalahan: {error}</p>}
      <div className="mt-5 px-3 sm:px-4">
        {programs === null && !error ? (
          <Skeleton className="h-32 w-full rounded-lg bg-linen" />
        ) : programs && programs.length === 0 ? (
          <EmptyState icon={LayoutList} title="Belum ada program">
            Klik &ldquo;Program baru&rdquo; untuk menambahkan program pertama.
          </EmptyState>
        ) : programs ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-separate border-spacing-0 text-[13px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wide text-iron-soft">
                  <th className="rounded-l-xl bg-linen px-4 py-2.5 font-medium">Program</th>
                  <th className="bg-linen px-4 py-2.5 font-medium">Jenis & status</th>
                  <th className="bg-linen px-4 py-2.5 font-medium">Terkumpul / target</th>
                  <th className="bg-linen px-4 py-2.5 font-medium">Angka diperbarui</th>
                  <th className="rounded-r-xl bg-linen px-4 py-2.5 text-right font-medium">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p, i) => {
                  const cell = i === programs.length - 1 ? "px-4 py-3.5" : "border-b border-ash/60 px-4 py-3.5";
                  return (
                    <tr key={p.slug}>
                      <td className={cell}>
                        <p className="font-medium text-iron-deep">{p.title}</p>
                        <p className="text-xs text-iron-soft">{p.slug}</p>
                      </td>
                      <td className={cell}>
                        <ProgramChips program={p} />
                      </td>
                      <td className={`${cell} text-iron`}>
                        {p.collected != null ? formatRupiahShort(p.collected) : "—"} / {p.target != null ? formatRupiahShort(p.target) : "—"}
                      </td>
                      <td className={`${cell} text-iron-soft`}>{p.figuresUpdatedAt ? formatDate(p.figuresUpdatedAt) : "—"}</td>
                      <td className={cell}>
                        <div className="flex justify-end gap-1.5">
                          {p.status !== "draft" && (
                            <Link
                              href={campaignHref(p.slug)}
                              target="_blank"
                              aria-label={`Lihat ${p.title}`}
                              className="inline-flex size-9 items-center justify-center rounded-xl border border-ash bg-frost text-iron shadow-panel hover:bg-linen"
                            >
                              <ExternalLink className="size-4" />
                            </Link>
                          )}
                          <GhostButton aria-label={`Edit ${p.title}`} onClick={() => setEditing(p)}>
                            <Pencil className="size-4" />
                          </GhostButton>
                          <GhostButton aria-label={`Hapus ${p.title}`} onClick={() => remove(p)}>
                            <Trash2 className="size-4" />
                          </GhostButton>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </Panel>
  );
}
