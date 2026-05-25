import { useRef, useEffect } from 'react'
import { useTheme } from './ThemeContext'

export default function DropdownMenu({ open, onClose, x, y, items = [], style }) {
  const { tokens } = useTheme()
  const ref = useRef()

  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose?.() }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div ref={ref} style={{
      position: 'fixed', left: x, top: y, zIndex: 9999, minWidth: 180, padding: 6,
      background: tokens.blockBg, border: `1px solid ${tokens.borderColor}`,
      borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,.25)',
      animation: 'BxuV .2s cubic-bezier(.16,1,.3,1)', ...style,
    }}>
      {items.map((item, i) => {
        if (item.divider) return <div key={i} style={{ height: 1, margin: '6px 8px', background: tokens.borderColor }} />
        return (
          <button key={i} onClick={() => { item.onClick?.(); onClose?.() }} style={{
            display: 'flex', alignItems: 'center', gap: 12, width: '100%',
            padding: '12px 14px', border: 'none', background: 'transparent',
            color: item.danger ? tokens.accentLike : tokens.textPrimary,
            fontSize: 14, fontWeight: 450, textAlign: 'left', cursor: 'pointer',
            borderRadius: 10, transition: 'background .15s ease',
          }}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</span>
            <span style={{ flex: 1 }}>{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}
