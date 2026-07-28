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
    title: 'Business Websites',
    icon: 'fa-solid fa-globe',
    desc: 'Your website is the first thing most buyers see. We build professional, fast-loading business websites that make the right impression and move visitors toward taking action — whether that is calling you, booking an appointment, or requesting a quote.',
    href: '/services/websites-funnels',
  },
  {
    title: 'Landing Pages',
    icon: 'fa-solid fa-file-lines',
    desc: 'A landing page has one job — get the visitor to take one action. We design and build high-converting landing pages for paid ads, email campaigns, and organic traffic. Every element is built around your offer and your audience.',
    href: '/services/websites-funnels',
  },
  {
    title: 'Sales Funnels',
    icon: 'fa-solid fa-filter',
    desc: 'A funnel takes someone from not knowing you exist to becoming a paying customer. We map out the entire journey, build the pages, connect the automations, and test everything before traffic goes live.',
    href: '/services/websites-funnels',
  },
  {
    title: 'GoHighLevel Funnels & Automation',
    icon: 'fa-solid fa-bolt',
    desc: 'GoHighLevel is one of the most powerful all-in-one platforms for agencies and service businesses. We build complete GHL setups — funnels, CRM, automations, pipelines, and calendars — so everything works from day one.',
    href: '/services/websites-funnels',
  },
  {
    title: 'WordPress Website Design',
    icon: 'fa-brands fa-wordpress',
    desc: 'WordPress powers nearly half the web for a reason. We build WordPress sites that are fast, secure, easy to manage, and built for search. You get a professional site you can update yourself without needing a developer every time.',
    href: '/services/websites-funnels',
  },
  {
    title: 'Shopify & E-Commerce',
    icon: 'fa-solid fa-cart-shopping',
    desc: 'Selling online requires more than a product page. We build Shopify stores and e-commerce sites designed to reduce cart abandonment, increase average order value, and make buying as easy as possible for your customers.',
    href: '/services/websites-funnels',
  },
  {
    title: 'Website Redesign',
    icon: 'fa-solid fa-pen-ruler',
    desc: 'If your current site looks outdated, loads slowly, or just does not convert, a redesign is often the highest-ROI move you can make. We audit what you have, identify exactly what is holding it back, and build a better version.',
    href: '/services/websites-funnels',
  },
  {
    title: 'Conversion Rate Optimization',
    icon: 'fa-solid fa-chart-line',
    desc: 'More traffic is not always the answer. If your site already gets visitors but they are not converting, CRO is what moves the needle. We analyse your pages, test changes, and improve the percentage of visitors who take the action you want.',
    href: '/services/websites-funnels',
  },
  {
    title: 'Webflow Development',
    icon: 'fa-solid fa-layer-group',
    desc: 'Webflow gives you a visually stunning, fully custom site without the complexity of traditional code. We build pixel-perfect Webflow sites for brands that need something distinctive — fast, scalable, and easy for your team to manage.',
    href: '/services/websites-funnels',
  },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Discovery & Strategy', desc: 'We start by understanding your business, your customers, and what success looks like. We map out the site structure, page goals, and conversion strategy before any design work begins.' },
  { num: 2, period: 'Design & Wireframes', desc: 'You see exactly how the site will look and flow before a single line of code is written. We present wireframes and design mockups and refine them until everything feels right.' },
  { num: 3, period: 'Development & Build', desc: 'We build your site using the right platform for your needs — WordPress, Webflow, Shopify, or a custom stack. Everything is built for speed, mobile responsiveness, and conversion.' },
  { num: 4, period: 'Launch & Testing', desc: 'Before anything goes live, we run through a full QA checklist — speed tests, mobile checks, form testing, link checks, and browser compatibility. Nothing launches broken.' },
  { num: 5, period: 'Optimise & Scale', desc: 'After launch we track performance — where people drop off, what pages convert best, and what to improve. We run tests and make changes that keep improving your results over time.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-bullseye',      title: 'Built for Conversions, Not Just Looks',   desc: 'A beautiful website that does not convert is just an expensive brochure. Every site we build is designed around one outcome — getting your visitors to take the action that grows your business. We combine design, copy, and structure to make that happen.' },
  { dark: false, icon: 'fa-solid fa-bolt',           title: 'GoHighLevel and Funnel Specialists',      desc: 'Most web agencies build sites. We build systems. Our team includes specialists in GoHighLevel, ClickFunnels, and sales funnel strategy. If you need a site that connects to your CRM, automations, and pipeline — we know how to make it all work together.' },
  { dark: false, icon: 'fa-solid fa-circle-check',   title: 'No Contracts. Month to Month.',           desc: 'We do not lock clients into long-term agreements because we do not need to. The results we deliver are what keep clients with us. You are free to pause or cancel any ongoing support with 30 days notice — no penalty, no awkward conversations.' },
  { dark: false, icon: 'fa-solid fa-mobile-screen',  title: 'Mobile-First by Default',                 desc: 'More than half of all web traffic comes from mobile. Every site we build is designed and tested on mobile first. You will never get a site from us that looks great on desktop but falls apart on a phone.' },
  { dark: false, icon: 'fa-solid fa-gauge-high',     title: 'Performance Built In from the Start',     desc: 'Slow sites lose visitors before they even read your headline. We build for speed from the start — optimised images, clean code, and hosting recommendations that keep load times low and Core Web Vitals scores high.' },
  { dark: false, icon: 'fa-solid fa-headset',        title: 'One Contact. No Handoffs.',               desc: 'You work with one project manager who knows your business from day one. No being passed between departments, no repeating yourself to different people. One person owns your project and you can reach them directly.' },
];

