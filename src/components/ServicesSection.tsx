import React, { useEffect, useRef, useState } from 'react';
import { Settings, Wrench, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export const ServicesSection: React.FC = () => {
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

  const services = [
    {
      icon: Settings,
      title: t.services.cncMachining.title,
      description: t.services.cncMachining.description,
      features: t.services.cncMachining.features,
      color: 'text-blue-700'
    },
    {
      icon: Wrench,
      title: t.services.customParts.title,
      description: t.services.customParts.description,
      features: t.services.customParts.features,
      color: 'text-blue-700'
    },
    {
      icon: Shield,
      title: t.services.surfaceTreatments.title,
      description: t.services.surfaceTreatments.description,
      features: t.services.surfaceTreatments.features,
      color: 'text-blue-700'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef} itemScope itemType="https://schema.org/Service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6" itemProp="name">
            {t.services.title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" itemProp="description">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 group ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className={`${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-10 w-10" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};