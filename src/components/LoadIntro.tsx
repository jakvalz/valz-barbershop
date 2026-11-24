import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BrandLogo } from './BrandLogo'

/**
 * Load intro ≤2s total:
 * gradient already visible → logo pops in (~0.3s) → eases out slowly.
 * Skipped when prefers-reduced-motion.
 */
export function LoadIntro() {
  const reduce = useReducedMotion()
  const [phase, setPhase] = useState<'in' | 'hold' | 'out' | 'done'>(
    reduce ? 'done' : 'in',
  )

  useEffect(() => {
    if (reduce) return

    document.body.style.overflow = 'hidden'
    const hold = window.setTimeout(() => setPhase('hold'), 300)
    const out = window.setTimeout(() => setPhase('out'), 900)
    const done = window.setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
    }, 1900)

    return () => {
      window.clearTimeout(hold)
      window.clearTimeout(out)
      window.clearTimeout(done)
      document.body.style.overflow = ''
    }
  }, [reduce])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="load-intro"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'out' ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="page-gradient absolute inset-0" />
          <div className="page-gradient-glow page-gradient-glow-a absolute inset-0" />
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={
              phase === 'in' || phase === 'hold'
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 1.04 }
            }
            transition={
              phase === 'out'
                ? { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <BrandLogo
              size="intro"
              valzClassName="text-ink dark:text-white"
              barbershopClassName="text-violet-ink dark:text-violet"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
