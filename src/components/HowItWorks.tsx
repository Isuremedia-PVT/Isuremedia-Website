'use client';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const steps = [
  { num: '01', title: 'Discovery Call',   text: 'We ask the right questions, listen more than we talk, and figure out exactly what you need. No assumptions, no generic solutions.' },
  { num: '02', title: 'Your Growth Plan', text: 'We put together a clear plan — what we do, when, and what to expect. You approve it before anything moves.' },
  { num: '03', title: 'Onboarding',       text: 'We set up your tools, reporting, and introduce you to the people doing your work. Everyone on our side knows your business before they touch it.' },
  { num: '04', title: 'Execution',        text: 'Work starts. You get regular updates and a direct line to your account manager. Nothing ships without a quality check.' },
  { num: '05', title: 'Review and Scale', text: "We look at results honestly, cut what isn't working, and build on what is. Then we plan what's next." },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: '96px 0', background: 'linear-gradient(130deg, #1840A0 0%, #1E4DC3 40%, #2F5FE8 75%, #3B6CF5 100%)', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle vignette bottom */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 120%, rgba(0,35,83,.45) 0%, transparent 55%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.60)', marginBottom: 16 }}>Our Process</p>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.2vw,44px)', fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.18 }}>
            Predictable Process. Unpredictable Results.
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'rgba(255,255,255,.75)', maxWidth: 520, margin: '0 auto', lineHeight: 1.78 }}>
            We Keep It Simple So You Stay Focused on Growth
          </p>
        </div>

        {/* Steps */}
        <div className="hiw-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, position: 'relative' }}>

          {/* Connector line behind circles */}
          <div style={{ position: 'absolute', top: 34, left: '10%', right: '10%', height: 1, background: 'rgba(255,255,255,.15)', zIndex: 0 }} />

          {steps.map(s => (
            <div key={s.num} className="hiw-step" style={{ textAlign: 'center', position: 'relative', zIndex: 1, padding: '0 8px', cursor: 'default' }}>

              {/* Circle — outline default, amber fill on hover */}
              <div className="hiw-circle" style={{ width: 68, height: 68, borderRadius: '50%', background: 'linear-gradient(130deg,#1840A0 0%,#1E4DC3 40%,#2F5FE8 75%,#3B6CF5 100%)', border: '2px solid var(--ism-amber)', color: 'var(--ism-amber)', fontFamily: J, fontSize: 20, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px', position: 'relative', zIndex: 1, transition: 'all .25s' }}>
                {s.num}
              </div>

              <div className="hiw-title" style={{ fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.30, transition: 'color .25s' }}>
                {s.title}
              </div>
              <div style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.52)', lineHeight: 1.70 }}>
                {s.text}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 64, textAlign: 'center' }}>
          <a href="#cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .20s', boxShadow: '0 6px 24px rgba(255,176,0,.35)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
          >
            Book Your Free Discovery Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hiw-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hiw-connector { display: none !important; }
        }
        @media (min-width: 480px) and (max-width: 768px) {
          .hiw-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        .hiw-step:hover .hiw-circle {
          background: var(--ism-amber) !important;
          color: var(--color-navy) !important;
          border-color: var(--ism-amber);
          box-shadow: 0 8px 28px rgba(255,176,0,.50);
          transform: translateY(-5px) scale(1.07);
        }
        .hiw-step:hover .hiw-title {
          color: var(--ism-amber);
        }
      `}</style>
    </section>
  );
}
