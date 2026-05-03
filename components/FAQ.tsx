'use client'
import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  { q: 'Who can attend the ABC Summit 2026?', a: 'The summit is open to Agrawal community entrepreneurs, business owners (SME to large enterprise), HNI investors, and senior professionals such as CAs, lawyers, and consultants. Entry is curated — every applicant is reviewed by the ABC team.' },
  { q: 'Is there a registration fee?', a: 'Yes. The ABC Summit 2026 is a premium, paid event. Ticket pricing is shared upon application approval. The fee reflects the exclusivity and quality of the experience.' },
  { q: 'How does the selection process work?', a: 'Submit your application above. Our team reviews each profile within 5 business days. Approved applicants receive a confirmation email with payment and joining details. Not everyone who applies gets in.' },
  { q: 'Do I need to be from the Agrawal community?', a: 'The event is organised by and primarily for the Agrawal Business Community. However, select professionals outside the community may be invited at the discretion of the organisers.' },
  { q: 'Where exactly is the venue?', a: 'The ABC Summit 2026 will be held at Sheraton Grand, Indore, Madhya Pradesh. Exact address and accommodation details are shared with confirmed attendees.' },
  { q: 'How can I become a sponsor or partner?', a: 'Contact Abhishek Agrawal at +91 99779 16622 or Anand Seksaria at +91 98260 30453. You can also email sponsor@theabcsummit.com. Sponsorship tiers: Powered By, Co-Powered By, and Supporting Partner.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className={styles.section} id="faq">
      <div className="section-inner">
        <div className="section-eyebrow">Common Questions</div>
        <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
        <div className={styles.grid}>
          {faqs.map((f, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.openItem : ''}`} onClick={() => setOpen(open === i ? null : i)}>
              <div className={styles.q}>
                {f.q}
                <span className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>+</span>
              </div>
              {open === i && <div className={styles.a}>{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
