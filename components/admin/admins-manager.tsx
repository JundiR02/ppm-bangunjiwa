"use client";

import * as React from "react";
import type { User } from "firebase/auth";
import { Check, ShieldCheck, Trash2, UserPlus, X } from "lucide-react";
import { Panel, PanelHeader } from "@/components/hub/panel";
import { GhostButton } from "@/components/admin/fields";
import {
  approveRequest,
  listAdminRequests,
  listAdmins,
  OWNER_EMAIL,
  rejectRequest,
  removeAdmin,
  type AdminEntry,
  type AdminRequest,
} from "@/lib/admin";

export function AdminsManager({ user }: { user: User }) {
  const [admins, setAdmins] = React.useState<AdminEntry[]>([]);
  const [requests, setRequests] = React.useState<AdminRequest[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  const load = React.useCallback(() => {
    Promise.all([listAdmins(), listAdminRequests()]).then(
      ([a, r]) => {
        setAdmins(a);
        setRequests(r);
      },
      (e) => setError(e instanceof Error ? e.message : String(e))
    );
  }, []);

  React.useEffect(load, [load]);

  async function run(action: () => Promise<void>) {
    try {
      setError(null);
      await action();
      load();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <Panel>
        <PanelHeader title="Permintaan Akses" icon={UserPlus} />
        <p className="mt-1.5 text-[13px] text-iron-soft">
          Orang lain dapat meminta akses dengan masuk di halaman ini memakai akun Google mereka.
        </p>
        {requests.length === 0 ? (
          <p className="mt-5 rounded-lg bg-linen/70 p-4 text-[13px] text-iron-soft">Tidak ada permintaan baru.</p>
        ) : (
          <ul className="mt-5 flex flex-col gap-2">
            {requests.map((r) => (
              <li key={r.uid} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-ash bg-frost p-3">
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium text-iron-deep">{r.name || r.email}</p>
                  <p className="truncate text-xs text-iron-soft">{r.email}</p>
                </div>
                <div className="flex gap-1.5">
                  <GhostButton onClick={() => run(() => approveRequest(r, user))}>
                    <Check className="size-4" /> Setujui
                  </GhostButton>
                  <GhostButton onClick={() => run(() => rejectRequest(r.uid))}>
                    <X className="size-4" /> Tolak
                  </GhostButton>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Panel>

      <Panel>
        <PanelHeader title="Daftar Admin" icon={ShieldCheck} />
        <ul className="mt-5 flex flex-col gap-2">
          <li className="flex items-center justify-between gap-3 rounded-lg bg-hijau p-3 text-frost">
            <span className="truncate text-[13px] font-medium">{OWNER_EMAIL}</span>
            <span className="shrink-0 rounded-full bg-frost/15 px-2 py-0.5 text-[11px]">Admin utama</span>
          </li>
          {admins.map((a) => (
            <li key={a.uid} className="flex items-center justify-between gap-3 rounded-lg border border-ash bg-frost p-3">
              <div className="min-w-0">
                <p className="truncate text-[13px] font-medium text-iron-deep">{a.email}</p>
                <p className="truncate text-xs text-iron-soft">Disetujui oleh {a.approvedBy}</p>
              </div>
              <GhostButton
                aria-label={`Cabut akses ${a.email}`}
                onClick={() => window.confirm(`Cabut akses admin ${a.email}?`) && run(() => removeAdmin(a.uid))}
              >
                <Trash2 className="size-4" />
              </GhostButton>
            </li>
          ))}
        </ul>
      </Panel>

      {error && <p role="alert" className="text-[13px] text-destructive xl:col-span-2">Terjadi kesalahan: {error}</p>}
    </div>
  );
}
