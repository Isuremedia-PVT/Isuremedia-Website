export const metadata = {
  title: "Case Studies | Real Client Results | Isuremedia",
  description: "Real campaigns, documented results. See how Isuremedia's SEO, PPC, web, and automation work has driven measurable growth for businesses and agencies.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | Real Client Results | Isuremedia",
    description: "Real campaigns, documented results. See how Isuremedia's SEO, PPC, web, and automation work has driven measurable growth for businesses and agencies.",
    type: "website",
    url: "/case-studies",
    images: [{ url: "/feature_image/case-studies.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Real Client Results | Isuremedia",
    description: "Real campaigns, documented results. See how Isuremedia's SEO, PPC, web, and automation work has driven measurable growth for businesses and agencies.",
    images: ["/feature_image/case-studies.webp"],
  },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}
