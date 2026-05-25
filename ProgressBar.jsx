import { useTheme } from './ThemeContext'

export default function ProgressBar({ value = 0, selected, style }) {
  const { tokens } = useTheme()

  return (
    <div style={{
      width: '100%', height: 6, borderRadius: 3, overflow: 'hidden',
      background: tokens.pollProgressColor, ...style,
    }}>
      <div style={{
        height: '100%', borderRadius: 3, width: `${value}%`,
        background: selected ? tokens.pollSelectedProgressColor : tokens.accentPrimary,
        transition: 'width .4s ease',
      }} />
    </div>
  )
}
