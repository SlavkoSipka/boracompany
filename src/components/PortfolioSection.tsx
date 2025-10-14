import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Users } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export const PortfolioSection: React.FC = () => {
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

  const clients = [
    { 
      name: "FedEx", 
      industry: "Logistics", 
      link: "https://www.fedex.com",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/fedex1.png"
    },
    { 
      name: "Gebrüder Weiss", 
      industry: "Logistics", 
      link: "https://www.gw-world.com",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/GW.svg"
    },
    { 
      name: "Balti", 
      industry: "Manufacturing", 
      link: "https://www.balti.ch",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/balti.png"
    },
    { 
      name: "Powatec", 
      industry: "Technology", 
      link: "https://www.powatec.com",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/powatec.svg"
    },
    { 
      name: "Essemtec", 
      industry: "Electronics", 
      link: "https://www.essemtec.com",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/essemtec.png"
    },
    { 
      name: "EM Project 89", 
      industry: "Engineering", 
      link: "https://www.emproject89.com",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/emproject89.png"
    },
    { 
      name: "Grünel", 
      industry: "Manufacturing", 
      link: "https://www.gruenel.ch",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/gruenel.webp"
    },
    { 
      name: "Unior Components", 
      industry: "Tools & Components", 
      link: "https://www.unior-components.com",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/unior.svg"
    },
    { 
      name: "Fiat", 
      industry: "Automotive", 
      link: "https://www.fiat.rs",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/fiat.png"
    },
    { 
      name: "Omni Project", 
      industry: "Engineering", 
      link: "https://www.omniproject.co.rs",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/omni.png"
    },
    { 
      name: "Custom RC Parts", 
      industry: "RC Components", 
      link: "https://www.customrc.parts",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/rc.png"
    },
    {
      name: "Arnold Kunz Formbau",
      industry: "Manufacturing",
      link: "https://www.arnold-kunz-formbau.ch/home.html",
      isRealPartner: true,
      logo: null
    },
    {
      name: "Erotech",
      industry: "Technology",
      link: "https://www.erotech.ch/",
      isRealPartner: true,
      logo: "https://aislike.rs/bora/ero.png"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t.portfolio.title}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            {t.portfolio.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <a 
              key={index} 
              href={client.link || '#'}
              target={client.link ? "_blank" : undefined}
              rel={client.link ? "noopener noreferrer" : undefined}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-200 block ${client.link ? 'cursor-pointer' : ''} ${client.isRealPartner ? 'ring-2 ring-orange-200 hover:ring-orange-300' : ''} ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 200}ms` : '0ms'
              }}
            >
              <div className="text-center mb-6">
                {client.logo ? (
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center w-24 h-24 mx-auto mb-4 p-4">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className={`p-4 rounded-lg ${client.isRealPartner ? 'bg-orange-100' : 'bg-blue-100'} w-24 h-24 mx-auto mb-4 flex items-center justify-center`}>
                    <Users className={`h-6 w-6 ${client.isRealPartner ? 'text-orange-600' : 'text-blue-700'}`} />
                  </div>
                )}
                <h4 className={`font-bold text-gray-900 text-xl ${client.isRealPartner ? 'text-blue-800' : ''}`}>
                  {client.name}
                  {client.isRealPartner && <span className="ml-2 text-orange-500">★</span>}
                </h4>
                <p className="text-gray-600 font-medium text-lg">{client.industry} {t.portfolio.industry}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
};
