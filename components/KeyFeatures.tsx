// KeyFeatures.tsx
import styles from './KeyFeatures.module.css'

const features = [
  { title: 'Structured Networking', desc: 'Connect with relevant entrepreneurs in a focused, business-driven environment with measurable outcomes.' },
  { title: 'Mentorship & Guidance', desc: 'Learn from experienced leaders through practical insights and shared real-world experience.' },
  { title: 'Learning & Engagement', desc: 'Participate in discussions and sessions that sharpen business thinking and leadership frameworks.' },
  { title: 'Business Support System', desc: 'Access a network that enables ideas, opportunities, and collaboration across industries.' },
  { title: 'Long-Term Ecosystem', desc: 'Built on trust, consistency, and ethical business practices. A community that outlasts any single event.' },
  { title: 'City-Wide Expansion', desc: 'ABC is expanding beyond Indore with structured online membership and new Sangh-based locations.' },
]

export default function KeyFeatures() {
  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className="section-eyebrow">What ABC Offers</div>
        <h2 className="section-title">Key Features of <em>the ABC Ecosystem</em></h2>
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={f.title} className={styles.box}>
              <div className={styles.num}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.title}>{f.title}</div>
              <div className={styles.desc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
