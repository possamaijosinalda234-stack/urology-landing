import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with Dr. Chan on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-pulse-glow" />
        <button className="relative flex items-center justify-center w-14 h-14 rounded-full whatsapp-btn text-white shadow-lg">
          <MessageCircle size={28} strokeWidth={2} />
        </button>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with Dr. Chan
        </div>
      </div>
    </a>
  );
}
