import { useEffect, useRef } from 'react'
import { useTheme } from './ThemeContext'

export default function Modal({ open, onClose, title, wide, children, style }) {
  const { tokens } = useTheme()
  const ref = useRef()

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div ref={ref} onClick={e => e.target === ref.current && onClose?.()} style={{
      position: 'fixed', inset: 0, background: '#00000066', zIndex: 10000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 16, animation: 'CZFl .2s ease',
    }}>
      <div style={{
        position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 16, animation: 'wRTG .2s ease',
        maxWidth: wide ? 'min(1100px, 100vw - 32px)' : 'min(650px, 100vw - 32px)',
        width: '100%',
      }}>
        <div style={{
          position: 'relative', width: '100%', maxHeight: 'calc(100vh - 32px)',
          background: tokens.blockBg, overflow: 'hidden', display: 'flex',
          flexDirection: 'column', borderRadius: 16, ...style,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: 16, borderBottom: `1px solid ${tokens.borderColor}`,
            position: 'relative', zIndex: 1,
          }}>
            <span style={{ fontSize: 18, fontWeight: 600, color: tokens.textPrimary }}>{title}</span>
            <button onClick={onClose} style={{
              width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: tokens.bgSecondary, border: 'none', borderRadius: '50%', cursor: 'pointer',
              color: tokens.textSecondary, transition: 'color .2s ease, background .2s ease',
            }}>✕</button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
