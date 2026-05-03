const stats = [
  { num: '350', suffix: '+', label: 'Curated Attendees' },
  { num: '2', suffix: '×', label: 'World-Class Speakers' },
  { num: '150', suffix: '+', label: 'Summit 2025 Attendees' },
  { num: '₹7.4', suffix: 'Cr+', label: 'Business Closed via ABC' },
]

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {stats.map(s => (
          <div key={s.label} className="stat-item">
            <div className="stat-num">{s.num}<span>{s.suffix}</span></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
