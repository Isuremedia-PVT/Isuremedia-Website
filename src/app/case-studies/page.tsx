'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';


const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const DUMMY_IMG = '/images/casestudy-dummy.png';

/* ── The 6 core services ─────────────────────────────────────────────── */
const SERVICES = [
  { label: 'Websites & Funnels',     icon: 'fa-solid fa-globe',            href: '/services/websites-funnels'     },
  { label: 'SEO',                  icon: 'fa-solid fa-magnifying-glass', href: '/services/seo'                  },
  { label: 'PPC / Paid Ads',       icon: 'fa-solid fa-bars-staggered',   href: '/services/ppc-paid-marketing'   },
  { label: 'Content & Creative',     icon: 'fa-solid fa-palette',          href: '/services/content-creative'     },
  { label: 'White Label',            icon: 'fa-solid fa-tag',              href: '/services/white-label'          },
  { label: 'Marketing Automation',   icon: 'fa-solid fa-robot',            href: '/services/marketing-automation' },
];

interface CaseStudy {
  service: string;
  img: string;
  client: string;
  intro: string;
  quote: string;
  stats: { val: string; label: string; sub: string; icon: string }[];
  body: string;
  link: string;
  linkLabel: string;
}

const CASES: CaseStudy[] = [
  {
    service: 'Websites & Funnels',
    img: DUMMY_IMG,
    client: 'Mi Amor',
    intro: 'A slow, outdated website was quietly costing them customers every single day.',
    quote: 'The new funnel our team built converts almost twice as well as our old site ever did.',
    stats: [
      { val: '+112%', label: 'Conversion Rate', sub: 'after relaunch',  icon: 'fa-solid fa-bolt' },
      { val: '-38%',  label: 'Bounce Rate',      sub: 'first 90 days',  icon: 'fa-solid fa-arrow-trend-down' },
    ],
    body: 'Mi Amor came to us with a slow, outdated site that visitors were bouncing from within seconds. We rebuilt the entire funnel — faster load times, a clearer offer, and a streamlined checkout — and conversions nearly doubled within the first quarter.',
    link: '/case-studies/website-relaunch-conversion-rate',
    linkLabel: "Read Mi Amor's Case Study",
  },
  {
    service: 'Websites & Funnels',
    img: DUMMY_IMG,
    client: 'Meridian Wealth Partners',
    intro: 'A brochure-style site was generating almost no qualified consultation requests.',
    quote: 'We finally have a website that brings in the right kind of client instead of just looking nice.',
    stats: [
      { val: '+186%', label: 'Consultation Requests', sub: 'in 90 days',   icon: 'fa-solid fa-calendar-check' },
      { val: '-44%',  label: 'Cost Per Lead',          sub: 'same ad spend', icon: 'fa-solid fa-arrow-trend-down' },
    ],
    body: "Meridian's old site described the firm well but gave visitors no clear next step. We rebuilt it around a single lead-gen funnel — a clear offer, a short qualification form, and an automated booking flow — and consultation requests nearly tripled.",
    link: '/case-studies/lead-gen-website-funnel',
    linkLabel: "Read Meridian's Case Study",
  },
  {
    service: 'SEO & Organic Growth',
    img: DUMMY_IMG,
    client: 'Qualis Roofing',
    intro: 'Local visibility had been flat for months despite steady content and ad spend.',
    quote: 'Since we started working with ISM, our SEO return on investment is in the 800% range.',
    stats: [
      { val: '+427%', label: 'Top 10 Organic Keywords', sub: 'year over year', icon: 'fa-solid fa-chart-line' },
      { val: '+68%',  label: 'Organic Conversions',     sub: 'in 6 months',    icon: 'fa-solid fa-users'      },
    ],
    body: 'Qualis partnered with ISM to improve local visibility throughout the Dallas–Fort Worth area. By optimising location and service pages and publishing targeted blog posts around high-potential keywords, the campaign delivered a +427% increase in top 10 organic keywords year over year and a +68% boost in organic conversions.',
    link: '/case-studies/ecommerce-seo-organic-traffic',
    linkLabel: "Read Qualis Roofing's Case Study",
  },
  {
    service: 'SEO & Organic Growth',
    img: DUMMY_IMG,
    client: 'Coastal Supply Co.',
    intro: 'Product pages were invisible on Google despite genuinely strong products.',
    quote: 'Organic is now our single biggest source of new customers, and it keeps compounding.',
    stats: [
      { val: '+312%', label: 'Organic Revenue', sub: 'year over year', icon: 'fa-solid fa-dollar-sign' },
      { val: '9→2',   label: 'Avg Ranking Position', sub: 'top category terms', icon: 'fa-solid fa-arrow-up-right-dots' },
    ],
    body: "Coastal Supply's product pages were thin and rarely ranked past page two. We rebuilt product and category content around real buyer search intent and built a supporting content cluster, and organic revenue grew 312% year over year.",
    link: '/case-studies/dtc-ecommerce-seo-content',
    linkLabel: "Read Coastal Supply's Case Study",
  },
  {
    service: 'PPC / Paid Marketing',
    img: DUMMY_IMG,
    client: 'TruckAC+',
    intro: 'Paid media was live everywhere, but none of it was tied into one funnel.',
    quote: 'ISM is handling business the way they said they would in the beginning.',
    stats: [
      { val: '+$350K', label: 'Ad Revenue',        sub: 'ROAS optimised', icon: 'fa-solid fa-dollar-sign'   },
      { val: '+1,092', label: 'Website Purchases', sub: 'in 6 months',    icon: 'fa-solid fa-cart-shopping' },
    ],
    body: "ISM rebuilt TruckAC+'s paid media strategy across social, PPC and programmatic channels. The full-funnel approach generated a 23X return on ad spend, +$350K in ad revenue and +1,000 purchases in six months, exceeding performance benchmarks and seasonal goals.",
    link: '/case-studies/saas-linkedin-ads-cost-per-demo',
    linkLabel: "Read TruckAC+'s Case Study",
  },
  {
    service: 'PPC / Paid Marketing',
    img: DUMMY_IMG,
    client: 'BrightPath Dental',
    intro: 'Google Ads were generating clicks, but most calls were the wrong kind of patient.',
    quote: 'Our front desk stopped dreading the phone — the leads coming in now are the right fit.',
    stats: [
      { val: '-52%', label: 'Cost Per Qualified Lead', sub: 'in 60 days', icon: 'fa-solid fa-arrow-trend-down' },
      { val: '+96%', label: 'Booked Appointments', sub: 'from ad traffic', icon: 'fa-solid fa-calendar-check' },
    ],
    body: "BrightPath's ads were bringing in volume, but targeting and vague copy meant most calls fell through. We rebuilt targeting around high-value procedures and matched every ad to a dedicated landing page, cutting cost per qualified lead by more than half.",
    link: '/case-studies/local-business-google-ads-cpl',
    linkLabel: "Read BrightPath's Case Study",
  },
  {
    service: 'Content & Creative',
    img: DUMMY_IMG,
    client: 'Bloom & Bright Co.',
    intro: 'Content was still going out every week, but engagement had been sliding for months.',
    quote: 'Every piece of content actually sounds like us now, not like generic marketing copy.',
    stats: [
      { val: '+3.4x', label: 'Blog Organic Traffic', sub: 'in 5 months',           icon: 'fa-solid fa-pen-nib' },
      { val: '+61%',  label: 'Social Engagement',    sub: 'quarter over quarter',  icon: 'fa-solid fa-heart'   },
    ],
    body: "Bloom & Bright's blog and social content had gone stale, and engagement was sliding. We rebuilt their content calendar around real buyer questions and refreshed their brand voice — a 3.4x lift in blog traffic and a 61% jump in social engagement followed in under six months.",
    link: '/case-studies/content-marketing-blog-traffic',
    linkLabel: "Read Bloom & Bright's Case Study",
  },
  {
    service: 'Content & Creative',
    img: DUMMY_IMG,
    client: 'Fern & Oak Interiors',
    intro: 'Product photography and ad creative looked homemade next to bigger competitors.',
    quote: 'Our ads finally look like the premium brand we actually are.',
    stats: [
      { val: '+2.6x', label: 'Ad Click-Through Rate', sub: 'after creative refresh', icon: 'fa-solid fa-images' },
      { val: '-31%',  label: 'Cost Per Purchase',      sub: 'same ad spend',        icon: 'fa-solid fa-arrow-trend-down' },
    ],
    body: "Fern & Oak's product shots and ad creative were inconsistent and did not match the quality of the products themselves. We rebuilt their entire visual library — photography, ad templates, and social graphics — and click-through rate more than doubled.",
    link: '/case-studies/ecommerce-creative-refresh',
    linkLabel: "Read Fern & Oak's Case Study",
  },
  {
    service: 'White Label',
    img: DUMMY_IMG,
    client: 'Northline Digital',
    intro: 'Capped at 12 clients with a full team and no room left to grow.',
    quote: 'ISM became our invisible delivery team — our clients have no idea the work is outsourced.',
    stats: [
      { val: '12→31', label: 'Active Client Accounts', sub: 'in 8 months',        icon: 'fa-solid fa-layer-group' },
      { val: '0',     label: 'Missed Deadlines',        sub: 'since day one',     icon: 'fa-regular fa-clock'     },
    ],
    body: 'Northline Digital was capped at 12 clients with a full internal team. ISM became their white label delivery engine for SEO and PPC, letting them scale to 31 active accounts in eight months without hiring a single extra person.',
    link: '/case-studies/white-label-agency-scaling',
    linkLabel: "Read Northline Digital's Case Study",
  },
  {
    service: 'White Label',
    img: DUMMY_IMG,
    client: 'Summit Growth Partners',
    intro: 'Won a run of larger web design projects with nowhere near enough dev capacity.',
    quote: 'ISM lets us say yes to projects we would have had to turn down six months ago.',
    stats: [
      { val: '+140%', label: 'Web Project Capacity', sub: 'no new hires', icon: 'fa-solid fa-layer-group' },
      { val: '100%',  label: 'On-Time Delivery',      sub: 'across all projects', icon: 'fa-regular fa-clock' },
    ],
    body: 'Summit Growth Partners was winning larger web design retainers than their small dev team could deliver on time. ISM became their white-label development team, taking projects from design handoff to launch under the Summit brand.',
    link: '/case-studies/white-label-web-development-capacity',
    linkLabel: "Read Summit Growth's Case Study",
  },
  {
    service: 'Marketing Automation',
    img: DUMMY_IMG,
    client: 'Apex HVAC Services',
    intro: 'Every missed call was a missed job, and follow-up was taking hours.',
    quote: 'We tripled our booked jobs without spending a single extra dollar on ads.',
    stats: [
      { val: '+340%',   label: 'Booked Jobs',       sub: 'in 90 days',    icon: 'fa-solid fa-screwdriver-wrench' },
      { val: '<90 sec', label: 'Avg Lead Response', sub: 'down from 3hr', icon: 'fa-solid fa-stopwatch'          },
    ],
    body: 'Apex was spending steadily on Google Ads but converting poorly because follow-up was taking hours. We rebuilt their entire lead response system with automated routing and instant follow-up — same ad budget, triple the booked jobs.',
    link: '/case-studies/hvac-gohighlevel-automation',
    linkLabel: "Read Apex HVAC's Case Study",
  },
  {
    service: 'Marketing Automation',
    img: DUMMY_IMG,
    client: 'Bloom Aesthetics',
    intro: 'A med spa was losing a quarter of its booked appointments to no-shows every month.',
    quote: 'Rebooking used to be a full-time job. Now it just happens on its own.',
    stats: [
      { val: '-61%', label: 'No-Show Rate',       sub: 'in 90 days',     icon: 'fa-solid fa-calendar-check' },
      { val: '+74%', label: 'Rebooking Rate',     sub: 'post-treatment', icon: 'fa-solid fa-rotate' },
    ],
    body: 'Bloom Aesthetics had no reminder or rebooking system beyond staff memory. ISM built an automated appointment reminder and post-treatment rebooking sequence in GoHighLevel, cutting no-shows by 61% and driving a 74% rebooking rate.',
    link: '/case-studies/med-spa-booking-automation',
    linkLabel: "Read Bloom Aesthetics' Case Study",
  },
];

