'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const STEPS = [
  { n: '01', icon: 'fa-solid fa-user-plus',    title: 'Sign Up',  desc: 'Create your free affiliate account in under 2 minutes. No upfront cost, no technical knowledge required.' },
  { n: '02', icon: 'fa-solid fa-share-nodes',   title: 'Refer',    desc: 'Share your unique referral link with business owners, entrepreneurs, or anyone who needs digital marketing help.' },
  { n: '03', icon: 'fa-solid fa-circle-dollar-to-slot', title: 'Earn', desc: 'Earn 15% recurring commission on every invoice your referral pays — every month, for the lifetime of the client.' },
];

const BENEFITS = [
  {
    icon: 'fa-solid fa-rotate',
    title: '15% Recurring Commission',
    desc: 'Unlike one-time payouts, you earn every time your referred client pays an invoice. Build a growing passive income stream that compounds month after month.',
  },
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Real-Time Dashboard',
    desc: 'Track clicks, signups, active referrals, pending commissions, and total lifetime earnings in your live affiliate dashboard — updated in real time.',
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Dedicated Affiliate Manager',
    desc: 'You get a named affiliate manager who handles your questions, provides promotional assets, and helps you maximise your commission earnings.',
  },
];

export default function AffiliatesPage() {
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
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Affiliate Program</span>
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(34px,5vw,68px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, maxWidth: 900, margin: '0 auto 24px' }}>
              Earn 15% Recurring Commission — Partner with ISM
            </h1>
            <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 640, margin: '0 auto 44px' }}>
              Refer clients and earn recurring commissions on every invoice they pay, for life. No cap. No expiry. Just passive income that grows as they grow.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Join the Program Free <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
              <a href="#how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)'; }}>
                How It Works
              </a>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>How It Works</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>
                Three Steps to Earning
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 540, margin: '0 auto' }}>
                Getting started takes minutes. Earning recurring commissions lasts for years.
              </p>
            </div>
            <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
              {STEPS.map((s, i) => (
                <div key={i} style={{ background: 'var(--color-bg-soft)', borderRadius: 16, border: '1px solid var(--color-border)', padding: '40px 36px', textAlign: 'center', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 8px 24px rgba(30,77,195,.25)' }}>
                    <span style={{ fontFamily: J, fontSize: 15, fontWeight: 800, color: '#fff' }}>{s.n}</span>
                  </div>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <i className={s.icon} style={{ fontSize: 20, color: 'var(--color-primary)' }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 20, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 14 }}>{s.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.78, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:860px){.steps-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* ── BENEFITS ── */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>Benefits</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>
                Why Affiliates Love Partnering with ISM
              </h2>
            </div>
            <div className="benefits-aff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
              {BENEFITS.map((b, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--color-border)', padding: '40px 36px', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <i className={b.icon} style={{ fontSize: 22, color: 'var(--color-primary)' }} />
                  </div>
                  <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, marginBottom: 18 }} />
                  <h3 style={{ fontFamily: J, fontSize: 20, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 14 }}>{b.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.78, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:860px){.benefits-aff-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* ── SIGN UP CTA ── */}
        <section style={{ padding: '104px 0', background: 'var(--color-navy)' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,176,0,.15)', border: '1px solid rgba(255,176,0,.3)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--ism-amber)', display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--ism-amber)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Ready to Earn?</span>
            </div>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,52px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', marginBottom: 20, lineHeight: 1.12 }}>
              Start Earning Recurring Commissions Today
            </h2>
            <p style={{ fontFamily: I, fontSize: 17, color: 'rgba(255,255,255,.72)', lineHeight: 1.78, marginBottom: 40 }}>
              Join our affiliate program for free. No contracts, no monthly fees — just a straightforward revenue share that grows with every client you refer.
            </p>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 40px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
              Apply to Become an Affiliate <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
