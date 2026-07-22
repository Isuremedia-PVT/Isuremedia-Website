'use client';

import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const tabs = [
  {
    id: 'web', label: 'Websites & Funnels', icon: 'fa-solid fa-globe',
    href: '/services/websites-funnels',
    title: 'Websites & Funnels Built to Convert',
    desc: 'We design and build websites, landing pages, and sales funnels that turn visitors into leads and customers. Whether you need a new site, a GoHighLevel funnel build, or a full redesign, every project is built around one goal: more conversions from the traffic you already have.',
    stat: '3x', statLabel: 'Higher Conversion Rate',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    cta: 'Explore Web & Funnel Services',
    highlights: [
      'Conversion-first design on every project',
      'GoHighLevel funnels & CRM setup included',
      'WordPress, Shopify & Webflow specialists',
    ],
    subServices: ['Business Websites', 'Landing Pages', 'Sales Funnels', 'GoHighLevel Funnels & Automation', 'WordPress Website Design', 'Shopify Website Design', 'E-commerce Website Design', 'Website Redesign', 'Conversion Rate Optimization (CRO)', 'Webflow Development', 'AI-Powered Website Personalization', 'Website Maintenance & Support'],
  },
  {
    id: 'seo', label: 'SEO', icon: 'fa-solid fa-magnifying-glass',
    href: '/services/seo',
    title: 'SEO Built for Long-Term Growth.',
    desc: 'We build an organic traffic engine that compounds over time. Our team blends technical SEO, content strategy, and authority link building to help you rank for high-intent keywords and attract qualified leads month after month.',
    stat: '225%', statLabel: 'Avg. Traffic Growth',
    img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80',
    cta: 'Explore Our SEO Services',
    highlights: [
      'Local, national & e-commerce SEO covered',
      'AI SEO & Answer Engine Optimization ready',
      'White-label options for growing agencies',
    ],
    subServices: ['Technical SEO', 'On-Page SEO', 'Local SEO', 'Google Business Profile Optimization', 'E-commerce SEO', 'AI SEO', 'AEO (Answer Engine Optimization)', 'Link Building', 'SEO Content Strategy', 'YouTube SEO', 'International SEO', 'SEO Audits', 'White-Label SEO'],
  },
  {
    id: 'ppc', label: 'PPC / Paid Ads', icon: 'fa-solid fa-chart-bar',
    href: '/services/ppc-paid-marketing',
    title: 'Paid Ads That Bring You Customers.',
    desc: 'We make every ad dollar accountable. We plan, build, and optimize paid campaigns across Google, Meta, LinkedIn, and YouTube, targeting the right people at the right moment so paid advertising becomes the most predictable part of your growth.',
    stat: '5.2x', statLabel: 'Average ROAS',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    cta: 'Explore PPC Services',
    highlights: [
      'Google, Meta, LinkedIn & YouTube ads',
      'Full-funnel strategy, not just campaign setup',
      'Transparent reporting with real attribution',
    ],
    subServices: ['Google Ads', 'Meta Ads (Facebook & Instagram)', 'PPC Management', 'Retargeting & Remarketing', 'Google Shopping Ads', 'LinkedIn Ads', 'YouTube Ads', 'Microsoft / Bing Ads', 'Programmatic Advertising', 'Paid Social Media Advertising', 'Conversion Tracking & Analytics Setup', 'Funnel Strategy & Tracking Setup', 'White-Label PPC'],
  },
  {
    id: 'creative', label: 'Content & Creative', icon: 'fa-solid fa-palette',
    href: '/services/content-creative',
    title: 'Content & Creative That Makes People Choose You.',
    desc: 'Good content does more than look good. We create copy, graphics, videos, and social content that attracts the right audience and moves them toward a buying decision, whether they find you through search, social, or paid ads.',
    stat: '2x', statLabel: 'Better Engagement',
    img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80',
    cta: 'Explore Content & Creative Services',
    highlights: [
      'Copy, graphics, video & social under one roof',
      'Built to convert, not just to look good',
      'AI-enhanced production for faster turnaround',
    ],
    subServices: ['Social Media Content & Management', 'SEO Blog Writing', 'Website Copywriting', 'Graphic Design', 'Short Form Video Content', 'Video Marketing & Editing', 'Ad Creative Design', 'Email Marketing', 'LinkedIn Content & Personal Branding', 'Brand Identity & Visual Design', 'UGC Content for Ads', 'Infographic Design', 'Content Marketing', 'AI Content Production'],
  },
  {
    id: 'whitelabel', label: 'White Label', icon: 'fa-solid fa-tag',
    href: '/services/white-label',
    title: 'White-Label Fulfillment Built to Grow Your Agency.',
    desc: 'Scale your agency without hiring. Our US-based strategy team runs the plan while our 40+ in-house specialists in India handle delivery. From SEO and PPC to web builds and GoHighLevel setups, everything ships under your brand.',
    stat: '40+', statLabel: 'In-House Specialists',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    cta: 'Explore White Label Services',
    highlights: [
      'US-based strategy + 40+ offshore specialists',
      'Everything delivered under your brand',
      'Scalable pods for growing agencies',
    ],
    subServices: ['White-Label SEO', 'White-Label PPC', 'White-Label Web Development', 'White-Label GoHighLevel Support', 'White-Label Marketing Automation', 'White-Label Content Marketing', 'White-Label Social Media Marketing', 'White-Label Email Marketing', 'White-Label Copywriting', 'White-Label Graphic Design', 'White-Label Link Building', 'Dedicated Agency Pods', 'White-Label Reporting & Dashboards'],
  },
  {
    id: 'automation', label: 'Marketing Automation', icon: 'fa-solid fa-robot',
    href: '/services/marketing-automation',
    title: 'Automation That Grows Your Business 24/7.',
    desc: 'We build the automation systems that keep your business moving without you managing every step. Lead follow-up, appointment booking, CRM workflows, email and SMS sequences, all running automatically. Whether you are on GoHighLevel, Kajabi, HubSpot, or building from the ground up, we own it from setup to results.',
    stat: '62%', statLabel: 'Lower Lead Cost',
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
    cta: 'Explore Automation Services',
    highlights: [
      'GoHighLevel, HubSpot, Kajabi & more supported',
      'Lead follow-up, booking & CRM fully automated',
      'Make, Zapier, n8n & custom API integrations',
    ],
    subServices: ['GoHighLevel Setup & Automation', 'CRM Setup & Management', 'Lead Nurture Workflows', 'Email Marketing Automation', 'Appointment Booking Systems', 'Sales Pipeline Automation', 'SMS & WhatsApp Automation', 'AI Chatbot & Conversation Automation', 'Make (Integromat) Automation', 'Zapier Workflow Automation', 'n8n Workflow Automation', 'Reputation Management Automation', 'E-commerce Automation', 'Social Media Automation', 'API Integration', 'Reporting & Dashboard Automation', 'White-Label GoHighLevel Support'],
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState('web');
  const [animKey, setAnimKey] = useState(0);
  const active = tabs.find(t => t.id === activeId)!;

  function switchTab(id: string) {
    if (id === activeId) return;
    setActiveId(id);
    setAnimKey(k => k + 1);
  }

  return (
    <section id="services" className="svc-section" style={{ padding: '100px 0 110px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 56px' }}>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Digital Marketing Services Built<br />to Grow Your Business.
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.80 }}>
            Get found on Google and in AI search. Turn ad spend into revenue. Build websites, funnels, and automations that convert — every service built to grow your business.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
          {tabs.map(t => {
            const isActive = t.id === activeId;
            return (
              <button key={t.id} onClick={() => switchTab(t.id)}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '10px 20px', borderRadius: 10,
                  fontFamily: J, fontSize: 13.5, fontWeight: 600,
                  cursor: 'pointer',
                  border: `1.5px solid ${isActive ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  background: isActive ? 'var(--color-primary)' : '#fff',
                  color: isActive ? '#fff' : 'var(--color-text-muted)',
                  transition: 'all .22s cubic-bezier(.4,0,.2,1)',
                  boxShadow: isActive ? '0 4px 20px rgba(30,77,195,.22)' : '0 1px 4px rgba(0,0,0,.04)',
                  transform: isActive ? 'translateY(-2px)' : 'none',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(30,77,195,.12)'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,.04)'; } }}
              >
                <i className={t.icon} style={{ fontSize: 12, color: isActive ? 'var(--ism-amber)' : 'inherit' }} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* ── Pane ── */}
        <div key={animKey} className="svc-pane svc-fadein" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.05fr',
          borderRadius: 22,
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,35,83,.18)',
        }}>

          {/* LEFT — dark */}
          <div className="svc-left" style={{ padding: '52px 48px', background: 'linear-gradient(145deg, rgb(31,78,195) 0%, rgb(0,74,255) 100%)', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            {/* bg glow */}
            <div style={{ position: 'absolute', top: '-15%', right: '-10%', width: 320, height: 320, background: 'radial-gradient(circle,rgba(255,176,0,.10) 0%,transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: 280, height: 280, background: 'radial-gradient(circle,rgba(30,77,195,.35) 0%,transparent 65%)', pointerEvents: 'none' }} />

            {/* Eyebrow */}
            <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ism-amber)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8, position: 'relative' }}>
              <span style={{ width: 16, height: 2, background: 'var(--ism-amber)', borderRadius: 2, display: 'inline-block' }} />
              {active.label}
            </p>

            {/* Title */}
            <h3 style={{ fontFamily: J, fontSize: 'clamp(22px,2vw,30px)', fontWeight: 800, color: '#fff', marginBottom: 14, lineHeight: 1.22, letterSpacing: '-0.4px', position: 'relative' }}>
              {active.title}
            </h3>

            {/* Short desc — first sentence only */}
            <p style={{ fontFamily: I, fontSize: 14, color: 'rgba(255,255,255,.60)', lineHeight: 1.72, marginBottom: 36, position: 'relative', maxWidth: 380 }}>
              {active.desc.split('.')[0]}.
            </p>

            {/* Stat hero */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, padding: '18px 24px', marginBottom: 36, alignSelf: 'flex-start', position: 'relative', backdropFilter: 'blur(4px)' }}>
              <div>
                <div style={{ fontFamily: J, fontSize: 44, fontWeight: 900, color: 'var(--ism-amber)', lineHeight: 1, letterSpacing: '-2px' }}>{active.stat}</div>
                <div style={{ fontFamily: I, fontSize: 10.5, color: 'rgba(255,255,255,.55)', marginTop: 5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em' }}>{active.statLabel}</div>
              </div>
            </div>

            {/* CTA */}
            <a href={active.href}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '14px 28px', borderRadius: 10, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 4px 24px rgba(255,176,0,.35)', whiteSpace: 'nowrap', alignSelf: 'flex-start', position: 'relative' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
            >
              {active.cta} <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
            </a>
          </div>

          {/* RIGHT — services grid */}
          <div className="svc-right" style={{ padding: '44px 36px', background: '#fff', borderLeft: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
              <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: 8, margin: 0 }}>
                <span style={{ width: 16, height: 2, background: 'var(--ism-amber)', borderRadius: 2, display: 'inline-block', flexShrink: 0 }} />
                Services Included
              </p>
              <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-primary)', background: 'rgba(30,77,195,.08)', border: '1px solid rgba(30,77,195,.12)', borderRadius: 20, padding: '3px 10px' }}>
                {active.subServices.length}
              </span>
            </div>

            <div className="svc-pills-scroll" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, maxHeight: 390, overflowY: 'auto' }}>
              {active.subServices.map(s => (
                <a key={s} href="#contact" className="svc-pill"
                  style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderRadius: 10, textDecoration: 'none', background: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', transition: 'all .15s' }}
                >
                  <span className="svc-pill-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ism-amber)', flexShrink: 0, transition: 'all .15s' }} />
                  <span className="svc-pill-text" style={{ fontFamily: I, fontSize: 12, fontWeight: 500, color: 'var(--color-navy)', lineHeight: 1.35 }}>{s}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .svc-fadein { animation: svcFade .35s cubic-bezier(.4,0,.2,1) both; }
        @keyframes svcFade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .svc-pill:hover { background: var(--color-primary) !important; border-color: var(--color-primary) !important; }
        .svc-pill:hover .svc-pill-dot { background: #fff !important; }
        .svc-pill:hover .svc-pill-text { color: #fff !important; }
        .svc-pills-scroll { scrollbar-width: none; }
        .svc-pills-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          .svc-section { padding: 60px 0 70px !important; }
          .svc-pane { grid-template-columns: 1fr !important; }
          .svc-left, .svc-right { padding: 28px 22px !important; }
          .svc-right { border-left: none !important; border-top: 1px solid var(--color-border); }
          .svc-pills-scroll { grid-template-columns: 1fr !important; max-height: 280px !important; }
        }
        @media (max-width: 480px) {
          .svc-section { padding: 48px 0 52px !important; }
        }
      `}</style>
    </section>
  );
}
