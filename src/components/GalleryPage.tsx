import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { SEOHead } from './SEOHead';

export const GalleryPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const seoData = {
    de: {
      title: "Galerie - Bora Company | CNC-Bearbeitung & Präzisionsfertigung Beispiele",
      description: "Entdecken Sie unsere Galerie mit hochwertigen CNC-bearbeiteten Teilen, Präzisionskomponenten und Oberflächenbehandlungen. Qualität die überzeugt.",
      keywords: "CNC Bearbeitung Galerie, Präzisionsteile Beispiele, Metallverarbeitung Portfolio, Oberflächenbehandlung Bilder, Sonderteile Fertigung, Qualitätsarbeit, CNC Fräsen Beispiele"
    },
    en: {
      title: "Gallery - Bora Company | CNC Machining & Precision Manufacturing Examples",
      description: "Discover our gallery with high-quality CNC machined parts, precision components and surface treatments. Quality that convinces.",
      keywords: "CNC machining gallery, precision parts examples, metal processing portfolio, surface treatment images, custom parts manufacturing, quality work"
    }
  };

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }
    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    // Mobile fallback - trigger animations on mobile devices
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const mobileTimer = setTimeout(() => {
        setIsHeroVisible(true);
        setIsContentVisible(true);
      }, 300);
      
      return () => {
        if (heroRef.current) {
          heroObserver.unobserve(heroRef.current);
        }
        if (contentRef.current) {
          contentObserver.unobserve(contentRef.current);
        }
        clearTimeout(mobileTimer);
      };
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

  const galleryImages = [
    {
      src: "https://aislike.rs/bora/3.jpg",
      title: "Precision Manufacturing",
      description: "High-quality machined components"
    },
    {
      src: "https://aislike.rs/bora/6.jpg",
      title: "CNC Machining",
      description: "Advanced CNC machining services"
    },
    {
      src: "https://aislike.rs/bora/11.jpg",
      title: "Custom Parts",
      description: "Tailored manufacturing solutions"
    },
    {
      src: "https://aislike.rs/bora/12.jpg",
      title: "Metal Fabrication",
      description: "Professional metal fabrication"
    },
    {
      src: "https://aislike.rs/bora/13.jpg",
      title: "Quality Control",
      description: "Precision quality inspection"
    },
    {
      src: "https://aislike.rs/bora/14.jpg",
      title: "Surface Treatment",
      description: "Professional surface finishing"
    },
    {
      src: "https://aislike.rs/bora/15.jpg",
      title: "Industrial Components",
      description: "Heavy-duty industrial parts"
    },
    {
      src: "https://aislike.rs/bora/16.jpg",
      title: "Machined Parts",
      description: "Precision machined components"
    },
    {
      src: "https://aislike.rs/bora/17.jpg",
      title: "Workshop Operations",
      description: "State-of-the-art manufacturing"
    },
    {
      src: "https://aislike.rs/bora/18.jpg",
      title: "Custom Manufacturing",
      description: "Specialized manufacturing services"
    },
    {
      src: "https://aislike.rs/bora/19.jpg",
      title: "Precision Work",
      description: "High-precision manufacturing"
    },
    {
      src: "https://aislike.rs/bora/20.jpg",
      title: "Metal Processing",
      description: "Advanced metal processing"
    },
    {
      src: "https://aislike.rs/bora/21.jpg",
      title: "Quality Manufacturing",
      description: "Superior quality standards"
    },
    {
      src: "https://aislike.rs/bora/22.jpg",
      title: "Industrial Solutions",
      description: "Complete industrial solutions"
    },
    {
      src: "https://aislike.rs/bora/23.jpg",
      title: "Manufacturing Excellence",
      description: "Excellence in manufacturing"
    },
    {
      src: "https://aislike.rs/bora/24.jpg",
      title: "Technical Precision",
      description: "Technical precision manufacturing"
    },
    {
      src: "https://aislike.rs/bora/25.jpg",
      title: "Professional Work",
      description: "Professional manufacturing services"
    },
    {
      src: "https://aislike.rs/bora/27.jpg",
      title: "Advanced Manufacturing",
      description: "Advanced manufacturing techniques"
    },
    {
      src: "https://aislike.rs/bora/28.jpg",
      title: "Custom Solutions",
      description: "Customized manufacturing solutions"
    },
    {
      src: "https://aislike.rs/bora/29.jpg",
      title: "Production Excellence",
      description: "Excellence in production"
    },
    {
      src: "https://aislike.rs/bora/32.jpg",
      title: "Manufacturing Process",
      description: "Efficient manufacturing processes"
    },
    {
      src: "https://aislike.rs/bora/33.jpg",
      title: "Quality Assurance",
      description: "Comprehensive quality assurance"
    },
    {
      src: "https://aislike.rs/bora/37.jpg",
      title: "Specialized Work",
      description: "Specialized manufacturing work"
    },
    {
      src: "https://aislike.rs/bora/38.jpg",
      title: "Industrial Manufacturing",
      description: "Industrial manufacturing services"
    },
    {
      src: "https://aislike.rs/bora/39.jpg",
      title: "Precision Engineering",
      description: "Precision engineering solutions"
    },
    {
      src: "https://aislike.rs/bora/41.jpg",
      title: "Manufacturing Innovation",
      description: "Innovative manufacturing approaches"
    },
    {
      src: "https://aislike.rs/bora/42.jpg",
      title: "Technical Excellence",
      description: "Technical excellence in manufacturing"
    },
    {
      src: "https://aislike.rs/bora/44.jpg",
      title: "Professional Manufacturing",
      description: "Professional manufacturing standards"
    },
    {
      src: "https://aislike.rs/bora/45.jpg",
      title: "Quality Production",
      description: "High-quality production services"
    },
    {
      src: "https://aislike.rs/bora/46.jpg",
      title: "Manufacturing Expertise",
      description: "Expert manufacturing capabilities"
    },
    {
      src: "https://aislike.rs/bora/pakovanje.jpg",
      title: "Professional Packaging",
      description: "High-quality packaging services"
    },
    {
      src: "https://aislike.rs/bora/pakovanje1.jpg",
      title: "Secure Packaging",
      description: "Secure packaging for safe transport"
    },
    {
      src: "https://aislike.rs/bora/a1.jpg",
      title: "Manufacturing Process A1",
      description: "Advanced manufacturing techniques"
    },
    {
      src: "https://aislike.rs/bora/a2.jpg",
      title: "Manufacturing Process A2",
      description: "Precision manufacturing operations"
    },
    {
      src: "https://aislike.rs/bora/a3.jpg",
      title: "Manufacturing Process A3",
      description: "Quality manufacturing processes"
    },
    {
      src: "https://aislike.rs/bora/a4.jpg",
      title: "Manufacturing Process A4",
      description: "Professional manufacturing work"
    },
    {
      src: "https://aislike.rs/bora/a5.jpg",
      title: "Manufacturing Process A5",
      description: "Expert manufacturing services"
    },
    {
      src: "https://aislike.rs/bora/a6.jpg",
      title: "Manufacturing Process A6",
      description: "Industrial manufacturing solutions"
    },
    {
      src: "https://aislike.rs/bora/a7.jpg",
      title: "Manufacturing Process A7",
      description: "Technical manufacturing expertise"
    },
    {
      src: "https://aislike.rs/bora/a8.jpg",
      title: "Manufacturing Process A8",
      description: "Specialized manufacturing operations"
    },
    {
      src: "https://aislike.rs/bora/a9.jpg",
      title: "Manufacturing Process A9",
      description: "Advanced production techniques"
    },
    {
      src: "https://aislike.rs/bora/a10.jpg",
      title: "Manufacturing Process A10",
      description: "Quality production services"
    },
    {
      src: "https://aislike.rs/bora/a11.jpg",
      title: "Manufacturing Process A11",
      description: "Professional production standards"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonical="https://boracompany.ch/gallery"
      />
      
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Workshop Gallery" 
            className={`w-full h-full object-cover opacity-30 transition-all duration-1500 ${
              isHeroVisible ? 'scale-100 opacity-30' : 'scale-110 opacity-0'
            }`}
          />
          <div className={`absolute inset-0 bg-blue-900 bg-opacity-0 transition-all duration-1000 ${
            isHeroVisible ? 'bg-opacity-0' : 'bg-opacity-30'
          }`}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className={`text-white transition-all duration-1000 ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-1200 ${
              isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`} style={{
              transitionDelay: isHeroVisible ? '300ms' : '0ms'
            }}>
              {t.gallery.title}
            </h1>
            <p className={`text-xl md:text-2xl text-blue-100 max-w-2xl transition-all duration-1200 ${
              isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`} style={{
              transitionDelay: isHeroVisible ? '600ms' : '0ms'
            }}>
              {t.gallery.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20" ref={contentRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{
            transitionDelay: isContentVisible ? '200ms' : '0ms'
          }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.gallery.ourWork}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              {t.gallery.description}
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 transition-all duration-1000 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{
            transitionDelay: isContentVisible ? '400ms' : '0ms'
          }}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openModal(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${image.title} in full size`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(index);
                  }
                }}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.title}
                   loading="lazy"
                   onLoad={() => handleImageLoad(index)}
                    className="w-full h-32 sm:h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    width="400"
                    height="300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close image modal"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};