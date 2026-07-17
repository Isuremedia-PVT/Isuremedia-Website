'use client';

import { useState, useEffect, useCallback } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';


const SLIDES = [
  { img: '/images/Artboard.png', alt: 'Isuremedia' },
  { img: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/files/jeff-vosburg-img.png', alt: 'Client 1' },
  { img: 'https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/files/gary-singleton-img.png', alt: 'Client 2' },
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
    <section style={{ background: 'var(--color-bg-soft)', padding: '40px 0 72px', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle bg glow */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, background: 'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', minHeight: 520 }}>

          {/* ── LEFT ── */}
          <div>
            <h1 style={{ fontFamily: J, fontWeight: 900, lineHeight: 1.10, letterSpacing: '-0.5px', marginBottom: 24, fontSize: 'clamp(28px,3.5vw,52px)', color: 'var(--color-navy)' }}>
              Digital Marketing Agency and<br />
              White Label Partner.<br />
              <span style={{ color: 'var(--ism-amber)' }}>Built for Results.</span>
            </h1>

            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 520, marginBottom: 28 }}>
              We deliver measurable results for businesses that want to grow and agencies that want to scale. Complete digital marketing and white label fulfilment, in one place.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 24 }}>
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
              style={{ width: '100%', maxWidth: 560, display: 'block', objectFit: 'contain', opacity: fading ? 0 : 1, transition: 'opacity .20s ease' }}
            />

            {/* Dot controls */}
            <div style={{ display: 'flex', gap: 8, marginTop: 18, justifyContent: 'center' }}>
              {SLIDES.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                  style={{ width: i === active ? 24 : 8, height: 8, borderRadius: 4, background: i === active ? 'var(--color-primary)' : '#C4CCE0', border: 'none', cursor: 'pointer', padding: 0, transition: 'all .25s' }}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; min-height: unset !important; }
        }
      `}</style>
    </section>
  );
}
