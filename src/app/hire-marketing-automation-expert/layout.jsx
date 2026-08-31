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
        { "@type": "Question", "name": "Which platforms do your marketing automation specialists work with?",
          "acceptedAnswer": { "@type": "Answer", "text": "GoHighLevel, HubSpot, ActiveCampaign, Klaviyo, Mailchimp, Brevo, and Customer.io. CRM work covers GHL CRM, HubSpot CRM, Salesforce, Pipedrive, and Zoho. Integrations via Zapier, Make, n8n, and direct API." } },
        { "@type": "Question", "name": "What does AI marketing automation do that regular automation does not?",
          "acceptedAnswer": { "@type": "Answer", "text": "AI automation fires on behaviour rather than time: sending when a lead is most likely to open, scoring higher when they visit pricing pages, adapting messaging when a lead goes quiet. Each lead gets individual treatment, not the same sequence for everyone." } },
        { "@type": "Question", "name": "Can you migrate from one automation platform to another?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Full migrations including contacts, workflow logic, sequences, funnels, and email and SMS campaigns. Most common: ActiveCampaign to GoHighLevel, HubSpot to GoHighLevel. Planned before work starts so no active leads are lost." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire Marketing Automation Expert | CRM Automation | Isuremedia",
  description: "Hire a marketing automation expert from Isuremedia. CRM workflows, lead nurturing, and AI automation across GoHighLevel, HubSpot, and Klaviyo. Free proposal.",
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
