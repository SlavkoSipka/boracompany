import React from 'react';
import { useLanguage } from '../LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage
}) => {
  const { language } = useLanguage();

  React.useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description);
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag && ogImage) {
      ogImageTag.setAttribute('content', ogImage);
    }

    // Update language
    document.documentElement.setAttribute('lang', language);
    
    // Add JSON-LD structured data for current page
    const existingScript = document.querySelector('script[type="application/ld+json"]#page-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    if (title && description) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": canonical || window.location.href,
        "inLanguage": language,
        "isPartOf": {
          "@type": "WebSite",
          "name": "Bora Company",
          "url": "https://boracompany.com"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://boracompany.com"
            }
          ]
        }
      };
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-schema';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, ogImage, language]);

  return null;
};