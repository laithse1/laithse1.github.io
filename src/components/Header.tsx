'use client'
import { useEffect, useState } from 'react'

export default function Header() {
  const [dark, setDark] = useState(true) // default = dark

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      const isDark = saved ? saved === 'dark' : true // prefer dark by default
      document.documentElement.classList.toggle('dark', isDark)
      setDark(isDark)
    } catch {}
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-200/60 dark:border-slate-800/60 bg-white/65 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-slate-800 dark:text-slate-100">
          Laith M. alkhalil-AlHamed<span className="text-brand"></span>
        </a>
        <nav className="hidden md:flex gap-6 text-sm text-slate-600 dark:text-slate-300">
          <a href="#projects" className="hover:text-brand">Projects</a>
          <a href="#experience" className="hover:text-brand">Experience</a>
          <a href="#skills" className="hover:text-brand">Skills</a>
          <a href="#beyond" className="hover:text-brand">Beyond Code</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </nav>
        <button
          onClick={toggle}
          className="text-xs px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-brand/60"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {dark ? '☀︎' : '☾'}
        </button>
      </div>
    </header>
  )
}
