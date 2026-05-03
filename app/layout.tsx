import type { Metadata } from 'next'
import { Libre_Baskerville } from 'next/font/google'
import '../styles/globals.css'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The ABC Summit 2026 — Arth | Neeti | Dharma',
  description:
    'The ABC Summit 2026 — Agrawal Business Community Indore. 20 June 2026 at Sheraton Grand, Indore. 350+ curated entrepreneurs. Arth · Neeti · Dharma.',
  keywords: 'ABC Summit, Agrawal Business Community, Indore, Business Summit 2026, Arth Neeti Dharma',
  openGraph: {
    title: 'The ABC Summit 2026',
    description: 'Join 350+ Agrawal entrepreneurs at Sheraton Grand, Indore on 20 June 2026.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={libreBaskerville.variable}>
      <body>{children}</body>
    </html>
  )
}
