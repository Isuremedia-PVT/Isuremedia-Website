'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── DATA ──────────────────────────────────────────────────────────── */

const STATS = [
  { num: '100+',  label: 'Websites & funnels delivered', sub: 'Businesses and agencies across 6 countries' },
  { num: '2.8×',  label: 'Avg conversion rate lift',     sub: 'Across all redesign and funnel projects'    },
  { num: '40+',   label: 'In-house specialists',         sub: 'Design, dev, copy, and automation'          },
  { num: 'Zero',  label: 'Outsourced builds. Ever.',     sub: '100% in-house. Same team, start to finish.' },
];

const SERVICES = [
  {
    num: '01', title: 'Business Websites',
    desc: 'A professional, fast, conversion-focused website for your business. Built to rank on Google, look great on every device, and move visitors toward the action you want them to take.',
    href: '/services/websites-funnels/wordpress-design',
    icon: 'fa-solid fa-globe',
  },
  {
    num: '02', title: 'Landing Pages',
    desc: 'A standalone page built for one goal — get the lead, the sign-up, or the sale. No distractions. No extra navigation. Just a clear path from click to conversion.',
    href: '/services/websites-funnels/landing-pages',
    icon: 'fa-solid fa-file-lines',
  },
  {
    num: '03', title: 'Sales Funnels',
    desc: 'Multi-step funnels that take someone from "just browsing" to "I\'m ready to buy." We build the pages, write the sequences, and connect everything to your CRM and email.',
    href: '/services/websites-funnels/landing-pages',
    icon: 'fa-solid fa-filter',
  },
  {
    num: '04', title: 'GoHighLevel Funnels & Automation',
    desc: 'Full GoHighLevel setup, funnel builds, automation workflows, and CRM configuration. Whether starting from scratch or cleaning up an existing account, we handle it all.',
    href: '/services/websites-funnels/gohighlevel-funnels',
    icon: 'fa-solid fa-bolt',
  },
  {
    num: '05', title: 'Website Redesign',
    desc: 'Your website is outdated, slow, or just not converting. We rebuild it from the ground up — keeping what works, fixing what does not, and making it faster and cleaner.',
    href: '/services/websites-funnels/wordpress-design',
    icon: 'fa-solid fa-rotate',
  },
  {
    num: '06', title: 'Conversion Rate Optimisation',
    desc: 'You are getting traffic but people are not converting. We run heatmaps, UX audits, and A/B tests to find out why — and fix it so more of your visitors take action.',
    href: '/services/websites-funnels/cro',
    icon: 'fa-solid fa-chart-line',
  },
  {
    num: '07', title: 'Website Maintenance & Support',
    desc: 'Plugins, speed, security, backups, and small updates handled for you every month. Your website stays fast, safe, and working properly without you having to think about it.',
    href: '/services/websites-funnels/wordpress-design',
    icon: 'fa-solid fa-shield-halved',
  },
  {
    num: '08', title: 'AI-Powered Website Personalisation',
    desc: 'Your website shows different content to different visitors based on who they are and what they have done before. More relevance means more conversions without rebuilding your site.',
    href: '/services/websites-funnels/landing-pages',
    icon: 'fa-solid fa-microchip',
  },
];

const TIMELINE_STEPS = [
  {
    num: 1, title: 'Discovery & Strategy',
    desc: 'We start with a call. We ask about your business, your audience, what you have tried before, and what you need the website to do. Before anything gets designed, we align on the goal.',
    icon: 'fa-solid fa-map',
  },
  {
    num: 2, title: 'Design & Copy',
    desc: 'Our team designs the layouts and writes the copy at the same time — not design first, copy later — because the two depend on each other. You review it before a single line of code gets written.',
    icon: 'fa-solid fa-pen-ruler',
  },
  {
    num: 3, title: 'Build & Integrate',
    desc: 'We build the site, connect it to your CRM, set up forms, tracking, and automation, and test everything before it goes near your domain. Speed, mobile, and security checked before handover.',
    icon: 'fa-solid fa-code',
  },
  {
    num: 4, title: 'Launch & Optimise',
    desc: 'We go live with you. After launch, we track how real visitors use the site and flag what to improve. Most agencies disappear after launch. We do not. Your site gets better over time.',
    icon: 'fa-solid fa-rocket',
  },
];

