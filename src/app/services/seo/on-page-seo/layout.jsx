const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/services/seo/on-page-seo#service",
      "name": "On-Page SEO Services",
      "description": "On-page SEO optimisation covering keyword research, title tags, meta descriptions, heading structure, content, internal linking, image optimisation, and schema markup.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/services/seo/on-page-seo",
      "serviceType": "On-Page SEO"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is on-page SEO and why does it matter for rankings?",
          "acceptedAnswer": { "@type": "Answer", "text": "On-page SEO optimises visible page elements, including title tags, headings, content, and internal links, so search engines understand each page and rank it for the right searches. Even strong domain authority will not rank a poorly structured page targeting the wrong keywords." } },
        { "@type": "Question", "name": "What is the difference between on-page SEO and technical SEO?",
          "acceptedAnswer": { "@type": "Answer", "text": "Technical SEO covers infrastructure: crawlability, speed, and indexation. On-page SEO covers visible content: title tags, headings, and keyword targeting. Technical SEO ensures Google can access your pages. On-page SEO ensures those pages rank for the right searches." } },
        { "@type": "Question", "name": "How long does on-page SEO take to show results?",
          "acceptedAnswer": { "@type": "Answer", "text": "Title tag and meta description updates can produce CTR changes within two to four weeks. Ranking improvements from content and heading optimisation typically appear within four to ten weeks." } },
        { "@type": "Question", "name": "Do you rewrite existing content or just optimise it?",
          "acceptedAnswer": { "@type": "Answer", "text": "It depends on the page. Most pages are optimised without a full rewrite. When content is too thin or targeting the wrong intent, a fuller rewrite produces better results. We assess each page and do what will actually move the ranking." } },
        { "@type": "Question", "name": "Does on-page SEO include optimisation for Google AI Overviews?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. On-page SEO built for AI visibility includes FAQ schema, answer-first content structure, and proper heading hierarchies so pages are more likely to be extracted by Google AI Overviews, ChatGPT, and Perplexity as citation sources." } }
      ]
    }
  ]
});

export const metadata = {
  title: "On-Page SEO Services | SEO Optimization Service | Isuremedia",
  description: "Isuremedia optimises every page element, from title tags to content structure, so Google ranks your site for the right searches. Free on-page SEO audit.",
  alternates: { canonical: "/services/seo/on-page-seo" },
};

export default function OnPageSeoLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
