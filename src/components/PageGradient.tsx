/**
 * Full-page continuous gradient wash.
 * Light: warm oklch diagonal. Dark: navy→purple diagonal.
 * Absolute in document flow — scrolls with the page (no parallax).
 */
export function PageGradient() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="page-gradient absolute inset-0" />
      <div className="page-gradient-glow page-gradient-glow-a absolute inset-0" />
      <div className="page-gradient-glow page-gradient-glow-b absolute inset-0" />
      <div className="page-gradient-veil absolute inset-0" />
    </div>
  )
}
