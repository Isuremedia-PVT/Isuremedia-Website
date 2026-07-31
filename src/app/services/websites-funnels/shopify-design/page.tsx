'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BENEFITS = [
  {
    icon: 'fa-solid fa-store',
    title: 'Conversion-Optimised Layout',
    desc: 'Every design decision — layout, hierarchy, CTAs — is made with conversion in mind. We build stores that guide visitors naturally toward purchase.',
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Product Discovery UX',
    desc: 'Smart filtering, collections, and search architecture that help shoppers find what they want fast — reducing bounce and increasing basket size.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Fast Checkout Flow',
    desc: 'Frictionless checkout with minimal steps, trust signals, and mobile-optimised UX that reduces cart abandonment and boosts completed orders.',
  },
];

const INCLUDED = [
  'Custom Shopify theme design',
  'Product page optimisation',
  'Mobile-first responsive design',
  'App integration & configuration',
  'Speed optimisation',
  'SEO structure & meta setup',
  'Analytics & pixel setup',
  '30-day post-launch support',
];

const STEPS = [
  { num: '01', title: 'Discovery', desc: 'Brand audit, competitor research, and technical scoping before any design begins.' },
  { num: '02', title: 'Design', desc: 'Figma wireframes and visual designs reviewed and approved with your team.' },
  { num: '03', title: 'Build', desc: 'Custom Shopify theme development with all apps, integrations, and product data.' },
  { num: '04', title: 'Test & Launch', desc: 'Cross-device QA, checkout testing, pixel verification, and a smooth go-live.' },
];

const RELATED = [
  { icon: 'fa-brands fa-wordpress', title: 'WordPress Design', desc: 'Custom WordPress websites built for performance, SEO, and lead generation.', href: '/services/websites-funnels/wordpress-design' },
  { icon: 'fa-solid fa-rectangle-list', title: 'Landing Pages', desc: 'Conversion-optimised landing pages for ads, email campaigns, and product launches.', href: '/services/websites-funnels/landing-pages' },
  { icon: 'fa-solid fa-chart-line', title: 'CRO', desc: 'Data-led conversion optimisation that turns more of your existing traffic into customers.', href: '/services/websites-funnels/cro' },
];

export default function ShopifyDesignPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── BREADCRUMB ── */}
        <div style={{ background: '#fff', borderBottom: '1px solid var(--color-border)', padding: '14px 0' }}>
          <div className="ism-container">
            <nav style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Websites & Funnels', href: '/services/websites-funnels' },
                { label: 'Shopify Design', href: null },
              ].map((crumb, i, arr) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {crumb.href ? (
                    <a href={crumb.href} style={{ fontFamily: I, fontSize: 13, color: 'var(--color-primary)', textDecoration: 'none' }}>{crumb.label}</a>
                  ) : (
                    <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)' }}>{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <i className="fa-solid fa-chevron-right" style={{ fontSize: 9, color: 'var(--color-text-muted)' }} />}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* ── HERO ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', textAlign: 'center', position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Shopify Design & Development</span>
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(32px,4.5vw,62px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, margin: '0 auto 24px', maxWidth: 860 }}>
              Shopify Stores That Sell More From Day One
            </h1>
            <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 620, margin: '0 auto 44px' }}>
              Custom Shopify design and development — built for conversion, optimised for growth, ready to scale.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Build My Shopify Store <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
              <a href="/services/websites-funnels" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)'; }}>
                Back to Web Services
              </a>
            </div>
          </div>
        </section>

        {/* ── WHAT IS IT ── */}
        <section style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Shopify E-Commerce Builds</span>
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, marginBottom: 20 }}>
                E-Commerce Done Right — Custom, Fast, and Built to Convert
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 16 }}>
                Shopify is the world&apos;s leading e-commerce platform for a reason — it is reliable, scalable, and packed with powerful features. But most Shopify stores underperform because they rely on stock themes and generic layouts that do not reflect the brand or guide visitors effectively.
              </p>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                We build custom Shopify themes designed around your products, your customers, and your goals. Every element — from homepage hero to checkout — is crafted to reduce friction and increase revenue per visitor.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Custom theme built to your brand standards', 'Product and collection page optimisation', 'Checkout UX designed to reduce abandonment', 'Post-launch support and performance monitoring'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', fontSize: 10 }} />
                    </div>
                    <span style={{ fontFamily: I, fontSize: 15, color: 'var(--color-navy)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80" alt="Shopify store design" style={{ width: '100%', borderRadius: 20, boxShadow: '0 24px 72px rgba(30,77,195,.13)', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* ── KEY BENEFITS ── */}
        <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Key Benefits</span>
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>More Revenue From Every Visitor</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>Conversion-first design, seamless product discovery, and a checkout that closes — built to maximise your store&apos;s commercial performance.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
              {BENEFITS.map((b, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--color-border)', padding: '40px 32px', transition: 'all .22s', cursor: 'default' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.12)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <i className={b.icon} style={{ fontSize: 22, color: 'var(--color-primary)' }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 19, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 12 }}>{b.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section style={{ padding: '100px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>What&apos;s Included</span>
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>Everything in Your Shopify Build</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>From custom design to post-launch support — a complete e-commerce build with nothing left out.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 860, margin: '0 auto' }}>
              {INCLUDED.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--color-bg-soft)', borderRadius: 10, padding: '16px 20px', border: '1px solid var(--color-border)' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', fontSize: 10 }} />
                  </div>
                  <span style={{ fontFamily: I, fontSize: 15, color: 'var(--color-navy)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Our Process</span>
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>Discovery to Go-Live in Four Phases</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>A structured, transparent process that delivers your store on time and built to perform.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
              {STEPS.map((s, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--color-border)', padding: '36px 28px', textAlign: 'center', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.12)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 6px 20px rgba(255,176,0,.30)' }}>
                    <span style={{ fontFamily: J, fontSize: 16, fontWeight: 800, color: 'var(--color-navy)' }}>{s.num}</span>
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 18, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED SERVICES ── */}
        <section style={{ padding: '100px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Related Services</span>
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px' }}>Grow Your Store Beyond the Build</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {RELATED.map((r, i) => (
                <a key={i} href={r.href} style={{ display: 'block', background: 'var(--color-bg-soft)', borderRadius: 16, border: '1px solid var(--color-border)', padding: '36px 32px', textDecoration: 'none', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.12)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <i className={r.icon} style={{ fontSize: 20, color: 'var(--color-primary)' }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 18, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 10 }}>{r.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 18 }}>{r.desc}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.04em', textTransform: 'uppercase' }}>
                    Learn More <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CTASection image="/result_footer/sales-funnel-illustration.webp" />
      </main>
      <Footer />
    </>
  );
}
