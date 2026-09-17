'use client';
import Link from 'next/link';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import ClientResults from '@/components/ClientResults';
import HowItWorks from '@/components/HowItWorks';
import VideoTestimonials from '@/components/VideoTestimonials';
import ClientsMarquee from '@/components/ClientsMarquee';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';
const HL = { background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 };

const ROADMAP_STEPS = [
  { num: 1, title: 'Discovery Call',       text: <>We map out your goals, audit your current ecosystem and identify bottlenecks. <span style={HL}>No generic templates or pre-packaged pitch decks.</span></> },
  { num: 2, title: 'Your Growth Roadmap',  text: <>We deliver a transparent, data-backed execution plan outlining precise deliverables, scope and expected outcomes <span style={HL}>before work begins</span>.</> },
  { num: 3, title: 'Onboarding & Alignment', text: <>We configure tracking, integrate reporting dashboards and brief specialized team leads so <span style={HL}>everyone aligns with your targets</span>.</> },
  { num: 4, title: 'Precision Execution',  text: <>Campaigns are built, launched and continuously optimized. You receive <span style={HL}>regular, transparent reporting</span> without having to ask.</> },
  { num: 5, title: 'The Revenue Payoff',   text: <>We double down on high-performing campaigns and eliminate underperforming channels. <span style={HL}>Most clients see measurable momentum within 90 days.</span></> },
];

const FAQS = [
  {
    q: 'How much does a digital marketing agency cost per month?',
    a: 'Digital marketing services typically cost between $2,500 and $10,000+ per month, depending on project scope, target channels and campaign scale. We structure flexible, transparent pricing models customized around your target return on investment rather than forcing rigid, one-size-fits-all retainers.',
  },
  {
    q: 'How long does it take for a digital marketing agency to get results?',
    a: 'Paid campaigns through PPC advertising services generate targeted traffic and leads within 3 to 7 days of launch. For organic growth, sustainable top-page rankings on Google typically take 3 to 6 months to mature.',
  },
  {
    q: 'What is the difference between an SEO services agency and PPC advertising services?',
    a: 'An SEO services agency optimizes site tech, content and backlinks to earn free, long-term organic search traffic. PPC advertising services use paid ad campaigns on search and social channels to buy immediate top placement on a cost-per-click basis.',
  },
  {
    q: 'Can I hire a digital marketing agency in the US if my business is located in another country?',
    a: 'Yes. Modern digital agencies manage international client bases seamlessly using cloud reporting dashboards, real-time messaging and video strategy sessions aligned with your standard business hours.',
  },
  {
    q: 'Do you offer white-label digital marketing services for other agencies?',
    a: 'Yes. We act as a silent execution partner for growing agencies. We deliver unbranded SEO, custom funnel development, PPC management and social media fulfillment protected by strict non-disclosure agreements (NDAs) so you retain complete client ownership.',
  },
  {
    q: 'Do I have to sign a long-term contract with a digital marketing agency?',
    a: "No. While many agencies force 12-month lock-ins, we offer flexible month-to-month service agreements. We believe performance and clear campaign metrics should earn your partnership every single month.",
  },
];

const FAQ_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

