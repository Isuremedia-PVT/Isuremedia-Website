const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/business-website-design-services#service",
      "name": "Business Website Design Services",
      "description": "Professional business website design and development on WordPress, Next.js, Shopify, and Webflow. SEO-ready, mobile-optimised, conversion-focused builds for businesses worldwide.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/business-website-design-services",
      "serviceType": "Business Website Design"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Will my website be optimised for SEO from the start?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. SEO is built into every website: clean URL structure, heading hierarchy, meta tags, image optimisation, schema markup, sitemap, and robots.txt. Not added later as a separate engagement." } },
        { "@type": "Question", "name": "How long does a business website project take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Five to ten pages: two to three weeks. Fifteen to twenty-five pages: three to five weeks. Timeline depends on content availability, revision rounds, and custom functionality." } },
        { "@type": "Question", "name": "Can you redesign our existing website instead of building from scratch?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We audit the current site, identify what is not working visually and technically, and rebuild on staging so your live site stays up throughout the project." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Business Website Design Services | Web Design Agency | Isuremedia",
  description: "Professional business website design on WordPress, Next.js, and Shopify. SEO-ready, mobile-optimised, built to convert visitors into leads. Free discovery call.",
  alternates: { canonical: "/business-website-design-services" },
  openGraph: { images: [{ url: "/feature_image/business-websites.webp", width: 1618, height: 950 }] },
};

export default function BusinessWebsitesLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
