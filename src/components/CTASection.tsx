'use client';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

export default function CTASection() {
  return (
    <section id="cta" className="cta-section" style={{ padding: '88px 0', background: '#fff', overflow: 'visible' }}>
      <div className="ism-container">

        <div className="cta-card" style={{ position: 'relative', background: 'var(--color-primary)', borderRadius: 24, padding: '56px 60px', display: 'grid', gridTemplateColumns: '1fr 360px', alignItems: 'center', gap: 40, overflow: 'visible', minHeight: 240 }}>

          {/* Decorative glow */}
          <div className="cta-glow" style={{ position: 'absolute', right: '30%', top: '-10%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents: 'none', borderRadius: '50%' }} />

          {/* ── Left: Text + Buttons ── */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.10, marginBottom: 20 }}>
              Ready for <span style={{ color: 'var(--ism-amber)' }}>Results?</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'rgba(255,255,255,.85)', lineHeight: 1.78, maxWidth: 620, marginBottom: 36 }}>
              Whether you run a local business, a growing brand, or a digital agency, the question is the same. Are you getting the growth your marketing should be delivering? If not, you are in the right place. Talk to us today and we will help you identify and achieve your biggest growth opportunities.
            </p>

            <div className="cta-btns" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href="#contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 6px 20px rgba(255,176,0,.35)', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
              >
                Get My Free Proposal
              </a>

              <span style={{ fontFamily: J, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.70)', textTransform: 'uppercase', letterSpacing: '.06em' }}>or</span>

              <a href="tel:+16465881430"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: '#fff', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'all .18s', boxShadow: '0 4px 16px rgba(0,0,0,.12)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-bg-soft)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = ''; }}
              >
                <i className="fa-solid fa-phone" style={{ fontSize: 12 }} />
                Call +1 646-588-1430
              </a>
            </div>
          </div>

          {/* ── Right: Person image (overflows top) ── */}
          <div className="cta-person" style={{ position: 'absolute', right: 40, bottom: 0, width: 320, zIndex: 3, pointerEvents: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/files/katherine-koralewski-img.png"
              alt="Isuremedia team"
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-card { padding: 40px 28px !important; grid-template-columns: 1fr !important; }
          .cta-person { display: none !important; }
          .cta-section { padding: 44px 0 !important; }
        }
        @media (max-width: 480px) {
          .cta-section { padding: 32px 0 !important; }
          .cta-card { padding: 32px 20px !important; }
          .cta-glow { display: none !important; }
          .cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .cta-btns a { justify-content: center !important; width: 100% !important; box-sizing: border-box !important; white-space: normal !important; text-align: center !important; padding: 14px 18px !important; }
        }
      `}</style>
    </section>
  );
}
