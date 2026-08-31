const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Marketing Automation Services",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "url": "https://isuremedia.com/services/marketing-automation",
      "description": "Marketing automation services: GoHighLevel setup, CRM, lead nurture, email and SMS automation."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is marketing automation?",
          "acceptedAnswer": { "@type": "Answer", "text": "Marketing automation handles repetitive tasks automatically: lead follow-up, appointment booking, CRM updates, and email and SMS sequences. The right action happens every time." } },
        { "@type": "Question", "name": "Do you work with GoHighLevel?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. GoHighLevel is our primary platform. We build complete GHL systems including CRM, pipelines, funnels, calendars, and email and SMS automations from scratch." } },
        { "@type": "Question", "name": "How long does it take to set up marketing automation?",
          "acceptedAnswer": { "@type": "Answer", "text": "A standard GoHighLevel setup takes 1–3 weeks. Complex systems may take 3–6 weeks." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Marketing Automation Agency | GoHighLevel Setup | Isuremedia",
  description: "Marketing automation built and managed for you. GoHighLevel setup, CRM workflows, lead nurture, email & SMS automation. Keep your pipeline full 24/7.",
  alternates: { canonical: "/services/marketing-automation" },
};

export default function MarketingAutomationLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
