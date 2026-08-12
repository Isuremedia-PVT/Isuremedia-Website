'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'New client sub-account setup and configuration from your Snapshot',
  'Funnel and landing page builds inside client sub-accounts',
  'Automation and workflow build, troubleshooting, and repair',
  'CRM pipeline setup, custom field configuration, and stage management',
  'Calendar and appointment booking setup and troubleshooting',
  'Email and SMS sending configuration, domain verification, A2P 10DLC',
  'Integration connections, Stripe, Zapier, third-party tools',
  'Ongoing technical support for client GHL questions and issues',
];

const WHY_MATTERS = [
  { icon: 'fa-solid fa-user-plus', title: 'Onboarding and initial setup', desc: 'Every new client needs their sub-account configured, Snapshot applied, calendar connected, pipeline set up, email domain verified. For an agency adding clients monthly, that is a recurring burden that falls on whoever knows the platform best.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Funnel and automation build requests', desc: 'Clients sold on GHL as a funnel and automation platform expect to be able to build inside it. Most cannot. Every "can you build me a funnel" request needs platform expertise and fast turnaround.' },
  { icon: 'fa-solid fa-bug', title: 'Technical troubleshooting', desc: 'GoHighLevel updates constantly. Automations stop firing, calendars stop syncing, A2P 10DLC blocks SMS sending. Each issue needs someone who can diagnose it fast without extended back-and-forth.' },
  { icon: 'fa-solid fa-repeat', title: 'Ongoing change requests', desc: 'A new service needs a pipeline stage. A new campaign needs a funnel. Individually low-complexity, these requests aggregate into a significant time cost across twenty or thirty accounts.' },
  { icon: 'fa-solid fa-chart-line', title: 'A load that grows faster than your time', desc: 'At five clients you handle support yourself. At twenty it consumes your evenings. At fifty it is a full-time job that leaves no time for selling or growing the agency.' },
  { icon: 'fa-solid fa-heart-pulse', title: 'Client retention on the line', desc: 'A client who cannot get their automation fixed or their calendar working is a client who starts questioning the platform, and the agency that sold it to them.' },
];

