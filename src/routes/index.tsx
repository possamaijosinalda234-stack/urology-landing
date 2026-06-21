import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <CTASection />
      <FloatingWhatsApp />
    </div>
  );
}
