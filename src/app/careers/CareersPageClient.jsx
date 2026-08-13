'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';



const GROW_ITEMS = [
  { num: '01', icon: 'fa-solid fa-chart-line', title: 'Career Growth', points: ['Real client accounts from day one.', 'See how every part of digital marketing connects.', 'Talk directly to people running the work.', 'Clear path for people who take ownership.'] },
  { num: '02', icon: 'fa-solid fa-building', title: 'Work Environment', points: ['One office. One team. Everyone on the same accounts.', 'You always know where you stand.', 'The tools work and the process is clear.', 'Five-day week with fixed hours.'] },
  { num: '03', icon: 'fa-solid fa-users', title: 'Culture', points: ['Seniority does not decide who gets ahead.', 'Feedback goes both ways and people mean it.', 'We hire curious people on purpose.', 'People stay because they want to.'] },
  { num: '04', icon: 'fa-solid fa-trophy', title: 'What You Earn', points: ['A portfolio of real international work.', 'Skills that travel with you wherever you go next.', 'End-to-end digital marketing understanding.', 'A track record built on accounts that actually existed.'] },
];


const CAROUSEL_SLIDES = [
  { img: '/career-about/Team image for GMB new 4.webp', caption: 'Real work. Real clients. Every single day.', sub: 'US & UK accounts across SEO, PPC, web, content and automation.' },
  { img: '/career-about/Team image for GMB new 5.webp', caption: 'One office. One team. No silos.', sub: 'Everyone working toward the same outcome for the same clients.' },
  { img: '/career-about/Team image for GMB new 3.webp', caption: 'Build your career on accounts that actually matter.', sub: 'The feedback loop here is fast. You grow because the stakes are real.' },
  { img: '/career-about/Team image for GMB new 1.webp', caption: 'Come do the best work of your career.', sub: 'Haldwani, Uttarakhand, serving markets across the US and UK.' },
];

const JOB_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'JobPosting',
      title: 'Business Development Executive',
      description: 'Join Isuremedia as a Business Development Executive. Work on US and UK client accounts across digital marketing services.',
      hiringOrganization: { '@type': 'Organization', name: 'Isuremedia', sameAs: 'https://isuremedia.com' },
      jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Haldwani', addressRegion: 'Uttarakhand', addressCountry: 'IN' } },
      jobLocationType: 'TELECOMMUTE',
      employmentType: 'FULL_TIME',
      datePosted: '2026-07-22',
    },
    {
      '@type': 'JobPosting',
      title: 'Business Development Manager',
      description: 'Join Isuremedia as a Business Development Manager. Lead sales and client acquisition across US and UK markets.',
      hiringOrganization: { '@type': 'Organization', name: 'Isuremedia', sameAs: 'https://isuremedia.com' },
      jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Haldwani', addressRegion: 'Uttarakhand', addressCountry: 'IN' } },
      jobLocationType: 'TELECOMMUTE',
      employmentType: 'FULL_TIME',
      datePosted: '2026-07-22',
    },
  ],
});

