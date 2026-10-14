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
    // Rows are 44px tall so each phone/email/Instagram link is a full thumb target; plain rows match for rhythm.
    <ul className={cn("flex flex-col", className)}>
      {kontak.map((k) => {
        const Icon = KONTAK_ICON[k.kind];
        const content = (
          <>
            <Icon className="size-4 shrink-0 text-pine-deep" strokeWidth={1.75} />
            <span className="min-w-0 break-words">{k.label}</span>
          </>
        );
        const external = k.href?.startsWith("http");
        return (
          <li key={k.label} className="text-[16px] leading-snug text-iron">
            {k.href ? (
              <a
                href={k.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener" : undefined}
                className="flex min-h-11 items-center gap-2 py-1.5 transition-colors hover:text-pine-deep [&>svg]:self-start [&>svg]:mt-[0.35rem]"
              >
                {content}
              </a>
            ) : (
              <span className="flex min-h-11 items-center gap-2 py-1.5 [&>svg]:self-start [&>svg]:mt-[0.35rem]">{content}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
