export const metadata = {
  title: "Client Testimonials | Isuremedia",
  description: "Don't take our word for it. Hear directly from the businesses Isuremedia has helped grow, from local trades to global SaaS companies.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Client Testimonials | Isuremedia",
    description: "Don't take our word for it. Hear directly from the businesses Isuremedia has helped grow, from local trades to global SaaS companies.",
    type: "website",
    url: "/testimonials",
    images: [{ url: "/feature_image/testimonial.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | Isuremedia",
    description: "Don't take our word for it. Hear directly from the businesses Isuremedia has helped grow, from local trades to global SaaS companies.",
    images: ["/feature_image/testimonial.webp"],
  },
};

export default function TestimonialsLayout({ children }) {
  return children;
}
