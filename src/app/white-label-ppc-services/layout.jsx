const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/white-label-ppc-services#service",
      "name": "White Label PPC Agency",
      "description": "White label Google Ads, Meta Ads, and LinkedIn Ads management for agencies. Certified specialists, NDA-protected, branded monthly reports, campaigns run in client ad accounts.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/white-label-ppc-services",
      "serviceType": "White Label PPC"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do campaigns run in our ad account or the client's own account?",
          "acceptedAnswer": { "@type": "Answer", "text": "Every campaign runs inside the client's own ad account. Full ownership and historical data stay with the client. If the engagement ends, nothing needs to be transferred or rebuilt." } },
        { "@type": "Question", "name": "How are monthly PPC reports branded?",
          "acceptedAnswer": { "@type": "Answer", "text": "Reports are built with your agency's logo, colours, and name on every page, ready to send without any editing. They cover spend, clicks, conversions, and next-month priorities." } },
        { "@type": "Question", "name": "How fast can a campaign launch after onboarding a new client?",
          "acceptedAnswer": { "@type": "Answer", "text": "Campaigns are typically live within three to five business days of receiving a brief and account access, including strategy, audience setup, creative production, and conversion tracking." } }
      ]
    }
  ]
});

export const metadata = {
  title: "White Label PPC Agency | White Label Google Ads | Isuremedia",
  description: "White label PPC management for agencies. Google, Meta, and LinkedIn Ads run by certified specialists under your brand. NDA-protected, branded reports.",
  alternates: { canonical: "/white-label-ppc-services" },
  openGraph: { images: [{ url: "/feature_image/white-label-ppc.webp", width: 1618, height: 950 }] },
};

export default function WhiteLabelPpcLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
