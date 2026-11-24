import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { scrollToId } from '../lib/smoothScroll'

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={reduce ? false : { opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, scale: 0.8, y: 12 }}
          whileHover={reduce ? undefined : { scale: 1.06 }}
          whileTap={reduce ? undefined : { scale: 0.94 }}
          onClick={() => scrollToId('top')}
          className="back-to-top fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-[0.5px] border border-violet/50 bg-ink/90 text-violet backdrop-blur-sm dark:bg-ink"
          aria-label="Back to top"
        >
          <span
            className="pointer-events-none absolute inset-1 border border-violet/40"
            style={{
              clipPath:
                'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            }}
            aria-hidden="true"
          />
          <ChevronUp size={18} strokeWidth={2.25} className="relative" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
