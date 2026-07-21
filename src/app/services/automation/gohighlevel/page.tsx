'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BENEFITS = [
  {
    icon: 'fa-solid fa-gears',
    title: 'Full-System Configuration',
    desc: 'Every module of GoHighLevel configured to your business — from sub-account structure to pipelines, calendars, and reputation management.',
  },
  {
    icon: 'fa-solid fa-tag',
    title: 'White-Label Ready',
    desc: 'We set up your GHL environment fully white-labelled — your brand, your domain, your client-facing experience from day one.',
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'Automations Included',
    desc: 'Email and SMS follow-up sequences, missed-call text-back, nurture workflows, and booking flows all built and tested before handover.',
  },
];

const INCLUDED = [
  'Sub-account setup & structure',
  'Funnel builds',
  'CRM pipeline configuration',
  'Email & SMS automations',
  'Calendar & booking setup',
  'Reputation management',
  'White-label configuration',
  'Team training',
];

const STEPS = [
  { num: '01', title: 'Discovery', desc: 'We map your current processes, goals, and gaps to plan a GHL configuration that fits your business model.' },
  { num: '02', title: 'Account Config', desc: 'Sub-accounts, users, pipelines, custom fields, and integrations all set up to your exact specifications.' },
  { num: '03', title: 'Build', desc: 'Funnels, automations, calendars, and workflows built, tested, and polished inside your account.' },
  { num: '04', title: 'Test & Go Live', desc: 'End-to-end QA, live walkthrough with your team, and a handover doc so everyone knows exactly how it works.' },
];

const RELATED = [
  { icon: 'fa-solid fa-database', title: 'CRM Setup', desc: 'Full CRM configuration for HubSpot, Zoho, or your platform of choice — pipelines, automations, dashboards.', href: '/services/automation/crm-setup' },
  { icon: 'fa-solid fa-filter', title: 'GoHighLevel Funnels', desc: 'High-converting funnels built inside GoHighLevel — from lead gen to appointment booking.', href: '/services/websites-funnels/gohighlevel-funnels' },
  { icon: 'fa-solid fa-tag', title: 'White-Label GHL', desc: 'Resell GoHighLevel under your own brand — we set up, configure, and support your clients.', href: '/services/white-label/gohighlevel' },
];


export default function GoHighLevelSetupPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* BREADCRUMB */}
        <div style={{ background: '#fff', borderBottom: '1px solid var(--color-border)', padding: '14px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' as const }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Automation', href: '/services/marketing-automation' },
                { label: 'GoHighLevel Setup', href: null },
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

        {/* HERO */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', textAlign: 'center', position: 'relative' }}>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(32px,4.5vw,62px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, margin: '0 auto 24px', maxWidth: 900 }}>
              GoHighLevel Setup Done Right — Funnels, CRM, and Automations Built to Scale
            </h1>
            <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 600, margin: '0 auto 44px' }}>
              Complete GoHighLevel configuration from sub-account structure to automated follow-up systems.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', flexWrap: 'wrap' as const }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase' as const, boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Start GHL Setup <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
              <a href="/services/marketing-automation" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase' as const, border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)'; }}>
                Back to Automation
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, marginBottom: 20 }}>
                More Than Just Turning It On
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 16 }}>
                Most businesses purchase GoHighLevel and spend weeks figuring out where to start. A rushed setup leads to broken automations, confused teams, and missed revenue. A proper GHL setup is an architecture exercise — everything from how sub-accounts are structured to how leads flow through your pipeline needs deliberate design.
              </p>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                Our team has configured GHL for agencies, home service businesses, coaches, and enterprises. We know what works, what breaks, and how to build a system your team will actually use.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Full CRM and pipeline architecture', 'Automated lead nurture sequences', 'Reputation and review management', 'Calendar and appointment booking'].map((item, i) => (
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80" alt="GoHighLevel setup and CRM configuration" style={{ width: '100%', borderRadius: 20, boxShadow: '0 24px 72px rgba(30,77,195,.13)', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* KEY BENEFITS */}
        <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>Why Our GHL Setup Delivers Results</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>We do not just activate GoHighLevel — we build a system that runs your follow-ups, manages your pipeline, and scales with your team.</p>
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

        {/* WHAT'S INCLUDED */}
        <section style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>Everything You Need, Nothing Left Out</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>Every GHL setup engagement covers the full stack — no add-ons, no surprises.</p>
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

        {/* PROCESS */}
        <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>From Kickoff to Go-Live in Four Steps</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>A structured delivery process that gets your GHL account live, tested, and running smoothly.</p>
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

        {/* RELATED SERVICES */}
        <section style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px' }}>Pair GHL Setup With These Services</h2>
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
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.04em', textTransform: 'uppercase' as const }}>
                    Learn More <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
