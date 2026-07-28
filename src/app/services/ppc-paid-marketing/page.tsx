'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import ClientResults from '@/components/ClientResults';
import ReviewsStrip from '@/components/ReviewsStrip';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const SERVICES = [
  { title: 'Google Ads', icon: 'fa-brands fa-google', desc: 'Search campaigns that put you in front of people actively searching for what you sell. We handle keyword research, ad copy, bidding strategy, and conversion tracking so every click has a purpose.', href: '/services/ppc/google-ads' },
  { title: 'Meta Ads (Facebook & Instagram)', icon: 'fa-solid fa-share-nodes', desc: 'Social ad campaigns that reach the right people at the right stage of the buying journey. From awareness to retargeting to purchase, we build full-funnel Meta strategies that compound over time.', href: '/services/ppc/meta-ads' },
  { title: 'PPC Management', icon: 'fa-solid fa-chart-bar', desc: 'Full management of your paid search accounts. We audit what you have, fix what is broken, build what is missing, and optimise every month based on what the data tells us.', href: '/services/ppc/google-ads' },
  { title: 'Retargeting & Remarketing', icon: 'fa-solid fa-rotate-left', desc: 'Most visitors do not convert on the first visit. We build retargeting campaigns that bring those people back — across Google Display, Meta, and YouTube — with messaging that addresses the hesitation that stopped them the first time.', href: '/services/ppc/retargeting-remarketing' },
  { title: 'Google Shopping Ads', icon: 'fa-solid fa-bag-shopping', desc: 'Product-level campaigns that show your items directly in Google Search results. Ideal for e-commerce brands looking to increase product visibility and capture buyers at the point of intent.', href: '/services/ppc/google-ads' },
  { title: 'LinkedIn Ads', icon: 'fa-brands fa-linkedin', desc: 'B2B campaigns that reach decision-makers by job title, company size, industry, and seniority. LinkedIn Ads cost more per click but deliver the highest-quality leads for professional services and SaaS.', href: '/services/ppc/google-ads' },
  { title: 'YouTube Ads', icon: 'fa-brands fa-youtube', desc: 'Video campaigns that build brand awareness and drive conversions on the second-largest search engine. We write the scripts, guide the creative, set the targeting, and track what converts.', href: '/services/ppc/google-ads' },
  { title: 'Funnel Strategy & Tracking', icon: 'fa-solid fa-filter', desc: 'Before ads go live, we make sure your tracking is set up correctly. GA4, Google Tag Manager, Meta Pixel, conversion events — all verified so we are optimising on real data, not guesswork.', href: '/services/ppc/funnel-strategy-tracking' },
  { title: 'White-Label PPC', icon: 'fa-solid fa-tag', desc: 'If you run an agency and need PPC delivered under your brand, we manage everything behind the scenes. Your clients see your name on the reports. We stay invisible.', href: '/services/white-label/white-label-ppc' },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Account Audit & Research',       desc: 'We review your existing ad accounts (or start fresh), analyse your competitors, and map out your target audience. You get a clear picture of what is working, what is wasting budget, and what to do next.' },
  { num: 2, period: 'Campaign Strategy & Build',      desc: 'We structure your campaigns, write your ad copy, set up your audiences, and configure conversion tracking. Everything is reviewed and approved before a single dollar is spent.' },
  { num: 3, period: 'Launch & Early Optimisation',    desc: 'Campaigns go live. We monitor performance daily in the first two weeks and make quick adjustments to bids, audiences, and creative based on what the data shows early on.' },
  { num: 4, period: 'Monthly Reporting & Refinement', desc: 'Every month you get a report covering spend, impressions, clicks, conversions, and ROAS. We review what worked, what did not, and tell you exactly what we are changing next.' },
  { num: 5, period: 'Scale What Is Winning',          desc: 'Once we identify the campaigns, audiences, and creative that convert best, we scale them. More budget goes to what works. Underperformers are cut or restructured. Every month the account improves.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-chart-line',   title: 'ROAS-Focused From Day One',   desc: 'We do not run ads for clicks or impressions. Every campaign is structured around return on ad spend — what comes back for every dollar you put in. That is the only metric that matters for your business.' },
  { dark: false, icon: 'fa-solid fa-eye',           title: 'Full Transparency, Always',   desc: 'You see everything. Your ad accounts stay in your name, you have access to all reporting, and you see exactly what your budget is doing. No black boxes, no mystery dashboards.' },
  { dark: false, icon: 'fa-solid fa-circle-check',  title: 'No Minimum Contracts',        desc: 'We do not lock clients into long contracts because we do not need to. Our campaigns deliver results that speak for themselves. Stay because you are growing, not because you are locked in.' },
  { dark: false, icon: 'fa-solid fa-certificate',  title: 'Google & Meta Certified',     desc: 'Our team holds active Google Ads and Meta Blueprint certifications. That means we are trained on the latest platform changes, beta features, and best practices before they reach most agencies.' },
  { dark: false, icon: 'fa-solid fa-bullseye',     title: 'Conversion-First Creative',   desc: 'We do not just run ads — we write the copy, design the creative, and build the landing pages that make the ads work. The entire funnel is built to convert, not just to look good.' },
  { dark: false, icon: 'fa-solid fa-tag',           title: 'White-Label Ready',           desc: 'If you run a marketing agency, we can manage PPC for your clients completely behind the scenes. Branded reports, client communications, and zero footprint. Your brand, our team.' },
];

