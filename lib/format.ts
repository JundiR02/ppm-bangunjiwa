export function formatRupiah(n: number) {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

export function formatMetric(value: number, unit: string) {
  if (unit === "liter") {
    return `${(value / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} jt L`;
  }
  return value.toLocaleString("id-ID");
}

export function formatRupiahShort(n: number) {
  if (n >= 1_000_000) return `Rp ${(n / 1_000_000).toLocaleString("id-ID", { maximumFractionDigits: 1 })} jt`;
  return `Rp ${(n / 1000).toLocaleString("id-ID")}rb`;
}
