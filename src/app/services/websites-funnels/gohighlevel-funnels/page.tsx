'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BENEFITS = [
  {
    icon: 'fa-solid fa-gears',
    title: 'Full-System Setup',
    desc: 'From sub-account configuration to CRM, pipelines, and automation — we set up the entire GHL ecosystem so it works from day one.',
  },
  {
    icon: 'fa-solid fa-tag',
    title: 'White-Label Ready',
    desc: 'Agency sub-accounts configured with your branding, custom domains, and SMTP so your clients only ever see your brand.',
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'Automation Included',
    desc: 'Email, SMS, and voicemail workflows built in — automated follow-up sequences that nurture leads without manual effort.',
  },
];

const INCLUDED = [
  'GHL sub-account setup & configuration',
  'Funnel builds (opt-in, sales, booking)',
  'CRM configuration & custom fields',
  'Pipeline setup & stage automation',
  'Email & SMS automation sequences',
  'Calendar & booking system setup',
  'Reputation management configuration',
  'Dashboard & reporting setup',
];

const STEPS = [
  { num: '01', title: 'Discovery', desc: 'We map your lead flow, sales process, and automation requirements before any build begins.' },
  { num: '02', title: 'Account Config', desc: 'Sub-account setup, custom domains, SMTP, and white-label branding configured.' },
  { num: '03', title: 'Funnel Build', desc: 'Funnels, automations, pipelines, and CRM built and tested in your sub-account.' },
  { num: '04', title: 'Go Live', desc: 'Full walkthrough, team training, and handover with 14-day post-launch support.' },
];

const RELATED = [
  { icon: 'fa-solid fa-rectangle-list', title: 'Landing Pages', desc: 'Conversion-optimised landing pages for ads, email campaigns, and product launches.', href: '/services/websites-funnels/landing-pages' },
  { icon: 'fa-solid fa-chart-line', title: 'CRO', desc: 'Data-led conversion optimisation that turns more of your existing traffic into customers.', href: '/services/websites-funnels/cro' },
  { icon: 'fa-solid fa-robot', title: 'GHL Automation', desc: 'Advanced GoHighLevel automation builds for agencies and service businesses.', href: '/services/automation/gohighlevel' },
];

export default function GoHighLevelFunnelsPage() {
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
                { label: 'GoHighLevel Funnels', href: null },
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
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>GoHighLevel Setup & Funnels</span>
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(32px,4.5vw,62px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, margin: '0 auto 24px', maxWidth: 900 }}>
              GoHighLevel Funnels Built to Capture, Nurture & Close
            </h1>
            <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 640, margin: '0 auto 44px' }}>
              Complete GHL funnel builds with automations, CRM setup, and sub-account configuration.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Start GHL Build <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>What Is GoHighLevel?</span>
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, marginBottom: 20 }}>
                The All-in-One Platform That Replaces Your Entire Tech Stack
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 16 }}>
                GoHighLevel combines CRM, funnel builder, email marketing, SMS, calendar, reputation management, and reporting into one powerful platform. For agencies and service businesses, it eliminates the need for five separate tools and creates one unified system for managing and converting leads.
              </p>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                The power of GHL is only unlocked with proper setup. Poor configuration leads to broken automations, missed follow-ups, and a CRM that nobody actually uses. We build and configure your GHL environment properly — so every lead is captured, every follow-up fires, and your team has a system they can trust.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Full CRM and pipeline configuration', 'Funnel and landing page builds', 'Automated follow-up sequences via email and SMS', 'White-label setup for agency sub-accounts'].map((item, i) => (
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
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80" alt="GoHighLevel funnel setup" style={{ width: '100%', borderRadius: 20, boxShadow: '0 24px 72px rgba(30,77,195,.13)', display: 'block' }} />
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
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>One Platform, Fully Configured, Ready to Scale</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>Full system setup, white-label capability, and automation built in — everything you need to run a scalable service or agency operation.</p>
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
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>Complete GHL Setup and Configuration</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>Every component of a fully operational GoHighLevel environment built and ready for your team.</p>
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
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>Discovery to Go Live in Four Steps</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>A structured build process that ensures your GHL environment is configured correctly from the start.</p>
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
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px' }}>Extend Your GHL System</h2>
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
