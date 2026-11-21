import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Dictionary, type Locale } from '../i18n/translations'

type LanguageContextValue = {
  locale: Locale
  t: Dictionary
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('valz-locale')
    return saved === 'es' ? 'es' : 'en'
  })

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem('valz-locale', locale)
  }, [locale])

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'en' ? 'es' : 'en'))
  }, [])

  const value = useMemo(
    () => ({
      locale,
      t: translations[locale] as Dictionary,
      toggleLocale,
    }),
    [locale, toggleLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
