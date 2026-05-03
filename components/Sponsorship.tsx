import Link from 'next/link'
import styles from './Sponsorship.module.css'

const tableRows = [
  { item: 'Title Mention', powered: 'Powered By', copowered: 'Co-Powered By', supporting: 'Supported By' },
  { item: 'Logo on Stage Backdrop', powered: 'Top-tier', copowered: 'Secondary', supporting: 'Supporting Tier', blueP: true },
  { item: 'Logo on Digital & Print', powered: '✓ Included', copowered: '✓ Included', supporting: 'Limited', goldP: true, goldC: true },
  { item: 'Logo on Website & Tickets', powered: '✓ Included', copowered: '✓ Included', supporting: '✓ Included', goldP: true, goldC: true, goldS: true },
  { item: 'Podcast Feature', powered: '✓ Yes', copowered: '✓ Yes', supporting: 'Shared', goldP: true, goldC: true },
  { item: 'Speaking Opportunity', powered: 'Panel participation', copowered: '—', supporting: '—', blueP: true },
  { item: 'AV / Brand Film Slot', powered: 'Dedicated 15 Sec', copowered: 'Shared 10 Sec', supporting: 'Shared 10 Sec' },
  { item: 'Stall / Exhibition Space', powered: 'Premium stall', copowered: 'Standard stall', supporting: 'Standard stall', blueP: true },
  { item: 'Delegate Passes', powered: '6 Passes', copowered: '4 Passes', supporting: '2 Passes', goldP: true, goldC: true, goldS: true },
  { item: 'Social Media Amplification', powered: 'Featured campaigns', copowered: 'Co-branded posts', supporting: 'Group mentions' },
  { item: 'Data Access (per compliance)', powered: '✓ Included', copowered: '✓ Included', supporting: '✓ Included', goldP: true, goldC: true, goldS: true },
  { item: 'ABC Meeting Invitations', powered: '3 Sanghs', copowered: '2 Sanghs', supporting: '1 Sangh', blueP: true, blueC: true },
]

export default function Sponsorship() {
  return (
    <section className={styles.section} id="sponsor">
      <div className="section-inner">
        <div className="section-eyebrow">Partner with Us</div>
        <h2 className="section-title">Sponsor the ABC Summit 2026 — <em>Reach 350+ Decision-Makers</em></h2>
        <p className="section-desc">Showcase your brand to 350+ prominent Agrawal business families, CAs, doctors, lawyers, and senior professionals — all in one curated room.</p>

        <div className={styles.tiers}>
          <div className={styles.tierRow}><div className={styles.tierLabel}>Powered By · 1 Slot</div><div className={styles.slotsRow}><div className={`${styles.slot} ${styles.large}`}>Title Sponsor<br /><span>Premium stall · 6 passes · Panel opportunity</span></div></div></div>
          <div className={styles.tierRow}><div className={styles.tierLabel}>Co-Powered By · 2 Slots</div><div className={styles.slotsRow}><div className={`${styles.slot} ${styles.medium}`}>Co-Powered<br /><span>Standard stall · 4 passes</span></div><div className={`${styles.slot} ${styles.medium}`}>Co-Powered<br /><span>Standard stall · 4 passes</span></div></div></div>
          <div className={styles.tierRow}><div className={styles.tierLabel}>Supporting Partner · 3 Slots</div><div className={styles.slotsRow}><div className={`${styles.slot} ${styles.small}`}>Supporting</div><div className={`${styles.slot} ${styles.small}`}>Supporting</div><div className={`${styles.slot} ${styles.small}`}>Supporting</div></div></div>
        </div>
      </div>
    </section>
  )
}
