import { useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Reveal } from './Reveal'

export function Testimonials() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateEdges()
    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [updateEdges])

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-review]')
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * amount, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      {/* Distinct section surface: warm/purple light, deeper purple dark */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 testimonials-surface"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-ink dark:text-violet">
                {t.testimonials.eyebrow}
              </p>
              <h2 className="mt-3 max-w-xl font-display text-4xl font-medium leading-tight text-ink dark:text-white sm:text-5xl">
                {t.testimonials.title}
              </h2>
              <p className="mt-4 max-w-xl text-base text-stone dark:text-white/65">
                {t.testimonials.sub}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label={t.testimonials.prev}
                className="flex h-11 w-11 items-center justify-center border border-violet-ink/30 text-ink transition enabled:hover:bg-violet/20 disabled:opacity-35 dark:border-violet/40 dark:text-white dark:enabled:hover:bg-violet/15"
              >
                <ChevronLeft size={20} strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label={t.testimonials.next}
                className="flex h-11 w-11 items-center justify-center border border-violet-ink/30 text-ink transition enabled:hover:bg-violet/20 disabled:opacity-35 dark:border-violet/40 dark:text-white dark:enabled:hover:bg-violet/15"
              >
                <ChevronRight size={20} strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={scrollerRef}
          className="mt-10 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {t.testimonials.items.map((item, i) => (
            <article
              key={`${item.name}-${i}`}
              data-review
              className="w-[min(100%,22rem)] shrink-0 snap-start border border-violet-ink/15 bg-cream/70 p-6 dark:border-violet/25 dark:bg-[#1a1030]/80 sm:w-[24rem] sm:p-7"
            >
              <Quote className="text-violet-ink/70 dark:text-violet/70" size={22} strokeWidth={1.5} />
              <p className="mt-4 text-base leading-relaxed text-ink/90 dark:text-white/85">
                “{item.quote}”
              </p>
              <footer className="mt-6">
                <p className="font-medium text-ink dark:text-white">{item.name}</p>
                <p className="mt-0.5 text-sm text-stone dark:text-white/50">{item.meta}</p>
              </footer>
            </article>
          ))}
        </div>

        <p className="sr-only">{t.testimonials.hint}</p>
      </div>
    </section>
  )
}
