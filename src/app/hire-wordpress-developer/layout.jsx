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
        { "@type": "Question", "name": "How quickly can a WordPress developer start on my project?",
          "acceptedAnswer": { "@type": "Answer", "text": "Once requirements are confirmed, a developer starts within 48 hours. The same person works on your site from day one through to completion with no handoffs or repeat briefings." } },
        { "@type": "Question", "name": "Do you provide white-label WordPress development for agencies?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. All work delivered under your agency brand with no Isuremedia branding. We do not contact your clients directly." } },
        { "@type": "Question", "name": "Which page builders do your WordPress developers work with?",
          "acceptedAnswer": { "@type": "Answer", "text": "Elementor, Divi, Bricks, Oxygen, Gutenberg, and Beaver Builder. WooCommerce for ecommerce. HubSpot, Klaviyo, Salesforce, and Zapier integrations included." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire WordPress Developer | Custom WP Services | Isuremedia",
  description: "Hire a dedicated WordPress developer from Isuremedia. Custom builds, WooCommerce, plugin dev, and migrations. In-house team, no contracts. Starts in 48 hours.",
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
