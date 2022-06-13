import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BiSun, BiMoon } from 'react-icons/bi'

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='fixed top-4 right-4 p-3 rounded-full shadow-md'
    >
      <div className='text-2xl'>
        {theme === 'light' ? <BiSun /> : <BiMoon />}
      </div>
    </button>
  )
}
