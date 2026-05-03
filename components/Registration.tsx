'use client'
import { useState } from 'react'
import styles from './Registration.module.css'

export default function Registration() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', mobile: '', email: '', company: '', industry: '', city: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section className={styles.section} id="register">
      <div className={styles.inner}>
        <div className={styles.urgency}>
          <span className={styles.dot} />
          Limited Seats Remaining — Applications Reviewed Weekly
        </div>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Apply for Your Seat</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Join the Most Powerful <em>Business Network of the Year</em>
        </h2>
        <p className={styles.subtext}>Entry is curated. Submit your application and our team reviews your profile within 5 working days.</p>

        <div className={styles.form}>
          <div className={styles.seatsWarn}>
            <span>⚡</span>
            <div>
              <div>78% of seats have been reserved. Only a limited number remain.</div>
              <div className={styles.seatsBar} />
            </div>
          </div>

          {submitted ? (
            <div className={styles.success}>✓ Application Submitted — We&apos;ll be in touch within 5 business days.</div>
          ) : (
            <>
              <div className={styles.grid}>
                <div className={styles.group}>
                  <label>Full Name *</label>
                  <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} />
                </div>
                <div className={styles.group}>
                  <label>Mobile Number *</label>
                  <input name="mobile" type="tel" placeholder="+91 XXXXX XXXXX" value={form.mobile} onChange={handleChange} />
                </div>
                <div className={styles.group}>
                  <label>Email Address *</label>
                  <input name="email" type="email" placeholder="business@email.com" value={form.email} onChange={handleChange} />
                </div>
                <div className={styles.group}>
                  <label>Business / Company Name *</label>
                  <input name="company" type="text" placeholder="Your company name" value={form.company} onChange={handleChange} />
                </div>
                <div className={styles.group}>
                  <label>Industry *</label>
                  <select name="industry" value={form.industry} onChange={handleChange}>
                    <option value="">Select your industry</option>
                    {['Manufacturing', 'Real Estate', 'Finance & Investment', 'Retail & FMCG', 'Technology', 'Healthcare', 'Legal / CA / Consulting', 'Other'].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.group}>
                  <label>City *</label>
                  <input name="city" type="text" placeholder="Your city" value={form.city} onChange={handleChange} />
                </div>
                <div className={`${styles.group} ${styles.full}`}>
                  <label>Why do you want to attend? (Optional)</label>
                  <textarea name="message" placeholder="Tell us briefly about your business goals..." value={form.message} onChange={handleChange} rows={3} />
                </div>
              </div>
              <button className={styles.submit} onClick={() => setSubmitted(true)}>
                Submit My Application →
              </button>
              <p className={styles.note}>All applications are reviewed. Confirmation sent within 5 working days. No spam, ever.</p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
