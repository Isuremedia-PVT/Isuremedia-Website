export const metadata = {
  title: "Refund Policy | Isuremedia",
  description: "Isuremedia's refund policy. Read this policy carefully to understand your rights and obligations regarding refunds and clarifications.",
  alternates: { canonical: "/refund-policy" },
  openGraph: {
    title: "Refund Policy | Isuremedia",
    description: "Isuremedia's refund policy. Read this policy carefully to understand your rights and obligations regarding refunds and clarifications.",
    type: "website",
    url: "/refund-policy",
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Isuremedia",
    description: "Isuremedia's refund policy. Read this policy carefully to understand your rights and obligations regarding refunds and clarifications.",
    images: ["/isuremedia-dark.webp"],
  },
};

export default function RefundPolicyLayout({ children }) {
  return children;
}
