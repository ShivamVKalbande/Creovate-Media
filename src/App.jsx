import { useState, useRef, useEffect } from "react";
import IntroLoader from "./components/IntroLoader";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isExploring, setIsExploring] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow =
      showIntro || !isExploring ? "hidden" : "auto";
  }, [showIntro, isExploring]);

  const handleExplore = () => {
    setIsExploring(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

    const scrollToPortfolio = () => {     // ✅ ADD THIS
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  if (showIntro) {
    return <IntroLoader onFinish={() => setShowIntro(false)} />;
  }

  if (!isExploring) {
    return <Landing onExplore={handleExplore} />;
  }

  return (
    <div ref={contentRef}>
      <Navbar onPortfolioClick={scrollToPortfolio}/>
      <Hero />
      <Services />
      <Process />
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
