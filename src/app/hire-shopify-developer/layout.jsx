const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/hire-shopify-developer#service",
      "name": "Hire Shopify Developer",
      "description": "Hire a dedicated Shopify developer from Isuremedia for custom stores, Shopify Plus, theme development, app integrations, WooCommerce migrations, and checkout optimization.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/hire-shopify-developer",
      "serviceType": "Shopify Development"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What does a Shopify developer do?",
          "acceptedAnswer": { "@type": "Answer", "text": "A Shopify developer builds, customizes, integrates, and maintains Shopify stores. Their work can include themes, storefront functionality, apps, APIs, Shopify Plus, performance improvements, migrations, and checkout optimization." } },
        { "@type": "Question", "name": "Can you migrate a WooCommerce store to Shopify?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. A WooCommerce to Shopify migration can include product and customer data, storefront setup, URL redirects, integrations, and other technical work required to move the store to Shopify." } },
        { "@type": "Question", "name": "Do you offer Shopify Plus development?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Shopify Plus development can include advanced storefront work, custom integrations, more complex workflows, and technical support for businesses using the Shopify Plus platform." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire a Shopify Developer for Custom Stores & Shopify Plus",
  description: "Hire a Shopify developer to build a store around your products and customers, with custom design, smoother shopping experiences, and technical support as you grow.",
  alternates: { canonical: "/hire-shopify-developer" },
};

export default function HireShopifyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
