(function () {
  var STORAGE_KEY = "tsn-language";
  var supportedLanguages = ["en", "pl"];

  var translations = {
    en: {
      switcherLabel: "Language switcher",
      home: {
        title: "Przemysław Szymoniak | TSN | TheStructureNavigator",
        meta: {
          description: "Przemysław Szymoniak — TSN / TheStructureNavigator. Personal website with portfolio, systems engineering, automation, software architecture, research, and contact information.",
          keywords: "Przemysław Szymoniak, Przemyslaw Szymoniak, TSN, TheStructureNavigator, portfolio, software engineering, automation, systems architecture, research, contact",
          ogTitle: "Przemysław Szymoniak | TSN | TheStructureNavigator",
          ogDescription: "Personal website of Przemysław Szymoniak (TSN / TheStructureNavigator) with portfolio, software engineering, automation, research, and contact information.",
          twitterTitle: "Przemysław Szymoniak | TSN | TheStructureNavigator",
          twitterDescription: "Personal website of Przemysław Szymoniak (TSN / TheStructureNavigator) with portfolio and contact information."
        },
        texts: {
          "#header .content .inner h1": "The Structure Navigator",
          "#header .content .inner p": "CRM systems, solution architecture, automation, and computer modelling of systems and processes",
          "#header nav ul li:nth-child(1) a": "About",
          "#header nav ul li:nth-child(2) a": "Portfolio",
          "#header nav ul li:nth-child(3) a": "Contact",
          "#about .major": "About",
          "#about .about-line:nth-child(1)": "Przemysław Szymoniak",
          "#about .about-line:nth-child(2)": "M.Sc. Engineer",
          "#about .about-line:nth-child(3)": "Computer Modelling of Systems and Processes",
          "#about .about-line:nth-child(4)": "Digital Architect • Systems Engineering • Automation",
          "#about .about-summary": "self-taught code assembler & problem solver",
          "#about .about-summary-secondary": "designing industrial systems, business automation platforms, data-driven applications and mathematical frameworks",
          "#about .about-right .button.small[href='#contact']": "Contact",
          "#about .about-right .button.small[href='portfolio/index.html']": "Dive deeper",
          "#contact .major": "Contact",
          ".contact-copy-btn span": "Copy mail",
          "#contact .contact-platform-heading": "Find me at",
          ".contact-form-hint": "Or fill the form and send me a message <span class=\"contact-form-arrow\" aria-hidden=\"true\">→</span>"
        },
        attrs: [
          { selector: "html", attr: "lang", value: "en" },
          { selector: ".language-switcher", attr: "aria-label", value: "Language switcher" },
          { selector: "meta[name='description']", attr: "content", value: "Przemysław Szymoniak — TSN / TheStructureNavigator. Personal website with portfolio, systems engineering, automation, software architecture, research, and contact information." },
          { selector: "meta[name='keywords']", attr: "content", value: "Przemysław Szymoniak, Przemyslaw Szymoniak, TSN, TheStructureNavigator, portfolio, software engineering, automation, systems architecture, research, contact" },
          { selector: "meta[property='og:title']", attr: "content", value: "Przemysław Szymoniak | TSN | TheStructureNavigator" },
          { selector: "meta[property='og:description']", attr: "content", value: "Personal website of Przemysław Szymoniak (TSN / TheStructureNavigator) with portfolio, software engineering, automation, research, and contact information." },
          { selector: "meta[name='twitter:title']", attr: "content", value: "Przemysław Szymoniak | TSN | TheStructureNavigator" },
          { selector: "meta[name='twitter:description']", attr: "content", value: "Personal website of Przemysław Szymoniak (TSN / TheStructureNavigator) with portfolio and contact information." },
          { selector: ".contact-copy-btn", attr: "aria-label", value: "Copy email address" },
          { selector: "#name", attr: "placeholder", value: "Enter your name" },
          { selector: "#email", attr: "placeholder", value: "Enter your email" },
          { selector: "#message", attr: "placeholder", value: "Enter your message" },
          { selector: "#contact .actions li:first-child input", attr: "value", value: "Send Message" },
          { selector: "#contact .actions li:last-child input", attr: "value", value: "Reset" }
        ],
        html: {
          ".contact-form-hint": "Or fill the form and send me a message <span class=\"contact-form-arrow\" aria-hidden=\"true\">→</span>"
        }
      },
      portfolio: {
        title: "TSN | TheStructureNavigator | Przemyslaw Szymoniak",
        meta: {
          description: "Portfolio of Przemyslaw Szymoniak (TSN / TheStructureNavigator): real estate website and CRM systems, integrations, knowledge center solutions, research work, and contact information.",
          keywords: "TSN, TheStructureNavigator, Przemyslaw Szymoniak, portfolio, real estate CRM, system integration, knowledge center, research",
          ogTitle: "TSN | TheStructureNavigator Portfolio",
          ogDescription: "Portfolio of Przemyslaw Szymoniak (TSN / TheStructureNavigator) with projects, integrations, research, and contact details.",
          twitterTitle: "TSN | TheStructureNavigator Portfolio",
          twitterDescription: "Projects and research portfolio of Przemyslaw Szymoniak (TSN / TheStructureNavigator)."
        },
        texts: {
          "#mainNav .navbar-nav .nav-item:nth-child(1) .nav-link": "← Return to Core",
          "#mainNav .navbar-nav .nav-item:nth-child(2) .nav-link": "Home",
          "#mainNav .navbar-nav .nav-item:nth-child(3) .nav-link": "Landscape",
          "#mainNav .navbar-nav .nav-item:nth-child(4) .nav-link": "Projects",
          "#mainNav .navbar-nav .nav-item:nth-child(5) .nav-link": "About",
          "#mainNav .navbar-nav .nav-item:nth-child(6) .nav-link": "Contact",
          ".ct-slick-homepage .item[data-slide-key='crm'] h1": "Websites, CRM, and Real Estate Integrations",
          ".ct-slick-homepage .item[data-slide-key='crm'] p": "I build and maintain a website platform and a CRM system for a real estate franchise network. I create integrations with international property portals and tools so data flows between website, CRM, and listings are automated, consistent, and ready to scale.",
          ".ct-slick-homepage .item[data-slide-key='knowledge'] h1": "A Knowledge Hub at the Core of Team Work",
          ".ct-slick-homepage .item[data-slide-key='knowledge'] p": "I design and develop a section-based knowledge hub that organizes processes, standards, and decisions. It serves as a central operational workspace that supports onboarding, delivery quality, and fast access to key information.",
          ".ct-slick-homepage .item[data-slide-key='research'] h1": "Algebraic Processes and Knowledge Spaces",
          ".ct-slick-homepage .item[data-slide-key='research'] p": "I develop a research and project domain around algebraic processes, structural modeling, and knowledge spaces. I combine mathematics, systems engineering, and automation to build frameworks for analyzing complex problems.",
          ".ct-slick-homepage .item[data-slide-key='astronomy'] h1": "Observational Astronomy & Astrophotography",
          ".ct-slick-homepage .item[data-slide-key='astronomy'] p": "I develop this area at the intersection of observational astronomy, astrophotography, data analysis, and custom software tools that support planning, acquisition, and processing of observational sessions.",
          "#services .section-title h3": "Navigating My Work Landscape",
          "#services .section-title p": "This journey takes me through different areas of focus, where I apply my skills and continuously learn to provide effective solutions.",
          "#services .col-md-4:nth-child(1) h2": "Software Engineering & System Architecture",
          "#services .col-md-4:nth-child(1) p": "Design and development of web applications, backend systems, databases, and integrations that connect data, tools, and business processes into scalable digital solutions.",
          "#services .col-md-4:nth-child(2) h2": "Data Analysis, Lean & Process Optimization",
          "#services .col-md-4:nth-child(2) p": "Interested in applying data-driven methods for process analysis and optimization, with a focus on Lean, Six Sigma, and other methodologies.",
          "#services .col-md-4:nth-child(3) h2": "Simulation Modeling & Numerical Methods",
          "#services .col-md-4:nth-child(3) p": "Focused on practical applications of simulation modeling, optimization, numerical methods, mathematical models, and computational approaches used to solve real-world problems.",
          "#services .col-md-4:nth-child(4) h2": "Process Automation & AI",
          "#services .col-md-4:nth-child(4) p": "Driven by a passion for automating processes and utilizing AI to enhance efficiency across various business areas, improving operations and enabling smarter decision-making.",
          "#services .col-md-4:nth-child(5) h2": "Observational Astronomy & Astrophotography",
          "#services .col-md-4:nth-child(5) p": "An area of interest focused on astronomical observations, astrophotography, observational data analysis, and building my own tools to support planning and carrying out observation sessions.",
          "#services .col-md-4:nth-child(6) h2": "Mathematics & Process Algebra",
          "#services .col-md-4:nth-child(6) p": "Exploring mathematical structures, process algebra, graph theory, optimization, and abstract models used to describe, analyze, and improve complex systems and business processes.",
          "#portfolio .section-title h3": "Journey Through My Projects",
          "#portfolio .section-title p": "This portfolio is a reflection of my journey through various projects. Each one has taught me something new and helped me grow, both in skills and understanding.",
          ".filter-button-group button:nth-child(1)": "INVESTMENT Real Estate",
          ".filter-button-group button:nth-child(2)": "Knowledge Center",
          ".filter-button-group button:nth-child(3)": "Research",
          ".filter-button-group button:nth-child(4)": "Observational Astronomy & Astrophotography",
          ".realestate-lead": "CREATOR AND MAINTAINER OF WEBSITE PLATFORM FOR A REAL ESTATE FRANCHISE NETWORK AND CUSTOMER RELATIONSHIP MANAGEMENT SYSTEM (CRM)",
          ".realestate-subtitle-main": "The Customer Relationship Management (CRM) system and website are actively used by the INVESTMENT Nieruchomości office, now expanding into a franchise network.",
          ".realestate-subtitle-secondary": "The integration layer connects website and CRM operations with partner offices abroad and key listing platforms in Poland.",
          ".realestate-intro-right .realestate-subtitle": "Website is available at:",
          ".integration-group:nth-child(1) .integration-title": "International partner offices integration",
          ".integration-group:nth-child(1) .integration-note": "Data sync with partner agencies in Spain, Dubai and other foreign markets.",
          ".integration-group:nth-child(2) .integration-title": "Polish real estate portals integration",
          ".integration-group:nth-child(2) .integration-note": "Automated publication and updates for major listing portals in Poland.",
          ".research-item:nth-child(1) .research-item-text": "A research study on algebraic knowledge-space structures within ontology design. The paper develops a structural perspective for organizing and transforming knowledge relations in formal semantic systems.",
          ".research-item:nth-child(1) .research-open-btn": "Open in new page",
          ".research-item:nth-child(1) .research-images-title": "Knowledge Space Manifestations",
          ".research-images-grid a:nth-child(1) .research-image-caption": "Knowledge Center application view presenting a practical implementation of structured knowledge spaces.",
          ".research-images-grid a:nth-child(2) .research-image-caption": "Hierarchical map of operational knowledge domains, where each area maintains its own structured information space and document context.",
          ".research-images-grid a:nth-child(3) .research-image-caption": "Focused domain view combining current operational knowledge with historical domain context for continuity and traceability.",
          ".research-images-grid a:nth-child(4) .research-image-caption": "Large-scale view of a network drive structure with more than 800,000 files and folders, interpreted as a knowledge space built from organizational artifacts.",
          ".research-images-grid a:nth-child(5) .research-image-caption": "A sectional slice of the same space limited to folders only, revealing the hierarchical ontology that organizes the structure.",
          ".research-images-grid a:nth-child(6) .research-image-caption": "A slice of empty folders, highlighting areas where no immersion into the ontology has yet been applied.",
          ".research-images-grid a:nth-child(7) .research-image-caption": "A fragment of the space organized by file and folder age, exposing temporal patterns related to knowledge activity and aging.",
          ".research-images-grid a:nth-child(8) .research-image-caption": "A sectional view of the space for the searched phrase QS (Quality Control), exposing the domain structure selected through the classification context.",
          ".research-item:nth-child(2) .research-item-text": "A conceptual and formal exploration of process representation through algebraic structures. This work focuses on building a consistent symbolic language for modeling process states, transitions and dependencies in complex systems.",
          ".research-item:nth-child(2) .research-open-btn": "Open in new page",
          ".knowledge-tab-title": "Knowledge Center",
          ".knowledge-tab-text": "KnowledgeCenter is a modular platform for operational data and business processes. It consolidates information from production, quality, logistics, maintenance, and HR into a single source of truth, enabling faster decisions, transparent management, and repeatable continuous improvement.",
          ".knowledge-tab-subtitle:nth-of-type(1)": "Objectives",
          ".knowledge-tab-list li:nth-child(1)": "Create one place for collecting, structuring, and sharing operational knowledge.",
          ".knowledge-tab-list li:nth-child(2)": "Replace scattered files and local tools with consistent digital workflows.",
          ".knowledge-tab-list li:nth-child(3)": "Enable role-based visibility and control across the organization.",
          ".knowledge-tab-list li:nth-child(4)": "Shorten the path from data to insight to action.",
          ".knowledge-tab-list li:nth-child(5)": "Integrate Syncos and SAP data with additional operational processes for a fuller business picture.",
          ".knowledge-tab-subtitle:nth-of-type(2)": "Philosophy",
          ".knowledge-tab-two-col .knowledge-tab-col:nth-child(2) .knowledge-tab-text": "In KnowledgeCenter, the starting point is people and their everyday work. The tools are designed to adapt to users, not force extra tasks. Each module is built to reduce repetitive manual activities, support decision-making, remove barriers, and provide quick access to the right information. As a result, KnowledgeCenter works as a practical assistant embedded in real processes and supporting a culture of continuous improvement.",
          ".knowledge-tab-two-col:nth-of-type(3) .knowledge-tab-col:nth-child(1) .knowledge-tab-subtitle": "Added Value",
          ".knowledge-tab-two-col:nth-of-type(3) .knowledge-tab-col:nth-child(1) .knowledge-tab-text": "KnowledgeCenter is more than a set of digital tools. By combining Lean and Six Sigma principles with modern software solutions, it introduces a new operating standard for managing knowledge and processes.",
          ".knowledge-tab-two-col:nth-of-type(3) .knowledge-tab-col:nth-child(2) .knowledge-tab-subtitle": "Innovation",
          ".knowledge-tab-two-col:nth-of-type(3) .knowledge-tab-col:nth-child(2) .knowledge-tab-text": "This is not only digitalization, but organizational innovation that improves information flow, collaboration, and sustainable improvement across the company.",
          ".knowledge-integration-title": "Operational Integrations",
          ".knowledge-integration-note": "KnowledgeCenter connects with key operational environments and data sources used in day-to-day process execution.",
          ".knowledge-tab > .knowledge-tab-text:last-of-type": "<strong>KnowledgeCenter already reduces more than 3,000 labor hours per year compared with previous process execution, by improving and accelerating the same operational workflows.</strong> <strong>Estimated based on process time reductions across implemented workflows.</strong> <strong>Beyond shortening the duration of real operational processes, it also enables new activities that were previously too time-consuming and practically impossible to execute consistently.</strong> <strong>It provides immediate access to actionable knowledge across multiple topics, where obtaining the same visibility before was time-intensive and often practically unfeasible.</strong> <strong>It is a working organizational asset that continues to deliver savings and value even when I am not present.</strong>",
          ".astronomy-tab-title": "Observational Astronomy & Astrophotography",
          ".astronomy-tab-text-primary": "This area combines observational astronomy, astrophotography, and astronomical data analysis. It covers observation planning based on object positions and sky conditions, acquisition setup, image capture, and subsequent processing and analysis.",
          ".astronomy-tab-text-secondary": "An important part of this work is the use of computational methods and the development of custom tools supporting the entire observational workflow from target selection and visibility analysis to session planning, data acquisition, organization, and processing.",
          ".astronomy-tab-note": "The area is developed alongside practical observations and serves as an experimental space at the intersection of astronomy, mathematics, data analysis, and software engineering."
        },
        attrs: [
          { selector: "html", attr: "lang", value: "en" },
          { selector: ".language-switcher", attr: "aria-label", value: "Language switcher" },
          { selector: "meta[name='description']", attr: "content", value: "Portfolio of Przemyslaw Szymoniak (TSN / TheStructureNavigator): real estate website and CRM systems, integrations, knowledge center solutions, research work, and contact information." },
          { selector: "meta[name='keywords']", attr: "content", value: "TSN, TheStructureNavigator, Przemyslaw Szymoniak, portfolio, real estate CRM, system integration, knowledge center, research" },
          { selector: "meta[property='og:title']", attr: "content", value: "TSN | TheStructureNavigator Portfolio" },
          { selector: "meta[property='og:description']", attr: "content", value: "Portfolio of Przemyslaw Szymoniak (TSN / TheStructureNavigator) with projects, integrations, research, and contact details." },
          { selector: "meta[name='twitter:title']", attr: "content", value: "TSN | TheStructureNavigator Portfolio" },
          { selector: "meta[name='twitter:description']", attr: "content", value: "Projects and research portfolio of Przemyslaw Szymoniak (TSN / TheStructureNavigator)." },
          { selector: ".navbar-toggler", attr: "aria-label", value: "Toggle navigation" },
          { selector: ".research-item:nth-child(1) .research-lang-flag", attr: "data-tooltip", value: "Document available only in Polish language" },
          { selector: ".research-item:nth-child(1) .research-lang-flag", attr: "aria-label", value: "Document available only in Polish language" },
          { selector: ".research-item:nth-child(2) .research-lang-flag", attr: "data-tooltip", value: "Document available only in Polish language" },
          { selector: ".research-item:nth-child(2) .research-lang-flag", attr: "aria-label", value: "Document available only in Polish language" },
          { selector: ".research-item:nth-child(1) iframe", attr: "title", value: "Algebra przestrzeni wiedzy w ontologii PDF" },
          { selector: ".research-item:nth-child(2) iframe", attr: "title", value: "Algebraic Approach to Process Representation PDF" },
          { selector: ".research-images-grid a:nth-child(1)", attr: "data-caption", value: "Knowledge Center application view presenting a practical implementation of structured knowledge spaces." },
          { selector: ".research-images-grid a:nth-child(1)", attr: "aria-label", value: "Open figure 1 in full view" },
          { selector: ".research-images-grid a:nth-child(2)", attr: "data-caption", value: "Hierarchical map of operational knowledge domains, where each area maintains its own structured information space and document context." },
          { selector: ".research-images-grid a:nth-child(2)", attr: "aria-label", value: "Open figure 2 in full view" },
          { selector: ".research-images-grid a:nth-child(3)", attr: "data-caption", value: "Focused domain view combining current operational knowledge with historical domain context for continuity and traceability." },
          { selector: ".research-images-grid a:nth-child(3)", attr: "aria-label", value: "Open figure 3 in full view" },
          { selector: ".research-images-grid a:nth-child(4)", attr: "data-caption", value: "Large-scale view of a network drive structure with more than 800,000 files and folders, interpreted as a knowledge space built from organizational artifacts." },
          { selector: ".research-images-grid a:nth-child(4)", attr: "aria-label", value: "Open figure 4 in full view" },
          { selector: ".research-images-grid a:nth-child(5)", attr: "data-caption", value: "A sectional slice of the same space limited to folders only, revealing the hierarchical ontology that organizes the structure." },
          { selector: ".research-images-grid a:nth-child(5)", attr: "aria-label", value: "Open figure 5 in full view" },
          { selector: ".research-images-grid a:nth-child(6)", attr: "data-caption", value: "A slice of empty folders, highlighting areas where no immersion into the ontology has yet been applied." },
          { selector: ".research-images-grid a:nth-child(6)", attr: "aria-label", value: "Open figure 6 in full view" },
          { selector: ".research-images-grid a:nth-child(7)", attr: "data-caption", value: "A fragment of the space organized by file and folder age, exposing temporal patterns related to knowledge activity and aging." },
          { selector: ".research-images-grid a:nth-child(7)", attr: "aria-label", value: "Open figure 7 in full view" },
          { selector: ".research-images-grid a:nth-child(8)", attr: "data-caption", value: "A sectional view of the space for the searched phrase QS (Quality Control), exposing the domain structure selected through the classification context." },
          { selector: ".research-images-grid a:nth-child(8)", attr: "aria-label", value: "Open figure 8 in full view" },
          { selector: ".knowledge-tab-image-wrap a:nth-child(1)", attr: "data-caption", value: "Knowledge Center application view presenting a practical implementation of structured knowledge spaces." },
          { selector: ".knowledge-tab-image-wrap a:nth-child(1)", attr: "aria-label", value: "Open KnowledgeCenter overview in full view" },
          { selector: ".knowledge-tab-image-wrap a:nth-child(2)", attr: "data-caption", value: "Hierarchical map of operational knowledge domains, where each area maintains its own structured information space and document context." },
          { selector: ".knowledge-tab-image-wrap a:nth-child(2)", attr: "aria-label", value: "Open KnowledgeCenter detailed view in full view" }
        ],
        html: {
          ".knowledge-tab > .knowledge-tab-text:last-of-type": "<strong>KnowledgeCenter already reduces more than 3,000 labor hours per year compared with previous process execution, by improving and accelerating the same operational workflows.</strong> <strong>Estimated based on process time reductions across implemented workflows.</strong> <strong>Beyond shortening the duration of real operational processes, it also enables new activities that were previously too time-consuming and practically impossible to execute consistently.</strong> <strong>It provides immediate access to actionable knowledge across multiple topics, where obtaining the same visibility before was time-intensive and often practically unfeasible.</strong> <strong>It is a working organizational asset that continues to deliver savings and value even when I am not present.</strong>"
        }
      }
    },
    pl: {
      switcherLabel: "Przełącznik języka",
      home: {
        title: "Przemysław Szymoniak | TSN | TheStructureNavigator",
        meta: {
          description: "Przemysław Szymoniak — TSN / TheStructureNavigator. Strona osobista z portfolio, inżynierią systemów, automatyzacją, architekturą oprogramowania, badaniami i danymi kontaktowymi.",
          keywords: "Przemysław Szymoniak, Przemyslaw Szymoniak, TSN, TheStructureNavigator, portfolio, inżynieria oprogramowania, automatyzacja, architektura systemów, badania, kontakt",
          ogTitle: "Przemysław Szymoniak | TSN | TheStructureNavigator",
          ogDescription: "Strona osobista Przemysława Szymoniaka (TSN / TheStructureNavigator) z portfolio, inżynierią oprogramowania, automatyzacją, badaniami i kontaktem.",
          twitterTitle: "Przemysław Szymoniak | TSN | TheStructureNavigator",
          twitterDescription: "Strona osobista Przemysława Szymoniaka (TSN / TheStructureNavigator) z portfolio i kontaktem."
        },
        texts: {
          "#header .content .inner h1": "The Structure Navigator",
          "#header .content .inner p": "Systemy CRM, architektura rozwiązań, automatyzacja i modelowanie komputerowe układów oraz procesów",
          "#header nav ul li:nth-child(1) a": "O mnie",
          "#header nav ul li:nth-child(2) a": "Portfolio",
          "#header nav ul li:nth-child(3) a": "Kontakt",
          "#about .major": "O mnie",
          "#about .about-line:nth-child(1)": "Przemysław Szymoniak",
          "#about .about-line:nth-child(2)": "mgr inż.",
          "#about .about-line:nth-child(3)": "Modelowanie komputerowe układów i procesów",
          "#about .about-line:nth-child(4)": "Architektura cyfrowa • Inżynieria systemów • Automatyzacja",
          "#about .about-summary": "łączę myślenie systemowe, technologię i praktyczne rozwiązywanie problemów",
          "#about .about-summary-secondary": "projektuję rozwiązania dla procesów przemysłowych i biznesowych — od aplikacji i automatyzacji po struktury danych i modele wspierające decyzje",
          "#about .about-right .button.small[href='#contact']": "Kontakt",
          "#about .about-right .button.small[href='portfolio/index.html']": "Zobacz portfolio",
          "#contact .major": "Kontakt",
          ".contact-copy-btn span": "Kopiuj mail",
          "#contact .contact-platform-heading": "Znajdziesz mnie na",
          ".contact-form-hint": "Lub napisz do mnie przez formularz <span class=\"contact-form-arrow\" aria-hidden=\"true\">→</span>"
        },
        attrs: [
          { selector: "html", attr: "lang", value: "pl" },
          { selector: ".language-switcher", attr: "aria-label", value: "Przełącznik języka" },
          { selector: "meta[name='description']", attr: "content", value: "Przemysław Szymoniak — TSN / TheStructureNavigator. Strona osobista z portfolio, inżynierią systemów, automatyzacją, architekturą oprogramowania, badaniami i danymi kontaktowymi." },
          { selector: "meta[name='keywords']", attr: "content", value: "Przemysław Szymoniak, Przemyslaw Szymoniak, TSN, TheStructureNavigator, portfolio, inżynieria oprogramowania, automatyzacja, architektura systemów, badania, kontakt" },
          { selector: "meta[property='og:title']", attr: "content", value: "Przemysław Szymoniak | TSN | TheStructureNavigator" },
          { selector: "meta[property='og:description']", attr: "content", value: "Strona osobista Przemysława Szymoniaka (TSN / TheStructureNavigator) z portfolio, inżynierią oprogramowania, automatyzacją, badaniami i kontaktem." },
          { selector: "meta[name='twitter:title']", attr: "content", value: "Przemysław Szymoniak | TSN | TheStructureNavigator" },
          { selector: "meta[name='twitter:description']", attr: "content", value: "Strona osobista Przemysława Szymoniaka (TSN / TheStructureNavigator) z portfolio i kontaktem." },
          { selector: ".contact-copy-btn", attr: "aria-label", value: "Skopiuj adres e-mail" },
          { selector: "#name", attr: "placeholder", value: "Wpisz swoje imię" },
          { selector: "#email", attr: "placeholder", value: "Wpisz swój e-mail" },
          { selector: "#message", attr: "placeholder", value: "Wpisz swoją wiadomość" },
          { selector: "#contact .actions li:first-child input", attr: "value", value: "Wyślij wiadomość" },
          { selector: "#contact .actions li:last-child input", attr: "value", value: "Wyczyść" }
        ],
        html: {
          ".contact-form-hint": "Lub napisz do mnie przez formularz <span class=\"contact-form-arrow\" aria-hidden=\"true\">→</span>"
        }
      },
      portfolio: {
        title: "TSN | TheStructureNavigator | Przemysław Szymoniak",
        meta: {
          description: "Portfolio Przemysława Szymoniaka (TSN / TheStructureNavigator): systemy CRM i platformy webowe dla nieruchomości, integracje, KnowledgeCenter, projekty badawcze i kontakt.",
          keywords: "TSN, TheStructureNavigator, Przemysław Szymoniak, portfolio, CRM nieruchomości, integracje systemów, knowledge center, badania",
          ogTitle: "TSN | TheStructureNavigator Portfolio",
          ogDescription: "Portfolio Przemysława Szymoniaka (TSN / TheStructureNavigator) z projektami, integracjami, obszarem badawczym i kontaktem.",
          twitterTitle: "TSN | TheStructureNavigator Portfolio",
          twitterDescription: "Portfolio projektów i badań Przemysława Szymoniaka (TSN / TheStructureNavigator)."
        },
        texts: {
          "#mainNav .navbar-nav .nav-item:nth-child(1) .nav-link": "← Powrót do strony głównej",
          "#mainNav .navbar-nav .nav-item:nth-child(2) .nav-link": "Start",
          "#mainNav .navbar-nav .nav-item:nth-child(3) .nav-link": "Obszary",
          "#mainNav .navbar-nav .nav-item:nth-child(4) .nav-link": "Projekty",
          "#mainNav .navbar-nav .nav-item:nth-child(5) .nav-link": "O mnie",
          "#mainNav .navbar-nav .nav-item:nth-child(6) .nav-link": "Kontakt",
          ".ct-slick-homepage .item[data-slide-key='crm'] h1": "Platformy webowe, CRM i integracje dla rynku nieruchomości",
          ".ct-slick-homepage .item[data-slide-key='crm'] p": "Projektuję i rozwijam platformę webową oraz system CRM dla sieci franczyzowej biur nieruchomości. Tworzę integracje z portalami i narzędziami zewnętrznymi, dzięki którym dane między stroną, CRM-em i ogłoszeniami przepływają automatycznie, spójnie i w sposób gotowy do dalszego skalowania.",
          ".ct-slick-homepage .item[data-slide-key='knowledge'] h1": "KnowledgeCenter jako centrum pracy operacyjnej",
          ".ct-slick-homepage .item[data-slide-key='knowledge'] p": "Projektuję i rozwijam modułowe centrum wiedzy, które porządkuje procesy, standardy, decyzje i kontekst operacyjny. To praktyczne środowisko pracy wspierające onboarding, jakość realizacji i szybki dostęp do kluczowych informacji.",
          ".ct-slick-homepage .item[data-slide-key='research'] h1": "Procesy algebraiczne i przestrzenie wiedzy",
          ".ct-slick-homepage .item[data-slide-key='research'] p": "Rozwijam własny obszar badawczo-projektowy wokół procesów algebraicznych, modelowania strukturalnego i przestrzeni wiedzy. Łączę matematykę, inżynierię systemów i automatyzację, by budować ramy do analizy złożonych problemów.",
          ".ct-slick-homepage .item[data-slide-key='astronomy'] h1": "Astronomia Obserwacyjna i Astrofotografia",
          ".ct-slick-homepage .item[data-slide-key='astronomy'] p": "Rozwijam ten obszar na styku astronomii obserwacyjnej, astrofotografii, analizy danych oraz własnych narzędzi programistycznych wspierających planowanie, akwizycję i przetwarzanie sesji obserwacyjnych.",
          "#services .section-title h3": "Obszary pracy i zainteresowań",
          "#services .section-title p": "To obszary, w których rozwijam się zawodowo i badawczo, łącząc technologię, myślenie systemowe i analizę procesów.",
          "#services .col-md-4:nth-child(1) h2": "Inżynieria oprogramowania i architektura systemów",
          "#services .col-md-4:nth-child(1) p": "Obszar obejmujący aplikacje webowe, systemy backendowe, bazy danych i integracje łączące dane, narzędzia oraz procesy biznesowe.",
          "#services .col-md-4:nth-child(2) h2": "Analiza danych, Lean i optymalizacja procesów",
          "#services .col-md-4:nth-child(2) p": "Obszar zainteresowań związany z analizą i doskonaleniem procesów z wykorzystaniem podejścia data-driven, Lean, Six Sigma i pokrewnych metod.",
          "#services .col-md-4:nth-child(3) h2": "Modelowanie symulacyjne i metody numeryczne",
          "#services .col-md-4:nth-child(3) p": "Obszar obejmujący praktyczne zastosowania modelowania symulacyjnego, optymalizacji, metod numerycznych i modeli matematycznych.",
          "#services .col-md-4:nth-child(4) h2": "Automatyzacja procesów i AI",
          "#services .col-md-4:nth-child(4) p": "Obszar związany z automatyzacją procesów i wykorzystaniem AI do usprawniania pracy, porządkowania operacji i wspierania decyzji.",
          "#services .col-md-4:nth-child(5) h2": "Astronomia Obserwacyjna & Astrofotografia",
          "#services .col-md-4:nth-child(5) p": "Obszar zainteresowań skoncentrowany na obserwacjach astronomicznych, astrofotografii, analizie danych obserwacyjnych oraz tworzeniu własnych narzędzi wspierających planowanie i realizację sesji obserwacyjnych.",
          "#services .col-md-4:nth-child(6) h2": "Matematyka i algebra procesów",
          "#services .col-md-4:nth-child(6) p": "Obszar zainteresowań obejmujący struktury matematyczne, algebrę procesów, teorię grafów, optymalizację i modele abstrakcyjne.",
          "#portfolio .section-title h3": "Wybrane projekty i obszary pracy",
          "#portfolio .section-title p": "Poniżej pokazuję projekty i kierunki, w których łączę architekturę systemów, automatyzację, integracje oraz własny obszar badawczy.",
          ".filter-button-group button:nth-child(1)": "INVESTMENT Nieruchomości",
          ".filter-button-group button:nth-child(2)": "Centrum Wiedzy",
          ".filter-button-group button:nth-child(3)": "Badania",
          ".filter-button-group button:nth-child(4)": "Astronomia Obserwacyjna i Astrofotografia",
          ".realestate-lead": "TWÓRCA I OPIEKUN PLATFORMY WWW DLA SIECI FRANCZYZOWEJ BIUR NIERUCHOMOŚCI ORAZ SYSTEMU CRM WSPIERAJĄCEGO SPRZEDAŻ I OBSŁUGĘ OFERT",
          ".realestate-subtitle-main": "System CRM i platforma webowa są aktywnie wykorzystywane przez INVESTMENT Nieruchomości — organizację rozwijającą się dziś w kierunku sieci franczyzowej.",
          ".realestate-subtitle-secondary": "Warstwa integracyjna łączy stronę i CRM z zagranicznymi partnerami oraz najważniejszymi portalami ogłoszeniowymi w Polsce.",
          ".realestate-intro-right .realestate-subtitle": "Strona dostępna pod adresem:",
          ".integration-group:nth-child(1) .integration-title": "Integracja z zagranicznymi biurami partnerskimi",
          ".integration-group:nth-child(1) .integration-note": "Synchronizacja danych z biurami partnerskimi w Hiszpanii, Dubaju i innych rynkach zagranicznych.",
          ".integration-group:nth-child(2) .integration-title": "Integracja z polskimi portalami nieruchomości",
          ".integration-group:nth-child(2) .integration-note": "Automatyczna publikacja ofert i aktualizacji na najważniejszych portalach ogłoszeniowych w Polsce.",
          ".research-item:nth-child(1) .research-item-text": "Praca badawcza poświęcona algebraicznym strukturom przestrzeni wiedzy w projektowaniu ontologii. Opracowanie rozwija perspektywę strukturalną służącą porządkowaniu i przekształcaniu relacji wiedzy w formalnych systemach semantycznych.",
          ".research-item:nth-child(1) .research-open-btn": "Otwórz w nowej karcie",
          ".research-item:nth-child(1) .research-images-title": "Manifestacje przestrzeni wiedzy",
          ".research-images-grid a:nth-child(1) .research-image-caption": "Widok aplikacji Knowledge Center pokazujący praktyczne zastosowanie uporządkowanych przestrzeni wiedzy.",
          ".research-images-grid a:nth-child(2) .research-image-caption": "Hierarchiczna mapa domen operacyjnych, w której każdy obszar utrzymuje własną przestrzeń informacji i kontekst dokumentów.",
          ".research-images-grid a:nth-child(3) .research-image-caption": "Widok wybranej domeny łączący bieżącą wiedzę operacyjną z historycznym kontekstem dla zachowania ciągłości i identyfikowalności.",
          ".research-images-grid a:nth-child(4) .research-image-caption": "Wielkoskalowy widok struktury dysku sieciowego z ponad 800 000 plików i folderów, interpretowanego jako przestrzeń wiedzy zbudowana z artefaktów organizacyjnych.",
          ".research-images-grid a:nth-child(5) .research-image-caption": "Przekrój tej samej przestrzeni ograniczony do samych folderów, odsłaniający hierarchiczną ontologię porządkującą strukturę.",
          ".research-images-grid a:nth-child(6) .research-image-caption": "Fragment pustych folderów pokazujący obszary, w których nie nastąpiło jeszcze rzeczywiste zanurzenie w ontologii.",
          ".research-images-grid a:nth-child(7) .research-image-caption": "Fragment przestrzeni uporządkowany według wieku plików i folderów, pokazujący wzorce czasowe związane z aktywnością i starzeniem się wiedzy.",
          ".research-images-grid a:nth-child(8) .research-image-caption": "Przekrojowy widok przestrzeni dla wyszukiwanej frazy QS (Quality Control), odsłaniający strukturę domeny wybraną przez kontekst klasyfikacji.",
          ".research-item:nth-child(2) .research-item-text": "Koncepcyjne i formalne ujęcie reprezentacji procesów poprzez struktury algebraiczne. Praca skupia się na budowie spójnego języka symbolicznego do modelowania stanów, przejść i zależności w złożonych systemach.",
          ".research-item:nth-child(2) .research-open-btn": "Otwórz w nowej karcie",
          ".knowledge-tab-title": "Centrum Wiedzy",
          ".knowledge-tab-text": "KnowledgeCenter to modułowa platforma wspierająca dane operacyjne i procesy biznesowe. Łączy informacje z produkcji, jakości, logistyki, utrzymania ruchu i HR w jednym źródle wiedzy, ułatwiając szybsze decyzje, większą przejrzystość i konsekwentne doskonalenie organizacji.",
          ".knowledge-tab-subtitle:nth-of-type(1)": "Cele",
          ".knowledge-tab-list li:nth-child(1)": "Stworzyć jedno miejsce do gromadzenia, porządkowania i udostępniania wiedzy operacyjnej.",
          ".knowledge-tab-list li:nth-child(2)": "Zastąpić rozproszone pliki i lokalne narzędzia spójnymi przepływami cyfrowymi.",
          ".knowledge-tab-list li:nth-child(3)": "Umożliwić widoczność i kontrolę opartą o role w całej organizacji.",
          ".knowledge-tab-list li:nth-child(4)": "Skrócić drogę od danych do wniosku i działania.",
          ".knowledge-tab-list li:nth-child(5)": "Zintegrować dane z Syncos i SAP z dodatkowymi procesami operacyjnymi, aby uzyskać pełniejszy obraz biznesu.",
          ".knowledge-tab-subtitle:nth-of-type(2)": "Filozofia",
          ".knowledge-tab-two-col .knowledge-tab-col:nth-child(2) .knowledge-tab-text": "W KnowledgeCenter punktem wyjścia są ludzie i ich codzienna praca. Narzędzia mają dopasowywać się do użytkowników, a nie dokładać im zbędnych obowiązków. Każdy moduł powstaje po to, by ograniczać pracę ręczną, wspierać decyzje, usuwać bariery i zapewniać szybki dostęp do właściwych informacji. Dzięki temu KnowledgeCenter działa jak praktyczny asystent osadzony w realnych procesach.",
          ".knowledge-tab-two-col:nth-of-type(3) .knowledge-tab-col:nth-child(1) .knowledge-tab-subtitle": "Wartość dodana",
          ".knowledge-tab-two-col:nth-of-type(3) .knowledge-tab-col:nth-child(1) .knowledge-tab-text": "KnowledgeCenter to coś więcej niż zestaw cyfrowych narzędzi. Łączy zasady Lean i Six Sigma z nowoczesnymi rozwiązaniami software’owymi, tworząc nowy standard zarządzania wiedzą i procesami.",
          ".knowledge-tab-two-col:nth-of-type(3) .knowledge-tab-col:nth-child(2) .knowledge-tab-subtitle": "Innowacja",
          ".knowledge-tab-two-col:nth-of-type(3) .knowledge-tab-col:nth-child(2) .knowledge-tab-text": "To nie tylko digitalizacja, ale również innowacja organizacyjna, która poprawia przepływ informacji, współpracę i zdolność do trwałego doskonalenia.",
          ".knowledge-integration-title": "Integracje operacyjne",
          ".knowledge-integration-note": "KnowledgeCenter łączy się z kluczowymi środowiskami operacyjnymi i źródłami danych wykorzystywanymi w codziennej realizacji procesów.",
          ".knowledge-tab > .knowledge-tab-text:last-of-type": "<strong>KnowledgeCenter już dziś uwalnia ponad 3 000 roboczogodzin rocznie w porównaniu z wcześniejszym sposobem realizacji tych samych procesów operacyjnych.</strong> <strong>Szacunek opiera się na skróceniu czasu realizacji procesów w rozwiązaniach, które zostały już wdrożone.</strong> <strong>Poza skróceniem czasu realizacji bieżących działań umożliwia także zadania, które wcześniej były zbyt czasochłonne, by wykonywać je regularnie i konsekwentnie.</strong> <strong>Daje natychmiastowy dostęp do użytecznej wiedzy w wielu obszarach, gdzie wcześniej uzyskanie podobnej widoczności wymagało dużego nakładu czasu i było znacznie trudniejsze.</strong> <strong>To działający zasób organizacyjny, który generuje wartość i oszczędności także wtedy, gdy nie ma mnie na miejscu.</strong>",
          ".astronomy-tab-title": "Astronomia Obserwacyjna i Astrofotografia",
          ".astronomy-tab-text-primary": "Obszar łączący astronomię obserwacyjną, astrofotografię oraz analizę danych astronomicznych. Obejmuje planowanie obserwacji na podstawie położenia obiektów i warunków nieba, dobór parametrów akwizycji, rejestrację materiału oraz jego późniejsze przetwarzanie i analizę.",
          ".astronomy-tab-text-secondary": "Istotną częścią tego kierunku jest wykorzystanie metod obliczeniowych i tworzenie własnych narzędzi wspierających cały proces obserwacyjny od wyboru obiektu i określenia jego widoczności, przez przygotowanie sesji, aż po organizację i analizę zebranego materiału.",
          ".astronomy-tab-note": "Obszar jest rozwijany równolegle z praktycznymi obserwacjami i stanowi przestrzeń do eksperymentowania na styku astronomii, matematyki, analizy danych i inżynierii oprogramowania."
        },
        attrs: [
          { selector: "html", attr: "lang", value: "pl" },
          { selector: ".language-switcher", attr: "aria-label", value: "Przełącznik języka" },
          { selector: "meta[name='description']", attr: "content", value: "Portfolio Przemysława Szymoniaka (TSN / TheStructureNavigator): systemy CRM i platformy webowe dla nieruchomości, integracje, KnowledgeCenter, projekty badawcze i kontakt." },
          { selector: "meta[name='keywords']", attr: "content", value: "TSN, TheStructureNavigator, Przemysław Szymoniak, portfolio, CRM nieruchomości, integracje systemów, knowledge center, badania" },
          { selector: "meta[property='og:title']", attr: "content", value: "TSN | TheStructureNavigator Portfolio" },
          { selector: "meta[property='og:description']", attr: "content", value: "Portfolio Przemysława Szymoniaka (TSN / TheStructureNavigator) z projektami, integracjami, obszarem badawczym i kontaktem." },
          { selector: "meta[name='twitter:title']", attr: "content", value: "TSN | TheStructureNavigator Portfolio" },
          { selector: "meta[name='twitter:description']", attr: "content", value: "Portfolio projektów i badań Przemysława Szymoniaka (TSN / TheStructureNavigator)." },
          { selector: ".navbar-toggler", attr: "aria-label", value: "Przełącz nawigację" },
          { selector: ".research-item:nth-child(1) .research-lang-flag", attr: "data-tooltip", value: "Dokument dostępny tylko w języku polskim" },
          { selector: ".research-item:nth-child(1) .research-lang-flag", attr: "aria-label", value: "Dokument dostępny tylko w języku polskim" },
          { selector: ".research-item:nth-child(2) .research-lang-flag", attr: "data-tooltip", value: "Dokument dostępny tylko w języku polskim" },
          { selector: ".research-item:nth-child(2) .research-lang-flag", attr: "aria-label", value: "Dokument dostępny tylko w języku polskim" },
          { selector: ".research-item:nth-child(1) iframe", attr: "title", value: "PDF Algebra przestrzeni wiedzy w ontologii" },
          { selector: ".research-item:nth-child(2) iframe", attr: "title", value: "PDF Algebraic Approach to Process Representation" },
          { selector: ".research-images-grid a:nth-child(1)", attr: "data-caption", value: "Widok aplikacji Knowledge Center prezentujący praktyczne zastosowanie uporządkowanych przestrzeni wiedzy." },
          { selector: ".research-images-grid a:nth-child(1)", attr: "aria-label", value: "Otwórz ilustrację 1 w pełnym widoku" },
          { selector: ".research-images-grid a:nth-child(2)", attr: "data-caption", value: "Hierarchiczna mapa operacyjnych domen wiedzy, w której każdy obszar utrzymuje własną uporządkowaną przestrzeń informacji i kontekst dokumentów." },
          { selector: ".research-images-grid a:nth-child(2)", attr: "aria-label", value: "Otwórz ilustrację 2 w pełnym widoku" },
          { selector: ".research-images-grid a:nth-child(3)", attr: "data-caption", value: "Zbliżenie na domenę łączące bieżącą wiedzę operacyjną z historycznym kontekstem dla ciągłości i identyfikowalności." },
          { selector: ".research-images-grid a:nth-child(3)", attr: "aria-label", value: "Otwórz ilustrację 3 w pełnym widoku" },
          { selector: ".research-images-grid a:nth-child(4)", attr: "data-caption", value: "Wielkoskalowy widok struktury dysku sieciowego z ponad 800 000 plików i folderów, interpretowanego jako przestrzeń wiedzy zbudowana z artefaktów organizacyjnych." },
          { selector: ".research-images-grid a:nth-child(4)", attr: "aria-label", value: "Otwórz ilustrację 4 w pełnym widoku" },
          { selector: ".research-images-grid a:nth-child(5)", attr: "data-caption", value: "Przekrój tej samej przestrzeni ograniczony tylko do folderów, odsłaniający hierarchiczną ontologię porządkującą strukturę." },
          { selector: ".research-images-grid a:nth-child(5)", attr: "aria-label", value: "Otwórz ilustrację 5 w pełnym widoku" },
          { selector: ".research-images-grid a:nth-child(6)", attr: "data-caption", value: "Fragment pustych folderów pokazujący obszary, w których nie zastosowano jeszcze zanurzenia w ontologii." },
          { selector: ".research-images-grid a:nth-child(6)", attr: "aria-label", value: "Otwórz ilustrację 6 w pełnym widoku" },
          { selector: ".research-images-grid a:nth-child(7)", attr: "data-caption", value: "Fragment przestrzeni uporządkowany według wieku plików i folderów, pokazujący wzorce czasowe związane z aktywnością i starzeniem się wiedzy." },
          { selector: ".research-images-grid a:nth-child(7)", attr: "aria-label", value: "Otwórz ilustrację 7 w pełnym widoku" },
          { selector: ".research-images-grid a:nth-child(8)", attr: "data-caption", value: "Przekrojowy widok przestrzeni dla wyszukiwanej frazy QS (Quality Control), odsłaniający strukturę domeny wybraną przez kontekst klasyfikacji." },
          { selector: ".research-images-grid a:nth-child(8)", attr: "aria-label", value: "Otwórz ilustrację 8 w pełnym widoku" },
          { selector: ".knowledge-tab-image-wrap a:nth-child(1)", attr: "data-caption", value: "Widok aplikacji Knowledge Center prezentujący praktyczne zastosowanie uporządkowanych przestrzeni wiedzy." },
          { selector: ".knowledge-tab-image-wrap a:nth-child(1)", attr: "aria-label", value: "Otwórz podgląd KnowledgeCenter w pełnym widoku" },
          { selector: ".knowledge-tab-image-wrap a:nth-child(2)", attr: "data-caption", value: "Hierarchiczna mapa operacyjnych domen wiedzy, w której każdy obszar utrzymuje własną uporządkowaną przestrzeń informacji i kontekst dokumentów." },
          { selector: ".knowledge-tab-image-wrap a:nth-child(2)", attr: "aria-label", value: "Otwórz szczegółowy widok KnowledgeCenter w pełnym widoku" }
        ],
        html: {
          ".knowledge-tab > .knowledge-tab-text:last-of-type": "<strong>KnowledgeCenter już dziś uwalnia ponad 3 000 roboczogodzin rocznie w porównaniu z wcześniejszym sposobem realizacji tych samych procesów operacyjnych.</strong> <strong>Szacunek opiera się na skróceniu czasu realizacji procesów w rozwiązaniach, które zostały już wdrożone.</strong> <strong>Poza skróceniem czasu realizacji bieżących działań umożliwia także zadania, które wcześniej były zbyt czasochłonne, by wykonywać je regularnie i konsekwentnie.</strong> <strong>Daje natychmiastowy dostęp do użytecznej wiedzy w wielu obszarach, gdzie wcześniej uzyskanie podobnej widoczności wymagało dużego nakładu czasu i było znacznie trudniejsze.</strong> <strong>To działający zasób organizacyjny, który generuje wartość i oszczędności także wtedy, gdy nie ma mnie na miejscu.</strong>"
        }
      }
    }
  };

  function isSupportedLanguage(language) {
    return supportedLanguages.indexOf(language) !== -1;
  }

  function normalizeLanguage(language) {
    if (!language) {
      return null;
    }

    var shortCode = String(language).toLowerCase().split("-")[0];
    return isSupportedLanguage(shortCode) ? shortCode : null;
  }

  function detectLanguage() {
    var stored = normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
    if (stored) {
      return stored;
    }

    var browserLanguages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || "en"];

    for (var index = 0; index < browserLanguages.length; index += 1) {
      var normalized = normalizeLanguage(browserLanguages[index]);
      if (normalized) {
        return normalized;
      }
    }

    return "en";
  }

  function setText(selector, value, useHtml) {
    var elements = document.querySelectorAll(selector);
    if (!elements.length) {
      return;
    }

    elements.forEach(function (element) {
      if (useHtml) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });
  }

  function setAttribute(selector, attribute, value) {
    var elements = document.querySelectorAll(selector);
    if (!elements.length) {
      return;
    }

    elements.forEach(function (element) {
      element.setAttribute(attribute, value);
    });
  }

  function renderSwitchers(language) {
    var switchers = document.querySelectorAll(".language-switcher");
    if (!switchers.length) {
      return;
    }

    var assetBase = getPageKey() === "portfolio" ? "../images/flags/" : "images/flags/";
    var nextLanguage = language === "pl" ? "en" : "pl";
    var nextLanguageLabel = nextLanguage === "pl" ? "Polski" : "English";
    var nextLanguageFlag = nextLanguage === "pl" ? "pl.svg" : "en.svg";

    switchers.forEach(function (switcher) {
      switcher.setAttribute("aria-label", translations[language].switcherLabel);
      switcher.innerHTML =
        '<button type="button" class="language-switcher__button" data-language="' + nextLanguage + '" aria-label="Switch language to ' + nextLanguageLabel + '">' +
          '<img class="language-switcher__flag" src="' + assetBase + nextLanguageFlag + '" alt="" aria-hidden="true" />' +
        "</button>";
    });

    document.querySelectorAll(".language-switcher__button").forEach(function (button) {
      button.addEventListener("click", function () {
        var selectedLanguage = button.getAttribute("data-language");
        applyLanguage(selectedLanguage, true);
      });
    });
  }

  function getPageKey() {
    if (document.body.classList.contains("politics_version")) {
      return "portfolio";
    }

    return "home";
  }

  function applyLanguage(language, persist, options) {
    options = options || {};
    var normalizedLanguage = normalizeLanguage(language) || "en";
    var pageKey = getPageKey();
    var pageTranslations = translations[normalizedLanguage][pageKey];

    document.title = pageTranslations.title;

    Object.keys(pageTranslations.texts).forEach(function (selector) {
      var useHtml = pageTranslations.html && Object.prototype.hasOwnProperty.call(pageTranslations.html, selector);
      setText(selector, pageTranslations.texts[selector], useHtml);
    });

    if (pageTranslations.attrs) {
      pageTranslations.attrs.forEach(function (entry) {
        setAttribute(entry.selector, entry.attr, entry.value);
      });
    }

    if (
      pageKey === "portfolio" &&
      window.jQuery &&
      window.jQuery.fn &&
      window.jQuery.fn.slick &&
      !options.skipSliderReset
    ) {
      var slider = window.jQuery(".ct-slick-homepage");
      if (slider.length && slider.hasClass("slick-initialized")) {
        slider.slick("slickGoTo", 0, true);
      }
    }

    if (pageKey === "portfolio" && !options.skipDeferredSync) {
      window.setTimeout(function () {
        applyLanguage(normalizedLanguage, false, {
          skipDeferredSync: true,
          skipSliderReset: true
        });
      }, 0);

      window.setTimeout(function () {
        applyLanguage(normalizedLanguage, false, {
          skipDeferredSync: true,
          skipSliderReset: true
        });
      }, 300);
    }

    renderSwitchers(normalizedLanguage);

    if (persist) {
      window.localStorage.setItem(STORAGE_KEY, normalizedLanguage);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(detectLanguage(), false);
  });
})();
