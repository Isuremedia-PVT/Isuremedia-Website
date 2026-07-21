'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const STATS = [
  { num: '[X]+',  label: 'Years of Expertise' },
  { num: '400+',  label: 'Clients Worldwide' },
  { num: '$50M+', label: 'Measurable Growth Tracked' },
  { num: '40+',   label: 'In-House Specialists' },
];

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

const BADGES = [
  'Google Partner',
  'Meta Business Partner',
  'GoHighLevel Certified',
  'Upwork Top Rated',
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════════════ */}
        <section className="about-hero-section" style={{ background: '#F0F2F8', padding: '40px 0 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-10%', right: '-6%', width: 700, height: 700, background: 'radial-gradient(circle,rgba(30,77,195,.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
            <div className="about-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', minHeight: 400 }}>

              {/* LEFT */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.5vw,54px)', color: 'var(--color-navy)', lineHeight: 1.10, letterSpacing: '-0.6px', marginBottom: 24 }}>
                  We Cover Every Corner<br />
                  of Your <span style={{ color: 'var(--color-primary)' }}>Digital Growth.</span>
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
              .about-hero-grid { grid-template-columns: 1fr !important; min-height: unset !important; gap: 48px !important; }
            }
          `}</style>
        </section>

        {/* ══ 02. STATS STRIP ══════════════════════════════════════════════ */}
        <section style={{ background: '#fff', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <div className="about-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ padding: '52px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid var(--color-border)' : 'none' }}>
                  <div style={{ fontFamily: J, fontSize: 'clamp(36px,4vw,56px)', fontWeight: 900, lineHeight: 1.05, color: 'var(--color-primary)', marginBottom: 8, letterSpacing: '-1px' }}>{s.num}</div>
                  <div style={{ width: 28, height: 3, background: 'var(--ism-amber)', borderRadius: 2, margin: '0 auto 10px' }} />
                  <div style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 640px) {
              .about-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
              .about-stats-grid > div:nth-child(2) { border-right: none !important; }
              .about-stats-grid > div:nth-child(3) { border-right: 1px solid var(--color-border) !important; }
            }
          `}</style>
        </section>

        {/* ══ 03. OUR STORY ════════════════════════════════════════════════ */}
        <section style={{ padding: '96px 0 112px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: '10%', left: '-4%', width: 480, height: 480, background: 'radial-gradient(circle,rgba(30,77,195,.04) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

            <div className="about-story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

              {/* LEFT — image stack */}
              <div style={{ position: 'relative', paddingBottom: 56 }}>

                {/* Main image */}
                <div style={{ borderRadius: 22, overflow: 'hidden', boxShadow: '0 28px 72px rgba(0,35,83,.16)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                    alt="ISureMedia team at work"
                    style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Overlapping bottom image */}
                <div style={{ position: 'absolute', bottom: 0, right: -20, width: '56%', borderRadius: 16, overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 18px 44px rgba(0,35,83,.18)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                    alt="ISureMedia strategy session"
                    style={{ width: '100%', height: 210, objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Floating stat chip */}
                <div style={{ position: 'absolute', top: 28, left: -24, background: '#fff', borderRadius: 16, padding: '18px 24px', boxShadow: '0 8px 36px rgba(0,35,83,.14)', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(30,77,195,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-chart-line" style={{ color: 'var(--color-primary)', fontSize: 20 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 24, fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>$50M+</div>
                    <div style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>Growth Tracked</div>
                  </div>
                </div>

                {/* Years badge */}
                <div style={{ position: 'absolute', bottom: 72, left: -24, background: 'var(--ism-amber)', borderRadius: 12, padding: '12px 18px', boxShadow: '0 6px 20px rgba(255,176,0,.40)', textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 20, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>400+</div>
                  <div style={{ fontFamily: I, fontSize: 11, color: 'var(--color-navy)', marginTop: 4, fontWeight: 600 }}>Clients</div>
                </div>

              </div>

              {/* RIGHT — text */}
              <div style={{ paddingTop: 8 }}>

                <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(24px,2.6vw,40px)', color: 'var(--color-navy)', lineHeight: 1.18, letterSpacing: '-0.5px', marginBottom: 32 }}>
                  We Built ISM Because the Agency Model Was Broken.
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 36 }}>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    You started your business because you are good at what you do. At some point you realised that being good at what you do is not enough. You also need the right people to find you, trust you, and choose you. That is where digital marketing comes in.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Some businesses try to figure it out themselves. Some hire an agency and hope for the best. Whatever the path, most of them hit the same wall. The results are not matching the effort. The strategy is unclear or missing completely. There is no way to tell what is working and what is not.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    That is the moment businesses and agencies find ISM. We come in wherever you are. We look at your goals, your market, and what needs to happen to move your business forward. Then we build a clear strategy and bring in the right experts to execute it.
                  </p>
                </div>

                {/* Pull quote */}
                <div style={{ background: 'var(--color-primary)', borderRadius: 18, padding: '32px 34px', position: 'relative', overflow: 'hidden', marginBottom: 32 }}>
                  <div style={{ position: 'absolute', top: -24, right: -24, width: 120, height: 120, background: 'rgba(255,255,255,.06)', borderRadius: '50%', pointerEvents: 'none' }} />
                  <i className="fa-solid fa-quote-left" style={{ color: 'var(--ism-amber)', fontSize: 24, marginBottom: 14, display: 'block' }} />
                  <p style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.62, margin: '0 0 16px' }}>
                    SEO, paid ads, content, web, design, automation — every area covered by someone who knows it well. All connected to one plan. All pointed at your growth.
                  </p>
                  <div style={{ fontFamily: I, fontSize: 12, color: 'rgba(255,255,255,.50)', letterSpacing: '.04em', textTransform: 'uppercase' }}>ISureMedia</div>
                </div>

                {/* 3 trust pills */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {['In-House Team Only', 'No Outsourcing', 'Month to Month'].map((tag, i) => (
                    <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(30,77,195,.06)', border: '1px solid rgba(30,77,195,.14)', borderRadius: 100, padding: '7px 16px' }}>
                      <i className="fa-solid fa-check" style={{ fontSize: 10, color: 'var(--color-primary)' }} />
                      <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)' }}>{tag}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 960px) {
              .about-story-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>
        </section>

        {/* ══ 04. WHAT WE BELIEVE ══════════════════════════════════════════ */}
        <section style={{ padding: '96px 0 112px', background: '#F0F2F8', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(24px,2.8vw,42px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, maxWidth: 700, margin: '0 auto' }}>
                Vision, Mission, and the Six Principles We Hold Ourselves To.
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
        <section style={{ padding: '96px 0 112px', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(24px,2.8vw,42px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, maxWidth: 680, margin: '0 auto 16px' }}>
                Four Things That Make ISureMedia Different.
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
                These are not marketing lines. They are the structural decisions that shape how every piece of work gets done.
              </p>
            </div>

            <div className="about-built-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {HOW_BUILT.map((tile, i) => (
                <div key={i} style={{ background: '#F7F8FA', borderRadius: 20, padding: '44px 40px', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', bottom: -40, right: -40, width: 160, height: 160, background: 'rgba(30,77,195,.04)', borderRadius: '50%', pointerEvents: 'none' }} />
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(30,77,195,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <i className={tile.icon} style={{ color: 'var(--color-primary)', fontSize: 21 }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 'clamp(16px,1.6vw,20px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 14, lineHeight: 1.28, letterSpacing: '-0.2px' }}>{tile.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: 0 }}>{tile.body}</p>
                </div>
              ))}
            </div>

          </div>

          <style>{`
            @media (max-width: 768px) {
              .about-built-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ══ 06. VIDEO TESTIMONIAL ════════════════════════════════════════ */}
        <section style={{ padding: '96px 0 112px', background: '#F0F2F8' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(24px,2.8vw,42px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15 }}>
                Do Not Take Our Word for It.
              </h2>
            </div>

            <div className="about-video-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 60, alignItems: 'center' }}>

              {/* Video player */}
              <div style={{ borderRadius: 20, overflow: 'hidden', aspectRatio: '16/9', background: 'var(--color-navy)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 300, boxShadow: '0 24px 64px rgba(0,35,83,.20)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', boxShadow: '0 8px 32px rgba(255,176,0,.45)' }}>
                    <i className="fa-solid fa-play" style={{ fontSize: 24, color: 'var(--color-navy)', marginLeft: 4 }} />
                  </div>
                  <div style={{ fontFamily: J, fontSize: 13, color: 'rgba(255,255,255,.45)', fontWeight: 600 }}>Video testimonial pending</div>
                </div>
              </div>

              {/* Pull quote */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <i className="fa-solid fa-quote-left" style={{ color: 'var(--ism-amber)', fontSize: 40 }} />
                <p style={{ fontFamily: J, fontSize: 'clamp(17px,1.8vw,22px)', fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.55, margin: 0, letterSpacing: '-0.2px' }}>
                  "[One sentence pulled verbatim from the client video — pending.]"
                </p>
                <div style={{ paddingTop: 8 }}>
                  <div style={{ fontFamily: J, fontSize: 15, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 4 }}>[Client Name]</div>
                  <div style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 12 }}>[Company Name]</div>
                  <div style={{ display: 'flex', gap: 3 }}>
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .about-video-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            }
          `}</style>
        </section>

        {/* ══ 07. MEET THE FOUNDER ═════════════════════════════════════════ */}
        <section style={{ padding: '96px 0 112px', background: '#fff', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '15%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(30,77,195,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

            <div className="about-founder-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 80, alignItems: 'center' }}>

              {/* Photo */}
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 20, left: 20, width: '90%', height: '90%', background: 'rgba(30,77,195,.07)', borderRadius: 20, zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1, width: '100%', height: 460, borderRadius: 18, background: '#E8EDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 56px rgba(0,35,83,.14)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <i className="fa-solid fa-user" style={{ fontSize: 64, color: 'rgba(30,77,195,.20)' }} />
                    <div style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', marginTop: 12 }}>Photo pending</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: -16, right: -16, zIndex: 2, background: 'var(--ism-amber)', borderRadius: 12, padding: '14px 20px', boxShadow: '0 6px 20px rgba(255,176,0,.40)' }}>
                  <div style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.3, textAlign: 'center' }}>Founder<br />ISureMedia</div>
                </div>
              </div>

              {/* Bio */}
              <div>
                <div style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1.10, letterSpacing: '-0.5px', marginBottom: 6 }}>Harish Pandey</div>
                <div style={{ fontFamily: I, fontSize: 15, color: 'var(--color-primary)', fontWeight: 600, marginBottom: 32 }}>Founder, ISureMedia</div>

                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: '0 0 32px' }}>
                  Harish built ISureMedia around one conviction: that a business owner should always know what their marketing is producing and who is accountable for it. He designed the agency as a fully in-house operation from the start, with US-facing strategy and India-based execution, because he believed that combination could deliver serious results at a cost that works for growing businesses. Every part of how ISM operates reflects what he learned working across SEO, paid advertising, automation, and web development about what actually moves a business forward.
                </p>

                <div style={{ background: '#F7F8FA', borderRadius: 14, padding: '24px 28px', borderLeft: '4px solid var(--ism-amber)' }}>
                  <i className="fa-solid fa-quote-left" style={{ color: 'var(--ism-amber)', fontSize: 18, marginBottom: 10, display: 'block' }} />
                  <p style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.60, margin: '0 0 8px', fontStyle: 'italic' }}>
                    "[One plain sentence from Harish in his own words — pending.]"
                  </p>
                  <div style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)' }}>Harish Pandey, Founder</div>
                </div>
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .about-founder-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
          `}</style>
        </section>

        {/* ══ 08. CERTIFIED. RATED. TRUSTED. ═══════════════════════════════ */}
        <section style={{ padding: '96px 0 112px', background: '#F0F2F8' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(24px,2.8vw,40px)', color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.18, maxWidth: 680, margin: '0 auto' }}>
                Recognised by the platforms and communities that matter in digital marketing.
              </h2>
            </div>

            <div className="about-trust-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>

              {/* Left — image mosaic */}
              <div style={{ position: 'relative', height: 440 }}>
                <div style={{ position: 'absolute', top: 24, right: 0, width: 240, height: 300, borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 48px rgba(0,0,0,.12)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', top: 56, left: 0, width: 180, height: 280, borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 40px rgba(0,0,0,.10)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', top: 0, left: 48, width: 114, height: 108, borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,.10)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 128, width: 162, height: 118, borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,.10)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ position: 'absolute', bottom: 16, right: 0, width: 112, height: 102, borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 22px rgba(0,0,0,.10)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>

              {/* Right — badges + review line */}
              <div>
                <div className="about-badges-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
                  {BADGES.map((b, i) => (
                    <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '26px 20px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 84 }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.4 }}>{b}</div>
                        <div style={{ fontFamily: I, fontSize: 11, color: 'rgba(30,77,195,.45)', marginTop: 5 }}>Badge pending</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#fff', borderRadius: 14, padding: '22px 28px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: 18 }}>
                  <div style={{ display: 'flex', gap: 3, flexShrink: 0 }}>
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 16 }} />
                    ))}
                  </div>
                  <div style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                    Rated <strong style={{ color: 'var(--color-navy)' }}>[X.X]</strong> by <strong style={{ color: 'var(--color-navy)' }}>[X]+</strong> clients across Clutch, Google, and Upwork.
                  </div>
                </div>
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .about-trust-grid { grid-template-columns: 1fr !important; }
              .about-trust-grid > div:first-child { display: none !important; }
            }
            @media (max-width: 480px) {
              .about-badges-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ══ 09. ENDING CTA ═══════════════════════════════════════════════ */}
        <section style={{ padding: '80px 0 96px', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
            <div className="about-cta-grid" style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 80, alignItems: 'center' }}>

              {/* Left — subtle visual */}
              <div style={{ width: '100%', aspectRatio: '4/3', background: 'linear-gradient(135deg,rgba(30,77,195,.07) 0%,rgba(255,176,0,.05) 100%)', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-border)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 60, fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1, opacity: 0.12, marginBottom: 24 }}>ISM</div>
                  <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                    {['fa-solid fa-magnifying-glass', 'fa-solid fa-bullhorn', 'fa-solid fa-globe', 'fa-solid fa-bolt'].map((ic, i) => (
                      <div key={i} style={{ width: 44, height: 44, borderRadius: 12, background: '#fff', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,35,83,.08)' }}>
                        <i className={ic} style={{ fontSize: 16, color: 'var(--color-primary)' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — headline + button */}
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.20, letterSpacing: '-0.4px', marginBottom: 18 }}>
                  Ready to find out exactly what is holding your digital growth back?
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.80, marginBottom: 36, maxWidth: 500 }}>
                  Tell us about your business, your goals and your challenges. We have built digital growth for hundreds of businesses and we know what it takes. We are ready to build it for you.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 9, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 24px rgba(255,176,0,.38)', transition: 'all .18s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,176,0,.52)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 24px rgba(255,176,0,.38)'; }}
                >
                  Talk to Our Team <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
                </a>
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .about-cta-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
              .about-cta-grid > div:first-child { display: none !important; }
            }
          `}</style>
        </section>

      </main>
      <Footer />
    </>
  );
}
