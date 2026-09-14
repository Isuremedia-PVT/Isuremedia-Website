export const metadata = {
  title: "Our Services | Isuremedia",
  description: "Websites & funnels, SEO, PPC, content & creative, white-label fulfillment, and marketing automation, full-service digital marketing delivered under one roof.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | Isuremedia",
    description: "Websites & funnels, SEO, PPC, content & creative, white-label fulfillment, and marketing automation, full-service digital marketing delivered under one roof.",
    type: "website",
    url: "/services",
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Isuremedia",
    description: "Websites & funnels, SEO, PPC, content & creative, white-label fulfillment, and marketing automation, full-service digital marketing delivered under one roof.",
    images: ["/isuremedia-dark.webp"],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
