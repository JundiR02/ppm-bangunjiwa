import Link from "next/link";
import { UnitLogo } from "@/components/lembaga/unit-logo";
import { BIDANG_PROGRAM, PROFIL_PESANTREN, YAYASAN } from "@/lib/bangunjiwa-data";

export function OrgStructure() {
  return (
    <div>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-lg bg-hijau px-6 py-8 text-center text-frost">
        <UnitLogo src={YAYASAN.logo} alt={`Logo ${YAYASAN.nama}`} className="size-16 rounded-full border-0" />
        <h3 className="text-balance font-heading text-2xl leading-snug">{YAYASAN.nama}</h3>
        <p className="text-[13px] text-frost/75">Pengasuh: {PROFIL_PESANTREN.pengasuh.join(" & ")}</p>
      </div>

      {/* Connector lines: a trunk from the yayasan, a rail across, and a drop to each bidang (desktop only). */}
      <div className="hidden xl:block" aria-hidden>
        <div className="mx-auto h-8 w-px bg-ash-deep" />
        <div className="mx-[12.5%] h-px bg-ash-deep" />
        <div className="grid grid-cols-4">
          {BIDANG_PROGRAM.map((b) => (
            <div key={b.id} className="mx-auto h-8 w-px bg-ash-deep" />
          ))}
        </div>
      </div>

      <ul className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:mt-0 xl:grid-cols-4">
        {BIDANG_PROGRAM.map((bidang) => (
          <li key={bidang.id} className="border-t-2 border-hijau pt-5">
            <h3 className="font-heading text-xl leading-snug text-iron-deep">
              <Link href={bidang.href} className="hover:text-hijau">
                {bidang.nama}
              </Link>
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {bidang.items.map((item) => (
                <li key={item.judul} className="text-[14px] leading-snug">
                  <span className="font-medium text-iron">
                    {item.href ? (
                      <Link href={item.href} className="hover:text-hijau hover:underline">
                        {item.judul}
                      </Link>
                    ) : (
                      item.judul
                    )}
                  </span>
                  {item.keterangan && <span className="block text-[13px] text-iron-soft">{item.keterangan}</span>}
                  {item.anak && (
                    <ul className="mt-1 flex flex-col gap-0.5 border-l border-ash pl-3 text-[13px] text-iron-soft">
                      {item.anak.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
