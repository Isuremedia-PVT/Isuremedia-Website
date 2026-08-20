const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/services/seo/technical-seo#service",
      "name": "Technical SEO Services",
      "description": "End-to-end technical SEO including crawl fixes, Core Web Vitals optimisation, schema markup, site architecture, and indexation management.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/services/seo/technical-seo",
      "serviceType": "Technical SEO"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is technical SEO and why does it matter for rankings?",
          "acceptedAnswer": { "@type": "Answer", "text": "Technical SEO optimises a website infrastructure so search engines can crawl, index, and rank it properly. It covers speed, crawlability, structured data, and mobile performance. Without it, even strong content and backlinks will underperform." } },
        { "@type": "Question", "name": "How do I know if my website has technical SEO problems?",
          "acceptedAnswer": { "@type": "Answer", "text": "Common signs include pages missing from GSC, unexplained ranking drops, slow Core Web Vitals scores, and crawl errors in your Coverage report. If content is solid but rankings are stuck, a technical issue is almost always involved." } },
        { "@type": "Question", "name": "What are Core Web Vitals and do they affect Google rankings?",
          "acceptedAnswer": { "@type": "Answer", "text": "Core Web Vitals are Google page experience metrics: LCP (loading), INP (interactivity), and CLS (stability). They are a confirmed ranking signal. Sites failing these thresholds are at a competitive disadvantage in search." } },
        { "@type": "Question", "name": "Do you implement the technical fixes or just provide a report?",
          "acceptedAnswer": { "@type": "Answer", "text": "We handle full implementation: crawl errors, schema markup, redirect chains, Core Web Vitals. Where developer access is needed, we provide prioritised instructions and work alongside your team until every fix is validated in Search Console." } },
        { "@type": "Question", "name": "What is the difference between technical SEO and on-page SEO?",
          "acceptedAnswer": { "@type": "Answer", "text": "Technical SEO covers infrastructure: speed, crawlability, indexation, and schema. On-page SEO covers visible content: title tags, headings, and keyword targeting. Both are needed for strong search performance." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Technical SEO Specialist & Audit Services | Isuremedia",
  description: "Isuremedia's technical SEO specialists fix crawl errors, Core Web Vitals, broken redirects, and schema gaps so Google can rank your site. Free audit.",
  alternates: { canonical: "/services/seo/technical-seo" },
};

export default function TechnicalSeoLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
