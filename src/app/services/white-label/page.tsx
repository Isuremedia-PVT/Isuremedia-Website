'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── DATA ─────────────────────────────────────────────────────────────── */

const STATS = [
  { num: '38+',  label: 'Agency Partners',       sub: 'Trusting ISM as their silent white label delivery team' },
  { num: '10',   label: 'White Label Services',   sub: 'SEO, PPC, web, content, design, GHL, and more' },
  { num: '40+',  label: 'In-House Specialists',   sub: 'We do not outsource either. Everything stays in-house.' },
  { num: 'Zero', label: 'Direct Client Contact',  sub: 'We never reach out to your clients. Ever. Guaranteed.' },
];

const COMPARISON_ROWS = [
  { factor: 'Speed to start',        fl: 'Slow. Sourcing and briefing takes weeks.',              ih: 'Very slow. Recruiting takes 2–3 months.',          ism: 'Fast. Onboarded in days, not weeks.',                          flBad: true,  ihBad: true  },
  { factor: 'Quality consistency',   fl: 'Variable. Different freelancers, different standards.', ih: 'Consistent once trained and settled in.',          ism: 'Consistent. Same team, same process, every delivery.',        flBad: true,  ihBad: false },
  { factor: 'Brand confidentiality', fl: 'Risky. Freelancers often work with competing clients.', ih: 'Safe. Internal team, no outside exposure.',        ism: 'Guaranteed. Zero ISM branding on any deliverable.',           flBad: true,  ihBad: false },
  { factor: 'Service range',         fl: 'Narrow. Each freelancer covers one specialism.',        ih: 'Limited by who you can afford to hire.',           ism: 'Full stack. SEO, PPC, web, content, design, GoHighLevel.',    flBad: true,  ihBad: true  },
  { factor: 'Cost model',            fl: 'Low per task, high in management time and overhead.',   ih: 'High. Salary, benefits, tools, and training.',     ism: 'Predictable per deliverable. Pay for what you need.',         flBad: true,  ihBad: true  },
  { factor: 'Scalability',           fl: 'Hard. More freelancers means more coordination.',       ih: 'Slow. Every hire adds months of runway cost.',     ism: 'Instant. Scale up or down based on your client load.',        flBad: true,  ihBad: true  },
  { factor: 'Accountability',        fl: 'Shared. Handoffs break. Nobody owns the outcome.',      ih: 'Clear. One team, one owner.',                      ism: 'Clear. One account manager. You always know where things stand.', flBad: true, ihBad: false },
];

const SERVICES = [
  { num:'01', icon:'fa-magnifying-glass', title:'White-Label SEO',                    desc:'Full-service SEO delivered silently under your brand — audits, technical fixes, on-page optimisation, link building, and branded monthly reports.',               href:'/services/white-label/seo' },
  { num:'02', icon:'fa-chart-bar',        title:'White-Label PPC',                    desc:'Google Ads, Meta Ads, and paid social campaigns managed and reported under your brand. Your clients see your agency on every report and every dashboard.',          href:'/services/white-label/ppc' },
  { num:'03', icon:'fa-hashtag',          title:'White-Label Social Media',           desc:'Organic and paid social — content calendars, creative assets, scheduling, and performance reporting delivered under your brand for every client account.',          href:'/services/white-label/social-media-marketing' },
  { num:'04', icon:'fa-code',             title:'White-Label Web Development',        desc:'Website builds, landing pages, redesigns, and migrations delivered silently under your agency label. Your clients never know ISM touched their site.',              href:'/services/white-label/web-development' },
  { num:'05', icon:'fa-bolt',             title:'White-Label GoHighLevel Support',    desc:'GHL sub-account setup, funnel builds, automation workflows, CRM configuration, and ongoing support delivered without a word about ISM to your clients.',           href:'/services/white-label/gohighlevel-support' },
  { num:'06', icon:'fa-file-lines',       title:'White-Label Content Marketing',      desc:'Blog writing, website copy, and content calendars for your clients — delivered white-labeled, on brief, and on time. Content that builds authority under your brand.',href:'/services/white-label/content-marketing' },
  { num:'07', icon:'fa-link',             title:'White-Label Link Building',          desc:'White-hat outreach-based link acquisition delivered silently under your brand. Real editorial placements on real sites. No PBNs. No spam.',                        href:'/services/white-label/link-building' },
  { num:'08', icon:'fa-palette',          title:'White-Label Graphic Design',         desc:'On-demand design production for your client accounts — social creatives, ad assets, brand collateral, and presentations with zero ISM branding.',                  href:'/services/white-label/graphic-design' },
  { num:'09', icon:'fa-users',            title:'Dedicated Agency Pods',              desc:'A fully dedicated team of specialists assigned to your agency for consistent monthly capacity across multiple client accounts — without the overhead of hiring.',    href:'/services/white-label/dedicated-agency-pods' },
  { num:'10', icon:'fa-chart-line',       title:'White-Label Reporting & Dashboards', desc:'Branded client performance dashboards and monthly reports delivered under your agency name. Your clients log into your branded portal and see your name throughout.',href:'/services/white-label/reporting-dashboards' },
];

