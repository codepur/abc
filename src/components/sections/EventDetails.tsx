import SectionHeader from "./SectionHeader";

const DETAILS = [
  { label: "Date",         value: "20 June 2026 (Saturday)"      },
  { label: "Venue",        value: "Sheraton Grand, Indore"        },
  { label: "Format",       value: "Full-Day Summit"               },
  { label: "Audience",     value: "350+ Agrawal Entrepreneurs"    },
  { label: "Entry",        value: "Application-Based Only"        },
  { label: "City",         value: "Indore, Madhya Pradesh"        },
  { label: "Organised by", value: "Agrawal Business Community"    },
];

const AGENDA = [
  { time: "09:00 AM", event: "Registration & Welcome Networking"                           },
  { time: "10:00 AM", event: "Opening Ceremony & Inaugural Address"                        },
  { time: "10:45 AM", event: "Keynote: Dr. Radha Krishnan Pillai — Chanakya in Practice"  },
  { time: "12:00 PM", event: "Panel Discussion: Top Agrawal Entrepreneurs, Live Q&A"       },
  { time: "01:30 PM", event: "Business Lunch & Deal Room Networking"                       },
  { time: "03:00 PM", event: "Keynote: Atul Satya Koushik — Storytelling & Brand Influence"},
  { time: "04:30 PM", event: "Fireside Chats & Community Awards"                           },
  { time: "06:00 PM", event: "High-Tea Networking & Closing"                               },
];

export default function EventDetails() {
  return (
    <section className="bg-white py-24 px-6 md:px-12" id="details">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          eyebrow="Event Information"
          title={<>Mark Your Calendar —<br /><em className="not-italic text-[#053DCA]">20 June 2026</em></>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Event details */}
          <div className="bg-[#f7f9fe] border border-[rgba(5,61,202,0.1)] p-8">
            <h3 className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#E88F04] mb-5 pb-3 border-b border-[rgba(5,61,202,0.1)]">
              Event Details
            </h3>
            {DETAILS.map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between items-baseline py-2.5 border-b border-[rgba(5,61,202,0.07)] last:border-0 text-sm"
              >
                <span className="text-[#5a5a6e] italic">{label}</span>
                <span className="font-sans text-[13px] font-bold text-[#0d1240] text-right">{value}</span>
              </div>
            ))}
          </div>

          {/* Agenda */}
          <div className="bg-[#f7f9fe] border border-[rgba(5,61,202,0.1)] p-8">
            <h3 className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#E88F04] mb-5 pb-3 border-b border-[rgba(5,61,202,0.1)]">
              Day at a Glance
            </h3>
            <ul>
              {AGENDA.map(({ time, event }) => (
                <li
                  key={time}
                  className="flex gap-4 py-3 border-b border-[rgba(5,61,202,0.07)] last:border-0 items-start"
                >
                  <span className="font-sans text-[11px] text-[#E88F04] font-bold tracking-[0.04em] min-w-[74px] mt-0.5">
                    {time}
                  </span>
                  <span className="text-[13px] text-[#444343] italic leading-snug">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