/* ── Card (matches the homepage ClientResults card design) ───────────── */
function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 28px rgba(0,35,83,.10)', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: 18, padding: '24px 24px 26px' }}>

      {/* Header row: heading left, thumbnail right */}
      <div className="cs-header" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,3fr) minmax(0,7fr)', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ minWidth: 0 }}>
          <span style={{ display: 'inline-block', fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-primary)', background: 'rgba(30,77,195,.09)', borderRadius: 6, padding: '3px 10px', marginBottom: 10 }}>{c.service}</span>
          <h3 style={{ fontFamily: J, fontSize: 'clamp(20px,2.2vw,26px)', fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1.18, marginBottom: 12 }}>{c.client}</h3>

          {/* Short intro paragraph */}
          <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{c.intro}</p>
        </div>

        {/* Thumbnail — pre-designed dummy image (border/shape already baked in) */}
        <div className="cs-thumb" style={{ position: 'relative', width: '100%', height: 260 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.img} alt={c.client}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </div>
      </div>

      {/* Quote — full width */}
      <div style={{ background: '#FFF7E8', borderRadius: 12, padding: '18px 20px' }}>
        <i className="fa-solid fa-quote-left" style={{ color: 'var(--ism-amber)', fontSize: 18, display: 'block', marginBottom: 6 }} />
        <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-navy)', lineHeight: 1.65, margin: 0 }}>
          {c.quote} <span style={{ color: 'var(--ism-amber)', fontWeight: 700 }}>– {c.client}</span>
        </p>
      </div>

      {/* Stats */}
      <div className="cs-stats" style={{ display: 'flex', alignItems: 'center', background: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', borderRadius: 14, padding: '18px 20px' }}>
        {c.stats.map((s, j) => (
          <div key={j} className="cs-stat" style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, paddingLeft: j > 0 ? 20 : 0, marginLeft: j > 0 ? 20 : 0, borderLeft: j > 0 ? '1px solid var(--color-border)' : 'none' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <i className={s.icon} style={{ color: '#fff', fontSize: 16 }} />
            </div>
            <div>
              <div style={{ fontFamily: J, fontSize: 'clamp(17px,2vw,22px)', fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1.1, letterSpacing: '-0.4px' }}>{s.val}</div>
              <div style={{ fontFamily: I, fontSize: 11.5, fontWeight: 600, color: 'var(--color-navy)', lineHeight: 1.35, marginTop: 3 }}>{s.label}</div>
              <div style={{ fontFamily: I, fontSize: 10.5, color: 'var(--color-text-muted)', marginTop: 1 }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Body + link */}
      <div>
        <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.78, margin: '0 0 14px' }}>{c.body}</p>
        <a href={c.link}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none', transition: 'gap .15s' }}
          onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline'; (e.currentTarget as HTMLAnchorElement).style.gap = '10px'; }}
          onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none'; (e.currentTarget as HTMLAnchorElement).style.gap = '6px'; }}
        >
          {c.linkLabel} <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
        </a>
      </div>

    </div>
  );
}

/* ══ PAGE ═════════════════════════════════════════════════════════════════ */
export default function CaseStudiesPage() {
  const [activeSvc, setActiveSvc] = useState('All');

  const filtered = useMemo(
    () => activeSvc === 'All' ? CASES : CASES.filter(c => c.service === activeSvc),
    [activeSvc]
  );

  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. BANNER ══════════════════════════════════════════════════ */}
        <section className="cs-hero-section" style={{ background: 'var(--color-bg-soft)', padding: '96px 0 110px', position: 'relative', overflow: 'hidden' }}>
          <div className="ism-container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="cs-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* LEFT */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, marginBottom: 20 }}>
                  Real Campaigns. <span style={{ color: 'var(--color-primary)' }}>Documented Results.</span>
                </h1>
                <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 36, maxWidth: 520 }}>
                  Filter by service to see a real result from that exact type of engagement.
                </p>
                <div className="cs-hero-btns" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Book a Free Strategy Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </a>
                </div>
              </div>

              {/* RIGHT — image */}
              <div className="cs-hero-img-wrap" style={{ position: 'relative' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,35,83,.16)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
                    alt="Isuremedia campaign results"
                    style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
                    className="cs-hero-img"
                  />
                </div>
                <div className="cs-float-badge" style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', borderRadius: 14, padding: '16px 22px', boxShadow: '0 12px 32px rgba(0,35,83,.14)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-chart-line" style={{ color: 'var(--color-primary)', fontSize: 17 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 20, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>+360%</div>
                    <div style={{ fontFamily: I, fontSize: 11.5, color: 'var(--color-text-muted)' }}>Organic Traffic</div>
                  </div>
                </div>
              </div>

            </div>


          </div>

          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 70, zIndex: 1, pointerEvents: 'none' }}>
            <path d="M0,50 C360,110 1080,-10 1440,50 L1440,100 L0,100 Z" fill="#fff" />
          </svg>
          <style>{`
            @media(max-width:900px){.cs-hero-section{padding:56px 0 100px !important;} .cs-hero-grid{grid-template-columns:1fr!important; gap:32px!important;} .cs-hero-img{height:280px!important;}}
            @media(max-width:540px){.cs-hero-section{padding:40px 0 110px !important;} .cs-hero-section svg{height:38px!important;} .cs-hero-btns{flex-direction:column!important; align-items:stretch!important; gap:12px!important;} .cs-hero-btns a{width:100%!important; text-align:center!important; justify-content:center!important; box-sizing:border-box!important;} .cs-hero-img{height:200px!important;} .cs-float-badge{bottom:12px!important;left:12px!important;padding:12px 16px!important;}}
          `}</style>
        </section>

        {/* ══ 2. FILTER ══════════════════════════════════════════════════ */}
        <section style={{ background: '#fff', padding: '56px 0 8px' }}>
          <div className="ism-container">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  background: '#FFFFFF',
                  padding: '6px 8px',
                  borderRadius: 14,
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {[{ label: 'All', icon: 'fa-solid fa-border-all' }, ...SERVICES].map((svc) => {
                  const isActive = activeSvc === svc.label;
                  return (
                    <button
                      key={svc.label}
                      onClick={() => setActiveSvc(svc.label)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        fontFamily: J,
                        fontSize: 14,
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#FFFFFF' : '#374151',
                        background: isActive ? 'linear-gradient(135deg, #1E4DC3 0%, #2563EB 100%)' : 'transparent',
                        border: '1px solid transparent',
                        borderRadius: 10,
                        padding: '10px 20px',
                        cursor: 'pointer',
                        letterSpacing: '.01em',
                        transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: isActive ? '0 6px 20px rgba(37, 99, 235, 0.30), 0 2px 6px rgba(0,0,0,0.08)' : 'none',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#1E3A8A';
                          e.currentTarget.style.background = '#F1F5F9';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#374151';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <i className={svc.icon} style={{ fontSize: 13, opacity: isActive ? 1 : 0.6 }} />
                      <span>{svc.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <style>{`
              @media (max-width: 640px) {
                .cs-filter-tabs-wrap > div { padding: 5px 6px; gap: 3px; }
                .cs-filter-tabs-wrap button { padding: 9px 14px !important; font-size: 12px !important; }
              }
            `}</style>
          </div>
        </section>

        {/* ══ 3. CASE STUDY CARDS GRID ═════════════════════════════════════ */}
        <section style={{ background: '#fff', padding: '48px 0 100px' }}>
          <div className="ism-container">
            <div className="cs-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 28 }}>
              {filtered.map(c => <CaseCard key={c.client} c={c} />)}
            </div>
          </div>
        </section>

        {/* ══ 4. BOTTOM CTA ════════════════════════════════════════════════ */}
        <CTASection />

      </main>
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          .cs-hero-section { padding: 64px 0 !important; }
        }
        @media (max-width: 1024px) {
          .cs-header { grid-template-columns: minmax(0,1fr) !important; }
          .cs-thumb  { height: 220px !important; }
          .cs-stats  { flex-direction: column !important; align-items: stretch !important; gap: 14px !important; }
          .cs-stat   { padding-left: 0 !important; margin-left: 0 !important; border-left: none !important; }
        }
        @media (max-width: 760px) {
          .cs-grid { grid-template-columns: minmax(0,1fr) !important; }
        }
        @media (max-width: 480px) {
          .cs-thumb { height: 140px !important; }
          .cs-hero-section { padding: 48px 0 72px !important; }
        }
        @media (max-width: 640px) {
          .cs-filter-row { flex-wrap: nowrap !important; justify-content: flex-start !important; overflow-x: auto !important; -webkit-overflow-scrolling: touch; padding-bottom: 6px; margin: 0 -20px; padding-left: 20px; padding-right: 20px; }
          .cs-filter-row::-webkit-scrollbar { display: none; }
          .cs-filter-btn { flex-shrink: 0; white-space: nowrap; }
        }
      `}</style>
    </>
  );
}
