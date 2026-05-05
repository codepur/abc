"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

const INDUSTRIES = [
  "Manufacturing", "Real Estate", "Finance & Investment",
  "Retail & FMCG", "Technology", "Healthcare",
  "Legal / CA / Consulting", "Other",
];

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#f0f4fd] to-[#e8effe] relative overflow-hidden"
      id="register"
    >
      <div className="w-full relative text-center">
        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 bg-[#fdf4e3] border border-[rgba(232,143,4,0.3)] px-4 py-1.5 mb-6 font-sans text-[11px] tracking-[0.14em] uppercase text-[#E88F04]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E88F04] animate-pulse-dot" />
          Limited Seats Remaining — Applications Reviewed Weekly
        </div>

        <SectionHeader
          eyebrow="Apply for Your Seat"
          title={<>Join the Most Powerful<br /><em className=" text-[#053DCA]">Business Network of the Year</em></>}
          description="Entry is curated. Submit your application and our team reviews your profile within 5 working days."
          center
        />

        {/* Form card */}
        <div className="bg-white border border-[rgba(5,61,202,0.15)] shadow-[0_24px_64px_rgba(5,61,202,0.09)] p-10 mt-10 text-left">
          {/* Seats warning */}
          <div className="bg-[#fdf4e3] border border-[rgba(232,143,4,0.25)] p-3 flex items-start gap-3 mb-6 text-[12px] font-sans text-[#8a5a00]">
            <span>⚡</span>
            <div>
              <p>78% of seats have been reserved. Only a limited number remain.</p>
              <div className="h-1 bg-[rgba(232,143,4,0.2)] mt-2 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[78%] bg-[#E88F04]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Full Name *",           type: "text",  placeholder: "Your full name"         },
              { label: "Mobile Number *",        type: "tel",   placeholder: "+91 XXXXX XXXXX"        },
              { label: "Email Address *",        type: "email", placeholder: "business@email.com"     },
              { label: "Business / Company Name *", type: "text", placeholder: "Your company name"   },
            ].map(({ label, type, placeholder }) => (
              <div key={label} className="flex flex-col gap-1.5">
                <label className="font-sans text-[10px] tracking-[0.12em] uppercase text-[#5a5a6e]">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="bg-[#f7f9fe] border border-[rgba(5,61,202,0.18)] text-[#0d1240] px-4 py-3 text-sm  outline-none focus:border-[#E88F04] focus:bg-white transition-colors w-full"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-[10px] tracking-[0.12em] uppercase text-[#5a5a6e]">
                Industry *
              </label>
              <select className="bg-[#f7f9fe] border border-[rgba(5,61,202,0.18)] text-[#666] px-4 py-3 text-sm  outline-none focus:border-[#E88F04] focus:bg-white transition-colors w-full">
                <option value="">Select your industry</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-[10px] tracking-[0.12em] uppercase text-[#5a5a6e]">
                City *
              </label>
              <input
                type="text"
                placeholder="Your city"
                className="bg-[#f7f9fe] border border-[rgba(5,61,202,0.18)] text-[#0d1240] px-4 py-3 text-sm  outline-none focus:border-[#E88F04] focus:bg-white transition-colors w-full"
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label className="font-sans text-[10px] tracking-[0.12em] uppercase text-[#5a5a6e]">
                Why do you want to attend? (Optional)
              </label>
              <textarea
                placeholder="Tell us briefly about your business goals for this summit..."
                rows={3}
                className="bg-[#f7f9fe] border border-[rgba(5,61,202,0.18)] text-[#0d1240] px-4 py-3 text-sm  outline-none focus:border-[#E88F04] focus:bg-white transition-colors w-full resize-none"
              />
            </div>
          </div>

          <Button
            variant={submitted ? "ghost" : "primary"}
            size="xl"
            className={`w-full mt-6 ${submitted ? "!bg-green-700 text-white !clip-path-none cursor-default" : "clip-skew-lg"}`}
            onClick={() => setSubmitted(true)}
            disabled={submitted}
          >
            {submitted
              ? "✓ Application Submitted — We'll be in touch within 5 days"
              : "Submit My Application →"}
          </Button>

          <p className="font-sans text-[11px] text-[#5a5a6e] text-center mt-4">
            All applications are reviewed. Confirmation sent within 5 working days. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
