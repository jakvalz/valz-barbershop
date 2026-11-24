import { BackToTop } from './components/BackToTop'
import { Beards } from './components/Beards'
import { Fades } from './components/Fades'
import { Footer } from './components/Footer'
import { HairTypes } from './components/HairTypes'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LeaveReview } from './components/LeaveReview'
import { LoadIntro } from './components/LoadIntro'
import { PageGradient } from './components/PageGradient'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { Socials } from './components/Socials'
import { Testimonials } from './components/Testimonials'
import { Visit } from './components/Visit'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-svh">
          <PageGradient />
          <LoadIntro />
          <Header />
          <main className="relative z-0">
            <Hero />
            <Services />
            <Fades />
            <HairTypes />
            <Beards />
            <Pricing />
            <Visit />
            <Testimonials />
            <LeaveReview />
            <Socials />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
