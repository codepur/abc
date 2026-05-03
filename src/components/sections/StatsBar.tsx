const STATS = [
  { num: "350",  suffix: "+",  label: "Curated Attendees"      },
  { num: "2",    suffix: "×",  label: "World-Class Speakers"   },
  { num: "150",  suffix: "+",  label: "Summit 2025 Attendees"  },
  { num: "₹7.4", suffix: "Cr+",label: "Business Closed via ABC"},
];

export default function StatsBar() {
  return (
    <section className="bg-[#0d1240] py-14 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map(({ num, suffix, label }) => (
          <div key={label} className="text-center">
            <p className="text-[44px] font-bold text-[#E88F04] leading-none mb-1.5 italic">
              {num}
              <span className="text-white">{suffix}</span>
            </p>
            <p className="font-sans text-[11px] tracking-[0.1em] uppercase text-white/45">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
