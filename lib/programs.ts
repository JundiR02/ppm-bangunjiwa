import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
  type DocumentData,
  type Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

/** Crowdfunding campaigns live under Dana Abadi Pesantren Hijau. */
export const CROWDFUNDING_PATH = "/dana-abadi/crowdfunding";

export function campaignHref(slug: string) {
  return `${CROWDFUNDING_PATH}?id=${slug}`;
}

export const PROGRAM_TYPES = [
  { id: "donasi", label: "Donasi" },
  { id: "dana-abadi", label: "Dana Abadi" },
  { id: "wakaf", label: "Wakaf" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "ekologi", label: "Ekologi" },
  { id: "ekonomi-sirkuler", label: "Ekonomi Sirkuler" },
  { id: "kurban", label: "Kurban" },
] as const;

export const PROGRAM_STATUSES = [
  { id: "draft", label: "Draft (tersembunyi)" },
  { id: "berjalan", label: "Berjalan" },
  { id: "selesai", label: "Selesai" },
] as const;

export type ProgramType = (typeof PROGRAM_TYPES)[number]["id"];
export type ProgramStatus = (typeof PROGRAM_STATUSES)[number]["id"];

export type Program = {
  slug: string;
  title: string;
  type: ProgramType;
  status: ProgramStatus;
  summary: string;
  description: string;
  location: string;
  target: number | null;
  collected: number | null;
  donorCount: number | null;
  allocation: { label: string; percent: number }[];
  testimonials: { quote: string; who: string }[];
  /** End of registration; after it the campaign stops accepting donations even if still "berjalan". */
  deadline: Date | null;
  /** Price options, e.g. "Kambing — mulai Rp3.000.000". */
  packages: { label: string; price: number | null; note: string }[];
  /** People donors confirm with; phones become WhatsApp links. */
  contacts: { name: string; phone: string }[];
  /** The poster image lives in programPosters/{slug} so listing campaigns stays light. */
  hasPoster: boolean;
  figuresUpdatedAt: Date | null;
  updatedAt: Date | null;
};

export type ProgramInput = Omit<Program, "slug" | "figuresUpdatedAt" | "updatedAt">;

const PUBLIC_STATUSES: ProgramStatus[] = ["berjalan", "selesai"];
const programs = () => collection(db(), "programs");

export function typeLabel(type: ProgramType) {
  return PROGRAM_TYPES.find((t) => t.id === type)?.label ?? type;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function isValidSlug(slug: string) {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug) && slug.length <= 80;
}

/** A "berjalan" campaign whose deadline has passed is closed, without anyone having to edit it. */
export function isAcceptingDonations(p: Pick<Program, "status" | "deadline">, now = Date.now()) {
  return p.status === "berjalan" && (p.deadline == null || p.deadline.getTime() >= now);
}

/** Registration closes at the end of the chosen day, Yogyakarta time. */
export function deadlineFromDateInput(value: string): Date | null {
  return value ? new Date(`${value}T23:59:59+07:00`) : null;
}

export function deadlineToDateInput(deadline: Date | null): string {
  if (!deadline) return "";
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Jakarta" }).format(deadline);
}

/** wa.me link for an Indonesian number written as 08…, 62…, or +62…. */
export function whatsappHref(phone: string) {
  const d = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${d.startsWith("0") ? `62${d.slice(1)}` : d}`;
}

export function progressPercent(p: Pick<Program, "target" | "collected">) {
  if (!p.target || p.collected == null) return null;
  return Math.min(100, Math.round((p.collected / p.target) * 100));
}

function toDate(value: unknown): Date | null {
  return value && typeof (value as Timestamp).toDate === "function" ? (value as Timestamp).toDate() : null;
}

function fromDoc(slug: string, d: DocumentData): Program {
  return {
    slug,
    title: d.title ?? "",
    type: d.type,
    status: d.status,
    summary: d.summary ?? "",
    description: d.description ?? "",
    location: d.location ?? "",
    target: d.target ?? null,
    collected: d.collected ?? null,
    donorCount: d.donorCount ?? null,
    allocation: d.allocation ?? [],
    testimonials: d.testimonials ?? [],
    deadline: toDate(d.deadline),
    packages: d.packages ?? [],
    contacts: d.contacts ?? [],
    hasPoster: d.hasPoster ?? false,
    figuresUpdatedAt: toDate(d.figuresUpdatedAt),
    updatedAt: toDate(d.updatedAt),
  };
}

function newestFirst(a: Program, b: Program) {
  return (b.updatedAt?.getTime() ?? 0) - (a.updatedAt?.getTime() ?? 0);
}

// Firestore retries indefinitely when unreachable; public pages should fail visibly instead of spinning.
function withTimeout<T>(promise: Promise<T>, ms = 15000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error("timeout")), ms)),
  ]);
}

export async function listPublishedPrograms(): Promise<Program[]> {
  const snap = await withTimeout(getDocs(query(programs(), where("status", "in", PUBLIC_STATUSES))));
  return snap.docs.map((d) => fromDoc(d.id, d.data())).sort(newestFirst);
}

export async function listAllPrograms(): Promise<Program[]> {
  const snap = await getDocs(programs());
  return snap.docs.map((d) => fromDoc(d.id, d.data())).sort(newestFirst);
}

export async function getProgram(slug: string): Promise<Program | null> {
  if (!isValidSlug(slug)) return null;
  const snap = await withTimeout(getDoc(doc(programs(), slug)));
  return snap.exists() ? fromDoc(snap.id, snap.data()) : null;
}

function figuresChanged(prev: Program | null, next: ProgramInput) {
  if (!prev) return true;
  return (
    prev.target !== next.target ||
    prev.collected !== next.collected ||
    prev.donorCount !== next.donorCount ||
    JSON.stringify(prev.allocation) !== JSON.stringify(next.allocation)
  );
}

export async function saveProgram(slug: string, input: ProgramInput, previous: Program | null) {
  const data: Record<string, unknown> = { ...input, updatedAt: serverTimestamp() };
  if (figuresChanged(previous, input)) data.figuresUpdatedAt = serverTimestamp();
  else data.figuresUpdatedAt = previous?.figuresUpdatedAt ?? null;
  await setDoc(doc(programs(), slug), data);
}

export async function deleteProgram(slug: string) {
  await deleteDoc(doc(programs(), slug));
  await deleteDoc(doc(posters(), slug));
}

const posters = () => collection(db(), "programPosters");

export async function getPoster(slug: string): Promise<string | null> {
  const snap = await withTimeout(getDoc(doc(posters(), slug)));
  return snap.exists() ? (snap.data().dataUrl as string) : null;
}

export async function savePoster(slug: string, dataUrl: string | null) {
  if (dataUrl === null) await deleteDoc(doc(posters(), slug));
  else await setDoc(doc(posters(), slug), { dataUrl, updatedAt: serverTimestamp() });
}
