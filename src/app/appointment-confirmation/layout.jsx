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
    images: [{ url: "/feature_image/Call  Confirmed_.webp", width: 1618, height: 950 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appointment Confirmed | Isuremedia",
    description: "Your strategy call with Isuremedia is confirmed. Check your email for the calendar invite and call details.",
    images: ["/feature_image/Call  Confirmed_.webp"],
  },
};

export default function AppointmentConfirmationLayout({ children }) {
  return children;
}
