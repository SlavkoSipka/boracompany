export interface Translation {
  header: {
    companyName: string;
    services: string;
    gallery: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    getQuote: string;
    viewPortfolio: string;
  };
  stats: {
    yearsExperience: string;
    projectsCompleted: string;
    happyClients: string;
    qualityRate: string;
  };
  services: {
    title: string;
    description: string;
    cncMachining: {
      title: string;
      description: string;
      features: string[];
    };
    customParts: {
      title: string;
      description: string;
      features: string[];
    };
    surfaceTreatments: {
      title: string;
      description: string;
      features: string[];
    };
  };
  capabilities: {
    title: string;
    description: string;
    highSpeed: {
      title: string;
      description: string;
    };
    isoCertified: {
      title: string;
      description: string;
    };
    surfaceOptions: {
      title: string;
      zinc: {
        title: string;
        description: string;
      };
      nickel: {
        title: string;
        description: string;
      };
      custom: {
        title: string;
        description: string;
      };
    };
  };
  portfolio: {
    title: string;
    description: string;
    industries: {
      automotive: string;
      aerospace: string;
      manufacturing: string;
      medical: string;
      energy: string;
      construction: string;
    };
  };
  contact: {
    title: string;
    description: string;
    phone: string;
    email: string;
    location: string;
    address: string;
    requestQuote: string;
  };
  footer: {
    copyright: string;
  };
  about: {
    title: string;
    subtitle: string;
    ourStory: {
      title: string;
      welcome: "Willkommen!",
      paragraph1: "Wir sind ein familiengeführtes Maschinenbauunternehmen mit über 20 Jahren Erfahrung in der Herstellung von kundenspezifischen Teilen, Kleinserien und Prototypen. Unsere Geschichte begann bereits 1996, als die Familie Radčević in die Schweiz kam und ihre Tätigkeit in der Industrie aufnahm – der Vater arbeitete in der Lego-Werkzeugfabrik in Lättich, die Mutter in der Verpackungsabteilung bei Lego in Cham. Heute setzen wir diese Familientradition fort und sind auf die präzise Metallbearbeitung und die Fertigung von Teilen nach individuellen Kundenanforderungen spezialisiert.",
      missionTitle: "Unsere Mission",
      paragraph2: "Unsere Philosophie ist einfach: Jedes Produkt beginnt mit einem tiefen Verständnis der technischen Zeichnungen und der Bedürfnisse unserer Kunden. Danach suchen wir nach dem einfachsten, effizientesten und schnellsten Weg, um das Teil zu fertigen. Wir sind überzeugt, dass Qualität, Zuverlässigkeit und Präzision durch eine Kombination aus Erfahrung, Fachwissen und moderner Technologie erreicht werden.",
      specializationTitle: "Unsere Spezialisierung",
      paragraph3: "Wir sind auf die Herstellung einer breiten Palette von Komponenten spezialisiert, darunter: Spezielle Schrauben, Muttern und Anschlüsse (mit oder ohne Standardgewinde), Zylinder, Walzen und Kolben, Pumpengehäuse, Verteiler und andere technische Bauteile, Bearbeitung nach speziellen Anforderungen und Industriestandards.",
      machineryTitle: "Unser Maschinenpark",
      paragraph4: "Unser Maschinenpark ist so ausgestattet, dass wir nahezu alle Arten von Aufgaben – von einfachen bis zu komplexen Projekten – realisieren können. Er umfasst unter anderem:\n • 3-Achsen-Bearbeitungszentrum DMC63V (600x500x500 mm)\n • CNC-Fräsmaschine Hamo 600F (600x400x400 mm)\n • CNC-Drehmaschine Gildemeister NEF320 (320x750 mm\n • zwei Universal-Drehmaschinen (Ruhla und Fezac) mit einer Bearbeitungslänge von bis zu 900 mm\n • zwei Universal-Fräsmaschinen (Schäublin und VDF) mit einer Bearbeitungslänge von bis zu 1200 mm\n • programmierbare Gewindeschneidmaschinen bis M16 (Stahl) und bis M24 (Aluminium)\n • Bandsäge bis 250 mm\n • Kreissäge 200x400 mm\n • Flachschleifmaschine 180x400 mm",
      historyTitle: "Unsere Geschichte und Partnerschaften",
      paragraph5: "Unsere Werkstatt befindet sich im selben Gebäude, in dem unser Gründer vor vielen Jahren gearbeitet hat – ein starkes Symbol für Kontinuität und Tradition. Seit über 30 Jahren arbeiten wir erfolgreich mit einem großen Unternehmen im selben Gebäude zusammen und seit mehr als 10 Jahren auch mit zahlreichen weiteren Firmen aus der Region Kanton Zug. Neben der Auftragsfertigung beschäftigen wir uns auch mit dem Verkauf von Teilen für ferngesteuerte Modellautos, die wir weltweit über die Plattform eBay vertreiben.",
      standardsTitle: "Unsere Standards",
      paragraph6: "Jedes Projekt wird individuell und mit größter Sorgfalt betreut. Wir arbeiten mit zuverlässigen Schweizer Speditionen für sicheren Transport und Zollabwicklung zusammen. Unsere Verpackung erfüllt stets höchste Qualitätsansprüche. Auf Wunsch erstellen wir vollständige technische Dokumentationen für Produkte.",
      goalTitle: "Unser Ziel",
      paragraph7: "Unser Ziel ist es, Ihr verlässlicher Partner im Bereich Maschinenbau und Teilefertigung zu sein – sei es bei der Entwicklung eines einzigartigen Prototyps, einer Kleinserie oder einer speziellen Komponente. Wir sind stolz darauf, dass über unsere Arbeit auch in der lokalen Chronik der Stadt Baar berichtet wurde – eine große Anerkennung für unser Engagement und unsere Qualität.",
      website: "Mehr über unsere Produkte erfahren Sie unter: www.customrc.parts"
    };
    stats: {
      experience: string;
      projects: string;
      clients: string;
      satisfaction: string;
    };
    values: {
      title: string;
      precision: {
        title: string;
        description: string;
      };
      quality: {
        title: string;
        description: string;
      };
      partnership: {
        title: string;
        description: string;
      };
    };
    mission: {
      title: string;
      description: string;
    };
  };
  gallery: {
    title: string;
    subtitle: string;
    ourWork: string;
    description: string;
  };
}

