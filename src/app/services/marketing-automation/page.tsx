'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import ClientResults from '@/components/ClientResults';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── DATA ─────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    title: 'GoHighLevel Setup & Automation',
    icon: 'fa-solid fa-bolt',
    desc: 'GoHighLevel is the most powerful all-in-one platform for service businesses and agencies. We handle the complete setup — CRM, pipelines, funnels, calendars, email and SMS automations — everything configured to match how your business actually works.',
    href: '/services/marketing-automation',
  },
  {
    title: 'CRM Setup & Management',
    icon: 'fa-solid fa-users',
    desc: 'Your CRM should work the way your sales process works — not the other way around. We set up, customise, and manage your CRM so leads are tracked, followed up with, and moved through your pipeline automatically. No more leads falling through the cracks.',
    href: '/services/marketing-automation',
  },
  {
    title: 'Lead Nurture Workflows',
    icon: 'fa-solid fa-route',
    desc: 'Most leads are not ready to buy the day they come in. A well-built nurture sequence keeps your business in front of them until they are. We design and build email and SMS sequences that warm leads up and move them toward a buying decision automatically.',
    href: '/services/marketing-automation',
  },
  {
    title: 'Appointment Booking Systems',
    icon: 'fa-solid fa-calendar-check',
    desc: 'Manual appointment scheduling wastes time and creates friction. We build automated booking systems that let leads schedule directly from your website, landing page, or follow-up sequence — reducing no-shows with automated reminders along the way.',
    href: '/services/marketing-automation',
  },
  {
    title: 'Email & SMS Automation',
    icon: 'fa-solid fa-envelope',
    desc: 'Email and SMS sequences that run on autopilot — welcome sequences, re-engagement flows, post-purchase follow-ups, and review request campaigns. We write the copy, build the sequences, and set up the triggers so every message lands at the right time.',
    href: '/services/marketing-automation',
  },
  {
    title: 'AI Chatbot & Conversation Automation',
    icon: 'fa-solid fa-robot',
    desc: 'An AI chatbot that works around the clock — answering common questions, qualifying leads, and booking appointments without any human involvement. We build, train, and deploy chatbots that handle your most common conversations automatically.',
    href: '/services/marketing-automation',
  },
  {
    title: 'Make & Zapier Workflows',
    icon: 'fa-solid fa-diagram-project',
    desc: 'Connect the tools your business already uses. We build Make (Integromat) and Zapier workflows that pass data between your CRM, website, email platform, payment processor, and any other app — eliminating manual data entry and keeping everything in sync.',
    href: '/services/marketing-automation',
  },
  {
    title: 'n8n Workflow Automation',
    icon: 'fa-solid fa-code-branch',
    desc: 'For businesses that need more control and flexibility, n8n gives you powerful self-hosted automation without per-task pricing. We design and build n8n workflows for complex automation needs — API connections, data processing, and multi-step business logic.',
    href: '/services/marketing-automation',
  },
  {
    title: 'Reputation Management Automation',
    icon: 'fa-solid fa-star',
    desc: 'More reviews come in when the request is automatic. We build review request sequences that go out at the right moment in your customer journey — after a job is completed, a purchase is made, or a positive interaction happens — driving consistent review volume without manual effort.',
    href: '/services/marketing-automation',
  },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Business Process Audit', desc: 'We map out how your business actually operates — where leads come in, how they are followed up with, where manual work is happening, and where things fall through the cracks. This tells us exactly what to automate first.' },
  { num: 2, period: 'Automation Strategy', desc: 'We design the full automation plan — which tools, which workflows, which triggers, and what the output should look like. You see the complete picture before any build begins.' },
  { num: 3, period: 'Build & Configure', desc: 'We build every workflow, write every email and SMS, set up every trigger, and connect every integration. Everything is tested thoroughly before anything touches your real leads or customers.' },
  { num: 4, period: 'Test & Launch', desc: 'We run full end-to-end tests on every automation — form submissions, trigger conditions, message timing, and CRM updates. Nothing goes live until it works exactly as designed.' },
  { num: 5, period: 'Monitor & Optimise', desc: 'After launch we monitor your automations, track performance, and make improvements. Open rates, reply rates, booking rates — we measure what matters and keep improving the results.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-sliders',       title: 'We Build for Your Business, Not a Template',   desc: 'Every business has a different sales process, different lead sources, and different follow-up needs. We never copy-paste templates. Every automation we build is designed around how your business actually works — the triggers, the timing, the copy, and the CRM structure are all built specifically for you.' },
  { dark: false, icon: 'fa-solid fa-bolt',           title: 'GoHighLevel Specialists',                      desc: 'GoHighLevel is one of the most powerful platforms for service businesses and agencies — but only when it is set up correctly. Most businesses leave most of the platform unused. Our team has built hundreds of GHL systems from scratch and knows exactly how to get the most from it.' },
  { dark: false, icon: 'fa-solid fa-circle-check',   title: 'No Contracts. No Lock-In.',                    desc: 'We do not lock clients in because we do not need to. The automation systems we build keep working every month — and the results keep our clients with us. You can pause or cancel ongoing support at any time with 30 days notice.' },
  { dark: false, icon: 'fa-solid fa-eye',            title: 'Full Transparency on What We Build',           desc: 'You own everything we build for you. Every workflow, every sequence, every template is documented and handed over. If you ever decide to manage things in-house, you have everything you need to do so.' },
  { dark: false, icon: 'fa-solid fa-robot',          title: 'AI-Powered Automation',                        desc: 'We integrate AI into your workflows where it adds real value — AI chatbots that qualify leads and book appointments, AI-driven content personalisation, and intelligent routing that makes your automation smarter over time.' },
  { dark: false, icon: 'fa-solid fa-headset',        title: 'One Dedicated Point of Contact',               desc: 'You work with one person who understands your entire automation setup. No being passed between departments, no starting over when someone changes. One contact who knows your system and keeps it running.' },
];

