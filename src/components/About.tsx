const DOCTOR_IMAGE_URL =
  "https://conversation.cdn.meoo.host/conversations/306329297893900288/image/2026-06-21/1782049251502-photo_2026-05-14_19-36-09.jpg?auth_key=a3e51d9145acc8e85ddf1fd88845936e73a9822b47371978410225fd03752188";

export default function About() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <img src={DOCTOR_IMAGE_URL} alt="Dr. Chan Li" className="w-full rounded-2xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Dr. Chan Li</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            16+ years specializing in urology. Personalized, evidence-based treatments with complete privacy protection.
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {["Evidence-Based", "Privacy Guaranteed", "Personalized Care", "Proven Results"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
