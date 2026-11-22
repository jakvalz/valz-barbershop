import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { Reveal } from './Reveal'

export function Pricing() {
  const { t } = useLanguage()

  return (
    <section id="pricing" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-ink dark:text-violet">
            {t.pricing.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink dark:text-white sm:text-5xl">
            {t.pricing.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-stone dark:text-white/65">{t.pricing.sub}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {t.pricing.groups.map((group, i) => (
            <Reveal key={group.title} delay={0.05 * i}>
              <motion.article
                whileHover={{ y: -4 }}
                className="h-full border border-violet/20 bg-cream p-6 shadow-[0_12px_40px_-28px_rgba(76,47,184,0.35)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
              >
                <h3 className="font-display text-2xl text-violet-ink dark:text-violet">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 border-b border-violet/10 pb-3 last:border-0 last:pb-0 dark:border-white/10"
                    >
                      <span className="text-sm text-ink/85 dark:text-white/80">{item.name}</span>
                      <span className="shrink-0 font-medium tabular-nums text-ink dark:text-white">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
