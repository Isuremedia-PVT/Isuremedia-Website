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
    title: 'SEO Blog Writing',
    icon: 'fa-solid fa-pen-nib',
    desc: 'Blog content that ranks on Google and brings in the right traffic. We research the keywords your buyers search for, write articles that answer their questions, and optimise every post for search. Content that earns rankings and earns trust at the same time.',
    href: '/services/content-creative',
  },
  {
    title: 'Website Copywriting',
    icon: 'fa-solid fa-file-lines',
    desc: 'Your website copy has one job — get the right person to take the next step. We write home pages, service pages, and landing pages that communicate what you do clearly, position you against competitors, and move visitors toward a decision.',
    href: '/services/content-creative',
  },
  {
    title: 'Social Media Management',
    icon: 'fa-solid fa-share-nodes',
    desc: 'Consistent, on-brand content across the platforms where your audience is. We handle strategy, content creation, scheduling, and engagement so your social presence builds continuously without you managing it day to day.',
    href: '/services/content-creative',
  },
  {
    title: 'Graphic Design',
    icon: 'fa-solid fa-palette',
    desc: 'Ad creatives, social graphics, presentations, brochures, and brand assets — designed by our in-house team to a high standard and delivered fast. Every design is built around your brand and your audience, not pulled from a template.',
    href: '/services/content-creative',
  },
  {
    title: 'Short Form Video Content',
    icon: 'fa-solid fa-video',
    desc: 'Short-form video is the highest-reach content format on every major platform right now. We script, produce, and edit short-form videos for Instagram Reels, TikTok, YouTube Shorts, and LinkedIn — content built to perform, not just to exist.',
    href: '/services/content-creative',
  },
  {
    title: 'Ad Creative Design',
    icon: 'fa-solid fa-rectangle-ad',
    desc: 'Ad creative is the single biggest variable in paid ad performance. We design static ads, animated ads, and video creatives for Meta, Google, LinkedIn, and YouTube — built to stop the scroll and drive the click.',
    href: '/services/content-creative',
  },
  {
    title: 'Email Marketing',
    icon: 'fa-solid fa-envelope',
    desc: 'Email is still the highest-ROI marketing channel when done well. We write and design email campaigns and sequences that get opened, read, and acted on — welcome sequences, nurture campaigns, promotional emails, and re-engagement flows.',
    href: '/services/content-creative',
  },
  {
    title: 'LinkedIn Content & Personal Branding',
    icon: 'fa-brands fa-linkedin',
    desc: 'LinkedIn is the most powerful B2B channel available — for individuals and companies alike. We write posts, articles, and profile copy that build authority, grow your audience, and generate inbound leads from the right people.',
    href: '/services/content-creative',
  },
  {
    title: 'AI Content Production',
    icon: 'fa-solid fa-robot',
    desc: 'We use AI to produce content at scale without sacrificing quality — combining AI-assisted drafting with human editing, SEO optimisation, and brand alignment. More content, faster, at a lower cost per piece — without the generic output that comes from using AI without proper oversight.',
    href: '/services/content-creative',
  },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Content Strategy & Audit', desc: 'We start by understanding your audience, your goals, and what content already exists. We audit what is working, find the gaps, and build a content strategy that ties everything to business outcomes — not just traffic.' },
  { num: 2, period: 'Brand Voice & Guidelines', desc: 'Before a word is written or a graphic is designed, we establish your brand voice, tone, and visual guidelines. Consistency matters — everything we produce sounds and looks like it came from the same place.' },
  { num: 3, period: 'Content Production', desc: 'Our team of writers, designers, and video editors get to work. Every piece goes through quality control before it reaches you. You review it. We refine it. Nothing ships until it is right.' },
  { num: 4, period: 'Publish & Distribute', desc: 'We do not just hand you files. We publish, schedule, and distribute content across the channels in your strategy. Blog posts go live on your site, social posts are scheduled, email campaigns are set up in your platform.' },
  { num: 5, period: 'Measure & Improve', desc: 'We track what performs — which posts rank, which emails get opened, which content drives leads. Monthly reporting tells you what is working and what to do more of. The content strategy gets sharper over time.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-bullseye',      title: 'Content Built Around Business Goals',    desc: 'Most content agencies produce content. We produce content that does something. Every blog post, every video, every email we create is tied to a specific outcome — ranking on Google, generating leads, building authority, or moving a prospect closer to a buying decision. There is always a reason behind what we make.' },
  { dark: false, icon: 'fa-solid fa-magnifying-glass', title: 'SEO Baked Into Every Piece',          desc: 'Content that does not rank does not matter. We optimise every blog post and website page for search before it goes live — keyword targeting, semantic structure, internal linking, and meta data. Your content builds organic traffic while it builds your brand.' },
  { dark: false, icon: 'fa-solid fa-circle-check',   title: 'No Contracts. No Lock-In.',             desc: 'Our content programmes run month to month. You are not locked into an annual commitment. Start with what you need, scale up when results come in, and adjust as your business changes. Most clients stay because the content keeps performing — not because they have to.' },
  { dark: false, icon: 'fa-solid fa-robot',          title: 'AI-Assisted, Human-Quality Output',     desc: 'We use AI where it makes sense — to research faster, draft at scale, and generate variation. But every piece is edited, fact-checked, and refined by a human writer before it reaches you. You get the speed benefits of AI with the quality that comes from genuine editorial standards.' },
  { dark: false, icon: 'fa-solid fa-eye',            title: 'You See Everything Before It Goes Live', desc: 'Nothing is published without your approval. You see the content in draft, request changes, and sign off before anything is published. You always know what is going out under your brand — and you always have the final say.' },
  { dark: false, icon: 'fa-solid fa-headset',        title: 'One Dedicated Content Strategist',      desc: 'You work with one person who knows your brand, your audience, and your goals. Not a rotating pool of freelancers, not a new writer every month. The same person manages your content strategy, briefs the team, and makes sure everything stays on-brand.' },
];

