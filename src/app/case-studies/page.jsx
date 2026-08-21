'use client';
import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';


const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── Services represented by a live case study ───────────────────────── */
const SERVICES = [
  { label: 'Websites & Funnels',     icon: 'fa-solid fa-globe',            href: '/services/websites-funnels'     },
  { label: 'SEO',                    icon: 'fa-solid fa-magnifying-glass', href: '/services/seo'                  },
  { label: 'PPC / Paid Ads',         icon: 'fa-solid fa-bars-staggered',   href: '/services/ppc-paid-marketing'   },
  { label: 'Content & Creative',     icon: 'fa-solid fa-palette',          href: '/services/content-creative'     },
  { label: 'Marketing Automation',   icon: 'fa-solid fa-robot',            href: '/services/marketing-automation' },
  { label: 'White-Label',            icon: 'fa-solid fa-handshake',        href: '/services/white-label'          },
];

const CASES = [
  {
    service: 'Websites & Funnels',
    img: '/casestudy/airtopia-card.webp',
    client: 'Airtopia',
    intro: 'Every ROLLER venue was doing this by hand. Now none of them have to.',
    quote: 'Isuremedia built exactly what we needed and did it properly.',
    stats: [
      { val: '80-90%', label: 'Less Manual Data Work', sub: 'post-deployment', icon: 'fa-solid fa-arrow-trend-down' },
      { val: '130+',   label: 'Engineering Hours',      sub: 'delivered in 3 weeks', icon: 'fa-solid fa-code' },
    ],
    body: 'Airtopia ran ROLLER for venue operations and GoHighLevel for customer marketing, with no connection between them and staff bridging the gap by hand every week. We built a production-grade, multi-tenant integration platform that syncs every booking, membership, and waiver to GoHighLevel in real time, with new venues onboarding through an admin panel and zero engineering work.',
    link: '/case-studies/roller-gohighlevel-venue-integration',
    linkLabel: "Read Airtopia's Case Study",
  },
  {
    service: 'Websites & Funnels',
    img: '/casestudy/webbb-card.webp',
    client: 'Isuremedia, AdOS Platform',
    intro: 'Managing 100+ campaigns across 20–25 Meta ad accounts manually was consuming 20 hours a week.',
    quote: 'A single developer delivered a full-stack AI platform in about a month, cutting manual campaign management time by 60-75%.',
    stats: [
      { val: '60-75%', label: 'Less Manual Effort', sub: 'down from 20 hrs/week',      icon: 'fa-solid fa-clock' },
      { val: '<60 sec', label: 'Full Account Analysis', sub: 'via AI, was hours manually', icon: 'fa-solid fa-robot' },
    ],
    body: 'Isuremedia manages 20-25 Meta ad accounts and 100+ campaigns, and manual monitoring was consuming 20 hours a week. We built AdOS, an internal AI-powered advertising platform integrating the Meta Graph API with Claude and GPT-4o, cutting manual effort by 60-75% and running full account analysis in under a minute.',
    link: '/case-studies/ados-internal-ai-advertising-platform',
    linkLabel: "Read the AdOS Case Study",
  },
  {
    service: 'SEO',
    img: '/casestudy/garden-card.webp',
    client: 'Garden Solution Landscapes',
    intro: 'A great reputation and an active Google Business Profile, but almost no organic traffic.',
    quote: 'What Isuremedia built is a website and profile that finally reflect our reputation, and it shows up in the numbers every month.',
    stats: [
      { val: '800%', label: 'Organic Traffic Growth', sub: 'in 4 months', icon: 'fa-solid fa-chart-line' },
      { val: '348',  label: 'Quality Backlinks',      sub: 'up from 54',  icon: 'fa-solid fa-link'      },
    ],
    body: 'Garden Solution Landscapes came to Isuremedia with a strong local reputation the website was not converting into traffic. We rebuilt the technical foundation, recovered from a mid-campaign hosting migration, and built out local SEO, link building, and AEO in parallel, delivering 800% organic traffic growth, a top map pack position, and live Google AI Overview citations within four months.',
    link: '/case-studies/ecommerce-seo-organic-traffic',
    linkLabel: "Read Garden Solution Landscapes's Case Study",
  },
  {
    service: 'SEO',
    img: '/casestudy/broenlegalimmigration-card.webp',
    client: 'Brown Legal Immigration',
    intro: '100% of search traffic came from the map pack. The website was invisible.',
    quote: 'Isuremedia got us cited by name in the AI answers our clients are actually searching.',
    stats: [
      { val: '86%', label: 'Keywords on Page 1', sub: '12 of 14 tracked', icon: 'fa-solid fa-magnifying-glass-chart' },
      { val: '3',   label: 'AI Platforms Ranking', sub: 'Google, ChatGPT, Perplexity', icon: 'fa-solid fa-robot' },
    ],
    body: 'Brown Legal Immigration had strong local visibility through their Google Business Profile, but the website carried zero organic search presence. We built SEO and AEO in parallel, new practice-area content, technical fixes, and off-page authority, taking 86% of tracked keywords to page one and earning citations across Google AI Overview, ChatGPT, and Perplexity within three months.',
    link: '/case-studies/law-firm-local-seo-map-pack',
    linkLabel: "Read Brown Legal Immigration's Case Study",
  },
  {
    service: 'Marketing Automation',
    img: '/casestudy/mentrahealth-card.webp',
    client: 'Mentara Health',
    intro: 'Exam content was managed with no clear hierarchy, no way to organise by certification type, section, or case scenario.',
    quote: 'A five-level content hierarchy now mirrors exactly how healthcare professionals are trained and assessed.',
    stats: [
      { val: '5-Level', label: 'Content Hierarchy', sub: 'category to question', icon: 'fa-solid fa-sitemap' },
      { val: 'Clone-Enabled', label: 'Every Level', sub: 'exam, section & question', icon: 'fa-solid fa-clone' },
    ],
    body: 'Mentara Health needed a structured way to manage exam content for a healthcare certification platform, organised by category, exam, section, case study, and question, with support for real-world scenario-based assessment. We built a fully structured five-level content hierarchy with clone functionality at every level and progressive, case-based assessments.',
    link: '/case-studies/healthcare-exam-platform-development',
    linkLabel: "Read Mentara Health's Case Study",
  },
  {
    service: 'Marketing Automation',
    img: '/casestudy/hijrah-card.webp',
    client: 'Hijrah Walks Expeditions',
    intro: 'Group size changes the price, but GoHighLevel checkout links can\'t do that natively.',
    quote: 'What used to take our team hours each week now runs itself. Every applicant gets exactly the right checkout experience from the moment they register.',
    stats: [
      { val: '12×', label: 'Monthly Expeditions', sub: 'managed automatically', icon: 'fa-solid fa-route' },
      { val: '0',   label: 'Manual Invoices',      sub: 'sent by the team',     icon: 'fa-solid fa-file-invoice-dollar' },
    ],
    body: 'Hijrah Walks runs 12 monthly group expeditions with per-head group pricing and event-relative instalment billing, neither supported natively by GoHighLevel. We built a custom dynamic pricing engine and event-relative instalment workflows spanning the full yearly calendar, eliminating manual pricing and payment tracking entirely.',
    link: '/case-studies/travel-agency-payment-automation',
    linkLabel: "Read Hijrah Walks's Case Study",
  },
  {
    service: 'PPC / Paid Ads',
    img: '/casestudy/scrub-card.webp',
    client: 'Scrubs4U',
    intro: 'Purchases were inconsistent and rising acquisition costs made it hard to scale profitably.',
    quote: 'A 7.9% increase in ad spend delivered a 173.6% increase in revenue and 154% higher ROAS.',
    stats: [
      { val: '3.54x',   label: 'All-Time ROAS',     sub: 'across full engagement', icon: 'fa-solid fa-chart-line' },
      { val: '+173.6%', label: 'Revenue Growth',    sub: 'same 30-day window YoY', icon: 'fa-solid fa-dollar-sign' },
    ],
    body: 'Scrubs4U was already running Meta Ads, but creative fatigue and rising acquisition costs made it difficult to scale profitably. We rebuilt the account around continuous campaign, creative, and audience optimization, growing revenue 173.6% and ROAS 154% with only a 7.9% increase in spend.',
    link: '/case-studies/ecommerce-meta-ads-roas-scaling',
    linkLabel: "Read Scrubs4U's Case Study",
  },
  {
    service: 'PPC / Paid Ads',
    img: '/casestudy/globalallianzadss-card.webp',
    client: 'Global Allianz',
    intro: 'Lead volume was inconsistent and Cost Per Lead was too high to scale profitably.',
    quote: 'With only a 33% increase in ad spend, lead volume grew 1,309% while Cost Per Lead dropped over 90%.',
    stats: [
      { val: '+1,309%', label: 'Lead Volume Growth', sub: '22 → 310 leads',    icon: 'fa-solid fa-users' },
      { val: '−90.5%',  label: 'Cost Per Lead',      sub: '$72.99 → $6.91',   icon: 'fa-solid fa-arrow-trend-down' },
    ],
    body: 'Global Allianz was already generating immigration leads through Meta Ads, but high cost per lead and inconsistent volume limited how far the firm could scale. We rebuilt the account around Spanish-language, trust-building creative and refined targeting, growing lead volume 1,309% while cutting Cost Per Lead by over 90%.',
    link: '/case-studies/immigration-meta-ads-lead-generation',
    linkLabel: "Read Global Allianz's Case Study",
  },
  {
    service: 'Content & Creative',
    img: '/casestudy/danielgolshsnimd-card.webp',
    client: 'Dr. Daniel Golshani, M.D., F.A.C.S.',
    intro: 'A brand-new Instagram account with no followers, no content system, and no defined voice.',
    quote: 'From a blank profile to 800+ engaged, targeted followers in 7 months, built entirely from a repeatable content system.',
    stats: [
      { val: '0 → 800+', label: 'Followers',       sub: 'in 7 months',                    icon: 'fa-solid fa-users' },
      { val: '1',        label: 'Podcast Recording', sub: 'became weeks of content',       icon: 'fa-solid fa-video' },
    ],
    body: 'Dr. Golshani, a Beverly Hills plastic and reconstructive surgeon, was starting an Instagram presence from zero in a high-stakes, high-trust niche. We built a repeatable content engine that turned a single podcast recording into weeks of accuracy-first, client-approved content, growing the account from 0 to 800+ engaged followers in 7 months.',
    link: '/case-studies/plastic-surgeon-instagram-brand-growth',
    linkLabel: "Read Dr. Golshani's Case Study",
  },
  {
    service: 'Content & Creative',
    img: '/casestudy/garnus-card.webp',
    client: 'Garnus India',
    intro: 'A brand-new Instagram presence with no followers, no content system, and no established voice.',
    quote: 'From a blank page to 447 followers and 50-60k+ organic views in 6 months, fully organic.',
    stats: [
      { val: '0 → 447', label: 'Followers',      sub: 'fully organic, in 6 months', icon: 'fa-solid fa-users' },
      { val: '50-60k+', label: 'Organic Views',  sub: 'across the period',          icon: 'fa-solid fa-eye' },
    ],
    body: 'Garnus India launched a natural wooden essentials brand into a crowded home-and-lifestyle category with zero existing audience. We built a personality-led content system and influencer strategy, growing the account from 0 to 447 followers and 50-60k+ organic views in 6 months, entirely organic.',
    link: '/case-studies/ecommerce-instagram-organic-growth-garnus',
    linkLabel: "Read Garnus India's Case Study",
  },
  {
    service: 'White-Label',
    img: '/casestudy/innovet-card.webp',
    client: 'Innovat3 Solutions',
    intro: 'One GoHighLevel agency account, run mostly by hand.',
    quote: 'Isuremedia functions as our embedded build team, and that consistency is what let us keep signing clients.',
    stats: [
      { val: '1 → 3', label: 'Agencies Managed', sub: 'from a single account', icon: 'fa-solid fa-building' },
      { val: '100+',  label: 'Websites Built',    sub: 'and still shipping',   icon: 'fa-solid fa-globe' },
    ],
    body: 'Innovat3 Solutions needed a white-label technical partner who could build and manage GoHighLevel infrastructure at the pace their sales team was signing clients across 25+ niches. We became their embedded build team, covering websites, custom integrations, sub-account setup, automation, and voice AI, scaling from one agency account to 3 agencies and 20+ live sub-accounts.',
    link: '/case-studies/innovat3-multi-agency-ghl-scaling',
    linkLabel: "Read Innovat3 Solutions's Case Study",
  },
  {
    service: 'White-Label',
    img: '/casestudy/signature-pools-card.webp',
    client: 'Signature Pools',
    intro: 'Facebook leads were reaching GoHighLevel. Nothing structured happened after that.',
    quote: 'The pipeline finally reflects how we actually sell, and management can see exactly where every lead stands.',
    stats: [
      { val: '15',     label: 'Pipeline Stages',  sub: 'built in one week',        icon: 'fa-solid fa-sitemap' },
      { val: '0',      label: 'Manual Handoffs',  sub: 'lead transfer now automatic', icon: 'fa-solid fa-arrow-right-arrow-left' },
    ],
    body: 'Signature Pools had leads flowing into GoHighLevel with no structured pipeline, no automated notifications, and no reporting outside the CRM. We redesigned the sales pipeline, built automated notifications and a one-click lead transfer process, and synced everything to a live Google Sheets report through Make, delivered in a single week.',
    link: '/case-studies/signature-pools-lead-management-automation',
    linkLabel: "Read Signature Pools's Case Study",
  },
];

