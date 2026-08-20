'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'Google Ads campaign management',
  'Meta Ads campaign management',
  'LinkedIn Ads campaign management',
  'Campaign strategy and audience targeting',
  'Ad creative production',
  'Conversion tracking setup',
  'Negative keyword and budget management',
  'Monthly branded performance reports',
];

const WHY_MATTERS = [
  { icon: 'fa-solid fa-certificate', title: 'Certification requirements', desc: 'Google Ads and Meta Blueprint certifications take real time to earn and maintain, and platforms change their requirements often. Most agencies cannot justify that investment for one or two paid media clients.' },
  { icon: 'fa-solid fa-calendar-days', title: 'Daily account management burden', desc: 'Bid adjustments, budget pacing, search term reviews, and audience refinement need daily attention. That is a full role, not a side task squeezed between other client work.' },
  { icon: 'fa-solid fa-images', title: 'Creative production needs', desc: 'Ad creative that performs needs testing, iteration, and platform-specific formats, static, video, carousel. Most agencies without a dedicated media buyer do not have this pipeline either.' },
  { icon: 'fa-solid fa-arrows-spin', title: 'Platform algorithm changes', desc: 'Google and Meta update targeting, bidding, and delivery logic constantly. Campaigns optimised six months ago can quietly underperform without someone watching for the shift.' },
  { icon: 'fa-solid fa-heart-crack', title: 'Client retention risk from poor ad performance', desc: 'A client paying for ad management they are not confident in is a client who starts shopping for a new agency. Certified, hands-on management protects that relationship.' },
  { icon: 'fa-solid fa-sack-dollar', title: 'Margin without headcount', desc: 'Hiring an in-house PPC specialist is a five-figure annual commitment before a single dollar of ad spend is managed. White-label delivery gets you the margin without the payroll.' },
];

const CARD_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const KEY_FACTORS = [
  { icon: 'fa-solid fa-medal', title: 'Certified Google, Meta & LinkedIn Specialists', impact: 'Highest impact', desc: 'Every account is managed by a certified specialist on the platform it runs on, not a generalist spreading attention across every channel at once.' },
  { icon: 'fa-solid fa-chess', title: 'Campaign Strategy Before Launch', impact: 'High impact', desc: 'No campaign goes live without a documented strategy, audience targeting, budget allocation, and platform selection matched to the client\'s actual goal.' },
  { icon: 'fa-solid fa-bullseye', title: 'Conversion Tracking Setup', impact: 'High impact', desc: 'Pixels, conversion events, and attribution configured correctly before spend begins, so every reported result reflects what actually happened.' },
  { icon: 'fa-solid fa-flask', title: 'Creative Testing', impact: 'High impact', desc: 'Multiple ad variants tested against each other on every active campaign, with underperformers rotated out based on real data, not guesswork.' },
  { icon: 'fa-solid fa-ban', title: 'Negative Keyword Hygiene', impact: 'Medium impact', desc: 'Search term reports reviewed on a schedule and negative keywords added continuously, keeping budget away from searches that were never going to convert.' },
  { icon: 'fa-solid fa-file-shield', title: 'NDA-Protected Fulfillment', impact: 'Medium impact', desc: 'Every partnership is covered by a full NDA. We never contact your clients directly, all communication and delivery routes through your agency.' },
  { icon: 'fa-solid fa-chart-bar', title: 'Branded Reporting', impact: 'Contextual', desc: 'Performance reports carry your logo, your colours, and your name, a polished document your clients see as coming from your agency.' },
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Monthly Optimization Reviews', impact: 'Growing fast', desc: 'Every account gets a monthly review covering performance trends, budget reallocation, and recommendations for the next optimisation cycle.' },
];

