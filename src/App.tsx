import { BackToTop } from './components/BackToTop'
import { Beards } from './components/Beards'
import { Fades } from './components/Fades'
import { Footer } from './components/Footer'
import { HairTypes } from './components/HairTypes'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { Visit } from './components/Visit'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="atmosphere light-surface min-h-svh">
          <Header />
          <main>
            <Hero />
            <Services />
            <Fades />
            <HairTypes />
            <Beards />
            <Pricing />
            <Visit />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
