import { Check } from "lucide-react";
import { KURIKULUM_ROWS, KURIKULUM_SEMESTERS } from "@/lib/bangunjiwa-data";

export function CurriculumTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] border-separate border-spacing-0 text-[14px]">
        <thead>
          <tr className="text-[13px] text-iron-soft">
            <th className="rounded-l-md bg-linen px-4 py-2.5 text-left font-medium">Mata pelajaran</th>
            {KURIKULUM_SEMESTERS.map((sem) => (
              <th key={sem} className="bg-linen px-2 py-2.5 text-center font-medium">
                {sem}
              </th>
            ))}
            <th className="rounded-r-md bg-linen px-4 py-2.5 text-left font-medium">Kitab</th>
          </tr>
        </thead>
        <tbody>
          {KURIKULUM_ROWS.map((row, i) => {
            const border = i === KURIKULUM_ROWS.length - 1 ? "" : "border-b border-ash";
            return (
              <tr key={row.mataPelajaran}>
                <td className={`${border} px-4 py-3 font-medium text-iron-deep`}>{row.mataPelajaran}</td>
                {row.semester.map((checked, si) => (
                  <td key={si} className={`${border} px-2 py-3 text-center`}>
                    {checked ? (
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-pine-soft text-pine-deep">
                        <Check className="size-3.5" strokeWidth={2.5} />
                        <span className="sr-only">Ya</span>
                      </span>
                    ) : (
                      <span className="text-ash-deep" aria-hidden>
                        ·
                      </span>
                    )}
                  </td>
                ))}
                <td className={`${border} px-4 py-3 text-iron-soft`}>{row.kitab}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
