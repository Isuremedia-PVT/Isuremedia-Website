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
          "acceptedAnswer": { "@type": "Answer", "text": "A fixed team of a project manager plus specialists assigned permanently to your agency. Your pod knows your brand, clients, and standards. Context accumulates over time instead of resetting with each new freelancer." } },
        { "@type": "Question", "name": "How is a dedicated pod different from project-based outsourcing?",
          "acceptedAnswer": { "@type": "Answer", "text": "Project outsourcing sources a different vendor for each brief and resets context every time. A dedicated pod is the same people on every brief, building accumulated knowledge and consistent quality against one standard." } },
        { "@type": "Question", "name": "What happens if our client volume changes?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pod size is reviewed monthly and adjusted without penalty. If a client churns, the pod scales back. If you win new clients, capacity is added. Month to month with no minimum commitment." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Dedicated Agency Pod | White Label Team | Isuremedia",
  description: "Get a dedicated agency pod from Isuremedia. A fixed team of specialists assigned to your agency every month for SEO, PPC, web dev, and content.",
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
