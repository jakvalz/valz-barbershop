import { useLanguage } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-violet/15 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-display text-lg tracking-[0.16em] text-ink dark:text-white">VALZ</p>
        <div className="text-sm text-stone dark:text-white/50">
          <p>{t.footer.rights}</p>
          <p className="mt-1">{t.footer.note}</p>
        </div>
      </div>
    </footer>
  )
}