const FAQS = [
  { q: 'How long does a website build take?', a: 'A standard business website typically takes three to six weeks from kickoff to launch. More complex builds — e-commerce stores, custom integrations, or multi-page funnel setups — can take six to twelve weeks. We give you a timeline at the start and keep you updated throughout. Nothing surprises you.' },
  { q: 'Which platform do you build on?', a: 'We build on WordPress, Webflow, Shopify, GoHighLevel, and custom stacks. The platform we recommend depends on your goals, your technical team, and how you plan to manage the site after launch. We help you make the right choice for your situation, not just what is easiest for us.' },
  { q: 'Do you do GoHighLevel funnel builds?', a: 'Yes. GoHighLevel is one of our core specialisms. We build complete GHL setups — funnels, automations, CRM pipelines, calendars, email and SMS sequences. If you are a business using GHL or an agency that needs GHL built for clients, we handle the full build and configuration.' },
  { q: 'Can you redesign my existing website?', a: 'Yes. Website redesigns make up a significant part of our work. We start by auditing your current site — what is working, what is not, and what is holding your conversions back. The redesign is built around fixing those specific problems, not just changing how things look.' },
  { q: 'Will I be able to update the site myself?', a: 'Yes. We build sites so that the people who own them can make content updates without needing a developer. We provide documentation and a walkthrough after launch so you know exactly how to make changes. If you ever need help, your contact is still available.' },
  { q: 'Do you build e-commerce websites?', a: 'Yes. We build Shopify stores and WooCommerce sites for businesses selling products online. We handle the product setup, payment integration, shipping configuration, and the design work that makes your store easy to buy from. For existing stores, we also do CRO work to improve what you already have.' },
  { q: 'What is conversion rate optimisation?', a: 'CRO is the process of improving your website so a higher percentage of visitors take the action you want — buying, booking, calling, or signing up. We analyse where people leave, what they click, and what the data shows, then make changes and test them to see what works better.' },
  { q: 'Do you offer website maintenance after launch?', a: 'Yes. We offer ongoing maintenance plans that cover security updates, plugin and platform updates, uptime monitoring, and regular backups. You can also add CRO, content updates, or design changes to your plan as your business grows.' },
];

