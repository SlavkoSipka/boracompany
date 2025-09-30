import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [videoLoaded, setVideoLoaded] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden" itemScope itemType="https://schema.org/Organization">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover"
          aria-label="CNC machining workshop video background"
        >
          <source src="https://aislike.rs/bora/hero.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ${videoLoaded ? 'opacity-50' : 'opacity-70'}`}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center py-8 sm:py-12 lg:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-in-left" itemProp="name">
            {t.hero.title}
            <span className="block text-orange-400 mt-2 animate-slide-in-right animation-delay-300">
              {t.hero.subtitle}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-in-left animation-delay-600 px-2 sm:px-0" itemProp="description">
            <span className="block sm:hidden">
              {language === 'de' 
                ? 'Professionelle CNC-Bearbeitung und Präzisionsfertigung. Vom Prototyp bis zur Serie liefern wir Exzellenz.'
                : 'Professional CNC machining and precision manufacturing. From prototype to production, we deliver excellence.'
              }
            </span>
            <span className="hidden sm:block">
              {t.hero.description}
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right animation-delay-900">
            <button 
              onClick={scrollToContact}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Request quote for CNC machining services"
            >
              <span>{t.hero.getQuote}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollToPortfolio}
              className="border-2 border-blue-300 text-blue-100 hover:bg-blue-700 hover:border-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="View our manufacturing portfolio and client work"
            >
              {t.hero.viewPortfolio}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};