const RESULTS = [
  {
    industry: 'Real Estate',
    badge: 'Website Redesign + Funnel Build',
    metric: '3×',
    metricLabel: 'more qualified leads',
    period: 'in 90 days',
    desc: 'A UAE-based property developer was getting traffic but losing buyers at the enquiry stage. We rebuilt their website with a lead qualification funnel, integrated GoHighLevel CRM, and added a targeted landing page per property. Within 90 days, qualified enquiries tripled.',
  },
  {
    industry: 'Coaching Business',
    badge: 'Sales Funnel + Landing Page',
    metric: '62%',
    metricLabel: 'lower cost per lead',
    period: 'in 60 days',
    desc: 'A business coach was spending heavily on ads but converting poorly because the landing pages were not aligned with the ad copy. We rebuilt the funnel from scratch with three landing page variants and a booking integration. Cost per lead dropped by 62%.',
  },
];

const INDUSTRIES = [
  'Real Estate & Property', 'E-Commerce', 'Marketing Agencies', 'Coaches & Consultants',
  'Law Firms', 'Home Services & HVAC', 'Education & Online Courses', 'Health & Wellness',
  'SaaS & Tech', 'Finance & Fintech', 'Restaurants & Hospitality', 'Automotive',
];

const BUILD_WITH  = ['WordPress','GoHighLevel','Webflow','Elementor','Next.js','Custom HTML/CSS/JS'];
const INTEGRATE   = ['HubSpot','Salesforce','Zapier','n8n','Stripe','Mailchimp','ActiveCampaign','GA4','Meta Pixel','Calendly'];

