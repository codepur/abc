"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TimeLeft {
  days: string;
  hours: string;
  mins: string;
  secs: string;
}

function useCountdown(target: Date): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00", hours: "00", mins: "00", secs: "00",
  });

  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: String(Math.floor(diff / 86400000)).padStart(2, "0"),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
        mins: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
        secs: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

const SUMMIT_DATE = new Date("2026-06-20T09:00:00");

export default function Hero() {
  const { days, hours, mins, secs } = useCountdown(SUMMIT_DATE);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-bg.jpg"
          alt="Background"
          fill
          className="opacity-[80%]"
          priority
        />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
        {/* Left */}
        <div>
          <Badge variant="blue" className="mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E88F04]" />
            Agrawal Business Community · Indore
          </Badge>

          <h1 className="text-[clamp(34px,4.2vw,62px)] font-bold leading-[1.07] tracking-tight text-[#0d1240] mb-5">
            Where Serious<br />
            <em className=" text-[#E88F04]">Business Meets</em>
            <br />Serious People.
          </h1>

          <p className="text-base text-[#5a5a6e] leading-[1.85] mb-8 max-w-[500px] ">
            Not for everyone. Only for those building something that lasts. The ABC Summit 2026
            is the most focused gathering of Agrawal entrepreneurs, investors, and leaders in Central India.
          </p>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { label: "Date", value: "20 June 2026" },
              { label: "Venue", value: "Sheraton Grand, Indore" },
              { label: "Audience", value: "350+ Entrepreneurs" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#E88F04]">
                  {label}
                </span>
                <span className="font-sans text-sm font-bold text-[#0d1240]">{value}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="#register">
              <Button variant="primary" size="lg" className="clip-skew">
                Apply for a Seat
              </Button>
            </Link>
            <Link href="#about">
              <Button variant="outline" size="lg">
                Explore Summit
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: hero card */}
        <div className="hidden lg:flex flex-col items-center bg-white border border-[rgba(5,61,202,0.12)] rounded-3xl shadow-[0_32px_80px_rgba(5,61,202,0.13)] p-10 text-center relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#EEF2FF] opacity-60 pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-[#FFF8EC] opacity-60 pointer-events-none" />

          <Image
            src="/images/logo.png"
            alt="ABC Summit 2026"
            width={360}
            height={110}
            className="h-[110px] w-auto mx-auto mb-5 object-contain relative z-10"
          />

          <div className="w-16 h-px bg-[rgba(5,61,202,0.1)] mx-auto mb-5" />

          <p className="text-[15px] font-black text-[#E88F04] tracking-widest mb-1 uppercase relative z-10">
            Arth · Neeti · Dharma
          </p>
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-8 relative z-10">
            Countdown to Summit Day
          </p>

          {/* Countdown */}
          <div className="flex gap-3 justify-center relative z-10">
            {[
              { val: days, label: "Days" },
              { val: hours, label: "Hours" },
              { val: mins, label: "Mins" },
              { val: secs, label: "Secs" },
            ].map(({ val, label }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-gradient-to-b from-[#f0f4fd] to-[#e8effe] border border-[rgba(5,61,202,0.15)] rounded-2xl px-5 py-5 min-w-[72px] shadow-[0_4px_12px_rgba(5,61,202,0.08)]"
              >
                <span className="font-sans text-[34px] font-black text-[#053DCA] leading-none tabular-nums tracking-tight">
                  {val}
                </span>
                <span className="font-sans text-[9px] tracking-[0.15em] uppercase text-[#E88F04] mt-2 font-bold">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Event details */}
          <div className="mt-8 pt-6 border-t border-[rgba(5,61,202,0.07)] w-full relative z-10">
            <p className="font-sans text-[11px] text-gray-400 tracking-[0.1em] uppercase mb-1">Date & Venue</p>
            <p className="font-bold text-[#0d1240] text-[14px]">20 June 2026</p>
            <p className="text-[13px] text-[#053DCA] font-semibold">Sheraton Grand, Indore</p>
          </div>
        </div>
      </div>
    </section>
  );
}
