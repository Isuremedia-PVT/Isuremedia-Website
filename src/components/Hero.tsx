'use client';

import { useState, useEffect, useCallback } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';


const SLIDES = [
  { img: '/images/banner01.png', alt: 'Isuremedia' },
  { img: '/images/banner02.png', alt: 'Client 1' },
  { img: '/images/banner03.png', alt: 'Client 2' },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 200);
  }, []);

  useEffect(() => {
    const t = setInterval(() => goTo((active + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [active, goTo]);

  return (
    <section style={{ background: 'linear-gradient(135deg, #F8F9FF 0%, #FDF6E8 45%, #FFFDF5 100%)', padding: '20px 0 28px', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle bg glow */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, background: 'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div className="hero-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 48, alignItems: 'center', minHeight: 520 }}>

          {/* ── LEFT ── */}
          <div>
            <h1 style={{ fontFamily: J, fontWeight: 900, lineHeight: 1.10, letterSpacing: '-0.5px', marginBottom: 24, fontSize: 'clamp(28px,3.5vw,52px)', color: 'var(--color-navy)' }}>
              Digital Marketing Agency and White Label Partner. <span style={{ color: 'var(--ism-amber)' }}>Built for Results.</span>
            </h1>

            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 520, marginBottom: 28 }}>
              We deliver measurable results for businesses that want to grow and agencies that want to scale. Complete digital marketing and white label fulfilment, in one place.
            </p>

            <div className="hero-btns" style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 24 }}>
              <a href="#contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', whiteSpace: 'nowrap', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
              >
                Scale My Agency
              </a>
              <a href="#contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'all .18s', boxShadow: '0 4px 16px rgba(30,77,195,.25)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.transform = ''; }}
              >
                Scale My Business
              </a>
            </div>

          </div>

          {/* ── RIGHT — Image Slider ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={active}
              src={SLIDES[active].img}
              alt={SLIDES[active].alt}
              style={{ width: '100%', maxWidth: 780, display: 'block', objectFit: 'contain', opacity: fading ? 0 : 1, transition: 'opacity .20s ease' }}
            />


          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; min-height: unset !important; gap: 24px !important; }
          .hero-container { padding: 0 20px !important; max-width: 100% !important; }
        }
        @media (max-width: 480px) {
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .hero-btns a { justify-content: center !important; width: 100% !important; box-sizing: border-box !important; }
        }
      `}</style>
    </section>
  );
}
