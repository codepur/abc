"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

const SPEAKER_IMAGES = [
  "/images/images-1.jpg",
  "/images/images-2.jpg",
];

export default function Speakers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SPEAKER_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] min-h-[500px] overflow-hidden bg-[#0d1240]" id="speakers">

      {/* Background Typography */}
      <SectionHeader
        eyebrow="Confirmed Speakers"
        title={<>Voices That Have<br /><em className="not-italic text-[#053DCA]">Actually Built Something</em></>}
        description="Two of India's most compelling business minds — one a master of ancient strategy, one of modern narrative."
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={SPEAKER_IMAGES[currentIndex]}
            alt={`Speaker ${currentIndex + 1}`}
            fill
            className=""
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Gradient Overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1240] via-transparent to-[#0d1240]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1240]/60 via-transparent to-[#0d1240]/40 pointer-events-none" />

      {/* Carousel Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {SPEAKER_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-700 ease-in-out ${idx === currentIndex
              ? "w-16 h-1.5 bg-[#E88F04]"
              : "w-4 h-1.5 bg-white/30 hover:bg-white/60"
              } rounded-full`}
            aria-label={`View image ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
