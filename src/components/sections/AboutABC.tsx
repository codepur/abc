import Image from "next/image";
import SectionHeader from "./SectionHeader";

const MINI_STATS = [
  { num: "500+", label: "Members" },
  { num: "5+", label: "Years" },
  { num: "2", label: "Summits" },
];

export default function AboutABC() {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24 border-y border-[rgba(5,61,202,0.05)]" id="about">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-10">
          {/* Left Content */}
          <div>
            <SectionHeader
              eyebrow="Our Community"
              title={<>The Agrawal<br /><em className=" text-[#053DCA]">Business Community</em></>}
              description="ABC is a structured business community that brings together Agrawal entrepreneurs to build trusted relationships, exchange opportunities, and grow through collaboration."
            />

            <blockquote className="bg-[#f7f9fe] border-l-[4px] border-[#053DCA] pl-6 py-5 pr-5 mt-8  text-[15.5px] text-[#444343] leading-relaxed rounded-r-lg">
              Rooted in the Agrawal ethos — <span className="font-semibold text-[#0d1240]">&ldquo;Ek Eent aur Ek Rupiya&rdquo;</span> (collective contribution)
              and <span className="font-semibold text-[#0d1240]">&ldquo;Kar Bhala, So Ho Bhala&rdquo;</span> (ethical, value-led conduct) — ABC builds a culture
              where shared effort creates shared growth.
            </blockquote>
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-10">
              {MINI_STATS.map(({ num, label }) => (
                <div key={label} className="bg-[#f7f9fe] border border-[rgba(5,61,202,0.08)] rounded-2xl p-6 flex flex-col justify-center items-center text-center group hover:bg-[#053DCA] transition-colors duration-300">
                  <p className="text-[36px] md:text-[42px] font-black text-[#053DCA] leading-none mb-2 tracking-tight group-hover:text-white transition-colors duration-300">
                    {num}
                  </p>
                  <p className="font-sans text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-gray-500 font-bold group-hover:text-white/80 transition-colors duration-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="relative w-full h-[300px] md:h-[300px] lg:h-[600px] xl:h-[600px] flex justify-center items-center scale-110 xl:scale-125 origin-right">
            <Image
              src="/images/about-us.png"
              alt="ABC Community"
              fill
              className="object-contain drop-shadow-2xl hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
