'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

export const defaultTestimonials = [
  {
    name: 'Eichelle Williams', reviews: '2 reviews · 11 months ago',
    img: '/review_home page/review images/Eichelle Williams.webp',
    pre: 'Harish, Rahul and Pradeep have been so helpful to our team! ',
    highlight: "They've consulted on complex CRM builds for our clients and were consistently quick to respond to any questions we had.",
    post: " 100% recommend iSuremedia as your technical support team if you're an agency owner looking to streamline your SAAS products.",
  },
  {
    name: 'Regine Villariza', reviews: '2 reviews · 11 months ago',
    img: '/review_home page/review images/Regine Villariza.webp',
    pre: 'As a dentist, running the clinic itself takes so much focus, and figuring out ads or tech was always stressful for me. Partnering with the iSureMedia PPC team has been such a relief. ',
    highlight: 'They set up our Google LSA ads and Meta ads in a way that brought in real new patient inquiries',
    post: ' without me having to chase after marketing details.',
  },
  {
    name: 'Ken Herbert', reviews: '3 reviews · 3 years ago',
    img: '/review_home page/review images/Ken Herbert.webp',
    pre: "I had an advanced-level technical issue with the GoHighLevel platform that needed to be solved. GoHighLevel support couldn't solve it. ",
    highlight: "I found iSure Media after firing our previously contracted tech team who couldn't solve the issue after working on it for a month.",
    post: '',
  },
  {
    name: 'Felix Rosado', reviews: '11 reviews · 2 years ago',
    img: '/review_home page/review images/Felix Rosado.webp',
    pre: 'If there were a way to give Harish Pandey and his team at iSuremedia more than five stars, I would do it in a heartbeat! ',
    highlight: 'Working with their services has been nothing short of spectacular.',
    post: ' Harish epitomizes professionalism and promptness, a rarity in this fast-paced digital world.',
  },
  {
    name: 'Ryan Mitchell', reviews: '1 review · a year ago',
    img: '/review_home page/review images/Ryan Mitchell.webp',
    pre: 'Before I started working with iSureMedia, my finance consultancy was struggling to attract consistent leads online. Birmingham is a place where we have cut throat competition, we decided to stay on top and we did, with Isuremedia. And honestly, ',
    highlight: 'the experience with Harish and the IsureMedia team has been a game-changer.',
    post: '',
  },
  {
    name: 'Kranky K9', reviews: '11 reviews · 2 years ago',
    img: '/review_home page/review images/Kranky K9.webp',
    pre: 'Harish and his team are absolutely wonderful to work with. ',
    highlight: 'Their service has exceeded our expectation every time.',
    post: ' The customer service is second to none and there is no doubt we will be working with this business for years to come. — Casey Phillips, Kranky K9 Dog Training LLC.',
  },
  {
    name: 'David Goldstein', reviews: '10 reviews · 2 years ago',
    img: '/review_home page/review images/David Goldstein.webp',
    pre: 'I highly recommend Isure Media for their outstanding technical support and exceptional design and development services. ',
    highlight: 'Their team not only resolved complex technical issues efficiently but also delivered creative designs and robust development solutions',
    post: ' that perfectly aligned with my vision.',
  },
  {
    name: 'Sharon Longridge', reviews: '10 reviews · a year ago',
    img: '/review_home page/review images/Sharon Longridge.webp',
    pre: 'iSure Media have been our trusted technology partner since 2022, handling all Kajabi and Active Campaign-related tasks including the creation and ongoing management of custom automations (email and SMS) and our Google Analytics user engagement dashboard. ',
    highlight: 'Our collaboration is built on trust, transparency, and proactive communication.',
    post: '',
  },
];

export const AVATAR_COLORS = ['#1E4DC3', '#FFB000', '#0E9B6E', '#8B5CF6', '#EF4444', '#0EA5E9'];

export default function Testimonials({
  heading = 'What Our Clients Say',
  subheading = <>Real results from businesses and agencies who have <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>trusted us</span>.</>,
  showTrustBar = true,
  testimonials = defaultTestimonials
}) {
  const SLIDE_COUNT = Math.ceil(testimonials.length / 2);
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
                  <div className="tsm-card" style={{ background: '#fff', borderRadius: 20, padding: '32px 30px', height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid var(--color-border)', boxSizing: 'border-box' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#F1F3F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, flexShrink: 0 }}>
                      <i className="fa-solid fa-quote-left" style={{ fontSize: 16, color: 'var(--color-text-muted)' }} />
                    </div>
                    <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-navy)', lineHeight: 1.75, marginBottom: 22, flex: 1 }}>
                      {t.pre}<span style={{ color: 'var(--color-accent-hover)', fontWeight: 700 }}>{t.highlight}</span>{t.post}
                    </p>
                    <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
                      {t.img ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={t.img} alt={t.name} loading="lazy" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                      ) : (
                        <div aria-hidden style={{ width: 44, height: 44, borderRadius: '50%', background: AVATAR_COLORS[i % AVATAR_COLORS.length], display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ fontFamily: J, fontWeight: 800, fontSize: 16, color: '#fff' }}>{t.name.charAt(0)}</span>
                        </div>
                      )}
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