const FAQS = [
  { q: 'How quickly will I see results from paid ads?',    a: 'Most campaigns start generating leads or sales within the first two to four weeks of launch. The first month is about gathering data and making fast adjustments. By month two or three, campaigns are optimised and performance is much more predictable.' },
  { q: 'What is a good ROAS for paid ads?',               a: 'It depends on your margins and industry. For e-commerce, a 3–5× ROAS is typically the target. For lead generation, we work backward from your cost per acquisition and lifetime customer value. We set these targets at the start of every campaign.' },
  { q: 'Do you manage my ad accounts or create new ones?', a: 'Your ad accounts always stay in your name. We access them as managers, never as owners. If you do not have accounts, we help you set them up correctly from the start with all the right tracking in place.' },
  { q: 'How much should I spend on ads?',                  a: 'That depends on your industry, competition, and goals. We give you a recommended budget based on your market and what it costs to reach your target customer. Most clients start at $1,500–$5,000 per month in ad spend and scale from there.' },
  { q: 'Do you write the ad copy and design creative?',    a: 'Yes. We handle ad copy, headlines, descriptions, and creative direction. For Meta and YouTube, we can produce ad creative or work with assets you provide. Our goal is a complete, conversion-optimised funnel — not just a campaign setup.' },
  { q: 'Can you take over my existing campaigns?',         a: 'Yes. We start with a full audit of your existing accounts to find what is working and what is wasting spend. Then we fix the structure, update the creative, tighten the targeting, and take over management going forward.' },
  { q: 'Do PPC and SEO work together?',                    a: 'Yes — they complement each other well. Paid ads give you immediate visibility while SEO builds your long-term organic presence. The data from your PPC campaigns also tells us which keywords and messages convert best, which feeds directly into your SEO strategy.' },
  { q: 'What platforms do you run ads on?',                a: 'Google Search, Google Display, Google Shopping, YouTube, Meta (Facebook and Instagram), LinkedIn, Microsoft Bing, and programmatic display. Most clients start with Google and Meta, then expand based on where their customers spend time.' },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div className="ppc-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          <div style={{ position:'sticky', top:100 }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions About <span style={{ color:'var(--ism-amber)' }}>Paid Ads</span>
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Honest answers before you decide. No spin, no buzzwords.
            </p>
            <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
            >Get Started →</a>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            {FAQS.map((faq,i)=>(
              <div key={i} style={{ background:'#fff', borderRadius:12, border:`1px solid ${open===i?'var(--color-primary)':'var(--color-border)'}`, overflow:'hidden', transition:'border-color .2s' }}>
                <button onClick={()=>setOpen(open===i?null:i)} style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 24px', background:'none', border:'none', cursor:'pointer', textAlign:'left', gap:16 }}>
                  <span style={{ fontFamily:J, fontSize:15, fontWeight:700, color:'var(--color-navy)' }}>{faq.q}</span>
                  <i className="fa-solid fa-chevron-down" style={{ fontSize:12, color:'var(--ism-amber)', flexShrink:0, transform:open===i?'rotate(180deg)':'rotate(0deg)', transition:'transform .22s' }} />
                </button>
                {open===i&&(<div style={{ padding:'0 24px 20px' }}><p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.78, margin:0 }}>{faq.a}</p></div>)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.ppc-faq-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

export default function PPCPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ background:'linear-gradient(160deg,#EDF2FF 0%,#F7F8FA 48%,#FFFBEB 100%)', padding:'96px 0 64px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-80, right:-60, width:460, height:460, background:'rgba(30,77,195,0.18)', borderRadius:'58% 42% 50% 50% / 46% 58% 42% 54%', filter:'blur(50px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:-60, left:-50, width:360, height:360, background:'rgba(255,176,0,0.13)', borderRadius:'46% 54% 62% 38% / 54% 46% 54% 46%', filter:'blur(44px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'25%', left:'38%', width:260, height:260, background:'rgba(30,77,195,0.08)', borderRadius:'50% 50% 38% 62% / 62% 38% 62% 38%', filter:'blur(38px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:32, left:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(30,77,195,.18) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />
          <div style={{ position:'absolute', bottom:32, right:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(255,176,0,.25) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />
          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>
            <h1 style={{ fontFamily:J, fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-2px', lineHeight:1.06, margin:'0 auto 24px', maxWidth:940 }}>
              Get in Front of the Right People.<br />
              Spend Less. Convert More.<br />
              <span style={{ color:'var(--ism-amber)' }}>Scale Your Revenue.</span>
            </h1>
            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:600, margin:'0 auto 36px' }}>
              We build and manage paid ad campaigns across Google, Meta, LinkedIn, and YouTube that bring you customers — not just clicks.
            </p>
            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
              <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >Start My PPC Campaign</a>
              <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
              >Get a Free PPC Audit</a>
            </div>
          </div>
        </section>

        {/* REVIEWS BAR */}
        <ReviewsStrip />

        {/* ══ 2. STRATEGY SECTION ══════════════════════════════════════════ */}
        <section className="ppc-strategy-section" style={{ background:'#fff', padding:'88px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>

            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,40px)', fontWeight:800, color:'var(--color-navy)', letterSpacing:'-0.4px', lineHeight:1.2, maxWidth:820, margin:'0 auto 14px' }}>
                Why Paid Ads Are Your Fastest Path to <span style={{ color:'var(--ism-amber)' }}>Revenue</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:580, margin:'0 auto', lineHeight:1.75 }}>
                Paid advertising gives you something organic channels cannot — results today. Here is what the data says.
              </p>
            </div>

            <div className="ppc-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'Paid ads give you results the day the campaign goes live', text:'Unlike SEO which compounds over months, a well-run Google or Meta campaign can bring customers in within days of launch.' },
                  { num:'02', title:'Your competitors are in front of your customers right now', text:'If your business is not showing up in paid search results, your competitors are capturing that demand instead.' },
                  { num:'03', title:'The average business makes $2 for every $1 spent on Google Ads', text:'When campaigns are built and managed correctly, paid advertising compounds on itself. Bad ads burn budget. Good ones print money.' },
                  { num:'04', title:'Paid ads and SEO work better together than either does alone', text:'SEO data tells you which keywords convert best for paid. Paid ad data tells you which messaging works for content.' },
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

              <div className="ppc-strategy-mosaic" style={{ position:'relative', height:460 }}>
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
                Get My Free PPC Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
              </a>
            </div>

          </div>
          <style>{`
            @media (max-width: 768px) {
              .ppc-strategy-section { padding: 56px 0 !important; }
              .ppc-strategy-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
              .ppc-strategy-mosaic { display: none !important; }
            }
            @media (max-width: 480px) {
              .ppc-strategy-section { padding: 44px 0 !important; }
            }
          `}</style>
        </section>

        {/* CLIENT RESULTS */}
        <ClientResults />

        {/* CTA BANNER */}
        <section style={{ background:'#fff', padding:'70px 28px 52px', overflow:'hidden' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', position:'relative' }}>
            <div style={{ background:'#F5F5E6', borderRadius:24, display:'grid', gridTemplateColumns:'380px 1fr', minHeight:300 }} className="ppc-cta-banner-grid">
              <div />
              <div style={{ padding:'40px 52px 40px 32px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>Your competitors are running ads right now. Are you <span style={{ color:'var(--ism-amber)' }}>winning?</span></h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>Get a free PPC audit and find out exactly where your ad budget is leaking.</p>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; }} onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
                >Run My Free PPC Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} /></a>
              </div>
            </div>
            <div style={{ position:'absolute', bottom:0, left:0, width:400, height:'calc(100% + 62px)', pointerEvents:'none', borderBottomLeftRadius:24, overflow:'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/unblockseo-women.svg" alt="PPC Expert" style={{ position:'absolute', bottom:0, left:0, height:'100%', width:'100%', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
            </div>
          </div>
          <style>{`@media(max-width:900px){.ppc-cta-banner-grid{grid-template-columns:1fr!important;}.ppc-cta-banner-grid>div:first-child{display:none!important;}}`}</style>
        </section>

        {/* IMAGE + TEXT */}
        <section style={{ background:'var(--color-bg-soft)', padding:'88px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,38px)', fontWeight:800, color:'var(--color-navy)', textAlign:'center', letterSpacing:'-0.4px', lineHeight:1.2, margin:'0 auto 52px', maxWidth:820 }}>
              Paid Ad Campaigns That Deliver <span style={{ color:'var(--ism-amber)' }}>Real, Measurable Results</span>
            </h2>
            <div className="ppc-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
              <div style={{ borderRadius:14, overflow:'hidden', boxShadow:'0 16px 56px rgba(0,0,0,.10)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/ppc-advertising-illustration.webp" alt="PPC Results" style={{ width:'100%', display:'block', objectFit:'cover' }} />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>Every campaign we run is built around one metric — return. Not clicks, not impressions, not reach. We track what matters: cost per lead, cost per acquisition, and revenue generated per dollar spent.</p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>Most businesses running ads are paying too much for the wrong people. We fix that by tightening your audience targeting, rewriting your ad creative, and restructuring your campaigns around conversion data rather than vanity metrics.</p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>Isuremedia manages campaigns across Google Search, Google Shopping, Meta, LinkedIn, YouTube, and programmatic networks — all in one team, all reporting to one dashboard, all optimised toward the same goal.</p>
                <div style={{ marginTop:8 }}>
                  <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; }} onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
                  >Get My Free PPC Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} /></a>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:768px){.ppc-imgtext-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* SERVICES GRID */}
        <section style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 12px' }}>Our Complete <span style={{ color:'var(--ism-amber)' }}>PPC Services</span></h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>Every ad dollar spent with a clear goal: more customers at a lower cost.</p>
            </div>
            <div className="ppc-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #E8EAF0', borderRadius:16, overflow:'hidden' }}>
              {SERVICES.map((s,i)=>(
                <div key={i} className={`ppc-svc-cell ppc-svc-cell-${i}`} style={{ padding:'36px 32px', borderRight:(i+1)%3===0?'none':'1px solid #E8EAF0', borderBottom:i<6?'1px solid #E8EAF0':'none', background:'#fff', transition:'background .18s', cursor:'default' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.background='#F7F8FD'; }} onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.background='#fff'; }}>
                  <div style={{ display:'flex', alignItems:'flex-start', gap:14, marginBottom:18 }}>
                    <div style={{ width:46, height:46, borderRadius:10, background:'rgba(30,77,195,.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}><i className={s.icon} style={{ fontSize:20, color:'var(--color-primary)' }} /></div>
                    <h3 style={{ fontFamily:J, fontSize:16, fontWeight:800, color:'var(--color-navy)', margin:0, lineHeight:1.3, paddingTop:6 }}>{s.title}</h3>
                  </div>
                  <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.80, margin:'0 0 22px' }}>{s.desc}</p>
                  <a href={s.href} style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', letterSpacing:'.03em', transition:'gap .18s' }}
                    onMouseEnter={e=>(e.currentTarget.style.gap='10px')} onMouseLeave={e=>(e.currentTarget.style.gap='6px')}
                  >Learn more <i className="fa-solid fa-arrow-right" style={{ fontSize:10 }} /></a>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width:900px){.ppc-svc-grid{grid-template-columns:repeat(2,1fr)!important;}.ppc-svc-cell-1,.ppc-svc-cell-3,.ppc-svc-cell-5,.ppc-svc-cell-7{border-right:none!important;}.ppc-svc-cell-0,.ppc-svc-cell-1,.ppc-svc-cell-2,.ppc-svc-cell-3,.ppc-svc-cell-4,.ppc-svc-cell-5,.ppc-svc-cell-6,.ppc-svc-cell-7{border-bottom:1px solid #E8EAF0!important;}.ppc-svc-cell-8{border-bottom:none!important;border-right:none!important;}}
            @media(max-width:560px){.ppc-svc-grid{grid-template-columns:1fr!important;}.ppc-svc-cell{border-right:none!important;border-bottom:1px solid #E8EAF0!important;}.ppc-svc-cell-8{border-bottom:none!important;}}
          `}</style>
        </section>

        {/* DARK NAVY */}
        <section style={{ background:'var(--color-navy)', padding:'90px 0', color:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div className="ppc-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              <div>
                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px', lineHeight:1.12 }}>Why PPC Is a{' '}<span style={{ color:'var(--ism-amber)' }}>Smart Investment</span></h2>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>Turn Every Ad Dollar Into Predictable, Measurable Revenue</p>
                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}><strong style={{ color:'#fff', fontWeight:700 }}>The right campaign pays for itself.</strong> When your cost per acquisition is lower than your customer lifetime value, every dollar you spend is an asset, not a cost.</p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}><strong style={{ color:'#fff', fontWeight:700 }}>You control the tap.</strong> Unlike organic, paid ads give you an on/off switch. Turn up the budget when you are ready to scale. Pull back during slow periods. The control stays with you.</p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}><strong style={{ color:'#fff', fontWeight:700 }}>We optimise for profit, not vanity metrics.</strong> Clicks and impressions look great in a report. Revenue hits your bank account. We focus on the second one.</p>
                </div>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; }} onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
                >Start Running Profitable Ads →</a>
              </div>
              <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 24px 72px rgba(0,0,0,.35)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/seo-analytics-illustration.webp" alt="PPC Strategy" style={{ width:'100%', display:'block', objectFit:'cover' }} />
              </div>
            </div>
          </div>
          <style>{`@media(max-width:768px){.ppc-split{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* TIMELINE */}
        <section style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>Isuremedia&apos;s Proven PPC System for <span style={{ color:'var(--ism-amber)' }}>Measurable Growth</span></h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>Your First Step Toward Better Campaigns and Better Returns</p>
            </div>
            <div className="ppc-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:0, position:'relative' }}>
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
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; }} onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
              >Start My PPC Campaign</a>
            </div>
          </div>
          <style>{`@media(max-width:768px){.ppc-timeline{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
        </section>

        {/* PRICING */}
        <section style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>Start with the right plan{' '}<span style={{ color:'var(--ism-amber)' }}>for your goals.</span></h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>Every plan includes a dedicated PPC manager and monthly reporting.</p>
            </div>
            <div className="ppc-plan-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, alignItems:'start' }}>
              {[
                { label:'STARTER PPC', title:'Starter', desc:'Perfect for small businesses launching paid ads for the first time.', features:['Up to 2 campaigns (Google or Meta)','Keyword research & audience setup','Ad copy & creative direction','Conversion tracking setup','Monthly performance report','Dedicated PPC manager'], featured:false },
                { label:'GROWTH PPC', title:'Growth', desc:'Full-funnel PPC management across multiple platforms.', features:['Google + Meta + Retargeting','Full campaign build & management','Monthly creative refresh','Landing page optimisation','A/B testing & CRO','Monthly strategy call + report'], featured:true },
                { label:'ENTERPRISE', title:'Enterprise / White-Label', desc:'For agencies and enterprise brands needing scalable, multi-channel PPC.', features:['Custom multi-platform strategy','Dedicated campaign manager','NDA & white-label reporting','Programmatic & LinkedIn Ads','Quarterly strategy workshops','Priority support & SLA'], featured:false },
              ].map((plan,i)=>(
                <div key={i} style={{ background:'#fff', borderRadius:16, border:plan.featured?'2px solid var(--color-primary)':'1px solid var(--color-border)', padding:'36px 32px', transform:plan.featured?'scale(1.04)':'none', boxShadow:plan.featured?'0 16px 56px rgba(30,77,195,.18)':'none', position:'relative', transition:'all .22s' }}
                  onMouseEnter={e=>{ if(!plan.featured){ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; } }}
                  onMouseLeave={e=>{ if(!plan.featured){ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; } }}
                >
                  {plan.featured&&<div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', background:'var(--ism-amber)', borderRadius:100, padding:'5px 18px', whiteSpace:'nowrap' }}><span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-navy)', letterSpacing:'.08em', textTransform:'uppercase' }}>Most Popular</span></div>}
                  <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>{plan.label}</div>
                  <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>{plan.title}</div>
                  <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>{plan.desc}</p>
                  <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                    {plan.features.map((f,j)=>(<li key={j} style={{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.4 }}><i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11, marginTop:3, flexShrink:0 }} />{f}</li>))}
                  </ul>
                  {i===2 ? (
                    <a href="/contact" style={{ display:'block', textAlign:'center', padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                      onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                      onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
                    >Talk to Us</a>
                  ) : (
                    <a href="/contact" style={{ display:'block', textAlign:'center', padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:plan.featured?'0 6px 20px rgba(255,176,0,.35)':'none', transition:'all .18s' }}
                      onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; }} onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
                    >{plan.featured?'Start Growing':'Get Started'}</a>
                  )}
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.ppc-plan-grid{grid-template-columns:1fr!important;}.ppc-plan-grid>*:nth-child(2){transform:none!important;}}`}</style>
        </section>

        {/* WHY DIFFERENT */}
        <section style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px', maxWidth:700, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>Why Our PPC Services Drive <span style={{ color:'var(--ism-amber)' }}>Better Returns</span> for Your Business</h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>Get the paid traffic that actually turns into revenue.</p>
            </div>
            <div className="ppc-diff-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
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
          <style>{`@media(max-width:768px){.ppc-diff-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* FAQ */}
        <FAQAccordion />

        {/* READY FOR RESULTS */}
        <section style={{ background:'#fff', padding:'60px 28px' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', background:'var(--color-primary)', borderRadius:24, padding:'60px 64px', display:'grid', gridTemplateColumns:'1fr 420px', gap:48, alignItems:'center', position:'relative', overflow:'hidden' }} className="ppc-rfr-grid">
            <div style={{ position:'absolute', top:'-30%', right:'30%', width:500, height:500, background:'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                <div style={{ width:28, height:3, background:'var(--ism-amber)', borderRadius:2 }} />
                <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.12em', textTransform:'uppercase' }}>Your Growth Starts Here</span>
              </div>
              <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.5vw,48px)', fontWeight:900, color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px', margin:'0 0 20px' }}>
                Ready to stop wasting budget<br />and start getting customers <span style={{ color:'var(--ism-amber)' }}>from paid ads?</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.80, margin:'0 0 36px', maxWidth:520 }}>
                Whether you are starting from scratch or taking over underperforming campaigns, we audit your current setup for free and show you exactly where the opportunity is.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; }} onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
                >Get My Free PPC Audit</a>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'#fff', background:'transparent', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', border:'2px solid rgba(255,255,255,.40)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.40)'; e.currentTarget.style.background='transparent'; }}
                >Talk to Our Team</a>
              </div>
            </div>
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'center', height:320 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/files/jeff-vosburg-img.png" alt="Client" style={{ height:'100%', width:'auto', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
            </div>
          </div>
          <style>{`@media(max-width:900px){.ppc-rfr-grid{grid-template-columns:1fr!important;padding:40px 28px!important;}}`}</style>
        </section>

      </main>
      <Footer />
    </>
  );
}
