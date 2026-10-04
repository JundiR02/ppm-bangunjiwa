import { collection, deleteDoc, doc, getDoc, getDocs, serverTimestamp, setDoc, writeBatch } from "firebase/firestore";
import type { User } from "firebase/auth";
import { db } from "@/lib/firebase";

/** Main admin — hardcoded in firestore.rules too, so this account can never be locked out or removed. */
export const OWNER_EMAIL = "akademikomunitaspesantrenhijau@gmail.com";

export type AdminEntry = { uid: string; email: string; approvedBy: string };
export type AdminRequest = { uid: string; email: string; name: string };

export function isOwner(user: User) {
  return user.email === OWNER_EMAIL && user.emailVerified;
}

export async function isAdmin(user: User) {
  if (isOwner(user)) return true;
  return (await getDoc(doc(db(), "admins", user.uid))).exists();
}

export async function hasPendingRequest(user: User) {
  return (await getDoc(doc(db(), "adminRequests", user.uid))).exists();
}

export async function requestAdminAccess(user: User) {
  await setDoc(doc(db(), "adminRequests", user.uid), {
    email: user.email ?? "",
    name: user.displayName ?? "",
    requestedAt: serverTimestamp(),
  });
}

export async function listAdmins(): Promise<AdminEntry[]> {
  const snap = await getDocs(collection(db(), "admins"));
  return snap.docs.map((d) => ({ uid: d.id, email: d.data().email, approvedBy: d.data().approvedBy }));
}

export async function listAdminRequests(): Promise<AdminRequest[]> {
  const snap = await getDocs(collection(db(), "adminRequests"));
  return snap.docs.map((d) => ({ uid: d.id, email: d.data().email, name: d.data().name }));
}

export async function approveRequest(req: AdminRequest, approver: User) {
  const batch = writeBatch(db());
  batch.set(doc(db(), "admins", req.uid), {
    email: req.email,
    approvedBy: approver.email ?? "",
    approvedAt: serverTimestamp(),
  });
  batch.delete(doc(db(), "adminRequests", req.uid));
  await batch.commit();
}

export async function rejectRequest(uid: string) {
  await deleteDoc(doc(db(), "adminRequests", uid));
}

export async function removeAdmin(uid: string) {
  await deleteDoc(doc(db(), "admins", uid));
}
