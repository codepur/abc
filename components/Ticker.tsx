// Ticker.tsx
export default function Ticker() {
  const items = [
    '350+ Agrawal Entrepreneurs', '20 June 2026 · Indore', 'Sheraton Grand',
    'Arth · Neeti · Dharma', 'Dr. Radha Krishnan Pillai', 'Atul Satya Koushik',
    'Limited Seats — Apply Now',
  ]
  const doubled = [...items, ...items]
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  )
}
