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
          "acceptedAnswer": { "@type": "Answer", "text": "A good Return on Ad Spend (ROAS) is usually between 3x and 5x (300% to 500%) for online stores. For lead generation accounts, we focus on hitting a target Cost Per Lead (CPL) that lets you make a great profit on every sale." } },
        { "@type": "Question", "name": "How quickly will I see results from PPC management services?",
          "acceptedAnswer": { "@type": "Answer", "text": "You will see website traffic the exact day your ads go live. Good lead volume usually starts coming in within 2 to 4 weeks as ad platforms learn who your buyers are. Accounts usually hit peak performance between months 2 and 3." } },
        { "@type": "Question", "name": "What ad platforms do you manage?",
          "acceptedAnswer": { "@type": "Answer", "text": "We run campaigns across Google Search, Google Shopping, Performance Max, Meta (Facebook & Instagram), LinkedIn, TikTok, YouTube, and retargeting networks." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Paid Advertising Agency | PPC Marketing Agencies & PPC Management Services",
  description: "Scale revenue with top PPC marketing agencies. Expert paid advertising agency offering PPC management services across Google Ads, Meta ads & LinkedIn ads.",
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
