const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/hire-wordpress-developer#service",
      "name": "Hire WordPress Developer",
      "description": "Hire a dedicated WordPress developer from Isuremedia for custom builds, WooCommerce stores, plugin development, API integrations, migrations, and maintenance.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/hire-wordpress-developer",
      "serviceType": "WordPress Development"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What does a WordPress developer do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A WordPress developer builds, customizes, and maintains WordPress websites. Depending on the project, that can include custom themes, plugins, WooCommerce stores, API integrations, performance optimization, security fixes, and ongoing maintenance." } },
        { "@type": "Question", "name": "How much does it cost to hire a WordPress developer?",
          "acceptedAnswer": { "@type": "Answer", "text": "The cost depends on the project's scope, technical requirements, and whether you need a one-time build or ongoing support. We scope the work before development begins so you know what you're paying for." } },
        { "@type": "Question", "name": "Do you build WooCommerce websites?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build and customize WooCommerce stores, including product pages, storefronts, checkout flows, custom functionality, third-party integrations, and performance optimization." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire a WordPress Developer for Custom Websites & WooCommerce",
  description: "Hire a WordPress developer to build a faster, more flexible website tailored to your business, from custom functionality to WooCommerce and ongoing improvements.",
  alternates: { canonical: "/hire-wordpress-developer" },
};

export default function HireWordpressLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
