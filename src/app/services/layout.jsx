export const metadata = {
  robots: { index: false, follow: true },
  title: "Digital Marketing Services for Business Growth | iSureMedia",
  description: "Discover iSureMedia's digital marketing services, including SEO, PPC, web development, content marketing, automation, and more.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Marketing Services for Business Growth | iSureMedia",
    description: "Discover iSureMedia's digital marketing services, including SEO, PPC, web development, content marketing, automation, and more.",
    type: "website",
    url: "/services",
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services for Business Growth | iSureMedia",
    description: "Discover iSureMedia's digital marketing services, including SEO, PPC, web development, content marketing, automation, and more.",
    images: ["/isuremedia-dark.webp"],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
