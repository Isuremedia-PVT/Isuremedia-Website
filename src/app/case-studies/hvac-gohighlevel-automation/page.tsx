'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';


export default function HvacCaseStudyPage() {
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
              <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-primary)', fontWeight: 600 }}>GoHighLevel Automation — HVAC</span>
            </nav>

            {/* Tags row */}
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, marginBottom: 4 }}>
              {['Home Services / HVAC', 'GoHighLevel + PPC', 'USA', '90 days'].map((tag) => (
                <span key={tag} style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', fontSize: 12, fontFamily: I, color: 'var(--color-text-muted)', fontWeight: 600 }}>{tag}</span>
              ))}
            </div>

            {/* H1 */}
            <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(28px,3.2vw,52px)', color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, margin: '20px 0 32px' }}>
              340% More Booked Jobs in 90 Days. Without Spending More on Ads.
            </h1>

            {/* Three-metric strip */}
            <div className="cs-metrics" style={{ display: 'flex', gap: 16 }}>
              {[
                { num: '+340%', label: 'Booked Jobs' },
                { num: '<90 sec', label: 'Avg Lead Response' },
                { num: '$0', label: 'Extra Ad Spend' },
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
              Great Ads. Broken Follow-Up. Lost Revenue.
            </h2>
            <p style={{ maxWidth: 720, fontFamily: I, fontSize: 16, lineHeight: 1.85, color: 'var(--color-text-muted)', margin: 0 }}>
              [Company] was running Google Ads and getting leads — but they were converting at around 15% of what they should have been. The problem was not the ads. The problem was follow-up. When someone searches for an HVAC company, they contact three or four businesses and hire whoever calls back first. [Company]&apos;s team was calling back within a few hours when they had time. By then, the lead had already booked with a competitor.
            </p>
          </div>
        </section>

        {/* 3. WHAT WE DID */}
        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2vw,32px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 32px' }}>
              A Full GoHighLevel Build — From Zero to Automated
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
              {[
                'Set up a GoHighLevel account from scratch — CRM, pipelines, automation, and lead source tagging',
                'Built a trigger automation: when a new lead submits a form on any source, an SMS fires within 90 seconds',
                'Built a follow-up sequence: SMS day 0, email day 0, call reminder day 1, SMS nudge day 3 if no response',
                'Added a booking automation — a Calendly-style widget integrated into the CRM so leads could book immediately without a phone call',
                'Added no-show follow-up automation for appointments that did not convert',
                'Connected all lead sources (Google Ads, website form, LSA) to the same CRM pipeline',
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
              The Numbers After 90 Days
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
              {[
                'Booked jobs increased by 340% from the same monthly ad spend',
                'Average lead response time went from 3+ hours to under 90 seconds',
                'Booking rate from new leads went from 15% to 47%',
                'No-show rate dropped 40% after appointment reminder sequences were in place',
                'Ad spend was not increased — the only variable that changed was the follow-up system',
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
              Running ads but not converting enough leads?
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'rgba(255,255,255,.72)', lineHeight: 1.75, margin: '0 0 36px' }}>
              We will audit your follow-up system and show you where it is breaking.
            </p>
            <a
              href="/services/marketing-automation"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase' as const, boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              Book a Free Automation Audit &rarr;
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
