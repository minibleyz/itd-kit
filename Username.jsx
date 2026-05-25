import { useTheme } from './ThemeContext'

const sizeMap = {
  sm: { fontSize: 12, gap: 4 },
  md: { fontSize: 14, gap: 6 },
  lg: { fontSize: 15, gap: 6 },
  xl: { fontSize: 24, gap: 12, lineHeight: 1.3 },
}

export default function Username({ name, size = 'md', gradient, badge, style }) {
  const { tokens } = useTheme()
  const s = sizeMap[size] || sizeMap.md

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: s.gap,
      fontWeight: 500, color: tokens.textPrimary, lineHeight: s.lineHeight || 1,
      fontSize: s.fontSize, minWidth: 0, ...style,
    }}>
      <span style={{
        textOverflow: 'ellipsis', whiteSpace: size === 'xl' ? 'normal' : 'nowrap',
        overflow: size === 'xl' ? 'visible' : 'hidden',
        ...(gradient ? {
          background: 'linear-gradient(270deg,#0288d1,#26c6da)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        } : {}),
      }}>{name}</span>
      {badge && (
        <span style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, cursor: 'default' }}>
          {badge}
        </span>
      )}
    </div>
  )
}
