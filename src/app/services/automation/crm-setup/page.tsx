'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const CRM_BRIDGE_ITEMS = [
  'CRM platform selection and setup',
  'Pipeline design and custom stage configuration',
  'Contact and lead import and data cleaning',
  'Custom field, tag, and segmentation setup',
  'Automation of manual data entry tasks',
  'Team training and adoption support',
  'CRM and marketing tool integration',
  'Ongoing CRM management and hygiene',
];

const CRM_WHY_MATTERS = [
  { icon: 'fa-solid fa-eye', title: 'Complete visibility over your pipeline', desc: 'Every lead, every deal, every opportunity — visible in one place, at every stage of the sales process. Your sales team knows what to work on. Your management team knows where revenue is coming from and what is at risk.' },
  { icon: 'fa-solid fa-bolt', title: 'Faster follow-up without manual effort', desc: 'A properly automated CRM triggers follow-up actions the moment a lead takes action — form fill, email open, stage change. No leads waiting in an inbox until Monday morning.' },
  { icon: 'fa-solid fa-route', title: 'A sales process your team actually follows', desc: 'When the CRM is built around the way your team actually sells — not around how the software was designed to be demonstrated — adoption happens naturally.' },
  { icon: 'fa-solid fa-chart-pie', title: 'Accurate forecasting and reporting', desc: 'A clean CRM tells you how much revenue is in the pipeline, what the close rate is at each stage, and where deals are getting stuck — reliable information instead of intuition.' },
  { icon: 'fa-solid fa-user-shield', title: 'Protection against team changes', desc: 'When a salesperson leaves, every contact history, every deal note, and every communication record stays in the CRM. Nothing walks out the door with them.' },
  { icon: 'fa-solid fa-user-clock', title: 'More selling time, less admin', desc: 'Sales reps spend only 28 to 53% of their working week actually selling — the rest goes to administrative tasks. A properly automated CRM changes that ratio significantly.' },
];

const CRM_CARD_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const CRM_KEY_FACTORS = [
  { icon: 'fa-solid fa-sitemap', title: 'Pipeline Stages Do Not Match Reality', impact: 'Most common failure', desc: 'Most CRM setups use default pipeline stages — Lead, Proposal Sent, Closed Won, Closed Lost. For most businesses that bears almost no resemblance to what actually happens between a first enquiry and a closed deal. When the stages do not match reality, teams stop updating the CRM.' },
  { icon: 'fa-solid fa-keyboard', title: 'Manual Data Entry Is Required for Everything', impact: 'High impact', desc: 'If updating the CRM requires a salesperson to manually type in notes, change stages, log calls, and update fields after every interaction, they will do it some of the time — and then less, and then not at all.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Training Covers How, Not Why', impact: 'High impact', desc: 'Most CRM implementations include a training session on how to use the system. Few explain why each part works the way it does. When people do not understand the why, they find shortcuts that break the system.' },
  { icon: 'fa-solid fa-user-slash', title: 'Nobody Owns the CRM After Go-Live', impact: 'Growing risk', desc: 'CRM data decays. Contact details change, deals stall in the wrong stage, and custom fields get used inconsistently. A CRM that is not actively maintained becomes untrustworthy within months.' },
];

