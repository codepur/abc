'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './StickyCTA.module.css'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  if (!visible) return null
  return (
    <div className={styles.wrap}>
      <Link href="#register">Apply Now — Limited Seats</Link>
    </div>
  )
}
