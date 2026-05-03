import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import StatsBar from '@/components/StatsBar'
import PatternDivider from '@/components/PatternDivider'
import Performance from '@/components/Performance'
import AboutABC from '@/components/AboutABC'
import KeyFeatures from '@/components/KeyFeatures'
import Theme from '@/components/Theme'
import Speakers from '@/components/Speakers'
import Highlights from '@/components/Highlights'
import PanelDiscussion from '@/components/PanelDiscussion'
import WhyAttend from '@/components/WhyAttend'
import EventDetails from '@/components/EventDetails'
import Sponsorship from '@/components/Sponsorship'
import Registration from '@/components/Registration'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <StatsBar />
        <AboutABC />
        <PatternDivider />
        <Theme />
        <Speakers />
        <Highlights />
        <WhyAttend />
        <Registration />
        <FAQ />
        <Sponsorship />
        <FinalCTA />
        <Footer />
      </main>
      <StickyCTA />
    </>
  )
}
