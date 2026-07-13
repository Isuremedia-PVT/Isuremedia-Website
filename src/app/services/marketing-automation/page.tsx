'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── DATA ─────────────────────────────────────────────────────────────── */

const STATS = [
  { num: '200+', label: 'Automation systems built',  sub: 'Deployed across businesses and agencies' },
  { num: '5×',   label: 'Lead response speed',       sub: 'Average improvement vs. manual follow-up' },
  { num: '40+',  label: 'In-house specialists',      sub: 'GoHighLevel and automation experts only' },
  { num: '24/7', label: 'Your pipeline runs',        sub: 'Even when your team is not online' },
];

const FLOW_STEPS = [
  { label: 'Lead submits form',              time: 'Trigger',   badge: null,   icon: 'fa-file-lines',     color: '#60A5FA' },
  { label: 'SMS sent in 60 seconds',         time: '0:60',      badge: 'AUTO', icon: 'fa-comment-sms',    color: '#34D399' },
  { label: 'Email follow-up in 5 mins',      time: '5:00',      badge: 'AUTO', icon: 'fa-envelope',       color: '#818CF8' },
  { label: 'CRM contact created',            time: '5:01',      badge: 'AUTO', icon: 'fa-user-plus',      color: '#F472B6' },
  { label: 'Booking link sent next morning', time: '+12hr',     badge: 'AUTO', icon: 'fa-calendar-check', color: '#FCD34D' },
  { label: 'Lead books appointment',         time: 'Converted', badge: 'DONE', icon: 'fa-circle-check',   color: '#34D399' },
];

const BEFORE_ROWS = [
  'Leads sit in an inbox until someone manually checks and follows up',
  'Follow-up happens inconsistently — sometimes next day, sometimes never',
  'Team manually books appointments, sends reminders, chases no-shows',
  'Leads not ready to buy today get forgotten and never return',
  'CRM is out of date because nobody has time to update it manually',
  'Revenue lost to faster competitors every single week',
];

const AFTER_ROWS = [
  'Every lead gets a response within minutes, at any hour, any day',
  'Nurture sequences keep every lead warm until they are ready to buy',
  'Booking reminders, confirmations, and no-show follow-ups happen automatically',
  'CRM updates in real time. Every contact, every action, always current',
  'Team only speaks to leads who have been warmed and are ready to talk',
  'Pipeline works even when your team does not',
];

const SERVICES = [
  { icon:'fa-bolt',              title:'GoHighLevel Setup & Automation',       desc:'Complete GHL platform setup, sub-account configuration, funnel builds, and automation workflows. Built from scratch or rebuilt properly from a broken or underperforming existing account.',               cta:'See GoHighLevel Setup Services',      href:'/services/gohighlevel-setup-automation' },
  { icon:'fa-database',          title:'CRM Setup & Management',               desc:'CRM configuration, pipeline design, contact management, tagging, and ongoing CRM hygiene — so your sales team always knows exactly where every lead stands without manual data entry.',                    cta:'See CRM Setup Services',              href:'/services/crm-setup-management' },
  { icon:'fa-code-branch',       title:'Lead Nurture Workflows',               desc:'Multi-step email and SMS nurture sequences that keep every lead engaged from first enquiry through to ready-to-buy, automatically, without anyone on your team managing the sequences manually.',       cta:'See Lead Nurture Services',           href:'/services/lead-nurture-workflows' },
  { icon:'fa-envelope-open-text',title:'Email Marketing Automation',           desc:'Automated email campaigns, drip sequences, and triggered workflows that send the right message to the right person at exactly the right stage of their buyer journey — with no manual sending.',        cta:'See Email Automation Services',       href:'/services/email-marketing-automation' },
  { icon:'fa-calendar-check',    title:'Appointment Booking Systems',          desc:'End-to-end booking automation — scheduling links, confirmation emails, reminder sequences, rescheduling flows, and no-show follow-up — all running without a single manual action from your team.',   cta:'See Booking Automation Services',     href:'/services/appointment-booking-automation' },
  { icon:'fa-chart-line',        title:'Sales Pipeline Automation',            desc:'Automated pipeline stage movement, task creation, deal tracking, and team notifications — so every opportunity is followed up properly and nothing falls through while your team is focused elsewhere.',  cta:'See Pipeline Automation Services',    href:'/services/sales-pipeline-automation' },
  { icon:'fa-comment-sms',       title:'SMS & WhatsApp Automation',            desc:'Instant SMS and WhatsApp sequences triggered by lead actions, bookings, or pipeline changes. Response times no manual process can match — delivered to the channel leads actually check first.',         cta:'See SMS Automation Services',         href:'/services/sms-whatsapp-automation' },
  { icon:'fa-plug',              title:'API Integration Services',             desc:'Connect your CRM, website, booking tools, payment systems, and third-party platforms so data flows automatically between everything — no manual exports, no copy-paste between tools.',                cta:'See API Integration Services',        href:'/services/api-integration' },
  { icon:'fa-chart-bar',         title:'Reporting & Dashboard Automation',     desc:'Automated performance reports and live dashboards showing pipeline health, conversion rates, and campaign results — always current, always available, requiring zero manual compilation from your team.',  cta:'See Dashboard Automation Services',   href:'/services/reporting-dashboard-automation' },
  { icon:'fa-robot',             title:'AI Chatbot & Conversation Automation', desc:'AI-powered chatbots that qualify leads, answer questions, book appointments, and hand off to your sales team when the time is right — available 24/7 with no staffing cost or after-hours blind spots.',  cta:'See AI Chatbot Services',             href:'/services/ai-chatbot-automation', isNew: true },
  { icon:'fa-building-columns',  title:'White-Label GoHighLevel Support',      desc:'All of the above delivered under your agency brand for your clients. Sub-account setups, funnel builds, automations, and ongoing GHL support without any ISM footprint on any deliverable.',          cta:'See White-Label GHL Services',        href:'/white-label/gohighlevel-support', isAgency: true },
];

