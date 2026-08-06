'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const STATS = [
  { num: '4×',   label: 'Avg ROAS on paid media'              },
  { num: '35%',  label: 'Lift in email revenue'               },
  { num: '2×',   label: 'Organic traffic in 6 months'         },
];

const WHAT_WE_DO = [
  {
    icon: 'fa-solid fa-cart-shopping',
    title: 'Shopping Campaigns (Google & Meta)',
    desc: 'We build and manage Google Shopping and Meta catalogue campaigns that put your products in front of high-intent buyers at every stage of the funnel — from discovery to purchase.',
  },
  {
    icon: 'fa-solid fa-envelope-open-text',
    title: 'Email & SMS Flows',
    desc: 'Klaviyo and Omnisend automation flows that work around the clock — abandoned cart, welcome series, post-purchase, win-back — turning more browsers into buyers and buyers into loyal customers.',
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'SEO for Product Pages',
    desc: 'We optimise category and product pages for commercial-intent keywords, build topical authority with content, and earn links that push your store to the top of organic results.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'CRO for Higher AOV',
    desc: 'Conversion rate optimisation that increases average order value — better product copy, smarter upsells, faster checkout, and A/B tested page layouts backed by real data.',
  },
  {
    icon: 'fa-solid fa-rotate-left',
    title: 'Retargeting',
    desc: 'Bring back the 97% of visitors who leave without buying with precision retargeting on Meta, Google Display, and YouTube — using dynamic ads that show exactly what each user viewed.',
  },
];

const SERVICES_USED = [
  { label: 'Meta Ads',       href: '/services/ppc/meta-ads'                       },
  { label: 'Google Ads',     href: '/services/ppc/google-ads'                     },
  { label: 'SEO',            href: '/services/seo'                                },
  { label: 'Shopify Design', href: '/services/websites-funnels'    },
  { label: 'Email Marketing',href: '/services/content-creative'                   },
  { label: 'CRO',            href: '/services/websites-funnels'                   },
];

const PROCESS = [
  { n: '01', title: 'Audit',    desc: 'We audit your store analytics, ad accounts, email flows, and SEO health to identify exactly where revenue is leaking and where the biggest wins are.' },
  { n: '02', title: 'Launch',   desc: 'Campaigns, email automations, and on-page SEO go live with a coordinated launch plan designed to generate results from day one.' },
  { n: '03', title: 'Optimise', desc: 'We test continuously — creatives, audiences, email subject lines, product page layouts — cutting what does not convert and scaling what does.' },
  { n: '04', title: 'Scale',    desc: 'Once unit economics are proven, we scale budgets, expand to new channels, and build out the full revenue stack to compound your growth.' },
];

const RELATED = [
  { href: '/services/ppc/meta-ads',                   icon: 'fa-brands fa-meta',            title: 'Meta Ads',       desc: 'Facebook and Instagram campaigns built to drive purchases, retarget browsers, and scale ROAS.' },
  { href: '/services/seo',                             icon: 'fa-solid fa-magnifying-glass',  title: 'SEO',            desc: 'Organic growth strategies that build long-term traffic and reduce reliance on paid channels.' },
  { href: '/services/websites-funnels', icon: 'fa-solid fa-store',             title: 'Shopify Design', desc: 'Conversion-focused Shopify stores designed to increase AOV, reduce bounce, and close more sales.' },
];

export default function EcommercePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Breadcrumb ── */}
        <div style={{ background: '#fff', borderBottom: '1px solid var(--color-border)', padding: '12px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href="/" style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</a>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 9, color: 'var(--color-text-muted)' }} />
            <a href="/industries" style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', textDecoration: 'none' }}>Industries</a>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: 9, color: 'var(--color-text-muted)' }} />
            <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-primary)', fontWeight: 500 }}>E-Commerce</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '104px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>E-Commerce</span>
            </div>
            <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(28px,3.8vw,56px)', color: 'var(--color-navy)', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 22, maxWidth: 860, margin: '0 auto 22px' }}>
              Scale Your Online Store with Performance<br />Marketing That Actually Converts.
            </h1>
            <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,18px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 640, margin: '0 auto 40px' }}>
              From shopping campaigns and email automation to product-page SEO and CRO — we build the full revenue engine that turns traffic into transactions and transactions into loyal customers.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Get Started <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
              <a href="/industries"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)'; }}>
                All Industries
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
            <div className="ecom-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--color-border)', borderRadius: 16, overflow: 'hidden' }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: '44px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 'clamp(40px,4.5vw,64px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 6, letterSpacing: '-1px' }}>{s.num}</div>
                  <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, margin: '0 auto 10px' }} />
                  <div style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:640px){.ecom-stats{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* ── What We Do ── */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>What We Do</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 16 }}>Every Channel That Grows an Online Store</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 580, margin: '0 auto' }}>We cover the full e-commerce revenue stack — from first click to repeat purchase — with specialists for every channel.</p>
            </div>
            <div className="ecom-what-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {WHAT_WE_DO.map((w, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '36px 30px', border: '1px solid var(--color-border)', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 54, height: 54, borderRadius: 14, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <i className={w.icon} style={{ color: 'var(--color-primary)', fontSize: 21 }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 18, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 10 }}>{w.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.ecom-what-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:580px){.ecom-what-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* ── Services We Use ── */}
        <section style={{ padding: '72px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>Services We Use</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(20px,2vw,32px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>The Channels Behind Your Revenue Growth</h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              {SERVICES_USED.map((s, i) => (
                <a key={i} href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: 100, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-blue-50)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)'; }}>
                  <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: 10 }} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>How We Scale Your Online Store</h2>
            </div>
            <div className="ecom-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
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
          <style>{`@media(max-width:900px){.ecom-process-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:520px){.ecom-process-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* ── Related Services ── */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,36px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Related Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', marginTop: 12 }}>The individual services that power your e-commerce growth.</p>
            </div>
            <div className="ecom-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
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
          <style>{`@media(max-width:860px){.ecom-related-grid{grid-template-columns:1fr!important;}}@media(max-width:1100px) and (min-width:861px){.ecom-related-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
