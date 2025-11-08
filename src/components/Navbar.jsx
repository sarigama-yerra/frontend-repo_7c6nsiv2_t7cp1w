import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/[0.06]">
      <nav className="mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg tracking-tight">eng.portfolio</a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900">Say hello</a>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/[0.06] bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-medium">Say hello</a>
          </div>
        </div>
      )}
    </header>
  )
}
