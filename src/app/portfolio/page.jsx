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
  // ── Web Development, WordPress (Website) ──
  { name: 'Tortlink', category: 'Website', tag: 'Web Design', date: '2025', desc: 'A legal services website built on WordPress with a clean, credibility-first design.', img: '/portfolio/web-development/tortlink.webp', href: 'https://tortlink.com/' },
  { name: 'Marie Guerin', category: 'Website', tag: 'Web Design', date: '2025', desc: 'A professional portfolio site built to present the client’s work and services clearly.', img: '/portfolio/web-development/marie-guerin.webp', href: 'https://marieguerin.ca/' },
  { name: 'Andrea Petrone', category: 'Website', tag: 'Web Design', date: '2025', desc: 'A personal and professional site built on WordPress with a modern, minimal layout.', img: '/portfolio/web-development/andrea-petrone.webp', href: 'https://www.andreapetrone.com/' },
  { name: 'Get Client Access', category: 'Website', tag: 'Web Design', date: '2025', desc: 'A client management platform built on WordPress for streamlined client onboarding.', img: '/portfolio/web-development/get-client-access.webp', href: 'https://getclientaccess.com/' },
  { name: 'Brown Legal Immigration', category: 'Website', tag: 'Web Design', date: '2025', desc: 'An immigration law firm website designed to build trust and drive consultation requests.', img: '/portfolio/web-development/brown-legal-immigration.webp', href: 'https://brownlegalimmigration.com/' },
  { name: 'Next Generation K9', category: 'Website', tag: 'Web Design', date: '2025', desc: 'A dog training services website with service pages, booking, and a clear brand voice.', img: '/portfolio/web-development/next-generation-k9.webp', href: 'https://nextgenerationk9.com/' },
  { name: 'Geomatrix', category: 'Website', tag: 'Web Design', date: '2025', desc: 'A technology and mapping services site built on WordPress with a technical, professional feel.', img: '/portfolio/web-development/geomatrix.webp', href: 'https://geomatrix.co.in/' },
  { name: 'Park City', category: 'Website', tag: 'Web Design', date: '2025', desc: 'A community and tourism website showcasing local attractions and services.', img: '/portfolio/web-development/park-city.webp', href: 'https://onlineparkcity.wpenginepowered.com/' },
  { name: 'Jurissa Bank', category: 'Website', tag: 'Web Design', date: '2025', desc: 'A financial services website built on WordPress with a secure, trustworthy design.', img: '/portfolio/web-development/jurissa-bank.webp', href: 'https://jurissabank.com/' },

  // ── Web Development, GoHighLevel (Website + Landing Page) ──
  { name: 'Innovat3 Solutions', category: 'Website', tag: 'Web Design', date: '2025', desc: 'A business solutions platform built on GoHighLevel with funnels and CRM integration.', img: '/portfolio/web-development/innovat3-solutions.webp', href: 'https://www.innovat3solutions.com/' },
  { name: 'Rise Reign Rule', category: 'Website', tag: 'Web Design', date: '2025', desc: 'A coaching and business growth site built on GoHighLevel with lead capture funnels.', img: '/portfolio/web-development/rise-reign-rule.webp', href: 'https://risereignrule.com/' },
  { name: 'Dahya Dentistry', category: 'Website', tag: 'Web Design', date: '2025', desc: 'A dental practice site with GoHighLevel-powered booking and patient management.', img: '/portfolio/web-development/dahya-dentistry.webp', href: 'https://dahyadentistry.com/' },
  { name: 'The Lauterjung Law Office', category: 'Landing Page', tag: 'Web Design', date: '2025', desc: 'A law firm landing page built on GoHighLevel with intake automation and lead tracking.', img: '/portfolio/web-development/lauterjung-law-office.webp', href: 'https://app.arcboost.com/v2/preview/8LNHWVdjMSFO4cmAk5ka' },
  { name: 'Online Health Care', category: 'Landing Page', tag: 'Web Design', date: '2025', desc: 'A healthcare services landing page built on GoHighLevel with appointment scheduling.', img: '/portfolio/web-development/online-health-care.webp', href: 'https://app.innovat3solutions.com/v2/preview/3cHo9h8ZnkdP9m9B2a8v' },
  { name: 'Confident Dental Care', category: 'Landing Page', tag: 'Web Design', date: '2025', desc: 'A dental practice landing page with automated booking and follow-up built into GoHighLevel.', img: '/portfolio/web-development/confident-dental-care.webp', href: 'https://app.innovat3solutions.com/v2/preview/qnIYZy4lPtFVL4XAiVhb' },
  { name: 'Attornia', category: 'Landing Page', tag: 'Web Design', date: '2025', desc: 'A legal services landing page built on GoHighLevel with lead routing automation.', img: '/portfolio/web-development/attornia.webp', href: 'https://app.innovat3solutions.com/v2/preview/AuBRkKspAjiU84St4z7z' },
  { name: 'Soccer Training Academy', category: 'Landing Page', tag: 'Web Design', date: '2025', desc: 'A sports training program landing page with GoHighLevel-powered enrollment funnels.', img: '/portfolio/web-development/soccer-training-academy.webp', href: 'https://app.innovat3solutions.com/v2/preview/YrREUbvi5dXzeih0Raww' },
  { name: 'Law Offices of Bradford L. Treusch', category: 'Landing Page', tag: 'Web Design', date: '2025', desc: 'A law firm landing page built on GoHighLevel with automated client intake.', img: '/portfolio/web-development/law-offices-bradford-treusch.webp', href: 'https://app.arcboost.com/v2/preview/OMYjnXzK6fGM3LZ6GIM7' },

  // ── Web Development, Ecommerce ──
  { name: 'Happy Haves', category: 'Ecommerce Store', tag: 'Web Design', date: '2025', desc: 'A lifestyle retail e-commerce store built for a smooth, mobile-first shopping experience.', img: '/portfolio/web-development/happy-haves.webp', href: 'https://www.happyhaves.com/' },
  { name: 'Cape Diablo', category: 'Ecommerce Store', tag: 'Web Design', date: '2025', desc: 'A product retail store built with conversion-focused product and checkout pages.', img: '/portfolio/web-development/cape-diablo.webp', href: 'https://www.capediablo.com/' },
  { name: 'Fused Fine Jewelry', category: 'Ecommerce Store', tag: 'Web Design', date: '2025', desc: 'A luxury jewelry retailer’s online store with a premium, high-end design.', img: '/portfolio/web-development/fused-fine-jewelry.webp', href: 'https://fusedfinejewelrynyc.com/' },
  { name: 'Mi Amor Pup', category: 'Ecommerce Store', tag: 'Web Design', date: '2025', desc: 'A pet products e-commerce store built for easy browsing and fast checkout.', img: '/portfolio/web-development/mi-amor-pup.webp', href: 'https://miamorpup.com/' },
  { name: 'Garnus', category: 'Ecommerce Store', tag: 'Web Design', date: '2025', desc: 'A retail e-commerce store built with a clean product catalogue and checkout flow.', img: '/portfolio/web-development/garnus.webp', href: 'https://garnusindia.com/' },

  // ── Web Development, Custom ──
  { name: 'GHL to CS Conversation', category: 'Custom Development', tag: 'Web Design', date: '2025', desc: 'A custom integration connecting GoHighLevel conversations to an external support system.', img: '/portfolio/web-development/ghl-cs-conversation.webp', href: '/contact' },
  { name: 'Google Review Automation', category: 'Custom Development', tag: 'Web Design', date: '2025', desc: 'A custom-built review management tool for automating Google review requests.', img: '/portfolio/web-development/google-review.webp', href: '/contact' },
  { name: 'GHL to Club Planner', category: 'Custom Development', tag: 'Web Design', date: '2025', desc: 'A custom integration syncing GoHighLevel with a club scheduling platform.', img: '/portfolio/web-development/ghl-to-club-planner.webp', href: '/contact' },
  { name: 'GHL to CareStack', category: 'Custom Development', tag: 'Web Design', date: '2025', desc: 'A custom integration connecting GoHighLevel with CareStack dental practice software.', img: '/portfolio/web-development/ghl-to-carestack.webp', href: '/contact' },
  { name: 'Data Visualization Dashboard', category: 'Custom Development', tag: 'Web Design', date: '2025', desc: 'A custom Node.js analytics and reporting dashboard built for real-time data visualization.', img: '/portfolio/web-development/data-visualization.webp', href: '/contact' },
  { name: 'GHL to SolarQuotes', category: 'Custom Development', tag: 'Web Design', date: '2025', desc: 'A custom integration connecting GoHighLevel with SolarQuotes for solar businesses.', img: '/portfolio/web-development/ghl-to-solarquotes.webp', href: '/contact' },
  { name: 'HRMS', category: 'Custom Development', tag: 'Web Design', date: '2025', desc: 'A custom-built human resources management system for internal team operations.', img: '/portfolio/web-development/hrms.webp', href: '/contact' },
  { name: 'Cadd Kampus', category: 'Custom Development', tag: 'Web Design', date: '2025', desc: 'A custom educational platform built for course delivery and student management.', img: '/portfolio/web-development/cadd-kampus.webp', href: '/contact' },
  { name: 'Cocoon Baby', category: 'Custom Development', tag: 'Web Design', date: '2025', desc: 'A custom-built site for a baby products and services business.', img: '/portfolio/web-development/cocoon-baby.webp', href: '/contact' },

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
                  From high-converting websites to revenue-driving funnels and SEO campaigns, browse a selection of projects we&apos;ve delivered for clients across the globe.
                </p>
                <div className="port-hero-btns" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Start Your Project <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </a>
                </div>
              </div>

              {/* RIGHT, image */}
              <div className="port-hero-img-wrap" style={{ position: 'relative' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden' }}>
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
            <h2 style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>Portfolio</h2>

            {/* Filter Tabs, matching screenshot style */}
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

            {/* Project grid, 2 cards per row */}
            <div className="port-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 44 }}>
              {filteredProjects.map((p, i) => {
                const isExternal = p.href.startsWith('http');
                return (
                <a key={i} href={p.href} className="port-card" {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
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
                );
              })}
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
