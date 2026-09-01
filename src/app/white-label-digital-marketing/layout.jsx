const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "White-Label Digital Marketing",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "url": "https://isuremedia.com/white-label-digital-marketing",
      "audience": { "@type": "Audience", "audienceType": "Marketing Agencies" },
      "description": "White-label SEO, PPC, GHL, content, and web services for agencies. NDA included. No footprint."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Will my clients ever find out that work is outsourced?",
          "acceptedAnswer": { "@type": "Answer", "text": "No, your clients will never know we exist because all files, reports, and graphics are completely unbranded. We sign strict non-disclosure contracts (NDAs) before starting, and every deliverable features your agency logo and visual identity." } },
        { "@type": "Question", "name": "How do you help agencies using GoHighLevel?",
          "acceptedAnswer": { "@type": "Answer", "text": "As a white label GoHighLevel agency, we set up sub-accounts, email/SMS triggers, deal pipelines, and custom snapshots inside your system, letting you sell complete CRM setups to clients without spending hours on complex technical configuration." } },
        { "@type": "Question", "name": "How does reseller digital marketing pricing work?",
          "acceptedAnswer": { "@type": "Answer", "text": "Our reseller digital marketing plans use fixed wholesale rates that leave room for your agency markups. You charge your clients your usual monthly retainer fee while paying us a flat wholesale price." } }
      ]
    }
  ]
});

export const metadata = {
  title: "White Label Digital Marketing | Outsource Digital Agency",
  description: "Scale your client base with white label digital marketing. Trusted white label SEO agency and PPC management services designed for growing agencies.",
  alternates: { canonical: "/white-label-digital-marketing" },
};

export default function WhiteLabelLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
