export const metadata = {
  title: "n8n Automation Services: Self-Hosted or Cloud Workflows | Isuremedia",
  description: "Self-hosted or cloud n8n workflows built with full customisation, no vendor lock-in, and unlimited automation runs.",
  alternates: { canonical: "/services/automation/n8n" },
  openGraph: {
    title: "n8n Automation Services: Self-Hosted or Cloud Workflows | Isuremedia",
    description: "Self-hosted or cloud n8n workflows built with full customisation, no vendor lock-in, and unlimited automation runs.",
    type: "website",
    url: "/services/automation/n8n",
    images: [{ url: "/feature_image/n8n.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Automation Services: Self-Hosted or Cloud Workflows | Isuremedia",
    description: "Self-hosted or cloud n8n workflows built with full customisation, no vendor lock-in, and unlimited automation runs.",
    images: ["/feature_image/n8n.webp"],
  },
};

export default function N8nLayout({ children }) {
  return children;
}
