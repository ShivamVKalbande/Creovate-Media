import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import IntroLoader from "./components/IntroLoader";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer"; 

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroLoader onFinish={() => setShowIntro(false)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageWrapper />} />
        
        <Route path="/home" element={
          <MainLayout>
            <Hero />
            <Services />
            <Process />
            <Portfolio />
            <Testimonials />
            <CTA />
          </MainLayout>
        } />

        <Route path="/portfolio" element={
          <MainLayout>
            <Portfolio />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

function LandingPageWrapper() {
  const navigate = useNavigate();

  return (
    <Landing 
      onExplore={() => navigate("/home")} 
      onPortfolioClick={() => navigate("/portfolio")} 
    />
  );
}
