import { useLanguage } from '../context/LanguageContext'
import { handleAnchorClick } from '../lib/smoothScroll'
import { Reveal } from './Reveal'

const REVIEW_URL = 'https://www.google.com/maps/search/?api=1&query=VALZ+Barbershop+Chandler+AZ'

export function LeaveReview() {
  const { t } = useLanguage()

  return (
    <section id="leave-review" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-md border border-bronze/40 bg-cream/70 px-6 py-10 sm:px-10 sm:py-12 dark:border-bronze/35 dark:bg-[#1a1a1a]/90">
            <div className="flex items-center gap-3" aria-hidden="true">
              <span className="h-px w-8 bg-bronze/70" />
              <span className="block h-1.5 w-1.5 rotate-45 bg-bronze" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-bronze">
              {t.leaveReview.eyebrow}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-medium text-ink dark:text-white sm:text-4xl">
              {t.leaveReview.title}
            </h2>
            <p className="mt-3 max-w-lg text-base text-stone dark:text-white/65">
              {t.leaveReview.sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#visit"
                onClick={handleAnchorClick}
                className="rounded-md bg-violet px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-violet-deep hover:text-white"
              >
                {t.leaveReview.book}
              </a>
              <a
                href={REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-bronze/55 px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-bronze/15 dark:border-bronze/50 dark:text-white dark:hover:bg-bronze/10"
              >
                {t.leaveReview.review}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
