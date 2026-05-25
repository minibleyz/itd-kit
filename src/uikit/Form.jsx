import { useTheme } from './ThemeContext'

export function FormGroup({ children, style }) {
  const { tokens } = useTheme()
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 12, padding: 16,
      borderRadius: 16, background: tokens.bgPrimary, ...style,
    }}>
      {children}
    </div>
  )
}

export function FormLabel({ children, style }) {
  return <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--text-primary)', ...style }}>{children}</div>
}

export function Input({ style, ...props }) {
  const { tokens } = useTheme()
  return (
    <input style={{
      width: '100%', padding: '12px 14px', border: `1px solid ${tokens.borderColor}`,
      borderRadius: 12, background: 'transparent', color: tokens.textPrimary,
      fontSize: 15, outline: 'none', fontFamily: 'inherit', ...style,
    }} {...props} />
  )
}
