'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewsStrip from '@/components/ReviewsStrip';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const VALUES = [
  {
    icon: 'fa-solid fa-users',
    title: 'Client First',
    body: 'Your growth is not a side effect of what we do. It is the reason we do it. Every decision we make, from how we plan your strategy to how we report your results, starts with one question: what is actually best for this client? Not what is easiest for us. Not what looks good on paper. What genuinely moves your business forward.',
  },
  {
    icon: 'fa-solid fa-eye',
    title: 'Transparency',
    body: 'You always know what is happening with your account, what changed, and why we chose that approach. No surprises. No chasing us for updates. Our team runs across the US, UK, and India, which means we are almost always on. When you need us, we are there. That is not a promise. It is just how we work.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Integrity',
    body: 'We say what we mean and we mean what we say. If something is not working, we tell you before you have to ask. If a different approach would serve you better, we will say that too, even if it means doing less. We would rather have a smaller, honest relationship with you than a bigger one built on telling you what you want to hear.',
  },
  {
    icon: 'fa-solid fa-circle-check',
    title: 'Accountability',
    body: 'Someone owns every piece of work that leaves our team. Not a department. Not a process. A person. When we take something on, we take on the responsibility for what it produces. If results are not where they should be, we do not point at circumstances. We look at what needs to change and we change it.',
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Outcome Focused',
    body: 'We are not here to keep you on a retainer by staying busy. We are here to move your business forward in ways you can measure. Every strategy we build, every campaign we run, every piece of content we create has a clear goal behind it. And we track whether it gets there. Because activity without outcomes is just noise.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Reliability',
    body: 'You should never have to chase us. Deadlines are met. Updates go out when they are supposed to. Quality stays consistent whether it is your first month with us or your twelfth. We know that trust is built slowly and can be broken quickly, so we treat every deliverable like your most important one.',
  },
];

const HOW_BUILT = [
  {
    icon: 'fa-solid fa-building',
    title: 'Everything In-House. Zero Outsourcing.',
    body: 'Every piece of work ISureMedia delivers is produced by our in-house team. We do not pass your campaigns to freelancers, subcontractors, or white-label providers. The strategist who plans your campaign is on the same team as the specialist who executes it. That kind of ownership is not standard in this industry. For us it is non-negotiable.',
  },
  {
    icon: 'fa-solid fa-earth-americas',
    title: 'US Strategy. India Execution.',
    body: 'Your campaign is planned and directed from a US market perspective by specialists who understand your buyers. It is executed by a dedicated in-house team in Haldwani, India, who have been working together for years. You get US-level strategic thinking and execution quality at a cost structure that a fully US-based team cannot match.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'GoHighLevel Is Our Platform.',
    body: 'GoHighLevel is not something we recommend and leave you to figure out. It is the platform ISureMedia runs on itself. CRM, automation, funnels, appointment systems, and follow-up sequences. We configure it for our own business and for every client that needs it. That depth of experience shows in how we build and how fast we move.',
  },
  {
    icon: 'fa-solid fa-calendar-check',
    title: 'Month to Month. No Lock-In.',
    body: 'We do not hold clients with 12-month contracts. If we deliver, clients stay. If we do not, they should not be paying. You can leave any time. That single policy keeps us more accountable than any service level agreement ever could.',
  },
];


