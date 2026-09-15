export const metadata = {
  title: "Privacy Policy | Isuremedia",
  description: "How Isuremedia Private Limited collects, uses, shares, and processes your personal information through isuremedia.com.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Isuremedia",
    description: "How Isuremedia Private Limited collects, uses, shares, and processes your personal information through isuremedia.com.",
    type: "website",
    url: "/privacy-policy",
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Isuremedia",
    description: "How Isuremedia Private Limited collects, uses, shares, and processes your personal information through isuremedia.com.",
    images: ["/isuremedia-dark.webp"],
  },
};

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
