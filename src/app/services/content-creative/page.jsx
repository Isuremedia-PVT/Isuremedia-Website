'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import ClientResults from '@/components/ClientResults';
import ReviewsStrip from '@/components/ReviewsStrip';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── Related case studies (Content & Creative) ───────────────────────── */
const RELATED_CASES = [
  {
    img: '/images/casestudy-dummy.png',
    client: 'Dr. Daniel Golshani, M.D., F.A.C.S.',
    intro: 'A brand-new Instagram account with no followers, no content system, and no defined voice.',
    quote: 'From a blank profile to 800+ engaged, targeted followers in 7 months, built entirely from a repeatable content system.',
    stats: [
      { val: '0 → 800+', label: 'Followers',        sub: 'in 7 months',              icon: 'fa-solid fa-users' },
      { val: '1',        label: 'Podcast Recording', sub: 'became weeks of content', icon: 'fa-solid fa-video' },
    ],
    body: 'Dr. Golshani, a Beverly Hills plastic and reconstructive surgeon, was starting an Instagram presence from zero in a high-stakes, high-trust niche. We built a repeatable content engine that turned a single podcast recording into weeks of accuracy-first, client-approved content — growing the account from 0 to 800+ engaged followers in 7 months.',
    link: '/case-studies/plastic-surgeon-instagram-brand-growth',
    linkLabel: "Read Dr. Golshani's Case Study",
  },
  {
    img: '/images/casestudy-dummy.png',
    client: 'Garnus India',
    intro: 'A brand-new Instagram presence with no followers, no content system, and no established voice.',
    quote: 'From a blank page to 447 followers and 50-60k+ organic views in 6 months, fully organic.',
    stats: [
      { val: '0 → 447', label: 'Followers',     sub: 'fully organic, in 6 months', icon: 'fa-solid fa-users' },
      { val: '50-60k+', label: 'Organic Views', sub: 'across the period',          icon: 'fa-solid fa-eye' },
    ],
    body: 'Garnus India launched a natural wooden essentials brand into a crowded home-and-lifestyle category with zero existing audience. We built a personality-led content system and influencer strategy — growing the account from 0 to 447 followers and 50-60k+ organic views in 6 months, entirely organic.',
    link: '/case-studies/ecommerce-instagram-organic-growth-garnus',
    linkLabel: "Read Garnus India's Case Study",
  },
];

