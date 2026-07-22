'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const industries = [
  { icon: 'fa-solid fa-house',              title: 'Real Estate',              text: 'Buyers research everything online before they call anyone. We help developers, brokers, and property platforms get in front of serious buyers and generate quality leads.' },
  { icon: 'fa-solid fa-cart-shopping',      title: 'E-Commerce',               text: 'For online stores, we handle SEO, paid ads, email, and creative together. So when one channel has a bad week, your store keeps running. No gaps, no panic.' },
  { icon: 'fa-solid fa-bullhorn',           title: 'Marketing Agencies',       text: 'If your clients need more than your team can deliver right now, we step in. We handle SEO, PPC, web builds, content, and more — all under your brand.' },
  { icon: 'fa-solid fa-person-chalkboard',  title: 'Coaches & Consultants',    text: 'Whether you are a business coach, a consultant, or a course creator, we help you reach the right people consistently and turn interest into paying clients.' },
  { icon: 'fa-solid fa-scale-balanced',     title: 'Law Firms',                text: 'People searching for a lawyer are already ready to hire someone. We make sure they find you first — from Google rankings to paid ads and online reputation.' },
  { icon: 'fa-solid fa-wrench',             title: 'Home Services',            text: 'Whether you run an HVAC company, a cleaning service, or a contracting firm, your customers are searching right now. We make sure your business shows up.' },
  { icon: 'fa-solid fa-graduation-cap',     title: 'Education & Courses',      text: 'Getting the right students to enrol takes more than just ads. We help education brands attract the right people and turn interest into actual sign-ups.' },
  { icon: 'fa-solid fa-heart-pulse',        title: 'Health & Wellness',        text: 'We help clinics, wellness brands, and health coaches build an online presence that earns trust, brings in the right clients, and keeps them coming back.' },
  { icon: 'fa-solid fa-laptop-code',        title: 'SaaS & Tech',              text: 'Long sales cycles and hard-to-explain products make marketing tough. We help SaaS and tech companies keep their pipeline full without relying on referrals.' },
  { icon: 'fa-solid fa-coins',              title: 'Finance & Fintech',        text: 'Finance is one of the most competitive spaces online. We help financial advisors and fintech companies cut through the noise and reach the right people.' },
  { icon: 'fa-solid fa-utensils',           title: 'Restaurants & Hospitality', text: 'We help restaurants, hotels, and hospitality brands show up in local search, run the right ads, and build a name people actually remember.' },
  { icon: 'fa-solid fa-car',               title: 'Automotive',               text: 'Car buyers research for weeks before they walk into a showroom. We help dealerships show up consistently so they are the first place buyers think of.' },
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
    const id = setInterval(() => { if (!paused.current) emblaApi.scrollNext(); }, 3200);
    return () => clearInterval(id);
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="industries" className="ind-section" style={{ padding: '88px 0', background: 'var(--color-bg-soft)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 700, color: 'var(--color-text-heading)', lineHeight: 1.20, marginBottom: 14 }}>
            Industries We&apos;ve{' '}
            <span style={{ color: 'var(--ism-amber)' }}>Worked With</span>
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
            We deliver tailored digital marketing solutions for a wide range of industries, helping businesses and agencies scale faster and smarter.
          </p>
        </div>

        {/* Carousel */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>

          <button onClick={prev} aria-label="Previous"
            style={{ width: 44, height: 44, borderRadius: '50%', flexShrink: 0, background: '#fff', border: '1.5px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--sh-sm)', transition: 'all .18s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; (e.currentTarget.querySelector('i') as HTMLElement).style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = 'var(--color-border)'; (e.currentTarget.querySelector('i') as HTMLElement).style.color = 'var(--color-primary)'; }}
          >
            <i className="fa-solid fa-chevron-left" style={{ fontSize: 13, color: 'var(--color-primary)', transition: 'color .18s' }} />
          </button>

          <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}
            onMouseEnter={() => { paused.current = true; }}
            onMouseLeave={() => { paused.current = false; }}
          >
          {/* Embla viewport */}
          <div ref={emblaRef} style={{ overflow: 'hidden' }}>
            {/* Embla container — negative margin offsets first slide padding */}
            <div style={{ display: 'flex', marginLeft: '-20px' }}>
              {industries.map(ind => (
                /* Embla slide — flex: 0 0 25% + paddingLeft creates the gap */
                <div key={ind.title} className="ind-slide" style={{ flex: '0 0 25%', minWidth: 0, paddingLeft: '20px', boxSizing: 'border-box' }}>
                  <div
                    style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 16, padding: '28px 22px', height: '100%', transition: 'all .22s', boxSizing: 'border-box' }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--color-primary)'; el.style.boxShadow = '0 8px 28px rgba(30,77,195,.14)'; el.style.background = 'var(--ism-blue-50,#EFF4FF)'; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'var(--color-border)'; el.style.boxShadow = ''; el.style.background = '#fff'; }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--ism-blue-50,#EFF4FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, border: '1px solid var(--ism-blue-100,#C7D7FD)' }}>
                      <i className={ind.icon} style={{ fontSize: 20, color: 'var(--color-primary)' }} />
                    </div>
                    <div style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-text-heading)', marginBottom: 10, lineHeight: 1.30 }}>{ind.title}</div>
                    <div style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.72 }}>{ind.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

          <button onClick={next} aria-label="Next"
            style={{ width: 44, height: 44, borderRadius: '50%', flexShrink: 0, background: '#fff', border: '1.5px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--sh-sm)', transition: 'all .18s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; (e.currentTarget.querySelector('i') as HTMLElement).style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = 'var(--color-border)'; (e.currentTarget.querySelector('i') as HTMLElement).style.color = 'var(--color-primary)'; }}
          >
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 13, color: 'var(--color-primary)', transition: 'color .18s' }} />
          </button>

        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 24, alignItems: 'center' }}>
          {Array.from({ length: snapCount }).map((_, i) => (
            <button key={i} onClick={() => emblaApi?.scrollTo(i)} aria-label={`Slide ${i + 1}`}
              style={{ width: i === selected ? 24 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', background: i === selected ? 'var(--ism-amber)' : 'var(--color-border)', transition: 'all .25s', padding: 0 }}
            />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a href="#"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 4px 16px rgba(255,176,0,.30)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
          >
            View All Industries <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
          </a>
        </div>

      </div>

      <style>{`
        .ind-slide { flex: 0 0 25% !important; }
        @media (max-width: 1023px) { .ind-slide { flex: 0 0 50% !important; } }
        @media (max-width: 600px)  { .ind-slide { flex: 0 0 100% !important; } }
        @media (max-width: 768px) {
          .ind-section { padding: 56px 0 !important; }
        }
        @media (max-width: 480px) {
          .ind-section { padding: 44px 0 !important; }
        }
      `}</style>
    </section>
  );
}
