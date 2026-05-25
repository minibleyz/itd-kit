import { useState, useCallback, createContext, useContext } from 'react'
import { useTheme } from './ThemeContext'

const ToastCtx = createContext({ add: () => {} })

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const add = useCallback((type, title, message, duration = 4000) => {
    const id = Date.now() + Math.random()
    setToasts(prev => [...prev, { id, type, title, message }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration)
  }, [])

  const remove = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <ToastCtx.Provider value={{ add }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={remove} />
    </ToastCtx.Provider>
  )
}

export function useToast() {
  return useContext(ToastCtx)
}

const borderColors = {
  info: '#6366f1', success: '#22c55e', warning: '#f59e0b', error: '#ef4444',
}

function ToastContainer({ toasts, onRemove }) {
  const { tokens } = useTheme()

  return (
    <div style={{
      position: 'fixed', bottom: 36, right: 24, zIndex: 10000,
      display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
      gap: 16, maxWidth: 380,
    }}>
      {toasts.map(t => (
        <div key={t.id} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 16, padding: 20, userSelect: 'none', cursor: 'pointer',
          background: tokens.blockBg, borderRadius: 36,
          animation: 'iJeH .3s ease', minWidth: 280,
          borderLeft: `3px solid ${borderColors[t.type] || borderColors.info}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0, overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <span>{t.title}</span>
                <span style={{ color: tokens.textSecondary }}>· только что</span>
              </div>
              <p style={{ color: tokens.textSecondary, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>{t.message}</p>
            </div>
          </div>
          <button onClick={() => onRemove(t.id)} style={{
            flexShrink: 0, padding: 8, color: tokens.textSecondary, background: 'none', border: 'none', cursor: 'pointer',
          }}>✕</button>
        </div>
      ))}
    </div>
  )
}
