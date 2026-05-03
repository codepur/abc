import styles from './Speakers.module.css'

const speakers = [
  {
    initials: 'RKP',
    badge: 'Authority on Chanakya, Strategy & Leadership',
    name: 'Dr. Radha Krishnan Pillai',
    title: 'Founder, Chanakya International Institute of Leadership Studies (CIILS) · National Bestselling Author · Academic Association with IIMs',
    bullets: [
      'Globally recognised expert on Chanakya\'s philosophy applied to modern business',
      'Author of "Corporate Chanakya" & "Chanakya\'s 7 Secrets of Leadership"',
      'Practical frameworks that help entrepreneurs think clearly and act decisively',
    ],
    tags: [{ label: 'Arth', cls: styles.tagArth }, { label: 'Neeti', cls: styles.tagNeeti }],
  },
  {
    initials: 'ASK',
    badge: 'Filmmaker, Storyteller & Narrative Strategist',
    name: 'Atul Satya Koushik',
    title: 'Indian Theatre Director & Filmmaker · Known for Chakravyuh, Ishwar, Rangrez · Strategic Storytelling Expert',
    bullets: [
      'Unique perspective on how narratives shape brands and drive business impact',
      'Positions storytelling not just as creativity, but as strategic business growth',
      'Communicating value with clarity, audience psychology, and influence',
    ],
    tags: [{ label: 'Dharma', cls: styles.tagDharma }],
  },
]

export default function Speakers() {
  return (
    <section className={styles.section} id="speakers">
      <div className="section-inner">
        <div className="section-eyebrow">Confirmed Speakers</div>
        <h2 className="section-title">Voices That Have <em>Actually Built Something</em></h2>
        <p className="section-desc">Two of India&apos;s most compelling business minds — deeply aligned with Arth · Neeti · Dharma.</p>
        <div className={styles.grid}>
          {speakers.map(s => (
            <div key={s.name} className={styles.card}>
              <div className={styles.imgWrap}>
                <div className={styles.circle} />
                <div className={styles.initials}>{s.initials}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.badge}>{s.badge}</div>
                <div className={styles.name}>{s.name}</div>
                <div className={styles.title}>{s.title}</div>
                <ul className={styles.bullets}>
                  {s.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <div className={styles.alignment}>
                  <div className={styles.alignLabel}>Alignment with Summit 2026</div>
                  <div className={styles.tags}>
                    {s.tags.map(t => <span key={t.label} className={`${styles.tag} ${t.cls}`}>{t.label}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.more}>
            ✦ &nbsp; Panel Discussion with Top Agrawal Entrepreneurs · More announcements coming soon
          </div>
        </div>
      </div>
    </section>
  )
}
