'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#theme', label: 'Theme' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#details', label: 'Details' },
  { href: '#sponsor', label: 'Sponsor' },
  { href: '#register', label: 'Register' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Image src="/logo.png" alt="ABC Summit 2026" width={140} height={48} className={styles.logo} priority />

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          </li>
        ))}
      </ul>

      <Link href="#register" className={styles.cta}>Apply Now</Link>

      <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span className={open ? styles.spanOpen1 : ''} />
        <span className={open ? styles.spanOpen2 : ''} />
        <span className={open ? styles.spanOpen3 : ''} />
      </button>
    </nav>
  )
}
