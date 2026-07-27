'use client';

import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const videos = [
  {
    id:      'ZZ-rvEpIoV4',
    url:     'https://youtu.be/ZZ-rvEpIoV4',
    name:    'Sarah Mitchell',
    role:    'CEO, BrightPath Agency',
    country: 'United States',
    flag:    '🇺🇸',
    quote:   '"Isuremedia tripled our client pipeline in 4 months. The white label SEO is flawless."',
  },
  {
    id:      'eQ8kni-hnt0',
    url:     'https://youtu.be/eQ8kni-hnt0',
    name:    'James Okonkwo',
    role:    'Director, ScaleUp Group',
    country: 'United Kingdom',
    flag:    '🇬🇧',
    quote:   '"First agency that actually delivered on its promises. ROI was visible within 6 weeks."',
  },
  {
    id:      'PzNaA-ehMbc',
    url:     'https://youtu.be/PzNaA-ehMbc',
    name:    'Priya Sharma',
    role:    'Founder, MedClinic Network',
    country: 'India',
    flag:    '🇮🇳',
    quote:   '"Our local clinic went from 30 to 200+ monthly inquiries. Absolutely game-changing."',
  },
];


export default function VideoTestimonials() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section className="vt-section" style={{ padding: '92px 0 48px', background: '#fff' }}>
      <div className="ism-container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 52px' }}>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 700, color: 'var(--color-text-heading)', lineHeight: 1.20, marginBottom: 14 }}>
            Watch What Our{' '}
            <span style={{ color: 'var(--color-primary)' }}>Clients Say</span>
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
            Businesses and agencies share the results they&apos;ve seen working with Isuremedia.
          </p>
        </div>

        {/* Video cards */}
        <div className="vt-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {videos.map(v => (
            <div
              key={v.id}
              style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,.13)' }}
            >
              {/* Thumbnail / embed */}
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--color-navy)' }}>
                {playing === v.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                    title={v.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.name}
                      loading="lazy"
                      width={480}
                      height={270}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    {/* Dark overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,35,83,.30)' }} />

                    {/* Play button */}
                    <button
                      onClick={() => setPlaying(v.id)}
                      aria-label={`Play ${v.name} video`}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <div
                        style={{ width: 60, height: 60, background: 'var(--ism-amber)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 28px rgba(255,176,0,.55)', transition: 'transform .2s' }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.12)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = '')}
                      >
                        <i className="fa-solid fa-play" style={{ fontSize: 18, color: 'var(--color-navy)', marginLeft: 3 }} />
                      </div>
                    </button>

                  </>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="vt-cta" style={{ textAlign: 'center', marginTop: 44 }}>
          <a href="#cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.transform = ''; }}
          >
            See More Success Stories <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .vt-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 768px) {
          .vt-section { padding: 44px 0 28px !important; }
          .vt-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .vt-section { padding: 32px 0 20px !important; }
          .vt-cta a { width: 100% !important; box-sizing: border-box !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
