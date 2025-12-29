import React from 'react';
import { useState, useEffect } from 'react';
import { prefersReducedMotion } from './utils/performance';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { GalleryPage } from './components/GalleryPage';
import { AboutPage } from './components/AboutPage';
import { ProjectPage } from './components/ProjectPage';
import { Footer } from './components/Footer';
import { LoadingSpinner } from './components/LoadingSpinner';
import { SEOHead } from './components/SEOHead';
import { useLanguage } from './LanguageContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'gallery' | 'project'>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { language } = useLanguage();
  useSmoothScroll();

  const homeSeoData = {
    de: {
      title: "Bora Company - Präzisions CNC-Bearbeitung & Metallverarbeitung",
      description: "Professionelle CNC-Bearbeitung, Präzisionsfertigung und Oberflächenbehandlung. Verzinkung, Vernickelung, Sonderteile-Fertigung für deutsche Unternehmen. ISO-zertifiziert.",
      keywords: "CNC Bearbeitung, Präzisionsfertigung, Metallverarbeitung, Verzinkung, Vernickelung, Sonderteile Fertigung, CNC Fräsen, CNC Drehen, Oberflächenbehandlung, Lohnfertigung, CNC Lohnfertigung"
    },
    en: {
      title: "Bora Company - Precision CNC Machining & Metal Manufacturing",
      description: "Professional CNC machining, precision manufacturing and surface treatment. Zinc plating, nickel plating, custom parts manufacturing for German companies. ISO certified.",
      keywords: "CNC machining, precision manufacturing, metal processing, zinc plating, nickel plating, custom parts manufacturing, CNC milling, CNC turning, surface treatment"
    }
  };

  // Check for reduced motion preference
  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  // Handle navigation
  React.useEffect(() => {
    const handleHashChange = () => {
      setIsLoading(true);
      
      // Short loading delay for smooth transition
      const delay = reducedMotion ? 100 : 500;
      setTimeout(() => {
      if (window.location.hash === '#about') {
        setCurrentPage('about');
        window.scrollTo(0, 0);
      } else if (window.location.hash === '#gallery') {
        setCurrentPage('gallery');
        window.scrollTo(0, 0);
      } else if (window.location.hash === '#project') {
        setCurrentPage('project');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
        window.scrollTo(0, 0);
      }
        setIsLoading(false);
      }, delay);
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`min-h-screen bg-white antialiased ${reducedMotion ? 'motion-reduce' : ''}`} lang={language}>
      {currentPage === 'home' && (
        <SEOHead 
          title={homeSeoData[language].title}
          description={homeSeoData[language].description}
          keywords={homeSeoData[language].keywords}
          canonical="https://boracompany.com"
        />
      )}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-700 text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" role="main">
      {currentPage === 'home' ? (
        <>
          <HeroSection />
          <ServicesSection />
          <CapabilitiesSection />
          <PortfolioSection />
          <ContactSection />
        </>
      ) : currentPage === 'gallery' ? (
        <GalleryPage />
      ) : currentPage === 'project' ? (
        <ProjectPage />
      ) : (
        <AboutPage />
      )}
      </main>
      <Footer />
    </div>
  );
}

export default App;