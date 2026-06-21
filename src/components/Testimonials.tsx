import { Star } from "lucide-react";

const testimonials = [
  { name: "Mr. L", age: 42, location: "Singapore", text: "Dr. Chan's treatment changed my life. Regained full confidence in 3 months." },
  { name: "Mr. K", age: 38, location: "Hong Kong", text: "Professional and effective. My PE issue is completely resolved." },
  { name: "Mr. W", age: 45, location: "Singapore", text: "Thorough consultation, clear explanations. Relationship improved dramatically." },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Patient Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-card rounded-xl p-6 border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4 text-sm">"{item.text}"</p>
              <p className="text-sm font-semibold">{item.name}, {item.age}</p>
              <p className="text-xs text-muted-foreground">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
