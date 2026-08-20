'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import ClientResults from '@/components/ClientResults';
import ReviewsStrip from '@/components/ReviewsStrip';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── Related case studies (PPC / Paid Ads) ───────────────────────────── */
const RELATED_CASES = [
  {
    img: '/casestudy/scrub-card.webp',
    client: 'Scrubs4U',
    intro: 'Purchases were inconsistent and rising acquisition costs made it hard to scale profitably.',
    quote: 'A 7.9% increase in ad spend delivered a 173.6% increase in revenue and 154% higher ROAS.',
    stats: [
      { val: '3.54x',   label: 'All-Time ROAS',  sub: 'across full engagement', icon: 'fa-solid fa-chart-line' },
      { val: '+173.6%', label: 'Revenue Growth', sub: 'same 30-day window YoY', icon: 'fa-solid fa-dollar-sign' },
    ],
    body: 'Scrubs4U was already running Meta Ads, but creative fatigue and rising acquisition costs made it difficult to scale profitably. We rebuilt the account around continuous campaign, creative, and audience optimization, growing revenue 173.6% and ROAS 154% with only a 7.9% increase in spend.',
    link: '/case-studies/ecommerce-meta-ads-roas-scaling',
    linkLabel: "Read Scrubs4U's Case Study",
  },
  {
    img: '/casestudy/globalallianzadss-card.webp',
    client: 'Global Allianz',
    intro: 'Lead volume was inconsistent and Cost Per Lead was too high to scale profitably.',
    quote: 'With only a 33% increase in ad spend, lead volume grew 1,309% while Cost Per Lead dropped over 90%.',
    stats: [
      { val: '+1,309%', label: 'Lead Volume Growth', sub: '22 → 310 leads',  icon: 'fa-solid fa-users' },
      { val: '−90.5%',  label: 'Cost Per Lead',      sub: '$72.99 → $6.91', icon: 'fa-solid fa-arrow-trend-down' },
    ],
    body: 'Global Allianz was already generating immigration leads through Meta Ads, but high cost per lead and inconsistent volume limited how far the firm could scale. We rebuilt the account around Spanish-language, trust-building creative and refined targeting, growing lead volume 1,309% while cutting Cost Per Lead by over 90%.',
    link: '/case-studies/immigration-meta-ads-lead-generation',
    linkLabel: "Read Global Allianz's Case Study",
  },
];

