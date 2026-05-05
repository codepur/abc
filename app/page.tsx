import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import StatsBar from "@/components/sections/StatsBar";
import PatternDivider from "@/components/sections/PatternDivider";
import AboutABC from "@/components/sections/AboutABC";
import AboutEvent from "@/components/sections/AboutEvent";
import Theme from "@/components/sections/Theme";
import Speakers from "@/components/sections/Speakers";
import Glimpse from "@/components/sections/Glimpse";
import WhyAttend from "@/components/sections/WhyAttend";
import Registration from "@/components/sections/Registration";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import StickyApply from "@/components/sections/StickyApply";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Ticker />
        <StatsBar />
        <AboutABC />
        <AboutEvent />
        <Theme />
        <Speakers />
        <Glimpse />
        <WhyAttend />
        <Registration />
        <FAQ />
        <PatternDivider />
        <FinalCTA />
      </main>

      <Footer />
      <StickyApply />
    </>
  );
}
