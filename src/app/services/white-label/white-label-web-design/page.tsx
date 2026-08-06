'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'WordPress websites — bespoke design and development',
  'Next.js and React builds for performance-critical projects',
  'Landing pages and campaign pages',
  'E-commerce builds — WooCommerce and Shopify',
  'GoHighLevel funnels and website builds',
  'Website redesigns and migrations',
  'Full project management — brief to launch',
];

const WHY_MATTERS = [
  { icon: 'fa-solid fa-diagram-project', title: 'We project-manage every build', desc: 'Design, development, QA, staging, and launch — your agency has one point of contact for the whole project.' },
  { icon: 'fa-solid fa-file-signature', title: 'Scope defined in writing before work begins', desc: 'Page count, integrations, responsibilities, and timeline signed off before the first design file is opened.' },
  { icon: 'fa-solid fa-object-group', title: 'Design and development as one team', desc: 'Every design decision is made with the build in mind — no translation loss between design and development.' },
  { icon: 'fa-solid fa-clipboard-check', title: 'QA before every delivery', desc: 'Desktop and mobile, all browsers, all form submissions and integrations tested before it reaches your agency.' },
  { icon: 'fa-solid fa-eye-slash', title: 'No ISureMedia reference anywhere', desc: 'Code, file names, staging URLs, and communications cleared before delivery. Your clients never discover otherwise.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no volume commitment', desc: 'Bring us projects and maintenance clients when you have them. No retainer minimums, no penalty for quieter months.' },
];

const WHY_MATTERS_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const FAILURE_MODES = [
  { icon: 'fa-solid fa-ruler-combined', title: 'Scope never properly defined', impact: 'Most common', desc: '"A five-page website with a contact form" is not a specification. Every ambiguity becomes a dispute at 80% complete. We define scope precisely, signed off before any work begins.' },
  { icon: 'fa-solid fa-code', title: 'Design that breaks in development', impact: 'High impact', desc: 'Layouts that look great in Figma but cause problems in the build. We design and develop in the same team, so every decision is made with the build in mind.' },
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'No QA before the agency presents it', impact: 'High impact', desc: 'A build delivered without QA is one the agency has to check themselves, or discover problems with the client. We QA everything first.' },
  { icon: 'fa-solid fa-life-ring', title: 'No post-launch support', impact: 'Ongoing risk', desc: 'Real users expose edge cases testing missed. Without support, those become agency problems. We include it on every project.' },
];

