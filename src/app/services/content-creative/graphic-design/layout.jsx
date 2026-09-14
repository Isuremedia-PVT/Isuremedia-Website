export const metadata = {
  title: "Graphic Design Services | Isuremedia",
  description: "Ongoing graphic design for social media, presentations, email templates, marketing collateral, and infographics, applied consistently across every channel.",
  alternates: { canonical: "/services/content-creative/graphic-design" },
  openGraph: {
    title: "Graphic Design Services | Isuremedia",
    description: "Ongoing graphic design for social media, presentations, email templates, marketing collateral, and infographics, applied consistently across every channel.",
    type: "website",
    url: "/services/content-creative/graphic-design",
    images: [{ url: "/feature_image/graphic-design.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design Services | Isuremedia",
    description: "Ongoing graphic design for social media, presentations, email templates, marketing collateral, and infographics, applied consistently across every channel.",
    images: ["/feature_image/graphic-design.webp"],
  },
};

export default function GraphicDesignLayout({ children }) {
  return children;
}
