'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'Technical SEO audit and implementation',
  'On-page optimization, content, structure, and internal linking',
  'SEO content production, blog posts, location pages, and cluster content',
  'Link building, outreach, and agreed-quality link acquisition',
  'White label local SEO services, Google Business Profile, and citations',
  'AI search and AEO optimization',
  'White label monthly reporting, branded to your agency',
  'Dedicated account manager, one contact for all fulfillment queries',
];

const WHY_MATTERS = [
  { icon: 'fa-solid fa-door-open', title: 'No Barrier to Entry', desc: 'Selling SEO takes one thing: delivering it well. Building that capability in-house means hiring, training, and tooling before the revenue exists to justify it. White-label fulfilment removes the barrier, you sell from day one, we deliver from day one.' },
  { icon: 'fa-solid fa-sack-dollar', title: '40 to 60% Gross Margins', desc: 'Agencies using white-label SEO at a 100 to 150% markup on wholesale costs consistently report 40 to 60% gross margins on their retainers. The margin is predictable because the wholesale cost is fixed.' },
  { icon: 'fa-solid fa-layer-group', title: 'Scales Without Headcount', desc: 'Adding five more SEO clients to an in-house team means more hires, more tools, more management overhead. Adding five more clients to a white-label arrangement just means five more retainers in the fulfilment scope.' },
  { icon: 'fa-solid fa-bullseye', title: 'Your Team Stays Focused', desc: 'Your agency\'s value is client relationships, strategy, and growth. If your team is writing content and chasing link placements, they are not spending time on what actually grows the agency.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Deeper Expertise Than In-House', desc: 'A specialist white-label team works on SEO every day across dozens of clients and industries. That accumulated expertise is not replicable by a generalist in-house hire at the same cost.' },
];

