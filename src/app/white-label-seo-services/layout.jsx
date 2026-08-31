const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/white-label-seo-services#service",
      "name": "White Label SEO Services",
      "description": "Full-stack white label SEO fulfillment for agencies: technical audits, on-page optimisation, content, link building, local SEO, AI search, and branded monthly reporting.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/white-label-seo-services",
      "serviceType": "White Label SEO"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Will my clients ever find out Isuremedia is doing the work?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Isuremedia's name appears on no client-facing material. All reports, audits, and content are branded to your agency. We operate as your invisible fulfilment team without exception." } },
        { "@type": "Question", "name": "How does white-label reporting work?",
          "acceptedAnswer": { "@type": "Answer", "text": "We produce fully formatted monthly reports under your agency brand covering rankings, traffic, links built, and next-month priorities. Ready to send to clients without any editing." } },
        { "@type": "Question", "name": "What is the typical gross margin for white-label SEO?",
          "acceptedAnswer": { "@type": "Answer", "text": "Agencies using white-label SEO at 100 to 150% markup consistently report 40 to 60% gross margins. The margin is predictable because the wholesale cost is fixed." } }
      ]
    }
  ]
});

export const metadata = {
  title: "White Label SEO Services | SEO Reseller Agency | Isuremedia",
  description: "Deliver white label SEO services under your agency brand. Full-stack fulfillment: technical audits, link building, local SEO, and AI search. Branded to your agency.",
  alternates: { canonical: "/white-label-seo-services" },
  openGraph: { images: [{ url: "/feature_image/white-label-seo.webp", width: 1618, height: 950 }] },
};

export default function WhiteLabelSeoLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
