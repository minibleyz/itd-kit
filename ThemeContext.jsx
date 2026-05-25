import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { themes } from './tokens'

const ThemeCtx = createContext({ theme: 'light', tokens: themes.light, toggle: () => {} })

export function ThemeProvider({ defaultTheme = 'light', children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('ui-theme') || defaultTheme)

  useEffect(() => {
    localStorage.setItem('ui-theme', theme)
  }, [theme])

  const value = useMemo(() => ({
    theme,
    tokens: themes[theme],
    toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light'),
    setTheme,
  }), [theme])

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}

export function useTheme() {
  return useContext(ThemeCtx)
}
