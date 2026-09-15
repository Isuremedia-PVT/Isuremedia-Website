export const metadata = {
  title: "Google Ads Management | Isuremedia",
  description: "Google Ads campaigns across Search, Performance Max, Display, Shopping, and YouTube, managed by a Google Partner agency for leads, calls, and sales.",
  alternates: { canonical: "/services/ppc/google-ads" },
  openGraph: {
    title: "Google Ads Management | Isuremedia",
    description: "Google Ads campaigns across Search, Performance Max, Display, Shopping, and YouTube, managed by a Google Partner agency for leads, calls, and sales.",
    type: "website",
    url: "/services/ppc/google-ads",
    images: [{ url: "/feature_image/google-ads.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Management | Isuremedia",
    description: "Google Ads campaigns across Search, Performance Max, Display, Shopping, and YouTube, managed by a Google Partner agency for leads, calls, and sales.",
    images: ["/feature_image/google-ads.webp"],
  },
};

export default function GoogleAdsLayout({ children }) {
  return children;
}
