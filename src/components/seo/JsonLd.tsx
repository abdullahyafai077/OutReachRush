import {
  faqs,
  homeSeo,
  services,
  siteConfig,
} from "@/data/seo-content";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  description: homeSeo.description,
  sameAs: [siteConfig.url],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "White-Hat Link Building Services",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: "Worldwide",
  serviceType: services.map((s) => s.title),
  description: homeSeo.description,
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      minPrice: "100",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function JsonLd() {
  const blocks = [organizationSchema, serviceSchema, faqSchema];

  return (
    <>
      {blocks.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
