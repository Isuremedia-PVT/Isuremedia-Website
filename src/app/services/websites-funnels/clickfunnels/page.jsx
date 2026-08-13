'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'Full funnel strategy and structure planning before any build',
  'Opt-in pages, sales pages, order forms, and thank you pages',
  'Upsell, downsell, and order bump sequences',
  'ClickFunnels 2.0 website and blog builds',
  'Email automation sequences connected to funnel actions',
  'Custom design beyond standard ClickFunnels templates',
  'Third-party integration, Stripe, Zapier, CRM connections',
  'Post-launch testing and conversion optimisation',
];

const GAINS = [
  { icon: 'fa-solid fa-rocket', title: 'Templates Built to Convert', desc: 'ClickFunnels templates out-convert generic landing page builder templates by 15 to 25% on average, because the structure is built around conversion logic from the ground up.' },
  { icon: 'fa-solid fa-cart-shopping', title: 'One-Click Upsells and Order Bumps', desc: 'ClickFunnels’ upsell system is one of its most powerful features and one of the most commonly underused. Built properly, it increases average order value from every transaction.' },
  { icon: 'fa-solid fa-flask', title: 'Built-In A/B Split Testing', desc: 'Every funnel can be tested and improved continuously. We use the platform’s native split testing to find what converts best and keep improving after launch.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Purpose-Built for Coaches and Course Creators', desc: 'Course creators, consultants, and businesses running application funnels for high-ticket offers get a platform designed specifically around their sales process.' },
  { icon: 'fa-solid fa-people-group', title: 'Unmatched Community and Template Library', desc: 'The platform’s community, training resources, and funnel template library are unmatched in the funnel builder market, a foundation we build on, not around.' },
  { icon: 'fa-solid fa-money-bill-trend-up', title: 'Built for Direct-Response Marketers', desc: 'ClickFunnels was designed by direct-response marketers who understand conversion, not by designers who understand aesthetics. That bias toward conversion is in every template.' },
];

const CARD_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const KEY_FACTORS = [
  { icon: 'fa-solid fa-pen-nib', title: 'Audience-Matched Copy', impact: 'Highest impact', desc: 'The most common reason ClickFunnels funnels underperform is weak copy, not weak design or platform capability. Copy matched to the audience and the offer determines whether visitors say yes.' },
  { icon: 'fa-solid fa-route', title: 'Conversion-Logic Structure', impact: 'High impact', desc: 'A funnel built without a strategy is a set of pages. Every stage, offer, and automation trigger needs to be mapped before design begins.' },
  { icon: 'fa-solid fa-cart-shopping', title: 'Complete Upsell Sequences', impact: 'High impact', desc: 'ClickFunnels’ upsell system is one of its most powerful features and one of the most underused. A complete offer stack increases average order value from every transaction.' },
  { icon: 'fa-solid fa-gears', title: 'Fully Configured Automation', impact: 'High impact', desc: 'Incomplete automation sequences are one of the most common reasons a live funnel fails to follow up properly with leads who do not convert immediately.' },
  { icon: 'fa-solid fa-palette', title: 'Custom Design Beyond Templates', impact: 'Medium impact', desc: 'Standard ClickFunnels templates provide structure. Custom visual design that matches your brand builds the trust generic templates cannot.' },
  { icon: 'fa-solid fa-plug', title: 'Third-Party Integrations', impact: 'Medium impact', desc: 'Stripe, Zapier, CRM connections, a funnel that is not properly connected to the rest of your business loses leads between systems.' },
  { icon: 'fa-solid fa-flask', title: 'A/B Split Testing', impact: 'Growing fast', desc: 'ClickFunnels has A/B testing built into every funnel. Used properly, it is what separates a funnel that launches well from one that keeps improving.' },
  { icon: 'fa-solid fa-screwdriver-wrench', title: 'Post-Launch Optimisation', impact: 'Contextual', desc: 'The funnel that launches is version one. Ongoing testing and refinement is what determines performance at month three, not just at launch.' },
];

