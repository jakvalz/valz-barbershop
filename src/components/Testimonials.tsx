import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Reveal } from './Reveal'

const AUTO_MS = 6000
const PAUSE_AFTER_INTERACT_MS = 12000

function Stars({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={14} strokeWidth={0} className="fill-bronze text-bronze" />
      ))}
    </span>
  )
}

function DiamondRule() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-10 bg-bronze/70 sm:w-14" />
      <span className="block h-1.5 w-1.5 rotate-45 bg-bronze" />
      <span className="h-px w-10 bg-bronze/70 sm:w-14" />
    </div>
  )
}

export function Testimonials() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const items = t.testimonials.items
  const [index, setIndex] = useState(0)
  const pausedUntil = useRef(0)
  const interactTimer = useRef<number | null>(null)

  const go = useCallback(
    (next: number) => {
      const len = items.length
      setIndex(((next % len) + len) % len)
    },
    [items.length],
  )

  const pauseAuto = useCallback(() => {
    pausedUntil.current = Date.now() + PAUSE_AFTER_INTERACT_MS
    if (interactTimer.current) window.clearTimeout(interactTimer.current)
    interactTimer.current = window.setTimeout(() => {
      pausedUntil.current = 0
    }, PAUSE_AFTER_INTERACT_MS)
  }, [])

  const prev = () => {
    pauseAuto()
    go(index - 1)
  }

  const next = () => {
    pauseAuto()
    go(index + 1)
  }

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntil.current) return
      setIndex((i) => (i + 1) % items.length)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [items.length, reduce])

  useEffect(() => {
    return () => {
      if (interactTimer.current) window.clearTimeout(interactTimer.current)
    }
  }, [])

  const item = items[index]

  return (
    <section id="testimonials" className="relative scroll-mt-24 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 testimonials-surface"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <DiamondRule />
            <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-bronze">
              {t.testimonials.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink dark:text-white sm:text-5xl">
              {t.testimonials.title}
            </h2>
            <span
              className="mt-4 block h-px w-12 bg-stone/40 dark:bg-white/25"
              aria-hidden="true"
            />
            <div className="mt-5 flex flex-col items-center gap-2">
              <Stars />
              <p className="text-sm text-stone dark:text-white/55">{t.testimonials.rating}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="relative mt-10">
            <button
              type="button"
              onClick={prev}
              aria-label={t.testimonials.prev}
              className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[10px] border border-bronze/35 text-ink transition hover:bg-bronze/10 dark:border-bronze/40 dark:text-white dark:hover:bg-bronze/15 sm:-left-12"
            >
              <ChevronLeft size={20} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={t.testimonials.next}
              className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[10px] border border-bronze/35 text-ink transition hover:bg-bronze/10 dark:border-bronze/40 dark:text-white dark:hover:bg-bronze/15 sm:-right-12"
            >
              <ChevronRight size={20} strokeWidth={1.75} />
            </button>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={`${item.name}-${index}`}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-md border border-bronze/35 bg-cream/80 px-6 py-8 dark:border-bronze/40 dark:bg-[#1a1a1a]/90 sm:px-9 sm:py-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Stars className="mt-1" />
                    <span
                      className="font-display text-6xl leading-none text-bronze/45 select-none sm:text-7xl"
                      aria-hidden="true"
                    >
                      “
                    </span>
                  </div>
                  <p className="mt-2 font-display text-xl leading-relaxed text-ink dark:text-white/92 sm:text-2xl">
                    {item.quote}
                  </p>
                  <footer className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-stone dark:text-white/45">{item.meta}</p>
                  </footer>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        <div
          className="mt-8 flex items-center justify-center gap-2.5"
          role="tablist"
          aria-label={t.testimonials.hint}
        >
          {items.map((review, i) => {
            const active = i === index
            return (
              <button
                key={`${review.name}-dot`}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`${i + 1} / ${items.length}`}
                onClick={() => {
                  pauseAuto()
                  setIndex(i)
                }}
                className={`h-2.5 w-2.5 rounded-full border transition ${
                  active
                    ? 'border-bronze bg-bronze'
                    : 'border-bronze/55 bg-transparent hover:border-bronze'
                }`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
