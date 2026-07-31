'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BENEFITS = [
  {
    icon: 'fa-solid fa-plug',
    title: 'Multi-App Connectivity',
    desc: 'Connect your CRM, forms, email platform, Slack, Google Sheets, and hundreds more apps without writing a single line of code.',
  },
  {
    icon: 'fa-solid fa-dollar-sign',
    title: 'Zero Developer Cost',
    desc: 'Zapier automations replace hours of manual work and eliminate the need for custom integrations — saving you time and developer budget.',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Real-Time Triggers',
    desc: 'Every workflow fires the moment the trigger event happens — no batch delays, no manual exports, no missed notifications.',
  },
];

const INCLUDED = [
  'Workflow audit & discovery',
  '10 custom Zaps built',
  'Testing & validation',
  'Error handling setup',
  'Full documentation',
  'App connection setup',
  'Team walkthrough',
  'Ongoing support',
];

const STEPS = [
  { num: '01', title: 'Audit', desc: 'We map your current tools, identify manual tasks, and find the highest-value automation opportunities.' },
  { num: '02', title: 'Map', desc: 'Every workflow is documented before we build — trigger events, actions, conditions, and error paths all planned.' },
  { num: '03', title: 'Build', desc: 'All Zaps built, tested, and connected to your live apps with full error handling configured.' },
  { num: '04', title: 'Test & Document', desc: 'End-to-end QA on every workflow, plus clear documentation so your team can manage and extend them.' },
];

const RELATED = [
  { icon: 'fa-solid fa-database', title: 'CRM Setup', desc: 'Get your CRM properly configured so Zapier has clean, structured data to work with.', href: '/services/automation/crm-setup' },
  { icon: 'fa-solid fa-diagram-project', title: 'Make Automation', desc: 'For complex, multi-step workflows with conditional logic and data transformation — Make handles what Zapier cannot.', href: '/services/automation/make-integromat' },
  { icon: 'fa-solid fa-code-branch', title: 'n8n Automation', desc: 'Self-hosted automation with full customisation and no per-task pricing for high-volume workflows.', href: '/services/automation/n8n' },
];


export default function ZapierPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* BREADCRUMB */}
        <div style={{ background: '#fff', borderBottom: '1px solid var(--color-border)', padding: '14px 0' }}>
          <div className="ism-container">
            <nav style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' as const }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Automation', href: '/services/marketing-automation' },
                { label: 'Zapier Automation', href: null },
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
              Zapier Workflows That Connect Your Tools and Save Hours Every Week
            </h1>
            <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 600, margin: '0 auto 44px' }}>
              Custom Zapier automations that link your CRM, forms, email, and apps — no code, no delays.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', flexWrap: 'wrap' as const }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase' as const, boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Build My Zapier Workflows <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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
                Every Tool Talking to Every Other Tool
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 16 }}>
                Most businesses run on a stack of disconnected tools — a CRM that does not talk to their email platform, a form that dumps leads into a spreadsheet, a Slack channel that misses half the notifications. The result is manual work, delays, and human error every single day.
              </p>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                Zapier connects over 7,000 apps through a visual workflow builder. We design and build automations that eliminate the manual steps between your tools — so your team spends time on work that matters, not copying data between systems.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Lead routing from forms to CRM', 'Automated Slack alerts for new deals', 'Invoice creation from booking confirmations', 'Email sequences triggered by CRM events'].map((item, i) => (
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
              <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=700&q=80" alt="Zapier workflow automation" style={{ width: '100%', borderRadius: 20, boxShadow: '0 24px 72px rgba(30,77,195,.13)', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* KEY BENEFITS */}
        <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>Why Zapier Workflows Pay for Themselves</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>Properly built Zapier workflows eliminate hours of manual work every week and keep your data consistent across every tool.</p>
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
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>10 Custom Zaps and Everything Around Them</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>From the initial audit to team training and ongoing support — we handle the full lifecycle of your Zapier automations.</p>
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
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>Audit to Documented Workflows in Four Steps</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>We map, build, test, and document every workflow so your team can manage them confidently long after handover.</p>
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
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,42px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px' }}>Pair Zapier With These Services</h2>
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

        <CTASection image="/result_footer/marketing-automation-illustration.webp" />
      </main>
      <Footer />
    </>
  );
}
