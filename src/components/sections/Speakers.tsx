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
    <section className="w-full bg-[#f7f9fe] py-24 px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64" id="speakers">

      {/* Header section above the banner */}
      <div className="w-full max-w-[1200px] mx-auto mb-12">
        <SectionHeader
          eyebrow="Confirmed Speakers"
          title={<>Voices That Have</>}
          description="Two of India's most compelling business minds."
        />
      </div>

      {/* Full width Banner Carousel */}
      <div className="relative w-full max-w-[1200px] mx-auto h-[60vh] md:h-[80vh] min-h-[500px] overflow-hidden bg-[#0d1240] rounded-[2rem] shadow-2xl border border-[rgba(5,61,202,0.1)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={SPEAKER_IMAGES[currentIndex]}
              alt={`Speaker ${currentIndex + 1}`}
              fill
              className="object-cover object-center"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {SPEAKER_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-700 ease-in-out ${idx === currentIndex
                ? "w-16 h-1.5 bg-[#E88F04]"
                : "w-4 h-1.5 bg-white/40 hover:bg-white/80"
                } rounded-full`}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
