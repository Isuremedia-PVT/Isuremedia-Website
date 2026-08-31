const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/hire-seo-experts#service",
      "name": "Hire an SEO Expert",
      "description": "Hire a dedicated SEO expert from Isuremedia for technical SEO, keyword strategy, on-page optimization, link building, local SEO, and AI search visibility.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/hire-seo-experts",
      "serviceType": "SEO Services"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How long does it take to see results from SEO?",
          "acceptedAnswer": { "@type": "Answer", "text": "Initial improvements can show in four to eight weeks. Meaningful ranking movement on competitive keywords typically takes three to six months. SEO compounds: each month builds on the last." } },
        { "@type": "Question", "name": "Do you optimize for Google AI Overviews as well as traditional results?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every engagement includes AI search optimization: FAQ schema, E-E-A-T content structuring, entity optimization, and answer-first content patterns for Google AI Overviews, ChatGPT, and Perplexity." } },
        { "@type": "Question", "name": "Do you provide white-label SEO for agencies?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. All work and reports delivered under your agency brand with no Isuremedia branding. We never contact your clients directly and scale across multiple accounts." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire an SEO Expert | Dedicated SEO Specialist | Isuremedia",
  description: "Hire a dedicated SEO expert from Isuremedia. Technical SEO, link building, local SEO, and AI search visibility. No contracts. Free SEO audit included.",
  alternates: { canonical: "/hire-seo-experts" },
};

export default function HireSeoExpertLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
