import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppButton({
  children = "Falar no WhatsApp",
  message,
  compact = false,
  className = "",
}: {
  children?: React.ReactNode;
  message?: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`folha inline-flex items-center gap-2.5 rounded-full font-semibold text-nanquim ${
        compact ? "px-4 py-2 text-sm" : "px-6 py-3.5 text-base"
      } ${className}`}
    >
      <WhatsAppIcon className={compact ? "size-4.5" : "size-5"} strokeWidth={1.5} />
      {children}
    </a>
  );
}