/* ── PILL ─────────────────────────────────────────────────────────── */
function Pill({ text, amber }: { text: string; amber?: boolean }) {
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:8, background: amber ? 'rgba(255,176,0,.10)' : 'var(--ism-blue-50)', border:`1px solid ${amber ? 'rgba(255,176,0,.30)' : 'var(--ism-blue-100)'}`, borderRadius:100, padding:'6px 18px', marginBottom:20 }}>
      <span style={{ width:7, height:7, borderRadius:'50%', background: amber ? 'var(--ism-amber)' : 'var(--color-primary)', display:'inline-block' }} />
      <span style={{ fontFamily:J, fontSize:12, fontWeight:700, color: amber ? 'var(--ism-amber)' : 'var(--color-primary)', letterSpacing:'.09em', textTransform:'uppercase' as const }}>{text}</span>
    </div>
  );
}

/* ── FAQ 2-COL ────────────────────────────────────────────────────── */
function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="web-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div className="web-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          {/* Left */}
          <div style={{ position:'sticky', top:100 }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions About <span style={{ color:'var(--ism-amber)' }}>Websites & Funnels</span>
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Honest answers before you decide. No spin, no buzzwords.
            </p>
            <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Get Started →
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

/* ══ PAGE ═════════════════════════════════════════════════════════════ */
export default function WebsitesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <section className="web-hero" style={{ background:'linear-gradient(160deg,#EDF2FF 0%,#F7F8FA 48%,#FFFBEB 100%)', padding:'96px 0 64px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-80, right:-60, width:460, height:460, background:'rgba(30,77,195,0.18)', borderRadius:'58% 42% 50% 50% / 46% 58% 42% 54%', filter:'blur(50px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:-60, left:-50, width:360, height:360, background:'rgba(255,176,0,0.13)', borderRadius:'46% 54% 62% 38% / 54% 46% 54% 46%', filter:'blur(44px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'25%', left:'38%', width:260, height:260, background:'rgba(30,77,195,0.08)', borderRadius:'50% 50% 38% 62% / 62% 38% 62% 38%', filter:'blur(38px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)', width:900, height:400, background:'radial-gradient(ellipse,rgba(30,77,195,.04) 0%,transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:32, left:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(30,77,195,.18) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />
          <div style={{ position:'absolute', bottom:32, right:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(255,176,0,.25) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>
            <h1 style={{ fontFamily:J, fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-2px', lineHeight:1.06, margin:'0 auto 24px', maxWidth:940 }}>
              Websites That Win.<br />
              Funnels That Convert.<br />
              <span style={{ color:'var(--ism-amber)' }}>Results You Can Measure.</span>
            </h1>

            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:600, margin:'0 auto 36px' }}>
              We design and build websites, landing pages, and sales funnels that turn your traffic into leads and customers — every page built around one goal: more conversions.
            </p>

            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Start My Website Project
              </a>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
              >
                Get a Free Proposal
              </a>
            </div>
          </div>
        </section>

        {/* ══ REVIEWS BAR ══════════════════════════════════════════════════ */}
        <ReviewsStrip />

        {/* ══ 2. STRATEGY SECTION ══════════════════════════════════════════ */}
        <section className="web-strategy-section" style={{ background:'#fff', padding:'88px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>

            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,40px)', fontWeight:800, color:'var(--color-navy)', letterSpacing:'-0.4px', lineHeight:1.2, maxWidth:820, margin:'0 auto 14px' }}>
                Why Your Website Is Your <span style={{ color:'var(--ism-amber)' }}>Most Important</span> Marketing Asset
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:580, margin:'0 auto', lineHeight:1.75 }}>
                Your website is where every marketing dollar lands. Here is what the data says about what that means for your business.
              </p>
            </div>

            <div className="web-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'The average website converts less than 2% of visitors', text:'A well-built site with the right copy, structure, and calls to action can convert at 5%, 8%, or higher — using the exact same traffic. That difference is worth more than any ad campaign.' },
                  { num:'02', title:'Every marketing channel sends people to your website', text:'Whether someone finds you through Google, a paid ad, social media, or a referral — they land on your site. If it does not convert them, every dollar you spend getting them there is underperforming.' },
                  { num:'03', title:'Mobile traffic is the majority — and most sites lose it', text:'More than half of all web traffic comes from mobile devices. A site that looks great on desktop but struggles on mobile loses more than half its potential customers before they even read your offer.' },
                  { num:'04', title:'A sales funnel converts cold traffic into paying customers', text:'A funnel takes someone from not knowing you to becoming a customer. When every page is built around one goal and connected to the next step, conversion rates climb significantly.' },
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

              <div className="web-strategy-mosaic" style={{ position:'relative', height:460 }}>
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

            <div style={{ textAlign:'center' }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 36px', borderRadius:9, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 24px rgba(255,176,0,.38)', transition:'all .18s', whiteSpace:'nowrap' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(255,176,0,.52)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 24px rgba(255,176,0,.38)'; }}
              >
                Get a Free Website Proposal <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
              </a>
            </div>

          </div>
          <style>{`
            @media (max-width: 768px) {
              .web-strategy-section { padding: 56px 0 !important; }
              .web-strategy-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
              .web-strategy-mosaic { display: none !important; }
            }
            @media (max-width: 480px) {
              .web-strategy-section { padding: 44px 0 !important; }
            }
          `}</style>
        </section>

        {/* ══ 3. CLIENT RESULTS ════════════════════════════════════════════ */}
        <div id="web-results"><ClientResults /></div>

        {/* ══ CTA BANNER ═══════════════════════════════════════════════════ */}
        <section style={{ background:'#fff', padding:'70px 28px 52px', overflow:'hidden' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', position:'relative' }}>
            <div style={{ background:'#F5F5E6', borderRadius:24, display:'grid', gridTemplateColumns:'380px 1fr', minHeight:300 }} className="web-cta-banner-grid">
              <div />
              <div style={{ padding:'40px 52px 40px 32px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>
                  Is your current website losing you <span style={{ color:'var(--ism-amber)' }}>customers every day?</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>
                  Get a free website audit and find out exactly what is stopping your visitors from converting.
                </p>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get My Free Website Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                </a>
              </div>
            </div>
            <div style={{ position:'absolute', bottom:0, left:0, width:400, height:'calc(100% + 62px)', pointerEvents:'none', borderBottomLeftRadius:24, overflow:'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/unblockseo-women.svg" alt="Web Expert" style={{ position:'absolute', bottom:0, left:0, height:'100%', width:'100%', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .web-cta-banner-grid { grid-template-columns: 1fr !important; } .web-cta-banner-grid > div:first-child { display: none !important; } }`}</style>
        </section>

        {/* ══ IMAGE + TEXT SECTION ════════════════════════════════════════ */}
        <section style={{ background:'var(--color-bg-soft)', padding:'88px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,38px)', fontWeight:800, color:'var(--color-navy)', textAlign:'center', letterSpacing:'-0.4px', lineHeight:1.2, margin:'0 auto 52px', maxWidth:820 }}>
              Websites and Funnels That <span style={{ color:'var(--ism-amber)' }}>Work Harder</span> for Your Business
            </h2>
            <div className="web-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
              <div style={{ borderRadius:14, overflow:'hidden', boxShadow:'0 16px 56px rgba(0,0,0,.10)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/sales-funnel-illustration.webp" alt="Website Growth Strategy" style={{ width:'100%', display:'block', objectFit:'cover' }} />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>
                  Most websites look fine but perform poorly. The gap between a site that looks good and a site that converts consistently comes down to structure, copy, speed, and how clearly it communicates what you do and why someone should choose you.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  We do not design websites and then hand them over and wish you luck. We stay involved through launch and beyond — tracking how pages perform, running A/B tests, and making improvements based on real data.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Whether you need a single landing page or a full multi-step sales funnel, we build it the same way — around your customer, around your offer, and around the result you are trying to achieve.
                </p>
                <div style={{ marginTop:8 }}>
                  <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                  >
                    Start My Project <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 768px) { .web-imgtext-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* ══ TESTIMONIALS ════════════════════════════════════════════════ */}
        <Testimonials />

        {/* ══ SERVICES GRID ════════════════════════════════════════════════ */}
        <section className="web-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 12px' }}>
                Our Complete <span style={{ color:'var(--ism-amber)' }}>Web & Funnel Services</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every service built around one goal — more conversions from the traffic you already have.
              </p>
            </div>
            <div className="web-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #E8EAF0', borderRadius:16, overflow:'hidden' }}>
              {SERVICES.map((s,i)=>(
                <div key={i} className={`web-svc-cell web-svc-cell-${i}`}
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
            @media (max-width: 900px) { .web-svc-grid { grid-template-columns: repeat(2,1fr) !important; } .web-svc-cell-1,.web-svc-cell-3,.web-svc-cell-5,.web-svc-cell-7 { border-right: none !important; } .web-svc-cell-0,.web-svc-cell-1,.web-svc-cell-2,.web-svc-cell-3,.web-svc-cell-4,.web-svc-cell-5,.web-svc-cell-6,.web-svc-cell-7 { border-bottom: 1px solid #E8EAF0 !important; } .web-svc-cell-8 { border-bottom: none !important; border-right: none !important; } }
            @media (max-width: 560px) { .web-svc-grid { grid-template-columns: 1fr !important; } .web-svc-cell { border-right: none !important; border-bottom: 1px solid #E8EAF0 !important; } .web-svc-cell-8 { border-bottom: none !important; } }
          `}</style>
        </section>

        {/* ══ DARK NAVY SECTION ════════════════════════════════════════════ */}
        <section className="web-section" style={{ background:'var(--color-navy)', padding:'90px 0', color:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div className="web-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              <div>
                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px', lineHeight:1.12 }}>
                  Why a Great Website Is a{' '}
                  <span style={{ color:'var(--ism-amber)' }}>Growth Investment</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>
                  Turn Your Website Into Your Highest-ROI Marketing Channel
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>A 1% improvement in conversion rate can double your revenue.</strong> The same traffic. The same ad budget. Just a site that converts more of the people already visiting.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>Every other marketing channel sends people to your site.</strong> SEO, paid ads, email, social — they all send people to a page. If that page does not convert, the whole funnel underperforms.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>The best websites keep getting better.</strong> With CRO, your site improves month over month based on data. It compounds just like SEO does.
                  </p>
                </div>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.30)'; }}
                >
                  Build My Converting Website →
                </a>
              </div>
              <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 24px 72px rgba(0,0,0,.35)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/global-growth-illustration.webp" alt="Website Growth" style={{ width:'100%', display:'block', objectFit:'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ TIMELINE ══════════════════════════════════════════════════════ */}
        <section className="web-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                Isuremedia&apos;s Proven Process for <span style={{ color:'var(--ism-amber)' }}>Websites That Convert</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                From first conversation to live site — here is exactly how we work.
              </p>
            </div>
            <div className="web-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:0, position:'relative' }}>
              <div style={{ position:'absolute', top:28, left:'10%', width:'80%', height:2, background:'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex:0 }} />
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
              <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Start My Website Project
              </a>
            </div>
          </div>
        </section>

        {/* ══ PRICING ═══════════════════════════════════════════════════════ */}
        <section className="web-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                Start with the right scope{' '}
                <span style={{ color:'var(--ism-amber)' }}>for your goals.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every project includes a dedicated project manager and post-launch support.
              </p>
            </div>
            <div className="web-plan-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, alignItems:'start' }}>
              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
              >
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>STARTER</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Landing Page</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Single high-converting page for ads, campaigns, or lead gen.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['Custom design & copywriting','Mobile-first responsive','Form & CRM integration','Speed-optimised build','A/B test-ready structure','30-day post-launch support'].map((f,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.4 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11, marginTop:3, flexShrink:0 }} />{f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" style={{ display:'block', textAlign:'center', padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(255,176,0,.40)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}
                >
                  Get a Landing Page
                </a>
              </div>

              <div style={{ background:'#fff', borderRadius:16, border:'2px solid var(--color-primary)', padding:'36px 32px', transform:'scale(1.04)', boxShadow:'0 16px 56px rgba(30,77,195,.18)', position:'relative', transition:'all .22s' }}>
                <div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', background:'var(--ism-amber)', borderRadius:100, padding:'5px 18px', whiteSpace:'nowrap' }}>
                  <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-navy)', letterSpacing:'.08em', textTransform:'uppercase' }}>Most Popular</span>
                </div>
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>GROWTH</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Business Website</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Full business website built to rank, convert, and grow.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['Multi-page custom design','SEO-ready architecture','CRM & analytics integration','Conversion copywriting','Speed & Core Web Vitals optimised','3-month post-launch support'].map((f,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.4 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11, marginTop:3, flexShrink:0 }} />{f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" style={{ display:'block', textAlign:'center', padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Start Growing
                </a>
              </div>

              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
              >
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>ENTERPRISE</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Funnel & E-Commerce</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Full sales funnel or e-commerce store with automation and ongoing CRO.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['Full funnel or e-commerce build','GoHighLevel / Shopify setup','Automation & CRM connection','Payment & checkout optimisation','Ongoing CRO management','Dedicated project manager'].map((f,i)=>(
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
        <section className="web-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px', maxWidth:700, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>
                Why Businesses Choose Isuremedia for <span style={{ color:'var(--ism-amber)' }}>Their Website</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                We build sites that work — not just sites that look good.
              </p>
            </div>
            <div className="web-diff-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
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
          <div style={{ maxWidth:1200, margin:'0 auto', background:'var(--color-primary)', borderRadius:24, padding:'60px 64px', display:'grid', gridTemplateColumns:'1fr 420px', gap:48, alignItems:'center', position:'relative', overflow:'hidden' }} className="web-rfr-grid">
            <div style={{ position:'absolute', top:'-30%', right:'30%', width:500, height:500, background:'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                <div style={{ width:28, height:3, background:'var(--ism-amber)', borderRadius:2 }} />
                <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.12em', textTransform:'uppercase' }}>Your Growth Starts Here</span>
              </div>
              <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.5vw,48px)', fontWeight:900, color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px', margin:'0 0 20px' }}>
                Ready to turn your website into<br />your <span style={{ color:'var(--ism-amber)' }}>best sales tool?</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.80, margin:'0 0 36px', maxWidth:520 }}>
                Whether you need a new site from scratch, a funnel built, or an existing site redesigned to convert better — we build it around results. Talk to us today and we will tell you exactly what your website needs.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.55)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get My Free Website Audit
                </a>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'#fff', background:'transparent', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', border:'2px solid rgba(255,255,255,.40)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.40)'; e.currentTarget.style.background='transparent'; }}
                >
                  Talk to Our Team
                </a>
              </div>
            </div>
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'center', height:320 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/files/jeff-vosburg-img.png" alt="Client" style={{ height:'100%', width:'auto', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .web-rfr-grid { grid-template-columns: 1fr !important; padding: 40px 28px !important; } }`}</style>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px)  { .web-plan-grid { grid-template-columns: 1fr !important; } .web-plan-grid > *:nth-child(2) { transform: none !important; } }
        @media (max-width: 900px)  { .web-split { grid-template-columns: 1fr !important; gap: 36px !important; } }
        @media (max-width: 900px)  { .web-diff-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px)  { .web-diff-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px)  { .web-timeline { grid-template-columns: 1fr !important; gap: 40px !important; } .web-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; } }
        @media (max-width: 900px)  { .web-faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 640px)  { .web-hero { padding: 56px 0 44px !important; } .web-section { padding-top: 60px !important; padding-bottom: 60px !important; } }
      `}</style>
    </>
  );
}
