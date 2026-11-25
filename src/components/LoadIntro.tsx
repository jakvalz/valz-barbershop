import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BrandLogo } from './BrandLogo'

const EASE = [0.22, 1, 0.36, 1] as const
/** Total timeline ~1.9s (pop 0.3 → hold → ease-out), then unmount. */
const TOTAL_MS = 1900

/**
 * Load intro ≤2s total:
 * gradient already visible → logo pops in (~0.3s) → eases out slowly.
 * Single `show` flag + keyframes (no mid-tween phase retargets).
 * Skipped when prefers-reduced-motion.
 */
export function LoadIntro() {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(() => !reduce)

  useEffect(() => {
    if (reduce) {
      setShow(false)
      return
    }

    document.body.style.overflow = 'hidden'
    const done = window.setTimeout(() => setShow(false), TOTAL_MS)

    return () => {
      window.clearTimeout(done)
      document.body.style.overflow = ''
    }
  }, [reduce])

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = ''
      }}
    >
      {show && (
        <motion.div
          key="load-intro"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: TOTAL_MS / 1000, times: [0, 0.47, 1], ease: EASE }}
          style={{ willChange: 'opacity' }}
        >
          {/* Full PageGradient stack — avoids wash flash on reveal */}
          <div className="page-gradient absolute inset-0" />
          <div className="page-gradient-glow page-gradient-glow-a absolute inset-0" />
          <div className="page-gradient-glow page-gradient-glow-b absolute inset-0" />
          <div className="page-gradient-veil absolute inset-0" />

          <motion.div
            initial={false}
            animate={{
              opacity: [0, 1, 1, 1],
              scale: [0.88, 1, 1, 1.03],
            }}
            transition={{
              duration: TOTAL_MS / 1000,
              times: [0, 0.16, 0.47, 1],
              ease: EASE,
            }}
            style={{ willChange: 'transform, opacity' }}
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
