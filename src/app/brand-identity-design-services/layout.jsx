const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/brand-identity-design-services#service",
      "name": "Brand Identity Design Services",
      "description": "Complete brand identity design from Isuremedia: logo, colour palette, typography, brand guidelines, and visual systems that make businesses instantly recognisable across every touchpoint.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/brand-identity-design-services",
      "serviceType": "Brand Identity Design"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is included in a full brand identity project?",
          "acceptedAnswer": { "@type": "Answer", "text": "Logo design, colour palette, typography, brand voice, business card and letterhead, email signature, social media templates, and a complete brand guidelines document." } },
        { "@type": "Question", "name": "Can you rebrand an existing business?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Rebrands start with an audit of the current identity. Some are full replacements; others are refinements that modernise without abandoning recognition already built." } },
        { "@type": "Question", "name": "How long does a brand identity project take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Three to four weeks from discovery to final delivery, covering strategy, concept development, presentation, refinement rounds, and final file export." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Brand Identity Design Services | Brand Strategy Agency | Isuremedia",
  description: "Isuremedia builds complete brand identities: logo, colour palette, typography, brand guidelines, and visual systems that make your business instantly recognisable.",
  alternates: { canonical: "/brand-identity-design-services" },
  openGraph: { images: [{ url: "/feature_image/brand-identity.webp", width: 1618, height: 950 }] },
};

export default function BrandIdentityLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
