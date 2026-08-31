const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/white-label-web-design-services#service",
      "name": "White Label Web Design Services",
      "description": "White label web design and development for agencies. WordPress, Shopify, Next.js, and GoHighLevel builds delivered under your agency brand with project management and QA included.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/white-label-web-design-services",
      "serviceType": "White Label Web Design"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Will my clients know Isuremedia built the website?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Every deliverable is cleared of Isuremedia references before delivery: code, file structure, staging URLs, and CMS logins. Clients receive a finished site that appears to come entirely from your agency." } },
        { "@type": "Question", "name": "What platforms do you build white-label websites on?",
          "acceptedAnswer": { "@type": "Answer", "text": "WordPress, Next.js, Shopify, WooCommerce, and GoHighLevel. For WordPress: Elementor, Bricks, Divi, Gutenberg, and Oxygen. For ecommerce: WooCommerce and Shopify with full product configuration." } },
        { "@type": "Question", "name": "What does QA involve before you deliver to our agency?",
          "acceptedAnswer": { "@type": "Answer", "text": "Desktop and mobile across all major browsers, all form submissions, CRM integrations, payment flows for ecommerce, page speed, and a full Isuremedia reference clearance. Ready to present or launch." } }
      ]
    }
  ]
});

export const metadata = {
  title: "White Label Web Design Services | Web Agency | Isuremedia",
  description: "White label web design for agencies. WordPress, Shopify, Next.js, and GHL builds delivered under your brand. QA'd before delivery, no ISM branding.",
  alternates: { canonical: "/white-label-web-design-services" },
  openGraph: { images: [{ url: "/feature_image/white-label-web-design.webp", width: 1618, height: 950 }] },
};

export default function WhiteLabelWebDesignLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