const TIMELINE_STEPS = [
  { num:1, title:'Onboarding and Setup',           desc:'You brief us on your agency\'s process, templates, preferred communication style, and client reporting format. We set up your white label account, branded templates, and assign your dedicated account manager. One to two days, not weeks.' },
  { num:2, title:'You Win the Client, We Brief In', desc:'When a client comes on board, you pass the brief through our agreed process. We ask only what we need to deliver properly. You manage the client relationship entirely. We never reach out to your clients. Your email, your phone, your voice — always.' },
  { num:3, title:'We Deliver Under Your Brand',    desc:'Work is completed to agreed timelines and handed back in your branded format. Reports have your logo. Files have no ISM footprint. You review and submit to your client as if your team built every part of it. Because as far as your client is concerned, you did.' },
  { num:4, title:'Review, Scale, and Repeat',      desc:'Monthly check-ins with your account manager to review what is working and plan ahead. Add new services or new clients at any time. Scale down if your load changes. No long contracts forcing you to pay for capacity you are not using.' },
];

const GUARANTEES = [
  { icon:'fa-user-slash',     title:'No client contact',     desc:'We never reach out to your clients directly. Your client relationships are yours. Full stop. We sign NDAs if required.' },
  { icon:'fa-eye-slash',      title:'No ISM branding',       desc:'Nothing we deliver has our name on it unless you explicitly want it. Every report, dashboard, and file carries your brand.' },
  { icon:'fa-clock',          title:'Agreed timelines',      desc:'We agree deadlines before work starts. If something changes, your account manager tells you before it becomes your problem.' },
  { icon:'fa-chart-simple',   title:'Transparent reporting', desc:'You see exactly what was done and what results it produced. Nothing vague. Nothing hidden behind jargon or vanity metrics.' },
];

const RESULTS = [
  {
    industry: 'UK Digital Agency',
    badge: 'White Label SEO + PPC',
    metric: '12→31',
    metricLabel: 'Active clients in 8 months',
    period: 'Zero new hires',
    desc: 'A UK-based digital agency was capped at 12 clients because their team could not take on more SEO and PPC work without quality dropping. With ISM as their white label partner, they scaled to 31 active clients in 8 months while maintaining client satisfaction scores above 90%.',
  },
  {
    industry: 'US Solo Consultant',
    badge: 'Full White Label Suite',
    metric: '6-fig',
    metricLabel: 'Agency revenue in 12 months',
    period: 'Team of one throughout',
    desc: 'A solo marketing consultant was winning clients who needed full-service delivery. Using ISM white label — SEO, PPC, web development, and content — they took on projects at full agency scale while staying a team of one. Revenue crossed six figures within 12 months of the partnership starting.',
  },
];

const AGENCY_TYPES = [
  'Full-Service Digital Agencies', 'SEO Agencies', 'PPC and Paid Media Agencies',
  'Web Design and Dev Agencies', 'Social Media Agencies', 'Content Marketing Agencies',
  'Branding and Creative Agencies', 'Freelancers Scaling to Agency', 'Marketing Consultants',
  'PR Agencies Adding Digital', 'IT and Tech Companies', 'Business Growth Consultancies',
];

const FAQS = [
  { q:'Will my clients ever find out that ISM is doing the work?', a:'No. We operate completely silently. Every deliverable carries your agency branding. We never reach out to your clients, never mention ISM in any deliverable, and never do anything that could reveal the existence of the partnership. We sign NDAs before any work begins if you require it. Your client sees only your agency throughout the entire engagement.' },
  { q:'What white label digital marketing services do you offer?', a:'We offer ten white label services: SEO, PPC, social media marketing, web development, GoHighLevel support, content marketing, link building, graphic design, dedicated agency pods, and branded client reporting and dashboards. You can use one service or all ten. Each can be scaled independently based on your client load.' },
  { q:'How does the briefing and handover process work?', a:'During onboarding we set up branded templates and a briefing process that fits how your agency already works. When you have a new client or project, you send us a brief using the agreed format. We ask only what we need to deliver properly, complete the work to agreed timelines, and hand it back in your branded format ready to submit to your client.' },
  { q:'Do you offer dedicated agency pods for consistent capacity?', a:'Yes. Dedicated pods give you a fixed team assigned exclusively to your accounts. The same specialists work on your clients every month, meaning they learn your standards, your clients, and your preferred way of working. Ideal for agencies with high-volume consistent workloads where you need the same quality month to month.' },
  { q:'Can I start with just one service for one client?', a:'Yes. There is no minimum volume. Many agencies start by white labeling a single service for a single client to experience the process before scaling. Start with white label SEO for one client, see how the delivery and reporting works, then add PPC for another client next month. The model is designed to start small and scale at your pace.' },
  { q:'What is the difference between white label and digital marketing reseller services?', a:'White label means we produce the work and you present it as your own agency output — your clients see only your brand throughout. ISM operates as white label only. Nothing we deliver has our branding unless you specifically request it. If you prefer a reseller arrangement where ISM branding is used, that can be discussed separately.' },
  { q:'How does white label reporting and branded dashboards work?', a:'We produce monthly performance reports using your agency\'s name, logo, and colour scheme. For live dashboards, we set up reporting portals under your agency\'s domain or subdomain. Your clients log in and see your brand throughout — rankings and traffic for SEO, ROAS and CPL for PPC.' },
  { q:'How quickly can we start?', a:'Most white label partnerships are ready to start within 3 to 5 business days of the initial call. Onboarding covers your agency\'s process, templates, reporting preferences, and communication style. Once done, the first client briefs can come in immediately. There is no long setup process or complex integration required on your end.' },
];

/* ── COMPONENTS ───────────────────────────────────────────────────────── */

