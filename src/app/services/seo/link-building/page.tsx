'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BENEFITS = [
  {
    icon: 'fa-solid fa-newspaper',
    title: 'Real Editorial Placements',
    desc: 'Every link we build is a genuine editorial placement — earned through outreach and content, not purchased from link farms or PBNs.',
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Niche-Relevant Links',
    desc: 'Links from sites in your industry carry far more authority than random placements. We prospect exclusively within your niche for maximum relevance.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Transparent Reporting',
    desc: 'You receive a monthly link report showing every placement secured — the referring domain, DA, anchor text, and the live URL of the link.',
  },
];

const INCLUDED = [
  'Link prospecting & qualification',
  'Personalised outreach campaigns',
  'Guest posting on niche-relevant sites',
  'Digital PR campaigns',
  'Broken link building',
  'HARO media responses',
  'Monthly link acquisition report',
  'Anchor text strategy & diversification',
];

const PROCESS = [
  { n: '01', title: 'Audit', desc: 'We analyse your current backlink profile to understand your baseline and identify any toxic links to disavow.' },
  { n: '02', title: 'Prospect', desc: 'We build a qualified list of niche-relevant, high-authority sites that are genuine link targets for your business.' },
  { n: '03', title: 'Outreach', desc: 'Our team conducts personalised outreach and content creation to earn placements on your target sites.' },
  { n: '04', title: 'Report', desc: 'Every link secured is documented in a monthly report with metrics, live URLs, and impact tracking.' },
];

const RELATED = [
  { href: '/services/seo/technical-seo', icon: 'fa-solid fa-screwdriver-wrench', title: 'Technical SEO', desc: 'Ensure your site is technically sound so new link authority is fully passed and utilised.' },
  { href: '/services/seo/on-page-seo', icon: 'fa-solid fa-file-lines', title: 'On-Page SEO', desc: 'Optimise every page to maximise the ranking benefit from incoming link authority.' },
  { href: '/services/seo/seo-audits', icon: 'fa-solid fa-magnifying-glass-chart', title: 'SEO Audits', desc: 'A full-stack audit covering technical health, content, backlinks, and competitor gaps.' },
];

export default function LinkBuildingPage() {
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
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Link Building</span>
            </div>
            <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(28px,3.8vw,56px)', color: 'var(--color-navy)', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 22, maxWidth: 820, margin: '0 auto 22px' }}>
              Build Authority That Google<br />Respects and Rewards
            </h1>
            <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,18px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 640, margin: '0 auto 40px' }}>
              White-hat link building that builds real domain authority. No PBNs. No spam. Just editorial placements.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Get Link Building Plan <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
              <a href="/services/seo"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)'; }}>
                Back to SEO
              </a>
            </div>
          </div>
        </section>

        {/* ── What Is Link Building ── */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 40, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>What Is It</span>
                </div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,36px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  How Quality Backlinks Build Rankings That Last
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  Backlinks remain one of the most powerful ranking signals in Google&#39;s algorithm. When a high-authority site links to yours, it passes authority — effectively vouching for your site&#39;s credibility and expertise. The more credible the vote, the more it moves your rankings.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  We build links exclusively through white-hat methods: personalised outreach, guest content, digital PR, and broken link reclamation. Every placement is niche-relevant, every anchor is strategically chosen, and every link is fully documented in our monthly reports.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {['White-hat outreach only — no PBNs', 'Niche-relevant editorial placements', 'Domain authority & traffic-qualified targets', 'Anchor text strategy for natural profile'].map(item => (
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
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80" alt="Link building authority" style={{ position: 'relative', zIndex: 1, width: '100%', height: 440, objectFit: 'cover', borderRadius: 16, display: 'block', boxShadow: '0 24px 64px rgba(0,35,83,.15)' }} />
              </div>
            </div>
          </div>
          <style>{`@media(max-width:860px){ .split-grid{ grid-template-columns:1fr !important; gap:48px !important; } }`}</style>
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Why Our Link Building Works</h2>
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Everything Covered in Our Link Building Service</h2>
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>How We Deliver Link Building</h2>
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,36px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Related SEO Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', marginTop: 12 }}>Explore other services that work alongside Link Building.</p>
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

        <CTASection image="/result_footer/- Link Building.webp" />
      </main>
      <Footer />
    </>
  );
}
