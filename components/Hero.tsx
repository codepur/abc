'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'

interface TimeLeft { days: string; hours: string; mins: string; secs: string }

function calcTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return { days: '00', hours: '00', mins: '00', secs: '00' }
  const pad = (n: number) => String(n).padStart(2, '0')
  return {
    days:  pad(Math.floor(diff / 86400000)),
    hours: pad(Math.floor((diff % 86400000) / 3600000)),
    mins:  pad(Math.floor((diff % 3600000) / 60000)),
    secs:  pad(Math.floor((diff % 60000) / 1000)),
  }
}

function useCountdown(target: Date): TimeLeft {
  const [time, setTime] = useState<TimeLeft>(() => calcTimeLeft(target))
  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])
  return time
}

export default function Hero() {
  const time = useCountdown(new Date('2026-06-20T09:00:00'))

  return (
    <section className={styles.hero} id="home">
      <div className={styles.tri} />
      <div className={styles.dots} />
      <div className={styles.content}>
        {/* Left */}
        <div className={styles.left}>
          <div className={styles.eyebrow}>Agrawal Business Community · Indore</div>
          <h1 className={styles.h1}>
            Where Serious<br />
            <em>Business Meets</em><br />
            Serious People.
          </h1>
          <p className={styles.sub}>
            Not for everyone. Only for those who are building something that lasts.
            The ABC Summit 2026 is the most focused gathering of Agrawal entrepreneurs,
            investors, and leaders in Central India.
          </p>
          <div className={styles.meta}>
            {[
              { label: 'Date', value: '20 June 2026' },
              { label: 'Venue', value: 'Sheraton Grand, Indore' },
              { label: 'Audience', value: '350+ Entrepreneurs' },
            ].map(m => (
              <div key={m.label} className={styles.metaItem}>
                <span className={styles.metaLabel}>{m.label}</span>
                <span className={styles.metaValue}>{m.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.btns}>
            <Link href="#register" className="btn-primary">Apply for a Seat</Link>
            <Link href="#about" className="btn-outline">Explore Summit</Link>
          </div>
        </div>

        {/* Right — hero card */}
        <div className={styles.card}>
          <Image src="/logo.png" alt="ABC Summit 2026" width={200} height={88} className={styles.cardLogo} />
          <div className={styles.cardTagline}>Arth · Neeti · Dharma</div>
          <div className={styles.cardSub}>Countdown to Summit</div>
          <div className={styles.countdown}>
            {[
              { val: time.days, label: 'Days' },
              { val: time.hours, label: 'Hours' },
              { val: time.mins, label: 'Mins' },
              { val: time.secs, label: 'Secs' },
            ].map(c => (
              <div key={c.label} className={styles.cdBox}>
                <span className={styles.cdNum}>{c.val}</span>
                <span className={styles.cdLabel}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
