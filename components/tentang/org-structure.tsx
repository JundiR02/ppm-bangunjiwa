import Image from "next/image";
import { AtSign, Camera, Hash, MapPin, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Panel } from "@/components/hub/panel";
import { LEMBAGA_BANGUNJIWA, PROFIL_PESANTREN, YAYASAN } from "@/lib/bangunjiwa-data";
import type { KontakLembaga } from "@/lib/bangunjiwa-data";

const KONTAK_ICON: Record<KontakLembaga["kind"], LucideIcon> = {
  alamat: MapPin,
  whatsapp: MessageCircle,
  telepon: Phone,
  email: AtSign,
  instagram: Camera,
  nss: Hash,
};

export function OrgStructure() {
  return (
    <div>
      <div
        className="mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-[22px] bg-iron p-6 text-center text-frost shadow-panel sm:p-7"
        style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgb(138 147 127 / 0.45), transparent 60%)" }}
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-frost/60">Yayasan</span>
        <h3 className="text-balance font-heading text-xl font-normal leading-snug sm:text-2xl">{YAYASAN.nama}</h3>
        <p className="max-w-md text-[13px] leading-relaxed text-frost/75">{YAYASAN.deskripsi}</p>
        <p className="border-t border-frost/15 pt-3 text-[12px] text-frost/70">
          Pengasuh: {PROFIL_PESANTREN.pengasuh.join(" & ")}
        </p>
      </div>

      {/* Connector lines: a trunk from the yayasan, a rail across, and a drop to each unit (desktop only). */}
      <div className="hidden lg:block" aria-hidden>
        <div className="mx-auto h-6 w-px bg-ash-deep" />
        <div className="mx-[12.5%] h-px bg-ash-deep" />
        <div className="grid grid-cols-4">
          {LEMBAGA_BANGUNJIWA.map((l) => (
            <div key={l.id} className="mx-auto h-6 w-px bg-ash-deep" />
          ))}
        </div>
      </div>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4">
        {LEMBAGA_BANGUNJIWA.map((lembaga) => (
          <li key={lembaga.id} className="flex">
            <Panel className={lembaga.current ? "flex w-full flex-col gap-4 ring-2 ring-pine" : "flex w-full flex-col gap-4"}>
              <div className="flex items-start justify-between gap-3">
                <span className="size-14 shrink-0 overflow-hidden rounded-2xl border border-white shadow-panel">
                  <Image
                    src={lembaga.logo}
                    alt={`Logo ${lembaga.nama}`}
                    width={232}
                    height={232}
                    className="size-full object-cover"
                  />
                </span>
                {lembaga.current && (
                  <span className="rounded-full bg-pine-soft px-2.5 py-1 text-[11px] font-medium text-pine-deep">
                    Situs ini
                  </span>
                )}
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-pine-deep">{lembaga.peran}</p>
                <h3 className="mt-1 font-heading text-lg font-medium leading-snug text-iron-deep">{lembaga.nama}</h3>
              </div>
              {lembaga.kontak.length > 0 && (
                <ul className="mt-auto flex flex-col gap-2 border-t border-ash/60 pt-4">
                  {lembaga.kontak.map((k) => {
                    const Icon = KONTAK_ICON[k.kind];
                    const content = (
                      <>
                        <Icon className="mt-0.5 size-3.5 shrink-0 text-iron-soft" strokeWidth={1.75} />
                        <span className="min-w-0 break-words">{k.label}</span>
                      </>
                    );
                    return (
                      <li key={k.label} className="text-[12.5px] leading-snug text-iron">
                        {k.href ? (
                          <a
                            href={k.href}
                            target={k.href.startsWith("http") ? "_blank" : undefined}
                            rel={k.href.startsWith("http") ? "noopener" : undefined}
                            className="flex gap-2 transition-colors hover:text-pine-deep"
                          >
                            {content}
                          </a>
                        ) : (
                          <span className="flex gap-2">{content}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </Panel>
          </li>
        ))}
      </ul>
    </div>
  );
}
