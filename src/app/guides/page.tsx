'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const GUIDES = [
  {
    icon: 'fa-solid fa-magnifying-glass-chart',
    category: 'SEO',
    title: 'The Ultimate SEO Guide for 2026',
    desc: 'Everything you need to know to rank higher on Google in 2026 — from technical foundations to AI-driven content strategies.',
  },
  {
    icon: 'fa-solid fa-bullseye',
    category: 'Paid Ads',
    title: 'How to Run Google Ads on a Small Budget',
    desc: 'A practical step-by-step guide to launching profitable Google Ads campaigns without burning through your marketing budget.',
  },
  {
    icon: 'fa-solid fa-bolt',
    category: 'Automation',
    title: 'GoHighLevel Starter Guide',
    desc: 'Get your GoHighLevel account set up, connected, and generating leads within your first week — written for agency owners and SMBs.',
  },
  {
    icon: 'fa-solid fa-tag',
    category: 'White-Label',
    title: 'White-Label Agency Playbook',
    desc: 'Learn how to build, price, and sell white-label digital marketing services and scale your agency without growing your headcount.',
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    category: 'E-Commerce',
    title: 'E-Commerce Marketing Blueprint',
    desc: 'The complete marketing playbook for e-commerce brands — SEO, paid ads, email flows, retargeting, and CRO all in one place.',
  },
  {
    icon: 'fa-solid fa-robot',
    category: 'AI & SEO',
    title: 'AI SEO: What You Need to Know',
    desc: 'Understand how AI is reshaping search and content in 2026 and what you need to do now to stay visible in AI-powered results.',
  },
];

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '104px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Free Resources</span>
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(34px,5vw,68px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, maxWidth: 860, margin: '0 auto 24px' }}>
              Free Digital Marketing Guides &amp; Resources
            </h1>
            <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 620, margin: '0 auto 44px' }}>
              Practical, no-fluff guides written by Isuremedia specialists. Download any guide for free and start applying the strategies today.
            </p>
            <a href="#guides-grid" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
              Browse Guides <i className="fa-solid fa-arrow-down" style={{ fontSize: 11 }} />
            </a>
          </div>
        </section>

        {/* ── GUIDES GRID ── */}
        <section id="guides-grid" style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>Download Free</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>
                Six Guides. Zero Cost.
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
                Expertly researched, practical guides that cover the full digital marketing stack — all free to download.
              </p>
            </div>
            <div className="guides-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
              {GUIDES.map((g, i) => (
                <div key={i} style={{ background: 'var(--color-bg-soft)', borderRadius: 16, border: '1px solid var(--color-border)', padding: '40px 36px', transition: 'all .22s', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <i className={g.icon} style={{ fontSize: 22, color: 'var(--color-primary)' }} />
                  </div>
                  <span style={{ display: 'inline-block', fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-primary)', background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '3px 12px', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 16, alignSelf: 'flex-start' }}>{g.category}</span>
                  <h3 style={{ fontFamily: J, fontSize: 19, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 14, lineHeight: 1.3, flex: 1 }}>{g.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 28 }}>{g.desc}</p>
                  <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 4px 14px rgba(255,176,0,.3)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Download Free Guide <i className="fa-solid fa-download" style={{ fontSize: 10 }} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.guides-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.guides-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