export const translations: Record<'en' | 'de', Translation> = {
  en: {
    header: {
      companyName: "Bora Company",
      services: "Services",
      gallery: "Gallery",
      about: "About Us",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    hero: {
      title: "Precision Metal Manufacturing",
      subtitle: "& CNC Machining",
      description: "Professional custom parts manufacturing with state-of-the-art CNC machinery and comprehensive surface treatment services. From prototype to production, we deliver excellence.",
      getQuote: "Get Quote",
      viewPortfolio: "View Portfolio"
    },
    services: {
      title: "Our Services",
      description: "Complete metal manufacturing solutions with cutting-edge technology and expert craftsmanship",
      cncMachining: {
        title: "CNC Machining",
        description: "High-precision CNC milling, turning, and multi-axis machining for complex components",
        features: ["3 Axis CNC Mills", "CNC Lathes", "CNC Milling Machines", "Cylindrical and Surface Grinding", "Precision Tolerances ±0.005mm"]
      },
      customParts: {
        title: "Custom Parts Manufacturing",
        description: "Complete custom fabrication services from prototype to production runs",
        features: ["Prototype Development", "Production Runs", "Assembly Services", "Quality Control"]
      },
      surfaceTreatments: {
        title: "Surface Treatments and Hardening,Tempering",
        description: "Professional finishing services to enhance durability and appearance",
        features: ["Zinc Plating", "Nickel Plating", "Chemical Nickel Plating", "Anodizing /Hard/Red/Blue/Black/Silver/", "All types of Hardening, Nitriding etc"]
      }
    },
    capabilities: {
      title: "Advanced Manufacturing Capabilities",
      description: "Our machinery park is well positioned so that we can handle almost all tasks ourselves.\n\nOur machinery park consists of:\n\n• 3-axis machining center DMC63V (600×500×500mm)\n• CNC milling machine Maho 600E (600×400×400mm)\n• CNC lathe Gildemeister NEF320 (320×750mm)\n• Two universal milling machines (Ruhla and Fexac)\n  up to 900mm machining length\n• Two universal lathes (Schaublin and VDF)\n  up to 1200mm machining length\n• Programmable threading machine\n  up to M16 steel and up to M24 aluminum\n• Circular band saw up to 250mm\n• Cylindrical grinding machine up to 200×400mm\n• Surface grinding machine 180×400mm\n\nAnd various other machines that simplify and speed up production.",
      highSpeed: {
        title: "High-Speed Machining",
        description: "Fast turnaround times without compromising quality"
      },
      isoCertified: {
        title: "ISO Certified",
        description: "Quality management system compliance"
      },
      surfaceOptions: {
        title: "Surface Treatment Options",
        zinc: {
          title: "Zinc Plating",
          description: "Corrosion protection for steel components"
        },
        nickel: {
          title: "Nickel Plating",
          description: "Enhanced durability and aesthetic finish"
        },
        custom: {
          title: "Custom Finishing",
          description: "Specialized coatings per your requirements"
        }
      }
    },
    portfolio: {
      title: "Trusted by Industry Leaders",
      description: "We partner with companies across various industries to deliver precision manufacturing solutions",
      industries: {
        automotive: "Automotive",
        aerospace: "Aerospace",
        manufacturing: "Manufacturing",
        medical: "Medical",
        energy: "Energy",
        construction: "Construction"
      }
    },
    contact: {
      title: "Get in Touch",
      description: "Contact us for a consultation and quote.",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company Name",
        phone: "Phone Number",
        message: "Project Details",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! We'll get back to you soon.",
        error: "Failed to send message. Please try again or contact us directly."
      },
      phone: "Phone",
      email: "Email",
      location: "Location",
      address: "Vrnjacka Banja\nSerbia",
      requestQuote: "Request Quote"
    },
    businessHours: {
      title: "Business Hours",
      monday: "Monday - Friday:",
      saturday: "Saturday:",
      sunday: "Sunday:",
      closed: "Closed"
    },
    footer: {
      copyright: "© 2025 Bora Company. All rights reserved."
    },
    about: {
      title: "About Us",
      subtitle: "Precision manufacturing excellence since 1996",
      ourStory: {
        title: "Our Story",
        welcome: "Welcome!",
        paragraph1: "I would like to introduce myself, my name is Borivoje Radičević, but you can also call me (it's easier) Bora. I was born in 1983 in Baar and spent my first thirteen years in the municipality until 1996. Both parents worked at Lego, my father worked as a grinder at the Lego tool factory in Lättich and my mother in the packaging department at Lego in Cham. In the summer of 1996, my parents decided that it would be a good year to return to their homeland, and since then we have owned a small mechanical engineering company, which is exclusively equipped for the manufacture of customer-specific parts, small series and prototypes such as: - Special screws, nozzles, connections, nuts, etc. with inch or fine metric threads or of course also standard threads - Cylinders, rollers, pistons, piston rods - Pump blocks, housings, connections, distributors - Machining of standard parts for special applications",
        missionTitle: "Our Mission",
        paragraph2: "Our philosophy is that we first look at the product to be created (workshop drawing) and always find the simplest and fastest way to manufacture the part.",
        specializationTitle: "Our Specialization",
        paragraph3: "We specialize in manufacturing a wide range of components, including: Special screws, nozzles, connections, nuts, etc. with inch or fine metric threads or of course also standard threads, cylinders, rollers, pistons, piston rods, pump blocks, housings, connections, distributors, machining of standard parts for special applications.",
        machineryTitle: "Our Machinery",
        paragraph4: "Our machinery park is well positioned so that we can handle almost all tasks ourselves. Our machinery park consists of:\n • 3-axis machining center DMC63V (600x500x500mm)\n • CNC milling machine Maho 600E (600x400x400)\n • CNC lathe Gildemeister NEF320 (320x750mm)\n • two universal milling machines (Ruhla and Fexac) up to 900mm machining length\n • two universal lathes (Schaublin and VDF) up to 1200mm machining length\n • programmable threading machine up to M16 steel and up to M24 aluminum\n • circular band saw up to 250mm\n • cylindrical grinding machine up to 200x400mm\n • surface grinding machine 180x400\nAnd various other machines that simplify and speed up production.",
        historyTitle: "Our History and Partnerships",
        paragraph5: "Our company currently produces parts for a company located in the same place (on Lättichstrasse) where my father worked for several years, which is a funny coincidence. We have had a collaboration with this company for more than 10 years and we are very satisfied with each other. During these 10 years, we also had collaborations with various other companies from the Canton Zug region.",
        paragraph6: "As a side job, we also manufacture aluminum parts for remote-controlled cars, which I sell via eBay and ship all over the world. Attached is my webpage\n\nwww.customrc.parts\n\nI am pleased if I have aroused your attention for our work with this letter and we may submit an offer to you.",
        paragraph7: "Regarding the transport and customs clearance of finished products, we have been working well with Swiss freight forwarders for years.\n\nOf course, great emphasis is also placed on packaging. As far as documentation for preferential products is concerned, that is of course no problem either.",
        paragraph8: "If I have gained your attention with my letter, then you are welcome to send me an inquiry and we would also be happy to produce a prototype for you. I ask you to forward this email to your colleagues, because I do not have access to all businesses in the Zug-Baar region, that would help me a lot. I found your email address on the homepage of the Baar Trade Association.",
        paragraph9: "I would be happy to send you a few more pictures of our products and a picture of me from the Baar local history book, where I have a short report about me this year, which is a great honor for me.\n\nPlease feel free to ask me questions if I forgot to mention something in my letter. You are also welcome to call me.",
        standardsTitle: "Our Standards",
        paragraph10: "Each project is handled individually and with the greatest care. We work with reliable Swiss freight forwarders for safe transport and customs clearance. Our packaging always meets the highest quality standards. Upon request, we create complete technical documentation for products.",
        goalTitle: "Our Goal",
        paragraph11: "Our goal is to be your reliable partner in mechanical engineering and parts manufacturing – whether developing a unique prototype, a small series, or a special component. We are proud that our work has also been reported in the local chronicle of the city of Baar – a great recognition for our commitment and quality.",
        website: "Learn more about our products at:"
      },
      stats: {
        experience: "Years Experience",
        projects: "Projects Completed",
        clients: "Happy Clients",
        satisfaction: "Client Satisfaction"
      },
      values: {
        title: "Our Values",
        precision: {
          title: "Precision",
          description: "Every component we manufacture meets the highest precision standards with tolerances as tight as ±0.001 inches."
        },
        quality: {
          title: "Quality",
          description: "ISO certified quality management ensures consistent excellence in every project we undertake."
        },
        partnership: {
          title: "Partnership",
          description: "We build long-term relationships with our clients, understanding their needs and delivering solutions that exceed expectations."
        }
      },
      mission: {
        title: "Our Mission",
        description: "To provide world-class precision manufacturing services that enable our clients to achieve their goals. We combine cutting-edge technology with expert craftsmanship to deliver solutions that drive success in today's competitive marketplace."
      }
    },
    gallery: {
      title: "Our Work Gallery",
      subtitle: "Showcasing precision manufacturing excellence",
      ourWork: "Our Work",
      description: "Explore our portfolio of precision-manufactured components and custom parts. Each project represents our commitment to quality and attention to detail."
    }
  },
  de: {
    header: {
      companyName: "Bora Company",
      services: "Dienstleistungen",
      gallery: "Galerie",
      about: "Über Uns",
      portfolio: "Portfolio",
      contact: "Kontakt"
    },
    hero: {
      title: "Präzisions-Metallbearbeitung",
      subtitle: "& CNC-Bearbeitung",
      description: "Professionelle Fertigung von Sonderteilen mit modernsten CNC-Maschinen und umfassenden Oberflächenbehandlungsdienstleistungen. Vom Prototyp bis zur Serie liefern wir Exzellenz.",
      getQuote: "Angebot Anfordern",
      viewPortfolio: "Portfolio Ansehen"
    },
    services: {
      title: "Unsere Dienstleistungen",
      description: "Komplette Metallbearbeitungslösungen mit modernster Technologie und fachkundiger Handwerkskunst",
      cncMachining: {
        title: "CNC-Bearbeitung",
        description: "Hochpräzises CNC-Fräsen, Drehen und Mehrachsen-Bearbeitung für komplexe Bauteile",
        features: ["3 Achsen CNC-Fräsen", "CNC-Drehmaschinen", "CNC-Fräsmaschinen", "Rund und Flachschleifen", "Präzisionstoleranzen ±0,005mm"]
      },
      customParts: {
        title: "Sonderteile-Fertigung",
        description: "Komplette Sonderfertigungsdienstleistungen vom Prototyp bis zur Serienfertigung",
        features: ["Prototypentwicklung", "Serienfertigung", "Montageservice", "Qualitätskontrolle"]
      },
      surfaceTreatments: {
        title: "Oberflächenbehandlung und Härten,Vergüten",
        description: "Professionelle Veredelungsdienstleistungen zur Verbesserung von Haltbarkeit und Aussehen",
        features: ["Verzinkung", "Vernickelung", "chemisch vernikeln", "Eloxierung /Hart/Rot/Blau/Schwarz/Silber/", "jede art von Härten, Nitrieren usw"]
      }
    },
    capabilities: {
      title: "Erweiterte Fertigungskapazitäten",
      description: "Unser Maschinenpark ist gut aufgestellt, sodass wir fast alle Aufgaben bei uns erledigen können.\n\nUnser Maschinenpark besteht aus:\n\n• 3-Achsen Bearbeitungszentrum DMC63V (600×500×500mm)\n• CNC-Fräsmaschine Maho 600E (600×400×400mm)\n• CNC-Drehbank Gildemeister NEF320 (320×750mm)\n• Zwei Universalfräsmaschinen (Ruhla und Fexac)\n  bis 900mm Bearbeitungslänge\n• Zwei Universal-Drehbänke (Schaublin und VDF)\n  bis 1200mm Bearbeitungslänge\n• Programmierbare Gewindeschneidmaschine\n  bis M16 Stahl und bis M24 Aluminium\n• Kreis-Bandsäge bis 250mm\n• Rundschleifmaschine bis 200×400mm\n• Flachschleifmaschine 180×400mm\n\nUnd diverse andere Maschinen, welche die Herstellung vereinfachen und schneller machen.",
      highSpeed: {
        title: "Hochgeschwindigkeitsbearbeitung",
        description: "Schnelle Durchlaufzeiten ohne Qualitätskompromisse"
      },
      isoCertified: {
        title: "ISO-Zertifiziert",
        description: "Qualitätsmanagementsystem-Konformität"
      },
      surfaceOptions: {
        title: "Oberflächenbehandlungsoptionen",
        zinc: {
          title: "Verzinkung",
          description: "Korrosionsschutz für Stahlkomponenten"
        },
        nickel: {
          title: "Vernickelung",
          description: "Verbesserte Haltbarkeit und ästhetische Oberfläche"
        },
        custom: {
          title: "Individuelle Veredelung",
          description: "Spezialbeschichtungen nach Ihren Anforderungen"
        }
      }
    },
    portfolio: {
      title: "Vertrauen von Branchenführern",
      description: "Wir arbeiten mit Unternehmen aus verschiedenen Branchen zusammen, um präzise Fertigungslösungen zu liefern",
      industries: {
        automotive: "Automobil",
        aerospace: "Luft- und Raumfahrt",
        manufacturing: "Fertigung",
        medical: "Medizin",
        energy: "Energie",
        construction: "Bauwesen"
      }
    },
    contact: {
      title: "Kontakt Aufnehmen",
      description: "Kontaktieren Sie uns für eine Beratung und ein Angebot.",
      form: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        company: "Firmenname",
        phone: "Telefonnummer",
        message: "Projektdetails",
        send: "Nachricht Senden",
        sending: "Wird gesendet...",
        success: "Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.",
        error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt."
      },
      phone: "Telefon",
      email: "E-Mail",
      location: "Standort",
      address: "Vrnjacka Banja\nSerbien",
      requestQuote: "Angebot Anfordern"
    },
    businessHours: {
      title: "Geschäftszeiten",
      monday: "Montag - Freitag:",
      saturday: "Samstag:",
      sunday: "Sonntag:",
      closed: "Geschlossen"
    },
    footer: {
      copyright: "© 2025 Bora Company. Alle Rechte vorbehalten."
    },
    about: {
      title: "Über Uns",
      subtitle: "Präzisionsfertigung auf höchstem Niveau seit 1996",
      ourStory: {
        title: "Unsere Geschichte",
        welcome: "Willkommen!",
        paragraph1: "Ich möchte mich gerne bei Ihnen vorstellen, mein Name ist Borivoje Radičević, aber Sie können mich auch gerne (ist auch einfacher) Bora nennen.\nIch bin 1983 in Baar geboren und habe meine ersten dreizehn Jahre in der Gemeinde verbracht, bis 1996. Beide Eltern haben in der Lego gearbeitet, mein Vater hat in der Werkzeugfabrik Lego bei Lättich als Schleifer gearbeitet und meine Mutter in der Verpackerei von Lego in Cham.\nIm Sommer 1996 befanden meine Eltern, dass es ein gutes Jahr wäre, in die Heimat zurückzukehren, seitdem sind wir im Besitz einer kleinen Maschinenbau-Firma, welche ausschließlich dafür ausgestattet ist für die Herstellung von kundenspezifischen Teilen, Kleinserien und Prototypen wie zum beispiel:\n- Spezielle Schrauben, Düsen, Anschlüsse, Mutter, usw mit Zoll oder fein Metrisch Gewinde oder natürlich auch Standard Gewinde\n- Zylinder, Walzen, Kolben, Kolbenstangen\n- Pumpenblöcke, Gehäuse, Anschlüsse, Verteiler\n- Bearbeitung von Norm-Teilen für Spezielle anwendung",
        missionTitle: "Unsere Mission",
        paragraph2: "Unsere Philosophie ist, dass wir das zu erstellende Produkt (Werkstattzeichnung) zuerst anschauen und immer den einfachsten und schnellsten Weg finden, um das Teil herzustellen.",
        specializationTitle: "Unsere Spezialisierung",
        paragraph3: "Wir sind auf die Herstellung einer breiten Palette von Komponenten spezialisiert, darunter: Spezielle Schrauben, Düsen, Anschlüsse, Mutter, usw mit Zoll oder fein Metrisch Gewinde oder natürlich auch Standard Gewinde, Zylinder, Walzen, Kolben, Kolbenstangen, Pumpenblöcke, Gehäuse, Anschlüsse, Verteiler, Bearbeitung von Norm-Teilen für Spezielle anwendung.",
        machineryTitle: "Unser Maschinenpark",
        paragraph4: "Unser Maschinenpark ist gut aufgestellt, sodass wir fast alle Aufgaben bei uns erledigen können.\n\nUnser Maschinenpark besteht aus:\n\n• 3-Achsen Bearbeitungszentrum DMC63V (600×500×500mm)\n• CNC-Fräsmaschine Maho 600E (600×400×400mm)\n• CNC-Drehbank Gildemeister NEF320 (320×750mm)\n• Zwei Universalfräsmaschinen (Ruhla und Fexac)\n  bis 900mm Bearbeitungslänge\n• Zwei Universal-Drehbänke (Schaublin und VDF)\n  bis 1200mm Bearbeitungslänge\n• Programmierbare Gewindeschneidmaschine\n  bis M16 Stahl und bis M24 Aluminium\n• Kreis-Bandsäge bis 250mm\n• Rundschleifmaschine bis 200×400mm\n• Flachschleifmaschine 180×400mm\n\nUnd diverse andere Maschinen, welche die Herstellung vereinfachen und schneller machen.",
        historyTitle: "Unsere Geschichte und Partnerschaften",
        paragraph5: "Unsere Firma produziert zurzeit Teile für eine Firma, die sich am gleichen Ort befindet (in der Lättichstrasse), wo mein Vater mehrere Jahre gearbeitet hat, was ein lustiger Zufall ist.\nWir haben mit dieser Firma eine Zusammenarbeit von mehr als 10 Jahren und wir sind miteinander sehr zufrieden.\nWährend diesen 10 Jahren hatten wir auch eine Zusammenarbeit mit diversen anderen Firmen aus der Region vom Kanton Zug.",
        paragraph6: "Als Nebenjob werden bei uns auch Aluteile für ferngesteuerte Autos hergestellt, welche ich über Ebay verkaufe und in die ganze Welt schicke.\nAnbei mein webpage\n\nwww.customrc.parts\n\nIch freue mich, wenn ich mit diesem Schreiben Ihre Aufmerksamkeit für unsere Arbeit geweckt habe und wir Ihnen ein Angebot zustellen dürfen.",
        paragraph7: "Was den Transport und die Verzollung von fertigen Produkten angeht, arbeiten wir seit Jahren gut mit schweizer Speditionen zusammen.\n\nAuf das Verpacken wird natürlich auch ein hoher Akzent gelegt.\nWas die Dokumentation für präferenzielle Produkte angeht, das ist natürlich auch kein Problem.",
        paragraph8: "Falls ich Ihre Aufmerksamkeit mit meinem Brief erworben habe, dann können Sie mir gerne eine Anfrage schicken und wir würden für Sie auch gerne einen Prototyp herstellen.\nIch bitte Sie, diese E-Mail an Ihre Kollegen weiterzuleiten, weil ich keinen Zugriff auf alle Geschäfte in der Region Zug-Baar habe, das würde mir sehr helfen.\nIhre E-Mail Adresse habe ich auf der Homepage des Baarer Gewerbeverein gefunden.",
        paragraph9: "Ich schicke Ihnen gerne noch ein paar Bilder von unseren Produkten und ein Bild von mir aus dem Baarer Heimatbuch, wo ich dieses Jahr einen kurzen Bericht über mich habe, was für mich eine große Ehre ist.\n\nBitte fühlen Sie sich entspannt, mir Fragen zu stellen, falls ich in meinem Brief etwas vergessen habe zu erwähnen.\nSie können mich auch gerne anrufen",
        standardsTitle: "Unsere Standards",
        paragraph10: "Jedes Projekt wird individuell und mit größter Sorgfalt betreut. Wir arbeiten mit zuverlässigen Schweizer Speditionen für sicheren Transport und Zollabwicklung zusammen. Unsere Verpackung erfüllt stets höchste Qualitätsansprüche. Auf Wunsch erstellen wir vollständige technische Dokumentationen für Produkte.",
        goalTitle: "Unser Ziel",
        paragraph11: "Unser Ziel ist es, Ihr verlässlicher Partner im Bereich Maschinenbau und Teilefertigung zu sein – sei es bei der Entwicklung eines einzigartigen Prototyps, einer Kleinserie oder einer speziellen Komponente. Wir sind stolz darauf, dass über unsere Arbeit auch in der lokalen Chronik der Stadt Baar berichtet wurde – eine große Anerkennung für unser Engagement und unsere Qualität.",
        website: "Mehr über unsere Produkte erfahren Sie unter:"
      },
      stats: {
        experience: "Jahre Erfahrung",
        projects: "Abgeschlossene Projekte",
        clients: "Zufriedene Kunden",
        satisfaction: "Kundenzufriedenheit"
      },
      values: {
        title: "Unsere Werte",
        precision: {
          title: "Präzision",
          description: "Jedes von uns gefertigte Bauteil erfüllt die höchsten Präzisionsstandards mit Toleranzen von bis zu ±0,001 Zoll."
        },
        quality: {
          title: "Qualität",
          description: "ISO-zertifiziertes Qualitätsmanagement gewährleistet gleichbleibende Exzellenz in jedem Projekt, das wir übernehmen."
        },
        partnership: {
          title: "Partnerschaft",
          description: "Wir bauen langfristige Beziehungen zu unseren Kunden auf, verstehen ihre Bedürfnisse und liefern Lösungen, die die Erwartungen übertreffen."
        }
      },
      mission: {
        title: "Unsere Mission",
        description: "Weltklasse-Präzisionsfertigungsdienstleistungen zu bieten, die unseren Kunden helfen, ihre Ziele zu erreichen. Wir kombinieren modernste Technologie mit fachkundiger Handwerkskunst, um Lösungen zu liefern, die den Erfolg im heutigen wettbewerbsintensiven Markt vorantreiben."
      }
    },
    gallery: {
      title: "Unsere Arbeiten Galerie",
      subtitle: "Präzisionsfertigung auf höchstem Niveau",
      ourWork: "Unsere Arbeiten",
      description: "Entdecken Sie unser Portfolio präzisionsgefertigter Komponenten und Sonderteile. Jedes Projekt repräsentiert unser Engagement für Qualität und Liebe zum Detail."
    }
  }
};