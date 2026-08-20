const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/hire/gohighlevel-expert#service",
      "name": "Hire a GoHighLevel Expert",
      "description": "Hire a certified GoHighLevel expert from Isuremedia for CRM setup, workflow automation, funnel builds, AI chatbots, SaaS Mode configuration, and platform migrations.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/hire/gohighlevel-expert",
      "serviceType": "GoHighLevel Setup and Automation"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Can you fix a GoHighLevel account that was set up badly?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fixing poorly built GHL accounts is a major part of our work. We audit the account, document what exists, and rebuild workflows, pipelines, and SaaS Mode configuration properly rather than patching indefinitely." } },
        { "@type": "Question", "name": "Do you handle GHL SaaS Mode and white-label setup?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. SaaS Mode setup includes white-label branding, Stripe integration, sub-account provisioning templates, and onboarding automations. Isuremedia co-owns SalesleyAI, a live GHL SaaS product, so we know this from the inside." } },
        { "@type": "Question", "name": "Can you migrate from HubSpot or ActiveCampaign to GoHighLevel?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle full migrations including contact data, pipeline recreation, workflow logic, funnel rebuilding, and campaign migration from HubSpot, ActiveCampaign, ClickFunnels, Kajabi, and Keap." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire a GoHighLevel Expert | GHL Certified Setup | Isuremedia",
  description: "Hire a certified GoHighLevel expert from Isuremedia. CRM setup, workflow automation, funnels, AI chatbots, and SaaS Mode. No contracts. Starts in 48 hours.",
  alternates: { canonical: "/hire/gohighlevel-expert" },
};

export default function HireGohighlevelLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
