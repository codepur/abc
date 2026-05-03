import styles from './Performance.module.css'

const boxes = [
  { num: '1,818', label: 'Referrals Passed' },
  { num: '391',   label: 'Testimonials Given' },
  { num: '2,627', label: 'Personal Meetings' },
]

export default function Performance() {
  return (
    <div className={styles.wrap} id="performance">
      <div className={styles.inner}>
        <div className="section-eyebrow">Proven Track Record</div>
        <h2 className="section-title">ABC Community <em>Performance Numbers</em></h2>
        <p className="section-desc">Cumulative data across all Sanghs of ABC — updated till March 2026.</p>
        <div className={styles.grid}>
          {boxes.map(b => (
            <div key={b.label} className={styles.box}>
              <div className={styles.num}>{b.num}</div>
              <div className={styles.label}>{b.label}</div>
            </div>
          ))}
          <div className={styles.bigBox}>
            <div className={styles.bigLabel}>Business Closed Through Passing of Referrals</div>
            <div className={styles.bigNum}>
              ₹7,44,86,974/- <span>↑ 10%</span>
            </div>
            <div className={styles.bigSub}>Growth from previous month</div>
          </div>
        </div>
      </div>
    </div>
  )
}
