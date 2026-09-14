export const metadata = {
  title: "Sitemap | Isuremedia",
  description: "Browse every page on the Isuremedia website, organised by service and category.",
  alternates: { canonical: "/sitemap" },
  // Matches robots.txt, which already disallows crawling the human-readable
  // /sitemap/ page (the XML sitemap at /sitemap.xml is the one for crawlers).
  robots: { index: false, follow: true },
  openGraph: {
    title: "Sitemap | Isuremedia",
    description: "Browse every page on the Isuremedia website, organised by service and category.",
    type: "website",
    url: "/sitemap",
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Isuremedia",
    description: "Browse every page on the Isuremedia website, organised by service and category.",
    images: ["/isuremedia-dark.webp"],
  },
};

export default function SitemapLayout({ children }) {
  return children;
}
