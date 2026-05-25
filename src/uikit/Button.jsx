import { useTheme } from './ThemeContext'

const variants = {
  primary: (t) => ({ background: t.btnPrimaryBg, color: t.btnPrimaryText }),
  secondary: (t) => ({ background: t.bgSecondary, color: t.textPrimary }),
  ghost: (t) => ({ background: 'transparent', color: t.textPrimary }),
  accent: () => ({ background: '#3b82f6', color: '#fff' }),
  error: () => ({ background: '#ef4444', color: '#fff' }),
}

const sizes = {
  sm: { height: 32, padding: '0 12px', fontSize: 13, borderRadius: 16 },
  md: { height: 40, padding: '0 20px', fontSize: 14, borderRadius: 20 },
  lg: { height: 48, padding: '0 24px', fontSize: 16, borderRadius: 24 },
}

export default function Button({
  variant = 'primary', size = 'md', fullWidth, iconOnly, disabled, children, style, ...props
}) {
  const { tokens } = useTheme()
  const v = (variants[variant] || variants.primary)(tokens)
  const s = sizes[size] || sizes.md

  return (
    <button disabled={disabled} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      gap: 10, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'inherit', fontWeight: 500, opacity: disabled ? 0.5 : 1,
      ...v, ...s,
      ...(fullWidth ? { width: '100%' } : {}),
      ...(iconOnly ? { padding: 0, width: s.height } : {}),
      ...style,
    }} {...props}>{children}</button>
  )
}
