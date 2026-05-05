"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Glimpse() {
  return (
    <section className="bg-white py-24 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#E88F04] font-bold mb-3 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-[#E88F04]" />
            A Glimpse
          </p>
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-bold text-[#0d1240] leading-tight">
            From Our Last Summit
          </h2>
        </motion.div>

        {/* Full image card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden rounded-[2rem] border border-[rgba(5,61,202,0.08)] shadow-[0_32px_80px_rgba(5,61,202,0.1)] group"
        >
          {/* Image */}
          <div className="relative w-full h-[60vh] md:h-[75vh] min-h-[420px]">
            <Image
              src="/images/glimse.png"
              alt="A glimpse from our last ABC Summit"
              fill
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1240]/70 via-transparent to-transparent" />

            {/* Bottom caption */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="flex items-end justify-end flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2">
                  <span className="w-2 h-2 rounded-full bg-[#E88F04] animate-pulse" />
                  <span className="text-white text-[12px] font-semibold tracking-wide">
                    ABC Summit 2026 · 20 June
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
