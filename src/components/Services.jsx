'use client';

import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const tabs = [
  {
    id: 'web', label: 'Websites & Funnels', icon: 'fa-solid fa-globe',
    img: '/services/website-and-funnels.webp',
    href: '/websites-and-funnels',
    title: 'Websites & Funnels Built to Convert',
    desc: 'We design and build websites, landing pages, and sales funnels that turn visitors into leads and customers. Every project is built around one goal: more conversions from the traffic you already have.',
    stat: '3x', statLabel: 'Higher Conversion Rate',
    cta: 'Explore Web & Funnel Services',
    highlights: ['Conversion-first design on every project', 'GoHighLevel funnels & CRM setup included', 'WordPress, Shopify & Webflow specialists'],
    subServices: [
      { name: 'Business Websites', href: '/websites-and-funnels' },
      { name: 'Landing Pages', href: '/landing-page-design-services' },
      { name: 'Sales Funnels', href: '/websites-and-funnels' },
      { name: 'GoHighLevel Funnels & Automation', href: '/gohighlevel-developer' },
      { name: 'WordPress Website Design', href: '/websites-and-funnels' },
      { name: 'Shopify Website Design', href: '/websites-and-funnels' },
      { name: 'E-commerce Website Design', href: '/websites-and-funnels' },
      { name: 'Website Redesign', href: '/websites-and-funnels' },
      { name: 'Conversion Rate Optimization (CRO)', href: '/websites-and-funnels' },
      { name: 'Webflow Development', href: '/websites-and-funnels' },
      { name: 'AI-Powered Website Personalization', href: '/websites-and-funnels' },
      { name: 'Website Maintenance & Support', href: '/websites-and-funnels' },
    ],
  },
  {
    id: 'seo', label: 'SEO', icon: 'fa-solid fa-magnifying-glass',
    img: '/seo-services.webp',
    href: '/seo-services',
    title: 'SEO Built for Long-Term Growth',
    desc: 'We build an organic traffic engine that compounds over time, blending technical SEO, content strategy, and authority link building to rank for high-intent keywords month after month.',
    stat: '225%', statLabel: 'Avg. Traffic Growth',
    cta: 'Explore Our SEO Services',
    highlights: ['Local, national & e-commerce SEO covered', 'AI SEO & Answer Engine Optimization ready', 'White-label options for growing agencies'],
    subServices: [
      { name: 'Technical SEO', href: '/technical-seo' },
      { name: 'On-Page SEO', href: '/on-page-seo-services' },
      { name: 'Local SEO', href: '/local-seo-services' },
      { name: 'Google Business Profile Optimization', href: '/seo-services' },
      { name: 'E-commerce SEO', href: '/seo-services' },
      { name: 'AI SEO', href: '/ai-seo-services' },
      { name: 'AEO (Answer Engine Optimization)', href: '/ai-seo-services' },
      { name: 'Link Building', href: '/link-building-service' },
      { name: 'SEO Content Strategy', href: '/seo-services' },
      { name: 'YouTube SEO', href: '/seo-services' },
      { name: 'International SEO', href: '/seo-services' },
      { name: 'SEO Audits', href: '/seo-services' },
      { name: 'White-Label SEO', href: '/white-label-seo-services' },
    ],
  },
  {
    id: 'ppc', label: 'PPC / Paid Ads', icon: 'fa-solid fa-chart-bar',
    img: '/services/ppc.webp',
    href: '/ppc-marketing-agencies',
    title: 'Paid Ads That Bring You Customers',
    desc: 'We make every ad dollar accountable. We plan, build, and optimise paid campaigns across Google, Meta, LinkedIn, and YouTube, targeting the right people at the right moment.',
    stat: '5.2x', statLabel: 'Average ROAS',
    cta: 'Explore PPC Services',
    highlights: ['Google, Meta, LinkedIn & YouTube ads', 'Full-funnel strategy, not just campaign setup', 'Transparent reporting with real attribution'],
    subServices: [
      { name: 'Google Ads', href: '/google-ads-management' },
      { name: 'Meta Ads (Facebook & Instagram)', href: '/meta-ads-management' },
      { name: 'PPC Management', href: '/ppc-marketing-agencies' },
      { name: 'Retargeting & Remarketing', href: '/ppc-marketing-agencies' },
      { name: 'Google Shopping Ads', href: '/ppc-marketing-agencies' },
      { name: 'LinkedIn Ads', href: '/ppc-marketing-agencies' },
      { name: 'YouTube Ads', href: '/ppc-marketing-agencies' },
      { name: 'Microsoft / Bing Ads', href: '/ppc-marketing-agencies' },
      { name: 'Programmatic Advertising', href: '/ppc-marketing-agencies' },
      { name: 'Paid Social Media Advertising', href: '/ppc-marketing-agencies' },
      { name: 'Conversion Tracking & Analytics Setup', href: '/ppc-marketing-agencies' },
      { name: 'Funnel Strategy & Tracking Setup', href: '/ppc-marketing-agencies' },
      { name: 'White-Label PPC', href: '/white-label-ppc-services' },
    ],
  },
  {
    id: 'creative', label: 'Content & Creative', icon: 'fa-solid fa-palette',
    img: '/content-marketing-and-creative-agency.webp',
    href: '/content-marketing-and-creative-agency',
    title: 'Content & Creative That Makes People Choose You',
    desc: 'Good content does more than look good. We create copy, graphics, videos, and social content that attracts the right audience and moves them toward a buying decision.',
    stat: '2x', statLabel: 'Better Engagement',
    cta: 'Explore Content & Creative Services',
    highlights: ['Copy, graphics, video & social under one roof', 'Built to convert, not just to look good', 'AI-enhanced production for faster turnaround'],
    subServices: [
      { name: 'Social Media Content & Management', href: '/content-marketing-and-creative-agency' },
      { name: 'SEO Blog Writing', href: '/seo-content-writing-services' },
      { name: 'Website Copywriting', href: '/content-marketing-and-creative-agency' },
      { name: 'Graphic Design', href: '/graphic-design-agency' },
      { name: 'Short Form Video Content', href: '/content-marketing-and-creative-agency' },
      { name: 'Video Marketing & Editing', href: '/content-marketing-and-creative-agency' },
      { name: 'Ad Creative Design', href: '/ad-creative-design-services' },
      { name: 'Email Marketing', href: '/content-marketing-and-creative-agency' },
      { name: 'LinkedIn Content & Personal Branding', href: '/content-marketing-and-creative-agency' },
      { name: 'Brand Identity & Visual Design', href: '/content-marketing-and-creative-agency' },
      { name: 'UGC Content for Ads', href: '/content-marketing-and-creative-agency' },
      { name: 'Infographic Design', href: '/content-marketing-and-creative-agency' },
      { name: 'Content Marketing', href: '/content-marketing-and-creative-agency' },
      { name: 'AI Content Production', href: '/content-marketing-and-creative-agency' },
    ],
  },
  {
    id: 'whitelabel', label: 'White Label', icon: 'fa-solid fa-tag',
    img: '/white-label-digital-marketing.webp',
    href: '/white-label-digital-marketing',
    title: 'White-Label Fulfillment Built to Grow Your Agency',
    desc: 'Scale your agency without hiring. Our US-based strategy team runs the plan while our 40+ in-house specialists handle delivery, everything shipped under your brand.',
    stat: '40+', statLabel: 'In-House Specialists',
    cta: 'Explore White Label Services',
    highlights: ['US-based strategy + 40+ offshore specialists', 'Everything delivered under your brand', 'Scalable pods for growing agencies'],
    subServices: [
      { name: 'White-Label SEO', href: '/white-label-seo-services' },
      { name: 'White-Label PPC', href: '/white-label-ppc-services' },
      { name: 'White-Label Web Development', href: '/white-label-web-design-services' },
      { name: 'White-Label GoHighLevel Support', href: '/white-label-digital-marketing' },
      { name: 'White-Label Marketing Automation', href: '/gohighlevel-white-label-support-services' },
      { name: 'White-Label Content Marketing', href: '/white-label-digital-marketing' },
      { name: 'White-Label Social Media Marketing', href: '/white-label-digital-marketing' },
      { name: 'White-Label Email Marketing', href: '/white-label-digital-marketing' },
      { name: 'White-Label Copywriting', href: '/white-label-digital-marketing' },
      { name: 'White-Label Graphic Design', href: '/white-label-digital-marketing' },
      { name: 'White-Label Link Building', href: '/white-label-digital-marketing' },
      { name: 'Dedicated Agency Pods', href: '/dedicated-agency-pods' },
      { name: 'White-Label Reporting & Dashboards', href: '/white-label-digital-marketing' },
    ],
  },
  {
    id: 'automation', label: 'Marketing Automation', icon: 'fa-solid fa-robot',
    img: '/marketing-automation-agency.webp',
    href: '/marketing-automation-agency',
    title: 'Automation That Grows Your Business 24/7',
    desc: 'We build automation systems that keep your business moving without you managing every step, lead follow-up, appointment booking, CRM workflows, email and SMS sequences, all running automatically.',
    stat: '62%', statLabel: 'Lower Lead Cost',
    cta: 'Explore Automation Services',
    highlights: ['GoHighLevel, HubSpot, Kajabi & more supported', 'Lead follow-up, booking & CRM fully automated', 'Make, Zapier, n8n & custom API integrations'],
    subServices: [
      { name: 'GoHighLevel Setup & Automation', href: '/gohighlevel-automation-setup' },
      { name: 'CRM Setup & Management', href: '/crm-setup-management' },
      { name: 'Lead Nurture Workflows', href: '/lead-nurture-workflows' },
      { name: 'Email Marketing Automation', href: '/email-marketing-automation' },
      { name: 'Appointment Booking Systems', href: '/appointment-booking-automation' },
      { name: 'Sales Pipeline Automation', href: '/sales-pipeline-automation' },
      { name: 'SMS & WhatsApp Automation', href: '/marketing-automation-agency' },
      { name: 'AI Chatbot & Conversation Automation', href: '/ai-chatbot-automation' },
      { name: 'Make (Integromat) Automation', href: '/make-automation-services' },
      { name: 'Zapier Workflow Automation', href: '/zapier-workflow-automation' },
      { name: 'n8n Workflow Automation', href: '/n8n-workflow-automation' },
      { name: 'Reputation Management Automation', href: '/marketing-automation-agency' },
      { name: 'E-commerce Automation', href: '/marketing-automation-agency' },
      { name: 'Social Media Automation', href: '/marketing-automation-agency' },
      { name: 'API Integration', href: '/api-integration-services' },
      { name: 'Reporting & Dashboard Automation', href: '/marketing-automation-agency' },
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
        <div className="svc-tabbar-outer" style={{ display: 'flex', justifyContent: 'center', marginBottom: 44 }}>
          <div className="svc-tabbar" style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 6, background: '#fff', border: '1px solid var(--color-border)', borderRadius: 14, padding: '6px', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
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

              {/* Checklist, scrollable list, ~5 visible at a time */}
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
              <img key={active.id} src={active.img} alt={active.label} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20, display: 'block' }} />
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
        @media (max-width: 640px) {
          .svc-tabbar-outer { justify-content: flex-start !important; overflow: hidden; }
          .svc-tabbar { flex-wrap: nowrap !important; overflow-x: auto !important; -webkit-overflow-scrolling: touch; max-width: 100%; }
          .svc-tabbar::-webkit-scrollbar { display: none; }
        }
      `}</style>
    </section>
  );
}
