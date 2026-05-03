import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

const TABLE_ROWS = [
  { label: "Title Mention",                  powered: "Powered By",        co: "Co-Powered By",     support: "Supported By"         },
  { label: "Logo on Stage Backdrop",          powered: "Top-tier",          co: "Secondary",         support: "Supporting Tier"      },
  { label: "Logo on Digital & Print",         powered: "✓ Included",        co: "✓ Included",        support: "Limited"              },
  { label: "Logo on Website & Tickets",       powered: "✓ Included",        co: "✓ Included",        support: "✓ Included"           },
  { label: "Podcast Feature",                 powered: "✓ Yes",             co: "✓ Yes",             support: "Shared"               },
  { label: "Speaking Opportunity",            powered: "Panel participation",co: "—",                 support: "—"                    },
  { label: "AV / Brand Film Slot",            powered: "Dedicated 15 Sec",  co: "Shared 10 Sec",     support: "Shared 10 Sec"        },
  { label: "Stall / Exhibition Space",        powered: "Premium stall",     co: "Standard stall",    support: "Standard stall"       },
  { label: "Delegate Passes",                 powered: "6 Passes",          co: "4 Passes",          support: "2 Passes"             },
  { label: "Social Media Amplification",      powered: "Featured campaigns", co: "Co-branded posts", support: "Group mentions"       },
  { label: "Data Access (per compliance)",    powered: "✓ Included",        co: "✓ Included",        support: "✓ Included"           },
  { label: "ABC Meeting Invitations",         powered: "3 Sanghs",          co: "2 Sanghs",          support: "1 Sangh"              },
];

export default function Sponsorship() {
  return (
    <section className="bg-white py-24 px-6 md:px-12" id="sponsor">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          eyebrow="Partner with Us"
          title={<>Sponsor the ABC Summit 2026 —<br /><em className="not-italic text-[#053DCA]">Reach 350+ Decision-Makers</em></>}
          description="Showcase your brand to 350+ prominent Agrawal business families, CAs, doctors, lawyers, and senior professionals — all in one curated room."
        />

        {/* Tier slots */}
        <div className="mt-12 space-y-8">
          {[
            { label: "Powered By · 1 Slot",      slots: ["Title Sponsor\nPremium stall · 6 passes · Panel opportunity"], size: "large" },
            { label: "Co-Powered By · 2 Slots",  slots: ["Co-Powered\nStandard stall · 4 passes", "Co-Powered\nStandard stall · 4 passes"], size: "medium" },
            { label: "Supporting Partner · 3 Slots", slots: ["Supporting", "Supporting", "Supporting"], size: "small" },
          ].map(({ label, slots, size }) => (
            <div key={label}>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#666]">{label}</span>
                <div className="flex-1 h-px bg-[rgba(5,61,202,0.1)]" />
              </div>
              <div className="flex gap-4 flex-wrap">
                {slots.map((slot, i) => (
                  <div
                    key={i}
                    className={`bg-[#f7f9fe] border border-[rgba(5,61,202,0.12)] flex items-center justify-center text-center hover:border-[#E88F04] transition-colors cursor-pointer font-sans text-[10px] tracking-[0.1em] uppercase text-[rgba(0,0,0,0.2)] hover:text-[#666] whitespace-pre-line leading-relaxed
                      ${size === "large" ? "min-w-[220px] min-h-[80px] px-7 py-5" : ""}
                      ${size === "medium" ? "min-w-[170px] min-h-[68px] px-5 py-4" : ""}
                      ${size === "small" ? "min-w-[130px] min-h-[56px] px-4 py-3" : ""}
                    `}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Entitlements table */}
        <div className="mt-12 overflow-x-auto border border-[rgba(5,61,202,0.1)]">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-[#0d1240] text-white font-sans text-[12px] tracking-[0.1em] uppercase p-4 text-left">
                  Entitlement
                </th>
                <th className="bg-[#053DCA] text-white font-sans text-[12px] tracking-[0.1em] uppercase p-4 text-left">
                  Powered (1)
                </th>
                <th className="bg-[#053DCA] text-white font-sans text-[12px] tracking-[0.1em] uppercase p-4 text-left">
                  Co-Powered (2)
                </th>
                <th className="bg-[#053DCA] text-white font-sans text-[12px] tracking-[0.1em] uppercase p-4 text-left">
                  Supporting (3)
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, i) => (
                <tr key={row.label} className={`border-b border-[rgba(5,61,202,0.08)] hover:bg-white ${i % 2 === 0 ? "bg-[#f7f9fe]" : "bg-white"}`}>
                  <td className="p-3.5 font-sans text-[13px] font-semibold text-[#0d1240]">{row.label}</td>
                  <td className={`p-3.5 text-[13px] italic ${row.powered.startsWith("✓") ? "text-[#E88F04] font-sans not-italic font-bold" : "text-[#444343]"}`}>{row.powered}</td>
                  <td className={`p-3.5 text-[13px] italic ${row.co.startsWith("✓") ? "text-[#E88F04] font-sans not-italic font-bold" : "text-[#444343]"}`}>{row.co}</td>
                  <td className={`p-3.5 text-[13px] italic ${row.support.startsWith("✓") ? "text-[#E88F04] font-sans not-italic font-bold" : "text-[#444343]"}`}>{row.support}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contact bar */}
        <div className="mt-6 bg-[#f0f4fd] border border-[rgba(5,61,202,0.12)] p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <p className="font-sans text-[11px] font-bold tracking-[0.1em] uppercase text-[#053DCA] mb-1">
              Sponsorship Enquiries
            </p>
            <p className="text-[14px] text-[#444343] italic">
              Abhishek Agrawal:{" "}
              <strong className="not-italic text-[#0d1240]">+91 99779 16622</strong>
              {" "}&nbsp;|&nbsp;{" "}
              Anand Seksaria:{" "}
              <strong className="not-italic text-[#0d1240]">+91 98260 30453</strong>
            </p>
          </div>
          <Link href="mailto:sponsor@theabcsummit.com">
            <Button variant="primary" size="md" className="clip-skew whitespace-nowrap">
              sponsor@theabcsummit.com
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
