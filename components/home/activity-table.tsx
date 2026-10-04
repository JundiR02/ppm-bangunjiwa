import { CalendarDays, Leaf } from "lucide-react";
import { Panel, PanelHeader } from "@/components/hub/panel";
import { SampleDataBadge } from "@/components/content/sample-data";
import { LATEST_ACTIVITIES } from "@/lib/dummy-data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

export function ActivityTable() {
  return (
    <Panel className="px-0 pb-2 sm:px-0 sm:pb-3">
      <PanelHeader
        title="Kegiatan Terbaru"
        icon={CalendarDays}
        className="flex-wrap px-5 sm:px-6"
        action={<SampleDataBadge label="Kegiatan contoh" />}
      />
      <div className="mt-4 overflow-x-auto px-3 sm:px-4">
        <table className="w-full min-w-[640px] border-separate border-spacing-0 text-[13px]">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-wide text-iron-soft">
              <th className="rounded-l-xl bg-linen px-4 py-2.5 font-medium">Kegiatan</th>
              <th className="bg-linen px-4 py-2.5 font-medium">Ringkasan</th>
              <th className="rounded-r-xl bg-linen px-4 py-2.5 text-right font-medium">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {LATEST_ACTIVITIES.map((activity, i) => {
              const last = i === LATEST_ACTIVITIES.length - 1;
              const cell = last ? "px-4 py-3.5" : "border-b border-ash/60 px-4 py-3.5";
              return (
                <tr key={activity.slug}>
                  <td className={cell}>
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-pine-soft text-pine-deep">
                        <Leaf className="size-3.5" />
                      </span>
                      <span className="font-medium text-iron-deep">{activity.title}</span>
                    </div>
                  </td>
                  <td className={`${cell} max-w-[420px] text-iron-soft`}>{activity.excerpt}</td>
                  <td className={`${cell} whitespace-nowrap text-right text-iron`}>{formatDate(activity.date)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
