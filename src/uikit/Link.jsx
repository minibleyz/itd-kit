import { useTheme } from './ThemeContext'

const variants = {
  default: { fontWeight: 400 },
  bold: { fontWeight: 500 },
  subtle: { fontWeight: 400 },
}

export default function Link({ variant = 'default', href, children, style, ...props }) {
  const { tokens } = useTheme()
  const v = variants[variant] || variants.default

  return (
    <a href={href} style={{
      color: tokens.linkColor, textDecoration: 'none', ...v, ...style,
    }} {...props}>{children}</a>
  )
}
