import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { ContactForm } from './ContactForm';

export const ContactSection: React.FC = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: t.contact.phone,
      content: "+381 (0) 63 806 4125",
      href: "tel:+381638064125"
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: "boracompany@gmail.com",
      href: "mailto:boracompany@gmail.com"
    },
    {
      icon: MapPin,
      title: t.contact.location,
      content: t.contact.address,
      href: null
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white overflow-hidden" ref={sectionRef} itemScope itemType="https://schema.org/ContactPoint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 px-2 sm:px-0" itemProp="name">{t.contact.title}</h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0" itemProp="description">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className={`bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{
            transitionDelay: isVisible ? '200ms' : '0ms'
          }}>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8">{t.contact.requestQuote}</h4>
            <ContactForm />
          </div>
          
          {/* Contact Information */}
          <div className={`space-y-4 sm:space-y-6 lg:space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{
            transitionDelay: isVisible ? '400ms' : '0ms'
          }}>
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className={`flex items-start space-x-4 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${600 + index * 150}ms` : '0ms'
                }}
              >
                <div className="bg-orange-500 p-2 rounded-lg shadow-lg">
                  <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{info.title}</h4>
                  {info.href ? (
                    <a 
                      href={info.href}
                      itemProp={info.title === t.contact.phone ? 'telephone' : info.title === t.contact.email ? 'email' : 'address'}
                      className="text-gray-300 text-base sm:text-lg hover:text-orange-400 transition-colors duration-200"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-base sm:text-lg whitespace-pre-line" itemProp="address">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
            
            {/* Business Hours */}
            <div className={`bg-gray-800 rounded-xl p-3 sm:p-4 lg:p-6 mt-4 sm:mt-6 lg:mt-8 shadow-lg transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{
              transitionDelay: isVisible ? '1050ms' : '0ms'
            }}>
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" />
                <h5 className="text-base sm:text-lg font-semibold text-orange-400">{t.businessHours.title}</h5>
              </div>
              <div className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm lg:text-base">
                <p className="flex justify-between items-start">
                  <span>{t.businessHours.monday}</span>
                  <span className="text-right ml-2">8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between items-start">
                  <span>{t.businessHours.saturday}</span>
                  <span className="text-right ml-2">9:00 AM - 2:00 PM</span>
                </p>
                <p className="flex justify-between items-start">
                  <span>{t.businessHours.sunday}</span>
                  <span className="text-right ml-2">{t.businessHours.closed}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};