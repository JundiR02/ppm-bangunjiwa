import { AtSign, Camera, Hash, MapPin, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { KontakLembaga } from "@/lib/bangunjiwa-data";
import { cn } from "@/lib/utils";

const KONTAK_ICON: Record<KontakLembaga["kind"], LucideIcon> = {
  alamat: MapPin,
  whatsapp: MessageCircle,
  telepon: Phone,
  email: AtSign,
  instagram: Camera,
  nss: Hash,
};

export function ContactList({ kontak, className }: { kontak: KontakLembaga[]; className?: string }) {
  return (
    <ul className={cn("flex flex-col gap-2", className)}>
      {kontak.map((k) => {
        const Icon = KONTAK_ICON[k.kind];
        const content = (
          <>
            <Icon className="mt-0.5 size-3.5 shrink-0 text-iron-soft" strokeWidth={1.75} />
            <span className="min-w-0 break-words">{k.label}</span>
          </>
        );
        const external = k.href?.startsWith("http");
        return (
          <li key={k.label} className="text-[13px] leading-snug text-iron">
            {k.href ? (
              <a
                href={k.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener" : undefined}
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
  );
}