const FAQS = [
  { q: 'What is marketing automation?', a: 'Marketing automation is the use of software to handle repetitive marketing and sales tasks automatically — sending follow-up emails, booking appointments, moving leads through your CRM, sending review requests, and more. The goal is to make sure the right thing happens at the right time without anyone doing it manually.' },
  { q: 'Which platforms do you work with?', a: 'We work with GoHighLevel, HubSpot, ActiveCampaign, Mailchimp, Make (Integromat), Zapier, n8n, Klaviyo, and more. For most service businesses and agencies we recommend GoHighLevel because it combines CRM, funnels, email, SMS, and booking all in one platform. We will recommend the right tool for your situation.' },
  { q: 'Do you work with GoHighLevel?', a: 'Yes. GoHighLevel is one of our core specialisms. We build complete GHL systems from scratch — CRM setup, funnel builds, email and SMS automations, appointment calendars, pipeline stages, and reporting. We also help agencies who need GHL built and managed for their clients.' },
  { q: 'How long does it take to set up automation?', a: 'A basic CRM and email automation setup typically takes two to three weeks. A more complex system with full GoHighLevel setup, multi-channel sequences, and custom integrations can take four to eight weeks. We give you a clear timeline before we start.' },
  { q: 'Can you automate the follow-up for our leads?', a: 'Yes. Lead follow-up automation is one of the most impactful things we do. The speed and consistency of your follow-up has a huge effect on how many leads convert. We build sequences that follow up immediately after a lead comes in, continue over days and weeks, and stop automatically when the lead books or responds.' },
  { q: 'Do you write the email and SMS copy?', a: 'Yes. Every email and SMS sequence we build includes the copy. We write it, you review it, we refine it. The messages are written to match your brand voice, your offer, and where each lead is in their journey.' },
  { q: 'What is an AI chatbot and do I need one?', a: 'An AI chatbot lives on your website or landing page and handles conversations automatically — answering questions, qualifying leads, and booking appointments without any human involvement. If you are getting website visitors who are not converting, or if you want to capture leads outside of business hours, a chatbot can make a significant difference.' },
  { q: 'Can you connect our existing tools together?', a: 'Yes. If you use multiple tools that do not communicate with each other, we can connect them using Make, Zapier, or n8n. Common connections include CRM to email platform, website forms to CRM, payment processor to CRM, and booking system to calendar. We map out the connections, build the workflows, and test everything.' },
];

