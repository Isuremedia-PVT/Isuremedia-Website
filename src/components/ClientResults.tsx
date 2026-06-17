'use client';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const LOGO_STRIP = 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/logo_strip_home.png';


const CASES = [
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    client: 'Qualis Roofing',
    quote: '"Since we started working with ISM, our SEO return on investment is in the 800% range."',
    stats: [
      { val: '+427%',  label: 'Top 10 Organic Keywords', sub: 'year over year' },
      { val: '+68%',   label: 'Organic Conversions',     sub: 'in 6 months'   },
    ],
    body: 'Qualis partnered with ISM to improve local visibility throughout the Dallas–Fort Worth area. By optimising location and service pages and publishing targeted blog posts around high-potential keywords, the campaign delivered a +427% increase in top 10 organic keywords year over year and a +68% boost in organic conversions.',
    link: '#',
    linkLabel: "Read Qualis Roofing's Case Study",
  },
  {
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
    client: 'TruckAC+',
    quote: '"ISM is handling business the way they said they would in the beginning."',
    stats: [
      { val: '+$350K', label: 'Ad Revenue',        sub: 'ROAS optimised' },
      { val: '+1,092', label: 'Website Purchases', sub: 'in 6 months'    },
    ],
    body: "ISM rebuilt TruckAC+'s paid media strategy across social, PPC and programmatic channels. The full-funnel approach generated a 23X return on ad spend, +$350K in ad revenue and +1,000 purchases in six months, exceeding performance benchmarks and seasonal goals.",
    link: '#',
    linkLabel: "Read TruckAC+'s Case Study",
  },
];

export default function ClientResults() {
  return (
    <section style={{ padding: '80px 0 88px', background: 'var(--color-bg-soft)', position: 'relative', overflow: 'hidden' }}>
      {/* bg glow */}
      <div style={{ position: 'absolute', top: '5%', right: '-8%', width: 560, height: 560, background: 'radial-gradient(circle,rgba(30,77,195,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '-5%', width: 440, height: 440, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>

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
            <div key={i} style={{ background: '#fff', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 28px rgba(0,35,83,.10)', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>

              {/* Thumbnail */}
              <div style={{ position: 'relative', height: 230, overflow: 'hidden', flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.client}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,35,83,.72) 0%, rgba(0,35,83,.22) 55%, transparent 100%)' }} />
                {/* play button */}
                <div style={{ position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%,-50%)', width: 58, height: 58, borderRadius: '50%', background: 'rgba(255,255,255,.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(0,0,0,.22)', cursor: 'pointer', transition: 'transform .18s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translate(-50%,-50%) scale(1.10)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translate(-50%,-50%) scale(1)')}
                >
                  <i className="fa-solid fa-play" style={{ color: 'var(--color-primary)', fontSize: 19, marginLeft: 4 }} />
                </div>
                {/* client badge */}
                <div style={{ position: 'absolute', bottom: 14, left: 14, background: 'var(--ism-amber)', borderRadius: 6, padding: '5px 14px' }}>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 900, color: 'var(--color-navy)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{c.client}</span>
                </div>
              </div>

              {/* Quote strip */}
              <div style={{ background: 'var(--color-primary)', padding: '14px 20px', flexShrink: 0 }}>
                <p style={{ fontFamily: I, fontSize: 13, fontWeight: 400, color: '#fff', lineHeight: 1.58, margin: 0 }}>{c.quote}</p>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--color-border)', flexShrink: 0 }}>
                {c.stats.map((s, j) => (
                  <div key={j} style={{ background: '#fff', padding: '18px 20px' }}>
                    <div style={{ fontFamily: J, fontSize: 'clamp(22px,2.2vw,30px)', fontWeight: 900, color: 'var(--ism-amber)', lineHeight: 1.1, letterSpacing: '-0.5px' }}>{s.val}</div>
                    <div style={{ fontFamily: I, fontSize: 12, fontWeight: 600, color: 'var(--color-navy)', lineHeight: 1.35, marginTop: 5 }}>{s.label}</div>
                    <div style={{ fontFamily: I, fontSize: 11, color: 'var(--color-text-muted)', marginTop: 2 }}>{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Body + link */}
              <div style={{ padding: '20px 22px 26px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16 }}>
                <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.78, margin: 0 }}>{c.body}</p>
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
          <a href="/contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '18px 48px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.06em', textTransform: 'uppercase', boxShadow: '0 8px 28px rgba(255,176,0,.42)', transition: 'all .18s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(255,176,0,.50)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,176,0,.42)'; }}
          >
            Work With a Trusted Marketing Agency <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 760px) {
          .cr-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
