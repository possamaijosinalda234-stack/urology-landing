const stats = [
  { value: "16+", label: "Years Experience" },
  { value: "100,000+", label: "Men Treated" },
  { value: "98%", label: "Success Rate" },
  { value: "100%", label: "Confidential" },
];

export default function Stats() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
