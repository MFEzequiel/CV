import { useState } from 'react'
export function useTheme () {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  )

  const htmlElement = document.documentElement
  htmlElement.setAttribute('data-theme', theme)

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return { changeTheme }
}