const WHY_MATTERS_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const DELIVERY_STACK = [
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Technical SEO Audit & Implementation', tag: 'Where every engagement starts', desc: 'We audit crawlability, indexing, duplicate content, URL structure, internal linking, schema, Core Web Vitals, page speed, mobile usability, HTTPS, and sitemap configuration, then organize the findings into an implementation plan your agency can use.' },
  { icon: 'fa-solid fa-file-lines', title: 'On-Page Optimization', tag: 'Core deliverable', desc: 'We optimize titles, meta descriptions, headings, content structure, internal links, keyword targeting, and page-level relevance based on the search intent each URL needs to satisfy.' },
  { icon: 'fa-solid fa-pen-nib', title: 'SEO Content Production', tag: 'Core deliverable', desc: 'We create blog posts, pillar pages, location pages, and cluster content around agreed keyword targets, search intent, and the client\'s market, with delivery prepared for your agency\'s review.' },
  { icon: 'fa-solid fa-link', title: 'Link Building', tag: 'White hat only', desc: 'We manage outreach and link acquisition around relevant domains, suitable placements, and agreed quality standards. Your agency receives the agreed reporting and link documentation.' },
  { icon: 'fa-solid fa-map-location-dot', title: 'White Label Local SEO Services', tag: 'Multi-location ready', desc: 'For multi-location and local businesses, we can support Google Business Profile optimization, local landing pages, citations, review-related work, and ongoing local SEO reporting.' },
  { icon: 'fa-solid fa-robot', title: 'AI Search & AEO Optimization', tag: 'Included, not an add-on', desc: 'We structure and refine content for AI-assisted search visibility by improving answer clarity, topical coverage, entity context, structured information, and other on-page signals that help search systems interpret the content.' },
  { icon: 'fa-solid fa-chart-line', title: 'White Label Monthly Reporting', tag: 'Every month, on time', desc: 'Receive branded reports covering rankings, organic traffic, technical health, content published, links acquired, and next-month priorities so your agency can present the work directly to clients.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-bullhorn', title: 'Marketing & Digital Agencies', desc: 'You already manage client acquisition and account relationships but need an SEO fulfillment team behind your offer.', img: '/services-six-card/White Label/White label seo/Marketing and Digital Agencies.webp' },
  { icon: 'fa-solid fa-laptop-code', title: 'Web Design & Development Agencies', desc: 'Your clients want organic visibility alongside website work. White-label SEO adds an ongoing service without forcing your developers to take on SEO production.', img: '/services-six-card/White Label/White label seo/Web Design and DevelopmentAgencies.webp' },
  { icon: 'fa-solid fa-bullseye', title: 'PPC & Content Agencies', desc: 'Your clients may need SEO alongside paid media or content. A specialist partner lets you expand the offer while keeping delivery organized.', img: '/services-six-card/White Label/White label seo/PR and Content Agencies.webp' },
  { icon: 'fa-solid fa-arrow-trend-down', title: 'Agencies With Stalled SEO Campaigns', desc: 'When rankings have plateaued or reporting is becoming harder to maintain, an outside SEO team can provide additional technical and execution capacity.', img: '/services-six-card/White Label/White label seo/Agencies With Stalled SEOCampaigns.webp' },
  { icon: 'fa-solid fa-gauge-high', title: 'Agencies Scaling Past Capacity', desc: 'If your in-house team is at its limit, outsource SEO services can add delivery capacity without immediately hiring more specialists.', img: '/services-six-card/White Label/White label seo/Agencies Scaling Past Capacity.webp' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-layer-group', title: 'Complete SEO Stack, Not One Component', desc: 'Our white label SEO services cover technical SEO, on-page optimization, content, links, local SEO, AI search optimization, and reporting through one delivery team.' },
  { icon: 'fa-solid fa-robot', title: 'AI Search Is Included', desc: 'We include AI-assisted search optimization in the delivery framework where it fits the account, rather than treating it as a separate add-on.' },
  { icon: 'fa-solid fa-tag', title: 'Your Brand on Everything We Produce', desc: 'Reports, content, recommendations, and agreed deliverables are prepared for your agency\'s client-facing workflow rather than carrying our brand.' },
  { icon: 'fa-solid fa-headset', title: 'One Dedicated Account Manager', desc: 'Your agency has one point of contact for fulfillment questions, delivery coordination, and account updates.' },
  { icon: 'fa-solid fa-shield-halved', title: 'We Do Not Work With Your Direct Competitors', desc: 'We can avoid conflicts where the same market or service overlap would create a concern for your agency\'s client relationships.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to Month, No Lock-In', desc: 'White-label arrangements can scale with your client volume without forcing you into a long-term commitment before you know what capacity you need.' },
];

const PROCESS = [
  { n: '01', title: 'Partner Discovery Call', desc: 'We review your client base, current SEO offer, fulfillment requirements, and the type of work you need delivered. Then we propose a fulfillment structure that fits your margin targets.' },
  { n: '02', title: 'Partnership Onboarding', desc: 'We gather agency assets, brand requirements, report templates, client information, access, and communication preferences, then assign your dedicated account manager.' },
  { n: '03', title: 'Client Onboarding', desc: 'For each client, we collect the required intake, credentials, existing SEO data, competitor context, priorities, and access so the initial SEO plan can be built correctly.' },
  { n: '04', title: 'Monthly Delivery Cycle', desc: 'Technical work, on-page optimization, content, outreach, local SEO, and other agreed tasks move through the monthly delivery cycle. Your agency receives the work in its required format.' },
  { n: '05', title: 'Account Review', desc: 'Monthly or quarterly reviews cover performance, completed work, upcoming priorities, and the next actions for the account.' },
  { n: '06', title: 'Scale', desc: 'As your client volume grows, the fulfillment structure can expand with it. You can add SEO accounts without immediately building another internal SEO team.' },
];

const FAQS = [
  { q: 'What are white label SEO services?', a: 'White label SEO services are SEO fulfillment services delivered by a specialist provider for another agency to sell under its own brand. The agency keeps the client relationship while the white-label provider handles the agreed SEO work.' },
  { q: 'What is the difference between white label SEO and SEO reseller services?', a: "Both models involve an agency or reseller offering SEO without doing every delivery task in-house. White label SEO emphasizes behind-the-scenes fulfillment under the agency's brand, while reseller arrangements can vary in how much delivery, branding, and client communication the provider handles." },
  { q: 'Can my clients tell that the SEO work is outsourced?', a: "The purpose of a white-label arrangement is to keep the fulfillment behind your agency's brand. Reports, agreed deliverables, and communications can be structured so the client-facing relationship remains with your agency." },
  { q: 'What services are included in white label SEO?', a: 'White label SEO can include technical SEO, on-page optimization, content production, link building, local SEO, AI search and AEO optimization, reporting, and other agreed SEO tasks.' },
  { q: 'Can I keep my clients even if I already have an in-house SEO team?', a: 'Yes. White label support does not require replacing your internal team. It can be used to add specialist capacity, cover workload spikes, provide technical support, or handle services your current team does not offer.' },
  { q: "Can white label SEO improve my agency's margins?", a: 'It can, depending on how you price the service, how efficiently the fulfillment is delivered, and what your internal costs would be. The right comparison is your client revenue against the combined fulfillment, account management, and operating costs.' },
];

/* ── FAQ 2-COL, matches the local-seo page layout ── */
function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="wlseo-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          <div className="wlseo-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>White Label SEO Services</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: '0 0 32px' }}>
              Answering you on fulfillment, communication, pricing, reporting, margins and how the partnership works.
            </p>
            <a href="/appointment" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Book a Partner Discovery Call →
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
          .wlseo-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .wlseo-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function WhiteLabelSEOPage() {
  return (
    <>
      <Navbar />
      <main>

        {/*  01. HERO  */}
        <section className="wlseo-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="wlseo-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  White Label SEO Services Built to Deliver Under{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Your Brand.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 540, marginBottom: 36 }}>
                  We handle <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>technical SEO, on-page optimization, content, link building, local SEO</span>, AI search optimization, and branded reporting so your agency can sell SEO without adding an in-house fulfillment team.
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

              <div className="wlseo-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/banner/white-label-seo.webp" alt="Agency team reviewing SEO reports" style={{ width: '100%', height: 440, objectFit: 'contain', borderRadius: 24, display: 'block' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-user-secret" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-shield-halved" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>100% White Hat</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      (<img loading="lazy" key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />)
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>Trusted by Agencies Nationwide</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>Your Brand, Every Deliverable</span>
                </div>
              </div>

            </div>
          </div>

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
              .wlseo-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .wlseo-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .wlseo-hero { padding: 48px 0 64px !important; }
            }
          `}</style>
        </section>

        {/*  02. PROOF STRIP  */}
        <ReviewsStrip />

        {/*  03. BRIDGE SECTION  */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="bridge-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)', gap: 64, alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(24px,2.8vw,40px)', color: 'var(--color-navy)', lineHeight: 1.2, letterSpacing: '-0.4px', marginBottom: 24 }}>
                  Your Clients Need SEO. You Don&apos;t Need Another In-House Team.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  Building an in-house SEO team means recruiting specialists, managing workloads, reviewing deliverables, and keeping enough capacity to support every client account. For many agencies, that only makes financial sense once SEO demand is consistently high.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  White label SEO services give you another option. Your agency owns{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>the client relationship, strategy communication, and account direction</span>{' '}
                  while our team handles the agreed SEO fulfillment behind the scenes, technical audits, on-page optimization, content production, link building, local SEO, AI search optimization, and monthly reporting, delivered under your brand.
                </p>
                <a href="/appointment"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Book a Partner Discovery Call
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

        {/*  04. WHAT YOUR CLIENTS SEE, AND WHAT STAYS INVISIBLE  */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="wlseo-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="wlseo-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  Your Brand on Every Deliverable. Your Partner Behind the Work.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    In a private label SEO arrangement, your agency owns the client relationship and decides how the work is presented. We operate as{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>the fulfillment team</span>{' '}
                    supporting your account.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Reports, content, technical recommendations, outreach updates, and other agreed deliverables are prepared for your agency&apos;s workflow and branding. Your clients see your agency as the provider.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    For agencies comparing SEO reseller services with in-house delivery, the main difference is who carries the fulfillment workload. With a white-label model, specialist execution happens behind your team while you remain the account owner. Communication stays{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>internal</span>
                    , giving your agency one consistent point of contact while we handle the SEO tasks your account requires.
                  </p>
                </div>
              </div>
              <div className="wlseo-visual-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                {/* Back card, the hidden fulfilment layer */}
                <div style={{ position: 'absolute', width: 190, height: 220, background: '#fff', opacity: 0.55, filter: 'grayscale(1)', borderRadius: 16, border: '1px solid var(--ism-blue-100)', transform: 'rotate(-9deg) translate(-42px,-8px)', boxShadow: '0 10px 26px rgba(0,35,83,.10)', padding: '18px 20px', boxSizing: 'border-box' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <i className="fa-solid fa-eye-slash" style={{ color: 'var(--color-primary)', fontSize: 13 }} />
                  </div>
                  <div style={{ fontFamily: J, fontSize: 11, fontWeight: 800, color: 'var(--color-text-muted)', letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: 10 }}>Isuremedia</div>
                  <div style={{ height: 6, width: '80%', background: 'var(--ism-blue-100)', borderRadius: 3, marginBottom: 7 }} />
                  <div style={{ height: 6, width: '60%', background: 'var(--ism-blue-100)', borderRadius: 3, marginBottom: 7 }} />
                  <div style={{ height: 6, width: '70%', background: 'var(--ism-blue-100)', borderRadius: 3 }} />
                </div>

                {/* Front card, the agency-branded deliverable */}
                <div style={{ position: 'relative', width: 200, height: 230, background: '#fff', borderRadius: 16, boxShadow: '0 22px 46px rgba(0,35,83,.22)', transform: 'rotate(4deg) translate(20px,6px)', padding: '20px 22px', boxSizing: 'border-box' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--ism-amber)' }} />
                    <span style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)' }}>Your Agency</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 60, marginBottom: 14 }}>
                    <div style={{ width: 14, height: '40%', background: 'var(--ism-blue-100)', borderRadius: 3 }} />
                    <div style={{ width: 14, height: '65%', background: 'var(--color-primary)', borderRadius: 3 }} />
                    <div style={{ width: 14, height: '55%', background: 'var(--ism-blue-100)', borderRadius: 3 }} />
                    <div style={{ width: 14, height: '90%', background: 'var(--ism-amber)', borderRadius: 3 }} />
                    <div style={{ width: 14, height: '75%', background: 'var(--color-primary)', borderRadius: 3 }} />
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>Monthly SEO Report</span>
                </div>

                <div className="wlseo-visual-badge" style={{ position: 'absolute', top: 12, right: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-sack-dollar" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Gross Margin</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>40&ndash;60%</div>
                  </div>
                </div>

                <div className="wlseo-visual-badge" style={{ position: 'absolute', bottom: 4, right: 6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-stamp" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Client-Facing</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Your Brand Only</div>
                  </div>
                </div>

                <div className="wlseo-visual-badge" style={{ position: 'absolute', bottom: 20, left: -18, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-headset" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Account Manager</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>One Contact</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .wlseo-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .wlseo-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .wlseo-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .wlseo-visual-badge{ padding:8px 10px !important; gap:7px !important; } .wlseo-visual-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/*  05. WHY THE WHITE-LABEL MODEL WORKS  */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Why the White-Label Model Works for Growing Agencies.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                The white-label SEO model solves three agency growth problems simultaneously, margin, capacity, and expertise, and each one on its own justifies the partnership for most agencies.
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

        {/*  06. THE FULL SEO DELIVERY STACK  */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>The Full White Label SEO Services Stack Your Clients Need</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                One white-label SEO team covering technical SEO, on-page work, content, links, local search, AI search optimization, and reporting.
              </p>
            </div>
            <div className="delivery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {DELIVERY_STACK.map((f, i) => {
                const hl = i === 5;
                return (
                  <div key={f.title} className={hl ? 'delivery-card delivery-card-hl' : 'delivery-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="delivery-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`delivery-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="delivery-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                        <span className="delivery-card-badge" style={{ fontFamily: J, fontSize: 10.5, fontWeight: 700, color: hl ? 'var(--ism-amber)' : 'var(--color-accent-hover)', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'color .25s ease' }}>{f.tag}</span>
                      </div>
                    </div>
                    <p className="delivery-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .delivery-card:not(.delivery-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .delivery-card:not(.delivery-card-hl):hover .delivery-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .delivery-card:not(.delivery-card-hl):hover .delivery-card-icon{ color: #fff !important; }
            .delivery-card:not(.delivery-card-hl):hover .delivery-card-title{ color: #fff !important; }
            .delivery-card:not(.delivery-card-hl):hover .delivery-card-badge{ color: var(--ism-amber) !important; }
            .delivery-card:not(.delivery-card-hl):hover .delivery-card-desc{ color: rgba(255,255,255,.85) !important; }
            .delivery-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .delivery-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/*  07. WHO WHITE-LABEL SEO FULFILMENT IS BUILT FOR  */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>White Label SEO for Agencies at Different Stages</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Add specialist SEO fulfillment where your current team lacks capacity, technical depth, or delivery bandwidth.</p>
            </div>
            <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {WHO_FOR.map(w => (
                <div key={w.title} className="who-card" style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 300, boxShadow: '0 4px 20px rgba(0,35,83,.08)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src={w.img} alt="" className="who-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

        {/*  08. MID-PAGE CTA STRIP  */}
        <section style={{ padding: '56px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div className="mid-cta" style={{ background: 'var(--color-primary)', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
              <div aria-hidden style={{ position: 'absolute', top: '-30%', right: '-5%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', maxWidth: 560 }}>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Find Out What White Label SEO Could Cost Your Agency</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  Book a short partner discovery call to review your client base, fulfillment needs, reporting, and margin structure before you commit to a delivery model.
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

        {/*  09. WHY AGENCIES CHOOSE ISUREMEDIA  */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Agencies Choose Isuremedia for White Label SEO</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Keep your brand in front of the client while a dedicated SEO team handles the work behind it.</p>
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
                  <img loading="lazy" src="/services-mid-image/white-label.webp" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

        {/*  10. HOW THE WHITE-LABEL PARTNERSHIP WORKS  */}
        <section className="wlseo-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                How Our <span style={{ color: 'var(--ism-amber)' }}>White Label SEO Services</span> Work From Onboarding to Scale
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                We keep the process simple: scope the work, onboard the account, deliver under your brand, report, review, and scale.
              </p>
            </div>
            <div className="wlseo-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 28, left: '8%', width: '84%', height: 2, background: 'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex: 0 }} />
              {PROCESS.map((step, i) => (
                <div key={step.n} style={{ textAlign: 'center', padding: '0 12px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: i === 0 ? 'var(--ism-amber)' : 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: `0 4px 18px ${i === 0 ? 'rgba(255,176,0,.40)' : 'rgba(30,77,195,.30)'}`, border: '4px solid #fff' }}>
                    <span style={{ fontFamily: J, fontSize: 18, fontWeight: 900, color: '#fff' }}>{step.n}</span>
                  </div>
                  <div style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 10, lineHeight: 1.3 }}>{step.title}</div>
                  <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <span style={{ display: 'inline-block', fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', background: 'var(--color-bg-soft)', borderRadius: 100, padding: '10px 22px', lineHeight: 1.6 }}>
                Agency onboarding can take roughly two to three business days when the required access and information are ready; initial client intake and setup timelines depend on the account requirements.
              </span>
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
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
            @media (max-width: 1100px) {
              .wlseo-timeline { grid-template-columns: repeat(3,1fr) !important; row-gap: 40px !important; }
            }
            @media (max-width: 700px) {
              .wlseo-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
              .wlseo-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/*  11. RELATED SERVICES  */}
        <section style={{ padding: '96px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(22px,2.4vw,36px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Pair White Label SEO With the Services Your Clients Already Need</h2>
              <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', marginTop: 10 }}>Combine SEO fulfillment with paid media, development, or dedicated delivery support when your clients need a broader service mix.</p>
            </div>
            <div className="wlseo-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {[
                { icon: 'fa-solid fa-chart-bar', title: 'White-Label PPC', desc: 'Google, Meta, and LinkedIn campaign management delivered under your agency brand.', href: '/white-label-ppc-services' },
                { icon: 'fa-solid fa-globe', title: 'White-Label Web Development', desc: "Builds, landing pages, and redesigns delivered behind your agency's client-facing brand.", href: '/white-label-web-design-services' },
                { icon: 'fa-solid fa-users', title: 'Dedicated Agency Pods', desc: "A dedicated delivery team that works around your agency's processes, client volume, and service mix.", href: '/dedicated-agency-pods' },
              ].map((r, i) => (
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
          <style>{`@media(max-width:860px){ .wlseo-related-grid{ grid-template-columns:1fr !important; } }`}</style>
        </section>

        {/*  12. FAQ  */}
        <FAQAccordion />

        {/*  13. ENDING CTA  */}
        <CTASection image="/result_footer/white label.webp" description={<>Keep your agency focused on strategy, sales, and client relationships while our SEO team handles the fulfillment behind your brand, from technical audits and on-page optimization to <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>content, link building, local SEO, AI search optimization</span> and branded reporting.</>} heading="Scale Your SEO Service" headingHighlight="Without Building the Whole Team" primaryLabel="Book a Partner Discovery Call" secondaryLabel="Talk to Our White Label Team" />
      </main>
      <Footer />
    </>
  );
}
