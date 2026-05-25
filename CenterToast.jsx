import { useState, useCallback, createContext, useContext } from 'react'
import { useTheme } from './ThemeContext'

const Ctx = createContext({ add: () => {} })

export function CenterToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const add = useCallback((type, message, duration = 3000) => {
    const id = Date.now() + Math.random()
    setToasts(prev => [...prev, { id, type, message }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration)
  }, [])

  const remove = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <Ctx.Provider value={{ add }}>
      {children}
      <div style={{
        position: 'fixed', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        zIndex: 10000, display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 8, maxWidth: 400, pointerEvents: 'none',
      }}>
        {toasts.map(t => (
          <div key={t.id} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px',
            borderRadius: 12, filter: 'drop-shadow(0 0 64px var(--bg-primary))',
            animation: 'E5f7 .3s ease', minWidth: 240, pointerEvents: 'auto',
            background: t.type === 'success' ? '#22c55e' : t.type === 'error' ? '#ef4444' : 'var(--block-bg)',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, width: 20, height: 20,
              color: t.type === 'success' || t.type === 'error' ? '#fff' : 'inherit',
            }}>{t.type === 'success' ? '✓' : '✕'}</div>
            <span style={{
              flex: 1, fontSize: 14, lineHeight: 1.4,
              color: t.type === 'success' || t.type === 'error' ? '#fff' : 'inherit',
            }}>{t.message}</span>
            <button onClick={() => remove(t.id)} style={{
              flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 24, height: 24, border: 'none', background: 'transparent',
              borderRadius: 6, cursor: 'pointer', fontSize: 16,
              color: t.type === 'success' || t.type === 'error' ? '#ffffffb3' : 'inherit',
            }}>✕</button>
          </div>
        ))}
      </div>
    </Ctx.Provider>
  )
}

export function useCenterToast() {
  return useContext(Ctx)
}
