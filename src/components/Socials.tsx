import { MapPinned } from 'lucide-react'
import type { ReactNode } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Reveal } from './Reveal'

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8.5h2.5V5.2C16.1 5.07 15 5 13.86 5 11.4 5 9.7 6.53 9.7 9.36V12H7v3.5h2.7V22h3.5v-6.5H16l.5-3.5h-3V9.6c0-1 .27-1.7 1.5-1.7Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.8a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.8a4.85 4.85 0 0 1-1-.11Z" />
    </svg>
  )
}

const LINKS: {
  key: 'facebook' | 'instagram' | 'tiktok' | 'maps'
  href: string
  icon: ReactNode
}[] = [
  {
    key: 'facebook',
    href: 'https://www.facebook.com/',
    icon: <FacebookIcon />,
  },
  {
    key: 'instagram',
    href: 'https://www.instagram.com/',
    icon: <InstagramIcon />,
  },
  {
    key: 'tiktok',
    href: 'https://www.tiktok.com/',
    icon: <TikTokIcon />,
  },
  {
    key: 'maps',
    href: 'https://www.google.com/maps/search/?api=1&query=1847+Mercer+Street+Chandler+AZ+85248',
    icon: <MapPinned size={22} strokeWidth={1.6} />,
  },
]

export function Socials() {
  const { t } = useLanguage()

  return (
    <section id="socials" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-ink dark:text-violet">
            {t.socials.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-ink dark:text-white sm:text-4xl">
            {t.socials.title}
          </h2>
          <p className="mt-3 max-w-lg text-base text-stone dark:text-white/65">{t.socials.sub}</p>
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
            {LINKS.map(({ key, href, icon }) => (
              <li key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={t.socials[key]}
                  className="group flex h-12 w-12 items-center justify-center border border-violet-ink/25 text-ink transition hover:border-violet-ink hover:bg-violet/15 dark:border-violet/35 dark:text-violet dark:hover:border-violet dark:hover:bg-violet/10"
                >
                  <span className="transition group-hover:scale-105">{icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