/* ── DATA ─────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    title: 'SEO Blog Writing',
    icon: 'fa-solid fa-pen-nib',
    desc: <>Most businesses publish blog content that nobody finds because it was never built to rank. Every article starts with keyword research and search intent mapping so the content targets searches your buyers are actually making. No keyword stuffing, no filler — long-form articles that rank, get read, and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>build topical authority</span>.</>,
    href: '/services/content-creative',
  },
  {
    title: 'Graphic Design',
    icon: 'fa-solid fa-palette',
    desc: 'Every marketing channel your business uses needs design that matches — social posts, email headers, ad banners, infographics, pitch decks, and presentation assets. We produce brand-aligned design across every format so your business looks consistent everywhere. No freelancers, no style inconsistency, no template-look design.',
    href: '/services/content-creative',
  },
  {
    title: 'Ad Creative Design',
    icon: 'fa-solid fa-rectangle-ad',
    desc: 'An ad that stops the scroll earns the click. An ad that blends in wastes the budget. We design static and animated creatives for Google Display, Meta, and LinkedIn, built around the campaign goal and audience. We test variations, identify what performs, and iterate.',
    href: '/services/content-creative',
  },
  {
    title: 'Video Marketing and Editing',
    icon: 'fa-solid fa-video',
    desc: 'Video is the highest-engagement format on every platform and the most underused asset in most marketing setups. We produce short-form video for ads and social, explainer videos for landing pages, and edit raw footage into something polished. Every video is built for a specific channel and goal.',
    href: '/services/content-creative',
  },
  {
    title: 'Brand Identity and Visual Design',
    icon: 'fa-solid fa-fingerprint',
    desc: 'A logo is not a brand. A brand is the full system: logo, colour palette, typography, visual style, tone of voice, and the rules that hold it together across every touchpoint. We build identities from scratch or rebuild inconsistent ones. Consistency makes everything look intentional, and buyers notice.',
    href: '/services/content-creative',
  },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Brief, Discovery, and Strategy', desc: 'Before we write a word or open a design file, we understand your business, audience, and what the piece needs to do. For content, we do keyword research and map a calendar; for creative work, we study your brand and competitors first. You get a clear plan before any production begins.' },
  { num: 2, period: 'Production', desc: 'Our writers, designers, and editors work to the brief. Every piece is built around a specific goal — rank for this keyword, hit this click-through rate, communicate this brand value. First drafts are reviewed internally before they reach you, already checked and polished.' },
  { num: 3, period: 'Review and Approval', desc: <>You review every piece before it is published or handed over. If something needs to change, we change it — <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>one or two revision rounds</span> as standard. Our goal is to get it right, not hit a delivery number. Nothing goes live without your sign-off.</> },
  { num: 4, period: 'Performance Tracking and Iteration', desc: 'After content is published or creatives go live, we track what performs — which articles are ranking, which ads are converting, what needs refreshing. Content and creative are not set-and-forget assets. We monitor, report, and improve every month.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-people-group',  title: 'Writers, Designers, and Editors Under One Roof', desc: 'Your SEO content, ad creatives, brand design, and video all come from the same team, so your voice and visual style stay consistent across every channel. No briefing three different agencies and hoping they talk to each other.' },
  { dark: false, icon: 'fa-solid fa-circle-check',  title: 'No Long-Term Contracts',                          desc: 'We earn your business every month by producing content that performs. No 12-month retainers, no penalties for pausing, no pressure to stay — you stay because the results are there.' },
  { dark: false, icon: 'fa-solid fa-paintbrush',     title: 'Built for Your Brand, Not a Template',            desc: 'We learn your brand voice, visual style, and audience before we produce anything. Every piece matches how you communicate, not how a generic agency template does. If we need to match an existing brand, we match it exactly.' },
  { dark: false, icon: 'fa-solid fa-robot',          title: 'AI-Assisted Production for Scale',                desc: <>For clients who need volume, we use AI to speed up production without removing human judgment. Every piece is still planned, shaped, and approved by a real editor or designer — <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>more output at the same quality</span>, not lower quality.</> },
  { dark: false, icon: 'fa-solid fa-eye',            title: 'Full Visibility Into Everything We Do',          desc: 'You know what is being produced, when it lands, and what it is trying to achieve. Monthly reports cover output and performance, and you always have access to your own files and analytics.' },
  { dark: false, icon: 'fa-solid fa-building',       title: 'White-Label Content for Agencies',                desc: 'If you run a marketing agency, we produce content and creative for your clients under your brand — blog content, ad creatives, social posts, and design, all published as your work. No Isuremedia footprint.' },
];

const FAQS = [
  { q: 'Do you write SEO content or just general blog posts?', a: 'Every piece starts with keyword research and search intent analysis. We write for the searches your buyers are actually making, not just topics that sound relevant, structured for both Google and real readers. Every piece has a target keyword, a clear structure, and a purpose.' },
  { q: 'Do you use AI to write content?', a: 'We use AI to speed up parts of production where it makes sense, but every piece is still planned, written, and edited by a human who knows your industry and brand. The output sounds like your brand, not a language model, and AI-assisted production lets us deliver more without dropping quality.' },
  { q: 'Can you match our existing brand voice and visual style?', a: 'Yes. Before we produce anything, we study your existing content, design assets, and brand guidelines — building them as part of the work if you do not have any. Your audience will not be able to tell that an agency was involved.' },
  { q: 'What formats do you cover?', a: 'SEO blog writing, website copywriting, ad copy, email newsletters, social media captions and creative, graphic design, ad creative design, video production and editing, and full brand identity including logo, colour system, and typography. One team handles all of it.' },
  { q: 'How quickly can you turn around content?', a: <>Most pieces come back within <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>five to seven business days</span>. Ad creatives and social graphics are usually faster; brand identity projects depend on scope. If you have a launch deadline, tell us and we will build the schedule around it.</> },
  { q: 'How many revision rounds are included?', a: 'Two rounds as standard. Most work is finalised within one or two because we do the research and briefing properly upfront. If something needs more work, we do not charge extra for it.' },
  { q: 'Do you handle content distribution or just production?', a: 'Both. For clients who need a full content marketing service, we manage the publishing calendar, scheduling, and analytics tracking on top of production. For clients who want to manage distribution themselves, we hand over assets ready to publish.' },
  { q: 'Do you offer white-label content for agencies?', a: 'Yes. We produce blog content, ad creatives, social posts, and design assets for agency clients under your brand. Your clients see your name on everything — we have no footprint in the relationship.' },
  { q: 'Can you produce content across different industries?', a: 'Yes, across every major industry including technology, e-commerce, legal, healthcare, home services, finance, and professional services. Our research and briefing process gets us up to speed before we write anything — no generic content that could apply to any business.' },
];

/* ── FAQ 2-COL ────────────────────────────────────────────────────── */
function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section className="cc-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="cc-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          <div className="cc-faq-sticky" style={{ position:'sticky', top:100 }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions About <span style={{ color:'var(--ism-amber)' }}>Content & Creative</span>
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Honest answers before you decide.
            </p>
            <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Talk to Our Team →
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
  const [hoveredStep, setHoveredStep] = useState(null);
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

          <div className="ism-container" style={{ textAlign:'center', position:'relative' }}>
            <h1 style={{ fontFamily:J, fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-2px', lineHeight:1.06, margin:'0 auto 24px', maxWidth:940 }}>
              Content and Creative That Makes<br />
              People <span style={{ color:'var(--ism-amber)' }}>Choose You.</span>
            </h1>

            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:600, margin:'0 auto 36px' }}>
              We write, design, and produce every content asset your marketing needs — SEO blog content that ranks, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>ad creatives that stop the scroll</span>, graphic design that fits your brand, videos that convert. All in-house, all built to perform.
            </p>

            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Book a Free Creative Consultation
              </a>
              <a href="/portfolio"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget).style.background='var(--color-primary)'; (e.currentTarget).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget).style.background='transparent'; (e.currentTarget).style.color='var(--color-primary)'; }}
              >
                See Our Work
              </a>
            </div>
          </div>
        </section>

        {/* ══ REVIEWS BAR ══════════════════════════════════════════════════ */}
        <ReviewsStrip />

        {/* ══ 2. STRATEGY SECTION ══════════════════════════════════════════ */}
        <section className="cc-strategy-section" style={{ background:'#fff', padding:'88px 0' }}>
          <div className="ism-container">

            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,40px)', fontWeight:800, color:'var(--color-navy)', letterSpacing:'-0.4px', lineHeight:1.2, maxWidth:820, margin:'0 auto 14px' }}>
                Why Content and Creative Drive <span style={{ color:'var(--ism-amber)' }}>Business Growth</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:580, margin:'0 auto', lineHeight:1.75 }}>
                The gap between a business that grows online and one that does not is almost always the quality of the content.
              </p>
            </div>

            <div className="cc-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'Consistent SEO content compounds traffic', text:<>Every article that ranks keeps sending visitors week after week. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>A traffic engine that runs itself, without paying for each visit</span>.</> },
                  { num:'02', title:'Creative decides ad performance, not targeting', text:<>Creative quality drives most of the variation in ad results. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Strong creative beats perfect targeting almost every time</span>.</> },
                  { num:'03', title:'Trust forms in seconds, based on how you look', text:<>Inconsistent design signals a business isn&apos;t serious. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>A consistent brand identity gets chosen over weaker competitors</span>.</> },
                  { num:'04', title:'AI search cites content directly', text:<>Well-structured, authoritative content gets cited by ChatGPT and Perplexity. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Thin content stays invisible, no matter how much you publish</span>.</> },
                  { num:'05', title:'One asset, reused everywhere', text:<>A single well-made piece of content can become a blog post, five social posts, and an ad. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Good creative multiplies instead of getting used once</span>.</> },
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

              <div className="cc-strategy-mosaic" style={{ position:'relative', height:600, borderRadius:20, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/main-services/Why Content and Creative Drive Business Growth.webp" alt="Why Content and Creative Drive Business Growth" style={{ width:'100%', height:'100%', objectFit:'contain', display:'block' }} />
              </div>

            </div>

            <div style={{ textAlign:'center' }}>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 auto 22px', maxWidth:560 }}>
                Isuremedia produces every content format your marketing needs. Same team. Same brand voice. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Consistent quality across every channel</span>.
              </p>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 36px', borderRadius:9, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 24px rgba(255,176,0,.38)', transition:'all .18s', whiteSpace:'nowrap' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(255,176,0,.52)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 24px rgba(255,176,0,.38)'; }}
              >
                Book a Free Creative Consultation <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
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
        <div id="cc-results"><ClientResults cases={RELATED_CASES} heading="Related Content & Creative Results" /></div>

        {/* ══ CTA BANNER ═══════════════════════════════════════════════════ */}
        <section style={{ background:'#fff', padding:'52px 28px' }}>
          <div className="ism-container" >
            <div style={{ background:'#F5F5E6', borderRadius:24, display:'grid', gridTemplateColumns:'340px 1fr', minHeight:280, clipPath:'inset(-150px 0px 0px 0px round 24px)' }} className="cc-cta-banner-grid">

              <div style={{ position:'relative', overflow:'visible', minHeight:280 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/unblockseo-women.svg"
                  alt="Content Creative"
                  style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', height:'128%', width:'auto', maxWidth:'none', objectFit:'contain', objectPosition:'bottom center', display:'block' }}
                />
              </div>
              <div style={{ padding:'40px 52px 40px 32px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>
                  See what better <span style={{ color:'var(--ism-amber)' }}>content and creative</span> could do for your marketing.
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>
                  Book a <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>free consultation</span>. Tell us what you are trying to grow and we will show you what would make it work.
                </p>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Book a Free Creative Consultation <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                </a>
              </div>
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .cc-cta-banner-grid { grid-template-columns: 1fr !important; } .cc-cta-banner-grid > div:first-child { display: none !important; } }`}</style>
        </section>

        {/* ══ IMAGE + TEXT SECTION ════════════════════════════════════════ */}
        <section style={{ background:'var(--color-bg-soft)', padding:'88px 0' }}>
          <div className="ism-container">
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,38px)', fontWeight:800, color:'var(--color-navy)', textAlign:'center', letterSpacing:'-0.4px', lineHeight:1.2, margin:'0 auto 52px', maxWidth:820 }}>
              Content and Creative That Drive <span style={{ color:'var(--ism-amber)' }}>Real Business Growth</span>
            </h2>
            <div className="cc-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
              <div style={{ borderRadius:14, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/main-services/Content and Creative That Drive Real Business Growth.webp" alt="Content and Creative That Drive Real Business Growth" style={{ width:'100%', display:'block', objectFit:'contain' }} />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>
                  Good content does two things at once — it attracts the right people and moves them toward a decision. Blog posts that rank bring in people already searching for what you sell. Ad creative that hits the right pain <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>stops the scroll</span>. Both compound over time.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  We do not just produce content — <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>we build content engines</span>. Strategy, production, distribution, and measurement work together so every piece serves a purpose and the output gets sharper every month.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Whether you need one blog post a week or a hundred ad creatives a month, we scale to meet it <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>without compromising on quality</span>.
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
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 12px' }}>
                Our Complete <span style={{ color:'var(--ism-amber)' }}>Content & Creative Services</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every content and creative asset your marketing needs, produced by the same in-house team.
              </p>
            </div>
            <div className="cc-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #E8EAF0', borderRadius:16, overflow:'hidden' }}>
              {SERVICES.map((s,i)=>(
                <div key={i} className={`cc-svc-cell cc-svc-cell-${i}`}
                  style={{ padding:'36px 32px', borderRight:((i+1)%3===0||i===SERVICES.length-1)?'none':'1px solid #E8EAF0', borderBottom:i<3?'1px solid #E8EAF0':'none', background:'#fff', transition:'background .18s', cursor:'default' }}
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
            @media (max-width: 900px) { .cc-svc-grid { grid-template-columns: repeat(2,1fr) !important; } .cc-svc-cell-1,.cc-svc-cell-3 { border-right: none !important; } .cc-svc-cell-3 { border-bottom: 1px solid #E8EAF0 !important; } }
            @media (max-width: 560px) { .cc-svc-grid { grid-template-columns: 1fr !important; } .cc-svc-cell { border-right: none !important; border-bottom: 1px solid #E8EAF0 !important; } .cc-svc-cell-4 { border-bottom: none !important; } }
          `}</style>
        </section>

        {/* ══ DARK NAVY ════════════════════════════════════════════════════ */}
        <section className="cc-section" style={{ background:'var(--color-navy)', padding:'90px 0', color:'#fff' }}>
          <div className="ism-container">
            <div className="cc-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              <div>
                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px', lineHeight:1.12 }}>
                  Why Content and Creative Is a{' '}
                  <span style={{ color:'var(--ism-amber)' }}>Great Investment</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>
                  Turn Every Marketing Channel You Run Into Something That Actually Converts
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>Every channel you run depends on content and creative to work.</strong> A single well-structured article can <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>rank and convert for years</span> — and Isuremedia produces every format, content, creative, and brand guidelines, under one roof, so everything stays consistent and keeps compounding.
                  </p>
                </div>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.30)'; }}
                >
                  Book a Free Creative Consultation →
                </a>
              </div>
              <div style={{ borderRadius:16, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/main-services/Why Content and Creative Is a Great Investment.webp" alt="Why Content and Creative Is a Great Investment" style={{ width:'100%', display:'block', objectFit:'contain' }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ TIMELINE ══════════════════════════════════════════════════════ */}
        <section className="cc-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                How We Produce Your <span style={{ color:'var(--ism-amber)' }}>Content and Creative</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                From your brief to a finished asset that performs. Here is exactly how we work.
              </p>
            </div>
            <div className="cc-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, position:'relative' }}>
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
              <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Book a Free Creative Consultation
              </a>
            </div>
          </div>
        </section>

        {/* ══ PRICING ═══════════════════════════════════════════════════════ */}
        <section className="cc-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div className="ism-container">
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
                onMouseEnter={e=>{ const el=e.currentTarget; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget; el.style.transform=''; el.style.boxShadow=''; }}
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
              </div>

              <div style={{ background:'#fff', borderRadius:16, border:'2px solid var(--color-primary)', padding:'36px 32px', transform:'scale(1.04)', boxShadow:'0 16px 56px rgba(30,77,195,.18)', position:'relative', transition:'all .22s' }}>
                <div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', background:'var(--ism-amber)', borderRadius:100, padding:'5px 18px', whiteSpace:'nowrap' }}>
                  <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-navy)', letterSpacing:'.08em', textTransform:'uppercase' }}>Most Popular</span>
                </div>
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>GROWTH</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Full Content Programme</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Full content strategy — <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>SEO, social, email, and creative</span> — for growing brands.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['8+ SEO blog posts per month','Social media management (4 platforms)','Email marketing campaigns','Ad creative design','Short-form video content','Monthly strategy & performance review'].map((f,i)=>(
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
        <section className="cc-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px', maxWidth:700, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>
                Why Our Content and Creative Services Drive <span style={{ color:'var(--ism-amber)' }}>Better Results</span> for Your Business
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Get content and creative that your marketing actually needs to work.
              </p>
            </div>
            <div className="cc-diff-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
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
        <section style={{ background:'#fff', padding:'60px 0' }}>
          <div className="ism-container">
          <div style={{ background:'var(--color-primary)', borderRadius:24, padding:'60px 64px', display:'grid', gridTemplateColumns:'1fr 420px', gap:48, alignItems:'center', position:'relative', overflow:'hidden' }} className="cc-rfr-grid">
            <div style={{ position:'absolute', top:'-30%', right:'30%', width:500, height:500, background:'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                <div style={{ width:28, height:3, background:'var(--ism-amber)', borderRadius:2 }} />
                <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.12em', textTransform:'uppercase' }}>Your Growth Starts Here</span>
              </div>
              <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.5vw,48px)', fontWeight:900, color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px', margin:'0 0 20px' }}>
                Ready to publish content<br /><span style={{ color:'var(--ism-amber)' }}>that actually gets results?</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.80, margin:'0 0 36px', maxWidth:520 }}>
                Whether you need SEO content that ranks, ad creatives that stop the scroll, or a brand that people remember, the question is the same. Is your content pulling its weight? If not, talk to us and we will help you build a <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>content engine that grows your business</span>.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.55)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get a Free Content Review
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
              <img src="/result_footer/creative.webp" alt="Content Creative" style={{ height:'100%', width:'auto', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
            </div>
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
        @media (max-width: 900px)  { .cc-faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } .cc-faq-sticky { position: static !important; } }
        @media (max-width: 640px)  { .cc-hero { padding: 56px 0 44px !important; } .cc-section { padding-top: 60px !important; padding-bottom: 60px !important; } }
      `}</style>
    </>
  );
}