const PLATFORMS = [
  { name:'GoHighLevel',    role:'Primary CRM and automation platform',    abbr:'GHL', color:'#F59E0B' },
  { name:'HubSpot',        role:'CRM and email workflow automation',       abbr:'HS',  color:'#FF7A59' },
  { name:'Zapier',         role:'App-to-app connection and workflow',      abbr:'ZP',  color:'#FF4A00' },
  { name:'n8n',            role:'Complex multi-step workflow automation',  abbr:'n8n', color:'#EA4B71' },
  { name:'ActiveCampaign', role:'Email and CRM automation sequences',      abbr:'AC',  color:'#356AE6' },
  { name:'Mailchimp',      role:'Email marketing automation',              abbr:'MC',  color:'#007C89' },
  { name:'Klaviyo',        role:'E-commerce email automation',             abbr:'KV',  color:'#06B6D4' },
  { name:'Stripe',         role:'Payment and subscription triggers',       abbr:'ST',  color:'#635BFF' },
  { name:'Calendly',       role:'Appointment and booking automation',      abbr:'CL',  color:'#006BFF' },
  { name:'Twilio',         role:'SMS and WhatsApp delivery',               abbr:'TW',  color:'#F22F46' },
];

const TIMELINE_STEPS = [
  { num:'01', title:'Audit and Discovery',            desc:'We map your current lead journey in detail — where leads come in, what happens immediately after, where they drop off, what your team does manually that takes time, and what is currently being missed. This audit is the foundation everything is built on.' },
  { num:'02', title:'System Design and Architecture', desc:'We design the full automation system before building anything. CRM pipeline structure, trigger logic, sequence timing, branching conditions, and platform integrations are all mapped out and approved before a single workflow gets created. You see the plan before we touch your account.' },
  { num:'03', title:'Build, Test, and Connect',       desc:'Every workflow is built, tested with real data, and connected to your tools before anything goes live. We test every trigger, every branch, and every edge case. We do not push automation live until we are certain it works exactly as designed across every scenario.' },
  { num:'04', title:'Go Live, Monitor, and Optimise', desc:'Your automation system goes live. We watch it closely during the first two weeks, fix anything that does not perform as expected, and refine sequences based on real conversion data. Once it is stable and optimised, it runs with minimal oversight and ongoing improvement as your business grows.' },
];

const BUSINESS_PAINS = [
  'You are losing leads because your follow-up is too slow or too inconsistent',
  'Your team spends too much time on manual tasks that a system could handle automatically',
  'You want your pipeline to keep working after hours, at weekends, and while you are out of office',
  'You are on GoHighLevel but it is not set up properly or not being used to its full potential',
  'You want CRM, email, SMS, booking, and reporting all connected and running as one automated system',
];

const AGENCY_PAINS = [
  'Your clients need GoHighLevel setup or marketing automation and you need a specialist to build it',
  'You want white label GoHighLevel support delivered silently under your brand for client accounts',
  'Your clients are asking about AI chatbots and you need a partner who can actually deliver them',
  'You need clean, documented automation builds that are easy to hand over and explain to clients',
  'You want consistent GoHighLevel quality across multiple client accounts without an in-house GHL specialist',
];

const RESULTS = [
  {
    tag: 'HVAC COMPANY — GOHIGHLEVEL AUTOMATION + BOOKING SYSTEM',
    headline: '340% More Booked Jobs in 90 Days Without More Ad Spend',
    body: 'An HVAC company was running Google Ads and getting leads but converting poorly because follow-up was taking hours. We built a complete GoHighLevel automation system — instant SMS on form submission, booking link sent within 2 minutes, reminder sequences, and a no-show follow-up workflow. Booked jobs tripled within 90 days without changing the ad budget by a penny.',
    metrics: [
      { val: '340%', label: 'More booked jobs' },
      { val: '90',   label: 'Days to achieve it' },
      { val: '0%',   label: 'Increase in ad spend' },
    ],
  },
  {
    tag: 'COACHING BUSINESS — LEAD NURTURE + CRM + AI CHATBOT',
    headline: '72% More Leads Converting to Discovery Calls',
    body: 'A business coach had a large email list but poor conversion to paid programmes. We built a full lead nurture system in GoHighLevel, deployed an AI chatbot to qualify inbound enquiries around the clock, and rebuilt the appointment booking automation. Conversion from lead to booked discovery call improved by 72% within the first 60 days.',
    metrics: [
      { val: '72%',  label: 'More discovery call bookings' },
      { val: '60',   label: 'Days to 72% improvement' },
      { val: '24/7', label: 'AI chatbot coverage' },
    ],
  },
];

const INDUSTRIES = [
  'Home Services & HVAC', 'Coaches & Consultants', 'Law Firms', 'Real Estate & Property',
  'E-Commerce', 'Marketing Agencies', 'Health & Wellness', 'Education & Online Courses',
  'SaaS & Tech', 'Finance & Fintech', 'Automotive', 'Restaurants & Hospitality',
];

