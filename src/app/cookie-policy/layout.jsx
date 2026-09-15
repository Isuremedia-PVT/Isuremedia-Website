export const metadata = {
  title: "Cookie Policy | Isuremedia",
  description: "Isuremedia's cookie policy. Learn what cookies we use to run this site, understand traffic, and personalize content.",
  alternates: { canonical: "/cookie-policy" },
  openGraph: {
    title: "Cookie Policy | Isuremedia",
    description: "Isuremedia's cookie policy. Learn what cookies we use to run this site, understand traffic, and personalize content.",
    type: "website",
    url: "/cookie-policy",
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Isuremedia",
    description: "Isuremedia's cookie policy. Learn what cookies we use to run this site, understand traffic, and personalize content.",
    images: ["/isuremedia-dark.webp"],
  },
};

export default function CookiePolicyLayout({ children }) {
  return children;
}