const SERVICES = [
  { icon: 'fa-brands fa-google', title: 'Google Ads Management', desc: 'Search, Display, Shopping, and Performance Max campaigns built, launched, and optimised inside the client\'s own ad account.' },
  { icon: 'fa-brands fa-meta', title: 'Meta Ads Management', desc: 'Facebook and Instagram campaigns across awareness, lead generation, and conversion objectives, managed daily.' },
  { icon: 'fa-brands fa-linkedin', title: 'LinkedIn Ads Management', desc: 'B2B lead generation and sponsored content campaigns for clients targeting decision-makers by role, industry, and company size.' },
  { icon: 'fa-solid fa-chess', title: 'Campaign Strategy & Audience Targeting', desc: 'A documented strategy for every campaign, platform selection, audience definition, and budget allocation before launch.' },
  { icon: 'fa-solid fa-images', title: 'Ad Creative Production', desc: 'Static, video, and carousel ad creative produced and tested across variants to find what actually converts.' },
  { icon: 'fa-solid fa-bullseye', title: 'Conversion Tracking Setup', desc: 'Pixels, conversion events, and attribution configured correctly so every reported result is one you can trust.' },
  { icon: 'fa-solid fa-magnifying-glass', title: 'Landing Page Review & CRO Recommendations', desc: 'Landing pages reviewed against best practice and specific, actionable recommendations delivered to lift conversion rate.' },
  { icon: 'fa-solid fa-file-lines', title: 'Branded Monthly Reporting', desc: 'A polished performance report under your agency\'s branding, ready to present to the client without any editing.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-user-slash', title: 'Agencies without an in-house PPC specialist', desc: 'You can say yes to paid media work without hiring, training, or maintaining certifications your agency does not use often enough to justify.', img: '/services-six-card/White Label/White Label ppc/Agencies without an in-housePPC specialist.png' },
  { icon: 'fa-solid fa-tags', title: 'Agencies wanting to resell paid media without hiring', desc: 'Add Google, Meta, and LinkedIn Ads to your service menu and keep the margin, without carrying the payroll of a media buying team.', img: '/services-six-card/White Label/White Label ppc/Agencies wanting to resell paidmedia without hiring.png' },
  { icon: 'fa-solid fa-comments', title: 'Agencies with clients requesting Google, Meta or LinkedIn ads', desc: 'When a client asks for paid ads, say yes on the spot instead of referring them elsewhere and risking the relationship.', img: '/services-six-card/White Label/White Label ppc/Agencies with clients requestingGoogle, Meta or Linkedln ads.png' },
  { icon: 'fa-solid fa-chart-line', title: 'Agencies wanting predictable margin on ad management', desc: 'A fixed white-label rate against what you charge the client gives you a predictable, repeatable margin on every account.', img: '/services-six-card/White Label/White Label ppc/Agencies wanting predictablemargin on ad management.png' },
  { icon: 'fa-solid fa-layer-group', title: 'Agencies needing overflow PPC capacity', desc: 'When your in-house team is at capacity, white-label overflow keeps new accounts moving without delaying onboarding.', img: '/services-six-card/White Label/White Label ppc/Agencies needing overflow PPCcapacity.png' },
  { icon: 'fa-solid fa-rocket', title: 'Agencies expanding without certification overhead', desc: 'Expand into paid media as a core offering while we carry the certification, platform training, and day-to-day account management.', img: '/services-six-card/White Label/White Label ppc/Agencies expanding withoutcertification overhead.png' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-medal', title: 'Certified specialists managing every account', desc: 'Google Ads and Meta Blueprint certified specialists manage each account on the platform they are certified in, not a generalist across every channel.' },
  { icon: 'fa-solid fa-building-shield', title: 'Campaigns run in the client\'s own ad account', desc: 'Every campaign runs inside the client\'s ad account, not ours, full ownership and historical data stay with your client, where it belongs.' },
  { icon: 'fa-solid fa-user-secret', title: 'Full NDA protection, clients never know', desc: 'A signed NDA covers every partnership. We never reach out to your clients directly, and ISureMedia appears nowhere in any client-facing material.' },
  { icon: 'fa-solid fa-chart-bar', title: 'Branded reporting with your logo and colours', desc: 'Every performance report is built in your agency\'s branding, logo, colours, and name, ready to send without any editing on your end.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no lock-in', desc: 'Scale the number of accounts up or down as your client base changes. No annual contract, no minimum ad spend commitment to us.' },
  { icon: 'fa-solid fa-headset', title: 'One dedicated contact for all accounts', desc: 'A single point of contact at ISureMedia coordinates every account under your agency, so you are never chasing different specialists for updates.' },
];

const PROCESS = [
  { n: '01', title: 'Brief', desc: 'We take a detailed brief from your agency, client goals, target audience, budget, platform preference, and any existing account history.' },
  { n: '02', title: 'Strategy', desc: 'Our certified team builds a full campaign strategy including platform selection, audience targeting, budget allocation, and creative direction.' },
  { n: '03', title: 'Launch', desc: 'Campaigns go live inside the client\'s own ad account. We handle all setup, conversion tracking, and initial creative delivery.' },
  { n: '04', title: 'Optimize', desc: 'Daily monitoring and optimisation, bid adjustments, budget pacing, negative keywords, and creative testing based on real performance data.' },
  { n: '05', title: 'Report', desc: 'A branded monthly performance report delivered under your agency\'s name, ready to present to the client without any editing.' },
];

const FAQS = [
  { q: 'How does NDA protection actually work?', a: 'Every partnership is covered by a signed NDA before any work begins. We never contact your clients directly, never reference ISureMedia in any deliverable, and route all communication through your agency.' },
  { q: 'Which ad platforms do you support?', a: 'Google Ads (Search, Display, Shopping, Performance Max), Meta Ads (Facebook and Instagram), and LinkedIn Ads for B2B lead generation. Most partners use us for one or two platforms and expand from there.' },
  { q: 'Do campaigns run in our ad account or the client\'s?', a: 'The client\'s own ad account, always. We are granted access to manage it, but the account, its history, and its data belong to the client, not to us or your agency.' },
  { q: 'How are the reports branded?', a: 'Every monthly report carries your agency\'s logo, colour scheme, and name. You can send it to the client as-is or layer your own commentary on top before it goes out.' },
  { q: 'Is there a minimum ad spend?', a: 'We work with accounts across a wide range of budgets. There is a modest minimum monthly ad spend for us to manage an account effectively, this is confirmed on your discovery call based on the platform and goal.' },
  { q: 'How fast can a campaign launch?', a: 'Once we have the brief and account access, most campaigns launch within three to five business days, faster if conversion tracking and creative are already in place.' },
  { q: 'Do you handle landing pages too?', a: 'We review landing pages against best practice and provide specific CRO recommendations. Landing page builds themselves are handled through our white-label web development service.' },
  { q: 'What if a client wants LinkedIn ads specifically?', a: 'LinkedIn is fully supported for B2B lead generation and sponsored content campaigns, managed by a specialist familiar with LinkedIn\'s targeting and bidding model, which behaves differently than Google or Meta.' },
  { q: 'How is pricing and margin structured?', a: 'You are quoted a wholesale white-label management fee per account, and you set your own client-facing price. Most agencies mark up 40 to 60% above the wholesale rate.' },
  { q: 'What are the cancellation terms?', a: 'Month to month, no lock-in. You can pause or stop management on any account with 30 days\' notice, with no penalty and no minimum term.' },
];

const RELATED = [
  { href: '/services/white-label', icon: 'fa-solid fa-building', title: 'White-Label Hub', desc: 'Overview of all white-label services, SEO, PPC, content, web design, and automation under your brand.' },
  { href: '/services/white-label/white-label-seo', icon: 'fa-solid fa-magnifying-glass', title: 'White-Label SEO', desc: 'Resell full-stack SEO services under your agency brand with branded reports and scalable delivery.' },
  { href: '/services/ppc-paid-marketing', icon: 'fa-solid fa-bullseye', title: 'PPC & Paid Marketing', desc: 'Direct PPC management for your own business, Google, Meta, and LinkedIn campaigns.' },
];

/* ── FAQ 2-COL, matches the sibling white-label pages layout ── */
function WLPFAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="wlp-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <div className="wlp-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>White-Label PPC</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: '0 0 32px' }}>
              Straight answers to the questions agency owners ask most about white-label paid media.
            </p>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Get Started →
            </a>
          </div>
          {/* Right accordion */}
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
          .wlp-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .wlp-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function WhiteLabelPPCPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="wlp-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="wlp-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* Left, copy */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Google, Meta, and LinkedIn Ads.{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Managed Under Your Brand.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  We provide white-label Google Ads, Meta Ads, and LinkedIn Ads management for agencies, certified specialists running campaigns inside your clients' own ad accounts, fully NDA-protected, with branded monthly reports so{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>you own the client relationship</span>.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Start White-Label PPC
                  </a>
                </div>
              </div>

              {/* Right, photo + floating badges */}
              <div className="wlp-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/banner/white-label-ppc.webp" alt="White-label PPC management for agencies" style={{ width: '100%', height: 440, objectFit: 'contain', borderRadius: 24, display: 'block' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-bullseye" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-medal" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>Certified Specialists</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      (<img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />)
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>250+ Accounts Managed</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>Delivered Under Your Brand</span>
                </div>
              </div>

            </div>
          </div>

          {/* Curved bottom edge */}
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{ position: 'absolute', left: 0, bottom: -1, width: '100%', height: 70, display: 'block' }}
            aria-hidden
          >
            <path d="M0,0 Q720,110 1440,0 L1440,100 L0,100 Z" fill="#F7F8FA" />
          </svg>

          <style>{`
            @media (max-width: 900px) {
              .wlp-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .wlp-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .wlp-hero { padding: 48px 0 64px !important; }
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
                  Sell Paid Media Without Becoming a Media Buying Agency.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  Clients ask for Google Ads, Meta Ads, and LinkedIn Ads constantly. Turning that work away or referring it out risks the relationship and leaves margin on the table. Hiring an in-house PPC specialist and keeping up certifications is a slow, expensive way to say yes.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  ISureMedia manages Google, Meta, and LinkedIn campaigns for your clients under full NDA protection, inside the client's own ad account, reported under your brand.{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>You keep the client relationship and the margin</span>. We run the campaigns.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Start White-Label PPC
                </a>
              </div>
              <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', border: '1px solid var(--color-border)', boxShadow: '0 20px 50px rgba(0,35,83,.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 6px 16px rgba(255,176,0,.35)' }}>
                    <i className="fa-solid fa-list-check" style={{ color: 'var(--color-navy)', fontSize: 15 }} />
                  </div>
                  <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', margin: 0 }}>What we handle for your agency</p>
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

        {/* ══ 04. WHAT IS WHITE-LABEL PPC ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="wlp-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="wlp-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  One Campaign Team. Every Report Under Your Name.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    White-label PPC means every campaign runs{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>inside your client's own ad account</span>, not ours, full ownership and historical data stay exactly where the client expects them to.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    The whole engagement is covered by a signed NDA, so{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>your clients never know ISureMedia exists</span>, only your agency, delivering the result.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Every account is managed by a Google or Meta certified specialist, and every monthly report is built in{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>your agency's own branding</span>, ready to send without any editing.
                  </p>
                </div>
              </div>
              <div className="wlp-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                {/* Decorative background rings */}
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                {/* Central gauge */}
                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 350deg, var(--ism-blue-100) 350deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>250+</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>Ad Accounts Managed</span>
                  </div>
                </div>

                {/* Floating badge, Certified Specialists */}
                <div className="wlp-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-medal" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Certified Specialists</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>100%</div>
                  </div>
                </div>

                {/* Floating badge, NDA Protected */}
                <div className="wlp-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-file-shield" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>NDA Protected</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Every Partner</div>
                  </div>
                </div>

                {/* Floating badge, Ad Accounts Managed */}
                <div className="wlp-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-bullseye" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Ad Accounts Managed</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>250+</div>
                  </div>
                </div>

                {/* Floating badge, Report Turnaround */}
                <div className="wlp-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-file-lines" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Report Turnaround</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Monthly</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .wlp-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .wlp-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .wlp-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .wlp-score-badge{ padding:8px 10px !important; gap:7px !important; } .wlp-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. WHY AGENCIES NEED WHITE-LABEL PPC ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Why Agencies Need White-Label PPC Instead of an In-House Team.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Paid media is one of the most requested services agencies turn away. These are the reasons most agencies do not build it in-house.
              </p>
            </div>
            <div className="why-matters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 48 }}>
              {WHY_MATTERS.map((w, i) => {
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
                Start White-Label PPC
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .why-matters-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .why-matters-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. WHAT MAKES A WHITE-LABEL PPC PARTNERSHIP WORK ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>What Actually Makes a White-Label PPC Partnership Work.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Handing off paid media only pays off if the campaigns actually perform. These are the factors Isuremedia builds into every white-label PPC engagement.
              </p>
            </div>
            <div className="wlp-factor-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {KEY_FACTORS.map((f, i) => {
                const hl = i === 0;
                return (
                  <div key={f.title} className={hl ? 'wlp-factor-card wlp-factor-card-hl' : 'wlp-factor-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="wlp-factor-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`wlp-factor-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="wlp-factor-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                        <span className="wlp-factor-card-badge" style={{ fontFamily: J, fontSize: 10.5, fontWeight: 700, color: hl ? 'var(--ism-amber)' : 'var(--color-accent-hover)', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'color .25s ease' }}>{f.impact}</span>
                      </div>
                    </div>
                    <p className="wlp-factor-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .wlp-factor-card:not(.wlp-factor-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .wlp-factor-card:not(.wlp-factor-card-hl):hover .wlp-factor-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .wlp-factor-card:not(.wlp-factor-card-hl):hover .wlp-factor-card-icon{ color: #fff !important; }
            .wlp-factor-card:not(.wlp-factor-card-hl):hover .wlp-factor-card-title{ color: #fff !important; }
            .wlp-factor-card:not(.wlp-factor-card-hl):hover .wlp-factor-card-badge{ color: var(--ism-amber) !important; }
            .wlp-factor-card:not(.wlp-factor-card-hl):hover .wlp-factor-card-desc{ color: rgba(255,255,255,.85) !important; }
            .wlp-factor-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .wlp-factor-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 07. OUR WHITE-LABEL PPC SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our White-Label PPC Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Everything Your Agency Needs to Offer Paid Media Confidently.</p>
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

        {/* ══ 08. WHO THIS IS FOR ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Which Agencies White-Label PPC Is Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If Clients Are Asking for Paid Media and You Are Turning It Down, This Fixes That.</p>
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
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Every paid media request you turn away is revenue and margin going to someone else.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  A quick call will show you exactly what white-label PPC would cost for your typical client account.
                </p>
              </div>
              <a href="/contact" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Start White-Label PPC <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Agencies Choose Isuremedia for White-Label PPC</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Certified Specialists. Full NDA Protection. Your Brand on Every Report.</p>
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
                  <img src="\services-mid-image\white-label.webp" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
        <section className="wlp-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                How White-Label PPC Works <span style={{ color: 'var(--ism-amber)' }}>With ISureMedia</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Simple for you. Invisible to your clients.
              </p>
            </div>
            <div className="wlp-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, position: 'relative' }}>
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
            <p style={{ textAlign: 'center', fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: 780, margin: '48px auto 0' }}>
              <strong style={{ color: 'var(--color-navy)' }}>Typical timelines:</strong> Campaign launch after brief and account access, three to five business days. Daily optimisation runs continuously across every active account. Branded reports delivered monthly, or on your preferred cadence.
            </p>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 22px rgba(255,176,0,.38)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Start White-Label PPC
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .wlp-timeline { grid-template-columns: repeat(3,1fr) !important; gap: 40px !important; }
            }
            @media (max-width: 560px) {
              .wlp-timeline { grid-template-columns: 1fr !important; }
              .wlp-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 12. RELATED SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '96px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(22px,2.4vw,36px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Pair It With</h2>
              <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', marginTop: 10 }}>A few things agencies usually bundle with white-label PPC.</p>
            </div>
            <div className="wlp-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
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
          <style>{`@media(max-width:860px){ .wlp-related-grid{ grid-template-columns:1fr !important; } }`}</style>
        </section>

        {/* ══ 13. FAQ ══════════════════════════════════════════════ */}
        <WLPFAQAccordion />

        {/* ══ 14. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/white label.webp" description={<>Running Google, Meta, and LinkedIn campaigns for every client stretches even the best in-house team thin. Our white-label PPC specialists manage the strategy, execution, and reporting under your agency&rsquo;s name, so you can offer full-funnel paid media without adding headcount. Let&rsquo;s talk about how to <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>scale your paid media offer under your brand</span>.</>} heading="Ready to Launch" headingHighlight="White-Label Campaigns?" primaryLabel="Start White-Label PPC" secondaryLabel="Talk to Our Ads Team" />
      </main>
      <Footer />
    </>
  );
}
