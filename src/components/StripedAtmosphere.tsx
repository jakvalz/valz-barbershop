import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Fixed atmospheric stripe layers that drift at different rates on scroll.
 * Purple / black hues for light and dark themes; motion disabled when reduced.
 */
export function StripedAtmosphere() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()

  const ySlow = useTransform(scrollY, [0, 2400], reduce ? [0, 0] : [0, -120])
  const yMid = useTransform(scrollY, [0, 2400], reduce ? [0, 0] : [0, -220])
  const yFast = useTransform(scrollY, [0, 2400], reduce ? [0, 0] : [0, -340])
  const rotate = useTransform(scrollY, [0, 2400], reduce ? [0, 0] : [0, 1.2])

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="stripe-base absolute inset-0" />

      <motion.div
        style={{ y: ySlow, rotate }}
        className="stripe-band stripe-band-a absolute -inset-[20%] opacity-90"
      />
      <motion.div
        style={{ y: yMid }}
        className="stripe-band stripe-band-b absolute -inset-[25%] opacity-70"
      />
      <motion.div
        style={{ y: yFast }}
        className="stripe-band stripe-band-c absolute -inset-[30%] opacity-55"
      />

      <div className="stripe-veil absolute inset-0" />
    </div>
  )
}
