import { useTheme } from './ThemeContext'

export function Underline({ children, style }) {
  return <span style={{ textDecoration: 'underline', ...style }}>{children}</span>
}

export function Code({ children, style }) {
  const { tokens } = useTheme()
  return (
    <code style={{
      fontFamily: 'SF Mono, Fira Code, Consolas, monospace',
      background: tokens.bgSecondary, padding: '1px 4px', borderRadius: 4,
      fontSize: '.9em', ...style,
    }}>{children}</code>
  )
}

export function Blockquote({ children, style }) {
  const { tokens } = useTheme()
  return (
    <blockquote style={{
      borderLeft: `3px solid ${tokens.accentColor}`, paddingLeft: 12,
      color: tokens.textSecondary, fontStyle: 'italic', ...style,
    }}>{children}</blockquote>
  )
}
