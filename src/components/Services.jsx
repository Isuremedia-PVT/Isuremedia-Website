'use client';

import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const tabs = [
  {
    id: 'web', label: 'Websites & Funnels', icon: 'fa-solid fa-globe',
    img: '/services/website-and-funnels.webp',
    href: '/services/websites-funnels',
    title: 'Websites & Funnels Built to Convert',
    desc: 'We design and build websites, landing pages, and sales funnels that turn visitors into leads and customers. Every project is built around one goal: more conversions from the traffic you already have.',
    stat: '3x', statLabel: 'Higher Conversion Rate',
    cta: 'Explore Web & Funnel Services',
    highlights: ['Conversion-first design on every project', 'GoHighLevel funnels & CRM setup included', 'WordPress, Shopify & Webflow specialists'],
    subServices: [
      { name: 'Business Websites', href: '/services/websites-funnels' },
      { name: 'Landing Pages', href: '/services/websites-funnels/landing-pages' },
      { name: 'Sales Funnels', href: '/services/websites-funnels' },
      { name: 'GoHighLevel Funnels & Automation', href: '/services/websites-funnels/gohighlevel-funnels' },
      { name: 'WordPress Website Design', href: '/services/websites-funnels' },
      { name: 'Shopify Website Design', href: '/services/websites-funnels' },
      { name: 'E-commerce Website Design', href: '/services/websites-funnels' },
      { name: 'Website Redesign', href: '/services/websites-funnels' },
      { name: 'Conversion Rate Optimization (CRO)', href: '/services/websites-funnels' },
      { name: 'Webflow Development', href: '/services/websites-funnels' },
      { name: 'AI-Powered Website Personalization', href: '/services/websites-funnels' },
      { name: 'Website Maintenance & Support', href: '/services/websites-funnels' },
    ],
  },
  {
    id: 'seo', label: 'SEO', icon: 'fa-solid fa-magnifying-glass',
    img: '/services/seo.webp',
    href: '/services/seo',
    title: 'SEO Built for Long-Term Growth',
    desc: 'We build an organic traffic engine that compounds over time — blending technical SEO, content strategy, and authority link building to rank for high-intent keywords month after month.',
    stat: '225%', statLabel: 'Avg. Traffic Growth',
    cta: 'Explore Our SEO Services',
    highlights: ['Local, national & e-commerce SEO covered', 'AI SEO & Answer Engine Optimization ready', 'White-label options for growing agencies'],
    subServices: [
      { name: 'Technical SEO', href: '/services/seo/technical-seo' },
      { name: 'On-Page SEO', href: '/services/seo/on-page-seo' },
      { name: 'Local SEO', href: '/services/seo/local-seo' },
      { name: 'Google Business Profile Optimization', href: '/services/seo' },
      { name: 'E-commerce SEO', href: '/services/seo' },
      { name: 'AI SEO', href: '/services/seo/ai-seo' },
      { name: 'AEO (Answer Engine Optimization)', href: '/services/seo/ai-seo' },
      { name: 'Link Building', href: '/services/seo/link-building' },
      { name: 'SEO Content Strategy', href: '/services/seo' },
      { name: 'YouTube SEO', href: '/services/seo' },
      { name: 'International SEO', href: '/services/seo' },
      { name: 'SEO Audits', href: '/services/seo' },
      { name: 'White-Label SEO', href: '/services/white-label/white-label-seo' },
    ],
  },
  {
    id: 'ppc', label: 'PPC / Paid Ads', icon: 'fa-solid fa-chart-bar',
    img: '/services/ppc.webp',
    href: '/services/ppc-paid-marketing',
    title: 'Paid Ads That Bring You Customers',
    desc: 'We make every ad dollar accountable. We plan, build, and optimise paid campaigns across Google, Meta, LinkedIn, and YouTube — targeting the right people at the right moment.',
    stat: '5.2x', statLabel: 'Average ROAS',
    cta: 'Explore PPC Services',
    highlights: ['Google, Meta, LinkedIn & YouTube ads', 'Full-funnel strategy, not just campaign setup', 'Transparent reporting with real attribution'],
    subServices: [
      { name: 'Google Ads', href: '/services/ppc/google-ads' },
      { name: 'Meta Ads (Facebook & Instagram)', href: '/services/ppc/meta-ads' },
      { name: 'PPC Management', href: '/services/ppc-paid-marketing' },
      { name: 'Retargeting & Remarketing', href: '/services/ppc-paid-marketing' },
      { name: 'Google Shopping Ads', href: '/services/ppc-paid-marketing' },
      { name: 'LinkedIn Ads', href: '/services/ppc-paid-marketing' },
      { name: 'YouTube Ads', href: '/services/ppc-paid-marketing' },
      { name: 'Microsoft / Bing Ads', href: '/services/ppc-paid-marketing' },
      { name: 'Programmatic Advertising', href: '/services/ppc-paid-marketing' },
      { name: 'Paid Social Media Advertising', href: '/services/ppc-paid-marketing' },
      { name: 'Conversion Tracking & Analytics Setup', href: '/services/ppc-paid-marketing' },
      { name: 'Funnel Strategy & Tracking Setup', href: '/services/ppc-paid-marketing' },
      { name: 'White-Label PPC', href: '/services/white-label/white-label-ppc' },
    ],
  },
  {
    id: 'creative', label: 'Content & Creative', icon: 'fa-solid fa-palette',
    img: '/services/content-creative.webp',
    href: '/services/content-creative',
    title: 'Content & Creative That Makes People Choose You',
    desc: 'Good content does more than look good. We create copy, graphics, videos, and social content that attracts the right audience and moves them toward a buying decision.',
    stat: '2x', statLabel: 'Better Engagement',
    cta: 'Explore Content & Creative Services',
    highlights: ['Copy, graphics, video & social under one roof', 'Built to convert, not just to look good', 'AI-enhanced production for faster turnaround'],
    subServices: [
      { name: 'Social Media Content & Management', href: '/services/content-creative' },
      { name: 'SEO Blog Writing', href: '/services/content-creative/seo-blog-writing' },
      { name: 'Website Copywriting', href: '/services/content-creative' },
      { name: 'Graphic Design', href: '/services/content-creative/graphic-design' },
      { name: 'Short Form Video Content', href: '/services/content-creative' },
      { name: 'Video Marketing & Editing', href: '/services/content-creative' },
      { name: 'Ad Creative Design', href: '/services/content-creative/ad-creative-design' },
      { name: 'Email Marketing', href: '/services/content-creative' },
      { name: 'LinkedIn Content & Personal Branding', href: '/services/content-creative' },
      { name: 'Brand Identity & Visual Design', href: '/services/content-creative' },
      { name: 'UGC Content for Ads', href: '/services/content-creative' },
      { name: 'Infographic Design', href: '/services/content-creative' },
      { name: 'Content Marketing', href: '/services/content-creative' },
      { name: 'AI Content Production', href: '/services/content-creative' },
    ],
  },
  {
    id: 'whitelabel', label: 'White Label', icon: 'fa-solid fa-tag',
    img: '/services/white-label.webp',
    href: '/services/white-label',
    title: 'White-Label Fulfillment Built to Grow Your Agency',
    desc: 'Scale your agency without hiring. Our US-based strategy team runs the plan while our 40+ in-house specialists handle delivery — everything shipped under your brand.',
    stat: '40+', statLabel: 'In-House Specialists',
    cta: 'Explore White Label Services',
    highlights: ['US-based strategy + 40+ offshore specialists', 'Everything delivered under your brand', 'Scalable pods for growing agencies'],
    subServices: [
      { name: 'White-Label SEO', href: '/services/white-label/white-label-seo' },
      { name: 'White-Label PPC', href: '/services/white-label/white-label-ppc' },
      { name: 'White-Label Web Development', href: '/services/white-label/white-label-web-design' },
      { name: 'White-Label GoHighLevel Support', href: '/services/white-label' },
      { name: 'White-Label Marketing Automation', href: '/services/white-label/white-label-automation' },
      { name: 'White-Label Content Marketing', href: '/services/white-label' },
      { name: 'White-Label Social Media Marketing', href: '/services/white-label' },
      { name: 'White-Label Email Marketing', href: '/services/white-label' },
      { name: 'White-Label Copywriting', href: '/services/white-label' },
      { name: 'White-Label Graphic Design', href: '/services/white-label' },
      { name: 'White-Label Link Building', href: '/services/white-label' },
      { name: 'Dedicated Agency Pods', href: '/services/white-label' },
      { name: 'White-Label Reporting & Dashboards', href: '/services/white-label' },
    ],
  },
  {
    id: 'automation', label: 'Marketing Automation', icon: 'fa-solid fa-robot',
    img: '/services/marketing-automation.webp',
    href: '/services/marketing-automation',
    title: 'Automation That Grows Your Business 24/7',
    desc: 'We build automation systems that keep your business moving without you managing every step — lead follow-up, appointment booking, CRM workflows, email and SMS sequences, all running automatically.',
    stat: '62%', statLabel: 'Lower Lead Cost',
    cta: 'Explore Automation Services',
    highlights: ['GoHighLevel, HubSpot, Kajabi & more supported', 'Lead follow-up, booking & CRM fully automated', 'Make, Zapier, n8n & custom API integrations'],
    subServices: [
      { name: 'GoHighLevel Setup & Automation', href: '/services/automation/gohighlevel' },
      { name: 'CRM Setup & Management', href: '/services/automation/crm-setup' },
      { name: 'Lead Nurture Workflows', href: '/services/marketing-automation' },
      { name: 'Email Marketing Automation', href: '/services/marketing-automation' },
      { name: 'Appointment Booking Systems', href: '/services/marketing-automation' },
      { name: 'Sales Pipeline Automation', href: '/services/marketing-automation' },
      { name: 'SMS & WhatsApp Automation', href: '/services/marketing-automation' },
      { name: 'AI Chatbot & Conversation Automation', href: '/services/automation/ai-chatbot' },
      { name: 'Make (Integromat) Automation', href: '/services/automation/make-integromat' },
      { name: 'Zapier Workflow Automation', href: '/services/automation/zapier' },
      { name: 'n8n Workflow Automation', href: '/services/automation/n8n' },
      { name: 'Reputation Management Automation', href: '/services/marketing-automation' },
      { name: 'E-commerce Automation', href: '/services/marketing-automation' },
      { name: 'Social Media Automation', href: '/services/marketing-automation' },
      { name: 'API Integration', href: '/services/marketing-automation' },
      { name: 'Reporting & Dashboard Automation', href: '/services/marketing-automation' },
    ],
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState('web');
  const [animKey, setAnimKey] = useState(0);
  const active = tabs.find(t => t.id === activeId);

  function switchTab(id) {
    if (id === activeId) return;
    setActiveId(id);
    setAnimKey(k => k + 1);
  }

  return (
    <section id="services" className="svc-section" style={{ padding: '64px 0 72px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative blobs */}
      <div aria-hidden style={{ position: 'absolute', top: '-80px', right: '-120px', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-60px', left: '-80px', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div className="ism-container" style={{ position: 'relative' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 52px' }}>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Digital Marketing Services Built<br />to Grow Your <span style={{ color: 'var(--ism-amber)' }}>Business</span>.
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.80 }}>
            Get found on Google and in AI search. Turn ad spend into revenue. Build websites, funnels, and automations that convert.
          </p>
        </div>

        {/* ── Tab bar ── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 44 }}>
          <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 6, background: '#fff', border: '1px solid var(--color-border)', borderRadius: 14, padding: '6px', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
            {tabs.map(t => {
              const isActive = t.id === activeId;
              return (
                <button key={t.id} onClick={() => switchTab(t.id)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    padding: '9px 18px', borderRadius: 10,
                    fontFamily: J, fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', border: 'none',
                    background: isActive ? 'var(--color-primary)' : 'transparent',
                    color: isActive ? '#fff' : 'var(--color-text-muted)',
                    transition: 'all .20s',
                    boxShadow: isActive ? '0 4px 16px rgba(30,77,195,.25)' : 'none',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#F0F4FF'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                >
                  <i className={t.icon} style={{ fontSize: 11, color: isActive ? 'var(--ism-amber)' : 'var(--color-primary)', transition: 'color .2s' }} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Card ── */}
        <div key={animKey} className="svc-card svc-fadein" style={{
          position: 'relative',
          background: 'rgba(248,255,226,0.46)',
          borderRadius: 28,
          padding: '56px 60px 64px',
          maxWidth: 1240,
          margin: '0 auto',
          border: '1px solid rgba(180,210,80,.20)',
          overflow: 'hidden',
        }}>

          {/* Grid pattern background */}
          <div aria-hidden className="svc-grid-bg" />

          {/* Decorative blobs */}
          <div aria-hidden style={{ position: 'absolute', top: '-60px', right: '-60px', width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle,rgba(30,77,195,.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '-90px', left: '-50px', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,176,0,.14) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div aria-hidden style={{ position: 'absolute', top: '40%', left: '38%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle,rgba(120,200,80,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          {/* Top: copy (+ checklist + CTA) on the left, photo on the right */}
          <div className="svc-top" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 48, alignItems: 'stretch', position: 'relative', zIndex: 1 }}>

            <div className="svc-copy">
              <h3 style={{ fontFamily: J, fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 14, lineHeight: 1.22, letterSpacing: '-0.3px' }}>
                {active.title}
              </h3>

              <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 28 }}>
                {active.desc}
              </p>

              {/* Checklist intro */}
              <p style={{ fontFamily: I, fontSize: 12.5, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 16 }}>
                Everything included in {active.label}
              </p>

              {/* Checklist — scrollable list, ~5 visible at a time */}
              <div className="svc-checklist-wrap">
                <div className="svc-checklist">
                  {active.subServices.map(s => (
                    <a key={s.name} href={s.href} className="svc-check-item">
                      <span className="svc-check-dot" />
                      <span>{s.name}</span>
                    </a>
                  ))}
                </div>
                <div className="svc-checklist-fade" aria-hidden />
              </div>

              {/* CTA */}
              <a href={active.href} className="svc-cta-pill">
                {active.cta} <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
              </a>
            </div>

            {/* Photo + floating badges */}
            <div className="svc-photo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img key={active.id} src={active.img} alt={active.label} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20, display: 'block' }} />
              <div className="svc-pin svc-pin-a"><i className="fa-solid fa-location-dot" /></div>
              <div className="svc-pin svc-pin-b"><i className="fa-solid fa-bolt" /></div>
              <div className="svc-rating">
                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .svc-fadein { animation: svcFade .32s cubic-bezier(.4,0,.2,1) both; }
        @keyframes svcFade { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }

        .svc-photo-wrap { position: relative; height: 100%; }
        .svc-pin { position: absolute; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #fff; color: #fff; }
        .svc-pin-a { top: -14px; right: 34px; width: 38px; height: 38px; background: var(--color-primary); box-shadow: 0 8px 18px rgba(30,77,195,.40); font-size: 14px; }
        .svc-pin-b { top: 92px; right: -14px; width: 30px; height: 30px; background: var(--ism-amber); box-shadow: 0 8px 18px rgba(255,176,0,.40); font-size: 11px; }
        .svc-rating { position: absolute; bottom: -16px; left: 20px; background: #fff; border-radius: 12px; padding: 9px 14px; display: flex; align-items: center; gap: 3px; box-shadow: 0 10px 24px rgba(0,35,83,.16); }
        .svc-rating i { color: var(--ism-amber); font-size: 11px; }

        .svc-checklist-wrap { position: relative; margin-bottom: 28px; }
        .svc-checklist {
          max-height: 224px; overflow-y: auto; padding-right: 4px; padding-bottom: 4px;
          display: flex; flex-direction: column; gap: 10px;
          scrollbar-width: none;
        }
        .svc-checklist::-webkit-scrollbar { display: none; }
        .svc-checklist-fade {
          position: absolute; left: 0; right: 4px; bottom: 0; height: 36px;
          background: linear-gradient(to bottom, rgba(248,255,226,0) 0%, rgba(248,255,226,0.85) 90%);
          pointer-events: none; border-radius: 0 0 12px 12px;
        }

        /* ── Corner circle arcs + box brackets ── */
        .svc-grid-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          border-radius: 28px;
          overflow: hidden;
          /* Large concentric arc rings at top-left and bottom-right corners */
          background-image:
            radial-gradient(circle 360px at 0% 0%,   transparent 340px, rgba(80,155,25,.055) 341px, rgba(80,155,25,.055) 343px, transparent 344px),
            radial-gradient(circle 260px at 0% 0%,   transparent 242px, rgba(80,155,25,.040) 242px, rgba(80,155,25,.040) 244px, transparent 245px),
            radial-gradient(circle 165px at 0% 0%,   transparent 149px, rgba(80,155,25,.030) 149px, rgba(80,155,25,.030) 151px, transparent 152px),
            radial-gradient(circle 320px at 100% 100%, transparent 302px, rgba(80,155,25,.048) 302px, rgba(80,155,25,.048) 304px, transparent 305px),
            radial-gradient(circle 220px at 100% 100%, transparent 204px, rgba(80,155,25,.035) 204px, rgba(80,155,25,.035) 206px, transparent 207px),
            radial-gradient(circle 128px at 100% 100%, transparent 114px, rgba(80,155,25,.025) 114px, rgba(80,155,25,.025) 116px, transparent 117px);
        }
        /* Top-left corner bracket box */
        .svc-grid-bg::before {
          content: '';
          position: absolute;
          top: 26px; left: 26px;
          width: 52px; height: 52px;
          border-top:  1.5px solid rgba(80,155,25,.12);
          border-left: 1.5px solid rgba(80,155,25,.12);
          border-radius: 6px 0 0 0;
        }
        /* Bottom-right corner bracket box */
        .svc-grid-bg::after {
          content: '';
          position: absolute;
          bottom: 26px; right: 26px;
          width: 52px; height: 52px;
          border-bottom: 1.5px solid rgba(80,155,25,.10);
          border-right:  1.5px solid rgba(80,155,25,.10);
          border-radius: 0 0 6px 0;
        }

        .svc-check-item {
          display: flex; align-items: center; gap: 12px;
          text-decoration: none; flex-shrink: 0;
          padding: 14px 18px; border-radius: 12px;
          background: #fff;
          border: 1px solid rgba(30,77,195,.08);
          transition: background .18s, border-color .18s, transform .18s;
        }
        .svc-check-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-primary); flex-shrink: 0; transition: background .18s; }
        .svc-check-item span { font-family: ${I}; font-size: 14px; font-weight: 700; color: var(--color-navy); line-height: 1.3; }
        .svc-check-item:hover {
          background: linear-gradient(135deg,#FFC229 0%,#FFB000 100%);
          border-color: transparent;
          transform: translateX(4px);
        }
        .svc-check-item:hover .svc-check-dot { background: var(--color-navy); }

        .svc-cta-pill {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg,#FFC229 0%,#FFB000 100%); color: var(--color-navy);
          font-family: ${J}; font-weight: 800; font-size: 13px;
          letter-spacing: .03em; text-transform: uppercase;
          padding: 16px 34px; border-radius: 100px;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 10px 30px rgba(255,176,0,.35);
          transition: all .18s;
        }
        .svc-cta-pill:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(255,176,0,.45); }

        @media (max-width: 900px) {
          .svc-section { padding: 48px 0 56px !important; }
          .svc-card { padding: 40px 28px 48px !important; }
          .svc-top { grid-template-columns: minmax(0,1fr) !important; gap: 24px !important; }
          .svc-photo-wrap { order: -1; margin-bottom: 12px; height: auto; aspect-ratio: 16/9; }
        }
        @media (max-width: 480px) {
          .svc-section { padding: 36px 0 40px !important; }
          .svc-card { padding: 32px 18px 40px !important; }
          .svc-check-item { padding: 12px 14px !important; }
          .svc-cta-pill { white-space: normal !important; text-align: center; padding: 14px 22px !important; }
        }
      `}</style>
    </section>
  );
}
