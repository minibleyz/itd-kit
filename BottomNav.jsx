import { useTheme } from './ThemeContext'
import GlassBox from './GlassBox'

export function BottomNavContainer({ hidden, children, fab, style }) {
  const { tokens } = useTheme()

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, padding: 16,
      background: 'linear-gradient(to bottom,transparent,rgba(255,255,255,.3),rgba(255,255,255,.8))',
      pointerEvents: 'none', display: 'flex', flexDirection: 'column',
      alignItems: 'flex-end', gap: 12, zIndex: 1,
      transform: hidden ? 'translateY(100%)' : 'translateY(0)',
      transition: 'transform .3s cubic-bezier(.4,0,.2,1)', ...style,
    }}>
      {fab}
      <GlassBox>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-around', pointerEvents: 'auto' }}>
          {children}
        </div>
      </GlassBox>
    </div>
  )
}

export function NavItem({ icon, label, active, onClick, badge }) {
  const { tokens } = useTheme()

  return (
    <button onClick={onClick} style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      padding: '8px 0', background: 'transparent', border: 'none', cursor: 'pointer',
      color: active ? tokens.textPrimary : tokens.textSecondary, transition: 'color .2s ease',
      position: 'relative', flex: 1, minWidth: 0,
    }}>
      {icon}
      <span style={{ fontSize: 10, fontWeight: 500 }}>{label}</span>
      {badge != null && (
        <span style={{
          position: 'absolute', top: -6, right: -10, minWidth: 16, height: 16,
          padding: '0 4px', fontSize: 10, fontWeight: 600, lineHeight: '16px',
          textAlign: 'center', color: '#fff', background: tokens.accentLike,
          borderRadius: 8,
        }}>{badge}</span>
      )}
    </button>
  )
}

export function FabButton({ children, badge, onClick, style }) {
  const { tokens } = useTheme()

  return (
    <button onClick={onClick} style={{
      position: 'relative', order: -1, width: 64, height: 64, display: 'flex',
      alignItems: 'center', justifyContent: 'center', background: tokens.glassBg,
      backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
      border: 'none', borderRadius: 32, cursor: 'pointer', pointerEvents: 'auto',
      color: tokens.textPrimary, boxShadow: tokens.shadowElevated, ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit', padding: 1,
        background: 'linear-gradient(to bottom,rgba(255,255,255,.25),rgba(255,255,255,.05))',
        WebkitMask: 'linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0)',
        WebkitMaskComposite: 'xor', maskComposite: 'exclude', pointerEvents: 'none',
      }} />
      {children}
      {badge != null && (
        <span style={{
          position: 'absolute', top: -6, right: -10, minWidth: 16, height: 16,
          padding: '0 4px', fontSize: 10, fontWeight: 600, lineHeight: '16px',
          textAlign: 'center', color: '#fff', background: tokens.accentLike,
          borderRadius: 8,
        }}>{badge}</span>
      )}
    </button>
  )
}
