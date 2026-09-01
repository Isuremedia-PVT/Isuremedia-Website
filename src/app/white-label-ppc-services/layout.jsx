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
        { "@type": "Question", "name": "What is a white label PPC agency?",
          "acceptedAnswer": { "@type": "Answer", "text": "A white label PPC agency manages paid advertising for another agency to sell under its own brand. The agency keeps the client relationship while the white-label provider handles the agreed campaign strategy, execution, optimization, and reporting." } },
        { "@type": "Question", "name": "Do campaigns run in my client's account or yours?",
          "acceptedAnswer": { "@type": "Answer", "text": "Campaigns run in the client's advertising account. This keeps account ownership and historical campaign data with the client while the white-label PPC team manages the agreed work." } },
        { "@type": "Question", "name": "How quickly can a white label PPC campaign launch?",
          "acceptedAnswer": { "@type": "Answer", "text": "A new campaign can generally launch within three to five business days once the required brief, account access, assets, tracking information, and approvals are available. The timeline can vary by platform and campaign complexity." } }
      ]
    }
  ]
});

export const metadata = {
  title: "White Label PPC Agency for Google, Meta & LinkedIn Ads",
  description: "A white label PPC agency helps you add paid media to your offer without building another department, while your agency keeps control of the client relationship.",
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
