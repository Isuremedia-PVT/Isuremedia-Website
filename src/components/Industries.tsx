'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const industries = [
  {
    icon: 'fa-solid fa-house',
    tag: 'Property & Realty',
    title: 'Real Estate',
    text: 'We help developers, brokers, and property platforms get in front of serious buyers and generate quality leads.',
    img: 'https://picsum.photos/seed/realestate/600/800',
    bg: 'linear-gradient(155deg,#001a3d 0%,#002353 45%,#1E4DC3 100%)',
    shine: 'rgba(30,77,195,0.40)',
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    tag: 'Online Retail',
    title: 'E-Commerce',
    text: 'We handle SEO, paid ads, email, and creative together so your store keeps running even when one channel dips.',
    img: 'https://picsum.photos/seed/ecommerce/600/800',
    bg: 'linear-gradient(155deg,#001d42 0%,#0a2d66 45%,#2f67e8 100%)',
    shine: 'rgba(47,103,232,0.38)',
  },
  {
    icon: 'fa-solid fa-bullhorn',
    tag: 'White-Label Services',
    title: 'Marketing Agencies',
    text: 'SEO, PPC, web builds, content, and more — all delivered under your brand when your team needs backup.',
    img: 'https://picsum.photos/seed/agency/600/800',
    bg: 'linear-gradient(155deg,#0a1f4e 0%,#133280 45%,#1E4DC3 100%)',
    shine: 'rgba(30,77,195,0.40)',
  },
  {
    icon: 'fa-solid fa-person-chalkboard',
    tag: 'Personal Brand',
    title: 'Coaches & Consultants',
    text: 'We help coaches, consultants, and course creators reach the right people and turn interest into paying clients.',
    img: 'https://picsum.photos/seed/coaching/600/800',
    bg: 'linear-gradient(155deg,#000f24 0%,#062a5c 45%,#1840A0 100%)',
    shine: 'rgba(24,64,160,0.40)',
  },
  {
    icon: 'fa-solid fa-scale-balanced',
    tag: 'Legal Industry',
    title: 'Law Firms',
    text: 'We make sure high-intent legal searchers find you first — from Google rankings to paid ads and reputation.',
    img: 'https://picsum.photos/seed/legal/600/800',
    bg: 'linear-gradient(155deg,#001228 0%,#002353 50%,#0f3d7a 100%)',
    shine: 'rgba(0,35,83,0.50)',
  },
  {
    icon: 'fa-solid fa-wrench',
    tag: 'Local Services',
    title: 'Home Services',
    text: 'HVAC, cleaning, contracting — your customers are searching right now. We make sure your business shows up.',
    img: 'https://picsum.photos/seed/homeservices/600/800',
    bg: 'linear-gradient(155deg,#1E4DC3 0%,#2563eb 50%,#3b82f6 100%)',
    shine: 'rgba(37,99,235,0.38)',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    tag: 'EdTech & Training',
    title: 'Education & Courses',
    text: 'We help education brands attract the right students and turn interest into actual sign-ups and enrolments.',
    img: 'https://picsum.photos/seed/education/600/800',
    bg: 'linear-gradient(155deg,#001630 0%,#08305f 45%,#3b82f6 100%)',
    shine: 'rgba(59,130,246,0.35)',
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    tag: 'Clinics & Wellness',
    title: 'Health & Wellness',
    text: 'We help clinics and wellness brands build an online presence that earns trust and brings in the right clients.',
    img: 'https://picsum.photos/seed/wellness/600/800',
    bg: 'linear-gradient(155deg,#001833 0%,#002353 45%,#1840A0 100%)',
    shine: 'rgba(24,64,160,0.45)',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    tag: 'Software & Tech',
    title: 'SaaS & Tech',
    text: 'We help SaaS and tech companies keep their pipeline full without relying solely on word-of-mouth referrals.',
    img: 'https://picsum.photos/seed/saas/600/800',
    bg: 'linear-gradient(155deg,#0a0f1e 0%,#0f1f3d 45%,#1E4DC3 100%)',
    shine: 'rgba(30,77,195,0.42)',
  },
  {
    icon: 'fa-solid fa-coins',
    tag: 'Fintech & Advisory',
    title: 'Finance & Fintech',
    text: 'We help financial advisors and fintech companies cut through noise and reach the right high-intent audience.',
    img: 'https://picsum.photos/seed/finance/600/800',
    bg: 'linear-gradient(155deg,#000c1c 0%,#052350 45%,#1E4DC3 100%)',
    shine: 'rgba(30,77,195,0.42)',
  },
  {
    icon: 'fa-solid fa-utensils',
    tag: 'Food & Hospitality',
    title: 'Restaurants & Hospitality',
    text: 'We help restaurants, hotels, and hospitality brands show up in local search and build a name people remember.',
    img: 'https://picsum.photos/seed/restaurant/600/800',
    bg: 'linear-gradient(155deg,#001533 0%,#1E4DC3 55%,#2f67e8 100%)',
    shine: 'rgba(30,77,195,0.38)',
  },
  {
    icon: 'fa-solid fa-car',
    tag: 'Auto Dealers',
    title: 'Automotive',
    text: 'We help dealerships show up consistently so they are the first place buyers think of after weeks of research.',
    img: 'https://picsum.photos/seed/automotive/600/800',
    bg: 'linear-gradient(155deg,#001228 0%,#002353 50%,#1E4DC3 100%)',
    shine: 'rgba(0,35,83,0.55)',
  },
];

