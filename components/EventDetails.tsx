import styles from './EventDetails.module.css'

const details = [
  { label: 'Date', val: '20 June 2026 (Saturday)' },
  { label: 'Venue', val: 'Sheraton Grand, Indore' },
  { label: 'Format', val: 'Full-Day Summit' },
  { label: 'Audience', val: '350+ Agrawal Entrepreneurs' },
  { label: 'Entry', val: 'Application-Based Only' },
  { label: 'City', val: 'Indore, Madhya Pradesh' },
  { label: 'Organised by', val: 'Agrawal Business Community' },
]

const agenda = [
  { time: '09:00 AM', event: 'Registration & Welcome Networking' },
  { time: '10:00 AM', event: 'Opening Ceremony & Inaugural Address' },
  { time: '10:45 AM', event: 'Keynote: Dr. Radha Krishnan Pillai — Chanakya in Practice' },
  { time: '12:00 PM', event: 'Panel Discussion: Top Agrawal Entrepreneurs, Live Q&A' },
  { time: '01:30 PM', event: 'Business Lunch & Deal Room Networking' },
  { time: '03:00 PM', event: 'Keynote: Atul Satya Koushik — Storytelling & Brand Influence' },
  { time: '04:30 PM', event: 'Fireside Chats & Community Awards' },
  { time: '06:00 PM', event: 'High-Tea Networking & Closing' },
]

export default function EventDetails() {
  return (
    <section className={styles.section} id="details">
      <div className="section-inner">
        <div className="section-eyebrow">Event Information</div>
        <h2 className="section-title">Mark Your Calendar — <em>20 June 2026</em></h2>
        <div className={styles.grid}>
          <div className={styles.box}>
            <h3 className={styles.boxTitle}>Event Details</h3>
            {details.map(d => (
              <div key={d.label} className={styles.row}>
                <span className={styles.rowLabel}>{d.label}</span>
                <span className={styles.rowVal}>{d.val}</span>
              </div>
            ))}
          </div>
          <div className={styles.box}>
            <h3 className={styles.boxTitle}>Day at a Glance</h3>
            <ul className={styles.agenda}>
              {agenda.map(a => (
                <li key={a.time} className={styles.agendaItem}>
                  <span className={styles.agendaTime}>{a.time}</span>
                  <span className={styles.agendaEvent}>{a.event}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
