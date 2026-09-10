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
  // Without this, Next.js can't resolve relative OG/Twitter image URLs to an
  // absolute address — on Vercel it silently falls back to the deployment's
  // own *.vercel.app URL (or localhost in dev), so link previews show
  // Vercel's own placeholder/branding instead of ours.
  metadataBase: new URL("https://isuremedia.com"),
  title: "Isuremedia – Full Service Digital Marketing Agency & White Label Partner",
  description: "End-to-end digital marketing agency. SEO, Web, PPC, Automation. One team. One strategy. Zero gaps.",
  keywords: "digital marketing agency, white label marketing, SEO agency, PPC management, social media marketing, content marketing",
  openGraph: {
    title: "Isuremedia – Full Service Digital Marketing Agency & White Label Partner",
    description: "End-to-end digital marketing agency. SEO, Web, PPC, Automation. One team. One strategy. Zero gaps.",
    type: "website",
    // Site-wide fallback preview image — any page that doesn't set its own
    // openGraph.images inherits this, so link previews always show the
    // Isuremedia logo instead of no image at all.
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isuremedia – Full Service Digital Marketing Agency & White Label Partner",
    description: "End-to-end digital marketing agency. SEO, Web, PPC, Automation. One team. One strategy. Zero gaps.",
    images: ["/isuremedia-dark.webp"],
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
      {/* Google tag (gtag.js) — Google Ads conversion tracking, account AW-11188806111 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11188806111"
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11188806111');
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MMKXQ5T');
        `}
      </Script>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MMKXQ5T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

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
