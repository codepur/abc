import SectionHeader from "./SectionHeader";

const METRICS = [
  { num: "1,818", label: "Referrals Passed"    },
  { num: "391",   label: "Testimonials Given"  },
  { num: "2,627", label: "Personal Meetings"   },
];

export default function Performance() {
  return (
    <section className="bg-white py-20 px-6 md:px-12" id="performance">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          eyebrow="Proven Track Record"
          title={<>ABC Community<br /><em className="not-italic text-[#053DCA]">Performance Numbers</em></>}
          description="Cumulative data across all Sanghs of ABC — updated till March 2026."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {METRICS.map(({ num, label }) => (
            <div key={label} className="bg-[#053DCA] p-9 text-center">
              <p className="font-sans text-5xl font-bold text-white leading-none mb-2">{num}</p>
              <p className="font-sans text-xs tracking-[0.12em] uppercase text-white/70">{label}</p>
            </div>
          ))}
        </div>

        {/* Big referral number */}
        <div className="mt-5 bg-[#fdf4e3] border-2 border-[#E88F04] p-8 text-center">
          <p className="font-sans text-xs tracking-[0.12em] uppercase text-[#666] mb-2">
            Business Closed Through Passing of Referrals
          </p>
          <p className="font-sans text-4xl md:text-5xl font-bold text-[#0d1240] leading-none">
            ₹7,44,86,974/–{" "}
            <span className="text-green-600 text-xl align-middle">↑ 10%</span>
          </p>
          <p className="font-sans text-xs text-[#666] mt-2">Growth from previous month</p>
        </div>
      </div>
    </section>
  );
}
