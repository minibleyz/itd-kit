import { useTheme } from './ThemeContext'

export default function Divider({ style }) {
  const { tokens } = useTheme()
  return <div style={{ height: 1, margin: '6px 8px', background: tokens.borderColor, ...style }} />
}

export function DividerFull({ style }) {
  const { tokens } = useTheme()
  return <div style={{ height: 1, background: tokens.borderColor, margin: '8px 0', ...style }} />
}
