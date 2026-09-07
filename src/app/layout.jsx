import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieConsent from "@/components/CookieConsent";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Isuremedia – Full Service Digital Marketing Agency & White Label Partner",
  description: "End-to-end digital marketing agency. SEO, Web, PPC, Automation. One team. One strategy. Zero gaps.",
  keywords: "digital marketing agency, white label marketing, SEO agency, PPC management, social media marketing, content marketing",
  openGraph: {
    title: "Isuremedia – Full Service Digital Marketing Agency & White Label Partner",
    description: "End-to-end digital marketing agency. SEO, Web, PPC, Automation. One team. One strategy. Zero gaps.",
    type: "website",
  },
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>
        {children}
        <WhatsAppFloat />
        <CookieConsent />

        {/* GoHighLevel chat widget, stays on the bottom-right */}
        <chat-widget
          location-id="jnLK3WXibjhfqnyON1Ru"
          use-email-field="true"
          prompt-avatar="https://firebasestorage.googleapis.com/v0/b/highlevel-backend.appspot.com/o/locationPhotos%2FjnLK3WXibjhfqnyON1Ru%2Fchat-widget-person?alt=media&token=b2293854-7524-4a84-85c9-bbdc64d10a99"
          locale="en-us"
        ></chat-widget>
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
