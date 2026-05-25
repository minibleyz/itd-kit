import { useState, useRef, useEffect } from 'react'

export default function Tooltip({ text, sub, children }) {
  const [pos, setPos] = useState(null)
  const ref = useRef()

  const show = () => {
    const r = ref.current.getBoundingClientRect()
    setPos({ left: r.left + r.width / 2, top: r.top })
  }

  const hide = () => setPos(null)

  return (
    <>
      <span ref={ref} onMouseEnter={show} onMouseLeave={hide} style={{ display: 'inline-flex' }}>
        {children}
      </span>
      {pos && (
        <div style={{
          position: 'fixed', left: pos.left, top: pos.top - 8,
          transform: 'translate(-50%) translateY(-100%)',
          background: '#000000e6', color: '#ffffffd9', padding: '8px 10px',
          borderRadius: 8, fontSize: 12, lineHeight: 1.4, whiteSpace: 'nowrap',
          pointerEvents: 'none', zIndex: 10000, display: 'flex', flexDirection: 'column', gap: 2,
          animation: 'yIAR .15s ease',
        }}>
          <span>{text}</span>
          {sub && <span style={{ color: '#ffffff80', fontSize: 10 }}>{sub}</span>}
          <div style={{
            position: 'absolute', bottom: -4, left: '50%', transform: 'translate(-50%)',
            width: 0, height: 0, borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent', borderTop: '5px solid rgba(0,0,0,.9)',
          }} />
        </div>
      )}
    </>
  )
}
