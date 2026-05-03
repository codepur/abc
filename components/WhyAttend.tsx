import styles from './WhyAttend.module.css'

const reasons = [
  { num: '01', title: 'Wealth Creation — Arth', desc: 'Practical approaches to scaling businesses, improving profitability, and building long-term financial strength through proven frameworks.' },
  { num: '02', title: 'Strategic Thinking — Neeti', desc: 'Sharper business decisions, structured thinking, leadership frameworks, and real-world strategy from Chanakya to corporate application.' },
  { num: '03', title: 'Values in Business — Dharma', desc: 'How ethical conduct, trust, and intent directly influence business growth and long-term credibility — through storytelling and narrative.' },
  { num: '04', title: 'Meaningful Networking', desc: 'Connect with 350+ serious Agrawal entrepreneurs, business leaders, and decision-makers. No spectators — only builders.' },
  { num: '05', title: 'Exclusive Venue', desc: 'Sheraton Grand, Indore — a setting that signals seriousness. The environment shapes the quality of every conversation.' },
  { num: '06', title: 'Community Access', desc: 'Entry to the ABC ecosystem — year-round deal sharing, mentorship circles, referrals, and introductions. The summit is just the beginning.' },
]

export default function WhyAttend() {
  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className="section-eyebrow">What You Will Gain</div>
        <h2 className="section-title">Six Reasons You Cannot <em>Afford to Miss This</em></h2>
        <div className={styles.grid}>
          {reasons.map(r => (
            <div key={r.num} className={styles.card}>
              <div className={styles.num}>{r.num}</div>
              <div className={styles.title}>{r.title}</div>
              <div className={styles.desc}>{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
