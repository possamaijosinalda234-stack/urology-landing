import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { q: "Is the treatment painful?", a: "No, completely non-invasive and painless. No recovery time needed." },
  { q: "How many sessions?", a: "Most patients see results after 4-6 sessions, twice weekly." },
  { q: "Costs?", a: "From SGD 280 / HKD 1,600 per session. Package deals available." },
  { q: "Privacy?", a: "100% confidential. Private rooms, secure records." },
  { q: "Results timeline?", a: "Noticeable improvement in 2-3 weeks, full results in 4-8 weeks." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-xl border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30"
              >
                <span className="font-semibold pr-4">{faq.q}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
