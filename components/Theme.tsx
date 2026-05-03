// Theme.tsx
import styles from './Theme.module.css'

const pillars = [
  {
    key: 'arth', name: 'ARTH', subtitle: '(Wealth & Growth)', color: '#053DCA',
    desc: 'Building scalable, profitable businesses. Creating financial strength and long-term value. Practical approaches to improving profitability.',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className={styles.icon}>
        <polygon points="32,4 60,58 4,58" stroke="#053DCA" strokeWidth="2.5"/>
        <polygon points="32,14 52,52 12,52" stroke="#053DCA" strokeWidth="1.5" opacity=".5"/>
        <polygon points="32,24 44,48 20,48" stroke="#053DCA" strokeWidth="1" opacity=".25"/>
      </svg>
    )
  },
  {
    key: 'neeti', name: 'NEETI', subtitle: '(Strategy & Leadership)', color: '#E88F04',
    desc: 'Sharp, informed business decisions. Applying structured thinking and leadership principles. Strategies that work in the real world.',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className={styles.icon}>
        <circle cx="32" cy="32" r="28" stroke="#E88F04" strokeWidth="2.5"/>
        <circle cx="32" cy="32" r="21" stroke="#E88F04" strokeWidth="1.5" opacity=".6"/>
        <circle cx="32" cy="32" r="14" stroke="#E88F04" strokeWidth="1" opacity=".4"/>
        <circle cx="32" cy="32" r="3" fill="#E88F04"/>
      </svg>
    )
  },
  {
    key: 'dharma', name: 'DHARMA', subtitle: '(Ethics & Purpose)', color: '#444343',
    desc: 'Doing business with integrity and responsibility. Building trust-driven relationships. Creating impact that goes beyond profits.',
    svg: (
      <svg viewBox="0 0 64 64" fill="none" className={styles.icon}>
        {[[26,6],[40,6],[12,10],[54,10],[7,24],[21,20],[35,18],[49,20],[16,38],[30,34],[44,38],[25,52],[39,52]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#444343" opacity=".55"/>
        ))}
      </svg>
    )
  },
]

export default function Theme() {
  return (
    <section className={styles.section} id="theme">
      <div className="section-inner">
        <div className="section-eyebrow">Summit Theme 2026</div>
        <h2 className="section-title">The New Shift — <em>Three Pillars of Modern Business</em></h2>
        <p className="section-desc">A balanced framework for building businesses that grow with purpose, lead with strategy, and endure with integrity.</p>
        <div className={styles.cards}>
          {pillars.map(p => (
            <div key={p.key} className={styles.card} style={{'--accent': p.color} as React.CSSProperties}>
              {p.svg}
              <div className={styles.name} style={{color: p.color}}>{p.name}</div>
              <div className={styles.subtitle}>{p.subtitle}</div>
              <div className={styles.desc}>{p.desc}</div>
            </div>
          ))}
        </div>
        <div className={styles.banner}>
          <p>What this means for attendees: <strong>A balanced approach to business where growth, strategy, and ethics come together to create sustainable, generational success.</strong></p>
        </div>
      </div>
    </section>
  )
}
