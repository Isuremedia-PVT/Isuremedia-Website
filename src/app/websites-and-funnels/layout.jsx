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
        { "@type": "Question", "name": "What is the difference between a website and a sales funnel?",
          "acceptedAnswer": { "@type": "Answer", "text": "A traditional website provides general information and navigation across multiple pages. A sales funnel is a focused, step-by-step path designed to guide visitors toward one specific action, such as booking a call or buying a product." } },
        { "@type": "Question", "name": "How long does a website or funnel project take to complete?",
          "acceptedAnswer": { "@type": "Answer", "text": "A single landing page design service project typically takes 1 to 2 weeks, while a full small business website design or multi-step sales funnel takes 3 to 5 weeks from discovery to launch." } },
        { "@type": "Question", "name": "Do you build GoHighLevel funnels?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. GoHighLevel is one of our primary platforms. We build complete GHL systems including CRM, pipelines, funnels, appointment calendars, and email and SMS automations." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Website Design Agency | Custom Website Development Services",
  description: "Build fast, modern sites with a trusted website design agency. Specializing in custom website development, high-converting landing pages, and WordPress.",
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
