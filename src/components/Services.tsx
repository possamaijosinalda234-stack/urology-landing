import { Shield, Heart, Activity } from "lucide-react";

const services = [
  {
    title: "Erectile Dysfunction",
    description: "Proven treatments with lasting results",
    icon: Shield,
  },
  {
    title: "Premature Ejaculation",
    description: "Advanced therapeutic methods",
    icon: Heart,
  },
  {
    title: "Male Wellness",
    description: "Comprehensive health assessments",
    icon: Activity,
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Specialized Treatments
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-card rounded-xl p-6 border hover:shadow-lg transition-all">
              <service.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