/* ── Card (matches the homepage ClientResults card design) ───────────── */
function CaseCard({
  c
}) {
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

        {/* Thumbnail, matches this case study's own hero image */}
        <div className="cs-thumb" style={{ position: 'relative', width: '100%', height: 260, borderRadius: 14, overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" src={c.img} alt={c.client}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        </div>
      </div>

      {/* Quote, full width */}
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
          onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline'; (e.currentTarget).style.gap = '10px'; }}
          onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none'; (e.currentTarget).style.gap = '6px'; }}
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
                  <a href="/appointment" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Book a Free Strategy Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </a>
                </div>
              </div>

              {/* RIGHT, image */}
              <div className="cs-hero-img-wrap" style={{ position: 'relative' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/banner/casr study.webp"
                    alt="Isuremedia campaign results"
                    style={{ width: '100%', height: 420, objectFit: 'contain', display: 'block' }}
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
            <h2 style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>Case Studies</h2>
            <div className="cs-filter-tabs-outer" style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                className="cs-filter-tabs-wrap"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  background: '#FFFFFF',
                  padding: '6px 8px',
                  borderRadius: 14,
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
                  flexWrap: 'nowrap',
                  justifyContent: 'center',
                  maxWidth: '100%',
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
              @media (max-width: 900px) {
                .cs-filter-tabs-outer { justify-content: flex-start !important; overflow: hidden; }
                .cs-filter-tabs-wrap {
                  flex-wrap: nowrap !important;
                  overflow-x: auto !important;
                  -webkit-overflow-scrolling: touch;
                  justify-content: flex-start !important;
                  scrollbar-width: none;
                }
                .cs-filter-tabs-wrap::-webkit-scrollbar { display: none; }
              }
              @media (max-width: 640px) {
                .cs-filter-tabs-wrap { padding: 5px 6px; gap: 3px; }
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
          .cs-thumb { height: 160px !important; }
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
