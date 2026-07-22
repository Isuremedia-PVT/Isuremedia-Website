'use client';

import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const VIDEO_ID = 'fahX52XsGWM';


export default function TrustVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="tv-section" style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* ── Centered Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3vw,42px)', fontWeight: 800, color: 'var(--color-text-heading)', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Grow with a <span style={{ color: 'var(--color-primary)' }}>Results-Driven</span> Marketing Agency
          </h2>
        </div>

        {/* ── Two-column: Video | Paragraphs ── */}
        <div className="tv-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

          {/* ── Left: Video ── */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -16, borderRadius: 28, background: 'linear-gradient(130deg,#1840A0 0%,#1E4DC3 40%,#2F5FE8 75%,#3B6CF5 100%)', zIndex: 0, opacity: 0.12 }} />
            <div style={{ borderRadius: 16, aspectRatio: '16/9', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 64px rgba(30,77,195,.20)', zIndex: 1 }}>
              {playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                  title="How Isuremedia Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                    alt="How Isuremedia Works"
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
                    Watch: How Isuremedia Works
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ── Right: Paragraphs + CTA ── */}
          <div>
            <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 20 }}>
              Isuremedia is a results driven digital marketing and white label agency that has been driving measurable growth for businesses and agencies since 2017. We focus entirely on outcomes, so everything we build for a client has a clear goal behind it and a team that answers for the result.
            </p>
            <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 36 }}>
              Isuremedia works with clients of every size, from local businesses and startups to established brands, multi location companies, and enterprise clients, across the US, UK, Canada, and beyond. We have worked across every major industry and offer clear pricing that works for any budget. Our terms are month to month because we genuinely believe in the quality of our work.
            </p>
            <div className="tv-btns" style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a href="#cta"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 6px 20px rgba(255,176,0,.30)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
              >
                Get a Free Proposal <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
              <a href="#contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 6px 20px rgba(30,77,195,.30)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.transform = ''; }}
              >
                Start Growing Today
              </a>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .tv-section { padding: 56px 0 !important; }
          .tv-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .tv-btns { flex-direction: column !important; align-items: stretch !important; }
          .tv-btns a { width: 100% !important; justify-content: center !important; box-sizing: border-box !important; }
        }
        @media (max-width: 480px) {
          .tv-section { padding: 44px 0 !important; }
        }
      `}</style>
    </section>
  );
}
