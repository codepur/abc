"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const INDUSTRIES = [
  "Manufacturing", "Real Estate", "Finance & Investment",
  "Retail & FMCG", "Technology", "Healthcare",
  "Legal / CA / Consulting", "Other",
];

const FIELDS = [
  { label: "First Name",              name: "first_name",  type: "text",  placeholder: "Your first name",     span: 1 },
  { label: "Last Name",               name: "last_name",   type: "text",  placeholder: "Your last name",      span: 1 },
  { label: "Gotra",                   name: "gotra",       type: "text",  placeholder: "Your gotra",          span: 1 },
  { label: "Mobile Number",           name: "mobile",      type: "tel",   placeholder: "+91 XXXXX XXXXX",     span: 1 },
  { label: "Email Address",           name: "email",       type: "email", placeholder: "you@example.com",     span: 2 },
  { label: "Business / Company Name", name: "company",     type: "text",  placeholder: "Your company name",   span: 1 },
  { label: "Designation",             name: "designation", type: "text",  placeholder: "CEO / Founder / MD",  span: 1 },
  { label: "City",                    name: "city",        type: "text",  placeholder: "Your city",           span: 1 },
  { label: "Referred By (Optional)",  name: "referral",    type: "text",  placeholder: "Name of referrer",    span: 1 },
];

const inputCls = "w-full bg-white border border-[rgba(5,61,202,0.14)] rounded-xl px-4 py-3.5 text-[14px] text-[#0d1240] placeholder-gray-400 outline-none focus:border-[#053DCA] focus:ring-2 focus:ring-[rgba(5,61,202,0.08)] transition-all duration-200";
const labelCls = "block font-sans text-[11px] tracking-[0.12em] uppercase text-[#6b7280] font-semibold mb-2";

export default function Registration() {
  const [submitted, setSubmitted] = useState(false);
  const [existingMember, setExistingMember] = useState("");

  return (
    <section
      className="py-24 px-6 md:px-16 lg:px-24 bg-[#f7f9fe] relative overflow-hidden"
      id="register"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#053DCA] rounded-full opacity-[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E88F04] rounded-full opacity-[0.04] blur-3xl pointer-events-none" />

      <div className="relative max-w-[860px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#fdf4e3] border border-[rgba(232,143,4,0.35)] rounded-full px-5 py-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E88F04] animate-pulse" />
            <span className="font-sans text-[11px] tracking-[0.16em] uppercase text-[#E88F04] font-bold">
              Limited Seats — Apply Now
            </span>
          </div>

          <h2 className="text-[clamp(26px,3.5vw,44px)] font-bold text-[#0d1240] leading-tight mb-4">
            Apply for Your Seat
          </h2>
          <p className="text-[15px] text-gray-500 max-w-[500px] mx-auto leading-relaxed">
            Entry is curated. Submit your application and our team reviews your profile within 5 working days.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl border border-[rgba(5,61,202,0.08)] shadow-[0_24px_80px_rgba(5,61,202,0.08)] p-8 md:p-12"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center mx-auto mb-5 text-2xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-[#0d1240] mb-2">Application Submitted!</h3>
              <p className="text-gray-500 text-[15px]">We&rsquo;ll review your profile and get back within 5 working days.</p>
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {FIELDS.map(({ label, name, type, placeholder, span }) => (
                  <div key={name} className={span === 2 ? "md:col-span-2" : ""}>
                    <label className={labelCls}>{label}</label>
                    <input type={type} name={name} placeholder={placeholder} className={inputCls} />
                  </div>
                ))}

                {/* Existing ABC Member */}
                <div>
                  <label className={labelCls}>Are you an existing ABC Member?</label>
                  <div className="flex gap-3">
                    {["Yes", "No"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setExistingMember(opt)}
                        className={`flex-1 py-3.5 rounded-xl text-[13px] font-semibold border transition-all duration-200 ${
                          existingMember === opt
                            ? "bg-[#053DCA] text-white border-[#053DCA]"
                            : "bg-white text-gray-500 border-[rgba(5,61,202,0.14)] hover:border-[#053DCA]"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Industry */}
                <div>
                  <label className={labelCls}>Industry</label>
                  <select className={inputCls}>
                    <option value="">Select your industry</option>
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                {/* GSTIN */}
                <div className="md:col-span-2">
                  <label className={labelCls}>GSTIN (Optional)</label>
                  <input type="text" name="gstin" placeholder="Your GSTIN number" className={inputCls} />
                </div>
              </div>

              {/* Seat progress bar */}
              <div className="mt-8 bg-[#fdf4e3] rounded-2xl px-6 py-4 flex items-center gap-4">
                <span className="text-[#E88F04] text-xl shrink-0">⚡</span>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-[12px] text-[#8a5a00] font-semibold mb-1.5">78% of seats reserved</p>
                  <div className="h-1.5 bg-[rgba(232,143,4,0.2)] rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-[#E88F04] rounded-full" />
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(true)}
                className="w-full mt-6 bg-[#053DCA] hover:bg-[#0432aa] text-white font-bold text-[15px] py-4 rounded-2xl transition-all duration-200 hover:shadow-[0_8px_30px_rgba(5,61,202,0.3)] active:scale-[0.99]"
              >
                Submit My Application →
              </button>

              <p className="font-sans text-[11px] text-gray-400 text-center mt-4">
                All applications are reviewed manually. Confirmation sent within 5 working days. No spam, ever.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

