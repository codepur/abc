// FinalCTA.tsx
import Link from 'next/link'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,.5)', justifyContent: 'center' }}>
          One Day. One Room. Real Outcomes.
        </div>
        <h2 className={styles.h2}>Join the Most Powerful<br />Business Network of the Year.</h2>
        <p className={styles.p}>Seats are limited. Entry is curated. The room is extraordinary.<br />The only question is — will you be in it?</p>
        <Link href="#register" className="btn-white">Apply for Your Seat Now →</Link>
      </div>
    </section>
  )
}
