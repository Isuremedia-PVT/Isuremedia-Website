const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/local-seo-services#service",
      "name": "Local SEO Services",
      "description": "Full-service local SEO including Google Business Profile optimisation, citation building, review strategy, on-page local content, and AI search visibility.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/local-seo-services",
      "serviceType": "Local SEO"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How long does local SEO take to show results?",
          "acceptedAnswer": { "@type": "Answer", "text": "Map pack improvements can appear in two to four weeks for less competitive searches. Meaningful organic ranking movement typically takes three to six months. Local SEO compounds over time and keeps delivering traffic without ongoing ad spend." } },
        { "@type": "Question", "name": "What is the Google local pack and why does it matter?",
          "acceptedAnswer": { "@type": "Answer", "text": "The local pack shows three business listings at the top of local search results alongside a map. 93% of local intent searches trigger a local pack. The three positions listed there capture the majority of clicks and calls for any local query." } },
        { "@type": "Question", "name": "Do I need a physical address to rank in local search?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Service-area businesses can rank in the local pack without a public address. Google Business Profile supports this directly. What matters is that your GBP, website, and citations accurately reflect where and how you serve customers." } },
        { "@type": "Question", "name": "What is NAP consistency and why does it matter?",
          "acceptedAnswer": { "@type": "Answer", "text": "NAP is Name, Address, Phone number. Google cross-references these across your website, GBP, and directories. Any inconsistency signals unreliable information and can suppress local rankings. NAP consistency is one of the clearest local ranking factors." } },
        { "@type": "Question", "name": "Can local SEO help my business appear in Google AI Overviews?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Google AI Overviews pull from GBP data, structured local content, and review signals when generating local recommendations. Isuremedia includes AI visibility work in every local SEO engagement." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Local SEO Services | Local SEO Agency | Isuremedia",
  description: "Get found in local search and Google's map pack. Isuremedia's local SEO services cover GBP optimisation, citations, reviews, and AI visibility. Free audit.",
  alternates: { canonical: "/local-seo-services" },
  openGraph: { images: [{ url: "/feature_image/local-seo.webp", width: 1618, height: 950 }] },
};

export default function LocalSeoLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
