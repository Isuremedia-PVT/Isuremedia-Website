'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const INDUSTRIES = [
  {
    icon: 'fa-solid fa-wrench',
    title: 'HVAC & Home Services',
    desc: 'More calls, more bookings, more revenue — with local SEO, Google Ads, and automation built for service businesses.',
    href: '/industries/hvac-home-services',
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    title: 'E-Commerce',
    desc: 'Scale your online store with performance marketing — shopping ads, email flows, SEO, and CRO that lift ROAS.',
    href: '/industries/ecommerce',
  },
  {
    icon: 'fa-solid fa-microchip',
    title: 'SaaS & Tech',
    desc: 'Pipeline-building marketing for SaaS companies — content, LinkedIn Ads, SEO, and nurture sequences that drive qualified demos.',
    href: '/industries/saas-tech',
  },
  {
    icon: 'fa-solid fa-bullhorn',
    title: 'Marketing Agencies',
    desc: 'White-label fulfillment under your brand — SEO, PPC, content, web design, and automation. NDA-protected and deadline-reliable.',
    href: '/industries/marketing-agencies',
  },
  {
    icon: 'fa-solid fa-house',
    title: 'Real Estate',
    desc: 'Fill your pipeline with qualified buyers and sellers using local SEO, Google Ads, Facebook lead ads, and CRM automation.',
    href: '/industries/real-estate',
  },
  {
    icon: 'fa-solid fa-globe',
    title: 'All Industries',
    desc: 'More industries coming soon. Reach out to discuss how we can build a strategy tailored to your sector.',
    href: '#',
    comingSoon: true,
  },
];

const STATS = [
  { num: '12+',  label: 'Industries Served'  },
  { num: '400+', label: 'Clients'             },
  { num: '98%',  label: 'Retention Rate'      },
  { num: '2019', label: 'Since'               },
];

const WHY = [
  {
    icon: 'fa-solid fa-building',
    title: 'Industry Expertise',
    desc: 'We have worked in your sector long enough to know what Google punishes, what converts, and what actually moves the needle for your type of business.',
  },
  {
    icon: 'fa-solid fa-book-open',
    title: 'Proven Playbooks',
    desc: 'Every industry engagement starts from a battle-tested playbook refined across hundreds of client campaigns — not a blank-slate guess.',
  },
  {
    icon: 'fa-solid fa-user-tie',
    title: 'Dedicated Account Managers',
    desc: 'One point of contact who understands your industry, your goals, and your account inside out. Available, responsive, and accountable.',
  },
];

export default function IndustriesPage() {
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
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Industries</span>
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(34px,5vw,68px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, marginBottom: 24, maxWidth: 860, margin: '0 auto 24px' }}>
              Digital Marketing for Every Industry
            </h1>
            <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 620, margin: '0 auto 44px' }}>
              We specialise in the channels and strategies that move the needle in your sector. Browse your industry below to see exactly how we grow businesses like yours.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Get Free Strategy Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
              <a href="#industries-grid" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)'; }}>
                Browse Industries
              </a>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
            <div className="ind-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--color-border)', borderRadius: 16, overflow: 'hidden' }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: '40px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 'clamp(40px,4.5vw,64px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 6, letterSpacing: '-1px' }}>{s.num}</div>
                  <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, margin: '0 auto 10px' }} />
                  <div style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:640px){.ind-stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
        </section>

        {/* ── INDUSTRIES GRID ── */}
        <section id="industries-grid" style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Your Sector</span>
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>
                We Know Your Industry
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 600, margin: '0 auto' }}>
                Select your industry below to see the specific strategies, channels, and results we deliver for businesses in your space.
              </p>
            </div>
            <div className="ind-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
              {INDUSTRIES.map((ind, i) => (
                <a key={i} href={ind.href} style={{ display: 'block', textDecoration: 'none', background: '#fff', borderRadius: 16, border: '1px solid var(--color-border)', padding: '40px 36px', transition: 'all .22s', cursor: ind.comingSoon ? 'default' : 'pointer', position: 'relative', overflow: 'hidden' }}
                  onMouseEnter={e => { if (!ind.comingSoon) { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; } }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  {ind.comingSoon && (
                    <div style={{ position: 'absolute', top: 16, right: 16, background: 'var(--ism-amber)', borderRadius: 100, padding: '3px 12px', fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase' }}>Coming Soon</div>
                  )}
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <i className={ind.icon} style={{ fontSize: 22, color: 'var(--color-primary)' }} />
                  </div>
                  <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, marginBottom: 16 }} />
                  <h3 style={{ fontFamily: J, fontSize: 20, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 12 }}>{ind.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 24 }}>{ind.desc}</p>
                  {!ind.comingSoon && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.04em', textTransform: 'uppercase' }}>
                      Learn More <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.ind-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.ind-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* ── WHY ISUREMEDIA ── */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Why Isuremedia</span>
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>
                Sector Knowledge That Makes the Difference
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
                Generic marketing burns budget. Industry-specific strategy compounds results.
              </p>
            </div>
            <div className="ind-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {WHY.map((w, i) => (
                <div key={i} style={{ background: 'var(--color-bg-soft)', borderRadius: 16, border: '1px solid var(--color-border)', padding: '40px 32px', textAlign: 'center', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 6px 20px rgba(255,176,0,.30)' }}>
                    <i className={w.icon} style={{ fontSize: 22, color: 'var(--color-navy)' }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 18, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 14 }}>{w.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:860px){.ind-why-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:540px){.ind-why-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
