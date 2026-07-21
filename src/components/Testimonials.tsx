'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const R = 'https://isuremedia.com/wp-content/uploads/2025/11/review-image-for-websiteArtboard-1-copy-8.webp';

const testimonials = [
  { name: 'Ryan Mitchell',   image: R },
  { name: 'Felix Rosado',    image: R },
  { name: 'Kranky K9',       image: 'https://isuremedia.com/wp-content/uploads/2025/10/Kranky-K9.webp' },
  { name: 'Sarah Mitchell',  image: R },
  { name: 'James Rodriguez', image: R },
  { name: 'Emily Chen',      image: R },
];

const SNAP_COUNT = testimonials.length;

export default function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [autoplay.current]
  );

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const NavBtn = ({ dir, onClick }: { dir: 'prev' | 'next'; onClick: () => void }) => (
    <button
      onClick={onClick}
      aria-label={dir}
      style={{ position: 'absolute', [dir === 'prev' ? 'left' : 'right']: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2, width: 42, height: 42, borderRadius: '50%', background: '#fff', border: '1.5px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,.10)', transition: 'all .18s' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; (e.currentTarget.querySelector('i') as HTMLElement).style.color = '#fff'; }}
      onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = 'var(--color-border)'; (e.currentTarget.querySelector('i') as HTMLElement).style.color = 'var(--color-primary)'; }}
    >
      <i className={`fa-solid fa-chevron-${dir === 'prev' ? 'left' : 'right'}`} style={{ fontSize: 12, color: 'var(--color-primary)', transition: 'color .18s' }} />
    </button>
  );

  return (
    <section className="tsm-section" style={{ padding: '48px 0 88px', background: 'var(--color-bg-soft)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 700, color: 'var(--color-text-heading)', marginBottom: 14, lineHeight: 1.20 }}>
            What Our Clients Say
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 460, margin: '0 auto', lineHeight: 1.75 }}>
            Real results from businesses and agencies who have trusted us.
          </p>
        </div>

        <div className="tsm-carousel-wrap" style={{ position: 'relative', padding: '0 52px' }}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <NavBtn dir="prev" onClick={prev} />
          <div ref={emblaRef} style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: 12 }}>
              {testimonials.map((t, i) => (
                <div key={i} className="tsm-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.image} alt={t.name} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 12 }} />
                </div>
              ))}
            </div>
          </div>
          <NavBtn dir="next" onClick={next} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 7, marginTop: 24, height: 22, alignItems: 'center' }}>
          {Array.from({ length: SNAP_COUNT }).map((_, i) => (
            <button key={i} onClick={() => emblaApi?.scrollTo(i)}
              style={{ width: i === selected ? 22 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', background: i === selected ? 'var(--color-primary)' : 'var(--color-border)', padding: 0, transition: 'all .22s' }}
            />
          ))}
        </div>

        <div className="tsm-trust-bar" style={{ marginTop: 52, background: 'var(--color-primary)', borderRadius: 16, padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ fontFamily: J, fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
              200+ agencies and businesses have{' '}
              <span style={{ color: 'var(--ism-amber)' }}>trusted Isuremedia.</span>
            </div>
            <div style={{ fontFamily: I, fontSize: 14, color: 'rgba(255,255,255,.65)' }}>
              From startups to enterprise brands, across every industry.
            </div>
          </div>
          <a href="#cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'all .18s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
          >
            Join Them <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
          </a>
        </div>
      </div>

      <style>{`
        .tsm-slide { flex: 0 0 calc(33.333% - 8px); min-width: 0; }
        @media (max-width: 1023px) { .tsm-slide { flex: 0 0 calc(50% - 11px); } }
        @media (max-width: 639px)  { .tsm-slide { flex: 0 0 100%; } }
        @media (max-width: 768px) {
          .tsm-section { padding: 40px 0 64px !important; }
        }
        @media (max-width: 600px) {
          .tsm-carousel-wrap { padding: 0 36px !important; }
          .tsm-trust-bar { padding: 24px 20px !important; flex-direction: column !important; text-align: center; }
          .tsm-trust-bar a { width: 100% !important; justify-content: center !important; box-sizing: border-box !important; }
        }
        @media (max-width: 480px) {
          .tsm-section { padding: 32px 0 48px !important; }
        }
      `}</style>
    </section>
  );
}
