'use client';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

export default function ReadyForResults() {
  return (
    <section style={{ background: '#fff', padding: '72px 0 80px' }}>
      <div className="ism-container">

        <div className="rfr-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* ── Left: Heading ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 28, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.12em', textTransform: 'uppercase', margin: 0 }}>
                Your Growth Starts Here
              </p>
            </div>

            <h2 style={{ fontFamily: J, fontSize: 'clamp(32px,3.6vw,54px)', fontWeight: 900, lineHeight: 1.10, letterSpacing: '-0.5px', color: 'var(--color-navy)', marginBottom: 0 }}>
              Ready for<br />
              <span style={{ color: 'var(--color-primary)' }}>Results?</span>
            </h2>
          </div>

          {/* ── Right: Body text + CTA ── */}
          <div>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.80, marginBottom: 32 }}>
              Whether you run a local business, a growing brand, or a digital agency, the question is the same. Are you getting the growth your marketing should be delivering? If not, you are in the right place. Talk to us today and we will help you identify and achieve your biggest growth opportunities.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a
                href="#contact"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { (e.currentTarget).style.background = 'var(--color-accent-hover)'; (e.currentTarget).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget).style.background = 'var(--ism-amber)'; (e.currentTarget).style.transform = ''; }}
              >
                Get My Free Proposal
              </a>
              <a
                href="tel:+16465881430"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { (e.currentTarget).style.background = 'var(--color-primary-hover)'; (e.currentTarget).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget).style.background = 'var(--color-primary)'; (e.currentTarget).style.transform = ''; }}
              >
                <i className="fa-solid fa-phone" style={{ fontSize: 12 }} />
                Call +1 646-588-1430
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .rfr-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
