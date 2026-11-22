import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { asset } from '../lib/asset'
import { Reveal } from './Reveal'

const VISIT_IMG = asset('images/shop-interior.jpg')
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=1847+Mercer+Street+Brooklyn+NY+11201'

export function Visit() {
  const { t } = useLanguage()

  return (
    <section id="visit" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-ink dark:text-violet">
            {t.visit.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-medium leading-tight text-ink dark:text-white sm:text-5xl">
            {t.visit.title}
          </h2>
          <p className="mt-4 max-w-xl text-base text-stone dark:text-white/65">{t.visit.sub}</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <img
              src={VISIT_IMG}
              alt="Warm interior of a modern barbershop"
              className="h-full min-h-80 w-full object-cover"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between border border-violet/20 bg-white/80 p-6 sm:p-8 dark:border-white/10 dark:bg-white/[0.04]">
              <dl className="space-y-6">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-violet-ink dark:text-violet" size={18} />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-stone dark:text-white/45">
                      {t.visit.addressLabel}
                    </dt>
                    <dd className="mt-1 whitespace-pre-line text-ink dark:text-white/90">{t.visit.address}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 shrink-0 text-violet-ink dark:text-violet" size={18} />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-stone dark:text-white/45">
                      {t.visit.hoursLabel}
                    </dt>
                    <dd className="mt-1 whitespace-pre-line text-ink dark:text-white/90">{t.visit.hours}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 shrink-0 text-violet-ink dark:text-violet" size={18} />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-stone dark:text-white/45">
                      {t.visit.phoneLabel}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="tel:+17185550192"
                        className="text-ink underline-offset-4 hover:underline dark:text-white/90"
                      >
                        {t.visit.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 shrink-0 text-violet-ink dark:text-violet" size={18} />
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-stone dark:text-white/45">
                      {t.visit.emailLabel}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="mailto:book@valzbarber.com"
                        className="text-ink underline-offset-4 hover:underline dark:text-white/90"
                      >
                        {t.visit.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-violet-ink/30 px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-violet/20 dark:border-violet/40 dark:text-white dark:hover:bg-violet/15"
                >
                  {t.visit.maps}
                </a>
                <a
                  href="mailto:book@valzbarber.com?subject=Chair%20request"
                  className="rounded-md bg-violet px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-violet-deep hover:text-white"
                >
                  {t.visit.request}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
