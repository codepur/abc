import SectionHeader from "./SectionHeader";

const PILLARS = [
  {
    key: "arth",
    name: "ARTH",
    subtitle: "(Wealth & Growth)",
    color: "#053DCA",
    borderTop: "bg-[#053DCA]",
    desc: "Building scalable, profitable businesses. Creating financial strength and long-term value. Practical approaches to improving profitability.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 mx-auto mb-5">
        <polygon points="32,4 60,58 4,58" stroke="#053DCA" strokeWidth="2.5" />
        <polygon points="32,14 52,52 12,52" stroke="#053DCA" strokeWidth="1.5" opacity=".5" />
        <polygon points="32,24 44,48 20,48" stroke="#053DCA" strokeWidth="1" opacity=".25" />
      </svg>
    ),
  },
  {
    key: "neeti",
    name: "NEETI",
    subtitle: "(Strategy & Leadership)",
    color: "#E88F04",
    borderTop: "bg-[#E88F04]",
    desc: "Sharp, informed business decisions. Applying structured thinking and leadership principles. Strategies that work in the real world.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 mx-auto mb-5">
        <circle cx="32" cy="32" r="28" stroke="#E88F04" strokeWidth="2.5" />
        <circle cx="32" cy="32" r="21" stroke="#E88F04" strokeWidth="1.5" opacity=".6" />
        <circle cx="32" cy="32" r="14" stroke="#E88F04" strokeWidth="1" opacity=".4" />
        <circle cx="32" cy="32" r="3" fill="#E88F04" />
      </svg>
    ),
  },
  {
    key: "dharma",
    name: "DHARMA",
    subtitle: "(Ethics & Purpose)",
    color: "#444343",
    borderTop: "bg-[#444343]",
    desc: "Doing business with integrity and responsibility. Building trust-driven relationships. Creating impact that goes beyond profits.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 mx-auto mb-5">
        {[
          [12,10],[26,6],[40,6],[54,10],
          [7,24],[21,20],[35,18],[49,20],
          [16,38],[30,34],[44,38],
          [25,52],[39,52],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#444343" opacity=".55" />
        ))}
      </svg>
    ),
  },
];

export default function Theme() {
  return (
    <section className="bg-white py-24 px-6 md:px-12" id="theme">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          eyebrow="Summit Theme 2026"
          title={<>The New Shift —<br /><em className="not-italic text-[#053DCA]">Three Pillars of Modern Business</em></>}
          description="A balanced framework for building businesses that grow with purpose, lead with strategy, and endure with integrity."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {PILLARS.map((p) => (
            <div
              key={p.key}
              className="relative bg-[#f7f9fe] border border-[rgba(5,61,202,0.12)] p-10 text-center hover:border-[#E88F04] hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <span className={`absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[3px] ${p.borderTop}`} />
              {p.icon}
              <p
                className="font-sans text-[12px] tracking-[0.3em] uppercase font-black mb-1.5"
                style={{ color: p.color }}
              >
                {p.name}
              </p>
              <p className="text-sm text-[#5a5a6e] italic mb-3.5">{p.subtitle}</p>
              <p className="text-[13px] text-[#5a5a6e] italic leading-[1.75]">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-9 bg-[#f0f4fd] border border-[rgba(5,61,202,0.2)] p-6 md:p-8 text-center">
          <p className="text-[17px] text-[#0d1240] italic leading-[1.65]">
            What this means for attendees:{" "}
            <strong className="text-[#E88F04] not-italic">
              A balanced approach to business where growth, strategy, and ethics come together to create
              sustainable, generational success.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
