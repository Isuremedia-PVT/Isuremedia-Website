'use client';

import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const VIDEO_ID = 'fahX52XsGWM';

export default function HomeVideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="hvs-section" style={{ background: '#fff', padding: '64px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Background glows */}
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: 600, height: 600, background: 'radial-gradient(circle,rgba(255,176,0,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div className="hvs-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,50px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.8px', lineHeight: 1.1, margin: '0 0 14px' }}>
            Don&apos;t just take{' '}
            <span style={{ color: 'var(--ism-amber)' }}>our word for it.</span>
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.7, margin: '0 auto', maxWidth: 540 }}>
            Watch how we&apos;ve helped businesses like yours grow rankings, leads, and revenue <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>month after month</span>.
          </p>
        </div>

        {/* Video card */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,.18)', border: '1px solid rgba(255,255,255,.08)' }}>
          <div style={{ aspectRatio: '16/9', position: 'relative', background: '#000' }}>

            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Isuremedia Client Results"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
              />
            ) : (
              <>
                {/* Thumbnail */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                  alt="Isuremedia Client Results Video"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />

                {/* Dark overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,32,.96) 0%, rgba(8,12,32,.80) 32%, rgba(8,12,32,.20) 60%, rgba(8,12,32,.10) 100%)' }} />

                {/* Play button */}
                <button
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <div className="hvs-play-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                    <div
                      className="hvs-play-btn"
                      style={{ width: 80, height: 80, background: 'var(--ism-amber)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 40px rgba(255,176,0,.55)', transition: 'transform .22s, box-shadow .22s' }}
                      onMouseEnter={e => { (e.currentTarget).style.transform = 'scale(1.10)'; (e.currentTarget).style.boxShadow = '0 12px 52px rgba(255,176,0,.75)'; }}
                      onMouseLeave={e => { (e.currentTarget).style.transform = ''; (e.currentTarget).style.boxShadow = '0 8px 40px rgba(255,176,0,.55)'; }}
                    >
                      <i className="fa-solid fa-play" style={{ fontSize: 26, color: 'var(--color-navy)', marginLeft: 5 }} />
                    </div>
                    <span className="hvs-watch-label" style={{ fontFamily: J, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.75)', letterSpacing: '.04em' }}>Watch now, 4:12</span>
                  </div>
                </button>

                {/* Bottom overlay text */}
                <div className="hvs-caption" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 36px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                    <div>
                      <p style={{ fontFamily: J, fontSize: 'clamp(14px,2vw,26px)', fontWeight: 900, color: '#fff', margin: '0 0 4px', lineHeight: 1.3 }}>
                        How Isuremedia delivers results
                      </p>
                      <p style={{ fontFamily: J, fontSize: 'clamp(14px,2vw,26px)', fontWeight: 900, color: 'var(--ism-amber)', margin: 0, lineHeight: 1.3 }}>
                        for businesses worldwide.
                      </p>
                    </div>
                  </div>
                </div>

              </>
            )}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .hvs-section { padding: 48px 0 !important; }
          .hvs-container { padding: 0 20px !important; max-width: 100% !important; }
          .hvs-caption { padding: 18px 20px !important; }
          .hvs-watch-label { display: none !important; }
          .hvs-play-btn { width: 56px !important; height: 56px !important; }
          .hvs-play-wrap { gap: 0 !important; }
        }
        @media (max-width: 480px) {
          .hvs-section { padding: 36px 0 !important; }
        }
      `}</style>
    </section>
  );
}
