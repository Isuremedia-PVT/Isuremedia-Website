'use client';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const LOGO_STRIP = '/images/partner.webp';


const CASES = [
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
    client: 'Qualis Roofing',
    quote: 'Since we started working with ISM, our SEO return on investment is in the 800% range.',
    stats: [
      { val: '+427%',  label: 'Top 10 Organic Keywords', sub: 'year over year', icon: 'fa-solid fa-chart-line' },
      { val: '+68%',   label: 'Organic Conversions',     sub: 'in 6 months',    icon: 'fa-solid fa-users'      },
    ],
    body: 'Qualis partnered with ISM to improve local visibility throughout the Dallas–Fort Worth area. By optimising location and service pages and publishing targeted blog posts around high-potential keywords, the campaign delivered a +427% increase in top 10 organic keywords year over year and a +68% boost in organic conversions.',
    link: '#',
    linkLabel: "Read Qualis Roofing's Case Study",
  },
  {
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80',
    client: 'TruckAC+',
    quote: 'ISM is handling business the way they said they would in the beginning.',
    stats: [
      { val: '+$350K', label: 'Ad Revenue',        sub: 'ROAS optimised', icon: 'fa-solid fa-dollar-sign'   },
      { val: '+1,092', label: 'Website Purchases', sub: 'in 6 months',    icon: 'fa-solid fa-cart-shopping' },
    ],
    body: "ISM rebuilt TruckAC+'s paid media strategy across social, PPC and programmatic channels. The full-funnel approach generated a 23X return on ad spend, +$350K in ad revenue and +1,000 purchases in six months, exceeding performance benchmarks and seasonal goals.",
    link: '#',
    linkLabel: "Read TruckAC+'s Case Study",
  },
];

export default function ClientResults() {
  return (
    <section className="cr-section" style={{ padding: '64px 0', background: 'linear-gradient(175deg, #dbeafe 0%, #eff6ff 35%, #ffffff 100%)', position: 'relative', overflow: 'hidden' }}>

      <div className="ism-container">

        {/* ── Partner Logos Strip ── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 56 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_STRIP}
            alt="Partner certifications"
            style={{ maxWidth: '100%', height: 'auto', display: 'block', opacity: 0.88 }}
          />
        </div>

        {/* ── Section Heading ── */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(26px,3vw,40px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', lineHeight: 1.2 }}>
            Our Clients Get Results
          </h2>
        </div>

        {/* ── Case Study Cards ── */}
        <div className="cr-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 52 }}>
          {CASES.map((c, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 28px rgba(0,35,83,.10)', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: 18, padding: '24px 24px 26px' }}>

              {/* Header row: heading + quote left, thumbnail right */}
              <div className="cr-header" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', alignItems: 'stretch', gap: 16 }}>
                <div style={{ minWidth: 0 }}>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: 'var(--ism-amber)', textTransform: 'uppercase', letterSpacing: '.08em' }}>Case Study</span>
                  <h3 style={{ fontFamily: J, fontSize: 'clamp(20px,2.2vw,26px)', fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1.18, marginTop: 6, marginBottom: 14 }}>{c.client}</h3>

                  {/* Quote */}
                  <i className="fa-solid fa-quote-left" style={{ color: 'var(--ism-amber)', fontSize: 22, display: 'block', marginBottom: 8 }} />
                  <p style={{ fontFamily: I, fontSize: 14.5, color: 'var(--color-navy)', lineHeight: 1.6, margin: '0 0 8px', fontWeight: 500 }}>{c.quote}</p>
                  <span style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)' }}>– {c.client}</span>
                </div>

                {/* Thumbnail — static image, not a real video, decorative play icon only */}
                <div className="cr-thumb" style={{ position: 'relative', width: '100%', height: 190 }}>
                  {/* amber faceted-corner border frame — same shape for any image dropped in later */}
                  <div style={{ position: 'absolute', inset: 0, background: 'var(--ism-amber)', clipPath: 'polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)' }} />
                  <div style={{ position: 'absolute', inset: 4, overflow: 'hidden', boxShadow: '0 8px 22px rgba(0,35,83,.18)', clipPath: 'polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.img} alt={c.client}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,35,83,.20)' }} />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,.94)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,.22)', cursor: 'pointer', transition: 'transform .18s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'translate(-50%,-50%) scale(1.10)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'translate(-50%,-50%) scale(1)')}
                    >
                      <i className="fa-solid fa-play" style={{ color: 'var(--color-primary)', fontSize: 17, marginLeft: 2 }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', alignItems: 'center', background: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', borderRadius: 14, padding: '18px 20px' }}>
                {c.stats.map((s, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, paddingLeft: j > 0 ? 20 : 0, marginLeft: j > 0 ? 20 : 0, borderLeft: j > 0 ? '1px solid var(--color-border)' : 'none' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={s.icon} style={{ color: '#fff', fontSize: 16 }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: J, fontSize: 'clamp(17px,2vw,22px)', fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1.1, letterSpacing: '-0.4px' }}>{s.val}</div>
                      <div style={{ fontFamily: I, fontSize: 11.5, fontWeight: 600, color: 'var(--color-navy)', lineHeight: 1.35, marginTop: 3 }}>{s.label}</div>
                      <div style={{ fontFamily: I, fontSize: 10.5, color: 'var(--color-text-muted)', marginTop: 1 }}>{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Body + link */}
              <div>
                <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.78, margin: '0 0 14px' }}>{c.body}</p>
                <a href={c.link}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none', transition: 'gap .15s' }}
                  onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline'; (e.currentTarget as HTMLAnchorElement).style.gap = '10px'; }}
                  onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none'; (e.currentTarget as HTMLAnchorElement).style.gap = '6px'; }}
                >
                  {c.linkLabel} <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div style={{ textAlign: 'center' }}>
          <a href="/case-studies" className="cr-cta-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '18px 48px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.06em', textTransform: 'uppercase', boxShadow: '0 8px 28px rgba(255,176,0,.42)', transition: 'all .18s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(255,176,0,.50)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,176,0,.42)'; }}
          >
            View More Case Studies <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 760px) {
          .cr-grid { grid-template-columns: 1fr !important; }
          .cr-section { padding: 44px 0 !important; }
        }
        @media (max-width: 560px) {
          .cr-header { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .cr-section { padding: 32px 0 !important; }
          .cr-cta-btn { padding: 14px 24px !important; white-space: normal !important; text-align: center !important; width: 100% !important; box-sizing: border-box !important; justify-content: center !important; }
          .cr-thumb { height: 160px !important; }
        }
      `}</style>
    </section>
  );
}
