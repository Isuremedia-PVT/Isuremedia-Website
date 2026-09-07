const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/dedicated-agency-pods#service",
      "name": "Dedicated Agency Pods",
      "description": "Dedicated agency pods from Isuremedia: a fixed team of specialists assigned to your agency every month for consistent SEO, PPC, web development, and content delivery under your brand.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/dedicated-agency-pods",
      "serviceType": "Dedicated Agency Pod"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is a dedicated agency pod?",
          "acceptedAnswer": { "@type": "Answer", "text": "A dedicated agency pod is a fixed team assigned to one agency for recurring client delivery. It can include specialists such as SEO, PPC, web development, content, design, or automation, plus project management and quality control." } },
        { "@type": "Question", "name": "How is a dedicated pod different from project-based outsourcing?",
          "acceptedAnswer": { "@type": "Answer", "text": "Project-based outsourcing usually assigns work one project at a time, often with different people. A dedicated pod keeps the same team assigned to your agency so they retain knowledge of your standards, clients, tools, and working process." } },
        { "@type": "Question", "name": "Can I scale the pod up or down?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Pod size and scope can be reviewed as your client volume changes. This allows your agency to adjust fulfillment capacity without rebuilding the entire team." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Dedicated Marketing Teams for Agencies & White Label Fulfillment",
  description: "Build a dedicated marketing team for agencies that stays familiar with your clients, processes, and standards, so recurring fulfillment does not start from zero every time.",
  alternates: { canonical: "/dedicated-agency-pods" },
  openGraph: { images: [{ url: "/feature_image/dedicated-agency-pods.webp", width: 1618, height: 950 }] },
};

export default function DedicatedAgencyPodsLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
