export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Patrick Steger",
    "jobTitle": "Senior Full-Stack Developer",
    "description": "Professionelle Softwareentwicklung für Schweizer Unternehmen. Spezialisiert auf React, Next.js, TypeScript und Enterprise-Lösungen.",
    "url": "https://psteger.com",
    "sameAs": [
      "https://www.linkedin.com/in/p-steger/",
      "https://github.com/codeoutin"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zürich",
      "addressCountry": "CH"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Sly AG"
    },
    "knowsAbout": [
      "Full-Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Software Architecture",
      "Enterprise Software Development"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Softwareentwicklung",
        "description": "Professionelle Full-Stack Entwicklung für Schweizer Unternehmen"
      },
      "price": "150",
      "priceCurrency": "CHF",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "150",
        "priceCurrency": "CHF",
        "unitCode": "HUR"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Switzerland"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}