const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "SEO Services",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "url": "https://isuremedia.com/seo-services",
      "description": "Full-service SEO including technical SEO, on-page, link building, local SEO, AI SEO and AEO."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How long does SEO take to show results?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most businesses see ranking movement within 3–6 months. Traffic and lead growth typically follows at 6–9 months." } },
        { "@type": "Question", "name": "What is AEO (Answer Engine Optimisation)?",
          "acceptedAnswer": { "@type": "Answer", "text": "AEO optimises your content to appear in Google AI Overviews, ChatGPT, and Perplexity. We structure content with FAQ schema so AI systems cite your business." } },
        { "@type": "Question", "name": "What is included in your SEO services?",
          "acceptedAnswer": { "@type": "Answer", "text": "Technical audit, on-page optimisation, keyword mapping, content strategy, link building, local SEO (GBP), and AI Overview / AEO optimisation." } }
      ]
    }
  ]
});

export const metadata = {
  title: "SEO Services | Rank on Google & AI Search | Isuremedia",
  description: "Full-service SEO agency. Technical SEO, on-page, link building, local SEO & AI Search optimisation. 150+ clients ranked. Free SEO audit.",
  alternates: { canonical: "/seo-services" },
};

export default function SeoLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
