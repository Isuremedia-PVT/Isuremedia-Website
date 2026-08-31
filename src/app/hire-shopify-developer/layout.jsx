const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://isuremedia.com/hire/shopify-developer#service",
      "name": "Hire Shopify Developer",
      "description": "Hire a dedicated Shopify developer from Isuremedia for custom stores, Shopify Plus, theme development, app integrations, WooCommerce migrations, and checkout optimization.",
      "provider": { "@type": "Organization", "name": "Isuremedia", "url": "https://isuremedia.com" },
      "areaServed": ["US", "GB", "IN", "NZ", "AE", "CA"],
      "url": "https://isuremedia.com/hire/shopify-developer",
      "serviceType": "Shopify Development"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How quickly can a Shopify developer start on my store?",
          "acceptedAnswer": { "@type": "Answer", "text": "Once requirements are confirmed, a developer starts within 48 hours. The same developer builds your store from day one with no handoffs." } },
        { "@type": "Question", "name": "Can you migrate my WooCommerce store to Shopify?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Isuremedia handles full migrations including product data, customer records, order history, and SEO signals. Planned before work starts to ensure nothing is lost." } },
        { "@type": "Question", "name": "Do you work with Shopify Plus?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our developers work across standard Shopify and Shopify Plus including checkout extensions, Shopify Functions, B2B configuration, and Shopify Markets." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Hire Shopify Developer | Shopify Experts | Isuremedia",
  description: "Hire a Shopify developer from Isuremedia for custom stores, Shopify Plus, theme development, and WooCommerce migrations. In-house team. Starts in 48 hours.",
  alternates: { canonical: "/hire/shopify-developer" },
};

export default function HireShopifyLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: SCHEMA }} />
      {children}
    </>
  );
}
