import { useTheme } from './ThemeContext'

const styles = {
  wrap: {
    position: 'fixed', top: 16, right: 16, zIndex: 10001,
  },
  container: (t) => ({
    position: 'relative', display: 'flex',
    background: t.glassBg, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
    borderRadius: 9999, padding: 4, boxShadow: t.shadowElevated,
  }),
  slider: (isDark) => ({
    position: 'absolute', top: 4, bottom: 4, left: isDark ? '50%' : 4, right: isDark ? 4 : '50%',
    background: t => t.tabActiveBg, borderRadius: 9999,
    transition: 'all .2s cubic-bezier(.5,0,0,1)',
  }),
  btn: (active, t) => ({
    position: 'relative', zIndex: 1, flex: 1, padding: '8px 20px', fontSize: 14, fontWeight: 500,
    color: active ? t.textPrimary : t.textSecondary, background: 'transparent', border: 'none',
    borderRadius: 9999, cursor: 'pointer', transition: 'color .2s ease', whiteSpace: 'nowrap',
  }),
}

export default function ThemeToggle() {
  const { theme, tokens, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div style={styles.wrap}>
      <div style={styles.container(tokens)}>
        <div style={{
          ...styles.slider(isDark),
          background: tokens.tabActiveBg,
        }} />
        <button style={styles.btn(!isDark, tokens)} onClick={() => setTheme('light')}>☀️</button>
        <button style={styles.btn(isDark, tokens)} onClick={() => setTheme('dark')}>🌙</button>
      </div>
    </div>
  )
}