const FUNNEL_TYPES = [
  { icon: 'fa-solid fa-user-plus', title: 'Lead Generation Funnels', desc: 'A high-converting opt-in page that captures contact details in exchange for a lead magnet or offer, followed by a thank you page, immediate delivery, and an email follow-up sequence. The foundation of most service business funnels.', img: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=500&q=80' },
  { icon: 'fa-solid fa-file-lines', title: 'Sales Page Funnels', desc: 'A full sales page presenting your core offer, headline, offer stack, social proof, objection handling, clear CTA, followed by an order form, confirmation page, and post-purchase sequence.', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80' },
  { icon: 'fa-solid fa-video', title: 'Webinar Funnels', desc: 'A registration page, confirmation page, reminder sequence, webinar delivery page, and post-webinar sales sequence, built as both live and evergreen automated funnels.', img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&q=80' },
  { icon: 'fa-solid fa-clipboard-check', title: 'Application Funnels', desc: 'For high-ticket services, an application form pre-qualifies prospects before booking only qualified leads onto your calendar, reducing no-shows and increasing close rates.', img: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&q=80' },
  { icon: 'fa-solid fa-cart-shopping', title: 'Upsell and Order Bump Sequences', desc: 'One-click upsells, downsells, and order bumps connected to every purchase flow, complete offer stacks that increase average order value from every transaction.', img: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=500&q=80' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Membership Site Funnels', desc: 'ClickFunnels membership areas connected to purchase, delivering course content, resources, or programme materials with access triggered automatically on purchase.', img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&q=80' },
];

const SERVICES = [
  { icon: 'fa-solid fa-route', title: 'Funnel Strategy and Architecture', desc: 'Before any page is built, we map the complete funnel, every stage, every offer, every upsell and downsell, and every automation trigger. Strategy defines the build.' },
  { icon: 'fa-solid fa-palette', title: 'Custom Funnel Design', desc: 'We design funnels that go beyond the standard ClickFunnels template look, custom visual design, brand-consistent layouts, and conversion-optimised page structure.' },
  { icon: 'fa-solid fa-layer-group', title: 'Full Funnel Build', desc: 'We build every page in the funnel inside ClickFunnels, opt-in, sales, order form, upsell, downsell, thank you, and confirmation pages, all connected and tested before launch.' },
  { icon: 'fa-solid fa-pen-nib', title: 'Copywriting', desc: 'We write all copy across the funnel, headline, sales page copy, offer description, objection handling, CTA text, and email sequences.' },
  { icon: 'fa-solid fa-envelope-open-text', title: 'Email Automation Sequences', desc: 'We build the follow-up sequences connected to every funnel action, opt-in welcome, pre-purchase nurture, post-purchase onboarding, and re-engagement.' },
  { icon: 'fa-solid fa-cart-shopping', title: 'Upsell and Order Bump Configuration', desc: 'We design the upsell offer pages, write the upsell copy, set the pricing, and connect the payment flow so the upsell sequence captures revenue without friction.' },
  { icon: 'fa-solid fa-plug', title: 'Third-Party Integrations', desc: 'We connect your funnel to Stripe, PayPal, Zapier, your CRM, and your email platform, so leads and customers flow into the right systems automatically.' },
  { icon: 'fa-solid fa-flask', title: 'Funnel Audit, Optimisation and A/B Testing', desc: 'We audit underperforming funnels and set up systematic A/B testing on headlines, offer framing, CTA text, and structure so performance keeps improving after launch.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-arrow-trend-down', title: 'Subscribers Whose Funnels Aren’t Converting', desc: 'If your funnel is live but conversion is lower than expected, the problem is almost always copy, structure, or the upsell sequence, not the platform. We audit and rebuild what isn’t working.', img: '/services-six-card/Web Development Section/Click Funnels/Subscribers Whose Funnels Aren’t Converting.webp' },
  { icon: 'fa-solid fa-rocket', title: 'Businesses Building Their First Funnel', desc: 'Getting the strategy and structure right from the start is significantly more efficient than launching quickly and rebuilding after poor results.', img: '/services-six-card/Web Development Section/Click Funnels/Businesses Building Their First Funnel.webp' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Course Creators and Coaches Launching Programmes', desc: 'A programme launch is a defined window with a defined audience. A properly built launch funnel makes the most of it.', img: '/services-six-card/Web Development Section/Click Funnels/Course Creators and Coaches Launching Programmes.webp' },
  { icon: 'fa-solid fa-cart-shopping', title: 'E-Commerce Businesses Adding Funnel Offers', desc: 'Adding a product-specific funnel with upsell and order bump sequences increases average order value without additional traffic spend.', img: '/services-six-card/Web Development Section/Click Funnels/E-Commerce Businesses Adding Funnel Offers.webp' },
  { icon: 'fa-solid fa-people-group', title: 'Agencies That Need Funnels Built for Clients', desc: 'We provide ClickFunnels design and build for agencies as part of our white-label services. Same quality, your brand, scalable across client accounts.', img: '/services-six-card/Web Development Section/Click Funnels/Agencies That Need Funnels Built for Clients.webp' },
  { icon: 'fa-solid fa-right-left', title: 'Businesses Migrating Existing Funnels', desc: 'If you are moving from another funnel platform to ClickFunnels, we manage the migration and improve conversion architecture in the process.', img: '/services-six-card/Web Development Section/Click Funnels/Businesses Migrating Existing Funnels.webp' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-diagram-project', title: 'We Know ClickFunnels Inside Out', desc: 'We build inside ClickFunnels regularly, funnels, membership sites, order forms, upsell sequences, and ClickFunnels 2.0 websites. We know what the platform can do and where its limits are.' },
  { icon: 'fa-solid fa-route', title: 'We Lead With Strategy', desc: 'Every project starts with a strategy session, mapping the offer, the audience, the funnel stages, and automation sequences before a single page is designed.' },
  { icon: 'fa-solid fa-pen-nib', title: 'We Write the Copy', desc: 'The most common reason funnels underperform is weak copy, not weak design. We write all funnel copy matched to the offer, the audience, and the stage.' },
  { icon: 'fa-solid fa-plug', title: 'We Handle Integrations End to End', desc: 'Payment gateways, CRM connections, email platforms, Zapier automations, every integration is configured so your funnel connects to the tools your business runs on.' },
  { icon: 'fa-solid fa-flask', title: 'We Optimise After Launch', desc: 'ClickFunnels has built-in A/B testing. We use it. The funnel that launches is version one, we test, analyse, and improve it continuously.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to Month, No Lock-In', desc: 'Ongoing optimisation arrangements are month to month. You stay because the funnel is improving, not because you signed a retainer.' },
];

const PROCESS = [
  { n: '01', title: 'Strategy and Offer Mapping', desc: 'We define the offer, the audience, the funnel type, the stages, the upsell and downsell sequence, and the automation triggers before any design begins.' },
  { n: '02', title: 'Copy Development', desc: 'We write all funnel copy, opt-in page, sales page, upsell pages, email sequences, and order form copy. Copy is approved before design begins.' },
  { n: '03', title: 'Design, Build and Integration', desc: 'We design and build every funnel page inside ClickFunnels, connect payment gateways, configure automations, and set up every third-party integration.' },
  { n: '04', title: 'Pre-Launch Testing', desc: 'We test the complete funnel end to end, form submissions, payment flows, upsell triggers, email delivery, and automation sequences, before traffic is sent.' },
  { n: '05', title: 'Launch and Ongoing Optimisation', desc: 'The funnel goes live. We set up A/B testing on the highest-leverage elements and make data-driven improvements in the weeks after launch.' },
];

const FAQS = [
  { q: 'Do I need an existing ClickFunnels account to work with you?', a: 'Yes, we build inside your ClickFunnels account, not a separate platform. If you do not have an account yet, we can help you determine whether ClickFunnels is the right platform for your specific offer before you subscribe.' },
  { q: 'Can you improve my existing ClickFunnels funnel rather than building a new one?', a: 'Yes. We start with an audit of your existing funnel, every page, every conversion metric, every automation sequence, and identify the highest-impact improvements. In many cases, targeted changes produce significant conversion lifts without a full rebuild.' },
  { q: 'What is the difference between ClickFunnels and GoHighLevel?', a: 'ClickFunnels is purpose-built for funnel creation and direct-response marketing. GoHighLevel is a more complete all-in-one platform that includes CRM, SMS automation, and pipeline management alongside funnel building. For businesses that primarily need high-converting funnel sequences, ClickFunnels is the stronger option.' },
  { q: 'Do you write the copy for the funnel?', a: 'Yes. Copy is included in every ClickFunnels project we take on. The design and structure determine whether visitors reach the CTA. The copy determines whether they say yes. We write both.' },
  { q: 'Can you build a membership site inside ClickFunnels?', a: 'Yes. ClickFunnels includes a membership area feature that delivers course content, programme materials, or member resources with access granted automatically on purchase.' },
  { q: 'What integrations can you connect to ClickFunnels?', a: 'We connect Stripe, PayPal, Razorpay, Zapier, GoHighLevel, HubSpot, Mailchimp, ActiveCampaign, and other tools your business uses, either natively or through Zapier.' },
  { q: 'Can you build inside ClickFunnels 2.0 specifically?', a: 'Yes. ClickFunnels 2.0 is a significant rebuild of the original platform with a new editor, website functionality, and improved email tools. We build on it and know both versions well.' },
  { q: 'How long does it take to build a ClickFunnels funnel?', a: 'A standard lead generation or sales funnel takes one to two weeks from strategy to launch. Complex builds, webinar funnels, membership sites, multi-product offer stacks, typically take two to four weeks.' },
  { q: 'Do you provide white-label ClickFunnels services for agencies?', a: 'Yes. We build ClickFunnels funnels for agency clients under your brand, same quality, no Isuremedia references, scalable across your client accounts.' },
  { q: 'What happens after the funnel launches?', a: 'We set up A/B testing on the highest-leverage elements and monitor performance, conversion rate, upsell take rate, and email engagement. Ongoing optimisation arrangements are month to month.' },
];

function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="cf-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          <div className="cf-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>ClickFunnels</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: '0 0 32px' }}>
              Straight answers to the questions we hear most. No spin, no buzzwords.
            </p>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Get Started →
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, border: `1px solid ${open === i ? 'var(--color-primary)' : 'var(--color-border)'}`, overflow: 'hidden', transition: 'border-color .2s' }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                  <span style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)' }}>{faq.q}</span>
                  <i className="fa-solid fa-chevron-down" style={{ fontSize: 12, color: 'var(--ism-amber)', flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .22s' }} />
                </button>
                {open === i && (
                  <div style={{ padding: '0 24px 20px' }}>
                    <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.78, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .cf-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .cf-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function ClickFunnelsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="cf-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div className="ism-container">
            <div className="cf-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Better Funnels Built Inside ClickFunnels.{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Faster.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  We design, build, and optimise funnels and pages inside ClickFunnels, from opt-in pages and sales pages to{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>full multi-step funnel sequences</span>{' '}
                 , so your account is actually producing the results the platform was built to deliver.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Get a Free ClickFunnels Consultation
                  </a>
                </div>
              </div>
              <div className="cf-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://picsum.photos/seed/clickfunnelshero/640/720" alt="ClickFunnels funnel build" style={{ width: '100%', height: 440, objectFit: 'cover', borderRadius: 24, display: 'block' }} />
                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-diagram-project" style={{ color: '#fff', fontSize: 22 }} />
                </div>
                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-bolt" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>High-Converting Funnels</span>
                </div>
                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      (<img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />)
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>180+ Funnels Built</span>
                </div>
                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>Funnel Live &amp; Converting</span>
                </div>
              </div>
            </div>
          </div>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -1, width: '100%', height: 70, display: 'block' }} aria-hidden>
            <path d="M0,0 Q720,110 1440,0 L1440,100 L0,100 Z" fill="#F7F8FA" />
          </svg>
          <style>{`
            @media (max-width: 900px) { .cf-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; } .cf-hero-photo { margin: 0 12px 24px; } }
            @media (max-width: 480px) { .cf-hero { padding: 48px 0 64px !important; } }
          `}</style>
        </section>

        {/* ══ 02. PROOF STRIP ══════════════════════════════════════════════ */}
        <ReviewsStrip />

        {/* ══ 03. BRIDGE SECTION ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="bridge-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)', gap: 64, alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(24px,2.8vw,40px)', color: 'var(--color-navy)', lineHeight: 1.2, letterSpacing: '-0.4px', marginBottom: 24 }}>
                  ClickFunnels Is a Powerful Platform. Getting It Right Is a Different Skill.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  ClickFunnels gives you everything you need to build high-converting funnels, the page builder, the checkout system, the upsell sequences, the email follow-up, the analytics. But knowing what the platform can do and knowing how to build a funnel that actually converts are two different things.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  Most ClickFunnels users build funnels that{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>look right but underperform</span>{' '}
                 , because the copy is not matched to the audience, the structure does not follow conversion logic, or the automation sequences are incomplete. The platform is capable. The build is the problem.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Claim Your Free ClickFunnels Consultation
                </a>
              </div>
              <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', border: '1px solid var(--color-border)', boxShadow: '0 20px 50px rgba(0,35,83,.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 6px 16px rgba(255,176,0,.35)' }}>
                    <i className="fa-solid fa-list-check" style={{ color: 'var(--color-navy)', fontSize: 15 }} />
                  </div>
                  <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', margin: 0 }}>What we handle for you</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {BRIDGE_ITEMS.map((item, i) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '13px 0', borderBottom: i === BRIDGE_ITEMS.length - 1 ? 'none' : '1px solid var(--color-border)' }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', fontSize: 11 }} />
                      </div>
                      <span style={{ fontFamily: I, fontSize: 15, color: 'var(--color-navy)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:860px){ .bridge-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } }`}</style>
        </section>

        {/* ══ 04. WHAT IS CLICKFUNNELS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="cf-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="cf-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  Every Funnel Type. Every Page. Fully Optimised for Conversion.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    ClickFunnels is a funnel builder, not just a page builder. Every build we do inside the platform is designed as{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>a complete connected sequence</span>{' '}
                   , from the first page a visitor lands on through to purchase, upsell, and confirmation.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    ClickFunnels remains the number one sales funnel software in the world by user adoption. Its templates are designed by direct-response marketers who understand conversion, not just designers who understand aesthetics, and{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>out-convert generic landing page builder templates by 15 to 25% on average</span>.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Its one-click upsell system, order bump checkboxes, and built-in A/B split testing make it the most purpose-built funnel platform available for businesses selling offers online. Isuremedia builds inside that system properly, so your account performs the way it was designed to.
                  </p>
                </div>
              </div>
              <div className="cf-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />
                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 317deg, var(--ism-blue-100) 317deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>88</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>Funnel Score</span>
                  </div>
                </div>
                <div className="cf-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-user-plus" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Opt-In Rate</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>34%</div>
                  </div>
                </div>
                <div className="cf-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-cart-shopping" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Upsell Take Rate</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>41%</div>
                  </div>
                </div>
                <div className="cf-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-gauge-high" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Page Speed</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>92</div>
                  </div>
                </div>
                <div className="cf-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-arrow-trend-up" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Conversions</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>+2.3x</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .cf-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .cf-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .cf-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .cf-score-badge{ padding:8px 10px !important; gap:7px !important; } .cf-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. WHY CLICKFUNNELS WORKS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>The Platform Built for Direct Response. When It&apos;s Right, Nothing Else Competes.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                ClickFunnels&apos; template library, one-click upsell system, and built-in split testing were purpose-built for direct response marketing, not adapted from a general website builder. When the build matches the platform&apos;s strengths, results follow.
              </p>
            </div>
            <div className="gains-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 48 }}>
              {GAINS.map((w, i) => {
                const variant = CARD_VARIANTS[i % 3];
                return (
                  <div key={w.title} style={{ background: variant.cardBg, borderRadius: 16, padding: '30px 26px', border: variant.dark ? 'none' : '1px solid var(--color-border)' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: variant.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                      <i className={w.icon} style={{ color: variant.iconColor, fontSize: 19 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: variant.textColor, marginBottom: 8, lineHeight: 1.3 }}>{w.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13.5, color: variant.descColor, lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
                  </div>
                );
              })}
            </div>
            <div style={{ textAlign: 'center' }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                See What Your ClickFunnels Account Could Be Doing
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .gains-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .gains-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. KEY FACTORS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>What Actually Determines Whether a Funnel Converts.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Most ClickFunnels funnels underperform for the same handful of reasons. Every factor below is something Isuremedia actively builds into your funnel.
              </p>
            </div>
            <div className="factors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {KEY_FACTORS.map((f, i) => {
                const hl = i === 0;
                return (
                  <div key={f.title} className={hl ? 'factor-card factor-card-hl' : 'factor-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="factor-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`factor-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="factor-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                        <span className="factor-card-badge" style={{ fontFamily: J, fontSize: 10.5, fontWeight: 700, color: hl ? 'var(--ism-amber)' : 'var(--color-accent-hover)', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'color .25s ease' }}>{f.impact}</span>
                      </div>
                    </div>
                    <p className="factor-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .factor-card:not(.factor-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .factor-card:not(.factor-card-hl):hover .factor-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .factor-card:not(.factor-card-hl):hover .factor-card-icon{ color: #fff !important; }
            .factor-card:not(.factor-card-hl):hover .factor-card-title{ color: #fff !important; }
            .factor-card:not(.factor-card-hl):hover .factor-card-badge{ color: var(--ism-amber) !important; }
            .factor-card:not(.factor-card-hl):hover .factor-card-desc{ color: rgba(255,255,255,.85) !important; }
            .factor-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .factors-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 07. WHAT WE BUILD INSIDE CLICKFUNNELS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>What Isuremedia Builds Inside Your ClickFunnels Account.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Every funnel type. Every page. Fully connected and configured before launch.
              </p>
            </div>
            <div className="funnel-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {FUNNEL_TYPES.map(g => (
                <div key={g.title} className="funnel-card" style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <div style={{ position: 'relative', height: 170, overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.img} alt="" className="funnel-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '22px 24px 26px' }}>
                    <div className="funnel-card-icon" style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, transition: 'background .2s ease' }}>
                      <i className={g.icon} style={{ color: 'var(--color-primary)', fontSize: 14 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15.5, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 8, lineHeight: 1.3 }}>{g.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.68, margin: 0 }}>{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .funnel-card{ transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
            .funnel-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.12); border-color: transparent; }
            .funnel-card-img{ transition: transform .4s ease; }
            .funnel-card:hover .funnel-card-img{ transform: scale(1.08); }
            .funnel-card:hover .funnel-card-icon{ background: var(--ism-amber); }
            .funnel-card:hover .funnel-card-icon i{ color: var(--color-navy) !important; }
            @media (max-width:900px){ .funnel-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .funnel-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 08. ISM CLICKFUNNELS SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our ClickFunnels Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Strategy, Design, Build, and Optimisation, All Inside Your Account.</p>
            </div>
            <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
              {SERVICES.map((s, i) => {
                const variant = CARD_VARIANTS[i % 3];
                return (
                  <div key={s.title} className="services-card" style={{ background: variant.cardBg, borderRadius: 16, padding: '28px 22px', border: variant.dark ? 'none' : '1px solid var(--color-border)' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: variant.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={s.icon} style={{ color: variant.iconColor, fontSize: 17 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: variant.textColor, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: variant.descColor, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .services-card{ transition: transform .22s ease, box-shadow .22s ease; }
            .services-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.14); }
            @media (max-width:1100px){ .services-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .services-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 09. WHO THIS IS FOR ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Who Our ClickFunnels Services Are Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>For ClickFunnels Users Who Want Their Platform to Actually Perform.</p>
            </div>
            <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {WHO_FOR.map(w => (
                <div key={w.title} className="who-card" style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 300, boxShadow: '0 4px 20px rgba(0,35,83,.08)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt="" className="who-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,35,83,.10) 0%, rgba(0,23,56,.94) 76%)' }} />
                  <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '26px 24px' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, flexShrink: 0 }}>
                      <i className={w.icon} style={{ color: 'var(--color-navy)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{w.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.82)', lineHeight: 1.62, margin: 0 }}>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .who-card-img{ transition: transform .45s ease; }
            .who-card{ transition: transform .22s ease, box-shadow .22s ease; }
            .who-card:hover{ transform: translateY(-5px); box-shadow: 0 20px 44px rgba(0,35,83,.22); }
            .who-card:hover .who-card-img{ transform: scale(1.08); }
            @media (max-width:900px){ .who-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .who-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 10. MID-PAGE CTA STRIP ══════════════════════════════════════════════ */}
        <section style={{ padding: '56px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div className="mid-cta" style={{ background: 'var(--color-primary)', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
              <div aria-hidden style={{ position: 'absolute', top: '-30%', right: '-5%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', maxWidth: 560 }}>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Your ClickFunnels account should be converting visitors into customers. Is it?</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  A free consultation will show you exactly what your current funnel is missing and what it would take to fix it.
                </p>
              </div>
              <a href="/contact" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Get My Free ClickFunnels Consultation <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:640px) {
              .mid-cta { padding: 32px 24px !important; flex-direction: column !important; text-align: center; }
              .mid-cta-btn { width: 100%; justify-content: center !important; box-sizing: border-box; }
            }
          `}</style>
        </section>

        {/* ══ 11. WHY CHOOSE ISM ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Businesses Choose Isuremedia for ClickFunnels</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Platform Expertise. Conversion Logic. Funnels That Perform From Launch.</p>
            </div>
            <div className="why-ism-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
              {WHY_ISM.slice(0, 2).map(b => (
                <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 26px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 20 }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: J, fontSize: 15.5, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
              <div className="why-ism-bento-row" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                {(() => { const b = WHY_ISM[2]; return (
                  <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 22px', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-amber-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={b.icon} style={{ color: 'var(--color-accent-hover)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                ); })()}
                <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 200 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://picsum.photos/seed/cfwhatmakesdifferent/700/620" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                {(() => { const b = WHY_ISM[3]; return (
                  <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 22px', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                ); })()}
              </div>
              {WHY_ISM.slice(4, 6).map(b => (
                <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 26px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 20 }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: J, fontSize: 15.5, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .why-ism-card{ transition: transform .2s ease, box-shadow .2s ease; }
            .why-ism-card:hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0,35,83,.10); }
            @media(max-width:900px){ .why-ism-bento{ grid-template-columns:1fr !important; } .why-ism-bento-row{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 12. OUR PROCESS ══════════════════════════════════════════════ */}
        <section className="cf-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                How Isuremedia Designs and Builds <span style={{ color: 'var(--ism-amber)' }}>ClickFunnels Funnels</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Strategy. Copy. Build. Test. Optimise.
              </p>
            </div>
            <div className="cf-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 28, left: '10%', width: '80%', height: 2, background: 'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex: 0 }} />
              {PROCESS.map((step, i) => (
                <div key={step.n} style={{ textAlign: 'center', padding: '0 16px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: i === 0 ? 'var(--ism-amber)' : 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: `0 4px 18px ${i === 0 ? 'rgba(255,176,0,.40)' : 'rgba(30,77,195,.30)'}`, border: '4px solid #fff' }}>
                    <span style={{ fontFamily: J, fontSize: 18, fontWeight: 900, color: '#fff' }}>{step.n}</span>
                  </div>
                  <div style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 10, lineHeight: 1.3 }}>{step.title}</div>
                  <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: 780, margin: '48px auto 0' }}>
              <strong style={{ color: 'var(--color-navy)' }}>Typical timeline:</strong> A standard lead generation or sales funnel takes one to two weeks from strategy to launch. Complex webinar funnels or membership site builds take two to four weeks.
            </p>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 22px rgba(255,176,0,.38)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Get a Free ClickFunnels Consultation
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .cf-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
              .cf-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 13. FAQ ══════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ 14. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/click funnel.webp" description={<>ClickFunnels is only as good as what's built inside it. If your funnel is leaking leads at the opt-in, stalling at checkout, or just not converting the way it should, we can fix it. Let's build you a funnel that actually turns clicks into <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>paying customers</span>.</>} heading="Ready to Build" headingHighlight="Funnels That Convert?" primaryLabel="Build My Funnel" secondaryLabel="Talk to a Funnel Expert" />
      </main>
      <Footer />
    </>
  );
}
