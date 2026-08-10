'use client';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const HL = { background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 };

const defaultSteps = [
  { num: 1, title: 'Discovery Call',   text: <>We ask the right questions and figure out exactly what you need. <span style={HL}>No assumptions, no generic solutions.</span></> },
  { num: 2, title: 'Your Growth Plan', text: <>We build a clear plan — what we do, when, and what to expect. <span style={HL}>You approve before anything moves.</span></> },
  { num: 3, title: 'Onboarding',       text: <>We get everything in place before work begins. Your goals are briefed across the team, reporting is connected, and nothing moves until <span style={HL}>we are all pointing in the same direction</span>.</> },
  { num: 4, title: 'Execution',        text: <>You always know where things stand. Regular updates come to you without you having to ask, and <span style={HL}>nothing leaves our side without a quality check first</span>.</> },
  { num: 5, title: 'The Payoff',       text: <>The numbers come in and we build on them. What is working gets more investment. What is not gets replaced. <span style={HL}>Most clients see a meaningful shift within the first 90 days</span>.</> },
];

export default function HowItWorks({
  title = 'The Process Behind Real, Measurable',
  subtitle = 'Start now and build a business that performs every single month.',
  highlightWord = 'Growth',
  steps = defaultSteps,
  ctaText = 'Book Your Free Call',
  ctaHref = '#cta',
  backgroundColor = 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 35%, #ffffff 100%)',
  titleColor = 'var(--ism-amber)'
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="hiw-section" style={{ padding: '64px 0 72px', background: backgroundColor, position: 'relative', overflow: 'hidden' }}>

      <div className="ism-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 14, lineHeight: 1.18, letterSpacing: '-0.5px' }}>
            {title}{' '}
            <span style={{ color: titleColor }}>
              {highlightWord}
            </span>
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 460, margin: '0 auto', lineHeight: 1.75 }}>
            {subtitle}
          </p>
        </div>

        {/* ── Timeline ── */}
        <div style={{ position: 'relative' }}>

          {/* Connecting line */}
          <div className="hiw-line" style={{
            position: 'absolute',
            top: 28,
            left: '10%',
            right: '10%',
            height: 2,
            background: 'linear-gradient(to right, var(--ism-amber) 0%, var(--ism-amber) 10%, var(--color-navy) 22%, var(--color-navy) 100%)',
            zIndex: 0,
            opacity: 0.35,
          }} />

          <div className="hiw-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${steps.length},1fr)`, gap: 0, position: 'relative', zIndex: 1 }}>
            {steps.map((s, i) => {
              const isFirst   = i === 0;
              const isHov     = hovered === i;
              /* on hover: amber ↔ blue swap */
              const circleBg  = isHov
                ? (isFirst ? 'var(--color-primary)' : 'var(--ism-amber)')
                : (isFirst ? 'var(--ism-amber)'     : 'var(--color-primary)');
              const shadow    = isHov
                ? (isFirst ? '0 8px 28px rgba(30,77,195,.40)'  : '0 8px 28px rgba(255,176,0,.55)')
                : (isFirst ? '0 6px 22px rgba(255,176,0,.45)'  : '0 6px 22px rgba(30,77,195,.22)');

              return (
                <div key={s.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 14px', textAlign: 'center' }}>

                  {/* Circle */}
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      width: 56, height: 56,
                      borderRadius: '50%',
                      background: circleBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: J, fontSize: 20, fontWeight: 800, color: '#fff',
                      marginBottom: 24,
                      boxShadow: shadow,
                      border: '3px solid #fff',
                      position: 'relative', zIndex: 2,
                      flexShrink: 0,
                      transition: 'background .22s ease, box-shadow .22s ease, transform .22s ease',
                      cursor: 'default',
                      transform: isHov ? 'scale(1.14)' : 'scale(1)',
                    }}
                  >
                    {s.num}
                  </div>

                  {/* Title */}
                  <div style={{ fontFamily: J, fontSize: 14.5, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 10, lineHeight: 1.3 }}>
                    {s.title}
                  </div>

                  {/* Description */}
                  <div style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                    {s.text}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ marginTop: 68, textAlign: 'center' }}>
          <a href={ctaHref}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px', borderRadius: 10, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .20s', boxShadow: '0 6px 28px rgba(255,176,0,.38)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.color = 'var(--color-navy)'; e.currentTarget.style.transform = ''; }}
          >
            {ctaText} <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hiw-section { padding: 48px 0 44px !important; }
          .hiw-grid { grid-template-columns: repeat(2,1fr) !important; gap: 36px !important; }
          .hiw-line { display: none !important; }
        }
        @media (max-width: 520px) {
          .hiw-section { padding: 36px 0 32px !important; }
          .hiw-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