const SERVICES = [
  { icon: 'fa-brands fa-wordpress', title: 'WordPress Websites', desc: 'Bespoke sites built for performance — clean code, mobile-first layouts, and a CMS interface clients can actually manage.' },
  { icon: 'fa-brands fa-react', title: 'Next.js and React Builds', desc: 'For performance-critical projects — server-side rendering and edge-optimised delivery for sub-second load times.' },
  { icon: 'fa-solid fa-rectangle-list', title: 'Landing Pages & Campaign Pages', desc: 'Single-purpose pages for lead capture, launches, and events, connected to the client’s CRM and automation.' },
  { icon: 'fa-solid fa-cart-shopping', title: 'E-Commerce — WooCommerce & Shopify', desc: 'Product catalogue setup, payment gateways, shipping rules, and abandoned cart configuration included.' },
  { icon: 'fa-solid fa-robot', title: 'GoHighLevel Website & Funnel Builds', desc: 'Properly designed and built GHL sites taking full advantage of native CRM and automation connectivity.' },
  { icon: 'fa-solid fa-arrows-rotate', title: 'Redesigns & Migrations', desc: 'Outdated or outgrown sites rebuilt with SEO value, content, and domain authority preserved.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Ongoing Maintenance & Care Plans', desc: 'Plugin updates, security and uptime monitoring, and content changes — under your agency’s brand.' },
  { icon: 'fa-solid fa-list-check', title: 'Full Project Management', desc: 'Brief to launch, one point of contact on our side, so you manage the client relationship, not our team.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-magnifying-glass', title: 'Marketing & SEO agencies whose clients need websites', desc: 'Turning it down risks the relationship. Referring it out risks the experience. Say yes and deliver it under your brand.', img: 'https://picsum.photos/seed/wlweb-whofor-marketing/700/620' },
  { icon: 'fa-solid fa-palette', title: 'Branding agencies without dev capacity', desc: 'A brand identity project becomes a full brand and web build — delivered under your agency’s name.', img: 'https://picsum.photos/seed/wlweb-whofor-branding/700/620' },
  { icon: 'fa-solid fa-users', title: 'Agencies with dev capacity at its limit', desc: 'White-label overflow takes the backlog without the cost of a new hire — timelines still met.', img: 'https://picsum.photos/seed/wlweb-whofor-capacity/700/620' },
  { icon: 'fa-solid fa-bullhorn', title: 'PR and comms agencies expanding into digital', desc: 'Adds digital delivery capability to a communications-led proposition without in-house technical resource.', img: 'https://picsum.photos/seed/wlweb-whofor-pr/700/620' },
  { icon: 'fa-solid fa-user-tie', title: 'Freelance consultants building agency-level offers', desc: 'Offer website builds as part of your service without being the developer — retain the margin and relationship.', img: 'https://picsum.photos/seed/wlweb-whofor-freelance/700/620' },
  { icon: 'fa-solid fa-puzzle-piece', title: 'Agencies handling builds outside their stack', desc: 'A WordPress agency asked for Next.js, or a GHL funnel your team has never configured — say yes anyway.', img: 'https://picsum.photos/seed/wlweb-whofor-outside/700/620' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-diagram-project', title: 'We project-manage every build', desc: 'You brief us, we handle the rest. One point of contact — you are not chasing progress or translating between design and dev.' },
  { icon: 'fa-solid fa-file-signature', title: 'Scope defined in writing before work begins', desc: 'A written specification signed off by the agency before any work begins eliminates scope disputes before they start.' },
  { icon: 'fa-solid fa-object-group', title: 'Design and development as one team', desc: 'No translation loss — the site the client sees at launch looks like the design that was approved.' },
  { icon: 'fa-solid fa-clipboard-check', title: 'QA before every delivery', desc: 'Desktop and mobile, all browsers, all integrations tested — ready to present, not a build you check yourself.' },
  { icon: 'fa-solid fa-eye-slash', title: 'No ISureMedia reference anywhere', desc: 'Code, file names, staging URLs, and communications cleared. The website that goes live is your agency’s work.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month arrangements', desc: 'No volume commitments, no retainer minimums, no penalty for months with lower output.' },
];

const PROCESS = [
  { n: '01', title: 'Partner Discovery Call', desc: 'Your typical project types, platforms, and volume — a fulfilment structure and margin model proposed for your scope.' },
  { n: '02', title: 'Agency Onboarding', desc: 'Brand standards, briefing format, and support preferences established, with your dedicated project contact assigned.' },
  { n: '03', title: 'Brief & Scope Definition', desc: 'A written specification agreed by your agency before work begins — the document that prevents scope disputes.' },
  { n: '04', title: 'Design Phase', desc: 'Wireframes and visual design delivered for your agency’s review and approval before development begins.' },
  { n: '05', title: 'Development & Integration', desc: 'Code, CMS configuration, and integrations built, reviewed on staging at agreed milestones.' },
  { n: '06', title: 'QA, Delivery & Launch', desc: 'Full QA across devices and browsers, delivered for final review, launched on your confirmation.' },
];

const FAQS = [
  { q: 'Will my clients know you built the website?', a: 'No. Every deliverable — code, file structure, staging URL, CMS login — is cleared of ISureMedia references before delivery.' },
  { q: 'What platforms do you build on?', a: 'WordPress is our primary platform, plus Next.js and React for performance-critical builds, Shopify and WooCommerce for e-commerce, and GoHighLevel for CRM-integrated sites.' },
  { q: 'Do we manage the project or do you?', a: 'We manage the build. You manage the client relationship. Your agency has one contact who coordinates everything on our side.' },
  { q: 'What happens if a client requests significant changes mid-build?', a: 'Changes outside the written specification are scoped as additional work, quoted, and added with your agency’s approval.' },
  { q: 'What does QA involve before you deliver to our agency?', a: 'Full build tested across desktop and mobile on all major browsers, every integration verified live, and performance benchmarks measured and met.' },
  { q: 'Can you migrate an existing website to a new platform?', a: 'Yes. Migrations from Wix, Squarespace, or old WordPress builds are handled with redirect mapping and pre-launch SEO verification.' },
  { q: 'Do you offer post-launch maintenance for our clients?', a: 'Yes, as a white-label care plan under your agency’s brand — creating recurring revenue from clients who’d otherwise generate none after launch.' },
  { q: 'What is the typical margin structure?', a: 'Most agencies mark up white-label development 40 to 60% above wholesale cost — a $3,000 build typically retails at $4,500 to $5,000.' },
];

const RELATED = [
  { icon: 'fa-solid fa-magnifying-glass', title: 'White-Label SEO', desc: 'Full SEO delivery for your clients, branded as your agency.', href: '/services/white-label/white-label-seo' },
  { icon: 'fa-solid fa-chart-bar', title: 'White-Label PPC', desc: 'Google, Meta, and LinkedIn campaign management under your brand.', href: '/services/white-label/white-label-ppc' },
  { icon: 'fa-solid fa-users', title: 'Dedicated Agency Pods', desc: 'A fixed team assigned to your agency for consistent, accountable delivery.', href: '/services/white-label/dedicated-agency-pods' },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="wlweb-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          <div className="wlweb-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions From <span style={{ color: 'var(--ism-amber)' }}>Agency Directors</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: '0 0 32px' }}>
              Straight answers to the questions we hear most. No spin, no buzzwords.
            </p>
            <a href="/appointment" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Book a Partner Call →
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
          .wlweb-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .wlweb-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function WhiteLabelWebDesignPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="wlweb-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="wlweb-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Say Yes to Every{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Website Project.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  We design and develop websites, landing pages, e-commerce builds, and web applications for agencies — delivered under your brand, invisible to your clients, with project management and QA included.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/appointment"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Book a Partner Discovery Call
                  </a>
                </div>
              </div>

              <div className="wlweb-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://picsum.photos/seed/wlwebdesignhero/640/720" alt="White-label web development" style={{ width: '100%', height: 440, objectFit: 'cover', borderRadius: 24, display: 'block', boxShadow: '0 30px 70px rgba(0,35,83,.18)' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-code" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-eye-slash" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>Invisible to Your Clients</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>Builds Delivered &amp; QA&apos;d</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>QA&apos;d Before Delivery</span>
                </div>
              </div>

            </div>
          </div>

          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -1, width: '100%', height: 70, display: 'block' }} aria-hidden>
            <path d="M0,0 Q720,110 1440,0 L1440,100 L0,100 Z" fill="#F7F8FA" />
          </svg>

          <style>{`
            @media (max-width: 900px) {
              .wlweb-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .wlweb-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .wlweb-hero { padding: 48px 0 64px !important; }
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
                  Turning Away Website Work Is One of the Most Expensive Things Your Agency Does.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  Turning that work away means the client goes to a developer directly. Referring it out means losing control of quality, timelines, and the client experience.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  ISureMedia builds websites for agencies under their brand — from brief to launch, project-managed by us, QA&apos;d before delivery. Your agency delivers the website. We build it.
                </p>
                <a href="/appointment"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Book Your Partner Discovery Call
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

        {/* ══ 04. WHY WHITE-LABEL WEB PARTNERSHIPS MATTER ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="wlweb-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="wlweb-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  We Build It. Your Brand Delivers It.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    From brief to launch, project-managed by us, QA&apos;d before delivery, with{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>no ISureMedia reference anywhere</span> in the final product.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    WordPress, Next.js, Shopify, WooCommerce, GoHighLevel —{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>on platform and off</span>, whatever your clients ask for.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Your agency captures website revenue without carrying the development overhead — you manage the client relationship, we manage the build.
                  </p>
                </div>
              </div>
              <div className="wlweb-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 342deg, var(--ism-blue-100) 342deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>0%</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>ISM Visible</span>
                  </div>
                </div>

                <div className="wlweb-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-file-signature" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Scope</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>In Writing</div>
                  </div>
                </div>

                <div className="wlweb-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-clipboard-check" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>QA</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Passed</div>
                  </div>
                </div>

                <div className="wlweb-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-life-ring" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Support</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>Included</div>
                  </div>
                </div>

                <div className="wlweb-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-tag" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Branding</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>100% Yours</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .wlweb-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .wlweb-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .wlweb-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .wlweb-score-badge{ padding:8px 10px !important; gap:7px !important; } .wlweb-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. WHY IT WORKS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Why Agencies Choose ISureMedia for White-Label Web Development.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Project-managed, QA&apos;d before delivery, your brand on everything.
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
              <a href="/appointment"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Book a Partner Discovery Call
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .why-matters-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .why-matters-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. WHAT CAUSES WHITE-LABEL BUILDS TO FAIL ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>What Causes White-Label Web Builds to Fail — and How We Prevent Each One.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Most agencies have had a bad experience with a development partner. These are the reasons why.
              </p>
            </div>
            <div className="ranking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {FAILURE_MODES.map((f, i) => {
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

        {/* ══ 07. WHAT WE BUILD ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Every Type of Web Build Your Agency Clients Ask For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>WordPress, Next.js, Shopify, WooCommerce, GoHighLevel — On Platform and Off.</p>
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Which Agencies This Is Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If You Are Turning Away Website Work, This Is What Changes That.</p>
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
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Find out what white-label web development would cost for your typical project.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  A 30-minute partner discovery call, before you commit to anything.
                </p>
              </div>
              <a href="/appointment" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Book a Partner Discovery Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Agencies Choose Isuremedia</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Project-Managed. QA&apos;d Before Delivery. Your Brand on Everything.</p>
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
                  <img src="https://picsum.photos/seed/wlwebwhatmakesdifferent/700/620" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
        <section className="wlweb-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                How White-Label Web Development Works <span style={{ color: 'var(--ism-amber)' }}>With ISureMedia</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Brief. Scope. Design. Build. QA. Deliver. Support.
              </p>
            </div>
            <div className="wlweb-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 0, position: 'relative' }}>
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
              A standard five-to-eight page WordPress website: three to four weeks. Landing pages: five to seven business days. E-commerce builds: four to six weeks.
            </p>
            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <a href="/appointment"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 22px rgba(255,176,0,.38)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Book a Partner Discovery Call
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .wlweb-timeline { grid-template-columns: repeat(3,1fr) !important; gap: 40px !important; }
            }
            @media (max-width: 560px) {
              .wlweb-timeline { grid-template-columns: 1fr !important; }
              .wlweb-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 12. RELATED SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '96px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(22px,2.4vw,36px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Pair It With</h2>
              <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', marginTop: 10 }}>A few things agencies usually bundle with white-label web development.</p>
            </div>
            <div className="wlweb-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {RELATED.map((r, i) => (
                <a key={i} href={r.href} style={{ display: 'block', background: '#fff', borderRadius: 16, border: '1px solid var(--color-border)', padding: '32px 28px', textDecoration: 'none', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 44px rgba(30,77,195,.12)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
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
          <style>{`@media(max-width:860px){ .wlweb-related-grid{ grid-template-columns:1fr !important; } }`}</style>
        </section>

        {/* ══ 13. FAQ ══════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ 14. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/white label.webp" />
      </main>
      <Footer />
    </>
  );
}
