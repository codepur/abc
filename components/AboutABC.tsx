import Image from 'next/image'
import styles from './AboutABC.module.css'

const listItems = [
  'Designed as a disciplined ecosystem — not just a networking forum',
  'Consistency, credibility, and intent drive meaningful business outcomes',
  'Structured Sangh model translating values into consistent engagement',
  'Expanding across key cities with online membership program',
  'Offline Sangh-based engagements being established in new locations',
]

const miniStats = [
  { num: '500+', label: 'Members' },
  { num: '5+',   label: 'Years' },
  { num: '2',    label: 'Summits' },
]

export default function AboutABC() {
  return (
    <section className={styles.section} id="about">
      <div className="section-inner">
        <div className={styles.grid}>
          <div>
            <div className="section-eyebrow">About Abc</div>
            <h2 className="section-title">The Agrawal <em>Business Community</em></h2>
            <p className="section-desc">
              ABC is a structured business community that brings together Agrawal entrepreneurs
              to build trusted relationships, exchange opportunities, and grow through collaboration.
            </p>
            <div className={styles.visionBox}>
              <p>
                Rooted in the Agrawal ethos — "Ek Eent aur Ek Rupiya" (collective contribution)
                and "Kar Bhala, So Ho Bhala" (ethical, value-led conduct) — ABC builds a culture
                where shared effort creates shared growth.
              </p>
            </div>
            <ul className={styles.list}>
              {listItems.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.visual}>
            <div className={styles.bgText}>ABC</div>
            <div className={styles.visualInner}>
              <Image src="/logo.png" alt="ABC Summit" width={200} height={88} className={styles.vizLogo} />
              <div className={styles.miniGrid}>
                {miniStats.map(s => (
                  <div key={s.label} className={styles.miniStat}>
                    <div className={styles.miniNum}>{s.num}</div>
                    <div className={styles.miniLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
