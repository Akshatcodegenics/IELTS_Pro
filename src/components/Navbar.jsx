import React, { useState } from 'react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Courses', href: '#features' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-500 text-white font-bold">I</span>
          <span className="text-lg font-semibold text-slate-900">IELTS Pro</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-slate-600 hover:text-slate-900 transition">{link.name}</a>
          ))}
          <a href="#contact" className="btn-primary text-sm">Get Started</a>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container py-3 flex flex-col gap-2">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="py-2 text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm w-full text-center" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