const FAQS = [
  { q: 'What types of content do you produce?', a: 'We produce SEO blog articles, website copy, landing page copy, social media content, short-form video scripts and edits, email campaigns, LinkedIn content, graphic design, ad creatives, and AI-assisted content at scale. Most clients use us for a combination of these — we build the mix around their goals.' },
  { q: 'How do you make sure the content sounds like us?', a: 'We start every engagement with a brand voice session. We look at your existing content, interview your team if needed, and document your tone, language, and style in a brand voice guide. Every writer and designer on your account references that guide before they produce anything.' },
  { q: 'Do you write SEO content?', a: 'Yes. SEO content is one of our strongest services. Every blog post we produce is built around keyword research, written to rank for a specific search intent, and optimised for search before it goes live. We also handle the technical side — meta descriptions, title tags, internal linking, and image optimisation.' },
  { q: 'How much content can you produce per month?', a: 'There is no upper limit. We can produce two blog posts a month for a small business or forty pieces a week for a large brand. We scale to whatever volume your strategy requires, and our AI-assisted production process means we can increase output without decreasing quality.' },
  { q: 'Can you manage our social media accounts?', a: 'Yes. We handle strategy, content creation, scheduling, and engagement across Instagram, Facebook, LinkedIn, TikTok, and X. You retain full access to your accounts at all times. We manage the day-to-day while you focus on running the business.' },
  { q: 'Do you design ad creatives?', a: 'Yes. Ad creative is one of the highest-leverage things you can improve in a paid campaign. We design static ads, carousel ads, and video creatives for Meta, Google Display, LinkedIn, and YouTube. Every creative is designed to perform — not just to look good.' },
  { q: 'How do you measure content performance?', a: 'We track the metrics that matter for each type of content — organic traffic and keyword rankings for blog content, open and click rates for email, reach and engagement for social, and lead volume for landing pages. Monthly reports show what is working and where we are focusing next.' },
  { q: 'Can you help with LinkedIn content for our leadership team?', a: 'Yes. LinkedIn personal branding is one of our specialisms. We work with founders, executives, and sales leaders to build a consistent posting cadence, grow their follower base, and generate inbound leads and conversations from their target audience. We ghostwrite posts that sound like the person — not like a corporate content machine.' },
];

