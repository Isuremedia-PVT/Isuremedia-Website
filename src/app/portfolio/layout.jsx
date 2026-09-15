export const metadata = {
  title: "Portfolio | Isuremedia Digital Marketing Agency",
  description: "Our work speaks for itself. From high-converting websites to revenue-driving funnels and SEO campaigns, browse projects Isuremedia has delivered for clients worldwide.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Isuremedia Digital Marketing Agency",
    description: "Our work speaks for itself. From high-converting websites to revenue-driving funnels and SEO campaigns, browse projects Isuremedia has delivered for clients worldwide.",
    type: "website",
    url: "/portfolio",
    images: [{ url: "/feature_image/design-portfolio.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Isuremedia Digital Marketing Agency",
    description: "Our work speaks for itself. From high-converting websites to revenue-driving funnels and SEO campaigns, browse projects Isuremedia has delivered for clients worldwide.",
    images: ["/feature_image/design-portfolio.webp"],
  },
};

export default function PortfolioLayout({ children }) {
  return children;
}
