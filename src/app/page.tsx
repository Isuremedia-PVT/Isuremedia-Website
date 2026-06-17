import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientsMarquee from '@/components/ClientsMarquee';
import ProblemStatement from '@/components/ProblemStatement';
import Stats from '@/components/Stats';
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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientsMarquee />
        <ProblemStatement />
        <Stats />
        <ClientResults />
        <TrustVideo />
        <Services />
        <Industries />
        <HowItWorks />
        <ToolsStrip />
        <VideoTestimonials />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
