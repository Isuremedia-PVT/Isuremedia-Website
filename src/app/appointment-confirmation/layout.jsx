export const metadata = {
  title: "Appointment Confirmed | Isuremedia",
  description: "Your strategy call with Isuremedia is confirmed. Check your email for the calendar invite and call details.",
  alternates: { canonical: "/appointment-confirmation" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Appointment Confirmed | Isuremedia",
    description: "Your strategy call with Isuremedia is confirmed. Check your email for the calendar invite and call details.",
    type: "website",
    url: "/appointment-confirmation",
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appointment Confirmed | Isuremedia",
    description: "Your strategy call with Isuremedia is confirmed. Check your email for the calendar invite and call details.",
    images: ["/isuremedia-dark.webp"],
  },
};

export default function AppointmentConfirmationLayout({ children }) {
  return children;
}
