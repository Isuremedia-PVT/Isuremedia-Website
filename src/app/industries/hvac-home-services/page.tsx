'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const STATS = [
  { num: '3×',  label: 'Avg increase in inbound calls'      },
  { num: '60%', label: 'Lower cost-per-lead'                },
  { num: '90',  label: 'Days to first-page local rankings'  },
];

const WHAT_WE_DO = [
  {
    icon: 'fa-solid fa-map-location-dot',
    title: 'Local SEO for Service Areas',
    desc: 'We optimise your Google Business Profile, build local citations, and target service-area keywords so you dominate the map pack in every zip code you serve.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Google Ads for Emergency Calls',
    desc: 'Capture high-intent searches like "emergency AC repair near me" with tightly targeted search campaigns that fire at peak seasons and drive immediate calls.',
  },
  {
    icon: 'fa-solid fa-bullhorn',
    title: 'Facebook Lead Ads for Seasonal Campaigns',
    desc: 'Run targeted Facebook and Instagram lead-generation campaigns during seasonal peaks — tune-up season, winter heating prep, summer AC install — to fill your calendar.',
  },
  {
    icon: 'fa-solid fa-star',
    title: 'Review Management',
    desc: 'Automate review requests after every job, respond to feedback, and build the 5-star reputation that makes prospects call you instead of a competitor.',
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'CRM & Automation for Follow-Up',
    desc: 'Connect your leads to a GoHighLevel CRM with automated follow-up sequences, appointment reminders, and re-engagement campaigns that convert more estimates into booked jobs.',
  },
];

const SERVICES_USED = [
  { label: 'Local SEO',         href: '/services/seo/local-seo'                   },
  { label: 'Google Ads',        href: '/services/ppc/google-ads'                  },
  { label: 'Facebook Ads',      href: '/services/ppc/meta-ads'                    },
  { label: 'CRM Setup',         href: '/services/automation/crm-setup'            },
  { label: 'Review Management', href: '/services/marketing-automation'            },
  { label: 'Landing Pages',     href: '/services/websites-funnels/landing-pages'  },
];

const PROCESS = [
  { n: '01', title: 'Audit',    desc: 'We audit your current online presence — Google rankings, ad accounts, website speed, and local citations — to find every gap and opportunity.' },
  { n: '02', title: 'Strategy', desc: 'We build a 90-day growth roadmap covering SEO targets, ad budgets, landing page priorities, and automation flows.' },
  { n: '03', title: 'Launch',   desc: 'Campaigns go live, pages are optimised, and your CRM automation starts capturing and following up every lead automatically.' },
  { n: '04', title: 'Scale',    desc: 'We monitor performance weekly, cut wasteful spend, and double down on what is driving the lowest cost-per-booking.' },
];

const RELATED = [
  { href: '/services/seo/local-seo',         icon: 'fa-solid fa-map-location-dot', title: 'Local SEO',    desc: 'Dominate the local map pack and service-area search results in every city you work in.' },
  { href: '/services/ppc/google-ads',         icon: 'fa-solid fa-magnifying-glass',  title: 'Google Ads',   desc: 'High-intent search campaigns that put your business in front of customers ready to book.' },
  { href: '/services/automation/crm-setup',   icon: 'fa-solid fa-robot',             title: 'CRM Setup',    desc: 'GoHighLevel CRM and automation flows that follow up every lead until they book.' },
];

export default function HVACPage() {
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
            <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-primary)', fontWeight: 500 }}>HVAC &amp; Home Services</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '104px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>HVAC &amp; Home Services</span>
            </div>
            <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(28px,3.8vw,56px)', color: 'var(--color-navy)', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 22, maxWidth: 860, margin: '0 auto 22px' }}>
              More Calls. More Bookings. More Revenue<br />for Home Service Businesses.
            </h1>
            <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,18px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 640, margin: '0 auto 40px' }}>
              We build and manage the exact digital marketing systems that fill your calendar — local SEO that owns the map pack, Google Ads that capture emergency intent, and automation that follows up every lead until they book.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Get Free Growth Plan <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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
            <div className="hvac-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--color-border)', borderRadius: 16, overflow: 'hidden' }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: '44px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 'clamp(40px,4.5vw,64px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 6, letterSpacing: '-1px' }}>{s.num}</div>
                  <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, margin: '0 auto 10px' }} />
                  <div style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:640px){.hvac-stats{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* ── What We Do ── */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>What We Do</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 16 }}>The Full Marketing Stack for Home Service Businesses</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 580, margin: '0 auto' }}>Every channel, every tactic — purpose-built for HVAC, plumbing, electrical, cleaning, and other local service businesses.</p>
            </div>
            <div className="hvac-what-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
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
          <style>{`@media(max-width:900px){.hvac-what-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:580px){.hvac-what-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* ── Services We Use ── */}
        <section style={{ padding: '72px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>Services We Use</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(20px,2vw,32px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>The Channels Behind Your Results</h2>
            </div>
            <div className="hvac-svc-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
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
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>Our Process</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>How We Grow Your Home Service Business</h2>
            </div>
            <div className="hvac-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
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
          <style>{`@media(max-width:900px){.hvac-process-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:520px){.hvac-process-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* ── Related Services ── */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,36px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Related Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', marginTop: 12 }}>The individual services powering your HVAC growth strategy.</p>
            </div>
            <div className="hvac-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
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
          <style>{`@media(max-width:860px){.hvac-related-grid{grid-template-columns:1fr!important;}}@media(max-width:1100px) and (min-width:861px){.hvac-related-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
