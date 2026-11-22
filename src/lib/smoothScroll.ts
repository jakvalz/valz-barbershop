import type { MouseEvent } from 'react'

const HEADER_OFFSET_PX = 72

/** Smooth-scroll to an in-page section id. Respects prefers-reduced-motion. */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  // Page top should land at 0; other sections clear the fixed header.
  const top =
    id === 'top'
      ? 0
      : Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX)

  window.scrollTo({
    top,
    behavior: reduce ? 'auto' : 'smooth',
  })
}

/** Handle hash-link clicks: prevent abrupt jumps, close menus, then scroll. */
export function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  opts?: { onAfterClick?: () => void },
) {
  const href = event.currentTarget.getAttribute('href')
  if (!href?.startsWith('#')) return

  const id = href.slice(1)
  if (!id || !document.getElementById(id)) return

  event.preventDefault()
  opts?.onAfterClick?.()

  // Let mobile menu close / body overflow unlock before scrolling
  requestAnimationFrame(() => {
    scrollToId(id)
    if (history.replaceState) {
      const next = `${window.location.pathname}${window.location.search}#${id}`
      history.replaceState(null, '', next)
    }
  })
}
