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
        { "@type": "Question", "name": "What are white label SEO services?",
          "acceptedAnswer": { "@type": "Answer", "text": "White label SEO services are SEO fulfillment services delivered by a specialist provider for another agency to sell under its own brand. The agency keeps the client relationship while the white-label provider handles the agreed SEO work." } },
        { "@type": "Question", "name": "What is the difference between white label SEO and SEO reseller services?",
          "acceptedAnswer": { "@type": "Answer", "text": "Both models involve an agency or reseller offering SEO without doing every delivery task in-house. White label SEO emphasizes behind-the-scenes fulfillment under the agency's brand, while reseller arrangements can vary in how much delivery, branding, and client communication the provider handles." } },
        { "@type": "Question", "name": "Can white label SEO improve my agency's margins?",
          "acceptedAnswer": { "@type": "Answer", "text": "It can, depending on how you price the service, how efficiently the fulfillment is delivered, and what your internal costs would be. The right comparison is your client revenue against the combined fulfillment, account management, and operating costs." } }
      ]
    }
  ]
});

export const metadata = {
  title: "White Label SEO Services for Agencies, Resellers & Partners",
  description: "White label SEO services let your agency offer SEO under its own brand while a specialist team handles the fulfillment, giving you more delivery capacity without another internal team.",
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
