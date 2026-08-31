const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "White-Label Digital Marketing",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "url": "https://isuremedia.com/white-label-digital-marketing",
      "audience": { "@type": "Audience", "audienceType": "Marketing Agencies" },
      "description": "White-label SEO, PPC, GHL, content, and web services for agencies. NDA included. No footprint."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Will my clients know that Isuremedia is doing the work?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. All reports and deliverables are branded with your agency. We sign an NDA before work begins." } },
        { "@type": "Question", "name": "Do you offer white-label GoHighLevel setup?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build complete GHL systems under your brand: CRM, pipelines, funnels, calendars, and email/SMS automations." } },
        { "@type": "Question", "name": "Is there a minimum commitment?",
          "acceptedAnswer": { "@type": "Answer", "text": "No long-term contracts. Month-to-month. Start with one client and scale as your agency grows." } }
      ]
    }
  ]
});

export const metadata = {
  title: "White-Label Digital Marketing for Agencies | Isuremedia",
  description: "Scale your agency without hiring. White-label SEO, PPC, web, GHL & content under your brand. NDA on every engagement. 100+ agency partners.",
  alternates: { canonical: "/white-label-digital-marketing" },
};

export default function WhiteLabelLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
