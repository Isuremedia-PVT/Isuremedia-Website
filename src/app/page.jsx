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
      "@type": "Organization",
      "name": "Isuremedia",
      "url": "https://isuremedia.com",
      "logo": "https://isuremedia.com/wp-content/uploads/logo.png",
      "email": "seoteam@isuremedia.com",
      "foundingDate": "2018",
      "description": "Full-service digital marketing agency offering SEO, PPC, web design, and marketing automation.",
      "areaServed": ["US", "UK", "IN", "NZ", "AE", "CA"],
      "sameAs": [
        "https://www.linkedin.com/company/isuremedia",
        "https://www.facebook.com/isuremedia"
      ]
    },
    {
      "@type": "WebSite",
      "url": "https://isuremedia.com",
      "name": "Isuremedia",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://isuremedia.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What services does Isuremedia offer?",
          "acceptedAnswer": { "@type": "Answer", "text": "Isuremedia offers SEO, PPC advertising, website design, sales funnels, content marketing, social media, and marketing automation. All under one roof." } },
        { "@type": "Question", "name": "How long has Isuremedia been in business?",
          "acceptedAnswer": { "@type": "Answer", "text": "We have been delivering digital marketing results since 2018, with over 8 years of agency experience across 150+ clients in the US, UK, India, New Zealand, UAE, and Canada." } },
        { "@type": "Question", "name": "Which countries do you serve?",
          "acceptedAnswer": { "@type": "Answer", "text": "We have active clients in the US, UK, India, New Zealand, UAE, and Canada." } }
      ]
    }
  ]
});

export const metadata = {
  title: "Digital Marketing Agency | SEO, PPC & Web | Isuremedia",
  description: "Isuremedia is a results-driven digital marketing agency. SEO, PPC, content, web design & marketing automation. 150+ clients. 8 years. Free audit.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Isuremedia – Full Service Digital Marketing Agency & White Label Partner",
    description: "SEO, PPC, web design, content, and marketing automation delivered by an in-house team. One agency, every digital service you need to grow.",
    type: "website",
    url: "/",
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
        <CTASection imageWidth={460} overflowTop={140} primaryLabel="Get a Free Proposal" secondaryLabel="Talk to an Expert" secondaryHref="/appointment" cardPadTop={28} cardPadX={48} />
      </main>
      <Footer />
    </>
  );
}
