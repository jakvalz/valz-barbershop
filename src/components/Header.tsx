import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState, type MouseEvent } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { handleAnchorClick } from '../lib/smoothScroll'

const links = [
  { id: 'services', key: 'services' as const },
  { id: 'fades', key: 'fades' as const },
  { id: 'hair', key: 'hair' as const },
  { id: 'beards', key: 'beards' as const },
  { id: 'pricing', key: 'pricing' as const },
  { id: 'visit', key: 'visit' as const },
]

export function Header() {
  const { t, locale, toggleLocale } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [overHero, setOverHero] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      setOverHero(window.scrollY < window.innerHeight * 0.72)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeThenScroll = (event: MouseEvent<HTMLAnchorElement>) => {
    handleAnchorClick(event, { onAfterClick: () => setOpen(false) })
  }

  const onDarkBand = theme === 'dark' || overHero
  const barClass = open
    ? 'border-b border-violet/20 bg-ink/95 backdrop-blur-md'
    : scrolled
      ? onDarkBand
        ? 'border-b border-white/10 bg-ink/80 backdrop-blur-md'
        : 'border-b border-violet/15 bg-mist/85 backdrop-blur-md'
      : 'bg-transparent'

  const logoClass = onDarkBand || open ? 'text-white' : 'text-ink'
  const linkClass =
    onDarkBand || open
      ? 'text-white/80 hover:text-white'
      : 'text-ink/70 hover:text-ink'
  const iconBtnClass =
    onDarkBand || open
      ? 'border-white/25 text-white hover:border-violet hover:bg-white/5'
      : 'border-ink/20 text-ink hover:border-violet-ink hover:bg-violet/10'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${barClass}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <a
          href="#top"
          className={`flex flex-col leading-none ${logoClass}`}
          onClick={closeThenScroll}
          aria-label="VALZ Barbershop"
        >
          <span className="font-display text-2xl tracking-[0.18em] sm:text-[1.65rem]">VALZ</span>
          <span
            className={`mt-[0.2em] text-[0.55rem] font-semibold tracking-[0.38em] sm:text-[0.6rem] ${
              onDarkBand || open ? 'text-violet' : 'text-violet-ink'
            }`}
          >
            BARBERSHOP
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleAnchorClick}
              className={`text-[0.8rem] font-medium tracking-wide transition ${linkClass}`}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLocale}
            className={`flex h-9 w-9 items-center justify-center rounded-md border text-xs font-semibold tracking-wider transition ${iconBtnClass}`}
            aria-label={locale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
          >
            {locale === 'en' ? 'ES' : 'EN'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-9 w-9 items-center justify-center rounded-md border transition ${iconBtnClass}`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
          </button>

          <a
            href="#visit"
            onClick={handleAnchorClick}
            className="hidden rounded-md bg-violet px-3.5 py-2 text-sm font-medium text-ink transition hover:bg-cream sm:inline-flex dark:hover:bg-white"
          >
            {t.nav.book}
          </a>

          <button
            type="button"
            className={`flex h-9 w-9 items-center justify-center rounded-md border lg:hidden ${iconBtnClass}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-ink/95 lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="rounded-md px-3 py-3 text-base text-white/90 hover:bg-white/5"
                  onClick={closeThenScroll}
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <a
                href="#visit"
                className="mt-2 rounded-md bg-violet px-3 py-3 text-center font-medium text-ink"
                onClick={closeThenScroll}
              >
                {t.nav.book}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
