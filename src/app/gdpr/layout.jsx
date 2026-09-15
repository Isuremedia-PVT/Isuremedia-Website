export const metadata = {
  title: "GDPR Privacy Notice | Isuremedia",
  description: "How Isuremedia collects, uses, and processes personal data of individuals residing in the European Economic Area (EEA) in compliance with GDPR.",
  alternates: { canonical: "/gdpr" },
  openGraph: {
    title: "GDPR Privacy Notice | Isuremedia",
    description: "How Isuremedia collects, uses, and processes personal data of individuals residing in the European Economic Area (EEA) in compliance with GDPR.",
    type: "website",
    url: "/gdpr",
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR Privacy Notice | Isuremedia",
    description: "How Isuremedia collects, uses, and processes personal data of individuals residing in the European Economic Area (EEA) in compliance with GDPR.",
    images: ["/isuremedia-dark.webp"],
  },
};

export default function GdprLayout({ children }) {
  return children;
}
