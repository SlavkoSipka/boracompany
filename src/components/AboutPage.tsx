import React from 'react';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Factory, Users, Award, Target } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { SEOHead } from './SEOHead';

// Counter animation hook
const useCounter = (end: number, duration: number = 2000, start: number = 0) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    const startTime = Date.now();
    const startValue = start;
    const endValue = end;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start, isAnimating]);

  return { count, startAnimation };
};

export const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const seoData = {
    de: {
      title: 'Über Uns - Bora Company | 15+ Jahre CNC-Bearbeitung Erfahrung',
      description:
        'Seit 1996 spezialisiert auf Präzisions-CNC-Bearbeitung. 500+ Projekte, 50+ zufriedene Kunden, ISO-zertifizierte Qualität. Vertrauen Sie auf unsere Expertise.',
      keywords:
        'Bora Company Geschichte, CNC Bearbeitung Erfahrung, Präzisionsfertigung, ISO Zertifizierung, Metallverarbeitung Expertise, 15 Jahre Erfahrung, CNC Lohnfertigung',
    },
    en: {
      title: 'About Us - Bora Company | 15+ Years CNC Machining Experience',
      description:
        'Since 1996 specialized in precision CNC machining. 500+ projects, 50+ satisfied customers, ISO certified quality. Trust our expertise.',
      keywords:
        'Bora Company history, CNC machining experience, precision manufacturing, ISO certification, metal processing expertise, 15 years experience',
    },
  } as const;

  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Counter hooks
  const experienceCounter = useCounter(15, 2000);
  const projectsCounter = useCounter(500, 2500);
  const clientsCounter = useCounter(50, 2200);
  const satisfactionCounter = useCounter(99, 1800);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
          // Start counter animations when content becomes visible
          setTimeout(() => {
            experienceCounter.startAnimation();
          }, 400);
          setTimeout(() => {
            projectsCounter.startAnimation();
          }, 600);
          setTimeout(() => {
            clientsCounter.startAnimation();
          }, 800);
          setTimeout(() => {
            satisfactionCounter.startAnimation();
          }, 1000);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }
    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    return () => {
      if (heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
      if (contentRef.current) {
        contentObserver.unobserve(contentRef.current);
      }
    };
  }, []);

  // New localized paragraph for the right column
  const specialParagraph: Record<'de' | 'en', string> = {
    de: 'Wir sind besonders stolz auf die direkte Zusammenarbeit mit Jim Hensons Creature Shop aus Hollywood und auf die Herstellung von Teilen für deren Hand Control.',
    en: "We are especially proud of our direct collaboration with Jim Henson's Creature Shop in Hollywood and of manufacturing parts for their Hand Control.",
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical="https://boracompany.ch/about"
      />

      {/* Hero Section */}
      <section className="relative h-[700px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <img
            src="https://aislike.rs/bora/34.jpg"
            alt="Bora Company Workshop"
            loading="eager"
            className={`w-full h-full object-cover opacity-40 transition-all duration-1500 ${
              isHeroVisible ? 'scale-100 opacity-40' : 'scale-110 opacity-0'
            }`}
          />
          <div
            className={`absolute inset-0 bg-blue-900 bg-opacity-0 transition-all duration-1000 ${
              isHeroVisible ? 'bg-opacity-0' : 'bg-opacity-30'
            }`}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div
            className={`text-white transition-all duration-1000 ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h1
              className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-1200 ${
                isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{
                transitionDelay: isHeroVisible ? '300ms' : '0ms',
              }}
            >
              {t.about.title}
            </h1>
            <p
              className={`text-xl md:text-2xl text-blue-100 max-w-2xl transition-all duration-1200 ${
                isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{
                transitionDelay: isHeroVisible ? '600ms' : '0ms',
              }}
            >
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20" ref={contentRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* LEFT: text */}
            <div
              className={`transition-all duration-1200 ${
                isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: isContentVisible ? '200ms' : '0ms' }}
            >
              <div className="space-y-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {t.about.ourStory.welcome}
                </h3>
                <p>{t.about.ourStory.paragraph1}</p>

                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mt-6 mb-2">
                  {t.about.ourStory.missionTitle}
                </h4>
                <p>{t.about.ourStory.paragraph2}</p>

                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mt-6 mb-2">
                  {t.about.ourStory.specializationTitle}
                </h4>
                <p>{t.about.ourStory.paragraph3}</p>

                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mt-6 mb-2">
                  {t.about.ourStory.machineryTitle}
                </h4>
                <p className="whitespace-pre-wrap">{t.about.ourStory.paragraph4}</p>

                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mt-6 mb-2">
                  {t.about.ourStory.historyTitle}
                </h4>
                <p>{t.about.ourStory.paragraph5}</p>

                <p className="mt-4">{t.about.ourStory.paragraph6}</p>
                <p className="mt-4">{t.about.ourStory.paragraph7}</p>
                <p className="mt-4">{t.about.ourStory.paragraph8}</p>
                <p className="mt-4">{t.about.ourStory.paragraph9}</p>

                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mt-6 mb-2">
                  {t.about.ourStory.standardsTitle}
                </h4>
                <p>{t.about.ourStory.paragraph10}</p>

                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mt-6 mb-2">
                  {t.about.ourStory.goalTitle}
                </h4>
                <p>{t.about.ourStory.paragraph11}</p>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-800 font-medium">
                    📍 {t.about.ourStory.website}{' '}
                    <a
                      href="https://www.customrc.parts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors duration-200"
                    >
                      www.customrc.parts
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: images + new paragraph + video + stats */}
            <div
              className={`transition-all duration-1200 ${
                isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionDelay: isContentVisible ? '400ms' : '0ms' }}
            >
              <div className="flex flex-col gap-6 sm:gap-8">
                {/* Collage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <img
                    src="https://aislike.rs/bora/slika.jpg"
                    alt="Bora Company Workshop"
                    loading="lazy"
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                  />
                  <img
                    src="https://aislike.rs/bora/slika1.jpg"
                    alt="CNC Manufacturing Process"
                    loading="lazy"
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                  />
                </div>

                {/* NEW: Partner paragraph + YouTube video */}
                <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-5">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {specialParagraph[language]}
                  </p>
                  <div className="mt-4">
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/gzbBdRHqGcQ"
                        title="Jim Henson's Creature Shop - Hand Control"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                {/* Image + additional text */}
                <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-5">
                  <img
                    src="https://aislike.rs/bora/b.jpg"
                    alt="Hybrid 3000 Prototyp - Komponenten"
                    loading="lazy"
                    className="w-full h-auto rounded-lg object-cover mb-4"
                  />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    Dazu kommt noch die Teilnahme an der Herstellung von diversen Hilfsmitteln und Teilen welche für die Herstellung von den ersten Prototypen der Hybrid 3000 Sportwaffe von Arnold Kunz und Grünig + Elmiger benötigt wurden.
                  </p>
                </div>

                {/* Stats card */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-1 sm:mb-2">
                        {Math.min(experienceCounter.count, new Date().getFullYear() - 1996)}+
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                        {t.about.stats.experience}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-1 sm:mb-2">
                        {projectsCounter.count}+
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                        {t.about.stats.projects}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-1 sm:mb-2">
                        {clientsCounter.count}+
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                        {t.about.stats.clients}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-1 sm:mb-2">
                        {satisfactionCounter.count}%
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                        {t.about.stats.satisfaction}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h3
              className={`text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8 lg:mb-12 transition-all duration-1000 ${
                isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isContentVisible ? '600ms' : '0ms' }}
            >
              {t.about.values.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div
                className={`text-center transition-all duration-1000 ${
                  isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: isContentVisible ? '800ms' : '0ms' }}
              >
                <div className="bg-blue-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-700" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {t.about.values.precision.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t.about.values.precision.description}
                </p>
              </div>
              <div
                className={`text-center transition-all duration-1000 ${
                  isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: isContentVisible ? '1000ms' : '0ms' }}
              >
                <div className="bg-orange-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {t.about.values.quality.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t.about.values.quality.description}
                </p>
              </div>
              <div
                className={`text-center transition-all duration-1000 ${
                  isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: isContentVisible ? '1200ms' : '0ms' }}
              >
                <div className="bg-green-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {t.about.values.partnership.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {t.about.values.partnership.description}
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div
            className={`bg-gray-900 text-white rounded-xl p-6 sm:p-8 lg:p-12 text-center transition-all duration-1000 ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: isContentVisible ? '1400ms' : '0ms' }}
          >
            <Factory className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-orange-400 mx-auto mb-4 sm:mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{t.about.mission.title}</h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t.about.mission.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