export default function CareersPageClient() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [slideFading, setSlideFading] = useState(false);

  const goSlide = useCallback((idx) => {
    setSlideFading(true);
    setTimeout(() => { setSlideIdx(idx); setSlideFading(false); }, 220);
  }, []);

  useEffect(() => {
    const t = setInterval(() => goSlide((slideIdx + 1) % CAROUSEL_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [slideIdx, goSlide]);

  const formRef = useRef(null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JOB_SCHEMA }} />
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════════════ */}
        <section style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #E8EFFF 50%, #EEF2FF 100%)', padding: '52px 0 60px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -80, right: -60, width: 460, height: 460, background: 'rgba(30,77,195,0.18)', borderRadius: '58% 42% 50% 50% / 46% 58% 42% 54%', filter: 'blur(50px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -50, width: 360, height: 360, background: 'rgba(30,77,195,0.12)', borderRadius: '46% 54% 62% 38% / 54% 46% 54% 46%', filter: 'blur(44px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '25%', left: '38%', width: 260, height: 260, background: 'rgba(255,176,0,0.13)', borderRadius: '50% 50% 38% 62% / 62% 38% 62% 38%', filter: 'blur(38px)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="car-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 56, alignItems: 'center', minHeight: 500 }}>

              {/* LEFT */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(24px,2.4vw,38px)', color: 'var(--color-navy)', lineHeight: 1.25, letterSpacing: '-0.4px', marginBottom: 22 }}>
                  Come do <span style={{ color: 'var(--color-primary)' }}>real work</span> on global accounts, with a team that&apos;s <span style={{ color: 'var(--color-primary)' }}>genuinely good</span>.
                </h1>

                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 480, marginBottom: 36 }}>
                  We work with businesses and agencies across the US, UK, and India, covering SEO, paid media, web, content, and automation. If you want to build your career on <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>real accounts with real outcomes</span>, read on.
                </p>

                <div className="car-hero-btns" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <a
                    href="#apply"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s', whiteSpace: 'nowrap' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                  >
                    See Open Roles
                  </a>
                  <a
                    href="mailto:careers@isuremedia.com"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: I, fontSize: 14, fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none' }}
                  >
                    Send Your CV <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
                    <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>careers@isuremedia.com</span>
                  </a>
                </div>
              </div>

              {/* RIGHT */}
              <div style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="banner/career_banner.webp"
                  alt="Isuremedia team"
                  style={{ width: '100%', height: 480, objectFit: 'cover', borderRadius: 20, display: 'block' }}
                />
                <div style={{ position: 'absolute', top: 20, right: 20, background: 'var(--ism-amber)', borderRadius: 10, padding: '10px 18px', boxShadow: '0 6px 18px rgba(255,176,0,.45)' }}>
                  <div style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: 'var(--color-navy)', textAlign: 'center', lineHeight: 1.3 }}>Haldwani,<br />India</div>
                </div>
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 1024px) { .car-hero-grid { grid-template-columns: 1fr !important; min-height: unset !important; gap: 40px !important; } }
            @media (max-width: 768px) { .car-hero-btns { flex-direction: column !important; align-items: flex-start !important; } }
          `}</style>
        </section>

        {/* ══ 02. CULTURE STATEMENT, split layout ═════════════════════════ */}
        <section style={{ background: '#fff', padding: '96px 0 104px', borderBottom: '1px solid var(--color-border)' }}>
          <div className="ism-container">
            <div className="car-culture-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

              {/* LEFT, big statement */}
              <div>
                <div style={{ width: 48, height: 5, background: 'var(--ism-amber)', borderRadius: 3, marginBottom: 32 }} />
                <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(28px,3.2vw,50px)', color: 'var(--color-navy)', lineHeight: 1.08, letterSpacing: '-0.5px', margin: 0 }}>
                  You Do Not Grow<br />by Watching.<br />
                  <span style={{ color: 'var(--color-primary)' }}>You Grow by Doing.</span>
                </h2>
              </div>

              {/* RIGHT, values */}
              <div style={{ paddingTop: 16 }}>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: 32 }}>
                  Good work comes from good people in a good environment. We have spent a lot of time building a place where the work is real, the people are honest, and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>getting better at your craft</span> is something the job actively supports.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {[
                    'Real accounts. Real clients. Real stakes.',
                    'Feedback that goes both ways and means something.',
                    'A clear path up for people who take ownership.',
                    'A place people stay because they want to.',
                  ].map((line, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '18px 0', borderBottom: i < 3 ? '1px solid var(--color-border)' : 'none' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--color-navy)', fontSize: 11 }} />
                      </div>
                      <span style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.50 }}>{line}</span>
                    </div>
                  ))}
                </div>
                <a href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 32, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase' }}>
                  Get to know the company <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                </a>
              </div>

            </div>
          </div>
          <style>{`@media (max-width: 768px) { .car-culture-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
        </section>

        {/* ══ 03. WHAT YOU GET, 4-column horizontal ═══════════════════════ */}
        <section style={{ background: '#F7F8FA', padding: '96px 0 112px' }}>
          <div className="ism-container">

            <div style={{ marginBottom: 56 }}>
              <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(24px,2.8vw,42px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, marginBottom: 12 }}>
                A Place Where the Work<br />Makes <span style={{ color: 'var(--color-primary)' }}>You Better.</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 520, lineHeight: 1.75 }}>
                At Isuremedia, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>when people grow, the company grows</span>. That is not a philosophy, it is how we make decisions every day.
              </p>
            </div>

            <div className="car-grow-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: 'var(--color-border)', borderRadius: 20, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              {GROW_ITEMS.map((item, i) => (
                <div key={i} style={{ background: '#fff', padding: '36px 28px', position: 'relative' }}>
                  <div style={{ fontFamily: J, fontSize: 48, fontWeight: 900, color: 'rgba(30,77,195,.06)', lineHeight: 1, marginBottom: 12, letterSpacing: '-1px' }}>{item.num}</div>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(30,77,195,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <i className={item.icon} style={{ color: 'var(--color-primary)', fontSize: 18 }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 16, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 20, letterSpacing: '-0.2px' }}>{item.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {item.points.map((pt, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--ism-amber)', marginTop: 7, flexShrink: 0 }} />
                        <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
          <style>{`
            @media (max-width: 1024px) { .car-grow-grid { grid-template-columns: repeat(2,1fr) !important; } }
            @media (max-width: 480px) { .car-grow-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ══ 04. IMAGE CAROUSEL, full bleed + floating card ══════════════ */}
        <section className="car-carousel-section" style={{ position: 'relative', height: 740, overflow: 'hidden', background: '#0D1B3E' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={slideIdx}
            src={CAROUSEL_SLIDES[slideIdx].img}
            alt={CAROUSEL_SLIDES[slideIdx].caption}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', opacity: slideFading ? 0 : 1, transition: 'opacity .3s ease' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,15,50,.55) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', background: 'linear-gradient(to top, rgba(5,15,50,.45) 0%, transparent 100%)', pointerEvents: 'none' }} />

          {/* Floating caption card, container aligned */}
          <div className="car-carousel-caption-wrap" style={{ position: 'absolute', bottom: 40, left: 0, right: 0, pointerEvents: 'none' }}>
            <div className="ism-container">
          <div className="car-carousel-card" style={{ width: 360, marginLeft: 'auto', background: 'rgba(255,255,255,.82)', backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)', border: '1px solid rgba(255,255,255,.6)', borderRadius: 20, padding: '28px 32px', boxShadow: '0 24px 64px rgba(0,0,0,.22)', opacity: slideFading ? 0 : 1, transition: 'opacity .3s ease', pointerEvents: 'all' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 20, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.12em', textTransform: 'uppercase' }}>Life at ISM</span>
              </div>
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-text-muted)' }}>
                {String(slideIdx + 1).padStart(2, '0')} / {String(CAROUSEL_SLIDES.length).padStart(2, '0')}
              </span>
            </div>
            <h3 style={{ fontFamily: J, fontWeight: 900, fontSize: 18, color: 'var(--color-navy)', lineHeight: 1.25, letterSpacing: '-0.3px', marginBottom: 8 }}>
              {CAROUSEL_SLIDES[slideIdx].caption}
            </h3>
            <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: 24 }}>
              {CAROUSEL_SLIDES[slideIdx].sub}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {CAROUSEL_SLIDES.map((_, i) => (
                  <button key={i} onClick={() => goSlide(i)} style={{ width: i === slideIdx ? 20 : 6, height: 6, borderRadius: 3, background: i === slideIdx ? 'var(--ism-amber)' : 'var(--color-border)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all .3s ease' }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => goSlide((slideIdx - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length)} style={{ width: 36, height: 36, borderRadius: '50%', background: '#F7F8FA', border: '1px solid var(--color-border)', cursor: 'pointer', color: 'var(--color-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-arrow-left" style={{ fontSize: 11 }} />
                </button>
                <button onClick={() => goSlide((slideIdx + 1) % CAROUSEL_SLIDES.length)} style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--color-navy)', border: 'none', cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                </button>
              </div>
            </div>
          </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .car-carousel-section { height: 520px !important; }
              .car-carousel-caption-wrap { bottom: 20px !important; }
              .car-carousel-card { width: 100% !important; margin-left: 0 !important; box-sizing: border-box !important; padding: 22px 20px !important; }
            }
            @media (max-width: 480px) {
              .car-carousel-section { height: 480px !important; }
            }
          `}</style>
        </section>

        {/* ══ 04B. PHOTO MOSAIC ══════════════════════════════════════════════ */}
        <section style={{ background: '#fff', padding: '96px 0 104px' }}>
          <div className="ism-container">

            {/* Heading */}
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(26px,3vw,44px)', color: 'var(--color-navy)', lineHeight: 1.10, letterSpacing: '-0.5px', marginBottom: 14 }}>
                The Team Behind <span style={{ color: 'var(--color-primary)' }}>the Work.</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>
                <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Real people, real accounts, one office</span>. This is what working at Isuremedia actually looks like.
              </p>
            </div>

            {/* Row 1, 4 images */}
            <div className="car-mosaic-row1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 10 }}>
              {[
                { src: '/career-about/IMG_8926.webp', h: 280, pos: 'center 20%' },
                { src: '/career-about/IMG_3490.webp', h: 280, pos: 'center 12%' },
                { src: '/career-about/Team image for GMB new 2.webp', h: 280, pos: 'center 20%' },
                { src: '/career-about/IMG_3508.webp', h: 280, pos: 'center 12%' },
                { src: '/career-about/IMG_3485.webp', h: 280, pos: 'center 25%' },
                { src: '/career-about/IMG_9123.webp', h: 280, pos: 'center 15%' },
              ].map((img, i) => (
                <div key={i} style={{ borderRadius: 14, overflow: 'hidden', height: img.h }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: img.pos, display: 'block', transition: 'transform .4s ease' }}
                    onMouseEnter={e => { (e.currentTarget).style.transform = 'scale(1.04)'; }}
                    onMouseLeave={e => { (e.currentTarget).style.transform = 'scale(1)'; }}
                  />
                </div>
              ))}
            </div>

            {/* Row 1B, full-width strip, no partial row / gap */}
            <div style={{ borderRadius: 14, overflow: 'hidden', height: 280, marginBottom: 10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/career-about/IMG_3543.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block', transition: 'transform .4s ease' }}
                onMouseEnter={e => { (e.currentTarget).style.transform = 'scale(1.03)'; }}
                onMouseLeave={e => { (e.currentTarget).style.transform = 'scale(1)'; }}
              />
            </div>

            {/* Row 2, 1 wide image + 2 reels */}
            <div className="car-mosaic-row2" style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr', gap: 10 }}>
              {/* Wide image */}
              <div style={{ borderRadius: 14, overflow: 'hidden', height: 360 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/career-about/IMG_3431.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block', transition: 'transform .4s ease' }}
                  onMouseEnter={e => { (e.currentTarget).style.transform = 'scale(1.03)'; }}
                  onMouseLeave={e => { (e.currentTarget).style.transform = 'scale(1)'; }}
                />
              </div>
              {/* 2 reels */}
              <div className="car-mosaic-reels" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, height: 360 }}>
                {[
                  '6TjB6hfkjrY',
                  'PRmw5j6mx1A',
                ].map((id, i) => (
                  <div key={i} style={{ borderRadius: 14, overflow: 'hidden', height: '100%', background: '#000' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`Isuremedia Reel ${i + 1}`}
                      style={{ width: '100%', height: '100%', display: 'block', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
          <style>{`
            @media (max-width: 1024px) { .car-mosaic-row1 { grid-template-columns: repeat(2,1fr) !important; } .car-mosaic-row2 { grid-template-columns: 1fr !important; } .car-mosaic-reels { height: 420px !important; } }
            @media (max-width: 560px) { .car-mosaic-row1 { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>


        {/* ══ 05B. APPLICATION FORM ════════════════════════════════════════ */}
        <section id="apply" ref={formRef} style={{ padding: '96px 0 112px', background: '#fff' }}>
          <div className="ism-container">

            <div className="car-form-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 80, alignItems: 'start' }}>

              {/* LEFT */}
              <div style={{ position: 'sticky', top: 100 }}>
                <div style={{ width: 40, height: 5, background: 'var(--ism-amber)', borderRadius: 3, marginBottom: 24 }} />
                <div style={{ fontFamily: J, fontSize: 11, fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 14 }}>Application Form</div>
                <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2.4vw,34px)', color: 'var(--color-navy)', lineHeight: 1.18, letterSpacing: '-0.4px', marginBottom: 16 }}>
                  Tell us about yourself.
                </h2>
                <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.80, marginBottom: 36 }}>
                  Takes about three minutes. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>We read every application</span>.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    { icon: 'fa-solid fa-envelope', label: 'careers@isuremedia.com' },
                    { icon: 'fa-solid fa-clock', label: 'Reply within two business days' },
                    { icon: 'fa-solid fa-eye', label: 'We review every application' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 34, height: 34, borderRadius: 10, background: '#F7F8FA', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={item.icon} style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                      </div>
                      <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)' }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT, Form */}
              <div style={{ background: 'linear-gradient(145deg,#0F2070 0%,#1E4DC3 55%,#2558E0 100%)', borderRadius: 24, padding: 32, boxShadow: '0 8px 40px rgba(30,77,195,.22)' }}>
                <iframe
                  src="https://link.salesley.com/widget/form/UYhs6DEch50CpyoQeKzp"
                  style={{ width: '100%', height: 1231, border: 'none', borderRadius: 12, display: 'block', background: 'transparent', overflow: 'hidden' }}
                  id="inline-UYhs6DEch50CpyoQeKzp"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Careers - Hiring "
                  data-height="1231"
                  data-layout-iframe-id="inline-UYhs6DEch50CpyoQeKzp"
                  data-form-id="UYhs6DEch50CpyoQeKzp"
                  title="Careers - Hiring "
                  data-initial-iframe-hidden="true"
                  data-unique-id-mapped="true"
                  data-iframe-resizer-initialized="true"
                  scrolling="no"
                />
                <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 1024px) { .car-form-grid { grid-template-columns: 1fr !important; gap: 48px !important; } .car-form-grid > div:first-child { position: relative !important; top: 0 !important; } }
            @media (max-width: 480px) { .car-row2 { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. STAY CONNECTED, CTA card style ══════════════════════════ */}
        <section style={{ padding: '88px 0', background: '#fff' }}>
          <div className="ism-container">

            <div className="car-cta-card" style={{ position: 'relative', background: 'var(--color-primary)', borderRadius: 24, padding: '56px 60px', display: 'grid', gridTemplateColumns: '1fr 380px', alignItems: 'center', gap: 56, overflow: 'hidden' }}>

              {/* Glow */}
              <div style={{ position: 'absolute', right: '30%', top: '-10%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents: 'none', borderRadius: '50%' }} />

              {/* LEFT */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(26px,2.8vw,42px)', color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.10, marginBottom: 20 }}>
                  Not the Right Time?{' '}
                  <span style={{ color: 'var(--ism-amber)' }}>Stay Connected.</span>
                </h2>

                <p style={{ fontFamily: I, fontSize: 16, color: 'rgba(255,255,255,.85)', lineHeight: 1.78, maxWidth: 560, marginBottom: 36 }}>
                  Follow us on LinkedIn for updates on new openings, team news, and work we are doing across digital marketing. We share <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>content worth reading</span> for anyone building a serious career in this industry.
                </p>

                <div className="car-cta-btns" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <a
                    href="/appointment"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', whiteSpace: 'nowrap', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                  >
                    <i className="fa-solid fa-phone" style={{ fontSize: 14 }} />
                    Book a Free Call
                  </a>

                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.50)', textTransform: 'uppercase', letterSpacing: '.06em' }}>or</span>

                  <a
                    href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.20)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.12)'; e.currentTarget.style.transform = ''; }}
                  >
                    <i className="fa-solid fa-envelope" style={{ fontSize: 13 }} />
                    Contact Us
                  </a>
                </div>
              </div>

              {/* RIGHT, image */}
              <div className="car-cta-img" style={{ position: 'relative', zIndex: 2 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/result_footer/not the right time career page.webp"
                  alt="Join Isuremedia"
                  style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 16, display: 'block', boxShadow: '0 16px 48px rgba(0,0,0,.25)' }}
                />
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 1024px) { .car-cta-card { grid-template-columns: 1fr !important; } .car-cta-card img { height: 240px !important; } .car-cta-img { order: -1; } }
            @media (max-width: 768px) { .car-cta-card { padding: 40px 28px !important; } .car-cta-btns { flex-direction: column !important; align-items: stretch !important; } .car-cta-btns a { justify-content: center !important; } }
          `}</style>
        </section>

      </main>
      <Footer />
    </>
  );
}
