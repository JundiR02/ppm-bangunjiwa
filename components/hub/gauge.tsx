const CX = 100;
const CY = 100;
const R = 76;
const START = 150;
const SWEEP = 240;

function point(angle: number, radius = R) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

function arc(from: number, to: number) {
  const a = point(from);
  const b = point(to);
  const large = to - from > 180 ? 1 : 0;
  return `M ${a.x} ${a.y} A ${R} ${R} 0 ${large} 1 ${b.x} ${b.y}`;
}

export function Gauge({ value, label }: { value: number; label: string }) {
  const clamped = Math.min(100, Math.max(0, value));
  const end = START + (SWEEP * clamped) / 100;
  const knob = point(end);

  return (
    <svg viewBox="0 0 200 172" role="img" aria-label={`${clamped}% ${label}`} className="w-full max-w-[260px]">
      <path d={arc(START, START + SWEEP)} fill="none" stroke="#e6e2da" strokeWidth={14} strokeLinecap="round" />
      {clamped > 0 && (
        <path d={arc(START, end)} fill="none" stroke="var(--color-pine)" strokeWidth={14} strokeLinecap="round" />
      )}
      <circle cx={knob.x} cy={knob.y} r={8} fill="var(--color-frost)" stroke="var(--color-pine-deep)" strokeWidth={4} />
      {[0, 20, 40, 60, 80, 100].map((tick) => {
        const p = point(START + (SWEEP * tick) / 100, R + 19);
        return (
          <text key={tick} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontSize={9} fill="var(--color-iron-soft)">
            {tick}
          </text>
        );
      })}
      <text x={CX} y={CY + 2} textAnchor="middle" fontSize={34} fontWeight={300} fill="var(--color-iron-deep)" className="font-heading">
        {clamped}%
      </text>
      <text x={CX} y={CY + 24} textAnchor="middle" fontSize={10} fill="var(--color-iron-soft)">
        {label}
      </text>
    </svg>
  );
}
