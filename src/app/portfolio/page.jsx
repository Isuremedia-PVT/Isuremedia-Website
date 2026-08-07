'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const TABS = [
  { name: 'All', icon: 'fa-solid fa-border-all' },
  { name: 'Web Design', icon: 'fa-solid fa-laptop-code' },
  { name: 'Funnels', icon: 'fa-solid fa-filter' },
  { name: 'SEO', icon: 'fa-solid fa-chart-line' },
  { name: 'Content', icon: 'fa-solid fa-pen-nib' },
];

const PROJECTS = [
  {
    name: 'ShopEasy E-Commerce Platform',
    category: 'Web Development',
    tag: 'Web Design',
    date: 'August 23, 2025',
    desc: 'Boosted online sales 200% with lightning-fast, mobile-friendly checkout flows.',
    img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1000&q=80',
    href: '/case-studies',
  },
  {
    name: 'Peak HVAC Services Portal',
    category: 'Web Design',
    tag: 'Web Design',
    date: 'July 14, 2025',
    desc: 'Redesigned booking portal that generated +360% organic traffic and 3x more bookings.',
    img: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1000&q=80',
    href: '/case-studies',
  },
  {
    name: 'FitFlow Mobile App Launch',
    category: 'Funnels & Growth',
    tag: 'Funnels',
    date: 'June 02, 2025',
    desc: 'High-converting funnel campaign driving 50,000+ app downloads in 60 days.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=80',
    href: '/case-studies',
  },
  {
    name: 'NovaDerm Skincare Rebrand',
    category: 'SEO & Organic Growth',
    tag: 'SEO',
    date: 'May 19, 2025',
    desc: 'DTC e-commerce SEO strategy resulting in 312% revenue growth year-over-year.',
    img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1000&q=80',
    href: '/case-studies',
  },
  {
    name: 'TechStack SaaS Dashboard',
    category: 'Funnels & Product',
    tag: 'Funnels',
    date: 'April 11, 2025',
    desc: 'SaaS user interface and lead-gen site driving 45% higher demo request conversion.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=80',
    href: '/case-studies',
  },
  {
    name: 'Urban Realty Group Portal',
    category: 'Content & Strategy',
    tag: 'Content',
    date: 'March 28, 2025',
    desc: 'Custom real estate platform with interactive listing filters and lead automation.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1000&q=80',
    href: '/case-studies',
  },
  {
    name: 'Luminary Legal Advisory',
    category: 'Web Design',
    tag: 'Web Design',
    date: 'February 15, 2025',
    desc: 'Modern legal practice site driving 186% more consultation requests in 90 days.',
    img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1000&q=80',
    href: '/case-studies',
  },
  {
    name: 'PulseMed Clinic Automation',
    category: 'Marketing Automation',
    tag: 'Content',
    date: 'January 10, 2025',
    desc: 'Patient acquisition and automated scheduling reducing no-shows by 61%.',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&q=80',
    href: '/case-studies',
  },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.tag === activeTab);
  }, [activeTab]);

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="port-hero-section" style={{ background: 'var(--color-bg-soft)', padding: '96px 0 110px', position: 'relative', overflow: 'hidden' }}>
          <div className="ism-container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="port-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* LEFT */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, marginBottom: 20 }}>
                  Our Work Speaks for Itself
                </h1>
                <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 36, maxWidth: 520 }}>
                  From high-converting websites to revenue-driving funnels and SEO campaigns — browse a selection of projects we&apos;ve delivered for clients across the globe.
                </p>
                <div className="port-hero-btns" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Start Your Project <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </a>
                </div>
              </div>

              {/* RIGHT — image */}
              <div className="port-hero-img-wrap" style={{ position: 'relative' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,35,83,.16)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/banner/portfolio.webp"
                    alt="Isuremedia portfolio work"
                    style={{ width: '100%', height: 420, objectFit: 'contain', display: 'block' }}
                    className="port-hero-img"
                  />
                </div>
                <div className="port-float-badge" style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', borderRadius: 14, padding: '16px 22px', boxShadow: '0 12px 32px rgba(0,35,83,.14)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-layer-group" style={{ color: 'var(--color-primary)', fontSize: 17 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 20, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>500+</div>
                    <div style={{ fontFamily: I, fontSize: 11.5, color: 'var(--color-text-muted)' }}>Projects Done</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 70, zIndex: 1, pointerEvents: 'none' }}>
            <path d="M0,50 C360,110 1080,-10 1440,50 L1440,100 L0,100 Z" fill="#fff" />
          </svg>
          <style>{`
            @media(max-width:900px){.port-hero-section{padding:56px 0 100px !important;} .port-hero-grid{grid-template-columns:1fr!important; gap:32px!important;} .port-hero-img{height:280px!important;}}
            @media(max-width:540px){.port-hero-section{padding:40px 0 110px !important;} .port-hero-section svg{height:38px!important;} .port-hero-btns{flex-direction:column!important; align-items:stretch!important; gap:12px!important;} .port-hero-btns a{width:100%!important; text-align:center!important; justify-content:center!important; box-sizing:border-box!important;} .port-hero-img{height:200px!important;} .port-float-badge{bottom:12px!important;left:12px!important;padding:12px 16px!important;}}
          `}</style>
        </section>

        {/* ── FILTER TABS + GRID ── */}
        <section className="port-filter-section" style={{ padding: '88px 0 120px', background: '#fff' }}>
          <div className="ism-container">

            {/* Filter Tabs — matching screenshot style */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 64 }}>
              <div
                className="port-tab-bar"
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
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.name;
                  return (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
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
                        padding: '10px 22px',
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
                      <i className={tab.icon} style={{ fontSize: 13, opacity: isActive ? 1 : 0.6 }} />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Project grid — 2 cards per row */}
            <div className="port-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 44 }}>
              {filteredProjects.map((p, i) => (
                <a key={i} href={p.href} className="port-card">
                  {/* Image wrap */}
                  <div className="port-card-img-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.name} className="port-card-img" />
                    
                    {/* Hover tint overlay */}
                    <div className="port-card-overlay" />

                    {/* Hover View Glass Button */}
                    <div className="port-card-view-btn">
                      <span style={{ fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '.03em' }}>View</span>
                    </div>

                    {/* Bottom overlay bar inside image */}
                    <div className="port-card-tag-bar">
                      <span style={{ fontFamily: I, fontSize: 13.5, fontWeight: 600, color: 'rgba(255,255,255,0.95)', letterSpacing: '.01em' }}>
                        {p.category} &nbsp;•&nbsp; {p.date}
                      </span>
                    </div>
                  </div>

                  {/* Card Info Below Image */}
                  <div className="port-card-info" style={{ padding: '6px 4px 0 4px' }}>
                    <h3 className="port-card-title" style={{ fontFamily: J, fontSize: 22, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 8, lineHeight: 1.32, letterSpacing: '-0.3px', transition: 'color .2s ease' }}>
                      {p.name}
                    </h3>
                    <p style={{ fontFamily: I, fontSize: 15, color: '#64748B', lineHeight: 1.65, margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <style>{`
            .port-card {
              text-decoration: none;
              display: flex;
              flex-direction: column;
              gap: 18px;
              cursor: pointer;
            }

            .port-card-img-wrap {
              position: relative;
              width: 100%;
              height: 380px;
              border-radius: 20px;
              overflow: hidden;
              background: #0f172a;
              box-shadow: 0 10px 30px rgba(0, 35, 83, 0.08);
              transition: box-shadow 0.35s ease;
            }

            .port-card:hover .port-card-img-wrap {
              box-shadow: 0 20px 48px rgba(0, 35, 83, 0.16);
            }

            .port-card-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
              transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .port-card:hover .port-card-img {
              transform: scale(1.05);
            }

            .port-card-overlay {
              position: absolute;
              inset: 0;
              background: rgba(15, 23, 42, 0.28);
              opacity: 0;
              transition: opacity 0.35s ease;
              z-index: 1;
            }

            .port-card:hover .port-card-overlay {
              opacity: 1;
            }

            .port-card-view-btn {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%) scale(0.75);
              width: 72px;
              height: 72px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.22);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              border: 1.5px solid rgba(255, 255, 255, 0.80);
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 0;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
              pointer-events: none;
              z-index: 3;
              box-shadow: 0 10px 28px rgba(0,0,0,0.22);
            }

            .port-card:hover .port-card-view-btn {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }

            .port-card-tag-bar {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 16px 24px;
              background: linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.88) 100%);
              border-top: 1px solid rgba(255, 255, 255, 0.35);
              backdrop-filter: blur(4px);
              -webkit-backdrop-filter: blur(4px);
              display: flex;
              align-items: center;
              z-index: 2;
            }

            .port-card:hover .port-card-title {
              color: var(--color-primary) !important;
            }

            @media(max-width:900px){
              .port-filter-section { padding:64px 0 !important; }
              .port-grid { grid-template-columns: repeat(2,1fr) !important; gap: 28px !important; }
              .port-card-img-wrap { height: 300px !important; }
            }
            @media(max-width:640px){
              .port-filter-section { padding:48px 0 !important; }
              .port-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
              .port-card-img-wrap { height: 250px !important; }
              .port-tab-bar { border-radius: 16px !important; gap: 4px !important; padding: 4px !important; width: 100% !important; justify-content: flex-start !important; overflow-x: auto !important; -webkit-overflow-scrolling: touch; }
              .port-tab-bar button { padding: 8px 16px !important; font-size: 12.5px !important; flex-shrink: 0 !important; }
            }
            @media(max-width:480px){
              .port-filter-section { padding:40px 0 !important; }
              .port-card-img-wrap { height: 230px !important; }
            }
          `}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
