const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Content Marketing and Creative Services",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "url": "https://isuremedia.com/content-marketing-and-creative-agency",
      "description": "SEO content, website copy, ad creatives, social media, graphic design and video. Built to rank and convert."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What makes your SEO content writing service different from standard blog posts?",
          "acceptedAnswer": { "@type": "Answer", "text": "Our SEO content writing service focuses on keyword intent, topical depth, and lead conversion rather than generic writing. As a dedicated blog writing agency, our team builds structured content clusters to establish deep topical authority while integrating strategic call-to-actions that convert readers into paying leads." } },
        { "@type": "Question", "name": "Do you use AI to write articles and design creative assets?",
          "acceptedAnswer": { "@type": "Answer", "text": "No, every final deliverable is researched, written, and designed by human experts. We only leverage AI tools to accelerate backend keyword research, data collection, and topic mapping." } },
        { "@type": "Question", "name": "Do I own full rights to the final content and design files?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, you retain 100% full ownership and copyright of all copy, visual designs, and source files upon delivery, with zero royalty fees or ongoing usage restrictions." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Content Marketing Agency | SEO & Blog Writing Services",
  description: "Grow your brand with a full-service content marketing agency. Get expert SEO content writing, custom ad creative design, and website copywriting services.",
  alternates: { canonical: "/content-marketing-and-creative-agency" },
};

export default function ContentCreativeLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
