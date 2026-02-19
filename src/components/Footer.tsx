import React from 'react';
import { Wrench } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Wrench className="h-6 w-6 text-orange-400" />
            <span className="text-xl font-bold">Precision Manufacturing</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-gray-400">{t.footer.copyright}</p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span>{language === 'de' ? 'Website von' : 'Website by'}</span>
                <a 
                  href="https://aisajt.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 transition-colors duration-200 font-medium"
                >
                  AiSajt
                </a>
              </div>
              <span className="hidden md:inline text-gray-600">|</span>
              <a 
                href="#project" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#project';
                  window.scrollTo(0, 0);
                }}
                className="text-orange-400 hover:text-orange-300 transition-colors duration-200 font-medium"
              >
                {language === 'de' ? 'Über das Projekt' : 'About the Project'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};