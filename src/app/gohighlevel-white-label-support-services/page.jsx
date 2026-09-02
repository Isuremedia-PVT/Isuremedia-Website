'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'Sub-account setup and snapshot deployment for new clients',
  'Funnel and landing page builds inside client sub-accounts',
  'Automation and workflow support, troubleshooting, and repair',
  'CRM and pipeline configuration around the client\'s sales process',
  'Calendar and appointment booking setup and troubleshooting',
  'Email and SMS sending configuration and related troubleshooting',
  'Third-party integration setup, Stripe, Zapier, Make, webhooks',
  'Ongoing technical support for recurring GHL requests',
];

const WHY_MATTERS = [
  { icon: 'fa-solid fa-user-plus', title: 'Onboarding and Initial Setup', desc: 'New clients need sub-account configuration, snapshots, calendars, pipelines, domains, email, phone, and other settings checked and verified before launch.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Funnel and Automation Build Requests', desc: 'Clients often ask for new funnels, automations, forms, triggers, and follow-up sequences. Each request needs platform knowledge and careful testing.' },
  { icon: 'fa-solid fa-bug', title: 'Technical Troubleshooting', desc: 'GoHighLevel updates can affect workflows, snapshots, integrations, and page behavior. Support teams need to diagnose issues and identify what changed.' },
  { icon: 'fa-solid fa-repeat', title: 'Ongoing Change Requests', desc: "A new service, campaign, offer, or workflow often requires changes to the client's GHL setup. Small requests can accumulate across multiple accounts." },
  { icon: 'fa-solid fa-chart-line', title: 'A Support Queue That Grows With Your Client Base', desc: 'Five clients may generate manageable support volume. Fifty clients can create a full-time queue unless the agency has a defined support structure.' },
  { icon: 'fa-solid fa-heart-pulse', title: 'Client Retention Depends on Reliable Support', desc: 'When a client cannot get a workflow, calendar, or automation working, the agency feels the pressure. Responsive support becomes part of the service itself.' },
];

