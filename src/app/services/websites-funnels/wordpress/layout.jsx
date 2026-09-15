export const metadata = {
  title: "WordPress Development Services | Isuremedia",
  description: "Custom WordPress themes, WooCommerce builds, security hardening, and Core Web Vitals optimisation. Isuremedia builds lean, fast WordPress sites your team can actually manage.",
  alternates: { canonical: "/services/websites-funnels/wordpress" },
  openGraph: {
    title: "WordPress Development Services | Isuremedia",
    description: "Custom WordPress themes, WooCommerce builds, security hardening, and Core Web Vitals optimisation. Isuremedia builds lean, fast WordPress sites your team can actually manage.",
    type: "website",
    url: "/services/websites-funnels/wordpress",
    images: [{ url: "/feature_image/wordpress.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Services | Isuremedia",
    description: "Custom WordPress themes, WooCommerce builds, security hardening, and Core Web Vitals optimisation. Isuremedia builds lean, fast WordPress sites your team can actually manage.",
    images: ["/feature_image/wordpress.webp"],
  },
};

export default function WordPressLayout({ children }) {
  return children;
}
