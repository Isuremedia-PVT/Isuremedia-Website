export const metadata = {
  title: "Industries We Serve | Isuremedia Digital Marketing",
  description: "Digital marketing for every industry. We specialise in the channels and strategies that move the needle in your sector, from real estate to SaaS.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Serve | Isuremedia Digital Marketing",
    description: "Digital marketing for every industry. We specialise in the channels and strategies that move the needle in your sector, from real estate to SaaS.",
    type: "website",
    url: "/industries",
    images: [{ url: "/feature_image/Industry_.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Isuremedia Digital Marketing",
    description: "Digital marketing for every industry. We specialise in the channels and strategies that move the needle in your sector, from real estate to SaaS.",
    images: ["/feature_image/Industry_.webp"],
  },
};

export default function IndustriesLayout({ children }) {
  return children;
}
