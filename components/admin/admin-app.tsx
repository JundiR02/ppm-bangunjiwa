"use client";

import * as React from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { Clock, LogIn, LogOut, ShieldCheck } from "lucide-react";
import { Panel, PanelHeader, Eyebrow } from "@/components/hub/panel";
import { GhostButton, PrimaryButton } from "@/components/admin/fields";
import { ProgramsManager } from "@/components/admin/programs-manager";
import { AdminsManager } from "@/components/admin/admins-manager";
import { Skeleton } from "@/components/ui/skeleton";
import { auth } from "@/lib/firebase";
import { hasPendingRequest, isAdmin, isOwner, requestAdminAccess } from "@/lib/admin";
import { cn } from "@/lib/utils";

type Phase =
  | { s: "loading" }
  | { s: "signed-out" }
  | { s: "not-admin"; user: User; pending: boolean }
  | { s: "admin"; user: User };

function describe(e: unknown) {
  if (e instanceof FirebaseError) {
    if (e.code === "auth/operation-not-allowed" || e.code === "auth/configuration-not-found")
      return "Login Google belum diaktifkan di Firebase Console (Authentication → Sign-in method → Google).";
    if (e.code === "auth/unauthorized-domain") return "Domain ini belum diizinkan untuk login di Firebase Authentication.";
    if (e.code === "permission-denied") return "Akses ditolak oleh aturan keamanan database.";
    if (e.code === "not-found" || e.code === "failed-precondition") return "Database Firestore belum dibuat.";
    return `${e.code}: ${e.message}`;
  }
  return e instanceof Error ? e.message : String(e);
}

export function AdminApp() {
  const [phase, setPhase] = React.useState<Phase>({ s: "loading" });
  const [error, setError] = React.useState<string | null>(null);
  const [tab, setTab] = React.useState<"program" | "akses">("program");

  React.useEffect(
    () =>
      onAuthStateChanged(auth(), async (user) => {
        if (!user) return setPhase({ s: "signed-out" });
        try {
          if (await isAdmin(user)) setPhase({ s: "admin", user });
          else setPhase({ s: "not-admin", user, pending: await hasPendingRequest(user) });
        } catch (e) {
          setError(describe(e));
          setPhase({ s: "not-admin", user, pending: false });
        }
      }),
    []
  );

  async function signIn() {
    setError(null);
    try {
      await signInWithPopup(auth(), new GoogleAuthProvider());
    } catch (e) {
      if (e instanceof FirebaseError && (e.code === "auth/popup-closed-by-user" || e.code === "auth/cancelled-popup-request")) return;
      setError(describe(e));
    }
  }

  async function requestAccess(user: User) {
    setError(null);
    try {
      await requestAdminAccess(user);
      setPhase({ s: "not-admin", user, pending: true });
    } catch (e) {
      setError(describe(e));
    }
  }

  const errorBox = error && (
    <p role="alert" className="mt-4 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-[13px] text-destructive">
      {error}
    </p>
  );

  if (phase.s === "loading") return <Skeleton className="h-48 w-full rounded-[22px] bg-linen" />;

  if (phase.s === "signed-out") {
    return (
      <Panel className="mx-auto max-w-md text-center">
        <Eyebrow>Panel Admin</Eyebrow>
        <h1 className="mt-4 font-heading text-2xl font-normal text-iron-deep">Masuk sebagai admin</h1>
        <p className="mt-2 text-[13px] leading-relaxed text-iron-soft">
          Gunakan akun Google yang sudah disetujui sebagai admin Yayasan PPM Bangunjiwa.
        </p>
        <PrimaryButton className="mt-6 w-full" onClick={signIn}>
          <LogIn className="size-4" /> Masuk dengan Google
        </PrimaryButton>
        {errorBox}
      </Panel>
    );
  }

  if (phase.s === "not-admin") {
    return (
      <Panel className="mx-auto max-w-md text-center">
        <Eyebrow>Panel Admin</Eyebrow>
        <h1 className="mt-4 font-heading text-2xl font-normal text-iron-deep">Belum punya akses admin</h1>
        <p className="mt-2 text-[13px] text-iron-soft">Masuk sebagai {phase.user.email}</p>
        {phase.pending ? (
          <p className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-pine-soft/70 p-3 text-[13px] text-iron">
            <Clock className="size-4 text-pine-deep" /> Permintaan Anda menunggu persetujuan admin.
          </p>
        ) : (
          <PrimaryButton className="mt-5 w-full" onClick={() => requestAccess(phase.user)}>
            Ajukan akses admin
          </PrimaryButton>
        )}
        <GhostButton className="mt-3 h-10 w-full" onClick={() => signOut(auth())}>
          <LogOut className="size-4" /> Keluar
        </GhostButton>
        {errorBox}
      </Panel>
    );
  }

  const user = phase.user;
  return (
    <div className="flex flex-col gap-4">
      <Panel>
        <PanelHeader
          title="Panel Admin"
          icon={ShieldCheck}
          className="flex-wrap"
          action={
            <GhostButton onClick={() => signOut(auth())}>
              <LogOut className="size-4" /> Keluar
            </GhostButton>
          }
        />
        <p className="mt-2 text-[13px] text-iron-soft">
          Masuk sebagai {user.email} · {isOwner(user) ? "Admin utama" : "Admin"}
        </p>
        <div className="mt-5 flex gap-1 rounded-full border border-white bg-linen/80 p-1 sm:w-fit" role="tablist">
          {(
            [
              ["program", "Program"],
              ["akses", "Akses admin"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={cn(
                "flex-1 rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors",
                tab === id ? "bg-iron text-frost" : "text-iron-soft hover:text-iron"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </Panel>
      {tab === "program" ? <ProgramsManager /> : <AdminsManager user={user} />}
    </div>
  );
}
