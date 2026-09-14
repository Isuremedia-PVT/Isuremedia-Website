export const metadata = {
  title: "Terms and Conditions | Isuremedia",
  description: "Please read these terms and conditions carefully before using the Isuremedia website and services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms and Conditions | Isuremedia",
    description: "Please read these terms and conditions carefully before using the Isuremedia website and services.",
    type: "website",
    url: "/terms",
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Isuremedia",
    description: "Please read these terms and conditions carefully before using the Isuremedia website and services.",
    images: ["/isuremedia-dark.webp"],
  },
};

export default function TermsLayout({ children }) {
  return children;
}
