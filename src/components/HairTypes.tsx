import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { Reveal } from './Reveal'

const HAIR_IMG = '/images/ibrahim-guetar-4brY7Bwss1I-unsplash.jpg'

export function HairTypes() {
  const { t } = useLanguage()

  return (
    <section id="hair" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-ink dark:text-violet">
            {t.hair.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight text-ink dark:text-white sm:text-5xl">
            {t.hair.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-stone dark:text-white/65">{t.hair.sub}</p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <img
              src={HAIR_IMG}
              alt="Barber styling textured hair"
              className="h-full min-h-72 w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.hair.items.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <motion.article
                  whileHover={{ y: -3 }}
                  className="flex h-full flex-col border border-violet/15 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]"
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
