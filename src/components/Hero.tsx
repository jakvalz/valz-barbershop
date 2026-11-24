import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { asset } from '../lib/asset'
import { handleAnchorClick } from '../lib/smoothScroll'

const HERO_IMG = asset('images/hero-tools.jpg')

export function Hero() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-24"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Professional barber clippers, shears, and grooming tools on a dark surface"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </div>

      <div className="hero-overlay absolute inset-0" />

      <div
        className="pointer-events-none absolute -right-16 top-24 h-64 w-64 rounded-full bg-violet/15 blur-3xl sm:h-80 sm:w-80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-48 w-48 rounded-full bg-violet-deep/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <h1 className="font-display leading-none text-white">
            <span className="block text-6xl font-medium tracking-[0.12em] sm:text-7xl md:text-8xl">
              VALZ
            </span>
            <span className="mt-[0.18em] block text-base font-semibold tracking-[0.42em] text-violet sm:text-lg md:text-xl">
              BARBERSHOP
            </span>
          </h1>
          <p className="mt-5 font-display text-2xl font-normal leading-snug text-white/95 sm:text-3xl md:text-[2.1rem]">
            {t.hero.tagline}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
            {t.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              onClick={handleAnchorClick}
              className="rounded-md bg-violet px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-cream"
            >
              {t.hero.ctaServices}
            </a>
            <a
              href="#pricing"
              onClick={handleAnchorClick}
              className="rounded-md border border-white/55 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
            >
              {t.hero.ctaPricing}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
