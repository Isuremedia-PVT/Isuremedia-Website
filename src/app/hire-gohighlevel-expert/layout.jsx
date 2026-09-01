const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/hire-gohighlevel-expert#service",
      "name": "Hire a GoHighLevel Expert",
      "description": "Hire a certified GoHighLevel expert from Isuremedia for CRM setup, workflow automation, funnel builds, AI chatbots, SaaS Mode configuration, and platform migrations.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/hire-gohighlevel-expert",
      "serviceType": "GoHighLevel Setup and Automation"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What does a GoHighLevel expert do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A GoHighLevel expert configures and manages the platform for business or agency workflows. The work can include CRM setup, pipelines, automations, funnels, websites, messaging, calendars, reporting, AI tools, integrations, and ongoing administration." } },
        { "@type": "Question", "name": "Can you fix a GoHighLevel account that was set up badly?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. A GoHighLevel expert can audit an existing account, identify broken workflows, clean up pipelines and fields, restructure automations, and rebuild parts of the setup that are no longer reliable." } },
        { "@type": "Question", "name": "Do you offer white-label GoHighLevel support for agencies?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. White-label GoHighLevel support lets agencies use a technical delivery team behind their own brand. Work can include account setup, automation, funnels, SaaS configuration, integrations, and ongoing support." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire a GoHighLevel Expert for CRM, Automation & SaaS",
  description: "Hire a GoHighLevel expert to build, fix, or manage your system. Get help with CRM setup, automation, integrations, SaaS workflows and ongoing support.",
  alternates: { canonical: "/hire-gohighlevel-expert" },
};

export default function HireGohighlevelLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
