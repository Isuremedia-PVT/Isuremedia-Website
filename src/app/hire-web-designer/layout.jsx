const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/hire-web-designer#service",
      "name": "Hire a Web Designer",
      "description": "Hire a professional web designer from Isuremedia for custom websites, landing pages, UX design, Webflow builds, and conversion-focused design across WordPress, Shopify, and Webflow.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/hire-web-designer",
      "serviceType": "Web Design"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do you design only, or do you also build the website?",
          "acceptedAnswer": { "@type": "Answer", "text": "Both. Our designers work across WordPress, Shopify, Webflow, and GoHighLevel so the same team that designs your site can also build it with no handoff to a separate developer." } },
        { "@type": "Question", "name": "Who owns the design files once the work is delivered?",
          "acceptedAnswer": { "@type": "Answer", "text": "You do. All Figma files and design assets are transferred to you on completion. No ongoing licence fee, no lock-in, no situation where you need to return just to access your own files." } },
        { "@type": "Question", "name": "Can you redesign an existing site or only build new ones?",
          "acceptedAnswer": { "@type": "Answer", "text": "We redesign existing sites regularly. We review what exists, identify what is and is not working, and redesign around a brief tied to business goals so the site performs better, not just looks different." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire a Web Designer | Professional Web Design | Isuremedia",
  description: "Hire a professional web designer from Isuremedia. Custom websites, landing pages, UX design, and Webflow builds. In-house team, no contracts. Free proposal.",
  alternates: { canonical: "/hire-web-designer" },
};

export default function HireWebDesignerLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