/* ── FAQ 2-COL ────────────────────────────────────────────────────── */
function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="cc-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div className="cc-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          <div style={{ position:'sticky', top:100 }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions About <span style={{ color:'var(--ism-amber)' }}>Content & Creative</span>
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
export default function ContentCreativePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <section className="cc-hero" style={{ background:'linear-gradient(160deg,#EDF2FF 0%,#F7F8FA 48%,#FFFBEB 100%)', padding:'96px 0 64px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-80, right:-60, width:460, height:460, background:'rgba(30,77,195,0.18)', borderRadius:'58% 42% 50% 50% / 46% 58% 42% 54%', filter:'blur(50px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:-60, left:-50, width:360, height:360, background:'rgba(255,176,0,0.13)', borderRadius:'46% 54% 62% 38% / 54% 46% 54% 46%', filter:'blur(44px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'25%', left:'38%', width:260, height:260, background:'rgba(30,77,195,0.08)', borderRadius:'50% 50% 38% 62% / 62% 38% 62% 38%', filter:'blur(38px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)', width:900, height:400, background:'radial-gradient(ellipse,rgba(30,77,195,.04) 0%,transparent 70%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:32, left:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(30,77,195,.18) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />
          <div style={{ position:'absolute', bottom:32, right:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(255,176,0,.25) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>
            <h1 style={{ fontFamily:J, fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-2px', lineHeight:1.06, margin:'0 auto 24px', maxWidth:940 }}>
              Content That Attracts.<br />
              Creative That Converts.<br />
              <span style={{ color:'var(--ism-amber)' }}>Results You Can Measure.</span>
            </h1>

            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:600, margin:'0 auto 36px' }}>
              We create the content and creative that attracts the right audience, builds trust, and moves people toward a buying decision — across search, social, email, and paid ads.
            </p>

            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Start Building My Content Strategy
              </a>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
              >
                Get a Free Content Audit
              </a>
            </div>
          </div>
        </section>

        {/* ══ REVIEWS BAR ══════════════════════════════════════════════════ */}
        <ReviewsStrip />

        {/* ══ 2. STRATEGY SECTION ══════════════════════════════════════════ */}
        <section className="cc-strategy-section" style={{ background:'#fff', padding:'88px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>

            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,40px)', fontWeight:800, color:'var(--color-navy)', letterSpacing:'-0.4px', lineHeight:1.2, maxWidth:820, margin:'0 auto 14px' }}>
                Why Content and Creative Are the <span style={{ color:'var(--ism-amber)' }}>Foundation</span> of Every Channel
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:580, margin:'0 auto', lineHeight:1.75 }}>
                Every marketing channel runs on content. Here is what the data says about why creative quality is the biggest lever in your marketing.
              </p>
            </div>

            <div className="cc-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'Every marketing channel runs on content', text:'SEO needs content to rank. Paid ads need creative to convert. Email needs copy to get opened. Without good content, every other investment underperforms.' },
                  { num:'02', title:'Content that ranks on Google keeps earning without ongoing cost', text:'A blog post published today can rank for years and send leads every month without additional spend.' },
                  { num:'03', title:'Creative quality is the single biggest variable in paid ad performance', text:'The same ad budget produces dramatically different results depending on the quality of the creative.' },
                  { num:'04', title:'Content builds the trust that closes sales', text:'People buy from brands they recognise and trust. Content is how you build that recognition across every channel.' },
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

              <div className="cc-strategy-mosaic" style={{ position:'relative', height:460 }}>
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
                Get a Free Content Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
              </a>
            </div>

          </div>
          <style>{`
            @media (max-width: 768px) {
              .cc-strategy-section { padding: 56px 0 !important; }
              .cc-strategy-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
              .cc-strategy-mosaic { display: none !important; }
            }
            @media (max-width: 480px) {
              .cc-strategy-section { padding: 44px 0 !important; }
            }
          `}</style>
        </section>

        {/* ══ 3. CLIENT RESULTS ════════════════════════════════════════════ */}
        <div id="cc-results"><ClientResults /></div>

        {/* ══ CTA BANNER ═══════════════════════════════════════════════════ */}
        <section style={{ background:'#fff', padding:'70px 28px 52px', overflow:'hidden' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', position:'relative' }}>
            <div style={{ background:'#F5F5E6', borderRadius:24, display:'grid', gridTemplateColumns:'380px 1fr', minHeight:300 }} className="cc-cta-banner-grid">
              <div />
              <div style={{ padding:'40px 52px 40px 32px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>
                  Is your content attracting the <span style={{ color:'var(--ism-amber)' }}>right people?</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>
                  Get a free content audit and find out exactly what your content is missing and what to do about it.
                </p>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get My Free Content Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                </a>
              </div>
            </div>
            <div style={{ position:'absolute', bottom:0, left:0, width:400, height:'calc(100% + 62px)', pointerEvents:'none', borderBottomLeftRadius:24, overflow:'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/unblockseo-women.svg" alt="Content Expert" style={{ position:'absolute', bottom:0, left:0, height:'100%', width:'100%', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .cc-cta-banner-grid { grid-template-columns: 1fr !important; } .cc-cta-banner-grid > div:first-child { display: none !important; } }`}</style>
        </section>

        {/* ══ IMAGE + TEXT SECTION ════════════════════════════════════════ */}
        <section style={{ background:'var(--color-bg-soft)', padding:'88px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,38px)', fontWeight:800, color:'var(--color-navy)', textAlign:'center', letterSpacing:'-0.4px', lineHeight:1.2, margin:'0 auto 52px', maxWidth:820 }}>
              Content and Creative That Drive <span style={{ color:'var(--ism-amber)' }}>Real Business Growth</span>
            </h2>
            <div className="cc-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
              <div style={{ borderRadius:14, overflow:'hidden', boxShadow:'0 16px 56px rgba(0,0,0,.10)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/content-creative-illustration.webp" alt="Content Strategy" style={{ width:'100%', display:'block', objectFit:'cover' }} />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>
                  Good content does two things at once — it attracts the right people and it moves them toward a decision. Blog posts that rank on Google bring in people already searching for what you sell. Ad creative that speaks to the right pain stops the scroll and starts a conversation. Both compound over time.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  We do not just produce content — we build content engines. The strategy, the production process, the distribution, and the measurement all work together so every piece of content serves a purpose and every month the output gets sharper.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Whether you need one blog post a week or a hundred ad creatives a month, we scale to meet the need — without compromising on quality or strategy.
                </p>
                <div style={{ marginTop:8 }}>
                  <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                  >
                    Start My Content Strategy <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 768px) { .cc-imgtext-grid { grid-template-columns: 1fr !important; } }`}</style>
        </section>

        {/* ══ TESTIMONIALS ════════════════════════════════════════════════ */}
        <Testimonials />

        {/* ══ SERVICES GRID ════════════════════════════════════════════════ */}
        <section className="cc-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 12px' }}>
                Our Complete <span style={{ color:'var(--ism-amber)' }}>Content & Creative Services</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every type of content and creative your business needs — built around your goals.
              </p>
            </div>
            <div className="cc-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #E8EAF0', borderRadius:16, overflow:'hidden' }}>
              {SERVICES.map((s,i)=>(
                <div key={i} className={`cc-svc-cell cc-svc-cell-${i}`}
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
            @media (max-width: 900px) { .cc-svc-grid { grid-template-columns: repeat(2,1fr) !important; } .cc-svc-cell-1,.cc-svc-cell-3,.cc-svc-cell-5,.cc-svc-cell-7 { border-right: none !important; } .cc-svc-cell-0,.cc-svc-cell-1,.cc-svc-cell-2,.cc-svc-cell-3,.cc-svc-cell-4,.cc-svc-cell-5,.cc-svc-cell-6,.cc-svc-cell-7 { border-bottom: 1px solid #E8EAF0 !important; } .cc-svc-cell-8 { border-bottom: none !important; border-right: none !important; } }
            @media (max-width: 560px) { .cc-svc-grid { grid-template-columns: 1fr !important; } .cc-svc-cell { border-right: none !important; border-bottom: 1px solid #E8EAF0 !important; } .cc-svc-cell-8 { border-bottom: none !important; } }
          `}</style>
        </section>

        {/* ══ DARK NAVY ════════════════════════════════════════════════════ */}
        <section className="cc-section" style={{ background:'var(--color-navy)', padding:'90px 0', color:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div className="cc-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              <div>
                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px', lineHeight:1.12 }}>
                  Why Content Is a{' '}
                  <span style={{ color:'var(--ism-amber)' }}>Long-Term Growth Asset</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>
                  Build an Audience That Comes to You — Without Paying for Every Click
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>Content compounds.</strong> A blog post published today can rank on Google for years and send you leads every month without ongoing cost. A paid ad stops the moment you stop paying.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>Good creative makes every paid channel more profitable.</strong> The same ad spend produces dramatically different results depending on the quality of the creative. Improving your creative is often the highest-ROI thing you can do in a paid campaign.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>Trust is built through content.</strong> The businesses people buy from are the ones they recognise, understand, and trust. Content is how you build that — consistently, across every channel they use.
                  </p>
                </div>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.30)'; }}
                >
                  Start Building My Content Engine →
                </a>
              </div>
              <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 24px 72px rgba(0,0,0,.35)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/website-optimization-illustration.webp" alt="Content Growth" style={{ width:'100%', display:'block', objectFit:'cover' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ TIMELINE ══════════════════════════════════════════════════════ */}
        <section className="cc-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                Isuremedia&apos;s Process for <span style={{ color:'var(--ism-amber)' }}>Content That Performs</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                From strategy to publishing — a clear, systematic approach to content that grows your business.
              </p>
            </div>
            <div className="cc-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:0, position:'relative' }}>
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
                Get a Free Content Audit
              </a>
            </div>
          </div>
        </section>

        {/* ══ PRICING ═══════════════════════════════════════════════════════ */}
        <section className="cc-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                Start with the right scope{' '}
                <span style={{ color:'var(--ism-amber)' }}>for your goals.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every plan includes a dedicated content strategist and monthly performance reporting.
              </p>
            </div>
            <div className="cc-plan-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, alignItems:'start' }}>
              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
              >
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>STARTER</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Content Essentials</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Consistent SEO content and social media for small businesses.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['4 SEO blog posts per month','Social media management (2 platforms)','Basic graphic design for posts','Content calendar & strategy','Monthly performance report','Dedicated content contact'].map((f,i)=>(
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
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Full Content Programme</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Full content strategy — SEO, social, email, and creative — for growing brands.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['8+ SEO blog posts per month','Social media management (4 platforms)','Email marketing campaigns','Ad creative design','Short-form video content','Monthly strategy & performance review'].map((f,i)=>(
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
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Enterprise Content</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>High-volume content production for large brands and agencies.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['Custom content volume & mix','AI-assisted at-scale production','Dedicated writer & designer team','Brand voice documentation','White-label content available','Quarterly strategy workshops'].map((f,i)=>(
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
        <section className="cc-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px', maxWidth:700, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>
                Why Our Content Services Drive <span style={{ color:'var(--ism-amber)' }}>Better Results</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Content built around your goals — not just your content calendar.
              </p>
            </div>
            <div className="cc-diff-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
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
          <div style={{ maxWidth:1200, margin:'0 auto', background:'var(--color-primary)', borderRadius:24, padding:'60px 64px', display:'grid', gridTemplateColumns:'1fr 420px', gap:48, alignItems:'center', position:'relative', overflow:'hidden' }} className="cc-rfr-grid">
            <div style={{ position:'absolute', top:'-30%', right:'30%', width:500, height:500, background:'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                <div style={{ width:28, height:3, background:'var(--ism-amber)', borderRadius:2 }} />
                <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.12em', textTransform:'uppercase' }}>Your Growth Starts Here</span>
              </div>
              <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.5vw,48px)', fontWeight:900, color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px', margin:'0 0 20px' }}>
                Ready to build content that<br /><span style={{ color:'var(--ism-amber)' }}>actually grows your business?</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.80, margin:'0 0 36px', maxWidth:520 }}>
                Whether you need blog content that ranks, ad creatives that convert, or a full content programme across every channel — we build it around your goals. Talk to us today and we will show you where the opportunity is.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.55)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get My Free Content Audit
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
          <style>{`@media (max-width: 900px) { .cc-rfr-grid { grid-template-columns: 1fr !important; padding: 40px 28px !important; } }`}</style>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px)  { .cc-plan-grid { grid-template-columns: 1fr !important; } .cc-plan-grid > *:nth-child(2) { transform: none !important; } }
        @media (max-width: 900px)  { .cc-split { grid-template-columns: 1fr !important; gap: 36px !important; } }
        @media (max-width: 900px)  { .cc-diff-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px)  { .cc-diff-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px)  { .cc-timeline { grid-template-columns: 1fr !important; gap: 40px !important; } .cc-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; } }
        @media (max-width: 900px)  { .cc-faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 640px)  { .cc-hero { padding: 56px 0 44px !important; } .cc-section { padding-top: 60px !important; padding-bottom: 60px !important; } }
      `}</style>
    </>
  );
}
