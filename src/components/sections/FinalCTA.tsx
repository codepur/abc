import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="bg-[#053DCA] py-24 px-6 md:px-16 lg:px-24 text-center relative overflow-hidden">
      {/* Diagonal stripe overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px)",
        }}
      />

      <div className="relative w-full">
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/50 mb-4 flex items-center justify-center gap-3">
          <span className="inline-block w-8 h-0.5 bg-white/30" />
          One Day. One Room. Real Outcomes.
        </p>

        <h2 className="text-[clamp(26px,3.5vw,48px)] font-bold leading-[1.14] tracking-tight text-white mb-4">
          Join the Most Powerful<br />Business Network of the Year.
        </h2>

        <p className="text-[17px] text-white/75  mb-10 w-full leading-relaxed">
          Seats are limited. Entry is curated. The room is extraordinary.<br />
          The only question is — will you be in it?
        </p>

        <Link href="#register">
          <Button variant="white" size="xl" className="clip-skew-lg font-black">
            Apply for Your Seat Now →
          </Button>
        </Link>
      </div>
    </section>
  );
}
