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
          <div className="border border-violet-ink/20 bg-cream/60 px-6 py-10 sm:px-10 sm:py-12 dark:border-violet/25 dark:bg-[#160e28]/70">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-ink dark:text-violet">
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
                className="rounded-md border border-violet-ink/35 px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-violet/15 dark:border-violet/45 dark:text-white dark:hover:bg-violet/10"
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