export default function Industries() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(1);
  const paused = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;
    const sync = () => {
      setSelected(emblaApi.selectedScrollSnap());
      setSnapCount(emblaApi.scrollSnapList().length);
    };
    emblaApi.on('select', sync);
    emblaApi.on('reInit', sync);
    sync();
    return () => { emblaApi.off('select', sync); emblaApi.off('reInit', sync); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => { if (!paused.current) emblaApi.scrollNext(); }, 3500);
    return () => clearInterval(id);
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="industries" className="ind-section" style={{ padding: '64px 0 64px', background: '#fff', position: 'relative' }}>

      {/* Header */}
      <div className="ind-header" style={{ maxWidth: 700, margin: '0 auto 56px', padding: '0 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: J, fontSize: 'clamp(30px,3.8vw,46px)', fontWeight: 800, color: 'var(--color-text-heading)', lineHeight: 1.15, marginBottom: 18 }}>
          Built for Your{' '}
          <span style={{ color: 'var(--color-primary)' }}>Industry</span>
        </h2>
        <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
          We deliver tailored digital marketing solutions for a wide range of industries, helping businesses and agencies <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>scale faster and smarter</span>.
        </p>
      </div>

      {/* Carousel — full width */}
      <div style={{ position: 'relative' }}>

        {/* Left arrow */}
        <button onClick={prev} aria-label="Previous"
          style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 48, height: 48, borderRadius: '50%', background: '#fff', border: '1.5px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,.10)', transition: 'all .2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; (e.currentTarget.querySelector('i') as HTMLElement).style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e2e8f0'; (e.currentTarget.querySelector('i') as HTMLElement).style.color = 'var(--color-primary)'; }}
        >
          <i className="fa-solid fa-chevron-left" style={{ fontSize: 14, color: 'var(--color-primary)', transition: 'color .2s' }} />
        </button>

        {/* Embla */}
        <div
          ref={emblaRef}
          className="ind-embla"
          style={{ overflow: 'hidden', padding: '20px 0 84px' }}
          onMouseEnter={() => { paused.current = true; }}
          onMouseLeave={() => { paused.current = false; }}
        >
          <div style={{ display: 'flex', marginLeft: '-12px' }}>
            {industries.map(ind => (
              <div key={ind.title} className="ind-slide" style={{ flex: '0 0 25%', minWidth: 0, paddingLeft: '12px', boxSizing: 'border-box' }}>
                <div className="ind-card" style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 420, boxShadow: '0 4px 24px rgba(0,0,0,.14)', transition: 'transform .30s cubic-bezier(.22,1,.36,1), box-shadow .30s', cursor: 'pointer', background: ind.bg }}>

                  {/* Photo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ind.img} alt="" aria-hidden loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

                  {/* Brand color tint over photo */}
                  <div aria-hidden style={{ position: 'absolute', inset: 0, background: ind.bg, opacity: 0.40, mixBlendMode: 'overlay' }} />

                  {/* Large ghost icon bg */}
                  <div aria-hidden style={{ position: 'absolute', right: -16, bottom: -16, fontSize: 160, color: '#fff', opacity: .08, lineHeight: 1, pointerEvents: 'none', userSelect: 'none', transform: 'rotate(-8deg)' }}>
                    <i className={ind.icon} />
                  </div>

                  {/* Shine */}
                  <div aria-hidden style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: `radial-gradient(ellipse at 65% 0%, ${ind.shine} 0%, transparent 72%)`, pointerEvents: 'none' }} />

                  {/* Bottom fade for text */}
                  <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.70) 0%, rgba(0,0,0,.18) 50%, transparent 100%)', pointerEvents: 'none' }} className="ind-overlay" />

                  {/* Tag */}
                  <div style={{ position: 'absolute', top: 20, left: 20 }}>
                    <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,.90)', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.22)', borderRadius: 100, padding: '5px 13px', letterSpacing: '.08em', textTransform: 'uppercase', backdropFilter: 'blur(8px)' }}>
                      {ind.tag}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div style={{ position: 'absolute', top: 18, right: 20, width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
                    <i className={ind.icon} style={{ fontSize: 17, color: '#fff' }} />
                  </div>

                  {/* Content */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '22px 22px 24px' }}>
                    <div style={{ width: 32, height: 3, borderRadius: 2, background: 'var(--ism-amber)', marginBottom: 12, transition: 'width .28s' }} className="ind-line" />
                    <h3 style={{ fontFamily: J, fontSize: 19, fontWeight: 800, color: '#fff', marginBottom: 0, lineHeight: 1.25 }}>{ind.title}</h3>
                    <p className="ind-desc" style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.78)', lineHeight: 1.70, margin: 0, marginTop: 10, maxHeight: 0, opacity: 0, overflow: 'hidden', transition: 'max-height .30s ease, opacity .28s ease' }}>
                      {ind.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button onClick={next} aria-label="Next"
          style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: 48, height: 48, borderRadius: '50%', background: '#fff', border: '1.5px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,.10)', transition: 'all .2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; (e.currentTarget.querySelector('i') as HTMLElement).style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e2e8f0'; (e.currentTarget.querySelector('i') as HTMLElement).style.color = 'var(--color-primary)'; }}
        >
          <i className="fa-solid fa-chevron-right" style={{ fontSize: 14, color: 'var(--color-primary)', transition: 'color .2s' }} />
        </button>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: -48, alignItems: 'center' }}>
        {Array.from({ length: snapCount }).map((_, i) => (
          <button key={i} onClick={() => emblaApi?.scrollTo(i)} aria-label={`Slide ${i + 1}`}
            style={{ width: i === selected ? 28 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', background: i === selected ? 'var(--color-primary)' : '#cbd5e1', transition: 'all .25s', padding: 0 }}
          />
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: 44 }}>
        <a href="/industries"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 34px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 4px 20px rgba(255,176,0,.30)' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,176,0,.40)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,176,0,.30)'; }}
        >
          View All Industries <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
        </a>
      </div>

      <style>{`
        .ind-slide { flex: 0 0 25% !important; }
        @media (max-width: 1023px) { .ind-slide { flex: 0 0 50% !important; } }
        @media (max-width: 600px)  { .ind-slide { flex: 0 0 100% !important; } }
        @media (max-width: 768px)  { .ind-section { padding: 48px 0 40px !important; } }
        @media (max-width: 480px)  { .ind-section { padding: 36px 0 32px !important; } }

        .ind-card:hover { transform: translateY(-6px); box-shadow: 0 20px 56px rgba(0,0,0,.30) !important; }
        .ind-card:hover .ind-overlay { background: linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.40) 55%, rgba(0,0,0,.08) 100%) !important; }
        .ind-card:hover .ind-desc { max-height: 120px !important; opacity: 1 !important; }
        .ind-card:hover .ind-line { width: 52px !important; }

        /* Touch devices have no hover — always reveal the description */
        @media (hover: none) {
          .ind-overlay { background: linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.40) 55%, rgba(0,0,0,.08) 100%) !important; }
          .ind-desc { max-height: 120px !important; opacity: 1 !important; }
          .ind-line { width: 52px !important; }
        }

        @media (max-width: 1023px) {
          .ind-embla { padding: 20px 56px 84px !important; }
        }
        @media (max-width: 600px) {
          [aria-label="Previous"], [aria-label="Next"] { display: none !important; }
          .ind-embla { padding: 20px 20px 84px !important; }
        }
        @media (max-width: 768px) {
          .ind-header { margin: 0 auto 32px !important; }
        }
        @media (max-width: 480px) {
          .ind-card { height: 340px !important; }
          .ind-header { margin: 0 auto 24px !important; }
        }
      `}</style>
    </section>
  );
}
