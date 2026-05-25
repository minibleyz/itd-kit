import { useTheme } from './ThemeContext'

export default function Spinner({ size = 24, style }) {
  const { tokens } = useTheme()
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flex: 1, width: '100%', padding: '24px 0', color: tokens.textSecondary, ...style,
    }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        style={{ animation: 'DisK 1s linear infinite' }}>
        <circle cx="12" cy="12" r="10" strokeOpacity=".25" />
        <path d="M12 2a10 10 0 0 1 10 10" />
      </svg>
    </div>
  )
}
