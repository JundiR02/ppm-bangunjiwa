import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Panel } from "@/components/hub/panel";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import { BIDANG_PROGRAM, PROFIL_PESANTREN, YAYASAN } from "@/lib/bangunjiwa-data";

export function OrgStructure() {
  return (
    <div>
      <div
        className="mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-[22px] bg-iron p-6 text-center text-frost shadow-panel sm:p-7"
        style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgb(138 147 127 / 0.45), transparent 60%)" }}
      >
        <UnitLogo src={YAYASAN.logo} alt={`Logo ${YAYASAN.nama}`} className="size-16 border-frost/20" />
        <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-frost/60">Yayasan</span>
        <h3 className="text-balance font-heading text-xl font-normal leading-snug sm:text-2xl">{YAYASAN.nama}</h3>
        <p className="border-t border-frost/15 pt-3 text-[12px] text-frost/70">
          Pengasuh: {PROFIL_PESANTREN.pengasuh.join(" & ")}
        </p>
      </div>

      {/* Connector lines: a trunk from the yayasan, a rail across, and a drop to each bidang (desktop only). */}
      <div className="hidden xl:block" aria-hidden>
        <div className="mx-auto h-6 w-px bg-ash-deep" />
        <div className="mx-[12.5%] h-px bg-ash-deep" />
        <div className="grid grid-cols-4">
          {BIDANG_PROGRAM.map((b) => (
            <div key={b.id} className="mx-auto h-6 w-px bg-ash-deep" />
          ))}
        </div>
      </div>

      <ol className="mt-4 grid gap-4 md:grid-cols-2 xl:mt-0 xl:grid-cols-4">
        {BIDANG_PROGRAM.map((bidang, i) => (
          <li key={bidang.id} className="flex">
            <Panel className="flex w-full flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-heading text-sm font-semibold text-pine-deep">{String(i + 1).padStart(2, "0")}</span>
                <Link
                  href={bidang.href}
                  aria-label={`Buka ${bidang.nama}`}
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white bg-frost text-iron shadow-panel transition-colors hover:bg-iron hover:text-frost"
                >
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
              <h3 className="font-heading text-lg font-medium leading-snug text-iron-deep">
                <Link href={bidang.href} className="hover:underline">
                  {bidang.nama}
                </Link>
              </h3>
              <ul className="mt-auto flex flex-col gap-3 border-t border-ash/60 pt-4">
                {bidang.items.map((item) => (
                  <li key={item.judul} className="text-[13px] leading-snug">
                    <span className="flex items-start gap-2 font-medium text-iron">
                      <span className="mt-[6px] size-1.5 shrink-0 rounded-full bg-pine" aria-hidden />
                      {item.href ? (
                        <Link href={item.href} className="hover:text-pine-deep hover:underline">
                          {item.judul}
                        </Link>
                      ) : (
                        item.judul
                      )}
                    </span>
                    {item.keterangan && <span className="ml-3.5 block text-[12px] text-iron-soft">{item.keterangan}</span>}
                    {item.anak && (
                      <ul className="ml-3.5 mt-1 flex flex-col gap-0.5 border-l border-ash pl-2.5 text-[12px] text-iron-soft">
                        {item.anak.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </Panel>
          </li>
        ))}
      </ol>
    </div>
  );
}
