import type { MouseEvent } from 'react'

/** Smooth-scroll to an in-page section id. Respects prefers-reduced-motion. */
export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
    block: 'start',
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
  scrollToId(id)

  if (history.replaceState) {
    history.replaceState(null, '', href)
  }
}