const FAQS = [
  { q: 'What is marketing automation and how does it work?',              a: 'Marketing automation is the use of software to automatically perform marketing and sales tasks that would otherwise require manual effort — following up with leads, sending email sequences, updating a CRM, booking appointments, sending reminders, and moving contacts through a pipeline. When a lead takes a specific action (submitting a form, opening an email, reaching a booking page), the system triggers a pre-built sequence of responses instantly, without anyone on your team needing to monitor or intervene.' },
  { q: 'Do I need GoHighLevel for marketing automation?',                 a: 'Not necessarily. GoHighLevel is the platform we build on most frequently because it combines CRM, email, SMS, funnels, booking, and reporting in one place at a price point that makes sense for most businesses. If you are already using HubSpot, ActiveCampaign, or another CRM, we build automation on those platforms too. We recommend GoHighLevel for businesses starting from scratch because it covers the widest range of automation capability without needing multiple separate tools.' },
  { q: 'How quickly can automation improve my lead response time?',       a: 'Immediately. Once the automation system is live, every new lead gets a response within the first minute or two of submitting a form — day or night, weekend or weekday. For most businesses, this alone produces a significant improvement in conversion because speed of response is one of the most impactful variables in lead conversion. Studies consistently show that leads contacted within five minutes are far more likely to convert than those contacted after an hour.' },
  { q: 'How long does it take to set up a marketing automation system?',  a: 'A basic system covering CRM setup, a lead nurture sequence, and booking automation typically takes 2 to 3 weeks from the first call to going live. More complex systems with multiple pipelines, AI chatbots, SMS sequences, API integrations, and multi-channel workflows take 4 to 6 weeks. We give you a clear timeline in the audit call based on exactly what you need — and we never launch anything until it has been properly tested.' },
  { q: 'What is an AI chatbot and can it actually replace a human?',      a: 'An AI chatbot uses artificial intelligence to handle the first stage of a sales conversation — capturing the lead, qualifying their needs, answering common questions, and booking an appointment — automatically and around the clock. For most businesses, it does not fully replace the human sales conversation. It handles the top of the funnel so your team only speaks to prospects who have already been qualified and are ready to talk. This significantly increases the quality of conversations your sales team has without increasing their workload.' },
  { q: 'Can you fix a GoHighLevel account that was already set up badly?', a: 'Yes. This is one of our most common requests. Many businesses have GoHighLevel accounts that were set up by a freelancer or agency, never fully configured, or have workflows that are broken, duplicated, or firing incorrectly. We start with a full account audit, identify what is working and what is not, and then rebuild the system properly. Most audits take one to two business days and come with a clear action plan before any build work starts.' },
  { q: 'What is the difference between email marketing and email marketing automation?', a: 'Email marketing typically refers to sending campaigns manually — a newsletter, a promotion, an announcement that goes to a list at a specific time. Email marketing automation means emails are sent based on triggers and behaviour rather than a manual send. Someone submits a form and gets a welcome sequence. A contact reaches a certain pipeline stage and gets a specific message. A lead has not engaged in 14 days and gets a re-engagement email. The automation version runs continuously without anyone pressing send.' },
  { q: 'Do you offer white label GoHighLevel support for agencies?',       a: 'Yes. We build and manage GoHighLevel setups for agency clients fully under your brand. Sub-account configuration, funnel builds, automation workflows, and ongoing GHL support — all delivered with no ISM branding. Your clients see your agency name on everything. This allows agencies to offer GoHighLevel as part of their service offering without needing an in-house GHL specialist on the payroll.' },
];

const TICKER_ITEMS = [
  'GoHighLevel Setup', 'CRM Automation', 'Lead Nurture Workflows', 'Email Automation',
  'SMS & WhatsApp', 'Booking Systems', 'AI Chatbots', 'Pipeline Automation',
  'API Integrations', 'White-Label GHL',
];

/* ── COMPONENTS ───────────────────────────────────────────────────────── */

