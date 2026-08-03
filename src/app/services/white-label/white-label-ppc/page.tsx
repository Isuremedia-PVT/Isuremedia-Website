'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BENEFITS = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'NDA-Protected Fulfillment',
    desc: 'Our partnership is covered by a full NDA. We never reach out to your clients directly — everything is handled through your agency with complete confidentiality.',
  },
  {
    icon: 'fa-solid fa-chart-bar',
    title: 'Branded Ad Reports',
    desc: 'Performance reports go out with your logo, your colours, and your name. Clients see a polished, professional report that reinforces your agency\'s value.',
  },
  {
    icon: 'fa-solid fa-user-check',
    title: 'Managed by Certified Experts',
    desc: 'Your clients\' ad budgets are managed by Google and Meta certified specialists who optimise campaigns daily for maximum ROAS and lead quality.',
  },
];

const INCLUDED = [
  'Google Ads management',
  'Meta Ads management',
  'Campaign strategy',
  'Ad creative',
  'Landing page review',
  'Conversion tracking',
  'Negative keyword management',
  'Monthly performance reports',
];

const PROCESS = [
  { n: '01', title: 'Brief', desc: 'We take a detailed brief from your agency — client goals, target audience, budget, and any existing account history.' },
  { n: '02', title: 'Strategy', desc: 'Our certified team builds a full campaign strategy including platform selection, audience targeting, and creative direction.' },
  { n: '03', title: 'Launch', desc: 'Campaigns go live under your agency\'s ad accounts. We handle all setup, tracking, and creative delivery.' },
  { n: '04', title: 'Optimise', desc: 'We monitor and optimise campaigns daily, with white-label monthly reports delivered to you ready to share with clients.' },
];

const RELATED = [
  { href: '/services/white-label', icon: 'fa-solid fa-building', title: 'White-Label Hub', desc: 'Overview of all white-label services — SEO, PPC, content, web design, and automation under your brand.' },
  { href: '/services/white-label/white-label-seo', icon: 'fa-solid fa-magnifying-glass', title: 'White-Label SEO', desc: 'Resell full-stack SEO services under your agency brand with branded reports and scalable delivery.' },
  { href: '/services/ppc-paid-marketing', icon: 'fa-solid fa-bullseye', title: 'PPC & Paid Marketing', desc: 'Direct PPC management for your own business — Google, Meta, and LinkedIn campaigns.' },
];

export default function WhiteLabelPPCPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '104px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>White-Label PPC</span>
            </div>
            <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(28px,3.8vw,56px)', color: 'var(--color-navy)', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 22, maxWidth: 820, margin: '0 auto 22px' }}>
              Google, Meta &amp; LinkedIn Ads.<br />Managed Under Your Brand.
            </h1>
            <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,18px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 620, margin: '0 auto 40px' }}>
              White-label PPC management by certified experts — NDA-protected, fully branded, and delivered under your agency name so you keep the client relationship.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Start White-Label PPC <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
              <a href="/services/white-label"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)'; }}>
                Back to White Label
              </a>
            </div>
          </div>
        </section>

        {/* ── What Is It ── */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 40, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>What Is It</span>
                </div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,36px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  Sell PPC Without Running the Campaigns
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  White-label PPC lets your agency offer Google Ads, Meta Ads, and LinkedIn campaign management without needing an in-house paid media specialist. We run the campaigns — you present the results.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  All campaigns run inside your clients&#39; own ad accounts. We operate quietly in the background while you maintain full ownership of the client relationship and all the margin.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {['Campaigns run in client\'s own ad account', 'Certified Google & Meta specialists', 'White-label reporting in your branding', 'NDA-protected — clients never know'].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', fontSize: 10 }} />
                      </div>
                      <span style={{ fontFamily: I, fontSize: 15, color: 'var(--color-navy)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 24, right: -16, width: '86%', height: '80%', background: 'var(--ism-blue-50)', borderRadius: 20, zIndex: 0 }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80" alt="PPC campaign management dashboard" style={{ position: 'relative', zIndex: 1, width: '100%', height: 440, objectFit: 'cover', borderRadius: 16, display: 'block', boxShadow: '0 24px 64px rgba(0,35,83,.15)' }} />
              </div>
            </div>
          </div>
          <style>{`.split-grid { } @media(max-width:860px){ .split-grid{ grid-template-columns:1fr !important; gap:48px !important; } }`}</style>
        </section>

        {/* ── Key Benefits ── */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>Key Benefits</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Why Agencies Trust Our White-Label PPC</h2>
            </div>
            <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {BENEFITS.map(b => (
                <div key={b.title}
                  style={{ background: '#fff', borderRadius: 16, padding: '36px 30px', border: '1px solid var(--color-border)', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 54, height: 54, borderRadius: 14, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 21 }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 18, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 10 }}>{b.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:860px){ .benefits-grid{ grid-template-columns:1fr !important; } } @media(max-width:1100px) and (min-width:861px){ .benefits-grid{ grid-template-columns:repeat(2,1fr) !important; } }`}</style>
        </section>

        {/* ── What's Included ── */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>What&#39;s Included</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Everything Covered in Our White-Label PPC Service</h2>
            </div>
            <div className="included-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, maxWidth: 860, margin: '0 auto' }}>
              {INCLUDED.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--color-bg-soft)', borderRadius: 12, padding: '18px 22px' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: 'var(--color-navy)', fontSize: 12 }} />
                  </div>
                  <span style={{ fontFamily: I, fontSize: 15, color: 'var(--color-navy)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:640px){ .included-grid{ grid-template-columns:1fr !important; } }`}</style>
        </section>

        {/* ── Process ── */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>Our Process</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>How We Deliver White-Label PPC</h2>
            </div>
            <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
              {PROCESS.map(p => (
                <div key={p.n} style={{ background: '#fff', borderRadius: 16, padding: '36px 28px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 8px 24px rgba(30,77,195,.25)' }}>
                    <span style={{ fontFamily: J, fontSize: 15, fontWeight: 800, color: '#fff' }}>{p.n}</span>
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 17, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.72, margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){ .process-grid{ grid-template-columns:repeat(2,1fr) !important; } } @media(max-width:520px){ .process-grid{ grid-template-columns:1fr !important; } }`}</style>
        </section>

        {/* ── Related Services ── */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,36px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Related Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', marginTop: 12 }}>Explore other services that complement your white-label PPC offering.</p>
            </div>
            <div className="related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {RELATED.map(r => (
                <a key={r.href} href={r.href} style={{ display: 'block', textDecoration: 'none', background: 'var(--color-bg-soft)', borderRadius: 16, padding: '32px 28px', border: '1px solid var(--color-border)', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 16px 44px rgba(30,77,195,.12)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <i className={r.icon} style={{ color: 'var(--color-primary)', fontSize: 19 }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 17, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 8 }}>{r.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.72, margin: 0 }}>{r.desc}</p>
                </a>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:860px){ .related-grid{ grid-template-columns:1fr !important; } } @media(max-width:1100px) and (min-width:861px){ .related-grid{ grid-template-columns:repeat(2,1fr) !important; } }`}</style>
        </section>

        <CTASection image="/result_footer/white label.webp" />
      </main>
      <Footer />
    </>
  );
}
