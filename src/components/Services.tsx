'use client';

import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const tabs = [
  {
    id: 'web', label: 'Websites & Funnels', icon: 'fa-solid fa-globe',
    title: 'Websites & Funnels Built to Convert',
    desc: 'We design and build fast, conversion optimized websites and funnels that plug directly into your CRM and automation stack. Whether you need a new site, a sales funnel, or GoHighLevel build-outs, our in-house team handles strategy, design, and execution end to end.',
    stat: '3x', statLabel: 'Higher Conversion Rate',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80',
    cta: 'Discover Services',
    subServices: ['Business Websites', 'Landing Pages', 'Sales Funnels', 'GoHighLevel Funnels & Automation', 'Website Redesign', 'Conversion Rate Optimization (CRO)', 'Website Maintenance & Support', 'AI-Powered Website Personalization'],
  },
  {
    id: 'seo', label: 'SEO', icon: 'fa-solid fa-magnifying-glass',
    title: 'SEO & Organic Growth Engine',
    desc: 'We build an organic traffic engine that compounds over time. Our team blends technical SEO, content strategy, and authority link building to help you rank for high intent keywords and attract qualified leads month after month.',
    stat: '225%', statLabel: 'Avg. Traffic Growth',
    img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80',
    cta: 'Discover SEO Services',
    subServices: ['Technical SEO', 'On-Page SEO', 'Local SEO', 'E commerce SEO', 'Link Building', 'SEO Content Strategy', 'SEO Audits', 'AI SEO', 'AEO (Answer Engine Optimization)', 'White Label SEO'],
  },
  {
    id: 'ppc', label: 'PPC / Paid Ads', icon: 'fa-solid fa-chart-bar',
    title: 'Paid Ads & Performance Marketing',
    desc: 'We make every ad dollar accountable. We plan, launch, and optimize PPC and paid social campaigns that are tightly aligned with your funnels, so you get predictable leads, clear ROAS, and reporting that actually makes sense.',
    stat: '5.2x', statLabel: 'Average ROAS',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    cta: 'Discover PPC Services',
    subServices: ['PPC Management', 'Google Ads', 'Meta Ads (Facebook & Instagram)', 'LinkedIn Ads', 'YouTube Ads', 'Programmatic Advertising', 'Retargeting & Remarketing', 'Paid Social Media Advertising', 'Funnel Strategy & Tracking Setup', 'White Label PPC'],
  },
  {
    id: 'creative', label: 'Content & Creative', icon: 'fa-solid fa-palette',
    title: 'Content & Creative That Converts',
    desc: 'Great strategy needs great assets. Our content and design team creates on brand copy, graphics, and social content that plug directly into your SEO, funnels, and ad campaigns — so every click lands on something worth reading.',
    stat: '2x', statLabel: 'Better Engagement',
    img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80',
    cta: 'Discover Content Services',
    subServices: ['Content Marketing', 'SEO Blog Writing', 'Website Copywriting', 'Social Media Content & Management', 'Graphic Design', 'Brand Identity & Visual Design', 'Ad Creative Design', 'Video Marketing & Editing', 'Email Marketing', 'AI Content Production'],
  },
  {
    id: 'whitelabel', label: 'White Label', icon: 'fa-solid fa-tag',
    title: 'White Label Fulfillment for Growing Agencies',
    desc: 'Scale your agency without hiring. Work directly with our US-based strategy team while our 40+ in house specialists handle delivery behind the scenes. From SEO and PPC to web builds and GoHighLevel setups — everything ships under your brand.',
    stat: '40+', statLabel: 'In-House Specialists',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    cta: 'Discover White Label',
    subServices: ['White Label PPC', 'White Label Social Media Marketing', 'White Label Web Development', 'White Label GoHighLevel Support', 'White Label Content Marketing', 'White Label Link Building', 'White Label Graphic Design', 'Dedicated Agency Pods', 'White Label Reporting & Dashboards'],
  },
  {
    id: 'automation', label: 'Automation', icon: 'fa-solid fa-robot',
    title: 'Marketing Automation That Keeps Your Pipeline Full',
    desc: 'We set up the systems that follow up with leads, book appointments, and move people through your funnel automatically. You stay focused on running your business while everything behind the scenes keeps working.',
    stat: '62%', statLabel: 'Lower Lead Cost',
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
    cta: 'Discover Automation',
    subServices: ['GoHighLevel Setup & Automation', 'CRM Setup & Management', 'Lead Nurture Workflows', 'API Integration', 'Email Marketing Automation', 'Appointment Booking Systems', 'Sales Pipeline Automation', 'SMS & WhatsApp Automation', 'White Label GoHighLevel Support', 'AI Chatbot & Conversation Automation'],
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ism-amber)', display: 'inline-block' }} />
            <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, letterSpacing: '.10em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>What We Do</span>
          </div>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Get All Your Digital Marketing<br />Done in One Place.
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.80 }}>
            Growing online takes more than just good SEO or a well-designed website. It takes all the right pieces working together — search rankings, paid campaigns, strong content, a website that converts, and a team that knows how to connect all of it.
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
