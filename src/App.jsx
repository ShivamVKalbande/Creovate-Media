import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
import ServiceDetail from "./components/ServiceDetail";
import GrowthPrograms from "./components/GrowthPrograms";
import StarterPackages from "./components/StarterPackages";
import SpecializedServices from "./components/SpecializedServices";
import Contact from "./components/Contact";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = window.location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroLoader onFinish={() => setShowIntro(false)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPageWrapper />} />
        
        <Route path="/home" element={
          <MainLayout>
            <Hero />
            <Services />
            <Process />
            {/* <Portfolio /> */}
            <Testimonials />
            <CTA />
          </MainLayout>
        } />

        <Route path="/portfolio" element={
          <MainLayout>
            <Portfolio />
          </MainLayout>
        } />

        {/* Service Detail Pages */}
        <Route path="/services/:slug" element={
          <MainLayout>
            <ServiceDetail />
          </MainLayout>
        } />

        {/* Growth Programs */}
        <Route path="/services/growth-programs" element={
          <MainLayout>
            <GrowthPrograms />
          </MainLayout>
        } />

        {/* Starter Packages */}
        <Route path="/services/starter-packages" element={
          <MainLayout>
            <StarterPackages />
          </MainLayout>
        } />

        {/* Specialized Services */}
        <Route path="/services/specialized" element={
          <MainLayout>
            <SpecializedServices />
          </MainLayout>
        } />

        {/* Contact Page */}
        <Route path="/contact" element={
          <MainLayout>
            <Contact />
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