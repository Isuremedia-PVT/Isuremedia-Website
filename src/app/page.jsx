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

export const metadata = {
  title: "Isuremedia – Full Service Digital Marketing Agency & White Label Partner",
  description: "Isuremedia is a full-service digital marketing agency and white-label fulfillment partner. SEO, PPC, web design, content, and marketing automation delivered by an in-house team, for businesses that want measurable growth and agencies that want to scale without hiring.",
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
        <HowItWorks />
        <ToolsStrip />
        <VideoTestimonials />
        <Testimonials
          heading="Trusted by Businesses and Agencies Worldwide."
          subheading="From local businesses to white-label agency partners, here is what our clients say about working with us."
          showTrustBar={false}
        />
        <FAQ />
        <CTASection imageWidth={460} overflowTop={140} primaryLabel="Get a Free Proposal" secondaryLabel="Talk to an Expert" cardPadTop={28} cardPadX={48} />
      </main>
      <Footer />
    </>
  );
}
