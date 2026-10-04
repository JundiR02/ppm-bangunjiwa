import { Check } from "lucide-react";
import { KURIKULUM_ROWS, KURIKULUM_SEMESTERS } from "@/lib/bangunjiwa-data";

export function CurriculumTable() {
  return (
    <div>
      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[640px] border-collapse bg-card text-sm">
          <thead>
            <tr className="bg-forest-800 text-white">
              <th className="px-5 py-3.5 text-left font-heading text-xs font-semibold">
                Mata Pelajaran
              </th>
              {KURIKULUM_SEMESTERS.map((sem) => (
                <th key={sem} className="px-3 py-3.5 text-center text-xs font-semibold">
                  {sem}
                </th>
              ))}
              <th className="px-5 py-3.5 text-left text-xs font-semibold">Kitab</th>
            </tr>
          </thead>
          <tbody>
            {KURIKULUM_ROWS.map((row, i) => (
              <tr
                key={row.mataPelajaran}
                className={i % 2 === 1 ? "bg-sage-50 dark:bg-forest-900/30" : undefined}
              >
                <td className="px-5 py-3 font-medium text-forest-700 dark:text-sage-300">
                  {row.mataPelajaran}
                </td>
                {row.semester.map((checked, si) => (
                  <td key={si} className="px-3 py-3 text-center">
                    {checked && <Check className="mx-auto size-4 text-forest-600 dark:text-sage-400" />}
                  </td>
                ))}
                <td className="px-5 py-3 text-muted-foreground">{row.kitab}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Ditetapkan oleh Direktur Pendidikan PPM Riset Ekologi Bangunjiwa, M. Hamid Lufafi, S.Pd.
      </p>
    </div>
  );
}
