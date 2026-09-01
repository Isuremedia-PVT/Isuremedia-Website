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
        { "@type": "Question", "name": "How long does SEO take to produce measurable leads and traffic?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most websites begin seeing positive keyword movement within 3 to 6 months, with substantial traffic gains and inbound sales leads materializing between months 6 and 9." } },
        { "@type": "Question", "name": "What is AEO (Answer Engine Optimization) and why is it essential?",
          "acceptedAnswer": { "@type": "Answer", "text": "Answer Engine Optimization (AEO) formats website data so AI search engines like ChatGPT, Perplexity and Google AI Overviews can digest, trust and quote your website in direct answer summaries." } },
        { "@type": "Question", "name": "What specific elements are covered within your SEO services?",
          "acceptedAnswer": { "@type": "Answer", "text": "Our full-service campaigns cover technical code repair, keyword mapping, on-page copywriting, white-hat link acquisition, Google Business Profile management, AI answer optimization, and monthly performance tracking." } }
      ]
    }
  ]
});

export const metadata = {
  title: "SEO Services Agency | Drive Organic Traffic Growth",
  description: "Rank higher on search engines with an expert SEO services agency. We provide technical SEO audits, local SEO services, and strategic link building.",
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
