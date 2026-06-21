import { Phone } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WHATSAPP_LINK = getWhatsAppLink();

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary/30">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
            <span className="text-white font-bold text-lg">CL</span>
          </div>
          <span className="text-white font-semibold text-xl">Dr. Chan Li</span>
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium shadow-lg transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
        >
          <Phone size={18} />
          <span>WhatsApp Us</span>
        </a>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-12 md:px-12 lg:px-20">
        <div className="flex-1 max-w-2xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Reclaim Your Confidence with{" "}
            <span className="text-gold">Expert Urological Care</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
            16 years experience • 100,000+ men treated • ED & PE specialist
          </p>
          
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-xl transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
          >
            <Phone size={20} />
            <span>Add WhatsApp Consultation</span>
          </a>
        </div>

        <div className="flex-1 max-w-md lg:max-w-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <img
            src="https://conversation.cdn.meoo.host/conversations/306329297893900288/image/2026-06-21/1782049251502-photo_2026-05-14_19-36-09.jpg?auth_key=a3e51d9145acc8e85ddf1fd88845936e73a9822b47371978410225fd03752188"
            alt="Dr. Chan Li - Urologist"
            className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white/20"
          />
        </div>
      </div>
    </section>
  );
}
