'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const STATS = [
  { num: '150+', label: 'Websites Built' },
  { num: '400+', label: 'Clients Served' },
  { num: '98%',  label: 'Satisfaction Rate' },
  { num: '2019', label: 'Established' },
];

const TABS = ['All', 'Web Design', 'Funnels', 'SEO', 'Content'];

const PROJECTS = [
  { name: 'Peak HVAC Services',    category: 'Web Design', icon: 'fa-solid fa-wind',           color: 'var(--ism-blue-50)' },
  { name: 'LegalEase Solicitors',  category: 'Web Design', icon: 'fa-solid fa-scale-balanced',  color: 'var(--ism-blue-50)' },
  { name: 'FitFlow App Launch',     category: 'Funnels',    icon: 'fa-solid fa-dumbbell',        color: '#fff8e1' },
  { name: 'NovaDerm Skincare',      category: 'Branding',   icon: 'fa-solid fa-sparkles',        color: '#fff8e1' },
  { name: 'TechStack SaaS',         category: 'Funnels',    icon: 'fa-solid fa-code',            color: 'var(--ism-blue-50)' },
  { name: 'Urban Realty Group',     category: 'Web Design', icon: 'fa-solid fa-building',        color: 'var(--ism-blue-50)' },
];

export default function PortfolioPage() {
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
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Portfolio</span>
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(34px,5vw,68px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, maxWidth: 860, margin: '0 auto 24px' }}>
              Our Work Speaks for Itself
            </h1>
            <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 620, margin: '0 auto 44px' }}>
              From high-converting websites to revenue-driving funnels and SEO campaigns — browse a selection of projects we&apos;ve delivered for clients across the globe.
            </p>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
              Start Your Project <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
            </a>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
            <div className="port-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--color-border)', borderRadius: 16, overflow: 'hidden' }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: '40px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 'clamp(40px,4.5vw,64px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 6, letterSpacing: '-1px' }}>{s.num}</div>
                  <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, margin: '0 auto 10px' }} />
                  <div style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:640px){.port-stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
        </section>

        {/* ── FILTER TABS + GRID ── */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

            {/* Filter tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 64 }}>
              {TABS.map((tab, i) => (
                <button key={tab} style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: i === 0 ? '#fff' : 'var(--color-primary)', background: i === 0 ? 'var(--color-primary)' : 'transparent', border: '2px solid var(--color-primary)', borderRadius: 100, padding: '9px 24px', cursor: 'pointer', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s' }}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Project grid */}
            <div className="port-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
              {PROJECTS.map((p, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--color-border)', overflow: 'hidden', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  {/* Card image placeholder */}
                  <div style={{ height: 200, background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--color-border)' }}>
                    <i className={p.icon} style={{ fontSize: 52, color: 'var(--color-primary)', opacity: .25 }} />
                  </div>
                  <div style={{ padding: '28px 30px' }}>
                    <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase', marginBottom: 10, display: 'block' }}>{p.category}</span>
                    <h3 style={{ fontFamily: J, fontSize: 19, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 20, lineHeight: 1.3 }}>{p.name}</h3>
                    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'gap .18s' }}
                      onMouseEnter={e => (e.currentTarget.style.gap = '12px')}
                      onMouseLeave={e => (e.currentTarget.style.gap = '7px')}>
                      View Project <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.port-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.port-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
