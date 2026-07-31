'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BENEFITS = [
  {
    icon: 'fa-solid fa-money-bill-trend-up',
    title: 'Revenue-Generating Automations',
    desc: 'We build automations that actively generate and nurture leads for your clients — turning on revenue streams that run 24/7 without manual effort.',
  },
  {
    icon: 'fa-solid fa-clone',
    title: 'Branded GHL Snapshots',
    desc: 'Pre-built GoHighLevel snapshots delivered under your agency brand — ready to deploy across multiple client accounts with your name on every workflow.',
  },
  {
    icon: 'fa-solid fa-circle-check',
    title: 'End-to-End Implementation',
    desc: 'We handle everything from requirements gathering to build, testing, and handover. Your agency stays in control while we do all the technical heavy lifting.',
  },
];

const INCLUDED = [
  'GHL snapshot builds',
  'Zapier/Make workflows',
  'CRM setup',
  'Email automation',
  'SMS automation',
  'AI chatbot setup',
  'Lead routing',
  'Client-facing documentation',
];

const PROCESS = [
  { n: '01', title: 'Requirements', desc: 'We gather a detailed brief from your agency — client business model, tools in use, automation goals, and lead flow requirements.' },
  { n: '02', title: 'Design', desc: 'We map out the automation architecture — triggers, actions, conditions, and integrations — before building anything.' },
  { n: '03', title: 'Build', desc: 'Our automation specialists build and configure all workflows, CRM pipelines, chatbots, and sequences in the client\'s platforms.' },
  { n: '04', title: 'Test & Hand Off', desc: 'Every automation is tested end-to-end before handover, and we provide client-facing documentation your agency can pass straight on.' },
];

const RELATED = [
  { href: '/services/white-label', icon: 'fa-solid fa-building', title: 'White-Label Hub', desc: 'Explore the full suite of white-label services your agency can resell under your brand.' },
  { href: '/services/marketing-automation', icon: 'fa-solid fa-robot', title: 'Marketing Automation', desc: 'Direct marketing automation for your own business — not white-labelled.' },
  { href: '/services/automation/gohighlevel', icon: 'fa-solid fa-bolt', title: 'GoHighLevel', desc: 'Dedicated GoHighLevel setup, snapshots, and automation builds for your business or your clients.' },
];

export default function WhiteLabelAutomationPage() {
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
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>White-Label Automation</span>
            </div>
            <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(28px,3.8vw,56px)', color: 'var(--color-navy)', lineHeight: 1.1, letterSpacing: '-0.5px', marginBottom: 22, maxWidth: 820, margin: '0 auto 22px' }}>
              GHL, Zapier &amp; AI Automations.<br />Delivered Under Your Brand.
            </h1>
            <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,18px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 620, margin: '0 auto 40px' }}>
              White-label marketing automation for agencies — GoHighLevel snapshots, Zapier and Make workflows, AI chatbots, and CRM setups built and handed off under your name.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Start White-Label Automation <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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
                  Sell Automation. We Build the Systems.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  White-label automation lets your agency sell GoHighLevel setups, Zapier workflows, Make automations, and AI chatbot implementations — without needing a technical team to build them.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  We handle all the technical build work — CRM configuration, pipeline setup, lead routing, email and SMS sequences, and AI chatbot integration — and hand everything over with clear documentation that you can pass directly to your clients.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {['GHL, Zapier, Make & AI platforms', 'End-to-end build and testing', 'Branded client-facing documentation', 'NDA-protected white-label delivery'].map(item => (
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
                <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=700&q=80" alt="Marketing automation workflows" style={{ position: 'relative', zIndex: 1, width: '100%', height: 440, objectFit: 'cover', borderRadius: 16, display: 'block', boxShadow: '0 24px 64px rgba(0,35,83,.15)' }} />
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Why Agencies Add White-Label Automation</h2>
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>Everything Covered in Our White-Label Automation Service</h2>
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.4vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px' }}>How We Deliver White-Label Automations</h2>
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
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', marginTop: 12 }}>Explore other services that work alongside white-label automation.</p>
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

        <CTASection image="/result_footer/white-label-partnership-illustration.webp" />
      </main>
      <Footer />
    </>
  );
}
