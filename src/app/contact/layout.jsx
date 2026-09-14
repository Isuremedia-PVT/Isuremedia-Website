export const metadata = {
  title: "Contact Us | Isuremedia",
  description: "Get in touch with Isuremedia. Your proposal is one form away. Your answers are one call away.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Isuremedia",
    description: "Get in touch with Isuremedia. Your proposal is one form away. Your answers are one call away.",
    type: "website",
    url: "/contact",
    images: [{ url: "/feature_image/contact.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Isuremedia",
    description: "Get in touch with Isuremedia. Your proposal is one form away. Your answers are one call away.",
    images: ["/feature_image/contact.webp"],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
