import React, { useEffect, useRef, useState } from 'react';
import { Zap, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export const CapabilitiesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const capabilities = [
    {
      icon: Zap,
      title: t.capabilities.highSpeed.title,
      description: t.capabilities.highSpeed.description,
      color: 'text-orange-400'
    },
    {
      icon: Award,
      title: t.capabilities.isoCertified.title,
      description: t.capabilities.isoCertified.description,
      color: 'text-orange-400'
    }
  ];

  const surfaceOptions = [
    {
      title: t.capabilities.surfaceOptions.zinc.title,
      description: t.capabilities.surfaceOptions.zinc.description,
      borderColor: 'border-orange-400'
    },
    {
      title: t.capabilities.surfaceOptions.nickel.title,
      description: t.capabilities.surfaceOptions.nickel.description,
      borderColor: 'border-blue-400'
    },
    {
      title: t.capabilities.surfaceOptions.custom.title,
      description: t.capabilities.surfaceOptions.custom.description,
      borderColor: 'border-green-400'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 overflow-hidden">
        <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 break-words hyphens-auto leading-tight">
              {t.capabilities.title}
            </h3>
            <p className="text-gray-300 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg leading-relaxed break-words">
              <span className="whitespace-pre-wrap">{t.capabilities.description}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {capabilities.map((capability, index) => (
                <div 
                  key={index} 
                  className={`flex items-start space-x-3 sm:space-x-4 transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${400 + index * 200}ms` : '0ms'
                  }}
                >
                  <div>
                    <h5 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg break-words">{capability.title}</h5>
                    <p className="text-gray-400 leading-relaxed text-xs sm:text-sm lg:text-base break-words">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{
            transitionDelay: isVisible ? '200ms' : '0ms'
          }}>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8 break-words">{t.capabilities.surfaceOptions.title}</h4>
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {surfaceOptions.map((option, index) => (
                <div 
                  key={index} 
                  className={`border-l-3 sm:border-l-4 ${option.borderColor} pl-3 sm:pl-4 lg:pl-6 py-1 sm:py-2 transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${600 + index * 150}ms` : '0ms'
                  }}
                >
                  <h5 className="font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 break-words">{option.title}</h5>
                  <p className="text-gray-400 leading-relaxed text-xs sm:text-sm lg:text-base break-words">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};