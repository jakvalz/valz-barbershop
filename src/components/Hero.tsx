import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { asset } from '../lib/asset'

const HERO_IMG = asset('images/hero-tools.jpg')

export function Hero() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-24"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Professional barber clippers, shears, and grooming tools on a dark surface"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <h1 className="font-display text-6xl font-medium tracking-[0.12em] text-white sm:text-7xl md:text-8xl">
            VALZ
          </h1>
          <p className="mt-4 font-display text-2xl font-normal leading-snug text-white/95 sm:text-3xl md:text-[2.1rem]">
            {t.hero.tagline}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
            {t.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="rounded-md bg-violet px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-white"
            >
              {t.hero.ctaServices}
            </a>
            <a
              href="#pricing"
              className="rounded-md border border-white/55 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
            >
              {t.hero.ctaPricing}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
