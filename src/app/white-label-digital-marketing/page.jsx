'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import ClientResults from '@/components/ClientResults';
import ReviewsStrip from '@/components/ReviewsStrip';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── Related case studies (White-Label) ──────────────────────────────── */
const RELATED_CASES = [
  {
    img: '/casestudy/innovet-card.webp',
    client: 'Innovat3 Solutions',
    intro: 'One GoHighLevel agency account, run mostly by hand.',
    quote: 'Isuremedia functions as our embedded build team, and that consistency is what let us keep signing clients.',
    stats: [
      { val: '1 → 3', label: 'Agencies Managed', sub: 'from a single account', icon: 'fa-solid fa-building' },
      { val: '100+',  label: 'Websites Built',    sub: 'and still shipping',   icon: 'fa-solid fa-globe' },
    ],
    body: 'Innovat3 Solutions needed a white-label technical partner who could build and manage GoHighLevel infrastructure at the pace their sales team was signing clients across 25+ niches. We became their embedded build team, covering websites, custom integrations, sub-account setup, automation, and voice AI, scaling from one agency account to 3 agencies and 20+ live sub-accounts.',
    link: '/case-studies/innovat3-multi-agency-ghl-scaling',
    linkLabel: "Read Innovat3 Solutions's Case Study",
  },
  {
    img: '/casestudy/signature-pools-card.webp',
    client: 'Signature Pools',
    intro: 'Facebook leads were reaching GoHighLevel. Nothing structured happened after that.',
    quote: 'The pipeline finally reflects how we actually sell, and management can see exactly where every lead stands.',
    stats: [
      { val: '15', label: 'Pipeline Stages', sub: 'built in one week',           icon: 'fa-solid fa-sitemap' },
      { val: '0',  label: 'Manual Handoffs', sub: 'lead transfer now automatic', icon: 'fa-solid fa-arrow-right-arrow-left' },
    ],
    body: 'Signature Pools had leads flowing into GoHighLevel with no structured pipeline, no automated notifications, and no reporting outside the CRM. We redesigned the sales pipeline, built automated notifications and a one-click lead transfer process, and synced everything to a live Google Sheets report through Make, delivered in a single week.',
    link: '/case-studies/signature-pools-lead-management-automation',
    linkLabel: "Read Signature Pools's Case Study",
  },
];