function InlineCTA({ heading, highlight, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref }) {
  return (
    <section style={{ padding: '72px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
        <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3.2vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, marginBottom: 18 }}>
          {heading} <span style={{ color: 'var(--color-primary)' }}>{highlight}</span>
        </h2>
        <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 32 }}>
          {description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Link href={primaryHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-primary)'; }}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -80, right: -60, width: 460, height: 460, background: 'rgba(30,77,195,0.18)', borderRadius: '58% 42% 50% 50% / 46% 58% 42% 54%', filter: 'blur(50px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -50, width: 360, height: 360, background: 'rgba(255,176,0,0.13)', borderRadius: '46% 54% 62% 38% / 54% 46% 54% 46%', filter: 'blur(44px)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 40px', position: 'relative', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Digital Marketing Agency</span>
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(30px,4vw,52px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.14, marginBottom: 22 }}>
              Digital Marketing Agency &amp; White-Label Partner Built for Measurable Growth
            </h1>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 36, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
              Stop settling for vanity metrics. As a premier digital marketing agency, we deliver predictable, data-backed growth for scaling brands and offer silent white-label fulfillment for agencies looking to expand their capacity. Get end-to-end digital marketing services engineered for ROI, all in one place.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/white-label-digital-marketing" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Scale My Agency <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-primary)'; }}>
                Scale My Business
              </Link>
            </div>
          </div>
        </section>

        {/* ── PROOF / RESULTS ── */}
        <ClientResults heading="This Is What A High-Performance Digital Marketing Agency Achieves" />

        {/* ── MID-PAGE CTA ── */}
        <InlineCTA
          heading="You Don't Need More Marketing."
          highlight="You Need Market-Dominating Results."
          description="Let&rsquo;s identify what&rsquo;s holding your revenue back and build an execution plan that scales."
          primaryLabel="Get a Free Quote"
          primaryHref="/contact"
          secondaryLabel="Talk to an Expert"
          secondaryHref="/appointment"
        />

        {/* ── EXPAND YOUR GROWTH ── */}
        <section style={{ padding: '80px 0', background: '#fff' }}>
          <div className="ism-container" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3.2vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.18, marginBottom: 22 }}>
              Expand Your Growth with a Results-Driven Digital Marketing Agency
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 20 }}>
              Since 2017, Isuremedia has operated as an outcome-focused growth engine for startups, enterprise brands and fellow digital marketing agencies across the US, UK, Canada and beyond. Every strategy we execute is backed by dedicated campaign leads, clear KPIs and complete accountability.
            </p>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
              We offer transparent, month-to-month contracts because we believe performance should earn your partnership, not restrictive lock-in agreements.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Get a Free Proposal
              </Link>
              <Link href="/appointment" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-primary)'; }}>
                Start Growing Today
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6 PILLARS / SERVICES TABS ── */}
        <Services
          title={<>6 Pillars of Digital Marketing Services We Offer<br />That Will Scale Your <span style={{ color: 'var(--ism-amber)' }}>Business</span></>}
          subtitle="Capture high-intent search traffic, turn ad spend into profit, build high-converting websites and automate lead operations."
        />

        {/* ── INDUSTRY CUSTOMIZATION ── */}
        <section style={{ padding: '80px 0', background: '#fff' }}>
          <div className="ism-container" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3.2vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.2, marginBottom: 20 }}>
              Custom Digital Marketing Services Built for Your Industry
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 28 }}>
              Partner with a specialized digital marketing agency that understands the unique regulatory demands, customer buying cycles and competitive search landscapes of your specific sector. We engineer custom digital marketing services, from niche-focused SEO organic growth and targeted PPC advertising services to automated lead pipelines, helping both growing brands and agency partners capture high-intent buyers, outperform direct competitors and scale revenue smarter.
            </p>
            <Link href="/industries" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase' }}>
              Explore Industries We Serve <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
            </Link>
          </div>
        </section>

        {/* ── ROADMAP ── */}
        <HowItWorks
          title="Our Digital Marketing Services Roadmap to Deliver"
          highlightWord="High Revenue"
          subtitle="Start now and build a business that performs every single month."
          steps={ROADMAP_STEPS}
          ctaText="Get a Free Proposal"
          ctaHref="/contact"
        />

        {/* ── TESTIMONIALS ── */}
        <VideoTestimonials />

        {/* ── TRUST BAR ── */}
        <ClientsMarquee />

        {/* ── FAQ ── */}
        <section style={{ padding: '64px 0', background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 50%, #eff6ff 100%)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 700, color: 'var(--color-text-heading)', lineHeight: 1.20, marginBottom: 14 }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {FAQS.map((faq, i) => {
                const isOpen = openIdx === i;
                return (
                  <div key={i} style={{ background: '#fff', border: `1px solid ${isOpen ? 'var(--ism-blue-100)' : 'var(--color-border)'}`, borderRadius: 14, overflow: 'hidden', boxShadow: isOpen ? 'var(--sh-sm)' : '' }}>
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, cursor: 'pointer', background: 'transparent', border: 'none', textAlign: 'left' }}
                    >
                      <span style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: isOpen ? 'var(--color-primary)' : 'var(--color-text-heading)', lineHeight: 1.45, flex: 1 }}>{i + 1}. {faq.q}</span>
                      <span style={{ width: 28, height: 28, borderRadius: '50%', background: isOpen ? 'var(--color-primary)' : 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 16, color: isOpen ? '#fff' : 'var(--color-primary)', fontWeight: 700, transition: 'all .2s', transform: isOpen ? 'rotate(45deg)' : '' }}>+</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 24px 22px' }}>
                        <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <CTASection
          image="/result_footer/ready_for_result.webp"
          imageWidth={280}
          heading="Ready to Partner with a"
          headingHighlight="Results-Driven Agency?"
          description="Whether you run a growing business or an agency looking for reliable fulfillment, generic marketing won&rsquo;t get you to the top. Partner with an advanced digital marketing agency in the US and beyond that builds custom growth engines focused on your bottom line."
          primaryLabel="Get a Free Proposal"
          secondaryLabel="Talk to an Expert"
          secondaryHref="/appointment"
        />

      </main>
      <Footer />
    </>
  );
}
