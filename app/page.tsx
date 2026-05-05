import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import StatsBar from "@/components/sections/StatsBar";
import PatternDivider from "@/components/sections/PatternDivider";
import Performance from "@/components/sections/Performance";
import AboutABC from "@/components/sections/AboutABC";
import Theme from "@/components/sections/Theme";
import Speakers from "@/components/sections/Speakers";
import WhyAttend from "@/components/sections/WhyAttend";
import EventDetails from "@/components/sections/EventDetails";
import Sponsorship from "@/components/sections/Sponsorship";
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

        <PatternDivider />
        <Performance />

        {/* <PatternDivider /> */}
        <AboutABC />

        {/* <PatternDivider /> */}
        <Theme />

        {/* <PatternDivider /> */}
        <Speakers />

        {/* <PatternDivider />   */}
        <WhyAttend />

        {/* <PatternDivider /> */}
        <EventDetails />

        {/* <PatternDivider /> */}
        <Sponsorship />

        {/* <PatternDivider /> */}
        <Registration />

        {/* <PatternDivider /> */}
        <FAQ />

        <PatternDivider />
        <FinalCTA />
      </main>

      <Footer />
      <StickyApply />
    </>
  );
}
