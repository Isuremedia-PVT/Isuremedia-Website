'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import ClientResults from '@/components/ClientResults';
import ReviewsStrip from '@/components/ReviewsStrip';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── DATA ─────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    title: 'White-Label SEO',
    icon: 'fa-solid fa-magnifying-glass',
    desc: 'SEO is one of the highest-value recurring services an agency can offer. We handle the full SEO delivery for your clients: technical audits, on-page optimisation, link building, content strategy, and monthly reporting — every deliverable branded as your agency. Your clients see your name on the rankings report, not ours.',
    href: '/services/white-label/white-label-seo',
  },
  {
    title: 'White-Label PPC',
    icon: 'fa-solid fa-chart-bar',
    desc: 'We manage Google Ads, Meta Ads, and LinkedIn campaigns for your agency clients, with all reporting and communication going out under your brand. Your clients get a properly managed paid ads service. You get recurring management revenue without a PPC specialist on staff.',
    href: '/services/white-label/white-label-ppc',
  },
  {
    title: 'White-Label Web Development',
    icon: 'fa-solid fa-code',
    desc: 'We deliver website builds, landing pages, redesigns, and migrations under your agency label. Clean handover, documented code, and no surprises on the delivery timeline. Your client gets a professional website. Your agency gets the credit.',
    href: '/services/white-label/white-label-web-design',
  },
  {
    title: 'White-Label GoHighLevel',
    icon: 'fa-solid fa-bolt',
    desc: 'We set up and configure GoHighLevel sub-accounts, build funnels and automation workflows, configure CRMs, and provide ongoing support under your agency brand. You offer GoHighLevel as a service. We deliver it. Your clients never see our name in the account.',
    href: '/services/white-label/white-label-automation',
  },
  {
    title: 'White-Label Content Marketing',
    icon: 'fa-solid fa-pen-nib',
    desc: 'We produce SEO blog writing, website copy, email newsletters, and social media content for your agency clients — delivered on brief, on time, and under your brand. Every piece matches the client\'s brand voice because we brief properly before we write anything.',
    href: '/services/white-label/white-label-content',
  },
  {
    title: 'White-Label Link Building',
    icon: 'fa-solid fa-link',
    desc: 'We run white-hat, outreach-based link acquisition campaigns for your agency clients: real editorial placements on real sites, with transparent reporting that goes to your client under your agency branding. No PBNs, no link farms, no tactics that create a penalty risk your agency would have to explain.',
    href: '/services/white-label',
  },
  {
    title: 'White-Label Graphic Design',
    icon: 'fa-solid fa-palette',
    desc: 'Social media creatives, ad assets, brand collateral, email templates, presentation decks, and infographics — all produced to spec and delivered with zero ISureMedia branding on any asset. Your clients get design work that looks like it came from your internal team. Because as far as they know, it did.',
    href: '/services/white-label',
  },
  {
    title: 'White-Label Reporting & Dashboards',
    icon: 'fa-solid fa-chart-line',
    desc: 'We produce branded client reports covering SEO performance, paid ad results, website analytics, and campaign summaries — formatted to your agency template and delivered to your clients as your work. Every metric your clients care about, in a report that carries your brand.',
    href: '/services/white-label',
  },
  {
    title: 'Dedicated Agency Pods',
    icon: 'fa-solid fa-users',
    desc: 'A fixed team of specialists assigned to your agency — the same writers, designers, SEO specialists, or developers working on your accounts every month. The output and reliability of an in-house team, without the cost or commitment of hiring one.',
    href: '/services/white-label',
  },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Discovery Call & Setup', desc: 'We start with a call to understand your agency, your clients, and how you work. We cover briefing processes, project management tools, reporting preferences, and NDA terms. Nothing starts until the workflow fits how your agency already operates.' },
  { num: 2, period: 'First Brief & Onboarding', desc: 'Your first project is treated as a calibration. We follow your brief closely, check in during production, and make sure the output matches your standards before delivery. The goal is to establish the benchmark everything else is measured against.' },
  { num: 3, period: 'Ongoing Delivery', desc: 'Once the workflow is established, delivery runs on a predictable schedule. You send briefs, we deliver work, you review and send to your client. Reports go out branded as your agency. You always have a direct contact who knows your accounts.' },
  { num: 4, period: 'Review & Scale', desc: 'Monthly we review what is working and what your agency needs next. If you win a new client, we add the service. If a service pauses, it pauses. The partnership grows with your agency, not locked into a fixed model.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-eye-slash',      title: 'Your Clients Never Discover Us',          desc: 'We never contact your clients, never appear on any deliverable, and never do anything that could reveal the existence of this partnership. Every report, every asset, and every communication goes out under your agency brand. We sign NDAs before any work begins. Your clients only ever see your agency.' },
  { dark: false, icon: 'fa-solid fa-circle-check',   title: 'No Long-Term Contracts',                  desc: 'Start with one client and scale as your agency grows. Pause or stop any service when you need to. There are no minimum commitments, no penalties for changing scope, and no pressure to stay. We earn the next month by delivering on this one.' },
  { dark: false, icon: 'fa-solid fa-users',          title: 'The Same Specialists, Every Month',       desc: 'We do not rotate through different people. Your accounts are handled by the same writers, SEO specialists, designers, or developers each time. They know your clients, they know your standards, and the work gets better over time rather than starting from scratch with every delivery.' },
  { dark: false, icon: 'fa-solid fa-building',       title: 'Every Service Delivered In-House',        desc: 'We do not outsource your work to another white-label provider. Everything is done by our in-house team. That means consistent quality, direct accountability, and no third-party handoffs creating risk for your agency or your clients.' },
  { dark: false, icon: 'fa-solid fa-sliders',        title: 'We Adapt to How You Work',                desc: 'We fit into your briefing process, your project management tools, and your reporting templates — not the other way around. If you use Asana, we use Asana. If you have a specific report format your clients expect, we produce reports in that format.' },
  { dark: false, icon: 'fa-solid fa-arrows-up-down', title: 'Scale Up or Down Anytime',                desc: 'Add a new service when a client asks for it. Increase capacity when you win a new account. Reduce scope when a client pauses. White-label fulfillment should flex with your agency, not commit you to fixed costs you carry whether the work is there or not.' },
];

