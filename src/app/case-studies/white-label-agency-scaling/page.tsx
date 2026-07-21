'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';


export default function WhiteLabelCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* 1. HERO */}
        <section style={{ background: '#fff', padding: '80px 0 64px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            {/* Breadcrumb */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' as const }}>
              <a href="/" style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</a>
              <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)' }}>{'>'}</span>
              <a href="/case-studies" style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', textDecoration: 'none' }}>Case Studies</a>
              <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)' }}>{'>'}</span>
              <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-primary)', fontWeight: 600 }}>White Label Agency Scaling</span>
            </nav>

            {/* Tags row */}
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, marginBottom: 4 }}>
              {['Marketing Agencies', 'White Label SEO + PPC', 'UK', '8 months'].map((tag) => (
                <span key={tag} style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', fontSize: 12, fontFamily: I, color: 'var(--color-text-muted)', fontWeight: 600 }}>{tag}</span>
              ))}
            </div>

            {/* H1 */}
            <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(28px,3.2vw,52px)', color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, margin: '20px 0 32px' }}>
              From 12 to 31 Active Clients in 8 Months. Zero New Hires.
            </h1>

            {/* Three-metric strip */}
            <div className="cs-metrics" style={{ display: 'flex', gap: 16 }}>
              {[
                { num: '19', label: 'New Client Accounts' },
                { num: '0', label: 'ISM Brand Mentions' },
                { num: '90%+', label: 'Client Satisfaction' },
              ].map((m) => (
                <div key={m.label} style={{ flex: 1, padding: '28px 24px', background: 'linear-gradient(135deg,#1840A0,#2F5FE8)', borderRadius: 14, textAlign: 'center' as const }}>
                  <div style={{ fontFamily: J, fontWeight: 900, fontSize: 40, color: 'var(--ism-amber)' }}>{m.num}</div>
                  <div style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.75)', marginTop: 8 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. THE CHALLENGE */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2vw,32px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 24px' }}>
              Capped at Capacity With No Safe Way to Scale
            </h2>
            <p style={{ maxWidth: 720, fontFamily: I, fontSize: 16, lineHeight: 1.85, color: 'var(--color-text-muted)', margin: 0 }}>
              [Agency] had built a strong client base in the UK digital market but was capped at 12 active accounts. Their team — two in-house SEO specialists and a PPC manager — physically could not take on more work without something dropping. They had tried hiring but a poor experience with a freelancer had cost them a client. They needed consistent, reliable delivery capacity that would not expose them to a repeat of that experience.
            </p>
          </div>
        </section>

        {/* 3. WHAT WE DID */}
        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2vw,32px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 32px' }}>
              Became Their Invisible Delivery Team
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
              {[
                'Onboarded the agency over 3 days: brand brief, reporting templates, communication preferences, client context',
                'Took over SEO delivery for 8 existing clients under the agency\'s brand — same reports, same formatting, no ISM mention',
                'Took over PPC management for 4 existing clients with access to accounts only through the agency',
                'Agency began winning new clients knowing ISM could handle the delivery without a scaling risk',
                'Introduced white-label reporting dashboards — clients log in through the agency\'s branded portal',
                'Monthly capacity reviews: added 1-3 new accounts per month as the agency grew its pipeline',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' as const }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(30,77,195,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', fontSize: 11 }} />
                  </div>
                  <p style={{ fontFamily: I, fontSize: 15, lineHeight: 1.7, color: 'var(--color-text-muted)', margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. THE RESULTS */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2vw,32px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 32px' }}>
              Growth Without Operational Risk
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
              {[
                'Agency grew from 12 to 31 active accounts in 8 months',
                'Not a single client questioned the delivery source — ISM operated completely invisibly',
                'Client satisfaction score stayed above 90% throughout the growth period',
                'Agency owner reported spending less time on delivery and more time on business development',
                'No contract lock-in — the partnership expanded organically as the agency\'s client base grew',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' as const }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,176,0,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <i className="fa-solid fa-chart-line" style={{ color: 'var(--ism-amber)', fontSize: 11 }} />
                  </div>
                  <p style={{ fontFamily: I, fontSize: 15, lineHeight: 1.7, color: 'var(--color-navy)', fontWeight: 600, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. BOTTOM CTA */}
        <section style={{ background: 'linear-gradient(135deg,#1840A0,#2F5FE8)', padding: '80px 0' }}>
          <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 40px', textAlign: 'center' as const }}>
            <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(24px,2.5vw,38px)', color: '#fff', letterSpacing: '-0.5px', margin: '0 0 20px' }}>
              If your agency is full but your pipeline is not, let&apos;s talk.
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'rgba(255,255,255,.72)', lineHeight: 1.75, margin: '0 0 36px' }}>
              We become your invisible delivery team — no ISM branding, no client contact, no long contracts.
            </p>
            <a
              href="/services/white-label"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase' as const, boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              Scale My Agency &mdash; Book a Call &rarr;
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .cs-metrics { flex-direction: column !important; }
          .cs-content  { padding: 48px 0 !important; }
        }
      `}</style>
    </>
  );
}
