import { Badge } from "@/components/ui/badge";
import SectionHeader from "./SectionHeader";

const SPEAKERS = [
  {
    initials: "RKP",
    badge: "Authority on Chanakya, Strategy & Leadership",
    name: "Dr. Radha Krishnan Pillai",
    title:
      "Founder, Chanakya International Institute of Leadership Studies (CIILS) · National Bestselling Author · Academic Association with IIMs",
    bullets: [
      "Globally recognised expert on Chanakya's philosophy applied to modern business",
      'Author of "Corporate Chanakya" & "Chanakya\'s 7 Secrets of Leadership"',
      "Practical frameworks that help entrepreneurs think clearly and act decisively",
    ],
    tags: [
      { label: "Arth", variant: "arth" as const },
      { label: "Neeti", variant: "neeti" as const },
    ],
  },
  {
    initials: "ASK",
    badge: "Filmmaker, Storyteller & Narrative Strategist",
    name: "Atul Satya Koushik",
    title:
      "Indian Theatre Director & Filmmaker · Known for Chakravyuh, Ishwar, Rangrez · Strategic Storytelling Expert",
    bullets: [
      "Unique perspective on how narratives shape brands and drive business impact",
      "Positions storytelling not just as creativity, but as strategic business growth",
      "Communicating value with clarity, audience psychology, and influence",
    ],
    tags: [{ label: "Dharma", variant: "dharma" as const }],
  },
];

export default function Speakers() {
  return (
    <section className="bg-[#f7f9fe] py-24 px-6 md:px-12" id="speakers">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          eyebrow="Confirmed Speakers"
          title={<>Voices That Have<br /><em className="not-italic text-[#053DCA]">Actually Built Something</em></>}
          description="Two of India's most compelling business minds — one a master of ancient strategy, one of modern narrative."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-14">
          {SPEAKERS.map((sp) => (
            <div
              key={sp.initials}
              className="bg-[#f7f9fe] border border-[rgba(5,61,202,0.12)] overflow-hidden grid grid-cols-[180px_1fr] hover:border-[#E88F04] hover:shadow-[0_12px_40px_rgba(5,61,202,0.1)] transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="bg-gradient-to-br from-[#f0f4fd] to-[#e8effe] flex items-center justify-center relative overflow-hidden min-h-[200px]">
                <span className="absolute w-40 h-40 rounded-full bg-[rgba(5,61,202,0.08)]" />
                <span className="relative z-10 font-sans text-5xl font-black text-[rgba(5,61,202,0.22)]">
                  {sp.initials}
                </span>
              </div>

              {/* Info */}
              <div className="p-7 flex flex-col justify-center">
                <Badge variant="speaker" className="self-start mb-3">
                  {sp.badge}
                </Badge>
                <h3 className="font-sans text-[18px] font-bold text-[#0d1240] leading-tight mb-1">
                  {sp.name}
                </h3>
                <p className="text-[13px] text-[#5a5a6e] italic leading-snug mb-4">{sp.title}</p>

                <ul className="space-y-1.5 mb-4">
                  {sp.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-[12.5px] text-[#5a5a6e] italic">
                      <span className="text-[#053DCA] text-[10px] mt-0.5 shrink-0">○</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[rgba(5,61,202,0.08)] pt-3">
                  <p className="font-sans text-[10px] tracking-[0.12em] uppercase text-[#666] mb-2">
                    Alignment with Summit 2026
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {sp.tags.map((t) => (
                      <Badge key={t.label} variant={t.variant}>
                        {t.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* More row */}
          <div className="md:col-span-2 bg-[#f0f4fd] border border-dashed border-[rgba(5,61,202,0.25)] p-6 text-center font-sans text-[12px] tracking-[0.1em] uppercase text-[#E88F04]">
            ✦ &nbsp; Panel Discussion with Top Agrawal Entrepreneurs from Across the City &nbsp;·&nbsp; More announcements coming soon
          </div>
        </div>
      </div>
    </section>
  );
}