function Pill({ text, amber, purple }: { text: string; amber?: boolean; purple?: boolean }) {
  const bg     = purple ? 'rgba(168,85,247,.10)' : amber ? 'rgba(255,176,0,.10)' : 'var(--ism-blue-50)';
  const border = purple ? 'rgba(168,85,247,.30)' : amber ? 'rgba(255,176,0,.30)' : 'var(--ism-blue-100)';
  const dot    = purple ? '#9333EA' : amber ? 'var(--ism-amber)' : 'var(--color-primary)';
  const color  = purple ? '#9333EA' : amber ? 'var(--ism-amber)' : 'var(--color-primary)';
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:bg, border:`1px solid ${border}`, borderRadius:100, padding:'6px 18px', marginBottom:20 }}>
      <span style={{ width:7, height:7, borderRadius:'50%', background:dot, display:'inline-block' }} />
      <span style={{ fontFamily:J, fontSize:12, fontWeight:700, color, letterSpacing:'.09em', textTransform:'uppercase' as const }}>{text}</span>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="ma-section" style={{ padding:'100px 0', background:'#F0F5FF' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div className="ma-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          <div style={{ position:'sticky', top:100 }}>
            <Pill text="FAQ" />
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions we get asked before every automation project.
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Honest answers about GoHighLevel, AI chatbots, timelines, and how automation actually works in practice.
            </p>
            <a href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Book a Free Automation Audit Call →
            </a>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background:'#fff', borderRadius:12, border:`1px solid ${open===i ? 'var(--color-primary)' : 'var(--color-border)'}`, overflow:'hidden', transition:'border-color .2s' }}>
                <button onClick={() => setOpen(open===i ? null : i)}
                  style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 24px', background:'none', border:'none', cursor:'pointer', textAlign:'left', gap:16 }}>
                  <span style={{ fontFamily:J, fontSize:15, fontWeight:700, color:'var(--color-navy)' }}>{faq.q}</span>
                  <i className="fa-solid fa-chevron-down" style={{ fontSize:12, color:'var(--ism-amber)', flexShrink:0, transform: open===i ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform .22s' }} />
                </button>
                {open === i && (
                  <div style={{ padding:'0 24px 20px' }}>
                    <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.78, margin:0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══ PAGE ═════════════════════════════════════════════════════════════════ */
export default function MarketingAutomationPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <section className="ma-hero" style={{ background:'#fff', padding:'80px 0 72px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-10%', right:'-5%', width:600, height:600, background:'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'-10%', left:'-4%', width:400, height:400, background:'radial-gradient(circle,rgba(255,176,0,.04) 0%,transparent 65%)', pointerEvents:'none' }} />

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
            <div className="ma-hero-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }}>

              {/* LEFT */}
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:7, fontFamily:I, fontSize:13, color:'var(--color-text-muted)', marginBottom:20 }}>
                  <a href="/" style={{ color:'var(--color-text-muted)', textDecoration:'none', transition:'color .15s' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='var(--color-primary)')}
                    onMouseLeave={e=>(e.currentTarget.style.color='var(--color-text-muted)')}>Home</a>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize:9, opacity:.5 }} />
                  <a href="/services" style={{ color:'var(--color-text-muted)', textDecoration:'none', transition:'color .15s' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='var(--color-primary)')}
                    onMouseLeave={e=>(e.currentTarget.style.color='var(--color-text-muted)')}>Services</a>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize:9, opacity:.5 }} />
                  <span style={{ color:'var(--color-primary)', fontWeight:600 }}>Marketing Automation</span>
                </div>

                <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:100, background:'rgba(30,77,195,.07)', border:'1px solid rgba(30,77,195,.15)', fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.05em', marginBottom:24 }}>
                  <span style={{ width:8, height:8, borderRadius:'50%', background:'#22C55E', display:'inline-block', boxShadow:'0 0 0 3px rgba(34,197,94,.25)', animation:'ma-pulse 2s infinite' }} />
                  MARKETING AUTOMATION SERVICES
                </div>

                <h1 style={{ fontFamily:J, fontSize:'clamp(26px,2.8vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-1px', lineHeight:1.1, margin:'0 0 20px' }}>
                  Marketing Automation Services That Keep Your Pipeline Full{' '}
                  <span style={{ color:'var(--ism-amber)', position:'relative', display:'inline-block' }}>
                    While You Focus on Running Your Business
                    <svg style={{ position:'absolute', bottom:-4, left:0, width:'100%' }} height="6" viewBox="0 0 380 6" preserveAspectRatio="none">
                      <path d="M2 4 Q95 1 190 4 Q285 7 378 2" stroke="var(--ism-amber)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.78, margin:'0 0 32px', maxWidth:480 }}>
                  We set up the GoHighLevel systems, CRM workflows, lead nurture sequences, and AI-powered automation that follow up with leads, book appointments, and move people through your funnel — automatically, around the clock.
                </p>

                <div style={{ display:'flex', alignItems:'center', gap:12, flexWrap:'wrap', marginBottom:28 }}>
                  <a href="/contact"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
                  >
                    Book a Free Automation Audit Call →
                  </a>
                  <a href="#ma-how"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
                  >
                    See How It Works ↓
                  </a>
                </div>

                <div style={{ display:'flex', alignItems:'center', gap:'6px 16px', flexWrap:'wrap', fontFamily:I, fontSize:13, color:'var(--color-text-muted)' }}>
                  {['GoHighLevel certified setups','In-house automation specialists','AI chatbots and workflows included'].map((b, i) => (
                    <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11 }} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — Automation Flow Visual */}
              <div style={{ position:'relative' }}>
                <div style={{ position:'absolute', top:-18, right:-6, zIndex:10, background:'var(--ism-amber)', borderRadius:12, padding:'10px 16px', boxShadow:'0 8px 28px rgba(255,176,0,.50)' }}>
                  <div style={{ fontFamily:J, fontSize:10, fontWeight:700, color:'var(--color-navy)', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:2 }}>Running</div>
                  <div style={{ fontFamily:J, fontSize:16, fontWeight:900, color:'var(--color-navy)', lineHeight:1 }}>24 / 7</div>
                </div>

                <div style={{ background:'var(--color-navy)', borderRadius:16, overflow:'hidden', boxShadow:'0 32px 80px rgba(30,77,195,.18)', border:'1px solid rgba(0,0,0,.08)' }}>
                  <div style={{ background:'rgba(255,255,255,.06)', padding:'10px 14px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid rgba(255,255,255,.08)' }}>
                    <div style={{ display:'flex', gap:5 }}>
                      {['#FF5F57','#FEBC2E','#28C840'].map(c=><div key={c} style={{ width:11, height:11, borderRadius:'50%', background:c }} />)}
                    </div>
                    <div style={{ flex:1, background:'rgba(255,255,255,.08)', borderRadius:6, padding:'5px 12px', fontFamily:I, fontSize:11, color:'rgba(255,255,255,.45)', border:'1px solid rgba(255,255,255,.1)', textAlign:'left' }}>
                      🔒 ISM Automation Pipeline — Active
                    </div>
                  </div>

                  <div style={{ padding:'20px 20px 16px' }}>
                    {FLOW_STEPS.map((step, i) => (
                      <div key={i} style={{ animationName:'ma-step-in', animationDuration:'.5s', animationTimingFunction:'ease', animationFillMode:'both', animationDelay:`${i * 0.12}s` }}>
                        <div style={{ display:'flex', alignItems:'center', gap:12, padding:'10px 12px', background:'rgba(255,255,255,.05)', borderRadius:10, border:'1px solid rgba(255,255,255,.07)', marginBottom: i < FLOW_STEPS.length - 1 ? 0 : 0 }}>
                          <div style={{ width:32, height:32, borderRadius:8, background:`${step.color}22`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, border:`1px solid ${step.color}44` }}>
                            <i className={`fa-solid ${step.icon}`} style={{ color:step.color, fontSize:13 }} />
                          </div>
                          <div style={{ flex:1, minWidth:0 }}>
                            <div style={{ fontFamily:J, fontSize:12, fontWeight:700, color:'rgba(255,255,255,.88)', lineHeight:1.3, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{step.label}</div>
                            <div style={{ fontFamily:I, fontSize:10, color:'rgba(255,255,255,.35)', marginTop:1 }}>{step.time}</div>
                          </div>
                          {step.badge && (
                            <span style={{
                              padding:'3px 9px', borderRadius:6, fontFamily:J, fontSize:10, fontWeight:800, letterSpacing:'.06em',
                              background: step.badge === 'DONE' ? 'rgba(52,211,153,.18)' : 'rgba(30,77,195,.30)',
                              color: step.badge === 'DONE' ? '#34D399' : '#93C5FD',
                              border: `1px solid ${step.badge === 'DONE' ? 'rgba(52,211,153,.35)' : 'rgba(147,197,253,.25)'}`,
                              flexShrink:0,
                            }}>
                              {step.badge === 'DONE' ? '✓ DONE' : '⚡ AUTO'}
                            </span>
                          )}
                        </div>
                        {i < FLOW_STEPS.length - 1 && (
                          <div style={{ display:'flex', justifyContent:'flex-start', paddingLeft:27, height:14 }}>
                            <div style={{ width:1, height:'100%', background:`linear-gradient(to bottom, ${step.color}60, ${FLOW_STEPS[i+1].color}40)` }} />
                          </div>
                        )}
                      </div>
                    ))}

                    <div style={{ marginTop:14, padding:'10px 14px', background:'rgba(52,211,153,.07)', borderRadius:8, border:'1px solid rgba(52,211,153,.20)', display:'flex', alignItems:'center', gap:8 }}>
                      <i className="fa-solid fa-circle-check" style={{ color:'#34D399', fontSize:13, flexShrink:0 }} />
                      <span style={{ fontFamily:I, fontSize:12, color:'rgba(255,255,255,.65)', lineHeight:1.4 }}>
                        Your team did zero of this. <span style={{ color:'#34D399', fontWeight:700 }}>The system handled it.</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ 2. TICKER ════════════════════════════════════════════════════ */}
        <div style={{ background:'#0A1628', borderBottom:'2px solid var(--ism-amber)', overflow:'hidden', padding:'14px 0' }}>
          <div style={{ display:'flex', animation:'ma-ticker 28s linear infinite', whiteSpace:'nowrap' }}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:12, padding:'0 28px', fontFamily:J, fontSize:13, fontWeight:700, color:'rgba(255,255,255,.75)', letterSpacing:'.06em', textTransform:'uppercase' as const, flexShrink:0 }}>
                <span style={{ color:'var(--ism-amber)', fontSize:16 }}>✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ══ 3. STATS ═════════════════════════════════════════════════════ */}
        <section style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'64px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div className="ma-stats-row" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
              {STATS.map(s => (
                <div key={s.num} style={{ textAlign:'center', padding:'32px 20px', borderRadius:14, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.12)' }}>
                  <div style={{ fontSize:40, fontWeight:900, fontFamily:J, color:'var(--ism-amber)', lineHeight:1 }}>{s.num}</div>
                  <div style={{ marginTop:8, fontSize:14, fontWeight:700, color:'#fff', fontFamily:J, lineHeight:1.4 }}>{s.label}</div>
                  <div style={{ marginTop:6, fontSize:12, color:'rgba(255,255,255,.60)', fontFamily:I, lineHeight:1.5 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 4. WHAT WE SOLVE ═════════════════════════════════════════════ */}
        <section className="ma-section" style={{ background:'var(--color-bg-soft)', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ maxWidth:680, margin:'0 auto', textAlign:'center' }}>
              <Pill text="The Problem We Solve" />
              <h2 style={{ margin:'0 0 24px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,2.8vw,40px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                Every Lead That Does Not Hear Back Within the First Hour Is Probably Gone.
              </h2>
              <p style={{ fontSize:16, lineHeight:1.8, color:'var(--color-text-muted)', fontFamily:I, marginBottom:20 }}>
                Most businesses lose leads not because of bad marketing but because of slow follow-up. The lead came in at 6pm on a Friday. Nobody replied until Monday. By then they had already booked with a competitor who got back to them in five minutes.
              </p>
              <p style={{ fontSize:16, lineHeight:1.8, color:'var(--color-text-muted)', fontFamily:I, marginBottom:52 }}>
                Marketing automation services fix this permanently. Your pipeline follows up instantly, every time, regardless of when the lead comes in or whether your team is watching. You stop losing leads to speed and start converting them with consistency.
              </p>
            </div>
            <div className="ma-callouts" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
              {[
                { icon:'fa-bolt',         title:'Instant response, every time',    desc:'Follow-up fires within minutes of a form submission — at 2am on a Sunday just as reliably as at 9am on a Monday.' },
                { icon:'fa-arrows-rotate',title:'Leads nurtured until ready',     desc:'Most leads are not ready to buy the same day they enquire. Nurture sequences keep you front of mind until they are.' },
                { icon:'fa-user-check',   title:'Your team only touches warm leads', desc:'Automation qualifies and warms leads first. Your team speaks to prospects who are already interested and ready to talk.' },
              ].map(c => (
                <div key={c.title}
                  style={{ padding:'28px 24px', background:'#fff', borderRadius:14, border:'1px solid var(--color-border)', transition:'transform .22s, box-shadow .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 40px rgba(30,77,195,.10)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow=''; }}
                >
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(30,77,195,.1)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16 }}>
                    <i className={`fa-solid ${c.icon}`} style={{ color:'var(--color-primary)', fontSize:20 }} />
                  </div>
                  <h4 style={{ margin:'0 0 8px', fontFamily:J, fontWeight:700, fontSize:15, color:'var(--color-navy)' }}>{c.title}</h4>
                  <p style={{ margin:0, fontSize:13, lineHeight:1.65, color:'var(--color-text-muted)', fontFamily:I }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. BEFORE / AFTER TABLE ══════════════════════════════════════ */}
        <section className="ma-section" style={{ background:'#fff', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:52 }}>
              <Pill text="What Changes When You Automate" />
              <h2 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,2.5vw,40px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                Before and After Marketing Automation
              </h2>
              <p style={{ fontSize:16, color:'var(--color-text-muted)', fontFamily:I, maxWidth:560, margin:'0 auto', lineHeight:1.7 }}>
                This is what the same business looks like with and without a properly built automation system.
              </p>
            </div>

            <div className="ma-ba-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, borderRadius:16, overflow:'hidden', boxShadow:'0 8px 40px rgba(0,0,0,.08)', border:'1px solid var(--color-border)' }}>
              {/* Without */}
              <div style={{ background:'#F8F8F8', padding:'36px 32px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:28, paddingBottom:20, borderBottom:'1px solid rgba(0,0,0,.08)' }}>
                  <div style={{ width:36, height:36, borderRadius:8, background:'rgba(239,68,68,.1)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <i className="fa-solid fa-xmark" style={{ color:'#EF4444', fontSize:16, fontWeight:900 }} />
                  </div>
                  <h3 style={{ margin:0, fontFamily:J, fontWeight:900, fontSize:17, color:'#6B7280' }}>Without Marketing Automation</h3>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  {BEFORE_ROWS.map((row, i) => (
                    <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                      <div style={{ width:22, height:22, borderRadius:'50%', background:'rgba(239,68,68,.12)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                        <i className="fa-solid fa-xmark" style={{ color:'#EF4444', fontSize:10 }} />
                      </div>
                      <p style={{ margin:0, fontFamily:I, fontSize:14, color:'#6B7280', lineHeight:1.6 }}>{row}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* With ISM */}
              <div style={{ background:'#EEF5FF', padding:'36px 32px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:28, paddingBottom:20, borderBottom:'1px solid rgba(30,77,195,.12)' }}>
                  <div style={{ width:36, height:36, borderRadius:8, background:'rgba(34,197,94,.15)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <i className="fa-solid fa-check" style={{ color:'#16A34A', fontSize:16, fontWeight:900 }} />
                  </div>
                  <h3 style={{ margin:0, fontFamily:J, fontWeight:900, fontSize:17, color:'var(--color-navy)' }}>With ISM Marketing Automation</h3>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  {AFTER_ROWS.map((row, i) => (
                    <div key={i} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                      <div style={{ width:22, height:22, borderRadius:'50%', background:'rgba(34,197,94,.18)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                        <i className="fa-solid fa-check" style={{ color:'#16A34A', fontSize:10 }} />
                      </div>
                      <p style={{ margin:0, fontFamily:I, fontSize:14, color:'var(--color-navy)', lineHeight:1.6, fontWeight:500 }}>{row}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. SERVICES GRID ═════════════════════════════════════════════ */}
        <section id="ma-services" className="ma-section" style={{ background:'var(--color-bg-soft)', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Our Marketing Automation Services" />
              <h2 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,2.5vw,40px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                Every Automation Service You Need. One In-House Team to Build All of It.
              </h2>
              <p style={{ fontSize:16, color:'var(--color-text-muted)', fontFamily:I, maxWidth:640, margin:'0 auto', lineHeight:1.7 }}>
                From GoHighLevel setup and CRM configuration to AI chatbots and SMS sequences — we build the full automation stack your business needs.
              </p>
            </div>
            <div className="ma-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {SERVICES.map(svc => (
                <div key={svc.title}
                  style={{ position:'relative', padding:'28px 24px', background:'#fff', borderRadius:14, border:'1px solid var(--color-border)', borderLeft:'3px solid var(--color-primary)', boxShadow:'0 2px 12px rgba(0,0,0,.04)', transition:'transform .22s, box-shadow .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 40px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow='0 2px 12px rgba(0,0,0,.04)'; }}
                >
                  {svc.isNew && (
                    <div style={{ position:'absolute', top:16, right:16 }}>
                      <Pill text="New" purple />
                    </div>
                  )}
                  {svc.isAgency && (
                    <div style={{ position:'absolute', top:16, right:16 }}>
                      <Pill text="Agency" amber />
                    </div>
                  )}
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(30,77,195,.1)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16 }}>
                    <i className={`fa-solid ${svc.icon}`} style={{ color:'var(--color-primary)', fontSize:20 }} />
                  </div>
                  <h3 style={{ margin:'0 0 10px', fontFamily:J, fontWeight:700, fontSize:16, color:'var(--color-navy)', lineHeight:1.3 }}>{svc.title}</h3>
                  <p style={{ margin:'0 0 20px', fontSize:13, lineHeight:1.7, color:'var(--color-text-muted)', fontFamily:I }}>{svc.desc}</p>
                  <a href={svc.href} style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:13, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', fontFamily:J }}>
                    {svc.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. PLATFORMS ═════════════════════════════════════════════════ */}
        <section className="ma-section" style={{ background:'#fff', padding:'80px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:48 }}>
              <Pill text="Platforms We Build Automation On" />
              <h3 style={{ margin:'0', fontFamily:J, fontWeight:900, fontSize:'clamp(22px,2.2vw,36px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                We Build and Integrate Automation Across Every Major Platform
              </h3>
            </div>
            <div className="ma-platforms-grid" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:16 }}>
              {PLATFORMS.map(p => (
                <div key={p.name}
                  style={{ padding:'20px 16px', background:'var(--color-bg-soft)', borderRadius:12, border:'1px solid var(--color-border)', textAlign:'center', transition:'transform .22s, box-shadow .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 12px 32px rgba(30,77,195,.10)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow=''; }}
                >
                  <div style={{ width:44, height:44, borderRadius:10, background:p.color, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 12px', flexShrink:0 }}>
                    <span style={{ fontFamily:J, fontSize:12, fontWeight:900, color:'#fff', letterSpacing:'-.5px' }}>{p.abbr}</span>
                  </div>
                  <div style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', marginBottom:4 }}>{p.name}</div>
                  <div style={{ fontFamily:I, fontSize:11, color:'var(--color-text-muted)', lineHeight:1.4 }}>{p.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 8. PROCESS ═══════════════════════════════════════════════════ */}
        <section id="ma-how" className="ma-section" style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="How We Build Your Automation System" amber />
              <h2 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,2.5vw,40px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'#fff' }}>
                From Your First Call to a Pipeline That Runs Itself
              </h2>
              <p style={{ fontSize:16, color:'rgba(255,255,255,.70)', fontFamily:I, maxWidth:560, margin:'0 auto' }}>
                Four steps. Built for your specific business, not a generic template someone copied from a tutorial.
              </p>
            </div>
            <div className="ma-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
              {TIMELINE_STEPS.map((step, i) => (
                <div key={step.num}
                  style={{ position:'relative', padding:'32px 24px', background:'rgba(255,255,255,.07)', borderRadius:14, border:'1px solid rgba(255,255,255,.12)', transition:'transform .22s, background .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.background='rgba(255,255,255,.11)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.background='rgba(255,255,255,.07)'; }}
                >
                  {i < TIMELINE_STEPS.length - 1 && (
                    <div className="ma-step-arrow" style={{ position:'absolute', top:40, right:-13, zIndex:2 }}>
                      <i className="fa-solid fa-chevron-right" style={{ color:'var(--ism-amber)', fontSize:14 }} />
                    </div>
                  )}
                  <div style={{ fontFamily:J, fontSize:32, fontWeight:900, color:'var(--ism-amber)', lineHeight:1, marginBottom:16 }}>{step.num}</div>
                  <h4 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:700, fontSize:15, color:'#fff', lineHeight:1.3 }}>{step.title}</h4>
                  <p style={{ margin:0, fontSize:13, lineHeight:1.65, color:'rgba(255,255,255,.68)', fontFamily:I }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign:'center', marginTop:52 }}>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.72)', fontFamily:I, maxWidth:600, margin:'0 auto 24px', lineHeight:1.7 }}>
                Book a Free Automation Audit — We will map your current lead journey and show you exactly where automation would make the biggest difference.
              </p>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', background:'var(--ism-amber)', color:'var(--color-navy)', borderRadius:8, fontFamily:J, fontWeight:700, fontSize:14, textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
              >
                Book a Free Automation Audit Call →
              </a>
            </div>
          </div>
        </section>

        {/* ══ 9. WHO THIS IS FOR ═══════════════════════════════════════════ */}
        <section className="ma-section" style={{ background:'var(--ism-blue-50,#F0F5FF)', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:48 }}>
              <Pill text="Who We Build Automation For" />
              <h2 style={{ margin:'0', fontFamily:J, fontWeight:900, fontSize:'clamp(24px,2.5vw,38px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                Whether You Run a Business or an Agency, We Have Built This Before.
              </h2>
            </div>
            <div className="ma-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
              {/* Businesses */}
              <div style={{ padding:'40px 36px', background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', boxShadow:'0 4px 20px rgba(0,0,0,.05)', transition:'transform .22s, box-shadow .22s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 40px rgba(30,77,195,.10)'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow='0 4px 20px rgba(0,0,0,.05)'; }}
              >
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(30,77,195,.1)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <i className="fa-solid fa-building" style={{ color:'var(--color-primary)', fontSize:20 }} />
                  </div>
                  <h3 style={{ margin:0, fontFamily:J, fontWeight:900, fontSize:18, color:'var(--color-navy)' }}>For Businesses</h3>
                </div>
                <ul style={{ margin:'0 0 28px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:12 }}>
                  {BUSINESS_PAINS.map(item => (
                    <li key={item} style={{ display:'flex', gap:10, fontSize:14, color:'var(--color-text-muted)', fontFamily:I, lineHeight:1.6 }}>
                      <i className="fa-solid fa-circle-check" style={{ color:'var(--color-primary)', flexShrink:0, marginTop:3, fontSize:13 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'13px 22px', background:'var(--color-primary)', color:'#fff', borderRadius:8, fontFamily:J, fontWeight:700, fontSize:13, textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', transition:'all .18s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='#1840A0'; (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.transform=''; }}
                >
                  Book a Free Automation Audit for Businesses →
                </a>
              </div>

              {/* Agencies */}
              <div style={{ padding:'40px 36px', background:'var(--color-navy)', borderRadius:16, border:'1px solid rgba(255,255,255,.06)', boxShadow:'0 4px 24px rgba(0,0,0,.14)', transition:'transform .22s, box-shadow .22s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 20px 50px rgba(0,0,0,.22)'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow='0 4px 24px rgba(0,0,0,.14)'; }}
              >
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(255,176,0,.15)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <i className="fa-solid fa-briefcase" style={{ color:'var(--ism-amber)', fontSize:20 }} />
                  </div>
                  <h3 style={{ margin:0, fontFamily:J, fontWeight:900, fontSize:18, color:'#fff' }}>For Agencies</h3>
                </div>
                <ul style={{ margin:'0 0 28px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:12 }}>
                  {AGENCY_PAINS.map(item => (
                    <li key={item} style={{ display:'flex', gap:10, fontSize:14, color:'rgba(255,255,255,.78)', fontFamily:I, lineHeight:1.6 }}>
                      <i className="fa-solid fa-circle-check" style={{ color:'var(--ism-amber)', flexShrink:0, marginTop:3, fontSize:13 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'13px 22px', background:'var(--ism-amber)', color:'var(--color-navy)', borderRadius:8, fontFamily:J, fontWeight:700, fontSize:13, textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', transition:'all .18s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.opacity='.88'; (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.opacity='1'; (e.currentTarget as HTMLAnchorElement).style.transform=''; }}
                >
                  Book a Free Call for Agencies →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 10. RESULTS ══════════════════════════════════════════════════ */}
        <section className="ma-section" style={{ background:'#fff', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Real Results" />
              <h2 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:900, fontSize:'clamp(24px,2.5vw,38px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                What Happens When Your Pipeline Stops Relying on Manual Follow-Up
              </h2>
              <p style={{ fontSize:16, color:'var(--color-text-muted)', fontFamily:I, maxWidth:560, margin:'0 auto', lineHeight:1.7 }}>
                Real outcomes from automation systems our in-house team built and deployed.
              </p>
            </div>
            <div className="ma-results-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:28 }}>
              {RESULTS.map(r => (
                <div key={r.headline}
                  style={{ padding:'36px 32px', background:'var(--color-bg-soft)', borderRadius:16, border:'1px solid rgba(30,77,195,.1)', transition:'transform .22s, box-shadow .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 40px rgba(30,77,195,.10)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow=''; }}
                >
                  <span style={{ display:'inline-block', fontSize:10, fontWeight:700, letterSpacing:'.1em', color:'var(--color-primary)', textTransform:'uppercase', fontFamily:I, marginBottom:16 }}>{r.tag}</span>
                  <h3 style={{ margin:'0 0 16px', fontFamily:J, fontWeight:900, fontSize:'clamp(20px,1.8vw,28px)', color:'var(--color-navy)', lineHeight:1.2, letterSpacing:'-0.3px' }}>{r.headline}</h3>
                  <p style={{ margin:'0 0 24px', fontSize:14, lineHeight:1.75, color:'var(--color-text-muted)', fontFamily:I }}>{r.body}</p>
                  <div style={{ display:'flex', gap:20, borderTop:'1px solid rgba(30,77,195,.1)', paddingTop:20, marginBottom:20 }}>
                    {r.metrics.map(m => (
                      <div key={m.label} style={{ flex:1 }}>
                        <div style={{ fontFamily:J, fontWeight:900, fontSize:22, color:'var(--color-primary)' }}>{m.val}</div>
                        <div style={{ fontSize:11, color:'var(--color-text-muted)', fontFamily:I, marginTop:2, lineHeight:1.4 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <a href="#" style={{ fontSize:13, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', fontFamily:J }}>Read Full Case Study →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 11. INDUSTRIES ═══════════════════════════════════════════════ */}
        <section className="ma-section" style={{ background:'var(--color-bg-soft)', padding:'80px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <Pill text="Industries We Serve" />
            <h2 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:900, fontSize:'clamp(22px,2.2vw,36px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
              We Have Built Automation Systems Across These Industries.
            </h2>
            <p style={{ fontSize:15, color:'var(--color-text-muted)', fontFamily:I, maxWidth:640, margin:'0 auto 36px', lineHeight:1.7 }}>
              An HVAC company needs same-day booking automation. A law firm needs a 30-day nurture sequence. An e-commerce brand needs cart abandonment flows. We build for the specifics, not a template.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center', marginBottom:28 }}>
              {INDUSTRIES.map(ind => (
                <span key={ind}
                  style={{ padding:'8px 20px', background:'#fff', border:'1px solid var(--color-border)', borderRadius:100, fontSize:13, color:'var(--color-navy)', fontFamily:I, fontWeight:600, cursor:'pointer', transition:'all .18s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLSpanElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLSpanElement).style.color='#fff'; (e.currentTarget as HTMLSpanElement).style.borderColor='var(--color-primary)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLSpanElement).style.background='#fff'; (e.currentTarget as HTMLSpanElement).style.color='var(--color-navy)'; (e.currentTarget as HTMLSpanElement).style.borderColor='var(--color-border)'; }}
                >{ind}</span>
              ))}
            </div>
            <p style={{ fontSize:14, color:'var(--color-text-muted)', fontFamily:I }}>
              Not on this list?{' '}
              <a href="/contact" style={{ color:'var(--color-primary)', fontWeight:700, textDecoration:'none' }}>Book a call — if your business generates leads, we can almost certainly build automation for it. →</a>
            </p>
          </div>
        </section>

        {/* ══ 12. FAQ ══════════════════════════════════════════════════════ */}
        <FAQSection />

        {/* ══ 13. BOTTOM CTA ═══════════════════════════════════════════════ */}
        <section className="ma-section" style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'100px 0', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:800, height:800, background:'radial-gradient(circle,rgba(255,255,255,.04) 0%,transparent 60%)', pointerEvents:'none' }} />
          <div style={{ maxWidth:800, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>
            <h2 style={{ margin:'0 0 16px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,3vw,44px)', color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px' }}>
              Ready to Build a Pipeline That Works While You Sleep?
            </h2>
            <p style={{ fontSize:16, color:'rgba(255,255,255,.72)', fontFamily:I, margin:'0 auto 36px', maxWidth:560, lineHeight:1.75 }}>
              Book a free 30-minute automation audit call. We will review your current lead follow-up process, identify where leads are falling through, and show you exactly what an automation system would look like for your specific business.
            </p>
            <a href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 32px', background:'var(--ism-amber)', color:'var(--color-navy)', borderRadius:8, fontFamily:J, fontWeight:800, fontSize:15, textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 8px 28px rgba(255,176,0,.45)', transition:'all .18s' }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 14px 36px rgba(255,176,0,.60)'; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 8px 28px rgba(255,176,0,.45)'; }}
            >
              Book a Free Automation Audit Call →
            </a>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'10px 28px', justifyContent:'center', marginTop:32 }}>
              {['No contract required','GoHighLevel certified team','AI chatbots and workflows included','White-label ready for agencies'].map(b => (
                <span key={b} style={{ display:'flex', alignItems:'center', gap:6, fontSize:13, color:'rgba(255,255,255,.60)', fontFamily:I }}>
                  <i className="fa-solid fa-circle-check" style={{ color:'var(--ism-amber)', fontSize:11 }} />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        @keyframes ma-pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.25); }
          50%      { box-shadow: 0 0 0 7px rgba(34,197,94,.08); }
        }
        @keyframes ma-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ma-step-in {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 640px) {
          .ma-hero    { padding: 56px 0 44px !important; }
          .ma-section { padding-top: 60px !important; padding-bottom: 60px !important; }
        }
        @media (max-width: 900px) {
          .ma-hero-grid      { grid-template-columns: 1fr !important; gap: 40px !important; }
          .ma-stats-row      { grid-template-columns: 1fr 1fr !important; }
          .ma-callouts       { grid-template-columns: 1fr 1fr !important; }
          .ma-ba-grid        { grid-template-columns: 1fr !important; }
          .ma-svc-grid       { grid-template-columns: 1fr 1fr !important; }
          .ma-platforms-grid { grid-template-columns: repeat(3,1fr) !important; }
          .ma-timeline       { grid-template-columns: 1fr 1fr !important; }
          .ma-split          { grid-template-columns: 1fr !important; }
          .ma-results-grid   { grid-template-columns: 1fr !important; }
          .ma-faq-grid       { grid-template-columns: 1fr !important; }
          .ma-step-arrow     { display: none !important; }
        }
        @media (max-width: 600px) {
          .ma-svc-grid       { grid-template-columns: 1fr !important; }
          .ma-callouts       { grid-template-columns: 1fr !important; }
          .ma-timeline       { grid-template-columns: 1fr !important; }
          .ma-platforms-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  );
}
