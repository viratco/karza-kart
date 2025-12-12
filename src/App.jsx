import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import StatsSection from './components/StatsSection/StatsSection';
import AboutSection from './components/AboutSection/AboutSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import CurvedLoop from './components/CurvedLoop/CurvedLoop';
import Preloader from './components/Preloader/Preloader';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Preloader onLoadingComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <>
          <Navbar />
          <HeroSection />
          <CurvedLoop />
          <ServicesSection />
          <StatsSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
