export const metadata = {
  title: "Thank You | Isuremedia",
  description: "Thank you for reaching out to Isuremedia. Our team will review your request and reach out within 1 business day.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Thank You | Isuremedia",
    description: "Thank you for reaching out to Isuremedia. Our team will review your request and reach out within 1 business day.",
    type: "website",
    url: "/thank-you",
    images: [{ url: "/feature_image/Thanku_.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | Isuremedia",
    description: "Thank you for reaching out to Isuremedia. Our team will review your request and reach out within 1 business day.",
    images: ["/feature_image/Thanku_.webp"],
  },
};

export default function ThankYouLayout({ children }) {
  return children;
}
