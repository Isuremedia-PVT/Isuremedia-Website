const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/landing-page-design-services#service",
      "name": "Landing Page Design Services",
      "description": "Custom landing page design and development for lead generation, paid campaigns, and product launches. WordPress, GoHighLevel, and ClickFunnels builds optimised for conversion.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/landing-page-design-services",
      "serviceType": "Landing Page Design"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What makes a landing page different from a regular website page?",
          "acceptedAnswer": { "@type": "Answer", "text": "A landing page has a single conversion goal. Everything on the page is designed around one action. Distractions are removed, which is what makes landing pages convert at rates standard pages rarely reach." } },
        { "@type": "Question", "name": "Which platforms do you build landing pages on?",
          "acceptedAnswer": { "@type": "Answer", "text": "WordPress, GoHighLevel, ClickFunnels, Webflow, Wix, and custom HTML/CSS builds. Platform choice depends on your CRM, email system, and what your team needs to edit after launch." } },
        { "@type": "Question", "name": "How long does it take to design and launch a landing page?",
          "acceptedAnswer": { "@type": "Answer", "text": "Standard delivery is three to five business days from approved brief to live page, including design, development, CRM integration, and quality check." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Landing Page Design Services | Page Designer | Isuremedia",
  description: "High-converting landing page design for lead gen, product launches, and paid campaigns. Custom builds on WordPress, GHL, and ClickFunnels. Free strategy call.",
  alternates: { canonical: "/landing-page-design-services" },
  openGraph: { images: [{ url: "/feature_image/landing-pages.webp", width: 1618, height: 950 }] },
};

export default function LandingPagesLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
