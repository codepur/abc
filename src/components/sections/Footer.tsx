import Image from "next/image";
import Link from "next/link";

const NAV_GROUPS = [
  {
    title: "Summit",
    links: [
      { label: "About ABC",    href: "#about"      },
      { label: "Theme 2026",   href: "#theme"      },
      { label: "Speakers",     href: "#speakers"   },
      { label: "Summit 2025",  href: "#highlights" },
      { label: "Schedule",     href: "#details"    },
    ],
  },
  {
    title: "Attend",
    links: [
      { label: "Apply Now",      href: "#register"  },
      { label: "FAQs",           href: "#faq"       },
      { label: "Sponsorships",   href: "#sponsor"   },
      { label: "Contact Us",     href: "mailto:sponsor@theabcsummit.com" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "sponsor@theabcsummit.com", href: "mailto:sponsor@theabcsummit.com" },
      { label: "+91 99779 16622",          href: "tel:+919977916622"               },
      { label: "+91 98260 30453",          href: "tel:+919826030453"               },
      { label: "Indore, Madhya Pradesh",   href: "#"                               },
      { label: "20 June 2026",             href: "#details"                        },
    ],
  },
];

const SOCIALS = ["in", "f", "IG", "YT"];

export default function Footer() {
  return (
    <footer className="bg-[#0d1240] border-t border-[rgba(5,61,202,0.2)] pt-16 pb-7 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="ABC Summit 2026"
              width={200}
              height={54}
              className="h-[54px] w-auto object-contain mb-5"
            />
            <p className="text-[13px] text-white/38 leading-[1.75] italic">
              The Agrawal Business Community (ABC) Indore is a premier networking and growth
              ecosystem for Agrawal entrepreneurs and business leaders across India.
            </p>
            <div className="flex gap-2.5 mt-5">
              {SOCIALS.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-[34px] h-[34px] bg-[rgba(5,61,202,0.2)] border border-[rgba(5,61,202,0.3)] flex items-center justify-center font-sans text-[11px] font-bold text-white/50 hover:bg-[#053DCA] hover:text-white transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {NAV_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#E88F04] mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/38 italic hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-sans text-[11px] text-white/22">
            © 2026 Agrawal Business Community, Indore. All rights reserved.
          </p>
          <p className="font-sans text-[11px] text-[#E88F04] tracking-[0.15em] uppercase">
            Arth · Neeti · Dharma
          </p>
        </div>
      </div>
    </footer>
  );
}
