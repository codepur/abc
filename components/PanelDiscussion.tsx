// PanelDiscussion.tsx
import styles from './PanelDiscussion.module.css'

const features = [
  { icon: '◈', title: 'Real Experiences', desc: 'Hear actual business journeys, decisions, and challenges from established Agrawal entrepreneurs.' },
  { icon: '▶', title: 'Open Floor Discussion', desc: 'Ask your questions directly to experienced business leaders. No filters. No scripts.' },
  { icon: '◈', title: 'Different Perspectives', desc: 'Listen to multiple viewpoints across industries and business models.' },
  { icon: '▶', title: 'Direct Learning', desc: 'Take away ideas and approaches you can apply to your own business immediately.' },
]

export default function PanelDiscussion() {
  return (
    <section className={styles.section}>
      <div className="section-inner">
        <div className="section-eyebrow">Featured Session</div>
        <h2 className="section-title">Live Panel Discussion <em>with Industry Leaders</em></h2>
        <div className={styles.grid}>
          <div>
            <p className="section-desc">A live, meaningful panel discussion featuring top Agrawal entrepreneurs from across the city — unscripted, real-time, and directly applicable.</p>
            <ul className={styles.list}>
              {features.map(f => (
                <li key={f.title}>
                  <span className={styles.icon}>{f.icon}</span>
                  <div>
                    <div className={styles.ftitle}>{f.title}</div>
                    <div className={styles.fdesc}>{f.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.visual}>
            <div className={styles.vbg} />
            <div className={styles.vinner}>
              <div className={styles.vnum}>4+</div>
              <div className={styles.vtext}>Agrawal Entrepreneurs<br />sharing real journeys</div>
              <div className={styles.vtags}>
                <div className={styles.vtag}><div className={styles.vtagTitle}>Real Stories</div><div className={styles.vtagSub}>Not theories</div></div>
                <div className={styles.vtag}><div className={`${styles.vtagTitle} ${styles.gold}`}>Live Q&A</div><div className={styles.vtagSub}>Open floor</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
