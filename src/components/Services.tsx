'use client';

import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const tabs = [
  {
    id: 'web', label: 'Websites & Funnels', icon: 'fa-solid fa-globe',
    title: 'Websites & Funnels Built to Convert',
    desc: 'We design and build websites, landing pages, and sales funnels that turn visitors into leads and customers. Whether you need a new site, a GoHighLevel funnel build, or a full redesign, every project is built around one goal: more conversions from the traffic you already have.',
    stat: '3x', statLabel: 'Higher Conversion Rate',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    cta: 'Explore Web & Funnel Services',
    subServices: ['Business Websites', 'Landing Pages', 'Sales Funnels', 'GoHighLevel Funnels & Automation', 'WordPress Website Design', 'Shopify Website Design', 'E-commerce Website Design', 'Website Redesign', 'Conversion Rate Optimization (CRO)', 'Webflow Development', 'AI-Powered Website Personalization', 'Website Maintenance & Support'],
  },
  {
    id: 'seo', label: 'SEO', icon: 'fa-solid fa-magnifying-glass',
    title: 'SEO Built for Long-Term Growth.',
    desc: 'We build an organic traffic engine that compounds over time. Our team blends technical SEO, content strategy, and authority link building to help you rank for high-intent keywords and attract qualified leads month after month.',
    stat: '225%', statLabel: 'Avg. Traffic Growth',
    img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80',
    cta: 'Explore Our SEO Services',
    subServices: ['Technical SEO', 'On-Page SEO', 'Local SEO', 'Google Business Profile Optimization', 'E-commerce SEO', 'AI SEO', 'AEO (Answer Engine Optimization)', 'Link Building', 'SEO Content Strategy', 'YouTube SEO', 'International SEO', 'SEO Audits', 'White-Label SEO'],
  },
  {
    id: 'ppc', label: 'PPC / Paid Ads', icon: 'fa-solid fa-chart-bar',
    title: 'Paid Ads That Bring You Customers.',
    desc: 'We make every ad dollar accountable. We plan, build, and optimize paid campaigns across Google, Meta, LinkedIn, and YouTube, targeting the right people at the right moment so paid advertising becomes the most predictable part of your growth.',
    stat: '5.2x', statLabel: 'Average ROAS',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    cta: 'Explore PPC Services',
    subServices: ['Google Ads', 'Meta Ads (Facebook & Instagram)', 'PPC Management', 'Retargeting & Remarketing', 'Google Shopping Ads', 'LinkedIn Ads', 'YouTube Ads', 'Microsoft / Bing Ads', 'Programmatic Advertising', 'Paid Social Media Advertising', 'Conversion Tracking & Analytics Setup', 'Funnel Strategy & Tracking Setup', 'White-Label PPC'],
  },
  {
    id: 'creative', label: 'Content & Creative', icon: 'fa-solid fa-palette',
    title: 'Content & Creative That Makes People Choose You.',
    desc: 'Good content does more than look good. We create copy, graphics, videos, and social content that attracts the right audience and moves them toward a buying decision, whether they find you through search, social, or paid ads.',
    stat: '2x', statLabel: 'Better Engagement',
    img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80',
    cta: 'Explore Content & Creative Services',
    subServices: ['Social Media Content & Management', 'SEO Blog Writing', 'Website Copywriting', 'Graphic Design', 'Short Form Video Content', 'Video Marketing & Editing', 'Ad Creative Design', 'Email Marketing', 'LinkedIn Content & Personal Branding', 'Brand Identity & Visual Design', 'UGC Content for Ads', 'Infographic Design', 'Content Marketing', 'AI Content Production'],
  },
  {
    id: 'whitelabel', label: 'White Label', icon: 'fa-solid fa-tag',
    title: 'White-Label Fulfillment Built to Grow Your Agency.',
    desc: 'Scale your agency without hiring. Our US-based strategy team runs the plan while our 40+ in-house specialists in India handle delivery. From SEO and PPC to web builds and GoHighLevel setups, everything ships under your brand.',
    stat: '40+', statLabel: 'In-House Specialists',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    cta: 'Explore White Label Services',
    subServices: ['White-Label SEO', 'White-Label PPC', 'White-Label Web Development', 'White-Label GoHighLevel Support', 'White-Label Marketing Automation', 'White-Label Content Marketing', 'White-Label Social Media Marketing', 'White-Label Email Marketing', 'White-Label Copywriting', 'White-Label Graphic Design', 'White-Label Link Building', 'Dedicated Agency Pods', 'White-Label Reporting & Dashboards'],
  },
  {
    id: 'automation', label: 'Marketing Automation', icon: 'fa-solid fa-robot',
    title: 'Automation That Grows Your Business 24/7.',
    desc: 'We build the automation systems that keep your business moving without you managing every step. Lead follow-up, appointment booking, CRM workflows, email and SMS sequences, all running automatically. Whether you are on GoHighLevel, Kajabi, HubSpot, or building from the ground up, we own it from setup to results.',
    stat: '62%', statLabel: 'Lower Lead Cost',
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
    cta: 'Explore Automation Services',
    subServices: ['GoHighLevel Setup & Automation', 'CRM Setup & Management', 'Lead Nurture Workflows', 'Email Marketing Automation', 'Appointment Booking Systems', 'Sales Pipeline Automation', 'SMS & WhatsApp Automation', 'AI Chatbot & Conversation Automation', 'Make (Integromat) Automation', 'Zapier Workflow Automation', 'n8n Workflow Automation', 'Reputation Management Automation', 'E-commerce Automation', 'Social Media Automation', 'API Integration', 'Reporting & Dashboard Automation', 'White-Label GoHighLevel Support'],
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState('web');
  const active = tabs.find(t => t.id === activeId)!;

  return (
    <section id="services" style={{ padding: '96px 0 104px', background: '#fff' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 52px' }}>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Digital Marketing Services Built<br />to Grow Your Business.
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.80 }}>
            Get found on Google and in AI search. Turn ad spend into revenue. Build websites and funnels that convert. Automate your CRM, bookings, and pipelines on GoHighLevel. From SEO, PPC, and content marketing to web design, automation, and white-label fulfillment, every service built to grow your business.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 6, marginBottom: 36 }}>
          {tabs.map(t => {
            const isActive = t.id === activeId;
            return (
              <button key={t.id} onClick={() => setActiveId(t.id)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 20px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: `1.5px solid ${isActive ? 'var(--color-primary)' : 'var(--color-border)'}`, background: isActive ? 'var(--color-primary)' : '#fff', color: isActive ? '#fff' : 'var(--color-text-muted)', transition: 'all .2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-muted)'; } }}
              >
                <i className={t.icon} style={{ fontSize: 11, color: isActive ? 'var(--ism-amber)' : 'inherit' }} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* ── Pane ── */}
        <div className="svc-pane" style={{ display: 'grid', gridTemplateColumns: '1fr 280px 1fr', borderRadius: 24, overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: '0 8px 48px rgba(0,35,83,.09)' }}>

          {/* LEFT */}
          <div style={{ padding: '48px 40px', background: '#fff' }}>

            {/* eyebrow chip */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 8, padding: '6px 12px', marginBottom: 20 }}>
              <i className={active.icon} style={{ fontSize: 12, color: 'var(--color-primary)' }} />
              <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '.07em' }}>{active.label}</span>
            </div>

            <h3 style={{ fontFamily: J, fontSize: 'clamp(20px,1.9vw,26px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 14, lineHeight: 1.28, letterSpacing: '-0.3px' }}>{active.title}</h3>

            <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: 32 }}>{active.desc}</p>

            <a href="#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 4px 16px rgba(255,176,0,.32)', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
            >
              {active.cta} <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
            </a>
          </div>

          {/* CENTER — image */}
          <div style={{ position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.img}
              alt={active.label}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* blue overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(30,77,195,.30) 0%, rgba(0,35,83,.75) 100%)' }} />

            {/* stat badge */}
            <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', background: 'var(--ism-amber)', borderRadius: 12, padding: '12px 20px', textAlign: 'center', boxShadow: '0 6px 24px rgba(0,0,0,.25)', whiteSpace: 'nowrap' }}>
              <div style={{ fontFamily: J, fontSize: 24, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>{active.stat}</div>
              <div style={{ fontFamily: I, fontSize: 10, color: 'var(--color-navy)', opacity: 0.75, marginTop: 3, fontWeight: 600 }}>{active.statLabel}</div>
            </div>

            {/* ISM badge */}
            <div style={{ position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,.15)', borderRadius: 8, padding: '6px 16px', border: '1px solid rgba(255,255,255,.30)', backdropFilter: 'blur(6px)', whiteSpace: 'nowrap' }}>
              <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '.04em' }}>Isuremedia ✓</span>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{ padding: '48px 40px', background: 'var(--color-bg-soft)', borderLeft: '1px solid var(--color-border)' }}>
            <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 20, height: 2, background: 'var(--ism-amber)', borderRadius: 2, display: 'inline-block', flexShrink: 0 }} />
              Services Included
            </p>
            <div className="svc-pills-scroll" style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 320, overflowY: 'auto' }}>
              {active.subServices.map(s => (
                <a key={s} href="#" className="svc-pill"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', borderRadius: 10, textDecoration: 'none', background: '#fff', border: '1px solid var(--color-border)', transition: 'all .15s' }}
                >
                  <span className="svc-pill-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ism-amber)', flexShrink: 0, transition: 'background .15s' }} />
                  <span className="svc-pill-text" style={{ fontFamily: I, fontSize: 13, fontWeight: 500, color: 'var(--color-navy)' }}>{s}</span>
                  <i className="fa-solid fa-arrow-right svc-pill-arrow" style={{ fontSize: 9, marginLeft: 'auto', color: 'transparent', transition: 'color .15s, transform .15s', flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .svc-pill:hover { background: var(--color-primary) !important; border-color: var(--color-primary) !important; }
        .svc-pill:hover .svc-pill-dot { background: var(--ism-amber) !important; }
        .svc-pill:hover .svc-pill-text { color: #fff !important; }
        .svc-pill:hover .svc-pill-arrow { color: rgba(255,255,255,.65) !important; transform: translateX(3px); }
        .svc-pills-scroll { scrollbar-width: none; }
        .svc-pills-scroll::-webkit-scrollbar { display: none; }
        @media (max-width: 960px) {
          .svc-pane { grid-template-columns: 1fr !important; }
          .svc-pane > div:nth-child(2) { height: 260px; }
        }
      `}</style>
    </section>
  );
}
