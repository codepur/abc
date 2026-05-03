import Image from "next/image";
import SectionHeader from "./SectionHeader";

const LIST = [
  "Designed as a disciplined ecosystem — not just a networking forum",
  "Consistency, credibility, and intent drive meaningful business outcomes",
  "Structured Sangh model translating values into consistent engagement",
  "Expanding across key cities with online membership program",
  "Offline Sangh-based engagements being established in new locations",
];

const MINI_STATS = [
  { num: "500+", label: "Members" },
  { num: "5+",   label: "Years"   },
  { num: "2",    label: "Summits" },
];

export default function AboutABC() {
  return (
    <section className="bg-[#f7f9fe] py-24 px-6 md:px-12" id="about">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div>
          <SectionHeader
            eyebrow="Our Community"
            title={<>The Agrawal<br /><em className="not-italic text-[#053DCA]">Business Community</em></>}
            description="ABC is a structured business community that brings together Agrawal entrepreneurs to build trusted relationships, exchange opportunities, and grow through collaboration."
          />

          <blockquote className="bg-[#f0f4fd] border-l-[3px] border-[#053DCA] pl-5 py-4 pr-4 mt-6 mb-6 italic text-[15px] text-[#444343] leading-[1.75]">
            Rooted in the Agrawal ethos — &ldquo;Ek Eent aur Ek Rupiya&rdquo; (collective contribution)
            and &ldquo;Kar Bhala, So Ho Bhala&rdquo; (ethical, value-led conduct) — ABC builds a culture
            where shared effort creates shared growth.
          </blockquote>

          <ul className="space-y-0">
            {LIST.map((item) => (
              <li
                key={item}
                className="flex gap-3 py-3 border-b border-[rgba(5,61,202,0.07)] text-[14.5px] text-[#444343] italic leading-snug"
              >
                <span className="text-[#E88F04] text-[9px] mt-1.5 shrink-0">▶</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right visual */}
        <div className="relative bg-white border border-[rgba(5,61,202,0.12)] p-12 text-center overflow-hidden">
          <span className="absolute text-[120px] font-black text-[rgba(5,61,202,0.05)] select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none font-sans leading-none whitespace-nowrap">
            ABC
          </span>
          <div className="relative z-10">
            <Image
              src="/logo.png"
              alt="ABC Summit"
              width={280}
              height={88}
              className="h-[88px] w-auto mx-auto mb-6 object-contain"
            />
            <div className="grid grid-cols-3 gap-3 mt-6">
              {MINI_STATS.map(({ num, label }) => (
                <div key={label} className="bg-[#f0f4fd] p-4">
                  <p className="text-2xl font-bold text-[#053DCA] italic leading-none">{num}</p>
                  <p className="font-sans text-[10px] tracking-[0.08em] uppercase text-[#666] mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