const SERVICES = [
  { title: 'Google Ads', icon: 'fa-brands fa-google', desc: 'Google Ads puts your business at the top of search results for the exact searches your buyers are typing right now. We build campaigns from scratch or audit and rebuild existing ones, covering Search, Display, Shopping, and Performance Max, structured around your target cost per lead.', href: '/services/ppc/google-ads' },
  { title: 'Meta Ads', icon: 'fa-solid fa-share-nodes', desc: 'Facebook and Instagram advertising reaches people who are not actively searching but are the exact type of person who buys what you sell, interests, behaviours, lookalikes, and life events. We write the copy, build the creatives, and run split tests until the cost per result is where it needs to be.', href: '/services/ppc/meta-ads' },
  { title: 'TikTok Ads', icon: 'fa-brands fa-tiktok', desc: 'TikTok reaches audiences other platforms cannot, with ad formats built for a feed people watch rather than scroll past. We produce native-feeling creative and manage campaigns built around your target cost per result.', href: '/services/ppc/tiktok-ads' },
  { title: 'YouTube Ads', icon: 'fa-brands fa-youtube', desc: 'Video ads across the platform people already spend hours on, skippable in-stream, non-skippable, and Shorts placements built to drive awareness and direct response depending on your goal.', href: '/services/ppc/youtube-ads' },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Audit and Business Discovery',       desc: 'If you already have campaigns running, we audit account structure, keyword targeting, ad copy, and tracking to see what your spend is actually producing. If starting fresh, we research your competitors and what searches are worth bidding on before we spend a penny.' },
  { num: 2, period: 'Campaign Strategy and Build',        desc: 'We build every campaign from the strategy down, target audiences, keyword groups, bid strategies, and the landing pages each ad sends traffic to. You review and approve the strategy before any budget is committed.' },
  { num: 3, period: 'Launch and First 30 Days',           desc: 'The first month is a data collection phase as much as a delivery phase. We launch, monitor daily, and adjust as the campaign gathers real performance data, acting on it immediately rather than waiting for a monthly review.' },
  { num: 4, period: 'Optimise, Test, and Improve',        desc: <>Every two weeks we run a formal optimisation pass, new negative keywords, paused underperforming variations, and more budget to what works. We also run structured <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>A/B tests</span> so the campaign keeps improving rather than plateauing.</> },
  { num: 5, period: 'Monthly Reporting and Scaling',      desc: 'Every month you get a plain report covering every campaign and exactly what we are doing next. When a campaign consistently hits your cost per lead target, we scale it; when something is not working, we tell you what and why.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-headset',      title: 'Your Own Dedicated PPC Team',                          desc: 'The same paid ads specialists who set up your campaigns watch them every day. One point of contact who knows your account, targets, and industry, no account managers relaying messages to people you have never spoken to.' },
  { dark: false, icon: 'fa-solid fa-circle-check', title: 'No Long-Term Contracts',                               desc: 'We earn your business every month with campaigns that produce results. No 12-month agreements, no penalties for pausing, you stay because the numbers make sense.' },
  { dark: false, icon: 'fa-solid fa-layer-group',  title: 'Every Ad Platform Under One Roof',                     desc: 'Google, Meta, and LinkedIn are all managed by the same team with the same goal. Budget is allocated based on where your buyers are and what produces the strongest return, not what one specialist prefers.' },
  { dark: false, icon: 'fa-solid fa-chart-line',   title: 'Tracking That Shows Real Revenue, Not Just Clicks',    desc: <>We set up conversion tracking that connects every campaign to actual leads and sales. You see <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>cost per customer</span>, not just per click, if it is not making sense, we fix it or reallocate.</> },
  { dark: false, icon: 'fa-solid fa-eye',          title: 'Full Visibility Into Everything We Do',                desc: 'Every month you get a plain report covering spend, leads, cost per lead, and what we are testing next. You always have direct access to your own ad accounts, your data belongs to you.' },
  { dark: false, icon: 'fa-solid fa-bullseye',     title: 'We Only Spend Where It Works',                         desc: 'We do not let campaigns run on autopilot while budget drains into irrelevant clicks. Every account gets regular reviews, negative keyword updates, and creative refreshes, waste compounds fast, we stop it before it starts.' },
];

const FAQS = [
  { q: 'How quickly will I see results from PPC?',                              a: <>You will see traffic the same day a campaign goes live. Meaningful lead volume usually comes within the first <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>two to four weeks</span> as the campaign learns. The first 30 days is partly a testing phase, campaigns typically reach their most efficient performance between months two and three.</> },
  { q: 'How much should I budget for paid ads?',                                a: 'It depends on your industry, target cost per lead, and how competitive your market is. We look at what competitors are spending, what your customer is worth, and recommend a budget that makes commercial sense, never more than you need.' },
  { q: 'Do you manage the ad budget or does it go directly to the platform?',   a: 'Your ad budget goes directly to Google, Meta, or LinkedIn. We charge a management fee for running the campaigns, we never hold your ad spend or invoice on top of our fee.' },
  { q: 'What platforms do you run ads on?',                                    a: 'Google Ads, Meta Ads (Facebook and Instagram), LinkedIn Ads, and retargeting across Google and Meta. The recommendation depends on where your buyers spend their time and your sales cycle, we tell you honestly which will produce the best return.' },
  { q: 'Can I see exactly what my budget is being spent on?',                  a: 'Yes. You always have direct access to your ad accounts. We share monthly reports covering spend by campaign, cost per lead, and results, nothing hidden behind a dashboard we control.' },
  { q: 'What if the campaigns are not performing?',                            a: 'We optimise continuously, not just monthly. If a keyword is wasting budget, it gets paused; if a creative is not converting, we test a new version. You are told what is happening and what we are changing.' },
  { q: 'Do you write the ad copy and build the landing pages?',                a: 'Yes. We write all ad copy and can build or optimise the landing pages your ads send traffic to, a well-targeted ad to a weak landing page wastes most of its budget, so we handle both.' },
  { q: 'Can you take over existing campaigns that are not working?',           a: 'Yes, regularly. We audit your account, identify what is wasting budget and what is worth keeping, restructure properly, and turn it around. The audit is free, and we tell you honestly if it is worth rebuilding.' },
  { q: 'Do you offer white-label PPC management for agencies?',                a: 'Yes. If you run a marketing agency and need paid ads managed for your clients, we handle the full delivery under your brand, you present the results, we do the work. No footprint, no contact with your clients.' },
  { q: 'What is your management fee structure?',                              a: 'We charge a management fee based on the scope of the account, not a percentage of ad spend, so we have no incentive to push your budget higher than it needs to be. We scope the work upfront and tell you exactly what it covers.' },
  { q: 'What is a good ROAS for Google Ads?',                                  a: 'For most service businesses, a 3x–5x ROAS is a solid benchmark. E-commerce businesses typically target 4x or higher. Your target depends on your margins and cost per acquisition goals.' },
  { q: 'Do you manage existing ad accounts or create new ones?',              a: 'Both. We can take over and optimise your existing campaigns or build new accounts from scratch. We always start with an audit to identify wasted spend before making changes.' },
  { q: 'Do you write the ad copy and design the creatives?',                  a: 'Yes. Our team handles ad copywriting and creative design. For Meta and display campaigns, we produce the graphics and video thumbnails as part of the service.' },
];

