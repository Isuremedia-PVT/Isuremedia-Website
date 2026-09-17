export const metadata = {
  robots: { index: false, follow: true },
  title: "Top Digital Marketing Agency in US | SEO & Marketing Services",
  description: "Top digital marketing agency offering SEO services, PPC advertising, social media marketing, & content marketing services. Drive organic digital growth today.",
  keywords: [
    "digital marketing agency",
    "digital marketing services",
    "digital marketing agencies in us",
    "seo services agency",
    "ppc advertising services",
    "social media marketing service",
    "content marketing services",
    "seo organic growth",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Top Digital Marketing Agency in US | SEO & Marketing Services",
    description: "Top digital marketing agency offering SEO services, PPC advertising, social media marketing, & content marketing services. Drive organic digital growth today.",
    type: "website",
    url: "/services",
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Digital Marketing Agency in US | SEO & Marketing Services",
    description: "Top digital marketing agency offering SEO services, PPC advertising, social media marketing, & content marketing services. Drive organic digital growth today.",
    images: ["/isuremedia-dark.webp"],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
