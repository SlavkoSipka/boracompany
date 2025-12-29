import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Code, Zap, TrendingUp, CheckCircle, Target } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { SEOHead } from './SEOHead';

export const ProjectPage: React.FC = () => {
  const { language } = useLanguage();
  const contentRef = useRef<HTMLElement>(null);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        contentObserver.unobserve(contentRef.current);
      }
    };
  }, []);

  const content = {
    de: {
      title: 'Website-Projekt: Bora Company',
      subtitle: 'Professionelle Webentwicklung für Präzisionsfertigung',
      seo: {
        title: 'Website-Projekt - Bora Company | Webentwicklung Case Study',
        description: 'Erfahren Sie, wie die professionelle Website für Bora Company entwickelt wurde. Moderne Webentwicklung, SEO-Optimierung und Performance-Tuning für CNC-Bearbeitungsunternehmen.',
        keywords: 'Webentwicklung Case Study, Website-Projekt, SEO Optimierung, Web Design, React Entwicklung',
      },
      sections: {
        intro: {
          title: 'Über das Projekt',
          text: 'Bora Company ist ein etabliertes Unternehmen für Präzisions-CNC-Bearbeitung mit über 20 Jahren Erfahrung in der Metallverarbeitung. Das Unternehmen benötigte eine moderne, professionelle Website, die ihre Expertise und Qualität widerspiegelt und gleichzeitig eine optimale Benutzererfahrung bietet.',
        },
        goal: {
          title: 'Projektziele',
          text: 'Das Hauptziel war die Entwicklung einer responsiven, mehrsprachigen Website (Deutsch und Englisch), die die technischen Fähigkeiten des Unternehmens präsentiert, die Vertrauenswürdigkeit stärkt und potenzielle Kunden effektiv anspricht. Die Website sollte schnell laden, SEO-optimiert sein und auf allen Geräten perfekt funktionieren.',
        },
        work: {
          title: 'Umsetzung',
          text: 'Die Entwicklung umfasste mehrere Schlüsselkomponenten. Zunächst wurde ein modernes, benutzerfreundliches Design erstellt, das die industrielle Ästhetik des Unternehmens widerspiegelt. Die technische Umsetzung erfolgte mit React und TypeScript für maximale Performance und Wartbarkeit. Besonderes Augenmerk wurde auf die mehrsprachige Funktionalität gelegt, sodass Besucher nahtlos zwischen Deutsch und Englisch wechseln können.',
        },
        seo: {
          title: 'SEO-Optimierung',
          text: 'Eine umfassende SEO-Strategie wurde implementiert, um die Sichtbarkeit in Suchmaschinen zu maximieren. Dies beinhaltete die Optimierung von Meta-Tags, strukturierten Daten, XML-Sitemaps und die Implementierung von Best Practices für technische SEO. Die Website wurde für relevante Keywords wie "CNC-Bearbeitung", "Präzisionsfertigung" und "Metallverarbeitung" optimiert.',
        },
        performance: {
          title: 'Performance & Geschwindigkeit',
          text: 'Die Performance-Optimierung war ein zentraler Aspekt des Projekts. Durch Code-Splitting, Lazy Loading von Bildern, optimierte Assets und effiziente Caching-Strategien wurde eine außergewöhnlich schnelle Ladezeit erreicht. Die Website erreicht hohe Lighthouse-Scores und bietet eine nahtlose Benutzererfahrung auf Desktop- und Mobilgeräten.',
        },
        benefits: {
          title: 'Ergebnisse & Vorteile',
          text: 'Die neue Website hat mehrere konkrete Vorteile gebracht. Die Ladezeiten wurden erheblich reduziert, was zu einer besseren Benutzererfahrung führt. Die mehrsprachige Funktionalität ermöglicht es dem Unternehmen, sowohl deutsche als auch internationale Kunden effektiv anzusprechen. Die SEO-Optimierung hat zu einer verbesserten Sichtbarkeit in Suchmaschinen geführt, was zu mehr qualifizierten Besuchern führt.',
        },
        conclusion: {
          title: 'Fazit',
          text: 'Das Projekt war ein Erfolg und hat Bora Company eine moderne, professionelle Online-Präsenz verschafft, die ihre Expertise und Qualität widerspiegelt. Die Kombination aus modernem Design, technischer Exzellenz und SEO-Optimierung hat eine Website geschaffen, die sowohl für Besucher als auch für Suchmaschinen optimiert ist.',
        },
      },
    },
    en: {
      title: 'Website Project: Bora Company',
      subtitle: 'Professional Web Development for Precision Manufacturing',
      seo: {
        title: 'Website Project - Bora Company | Web Development Case Study',
        description: 'Learn how the professional website for Bora Company was developed. Modern web development, SEO optimization and performance tuning for CNC machining companies.',
        keywords: 'Web development case study, Website project, SEO optimization, Web design, React development',
      },
      sections: {
        intro: {
          title: 'About the Project',
          text: 'Bora Company is an established precision CNC machining company with over 20 years of experience in metal processing. The company needed a modern, professional website that reflects their expertise and quality while providing an optimal user experience.',
        },
        goal: {
          title: 'Project Goals',
          text: 'The main goal was to develop a responsive, multilingual website (German and English) that showcases the company\'s technical capabilities, builds trustworthiness, and effectively reaches potential customers. The website needed to load quickly, be SEO-optimized, and work perfectly on all devices.',
        },
        work: {
          title: 'Implementation',
          text: 'The development included several key components. First, a modern, user-friendly design was created that reflects the industrial aesthetic of the company. The technical implementation was done with React and TypeScript for maximum performance and maintainability. Special attention was paid to multilingual functionality, allowing visitors to seamlessly switch between German and English.',
        },
        seo: {
          title: 'SEO Optimization',
          text: 'A comprehensive SEO strategy was implemented to maximize visibility in search engines. This included optimization of meta tags, structured data, XML sitemaps, and implementation of best practices for technical SEO. The website was optimized for relevant keywords such as "CNC machining", "precision manufacturing" and "metal processing".',
        },
        performance: {
          title: 'Performance & Speed',
          text: 'Performance optimization was a central aspect of the project. Through code splitting, lazy loading of images, optimized assets, and efficient caching strategies, exceptionally fast load times were achieved. The website achieves high Lighthouse scores and provides a seamless user experience on both desktop and mobile devices.',
        },
        benefits: {
          title: 'Results & Benefits',
          text: 'The new website has brought several concrete benefits. Load times were significantly reduced, leading to a better user experience. The multilingual functionality allows the company to effectively reach both German and international customers. The SEO optimization has led to improved visibility in search engines, resulting in more qualified visitors.',
        },
        conclusion: {
          title: 'Conclusion',
          text: 'The project was a success and has given Bora Company a modern, professional online presence that reflects their expertise and quality. The combination of modern design, technical excellence, and SEO optimization has created a website that is optimized for both visitors and search engines.',
        },
      },
    },
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={currentContent.seo.title}
        description={currentContent.seo.description}
        keywords={currentContent.seo.keywords}
        canonical="https://boracompany.ch/#project"
      />

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://aislike.rs/bora/34.jpg"
            alt="Bora Company Workshop"
            loading="eager"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {currentContent.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              {currentContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20" ref={contentRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`space-y-12 transition-all duration-1000 ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Intro Section */}
            <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {currentContent.sections.intro.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {currentContent.sections.intro.text}
              </p>
            </div>

            {/* Goal Section */}
            <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="h-6 w-6 mr-2 text-blue-700" />
                {currentContent.sections.goal.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {currentContent.sections.goal.text}
              </p>
            </div>

            {/* Work Section */}
            <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Code className="h-6 w-6 mr-2 text-blue-700" />
                {currentContent.sections.work.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {language === 'de' ? (
                  <>
                    {currentContent.sections.work.text} Die Zusammenarbeit mit dem{' '}
                    <a
                      href="https://aisajt.com"
                      className="text-blue-700 hover:text-blue-900 underline font-medium transition-colors duration-200"
                    >
                      AiSajt
                    </a>{' '}
                    Team war dabei besonders wertvoll, da sie umfassende Expertise in moderner Webentwicklung und{' '}
                    <a
                      href="https://aisajt.com/seo"
                      className="text-blue-700 hover:text-blue-900 underline font-medium transition-colors duration-200"
                    >
                      SEO-Optimierung
                    </a>{' '}
                    mitbrachten.
                  </>
                ) : (
                  <>
                    {currentContent.sections.work.text} The collaboration with the{' '}
                    <a
                      href="https://aisajt.com"
                      className="text-blue-700 hover:text-blue-900 underline font-medium transition-colors duration-200"
                    >
                      AiSajt
                    </a>{' '}
                    team was particularly valuable, as they brought comprehensive expertise in modern web development and{' '}
                    <a
                      href="https://aisajt.com/seo"
                      className="text-blue-700 hover:text-blue-900 underline font-medium transition-colors duration-200"
                    >
                      SEO optimization
                    </a>{' '}
                    to the project.
                  </>
                )}
              </p>
            </div>

            {/* SEO Section */}
            <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-blue-700" />
                {currentContent.sections.seo.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {currentContent.sections.seo.text}
              </p>
            </div>

            {/* Performance Section */}
            <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="h-6 w-6 mr-2 text-blue-700" />
                {currentContent.sections.performance.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {currentContent.sections.performance.text}
              </p>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-xl shadow-sm border p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-blue-700" />
                {currentContent.sections.benefits.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {currentContent.sections.benefits.text}
              </p>
            </div>

            {/* Conclusion Section */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-sm border border-blue-200 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {currentContent.sections.conclusion.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {currentContent.sections.conclusion.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