const CARD_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const KEY_FACTORS = [
  { icon: 'fa-solid fa-medal', title: 'Deep GoHighLevel Expertise', impact: 'Highest impact', desc: 'We use GHL for our own clients and build inside it every day. That depth is what shows up in issues resolved correctly the first time, not after extended back-and-forth.' },
  { icon: 'fa-solid fa-layer-group', title: 'Full Platform Stack Coverage', impact: 'High impact', desc: 'Some providers specialise in one area, automations only, or funnels only. Full coverage across funnels, automations, CRM, calendars, email and SMS, and integrations means one partner for everything.' },
  { icon: 'fa-solid fa-file-lines', title: 'Documentation on Every Build', impact: 'High impact', desc: 'Every sub-account we configure and every automation we build is documented, what it does, how it is triggered, what it connects. That record lives in your agency, not ours.' },
  { icon: 'fa-solid fa-stopwatch', title: 'Agreed Response Times', impact: 'High impact', desc: 'Response times are set at the start of the partnership. Typical arrangements: first response within four business hours, resolution within one business day for standard issues.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'A2P 10DLC and SaaS Mode Fluency', impact: 'Medium impact', desc: 'A2P registration and SaaS mode configuration are two of the most common technical blockers for GHL agencies. We handle both as a standard part of the support scope.' },
  { icon: 'fa-solid fa-user-secret', title: 'A Support Channel That Stays Invisible', impact: 'Medium impact', desc: 'Your support email domain, your agency name, your tone of voice. Clients interact with your brand end to end, ISureMedia appears nowhere in any client-facing communication.' },
  { icon: 'fa-solid fa-earth-americas', title: 'Regional Configuration Awareness', impact: 'Contextual', desc: 'US, UK, Australian, Canadian, and Indian clients each have different SMS, phone provisioning, and compliance requirements. We configure to the region, not a US-centric default.' },
  { icon: 'fa-solid fa-sliders', title: 'Month to Month Flexibility', impact: 'Growing fast', desc: 'You scale support up as your sub-account count grows and scale down if it contracts. No commitment to a volume that no longer matches your agency.' },
];

const SUB_SERVICES = [
  { icon: 'fa-solid fa-clone', title: 'Sub-Account Setup and Snapshot Deployment', desc: 'New client sub-accounts configured from your Snapshot, business details, calendar, pipeline stages, and initial automation sequences, ready for the client handover you present.', img: 'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?w=500&q=80' },
  { icon: 'fa-solid fa-object-ungroup', title: 'Funnel and Landing Page Builds', desc: 'Funnels, landing pages, opt-in pages, and thank you pages built to the client brief, branded to their business, and connected to the automations that follow each conversion.', img: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=500&q=80' },
  { icon: 'fa-solid fa-diagram-project', title: 'Automation and Workflow Build', desc: 'Lead nurture sequences, appointment reminders, post-purchase flows, and pipeline triggers, plus troubleshooting and repair of automations that have stopped working.', img: 'https://images.unsplash.com/photo-1666698809123-44e998e93f23?w=500&q=80' },
  { icon: 'fa-solid fa-database', title: 'CRM and Pipeline Configuration', desc: 'Pipeline stage setup, custom fields, contact tags, and conversation routing, configured to the client\'s actual sales process rather than a generic default.', img: 'https://images.unsplash.com/photo-1702047063975-0841a0621b5a?w=500&q=80' },
  { icon: 'fa-solid fa-calendar-check', title: 'Calendar and Appointment Booking Setup', desc: 'Team calendars, round-robin routing, service menus, availability rules, and confirmation sequences, plus troubleshooting of booking flow issues.', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&q=80' },
  { icon: 'fa-solid fa-envelope', title: 'Email and SMS Sending Configuration', desc: 'Custom domain verification, LC Email activation, and A2P 10DLC registration support for SMS, the difference between communications that work and ones going to spam.', img: 'https://images.unsplash.com/photo-1553775282-20af80779df7?w=500&q=80' },
];

const SERVICES = [
  { icon: 'fa-solid fa-clone', title: 'Sub-Account Setup and Snapshot Deployment', desc: 'Every new client sub-account configured from your Snapshot and delivered within your agreed onboarding timeline.' },
  { icon: 'fa-solid fa-object-ungroup', title: 'Funnel and Landing Page Builds', desc: 'Funnels, opt-ins, and sales pages built inside client sub-accounts to your agency\'s standard format.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Automation and Workflow Build', desc: 'Lead nurture, reminders, and pipeline triggers, built, tested, and repaired when something breaks.' },
  { icon: 'fa-solid fa-database', title: 'CRM and Pipeline Configuration', desc: 'Stage setup, custom fields, tagging, and smart lists matched to how the client actually sells.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Calendar and Booking Setup', desc: 'Calendars, round-robin routing, and booking flow troubleshooting for GHL-as-a-booking-system clients.' },
  { icon: 'fa-solid fa-envelope', title: 'Email and SMS Sending Configuration', desc: 'Domain verification, LC Email, and A2P 10DLC registration and troubleshooting.' },
  { icon: 'fa-solid fa-plug', title: 'Third-Party Integration Setup', desc: 'Stripe billing, Zapier and Make connections, webhooks, and troubleshooting of integrations that stop passing data.' },
  { icon: 'fa-solid fa-headset', title: 'Ongoing Technical Support', desc: 'A support channel under your brand, resolved by our GHL specialists, at the response times you agree with us.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-arrow-up-right-dots', title: 'GHL SaaS resellers with growing client bases', desc: 'At five clients you handle support yourself. At fifty it is a full-time job. White-label support scales with your client base without scaling your personal time commitment.', img: 'https://images.unsplash.com/photo-1702047076267-6719aadd2807?w=700&q=80' },
  { icon: 'fa-solid fa-users', title: 'Agencies using GHL as a retention tool', desc: 'Clients embedded in the platform generate embedded support requests. White-label support keeps those clients happy without the burden falling on your account managers.', img: 'https://images.unsplash.com/photo-1563279699-4c5dfcab048c?w=700&q=80' },
  { icon: 'fa-solid fa-bolt', title: 'Agencies onboarding faster than they can set up', desc: 'A sales process that closes clients faster than the onboarding team can configure them creates a backlog that damages the first impression. Support keeps setup inside your sold timeline.', img: 'https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?w=700&q=80' },
  { icon: 'fa-solid fa-user-clock', title: 'Owners spending too much time inside GHL', desc: 'If you are the most GHL-experienced person in the agency and support requests pull you into the platform for hours a week, white-label support removes you from the execution loop.', img: 'https://images.unsplash.com/photo-1726594699522-d7c2f5459f52?w=700&q=80' },
  { icon: 'fa-solid fa-rocket', title: 'Agencies expanding into GHL without deep expertise', desc: 'If you are adding GHL to your offering but your team is not deeply experienced yet, white-label support lets you sell it confidently while we handle the technical delivery.', img: 'https://images.unsplash.com/photo-1702047094974-a3475a6e37f5?w=700&q=80' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-medal', title: 'We know GoHighLevel in depth', desc: 'We use GHL for our own clients and build inside it every day, its edge cases, failure modes, and the workarounds the documentation does not cover.' },
  { icon: 'fa-solid fa-user-secret', title: 'Your brand on every client interaction', desc: 'Support responses go out under your agency\'s email domain, your name, your tone of voice. Your clients never see ISureMedia.' },
  { icon: 'fa-solid fa-headset', title: 'One dedicated contact for all support', desc: 'You manage one contact at ISureMedia who coordinates all support delivery and escalates issues before they affect clients. Clear and reliable.' },
  { icon: 'fa-solid fa-layer-group', title: 'The full GHL stack, not one slice', desc: 'Funnels, automations, CRM, calendars, email and SMS, integrations, and SaaS mode troubleshooting, one partner for all platform support.' },
  { icon: 'fa-solid fa-file-shield', title: 'Every sub-account documented', desc: 'What it does, how it is triggered, what it connects, living in your agency\'s records. If you transition to in-house delivery, you have a complete record.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no lock-in', desc: 'You scale up when your GHL client base grows and scale down if it contracts. Never committed to a volume that does not match your agency.' },
];

const PROCESS = [
  { n: '01', title: 'Partner Discovery Call', desc: 'We talk through your current GHL client base, Snapshot setup, common support types, and expected onboarding volume, then propose a support structure and pricing.' },
  { n: '02', title: 'Agency Onboarding', desc: 'We review your Snapshot, sub-account standards, and brand guidelines, and establish how requests come in, how we respond, and how escalations are handled.' },
  { n: '03', title: 'Support Channel Setup', desc: 'The support channel is configured under your brand, your email domain, ticketing system, or preferred method. Clients submit to you. We resolve invisibly.' },
  { n: '04', title: 'Ongoing Support Delivery', desc: 'Requests handled within agreed response times. Simple questions resolved in hours, builds delivered within agreed timelines, with an activity summary at your preferred frequency.' },
  { n: '05', title: 'New Client Onboarding', desc: 'When you close a new client, you pass us the intake details. We configure the sub-account and deploy the Snapshot within the agreed setup timeline.' },
  { n: '06', title: 'Monthly Review', desc: 'A monthly check-in covering support volume, recurring issues, platform changes affecting your client base, and any adjustments to scope.' },
];

const FAQS = [
  { q: 'Do my clients need to know you are providing the support?', a: 'No. All support responses go out under your agency\'s brand, your email domain, your agency name, your communication style. ISureMedia\'s name appears nowhere in any client-facing communication.' },
  { q: 'How do support requests reach you from clients?', a: 'Through whatever support channel your agency uses, a ticketing system, a support email on your domain, a Slack channel, or a dedicated inbox. We access it, respond, and resolve under your brand.' },
  { q: 'What happens when a GHL update breaks something in a client sub-account?', a: 'We monitor for platform update impacts across accounts we support and proactively identify issues where possible. When a client reports a break, we diagnose and resolve it within the agreed response time.' },
  { q: 'Can you handle A2P 10DLC registration for our clients?', a: 'Yes. A2P 10DLC is one of the most common technical blockers for GHL clients in the US, required for SMS sending and frequently rejected on first submission. We handle registration and troubleshooting.' },
  { q: 'Do you build custom Snapshots for agencies?', a: 'Yes. If you need a new Snapshot built, or an existing one updated with new funnels or automations, we build and maintain it as a living asset that improves as your delivery standards improve.' },
  { q: 'Can you support GHL clients in SaaS mode?', a: 'Yes. SaaS mode configuration, Stripe rebilling, plan tier setup, automated sub-account creation on payment, and SaaS-specific troubleshooting are all within scope.' },
  { q: 'What is your response time for client support requests?', a: 'Agreed at the start of the partnership. Typical arrangements: first response within four business hours, resolution within one business day for standard issues, and same-day acknowledgement for everything else.' },
  { q: 'Do you handle GHL training for our clients?', a: 'We can produce training documentation, how-to guides, video walkthroughs, and FAQ documents, branded to your agency, covering the GHL features your clients actually use.' },
  { q: 'What if we already have some in-house GHL capability?', a: 'The most common arrangement is hybrid, your team handles what they are confident with and we handle the complex builds, troubleshooting, and high-volume onboarding periods.' },
  { q: 'Can you support GHL clients outside the US?', a: 'Yes, globally, with awareness of regional differences in SMS sending, phone provisioning, and compliance. UK, Australian, Canadian, and Indian clients get the regional setup they actually need, not a US-centric default.' },
];

/* ── FAQ 2-COL, matches the Local SEO page layout ── */
function AutomationFAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="wla-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <div className="wla-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>White-Label GHL Support</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: '0 0 32px' }}>
              Straight answers to the questions GHL agency owners ask most.
            </p>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Get Started →
            </a>
          </div>
          {/* Right accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, border: `1px solid ${open === i ? 'var(--color-primary)' : 'var(--color-border)'}`, overflow: 'hidden', transition: 'border-color .2s' }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                  <span style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)' }}>{faq.q}</span>
                  <i className="fa-solid fa-chevron-down" style={{ fontSize: 12, color: 'var(--ism-amber)', flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .22s' }} />
                </button>
                {open === i && (
                  <div style={{ padding: '0 24px 20px' }}>
                    <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.78, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .wla-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .wla-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function WhiteLabelAutomationPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="wla-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="wla-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* Left, copy */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Handle More GHL Clients Without the Support Load Consuming Your{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Time.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  We provide white-label GoHighLevel setup, configuration, and ongoing technical support for agencies and SaaS resellers, handling the platform work your clients generate under your brand, so{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>you focus on growing the agency</span> while your clients get expert GHL support fast.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/appointment"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Book a Partner Discovery Call
                  </a>
                </div>
              </div>

              {/* Right, photo + floating badges */}
              <div className="wla-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/banner/white-label-gohighlevel-support.webp" alt="White-label GoHighLevel support for agencies" style={{ width: '100%', height: 440, objectFit: 'contain', borderRadius: 24, display: 'block' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-headset" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-clock" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>4hr Response Time</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      (<img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />)
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>40+ GHL Agencies Supported</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>Delivered Under Your Brand</span>
                </div>
              </div>

            </div>
          </div>

          {/* Curved bottom edge */}
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{ position: 'absolute', left: 0, bottom: -1, width: '100%', height: 70, display: 'block' }}
            aria-hidden
          >
            <path d="M0,0 Q720,110 1440,0 L1440,100 L0,100 Z" fill="#F7F8FA" />
          </svg>

          <style>{`
            @media (max-width: 900px) {
              .wla-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .wla-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .wla-hero { padding: 48px 0 64px !important; }
            }
          `}</style>
        </section>

        {/* ══ 02. PROOF STRIP ══════════════════════════════════════════════ */}
        <ReviewsStrip />

        {/* ══ 03. BRIDGE SECTION ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="bridge-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)', gap: 64, alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(24px,2.8vw,40px)', color: 'var(--color-navy)', lineHeight: 1.2, letterSpacing: '-0.4px', marginBottom: 24 }}>
                  You Sold the Platform. Now the Support Requests Are Coming In Faster Than You Can Handle Them.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  The GoHighLevel white-label opportunity is real. Agencies on SaaS Pro are reselling GHL-powered platforms at $97 to $497 per client per month and keeping 70 to 85% margin. At 30 clients that is $2,000 to $3,000 per month in net recurring revenue from the platform alone.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  The constraint is not the platform. It is the support load. ISureMedia handles{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>GHL client support under your brand</span>, your clients submit requests to your support channel, we respond, resolve, and deliver at the standard your clients expect. You get the margin. We handle the platform work.
                </p>
                <a href="/appointment"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Book Your Partner Discovery Call
                </a>
              </div>
              <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', border: '1px solid var(--color-border)', boxShadow: '0 20px 50px rgba(0,35,83,.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 6px 16px rgba(255,176,0,.35)' }}>
                    <i className="fa-solid fa-list-check" style={{ color: 'var(--color-navy)', fontSize: 15 }} />
                  </div>
                  <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', margin: 0 }}>What we handle for your agency</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {BRIDGE_ITEMS.map((item, i) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '13px 0', borderBottom: i === BRIDGE_ITEMS.length - 1 ? 'none' : '1px solid var(--color-border)' }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', fontSize: 11 }} />
                      </div>
                      <span style={{ fontFamily: I, fontSize: 15, color: 'var(--color-navy)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:860px){ .bridge-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } }`}</style>
        </section>

        {/* ══ 04. WHAT IS WHITE-LABEL GHL SUPPORT ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="wla-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="wla-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  One Support Channel. Every GHL Request Handled Under Your Name.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    White-label GHL support means your agency keeps selling and owning the client relationship while ISureMedia becomes{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>the platform team working behind your support channel</span>.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Your clients submit a request the same way they always have. We configure the sub-account, build the automation, fix the calendar, or resolve the delivery issue,{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>under your agency&apos;s name, at the standard your clients expect</span>.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Agencies reselling GHL-powered platforms keep 70 to 85% margin on the platform fee. The constraint has never been the margin, it is the support load. Removing that constraint is the entire point of the partnership.
                  </p>
                </div>
              </div>
              <div className="wla-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                {/* Decorative background rings */}
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                {/* Central gauge */}
                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 349deg, var(--ism-blue-100) 349deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>97</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>Support Score</span>
                  </div>
                </div>

                {/* Floating badge, Response Time */}
                <div className="wla-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-stopwatch" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Response Time</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>4 hrs</div>
                  </div>
                </div>

                {/* Floating badge, Client Retention */}
                <div className="wla-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-users" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Client Retention</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>96%</div>
                  </div>
                </div>

                {/* Floating badge, Sub-Accounts Live */}
                <div className="wla-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-clone" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Sub-Accounts Live</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>500+</div>
                  </div>
                </div>

                {/* Floating badge, SLA Met */}
                <div className="wla-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>SLA Met</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>100%</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .wla-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .wla-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .wla-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .wla-score-badge{ padding:8px 10px !important; gap:7px !important; } .wla-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. THE GHL SUPPORT LOAD CONSUMING YOUR TIME ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>The Four Categories of GHL Support Consuming Your Agency&apos;s Time.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Every GHL agency faces these. Most handle them themselves. GoHighLevel is a powerful platform, and a complex one. Every client generates a stream of requests that require genuine platform expertise to resolve quickly.
              </p>
            </div>
            <div className="why-matters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 48 }}>
              {WHY_MATTERS.map((w, i) => {
                const variant = CARD_VARIANTS[i % 3];
                return (
                  <div key={w.title} style={{ background: variant.cardBg, borderRadius: 16, padding: '30px 26px', border: variant.dark ? 'none' : '1px solid var(--color-border)' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: variant.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                      <i className={w.icon} style={{ color: variant.iconColor, fontSize: 19 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: variant.textColor, marginBottom: 8, lineHeight: 1.3 }}>{w.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13.5, color: variant.descColor, lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
                  </div>
                );
              })}
            </div>
            <div style={{ textAlign: 'center' }}>
              <a href="/appointment"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Book a Partner Discovery Call
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .why-matters-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .why-matters-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. WHAT MAKES A WHITE-LABEL GHL PARTNERSHIP WORK ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>What Actually Makes a White-Label GHL Partnership Work.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Handing off platform support only pays off if the delivery is reliable. These are the factors Isuremedia builds into every white-label GHL support engagement.
              </p>
            </div>
            <div className="wla-factor-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {KEY_FACTORS.map((f, i) => {
                const hl = i === 0;
                return (
                  <div key={f.title} className={hl ? 'wla-factor-card wla-factor-card-hl' : 'wla-factor-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="wla-factor-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`wla-factor-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="wla-factor-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                        <span className="wla-factor-card-badge" style={{ fontFamily: J, fontSize: 10.5, fontWeight: 700, color: hl ? 'var(--ism-amber)' : 'var(--color-accent-hover)', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'color .25s ease' }}>{f.impact}</span>
                      </div>
                    </div>
                    <p className="wla-factor-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .wla-factor-card:not(.wla-factor-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .wla-factor-card:not(.wla-factor-card-hl):hover .wla-factor-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .wla-factor-card:not(.wla-factor-card-hl):hover .wla-factor-card-icon{ color: #fff !important; }
            .wla-factor-card:not(.wla-factor-card-hl):hover .wla-factor-card-title{ color: #fff !important; }
            .wla-factor-card:not(.wla-factor-card-hl):hover .wla-factor-card-badge{ color: var(--ism-amber) !important; }
            .wla-factor-card:not(.wla-factor-card-hl):hover .wla-factor-card-desc{ color: rgba(255,255,255,.85) !important; }
            .wla-factor-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .wla-factor-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 09. OUR WHITE-LABEL GHL SUPPORT SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our White-Label GHL Support Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Everything Your Agency Needs to Scale GHL Client Support Confidently.</p>
            </div>
            <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
              {SERVICES.map((s, i) => {
                const variant = CARD_VARIANTS[i % 3];
                return (
                  <div key={s.title} className="services-card" style={{ background: variant.cardBg, borderRadius: 16, padding: '28px 22px', border: variant.dark ? 'none' : '1px solid var(--color-border)' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: variant.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={s.icon} style={{ color: variant.iconColor, fontSize: 17 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: variant.textColor, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: variant.descColor, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .services-card{ transition: transform .22s ease, box-shadow .22s ease; }
            .services-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.14); }
            @media (max-width:1100px){ .services-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .services-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 10. WHO THIS IS FOR ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Which GHL Agencies White-Label Support Is Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If Your Support Load Is Growing Faster Than Your Capacity, This Is the Partnership That Fixes That.</p>
            </div>
            <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {WHO_FOR.map(w => (
                <div key={w.title} className="who-card" style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 300, boxShadow: '0 4px 20px rgba(0,35,83,.08)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt="" className="who-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,35,83,.10) 0%, rgba(0,23,56,.94) 76%)' }} />
                  <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '26px 24px' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, flexShrink: 0 }}>
                      <i className={w.icon} style={{ color: 'var(--color-navy)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{w.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.82)', lineHeight: 1.62, margin: 0 }}>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .who-card-img{ transition: transform .45s ease; }
            .who-card{ transition: transform .22s ease, box-shadow .22s ease; }
            .who-card:hover{ transform: translateY(-5px); box-shadow: 0 20px 44px rgba(0,35,83,.22); }
            .who-card:hover .who-card-img{ transform: scale(1.08); }
            @media (max-width:900px){ .who-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .who-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 11. MID-PAGE CTA STRIP ══════════════════════════════════════════════ */}
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="mid-cta" style={{ background: 'var(--color-primary)', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
              <div aria-hidden style={{ position: 'absolute', top: '-30%', right: '-5%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', maxWidth: 560 }}>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Every hour you spend inside a client&apos;s GHL sub-account is an hour you are not spending growing your agency.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  A partner discovery call will show you exactly what white-label GHL support would cost for your current client base.
                </p>
              </div>
              <a href="/appointment" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Book a Partner Discovery Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:640px) {
              .mid-cta { padding: 32px 24px !important; flex-direction: column !important; text-align: center; }
              .mid-cta-btn { width: 100%; justify-content: center !important; box-sizing: border-box; }
            }
          `}</style>
        </section>

        {/* ══ 12. WHY CHOOSE ISM ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why GHL Agencies Choose Isuremedia for White-Label Support</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Deep Platform Expertise. Your Brand on Everything. One Contact for All Support.</p>
            </div>
            <div className="why-ism-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
              {WHY_ISM.slice(0, 2).map(b => (
                <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 26px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 20 }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: J, fontSize: 15.5, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              ))}

              <div className="why-ism-bento-row" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                {(() => { const b = WHY_ISM[2]; return (
                  <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 22px', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-amber-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={b.icon} style={{ color: 'var(--color-accent-hover)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                ); })()}

                <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 200 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://picsum.photos/seed/wlaghlwhatmakesdifferent/700/620" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>

                {(() => { const b = WHY_ISM[3]; return (
                  <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 22px', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                ); })()}
              </div>

              {WHY_ISM.slice(4, 6).map(b => (
                <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 26px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 20 }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: J, fontSize: 15.5, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .why-ism-card{ transition: transform .2s ease, box-shadow .2s ease; }
            .why-ism-card:hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0,35,83,.10); }
            @media(max-width:900px){ .why-ism-bento{ grid-template-columns:1fr !important; } .why-ism-bento-row{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 13. OUR PROCESS ══════════════════════════════════════════════ */}
        <section className="wla-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                How White-Label GHL Support Works in <span style={{ color: 'var(--ism-amber)' }}>Practice</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Simple for you. Invisible to your clients.
              </p>
            </div>
            <div className="wla-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 28, left: '8%', width: '84%', height: 2, background: 'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex: 0 }} />
              {PROCESS.map((step, i) => (
                <div key={step.n} style={{ textAlign: 'center', padding: '0 12px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: i === 0 ? 'var(--ism-amber)' : 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', boxShadow: `0 4px 18px ${i === 0 ? 'rgba(255,176,0,.40)' : 'rgba(30,77,195,.30)'}`, border: '4px solid #fff' }}>
                    <span style={{ fontFamily: J, fontSize: 16, fontWeight: 900, color: '#fff' }}>{step.n}</span>
                  </div>
                  <div style={{ fontFamily: J, fontSize: 11.5, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 10, lineHeight: 1.3 }}>{step.title}</div>
                  <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.62, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: 780, margin: '48px auto 0' }}>
              <strong style={{ color: 'var(--color-navy)' }}>Typical timelines:</strong> New sub-account setup from Snapshot, one to two business days. Standard automation builds, two to three business days. Technical troubleshooting, responded to within four hours, resolved within one business day for most issues.
            </p>
            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <a href="/appointment"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 22px rgba(255,176,0,.38)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Book a Partner Discovery Call
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .wla-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
              .wla-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 14. FAQ ══════════════════════════════════════════════ */}
        <AutomationFAQAccordion />

        {/* ══ 15. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/white label.webp" description={<>Every new GHL client you onboard shouldn&rsquo;t mean another support ticket pile-up for your team. Our white-label automation specialists build and maintain funnels, workflows, and integrations under your brand, freeing your hours for the work that actually grows your agency. Let&rsquo;s talk about how to <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>handle more clients without the support drag</span>.</>} heading="Ready to Offload" headingHighlight="the GHL Support Load?" primaryLabel="Start White-Label GHL Support" secondaryLabel="Call +1 646-588-1430" />
      </main>
      <Footer />
    </>
  );
}
