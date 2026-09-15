export const metadata = {
  title: "Book a Free Strategy Call | Isuremedia",
  description: "Pick a time that works for you. We show up prepared, with real ideas for your business, not a generic pitch. Book your free strategy call with Isuremedia.",
  alternates: { canonical: "/appointment" },
  openGraph: {
    title: "Book a Free Strategy Call | Isuremedia",
    description: "Pick a time that works for you. We show up prepared, with real ideas for your business, not a generic pitch. Book your free strategy call with Isuremedia.",
    type: "website",
    url: "/appointment",
    images: [{ url: "/feature_image/appointment.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Strategy Call | Isuremedia",
    description: "Pick a time that works for you. We show up prepared, with real ideas for your business, not a generic pitch. Book your free strategy call with Isuremedia.",
    images: ["/feature_image/appointment.webp"],
  },
};

export default function AppointmentLayout({ children }) {
  return children;
}
