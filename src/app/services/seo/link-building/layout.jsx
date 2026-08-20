const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/services/seo/link-building#service",
      "name": "Link Building Services",
      "description": "White-hat link building including editorial outreach, guest post campaigns, digital PR, niche edits, and white-label link building for agencies.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/services/seo/link-building",
      "serviceType": "Link Building"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Are backlinks still important for SEO in 2026?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Backlinks remain a confirmed top-three Google ranking factor. The number one result on Google has 3.8 times more backlinks than pages in positions two through ten. In competitive markets, a strong backlink profile is one of the clearest separators between page one and page three." } },
        { "@type": "Question", "name": "What makes a backlink good or bad for rankings?",
          "acceptedAnswer": { "@type": "Answer", "text": "A good backlink comes from a real website with genuine traffic and topical relevance. A bad backlink comes from link farms, paid networks, or auto-generated directories. Bad links can actively harm rankings through Google spam detection systems." } },
        { "@type": "Question", "name": "How long does it take to see results from link building?",
          "acceptedAnswer": { "@type": "Answer", "text": "Links typically index within two to six weeks. Measurable ranking improvements usually appear within three to four months as domain authority compounds. Each link builds on the last, compounding over time." } },
        { "@type": "Question", "name": "Will link building put my site at risk of a Google penalty?",
          "acceptedAnswer": { "@type": "Answer", "text": "Only if links are built through methods violating Google guidelines. White-hat, editorially placed links on real websites carry no penalty risk. Isuremedia never uses private blog networks, link farms, or paid placements on sites that exist solely to sell links." } },
        { "@type": "Question", "name": "Do you provide white-label link building for agencies?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Isuremedia provides fully white-label link building delivered under your brand with no client-facing references. Same quality standards, agency-branded reports, scalable across your client base." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Best Link Building Services | SEO Backlinks | Isuremedia",
  description: "Isuremedia earns white-hat editorial backlinks that build domain authority and lift search rankings across your entire site. Free backlink audit included.",
  alternates: { canonical: "/services/seo/link-building" },
};

export default function LinkBuildingLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
