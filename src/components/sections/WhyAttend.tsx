import SectionHeader from "./SectionHeader";

const REASONS = [
  {
    num: "01",
    title: "Wealth Creation — Arth",
    desc: "Practical approaches to scaling businesses, improving profitability, and building long-term financial strength through proven frameworks.",
  },
  {
    num: "02",
    title: "Strategic Thinking — Neeti",
    desc: "Sharper business decisions, structured thinking, leadership frameworks, and real-world strategy from Chanakya to corporate application.",
  },
  {
    num: "03",
    title: "Values in Business — Dharma",
    desc: "How ethical conduct, trust, and intent directly influence business growth and long-term credibility — through storytelling and narrative.",
  },
  {
    num: "04",
    title: "Meaningful Networking",
    desc: "Connect with 350+ serious Agrawal entrepreneurs, business leaders, and decision-makers. No spectators — only builders.",
  },
  {
    num: "05",
    title: "Exclusive Venue",
    desc: "Sheraton Grand, Indore — a setting that signals seriousness. The environment shapes the quality of every conversation.",
  },
  {
    num: "06",
    title: "Community Access",
    desc: "Entry to the ABC ecosystem — year-round deal sharing, mentorship circles, referrals, and introductions. The summit is just the beginning.",
  },
];

export default function WhyAttend() {
  return (
    <section className="bg-[#f7f9fe] py-24 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          eyebrow="What You Will Gain"
          title={<>Six Reasons You Cannot<br /><em className="not-italic text-[#053DCA]">Afford to Miss This</em></>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {REASONS.map((r) => (
            <div
              key={r.num}
              className="bg-white border border-[rgba(5,61,202,0.1)] p-8 hover:border-[#E88F04] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(5,61,202,0.08)] transition-all duration-300"
            >
              <p className="font-sans text-[42px] font-black text-[rgba(5,61,202,0.1)] leading-none mb-3.5">
                {r.num}
              </p>
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.05em] text-[#0d1240] mb-2.5">
                {r.title}
              </p>
              <p className="text-[13px] text-[#5a5a6e] italic leading-[1.75]">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
