import React from 'react';
import { useState } from 'react';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (sectionId: string) => {
    const currentHash = window.location.hash;
    if (currentHash === '#about' || currentHash === '#gallery') {
      // We're on a different page, go to home first
      window.location.hash = '';
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 800);
    } else {
      // We're already on home page
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
                closeMenu();
              }}
              className="cursor-pointer"
              aria-label="Bora Company Homepage"
            >
              <img 
                src="https://aislike.rs/bora/logo1.jpg" 
                alt="Bora Company Logo" 
                loading="eager"
                className="h-12 w-auto object-contain hover:opacity-80 transition-opacity duration-200"
                width="48"
                height="48"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('services');
                }}
                className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
                aria-label="View our CNC machining services"
              >
                {t.header.services}
              </a>
              
              <a 
                href="#gallery" 
                className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#gallery';
                  closeMenu();
                }}
                aria-label="View our work gallery"
              >
                {t.header.gallery}
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
               onClick={(e) => {
                 e.preventDefault();
                 window.location.hash = '#about';
                 closeMenu();
               }}
               aria-label="Learn about our company"
              >
                {t.header.about}
              </a>
              <a 
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('portfolio');
                }}
                className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
                aria-label="View our client portfolio"
              >
                {t.header.portfolio}
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('contact');
                }}
                className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium"
                aria-label="Contact us for quotes"
              >
                {t.header.contact}
              </a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-blue-700 transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l border-gray-300 pl-6" role="group" aria-label="Language selection">
              <Globe className="h-4 w-4 text-gray-500" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
                  language === 'en' 
                    ? 'bg-blue-700 text-white shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label="Switch to English"
                aria-pressed={language === 'en'}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage('de')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
                  language === 'de' 
                    ? 'bg-blue-700 text-white shadow-sm' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label="Switch to German"
                aria-pressed={language === 'de'}
              >
                DE
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="py-4 space-y-2 border-t border-gray-200" role="navigation" aria-label="Mobile navigation">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('services');
              }}
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              {t.header.services}
            </a>
            
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#gallery';
                closeMenu();
              }}
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              {t.header.gallery}
            </a>
            
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#about';
                closeMenu();
              }}
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              {t.header.about}
            </a>
            
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('portfolio');
              }}
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              {t.header.portfolio}
            </a>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('contact');
              }}
              className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              {t.header.contact}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};