import { useTheme } from './ThemeContext'

const colorMap = {
  default: (t) => t.accentColor,
  error: () => '#ef4444',
  success: () => '#22c55e',
  info: () => '#4d8eff',
}

export default function ColorIndicator({ variant = 'default', children, style }) {
  const { tokens } = useTheme()
  const bg = (colorMap[variant] || colorMap.default)(tokens)

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: 24, height: 24, borderRadius: '50%', background: bg,
      color: tokens.blockBg, border: `3px solid ${tokens.bgPrimary}`,
      fontSize: 11, fontWeight: 700, ...style,
    }}>{children}</div>
  )
}
