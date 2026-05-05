import SectionHeader from "./SectionHeader";
import { Handshake, CircleDollarSign, Target, Landmark } from "lucide-react";

const CARDS = [
  {
    icon: <Handshake className="w-8 h-8 text-[#E88F04] mb-4" />,
    title: "NETWORKING",
    desc: "Rooms full of decision-makers, not spectators",
  },
  {
    icon: <CircleDollarSign className="w-8 h-8 text-[#E88F04] mb-4" />,
    title: "INVESTMENTS",
    desc: "Deal flow between investors and founders",
  },
  {
    icon: <Target className="w-8 h-8 text-[#E88F04] mb-4" />,
    title: "LEARNING",
    desc: "Insights from top industry practitioners",
  },
  {
    icon: <Landmark className="w-8 h-8 text-[#E88F04] mb-4" />,
    title: "LEGACY",
    desc: "Join a community built on centuries of trust",
  },
];

const BULLETS = [
  "Established speakers delivering real-world, actionable insights",
  "A curated room of serious professionals — not casual attendees",
  "Structured networking that leads to actual deals and partnerships",
  "Built on values of trust, ethical conduct, and collective progress",
  "An environment where conversations translate directly into outcomes",
];

export default function AboutEvent() {
  return (
    <section className="bg-[#f7f9fe] py-24 px-6 md:px-12 border-y border-[rgba(5,61,202,0.05)]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
        {/* Left Side */}
        <div>
          <SectionHeader
            eyebrow="ABOUT THE EVENT"
            title={<>The ABC Summit 2026 —<br /><em className=" text-[#053DCA]">More Than a Conference</em></>}
          />
          <p className="text-[15.5px] text-[#444343] leading-relaxed mb-10 ">
            The ABC Summit 2026 will bring together Agrawal entrepreneurs, business leaders, and decision-makers for a focused, high-value business event unlike anything in Central India.
          </p>
          <ul className="space-y-4">
            {BULLETS.map((bullet, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-[#E88F04] text-[12px] mt-1 shrink-0">▶</span>
                <span className="text-[14.5px] text-[#444343] leading-snug  font-medium bg-white/60 px-2 py-1 rounded border border-[rgba(5,61,202,0.06)] shadow-sm">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CARDS.map((card, i) => (
            <div key={i} className="bg-white border border-[rgba(5,61,202,0.08)] p-8 rounded-2xl flex flex-col items-center text-center shadow-[0_4px_24px_rgba(5,61,202,0.04)] hover:border-[#053DCA] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(5,61,202,0.08)] transition-all duration-300 group">
              <div className="p-3 bg-[#f0f4fd] rounded-full mb-4 group-hover:scale-110 group-hover:bg-[#053DCA]/10 transition-transform duration-300">
                {card.icon}
              </div>
              <h4 className="font-sans text-[12px] tracking-[0.15em] uppercase font-bold text-[#053DCA] mb-3">
                {card.title}
              </h4>
              <p className="text-[13px] text-gray-500  leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
