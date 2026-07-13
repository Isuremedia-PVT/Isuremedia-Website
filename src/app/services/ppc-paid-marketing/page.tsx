'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── DATA ──────────────────────────────────────────────────────────── */

const STATS = [
  { num: '300+',  label: 'Paid campaigns managed',           sub: 'Across all platforms, all industries'           },
  { num: '42%',   label: 'Avg reduction in cost per lead',   sub: 'Across accounts after 90 days of management'    },
  { num: '40+',   label: 'In-house PPC specialists',         sub: 'Strategy, setup, creative, and optimisation'    },
  { num: 'Zero',  label: 'Campaigns outsourced or offshored', sub: '100% in-house. Same team, start to finish.'    },
];

const SERVICES = [
  {
    num: '01', title: 'PPC Management',
    desc: 'Full-service pay-per-click management covering strategy, campaign setup, bid management, ad copy testing, and monthly optimisation across all platforms.',
    href: '/services/ppc-paid-marketing', icon: 'fa-solid fa-chart-bar',
  },
  {
    num: '02', title: 'Google Ads',
    desc: 'Google Search, Display, Shopping, and Performance Max campaigns managed for maximum ROAS and lead volume — with full tracking and clear monthly reporting.',
    href: '/services/ppc-paid-marketing', icon: 'fa-brands fa-google',
  },
  {
    num: '03', title: 'Meta Ads (Facebook & Instagram)',
    desc: 'Lead generation, retargeting, and e-commerce campaigns across Facebook and Instagram. Audience-first strategy, creative testing, and funnel-aligned landing pages.',
    href: '/services/ppc-paid-marketing', icon: 'fa-brands fa-meta',
  },
  {
    num: '04', title: 'LinkedIn Ads',
    desc: 'B2B paid advertising targeting decision-makers by job title, company size, and industry. Sponsored content, InMail, and lead generation forms managed for lower cost per qualified lead.',
    href: '/services/ppc-paid-marketing', icon: 'fa-brands fa-linkedin',
  },
  {
    num: '05', title: 'YouTube Ads',
    desc: 'Video advertising strategy, creative briefing, and campaign management on YouTube. In-stream, bumper, and discovery ads to build awareness and drive lower-funnel conversions.',
    href: '/services/ppc-paid-marketing', icon: 'fa-brands fa-youtube',
  },
  {
    num: '06', title: 'Retargeting & Remarketing',
    desc: 'Re-engage website visitors and past customers across Google, Meta, and other networks with sequenced, audience-specific creative designed to bring them back and convert.',
    href: '/services/ppc-paid-marketing', icon: 'fa-solid fa-rotate-left',
  },
  {
    num: '07', title: 'Paid Social Media Advertising',
    desc: 'Paid campaigns across Facebook, Instagram, LinkedIn, TikTok, and Pinterest managed as a single cohesive paid social strategy with shared tracking and unified reporting.',
    href: '/services/ppc-paid-marketing', icon: 'fa-solid fa-share-nodes',
  },
  {
    num: '08', title: 'Programmatic Advertising',
    desc: 'Automated, audience-targeted display and video advertising across premium ad networks. Reach the right buyers at scale beyond the walled gardens of Google and Meta.',
    href: '/services/ppc-paid-marketing', icon: 'fa-solid fa-robot',
  },
  {
    num: '09', title: 'Funnel Strategy & Tracking Setup',
    desc: 'Conversion tracking, Google Tag Manager, GA4 configuration, and funnel-aligned campaign architecture. Every click tracked all the way to a lead or sale before any budget goes live.',
    href: '/services/ppc-paid-marketing', icon: 'fa-solid fa-filter',
  },
  {
    num: '10', title: 'White-Label PPC for Agencies',
    desc: 'Google Ads, Meta Ads, and paid social campaigns managed under your agency brand. Campaign builds, optimisation, and branded monthly reports with zero ISM footprint.',
    href: '/white-label/ppc', icon: 'fa-solid fa-tag',
    whiteLabel: true,
  },
];

const PLATFORMS = [
  { name:'Google Ads',    icon:'fa-brands fa-google',   color:'#4285F4', types:'Search · Display · Shopping · Performance Max' },
  { name:'Meta Ads',      icon:'fa-brands fa-meta',     color:'#0866FF', types:'Facebook · Instagram · Audience Network' },
  { name:'LinkedIn Ads',  icon:'fa-brands fa-linkedin', color:'#0A66C2', types:'Sponsored Content · InMail · Lead Gen Forms' },
  { name:'YouTube Ads',   icon:'fa-brands fa-youtube',  color:'#FF0000', types:'In-Stream · Bumper · Discovery Ads' },
  { name:'TikTok Ads',    icon:'fa-brands fa-tiktok',   color:'#010101', types:'In-Feed Video · Spark Ads · TopView' },
];

