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
    img: '/images/casestudy-dummy.webp',
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
    img: '/images/casestudy-dummy.webp',
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
    desc: 'SEO is one of the highest-value recurring services an agency can offer, and one of the hardest to deliver without a dedicated team. We handle the full SEO delivery for your clients, technical audits, on-page optimisation, link building, content strategy, and monthly reporting, branded as your agency.',
    href: '/services/white-label/white-label-seo',
  },
  {
    title: 'White-Label PPC',
    icon: 'fa-solid fa-chart-bar',
    desc: 'Running paid ads for clients requires platform certifications, daily account management, and creative that converts. We manage Google, Meta, and LinkedIn campaigns for your agency clients, all reporting under your brand, recurring revenue without a PPC specialist on staff.',
    href: '/services/white-label/white-label-ppc',
  },
  {
    title: 'White-Label Web Development',
    icon: 'fa-solid fa-code',
    desc: 'Website projects are often where agencies lose money, scoped badly, delivered late, handed off to a freelancer who disappears. We deliver builds, landing pages, and redesigns under your agency label, with clean handover and no surprises on the timeline.',
    href: '/services/white-label/white-label-web-design',
  },
  {
    title: 'White-Label GoHighLevel',
    icon: 'fa-solid fa-bolt',
    desc: 'GoHighLevel is one of the fastest-growing platforms in the agency market, and clients increasingly ask for it by name. We set up sub-accounts, build funnels and automation, and configure CRMs under your agency brand, your clients never see our name in the account.',
    href: '/services/white-label/white-label-automation',
  },
  {
    title: 'White-Label Link Building',
    icon: 'fa-solid fa-link',
    desc: 'Link building is one of the most requested and most commonly outsourced SEO services. We run white-hat, outreach-based campaigns, real editorial placements with transparent reporting under your agency branding. No PBNs, no penalty risk.',
    href: '/services/white-label',
  },
  {
    title: 'White-Label Graphic Design',
    icon: 'fa-solid fa-palette',
    desc: 'On-demand design production for your client accounts, social creatives, ad assets, brand collateral, and presentation decks, produced to spec with zero Isuremedia branding on any asset.',
    href: '/services/white-label',
  },
  {
    title: 'White-Label Reporting & Dashboards',
    icon: 'fa-solid fa-chart-line',
    desc: 'Monthly reporting is where agency relationships are won or lost. We produce branded client reports covering SEO, paid ads, and website analytics, formatted to your template and delivered as your work.',
    href: '/services/white-label',
  },
  {
    title: 'Dedicated Agency Pods',
    icon: 'fa-solid fa-users',
    desc: 'Project-by-project outsourcing creates inconsistency, a different person on every brief, no institutional knowledge. A dedicated pod is a fixed team assigned to your agency, giving you the output of an in-house team without the cost of hiring one.',
    href: '/services/white-label/dedicated-agency-pods',
  },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Discovery Call & Setup', desc: 'We start with a call to understand your agency, your current clients, and how you work, briefing processes, project management tools, reporting preferences. Nothing starts until we have a workflow that fits how your agency operates, with branding and NDA terms agreed first.' },
  { num: 2, period: 'First Brief & Onboarding', desc: 'Your first project is treated as a calibration. We follow your brief closely, check in during production, and make sure output matches your standards before delivery. The goal is to establish the standard everything else is measured against.' },
  { num: 3, period: 'Ongoing Delivery', desc: 'Once the workflow is established, delivery runs on a predictable schedule, you send briefs, we deliver work, you review and send to your client. Reports go out branded as your agency, and you always have a direct contact who knows your accounts.' },
  { num: 4, period: 'Review & Scale', desc: 'Monthly we review what is working and what your agency needs next. If you win a new client and need to add a service, we add it; if a service needs to pause, it pauses. The partnership grows with your agency, not a fixed model.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-eye-slash',      title: 'Your Clients Never Discover Us',          desc: <>We <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>never contact your clients</span>, appear on any deliverable, or do anything that could reveal this partnership. Every report and asset goes out under your agency brand, and we sign NDAs if you need one. Your clients only ever see your agency.</> },
  { dark: false, icon: 'fa-solid fa-circle-check',   title: 'No Long-Term Contracts',                  desc: 'Start with one client and scale as your agency grows. Pause or stop any service when you need to, no minimum commitments, no penalties for changing scope. We earn the next month by delivering on this one.' },
  { dark: false, icon: 'fa-solid fa-users',          title: 'The Same Specialists Work on Your Accounts', desc: 'We do not rotate through different people every month. The same writers, SEO specialists, or developers handle your accounts each time, they know your clients and standards, and the work gets better over time.' },
  { dark: false, icon: 'fa-solid fa-building',       title: 'Every Service Delivered In-House',        desc: 'We do not outsource your work to another white-label provider. Everything is done by our in-house team, meaning consistent quality and no third-party handoffs creating risk for your agency.' },
  { dark: false, icon: 'fa-solid fa-sliders',        title: 'We Adapt to How You Work',                desc: 'We fit into your briefing process, project management tools, and reporting templates, not the other way around. If you use Asana, we use Asana, the partnership is built around how your agency already operates.' },
  { dark: false, icon: 'fa-solid fa-arrows-up-down', title: 'Scale Up or Down Anytime',                desc: 'Add a new service when a client asks for it, increase capacity when you win an account, reduce scope when a client pauses. White-label fulfillment flexes with your agency, not fixed costs you carry regardless.' },
];