const CARD_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const KEY_FACTORS = [
  { icon: 'fa-solid fa-medal', title: 'Deep GoHighLevel Expertise', impact: 'Highest impact', desc: 'We work inside GoHighLevel every day, including edge cases, workflow failures, account configuration, and platform changes that require more than basic setup knowledge.' },
  { icon: 'fa-solid fa-layer-group', title: 'Full Platform Stack Coverage', impact: 'High impact', desc: 'Support can span funnels, workflows, CRM, calendars, email, SMS, integrations, reporting, and SaaS features so your agency does not need multiple support providers.' },
  { icon: 'fa-solid fa-file-lines', title: 'Documentation on Every Build', impact: 'High impact', desc: 'Sub-account changes, workflows, triggers, configurations, and integration logic are documented so your agency has a record of what was changed and how it works.' },
  { icon: 'fa-solid fa-stopwatch', title: 'Agreed Response Times', impact: 'High impact', desc: 'Support expectations are defined at the start. Response and resolution times depend on the issue type and the scope of the engagement.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'A2P 10DLC and SaaS Mode Fluency', impact: 'Medium impact', desc: 'Support can include A2P 10DLC-related setup and GoHighLevel SaaS workflows where those capabilities are part of the agreed service.' },
  { icon: 'fa-solid fa-user-secret', title: 'A Support Channel That Stays Invisible', impact: 'Medium impact', desc: 'Your client sees your agency as the provider. Support communication can stay routed through your agency so white-label delivery remains consistent.' },
  { icon: 'fa-solid fa-earth-americas', title: 'Regional Configuration Awareness', impact: 'Contextual', desc: 'SMS, phone provisioning, compliance, and communication requirements vary by market. Support can account for region-specific requirements when configuring accounts.' },
  { icon: 'fa-solid fa-sliders', title: 'Month-to-Month Flexibility', impact: 'Growing fast', desc: "Support capacity can scale with the number of client sub-accounts without forcing your agency into a fixed long-term volume commitment." },
];

const SERVICES = [
  { icon: 'fa-solid fa-clone', title: 'Sub-Account Setup and Snapshot Deployment', desc: 'Configure new client sub-accounts from your approved snapshots, apply the required settings, and prepare each account for onboarding.' },
  { icon: 'fa-solid fa-object-ungroup', title: 'Funnel and Landing Page Builds', desc: "Build or update funnels, landing pages, forms, and page sections inside GoHighLevel according to your agency's requirements." },
  { icon: 'fa-solid fa-diagram-project', title: 'Automation and Workflow Support', desc: 'Create, modify, test, and troubleshoot workflows for lead routing, reminders, follow-up, internal notifications, and pipeline movement.' },
  { icon: 'fa-solid fa-database', title: 'CRM and Pipeline Configuration', desc: "Configure stages, custom fields, tags, lead sources, and other CRM settings around the client's sales process." },
  { icon: 'fa-solid fa-calendar-check', title: 'Calendar and Booking Setup', desc: 'Set up calendars, round-robin routing, booking pages, availability, and related settings for appointment-based client workflows.' },
  { icon: 'fa-solid fa-envelope', title: 'Email and SMS Sending Configuration', desc: 'Support domain authentication, email and SMS configuration, delivery settings, and related troubleshooting.' },
  { icon: 'fa-solid fa-plug', title: 'Third-Party Integration Setup', desc: "Connect GoHighLevel with tools such as Stripe, Zapier, Make, webhooks, and other systems required by the client's workflow." },
  { icon: 'fa-solid fa-headset', title: 'Ongoing Technical Support', desc: 'Handle recurring technical requests, troubleshooting, workflow changes, account updates, and other support needs as part of an ongoing GHL support engagement.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-arrow-up-right-dots', title: 'GHL SaaS Resellers With Growing Client Bases', desc: 'At a few clients, support may be manageable internally. As sub-account volume grows, a dedicated support team can take on the recurring platform work.', img: '/services-six-card/White Label/whhite label ghl support/GHL SaaS resellers with growingclient bases.webp' },
  { icon: 'fa-solid fa-users', title: 'Agencies Using GHL as a Client Retention Tool', desc: 'When clients rely on GoHighLevel for sales and automation, ongoing support becomes part of the service experience. A support partner can help keep accounts maintained.', img: '/services-six-card/White Label/whhite label ghl support/Agencies using GHL as aretention tool.webp' },
  { icon: 'fa-solid fa-bolt', title: 'Agencies Onboarding Faster Than They Can Set Up Accounts', desc: 'New client setup can consume launch-week capacity. White-label support can handle account configuration so onboarding stays on schedule.', img: '/services-six-card/White Label/whhite label ghl support/Agencies onboarding fasterthan they can set up.webp' },
  { icon: 'fa-solid fa-user-clock', title: 'Owners Spending Too Much Time Inside GoHighLevel', desc: 'If the agency owner is handling GHL troubleshooting, support requests, and account changes personally, shifting platform work to a specialist team can free that time.', img: '/services-six-card/White Label/whhite label ghl support/Owners spending too much timeinside GHL.webp' },
  { icon: 'fa-solid fa-rocket', title: 'Agencies Expanding Into GHL Without Deep Expertise', desc: 'A support partner can provide technical GoHighLevel knowledge while the agency builds its offer and client base without immediately hiring a full specialist team.', img: '/services-six-card/White Label/whhite label ghl support/Agencies expanding into GHLwithout deep expertise.webp' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-medal', title: 'We Know GoHighLevel in Depth', desc: 'We use GHL for ongoing builds and support, including edge cases, failure modes, and account configurations that basic platform knowledge does not cover.' },
  { icon: 'fa-solid fa-user-secret', title: 'Your Brand on Every Client Interaction', desc: "Support responses can use your agency's brand, email domain, communication style, and preferred delivery process rather than exposing the technical partner." },
  { icon: 'fa-solid fa-headset', title: 'One Dedicated Contact for All Support', desc: 'Your agency has one support contact coordinating client requests, troubleshooting, account changes, and escalation.' },
  { icon: 'fa-solid fa-layer-group', title: 'The Full GHL Stack, Not One Slice', desc: 'Support can cover funnels, automations, CRM, calendars, email, SMS, integrations, and SaaS features so you are not coordinating multiple providers.' },
  { icon: 'fa-solid fa-file-shield', title: 'Every Sub-Account Documented', desc: 'Important account changes, workflow logic, and configuration notes are documented so your team can understand what was changed.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to Month, No Lock-In', desc: 'Scale support as your GHL client base grows without committing to a fixed support volume that may not match your agency.' },
];

const PROCESS = [
  { n: '01', title: 'Partner Discovery Call', desc: 'We review your current GHL client base, support volume, service scope, and preferred communication process, then define the support structure.' },
  { n: '02', title: 'Agency Onboarding', desc: 'We gather your SOPs, account standards, support channels, brand guidelines, and escalation rules so requests can be handled consistently.' },
  { n: '03', title: 'Support Channel Setup', desc: "The support channel is configured under your preferred communication method. Client requests are routed according to your agency's process." },
  { n: '04', title: 'Ongoing Support Delivery', desc: 'Requests are reviewed, prioritized, resolved, and documented. Larger builds or complex changes are handled within the agreed scope and timeline.' },
  { n: '05', title: 'New Client Onboarding', desc: 'When a new client joins, we can configure their sub-account, deploy the required snapshot, and prepare the account for launch.' },
  { n: '06', title: 'Monthly Review', desc: 'A regular review covers support volume, recurring issues, platform changes, and adjustments to scope or capacity.' },
];

const FAQS = [
  { q: 'What is GoHighLevel white label support?', a: "GoHighLevel white label support is technical support delivered by a specialist team behind an agency's brand. The agency keeps the client relationship while the support team handles agreed GoHighLevel setup, changes, troubleshooting, and maintenance." },
  { q: 'How does GoHighLevel white label support work for agencies?', a: "The agency sends client requests through an agreed support channel, and the GHL support team handles the approved work inside the client's account. Delivery and communication remain aligned with the agency's brand and process." },
  { q: 'Do my clients know that the GoHighLevel support is outsourced?', a: "The white-label model is designed to keep the technical fulfillment behind the agency. Client-facing communication and deliverables can remain under your agency's brand." },
  { q: 'Can you support multiple GoHighLevel client sub-accounts?', a: 'Yes. A white-label GHL support team can manage support across multiple sub-accounts, with capacity and scope based on the number of clients and the type of requests.' },
  { q: 'Can you fix a GoHighLevel account that is not working properly?', a: 'Yes. Support can include troubleshooting broken workflows, forms, calendars, integrations, automations, pages, and account settings. The first step is identifying where the failure occurs and what changed.' },
  { q: 'Can you handle A2P 10DLC registration for GoHighLevel clients?', a: 'A2P 10DLC setup and registration support can be included when it is part of the agreed scope. Requirements depend on the account, business information, messaging use case, and registration status.' },
  { q: 'Do you provide GoHighLevel SaaS mode support?', a: 'Yes. Support can include GoHighLevel SaaS mode setup and maintenance for agencies using the platform to deliver a branded software or service offering.' },
  { q: 'Can you build custom snapshots for agencies?', a: 'Yes. We can help configure and maintain GoHighLevel snapshots when the agency needs a repeatable account structure for onboarding multiple clients.' },
  { q: 'What is the response time for white label GHL support?', a: 'Response times depend on the agreed support arrangement and the type of request. Response and resolution expectations are defined during onboarding so your agency knows what to expect.' },
  { q: 'Can you support GoHighLevel clients outside the US?', a: 'Yes. Support can be provided for clients in different regions. SMS, phone, compliance, and communication requirements may vary by market, so account configuration is handled according to the relevant regional requirements.' },
  { q: 'Do you provide GoHighLevel training for agency teams?', a: 'Training can be included when it is part of the engagement. Training may cover account structure, workflows, support procedures, and how the agency should manage recurring GHL tasks.' },
  { q: 'What happens when a GoHighLevel update breaks something in a client sub-account?', a: 'We investigate the affected workflow or feature, identify whether the change is related to the platform or account configuration, apply the required fix, and test the affected process before closing the support request.' },
  { q: 'Can I use white label GHL support if I already have in-house GoHighLevel staff?', a: 'Yes. White-label GHL support can supplement an internal team by handling overflow, troubleshooting, onboarding, recurring account changes, or specialist work when your staff reaches capacity.' },
  { q: 'Do you require a long-term contract for GoHighLevel agency support?', a: 'No. Ongoing support can be structured month to month, while larger builds or defined setup work can be scoped as project-based engagements.' },
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
              Questions About <span style={{ color: 'var(--ism-amber)' }}>GoHighLevel White Label Support</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: '0 0 32px' }}>
              Clear answers about client communication, setup, SaaS, troubleshooting, response times, and agency support.
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

        {/*  01. HERO  */}
        <section className="wla-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="wla-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* Left, copy */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  GoHighLevel White Label Support That Takes the{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Support Load Off Your Team.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  Provide <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>GoHighLevel setup, configuration, troubleshooting, and ongoing agency support</span> under your brand while your team stays focused on growth.
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
                      (<img loading="lazy" key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />)
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

        {/*  02. PROOF STRIP  */}
        <ReviewsStrip />

        {/*  03. BRIDGE SECTION  */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="bridge-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)', gap: 64, alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(24px,2.8vw,40px)', color: 'var(--color-navy)', lineHeight: 1.2, letterSpacing: '-0.4px', marginBottom: 24 }}>
                  Your Agency Stays Client-Facing. Our Team Handles the GHL Work.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  GoHighLevel white label support means your agency can continue selling and owning the client relationship while Isuremedia becomes the technical team working behind your support process.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  Your clients submit requests through the channel you choose. We can handle{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>sub-account configuration, workflow changes, funnel updates, calendar settings, integrations, and troubleshooting</span> according to your agency's process, designed for agencies that want to support more GHL clients without making every new request another internal task.
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

        {/*  04. WHAT IS WHITE-LABEL GHL SUPPORT  */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="wla-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="wla-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  One Support Channel for Every GHL Client Request.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Your agency keeps{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>ownership of the client relationship</span> while a specialist team handles setup, changes, troubleshooting, and ongoing platform support.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    This model is designed for agencies that want to support more GHL clients{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>without making every new request another internal task</span> for the same account managers or specialists.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    The work stays behind your agency's brand, with the delivery process, communication, and support scope defined with you.
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

        {/*  05. THE GHL SUPPORT LOAD CONSUMING YOUR TIME  */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>What Keeps GoHighLevel Support on Your Team's To-Do List.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Every GHL client creates recurring requests, from onboarding and workflow changes to technical troubleshooting and platform updates.
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

        {/*  06. WHAT MAKES A WHITE-LABEL GHL PARTNERSHIP WORK  */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>The Standards Behind Reliable White Label GoHighLevel Support.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Reliable support depends on platform depth, documentation, response times, and a clear route for every client request.
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

        {/*  09. OUR WHITE-LABEL GHL SUPPORT SERVICES  */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>GoHighLevel White Label Support Services for Your Client Accounts</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Give your agency one support team for the recurring GoHighLevel work that keeps client accounts running.</p>
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

        {/*  10. WHO THIS IS FOR  */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Which Agencies Benefit From GoHighLevel White Label Support?</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Use white label GoHighLevel support when the platform workload is growing faster than your internal capacity.</p>
            </div>
            <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {WHO_FOR.map(w => (
                <div key={w.title} className="who-card" style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 300, boxShadow: '0 4px 20px rgba(0,35,83,.08)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src={w.img} alt="" className="who-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

        {/*  11. MID-PAGE CTA STRIP  */}
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="mid-cta" style={{ background: 'var(--color-primary)', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
              <div aria-hidden style={{ position: 'absolute', top: '-30%', right: '-5%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', maxWidth: 560 }}>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>How Much Is Your GHL Support Queue Costing Your Agency?</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  Bring your client volume, current support workload, and required services to a partner discovery call and we&apos;ll map the right support model.
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

        {/*  12. WHY CHOOSE ISM  */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Agencies Choose Isuremedia for White Label GHL Support</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Your agency gets deep platform support, one point of contact, documented accounts, and a support process that stays client-facing through your brand.</p>
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
                  <img loading="lazy" src="/services-mid-image/white-label.webp" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

        {/*  13. OUR PROCESS  */}
        <section className="wla-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                How Our <span style={{ color: 'var(--ism-amber)' }}>GoHighLevel White Label Support</span> Works
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                We keep intake, support routing, account access, delivery, and review structured so your agency stays in control of the client experience.
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
              New sub-account setup from an approved snapshot can often take one to two business days. Standard automation changes can take around two to three business days. Technical troubleshooting depends on the issue and may require longer investigation.
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

        {/*  14. FAQ  */}
        <AutomationFAQAccordion />

        {/*  15. ENDING CTA  */}
        <CTASection image="/result_footer/white label.webp" description={<>Tell us how many GHL clients you support, what requests your team handles today, and where support is slowing growth. We&rsquo;ll help you define the <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>right white-label model</span>.</>} heading="Take GHL Support Off" headingHighlight="Your Team's To-Do List" primaryLabel="Start White-Label GHL Support" secondaryLabel="Talk to Our GHL Support Team" />
      </main>
      <Footer />
    </>
  );
}
