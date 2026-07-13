'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

function Pill({ text }: { text: string }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 20 }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
      <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' as const }}>{text}</span>
    </div>
  );
}

export default function EcommerceSEOCaseStudyPage() {
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
              <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-primary)', fontWeight: 600 }}>E-Commerce SEO</span>
            </nav>

            {/* Tags row */}
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, marginBottom: 4 }}>
              {['E-Commerce', 'Technical SEO + Content', 'UK', '8 months'].map((tag) => (
                <span key={tag} style={{ padding: '4px 14px', borderRadius: 100, background: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', fontSize: 12, fontFamily: I, color: 'var(--color-text-muted)', fontWeight: 600 }}>{tag}</span>
              ))}
            </div>

            {/* H1 */}
            <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(28px,3.2vw,52px)', color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, margin: '20px 0 32px' }}>
              218% More Organic Traffic in 8 Months. Zero Shortcuts.
            </h1>

            {/* Three-metric strip */}
            <div className="cs-metrics" style={{ display: 'flex', gap: 16 }}>
              {[
                { num: '+218%', label: 'Organic Traffic' },
                { num: '+167%', label: 'Organic Revenue' },
                { num: '14', label: 'Pages to Page 1' },
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
            <Pill text="The Challenge" />
            <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2vw,32px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 24px' }}>
              18 Months of Flat Traffic Despite Consistent Publishing
            </h2>
            <p style={{ maxWidth: 720, fontFamily: I, fontSize: 16, lineHeight: 1.85, color: 'var(--color-text-muted)', margin: 0 }}>
              [Brand] had been trading online for four years. Their organic traffic had been flat for 18 months despite publishing content regularly. They had worked with two previous SEO agencies and neither had made a measurable difference. When we audited the account, we found technical problems that had been compounding for years — crawl budget issues, duplicate product pages, slow load times on mobile, and a category structure that made it nearly impossible for Google to understand what pages should rank for what.
            </p>
          </div>
        </section>

        {/* 3. WHAT WE DID */}
        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
            <Pill text="What We Did" />
            <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2vw,32px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 32px' }}>
              Technical Foundation First, Content Growth Second
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
              {[
                'Full technical audit: identified and resolved 340+ technical errors across crawlability, indexation, and Core Web Vitals',
                'Restructured category pages: consolidated duplicate URLs, rewrote category descriptions targeting buyer-intent terms',
                'Fixed internal linking architecture so link equity flowed properly from blog content to product and category pages',
                'Built a topical content cluster of 18 SEO articles over 8 months targeting informational queries feeding into product discovery',
                'Implemented product schema, breadcrumb schema, and FAQ schema across category and product pages',
                'Core Web Vitals went from failing on 60% of pages to passing on 89%',
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
            <Pill text="The Results" />
            <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2vw,32px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 32px' }}>
              8 Months of Compounding Growth
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
              {[
                'Organic sessions up 218% year on year',
                'Organic revenue up 167% year on year — quality of traffic improved, not just volume',
                '14 category pages moved from page 3+ to page 1 for primary product terms',
                'Core Web Vitals pass rate improved from 40% to 89%',
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
              If your traffic has been flat for more than 6 months, the problem is almost always technical.
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'rgba(255,255,255,.72)', lineHeight: 1.75, margin: '0 0 36px' }}>
              Book a free SEO audit and we will show you exactly what is holding your rankings back.
            </p>
            <a
              href="/services/seo"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase' as const, boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ''; }}
            >
              Book a Free SEO Audit Call &rarr;
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
