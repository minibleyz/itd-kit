import { useTheme } from './ThemeContext'

export function PostContainer({ hover, onClick, children, style }) {
  const { tokens } = useTheme()

  const base = {
    display: 'flex', flexDirection: 'column', gap: 14, padding: 16,
    ...style,
  }

  return (
    <div onClick={onClick} style={{
      ...base, cursor: hover ? 'pointer' : 'default',
      ...(hover ? { background: tokens.blockBg, borderRadius: 36, gap: 18, padding: 24 } : {}),
    }}>
      {children}
    </div>
  )
}

export function PostContent({ avatar, username, date, children, actions, style }) {
  return (
    <div style={{ display: 'flex', gap: 10, ...style }}>
      {avatar && <div style={{ alignSelf: 'flex-start' }}>{avatar}</div>}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {username && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {username}
          {date && <span style={{ color: 'var(--text-secondary)', fontSize: 12, whiteSpace: 'nowrap' }}>· {date}</span>}
        </div>}
        {children}
        {actions && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '-12px' }}>{actions}</div>}
      </div>
    </div>
  )
}

export function PostText({ truncate, children, style }) {
  const { tokens } = useTheme()

  return (
    <div style={{
      color: tokens.textPrimary, fontSize: 15, lineHeight: 1.5,
      whiteSpace: 'pre-wrap', wordWrap: 'break-word', overflow: 'hidden',
      position: truncate ? 'relative' : 'static', ...style,
    }}>
      {children}
      {truncate && (
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
          background: `linear-gradient(to bottom, transparent, ${tokens.blockBg})`,
          pointerEvents: 'none',
        }} />
      )}
    </div>
  )
}
