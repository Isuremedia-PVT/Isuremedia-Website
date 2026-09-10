import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ReviewsStrip from '@/components/ReviewsStrip';
import ClientsMarquee from '@/components/ClientsMarquee';
import HomeVideoSection from '@/components/HomeVideoSection';
import ProblemStatement from '@/components/ProblemStatement';
import ClientResults from '@/components/ClientResults';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import HowItWorks from '@/components/HowItWorks';
import ToolsStrip from '@/components/ToolsStrip';
import TrustVideo from '@/components/TrustVideo';
import VideoTestimonials from '@/components/VideoTestimonials';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const HOME_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MarketingAgency",
      "@id": "https://isuremedia.com/#organization",
      "name": "Isuremedia Private Limited",
      "alternateName": "Isuremedia",
      "url": "https://isuremedia.com/",
      "logo": "https://isuremedia.com/isuremedia-dark.webp",
      "image": "https://isuremedia.com/isuremedia-dark.webp",
      "description": "Isuremedia is a results-driven digital marketing agency offering SEO, PPC, content, web design and marketing automation, along with white-label fulfilment for agencies. We serve clients online across the USA, UK, Australia, Canada and India.",
      "foundingDate": "2017",
      "priceRange": "$$",

      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Gas Godam Road, Chharayal Nayabad, First Floor, Chandra Complex",
        "addressLocality": "Haldwani",
        "addressRegion": "Uttarakhand",
        "postalCode": "263139",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 29.1985821,
        "longitude": 79.4861243
      },
      "hasMap": "https://www.google.com/maps/place/Isuremedia+Private+Limited/@29.1985821,79.4835494,17z",

      "location": {
        "@type": "Place",
        "name": "Isuremedia India Office",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gas Godam Road, Chharayal Nayabad, First Floor, Chandra Complex",
          "addressLocality": "Haldwani",
          "addressRegion": "Uttarakhand",
          "postalCode": "263139",
          "addressCountry": "IN"
        },
        "telephone": "+91-73-0000-7650"
      },

      "additionalProperty": {
        "@type": "PropertyValue",
        "name": "US Registered Address",
        "value": "30 N. Gould St., Suite B, Sheridan, WY 82801, United States"
      },

      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-73-0000-7650",
          "contactType": "customer service",
          "areaServed": "IN"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-646-588-1430",
          "contactType": "customer service",
          "areaServed": ["US", "UK", "AU", "CA"]
        }
      ],

      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "New Zealand" },
        { "@type": "Country", "name": "United Arab Emirates" }
      ],

      "serviceType": "Digital Marketing Agency Services (SEO, PPC, Web Design, Content, Marketing Automation, White-Label Fulfilment)",

      "sameAs": [
        "https://www.linkedin.com/company/isuremedia/",
        "https://www.facebook.com/Isuremedia2017/",
        "https://www.instagram.com/isuremedia/",
        "https://x.com/isuremedia_",
        "https://www.youtube.com/channel/UC5DR1JBq-Sf2QOlzvQsLeKw",
        "https://www.google.com/maps/place/Isuremedia+Private+Limited/@29.1985821,79.4835494,17z/data=!3m2!4b1!5s0x39a09b4f3fbe1675:0xb03c9b4c838bcb6c!4m6!3m5!1s0x39a09b59125c64b7:0xa50d6b8635f8ce83!8m2!3d29.1985821!4d79.4861243!16s%2Fg%2F11c6pqx1_6"
      ]
    },
    {
      "@type": "WebSite",
      "url": "https://isuremedia.com",
      "name": "Isuremedia"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What services does Isuremedia offer?",
          "acceptedAnswer": { "@type": "Answer", "text": "Isuremedia offers SEO, PPC advertising, website design, sales funnels, content marketing, social media, and marketing automation. All under one roof." } },
        { "@type": "Question", "name": "How long has Isuremedia been in business?",
          "acceptedAnswer": { "@type": "Answer", "text": "We have been delivering digital marketing results since 2017, with over 9 years of agency experience across 150+ clients in the US, UK, Australia, India, New Zealand, UAE, and Canada." } },
        { "@type": "Question", "name": "Which countries do you serve?",
          "acceptedAnswer": { "@type": "Answer", "text": "We have active clients in the US, UK, Australia, India, New Zealand, UAE, and Canada." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Digital Marketing Agency | SEO, PPC & Web | Isuremedia",
  description: "Isuremedia is a results-driven digital marketing agency. SEO, PPC, content, web design & marketing automation. 150+ clients. 9 years. Free audit.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Isuremedia – Full Service Digital Marketing Agency & White Label Partner",
    description: "SEO, PPC, web design, content, and marketing automation delivered by an in-house team. One agency, every digital service you need to grow.",
    type: "website",
    url: "/",
    images: [{ url: "/isuremedia-dark.webp", width: 1200, height: 346 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isuremedia – Full Service Digital Marketing Agency & White Label Partner",
    description: "SEO, PPC, web design, content, and marketing automation delivered by an in-house team. One agency, every digital service you need to grow.",
    images: ["/isuremedia-dark.webp"],
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: HOME_SCHEMA }} />
      <Navbar />
      <main>
        <Hero />
        <ReviewsStrip />
        <HomeVideoSection />
        <ClientsMarquee />
        <ClientResults heading="This Is What Good Marketing Does" />
        <ProblemStatement />
        <TrustVideo />
        <Services />
        <Industries />
        <HowItWorks ctaHref="/appointment" />
        <ToolsStrip />
        <VideoTestimonials />
        <Testimonials
          heading="Trusted by Businesses and Agencies Worldwide."
          subheading="From local businesses to white-label agency partners, here is what our clients say about working with us."
          showTrustBar={false}
        />
        <FAQ />
        <CTASection imageWidth={340} overflowTop={70} primaryLabel="Get a Free Proposal" secondaryLabel="Talk to an Expert" secondaryHref="/appointment" cardPadTop={28} cardPadX={48} />
      </main>
      <Footer />
    </>
  );
}
