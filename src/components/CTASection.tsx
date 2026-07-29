'use client';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

export default function CTASection({ image = '/result_footer/ready_for_result.png', imageWidth = 320 }: { image?: string; imageWidth?: number }) {
  return (
    <section id="cta" className="cta-section" style={{ padding: '64px 0', background: '#fff', overflow: 'visible' }}>
      <div className="ism-container">

        <div className="cta-card" style={{ position: 'relative', background: 'var(--color-primary)', borderRadius: 24, padding: '56px 60px', display: 'grid', gridTemplateColumns: '1fr 360px', alignItems: 'center', gap: 40, overflow: 'visible', minHeight: 240 }}>

          {/* Decorative glow */}
          <div className="cta-glow" style={{ position: 'absolute', right: '30%', top: '-10%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents: 'none', borderRadius: '50%' }} />

          {/* ── Left: Text + Buttons ── */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.10, marginBottom: 20 }}>
              Ready for <span style={{ color: 'var(--ism-amber)' }}>Results?</span>
            </h2>
            <p className="cta-para" style={{ fontFamily: I, fontSize: 16, color: 'rgba(255,255,255,.85)', lineHeight: 1.78, maxWidth: 620, marginBottom: 36 }}>
              Whether you run a local business, a growing brand, or a digital agency, the question is the same. Are you getting the growth your marketing should be delivering? If not, you are in the right place. Talk to us today and we will help you identify and <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>achieve your biggest growth opportunities</span>.
            </p>

            <div className="cta-btns" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href="/contact" className="cta-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 6px 20px rgba(255,176,0,.35)', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
              >
                Get My Free Proposal
              </a>

              <span style={{ fontFamily: J, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.70)', textTransform: 'uppercase', letterSpacing: '.06em' }}>or</span>

              <a href="tel:+16465881430" className="cta-btn"
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
          <div className="cta-person" style={{ position: 'absolute', right: 40, bottom: 0, width: imageWidth, zIndex: 3, pointerEvents: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt="Isuremedia team"
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .cta-card { padding: 30px !important; gap: 24px !important; grid-template-columns: 1fr 300px !important; }
          .cta-para { max-width: 100% !important; }
          .cta-btns { flex-wrap: nowrap !important; gap: 10px !important; }
          .cta-btn { padding: 13px 22px !important; font-size: 12.5px !important; }
          .cta-person { width: 300px !important; right: -42px !important; }
        }
        @media (max-width: 768px) {
          .cta-card { padding: 24px 16px !important; grid-template-columns: 1fr !important; }
          .cta-person { display: block !important; position: static !important; right: auto !important; bottom: auto !important; width: 220px !important; margin: 0 auto 20px !important; order: -1; }
          .cta-section { padding: 36px 0 !important; }
          .cta-btn { padding: 12px 22px !important; font-size: 12.5px !important; }
        }
        @media (max-width: 480px) {
          .cta-section { padding: 28px 0 !important; }
          .cta-card { padding: 20px 14px !important; }
          .cta-glow { display: none !important; }
          .cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .cta-btns a { justify-content: center !important; width: 100% !important; box-sizing: border-box !important; white-space: normal !important; text-align: center !important; }
          .cta-btn { padding: 13px 18px !important; font-size: 12.5px !important; }
        }
      `}</style>
    </section>
  );
}
