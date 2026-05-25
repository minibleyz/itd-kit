import { useState } from 'react'
import { useTheme } from './ThemeContext'

const variants = {
  like: { color: '#f91880', anim: true },
  repost: { color: '#00ba7c' },
  bookmark: { color: '#ffdc5f' },
}

export default function ActionButton({
  variant, count, disabled, icon, style, ...props
}) {
  const { tokens } = useTheme()
  const v = variants[variant] || {}
  const [bouncing, setBouncing] = useState(false)

  const handleClick = (e) => {
    if (v.anim) {
      setBouncing(true)
      setTimeout(() => setBouncing(false), 400)
    }
    props.onClick?.(e)
  }

  return (
    <button disabled={disabled} onClick={handleClick} style={{
      display: 'flex', alignItems: 'center', gap: 6, borderRadius: 9999,
      fontSize: 13, color: v.color || tokens.textSecondary, lineHeight: '100%',
      padding: '8px 12px', border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
      background: 'transparent', transition: 'background .15s ease',
      opacity: disabled ? 0.4 : 1, ...style,
    }} {...props}>
      <span style={{
        display: 'flex', alignItems: 'center',
        animation: bouncing ? 'xNTN .4s ease' : 'none',
      }}>{icon}</span>
      {count != null && <span>{count}</span>}
    </button>
  )
}
