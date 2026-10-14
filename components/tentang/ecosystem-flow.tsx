import Link from "next/link";
import { EKOSISTEM_NODES } from "@/lib/bangunjiwa-data";

export function EcosystemFlow() {
  return (
    <ol className="grid gap-x-8 gap-y-8 md:grid-cols-3">
      {EKOSISTEM_NODES.map((node) => (
        <li key={node.id} className="flex flex-col border-t-2 border-hijau pt-5">
          <h3 className="font-heading text-2xl leading-snug text-iron-deep">{node.title}</h3>
          <p className="mt-2 flex-1 text-[16px] leading-relaxed text-iron-soft">{node.description}</p>
          {node.href && node.linkLabel && (
            <Link href={node.href} className="mt-2 inline-flex min-h-11 w-fit items-center gap-2 text-[14px] font-medium text-hijau hover:underline">
              {node.linkLabel}
            </Link>
          )}
        </li>
      ))}
    </ol>
  );
}
