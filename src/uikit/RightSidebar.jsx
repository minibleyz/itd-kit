import { useTheme } from './ThemeContext'

export default function RightSidebar({ children, style }) {
  return (
    <div style={{
      width: 200, display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', padding: '48px 0',
      ...style,
    }}>
      {children}
    </div>
  )
}

export function TrendBlock({ title, trends = [], style }) {
  const { tokens } = useTheme()

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 12, padding: 16,
      borderRadius: 16, background: tokens.bgPrimary, marginBottom: 16, ...style,
    }}>
      <div style={{ fontWeight: 600, fontSize: 15, color: tokens.textPrimary }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontSize: 13, color: tokens.textSecondary }}>
        {trends.map((t, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <a href="#" onClick={e => e.preventDefault()} style={{ color: tokens.linkColor, textDecoration: 'none' }}>{t.tag}</a>
            <span style={{ color: tokens.textSecondary, fontSize: 12 }}>{t.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
