const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/gohighlevel-developer#service",
      "name": "GoHighLevel Developer — Funnels and Automation",
      "description": "Certified GoHighLevel developers for funnel builds, automation workflows, sub-account setup, SaaS Mode configuration, and full GHL development for agencies and businesses.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/gohighlevel-developer",
      "serviceType": "GoHighLevel Development"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is included in a GoHighLevel funnel build?",
          "acceptedAnswer": { "@type": "Answer", "text": "Full funnel architecture, page design, form setup, pipeline configuration, email and SMS automation sequences, calendar integration, and testing across all steps before handover." } },
        { "@type": "Question", "name": "Do you handle GoHighLevel sub-account setup for agencies?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provision sub-accounts from Snapshots, customise branding, configure domains and phone numbers, and test before go-live. SaaS Mode plan configuration is also supported." } },
        { "@type": "Question", "name": "How long does a GoHighLevel funnel build take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Standard single-funnel builds with automation are delivered in five to seven business days from approved brief. Complex multi-funnel builds take ten to fifteen business days." } }
      ]
    }
  ]
});

export const metadata = {
  title: "GoHighLevel Developer | GHL Funnel Builder | Isuremedia",
  description: "Hire a certified GoHighLevel developer. We build GHL funnels, automations, sub-accounts, and SaaS configurations for agencies and businesses.",
  alternates: { canonical: "/gohighlevel-developer" },
  openGraph: { images: [{ url: "/feature_image/gohighlevel-funnels.webp", width: 1618, height: 950 }] },
};

export default function GoHighLevelFunnelsLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