const FAQS = [
  { q: 'Will my clients ever find out that ISureMedia is doing the work?', a: 'No. We operate completely silently. Every deliverable carries your agency branding. We never reach out to your clients, never mention ISureMedia in any report or deliverable, and never do anything that could reveal the existence of this partnership. We sign NDAs before any work begins if you require one. Your clients only ever see your agency throughout the entire engagement.' },
  { q: 'How do the briefs and handovers work?', a: 'During onboarding we set up a briefing process that fits how your agency already works. We adapt to your project management tools, your brief templates, and your communication preferences. You send us the brief the way you normally would, we deliver the work the way your clients expect to receive it. The workflow is designed to feel like an extension of your internal team, not an external supplier.' },
  { q: 'What services can you deliver white-label?', a: 'SEO, PPC, web development, GoHighLevel setup and automation, content marketing, link building, graphic design, white-label reporting and dashboards, and dedicated agency pods. You can use one service or all of them, and each can be scaled independently based on your client load.' },
  { q: 'How quickly can you turn around work?', a: 'It depends on the service and scope. SEO reports and content pieces typically turn around in five to seven business days. Website builds take two to six weeks depending on complexity. Ad campaign setup takes one to two weeks. For time-sensitive projects, tell us the deadline when you send the brief and we build the schedule around it.' },
  { q: 'Can I start with just one client?', a: 'Yes. Most agency partnerships start with one client and grow from there. There is no minimum client number to work with us. Start with one, prove the quality and the process, and scale from there when you are ready.' },
  { q: 'Do you work with freelancers who are building toward agency?', a: 'Yes. Some of our strongest partners started as solo consultants. White-label fulfillment is what lets a one-person operation pitch and win full-service agency contracts without having a full-service team behind them. If you are building toward agency scale, this is one of the most practical ways to get there.' },
  { q: 'How do you handle reporting?', a: 'Reports go out on the schedule your clients expect, in the format they are used to receiving, branded as your agency. We produce SEO performance reports, paid ad reports, website analytics summaries, and campaign overviews. If you have a specific template your clients have been receiving, send it to us and we produce to that format.' },
  { q: 'What if a deliverable does not meet our standard?', a: 'You review everything before it goes to your client. If something needs to change, we change it. We do not charge for revision rounds. Our goal is to produce work that passes your review without needing significant changes, which is why the briefing and onboarding process matters so much at the start.' },
  { q: 'How is pricing structured?', a: 'It depends on the service and volume. Some services are priced per project, some per month, and dedicated pods are priced based on the skill mix and hours needed. We give you an honest range on the call, and confirm the full pricing before any work begins. There are no hidden fees.' },
];

