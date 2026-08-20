'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'Google Ads account setup and campaign structure',
  'Keyword research and negative keyword management',
  'Ad copy creation and A/B testing',
  'Bid strategy and budget optimisation',
  'Conversion tracking and goal setup',
  'Landing page alignment and CRO',
  'Monthly reporting in plain English',
];

const WHY_MATTERS = [
  { icon: 'fa-solid fa-bolt', title: 'Immediate visibility at the top of Google', desc: 'Your business appears above organic results the moment your campaign goes live. No waiting for rankings to build.' },
  { icon: 'fa-solid fa-user-check', title: 'Traffic from people ready to buy', desc: 'Every click comes from someone who typed a specific query, they told Google exactly what they want before arriving.' },
  { icon: 'fa-solid fa-sliders', title: 'Full control over budget and spend', desc: 'You set the budget and the limits. No minimum spends, no long-term platform commitments. Every pound is tracked.' },
  { icon: 'fa-solid fa-chart-line', title: 'Measurable return on every campaign', desc: 'Results are measurable down to the conversion, you see exactly which keywords and ads are producing customers.' },
  { icon: 'fa-solid fa-arrow-up-right-dots', title: 'Scalable as your business grows', desc: 'Performing campaigns can be scaled, more budget, more keywords, without rebuilding from scratch.' },
  { icon: 'fa-solid fa-globe', title: 'Reach at Google scale', desc: 'Google handles over 8 billion searches a day and dominates 80.2% of the global PPC market.' },
];

const WHY_MATTERS_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const CAMPAIGN_TYPES = [
  { icon: 'fa-solid fa-magnifying-glass', title: 'Google Search Campaigns', impact: 'Core', desc: 'Text ads at the top of search results for people actively searching for what you offer right now, the highest-intent traffic in digital advertising.' },
  { icon: 'fa-solid fa-robot', title: 'Performance Max Campaigns', impact: 'AI-driven', desc: 'Runs across Search, Display, YouTube, Gmail, Maps, and Discover from one campaign, configured with the right signals so it works toward your actual goals.' },
  { icon: 'fa-solid fa-images', title: 'Google Display Campaigns', impact: 'Remarketing', desc: 'Visual banner ads across millions of sites, best for remarketing to past visitors or building awareness before a direct conversion push.' },
  { icon: 'fa-solid fa-bag-shopping', title: 'Google Shopping Campaigns', impact: 'E-commerce', desc: 'Product listing ads showing images, prices, and ratings directly in search, consistently outperform text ads for purchase intent.' },
  { icon: 'fa-brands fa-youtube', title: 'YouTube Ads', impact: 'Awareness', desc: 'Video ads before, during, and after YouTube content, effective for brand building and reaching audiences not yet actively searching.' },
  { icon: 'fa-solid fa-phone-volume', title: 'Local Services Ads', impact: 'Pay-per-lead', desc: 'A pay-per-lead format for local service businesses, you pay for verified leads, with a Google Guaranteed or Screened badge.' },
];

