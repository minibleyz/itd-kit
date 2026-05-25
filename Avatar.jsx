import { useTheme } from './ThemeContext'

const sizes = {
  sm: 28, md: 36, lg: 40, xl: 100, xxl: 120,
}

export default function Avatar({ size = 'md', initials = '?', online, badge, badgeCount, error, style }) {
  const { tokens } = useTheme()
  const px = sizes[size] || sizes.md
  const isLarge = size === 'xl' || size === 'xxl'
  const fontSizeMap = { sm: 12, md: 16, lg: 18, xl: 40, xxl: 48 }

  return (
    <div style={{
      position: 'relative', flexShrink: 0, borderRadius: '50%',
      background: tokens.bgPrimary, width: px, height: px,
      ...(isLarge ? { border: `6px solid ${tokens.bgPrimary}` } : {}),
      ...style,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '100%', height: '100%', fontSize: fontSizeMap[size] || 16,
      }}>{initials}</div>

      {online && (
        <div style={{
          position: 'absolute', borderRadius: '50%', background: '#22c55e',
          border: `2px solid ${tokens.blockBg}`,
          width: isLarge ? 22 : 12, height: isLarge ? 22 : 12,
          bottom: isLarge ? 4 : -1, right: isLarge ? 4 : -1,
        }} />
      )}

      {badgeCount != null && (
        <button style={{
          position: 'absolute', bottom: -3, right: -3,
          width: 20, height: 20, borderRadius: '50%', display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontSize: 14,
          fontWeight: 700, lineHeight: 1, border: `3px solid ${tokens.blockBg}`,
          background: tokens.bgPrimary, color: '#fff', padding: 0, cursor: 'pointer',
          ...(error ? { color: '#ff5050' } : {}),
        }}>{badgeCount}</button>
      )}

      {badge && <div style={{ position: 'absolute', bottom: -5, right: -5 }}>{badge}</div>}
    </div>
  )
}
