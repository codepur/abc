import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const navLinks = [
  { href: '#about', label: 'About ABC' }, { href: '#theme', label: 'Theme 2026' },
  { href: '#speakers', label: 'Speakers' }, { href: '#highlights', label: 'Summit 2025' },
  { href: '#details', label: 'Schedule' },
]
const attendLinks = [
  { href: '#register', label: 'Apply Now' }, { href: '#faq', label: 'FAQs' },
  { href: '#sponsor', label: 'Sponsorships' }, { href: 'mailto:sponsor@theabcsummit.com', label: 'Contact Us' },
]
const contactLinks = [
  { href: 'mailto:sponsor@theabcsummit.com', label: 'sponsor@theabcsummit.com' },
  { href: 'tel:+919977916622', label: '+91 99779 16622' },
  { href: 'tel:+919826030453', label: '+91 98260 30453' },
  { href: '#', label: 'Indore, Madhya Pradesh' },
  { href: '#', label: '20 June 2026' },
]
const socials = ['in', 'f', 'IG', 'YT']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image src="/logo.png" alt="ABC Summit 2026" width={140} height={54} className={styles.logo} />
            <p>The Agrawal Business Community (ABC) Indore is a premier networking and growth ecosystem for Agrawal entrepreneurs and business leaders across India.</p>
            <div className={styles.socials}>
              {socials.map(s => <a key={s} href="#" className={styles.social}>{s}</a>)}
            </div>
          </div>
          <div className={styles.col}><h4>Summit</h4><ul>{navLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul></div>
          <div className={styles.col}><h4>Attend</h4><ul>{attendLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}</ul></div>
          <div className={styles.col}><h4>Contact</h4><ul>{contactLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul></div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 Agrawal Business Community, Indore. All rights reserved.</p>
          <span className={styles.tagline}>Arth · Neeti · Dharma</span>
        </div>
      </div>
    </footer>
  )
}
