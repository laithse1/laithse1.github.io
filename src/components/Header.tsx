'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Research', href: '/research' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Beyond Code', href: '/#beyond' },
  { label: 'Contact', href: '/#contact' }
] as const

export default function Header() {
  const [dark, setDark] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      const isDark = saved ? saved === 'dark' : true
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
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/65 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/50">
      <div className="mx-auto flex max-w-6xl items-center gap-5 px-4 py-3">
        <a href="/" className="shrink-0 font-semibold tracking-tight text-slate-800 dark:text-slate-100">
          Laith M. alkhalil-AlHamed
        </a>

        <nav className="scrollbar-hide flex min-w-0 flex-1 justify-end gap-4 overflow-x-auto text-xs text-slate-600 dark:text-slate-300 sm:gap-6 sm:text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === '/research' && pathname === '/research'

            return (
              <a
                key={item.label}
                href={item.href}
                className={isActive ? 'text-brand' : 'hover:text-brand'}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <button
          onClick={toggle}
          className="shrink-0 rounded-full border border-slate-300 px-3 py-1.5 text-xs hover:border-brand/60 dark:border-slate-700"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  )
}
