import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { asset } from '../lib/asset'
import { Reveal } from './Reveal'

const FADE_IMG = asset('images/luis-quintero-ia5aE4JL8_A-unsplash.jpg')

export function Fades() {
  const { t } = useLanguage()

  return (
    <section id="fades" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-ink dark:text-violet">
              {t.fades.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink dark:text-white sm:text-5xl">
              {t.fades.title}
            </h2>
            <p className="mt-4 max-w-lg text-base text-stone dark:text-white/65">{t.fades.sub}</p>
            <div className="mt-8 overflow-hidden rounded-sm lg:hidden">
              <img
                src={FADE_IMG}
                alt="Clean fade haircut on a young man"
                className="aspect-[16/11] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal className="hidden lg:block">
            <img
              src={FADE_IMG}
              alt="Clean fade haircut on a young man"
              className="aspect-[5/6] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.fades.items.map((item, i) => (
            <Reveal key={item.title} delay={0.04 * i}>
              <motion.article
                whileHover={{ y: -3 }}
                className="border border-violet/15 bg-white/60 p-5 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <h3 className="font-display text-xl text-ink dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-stone dark:text-white/60">{item.desc}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