const FAQS = [
  { q: 'How long does it take to build a website?',
    a: 'A standard business website takes 3 to 6 weeks from our first call to launch. A landing page or simple funnel can be ready in 1 to 2 weeks. More complex builds with custom integrations, multiple funnels, or GoHighLevel automation take 6 to 10 weeks. We will give you a clear timeline in the discovery call before any work begins.' },
  { q: 'What is the difference between a landing page and a website?',
    a: 'A website has multiple pages covering your full business. A landing page has one job — get a specific visitor to take one specific action, like booking a call or signing up. We build both, and we often recommend a landing page as the entry point for paid ads while your full website handles organic and direct traffic.' },
  { q: 'Do you build websites on GoHighLevel?',
    a: 'Yes. GoHighLevel setup and funnel builds are one of our most requested services. We handle sub-account setup, funnel design, automation workflows, CRM configuration, and ongoing GHL support. We also offer white label GoHighLevel support for agencies managing clients on the platform.' },
  { q: 'Can you redesign my existing website without losing my SEO rankings?',
    a: 'Yes. We handle website redesign projects with SEO preservation as part of the process. Before anything moves, we document your existing rankings, URLs, and metadata. We then migrate or redirect everything correctly so your search positions are protected during and after the rebuild.' },
  { q: 'Do you offer white label web development for agencies?',
    a: 'Yes. Agencies are one of our biggest client groups. We build websites, landing pages, funnels, and GoHighLevel setups fully under your brand. Your clients see your agency name. We handle all the work behind the scenes with no branding from our side unless you want it.' },
  { q: 'What does conversion rate optimisation actually mean?',
    a: 'CRO is the process of making more of your existing website visitors take action without spending more on ads or SEO. We use heatmaps, session recordings, and A/B testing to find where people drop off and why. Then we fix it. Even small improvements in conversion rate can significantly increase your revenue from the same traffic.' },
  { q: 'How much does a website or funnel build cost?',
    a: 'It depends on what you need, which is why we start with a discovery call rather than a price list. A landing page starts lower than a full business website. A GoHighLevel funnel build with automation costs more than a simple one-pager. We scope everything before quoting so there are no surprises. Book a free call and we will give you an honest range for your project.' },
  { q: 'What is AI-powered website personalisation?',
    a: 'It means your website shows different content to different visitors based on where they came from, what they have done before, or what type of buyer they are. A first-time visitor from a paid ad sees something different from someone who has already read three of your blog posts. More relevance means more conversions from the same traffic.' },
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
    <section className="web-section" style={{ padding:'100px 0', background:'#F0F5FF' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div className="web-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          {/* Left sticky */}
          <div style={{ position:'sticky', top:100 }}>
            <Pill text="FAQ" />
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions we get asked before every project.
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              No jargon. Just honest answers about how our web builds actually work.
            </p>
            <a href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Book a Free Discovery Call →
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

/* ══ PAGE ════════════════════════════════════════════════════════════ */
export default function WebDesignPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
        <section className="web-hero" style={{ background:'#fff', padding:'80px 0 72px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-10%', right:'-5%', width:600, height:600, background:'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'-10%', left:'-4%', width:400, height:400, background:'radial-gradient(circle,rgba(255,176,0,.04) 0%,transparent 65%)', pointerEvents:'none' }} />

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
            <div className="web-hero-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }}>

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
                  <span style={{ color:'var(--color-primary)', fontWeight:600 }}>Websites & Funnels</span>
                </div>

                {/* Label pill */}
                <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:100, background:'rgba(30,77,195,.07)', border:'1px solid rgba(30,77,195,.15)', fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.05em', marginBottom:24 }}>
                  <span style={{ width:8, height:8, borderRadius:'50%', background:'#22C55E', display:'inline-block', boxShadow:'0 0 0 3px rgba(34,197,94,.25)', animation:'web-pulse 2s infinite' }} />
                  WEBSITE DESIGN & DEVELOPMENT SERVICES
                </div>

                {/* H1 */}
                <h1 style={{ fontFamily:J, fontSize:'clamp(26px,2.8vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-1px', lineHeight:1.1, margin:'0 0 20px' }}>
                  Websites, Landing Pages &amp; Funnels Built to{' '}
                  <span style={{ color:'var(--ism-amber)', position:'relative', display:'inline-block' }}>
                    Convert, Not Just Impress
                    <svg style={{ position:'absolute', bottom:-4, left:0, width:'100%' }} height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
                      <path d="M2 4 Q75 1 150 4 Q225 7 298 2" stroke="var(--ism-amber)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                {/* Para */}
                <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.78, margin:'0 0 32px', maxWidth:460 }}>
                  One in-house team handles your website, landing pages, GoHighLevel funnels, and CRM — all built around a single goal: turning your traffic into real leads and paying customers.
                </p>

                {/* CTAs */}
                <div style={{ display:'flex', alignItems:'center', gap:12, flexWrap:'wrap', marginBottom:28 }}>
                  <a href="/contact"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
                  >
                    Book a Free Discovery Call →
                  </a>
                  <a href="#web-results"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
                  >
                    See Our Recent Work ↓
                  </a>
                </div>

                {/* Trust badges */}
                <div style={{ display:'flex', alignItems:'center', gap:'6px 16px', flexWrap:'wrap', fontFamily:I, fontSize:13, color:'var(--color-text-muted)' }}>
                  {['In-house team. No outsourcing.','100+ websites & funnels delivered','GoHighLevel certified builds'].map((b,i)=>(
                    <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11 }} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — browser + mockup */}
              <div style={{ position:'relative' }}>
                {/* Floating conversion badge */}
                <div style={{ position:'absolute', top:-18, right:-6, zIndex:10, background:'var(--ism-amber)', borderRadius:12, padding:'12px 18px', boxShadow:'0 8px 28px rgba(255,176,0,.50)' }}>
                  <div style={{ fontFamily:J, fontSize:10, fontWeight:700, color:'var(--color-navy)', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:2 }}>Conversion Lift</div>
                  <div style={{ fontFamily:J, fontSize:28, fontWeight:900, color:'var(--color-navy)', lineHeight:1 }}>2.8×</div>
                </div>

                {/* Browser window */}
                <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 32px 80px rgba(30,77,195,.18)', border:'1px solid rgba(0,0,0,.08)', background:'#fff' }}>
                  {/* Chrome bar */}
                  <div style={{ background:'#F3F4F6', padding:'10px 14px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid #E5E7EB' }}>
                    <div style={{ display:'flex', gap:5 }}>
                      {['#FF5F57','#FEBC2E','#28C840'].map(c=><div key={c} style={{ width:11, height:11, borderRadius:'50%', background:c }} />)}
                    </div>
                    <div style={{ flex:1, background:'#fff', borderRadius:6, padding:'5px 12px', fontFamily:I, fontSize:11, color:'#6B7280', border:'1px solid #E5E7EB', textAlign:'left' }}>
                      🔒 client-project.com — GoHighLevel Funnel · Live
                    </div>
                  </div>

                  {/* Site nav mockup */}
                  <div style={{ background:'var(--color-navy)' }}>
                    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'11px 20px', borderBottom:'1px solid rgba(255,255,255,.08)' }}>
                      <div style={{ display:'flex', gap:6, alignItems:'center' }}>
                        <div style={{ width:26, height:26, borderRadius:6, background:'var(--ism-amber)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                          <span style={{ fontFamily:J, fontSize:9, fontWeight:900, color:'var(--color-navy)' }}>AC</span>
                        </div>
                        <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'#fff' }}>AceConsulting</span>
                      </div>
                      <div style={{ display:'flex', gap:10, alignItems:'center' }}>
                        {['Services','About','Contact'].map(n=>(
                          <span key={n} style={{ fontFamily:I, fontSize:9, color:'rgba(255,255,255,.55)' }}>{n}</span>
                        ))}
                        <span style={{ fontFamily:J, fontSize:9, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', borderRadius:4, padding:'3px 8px' }}>Book Now</span>
                      </div>
                    </div>
                    {/* Hero area */}
                    <div style={{ padding:'22px 20px 16px' }}>
                      <div style={{ height:5, borderRadius:3, background:'rgba(255,255,255,.12)', width:'55%', marginBottom:8 }} />
                      <div style={{ height:14, borderRadius:3, background:'#fff', width:'82%', marginBottom:7 }} />
                      <div style={{ height:14, borderRadius:3, background:'rgba(255,255,255,.75)', width:'63%', marginBottom:12 }} />
                      <div style={{ height:7, borderRadius:3, background:'rgba(255,255,255,.25)', width:'90%', marginBottom:5 }} />
                      <div style={{ height:7, borderRadius:3, background:'rgba(255,255,255,.25)', width:'72%', marginBottom:18 }} />
                      <div style={{ display:'flex', gap:10 }}>
                        <div style={{ height:32, borderRadius:6, background:'var(--ism-amber)', width:120, display:'flex', alignItems:'center', justifyContent:'center' }}>
                          <span style={{ fontFamily:J, fontSize:9, fontWeight:800, color:'var(--color-navy)' }}>Book a Free Call →</span>
                        </div>
                        <div style={{ height:32, borderRadius:6, border:'1.5px solid rgba(255,255,255,.30)', width:86, display:'flex', alignItems:'center', justifyContent:'center' }}>
                          <span style={{ fontFamily:I, fontSize:9, color:'rgba(255,255,255,.55)' }}>See Work ↓</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', borderTop:'1px solid #E5E7EB', background:'#F9FAFB' }}>
                    {[['3×','More Leads'],['62%','Lower CPL'],['90+','PageSpeed']].map(([v,l],i)=>(
                      <div key={i} style={{ padding:'11px 14px', textAlign:'center', borderRight: i<2 ? '1px solid #E5E7EB' : 'none' }}>
                        <div style={{ fontFamily:J, fontSize:17, fontWeight:900, color:'var(--color-primary)', lineHeight:1, marginBottom:3 }}>{v}</div>
                        <div style={{ fontFamily:I, fontSize:9, color:'#9CA3AF' }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating GHL badge */}
                <div style={{ position:'absolute', bottom:-18, left:-16, background:'#fff', borderRadius:12, padding:'12px 16px', boxShadow:'0 8px 32px rgba(30,77,195,.14)', border:'1px solid rgba(30,77,195,.10)', zIndex:10 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <div style={{ width:36, height:36, borderRadius:8, background:'rgba(30,77,195,.10)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <i className="fa-solid fa-bolt" style={{ fontSize:14, color:'var(--color-primary)' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-navy)', marginBottom:1 }}>GoHighLevel Connected</div>
                      <div style={{ fontFamily:I, fontSize:11, color:'var(--color-text-muted)' }}>CRM + Automation live ✓</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ 2. PROOF STRIP (STATS) ══════════════════════════════════ */}
        <section style={{ background:'#fff', borderTop:'1px solid var(--color-border)', borderBottom:'1px solid var(--color-border)', padding:'52px 0' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div className="web-stats-row" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
              {STATS.map((s,i)=>(
                <div key={i} style={{ padding:'0 28px', textAlign:'center', borderRight: i<3 ? '1px solid var(--color-border)' : 'none' }}>
                  <div style={{ fontFamily:J, fontSize:'clamp(30px,3.5vw,52px)', fontWeight:900, color:'var(--color-primary)', lineHeight:1, marginBottom:8 }}>{s.num}</div>
                  <div style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', marginBottom:5 }}>{s.label}</div>
                  <div style={{ fontFamily:I, fontSize:12, color:'var(--color-text-muted)', lineHeight:1.4 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 3. WHAT WE DO (PROBLEM + SOLUTION) ═════════════════════ */}
        <section className="web-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:860, margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <Pill text="The Problem We Solve" />
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3.5vw,48px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-1px', lineHeight:1.1, margin:'0 0 24px' }}>
              Good Design Does Not Pay the Bills.{' '}
              <span style={{ color:'var(--ism-amber)' }}>Conversions Do.</span>{' '}
              We Build for Both.
            </h2>
            <p style={{ fontFamily:I, fontSize:17, color:'var(--color-text-muted)', lineHeight:1.82, margin:'0 0 20px' }}>
              Most websites are built to look good. That is it. There is no strategy behind the layout, no thought about what happens after someone lands, and no connection to your CRM or follow-up system.
            </p>
            <p style={{ fontFamily:I, fontSize:17, color:'var(--color-text-muted)', lineHeight:1.82, margin:'0 0 56px' }}>
              We fix all three. Our web design and development services cover the strategy, the build, and the connection to your tools. One in-house team. Zero handoffs to people who do not understand the full picture.
            </p>

            {/* 3 callout cards */}
            <div className="web-callouts" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {[
                { icon:'fa-solid fa-chart-line', title:'Built to Convert',         desc:'Every page has a clear goal and one path to reach it. No clutter. No confusion about what to do next.' },
                { icon:'fa-solid fa-bolt',        title:'GoHighLevel Specialists',  desc:'Full GHL builds, automation, and CRM setup handled in-house. No partner agencies, no guesswork.' },
                { icon:'fa-solid fa-trophy',      title:'100+ Sites Delivered',     desc:'Businesses and agencies across the US and UAE trust our in-house build team to deliver on time.' },
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

        {/* ══ 4. 8 SUB-SERVICE CARDS ══════════════════════════════════ */}
        <section className="web-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Our Website Services" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                Everything Covered, From First Click to Final Build.
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Pick the service you need or scroll down to see how they all work together.
              </p>
            </div>

            <div className="web-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}>
              {SERVICES.map((s,i)=>(
                <div key={i} style={{ background:'var(--color-bg-soft)', borderRadius:16, border:'1.5px solid var(--color-border)', padding:'28px 24px', transition:'all .22s', display:'flex', flexDirection:'column' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; el.style.borderColor='rgba(30,77,195,.25)'; el.style.background='#fff'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; el.style.borderColor='var(--color-border)'; el.style.background='var(--color-bg-soft)'; }}
                >
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

        {/* ══ 5. 4-STEP PROCESS ════════════════════════════════════════ */}
        <section className="web-section" style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:100, background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.20)', fontFamily:J, fontSize:12, fontWeight:700, color:'#fff', letterSpacing:'.08em', marginBottom:20 }}>
                HOW WE WORK
              </div>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px' }}>
                From Your First Call to a Website That Converts
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.68)', lineHeight:1.75, margin:0 }}>
                Four steps. No confusion. No surprises midway through.
              </p>
            </div>

            <div className="web-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, position:'relative' }}>
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
                Book a Free Discovery Call →
              </a>
              <p style={{ fontFamily:I, fontSize:13, color:'rgba(255,255,255,.45)', marginTop:14, marginBottom:0 }}>
                We will map out exactly what your website needs in 30 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* ══ 6. WHO THIS IS FOR ═══════════════════════════════════════ */}
        <section className="web-section" style={{ padding:'100px 0', background:'#F0F5FF' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Who We Build For" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 8px' }}>
                Whether You Run a Business or an Agency,{' '}
                <span style={{ color:'var(--ism-amber)' }}>We&apos;ve Done This Before.</span>
              </h2>
            </div>
            <div className="web-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
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
                    'You need a website that actually brings in leads, not just traffic',
                    'Your current site is outdated, slow, or not converting well',
                    'You want funnels and automation built in from the start',
                    'You are moving to GoHighLevel and need someone who knows it',
                    'You want one team to handle design, development, and strategy',
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
                  Book a Free Call for Businesses →
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
                    'Your clients need websites and funnels — you need a reliable build team',
                    'You want white label development delivered silently under your brand',
                    'Your team does not have a GoHighLevel specialist in-house',
                    'You want consistent turnaround without hiring full-time developers',
                    'You need a web team that understands marketing, not just code',
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

        {/* ══ 7. RESULTS BLOCK ════════════════════════════════════════ */}
        <section id="web-results" className="web-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Real Results" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                What Happens When a Website Is{' '}
                <span style={{ color:'var(--ism-amber)', fontStyle:'italic' }}>Built to Convert</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                These are not averages. These are numbers from actual projects our team delivered.
              </p>
            </div>
            <div className="web-results-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
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

        {/* ══ 8. INDUSTRIES ════════════════════════════════════════════ */}
        <section className="web-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div className="web-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>
              <div>
                <Pill text="Industries We Serve" />
                <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 8px', lineHeight:1.12 }}>
                  We have built for these industries.
                </h2>
                <div style={{ fontFamily:J, fontSize:'clamp(22px,2.5vw,34px)', fontWeight:900, color:'var(--ism-amber)', letterSpacing:'-0.5px', marginBottom:20, lineHeight:1.12 }}>
                  Yours might be here.
                </div>
                <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.78, margin:'0 0 24px' }}>
                  Every industry has different buyers and different reasons they do not convert. We build websites that account for that — with an industry-specific strategy from day one and no learning curve.
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

        {/* ══ 9. TECHNOLOGY STACK ══════════════════════════════════════ */}
        <section className="web-section" style={{ padding:'80px 0', background:'#fff' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <Pill text="The Tech Behind Your Build" />
            <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.8vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 12px' }}>
              We Build With the Platforms You Already Use
            </h2>
            <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, maxWidth:640, margin:'0 auto 48px' }}>
              Whether you are on WordPress, GoHighLevel, or a custom stack — we know these tools inside out and have built with them across hundreds of projects.
            </p>

            <div style={{ marginBottom:40 }}>
              <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-text-muted)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:16 }}>WE BUILD WITH</div>
              <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:10 }}>
                {BUILD_WITH.map((tool,i)=>(
                  <div key={i} style={{ display:'inline-flex', alignItems:'center', background:'var(--color-bg-soft)', border:'1.5px solid var(--color-border)', borderRadius:100, padding:'10px 22px', transition:'all .18s', cursor:'default' }}
                    onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.background='var(--color-primary)'; el.style.borderColor='var(--color-primary)'; const sp=el.querySelector('span') as HTMLElement; if(sp) sp.style.color='#fff'; }}
                    onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.background='var(--color-bg-soft)'; el.style.borderColor='var(--color-border)'; const sp=el.querySelector('span') as HTMLElement; if(sp) sp.style.color='var(--color-navy)'; }}
                  >
                    <span style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', transition:'color .18s' }}>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-text-muted)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:16 }}>WE INTEGRATE WITH</div>
              <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:10 }}>
                {INTEGRATE.map((tool,i)=>(
                  <div key={i} style={{ display:'inline-flex', alignItems:'center', background:'rgba(255,176,0,.07)', border:'1.5px solid rgba(255,176,0,.22)', borderRadius:100, padding:'10px 22px', transition:'all .18s', cursor:'default' }}
                    onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.background='var(--ism-amber)'; el.style.borderColor='var(--ism-amber)'; const sp=el.querySelector('span') as HTMLElement; if(sp) sp.style.color='var(--color-navy)'; }}
                    onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.background='rgba(255,176,0,.07)'; el.style.borderColor='rgba(255,176,0,.22)'; const sp=el.querySelector('span') as HTMLElement; if(sp) sp.style.color='var(--ism-amber)'; }}
                  >
                    <span style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--ism-amber)', transition:'color .18s' }}>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 10. FAQ ══════════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ 11. BOTTOM CTA ═══════════════════════════════════════════ */}
        <section className="web-section" style={{ background:'var(--color-navy)', padding:'100px 0', textAlign:'center' }}>
          <div style={{ maxWidth:780, margin:'0 auto', padding:'0 24px' }}>
            <Pill text="Get Started" amber />
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,4vw,52px)', fontWeight:900, color:'#fff', letterSpacing:'-1px', margin:'0 0 18px', lineHeight:1.1 }}>
              Ready to Build a Website That Actually Converts?
            </h2>
            <p style={{ fontFamily:I, fontSize:17, color:'rgba(255,255,255,.72)', lineHeight:1.78, margin:'0 0 40px', maxWidth:520, marginLeft:'auto', marginRight:'auto' }}>
              Book a free 30-minute call. We will look at what you have, tell you what needs to change, and show you exactly what we would build for you.
            </p>
            <a href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'17px 40px', borderRadius:10, fontFamily:J, fontSize:15, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 8px 28px rgba(255,176,0,.40)', transition:'all .18s', marginBottom:24 }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(255,176,0,.55)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 28px rgba(255,176,0,.40)'; }}
            >
              Book a Free Discovery Call →
            </a>
            <div style={{ display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap:'6px 20px', fontFamily:I, fontSize:13, color:'rgba(255,255,255,.50)' }}>
              {['No contract needed','In-house team','White-label ready for agencies','Results-first approach'].map((t,i)=>(
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
        .web-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        @media (max-width: 900px) { .web-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }

        /* Stats row */
        .web-stats-row { display: grid; grid-template-columns: repeat(4,1fr); }
        @media (max-width: 700px) { .web-stats-row { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 700px) { .web-stats-row > *:nth-child(2) { border-right: none !important; } }
        @media (max-width: 700px) { .web-stats-row > * { padding: 20px 14px !important; border-bottom: 1px solid var(--color-border); } }
        @media (max-width: 400px) { .web-stats-row { grid-template-columns: 1fr !important; } }

        /* Callouts 3-col */
        .web-callouts { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media (max-width: 700px) { .web-callouts { grid-template-columns: 1fr !important; } }

        /* Services 4-col */
        .web-svc-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
        @media (max-width: 1100px) { .web-svc-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 540px)  { .web-svc-grid { grid-template-columns: 1fr !important; } }

        /* Timeline */
        .web-timeline { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; position: relative; }
        @media (max-width: 860px) { .web-timeline { grid-template-columns: repeat(2,1fr) !important; gap: 36px !important; } }
        @media (max-width: 500px) { .web-timeline { grid-template-columns: 1fr !important; gap: 32px !important; } }

        /* 2-col splits */
        .web-split { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        @media (max-width: 860px) { .web-split { grid-template-columns: 1fr !important; gap: 32px !important; } }

        /* Results grid */
        .web-results-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 760px) { .web-results-grid { grid-template-columns: 1fr !important; } }

        /* FAQ */
        .web-faq-grid { display: grid; grid-template-columns: 380px 1fr; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .web-faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }

        /* Mobile padding */
        @media (max-width: 640px) {
          .web-hero    { padding: 56px 0 44px !important; }
          .web-section { padding-top: 60px !important; padding-bottom: 60px !important; }
        }

        /* Animations */
        @keyframes web-pulse { 0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.25) } 50% { box-shadow: 0 0 0 6px rgba(34,197,94,.05) } }
      `}</style>
    </>
  );
}
