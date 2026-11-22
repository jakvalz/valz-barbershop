import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { asset } from '../lib/asset'
import { Reveal } from './Reveal'

const SERVICE_IMG = asset('images/jose-pinto-yG0Z9OwXWks-unsplash.jpg')

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-ink dark:text-violet">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight text-ink dark:text-white sm:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-stone dark:text-white/65">{t.services.sub}</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start">
          <Reveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src={SERVICE_IMG}
                alt="Barber carefully shaping a client's beard"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {t.services.items.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className="h-full border border-violet/15 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <h3 className="font-display text-xl text-ink dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone dark:text-white/60">{item.desc}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
