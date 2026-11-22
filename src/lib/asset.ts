/** Prefix public asset paths with the Vite base (needed for GitHub Pages). */
export function asset(path: string): string {
  const normalized = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}
