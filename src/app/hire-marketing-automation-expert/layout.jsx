const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/hire-marketing-automation-expert#service",
      "name": "Hire a Marketing Automation Expert",
      "description": "Hire a marketing automation expert from Isuremedia for CRM workflows, lead nurturing sequences, email and SMS campaigns, AI automation, and platform migrations across GoHighLevel, HubSpot, and Klaviyo.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/hire-marketing-automation-expert",
      "serviceType": "Marketing Automation"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What does a marketing automation expert do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A marketing automation expert designs and manages systems that automate repetitive marketing and sales tasks. This can include CRM workflows, lead nurture, email and SMS campaigns, lead scoring, customer follow-up, integrations, AI-assisted conversations, and reporting." } },
        { "@type": "Question", "name": "Can AI be used in marketing automation?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. AI can support marketing automation through lead qualification, conversational responses, personalization, scoring, routing, and other workflow tasks. The right use depends on the business process and the data available." } },
        { "@type": "Question", "name": "Do you provide white-label marketing automation services for agencies?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. White-label marketing automation services allow agencies to have CRM, workflow, AI, email, SMS, and integration work delivered behind their brand while they keep the client relationship." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire a Marketing Automation Expert for CRM & Lead Automation",
  description: "Hire a marketing automation expert to replace manual follow-up with smarter workflows, lead nurturing, CRM automation, AI and connected customer journeys.",
  alternates: { canonical: "/hire-marketing-automation-expert" },
};

export default function HireMarketingAutomationLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
