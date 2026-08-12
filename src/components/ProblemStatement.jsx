const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

export default function ProblemStatement() {
  return (
    <section className="ps-section" style={{
      background: 'linear-gradient(130deg, #1840A0 0%, #1E4DC3 40%, #2F5FE8 75%, #3B6CF5 100%)',
      padding: '72px 0 68px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative glows */}
      <div style={{ position: 'absolute', right: '-5%', top: '-20%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: '-8%', bottom: '-30%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,35,83,.35) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div className="ism-container ps-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Single semantic heading, three visual lines, one h2 for SEO/a11y */}
        <h2 style={{
          fontFamily: J,
          fontSize: 'clamp(30px, 3.4vw, 50px)',
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-0.5px',
          margin: '0 0 30px',
        }}>
          <span style={{ display: 'block', color: '#fff' }}>You are not short on marketing.</span>
          <span style={{ display: 'block', color: 'var(--ism-amber)' }}>You are short on results.</span>
        </h2>

        <p style={{ fontFamily: I, fontSize: 16, color: 'rgba(255,255,255,.78)', lineHeight: 1.75, margin: '0 0 36px' }}>
          Let&apos;s look at what is actually holding your growth back.
        </p>

        <div className="ps-btns" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="/contact" className="ps-btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s', whiteSpace: 'nowrap' }}
          >
            Get a Free Proposal <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
          </a>
          <a href="tel:+16465881430" className="ps-btn-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 34px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid rgba(255,255,255,.35)', transition: 'all .18s', whiteSpace: 'nowrap' }}
          >
            Talk to an Expert
          </a>
        </div>

      </div>
      <style>{`
        .ps-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(255,176,0,.50) !important; }
        .ps-btn-secondary:hover { border-color: #fff !important; background: rgba(255,255,255,.08) !important; }
        @media (max-width: 768px) {
          .ps-section { padding: 44px 0 40px !important; }
          .ps-container { padding: 0 20px !important; max-width: 100% !important; }
        }
        @media (max-width: 480px) {
          .ps-section { padding: 36px 0 32px !important; }
          .ps-btns { flex-direction: column !important; align-items: stretch !important; }
          .ps-btns a { justify-content: center !important; width: 100% !important; box-sizing: border-box !important; }
        }
      `}</style>
    </section>
  );
}
