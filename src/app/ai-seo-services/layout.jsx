const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/ai-seo-services#service",
      "name": "AI SEO and AEO Services",
      "description": "AI SEO and AEO agency services covering Google AI Overview optimisation, ChatGPT visibility, Perplexity citations, entity optimisation, FAQ schema, and E-E-A-T authority building.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/ai-seo-services",
      "serviceType": "AI SEO and AEO"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the difference between AI SEO, AEO, and GEO?",
          "acceptedAnswer": { "@type": "Answer", "text": "AI SEO optimises your presence for AI-powered search platforms. AEO structures content so AI systems extract it as a direct answer. GEO makes your brand a consistent source AI generation models cite in their responses. All three overlap and Isuremedia delivers across all of them." } },
        { "@type": "Question", "name": "How long does it take to appear in Google AI Overviews or ChatGPT?",
          "acceptedAnswer": { "@type": "Answer", "text": "Initial improvements are typically measurable within eight to twelve weeks. Perplexity often updates faster, within thirty to sixty days. Google AI Overviews and ChatGPT take longer as their models update on less frequent cycles." } },
        { "@type": "Question", "name": "Can small businesses appear in AI search results?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. AI platforms cite based on relevance, entity clarity, and content structure, not business size. Many businesses Isuremedia has placed in AI Overviews and ChatGPT are small and medium-sized local businesses." } },
        { "@type": "Question", "name": "What is entity optimisation and why does it matter for AI visibility?",
          "acceptedAnswer": { "@type": "Answer", "text": "Entity optimisation ensures AI systems can confidently identify your business, what it does, and where it operates. Inconsistent or incomplete entity data reduces AI confidence in recommending you. It is often the single biggest gap between businesses that appear in AI answers and those that do not." } },
        { "@type": "Question", "name": "My organic rankings look fine but traffic has dropped. Is AI search responsible?",
          "acceptedAnswer": { "@type": "Answer", "text": "Very likely. When a Google AI Overview appears on a results page, click-through rates on organic results below it drop by an average of 38%. Your ranking position may not have changed, but AI Overviews are capturing the clicks. The solution is to be cited within the AI Overview itself." } }
      ]
    }
  ]
});

export const metadata = {
  title: "AI SEO & AEO Agency | AI Search Optimization | Isuremedia",
  description: "Isuremedia is an AI SEO and AEO agency that gets your business cited in Google AI Overviews, ChatGPT, Perplexity, and Gemini. Free AI visibility audit.",
  alternates: { canonical: "/ai-seo-services" },
  openGraph: { images: [{ url: "/feature_image/ai-seo.webp", width: 1618, height: 950 }] },
};

export default function AiSeoLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