function Pill({ text, amber }: { text: string; amber?: boolean }) {
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:8, background: amber ? 'rgba(255,176,0,.10)' : 'var(--ism-blue-50)', border:`1px solid ${amber ? 'rgba(255,176,0,.30)' : 'var(--ism-blue-100)'}`, borderRadius:100, padding:'6px 18px', marginBottom:20 }}>
      <span style={{ width:7, height:7, borderRadius:'50%', background: amber ? 'var(--ism-amber)' : 'var(--color-primary)', display:'inline-block' }} />
      <span style={{ fontFamily:J, fontSize:12, fontWeight:700, color: amber ? 'var(--ism-amber)' : 'var(--color-primary)', letterSpacing:'.09em', textTransform:'uppercase' as const }}>{text}</span>
    </div>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="wl-section" style={{ padding:'100px 0', background:'#F0F5FF' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div className="wl-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          {/* Left sticky */}
          <div style={{ position:'sticky', top:100 }}>
            <Pill text="FAQ" />
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions agencies ask before starting a white label partnership.
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Honest answers about confidentiality, delivery, pricing, and how the partnership actually works.
            </p>
            <a href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Scale My Agency — Book a Call →
            </a>
          </div>
          {/* Right accordion */}
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
export default function WhiteLabelPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <section className="wl-hero" style={{ background:'#fff', padding:'80px 0 72px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-10%', right:'-5%', width:600, height:600, background:'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'-10%', left:'-4%', width:400, height:400, background:'radial-gradient(circle,rgba(255,176,0,.04) 0%,transparent 65%)', pointerEvents:'none' }} />

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
            <div className="wl-hero-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }}>

              {/* LEFT */}
              <div>
                {/* Breadcrumb */}
                <div style={{ display:'flex', alignItems:'center', gap:7, fontFamily:I, fontSize:13, color:'var(--color-text-muted)', marginBottom:20 }}>
                  <a href="/" style={{ color:'var(--color-text-muted)', textDecoration:'none', transition:'color .15s' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='var(--color-primary)')}
                    onMouseLeave={e=>(e.currentTarget.style.color='var(--color-text-muted)')}>Home</a>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize:9, opacity:.5 }} />
                  <a href="/services" style={{ color:'var(--color-text-muted)', textDecoration:'none', transition:'color .15s' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='var(--color-primary)')}
                    onMouseLeave={e=>(e.currentTarget.style.color='var(--color-text-muted)')}>Services</a>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize:9, opacity:.5 }} />
                  <span style={{ color:'var(--color-primary)', fontWeight:600 }}>White Label</span>
                </div>

                {/* Label pill with pulse */}
                <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:100, background:'rgba(30,77,195,.07)', border:'1px solid rgba(30,77,195,.15)', fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.05em', marginBottom:24 }}>
                  <span style={{ width:8, height:8, borderRadius:'50%', background:'#22C55E', display:'inline-block', boxShadow:'0 0 0 3px rgba(34,197,94,.25)', animation:'wl-pulse 2s infinite' }} />
                  WHITE LABEL DIGITAL MARKETING SERVICES
                </div>

                <h1 style={{ fontFamily:J, fontSize:'clamp(26px,2.8vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-1px', lineHeight:1.1, margin:'0 0 20px' }}>
                  White Label Digital Marketing for Agencies That Want to{' '}
                  <span style={{ color:'var(--ism-amber)', position:'relative', display:'inline-block' }}>
                    Scale Without Hiring
                    <svg style={{ position:'absolute', bottom:-4, left:0, width:'100%' }} height="6" viewBox="0 0 280 6" preserveAspectRatio="none">
                      <path d="M2 4 Q70 1 140 4 Q210 7 278 2" stroke="var(--ism-amber)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.78, margin:'0 0 32px', maxWidth:460 }}>
                  SEO, PPC, web development, content, GoHighLevel, design, and more — all delivered under your brand. Your clients see your agency name. We do the work. You take the credit.
                </p>

                {/* CTAs */}
                <div style={{ display:'flex', alignItems:'center', gap:12, flexWrap:'wrap', marginBottom:28 }}>
                  <a href="/contact"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
                  >
                    Scale My Agency — Book a Call →
                  </a>
                  <a href="#wl-how"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
                  >
                    See How It Works ↓
                  </a>
                </div>

                {/* Trust badges */}
                <div style={{ display:'flex', alignItems:'center', gap:'6px 16px', flexWrap:'wrap', fontFamily:I, fontSize:13, color:'var(--color-text-muted)' }}>
                  {['38+ agencies trust ISM as their white label partner','We never contact your clients. Ever.','10 services. All under one roof.'].map((b,i)=>(
                    <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11 }} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — Brand Split Visual */}
              <div style={{ position:'relative' }}>
                {/* Floating NDA badge */}
                <div style={{ position:'absolute', top:-18, right:-6, zIndex:10, background:'var(--ism-amber)', borderRadius:12, padding:'10px 16px', boxShadow:'0 8px 28px rgba(255,176,0,.50)' }}>
                  <div style={{ fontFamily:J, fontSize:10, fontWeight:700, color:'var(--color-navy)', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:2 }}>Guaranteed</div>
                  <div style={{ fontFamily:J, fontSize:16, fontWeight:900, color:'var(--color-navy)', lineHeight:1 }}>NDA Ready</div>
                </div>

                <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 32px 80px rgba(30,77,195,.18)', border:'1px solid rgba(0,0,0,.08)', background:'var(--color-navy)' }}>
                  {/* Browser chrome */}
                  <div style={{ background:'rgba(255,255,255,.06)', padding:'10px 14px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid rgba(255,255,255,.08)' }}>
                    <div style={{ display:'flex', gap:5 }}>
                      {['#FF5F57','#FEBC2E','#28C840'].map(c=><div key={c} style={{ width:11, height:11, borderRadius:'50%', background:c }} />)}
                    </div>
                    <div style={{ flex:1, background:'rgba(255,255,255,.08)', borderRadius:6, padding:'5px 12px', fontFamily:I, fontSize:11, color:'rgba(255,255,255,.45)', border:'1px solid rgba(255,255,255,.1)', textAlign:'left' }}>
                      🔒 White Label Delivery — Client Report Portal
                    </div>
                  </div>

                  {/* Two panels */}
                  <div style={{ padding:'20px 20px 16px' }}>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:14 }}>
                      {/* What client sees */}
                      <div style={{ padding:'18px 16px', background:'rgba(255,255,255,.06)', borderRadius:10, border:'1px solid rgba(255,255,255,.1)' }}>
                        <div style={{ fontSize:9, color:'rgba(255,255,255,.4)', fontFamily:I, letterSpacing:'.08em', textTransform:'uppercase' as const, marginBottom:10 }}>What your client sees</div>
                        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10 }}>
                          <div style={{ width:30, height:30, borderRadius:7, background:'var(--ism-amber)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                            <i className="fa-solid fa-building" style={{ color:'var(--color-navy)', fontSize:13 }} />
                          </div>
                          <div>
                            <div style={{ fontSize:13, fontWeight:700, color:'#fff', fontFamily:J, lineHeight:1.2 }}>Your Agency</div>
                            <div style={{ fontSize:10, color:'rgba(255,255,255,.45)', fontFamily:I }}>Your brand. Everywhere.</div>
                          </div>
                        </div>
                        <div style={{ padding:'8px 10px', background:'rgba(255,255,255,.05)', borderRadius:6, border:'1px solid rgba(255,255,255,.08)' }}>
                          <div style={{ fontSize:9, color:'rgba(255,255,255,.35)', fontFamily:I, marginBottom:3 }}>Monthly Report</div>
                          <div style={{ fontSize:10, fontWeight:600, color:'rgba(255,255,255,.7)', fontFamily:J }}>From: hello@youragency.com</div>
                          <div style={{ fontSize:9, color:'rgba(255,255,255,.3)', fontFamily:I, marginTop:3 }}>Your logo · Your colours · Your name</div>
                        </div>
                      </div>
                      {/* Who does the work */}
                      <div style={{ padding:'18px 16px', background:'rgba(30,77,195,.2)', borderRadius:10, border:'1px solid rgba(30,77,195,.35)' }}>
                        <div style={{ fontSize:9, color:'rgba(255,255,255,.4)', fontFamily:I, letterSpacing:'.08em', textTransform:'uppercase' as const, marginBottom:10 }}>Who does the work</div>
                        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10 }}>
                          <div style={{ width:30, height:30, borderRadius:7, background:'var(--color-primary)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                            <i className="fa-solid fa-users" style={{ color:'#fff', fontSize:12 }} />
                          </div>
                          <div>
                            <div style={{ fontSize:13, fontWeight:700, color:'#fff', fontFamily:J, lineHeight:1.2 }}>ISM Team</div>
                            <div style={{ fontSize:10, color:'rgba(255,255,255,.45)', fontFamily:I }}>40+ in-house specialists</div>
                          </div>
                        </div>
                        <div style={{ display:'flex', flexWrap:'wrap', gap:4 }}>
                          {['SEO','PPC','Web','Content','Design','GHL'].map(s=>(
                            <span key={s} style={{ padding:'2px 7px', background:'rgba(30,77,195,.4)', color:'rgba(255,255,255,.75)', borderRadius:4, fontSize:9, fontFamily:I, fontWeight:600 }}>{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Flow */}
                    <div style={{ display:'flex', flexDirection:'column', gap:6, marginBottom:12 }}>
                      {[
                        { left:'Your client pays you', right:'You brief ISM privately' },
                        { left:'ISM delivers under your brand', right:'Your client sees only you' },
                      ].map((row,i)=>(
                        <div key={i} style={{ display:'flex', alignItems:'center', gap:8, padding:'8px 12px', background:'rgba(255,255,255,.04)', borderRadius:7, border:'1px solid rgba(255,255,255,.06)' }}>
                          <span style={{ fontSize:11, color:'rgba(255,255,255,.6)', fontFamily:I, flex:1 }}>{row.left}</span>
                          <i className="fa-solid fa-arrow-right" style={{ color:'var(--ism-amber)', fontSize:10, flexShrink:0 }} />
                          <span style={{ fontSize:11, color:'rgba(255,255,255,.6)', fontFamily:I, flex:1, textAlign:'right' as const }}>{row.right}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ textAlign:'center', padding:'9px 14px', background:'rgba(255,176,0,.08)', borderRadius:8, border:'1px solid rgba(255,176,0,.18)' }}>
                      <i className="fa-solid fa-shield-halved" style={{ color:'var(--ism-amber)', fontSize:11, marginRight:6 }} />
                      <span style={{ fontSize:11, color:'var(--ism-amber)', fontFamily:I, fontWeight:600 }}>ISM is never mentioned to your clients. Ever.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TICKER ═══════════════════════════════════════════════════════ */}
        <div style={{ background:'#0A1628', borderBottom:'2px solid var(--ism-amber)', overflow:'hidden', padding:'13px 0' }}>
          <div style={{ display:'flex', gap:0, animation:'wl-ticker 30s linear infinite', whiteSpace:'nowrap' }}>
            {[...Array(2)].map((_,ri)=>(
              <div key={ri} style={{ display:'flex', flexShrink:0 }}>
                {['UK Agency 12→31 clients in 8 months','US consultant built 6-figure agency in 12 months','Zero ISM branding on any deliverable. Ever.','38+ agencies trust ISM as their white label partner','10 services under one roof. SEO, PPC, Web, Content, Design, GHL','3–5 day onboarding. No long setup process.'].map((text,i)=>(
                  <span key={i} style={{ fontFamily:J, fontSize:12, fontWeight:600, color:'#fff', padding:'0 32px', display:'inline-flex', alignItems:'center', gap:10 }}>
                    <span style={{ color:'var(--ism-amber)' }}>✓</span>{text}
                    <span style={{ color:'rgba(255,255,255,.25)', marginLeft:8 }}>◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ══ 2. STATS ════════════════════════════════════════════════════ */}
        <section style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'64px 0' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div className="wl-stats-row" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
              {STATS.map((s,i)=>(
                <div key={i} style={{ padding:'0 32px', textAlign:'center', borderRight: i<3 ? '1px solid rgba(255,255,255,.18)' : 'none' }}>
                  <div style={{ fontFamily:J, fontSize:'clamp(34px,4vw,52px)', fontWeight:900, color: i===3 ? 'var(--ism-amber)' : '#fff', lineHeight:1, marginBottom:10 }}>{s.num}</div>
                  <div style={{ fontFamily:J, fontSize:14, fontWeight:700, color:'#fff', marginBottom:5 }}>{s.label}</div>
                  <div style={{ fontFamily:I, fontSize:12, color:'rgba(255,255,255,.55)', lineHeight:1.4 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 3. SCALING TRAP ═════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="The Scaling Trap" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                You can sell more than your team can deliver.{' '}
                <span style={{ color:'var(--ism-amber)' }}>Most agencies are stuck there.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 auto', maxWidth:680 }}>
                You win a new client. Then another. Suddenly the work is more than your team can handle without something slipping. Hiring is slow, risky, and expensive. Freelancers are unreliable. Turning down work means leaving revenue on the table.
              </p>
            </div>
            <div className="wl-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
              {/* Without white label */}
              <div style={{ background:'#fff', borderRadius:16, padding:32, border:'1px solid var(--color-border)', boxShadow:'0 4px 24px rgba(0,0,0,.05)' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24 }}>
                  <div style={{ width:32, height:32, borderRadius:8, background:'rgba(239,68,68,.10)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <i className="fa-solid fa-xmark" style={{ color:'#EF4444', fontSize:14 }} />
                  </div>
                  <span style={{ fontFamily:J, fontSize:16, fontWeight:800, color:'var(--color-navy)' }}>Without a white label partner</span>
                </div>
                <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:14 }}>
                  {['Turn down clients because your team is full','Quality drops when you stretch capacity','Hire too fast, then have to let people go','Spend more time coordinating freelancers than delivering','Miss deadlines during busy periods'].map((item,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.5 }}>
                      <i className="fa-solid fa-xmark" style={{ color:'#EF4444', fontSize:12, marginTop:3, flexShrink:0 }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* With ISM */}
              <div style={{ background:'var(--color-navy)', borderRadius:16, padding:32, boxShadow:'0 8px 32px rgba(0,35,83,.20)' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24 }}>
                  <div style={{ width:32, height:32, borderRadius:8, background:'rgba(34,197,94,.20)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <i className="fa-solid fa-check" style={{ color:'#22C55E', fontSize:14 }} />
                  </div>
                  <span style={{ fontFamily:J, fontSize:16, fontWeight:800, color:'#fff' }}>With ISM as your white label partner</span>
                </div>
                <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:14 }}>
                  {['Say yes to every client who is the right fit','Scale instantly without a single new hire','Predictable delivery cost per client','One brief, one team, one point of contact','Delivered on time, under your brand, every time'].map((item,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, fontFamily:I, fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.5 }}>
                      <i className="fa-solid fa-check" style={{ color:'#22C55E', fontSize:12, marginTop:3, flexShrink:0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4. COMPARISON TABLE ══════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:48 }}>
              <Pill text="Your Options for Scaling" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                Why agencies choose white label over freelancers and in-house hiring.
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Before you decide how to scale, here is an honest comparison of your three options.
              </p>
            </div>
            <div style={{ overflowX:'auto' }}>
              <table style={{ width:'100%', borderCollapse:'collapse', minWidth:640 }}>
                <thead>
                  <tr>
                    <th style={{ padding:'16px 20px', background:'var(--color-bg-soft)', textAlign:'left', fontFamily:J, fontWeight:700, fontSize:13, color:'var(--color-text-muted)', border:'1px solid var(--color-border)', borderBottom:'2px solid var(--color-border)', width:'22%' }}>Factor</th>
                    <th style={{ padding:'16px 20px', background:'#FFF7ED', textAlign:'left', fontFamily:J, fontWeight:700, fontSize:13, color:'#92400E', border:'1px solid var(--color-border)', borderBottom:'2px solid var(--color-border)', width:'26%' }}>Freelancers</th>
                    <th style={{ padding:'16px 20px', background:'#F0FDF4', textAlign:'left', fontFamily:J, fontWeight:700, fontSize:13, color:'#166534', border:'1px solid var(--color-border)', borderBottom:'2px solid var(--color-border)', width:'26%' }}>Hiring In-House</th>
                    <th style={{ padding:'16px 20px', background:'var(--color-primary)', textAlign:'left', fontFamily:J, fontWeight:700, fontSize:13, color:'#fff', border:'1px solid var(--color-primary)', borderBottom:'2px solid var(--color-primary)', width:'26%' }}>ISM White Label ✓</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row,i)=>(
                    <tr key={row.factor} style={{ background: i%2===0 ? '#fff' : 'var(--color-bg-soft)' }}>
                      <td style={{ padding:'16px 20px', fontFamily:J, fontWeight:600, fontSize:13, color:'var(--color-navy)', border:'1px solid var(--color-border)', verticalAlign:'top' }}>{row.factor}</td>
                      <td style={{ padding:'16px 20px', fontFamily:I, fontSize:13, color: row.flBad ? '#92400E' : 'var(--color-text-muted)', border:'1px solid var(--color-border)', verticalAlign:'top', background: row.flBad ? 'rgba(251,191,36,.06)' : 'transparent' }}>
                        <span style={{ display:'flex', gap:6, alignItems:'flex-start' }}>
                          <i className={`fa-solid ${row.flBad ? 'fa-triangle-exclamation' : 'fa-check'}`} style={{ color: row.flBad ? '#F59E0B' : '#16A34A', fontSize:11, marginTop:2, flexShrink:0 }} />
                          {row.fl}
                        </span>
                      </td>
                      <td style={{ padding:'16px 20px', fontFamily:I, fontSize:13, color: row.ihBad ? '#92400E' : 'var(--color-text-muted)', border:'1px solid var(--color-border)', verticalAlign:'top', background: row.ihBad ? 'rgba(251,191,36,.06)' : 'transparent' }}>
                        <span style={{ display:'flex', gap:6, alignItems:'flex-start' }}>
                          <i className={`fa-solid ${row.ihBad ? 'fa-triangle-exclamation' : 'fa-check'}`} style={{ color: row.ihBad ? '#F59E0B' : '#16A34A', fontSize:11, marginTop:2, flexShrink:0 }} />
                          {row.ih}
                        </span>
                      </td>
                      <td style={{ padding:'16px 20px', fontFamily:I, fontSize:13, color:'#1E3A6E', border:'1px solid rgba(30,77,195,.15)', verticalAlign:'top', background:'rgba(30,77,195,.05)' }}>
                        <span style={{ display:'flex', gap:6, alignItems:'flex-start' }}>
                          <i className="fa-solid fa-check" style={{ color:'var(--color-primary)', fontSize:11, marginTop:2, flexShrink:0 }} />
                          <strong style={{ fontWeight:600 }}>{row.ism}</strong>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══ 5. SERVICE CARDS ════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Our White Label Services" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                Every white label digital marketing service under one roof.
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Pick one service or all of them. Everything runs under your agency brand with the same quality standard regardless of volume.
              </p>
            </div>
            <div className="wl-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
              {SERVICES.map((s,i)=>(
                <div key={i} style={{ background:'#fff', borderRadius:16, border:'1.5px solid var(--color-border)', padding:'28px 24px', transition:'all .22s', position:'relative' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-3px)'; el.style.boxShadow='0 12px 40px rgba(30,77,195,.10)'; el.style.borderColor='rgba(30,77,195,.25)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; el.style.borderColor='var(--color-border)'; }}
                >
                  <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.09em', textTransform:'uppercase' as const, marginBottom:10 }}>{s.num}</div>
                  <div style={{ width:40, height:40, borderRadius:10, background:'rgba(30,77,195,.08)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:14 }}>
                    <i className={`fa-solid ${s.icon}`} style={{ color:'var(--color-primary)', fontSize:18 }} />
                  </div>
                  <h3 style={{ fontFamily:J, fontSize:17, fontWeight:800, color:'var(--color-navy)', margin:'0 0 10px', lineHeight:1.25 }}>{s.title}</h3>
                  <p style={{ fontFamily:I, fontSize:13, color:'var(--color-text-muted)', lineHeight:1.72, margin:'0 0 18px' }}>{s.desc}</p>
                  <a href={s.href} style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', letterSpacing:'.04em', transition:'gap .18s' }}
                    onMouseEnter={e=>(e.currentTarget.style.gap='10px')}
                    onMouseLeave={e=>(e.currentTarget.style.gap='6px')}
                  >
                    Learn more <i className="fa-solid fa-arrow-right" style={{ fontSize:10 }} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 6. PROCESS ══════════════════════════════════════════════════ */}
        <section id="wl-how" className="wl-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <Pill text="How the Partnership Works" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                From your first client brief to delivery under your brand.
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Four steps. Your clients never see the seam.
              </p>
            </div>
            <div className="wl-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, position:'relative' }}>
              <div style={{ position:'absolute', top:28, left:'12.5%', width:'75%', height:2, background:'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex:0 }} />
              {TIMELINE_STEPS.map((step,i)=>(
                <div key={i} style={{ textAlign:'center', padding:'0 20px', position:'relative', zIndex:1 }}>
                  <div style={{ width:56, height:56, borderRadius:'50%', background: i===0 ? 'var(--ism-amber)' : 'var(--color-primary)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', boxShadow:`0 4px 18px ${i===0 ? 'rgba(255,176,0,.40)' : 'rgba(30,77,195,.30)'}`, border:'4px solid #fff' }}>
                    <span style={{ fontFamily:J, fontSize:18, fontWeight:900, color: i===0 ? 'var(--color-navy)' : '#fff' }}>{step.num}</span>
                  </div>
                  <div style={{ fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-navy)', marginBottom:10, lineHeight:1.3 }}>{step.title}</div>
                  <p style={{ fontFamily:I, fontSize:13, color:'var(--color-text-muted)', lineHeight:1.65, margin:0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. WHO THIS IS FOR ══════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Who This Is For" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                If you run an agency of any size, there is a model here that fits.
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Three types of agencies use ISM as their white label partner — each for different reasons.
              </p>
            </div>
            <div className="wl-who-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {[
                {
                  icon:'fa-seedling', label:'Growing Agencies', iconBg:'rgba(30,77,195,.08)', iconColor:'var(--color-primary)',
                  points:['Winning more clients than your team can serve without something slipping','Want to expand into services you do not yet offer in-house','Hiring feels too risky given how quickly your client load can shift','Need delivery capacity this month, not in three months after a hire'],
                  cta:'Book a Call for Growing Agencies →',
                },
                {
                  icon:'fa-building-columns', label:'Established Agencies', iconBg:'rgba(255,176,0,.10)', iconColor:'var(--ism-amber)',
                  points:['Have in-house staff but need overflow capacity without new headcount','Want to add a new service line without the risk of hiring a specialist','Current outsourcing model is fragmented across too many individual freelancers','Want one reliable partner rather than five who each handle one thing'],
                  cta:'Book a Call for Established Agencies →',
                },
                {
                  icon:'fa-rocket', label:'Freelancers Scaling Up', iconBg:'rgba(168,85,247,.08)', iconColor:'#9333EA',
                  points:['Winning clients whose scope is larger than you can deliver solo','Need to look and deliver like a full agency without the overheads of running one','Want a fulfillment partner who makes your capability look far larger than your headcount','Not ready to hire yet but absolutely ready to grow your revenue'],
                  cta:'Book a Call for Freelancers Scaling →',
                },
              ].map(col=>(
                <div key={col.label} style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 28px', transition:'all .22s', display:'flex', flexDirection:'column' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
                >
                  <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
                    <div style={{ width:42, height:42, borderRadius:10, background:col.iconBg, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <i className={`fa-solid ${col.icon}`} style={{ color:col.iconColor, fontSize:18 }} />
                    </div>
                    <h3 style={{ margin:0, fontFamily:J, fontWeight:800, fontSize:17, color:'var(--color-navy)' }}>{col.label}</h3>
                  </div>
                  <ul style={{ margin:'0 0 28px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:12, flex:1 }}>
                    {col.points.map(pt=>(
                      <li key={pt} style={{ display:'flex', gap:10, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6 }}>
                        <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', flexShrink:0, marginTop:3, fontSize:11 }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact"
                    style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'12px 20px', background:'var(--ism-amber)', color:'var(--color-navy)', borderRadius:8, fontFamily:J, fontWeight:700, fontSize:13, textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase' as const, alignSelf:'flex-start', boxShadow:'0 4px 16px rgba(255,176,0,.30)', transition:'all .18s' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(255,176,0,.45)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 4px 16px rgba(255,176,0,.30)'; }}
                  >
                    {col.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 8. GUARANTEES ═══════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <Pill text="What We Guarantee" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 6px', maxWidth:640, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>
                Four things every ISM white label partner{' '}
                <span style={{ color:'var(--ism-amber)' }}>can count on.</span>
              </h2>
            </div>
            <div className="wl-guarantee-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
              {GUARANTEES.map((g,i)=>(
                <div key={i} style={{ background:'var(--color-bg-soft)', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 30px', textAlign:'center', transition:'all .22s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
                >
                  <div style={{ width:52, height:52, borderRadius:14, background:'rgba(30,77,195,.08)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 18px' }}>
                    <i className={`fa-solid ${g.icon}`} style={{ color:'var(--color-primary)', fontSize:22 }} />
                  </div>
                  <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.09em', textTransform:'uppercase' as const, marginBottom:8 }}>Guarantee {String(i+1).padStart(2,'0')}</div>
                  <h4 style={{ fontFamily:J, fontWeight:800, fontSize:16, color:'var(--color-navy)', margin:'0 0 12px', lineHeight:1.3 }}>{g.title}</h4>
                  <p style={{ fontFamily:I, fontSize:13, color:'var(--color-text-muted)', lineHeight:1.65, margin:0 }}>{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 9. RESULTS ══════════════════════════════════════════════════ */}
        <section id="wl-results" className="wl-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <Pill text="Real Results" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 6px' }}>
                What agencies have built with ISM as their{' '}
                <span style={{ color:'var(--ism-amber)', fontStyle:'italic' }}>white label partner.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Outcomes from real agency partnerships. Numbers from actual accounts, not projected averages.
              </p>
            </div>
            <div className="wl-results-grid" style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:24 }}>
              {RESULTS.map((r,i)=>(
                <div key={i} style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'32px', transition:'all .22s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
                >
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
                    <div>
                      <div style={{ fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-navy)', marginBottom:3 }}>{r.industry}</div>
                      <div style={{ fontFamily:I, fontSize:12, color:'var(--color-text-muted)' }}>{r.period}</div>
                    </div>
                    <div style={{ background:'rgba(30,77,195,.09)', border:'1px solid rgba(30,77,195,.15)', borderRadius:100, padding:'3px 12px', fontFamily:J, fontSize:10, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.06em', textTransform:'uppercase' as const, whiteSpace:'nowrap' }}>{r.badge}</div>
                  </div>
                  <div style={{ fontFamily:J, fontSize:'clamp(32px,4vw,52px)', fontWeight:900, color:'var(--color-primary)', lineHeight:1, marginBottom:4 }}>{r.metric}</div>
                  <div style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', marginBottom:20 }}>{r.metricLabel}</div>
                  <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.72, margin:'0 0 20px' }}>{r.desc}</p>
                  <a href="#" style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', letterSpacing:'.04em', transition:'gap .18s' }}
                    onMouseEnter={e=>(e.currentTarget.style.gap='10px')}
                    onMouseLeave={e=>(e.currentTarget.style.gap='6px')}
                  >
                    Read Full Case Study <i className="fa-solid fa-arrow-right" style={{ fontSize:10 }} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 10. AGENCY TYPES ════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'80px 0', background:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <Pill text="Agencies We Partner With" />
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.5vw,38px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
              We have worked as the white label partner for these types of agencies.
            </h2>
            <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', maxWidth:600, margin:'0 auto 36px', lineHeight:1.7 }}>
              Every agency has a different client mix and different delivery expectations. We adapt to how you work, not the other way around.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center', marginBottom:28 }}>
              {AGENCY_TYPES.map(t=>(
                <span key={t} style={{ padding:'8px 18px', background:'var(--color-bg-soft)', border:'1px solid var(--color-border)', borderRadius:100, fontSize:13, color:'var(--color-navy)', fontFamily:I, fontWeight:500, transition:'all .18s', cursor:'default' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLSpanElement).style.borderColor='var(--color-primary)'; (e.currentTarget as HTMLSpanElement).style.color='var(--color-primary)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLSpanElement).style.borderColor='var(--color-border)'; (e.currentTarget as HTMLSpanElement).style.color='var(--color-navy)'; }}
                >{t}</span>
              ))}
            </div>
            <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)' }}>
              Not on this list?{' '}
              <a href="/contact" style={{ color:'var(--color-primary)', fontWeight:600, textDecoration:'none' }}>Book a call. If you sell marketing services to clients, we can almost certainly help. →</a>
            </p>
          </div>
        </section>

        {/* ══ 11. FAQ ═════════════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ 12. BOTTOM CTA ══════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'linear-gradient(135deg,#1840A0,#2F5FE8)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-20%', right:'-5%', width:500, height:500, background:'radial-gradient(circle,rgba(255,176,0,.08) 0%,transparent 65%)', pointerEvents:'none' }} />
          <div style={{ maxWidth:800, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>
            <h2 style={{ fontFamily:J, fontWeight:900, fontSize:'clamp(28px,3.5vw,48px)', color:'#fff', letterSpacing:'-0.5px', lineHeight:1.12, margin:'0 0 20px' }}>
              Ready to scale your agency<br className="wl-cta-br" /> without hiring anyone new?
            </h2>
            <p style={{ fontFamily:I, fontSize:17, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:'0 auto 36px', maxWidth:540 }}>
              Book a free 30-minute call. We will talk through your current capacity, what services your clients need, and show you exactly how a white label partnership with ISM would work for your agency.
            </p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginBottom:28 }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Scale My Agency — Book a Call →
              </a>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'6px 24px', justifyContent:'center' }}>
              {['No contract lock-in','Your brand on everything','We never contact your clients','10 services under one roof'].map(b=>(
                <span key={b} style={{ display:'flex', alignItems:'center', gap:6, fontSize:13, color:'rgba(255,255,255,.65)', fontFamily:I }}>
                  <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11 }} />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @keyframes wl-pulse { 0%,100%{box-shadow:0 0 0 3px rgba(34,197,94,.25)} 50%{box-shadow:0 0 0 6px rgba(34,197,94,.10)} }
        @keyframes wl-ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @media (max-width: 640px) {
          .wl-hero    { padding: 56px 0 44px !important; }
          .wl-section { padding-top: 60px !important; padding-bottom: 60px !important; }
          .wl-cta-br  { display: none; }
        }
        @media (max-width: 900px) {
          .wl-hero-grid      { grid-template-columns: 1fr !important; gap: 40px !important; }
          .wl-stats-row      { grid-template-columns: 1fr 1fr !important; }
          .wl-split          { grid-template-columns: 1fr !important; }
          .wl-svc-grid       { grid-template-columns: 1fr 1fr !important; }
          .wl-timeline       { grid-template-columns: 1fr 1fr !important; }
          .wl-who-grid       { grid-template-columns: 1fr !important; }
          .wl-guarantee-grid { grid-template-columns: 1fr 1fr !important; }
          .wl-results-grid   { grid-template-columns: 1fr !important; }
          .wl-faq-grid       { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .wl-svc-grid       { grid-template-columns: 1fr !important; }
          .wl-guarantee-grid { grid-template-columns: 1fr !important; }
          .wl-stats-row      { grid-template-columns: 1fr 1fr !important; }
          .wl-timeline       { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
