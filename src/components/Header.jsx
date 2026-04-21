import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'home',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'programs', label: 'Programs' },
  { id: 'media',    label: 'Media' },
  { id: 'impact',   label: 'Impact' },
  { id: 'gallery',  label: 'Gallery' },
  { id: 'contact',  label: 'Contact' },
]

export default function Header({ currentPage, navigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (page) => {
    navigate(page)
    setMenuOpen(false)
  }

  return (
    <header
      id="header"
      className={`sticky top-0 z-50 bg-white/92 backdrop-blur-xl border-b border-border transition-shadow ${scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.10)]' : ''}`}
      style={{ background: 'rgba(255,255,255,0.92)' }}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <button onClick={() => go('home')} className="flex items-center gap-2.5 font-display font-black text-xl text-navy cursor-pointer bg-transparent border-0">
          <img
            src="/assets/logo.jpeg"
            alt="Club Rafiki logo"
            className="w-11 h-11 rounded-xl object-cover border border-border"
          />
          Club Rafiki
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer border-0 ${
                currentPage === link.id
                  ? 'bg-orange-light text-orange'
                  : 'text-ink bg-transparent hover:bg-orange-light hover:text-orange'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go('donate')}
            className="ml-2 bg-orange text-white rounded-full px-5 py-2.5 text-sm font-bold hover:bg-orange-dark transition-colors cursor-pointer border-0"
          >
            Donate
          </button>
        </nav>

        {/* Hamburger */}
        <button className="md:hidden p-1.5 bg-transparent border-0 cursor-pointer" onClick={() => setMenuOpen(v => !v)}>
          <span className="block w-6 h-0.5 bg-dark rounded mb-1.5 transition-all"></span>
          <span className="block w-6 h-0.5 bg-dark rounded mb-1.5 transition-all"></span>
          <span className="block w-6 h-0.5 bg-dark rounded transition-all"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-5 pt-2 bg-white border-t border-border">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`px-3.5 py-2.5 rounded-lg font-semibold text-left cursor-pointer border-0 transition-colors ${
                currentPage === link.id ? 'bg-orange-light text-orange' : 'bg-transparent text-ink hover:bg-orange-light hover:text-orange'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go('donate')}
            className="mt-1 bg-orange text-white rounded-full py-2.5 font-bold text-center cursor-pointer border-0 hover:bg-orange-dark transition-colors"
          >
            Donate
          </button>
        </div>
      )}
    </header>
  )
}