export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════════════ */}
        <section className="about-hero-section" style={{ background: '#F0F2F8', padding: '40px 0 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -80, right: -60, width: 460, height: 460, background: 'rgba(30,77,195,0.16)', borderRadius: '60% 40% 54% 46% / 48% 60% 40% 52%', filter: 'blur(50px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: -40, left: -60, width: 380, height: 380, background: 'rgba(30,77,195,0.10)', borderRadius: '38% 62% 46% 54% / 60% 44% 56% 40%', filter: 'blur(44px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: '32%', width: 300, height: 300, background: 'rgba(255,176,0,0.12)', borderRadius: '54% 46% 38% 62% / 46% 54% 46% 54%', filter: 'blur(38px)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', minHeight: 400 }}>

              {/* LEFT */}
              <div>
                <h1 className="about-hero-h1" style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,3.5vw,54px)', color: 'var(--color-navy)', lineHeight: 1.10, letterSpacing: '-0.6px', marginBottom: 24, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                  We Cover Every<br />
                  <span style={{ color: 'var(--color-primary)' }}>Corner of Your Digital Growth.</span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.80, maxWidth: 500, marginBottom: 40 }}>
                  ISureMedia is an end-to-end digital marketing agency and white-label fulfillment partner. Built for businesses that want results and agencies that want to scale without hiring.
                </p>

                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 24px rgba(255,176,0,.38)', transition: 'all .18s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,176,0,.52)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 24px rgba(255,176,0,.38)'; }}
                >
                  Talk to Our Team <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
                </a>
              </div>

              {/* RIGHT */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 24, right: -16, width: '88%', height: '86%', background: 'rgba(30,77,195,.07)', borderRadius: 20, zIndex: 0 }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                  alt="ISureMedia team"
                  style={{ position: 'relative', zIndex: 1, width: '100%', height: 460, objectFit: 'cover', borderRadius: 16, display: 'block', boxShadow: '0 24px 64px rgba(0,35,83,.18)' }}
                />
                <div style={{ position: 'absolute', bottom: 32, left: -24, zIndex: 2, background: '#fff', borderRadius: 14, padding: '16px 22px', boxShadow: '0 8px 32px rgba(0,35,83,.15)', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(30,77,195,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-globe" style={{ color: 'var(--color-primary)', fontSize: 18 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 22, fontWeight: 800, color: 'var(--color-primary)', lineHeight: 1.1 }}>400+</div>
                    <div style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)' }}>Clients Worldwide</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', top: -16, right: 32, zIndex: 2, background: 'var(--ism-amber)', borderRadius: 10, padding: '10px 18px', boxShadow: '0 6px 20px rgba(255,176,0,.40)' }}>
                  <div style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', textAlign: 'center', lineHeight: 1.3 }}>40+<br />Specialists</div>
                </div>
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .about-hero-section { padding: 32px 0 !important; }
              .about-hero-section > div { padding: 0 20px !important; }
              .about-hero-grid { grid-template-columns: 1fr !important; min-height: unset !important; gap: 48px !important; }
              .about-hero-h1 { font-size: clamp(22px,6vw,40px) !important; }
            }
          `}</style>
        </section>

        <ReviewsStrip />

        {/* ══ 03. OUR STORY ════════════════════════════════════════════════ */}
        <section style={{ padding: '96px 0 112px', background: '#F7F8FA', position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: '5%', right: '2%', width: 440, height: 440, background: 'radial-gradient(circle,rgba(30,77,195,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

              {/* ── LEFT — sticky image stack ── */}
              <div style={{ position: 'sticky', top: 100 }}>

                {/* Decorative bg block */}
                <div style={{ position: 'absolute', top: 28, left: 28, width: '88%', height: '88%', background: 'linear-gradient(135deg, rgba(30,77,195,.08) 0%, rgba(255,176,0,.07) 100%)', borderRadius: 24, zIndex: 0 }} />

                {/* Main image */}
                <div style={{ position: 'relative', zIndex: 1, borderRadius: 22, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,35,83,.18)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                    alt="ISureMedia team at work"
                    style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Overlapping bottom image */}
                <div style={{ position: 'absolute', bottom: -32, right: -20, width: '52%', borderRadius: 16, overflow: 'hidden', border: '4px solid #F7F8FA', boxShadow: '0 20px 48px rgba(0,35,83,.20)', zIndex: 2 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                    alt="ISureMedia strategy session"
                    style={{ width: '100%', height: 190, objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* $50M chip */}
                <div style={{ position: 'absolute', top: 24, left: -28, zIndex: 3, background: '#fff', borderRadius: 16, padding: '16px 22px', boxShadow: '0 10px 40px rgba(0,35,83,.14)', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(30,77,195,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-chart-line" style={{ color: 'var(--color-primary)', fontSize: 18 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 22, fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>$50M+</div>
                    <div style={{ fontFamily: I, fontSize: 11, color: 'var(--color-text-muted)', marginTop: 3 }}>Growth Tracked</div>
                  </div>
                </div>

                {/* 400+ clients amber badge */}
                <div style={{ position: 'absolute', bottom: 130, left: -28, zIndex: 3, background: 'var(--ism-amber)', borderRadius: 12, padding: '12px 18px', boxShadow: '0 6px 22px rgba(255,176,0,.42)', textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 20, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>400+</div>
                  <div style={{ fontFamily: I, fontSize: 11, color: 'var(--color-navy)', marginTop: 3, fontWeight: 600 }}>Clients</div>
                </div>

              </div>

              {/* ── RIGHT — scrolling content ── */}
              <div style={{ paddingTop: 8, paddingBottom: 32 }}>

                <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(24px,2.6vw,40px)', color: 'var(--color-navy)', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: 48 }}>
                  We Built <span style={{ color: 'var(--color-primary)' }}>ISM</span> Because the{' '}
                  <span style={{ color: 'var(--ism-amber)' }}>Agency Model</span> Was Broken.
                </h2>

                {/* Step blocks */}
                {[
                  {
                    num: '01',
                    color: 'var(--color-primary)',
                    bg: 'rgba(30,77,195,.07)',
                    text: 'You started your business because you are good at what you do. At some point you realised that being good at what you do is not enough. You also need the right people to find you, trust you, and choose you. That is where digital marketing comes in.',
                  },
                  {
                    num: '02',
                    color: '#9A6800',
                    bg: 'rgba(255,176,0,.12)',
                    text: 'Some businesses try to figure it out themselves. Some hire an agency and hope for the best. Whatever the path, most of them hit the same wall. The results are not matching the effort. The strategy is unclear or missing completely. There is no way to tell what is working and what is not.',
                  },
                  {
                    num: '03',
                    color: 'var(--color-primary)',
                    bg: 'rgba(30,77,195,.07)',
                    text: 'That is the moment businesses and agencies find ISM. We come in wherever you are. We look at your goals, your market, and what needs to happen to move your business forward. Then we build a clear strategy and bring in the right experts to execute it.',
                  },
                ].map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: 20, marginBottom: 32, position: 'relative' }}>
                    {/* Number + line */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: step.bg, border: `2px solid ${step.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: step.color }}>{step.num}</span>
                      </div>
                      {idx < 2 && <div style={{ width: 2, flex: 1, background: 'var(--color-border)', marginTop: 8, minHeight: 24 }} />}
                    </div>
                    <div style={{ paddingTop: 8 }}>
                      <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.88, margin: 0 }}>{step.text}</p>
                    </div>
                  </div>
                ))}

                {/* Pull quote */}
                <div style={{ background: 'var(--color-navy)', borderRadius: 20, padding: '32px 34px', position: 'relative', overflow: 'hidden', marginBottom: 32, marginTop: 8 }}>
                  <div style={{ position: 'absolute', top: -24, right: -24, width: 130, height: 130, background: 'rgba(255,255,255,.04)', borderRadius: '50%', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', bottom: -32, left: -16, width: 140, height: 140, background: 'rgba(255,176,0,.05)', borderRadius: '50%', pointerEvents: 'none' }} />
                  <i className="fa-solid fa-quote-left" style={{ color: 'var(--ism-amber)', fontSize: 22, marginBottom: 14, display: 'block' }} />
                  <p style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.65, margin: '0 0 14px' }}>
                    SEO, paid ads, content, web, design, automation — every area covered by someone who knows it well. All connected to one plan. All pointed at your growth.
                  </p>
                  <div style={{ fontFamily: I, fontSize: 12, color: 'rgba(255,255,255,.42)', letterSpacing: '.06em', textTransform: 'uppercase' }}>ISureMedia</div>
                </div>

                {/* Trust pills */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {['In-House Team Only', 'No Outsourcing', 'Month to Month'].map((tag, i) => (
                    <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#fff', border: '1px solid var(--color-border)', borderRadius: 100, padding: '8px 16px', boxShadow: '0 1px 4px rgba(0,0,0,.05)' }}>
                      <i className="fa-solid fa-check" style={{ fontSize: 10, color: 'var(--color-primary)' }} />
                      <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-navy)' }}>{tag}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 960px) {
              .about-story-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
              .about-story-grid > div:first-child { position: relative !important; top: 0 !important; }
            }
          `}</style>
        </section>

        {/* ══ 04. WHAT WE BELIEVE ══════════════════════════════════════════ */}
        <section style={{ padding: '96px 0 112px', background: '#F0F2F8', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(24px,2.8vw,42px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, maxWidth: 700, margin: '0 auto' }}>
                <span style={{ color: 'var(--color-primary)' }}>Vision, Mission,</span> and the{' '}
                <span style={{ color: 'var(--ism-amber)' }}>Six Principles</span> We Hold Ourselves To.
              </h2>
            </div>

            {/* Vision + Mission */}
            <div className="about-vm-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48 }}>

              <div style={{ background: 'var(--color-primary)', borderRadius: 20, padding: '48px 44px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'rgba(255,255,255,.05)', borderRadius: '50%', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: -56, left: -32, width: 240, height: 240, background: 'rgba(255,255,255,.03)', borderRadius: '50%', pointerEvents: 'none' }} />
                <div style={{ width: 52, height: 52, borderRadius: 13, background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <i className="fa-solid fa-rocket" style={{ color: '#fff', fontSize: 22 }} />
                </div>
                <div style={{ display: 'inline-block', background: 'var(--ism-amber)', borderRadius: 6, padding: '3px 12px', marginBottom: 18 }}>
                  <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Vision</span>
                </div>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(17px,1.8vw,24px)', fontWeight: 800, color: '#fff', lineHeight: 1.35, marginBottom: 16, letterSpacing: '-0.3px' }}>
                  1,000 Businesses and Agencies Powered by 2030.
                </h3>
                <p style={{ fontFamily: I, fontSize: 15, color: 'rgba(255,255,255,.80)', lineHeight: 1.82, margin: 0 }}>
                  To power the digital growth of 1,000 businesses and agencies worldwide by 2030, through expert strategy and dedicated execution that turns digital presence into structured, measurable, and sustainable growth.
                </p>
              </div>

              <div style={{ background: '#fff', borderRadius: 20, padding: '48px 44px', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'rgba(30,77,195,.04)', borderRadius: '50%', pointerEvents: 'none' }} />
                <div style={{ width: 52, height: 52, borderRadius: 13, background: 'rgba(30,77,195,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <i className="fa-solid fa-compass" style={{ color: 'var(--color-primary)', fontSize: 22 }} />
                </div>
                <div style={{ display: 'inline-block', background: 'var(--ism-amber)', borderRadius: 6, padding: '3px 12px', marginBottom: 18 }}>
                  <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Mission</span>
                </div>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(17px,1.8vw,24px)', fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.35, marginBottom: 16, letterSpacing: '-0.3px' }}>
                  Digital Growth Made Simple, Structured, and Measurable.
                </h3>
                <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: 0 }}>
                  To make digital growth simple, structured, and measurable for every business and agency we work with, through dedicated experts and clear strategy built around what actually matters to them.
                </p>
              </div>

            </div>

            {/* 6 Value Cards — 3×2 */}
            <div className="about-values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {VALUES.map((v, i) => (
                <div
                  key={i}
                  style={{ background: '#fff', borderRadius: 16, padding: '34px 30px', border: '1px solid var(--color-border)', transition: 'transform .22s, box-shadow .22s, border-color .22s', cursor: 'default' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = '0 16px 48px rgba(30,77,195,.13)';
                    el.style.borderColor = 'var(--color-primary)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = '';
                    el.style.boxShadow = '';
                    el.style.borderColor = 'var(--color-border)';
                  }}
                >
                  <div style={{ width: 50, height: 50, borderRadius: 13, background: 'rgba(30,77,195,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <i className={v.icon} style={{ color: 'var(--color-primary)', fontSize: 20 }} />
                  </div>
                  <div style={{ width: 28, height: 3, background: 'var(--ism-amber)', borderRadius: 2, marginBottom: 14 }} />
                  <h3 style={{ fontFamily: J, fontSize: 16, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 10, lineHeight: 1.30 }}>{v.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.80, margin: 0 }}>{v.body}</p>
                </div>
              ))}
            </div>

          </div>

          <style>{`
            @media (max-width: 960px) {
              .about-vm-grid { grid-template-columns: 1fr !important; }
              .about-values-grid { grid-template-columns: repeat(2,1fr) !important; }
            }
            @media (max-width: 560px) {
              .about-values-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ══ 05. HOW WE ARE BUILT ═════════════════════════════════════════ */}
        <section style={{ padding: '96px 0 112px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-8%', left: '-4%', width: 480, height: 480, background: 'radial-gradient(circle,rgba(255,176,0,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-8%', right: '-4%', width: 480, height: 480, background: 'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(24px,2.8vw,42px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, maxWidth: 680, margin: '0 auto 16px' }}>
                <span style={{ color: 'var(--ism-amber)' }}>Four Things</span> That Make{' '}
                <span style={{ color: 'var(--color-primary)' }}>ISureMedia</span> Different.
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
                These are not marketing lines. They are the structural decisions that shape how every piece of work gets done.
              </p>
            </div>

            <div className="about-built-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
              {HOW_BUILT.map((tile, i) => {
                const isBlue = i % 2 === 0;
                return (
                  <div key={i} style={{
                    background: isBlue
                      ? 'linear-gradient(135deg, #EEF2FF 0%, #E4ECFF 100%)'
                      : 'linear-gradient(135deg, #FFFBF0 0%, #FFF5D6 100%)',
                    border: isBlue
                      ? '1px solid rgba(30,77,195,.14)'
                      : '1px solid rgba(255,176,0,.22)',
                    borderRadius: 22,
                    padding: '44px 40px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Large bg number */}
                    <div style={{
                      position: 'absolute', top: -8, right: 24,
                      fontFamily: J, fontSize: 130, fontWeight: 900, lineHeight: 1,
                      color: isBlue ? 'rgba(30,77,195,.055)' : 'rgba(255,176,0,.10)',
                      userSelect: 'none', pointerEvents: 'none',
                    }}>0{i + 1}</div>

                    {/* Icon */}
                    <div style={{
                      width: 54, height: 54, borderRadius: 15,
                      background: isBlue ? 'rgba(30,77,195,.12)' : 'rgba(255,176,0,.20)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22,
                    }}>
                      <i className={tile.icon} style={{ color: isBlue ? 'var(--color-primary)' : '#9A6800', fontSize: 22 }} />
                    </div>

                    <h3 style={{ fontFamily: J, fontSize: 'clamp(16px,1.6vw,20px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 14, lineHeight: 1.28, letterSpacing: '-0.2px' }}>{tile.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: 0 }}>{tile.body}</p>
                  </div>
                );
              })}
            </div>

          </div>

          <style>{`
            @media (max-width: 768px) {
              .about-built-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ══ 06. VIDEO TESTIMONIAL ════════════════════════════════════════ */}
        <section style={{ padding: '100px 0 112px', background: '#fff', position: 'relative', overflow: 'hidden' }}>

          {/* Dot grid texture */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(30,77,195,.045) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

            {/* Rule label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 72 }}>
              <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
              <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Do Not Take Our Word for It</span>
              <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
            </div>

            <div className="about-video-grid" style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 80, alignItems: 'center' }}>

              {/* ── LEFT: Quote ── */}
              <div>
                {/* Giant decorative quote mark */}
                <div style={{ fontFamily: 'Georgia,"Times New Roman",serif', fontSize: 160, lineHeight: 0.75, color: 'var(--ism-amber)', marginBottom: 16, userSelect: 'none' }}>&ldquo;</div>

                <p style={{ fontFamily: J, fontSize: 'clamp(18px,1.9vw,24px)', fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.58, margin: '0 0 36px', letterSpacing: '-0.3px' }}>
                  [One sentence pulled verbatim from the client video — pending.]
                </p>

                <div style={{ width: 44, height: 4, background: 'var(--ism-amber)', borderRadius: 2, marginBottom: 32 }} />

                {/* Client row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
                  <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-primary) 0%, #3B6CF5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 6px 20px rgba(30,77,195,.30)' }}>
                    <i className="fa-solid fa-user" style={{ color: '#fff', fontSize: 20 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 16, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2, marginBottom: 4 }}>[Client Name]</div>
                    <div style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)' }}>[Company Name]</div>
                  </div>
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: 4, marginBottom: 28 }}>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 17 }} />
                  ))}
                </div>

                {/* Google verified badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#F7F8FA', border: '1px solid var(--color-border)', borderRadius: 10, padding: '10px 18px' }}>
                  <span style={{ fontFamily: 'Arial,sans-serif', fontWeight: 700, fontSize: 17, lineHeight: 1 }}>
                    <span style={{ color: '#4285F4' }}>G</span><span style={{ color: '#EA4335' }}>o</span><span style={{ color: '#FBBC05' }}>o</span><span style={{ color: '#4285F4' }}>g</span><span style={{ color: '#34A853' }}>l</span><span style={{ color: '#EA4335' }}>e</span>
                  </span>
                  <span style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)', fontWeight: 500 }}>Verified Review</span>
                </div>
              </div>

              {/* ── RIGHT: Video ── */}
              <div style={{ position: 'relative' }}>
                {/* Amber shadow box behind video */}
                <div style={{ position: 'absolute', top: 18, left: 18, right: -18, bottom: -18, background: 'var(--ism-amber)', borderRadius: 24, opacity: 0.15 }} />
                {/* Blue shadow box */}
                <div style={{ position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, background: 'var(--color-primary)', borderRadius: 24, opacity: 0.10 }} />
                <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', paddingTop: '56.25%', boxShadow: '0 28px 72px rgba(0,35,83,.18)' }}>
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                    title="Client Testimonial Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
                  />
                </div>
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 960px) {
              .about-video-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
            @media (max-width: 768px) {
              .about-video-grid { padding: 0 !important; }
            }
          `}</style>
        </section>

        {/* ══ 07. MEET THE FOUNDER ═════════════════════════════════════════ */}
        <section style={{ padding: '96px 0 112px', background: 'linear-gradient(160deg, #EEF2FF 0%, #F7F8FA 55%, #FFFBF0 100%)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-8%', right: '-6%', width: 520, height: 520, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 440, height: 440, background: 'radial-gradient(circle,rgba(255,176,0,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

            <div className="about-founder-grid" style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: 72, alignItems: 'center' }}>

              {/* ── Photo ── */}
              <div style={{ position: 'relative' }}>
                {/* Shadow rectangle behind */}
                <div style={{ position: 'absolute', top: 24, left: 24, width: '88%', height: '88%', background: 'linear-gradient(135deg, rgba(30,77,195,.10) 0%, rgba(255,176,0,.09) 100%)', borderRadius: 22, zIndex: 0 }} />

                {/* Founder photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=80"
                  alt="Harish Pandey — Founder, ISureMedia"
                  style={{ position: 'relative', zIndex: 1, width: '100%', height: 480, borderRadius: 20, objectFit: 'cover', objectPosition: 'center top', display: 'block', boxShadow: '0 24px 64px rgba(0,35,83,.18)' }}
                />

                {/* ISureMedia chip — top left */}
                <div style={{ position: 'absolute', top: -14, left: 28, zIndex: 2, background: 'var(--color-primary)', borderRadius: 8, padding: '8px 16px', boxShadow: '0 4px 18px rgba(30,77,195,.38)' }}>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: '.02em' }}>ISureMedia</span>
                </div>

                {/* Founder badge — bottom right */}
                <div style={{ position: 'absolute', bottom: -20, right: -20, zIndex: 2, background: 'var(--ism-amber)', borderRadius: 14, padding: '16px 22px', boxShadow: '0 8px 28px rgba(255,176,0,.45)', textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.3 }}>Founder<br />ISureMedia</div>
                </div>
              </div>

              {/* ── Bio ── */}
              <div style={{ paddingTop: 4 }}>

                <div style={{ fontFamily: J, fontSize: 'clamp(28px,3.2vw,48px)', fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1.08, letterSpacing: '-0.6px', marginBottom: 8 }}>Harish Pandey</div>
                <div style={{ fontFamily: I, fontSize: 15, color: 'var(--color-primary)', fontWeight: 600, marginBottom: 26 }}>Founder, ISureMedia</div>

                {/* Credential pills */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
                  {[
                    { icon: 'fa-solid fa-calendar-check', label: '10+ Years Experience' },
                    { icon: 'fa-solid fa-globe',          label: '400+ Global Clients' },
                    { icon: 'fa-solid fa-building',       label: 'Fully In-House' },
                  ].map((tag, i) => (
                    <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#fff', border: '1px solid var(--color-border)', borderRadius: 100, padding: '7px 15px', boxShadow: '0 1px 4px rgba(0,0,0,.05)' }}>
                      <i className={tag.icon} style={{ color: 'var(--color-primary)', fontSize: 11 }} />
                      <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-navy)' }}>{tag.label}</span>
                    </div>
                  ))}
                </div>

                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: '0 0 32px' }}>
                  Harish built ISureMedia around one conviction: that a business owner should always know what their marketing is producing and who is accountable for it. He designed the agency as a fully in-house operation from the start, with US-facing strategy and India-based execution, because he believed that combination could deliver serious results at a cost that works for growing businesses. Every part of how ISM operates reflects what he learned working across SEO, paid advertising, automation, and web development about what actually moves a business forward.
                </p>

                {/* Quote card — dark navy for contrast */}
                <div style={{ background: 'var(--color-navy)', borderRadius: 18, padding: '30px 32px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: -24, right: -24, width: 110, height: 110, background: 'rgba(255,255,255,.04)', borderRadius: '50%', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', bottom: -32, left: -16, width: 140, height: 140, background: 'rgba(255,176,0,.05)', borderRadius: '50%', pointerEvents: 'none' }} />
                  <i className="fa-solid fa-quote-left" style={{ color: 'var(--ism-amber)', fontSize: 20, marginBottom: 14, display: 'block' }} />
                  <p style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.65, margin: '0 0 14px', fontStyle: 'italic' }}>
                    &ldquo;[One plain sentence from Harish in his own words — pending.]&rdquo;
                  </p>
                  <div style={{ fontFamily: I, fontSize: 12, color: 'rgba(255,255,255,.42)', letterSpacing: '.03em' }}>Harish Pandey, Founder</div>
                </div>

              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 960px) {
              .about-founder-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
            }
          `}</style>
        </section>

        {/* ══ 09. ENDING CTA ═══════════════════════════════════════════════ */}
        <section className="about-cta-section" style={{ padding: '80px 0 96px', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

            {/* Blue card */}
            <div style={{ background: 'linear-gradient(130deg, #1840A0 0%, #1E4DC3 40%, #2F5FE8 75%, #3B6CF5 100%)', borderRadius: 24, padding: '64px 72px', position: 'relative', overflow: 'hidden' }}>

              {/* Decorative glows */}
              <div style={{ position: 'absolute', top: '-30%', right: '-8%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-40%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,35,83,.30) 0%,transparent 65%)', pointerEvents: 'none' }} />

              <div className="about-cta-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 72, alignItems: 'center', position: 'relative', zIndex: 1 }}>

                {/* ── LEFT ── */}
                <div>
                  {/* Eyebrow */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
                    <div style={{ width: 28, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                    <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--ism-amber)', letterSpacing: '.12em', textTransform: 'uppercase' }}>Your Growth Starts Here</span>
                  </div>

                  {/* Heading */}
                  <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(26px,3vw,46px)', color: '#fff', lineHeight: 1.12, letterSpacing: '-0.5px', marginBottom: 22 }}>
                    Ready to rank higher<br />
                    and bring in{' '}
                    <span style={{ color: 'var(--ism-amber)' }}>more<br />customers?</span>
                  </h2>

                  {/* Body */}
                  <p style={{ fontFamily: I, fontSize: 16, color: 'rgba(255,255,255,.80)', lineHeight: 1.80, marginBottom: 36, maxWidth: 480 }}>
                    Whether you are a local business, a growing brand, or a marketing agency, the question is the same. Are your best customers finding you online? If not, that is exactly what we fix. Talk to us today and we will show you where the opportunity is.
                  </p>

                  {/* Buttons */}
                  <div className="about-cta-btns" style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                    <a href="/contact"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 24px rgba(255,176,0,.40)', transition: 'all .18s', whiteSpace: 'nowrap' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
                    >
                      Get My Free SEO Audit
                    </a>
                    <a href="/contact"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 700, color: '#fff', background: 'transparent', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', border: '2px solid rgba(255,255,255,.55)', transition: 'all .18s', whiteSpace: 'nowrap' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,.08)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.55)'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      Talk to Our Team
                    </a>
                  </div>
                </div>

                {/* ── RIGHT — Image only ── */}
                <div style={{ borderRadius: 18, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,.28)', height: '100%', minHeight: 380 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.prod.website-files.com/66d9c104656f7f65acbcf21e/66ed8b5d07fad07c035adabf_woman%20in%20a%20conference%20room.avif"
                    alt="Client"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                </div>

              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .about-cta-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
            @media (max-width: 768px) {
              .about-cta-section > div { padding: 0 20px !important; }
              .about-cta-section [style*="padding: 64px"] { padding: 36px 24px !important; }
              .about-cta-btns { flex-direction: column !important; align-items: stretch !important; }
              .about-cta-btns a { justify-content: center !important; }
              .about-cta-inner > div:last-child { display: none !important; }
            }
          `}</style>
        </section>

        {/* ── Global responsive overrides ── */}
        <style>{`

          /* ── Tablet (≤1024px) ── */
          @media (max-width: 1024px) {
            .about-hero-grid       { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
            .about-story-grid      { grid-template-columns: 1fr 1fr !important; gap: 48px !important; }
            .about-story-grid > div:first-child { position: relative !important; top: 0 !important; padding-bottom: 56px !important; }
            .about-vm-grid         { grid-template-columns: 1fr 1fr !important; }
            .about-values-grid     { grid-template-columns: repeat(2,1fr) !important; }
            .about-built-grid      { grid-template-columns: 1fr 1fr !important; }
            .about-video-grid      { grid-template-columns: 1fr 320px !important; gap: 36px !important; }
            .about-founder-grid    { grid-template-columns: 320px 1fr !important; gap: 48px !important; }
            .about-cta-inner       { grid-template-columns: 1fr 320px !important; gap: 40px !important; }
          }

          /* ── Mobile (≤768px) ── */
          @media (max-width: 768px) {
            /* padding */
            section > div[style*="max-width: 1280px"] { padding: 0 20px !important; }

            /* hero */
            .about-hero-section    { padding: 32px 0 !important; }
            .about-hero-grid       { grid-template-columns: 1fr !important; min-height: unset !important; gap: 32px !important; }
            .about-hero-grid > div:last-child { display: none !important; }
            .about-hero-h1         { font-size: clamp(22px,7vw,36px) !important; }

            /* stats */
            .about-stats-grid      { grid-template-columns: repeat(2,1fr) !important; }
            .about-stats-grid > div:nth-child(2) { border-right: none !important; }
            .about-stats-grid > div:nth-child(3) { border-right: 1px solid var(--color-border) !important; }
            .about-stats-grid > div { padding: 36px 16px !important; }

            /* story */
            .about-story-grid      { grid-template-columns: 1fr !important; gap: 40px !important; }
            .about-story-grid > div:first-child { position: relative !important; top: 0 !important; padding-bottom: 48px !important; }

            /* vision/mission */
            .about-vm-grid         { grid-template-columns: 1fr !important; }
            .about-values-grid     { grid-template-columns: 1fr !important; }

            /* how built */
            .about-built-grid      { grid-template-columns: 1fr !important; }

            /* video */
            .about-video-grid      { grid-template-columns: 1fr !important; gap: 32px !important; }

            /* founder */
            .about-founder-grid    { grid-template-columns: 1fr !important; gap: 48px !important; }

            /* section padding reduction */
            section[style*="padding: 96px"] { padding: 60px 0 72px !important; }
            section[style*="padding: 100px"] { padding: 60px 0 72px !important; }
          }

          /* ── Small mobile (≤480px) ── */
          @media (max-width: 480px) {
            .about-stats-grid      { grid-template-columns: repeat(2,1fr) !important; }
            .about-stats-grid > div { padding: 28px 12px !important; }
            section[style*="padding: 96px"] { padding: 48px 0 56px !important; }
            section[style*="padding: 100px"] { padding: 48px 0 56px !important; }
          }
        `}</style>

      </main>
      <Footer />
    </>
  );
}