const FAQS = [
  { q: 'Will my clients ever find out that Isuremedia is doing the work?', a: <>No. We <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>operate completely silently</span>. Every deliverable carries your agency branding, and we never reach out to your clients or mention Isuremedia anywhere. We sign NDAs before any work begins if you require one, your clients only ever see your agency.</> },
  { q: 'How do the briefs and handovers work?', a: 'During onboarding we set up a briefing process that fits how your agency already works, your project management tools, brief templates, and communication preferences. The workflow is designed to feel like an extension of your internal team, not an external supplier.' },
  { q: 'What services can you deliver white-label?', a: 'SEO, PPC, web development, GoHighLevel setup and automation, content marketing, link building, graphic design, white-label reporting, and dedicated agency pods. Use one service or all of them, scaled independently based on your client load.' },
  { q: 'How quickly can you turn around work?', a: 'It depends on the service. SEO reports and content pieces typically turn around in five to seven business days, website builds take two to six weeks, and ad campaign setup takes one to two weeks. Tell us your deadline and we build the schedule around it.' },
  { q: 'Can I start with just one client?', a: 'Yes. Most agency partnerships start with one client and grow from there. There is no minimum, start with one, prove the quality, and scale when you are ready.' },
  { q: 'Do you work with freelancers who are building toward agency?', a: 'Yes. Some of our strongest partners started as solo consultants. White-label fulfillment lets a one-person operation pitch and win full-service contracts without having a full-service team behind them.' },
  { q: 'How do you handle reporting?', a: 'Reports go out on the schedule your clients expect, in the format they are used to, branded as your agency, SEO performance, paid ad results, and campaign overviews. Send us your template and we will match it.' },
  { q: 'What if a deliverable does not meet our standard?', a: 'You review everything before it goes to your client. If something needs to change, we change it, we do not charge for revision rounds. Proper briefing upfront is why most work passes review without significant changes.' },
  { q: 'How is pricing structured?', a: 'It depends on the service and volume, some priced per project, some per month, pods priced on skill mix and hours. We give you an honest range on the call and confirm full pricing before any work begins. No hidden fees.' },
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
              Questions agencies ask before starting a <span style={{ color:'var(--ism-amber)' }}>white-label partnership.</span>
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Honest answers before you decide.
            </p>
            <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Book a Free Agency Call →
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
              Scale Your Agency Without Hiring.<br />
              <span style={{ color:'var(--ism-amber)' }}>Your Brand on Everything. Your Clients Never Know We Exist.</span>
            </h1>

            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:560, margin:'0 auto 36px' }}>
              We are the in-house team your agency does not have to hire. Isuremedia delivers SEO, PPC, web development, GoHighLevel setup, content marketing, graphic design, and more, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>completely under your agency brand</span>. Your clients deal with you, we handle the delivery, with no footprint anywhere your clients can see.
            </p>

            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:40 }}>
              <a href="/appointment"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Book a Free Agency Call
              </a>
              <a href="#wl-services"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget).style.background='var(--color-primary)'; (e.currentTarget).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget).style.background='transparent'; (e.currentTarget).style.color='var(--color-primary)'; }}
              >
                See What We Deliver
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
                Why White-Label Fulfillment <span style={{ color:'var(--ism-amber)' }}>Drives Agency Growth</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:620, margin:'0 auto', lineHeight:1.75 }}>
                The numbers behind what a white-label partnership actually does for your agency.
              </p>
            </div>

            <div className="wl-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'Most agencies can’t deliver every service a client needs', text:<>Limited headcount means saying no or scrambling for a freelancer. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>White-label means the answer is always yes</span>.</> },
                  { num:'02', title:'Hiring is the slowest way to add capacity', text:<>A senior specialist costs $80K+ a year and months to ramp up. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>A white-label partner adds that same capacity immediately</span>.</> },
                  { num:'03', title:'Margins shrink when costs scale with revenue', text:<>Variable fulfilment costs mean every new client adds revenue without a proportional cost. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>That is how agencies scale without burning out</span>.</> },
                  { num:'04', title:'Clients trust your brand, not who delivers it', text:<>As long as the work is good, clients don&apos;t need to know who produced it. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>It just needs to carry your name</span>.</> },
                  { num:'05', title:'You keep the relationship and the recurring revenue', text:<>The client stays yours, the invoice stays yours, and the margin stays yours. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>White-label adds a revenue line, not a dependency</span>.</> },
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
                <img src="/main-services/Why White-Label Fulfillment Drives Agency Growth.webp" alt="Why White-Label Fulfillment Drives Agency Growth" style={{ width:'100%', height:'100%', objectFit:'contain', display:'block' }} />
              </div>

            </div>

            <div style={{ background:'var(--ism-blue-50,#EEF2FF)', borderRadius:14, padding:'22px 28px', marginBottom:36, border:'1px solid rgba(30,77,195,.14)' }}>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-navy)', lineHeight:1.80, margin:0, fontStyle:'italic' }}>
                Isuremedia works as the <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>silent delivery arm</span> for agencies across the US, UK, and Canada. Your strategy. Your client relationships. Our execution. Every deliverable carries your brand.
              </p>
            </div>
            <div style={{ textAlign:'center' }}>
              <a href="/appointment"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 36px', borderRadius:9, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 24px rgba(255,176,0,.38)', transition:'all .18s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(255,176,0,.52)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 24px rgba(255,176,0,.38)'; }}
              >
                Book a Free Agency Call <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
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
                  src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/unblockseo-women.svg"
                  alt="White Label"
                  style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', height:'128%', width:'auto', maxWidth:'none', objectFit:'contain', objectPosition:'bottom center', display:'block' }}
                />
              </div>
              <div style={{ padding:'40px 52px 40px 32px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>
                  What could your agency be delivering <span style={{ color:'var(--ism-amber)' }}>under your own name?</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>
                  Book a free agency call and see <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>how the partnership would work</span> for your clients.
                </p>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Book My Free Agency Call <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
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
              White-Label Fulfilment Built to <span style={{ color:'var(--ism-amber)' }}>Grow Your Agency</span>
            </h2>
            <div className="wl-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
              <div style={{ borderRadius:14, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/main-services/White-Label Fulfilment Built to Grow Your Agency.webp" alt="White-Label Fulfilment Built to Grow Your Agency" style={{ width:'100%', display:'block', objectFit:'contain' }} />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>
                  The question every agency owner asks at some point is: <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>should I hire for this or find another way</span>? It almost always depends on how many clients you have for this service right now, and how confident you are that number stays that way.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  <strong style={{ color:'var(--color-navy)', fontWeight:700 }}>Hiring is a bet</strong> on client load staying consistent enough to justify a salary and the months it takes someone to get productive. <strong style={{ color:'var(--color-navy)', fontWeight:700 }}>White-label fulfillment is a variable cost that scales with your revenue instead</strong>, you pay for what your clients need this month, and add capacity when you win a new account.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  <strong style={{ color:'var(--color-navy)', fontWeight:700 }}>There is also a positioning argument.</strong> An agency that can say yes to any service a client asks for is more valuable than one that refers them elsewhere. The moment you do, you introduce a competitor into your client relationship, white-label keeps <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>everything under your control</span>.
                </p>
                <div style={{ marginTop:8 }}>
                  <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                  >
                    Start Delivering Under Your Brand <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 768px) { .wl-imgtext-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* ══ TESTIMONIALS ════════════════════════════════════════════════ */}
        <Testimonials />

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
                  Why White-Label Fulfillment Is a{' '}
                  <span style={{ color:'var(--ism-amber)' }}>Great Investment for Your Agency</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>
                  Turn Your Agency Into a Full-Service Operation Without Building a Full-Service Team
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>Isuremedia works as the silent delivery arm for agencies who want to offer more without hiring more.</strong> Your strategy, your client relationships, our execution, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>every deliverable carries your brand</span>. The agencies that grow fastest are not the ones with the biggest internal teams; they are the ones that can deliver more, consistently, without the overhead holding back the margin.
                  </p>
                </div>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.30)'; }}
                >
                  Book a Free Agency Call →
                </a>
              </div>
              <div style={{ borderRadius:16, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/main-services/Why White-Label Fulfillment Is a Great Investment for Your Agency.webp" alt="Why White-Label Fulfillment Is a Great Investment for Your Agency" style={{ width:'100%', display:'block', objectFit:'contain' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ TIMELINE ══════════════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                How the Partnership <span style={{ color:'var(--ism-amber)' }}>Works</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                From your first call to <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>delivering work under your brand</span>. Here is exactly what to expect.
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
                Book a Free Agency Call
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
                Why Agencies Choose Isuremedia for <span style={{ color:'var(--ism-amber)' }}>White-Label Fulfillment</span>
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
                Whether you are a solo consultant, a growing agency, or an established firm that keeps turning down work it cannot deliver, the question is the same. Are you getting the revenue your agency is capable of? If not, talk to us and we will help you deliver more services, win bigger clients, and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>grow without the overhead</span>.
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
              <img src="/result_footer/white label.webp" alt="White Label Partnership" style={{ height:'100%', width:'auto', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
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
