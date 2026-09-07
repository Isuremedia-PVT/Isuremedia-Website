const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/seo-content-writing-services#service",
      "name": "SEO Content Writing Services",
      "description": "SEO blog writing and content services from Isuremedia. Articles, pillar pages, service copy, and long-form content written by niche specialists and optimised for rankings.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/seo-content-writing-services",
      "serviceType": "SEO Content Writing"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What types of SEO content do you write?",
          "acceptedAnswer": { "@type": "Answer", "text": "Blog articles, long-form pillar pages, service page copy, product descriptions, email copy, case studies, landing page copy, and social media content written by niche specialists." } },
        { "@type": "Question", "name": "How do you ensure the content ranks?",
          "acceptedAnswer": { "@type": "Answer", "text": "Every piece starts with a keyword research brief covering target keyword, search intent, heading structure, word count, and competing pages. Reviewed for keyword placement, readability, and schema eligibility before delivery." } },
        { "@type": "Question", "name": "How many articles can you produce per month?",
          "acceptedAnswer": { "@type": "Answer", "text": "Standard engagements cover four to eight articles monthly. For content-led SEO campaigns at scale, fifteen to twenty-five articles per month with a dedicated content team." } }
      ]
    }
  ]
});

export const metadata = {
  title: "SEO Content Writing Services | SEO Writing Agency | Isuremedia",
  description: "Isuremedia writes SEO blog content that ranks and converts. Articles, website copy, and long-form content written by specialists in your niche. Free content audit.",
  alternates: { canonical: "/seo-content-writing-services" },
  openGraph: { images: [{ url: "/feature_image/seo-blog-writing.webp", width: 1618, height: 950 }] },
};

export default function SeoBlogWritingLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
