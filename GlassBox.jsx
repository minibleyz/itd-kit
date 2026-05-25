import { useTheme } from './ThemeContext'

export default function GlassBox({ children, style }) {
  const { tokens } = useTheme()

  return (
    <div style={{
      position: 'relative', width: '100%', height: 64, display: 'flex',
      alignItems: 'center', background: tokens.glassBg,
      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      borderRadius: 32, padding: 6, boxShadow: tokens.shadowElevated,
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit', padding: 1,
        background: 'linear-gradient(to bottom,rgba(255,255,255,.25),rgba(255,255,255,.05))',
        WebkitMask: 'linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0)',
        WebkitMaskComposite: 'xor', maskComposite: 'exclude', pointerEvents: 'none',
      }} />
      {children}
    </div>
  )
}
