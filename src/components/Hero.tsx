import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { asset } from '../lib/asset'
import { handleAnchorClick } from '../lib/smoothScroll'
import { BrandLogo } from './BrandLogo'

const HERO_IMG = asset('images/hero-tools.jpg')

export function Hero() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)

  // Smooth parallax: spring interpolates between discrete wheel ticks
  // so the bg eases instead of stepping. Oversized layer gives headroom.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 140])
  const imgY = useSpring(rawY, { stiffness: 90, damping: 28, mass: 0.45 })

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-24"
    >
      <motion.div
        style={reduce ? undefined : { y: imgY }}
        className="absolute inset-x-0 -top-[10%] h-[120%] w-full will-change-transform"
      >
        <img
          src={HERO_IMG}
          alt="Professional barber clippers, shears, and grooming tools on a dark surface"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl [text-shadow:0_1px_2px_rgba(0,0,0,0.55),0_4px_18px_rgba(0,0,0,0.35)]"
        >
          <h1 className="text-white">
            <BrandLogo
              size="hero"
              valzClassName="text-white"
              barbershopClassName="text-violet"
            />
          </h1>
          <p className="mt-5 font-display text-2xl font-normal leading-snug text-white/95 sm:text-3xl md:text-[2.1rem]">
            {t.hero.tagline}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
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