const TIMELINE_STEPS = [
  {
    num: 1, title: 'Audit & Strategy',
    desc: 'Before we touch a campaign, we review everything — your existing ad accounts, funnel, landing pages, competitors, and what you have already tried. You get an honest picture of what is working, what is being wasted, and what the strategy should look like before a single penny moves.',
  },
  {
    num: 2, title: 'Campaign Build & Tracking',
    desc: 'We build campaigns from scratch or rebuild existing ones properly. Conversion tracking is set up and tested first. Google Tag Manager and GA4 are configured. Your CRM is connected. Every click is measured before any budget goes live. We never launch blind.',
  },
  {
    num: 3, title: 'Launch, Monitor & Optimise',
    desc: 'Campaigns go live. We monitor daily in the first two weeks — adjusting bids, testing ad copy, refining audiences, and adding negative keywords. The first 30 days are the most active. Most clients see cost per lead drop within month one from these optimisations alone.',
  },
  {
    num: 4, title: 'Report, Scale & Refine',
    desc: 'Monthly reporting shows ROAS, cost per lead, and revenue from paid — not clicks and impressions. We present what scaled, what got cut, and what we are doing next. When something is working, we show you exactly how to scale spend without sacrificing performance.',
  },
];

const RESULTS = [
  {
    industry: 'E-Commerce',
    badge: 'Google Ads + Meta Retargeting',
    metric: '4.8×',
    metricLabel: 'Return on Ad Spend',
    period: 'in 60 days',
    desc: 'An e-commerce brand was running Google Ads in-house with a 1.2× ROAS and no retargeting strategy. We rebuilt around Performance Max and Shopping, introduced Meta retargeting for cart abandoners, and set up proper conversion tracking. ROAS reached 4.8× within 60 days.',
  },
  {
    industry: 'B2B SaaS',
    badge: 'LinkedIn Ads + Google Search',
    metric: '61%',
    metricLabel: 'lower cost per demo',
    period: 'in 90 days',
    desc: 'A SaaS company was running LinkedIn Ads with a cost per demo over $400. We rebuilt targeting around job titles and company size, rewrote the ad copy, rebuilt the landing page to match, and introduced Google Search for high-intent queries. Cost per demo dropped to $158.',
  },
];

const INDUSTRIES = [
  'Real Estate & Property','E-Commerce','Marketing Agencies','Coaches & Consultants',
  'Law Firms','Home Services & HVAC','Education & Online Courses','Health & Wellness',
  'SaaS & Tech','Finance & Fintech','Restaurants & Hospitality','Automotive',
];

const TOOL_CATEGORIES = [
  { label:'Ad Platforms',           tools:['Google Ads','Meta Ads Manager','LinkedIn Campaign Manager','YouTube Ads','TikTok Ads Manager'], color:'rgba(30,77,195,.09)', tcolor:'var(--color-primary)' },
  { label:'Tracking & Analytics',   tools:['Google Tag Manager','Google Analytics 4','Meta Pixel','LinkedIn Insight Tag','CallRail'],       color:'rgba(255,176,0,.09)',  tcolor:'var(--ism-amber)' },
  { label:'Reporting & Dashboards', tools:['Looker Studio','Agency Analytics','Google Data Studio','Supermetrics'],                        color:'rgba(52,199,89,.09)',  tcolor:'#16A34A' },
  { label:'CRM Integration',        tools:['HubSpot','Salesforce','GoHighLevel','Zoho','Pipedrive'],                                       color:'rgba(168,85,247,.09)', tcolor:'#9333EA' },
  { label:'Ad Intelligence',        tools:['SEMrush','SpyFu','Ahrefs','Facebook Ad Library'],                                             color:'rgba(239,68,68,.09)', tcolor:'#EF4444' },
];

const FAQS = [
  { q: 'How quickly do paid ads start generating leads?',
    a: 'Unlike SEO, paid ads can generate leads within days of launching. Most campaigns show meaningful data within the first two to four weeks. Significant cost-per-lead reduction and campaign optimisation happens between weeks four and eight as we gather enough data to make better targeting and bidding decisions. We give you realistic expectations in the discovery call, not promises we cannot keep.' },
  { q: 'What is ROAS and why does it matter more than clicks?',
    a: 'ROAS stands for Return on Ad Spend. If you spend £1,000 on ads and generate £4,000 in revenue, your ROAS is 4×. For e-commerce businesses, ROAS is the most important metric. For lead generation businesses, we track cost per lead and cost per acquisition instead, since the revenue happens offline. We always report on the metric most meaningful to your business — never clicks or impressions alone.' },
  { q: 'How much budget do I need to run paid ads effectively?',
    a: 'It depends on the platform and your industry. Google Ads for a service business can be effective from £500 to £1,000 per month in spend. LinkedIn Ads typically require a higher minimum due to higher CPCs. Meta Ads can work well from smaller budgets for the right audiences. We give you a realistic budget recommendation in the discovery call based on your goals and what your market benchmarks look like.' },
  { q: 'Do you manage Google Ads and Meta Ads together?',
    a: 'Yes. We manage all platforms under one roof with one unified strategy. This matters because Google and Meta serve different roles — Google captures existing demand from people actively searching, Meta creates new demand by reaching people who match your buyer profile. When both run together with shared tracking and aligned messaging, combined ROAS is almost always higher than either platform alone.' },
  { q: 'What does funnel strategy and tracking setup include?',
    a: 'It means making sure every click from every ad is tracked all the way through to a lead or sale. We set up Google Tag Manager, configure GA4 event tracking, connect your CRM, install platform pixels, and test every conversion event before a campaign launches. Without proper tracking, you are making budget decisions based on incomplete data. We treat this as a non-negotiable first step on every engagement.' },
  { q: 'Do you offer white label PPC for agencies?',
    a: 'Yes. We manage PPC campaigns for agencies fully under their brand — campaign builds, ongoing optimisation, and branded monthly reports with zero ISM branding unless requested. We also provide white label reporting dashboards your clients can log into with your agency branding. Your clients see your name on every deliverable.' },
  { q: 'What is retargeting and how does it reduce wasted ad spend?',
    a: 'Retargeting means showing ads specifically to people who have already visited your website, viewed a product, or started a checkout. These people are significantly more likely to convert than cold audiences because they already know you. Retargeting campaigns typically have 3 to 5 times higher conversion rates than prospecting campaigns — meaning you get more leads from the same budget.' },
  { q: 'Can you take over an existing ad account or do you start from scratch?',
    a: 'Both. If you have existing campaigns, we start with a full audit to identify what is working and what is wasting budget — then fix, rebuild, or start fresh depending on what the audit shows. If you are starting from zero, we build the full campaign structure, tracking, and landing page alignment from the ground up before spending anything.' },
];

