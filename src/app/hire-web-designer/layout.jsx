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
        { "@type": "Question", "name": "What does a web designer do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A web designer plans and creates the visual layout and user experience of a website. Their work can include UX research, wireframes, page layouts, responsive design, interface design, design systems, and conversion-focused page structure." } },
        { "@type": "Question", "name": "What is the difference between a web designer and a web developer?",
          "acceptedAnswer": { "@type": "Answer", "text": "A web designer focuses on a website's visual design, user experience, layout, and interaction patterns, while a web developer builds and implements the technical functionality. Many website projects require both roles." } },
        { "@type": "Question", "name": "Can you design websites for WordPress, Shopify, or Webflow?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Web designers can create designs for WordPress, Shopify, Webflow, and other platforms. The design approach can be adapted to the platform's content model, components, and technical constraints." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire a Web Designer for Conversion Focused Websites & Web Apps",
  description: "Hire a web designer for custom websites, web apps, APIs, and integrations. Get experienced development support for complex builds, performance and ongoing maintenance.",
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
