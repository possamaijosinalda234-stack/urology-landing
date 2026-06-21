import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary to-teal-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take the First Step?</h2>
        <p className="text-lg text-white/90 mb-8">Free consultation • 100% confidential</p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-semibold text-lg shadow-lg transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" }}
        >
          <MessageCircle size={24} />
          Add WhatsApp Consultation
        </a>
        <p className="text-sm text-white/70 mt-4">Usually responds within 1 hour</p>
      </div>
    </section>
  );
}
