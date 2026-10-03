import { whatsappHref } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with UPÉ on WhatsApp (opens in a new tab)"
      className="group fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-[#07130b] shadow-[0_10px_40px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:-translate-y-1 md:right-6 md:bottom-6"
    >
      <span aria-hidden="true" className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20 [animation-iteration-count:3] motion-reduce:hidden" />
      <Icon name="whatsapp" size={26} />
    </a>
  );
}
