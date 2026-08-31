const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "PPC Advertising Services",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "url": "https://isuremedia.com/ppc-marketing-agencies",
      "description": "PPC management across Google Ads, Meta, LinkedIn & YouTube. ROAS-focused campaigns with full tracking."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a good ROAS for Google Ads?",
          "acceptedAnswer": { "@type": "Answer", "text": "For most service businesses, a 3x-5x ROAS is a solid benchmark. E-commerce typically targets 4x+. Your target depends on your margins and CPA goals." } },
        { "@type": "Question", "name": "How quickly will I see results from paid ads?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most campaigns generate leads or sales within 2–4 weeks of launch. By months 2–3, data allows us to optimise for better returns." } },
        { "@type": "Question", "name": "Which platforms do you run ads on?",
          "acceptedAnswer": { "@type": "Answer", "text": "Google Search, Google Display, Meta (Facebook and Instagram), LinkedIn, YouTube, and Google Shopping." } }
      ]
    }
  ]
});

export const metadata = {
  title: "ppc marketing agencies | Google, Meta & LinkedIn Ads | Isuremedia",
  description: "Results-driven PPC agency managing Google Ads, Meta, LinkedIn & YouTube campaigns. Every dollar tracked, every lead counted. Free PPC audit.",
  alternates: { canonical: "/ppc-marketing-agencies" },
};

export default function PPCLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
