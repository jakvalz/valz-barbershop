import { motion } from 'framer-motion'

type MenuToggleIconProps = {
  open: boolean
  reduce?: boolean | null
}

/**
 * Hamburger → scissors morph (barbershop brand).
 * Three bars ease into blade + pivot + handle geometry.
 */
export function MenuToggleIcon({ open, reduce }: MenuToggleIconProps) {
  const t = reduce
    ? { duration: 0 }
    : { duration: 0.38, ease: open ? ([0.4, 0, 1, 1] as const) : ([0, 0, 0.2, 1] as const) }

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="overflow-visible">
      {/* Top bar → upper blade */}
      <motion.line
        x1="3"
        x2="17"
        y1="5"
        y2="5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        animate={
          open
            ? { x1: 4, y1: 5, x2: 16, y2: 15 }
            : { x1: 3, y1: 5, x2: 17, y2: 5 }
        }
        transition={t}
      />
      {/* Middle bar → pivot ring */}
      <motion.circle
        cx="10"
        cy="10"
        r={open ? 2.1 : 0}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        animate={{
          r: open ? 2.1 : 0,
          opacity: open ? 1 : 0,
        }}
        transition={t}
      />
      <motion.line
        x1="3"
        x2="17"
        y1="10"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        animate={{
          opacity: open ? 0 : 1,
          x1: open ? 10 : 3,
          x2: open ? 10 : 17,
        }}
        transition={t}
      />
      {/* Bottom bar → lower blade */}
      <motion.line
        x1="3"
        x2="17"
        y1="15"
        y2="15"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        animate={
          open
            ? { x1: 4, y1: 15, x2: 16, y2: 5 }
            : { x1: 3, y1: 15, x2: 17, y2: 15 }
        }
        transition={t}
      />
    </svg>
  )
}
