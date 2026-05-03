import styles from './Highlights.module.css'

const photos = [
  { num: '01', label: 'Summit Hall · 250+ Present', large: true },
  { num: '02', label: 'Dr. Samish Dalal · Keynote', large: false },
  { num: '03', label: 'Audience Engagement', large: false },
  { num: '04', label: 'Interactive Session', large: false },
  { num: '05', label: 'Networking & Connect', large: false },
  { num: '06', label: 'Group Photo · Community', large: false },
]

const partners2025 = ['Sunil Agrawal & Associates', 'Anant Saria', 'Airen Group']

export default function Highlights() {
  return (
    <section className={styles.section} id="highlights">
      <div className="section-inner">
        <div className="section-eyebrow">Summit Legacy</div>
        <h2 className="section-title">From 2025 to 2026 — <em>The Summit Evolution</em></h2>

        <div className={styles.intro}>
          <div>
            <p className="section-desc">The ABC Summit 2025 focused on Family Business Management, bringing together 250+ Agrawal business leaders at Brilliant Convention Centre. Speaker: Dr. Samish Dalal.</p>
            <div className={styles.evoRow}>
              <div className={`${styles.evoBox} ${styles.past}`}>
                <div className={styles.evoLabel}>ABC Summit 2025 — The Beginning</div>
                <ul className={styles.evoList}>
                  <li>150+ curated Agrawal entrepreneurs</li>
                  <li>Family Business Management</li>
                  <li>Dr. Samish Dalal as Speaker</li>
                  <li>Brilliant Convention Centre</li>
                </ul>
              </div>
              <div className={`${styles.evoBox} ${styles.present}`}>
                <div className={styles.evoLabel}>ABC Summit 2026 — The Expansion</div>
                <ul className={styles.evoList}>
                  <li>350+ growth-focused entrepreneurs</li>
                  <li>Arth · Neeti · Dharma theme</li>
                  <li>Dr. Radha Krishnan Pillai & Atul Satya Koushik</li>
                  <li>Sheraton Grand, Indore</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.partnerBox}>
            <div className={styles.partnerTitle}>Partners at ABC Summit 2025</div>
            {partners2025.map(p => (
              <div key={p} className={styles.partnerSlot}><div className={styles.partnerName}>{p}</div></div>
            ))}
          </div>
        </div>

        <div className="section-eyebrow" style={{marginTop: '48px'}}>Glimpse of ABC Summit 2025</div>
        <div className={styles.grid}>
          {photos.map(p => (
            <div key={p.num} className={`${styles.item} ${p.large ? styles.large : ''}`}>
              <div className={styles.placeholder}>
                <div className={styles.hlNum}>{p.num}</div>
                <p>{p.label}</p>
              </div>
              <div className={styles.overlay}><span>View ›</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
