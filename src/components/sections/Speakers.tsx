import { Badge } from "@/components/ui/badge";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const SPEAKERS = [
  {
    image: "/images/images-1.jpg",
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
    image: "/images/images-2.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          
          {SPEAKERS.map((speaker, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(5,61,202,0.04)] border border-[rgba(5,61,202,0.06)] flex flex-col hover:shadow-[0_12px_40px_rgba(5,61,202,0.08)] transition-all duration-300 group">
              <div className="relative h-[340px] w-full bg-slate-100 overflow-hidden">
                <Image 
                  src={speaker.image} 
                  alt={speaker.name} 
                  fill 
                  className="w-full h-full object-contain h-full
                   group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-transparent text-[#E88F04] font-bold tracking-wider text-[10px] uppercase">
                    {speaker.badge}
                  </Badge>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#0d1240] mb-3">{speaker.name}</h3>
                <p className="text-[13px] text-gray-500 mb-6 font-medium leading-relaxed pb-6 border-b border-gray-100">
                  {speaker.title}
                </p>
                
                <ul className="space-y-3.5 mb-8 flex-1">
                  {speaker.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13.5px] text-[#444343] leading-snug">
                      <span className="text-[#053DCA] mt-0.5 text-xs">✦</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-2 mt-auto">
                  {speaker.tags.map((tag, i) => (
                    <Badge key={i} variant={tag.variant} className="capitalize text-[10px] tracking-wider px-3">
                      {tag.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* More row */}
          <div className="md:col-span-2 mt-4 bg-gradient-to-r from-[#f0f4fd] to-white border border-dashed border-[rgba(5,61,202,0.25)] rounded-2xl p-6 text-center font-sans text-[12px] tracking-[0.1em] uppercase text-[#E88F04] shadow-sm">
            <span className="inline-block animate-pulse mr-2">✦</span> 
            Panel Discussion with Top Agrawal Entrepreneurs from Across the City 
            <span className="mx-4 opacity-50">·</span> 
            More announcements coming soon
          </div>
        </div>
      </div>
    </section>
  );
}
