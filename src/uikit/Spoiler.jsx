import { useState } from 'react'

export default function Spoiler({ src, alt, hint = 'Нажми, чтобы раскрыть', height = 220, style }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div onClick={() => setRevealed(!revealed)} style={{
      position: 'relative', overflow: 'hidden', borderRadius: 12,
      cursor: 'grab', userSelect: 'none', flexShrink: 0, width: '100%',
      height, ...style,
    }}>
      <img src={src} alt={alt} style={{
        width: '100%', height: '100%', objectFit: 'cover',
        transition: 'filter .4s ease, transform .4s ease',
        filter: revealed ? 'blur(0)' : 'blur(30px)',
        transform: revealed ? 'scale(1)' : 'scale(1.1)',
      }} />
      {!revealed && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,.4)', color: 'white', fontWeight: 500, fontSize: 16,
          transition: 'opacity .4s ease',
        }}>{hint}</div>
      )}
    </div>
  )
}
