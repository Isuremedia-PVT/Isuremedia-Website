'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const HERO_IMG   = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80';
const STORY_IMG  = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80';
const STORY_IMG2 = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80';

const STATS = [
  { num: '10+',  label: 'Years of Expertise' },
  { num: '200+', label: 'Clients Worldwide'  },
  { num: '$50M', label: 'Revenue Generated'  },
  { num: '30+',  label: 'Industries Served'  },
];

const VALUES = [
  {
    n: '01', icon: 'fa-solid fa-users', title: 'Client First',
    body: 'Your growth is not a side effect of what we do. It is the reason we do it. Every decision starts with one question: what is actually best for this client? Not what is easiest for us. What genuinely moves your business forward.',
  },
  {
    n: '02', icon: 'fa-solid fa-eye', title: 'Transparency',
    body: 'You always know what is happening with your account, what changed, and why we chose that approach. Our team runs across the US, UK, and India — we are almost always on. When you need us, we are there.',
  },
  {
    n: '03', icon: 'fa-solid fa-shield-halved', title: 'Integrity',
    body: 'We say what we mean and we mean what we say. If something is not working, we tell you before you have to ask. We would rather be honest with you than comfortable.',
  },
  {
    n: '04', icon: 'fa-solid fa-circle-check', title: 'Accountability',
    body: 'Someone owns every piece of work that leaves our team. Not a department — a person. When we take something on, we take on the responsibility for what it produces.',
  },
  {
    n: '05', icon: 'fa-solid fa-bullseye', title: 'Outcome Focused',
    body: 'We are not here to keep you on a retainer by staying busy. Every strategy has a clear goal behind it. Every campaign is tracked. Activity without outcomes is just noise.',
  },
  {
    n: '06', icon: 'fa-solid fa-handshake', title: 'Reliability',
    body: 'You should never have to chase us. Deadlines are met. Updates go out when they are supposed to. Quality stays consistent whether it is your first month with us or your twelfth.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '64px 0 88px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', minHeight: 560 }}>

              {/* LEFT */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>About ISM</span>
                </div>

                <h1 style={{ fontFamily: J, fontWeight: 900, lineHeight: 1.10, letterSpacing: '-0.5px', marginBottom: 16, fontSize: 'clamp(28px,3.5vw,52px)', color: 'var(--color-navy)' }}>
                  We Cover Every Corner<br />
                  of <span style={{ color: 'var(--color-primary)' }}>Your Digital Growth.</span>
                </h1>

                <p style={{ fontFamily: J, fontSize: 'clamp(15px,1.3vw,19px)', fontWeight: 600, color: 'var(--ism-amber)', marginBottom: 22, letterSpacing: '-0.1px', lineHeight: 1.45 }}>
                  Complete Digital Presence. Complete Digital Growth. That is ISM.
                </p>

                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.80, maxWidth: 520, marginBottom: 38 }}>
                  Whether you are growing your own business or helping your clients grow theirs, ISM takes care of the whole thing. Strategy, execution, and results. All from one place.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', whiteSpace: 'nowrap', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
                  >
                    Work With Us <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </a>
                  <a href="#brand-story"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', whiteSpace: 'nowrap', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)'; }}
                  >
                    Our Story
                  </a>
                </div>
              </div>

              {/* RIGHT — image with decorative frame */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 28, right: -20, width: '88%', height: '82%', background: 'var(--ism-blue-50)', borderRadius: 20, zIndex: 0 }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HERO_IMG}
                  alt="ISM team — digital growth experts"
                  style={{ position: 'relative', zIndex: 1, width: '100%', height: 480, objectFit: 'cover', borderRadius: 16, display: 'block', boxShadow: '0 24px 64px rgba(0,35,83,.18)' }}
                />
                {/* floating stat chip */}
                <div style={{ position: 'absolute', bottom: 36, left: -28, zIndex: 2, background: '#fff', borderRadius: 14, padding: '16px 22px', boxShadow: '0 8px 32px rgba(0,35,83,.15)', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-globe" style={{ color: 'var(--color-primary)', fontSize: 18 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 22, fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1.1 }}>200+</div>
                    <div style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)' }}>Clients Worldwide</div>
                  </div>
                </div>
                {/* amber badge */}
                <div style={{ position: 'absolute', top: -18, right: 36, zIndex: 2, background: 'var(--ism-amber)', borderRadius: 10, padding: '10px 18px', boxShadow: '0 6px 20px rgba(255,176,0,.40)' }}>
                  <div style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', textAlign: 'center', lineHeight: 1.3 }}>Since<br />2015</div>
                </div>
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .about-hero-grid { grid-template-columns: 1fr !important; min-height: unset !important; gap: 48px !important; }
            }
          `}</style>
        </section>

        {/* ══════════════════════════════════════════
            STATS
        ══════════════════════════════════════════ */}
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
            <div className="about-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--color-border)', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--sh-sm)' }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: '40px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 'clamp(40px,4.5vw,64px)', fontWeight: 800, lineHeight: 1.10, color: 'var(--color-primary)', marginBottom: 6, letterSpacing: '-1px' }}>{s.num}</div>
                  <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, margin: '0 auto 10px' }} />
                  <div style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 640px) {
              .about-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
            }
          `}</style>
        </section>

        {/* ══════════════════════════════════════════
            BRAND STORY
        ══════════════════════════════════════════ */}
        <section id="brand-story" style={{ padding: '104px 0 120px', background: 'var(--color-bg-soft)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '15%', right: '-6%', width: 540, height: 540, background: 'radial-gradient(circle,rgba(30,77,195,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

            {/* section label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 72 }}>
              <div style={{ width: 40, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>Our Story</span>
            </div>

            <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 88, alignItems: 'start' }}>

              {/* LEFT — narrative */}
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(24px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, marginBottom: 32, letterSpacing: '-0.4px' }}>
                  The moment businesses find ISM is almost always the same.
                </h2>

                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.84, marginBottom: 20 }}>
                  You started your business because you are good at what you do. At some point you realised that being good at what you do is not enough. You also need the right people to find you, trust you, and choose you. That is where digital marketing comes in.
                </p>

                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.84, marginBottom: 20 }}>
                  Some businesses try to figure it out themselves. Some hire an agency and hope for the best. Some build a small team and give it a go. Whatever the path, most of them hit the same wall. Results not matching the effort. Strategy unclear or missing completely. No way to tell what is working and what is not.
                </p>

                {/* pull quote */}
                <div style={{ background: 'var(--color-primary)', borderRadius: 16, padding: '32px 36px', margin: '36px 0', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: -28, right: -28, width: 140, height: 140, background: 'rgba(255,255,255,.05)', borderRadius: '50%', pointerEvents: 'none' }} />
                  <i className="fa-solid fa-quote-left" style={{ color: 'var(--ism-amber)', fontSize: 30, marginBottom: 14, display: 'block' }} />
                  <p style={{ fontFamily: J, fontSize: 'clamp(16px,1.5vw,19px)', fontWeight: 700, color: '#fff', lineHeight: 1.58, margin: 0 }}>
                    We come in wherever you are. We look at your goals, your market, and what actually needs to happen to move your business forward. Then we build the plan and bring in the right experts to execute it.
                  </p>
                </div>

                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.84, marginBottom: 20 }}>
                  SEO, paid ads, content, web development, design, automation. Every area covered by someone who knows it well. All of it connected to one plan. All of it pointed at your growth.
                </p>

                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.84 }}>
                  You always know what is being done, why it is being done, and what it is producing. No guessing. No chasing people for updates. No wondering if the strategy is right. Just clear, structured, measurable growth — and a team that owns the outcome the way you would want to own it yourself.
                </p>
              </div>

              {/* RIGHT — stacked images */}
              <div style={{ position: 'relative', paddingBottom: 64 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={STORY_IMG}
                  alt="ISM strategy and planning"
                  style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 20, display: 'block', boxShadow: '0 20px 56px rgba(0,35,83,.15)' }}
                />
                {/* overlapping second image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={STORY_IMG2}
                  alt="ISM team collaboration"
                  style={{ width: '58%', height: 210, objectFit: 'cover', borderRadius: 16, display: 'block', boxShadow: '0 16px 40px rgba(0,35,83,.18)', position: 'absolute', bottom: 0, right: -20, border: '4px solid #fff' }}
                />
                {/* years badge */}
                <div style={{ position: 'absolute', top: 28, left: -28, background: '#fff', borderRadius: 14, padding: '20px 26px', boxShadow: '0 8px 32px rgba(0,35,83,.14)', textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 38, fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>10+</div>
                  <div style={{ width: 28, height: 3, background: 'var(--ism-amber)', borderRadius: 2, margin: '7px auto 7px' }} />
                  <div style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)', fontWeight: 500 }}>Years<br />of Expertise</div>
                </div>
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 960px) {
              .story-grid { grid-template-columns: 1fr !important; gap: 52px !important; }
            }
          `}</style>
        </section>

        {/* ══════════════════════════════════════════
            VISION & MISSION
        ══════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

            <div style={{ textAlign: 'center', marginBottom: 68 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 20 }}>
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Where We Are Headed</span>
              </div>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(24px,2.6vw,40px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>
                Driven by Vision. Defined by Mission.
              </h2>
            </div>

            <div className="vm-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>

              {/* VISION */}
              <div style={{ background: 'var(--color-primary)', borderRadius: 20, padding: '56px 52px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -44, right: -44, width: 220, height: 220, background: 'rgba(255,255,255,.05)', borderRadius: '50%', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: -64, left: -36, width: 260, height: 260, background: 'rgba(255,255,255,.04)', borderRadius: '50%', pointerEvents: 'none' }} />

                <div style={{ width: 58, height: 58, borderRadius: 15, background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <i className="fa-solid fa-rocket" style={{ color: '#fff', fontSize: 24 }} />
                </div>
                <div style={{ display: 'inline-block', background: 'var(--ism-amber)', borderRadius: 6, padding: '4px 14px', marginBottom: 24 }}>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Vision</span>
                </div>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,1.9vw,26px)', fontWeight: 800, color: '#fff', lineHeight: 1.35, marginBottom: 20, letterSpacing: '-0.3px' }}>
                  1,000 Businesses and Agencies Powered by 2030.
                </h3>
                <p style={{ fontFamily: I, fontSize: 15, color: 'rgba(255,255,255,.82)', lineHeight: 1.82, margin: 0 }}>
                  To power the digital growth of 1,000 businesses and agencies worldwide by 2030, through expert strategy and dedicated execution that turns digital presence into structured, measurable, and sustainable growth.
                </p>
              </div>

              {/* MISSION */}
              <div style={{ background: 'var(--color-bg-soft)', borderRadius: 20, padding: '56px 52px', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -44, right: -44, width: 220, height: 220, background: 'rgba(30,77,195,.04)', borderRadius: '50%', pointerEvents: 'none' }} />

                <div style={{ width: 58, height: 58, borderRadius: 15, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <i className="fa-solid fa-compass" style={{ color: 'var(--color-primary)', fontSize: 24 }} />
                </div>
                <div style={{ display: 'inline-block', background: 'var(--ism-amber)', borderRadius: 6, padding: '4px 14px', marginBottom: 24 }}>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Mission</span>
                </div>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,1.9vw,26px)', fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.35, marginBottom: 20, letterSpacing: '-0.3px' }}>
                  Digital Growth Made Simple, Structured, and Measurable.
                </h3>
                <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: 0 }}>
                  To make digital growth simple, structured, and measurable for every business and agency we work with, through dedicated experts and clear strategy built around what actually matters to them.
                </p>
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .vm-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ══════════════════════════════════════════
            VALUES
        ══════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(30,77,195,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

            {/* header */}
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{ width: 40, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>Our Values</span>
                <div style={{ width: 40, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(24px,2.6vw,40px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', maxWidth: 600, margin: '0 auto 18px' }}>
                The Six Principles That Guide Everything We Do.
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.74, maxWidth: 560, margin: '0 auto' }}>
                These are not aspirational statements on a wall. They are the rules we hold ourselves to on every account, every month.
              </p>
            </div>

            {/* grid */}
            <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {VALUES.map((v) => (
                <div
                  key={v.n}
                  style={{ background: '#fff', borderRadius: 18, padding: '38px 34px', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden', transition: 'transform .22s, box-shadow .22s, border-color .22s', cursor: 'default' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(-5px)';
                    el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)';
                    el.style.borderColor = 'var(--color-primary)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = '';
                    el.style.boxShadow = '';
                    el.style.borderColor = 'var(--color-border)';
                  }}
                >
                  {/* watermark number */}
                  <div style={{ position: 'absolute', top: 10, right: 18, fontFamily: J, fontSize: 56, fontWeight: 900, color: 'var(--ism-blue-50)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>{v.n}</div>

                  {/* icon */}
                  <div style={{ width: 54, height: 54, borderRadius: 14, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <i className={v.icon} style={{ color: 'var(--color-primary)', fontSize: 21 }} />
                  </div>

                  {/* amber line */}
                  <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, marginBottom: 16 }} />

                  <h3 style={{ fontFamily: J, fontSize: 18, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 12, lineHeight: 1.30 }}>{v.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.80, margin: 0 }}>{v.body}</p>
                </div>
              ))}
            </div>

          </div>

          <style>{`
            @media (max-width: 900px) {
              .values-grid { grid-template-columns: repeat(2,1fr) !important; }
            }
            @media (max-width: 560px) {
              .values-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
