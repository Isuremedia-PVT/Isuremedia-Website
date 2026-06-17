'use client';

import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const VIDEO_ID = 'fahX52XsGWM';

const stats = [
  { num: '200+', label: 'Clients Served',     icon: 'fa-solid fa-users',          accent: 'var(--color-primary)' },
  { num: '225%', label: 'Avg. Traffic Growth', icon: 'fa-solid fa-arrow-trend-up', accent: 'var(--ism-amber)'    },
  { num: '5.2x', label: 'Average ROAS',        icon: 'fa-solid fa-chart-bar',      accent: 'var(--color-primary)' },
  { num: '40+',  label: 'In-House Experts',    icon: 'fa-solid fa-user-tie',       accent: 'var(--ism-amber)'    },
];

export default function TrustVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
        <div className="tv-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* ── Left: Video ── */}
          <div style={{ position: 'relative' }}>
            {/* Decorative behind-video glow */}
            <div style={{ position: 'absolute', inset: -16, borderRadius: 28, background: 'linear-gradient(130deg,#1840A0 0%,#1E4DC3 40%,#2F5FE8 75%,#3B6CF5 100%)', zIndex: 0, opacity: 0.12 }} />

            <div style={{ borderRadius: 16, aspectRatio: '16/9', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 64px rgba(30,77,195,.20)', zIndex: 1 }}>
              {playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                  title="How ISureMedia Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                    alt="How ISureMedia Works"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,35,83,.35)' }} />

                  <button
                    onClick={() => setPlaying(true)}
                    aria-label="Play video"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <div style={{ width: 72, height: 72, background: 'var(--ism-amber)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(255,176,0,.60)', transition: 'transform .2s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.10)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = '')}
                    >
                      <i className="fa-solid fa-play" style={{ fontSize: 22, color: 'var(--color-navy)', marginLeft: 5 }} />
                    </div>
                  </button>

                  <div style={{ position: 'absolute', bottom: 16, left: 16, background: 'rgba(0,35,83,.72)', color: '#fff', padding: '6px 13px', borderRadius: 6, fontFamily: J, fontSize: 11, fontWeight: 600, pointerEvents: 'none', letterSpacing: '.03em' }}>
                    Watch: How ISureMedia Works
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ── Right: Copy ── */}
          <div>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--ism-amber)', flexShrink: 0, display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                Trusted Worldwide
              </span>
            </div>

            {/* Heading */}
            <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3vw,42px)', fontWeight: 800, color: 'var(--color-text-heading)', marginBottom: 14, lineHeight: 1.15, letterSpacing: '-0.5px' }}>
              Trusted by Businesses &amp;{' '}
              <span style={{ color: 'var(--color-primary)' }}>Agencies Worldwide</span>
            </h2>

            <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 32, maxWidth: 420 }}>
              200+ agencies and businesses have trusted Isuremedia for white-label fulfillment, SEO, PPC, funnels, and full marketing automation.
            </p>

            {/* Stat cards — 2×2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 36 }}>
              {stats.map(s => (
                <div key={s.num} style={{ background: 'var(--color-bg-soft)', borderRadius: 12, padding: '18px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: 14, transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.background = '#EBF1FF'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.background = 'var(--color-bg-soft)'; e.currentTarget.style.transform = ''; }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: s.accent === 'var(--ism-amber)' ? 'rgba(255,176,0,.12)' : 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={s.icon} style={{ fontSize: 16, color: s.accent }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 22, fontWeight: 900, color: 'var(--color-text-heading)', lineHeight: 1, letterSpacing: '-0.5px' }}>{s.num}</div>
                    <div style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)', marginTop: 3, lineHeight: 1.3 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#cta"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 6px 20px rgba(255,176,0,.30)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
            >
              Book a Discovery Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
            </a>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .tv-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