const SERVICES = [
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Google Ads Account Audit', desc: 'Campaign structure, keywords, Quality Scores, tracking, and wasted spend, a clear picture of what needs fixing.' },
  { icon: 'fa-solid fa-compass', title: 'Campaign Strategy & Setup', desc: 'The right campaign types, keyword strategy, ad group structure, and landing page alignment, built to perform from day one.' },
  { icon: 'fa-solid fa-key', title: 'Keyword & Negative Keyword Management', desc: 'A negative keyword list that prevents your ads appearing for irrelevant searches, one of the most impactful ways to cut waste.' },
  { icon: 'fa-solid fa-pen-nib', title: 'Ad Copy Creation & Testing', desc: 'Copy that clearly communicates your offer, with systematic A/B tests on headlines, descriptions, and CTAs.' },
  { icon: 'fa-solid fa-scale-balanced', title: 'Bid Strategy & Budget Optimisation', desc: 'Manual CPC, Target CPA, Target ROAS, or Maximise Conversions, adjusted as your campaign generates real data.' },
  { icon: 'fa-solid fa-bullseye', title: 'Conversion Tracking & Goal Setup', desc: 'Clean tracking for every action that matters, form fills, calls, bookings, purchases, the foundation of Smart Bidding.' },
  { icon: 'fa-solid fa-arrow-up-right-from-square', title: 'Landing Page Review & CRO', desc: 'We identify headline mismatch, missing trust signals, and unclear CTAs, and work with your team to fix them.' },
  { icon: 'fa-solid fa-chart-simple', title: 'Monthly Reporting & Strategy Calls', desc: 'Spend, clicks, conversions, cost per conversion, and ROAS, in plain English, with a clear plan for next month.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-arrow-trend-down', title: 'Running ads that aren’t converting', desc: 'The problem is almost always structural, keyword targeting, landing pages, or tracking. We audit and fix what’s broken.', img: "/services-six-card/Ppc/google ads/Running ads that aren'tconverting.webp" },
  { icon: 'fa-solid fa-flag', title: 'Never run Google Ads before', desc: 'Getting the structure and tracking right from the start, instead of learning from expensive mistakes.', img: '/services-six-card/Ppc/google ads/Never run Google Ads before.webp' },
  { icon: 'fa-solid fa-phone', title: 'Local service businesses needing calls', desc: 'Plumbers, lawyers, dentists, contractors, put your business at the top the same day someone searches nearby.', img: '/services-six-card/Ppc/google ads/Local service businessesneeding calls.webp' },
  { icon: 'fa-solid fa-cart-shopping', title: 'E-commerce wanting to grow sales', desc: 'Shopping and Search campaigns managed together for the best return across purchase-intent searches.', img: '/services-six-card/Ppc/google ads/E-commerce wanting to grow sales.webp' },
  { icon: 'fa-solid fa-arrow-up-right-dots', title: 'Preparing to scale', desc: 'A campaign that’s working, ready for more budget and new markets without performance degrading.', img: '/services-six-card/Ppc/google ads/Preparing to scale.webp' },
  { icon: 'fa-solid fa-eye', title: 'Want transparent management', desc: 'Every spend decision explainable, every result attributable, no reports you can’t interpret.', img: '/services-six-card/Ppc/google ads/Want transparent management.webp' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-certificate', title: 'We are a Google Partner', desc: 'Our team meets Google’s standards for campaign performance, certified expertise, and managed spend.' },
  { icon: 'fa-solid fa-bullseye', title: 'We optimise for revenue, not clicks', desc: 'Campaigns and bidding built around leads, calls, bookings, or sales, measured against those goals.' },
  { icon: 'fa-solid fa-wallet', title: 'We manage your budget like it’s our own', desc: 'We review performance regularly and reallocate budget toward what’s actually producing results.' },
  { icon: 'fa-solid fa-comments', title: 'Plain English reporting', desc: 'Spend, conversions, cost per conversion, what we tested, what we changed, and the plan for next month.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no lock-in', desc: 'You stay because campaigns are producing results, not because you are contractually obligated to.' },
  { icon: 'fa-solid fa-headset', title: 'One dedicated contact', desc: 'One person managing your account, not a rotating team of junior managers.' },
];

const PROCESS = [
  { n: '01', title: 'Audit & Goal Alignment', desc: 'We audit your existing account or review your goals, identifying wasted spend and quick wins before building anything.' },
  { n: '02', title: 'Strategy & Campaign Build', desc: 'Campaign structure, keyword strategy, negative keywords, and bidding approach, conversion tracking verified first.' },
  { n: '03', title: 'Ad Copy & Landing Pages', desc: 'Copy written and landing pages reviewed so every ad leads to a page matched to the search intent behind the click.' },
  { n: '04', title: 'Launch & Initial Optimisation', desc: 'Close monitoring in the first two to four weeks, search terms, Quality Scores, CTR, and early conversion data.' },
  { n: '05', title: 'Ongoing Management', desc: 'Bids adjusted, keywords refined, new ad copy tested every month, Google Ads is not a set-and-forget channel.' },
  { n: '06', title: 'Monthly Report & Review', desc: 'Performance discussed, what we’re testing, and the plan for next month, you stay informed and in control.' },
];

const FAQS = [
  { q: 'How much does Google Ads cost?', a: 'You set your own budget, there is no Google minimum. Most small and medium businesses start between $1,000 and $5,000 a month and scale based on results.' },
  { q: 'How long does it take to see results?', a: 'Campaigns can go live within days and clicks appear in the first week. Meaningful optimisation takes four to six weeks, with strong performance typically by month three.' },
  { q: 'What is the difference between Google Ads and SEO?', a: 'SEO builds organic rankings over months and delivers free traffic once established. Google Ads puts you at the top immediately but requires ongoing spend. Many businesses run both.' },
  { q: 'Do I need a big budget to get results?', a: 'No. A well-structured campaign with a modest budget consistently outperforms a poorly structured one with a large budget.' },
  { q: 'What is ROAS and what should I expect?', a: 'Return on Ad Spend, a 3:1 ROAS means $3 earned per $1 spent. The average across Google Ads is around 2:1; well-managed campaigns achieve 3:1 to 5:1 or higher.' },
  { q: 'What is Performance Max and should I be using it?', a: 'Google’s AI-driven campaign type across all channels from one campaign. It can perform well with the right data and assets, we always run Search alongside it for keyword transparency.' },
  { q: 'Can you take over management of an existing account?', a: 'Yes. We start with a full audit, then make changes progressively, improving what’s working, fixing what isn’t.' },
  { q: 'Do you also manage Microsoft Advertising?', a: 'Yes. It reaches a different audience and can be a cost-effective complement, particularly for B2B and professional services.' },
];

const RELATED = [
  { icon: 'fa-brands fa-meta', title: 'Meta Ads', desc: 'Facebook and Instagram advertising built to reach, engage, and convert the right audiences.', href: '/services/ppc/meta-ads' },
  { icon: 'fa-brands fa-tiktok', title: 'TikTok Ads', desc: 'Native-feeling video creative and campaigns built for the TikTok feed.', href: '/services/ppc/tiktok-ads' },
  { icon: 'fa-brands fa-youtube', title: 'YouTube Ads', desc: 'In-stream and Shorts video ads built for awareness and direct response.', href: '/services/ppc/youtube-ads' },
];

function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="gads-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          <div className="gads-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>Google Ads</span>
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
          .gads-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .gads-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function GoogleAdsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="gads-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="gads-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Turn Your Ad Budget Into{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Customers.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>{' '}
                  Not Just Clicks.
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  We build and manage Google Ads campaigns that bring the right people to your business, with every pound and dollar spent{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>tracked, optimised, and accountable</span> to real results.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Get a Free Google Ads Audit
                  </a>
                </div>
              </div>

              <div className="gads-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/banner/google ads banner.webp" alt="Google Ads management" style={{ width: '100%', height: 440, objectFit: 'contain', background: 'transparent', borderRadius: 24, display: 'block' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-brands fa-google" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-certificate" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>Google Partner</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      (<img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />)
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>Campaigns Managed &amp; Growing</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>2:1 Avg. ROAS</span>
                </div>
              </div>

            </div>
          </div>

          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -1, width: '100%', height: 70, display: 'block' }} aria-hidden>
            <path d="M0,0 Q720,110 1440,0 L1440,100 L0,100 Z" fill="#F7F8FA" />
          </svg>

          <style>{`
            @media (max-width: 900px) {
              .gads-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .gads-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .gads-hero { padding: 48px 0 64px !important; }
            }
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
                  Most Businesses Are Spending on Google Ads and Not Getting Enough Back.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  Google Ads works, but only when campaigns are built properly, managed actively, and optimised around outcomes that actually matter, not just impressions and clicks.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  ISureMedia manages Google Ads{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>from strategy through to results</span>, the right keywords, the right bids, ads that get clicked, and landing pages that convert.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Claim Your Free Google Ads Audit
                </a>
              </div>
              <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', border: '1px solid var(--color-border)', boxShadow: '0 20px 50px rgba(0,35,83,.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 6px 16px rgba(255,176,0,.35)' }}>
                    <i className="fa-solid fa-list-check" style={{ color: 'var(--color-navy)', fontSize: 15 }} />
                  </div>
                  <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', margin: 0 }}>What we take care of</p>
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

        {/* ══ 04. WHAT IS GOOGLE ADS MANAGEMENT ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="gads-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="gads-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  Put Your Business in Front of People Searching for What You Offer Right Now.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Unlike SEO, which builds visibility over months, Google Ads puts you{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>in front of buyers the same day</span> your campaign goes live.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    But running Google Ads and running them well are two different things, campaign types, bidding strategies, Quality Scores, Smart Bidding. Getting any of it wrong means{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>paying for traffic that never converts</span>.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Management is the ongoing work of making sure every part of your campaign is set up correctly, tested regularly, and optimised continuously.
                  </p>
                </div>
              </div>
              <div className="gads-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 306deg, var(--ism-blue-100) 306deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>3:1</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>Target ROAS</span>
                  </div>
                </div>

                <div className="gads-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-key" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Keywords</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>Matched</div>
                  </div>
                </div>

                <div className="gads-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Quality Score</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>8+ / 10</div>
                  </div>
                </div>

                <div className="gads-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-bullseye" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Tracking</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>Verified</div>
                  </div>
                </div>

                <div className="gads-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-coins" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Wasted Spend</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Minimised</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .gads-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .gads-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .gads-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .gads-score-badge{ padding:8px 10px !important; gap:7px !important; } .gads-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. WHY GOOGLE ADS WORKS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Reach the People Who Are Already Looking for What You Sell.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Businesses earn an average of two dollars for every one dollar spent on Google Ads. The person clicking your ad already searched for what you offer, they went looking.
              </p>
            </div>
            <div className="why-matters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 48 }}>
              {WHY_MATTERS.map((w, i) => {
                const variant = WHY_MATTERS_VARIANTS[i % 3];
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
                Start Getting Results From Your Ad Spend
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .why-matters-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .why-matters-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. CAMPAIGN TYPES WE MANAGE ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>The Right Campaign Type for the Right Business Goal.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Every Google Ads format serves a different purpose. Here is what we manage, and when each one makes sense.
              </p>
            </div>
            <div className="ranking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {CAMPAIGN_TYPES.map((f, i) => {
                const hl = i === 0;
                return (
                  <div key={f.title} className={hl ? 'ranking-card ranking-card-hl' : 'ranking-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="ranking-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`ranking-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="ranking-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                        <span className="ranking-card-badge" style={{ fontFamily: J, fontSize: 10.5, fontWeight: 700, color: hl ? 'var(--ism-amber)' : 'var(--color-accent-hover)', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'color .25s ease' }}>{f.impact}</span>
                      </div>
                    </div>
                    <p className="ranking-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .ranking-card:not(.ranking-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .ranking-card:not(.ranking-card-hl):hover .ranking-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .ranking-card:not(.ranking-card-hl):hover .ranking-card-icon{ color: #fff !important; }
            .ranking-card:not(.ranking-card-hl):hover .ranking-card-title{ color: #fff !important; }
            .ranking-card:not(.ranking-card-hl):hover .ranking-card-badge{ color: var(--ism-amber) !important; }
            .ranking-card:not(.ranking-card-hl):hover .ranking-card-desc{ color: rgba(255,255,255,.85) !important; }
            .ranking-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .ranking-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 07. OUR GOOGLE ADS SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our Google Ads Management Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Every Part of Your Campaign Built, Managed, and Optimised for Results.</p>
            </div>
            <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
              {SERVICES.map((s, i) => {
                const variant = WHY_MATTERS_VARIANTS[i % 3];
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

        {/* ══ 08. WHO THIS IS FOR ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Who Google Ads Management Is Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If Your Customers Are Searching on Google, Your Business Should Be at the Top.</p>
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

        {/* ══ 09. MID-PAGE CTA STRIP ══════════════════════════════════════════════ */}
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="mid-cta" style={{ background: 'var(--color-primary)', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
              <div aria-hidden style={{ position: 'absolute', top: '-30%', right: '-5%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', maxWidth: 560 }}>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Find out exactly where your Google Ads budget is going.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  A free audit will show you what is working, what is wasting money, and what to fix first.
                </p>
              </div>
              <a href="/contact" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Run My Free Google Ads Audit <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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

        {/* ══ 10. WHY CHOOSE ISM ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Businesses Choose Isuremedia for Google Ads</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Strategy First. Results You Can Measure. No Budget Wasted.</p>
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
                  <img src="\services-mid-image\ppc.webp" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

        {/* ══ 11. OUR PROCESS ══════════════════════════════════════════════ */}
        <section className="gads-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                How ISureMedia Manages <span style={{ color: 'var(--ism-amber)' }}>Google Ads Campaigns</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Audit. Build. Launch. Optimise. Report. Repeat.
              </p>
            </div>
            <div className="gads-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 28, left: '8%', width: '84%', height: 2, background: 'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex: 0 }} />
              {PROCESS.map((step, i) => (
                <div key={step.n} style={{ textAlign: 'center', padding: '0 12px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: i === 0 ? 'var(--ism-amber)' : 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: `0 4px 18px ${i === 0 ? 'rgba(255,176,0,.40)' : 'rgba(30,77,195,.30)'}`, border: '4px solid #fff' }}>
                    <span style={{ fontFamily: J, fontSize: 18, fontWeight: 900, color: '#fff' }}>{step.n}</span>
                  </div>
                  <div style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 10, lineHeight: 1.3 }}>{step.title}</div>
                  <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', marginTop: 40 }}>
              Campaigns can go live within one to two weeks. Initial performance data typically stabilises within four to six weeks, optimised, consistently improving performance is usually achieved by month three.
            </p>
            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 22px rgba(255,176,0,.38)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Get a Free Google Ads Audit
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .gads-timeline { grid-template-columns: repeat(3,1fr) !important; gap: 40px !important; }
            }
            @media (max-width: 560px) {
              .gads-timeline { grid-template-columns: 1fr !important; }
              .gads-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 12. RELATED SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '96px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(22px,2.4vw,36px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Pair It With</h2>
              <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', marginTop: 10 }}>A few things that go well with Google Ads.</p>
            </div>
            <div className="gads-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {RELATED.map((r, i) => (
                <a key={i} href={r.href} style={{ display: 'block', background: '#fff', borderRadius: 16, border: '1px solid var(--color-border)', padding: '32px 28px', textDecoration: 'none', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 44px rgba(30,77,195,.12)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <i className={r.icon} style={{ color: 'var(--color-primary)', fontSize: 19 }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 17, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 8 }}>{r.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: 14 }}>{r.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: J, fontSize: 12.5, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.04em', textTransform: 'uppercase' }}>
                    Learn More <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:860px){ .gads-related-grid{ grid-template-columns:1fr !important; } }`}</style>
        </section>

        {/* ══ 13. FAQ ══════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ 14. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/google ads.webp" description={<>Search is where buyers already show up looking for what you sell, but only if your campaigns are structured to catch that intent instead of wasting spend on the wrong clicks. We build and manage Google Ads accounts around real purchase signals, not vanity impressions. Let's turn your search traffic into <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>booked revenue, not wasted clicks</span>.</>} heading="Ready to" headingHighlight="Own the Search Results?" primaryLabel="Launch My Google Ads Campaign" secondaryLabel="Talk to a PPC Specialist" />
      </main>
      <Footer />
    </>
  );
}
