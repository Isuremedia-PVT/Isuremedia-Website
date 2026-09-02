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
        { "@type": "Question", "name": "What is GoHighLevel white label support?",
          "acceptedAnswer": { "@type": "Answer", "text": "GoHighLevel white label support is technical support delivered by a specialist team behind an agency's brand. The agency keeps the client relationship while the support team handles agreed GoHighLevel setup, changes, troubleshooting, and maintenance." } },
        { "@type": "Question", "name": "Do my clients know that the GoHighLevel support is outsourced?",
          "acceptedAnswer": { "@type": "Answer", "text": "The white-label model is designed to keep the technical fulfillment behind the agency. Client-facing communication and deliverables can remain under your agency's brand." } },
        { "@type": "Question", "name": "Can you handle A2P 10DLC registration for GoHighLevel clients?",
          "acceptedAnswer": { "@type": "Answer", "text": "A2P 10DLC setup and registration support can be included when it is part of the agreed scope. Requirements depend on the account, business information, messaging use case, and registration status." } }
      ]
    }
  ]
});

export const metadata = {
  title: "GoHighLevel White Label Support for Agencies & SaaS Resellers",
  description: "Get GoHighLevel white label support that takes recurring client requests off your team's plate while keeping the support experience under your agency's brand.",
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