/* ── PILL ──────────────────────────────────────────────────────────── */
function Pill({ text, amber }: { text: string; amber?: boolean }) {
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:8, background: amber ? 'rgba(255,176,0,.10)' : 'var(--ism-blue-50)', border:`1px solid ${amber ? 'rgba(255,176,0,.30)' : 'var(--ism-blue-100)'}`, borderRadius:100, padding:'6px 18px', marginBottom:20 }}>
      <span style={{ width:7, height:7, borderRadius:'50%', background: amber ? 'var(--ism-amber)' : 'var(--color-primary)', display:'inline-block' }} />
      <span style={{ fontFamily:J, fontSize:12, fontWeight:700, color: amber ? 'var(--ism-amber)' : 'var(--color-primary)', letterSpacing:'.09em', textTransform:'uppercase' as const }}>{text}</span>
    </div>
  );
}

/* ── FAQ ACCORDION ─────────────────────────────────────────────────── */
function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="ppc-section" style={{ padding:'100px 0', background:'#F0F5FF' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div className="ppc-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          <div style={{ position:'sticky', top:100 }}>
            <Pill text="FAQ" />
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions we get asked before every campaign.
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Honest answers about budgets, timelines, ROAS, and how we actually run paid campaigns.
            </p>
            <a href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Book a Free PPC Audit Call →
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

/* ══ PAGE ════════════════════════════════════════════════════════════ */
export default function PPCPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
        <section className="ppc-hero" style={{ background:'#fff', padding:'80px 0 72px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-10%', right:'-5%', width:600, height:600, background:'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'-10%', left:'-4%', width:400, height:400, background:'radial-gradient(circle,rgba(255,176,0,.04) 0%,transparent 65%)', pointerEvents:'none' }} />

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
            <div className="ppc-hero-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }}>

              {/* LEFT — copy */}
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
                  <span style={{ color:'var(--color-primary)', fontWeight:600 }}>PPC & Paid Marketing</span>
                </div>

                {/* Label pill */}
                <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:100, background:'rgba(30,77,195,.07)', border:'1px solid rgba(30,77,195,.15)', fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.05em', marginBottom:24 }}>
                  <span style={{ width:8, height:8, borderRadius:'50%', background:'#22C55E', display:'inline-block', boxShadow:'0 0 0 3px rgba(34,197,94,.25)', animation:'ppc-pulse 2s infinite' }} />
                  PPC & PAID MARKETING SERVICES
                </div>

                {/* H1 */}
                <h1 style={{ fontFamily:J, fontSize:'clamp(26px,2.8vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-1px', lineHeight:1.1, margin:'0 0 20px' }}>
                  Paid Ads Built Around{' '}
                  <span style={{ color:'var(--ism-amber)', position:'relative', display:'inline-block' }}>
                    ROAS, Leads & Revenue
                    <svg style={{ position:'absolute', bottom:-4, left:0, width:'100%' }} height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
                      <path d="M2 4 Q75 1 150 4 Q225 7 298 2" stroke="var(--ism-amber)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                  {' '}— Not Clicks &amp; Impressions.
                </h1>

                {/* Para */}
                <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.78, margin:'0 0 32px', maxWidth:460 }}>
                  We manage Google Ads, Meta Ads, LinkedIn, YouTube, and paid social — all connected to your funnel, tracking, and CRM from day one. One in-house team. All platforms. Zero outsourcing.
                </p>

                {/* CTAs */}
                <div style={{ display:'flex', alignItems:'center', gap:12, flexWrap:'wrap', marginBottom:28 }}>
                  <a href="/contact"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
                  >
                    Book a Free PPC Audit Call →
                  </a>
                  <a href="#ppc-results"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
                  >
                    See Campaign Results ↓
                  </a>
                </div>

                {/* Trust badges */}
                <div style={{ display:'flex', alignItems:'center', gap:'6px 16px', flexWrap:'wrap', fontFamily:I, fontSize:13, color:'var(--color-text-muted)' }}>
                  {['300+ paid campaigns managed','All platforms. One in-house team.','Funnel-aligned from day one'].map((b,i)=>(
                    <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11 }} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — PPC campaign dashboard */}
              <div style={{ position:'relative' }}>
                {/* Floating ROAS badge */}
                <div style={{ position:'absolute', top:-18, right:-6, zIndex:10, background:'var(--ism-amber)', borderRadius:12, padding:'10px 16px', boxShadow:'0 8px 28px rgba(255,176,0,.50)' }}>
                  <div style={{ fontFamily:J, fontSize:10, fontWeight:700, color:'var(--color-navy)', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:2 }}>Live ROAS</div>
                  <div style={{ fontFamily:J, fontSize:28, fontWeight:900, color:'var(--color-navy)', lineHeight:1 }}>4.8×</div>
                </div>

                {/* Browser window */}
                <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 32px 80px rgba(30,77,195,.18)', border:'1px solid rgba(0,0,0,.08)', background:'#fff' }}>
                  {/* Chrome */}
                  <div style={{ background:'#F3F4F6', padding:'10px 14px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid #E5E7EB' }}>
                    <div style={{ display:'flex', gap:5 }}>
                      {['#FF5F57','#FEBC2E','#28C840'].map(c=><div key={c} style={{ width:11, height:11, borderRadius:'50%', background:c }} />)}
                    </div>
                    <div style={{ flex:1, background:'#fff', borderRadius:6, padding:'5px 12px', fontFamily:I, fontSize:11, color:'#6B7280', border:'1px solid #E5E7EB', textAlign:'left' }}>
                      🔒 ads.google.com — Campaign Dashboard · Live
                    </div>
                  </div>

                  {/* Dashboard body */}
                  <div style={{ padding:'16px 18px 14px', background:'#F9FAFB' }}>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
                      <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'#374151' }}>Campaign Performance — Last 30 Days</div>
                      <div style={{ fontFamily:I, fontSize:10, color:'#6B7280', background:'#E5E7EB', borderRadius:4, padding:'3px 8px' }}>Live ●</div>
                    </div>

                    {/* 4 metric cards */}
                    <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:10, marginBottom:14 }}>
                      {[
                        { label:'ROAS',           value:'4.8×',   prev:'was 1.2×', up:true,  color:'#16A34A' },
                        { label:'Cost Per Lead',  value:'£18',    prev:'was £52',  up:false, color:'#16A34A' },
                        { label:'Leads / Month',  value:'127',    prev:'+94%',     up:true,  color:'#16A34A' },
                        { label:'Conv. Rate',     value:'8.4%',   prev:'was 2.1%', up:true,  color:'#16A34A' },
                      ].map((m,i)=>(
                        <div key={i} style={{ background:'#fff', borderRadius:10, padding:'12px 14px', border:'1px solid #E5E7EB', boxShadow:'0 1px 4px rgba(0,0,0,.04)' }}>
                          <div style={{ fontFamily:I, fontSize:10, color:'#9CA3AF', marginBottom:5 }}>{m.label}</div>
                          <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'#111827', lineHeight:1, marginBottom:4 }}>{m.value}</div>
                          <div style={{ display:'flex', alignItems:'center', gap:4 }}>
                            <i className={`fa-solid fa-caret-${m.up ? 'up' : 'down'}`} style={{ fontSize:9, color:m.color }} />
                            <span style={{ fontFamily:J, fontSize:10, fontWeight:700, color:m.color }}>{m.prev}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mini bar chart — spend vs revenue */}
                    <div style={{ background:'#fff', borderRadius:10, padding:'12px 14px', border:'1px solid #E5E7EB' }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
                        <div style={{ fontFamily:I, fontSize:10, color:'#6B7280' }}>Ad Spend vs Revenue</div>
                        <div style={{ display:'flex', gap:10 }}>
                          {[['var(--color-primary)','Spend'],['var(--ism-amber)','Revenue']].map(([c,l])=>(
                            <div key={l as string} style={{ display:'flex', alignItems:'center', gap:4 }}>
                              <div style={{ width:8, height:8, borderRadius:2, background:c as string }} />
                              <span style={{ fontFamily:I, fontSize:9, color:'#9CA3AF' }}>{l}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ display:'flex', alignItems:'flex-end', gap:5, height:56 }}>
                        {[[22,38],[24,44],[26,52],[28,58],[30,68],[32,80],[34,96],[36,112],[40,128],[44,148],[48,168],[52,192]].map(([spend,rev],i)=>(
                          <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:2, height:'100%', justifyContent:'flex-end' }}>
                            <div style={{ width:'100%', height:`${(rev/192)*100}%`, borderRadius:'2px 2px 0 0', background:'var(--ism-amber)', opacity:.85 }} />
                            <div style={{ width:'100%', height:`${(spend/52)*50}%`, borderRadius:'2px 2px 0 0', background:'var(--color-primary)', opacity:.55 }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cost reduction card */}
                <div style={{ position:'absolute', bottom:-18, left:-16, background:'#fff', borderRadius:12, padding:'12px 16px', boxShadow:'0 8px 32px rgba(30,77,195,.14)', border:'1px solid rgba(30,77,195,.10)', zIndex:10 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <div style={{ width:36, height:36, borderRadius:8, background:'rgba(22,163,74,.10)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <i className="fa-solid fa-arrow-trend-down" style={{ fontSize:14, color:'#16A34A' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-navy)', marginBottom:1 }}>42% Lower CPL</div>
                      <div style={{ fontFamily:I, fontSize:11, color:'var(--color-text-muted)' }}>Avg after 90 days management</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ 2. PROOF STRIP ════════════════════════════════════════════ */}
        <section style={{ background:'#fff', borderTop:'1px solid var(--color-border)', borderBottom:'1px solid var(--color-border)', padding:'52px 0' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div className="ppc-stats-row" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
              {STATS.map((s,i)=>(
                <div key={i} style={{ padding:'0 28px', textAlign:'center', borderRight: i<3 ? '1px solid var(--color-border)' : 'none' }}>
                  <div style={{ fontFamily:J, fontSize:'clamp(28px,3.5vw,50px)', fontWeight:900, color:'var(--color-primary)', lineHeight:1, marginBottom:8 }}>{s.num}</div>
                  <div style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', marginBottom:5 }}>{s.label}</div>
                  <div style={{ fontFamily:I, fontSize:12, color:'var(--color-text-muted)', lineHeight:1.4 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 3. PROBLEM + SOLUTION ════════════════════════════════════ */}
        <section className="ppc-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:860, margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <Pill text="The Problem We Solve" />
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3.5vw,48px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-1px', lineHeight:1.1, margin:'0 0 24px' }}>
              The Problem Is Not the Platform.{' '}
              <span style={{ color:'var(--ism-amber)' }}>It Is That the Campaigns Were Not Built Around Your Funnel.</span>
            </h2>
            <p style={{ fontFamily:I, fontSize:17, color:'var(--color-text-muted)', lineHeight:1.82, margin:'0 0 20px' }}>
              The biggest mistake in paid advertising is treating the ad as the whole job. The click is just the beginning. If the landing page does not match the ad, the form does not connect to the CRM, or there is no follow-up sequence, the lead disappears and the budget is wasted.
            </p>
            <p style={{ fontFamily:I, fontSize:17, color:'var(--color-text-muted)', lineHeight:1.82, margin:'0 0 56px' }}>
              We manage paid advertising as a full-funnel service. Google Ads, Meta Ads, LinkedIn, YouTube, and paid social are all connected to your landing pages, tracking, and CRM from day one. No gaps between the campaign and the conversion.
            </p>

            {/* 3 callout cards */}
            <div className="ppc-callouts" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {[
                { icon:'fa-solid fa-globe',     title:'All Platforms, One Team',       desc:'Google, Meta, LinkedIn, YouTube, and TikTok — managed by one in-house team with a single unified strategy.' },
                { icon:'fa-solid fa-filter',    title:'Funnel-Aligned From Day One',   desc:'We connect your campaigns to your landing pages, CRM, and follow-up sequences before any spend goes live.' },
                { icon:'fa-solid fa-crosshairs',title:'Tracking Before Spending',      desc:'Every conversion event is set up and tested before the campaign launches. No flying blind with your budget.' },
              ].map((c,i)=>(
                <div key={i} style={{ background:'#fff', borderRadius:16, border:'1.5px solid var(--color-border)', padding:'28px 24px', textAlign:'left', boxShadow:'0 2px 12px rgba(0,0,0,.04)' }}>
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(30,77,195,.09)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16 }}>
                    <i className={c.icon} style={{ fontSize:18, color:'var(--color-primary)' }} />
                  </div>
                  <div style={{ fontFamily:J, fontSize:16, fontWeight:800, color:'var(--color-navy)', marginBottom:8 }}>{c.title}</div>
                  <div style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.65 }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 4. 10 SUB-SERVICE CARDS ══════════════════════════════════ */}
        <section className="ppc-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Our PPC & Paid Marketing Services" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                Every Paid Advertising Channel You Need. One Team Managing All of It.
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Run one channel or all of them — we handle strategy, setup, creative briefing, and ongoing optimisation.
              </p>
            </div>
            <div className="ppc-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
              {SERVICES.map((s,i)=>(
                <div key={i} style={{ background:'var(--color-bg-soft)', borderRadius:16, border:'1.5px solid var(--color-border)', padding:'28px 24px', transition:'all .22s', display:'flex', flexDirection:'column', position:'relative' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; el.style.borderColor='rgba(30,77,195,.25)'; el.style.background='#fff'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; el.style.borderColor='var(--color-border)'; el.style.background='var(--color-bg-soft)'; }}
                >
                  {/* White label badge */}
                  {s.whiteLabel && (
                    <div style={{ position:'absolute', top:16, right:16, background:'rgba(168,85,247,.12)', border:'1px solid rgba(168,85,247,.30)', borderRadius:100, padding:'3px 10px', fontFamily:J, fontSize:9, fontWeight:700, color:'#9333EA', letterSpacing:'.08em', textTransform:'uppercase' }}>
                      White Label
                    </div>
                  )}
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(30,77,195,.09)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16, flexShrink:0 }}>
                    <i className={s.icon} style={{ fontSize:18, color:'var(--color-primary)' }} />
                  </div>
                  <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:8 }}>{s.num}</div>
                  <h3 style={{ fontFamily:J, fontSize:16, fontWeight:800, color:'var(--color-navy)', margin:'0 0 10px', lineHeight:1.3 }}>{s.title}</h3>
                  <p style={{ fontFamily:I, fontSize:13, color:'var(--color-text-muted)', lineHeight:1.7, margin:'0 0 20px', flex:1 }}>{s.desc}</p>
                  <a href={s.href} style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', letterSpacing:'.04em', transition:'gap .18s', marginTop:'auto' }}
                    onMouseEnter={e=>(e.currentTarget.style.gap='10px')}
                    onMouseLeave={e=>(e.currentTarget.style.gap='6px')}
                  >
                    Learn More <i className="fa-solid fa-arrow-right" style={{ fontSize:10 }} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. PLATFORM STRIP ════════════════════════════════════════ */}
        <section style={{ padding:'64px 0', background:'var(--color-bg-soft)', borderTop:'1px solid var(--color-border)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:36 }}>
              <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-text-muted)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>AD PLATFORMS WE MANAGE</div>
              <h3 style={{ fontFamily:J, fontSize:'clamp(18px,2vw,26px)', fontWeight:900, color:'var(--color-navy)', margin:0, letterSpacing:'-0.3px' }}>
                We Manage Campaigns Across Every Major Paid Platform
              </h3>
            </div>
            <div className="ppc-platform-row" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:16 }}>
              {PLATFORMS.map((p,i)=>(
                <div key={i} style={{ background:'#fff', borderRadius:16, border:'1.5px solid var(--color-border)', padding:'24px 16px', textAlign:'center', transition:'all .22s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-3px)'; el.style.boxShadow='0 10px 32px rgba(30,77,195,.10)'; el.style.borderColor='rgba(30,77,195,.25)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; el.style.borderColor='var(--color-border)'; }}
                >
                  <div style={{ width:48, height:48, borderRadius:12, background:`${p.color}15`, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 12px' }}>
                    <i className={p.icon} style={{ fontSize:22, color:p.color }} />
                  </div>
                  <div style={{ fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', marginBottom:8 }}>{p.name}</div>
                  <div style={{ fontFamily:I, fontSize:11, color:'var(--color-text-muted)', lineHeight:1.5 }}>{p.types}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 6. 4-STEP PROCESS ════════════════════════════════════════ */}
        <section className="ppc-section" style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:100, background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.20)', fontFamily:J, fontSize:12, fontWeight:700, color:'#fff', letterSpacing:'.08em', marginBottom:20 }}>
                HOW WE RUN YOUR CAMPAIGNS
              </div>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px' }}>
                From Your First Call to a Campaign That Pays for Itself
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.68)', lineHeight:1.75, margin:0 }}>
                Four steps. No wasted budget in month one. Clear results by month two.
              </p>
            </div>

            <div className="ppc-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, position:'relative' }}>
              <div style={{ position:'absolute', top:28, left:'12.5%', width:'75%', height:2, background:'rgba(255,255,255,.20)', zIndex:0 }} />
              {TIMELINE_STEPS.map((step,i)=>(
                <div key={i} style={{ textAlign:'center', padding:'0 20px', position:'relative', zIndex:1 }}>
                  <div style={{ width:56, height:56, borderRadius:'50%', background: i===0 ? 'var(--ism-amber)' : 'rgba(255,255,255,.15)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', boxShadow: i===0 ? '0 4px 18px rgba(255,176,0,.40)' : 'none', border: i===0 ? '4px solid #fff' : '2px solid rgba(255,255,255,.30)' }}>
                    <span style={{ fontFamily:J, fontSize:18, fontWeight:900, color: i===0 ? 'var(--color-navy)' : '#fff' }}>{step.num}</span>
                  </div>
                  <div style={{ fontFamily:J, fontSize:13, fontWeight:800, color:'#fff', marginBottom:10, lineHeight:1.3 }}>{step.title}</div>
                  <p style={{ fontFamily:I, fontSize:13, color:'rgba(255,255,255,.65)', lineHeight:1.65, margin:0 }}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign:'center', marginTop:64 }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.40)', transition:'all .18s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.55)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.40)'; }}
              >
                Book a Free PPC Audit Call →
              </a>
              <p style={{ fontFamily:I, fontSize:13, color:'rgba(255,255,255,.45)', marginTop:14, marginBottom:0 }}>
                We will review your current campaigns and show you exactly where budget is being wasted.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 7. WHO THIS IS FOR ═══════════════════════════════════════ */}
        <section className="ppc-section" style={{ padding:'100px 0', background:'#F0F5FF' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Who We Run Paid Ads For" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 8px' }}>
                Whether You Run a Business or an Agency,{' '}
                <span style={{ color:'var(--ism-amber)' }}>We&apos;ve Done This Before.</span>
              </h2>
            </div>
            <div className="ppc-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
              {/* Businesses */}
              <div style={{ background:'#fff', borderRadius:20, border:'1.5px solid var(--color-border)', padding:'40px 36px', boxShadow:'0 4px 24px rgba(0,0,0,.05)' }}>
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:28 }}>
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(30,77,195,.09)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <i className="fa-solid fa-building" style={{ fontSize:18, color:'var(--color-primary)' }} />
                  </div>
                  <h3 style={{ fontFamily:J, fontSize:20, fontWeight:800, color:'var(--color-navy)', margin:0 }}>For Businesses</h3>
                </div>
                <ul style={{ listStyle:'none', margin:'0 0 36px', padding:0, display:'flex', flexDirection:'column', gap:14 }}>
                  {[
                    'You are spending on ads but the cost per lead is too high or the quality is poor',
                    'You want to know exactly what your ad budget is generating in leads and revenue',
                    'Your current campaigns were set up once and never properly optimised since',
                    'You need Google Ads, Meta Ads, or LinkedIn managed by people who understand performance',
                    'You want campaigns connected to your landing pages, CRM, and follow-up sequences',
                  ].map((item,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.55 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:12, marginTop:3, flexShrink:0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/contact"
                  style={{ display:'block', textAlign:'center', padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(255,176,0,.40)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}
                >
                  Book a Free PPC Audit Call for Businesses →
                </a>
              </div>

              {/* Agencies — dark */}
              <div style={{ background:'var(--color-navy)', borderRadius:20, padding:'40px 36px', boxShadow:'0 8px 32px rgba(0,35,83,.20)' }}>
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:28 }}>
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(255,176,0,.15)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <i className="fa-solid fa-briefcase" style={{ fontSize:18, color:'var(--ism-amber)' }} />
                  </div>
                  <h3 style={{ fontFamily:J, fontSize:20, fontWeight:800, color:'#fff', margin:0 }}>For Agencies</h3>
                </div>
                <ul style={{ listStyle:'none', margin:'0 0 36px', padding:0, display:'flex', flexDirection:'column', gap:14 }}>
                  {[
                    'Your clients need paid advertising and you need a white label PPC team to deliver it',
                    'You want branded campaign reports and dashboards your clients can actually read',
                    'Your team does not have in-house Google Ads or Meta Ads specialists at the level clients need',
                    'You need a PPC partner with consistent delivery — not freelancers who disappear mid-campaign',
                    'You need someone who understands paid ads and the full funnel behind them',
                  ].map((item,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, fontFamily:I, fontSize:14, color:'rgba(255,255,255,.80)', lineHeight:1.55 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:12, marginTop:3, flexShrink:0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/contact"
                  style={{ display:'block', textAlign:'center', padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Book a Free Call for Agencies →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 8. RESULTS BLOCK ════════════════════════════════════════ */}
        <section id="ppc-results" className="ppc-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Real Results" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                What Paid Advertising Looks Like{' '}
                <span style={{ color:'var(--ism-amber)', fontStyle:'italic' }}>When It Is Actually Working</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                These are real numbers from campaigns our in-house team built, ran, and optimised.
              </p>
            </div>
            <div className="ppc-results-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
              {RESULTS.map((r,i)=>(
                <div key={i} style={{ background:'var(--color-bg-soft)', borderRadius:20, border:'1px solid var(--color-border)', padding:'40px 36px', transition:'all .22s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
                >
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20, flexWrap:'wrap', gap:8 }}>
                    <div style={{ background:'rgba(30,77,195,.09)', border:'1px solid rgba(30,77,195,.15)', borderRadius:100, padding:'4px 14px', fontFamily:J, fontSize:10, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.06em', textTransform:'uppercase' }}>{r.badge}</div>
                    <div style={{ fontFamily:I, fontSize:12, color:'var(--color-text-muted)', background:'#fff', border:'1px solid var(--color-border)', borderRadius:6, padding:'3px 10px' }}>{r.industry}</div>
                  </div>
                  <div style={{ fontFamily:J, fontSize:'clamp(44px,6vw,68px)', fontWeight:900, color:'var(--color-primary)', lineHeight:1, marginBottom:4 }}>{r.metric}</div>
                  <div style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', marginBottom:4 }}>{r.metricLabel}</div>
                  <div style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--ism-amber)', marginBottom:20 }}>{r.period}</div>
                  <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 24px' }}>{r.desc}</p>
                  <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', letterSpacing:'.04em', transition:'gap .18s' }}
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

        {/* ══ 9. INDUSTRIES ════════════════════════════════════════════ */}
        <section className="ppc-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div className="ppc-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>
              <div>
                <Pill text="Industries We Serve" />
                <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 8px', lineHeight:1.12 }}>
                  We have run paid campaigns across these industries.
                </h2>
                <div style={{ fontFamily:J, fontSize:'clamp(20px,2.5vw,32px)', fontWeight:900, color:'var(--ism-amber)', letterSpacing:'-0.5px', marginBottom:20, lineHeight:1.12 }}>
                  Yours might be here.
                </div>
                <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.78, margin:'0 0 24px' }}>
                  Every industry has different buyer behaviour, different CPC benchmarks, and different campaign structures that work. We know the differences — and we hit the ground running from day one.
                </p>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', letterSpacing:'.04em', transition:'gap .18s' }}
                  onMouseEnter={e=>(e.currentTarget.style.gap='12px')}
                  onMouseLeave={e=>(e.currentTarget.style.gap='8px')}
                >
                  Don&apos;t see yours? Book a call. <i className="fa-solid fa-arrow-right" style={{ fontSize:10 }} />
                </a>
              </div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
                {INDUSTRIES.map((ind,i)=>(
                  <div key={i} style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#fff', border:'1px solid var(--color-border)', borderRadius:100, padding:'10px 18px', transition:'all .18s', cursor:'default' }}
                    onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor='var(--color-primary)'; el.style.background='var(--ism-blue-50)'; }}
                    onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor='var(--color-border)'; el.style.background='#fff'; }}
                  >
                    <i className="fa-solid fa-check-circle" style={{ fontSize:11, color:'var(--ism-amber)' }} />
                    <span style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)' }}>{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 10. TOOLS / TECH STACK ═══════════════════════════════════ */}
        <section className="ppc-section" style={{ padding:'80px 0', background:'#fff' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <Pill text="The Tech Behind Your Campaigns" />
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.6vw,38px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 12px' }}>
              We Use the Best Tools in Paid Advertising
            </h2>
            <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, maxWidth:580, margin:'0 auto 48px' }}>
              The stack we use daily across every campaign we manage — so you are always working with people who know these platforms inside out.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
              {TOOL_CATEGORIES.map((cat,ci)=>(
                <div key={ci} style={{ textAlign:'left' }}>
                  <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-text-muted)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:12 }}>{cat.label}</div>
                  <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                    {cat.tools.map((tool,ti)=>(
                      <div key={ti} style={{ display:'inline-flex', alignItems:'center', background:cat.color, border:`1.5px solid ${cat.tcolor}22`, borderRadius:100, padding:'8px 18px', cursor:'default' }}>
                        <span style={{ fontFamily:J, fontSize:13, fontWeight:700, color:cat.tcolor }}>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 11. FAQ ══════════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ 12. BOTTOM CTA ═══════════════════════════════════════════ */}
        <section className="ppc-section" style={{ background:'var(--color-navy)', padding:'100px 0', textAlign:'center' }}>
          <div style={{ maxWidth:780, margin:'0 auto', padding:'0 24px' }}>
            <Pill text="Get Started" amber />
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,4vw,52px)', fontWeight:900, color:'#fff', letterSpacing:'-1px', margin:'0 0 18px', lineHeight:1.1 }}>
              Ready to Make Your Ad Budget Actually Work for You?
            </h2>
            <p style={{ fontFamily:I, fontSize:17, color:'rgba(255,255,255,.72)', lineHeight:1.78, margin:'0 0 40px', maxWidth:520, marginLeft:'auto', marginRight:'auto' }}>
              Book a free 30-minute PPC audit call. We will review your current campaigns, tell you exactly what is wasting budget, and show you what a properly built campaign looks like.
            </p>
            <a href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'17px 40px', borderRadius:10, fontFamily:J, fontSize:15, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 8px 28px rgba(255,176,0,.40)', transition:'all .18s', marginBottom:24 }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(255,176,0,.55)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 28px rgba(255,176,0,.40)'; }}
            >
              Book a Free PPC Audit Call →
            </a>
            <div style={{ display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap:'6px 20px', fontFamily:I, fontSize:13, color:'rgba(255,255,255,.50)' }}>
              {['No contract required','All platforms. One in-house team.','White-label ready for agencies','Funnel-aligned from day one'].map((t,i)=>(
                <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
                  <i className="fa-solid fa-check" style={{ color:'rgba(255,176,0,.70)', fontSize:10 }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* Hero 2-col */
        .ppc-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        @media (max-width: 900px) { .ppc-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }

        /* Stats row */
        .ppc-stats-row { display: grid; grid-template-columns: repeat(4,1fr); }
        @media (max-width: 700px) { .ppc-stats-row { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 700px) { .ppc-stats-row > *:nth-child(2) { border-right: none !important; } }
        @media (max-width: 700px) { .ppc-stats-row > * { padding: 20px 14px !important; border-bottom: 1px solid var(--color-border); } }
        @media (max-width: 400px) { .ppc-stats-row { grid-template-columns: 1fr !important; } }

        /* Callouts */
        .ppc-callouts { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media (max-width: 700px) { .ppc-callouts { grid-template-columns: 1fr !important; } }

        /* Service cards 3-col */
        .ppc-svc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media (max-width: 1000px) { .ppc-svc-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 540px)  { .ppc-svc-grid { grid-template-columns: 1fr !important; } }

        /* Platform strip */
        .ppc-platform-row { display: grid; grid-template-columns: repeat(5,1fr); gap: 16px; }
        @media (max-width: 900px)  { .ppc-platform-row { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 540px)  { .ppc-platform-row { grid-template-columns: repeat(2,1fr) !important; } }

        /* Timeline */
        .ppc-timeline { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; position: relative; }
        @media (max-width: 860px) { .ppc-timeline { grid-template-columns: repeat(2,1fr) !important; gap: 36px !important; } }
        @media (max-width: 500px) { .ppc-timeline { grid-template-columns: 1fr !important; gap: 32px !important; } }

        /* 2-col splits */
        .ppc-split { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        @media (max-width: 860px) { .ppc-split { grid-template-columns: 1fr !important; gap: 32px !important; } }

        /* Results grid */
        .ppc-results-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 760px) { .ppc-results-grid { grid-template-columns: 1fr !important; } }

        /* FAQ */
        .ppc-faq-grid { display: grid; grid-template-columns: 380px 1fr; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .ppc-faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }

        /* Mobile padding */
        @media (max-width: 640px) {
          .ppc-hero    { padding: 56px 0 44px !important; }
          .ppc-section { padding-top: 60px !important; padding-bottom: 60px !important; }
        }

        /* Animations */
        @keyframes ppc-pulse { 0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.25) } 50% { box-shadow: 0 0 0 6px rgba(34,197,94,.05) } }
      `}</style>
    </>
  );
}