/* ── DATA ─────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    title: 'White-Label SEO',
    icon: 'fa-solid fa-magnifying-glass',
    desc: <>Offering search optimization helps keep monthly client retainers high, but managing it internally takes heavy work. As a dedicated white label SEO agency, we handle technical site fixes, keyword selection, content planning, and monthly link building. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>You get plain PDF reports branded with your agency logo</span> to send straight to your client.</>,
    href: '/white-label-seo-services',
  },
  {
    title: 'White-Label PPC Management',
    icon: 'fa-solid fa-chart-bar',
    desc: 'Running paid ads for clients requires constant testing and account checks. Our white label PPC management team sets up ad accounts, creates visual ads, writes copy, and tracks daily leads on Google, Meta, and LinkedIn. You earn recurring ad management revenue without hiring a full-time buyer.',
    href: '/white-label-ppc-services',
  },
  {
    title: 'White-Label Web Development',
    icon: 'fa-solid fa-code',
    desc: 'Website builds often lose money when scopes run over or freelancers miss deadlines. We build clean landing pages, full site redesigns, and custom pages under your agency brand. Every project comes with a clear delivery schedule so there are no surprises for your client.',
    href: '/white-label-web-design-services',
  },
  {
    title: 'White-Label GoHighLevel Setup',
    icon: 'fa-solid fa-bolt',
    desc: 'Setting up client accounts and workflows takes hours of technical setup. As a white label GoHighLevel agency, we configure sub-accounts, lead funnels, email sequences, and SMS triggers inside your system. Your clients get a complete CRM experience without ever seeing our name.',
    href: '/gohighlevel-white-label-support-services',
  },
  {
    title: 'White-Label Link Building',
    icon: 'fa-solid fa-link',
    desc: 'Link building is one of the most requested search services. We run manual outreach to secure real site links and content placements for your clients. Every placement comes with a clear report under your agency logo with zero risk of bad sites or search penalties.',
    href: '/white-label-digital-marketing',
  },
  {
    title: 'White-Label Graphic Design',
    icon: 'fa-solid fa-palette',
    desc: "Get daily design work done without hiring in-house designers. We create client social media posts, visual ad graphics, sales decks, and brand guides. Every file is built to your client's specs with no vendor branding attached.",
    href: '/white-label-digital-marketing',
  },
  {
    title: 'White-Label Reporting & Dashboards',
    icon: 'fa-solid fa-chart-line',
    desc: 'Clear reporting is how you keep client relationships long-term. We build monthly progress reports covering search rank shifts, ad clicks, and web traffic. Everything is formatted into your brand layout so you can hand it over as your own work.',
    href: '/white-label-digital-marketing',
  },
  {
    title: 'Dedicated Agency Pods',
    icon: 'fa-solid fa-users',
    desc: 'Buying services piece-by-piece can feel messy when different contractors handle every brief. A dedicated pod assigns a fixed team of specialists directly to your agency accounts, giving you the output of an in-house team at flat reseller digital marketing rates.',
    href: '/dedicated-agency-pods',
  },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Project Brief', desc: "You collect your client's goals and details using our basic intake forms. We check the requirements together to make sure we understand the scope, target keywords, and delivery dates before starting." },
  { num: 2, period: 'Production', desc: 'Our team gets to work. Whether building workflows as a white label GoHighLevel agency, fixing site code, or launching ad campaigns, we complete every task under your brand standards.' },
  { num: 3, period: 'White-Label Handoff', desc: <>We send unbranded drafts directly to your inbox. If you or your client need small tweaks, we make <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>rapid changes</span> so you can hand over the final files with confidence.</> },
  { num: 4, period: 'Monthly Updates', desc: 'We track rankings, ad clicks, and leads every month. You get plain PDF reports branded with your company logo to forward straight to your client.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-eye-slash',      title: 'Your Clients Never Discover Us',          desc: <>We never contact your clients directly or leave our name on your deliverables. Every file, dashboard, and report goes out strictly under your agency logo. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>We sign non-disclosure agreements upfront</span> so your clients only ever see your brand.</> },
  { dark: false, icon: 'fa-solid fa-circle-check',   title: 'No Long-Term Contracts',                  desc: 'Start with a single client project and add more as your workload grows. You can pause or change services whenever you need to, with zero minimum spending requirements or cancellation fees. We earn your account month by month through good work.' },
  { dark: false, icon: 'fa-solid fa-users',          title: 'Dedicated Specialists',                   desc: "We do not rotate new contractors onto your projects every week. The same writers, search specialists, and developers handle your accounts consistently. They learn your clients' preferences, which leads to better work over time." },
  { dark: false, icon: 'fa-solid fa-building',       title: 'Direct Team Control',                     desc: 'As a direct outsource digital marketing agency, we never pass your work off to third-party sub-contractors. Everything is completed by our internal team, giving you consistent work quality and zero communication gaps.' },
  { dark: false, icon: 'fa-solid fa-sliders',        title: 'We Adapt to How You Work',                desc: 'We fit into your current briefing templates and project tools like Asana, Trello, or ClickUp. You do not have to change how your agency operates to work with us; we adapt to your existing setup.' },
  { dark: false, icon: 'fa-solid fa-arrows-up-down', title: 'Scale Up or Down Anytime',                desc: "Add new services when clients request them, expand capacity when you sign a new account, or reduce scope if a client pauses. Our reseller digital marketing model adapts to your agency's actual workload instead of forcing you to pay fixed salaries." },
];

const FAQS = [
  { q: 'What makes your white label digital marketing service different from hiring freelancers?', a: <>Our white label digital marketing service gives you a reliable team with fixed deadlines instead of single, unpredictable contractors. We manage project quality, timelines, and reporting under one roof. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>No dealing with freelancers disappearing or missing client deadlines</span>, and you access search, ad management, CRM setup, and design skills through one contact point.</> },
  { q: 'Will my clients ever find out that work is outsourced?', a: <>No, your clients will never know we exist because all files, reports, and graphics are completely unbranded. We operate as your invisible back-office team. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>We sign strict non-disclosure contracts (NDAs)</span> before starting, and every deliverable features your agency logo and visual identity.</> },
  { q: 'How do you handle search engine optimization for our clients?', a: 'As a white label SEO agency, we handle technical site fixes, keyword research, on-page edits, and link building. We send you simple, client-ready monthly reports showing rank improvements and traffic numbers so you can present value during client updates.' },
  { q: 'Can your team manage paid ad campaigns across multiple platforms?', a: 'Yes, our white label PPC management team handles setup, ad graphics, copy writing, and daily management on Google, Meta, and LinkedIn. We track campaign performance daily to deliver consistent leads for your client accounts.' },
  { q: 'How do you help agencies using GoHighLevel?', a: 'As a white label GoHighLevel agency, we set up sub-accounts, email/SMS triggers, deal pipelines, and custom snapshots inside your system. This lets you sell complete CRM setups to clients without spending hours on complex technical configuration.' },
  { q: 'How does reseller digital marketing pricing work?', a: 'Our reseller digital marketing plans use fixed wholesale rates that leave room for your agency markups. You charge your clients your usual monthly retainer fee while paying us a flat wholesale price, keeping your profits clear and predictable.' },
  { q: 'How long does work take to be delivered?', a: 'Standard blog posts, social posts, and ad setup changes take 3 to 5 business days, while full website copy and new ad setups take 5 to 10 business days. Delivery dates are set upfront so you can set expectations with your client.' },
  { q: 'How many revision rounds are included?', a: 'Every deliverable includes 1 to 2 standard revision rounds at no extra cost. If you or your client need small adjustments to copy, design, or settings, we update them quickly.' },
];

/* ── FAQ 2-COL ────────────────────────────────────────────────────── */
function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section className="wl-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="wl-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          <div className="wl-faq-sticky" style={{ position:'sticky', top:100 }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Frequently Asked <span style={{ color:'var(--ism-amber)' }}>Questions</span>
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Honest answers before you decide.
            </p>
            <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Book a Free Strategy Call →
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

/* ══ PAGE ═════════════════════════════════════════════════════════════ */
export default function WhiteLabelPage() {
  const [hoveredStep, setHoveredStep] = useState(null);
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <section className="wl-hero" style={{ background:'linear-gradient(160deg,#EDF2FF 0%,#F7F8FA 48%,#FFFBEB 100%)', padding:'96px 0 64px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-80, right:-60, width:460, height:460, background:'rgba(30,77,195,0.18)', borderRadius:'58% 42% 50% 50% / 46% 58% 42% 54%', filter:'blur(50px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:-60, left:-50, width:360, height:360, background:'rgba(255,176,0,0.13)', borderRadius:'46% 54% 62% 38% / 54% 46% 54% 46%', filter:'blur(44px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'25%', left:'38%', width:260, height:260, background:'rgba(30,77,195,0.08)', borderRadius:'50% 50% 38% 62% / 62% 38% 62% 38%', filter:'blur(38px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)', width:900, height:400, background:'radial-gradient(ellipse,rgba(30,77,195,.04) 0%,transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:32, left:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(30,77,195,.18) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />
          <div style={{ position:'absolute', bottom:32, right:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(255,176,0,.25) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />

          <div className="ism-container" style={{ textAlign:'center', position:'relative' }}>
            <h1 style={{ fontFamily:J, fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-2px', lineHeight:1.06, margin:'0 auto 24px', maxWidth:940 }}>
              Reliable White Label Digital Marketing <span style={{ color:'var(--ism-amber)' }}>Built for Growing Agencies</span>
            </h1>

            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:680, margin:'0 auto 36px' }}>
              Running an agency gets tough when you have more client requests than hands to do the work. Turning away business costs you money, but hiring full-time staff is expensive and risky. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Partnering with a white label digital marketing provider gives you an extra team to handle the work while keeping your costs low</span>. We work in the background as your outsource digital marketing agency.
            </p>

            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:40 }}>
              <a href="/appointment"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Book a Free Strategy Call
              </a>
              <a href="#wl-services"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget).style.background='var(--color-primary)'; (e.currentTarget).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget).style.background='transparent'; (e.currentTarget).style.color='var(--color-primary)'; }}
              >
                See Our Results
              </a>
            </div>

            <div style={{ display:'flex', alignItems:'center', gap:24, justifyContent:'center', flexWrap:'wrap', marginBottom:16 }}>
              {[
                { icon:'fa-solid fa-building-user', text:'40+ in-house specialists' },
                { icon:'fa-solid fa-eye-slash',     text:'Zero client contact, ever' },
                { icon:'fa-solid fa-shield-halved', text:'NDA on every engagement' },
              ].map(b => (
                <div key={b.text} style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <i className={b.icon} style={{ fontSize:13, color:'var(--color-primary)' }} />
                  <span style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', fontWeight:500 }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ REVIEWS BAR ══════════════════════════════════════════════════ */}
        <ReviewsStrip />

        {/* ══ 2. STRATEGY SECTION ══════════════════════════════════════════ */}
        <section className="wl-strategy-section" style={{ background:'#fff', padding:'88px 0' }}>
          <div className="ism-container">

            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,40px)', fontWeight:800, color:'var(--color-navy)', letterSpacing:'-0.4px', lineHeight:1.2, maxWidth:820, margin:'0 auto 14px' }}>
                Why White Label Digital Marketing <span style={{ color:'var(--ism-amber)' }}>Drives Agency Growth</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:620, margin:'0 auto', lineHeight:1.75 }}>
                How white label digital marketing helps agencies take on more client accounts without adding payroll.
              </p>
            </div>

            <div className="wl-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'Offer Every Service Your Clients Ask For', text:<>Small teams often have to turn down new jobs or look for last-minute freelancers. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Partnering with a white label digital marketing team means you can say yes every time</span> a client asks for search, ads, or web work.</> },
                  { num:'02', title:'Add Capacity Without Slow In-House Hiring', text:<>Finding and training new staff takes months and costs a lot in yearly salaries. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Working with an outsource digital marketing agency gives you the extra hands you need today</span>, with no hiring delays.</> },
                  { num:'03', title:'Protect Profit Margins As Revenue Grows', text:<>Fixed salaries eat up your money if a client leaves or pauses work. Using outside help turns fixed payroll into a flexible cost. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>You pay only for the work you need, so every new client adds profit</span> to your bank account.</> },
                  { num:'04', title:'Clients Only Care About Results and Your Brand Name', text:<>Clients do not need to know who wrote the copy or set up the ads as long as the work is done well and on time. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Every file, dashboard, and report goes out with your company logo on top</span>.</> },
                  { num:'05', title:'Keep Full Control of Billing and Client Relationships', text:<>The clients stay yours, the monthly bills come from you, and the extra profit stays in your business. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Our reseller digital marketing setup gives you more hands to do the work while you stay in full control</span>.</> },
                ].map(item => (
                  <div key={item.num} style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
                    <div style={{ fontFamily:J, fontSize:11.5, fontWeight:800, color:'var(--ism-amber)', letterSpacing:'.06em', flexShrink:0, paddingTop:3, minWidth:26 }}>{item.num},</div>
                    <div>
                      <div style={{ fontFamily:J, fontSize:15, fontWeight:700, color:'var(--color-navy)', marginBottom:6, lineHeight:1.3 }}>{item.title}</div>
                      <div style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.78 }}>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="wl-strategy-mosaic" style={{ position:'relative', height:600, borderRadius:20, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src="/main-services/Why White-Label Fulfillment Drives Agency Growth.webp" alt="Why White-Label Fulfillment Drives Agency Growth" style={{ width:'100%', height:'100%', objectFit:'contain', display:'block' }} />
              </div>

            </div>

            <div style={{ background:'var(--ism-blue-50,#EEF2FF)', borderRadius:14, padding:'26px 28px', marginBottom:36, border:'1px solid rgba(30,77,195,.14)' }}>
              <h3 style={{ fontFamily:J, fontSize:17, fontWeight:800, color:'var(--color-navy)', margin:'0 0 8px' }}>
                What Could Your Agency Offer with White Label Digital Marketing?
              </h3>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-navy)', lineHeight:1.80, margin:0 }}>
                Book a short consultation with our team to walk through your current client load, bottlenecks, and growth goals. We will show you exactly how our <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>white label digital marketing services</span> work, from project handoffs to white-label reporting.
              </p>
            </div>
            <div style={{ textAlign:'center' }}>
              <a href="/appointment"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 36px', borderRadius:9, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 24px rgba(255,176,0,.38)', transition:'all .18s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(255,176,0,.52)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 24px rgba(255,176,0,.38)'; }}
              >
                Book a Free Strategy Call <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
              </a>
            </div>

          </div>
          <style>{`
            @media (max-width: 768px) {
              .wl-strategy-section { padding: 56px 0 !important; }
              .wl-strategy-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
              .wl-strategy-mosaic { display: none !important; }
            }
            @media (max-width: 480px) {
              .wl-strategy-section { padding: 44px 0 !important; }
            }
          `}</style>
        </section>

        {/* ══ 3. CLIENT RESULTS ════════════════════════════════════════════ */}
        <div id="wl-results"><ClientResults cases={RELATED_CASES} heading="Related White-Label Results" /></div>

        {/* ══ CTA BANNER ═══════════════════════════════════════════════════ */}
        <section style={{ background:'#fff', padding:'52px 0' }}>
          <div className="ism-container" style={{ position:'relative' }}>
            <div style={{ background:'#F5F5E6', borderRadius:24, display:'grid', gridTemplateColumns:'340px 1fr', minHeight:280, clipPath:'inset(-150px 0px 0px 0px round 24px)' }} className="wl-cta-banner-grid">

              <div style={{ position:'relative', overflow:'visible', minHeight:280 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/main-services/seo-women.webp"
                  alt="White Label"
                  style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', height:'128%', width:'auto', maxWidth:'none', objectFit:'contain', objectPosition:'bottom center', display:'block' }}
                />
              </div>
              <div style={{ padding:'40px 52px 40px 32px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>
                  What could your agency be delivering <span style={{ color:'var(--ism-amber)' }}>under your own name?</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>
                  Book a free strategy call and see <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>how the partnership would work</span> for your clients.
                </p>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Book My Free Strategy Call <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                </a>
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .wl-cta-banner-grid { grid-template-columns: 1fr !important; } .wl-cta-banner-grid > div:first-child { display: none !important; } }`}</style>
        </section>

        {/* ══ IMAGE + TEXT SECTION ════════════════════════════════════════ */}
        <section style={{ background:'var(--color-bg-soft)', padding:'88px 0' }}>
          <div className="ism-container">
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,38px)', fontWeight:800, color:'var(--color-navy)', textAlign:'center', letterSpacing:'-0.4px', lineHeight:1.2, margin:'0 auto 52px', maxWidth:820 }}>
              White Label Digital Marketing Built to <span style={{ color:'var(--ism-amber)' }}>Grow Your Agency</span>
            </h2>
            <div className="wl-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
              <div style={{ borderRadius:14, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src="/main-services/White-Label Fulfilment Built to Grow Your Agency.webp" alt="White-Label Fulfilment Built to Grow Your Agency" style={{ width:'100%', display:'block', objectFit:'contain' }} />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Every agency owner eventually faces a choice: should you hire in-house staff or find a better way to handle client work? <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Hiring locks you into fixed monthly salaries, onboarding costs, and payroll risk</span> if a client leaves.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Using an outsource digital marketing agency keeps your business flexible. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>You only pay for the exact work your clients need each month</span>, allowing you to add capacity instantly whenever you win a new account.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Outsourcing also helps you keep your clients long-term. Instead of turning down services or referring clients to competitors, our reseller digital marketing team lets you <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>say yes to every project while keeping full control</span> of the relationship under your own brand.
                </p>
                <div style={{ marginTop:8 }}>
                  <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                  >
                    Start Outsourcing Your Work <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 768px) { .wl-imgtext-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* ══ TESTIMONIALS ════════════════════════════════════════════════ */}
        <Testimonials
          heading="What Our Clients Are Saying"
          subheading={<>Hear from agency owners who rely on our <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>white label team</span> for daily client work.</>}
        />

        {/* ══ SERVICES GRID ════════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <h2 id="wl-services" style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 12px' }}>
                Every White-Label Service <span style={{ color:'var(--ism-amber)' }}>Under One Roof</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Pick one service or all of them. Every deliverable carries your agency brand. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Same quality standard regardless of volume</span>.
              </p>
            </div>
            <div className="wl-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #E8EAF0', borderRadius:16, overflow:'hidden' }}>
              {SERVICES.map((s,i)=>(
                <div key={i} className={`wl-svc-cell wl-svc-cell-${i}`}
                  style={{ padding:'36px 32px', borderRight:(i+1)%3===0?'none':'1px solid #E8EAF0', borderBottom:i<6?'1px solid #E8EAF0':'none', background:'#fff', transition:'background .18s', cursor:'default' }}
                  onMouseEnter={e=>{ (e.currentTarget).style.background='#F7F8FD'; }}
                  onMouseLeave={e=>{ (e.currentTarget).style.background='#fff'; }}
                >
                  <div style={{ display:'flex', alignItems:'flex-start', gap:14, marginBottom:18 }}>
                    <div style={{ width:46, height:46, borderRadius:10, background:'var(--ism-blue-50,rgba(30,77,195,.08))', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <i className={s.icon} style={{ fontSize:20, color:'var(--color-primary)' }} />
                    </div>
                    <h3 style={{ fontFamily:J, fontSize:16, fontWeight:800, color:'var(--color-navy)', margin:0, lineHeight:1.3, paddingTop:6 }}>{s.title}</h3>
                  </div>
                  <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.80, margin:'0 0 22px' }}>{s.desc}</p>
                  <a href={s.href} style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', letterSpacing:'.03em', transition:'gap .18s' }}
                    onMouseEnter={e=>(e.currentTarget.style.gap='10px')}
                    onMouseLeave={e=>(e.currentTarget.style.gap='6px')}
                  >
                    Learn more <i className="fa-solid fa-arrow-right" style={{ fontSize:10 }} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .wl-svc-grid { grid-template-columns: repeat(2,1fr) !important; } .wl-svc-cell-1,.wl-svc-cell-3,.wl-svc-cell-5,.wl-svc-cell-7 { border-right: none !important; } .wl-svc-cell-0,.wl-svc-cell-1,.wl-svc-cell-2,.wl-svc-cell-3,.wl-svc-cell-4,.wl-svc-cell-5,.wl-svc-cell-6,.wl-svc-cell-7 { border-bottom: 1px solid #E8EAF0 !important; } .wl-svc-cell-8 { border-bottom: none !important; border-right: none !important; } }
            @media (max-width: 560px) { .wl-svc-grid { grid-template-columns: 1fr !important; } .wl-svc-cell { border-right: none !important; border-bottom: 1px solid #E8EAF0 !important; } .wl-svc-cell-8 { border-bottom: none !important; } }
          `}</style>
        </section>

        {/* ══ DARK NAVY ════════════════════════════════════════════════════ */}
        <section className="wl-section" style={{ background:'var(--color-navy)', padding:'90px 0', color:'#fff' }}>
          <div className="ism-container">
            <div className="wl-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              <div>
                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px', lineHeight:1.12 }}>
                  Why White Label Digital Marketing is a{' '}
                  <span style={{ color:'var(--ism-amber)' }}>Great Investment for Your Agency</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>
                  Offer more services to your clients without hiring a full-service internal team.
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    Hiring full-time specialists for every service gets expensive fast. Partnering with an outsource digital marketing agency lets you <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>offer more services without adding permanent staff</span> to your payroll.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    You handle the client relationships and strategy. We handle the daily execution behind the scenes. Whether your clients need campaign updates from our white label SEO agency pod or lead tracking from our white label PPC management team, every file, design, and report carries your company branding. Fast-growing agencies succeed by delivering reliable work on time without letting extra payroll eat into their monthly profits.
                  </p>
                </div>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.30)'; }}
                >
                  Book a Free Strategy Call →
                </a>
              </div>
              <div style={{ borderRadius:16, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src="/main-services/Why White-Label Fulfillment Is a Great Investment for Your Agency.webp" alt="Why White-Label Fulfillment Is a Great Investment for Your Agency" style={{ width:'100%', display:'block', objectFit:'contain' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ TIMELINE ══════════════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                How We Handle Your <span style={{ color:'var(--ism-amber)' }}>Client Work</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                A simple process to get work off you and delivered to your clients.
              </p>
            </div>
            <div className="wl-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, position:'relative' }}>
              <div style={{ position:'absolute', top:28, left:'12.5%', width:'75%', height:2, background:'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex:0 }} />
              {TIMELINE_STEPS.map((step,i)=>(
                <div key={i} style={{ textAlign:'center', padding:'0 16px', position:'relative', zIndex:1 }}>
                  <div
                    onMouseEnter={()=>setHoveredStep(i)}
                    onMouseLeave={()=>setHoveredStep(null)}
                    style={{ width:56, height:56, borderRadius:'50%', background: hoveredStep===i ? (i===0?'var(--color-primary)':'var(--ism-amber)') : (i===0?'var(--ism-amber)':'var(--color-primary)'), display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', boxShadow: hoveredStep===i ? (i===0?'0 8px 26px rgba(30,77,195,.45)':'0 8px 26px rgba(255,176,0,.55)') : `0 4px 18px ${i===0?'rgba(255,176,0,.40)':'rgba(30,77,195,.30)'}`, border:'4px solid #fff', transition:'background .22s ease, box-shadow .22s ease, transform .22s ease', transform: hoveredStep===i ? 'scale(1.12)' : 'scale(1)', cursor:'default' }}
                  >
                    <span style={{ fontFamily:J, fontSize:18, fontWeight:900, color:'#fff' }}>{step.num}</span>
                  </div>
                  <div style={{ fontFamily:J, fontSize:12, fontWeight:800, color:'var(--color-navy)', marginBottom:10, lineHeight:1.3 }}>{step.period}</div>
                  <p style={{ fontFamily:I, fontSize:13, color:'var(--color-text-muted)', lineHeight:1.65, margin:0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign:'center', marginTop:56 }}>
              <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Book a Free Strategy Call
              </a>
            </div>
          </div>
        </section>

        {/* ══ PRICING ═══════════════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                White-label options built{' '}
                <span style={{ color:'var(--ism-amber)' }}>around your agency.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every engagement includes NDA, branded reporting, and a <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>dedicated agency account manager</span>.
              </p>
            </div>
            <div className="wl-plan-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, alignItems:'start' }}>
              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget; el.style.transform=''; el.style.boxShadow=''; }}
              >
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>STARTER</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Single Service</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>One white-label service for agencies just getting started with outsourcing.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['One service (SEO, PPC, or web)','White-label branded reporting','NDA and client confidentiality','Dedicated agency contact','Monthly strategy updates','Flexible month-to-month terms'].map((f,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.4 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11, marginTop:3, flexShrink:0 }} />{f}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background:'#fff', borderRadius:16, border:'2px solid var(--color-primary)', padding:'36px 32px', transform:'scale(1.04)', boxShadow:'0 16px 56px rgba(30,77,195,.18)', position:'relative', transition:'all .22s' }}>
                <div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', background:'var(--ism-amber)', borderRadius:100, padding:'5px 18px', whiteSpace:'nowrap' }}>
                  <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-navy)', letterSpacing:'.08em', textTransform:'uppercase' }}>Most Popular</span>
                </div>
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>GROWTH</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Multi-Service</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Multiple white-label services for agencies scaling across channels.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['2-4 services white-labeled','Full-service branded reporting','Priority turnaround times','Shared Slack channel access','Bi-weekly strategy calls','Volume pricing available'].map((f,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.4 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11, marginTop:3, flexShrink:0 }} />{f}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget; el.style.transform=''; el.style.boxShadow=''; }}
              >
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>AGENCY POD</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Dedicated Pod</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>A dedicated team of specialists assigned exclusively to your agency.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['Dedicated full-service team','Unlimited client volume','White-label dashboard access','Weekly account reviews','Custom SLA & turnaround times','Full NDA & brand protection'].map((f,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.4 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11, marginTop:3, flexShrink:0 }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div style={{ textAlign:'center', marginTop:44 }}>
              <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 40px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
              >
                Get Started <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
              </a>
            </div>
          </div>
        </section>

        {/* ══ WHY DIFFERENT ════════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div className="ism-container" style={{ maxWidth:1100 }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px', maxWidth:700, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>
                Why Agencies Choose Isuremedia for <span style={{ color:'var(--ism-amber)' }}>White Label Digital Marketing</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Get a white-label partner your agency can actually depend on.
              </p>
            </div>
            <div className="wl-diff-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {DIFFERENTIATORS.map((d,i)=>(
                <div key={i} style={{ background:d.dark?'var(--color-navy)':'var(--color-bg-soft)', borderRadius:16, border:`1px solid ${d.dark?'transparent':'var(--color-border)'}`, padding:'36px 30px', transition:'all .22s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget; el.style.transform=''; el.style.boxShadow=''; }}
                >
                  <div style={{ width:48, height:48, borderRadius:12, background:d.dark?'rgba(255,176,0,.15)':'rgba(30,77,195,.10)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20 }}>
                    <i className={d.icon} style={{ fontSize:20, color:d.dark?'var(--ism-amber)':'var(--color-primary)' }} />
                  </div>
                  <h3 style={{ fontFamily:J, fontSize:18, fontWeight:800, color:d.dark?'#fff':'var(--color-navy)', margin:'0 0 10px' }}>{d.title}</h3>
                  <p style={{ fontFamily:I, fontSize:14, color:d.dark?'rgba(255,255,255,.7)':'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ READY FOR RESULTS CTA ════════════════════════════════════════ */}
        <section style={{ background:'#fff', padding:'60px 28px' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', background:'var(--color-primary)', borderRadius:24, padding:'60px 64px', display:'grid', gridTemplateColumns:'1fr 420px', gap:48, alignItems:'center', position:'relative', overflow:'hidden' }} className="wl-rfr-grid">
            <div style={{ position:'absolute', top:'-30%', right:'30%', width:500, height:500, background:'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                <div style={{ width:28, height:3, background:'var(--ism-amber)', borderRadius:2 }} />
                <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.12em', textTransform:'uppercase' }}>Your Growth Starts Here</span>
              </div>
              <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.5vw,48px)', fontWeight:900, color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px', margin:'0 0 20px' }}>
                Ready to deliver more services<br /><span style={{ color:'var(--ism-amber)' }}>under your own brand?</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.80, margin:'0 0 36px', maxWidth:520 }}>
                Whether you are a solo consultant, a growing agency, or an established firm turning away work, the core question is the same: are you earning the total revenue your agency is capable of? Partner with Isuremedia to <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>offer more services, win larger accounts, and grow without high overhead</span>.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.55)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get a Free Agency Proposal
                </a>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'#fff', background:'transparent', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', border:'2px solid rgba(255,255,255,.40)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.40)'; e.currentTarget.style.background='transparent'; }}
                >
                  Talk to Our Team
                </a>
              </div>
            </div>
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'center', height:320 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" src="/result_footer/white label.webp" alt="White Label Partnership" style={{ height:'100%', width:'auto', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .wl-rfr-grid { grid-template-columns: 1fr !important; padding: 40px 28px !important; } }`}</style>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px)  { .wl-plan-grid { grid-template-columns: 1fr !important; } .wl-plan-grid > *:nth-child(2) { transform: none !important; } }
        @media (max-width: 900px)  { .wl-split { grid-template-columns: 1fr !important; gap: 36px !important; } }
        @media (max-width: 900px)  { .wl-diff-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px)  { .wl-diff-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px)  { .wl-timeline { grid-template-columns: 1fr !important; gap: 40px !important; } .wl-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; } }
        @media (max-width: 900px)  { .wl-faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } .wl-faq-sticky { position: static !important; } }
        @media (max-width: 640px)  { .wl-hero { padding: 56px 0 44px !important; } .wl-section { padding-top: 60px !important; padding-bottom: 60px !important; } }
      `}</style>
    </>
  );
}
