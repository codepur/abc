import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "./SectionHeader";

const FAQS = [
  {
    q: "Who can attend the ABC Summit 2026?",
    a: "The summit is open to Agrawal community entrepreneurs, business owners (SME to large enterprise), HNI investors, and senior professionals such as CAs, lawyers, and consultants. Entry is curated — every applicant is reviewed by the ABC team.",
  },
  {
    q: "Is there a registration fee?",
    a: "Yes. The ABC Summit 2026 is a premium, paid event. Ticket pricing is shared upon application approval. The fee reflects the exclusivity and quality of the experience.",
  },
  {
    q: "How does the selection process work?",
    a: "Submit your application above. Our team reviews each profile within 5 business days. Approved applicants receive a confirmation email with payment and joining details. Not everyone who applies gets in.",
  },
  {
    q: "Do I need to be from the Agrawal community?",
    a: "The event is organised by and primarily for the Agrawal Business Community. However, select professionals outside the community may be invited at the discretion of the organisers.",
  },
  {
    q: "Where exactly is the venue?",
    a: "The ABC Summit 2026 will be held at Sheraton Grand, Indore, Madhya Pradesh. Exact address and accommodation details are shared with confirmed attendees.",
  },
  {
    q: "How can I become a sponsor or partner?",
    a: "Contact Abhishek Agrawal at +91 99779 16622 or Anand Seksaria at +91 98260 30453. You can also email sponsor@theabcsummit.com. Sponsorship tiers: Powered By, Co-Powered By, and Supporting Partner.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24 px-6 md:px-12" id="faq">
      <div className="max-w-[1100px] mx-auto">
        <SectionHeader
          eyebrow="Common Questions"
          title={<>Frequently Asked<br /><em className="not-italic text-[#053DCA]">Questions</em></>}
        />

        <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-12">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
