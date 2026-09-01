const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Marketing Automation Services",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "url": "https://isuremedia.com/marketing-automation-agency",
      "description": "Marketing automation services: GoHighLevel setup, CRM, lead nurture, email and SMS automation."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is marketing automation?",
          "acceptedAnswer": { "@type": "Answer", "text": "Marketing automation refers to software systems that run repetitive sales and marketing tasks without manual effort. These tasks include lead follow-up, calendar scheduling, pipeline updates, and customer reminder messages triggered by specific user actions." } },
        { "@type": "Question", "name": "Do I need GoHighLevel specifically for marketing automation?",
          "acceptedAnswer": { "@type": "Answer", "text": "GoHighLevel is not strictly required, but it consolidates CRM, email, SMS, and funnel tools into one platform. Businesses can also run automated workflows using combinations of HubSpot, Zapier, Make, or n8n." } },
        { "@type": "Question", "name": "How long does it take to build a GoHighLevel system?",
          "acceptedAnswer": { "@type": "Answer", "text": "A standard GoHighLevel setup takes between 2 to 4 weeks from initial audit to final launch. Complex enterprise setups take between 4 to 8 weeks to design, build, and test thoroughly." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Marketing Automation Agency | GoHighLevel Setup",
  description: "Marketing automation built and managed for you. GoHighLevel setup, CRM workflows, lead nurture, email & SMS automation. Keep your pipeline full 24/7.",
  alternates: { canonical: "/marketing-automation-agency" },
};

export default function MarketingAutomationLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
