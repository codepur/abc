const ITEMS = [
  "350+ Agrawal Entrepreneurs",
  "20 June 2026 · Indore",
  "Sheraton Grand",
  "Arth · Neeti · Dharma",
  "Dr. Radha Krishnan Pillai",
  "Atul Satya Koushik",
  "Limited Seats — Apply Now",
];

const allItems = [...ITEMS, ...ITEMS]; // duplicate for seamless loop

export default function Ticker() {
  return (
    <div className="bg-[#053DCA] py-2.5 overflow-hidden">
      <div className="flex gap-16 whitespace-nowrap animate-ticker">
        {allItems.map((item, i) => (
          <span
            key={i}
            className="font-sans text-[11px] tracking-[0.14em] uppercase text-white/90 flex items-center gap-4 shrink-0"
          >
            <span className="text-[#E88F04] text-[9px]">▶</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
