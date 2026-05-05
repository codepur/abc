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
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-12 overflow-hidden">
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

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-center">
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
        <div className="hidden lg:block bg-white border border-[rgba(5,61,202,0.15)] shadow-[0_24px_64px_rgba(5,61,202,0.1)] p-10 text-center">
          <Image
            src="/images/logo.png"
            alt="ABC Summit 2026"
            width={320}
            height={90}
            className="h-[88px] w-auto mx-auto mb-6 object-contain"
          />
          <p className="text-xl font-bold text-[#E88F04] tracking-wider mb-1">
            Arth · Neeti · Dharma
          </p>
          <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#666] mb-7">
            Countdown to Summit
          </p>

          {/* Countdown */}
          <div className="flex gap-2.5 justify-center">
            {[
              { val: days, label: "Days" },
              { val: hours, label: "Hours" },
              { val: mins, label: "Mins" },
              { val: secs, label: "Secs" },
            ].map(({ val, label }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-[#f0f4fd] border border-[rgba(5,61,202,0.2)] px-3.5 py-3 min-w-[60px]"
              >
                <span className="font-sans text-2xl font-bold text-[#053DCA] leading-none tabular-nums">
                  {val}
                </span>
                <span className="font-sans text-[9px] tracking-[0.1em] uppercase text-[#E88F04] mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
