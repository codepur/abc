import Image from 'next/image'

export default function PatternDivider() {
  return (
    <div className="pattern-bar">
      <Image
        src="/images/pattern-divider.png"
        alt=""
        width={1440}
        height={60}
        style={{ width: '100%', height: 'auto' }}
        priority={false}
      />
    </div>
  )
}