/* ── FAQ 2-COL ────────────────────────────────────────────────────── */
function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="wl-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div className="wl-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          <div style={{ position:'sticky', top:100 }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions agencies ask before starting a <span style={{ color:'var(--ism-amber)' }}>white-label partnership.</span>
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Phrased exactly as agency owners ask. The confidentiality question comes first because it matters most.
            </p>
            <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Get Started →
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

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>
            <h1 style={{ fontFamily:J, fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-2px', lineHeight:1.06, margin:'0 auto 24px', maxWidth:940 }}>
              Scale Your Agency<br />Without Hiring.<br />
              <span style={{ color:'var(--ism-amber)' }}>Your Brand on Everything.</span>
            </h1>

            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:560, margin:'0 auto 36px' }}>
              We are the in-house team your agency does not have to hire. SEO, PPC, web development, GoHighLevel, content, and more — delivered completely under your brand. Your clients deal with you. We handle everything else.
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
                onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
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
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>

            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,40px)', fontWeight:800, color:'var(--color-navy)', letterSpacing:'-0.4px', lineHeight:1.2, maxWidth:820, margin:'0 auto 14px' }}>
                Why White-Label Fulfillment <span style={{ color:'var(--ism-amber)' }}>Drives Agency Growth</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:620, margin:'0 auto', lineHeight:1.75 }}>
                The numbers behind what a white-label partnership actually does for your agency. Written for agency owners, not end-business clients.
              </p>
            </div>

            <div className="wl-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'Most agencies lose profitable clients because they cannot deliver the services the client needs', text:'An agency limited by its headcount says no when a client asks for SEO, PPC, or web development it cannot deliver. White-label fulfillment means the answer is always yes — delivered properly, by specialists.' },
                  { num:'02', title:'Hiring is the most expensive and slowest way to add service capacity', text:'A senior SEO specialist costs upwards of $80,000 a year before benefits and management time. A white-label partnership adds the same capacity immediately, scales with your client load, and stops when you need it to.' },
                  { num:'03', title:'Agency profit margins shrink when fulfillment costs scale with revenue', text:'The agencies with the strongest margins keep overhead lean and use white-label partners for delivery. When fulfillment is variable rather than fixed, every new client adds revenue without adding a proportional cost.' },
                  { num:'04', title:'Your clients trust your agency brand, not the tools or contractors behind it', text:'As long as the work is delivered well and your brand is on everything, your clients do not need to know how you produce it. White-label fulfillment lets you deliver enterprise-level work without an enterprise-level team.' },
                ].map(item => (
                  <div key={item.num} style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
                    <div style={{ fontFamily:J, fontSize:11.5, fontWeight:800, color:'var(--ism-amber)', letterSpacing:'.06em', flexShrink:0, paddingTop:3, minWidth:26 }}>{item.num} —</div>
                    <div>
                      <div style={{ fontFamily:J, fontSize:15, fontWeight:700, color:'var(--color-navy)', marginBottom:6, lineHeight:1.3 }}>{item.title}</div>
                      <div style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.78 }}>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="wl-strategy-mosaic" style={{ position:'relative', height:460 }}>
                <div style={{ position:'absolute', top:30, right:0, width:260, height:320, borderRadius:20, overflow:'hidden', boxShadow:'0 20px 56px rgba(0,0,0,.14)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                </div>
                <div style={{ position:'absolute', top:60, left:0, width:192, height:300, borderRadius:20, overflow:'hidden', boxShadow:'0 16px 44px rgba(0,0,0,.12)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                </div>
                <div style={{ position:'absolute', top:0, left:52, width:120, height:112, borderRadius:14, overflow:'hidden', boxShadow:'0 8px 28px rgba(0,0,0,.12)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                </div>
                <div style={{ position:'absolute', bottom:0, left:140, width:172, height:125, borderRadius:14, overflow:'hidden', boxShadow:'0 8px 28px rgba(0,0,0,.12)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                </div>
                <div style={{ position:'absolute', bottom:18, right:0, width:118, height:108, borderRadius:14, overflow:'hidden', boxShadow:'0 8px 24px rgba(0,0,0,.12)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                </div>
              </div>

            </div>

            <div style={{ background:'var(--ism-blue-50,#EEF2FF)', borderRadius:14, padding:'22px 28px', marginBottom:36, border:'1px solid rgba(30,77,195,.14)' }}>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-navy)', lineHeight:1.80, margin:0, fontStyle:'italic' }}>
                ISureMedia works as the silent delivery arm for agencies across the US, UK, and Canada. Your strategy. Your client relationships. Our execution. Every deliverable carries your brand.
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
        <div id="wl-results"><ClientResults /></div>

        {/* ══ CTA BANNER ═══════════════════════════════════════════════════ */}
        <section style={{ background:'#fff', padding:'70px 28px 52px', overflow:'hidden' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', position:'relative' }}>
            <div style={{ background:'#F5F5E6', borderRadius:24, display:'grid', gridTemplateColumns:'380px 1fr', minHeight:300 }} className="wl-cta-banner-grid">
              <div />
              <div style={{ padding:'40px 52px 40px 32px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>
                  Find out what your agency could be delivering <span style={{ color:'var(--ism-amber)' }}>under your own name.</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>
                  Book a free agency call. Tell us what services your clients are asking for and we will show you exactly how the partnership would work.
                </p>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Book My Free Agency Call <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                </a>
              </div>
            </div>
            <div style={{ position:'absolute', bottom:0, left:0, width:400, height:'calc(100% + 62px)', pointerEvents:'none', borderBottomLeftRadius:24, overflow:'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/unblockseo-women.svg" alt="Agency Partner" style={{ position:'absolute', bottom:0, left:0, height:'100%', width:'100%', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .wl-cta-banner-grid { grid-template-columns: 1fr !important; } .wl-cta-banner-grid > div:first-child { display: none !important; } }`}</style>
        </section>

        {/* ══ IMAGE + TEXT SECTION ════════════════════════════════════════ */}
        <section style={{ background:'var(--color-bg-soft)', padding:'88px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,38px)', fontWeight:800, color:'var(--color-navy)', textAlign:'center', letterSpacing:'-0.4px', lineHeight:1.2, margin:'0 auto 52px', maxWidth:820 }}>
              White-Label Fulfilment Built to <span style={{ color:'var(--ism-amber)' }}>Grow Your Agency</span>
            </h2>
            <div className="wl-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
              <div style={{ borderRadius:14, overflow:'hidden', boxShadow:'0 16px 56px rgba(0,0,0,.10)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Artboard.png" alt="White Label Agency Growth" style={{ width:'100%', display:'block', objectFit:'cover' }} />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>
                  The question every agency owner asks at some point is: should I hire for this or find another way? The answer almost always depends on how many clients you have for this service right now, and how confident you are that number is going to stay that way.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  <strong style={{ color:'var(--color-navy)', fontWeight:700 }}>Hiring is a bet.</strong> You are betting the client load will stay consistent enough to justify a salary, benefits, management overhead, and the months it takes to get someone productive. White-label fulfillment is a variable cost that scales with your revenue. You pay for what your clients need this month.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  <strong style={{ color:'var(--color-navy)', fontWeight:700 }}>There is also a positioning argument.</strong> An agency that can say yes to any digital marketing service a client asks for is a more valuable partner than one that refers them elsewhere. The moment you send a client to another agency for SEO or PPC, you have introduced a competitor into your client relationship.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  The agencies that grow fastest are not always the ones with the biggest internal teams. They are the ones that have worked out how to deliver more, consistently, without the overhead holding back the margin.
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
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <h2 id="wl-services" style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 12px' }}>
                Every White-Label Service <span style={{ color:'var(--ism-amber)' }}>Under One Roof</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Pick one service or all of them. Every deliverable carries your agency brand. Same quality standard regardless of volume.
              </p>
            </div>
            <div className="wl-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #E8EAF0', borderRadius:16, overflow:'hidden' }}>
              {SERVICES.map((s,i)=>(
                <div key={i} className={`wl-svc-cell wl-svc-cell-${i}`}
                  style={{ padding:'36px 32px', borderRight:(i+1)%3===0?'none':'1px solid #E8EAF0', borderBottom:i<6?'1px solid #E8EAF0':'none', background:'#fff', transition:'background .18s', cursor:'default' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.background='#F7F8FD'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.background='#fff'; }}
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
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div className="wl-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              <div>
                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px', lineHeight:1.12 }}>
                  Why White-Label Is a{' '}
                  <span style={{ color:'var(--ism-amber)' }}>Great Investment for Your Agency</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>
                  Turn Your Agency Into a Full-Service Operation Without Building a Full-Service Team
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>White-label fulfillment is a variable cost.</strong> You pay for what your clients need this month. You stop paying when a client pauses. You add capacity when you win a new account. The cost structure mirrors the revenue structure — the only model that makes sense for services businesses.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>An agency that says yes to everything is a more valuable partner.</strong> The moment you send a client to another agency for a service you cannot deliver, you have introduced a competitor into your client relationship. White-label keeps everything in-house, under your brand, under your control.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>The agencies that grow fastest are not the ones with the biggest teams.</strong> They are the ones that have worked out how to deliver more, consistently, without the overhead holding back the margin.
                  </p>
                </div>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.30)'; }}
                >
                  Book a Free Agency Call →
                </a>
              </div>
              <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 24px 72px rgba(0,0,0,.35)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Artboard.png" alt="Agency Scale" style={{ width:'100%', display:'block', objectFit:'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ TIMELINE ══════════════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                How the Partnership <span style={{ color:'var(--ism-amber)' }}>Works</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                From your first call to delivering work under your brand. Here is exactly what to expect.
              </p>
            </div>
            <div className="wl-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, position:'relative' }}>
              <div style={{ position:'absolute', top:28, left:'12.5%', width:'75%', height:2, background:'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex:0 }} />
              {TIMELINE_STEPS.map((step,i)=>(
                <div key={i} style={{ textAlign:'center', padding:'0 16px', position:'relative', zIndex:1 }}>
                  <div style={{ width:56, height:56, borderRadius:'50%', background:i===0?'var(--ism-amber)':'var(--color-primary)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', boxShadow:`0 4px 18px ${i===0?'rgba(255,176,0,.40)':'rgba(30,77,195,.30)'}`, border:'4px solid #fff' }}>
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
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                White-label options built{' '}
                <span style={{ color:'var(--ism-amber)' }}>around your agency.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every engagement includes NDA, branded reporting, and a dedicated agency account manager.
              </p>
            </div>
            <div className="wl-plan-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, alignItems:'start' }}>
              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
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
                <a href="/contact" style={{ display:'block', textAlign:'center', padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(255,176,0,.40)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}
                >
                  Get Started
                </a>
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
                <a href="/contact" style={{ display:'block', textAlign:'center', padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Start Scaling
                </a>
              </div>

              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
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
                <a href="/contact" style={{ display:'block', textAlign:'center', padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
                >
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ WHY DIFFERENT ════════════════════════════════════════════════ */}
        <section className="wl-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px', maxWidth:700, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>
                Why Agencies Choose ISureMedia for <span style={{ color:'var(--ism-amber)' }}>White-Label Fulfillment</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Get a white-label partner your agency can actually depend on.
              </p>
            </div>
            <div className="wl-diff-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {DIFFERENTIATORS.map((d,i)=>(
                <div key={i} style={{ background:d.dark?'var(--color-navy)':'var(--color-bg-soft)', borderRadius:16, border:`1px solid ${d.dark?'transparent':'var(--color-border)'}`, padding:'36px 30px', transition:'all .22s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
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
                Whether you are a solo consultant, a growing agency, or an established firm that keeps turning down work it cannot deliver — talk to us today. We will help you deliver more services, win bigger clients, and grow without the overhead.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.55)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get a Free Agency Proposal
                </a>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'#fff', background:'transparent', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', border:'2px solid rgba(255,255,255,.40)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.40)'; e.currentTarget.style.background='transparent'; }}
                >
                  Talk to Our Team
                </a>
              </div>
            </div>
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'center', height:320 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/files/jeff-vosburg-img.png" alt="Agency Partner" style={{ height:'100%', width:'auto', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
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
        @media (max-width: 900px)  { .wl-faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 640px)  { .wl-hero { padding: 56px 0 44px !important; } .wl-section { padding-top: 60px !important; padding-bottom: 60px !important; } }
      `}</style>
    </>
  );
}
