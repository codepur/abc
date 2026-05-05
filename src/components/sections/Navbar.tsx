"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#theme", label: "Theme" },
  { href: "#speakers", label: "Speakers" },
  { href: "#register", label: "Register" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3 transition-colors duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[rgba(5,61,202,0.1)] shadow-sm"
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      )}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="ABC Summit 2026"
          width={160}
          height={48}
          className="h-12 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
          >
            <Link
              href={link.href}
              className="font-sans text-[11.5px] tracking-[0.09em] uppercase text-[#444343] hover:text-[#053DCA] transition-colors duration-200"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="hidden lg:block"
      >
        <Link href="#register">
          <Button variant="nav" size="sm" className="shadow-md hover:shadow-lg transition-all">
            Apply Now
          </Button>
        </Link>
      </motion.div>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden p-2 text-[#053DCA]"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[rgba(5,61,202,0.1)] shadow-xl lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-sans text-[13px] font-medium tracking-[0.1em] uppercase text-[#444343] hover:text-[#053DCA] border-b border-[rgba(5,61,202,0.06)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                className="pt-6 pb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="#register" onClick={() => setOpen(false)}>
                  <Button variant="primary" size="md" className="w-full clip-skew shadow-lg">
                    Apply Now
                  </Button>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
