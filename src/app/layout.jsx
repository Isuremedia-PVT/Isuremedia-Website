import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
      </body>
    </html>
  );
}
