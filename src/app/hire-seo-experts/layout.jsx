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
        { "@type": "Question", "name": "What does an SEO expert do?",
          "acceptedAnswer": { "@type": "Answer", "text": "An SEO expert improves a website's visibility in search by working on technical SEO, keyword strategy, content, on-page optimization, links, local SEO and other search-related factors." } },
        { "@type": "Question", "name": "Do you optimize websites for AI search as well as Google?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. SEO for AI search focuses on clear information, strong topical coverage, structured content, useful answers, and signals that help AI-powered search systems interpret the business and its content alongside traditional search." } },
        { "@type": "Question", "name": "Can you recover a website that has been affected by a Google penalty?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. SEO specialists can investigate a potential manual action or algorithm-related traffic loss, identify the likely causes, and create a recovery plan. The correct steps depend on the type and cause of the decline." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire SEO Experts for Technical, Local & AI Search SEO",
  description: "Hire SEO experts to uncover what is holding your search visibility back and build a strategy around technical SEO, content, local search and AI visibility.",
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
