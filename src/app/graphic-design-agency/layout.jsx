const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/graphic-design-agency#service",
      "name": "Graphic Design Agency",
      "description": "Full-service graphic design agency offering logo design, brand identity, social media graphics, pitch decks, ad creatives, and print design for businesses worldwide.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/graphic-design-agency",
      "serviceType": "Graphic Design"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What graphic design services does Isuremedia offer?",
          "acceptedAnswer": { "@type": "Answer", "text": "Logo design, brand identity kits, social media graphics, pitch decks, infographics, brochures, print design, packaging, and ad creative. Monthly design retainers also available." } },
        { "@type": "Question", "name": "What file formats do you deliver?",
          "acceptedAnswer": { "@type": "Answer", "text": "Source files in Illustrator, Photoshop, or InDesign plus PNG, JPEG, SVG, PDF, and EPS exports. Web-ready and print-ready versions provided as standard." } },
        { "@type": "Question", "name": "How many revision rounds are included?",
          "acceptedAnswer": { "@type": "Answer", "text": "Two revision rounds after the initial concept. Brand identity projects include concept presentation, direction selection, and two refinement rounds." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Graphic Design Agency | Brand Design Services | Isuremedia",
  description: "Isuremedia is a full-service graphic design agency delivering logos, brand kits, social media graphics, pitch decks, and print design for businesses worldwide.",
  alternates: { canonical: "/graphic-design-agency" },
  openGraph: { images: [{ url: "/feature_image/graphic-design.webp", width: 1618, height: 950 }] },
};

export default function GraphicDesignLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
