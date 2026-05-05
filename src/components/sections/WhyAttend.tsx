import SectionHeader from "./SectionHeader";

const REASONS = [
  {
    num: "01",
    title: "Wealth Creation — Arth",
    desc: "Practical approaches to scaling businesses, improving profitability, and building long-term financial strength through proven frameworks.",
    accent: "#053DCA",
    bg: "#EEF2FF",
    numColor: "rgba(5,61,202,0.12)",
  },
  {
    num: "02",
    title: "Strategic Thinking — Neeti",
    desc: "Sharper business decisions, structured thinking, leadership frameworks, and real-world strategy from Chanakya to corporate application.",
    accent: "#E88F04",
    bg: "#FFF8EC",
    numColor: "rgba(232,143,4,0.12)",
  },
  {
    num: "03",
    title: "Values in Business — Dharma",
    desc: "How ethical conduct, trust, and intent directly influence business growth and long-term credibility — through storytelling and narrative.",
    accent: "#0f9e6e",
    bg: "#EDFAF4",
    numColor: "rgba(15,158,110,0.12)",
  },
  {
    num: "04",
    title: "Meaningful Networking",
    desc: "Connect with 350+ serious Agrawal entrepreneurs, business leaders, and decision-makers. No spectators — only builders.",
    accent: "#7C3AED",
    bg: "#F5F0FF",
    numColor: "rgba(124,58,237,0.12)",
  },
  {
    num: "05",
    title: "Exclusive Venue",
    desc: "Sheraton Grand, Indore — a setting that signals seriousness. The environment shapes the quality of every conversation.",
    accent: "#DC2626",
    bg: "#FEF2F2",
    numColor: "rgba(220,38,38,0.12)",
  },
  {
    num: "06",
    title: "Community Access",
    desc: "Entry to the ABC ecosystem — year-round deal sharing, mentorship circles, referrals, and introductions. The summit is just the beginning.",
    accent: "#0891B2",
    bg: "#ECFEFF",
    numColor: "rgba(8,145,178,0.12)",
  },
];

export default function WhyAttend() {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-[1200px] mx-auto">
        <SectionHeader
          eyebrow="What You Will Gain"
          title={<>Six Reasons You Cannot<br /><em className=" text-[#053DCA]">Afford to Miss This</em></>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-2">
          {REASONS.map((r) => (
            <div
              key={r.num}
              className="relative group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] cursor-default overflow-hidden border border-transparent hover:border-current"
              style={{ backgroundColor: r.bg }}
            >
              {/* Background number watermark */}
              <p
                className="absolute top-2 right-2 text-[60px] font-black leading-none select-none pointer-events-none transition-transform duration-300 group-hover:scale-110"
                style={{ color: r.numColor }}
              >
                {r.num}
              </p>

              {/* Accent top bar */}
              <div
                className="w-10 h-1 rounded-full mb-6"
                style={{ backgroundColor: r.accent }}
              />

              <p
                className="font-sans text-[13px] font-black uppercase tracking-[0.08em] mb-3"
                style={{ color: r.accent }}
              >
                {r.title}
              </p>
              <p className="text-[14px] text-[#4a4a5e] leading-[1.8] font-normal">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
