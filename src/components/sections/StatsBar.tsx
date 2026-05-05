"use client";

import { motion } from "framer-motion";

const STATS = [
  { num: "350", suffix: "+", label: "Curated Attendees" },
  { num: "2", suffix: "", label: "World-Class Speakers" },
  { num: "150", suffix: "+", label: "Summit 2025 Attendees" },
  { num: "₹7.4", suffix: "Cr+", label: "Business Closed via ABC" },
];

export default function StatsBar() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative bg-[#0d1240] py-20 px-6 md:px-12 overflow-hidden border-y border-[rgba(5,61,202,0.2)]">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#053DCA] rounded-full mix-blend-screen filter blur-[120px] opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E88F04] rounded-full mix-blend-screen filter blur-[120px] opacity-20" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-10"
      >
        {STATS.map(({ num, suffix, label }, i) => (
          <motion.div
            key={label}
            variants={itemVariants}
            className="flex flex-col items-center justify-center text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative mb-3"
            >
              {/* Subtle glow behind numbers */}
              <div className="absolute inset-0 bg-[#E88F04] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />

              <p className="relative text-[52px] md:text-[64px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E88F04] to-[#ffb13b] leading-none drop-shadow-sm">
                {num}
                <span className="text-white/90 text-[42px] md:text-[50px] font-medium ml-1">{suffix}</span>
              </p>
            </motion.div>

            <p className="font-sans text-[12px] md:text-[13px] tracking-[0.15em] uppercase text-white/60 group-hover:text-white/90 transition-colors duration-300 font-medium">
              {label}
            </p>

            {/* Decorative line */}
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-[#053DCA] to-transparent mt-5 opacity-50 group-hover:w-16 group-hover:opacity-100 transition-all duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