const CRM_INCLUDED_CARDS = [
  { icon: 'fa-solid fa-layer-group', title: 'CRM Platform Selection and Strategy', desc: 'We help you identify the right CRM for your business — GoHighLevel, HubSpot, Salesforce, Pipedrive, or another platform — based on your team size, sales process, budget, and existing tools.', img: 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=500&q=80' },
  { icon: 'fa-solid fa-sitemap', title: 'Pipeline Design and Configuration', desc: 'Pipeline stages that match your actual sales process — from first enquiry through to closed deal, onboarding, and retention — with custom fields and stage-change triggers.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80' },
  { icon: 'fa-solid fa-file-import', title: 'Contact and Lead Data Import', desc: 'We clean, format, and import your existing contact and lead data — deduplicating records, filling missing fields, and segmenting contacts into the right lists from day one.', img: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&q=80' },
  { icon: 'fa-solid fa-robot', title: 'Automation of Manual Data Entry', desc: 'Form submissions that create contacts and start pipeline stages automatically, email integrations that log communication, and booking integrations that update deal records.', img: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=500&q=80' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Team Training and Adoption Support', desc: 'Training specific to your setup, your pipeline stages, and your sales process — including the why behind each part of the system so adoption is sustainable.', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80' },
  { icon: 'fa-solid fa-broom', title: 'Ongoing CRM Management and Hygiene', desc: 'Monthly data quality reviews, contact deduplication, pipeline stage audits, automation monitoring, and configuration updates as your business evolves.', img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&q=80' },
];

const CRM_SERVICES = [
  { icon: 'fa-solid fa-layer-group', title: 'CRM Platform Selection and Strategy', desc: 'The right CRM for your team size, sales process, budget, and existing tools — not just the most popular platform on the market.' },
  { icon: 'fa-solid fa-sitemap', title: 'Pipeline Design and Configuration', desc: 'Custom stages, custom fields at each stage, required fields, and stage-change triggers that make the pipeline reflect reality.' },
  { icon: 'fa-solid fa-file-import', title: 'Contact and Lead Data Import', desc: 'Deduplicating records, filling missing fields, standardising formatting, and segmenting contacts from day one.' },
  { icon: 'fa-solid fa-tags', title: 'Custom Field and Segmentation Setup', desc: 'The custom fields, tags, and contact categories your business needs to filter, segment, and report on data meaningfully.' },
  { icon: 'fa-solid fa-robot', title: 'Automation of Manual Data Entry', desc: 'Form submissions, email integrations, stage-change triggers, and booking integrations that eliminate manual CRM work.' },
  { icon: 'fa-solid fa-plug', title: 'CRM and Marketing Tool Integration', desc: 'Your CRM connected to website forms, email platform, ad accounts, and booking system so contact data flows automatically.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Team Training and Adoption Support', desc: 'Training specific to your setup and sales process, including the why behind each part of the system, not a generic walkthrough.' },
  { icon: 'fa-solid fa-broom', title: 'Ongoing CRM Management and Hygiene', desc: 'Monthly data quality reviews, deduplication, pipeline audits, and configuration updates. A managed CRM stays trustworthy.' },
];

const CRM_WHO_FOR = [
  { icon: 'fa-solid fa-table-list', title: 'Businesses still managing leads in spreadsheets', desc: 'Spreadsheets break at scale. Leads get missed, follow-ups are inconsistent, and there is no single view of the pipeline. The transition is significantly smoother with professional setup.', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80' },
  { icon: 'fa-solid fa-ban', title: 'Businesses with a CRM their team does not use', desc: 'If the CRM is there but the team is working around it, the configuration is the problem. We audit what is there, rebuild what is not working, and train the team on the version that fits how they sell.', img: 'https://images.unsplash.com/photo-1568658176307-bfbd2873abda?w=700&q=80' },
  { icon: 'fa-solid fa-truck', title: 'Service businesses managing long sales cycles', desc: 'Professional services, legal, financial, healthcare, real estate — businesses where a relationship might take weeks or months to convert need a CRM that tracks every stage accurately.', img: 'https://images.unsplash.com/photo-1641199788912-9a7385a35c82?w=700&q=80' },
  { icon: 'fa-solid fa-user-plus', title: 'Growing businesses adding salespeople', desc: 'When a second or third salesperson joins, informal lead management breaks. A properly configured CRM gives every team member the same view of every contact.', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80' },
  { icon: 'fa-solid fa-briefcase', title: 'Agencies managing delivery and new business', desc: 'Agencies need to track both the pipeline for new business and the status of existing client relationships — often in the same system, without creating complexity.', img: 'https://images.unsplash.com/photo-1617565817140-53081ee8f047?w=700&q=80' },
  { icon: 'fa-solid fa-right-left', title: 'Businesses migrating from one CRM to another', desc: 'Moving from HubSpot to GoHighLevel, from Salesforce to something simpler, or from any other CRM. We manage the data transfer and verify everything before the old system is decommissioned.', img: 'https://images.unsplash.com/photo-1484383707950-89c8d3276e53?w=700&q=80' },
];

const CRM_WHY_ISM = [
  { icon: 'fa-solid fa-route', title: 'We build around your sales process, not a template', desc: 'Every CRM we configure starts with a discovery session — understanding how your team actually sells and what manual tasks are costing the most time.' },
  { icon: 'fa-solid fa-diagram-project', title: 'GoHighLevel is our primary CRM platform', desc: 'For businesses open to GoHighLevel, we configure the full CRM inside GHL — connected to funnels, automations, and booking. We also work with HubSpot, Salesforce, and Pipedrive.' },
  { icon: 'fa-solid fa-robot', title: 'We eliminate manual data entry from the start', desc: 'A CRM that requires constant manual input will not be used consistently. We automate as much data capture as the platform allows.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'We provide training that drives adoption', desc: 'Training specific to your pipeline stages and workflows, including the why behind each configuration, so the team understands how the system works.' },
  { icon: 'fa-solid fa-broom', title: 'We manage it after go-live', desc: 'Setup without ongoing management produces a CRM that decays. We provide monthly data quality reviews, automation monitoring, and pipeline audits.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no lock-in', desc: 'Ongoing management arrangements are month to month. You stay because the CRM is working, not because you are contractually obligated.' },
];

const CRM_PROCESS = [
  { n: '01', title: 'Discovery and Process Mapping', desc: 'We map your actual sales process — every stage from first enquiry to closed deal and every piece of information your team needs about a contact. This becomes the blueprint for the configuration.' },
  { n: '02', title: 'Platform Selection and Setup', desc: 'We configure the CRM foundation — account setup, user permissions, connected domains, and any third-party connections your business needs before any pipeline is built.' },
  { n: '03', title: 'Pipeline and Field Configuration', desc: 'Pipeline stages, custom fields, contact categories, and tags built to match the sales process map. Every stage has a clear definition and every field serves a purpose.' },
  { n: '04', title: 'Automation Build and Data Import', desc: 'We build the automations that eliminate manual data entry, then import your existing contact and lead data — cleaned, deduplicated, and segmented correctly.' },
  { n: '05', title: 'Training, Launch, and Management', desc: 'We train your team, launch the CRM, and monitor adoption in the first weeks. Ongoing management includes monthly data quality reviews and configuration updates.' },
];

const CRM_FAQS = [
  { q: 'Which CRM platform do you recommend?', a: 'It depends on your business model, team size, and existing tools. For service businesses and agencies that want CRM, automation, funnels, and booking in one place, GoHighLevel is our primary recommendation. For deeper sales reporting, HubSpot is strong. For pure sales pipeline management, Pipedrive is worth considering. We assess your specific situation before recommending a platform.' },
  { q: 'Do we need to move our existing contacts into the new CRM?', a: 'Yes — and we handle the migration. We clean, deduplicate, and format your existing contact data before importing it into the new CRM. Starting with accurate data is critical.' },
  { q: 'What is a sales pipeline and how should it be configured?', a: 'A sales pipeline is the visual representation of your sales process — a series of stages each opportunity moves through from first contact to closed deal. It should match the actual steps your team takes. Most businesses need five to seven pipeline stages.' },
  { q: 'How do we get the team to actually use the CRM?', a: 'Adoption comes from a CRM that is easier to use than not to use, and a team that understands why each part of the system works the way it does. We build with adoption in mind and train the team on the system we built, not a generic walkthrough.' },
  { q: 'Can the CRM integrate with our website and marketing tools?', a: 'Yes. We integrate the CRM with your website forms, email platform, ad tracking, booking system, payment gateway, and any other tools your business uses so contact data flows automatically.' },
  { q: 'What is CRM hygiene and why does it matter?', a: 'CRM hygiene refers to the ongoing maintenance of data quality — removing duplicate contacts, updating stale records, and archiving deals that are no longer active. Poor hygiene produces unreliable reports and erodes trust in the system. We provide monthly hygiene management.' },
  { q: 'How is GoHighLevel different from HubSpot or Salesforce?', a: 'GoHighLevel combines CRM with funnel building, email and SMS automation, appointment booking, and pipeline management in one platform at a price point below HubSpot or Salesforce. For most service businesses, GoHighLevel provides the best value for the level of capability it delivers.' },
  { q: 'Can you help us if we already have a CRM that is not being used properly?', a: 'Yes. We audit the existing setup — pipeline stages, custom fields, automation, data quality, and team adoption — identify what is broken, and rebuild what is not working. Targeted reconfiguration and a fresh training session usually produce significantly better adoption.' },
  { q: 'How long does CRM setup take?', a: 'A standard CRM configuration and launch takes two to three weeks. Migrations from an existing CRM platform take three to four weeks depending on data volume and complexity.' },
  { q: 'What ongoing management do you provide after the CRM is set up?', a: 'Monthly data quality reviews, automation monitoring, pipeline stage audits, contact deduplication, and configuration updates as the business evolves. Ongoing management arrangements are month to month.' },
];

/* ── FAQ 2-COL — matches the Local SEO page layout ── */
function CRMFAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="crm-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <div className="crm-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>CRM Setup</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: '0 0 32px' }}>
              Straight answers to the questions we hear most. No spin, no buzzwords.
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
            {CRM_FAQS.map((faq, i) => (
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
          .crm-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .crm-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function CRMSetupPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="crm-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="crm-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* Left — copy */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  A CRM That Your Team Actually Uses and Your Sales Pipeline Actually{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Trusts.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  We configure, customise, and manage CRM systems for service businesses and agencies — so every lead is tracked, every follow-up happens, and your sales team always knows exactly where every opportunity stands without manual data entry.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Get a Free CRM Audit
                  </a>
                </div>
              </div>

              {/* Right — photo + floating badges */}
              <div className="crm-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://picsum.photos/seed/crmsetuphero/640/720" alt="CRM setup and sales pipeline configuration" style={{ width: '100%', height: 440, objectFit: 'cover', borderRadius: 24, display: 'block', boxShadow: '0 30px 70px rgba(0,35,83,.18)' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-sitemap" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-list-check" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>Built Around Your Sales Process</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>120+ CRMs Configured</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>Pipeline Active</span>
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
              .crm-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .crm-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .crm-hero { padding: 48px 0 64px !important; }
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
                  Most Businesses Are Either Managing Leads in Spreadsheets or in a CRM Nobody Uses.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  One in four small and medium businesses still use spreadsheets to manage their leads and contacts. Of the businesses that have a CRM, 79% of opportunity-related data never gets entered — because the setup created friction, the team was not trained properly, or the system does not match the way the business actually works.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  A CRM that nobody uses is not just a wasted subscription. It creates false confidence — you think leads are being tracked when they are not. Isuremedia configures CRMs that your team actually uses, built around your sales process, not a generic template.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Claim Your Free CRM Audit
                </a>
              </div>
              <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', border: '1px solid var(--color-border)', boxShadow: '0 20px 50px rgba(0,35,83,.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 6px 16px rgba(255,176,0,.35)' }}>
                    <i className="fa-solid fa-list-check" style={{ color: 'var(--color-navy)', fontSize: 15 }} />
                  </div>
                  <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', margin: 0 }}>What we handle for you</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {CRM_BRIDGE_ITEMS.map((item, i) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '13px 0', borderBottom: i === CRM_BRIDGE_ITEMS.length - 1 ? 'none' : '1px solid var(--color-border)' }}>
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

        {/* ══ 04. WHAT IS CRM SETUP AND MANAGEMENT ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="crm-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="crm-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  More Than Installing Software. Building the System Your Sales Process Runs On.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    CRM stands for Customer Relationship Management. In practice, it is the system that tracks every lead, contact, and opportunity your business has, so your team always knows{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>who to follow up with, what was last said, and what happens next</span>.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Setting up a CRM is not just installing software and importing contacts. It means designing the pipeline stages that match your actual sales process, configuring custom fields, and building the automations that eliminate manual data entry.{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>A CRM configured to fit the way your business works gets used</span>. One configured to match a generic template gets ignored.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    CRM management is the ongoing work of keeping the system clean, accurate, and useful as your business changes — updating pipeline stages as your process evolves and maintaining contact data quality.
                  </p>
                </div>
              </div>
              <div className="crm-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                {/* Decorative background rings */}
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                {/* Central gauge */}
                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 335deg, var(--ism-blue-100) 335deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>93</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>Pipeline Health</span>
                  </div>
                </div>

                {/* Floating badge — Data Sync */}
                <div className="crm-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-arrows-rotate" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Data Sync</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>Instant</div>
                  </div>
                </div>

                {/* Floating badge — Follow-Up Rate */}
                <div className="crm-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-envelope-open-text" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Follow-Ups</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Automated</div>
                  </div>
                </div>

                {/* Floating badge — Data Accuracy */}
                <div className="crm-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Data Accuracy</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>High</div>
                  </div>
                </div>

                {/* Floating badge — Adoption */}
                <div className="crm-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-users" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Adoption</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Team-Wide</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .crm-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .crm-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .crm-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .crm-score-badge{ padding:8px 10px !important; gap:7px !important; } .crm-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. WHY IT MATTERS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Every Lead Tracked. Every Follow-Up Automated. Every Deal Visible.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Businesses that implement CRM properly increase lead conversion rates by up to 300%. Companies using CRM are 86% more likely to exceed their sales goals than those without one. The gap between a well-implemented CRM and a poorly implemented one is not the software — it is the configuration.
              </p>
            </div>
            <div className="why-matters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 48 }}>
              {CRM_WHY_MATTERS.map((w, i) => {
                const variant = CRM_CARD_VARIANTS[i % 3];
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
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Get Your CRM Working the Way It Should
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .why-matters-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .why-matters-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. KEY FACTORS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Why Most CRM Implementations Fail.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                91% of businesses with more than ten employees use a CRM. But the majority are underperforming, because the implementation missed one or more of these four things. The problem is almost never the software — it is how it was set up.
              </p>
            </div>
            <div className="crm-factor-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {CRM_KEY_FACTORS.map((f, i) => {
                const hl = i === 0;
                return (
                  <div key={f.title} className={hl ? 'crm-factor-card crm-factor-card-hl' : 'crm-factor-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="crm-factor-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`crm-factor-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="crm-factor-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                        <span className="crm-factor-card-badge" style={{ fontFamily: J, fontSize: 10.5, fontWeight: 700, color: hl ? 'var(--ism-amber)' : 'var(--color-accent-hover)', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'color .25s ease' }}>{f.impact}</span>
                      </div>
                    </div>
                    <p className="crm-factor-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .crm-factor-card:not(.crm-factor-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .crm-factor-card:not(.crm-factor-card-hl):hover .crm-factor-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .crm-factor-card:not(.crm-factor-card-hl):hover .crm-factor-card-icon{ color: #fff !important; }
            .crm-factor-card:not(.crm-factor-card-hl):hover .crm-factor-card-title{ color: #fff !important; }
            .crm-factor-card:not(.crm-factor-card-hl):hover .crm-factor-card-badge{ color: var(--ism-amber) !important; }
            .crm-factor-card:not(.crm-factor-card-hl):hover .crm-factor-card-desc{ color: rgba(255,255,255,.85) !important; }
            .crm-factor-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .crm-factor-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 07. OUR CRM SETUP SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Configuration That Fits Your Business. Management That Keeps It Accurate.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Every engagement starts with discovery — understanding how your team actually sells before a single setting is touched.
              </p>
            </div>
            <p style={{ textAlign: 'center', fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 32 }}>What Isuremedia builds into your CRM</p>
            <div className="crm-included-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {CRM_INCLUDED_CARDS.map(g => (
                <div key={g.title} className="crm-included-card" style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <div style={{ position: 'relative', height: 170, overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.img} alt="" className="crm-included-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '22px 24px 26px' }}>
                    <div className="crm-included-card-icon" style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, transition: 'background .2s ease' }}>
                      <i className={g.icon} style={{ color: 'var(--color-primary)', fontSize: 14 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15.5, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 8, lineHeight: 1.3 }}>{g.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.68, margin: 0 }}>{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .crm-included-card{ transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
            .crm-included-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.12); border-color: transparent; }
            .crm-included-card-img{ transition: transform .4s ease; }
            .crm-included-card:hover .crm-included-card-img{ transform: scale(1.08); }
            .crm-included-card:hover .crm-included-card-icon{ background: var(--ism-amber); }
            .crm-included-card:hover .crm-included-card-icon i{ color: var(--color-navy) !important; }
            @media (max-width:900px){ .crm-included-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .crm-included-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 08. COST OF INACTION ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>A CRM Nobody Trusts Is Worse Than No CRM at All.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  A CRM that nobody uses is not just a wasted subscription. It creates false confidence — you think leads are being tracked when they are not, and you think follow-ups are happening when they are not.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  Somewhere in that gap, customers who should have been closed are calling a competitor who answered first. Of businesses that have a CRM, 79% of opportunity-related data never gets entered — the leak is silent and it compounds every week it goes unfixed.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  These are not platform problems. They are configuration and ownership problems, and they get more expensive to fix the longer a CRM is left to decay unmanaged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 09. OUR CRM SETUP SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our CRM Setup and Management Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Everything Your Sales Process Needs to Run Itself.</p>
            </div>
            <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
              {CRM_SERVICES.map((s, i) => {
                const variant = CRM_CARD_VARIANTS[i % 3];
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Who CRM Setup Is Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If Your Sales Process Depends on Managing Relationships, You Need This.</p>
            </div>
            <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {CRM_WHO_FOR.map(w => (
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
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Find out whether your CRM is tracking leads or just creating the appearance of it.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  A free audit will show you exactly what your current setup is missing.
                </p>
              </div>
              <a href="/contact" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Run My Free CRM Audit <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Businesses Choose Isuremedia for CRM Setup and Management</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Built Around How You Sell. Managed So It Stays Accurate.</p>
            </div>
            <div className="why-ism-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
              {CRM_WHY_ISM.slice(0, 2).map(b => (
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
                {(() => { const b = CRM_WHY_ISM[2]; return (
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
                  <img src="https://picsum.photos/seed/crmwhatmakesdifferent/700/620" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>

                {(() => { const b = CRM_WHY_ISM[3]; return (
                  <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 22px', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                ); })()}
              </div>

              {CRM_WHY_ISM.slice(4, 6).map(b => (
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
        <section className="crm-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                Discovery to Managed CRM in <span style={{ color: 'var(--ism-amber)' }}>Five Structured Steps</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                A standard configuration and launch takes two to three weeks. Migrations take three to four weeks depending on complexity.
              </p>
            </div>
            <div className="crm-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 28, left: '10%', width: '80%', height: 2, background: 'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex: 0 }} />
              {CRM_PROCESS.map((step, i) => (
                <div key={step.n} style={{ textAlign: 'center', padding: '0 16px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: i === 0 ? 'var(--ism-amber)' : 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: `0 4px 18px ${i === 0 ? 'rgba(255,176,0,.40)' : 'rgba(30,77,195,.30)'}`, border: '4px solid #fff' }}>
                    <span style={{ fontFamily: J, fontSize: 18, fontWeight: 900, color: '#fff' }}>{step.n}</span>
                  </div>
                  <div style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 10, lineHeight: 1.3 }}>{step.title}</div>
                  <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: 56 }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 22px rgba(255,176,0,.38)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Get My Free CRM Audit
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .crm-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
              .crm-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 14. FAQ ══════════════════════════════════════════════ */}
        <CRMFAQAccordion />

        {/* ══ 15. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/crm.webp" />
      </main>
      <Footer />
    </>
  );
}