function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="ppc-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          <div className="ppc-faq-sticky" style={{ position:'sticky', top:100 }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions About <span style={{ color:'var(--ism-amber)' }}>Paid Ads</span>
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Honest answers before you decide.
            </p>
            <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
            >Talk to Our Team →</a>
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
      <style>{`@media(max-width:768px){.ppc-faq-grid{grid-template-columns:1fr!important;}.ppc-faq-sticky{position:static!important;}}`}</style>
    </section>
  );
}

export default function PPCPage() {
  const [hoveredStep, setHoveredStep] = useState(null);
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
          <div className="ism-container" style={{ textAlign:'center', position:'relative' }}>
            <h1 style={{ fontFamily:J, fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-2px', lineHeight:1.06, margin:'0 auto 24px', maxWidth:940 }}>
              Get in Front of the Right Buyers.<br />
              <span style={{ color:'var(--ism-amber)' }}>Stop Paying for Clicks That Do Not Convert.</span>
            </h1>
            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:600, margin:'0 auto 36px' }}>
              We manage Google Ads, Meta Ads, LinkedIn Ads, and retargeting campaigns for businesses that want <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>leads and revenue</span> from their ad spend, not just impressions, built around your cost per lead target, managed by the same in-house team from setup to results.
            </p>
            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
              <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >Get a Free PPC Audit</a>
              <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget).style.background='var(--color-primary)'; (e.currentTarget).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget).style.background='transparent'; (e.currentTarget).style.color='var(--color-primary)'; }}
              >See Our Results</a>
            </div>
          </div>
        </section>

        {/* REVIEWS BAR */}
        <ReviewsStrip />

        {/* ══ 2. STRATEGY SECTION ══════════════════════════════════════════ */}
        <section className="ppc-strategy-section" style={{ background:'#fff', padding:'88px 0' }}>
          <div className="ism-container">

            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,40px)', fontWeight:800, color:'var(--color-navy)', letterSpacing:'-0.4px', lineHeight:1.2, maxWidth:820, margin:'0 auto 14px' }}>
                Why Paid Ads Drive <span style={{ color:'var(--ism-amber)' }}>Business Growth</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:580, margin:'0 auto', lineHeight:1.75 }}>
                The numbers behind what well-managed paid advertising actually delivers for your business.
              </p>
            </div>

            <div className="ppc-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'Your buyers are searching right now', text:<>Google handles 8.5 billion searches a day. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Paid search puts you at the top the same day you launch</span>, organic rankings take months.</> },
                  { num:'02', title:'Paid clicks convert better than organic', text:<>A high-intent search click is closer to booking than a blog visitor. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>The intent is already there before they land</span>.</> },
                  { num:'03', title:'You control exactly who sees your ads', text:<>Audiences, locations, timing, and spend, all adjustable in real time. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>No other channel gives you that level of control</span>.</> },
                  { num:'04', title:'A bad setup wastes more than no PPC at all', text:<>Most failed campaigns were never managed properly. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>That gap is the difference between losing and 4–5x return</span>.</> },
                  { num:'05', title:'Data from paid ads sharpens everything else', text:<>Every click teaches you what your buyers actually respond to. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>That same data makes your SEO, content, and offers better too</span>.</> },
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

              <div className="ppc-strategy-mosaic" style={{ position:'relative', height:600, borderRadius:20, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/main-services/Why Paid Ads Are Your Fastest Path to Revenue.webp" alt="Why Paid Ads Are Your Fastest Path to Revenue" style={{ width:'100%', height:'100%', objectFit:'contain', display:'block' }} />
              </div>

            </div>

            <div style={{ textAlign:'center' }}>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 auto 22px', maxWidth:560 }}>
                Isuremedia builds every paid ads campaign around one number: your <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>cost per acquired customer</span>. Everything else, the keywords, the audiences, the ad copy, the landing pages, is built to hit that number.
              </p>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 36px', borderRadius:9, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 24px rgba(255,176,0,.38)', transition:'all .18s', whiteSpace:'nowrap' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(255,176,0,.52)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 24px rgba(255,176,0,.38)'; }}
              >
                Get a Free PPC Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
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
        <ClientResults cases={RELATED_CASES} heading="Related PPC Results" />

        {/* CTA BANNER */}
        <section style={{ background:'#fff', padding:'52px 28px' }}>
          <div className="ism-container" >
            <div style={{ background:'#F5F5E6', borderRadius:24, display:'grid', gridTemplateColumns:'340px 1fr', minHeight:280, clipPath:'inset(-150px 0px 0px 0px round 24px)' }} className="ppc-cta-banner-grid">

              <div style={{ position:'relative', overflow:'visible', minHeight:280 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/unblockseo-women.svg"
                  alt="PPC Expert"
                  style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', height:'128%', width:'auto', maxWidth:'none', objectFit:'contain', objectPosition:'bottom center', display:'block' }}
                />
              </div>
              <div style={{ padding:'40px 52px 40px 32px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>How much is your <span style={{ color:'var(--ism-amber)' }}>ad setup</span> costing you?</h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>
                  Get a free PPC audit and see <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>where your budget is leaking</span> and what a properly managed campaign looks like.
                </p>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get My Free PPC Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                </a>
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .ppc-cta-banner-grid { grid-template-columns: 1fr !important; } .ppc-cta-banner-grid > div:first-child { display: none !important; } }`}</style>
        </section>

        {/* ══ IMAGE + TEXT SECTION ════════════════════════════════════════ */}
        <section style={{ background:'var(--color-bg-soft)', padding:'88px 0' }}>
          <div className="ism-container">
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,38px)', fontWeight:800, color:'var(--color-navy)', textAlign:'center', letterSpacing:'-0.4px', lineHeight:1.2, margin:'0 auto 52px', maxWidth:820 }}>
              Paid Ad Campaigns That Deliver <span style={{ color:'var(--ism-amber)' }}>Real, Measurable Results</span>
            </h2>
            <div className="ppc-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
              <div style={{ borderRadius:14, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/main-services/Paid Ad Campaigns That Deliver Real, Measurable Results.webp" alt="Paid Ad Campaigns That Deliver Real, Measurable Results" style={{ width:'100%', display:'block', objectFit:'contain' }} />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>Every campaign we run is built around one metric, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>return, not clicks or impressions</span>. We track cost per lead, cost per acquisition, and revenue per dollar spent.</p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}><span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Most businesses running ads are paying too much for the wrong people</span>. We fix that by tightening audience targeting, rewriting ad creative, and restructuring campaigns around conversion data rather than vanity metrics.</p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>Isuremedia manages campaigns across Google Search, Shopping, Meta, LinkedIn, YouTube, and programmatic networks, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>one team, one dashboard</span>, all optimised toward the same goal.</p>
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
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 12px' }}>Our Complete <span style={{ color:'var(--ism-amber)' }}>PPC and Paid Ads Services</span></h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>Every paid channel your business needs to get in front of the right buyers, managed by one in-house team.</p>
            </div>
            <div className="ppc-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #E8EAF0', borderRadius:16, overflow:'hidden' }}>
              {SERVICES.map((s,i)=>(
                <div key={i} className={`ppc-svc-cell ppc-svc-cell-${i}`} style={{ padding:'36px 32px', borderRight:(i===2||i===SERVICES.length-1)?'none':'1px solid #E8EAF0', borderBottom:i<3?'1px solid #E8EAF0':'none', background:'#fff', transition:'background .18s', cursor:'default' }}
                  onMouseEnter={e=>{ (e.currentTarget).style.background='#F7F8FD'; }} onMouseLeave={e=>{ (e.currentTarget).style.background='#fff'; }}>
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
            @media(max-width:900px){.ppc-svc-grid{grid-template-columns:repeat(2,1fr)!important;}.ppc-svc-cell-1,.ppc-svc-cell-3{border-right:none!important;}.ppc-svc-cell-3{border-bottom:1px solid #E8EAF0!important;}}
            @media(max-width:560px){.ppc-svc-grid{grid-template-columns:1fr!important;}.ppc-svc-cell{border-right:none!important;border-bottom:1px solid #E8EAF0!important;}.ppc-svc-cell-4{border-bottom:none!important;}}
          `}</style>
        </section>

        {/* DARK NAVY */}
        <section style={{ background:'var(--color-navy)', padding:'90px 0', color:'#fff' }}>
          <div className="ism-container">
            <div className="ppc-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              <div>
                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px', lineHeight:1.12 }}>Why Paid Advertising Is a{' '}<span style={{ color:'var(--ism-amber)' }}>Great Investment</span></h2>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>Turn Your Ad Spend Into a Predictable Customer Acquisition Channel</p>
                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}><strong style={{ color:'#fff', fontWeight:700 }}>The businesses that scale fastest are almost always running paid ads alongside organic growth.</strong> Paid gives you an immediate answer, with results <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>within 48 hours</span>, while SEO compounds in the background, and Isuremedia tracks every campaign to the revenue it produces, not impressions or clicks.</p>
                </div>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; }} onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
                >Get a Free PPC Audit →</a>
              </div>
              <div style={{ borderRadius:16, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/main-services/Why PPC Is a Smart Investment.webp" alt="Why PPC Is a Smart Investment" style={{ width:'100%', display:'block', objectFit:'contain' }} />
              </div>
            </div>
          </div>
          <style>{`@media(max-width:768px){.ppc-split{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* TIMELINE */}
        <section style={{ padding:'100px 0', background:'#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>How We Run Your <span style={{ color:'var(--ism-amber)' }}>Paid Ads Campaign</span></h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>From your first brief to a campaign that earns its budget. Here is exactly what happens.</p>
            </div>
            <div className="ppc-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:0, position:'relative' }}>
              <div style={{ position:'absolute', top:28, left:'10%', width:'80%', height:2, background:'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex:0 }} />
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
              <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; }} onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
              >Get a Free PPC Audit</a>
            </div>
          </div>
          <style>{`@media(max-width:768px){.ppc-timeline{grid-template-columns:1fr!important;gap:32px!important;}}`}</style>
        </section>

        {/* PRICING */}
        <section style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>Start with the right plan{' '}<span style={{ color:'var(--ism-amber)' }}>for your goals.</span></h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>Every plan includes a dedicated PPC manager and monthly reporting.</p>
            </div>
            <div className="ppc-plan-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, alignItems:'start' }}>
              {[
                { label:'STARTER PPC', title:'Starter', desc:'Perfect for small businesses launching paid ads for the first time.', features:['Up to 2 campaigns (Google or Meta)','Keyword research & audience setup','Ad copy & creative direction','Conversion tracking setup','Monthly performance report','Dedicated PPC manager'], featured:false },
                { label:'GROWTH PPC', title:'Growth', desc:<>Full-funnel <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>PPC management</span> across multiple platforms.</>, features:['Google + Meta + Retargeting','Full campaign build & management','Monthly creative refresh','Landing page optimisation','A/B testing & CRO','Monthly strategy call + report'], featured:true },
                { label:'ENTERPRISE', title:'Enterprise / White-Label', desc:'For agencies and enterprise brands needing scalable, multi-channel PPC.', features:['Custom multi-platform strategy','Dedicated campaign manager','NDA & white-label reporting','Programmatic & LinkedIn Ads','Quarterly strategy workshops','Priority support & SLA'], featured:false },
              ].map((plan,i)=>(
                <div key={i} style={{ background:'#fff', borderRadius:16, border:plan.featured?'2px solid var(--color-primary)':'1px solid var(--color-border)', padding:'36px 32px', transform:plan.featured?'scale(1.04)':'none', boxShadow:plan.featured?'0 16px 56px rgba(30,77,195,.18)':'none', position:'relative', transition:'all .22s' }}
                  onMouseEnter={e=>{ if(!plan.featured){ const el=e.currentTarget; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; } }}
                  onMouseLeave={e=>{ if(!plan.featured){ const el=e.currentTarget; el.style.transform=''; el.style.boxShadow=''; } }}
                >
                  {plan.featured&&<div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', background:'var(--ism-amber)', borderRadius:100, padding:'5px 18px', whiteSpace:'nowrap' }}><span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-navy)', letterSpacing:'.08em', textTransform:'uppercase' }}>Most Popular</span></div>}
                  <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>{plan.label}</div>
                  <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>{plan.title}</div>
                  <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>{plan.desc}</p>
                  <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                    {plan.features.map((f,j)=>(<li key={j} style={{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.4 }}><i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11, marginTop:3, flexShrink:0 }} />{f}</li>))}
                  </ul>
                </div>
              ))}
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
          <style>{`@media(max-width:900px){.ppc-plan-grid{grid-template-columns:1fr!important;}.ppc-plan-grid>*:nth-child(2){transform:none!important;}}`}</style>
        </section>

        {/* WHY DIFFERENT */}
        <section style={{ padding:'100px 0', background:'#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px', maxWidth:700, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>Why Our Paid Ads Services Drive <span style={{ color:'var(--ism-amber)' }}>Better Results</span> for Your Business</h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>Get more from every pound and dollar you spend on ads.</p>
            </div>
            <div className="ppc-diff-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
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
          <style>{`@media(max-width:768px){.ppc-diff-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* FAQ */}
        <FAQAccordion />

        {/* READY FOR RESULTS */}
        <section style={{ background:'#fff', padding:'60px 0' }}>
          <div className="ism-container">
          <div style={{ background:'var(--color-primary)', borderRadius:24, padding:'60px 64px', display:'grid', gridTemplateColumns:'1fr 420px', gap:48, alignItems:'center', position:'relative', overflow:'hidden' }} className="ppc-rfr-grid">
            <div style={{ position:'absolute', top:'-30%', right:'30%', width:500, height:500, background:'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                <div style={{ width:28, height:3, background:'var(--ism-amber)', borderRadius:2 }} />
                <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.12em', textTransform:'uppercase' }}>Your Growth Starts Here</span>
              </div>
              <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.5vw,48px)', fontWeight:900, color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px', margin:'0 0 20px' }}>
                Ready to get more customers<br /><span style={{ color:'var(--ism-amber)' }}>from every pound you spend on ads?</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.80, margin:'0 0 36px', maxWidth:520 }}>
                Whether you are starting fresh or taking over campaigns that are burning money, the question is the same. Are the right people seeing your ads and buying? If not, talk to us and we will help you turn your ad spend into a channel that <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>predictably brings in customers</span>.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; }} onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
                >Get My Free PPC Audit</a>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'#fff', background:'transparent', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', border:'2px solid rgba(255,255,255,.40)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.40)'; e.currentTarget.style.background='transparent'; }}
                >Talk to Our Team</a>
              </div>
            </div>
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'center', height:320 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/result_footer/ppc.webp" alt="PPC Growth" style={{ height:'100%', width:'auto', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
            </div>
          </div>
          </div>
          <style>{`@media(max-width:900px){.ppc-rfr-grid{grid-template-columns:1fr!important;padding:40px 28px!important;}}`}</style>
        </section>

      </main>
      <Footer />
    </>
  );
}
