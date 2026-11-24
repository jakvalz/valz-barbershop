type BrandLogoProps = {
  size?: 'nav' | 'hero' | 'intro'
  className?: string
  valzClassName?: string
  barbershopClassName?: string
}

const SHOP = 'BARBERSHOP'.split('')

/**
 * Shared VALZ / BARBERSHOP lockup.
 * BARBERSHOP is letter-spaced via justify-between so left and right edges
 * flush with VALZ. VALZ uses negative margin to cancel CSS tracking’s
 * trailing gap after the final letter (otherwise shop overshoots the Z).
 */
export function BrandLogo({
  size = 'nav',
  className = '',
  valzClassName = '',
  barbershopClassName = '',
}: BrandLogoProps) {
  const sizes = {
    nav: {
      wrap: 'gap-[0.1em]',
      valz: 'text-2xl tracking-[0.14em] sm:text-[1.65rem] -mr-[0.14em]',
      shop: 'text-[0.55rem] sm:text-[0.6rem]',
    },
    hero: {
      wrap: 'gap-[0.12em]',
      valz: 'text-6xl tracking-[0.12em] sm:text-7xl md:text-8xl -mr-[0.12em]',
      shop: 'text-base sm:text-lg md:text-xl',
    },
    intro: {
      wrap: 'gap-[0.12em]',
      valz: 'text-5xl tracking-[0.12em] sm:text-6xl md:text-7xl -mr-[0.12em]',
      shop: 'text-sm sm:text-base md:text-lg',
    },
  }[size]

  return (
    <span className={`inline-flex flex-col items-stretch leading-none ${sizes.wrap} ${className}`}>
      <span className={`font-display font-medium ${sizes.valz} ${valzClassName}`}>VALZ</span>
      <span
        className={`flex justify-between font-sans font-semibold uppercase ${sizes.shop} ${barbershopClassName}`}
        aria-label="BARBERSHOP"
      >
        {SHOP.map((letter, i) => (
          <span key={`${letter}-${i}`} aria-hidden="true">
            {letter}
          </span>
        ))}
      </span>
    </span>
  )
}
