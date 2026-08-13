'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

export const testimonials = [
  {
    name: 'Eichelle Williams', reviews: '2 reviews',
    pre: 'Harish, Rahul and Pradeep have been so helpful to our team! ',
    highlight: "They've consulted on complex CRM buildouts for our clients and were consistently quick to respond to any questions we had.",
    post: " 100% recommend Isuremedia as your technical support team if you're an agency owner looking to streamline your SaaS products.",
  },
  {
    name: 'Marcus Delgado', reviews: '5 reviews',
    pre: 'We came to Isuremedia stuck on page 3 of Google. ',
    highlight: 'Within six months our organic traffic tripled and we started ranking on page one for our top ten keywords.',
    post: ' The reporting is transparent and the team actually explains the strategy instead of just sending a dashboard.',
  },
  {
    name: 'Priya Nair', reviews: '3 reviews',
    pre: 'Our ad spend was all over the place before we hired this team. ',
    highlight: 'They rebuilt our entire funnel and got our cost per lead down by more than half in the first quarter.',
    post: ' Communication has been excellent throughout the whole process.',
  },
  {
    name: 'Tom Whitfield', reviews: '4 reviews',
    pre: 'As an agency owner, finding reliable white-label partners is hard. ',
    highlight: "Isuremedia's team delivers on time, every time, and our clients have no idea the work is outsourced.",
    post: " It's genuinely helped us take on bigger accounts without hiring in-house.",
  },
  {
    name: 'Sarah Jennings', reviews: '2 reviews',
    pre: 'Our old website looked dated and barely converted. ',
    highlight: 'The new site they built doubled our conversion rate in the first month it went live.',
    post: ' Fast turnaround and the design team really listened to what we wanted.',
  },
  {
    name: 'Daniel Osei', reviews: '6 reviews',
    pre: "We didn't have any automation before working with them. ",
    highlight: 'Now every lead gets followed up instantly and our booking rate has gone up dramatically.',
    post: ' It feels like we hired a whole ops team for a fraction of the cost.',
  },
];

export const AVATAR_COLORS = ['#1E4DC3', '#FFB000', '#0E9B6E', '#8B5CF6', '#EF4444', '#0EA5E9'];
const SLIDE_COUNT = Math.ceil(testimonials.length / 2);

export default function Testimonials({
  heading = 'What Our Clients Say',
  subheading = <>Real results from businesses and agencies who have <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>trusted us</span>.</>,
  showTrustBar = true
}) {
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

  const NavBtn = ({
    dir,
    onClick
  }) => (
    <button
      onClick={onClick}
      aria-label={dir}
      className="tsm-nav"
      style={{ position: 'absolute', [dir === 'prev' ? 'left' : 'right']: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 2, width: 42, height: 42, borderRadius: '50%', background: '#fff', border: '1.5px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 12px rgba(0,0,0,.10)', transition: 'all .18s' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; e.currentTarget.style.borderColor = 'var(--color-primary)'; (e.currentTarget.querySelector('i')).style.color = '#fff'; }}
      onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = 'var(--color-border)'; (e.currentTarget.querySelector('i')).style.color = 'var(--color-primary)'; }}
    >
      <i className={`fa-solid fa-chevron-${dir === 'prev' ? 'left' : 'right'}`} style={{ fontSize: 12, color: 'var(--color-primary)', transition: 'color .18s' }} />
    </button>
  );

  return (
    <section className="tsm-section" style={{ padding: '48px 0 64px', background: '#fff' }}>
      <div className="ism-container">

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 700, color: 'var(--color-text-heading)', marginBottom: 14, lineHeight: 1.20 }}>
            {heading}
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 460, margin: '0 auto', lineHeight: 1.75 }}>
            {subheading}
          </p>
        </div>

        <div className="tsm-carousel-wrap" style={{ position: 'relative', padding: '0 64px' }}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <NavBtn dir="prev" onClick={prev} />
          <div ref={emblaRef} style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex' }}>
              {testimonials.map((t, i) => (
                <div key={i} className="tsm-slide">
                  <div className="tsm-card" style={{ background: '#fff', borderRadius: 20, padding: '32px 30px', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,35,83,.06)', border: '1px solid var(--color-border)', boxSizing: 'border-box' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#F1F3F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, flexShrink: 0 }}>
                      <i className="fa-solid fa-quote-left" style={{ fontSize: 16, color: 'var(--color-text-muted)' }} />
                    </div>
                    <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-navy)', lineHeight: 1.75, marginBottom: 22, flex: 1 }}>
                      {t.pre}<span style={{ color: 'var(--color-accent-hover)', fontWeight: 700 }}>{t.highlight}</span>{t.post}
                    </p>
                    <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div aria-hidden style={{ width: 44, height: 44, borderRadius: '50%', background: AVATAR_COLORS[i % AVATAR_COLORS.length], display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontFamily: J, fontWeight: 800, fontSize: 16, color: '#fff' }}>{t.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div style={{ fontFamily: J, fontWeight: 700, fontSize: 14, color: 'var(--color-navy)' }}>{t.name}</div>
                        <div style={{ fontFamily: I, fontSize: 11, color: 'var(--color-text-muted)', marginBottom: 4 }}>{t.reviews}</div>
                        <div style={{ display: 'flex', gap: 2 }}>
                          {Array.from({ length: 5 }).map((_, s) => (
                            <i key={s} className="fa-solid fa-star" style={{ fontSize: 11, color: 'var(--ism-amber)' }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <NavBtn dir="next" onClick={next} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 7, marginTop: 24, height: 22, alignItems: 'center' }}>
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button key={i} onClick={() => emblaApi?.scrollTo(i)}
              style={{ width: i === selected ? 22 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', background: i === selected ? 'var(--color-primary)' : 'var(--color-border)', padding: 0, transition: 'all .22s' }}
            />
          ))}
        </div>

        {showTrustBar && (
          <div className="tsm-trust-bar" style={{ marginTop: 52, background: 'var(--color-primary)', borderRadius: 16, padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div style={{ fontFamily: J, fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
                200+ agencies and businesses have{' '}
                <span style={{ color: 'var(--ism-amber)' }}>trusted Isuremedia.</span>
              </div>
              <div style={{ fontFamily: I, fontSize: 14, color: 'rgba(255,255,255,.78)' }}>
                From startups to enterprise brands, across every industry.
              </div>
            </div>
            <a href="/appointment"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
            >
              Join Them <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
            </a>
          </div>
        )}
      </div>

      <style>{`
        .tsm-slide { flex: 0 0 calc(50% - 14px); min-width: 0; margin-right: 28px; }
        @media (max-width: 639px)  { .tsm-slide { flex: 0 0 100%; margin-right: 0; } }
        @media (max-width: 768px) {
          .tsm-section { padding: 32px 0 48px !important; }
          .tsm-carousel-wrap { padding: 0 44px !important; }
        }
        @media (max-width: 640px) {
          .tsm-carousel-wrap { padding: 0 !important; }
          .tsm-nav { display: none !important; }
          .tsm-card { padding: 26px 22px !important; }
          .tsm-trust-bar { padding: 24px 20px !important; flex-direction: column !important; text-align: center; }
          .tsm-trust-bar a { width: 100% !important; justify-content: center !important; box-sizing: border-box !important; }
        }
        @media (max-width: 480px) {
          .tsm-section { padding: 24px 0 36px !important; }
        }
      `}</style>
    </section>
  );
}