/* ── FAQ 2-COL ────────────────────────────────────────────────────── */
function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="auto-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div className="auto-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          <div style={{ position:'sticky', top:100 }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions About <span style={{ color:'var(--ism-amber)' }}>Marketing Automation</span>
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
export default function AutomationPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <section className="auto-hero" style={{ background:'linear-gradient(160deg,#EDF2FF 0%,#F7F8FA 48%,#FFFBEB 100%)', padding:'96px 0 64px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-10%', right:'-6%', width:720, height:720, background:'radial-gradient(circle,rgba(30,77,195,.13) 0%,transparent 60%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'-15%', left:'-5%', width:560, height:560, background:'radial-gradient(circle,rgba(255,176,0,.11) 0%,transparent 60%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)', width:900, height:400, background:'radial-gradient(ellipse,rgba(30,77,195,.04) 0%,transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:32, left:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(30,77,195,.18) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />
          <div style={{ position:'absolute', bottom:32, right:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(255,176,0,.25) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>
            <h1 style={{ fontFamily:J, fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-2px', lineHeight:1.06, margin:'0 auto 24px', maxWidth:940 }}>
              Stop Doing It Manually.<br />
              Automate Your Follow-Up,<br />
              <span style={{ color:'var(--ism-amber)' }}>Scale Your Revenue.</span>
            </h1>

            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:600, margin:'0 auto 36px' }}>
              We build the automation systems that keep your business moving — lead follow-up, appointment booking, CRM workflows, and email sequences — all running without you managing every step.
            </p>

            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Start Automating My Business
              </a>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
              >
                Get a Free Automation Audit
              </a>
            </div>
          </div>
        </section>

        {/* ══ REVIEWS BAR ══════════════════════════════════════════════════ */}
        <div style={{ background:'var(--color-bg-soft)', borderTop:'1px solid var(--color-border)', borderBottom:'1px solid var(--color-border)', padding:'32px 28px' }}>
          <div style={{ maxWidth:1280, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', gap:56, flexWrap:'wrap' }}>
            <div style={{ display:'flex', alignItems:'center', gap:16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/google-review-icon.webp" alt="Google" width={44} height={44} style={{ width:44, height:44, objectFit:'contain', display:'block', flexShrink:0 }} />
              <div>
                <div style={{ display:'flex', gap:2, marginBottom:4 }}>{[...Array(5)].map((_,i)=>(<i key={i} className="fa-solid fa-star" style={{ color:'var(--ism-amber)', fontSize:14 }} />))}</div>
                <div style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)' }}><span style={{ fontSize:18, fontWeight:900 }}>150+</span> Google Reviews</div>
              </div>
            </div>
            <div style={{ width:1, height:52, background:'var(--color-border)', flexShrink:0 }} />
            <div style={{ display:'flex', alignItems:'center', gap:16 }}>
              <div style={{ width:44, height:44, borderRadius:10, background:'var(--color-primary)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}><span style={{ fontFamily:J, fontSize:15, fontWeight:900, color:'#fff' }}>C</span></div>
              <div>
                <div style={{ display:'flex', gap:2, marginBottom:4 }}>{[...Array(5)].map((_,i)=>(<i key={i} className="fa-solid fa-star" style={{ color:'var(--ism-amber)', fontSize:14 }} />))}</div>
                <div style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)' }}><span style={{ fontSize:18, fontWeight:900 }}>100+</span> Clutch Reviews</div>
              </div>
            </div>
            <div style={{ width:1, height:52, background:'var(--color-border)', flexShrink:0 }} />
            <div style={{ display:'flex', alignItems:'center', gap:16 }}>
              <div style={{ display:'flex' }}>{['#4F46E5','#0EA5E9','#10B981','#F59E0B','#EF4444','#8B5CF6'].map((c,i)=>(<div key={i} style={{ width:38, height:38, borderRadius:'50%', border:'2px solid var(--color-bg-soft)', marginLeft:i===0?0:-10, background:c, display:'flex', alignItems:'center', justifyContent:'center', zIndex:6-i, position:'relative', flexShrink:0 }}><i className="fa-solid fa-user" style={{ fontSize:14, color:'#fff' }} /></div>))}</div>
              <div>
                <div style={{ display:'flex', gap:2, marginBottom:4 }}>{[...Array(5)].map((_,i)=>(<i key={i} className="fa-solid fa-star" style={{ color:'var(--ism-amber)', fontSize:14 }} />))}</div>
                <div style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)' }}><span style={{ fontSize:18, fontWeight:900 }}>1,000+</span> Client Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ 2. STRATEGY SECTION ══════════════════════════════════════════ */}
        <section className="auto-strategy-section" style={{ background:'#fff', padding:'88px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>

            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,40px)', fontWeight:800, color:'var(--color-navy)', letterSpacing:'-0.4px', lineHeight:1.2, maxWidth:820, margin:'0 auto 14px' }}>
                Why Automation Is the <span style={{ color:'var(--ism-amber)' }}>Foundation</span> of Scalable Growth
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:580, margin:'0 auto', lineHeight:1.75 }}>
                The fastest-growing businesses are not the ones with the biggest teams — they are the ones with the best systems.
              </p>
            </div>

            <div className="auto-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'79% of leads are lost because follow-up is too slow', text:'The average business takes 47 hours to follow up with a new lead. Businesses that respond within five minutes are nine times more likely to convert.' },
                  { num:'02', title:'Automation follows up with every lead, every time, without exception', text:'Manual follow-up works — until your team is busy. Automation removes that variable completely.' },
                  { num:'03', title:'Automation does not replace your team — it frees them', text:'The goal is to make sure your team focuses on conversations with qualified leads, not manual data entry and repetitive follow-up tasks.' },
                  { num:'04', title:'The businesses growing fastest have the best systems', text:'More leads, more clients, more revenue — without a proportional increase in overhead or team size.' },
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

              <div className="auto-strategy-mosaic" style={{ position:'relative', height:460 }}>
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
                Get a Free Automation Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
              </a>
            </div>

          </div>
          <style>{`
            @media (max-width: 768px) {
              .auto-strategy-section { padding: 56px 0 !important; }
              .auto-strategy-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
              .auto-strategy-mosaic { display: none !important; }
            }
            @media (max-width: 480px) {
              .auto-strategy-section { padding: 44px 0 !important; }
            }
          `}</style>
        </section>

        {/* ══ 3. CLIENT RESULTS ════════════════════════════════════════════ */}
        <div id="auto-results"><ClientResults /></div>

        {/* ══ CTA BANNER ═══════════════════════════════════════════════════ */}
        <section style={{ background:'#fff', padding:'70px 28px 52px', overflow:'hidden' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', position:'relative' }}>
            <div style={{ background:'#F5F5E6', borderRadius:24, display:'grid', gridTemplateColumns:'380px 1fr', minHeight:300 }} className="auto-cta-banner-grid">
              <div />
              <div style={{ padding:'40px 52px 40px 32px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>
                  Are your leads getting <span style={{ color:'var(--ism-amber)' }}>followed up fast enough?</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>
                  Get a free audit and find out how much revenue you are leaving on the table from slow or inconsistent follow-up.
                </p>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get My Free Automation Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                </a>
              </div>
            </div>
            <div style={{ position:'absolute', bottom:0, left:0, width:400, height:'calc(100% + 62px)', pointerEvents:'none', borderBottomLeftRadius:24, overflow:'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/unblockseo-women.svg" alt="Automation Expert" style={{ position:'absolute', bottom:0, left:0, height:'100%', width:'100%', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .auto-cta-banner-grid { grid-template-columns: 1fr !important; } .auto-cta-banner-grid > div:first-child { display: none !important; } }`}</style>
        </section>

        {/* ══ IMAGE + TEXT SECTION ════════════════════════════════════════ */}
        <section style={{ background:'var(--color-bg-soft)', padding:'88px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,38px)', fontWeight:800, color:'var(--color-navy)', textAlign:'center', letterSpacing:'-0.4px', lineHeight:1.2, margin:'0 auto 52px', maxWidth:820 }}>
              Automation Systems That Drive <span style={{ color:'var(--ism-amber)' }}>Real Business Growth</span>
            </h2>
            <div className="auto-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
              <div style={{ borderRadius:14, overflow:'hidden', boxShadow:'0 16px 56px rgba(0,0,0,.10)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Artboard.png" alt="Automation Growth" style={{ width:'100%', display:'block', objectFit:'cover' }} />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>
                  The goal of automation is not to remove the human element from your business. It is to make sure the human element shows up where it matters most — in conversations with qualified leads and in delivering great work — rather than in manual data entry and repetitive follow-up tasks.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Every automation we build is designed around your specific business processes. We do not install templates and hand them over. We map your actual workflow, build around it, test it thoroughly, and stay involved to make sure it keeps performing.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  From your first lead form submission to the review request after a job is completed — every step in between can be automated, personalised, and improved. We build the complete system.
                </p>
                <div style={{ marginTop:8 }}>
                  <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                  >
                    Start Building My System <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 768px) { .auto-imgtext-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* ══ TESTIMONIALS ════════════════════════════════════════════════ */}
        <Testimonials />

        {/* ══ SERVICES GRID ════════════════════════════════════════════════ */}
        <section className="auto-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 12px' }}>
                Our Complete <span style={{ color:'var(--ism-amber)' }}>Automation Services</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                From lead follow-up to full business automation — we build the systems that run your business 24/7.
              </p>
            </div>
            <div className="auto-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #E8EAF0', borderRadius:16, overflow:'hidden' }}>
              {SERVICES.map((s,i)=>(
                <div key={i} className={`auto-svc-cell auto-svc-cell-${i}`}
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
            @media (max-width: 900px) { .auto-svc-grid { grid-template-columns: repeat(2,1fr) !important; } .auto-svc-cell-1,.auto-svc-cell-3,.auto-svc-cell-5,.auto-svc-cell-7 { border-right: none !important; } .auto-svc-cell-0,.auto-svc-cell-1,.auto-svc-cell-2,.auto-svc-cell-3,.auto-svc-cell-4,.auto-svc-cell-5,.auto-svc-cell-6,.auto-svc-cell-7 { border-bottom: 1px solid #E8EAF0 !important; } .auto-svc-cell-8 { border-bottom: none !important; border-right: none !important; } }
            @media (max-width: 560px) { .auto-svc-grid { grid-template-columns: 1fr !important; } .auto-svc-cell { border-right: none !important; border-bottom: 1px solid #E8EAF0 !important; } .auto-svc-cell-8 { border-bottom: none !important; } }
          `}</style>
        </section>

        {/* ══ DARK NAVY ════════════════════════════════════════════════════ */}
        <section className="auto-section" style={{ background:'var(--color-navy)', padding:'90px 0', color:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div className="auto-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              <div>
                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px', lineHeight:1.12 }}>
                  Why Automation Is a{' '}
                  <span style={{ color:'var(--ism-amber)' }}>Smart Investment</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>
                  Build Systems That Scale Without Adding Headcount
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>Speed to lead is everything.</strong> Businesses that respond within five minutes are 9× more likely to convert a lead than those that wait 30 minutes. Automation makes five-minute response happen every time, automatically.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>Consistency beats effort.</strong> Manual follow-up works — until your team is busy. Automation follows up with every lead, every time, without exception. No leads fall through the cracks.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>The cost of not automating is real.</strong> Every lead that does not get followed up fast enough costs you money. Every manual task takes time away from higher-value work. Automation fixes both.
                  </p>
                </div>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.30)'; }}
                >
                  Build My Automation System →
                </a>
              </div>
              <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 24px 72px rgba(0,0,0,.35)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Artboard.png" alt="Automation ROI" style={{ width:'100%', display:'block', objectFit:'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ TIMELINE ══════════════════════════════════════════════════════ */}
        <section className="auto-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                Isuremedia&apos;s Process for <span style={{ color:'var(--ism-amber)' }}>Automation That Works</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                From audit to launch — a clear, systematic approach to building automation that lasts.
              </p>
            </div>
            <div className="auto-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:0, position:'relative' }}>
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
                Get a Free Automation Audit
              </a>
            </div>
          </div>
        </section>

        {/* ══ PRICING ═══════════════════════════════════════════════════════ */}
        <section className="auto-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                Start with the right scope{' '}
                <span style={{ color:'var(--ism-amber)' }}>for your business.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every plan includes a dedicated automation specialist and full documentation.
              </p>
            </div>
            <div className="auto-plan-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, alignItems:'start' }}>
              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
              >
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>STARTER</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Lead Follow-Up</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Automated lead nurture and follow-up for small businesses.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['CRM setup & lead capture','3-step email follow-up sequence','SMS follow-up automation','Appointment booking integration','Basic pipeline setup','Monthly performance report'].map((f,i)=>(
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
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Full Automation System</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Complete CRM, automation, and GoHighLevel setup for growing businesses.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['Full GoHighLevel build & setup','Multi-channel nurture sequences','Appointment booking & reminders','Pipeline & CRM automation','Review request automation','Monthly optimisation report'].map((f,i)=>(
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
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Agency & Enterprise</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Custom automation builds for agencies and complex multi-location businesses.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['Custom workflow architecture','AI chatbot & conversation flows','API & third-party integrations','Multi-location CRM setup','White-label reporting','Dedicated automation manager'].map((f,i)=>(
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
        <section className="auto-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px', maxWidth:700, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>
                Why Our Automation Services Drive <span style={{ color:'var(--ism-amber)' }}>Better Growth</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Systems built around your business — not templates dropped in and left running.
              </p>
            </div>
            <div className="auto-diff-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
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
          <div style={{ maxWidth:1200, margin:'0 auto', background:'var(--color-primary)', borderRadius:24, padding:'60px 64px', display:'grid', gridTemplateColumns:'1fr 420px', gap:48, alignItems:'center', position:'relative', overflow:'hidden' }} className="auto-rfr-grid">
            <div style={{ position:'absolute', top:'-30%', right:'30%', width:500, height:500, background:'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                <div style={{ width:28, height:3, background:'var(--ism-amber)', borderRadius:2 }} />
                <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.12em', textTransform:'uppercase' }}>Your Growth Starts Here</span>
              </div>
              <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.5vw,48px)', fontWeight:900, color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px', margin:'0 0 20px' }}>
                Ready to stop doing it manually<br />and start <span style={{ color:'var(--ism-amber)' }}>scaling automatically?</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.80, margin:'0 0 36px', maxWidth:520 }}>
                Whether you need a simple follow-up sequence or a complete business automation system — we build it around your process, test it thoroughly, and make sure it delivers results. Talk to us today and we will map out exactly what your business should be automating first.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.55)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get My Free Automation Audit
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
          <style>{`@media (max-width: 900px) { .auto-rfr-grid { grid-template-columns: 1fr !important; padding: 40px 28px !important; } }`}</style>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px)  { .auto-plan-grid { grid-template-columns: 1fr !important; } .auto-plan-grid > *:nth-child(2) { transform: none !important; } }
        @media (max-width: 900px)  { .auto-split { grid-template-columns: 1fr !important; gap: 36px !important; } }
        @media (max-width: 900px)  { .auto-diff-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px)  { .auto-diff-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px)  { .auto-timeline { grid-template-columns: 1fr !important; gap: 40px !important; } .auto-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; } }
        @media (max-width: 900px)  { .auto-faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 640px)  { .auto-hero { padding: 56px 0 44px !important; } .auto-section { padding-top: 60px !important; padding-bottom: 60px !important; } }
      `}</style>
    </>
  );
}
