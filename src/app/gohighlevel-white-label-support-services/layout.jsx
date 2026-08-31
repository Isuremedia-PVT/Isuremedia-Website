const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/gohighlevel-white-label-support-services#service",
      "name": "White Label GoHighLevel Support",
      "description": "White label GoHighLevel support for GHL agencies and SaaS resellers. Sub-account setup, funnel builds, automation, A2P 10DLC, SaaS Mode, and ongoing GHL client support under your brand.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/gohighlevel-white-label-support-services",
      "serviceType": "White Label GoHighLevel Support"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do my clients need to know Isuremedia is providing GHL support?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. All support responses go under your agency brand, email domain, and communication style. Isuremedia's name appears nowhere in any client-facing communication." } },
        { "@type": "Question", "name": "Can you handle A2P 10DLC registration for our GHL clients?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We handle full A2P 10DLC registration including brand registration, campaign filing, and number provisioning, plus troubleshooting delivery issues. A2P compliance is part of standard support scope." } },
        { "@type": "Question", "name": "What is your response time for GHL support requests?",
          "acceptedAnswer": { "@type": "Answer", "text": "First response within four business hours for standard requests, most resolved within one business day. Urgent issues affecting client-facing systems are prioritised immediately." } }
      ]
    }
  ]
});

export const metadata = {
  title: "GoHighLevel White Label Support for Agencies | Isuremedia",
  description: "White label GoHighLevel support for agencies. Sub-account setup, funnels, automations, and ongoing GHL client support under your brand. 4-hour response time.",
  alternates: { canonical: "/gohighlevel-white-label-support-services" },
  openGraph: { images: [{ url: "/feature_image/white-label-automation.webp", width: 1618, height: 950 }] },
};

export default function WhiteLabelAutomationLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
