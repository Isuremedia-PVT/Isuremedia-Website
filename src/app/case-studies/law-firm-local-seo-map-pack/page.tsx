'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';


export default function LawFirmCaseStudyPage() {
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
              <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-primary)', fontWeight: 600 }}>Law Firm Local SEO</span>
            </nav>

            {/* Tags row */}
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, marginBottom: 4 }}>
              {['Legal / Law Firm', 'Local SEO', 'USA', '5 months'].map((tag) => (
                <span key={tag} style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', fontSize: 12, fontFamily: I, color: 'var(--color-text-muted)', fontWeight: 600 }}>{tag}</span>
              ))}
            </div>

            {/* H1 */}
            <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(28px,3.2vw,52px)', color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, margin: '20px 0 32px' }}>
              Page 3 to the Google Map Pack in 5 Months.
            </h1>

            {/* Three-metric strip */}
            <div className="cs-metrics" style={{ display: 'flex', gap: 16 }}>
              {[
                { num: 'Map Pack', label: 'Top 3 Positions' },
                { num: '+180%', label: 'Organic Leads' },
                { num: '47', label: 'Google Reviews (from 11)' },
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
              Good Reputation, Zero Digital Visibility
            </h2>
            <p style={{ maxWidth: 720, fontFamily: I, fontSize: 16, lineHeight: 1.85, color: 'var(--color-text-muted)', margin: 0 }}>
              [Law Firm] handled personal injury and family law cases in a competitive US market. They had a website, a Google Business Profile, and a decent reputation — but almost no digital visibility. Referrals had been reliable for years but the partners wanted a more predictable pipeline that did not depend on relationship cycles. People searching &apos;personal injury attorney [city]&apos; were not finding them.
            </p>
          </div>
        </section>

        {/* 3. WHAT WE DID */}
        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2vw,32px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 32px' }}>
              Local SEO From the Ground Up — Profile, Citations, Content
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
              {[
                'Fully rebuilt and optimised the Google Business Profile — photos, service categories, Q&A, citation consistency',
                'Audited and corrected NAP (name, address, phone) across 60+ local directories that had inconsistent information',
                'Created geo-targeted service pages for each practice area targeting \'[practice area] attorney [city]\' terms',
                'Built a review generation process: email sequence sent to past clients requesting Google reviews',
                'Published 8 topical authority articles targeting questions people ask before hiring an attorney in their practice areas',
                'Built local citations on high-authority legal directories (Avvo, Justia, FindLaw, legal.io)',
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
              In the Map Pack and Converting in 5 Months
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
              {[
                'Appeared in the Google Map Pack for 6 primary practice area + location terms',
                'Organic leads (phone calls + form enquiries from Google) up 180% month on month',
                'Google Business Profile views increased 340% in the 5-month period',
                'Reviews went from 11 to 47 with an average rating of 4.9',
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
              If your law firm is not showing up for local searches, that is revenue going to competitors who are.
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'rgba(255,255,255,.72)', lineHeight: 1.75, margin: '0 0 36px' }}>
              Book a free SEO strategy call and we will show you exactly what it would take to get into the map pack.
            </p>
            <a
              href="/services/seo"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase' as const, boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              Book a Free SEO Strategy Call &rarr;
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
