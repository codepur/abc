"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about",    label: "About"    },
  { href: "#theme",    label: "Theme"    },
  { href: "#speakers", label: "Speakers" },
  { href: "#details",  label: "Details"  },
  { href: "#sponsor",  label: "Sponsor"  },
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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3 transition-all duration-300",
        scrolled
          ? "bg-white/97 backdrop-blur-xl border-b border-[rgba(5,61,202,0.1)] shadow-sm"
          : "bg-white/95 backdrop-blur-lg border-b border-[rgba(5,61,202,0.08)]"
      )}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png"
          alt="ABC Summit 2026"
          width={160}
          height={48}
          className="h-12 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-sans text-[11.5px] tracking-[0.09em] uppercase text-[#444343] hover:text-[#053DCA] transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link href="#register" className="hidden lg:block">
        <Button variant="nav" size="sm">
          Apply Now
        </Button>
      </Link>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[rgba(5,61,202,0.1)] shadow-lg lg:hidden">
          <ul className="flex flex-col p-5 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-sans text-[12px] tracking-[0.1em] uppercase text-[#444343] hover:text-[#053DCA] border-b border-[rgba(5,61,202,0.06)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link href="#register" onClick={() => setOpen(false)}>
                <Button variant="primary" size="md" className="w-full clip-skew">
                  Apply Now
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
