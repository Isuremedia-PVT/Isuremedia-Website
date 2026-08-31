const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Website Design & Sales Funnel Services",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "url": "https://isuremedia.com/websites-and-funnels",
      "description": "We design websites, landing pages, and GoHighLevel funnels that convert."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Do you build GoHighLevel funnels?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. GoHighLevel is one of our primary platforms. We build complete GHL systems including CRM, pipelines, funnels, calendars, and email and SMS automations." } },
        { "@type": "Question", "name": "How long does a website build take?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most business websites take 3–6 weeks from briefing to launch. Landing pages and funnels are typically 1–2 weeks." } },
        { "@type": "Question", "name": "What is the difference between a website and a sales funnel?",
          "acceptedAnswer": { "@type": "Answer", "text": "A website gives your business a professional home online. A sales funnel guides a visitor toward one specific action: a call, a purchase, or a sign-up." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Website Design & Sales Funnel Agency | Isuremedia",
  description: "We design and build websites, landing pages, and sales funnels that convert. Business sites, GoHighLevel funnels & CRO. Free website audit.",
  alternates: { canonical: "/websites-and-funnels" },
  openGraph: { images: [{ url: "/feature_image/websites-funnels.webp", width: 1618, height: 950 }] },
};

export default function WebsitesFunnelsLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
