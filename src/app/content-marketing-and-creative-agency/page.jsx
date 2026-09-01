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
    img: '/casestudy/danielgolshsnimd-card.webp',
    client: 'Dr. Daniel Golshani, M.D., F.A.C.S.',
    intro: 'A brand-new Instagram account with no followers, no content system, and no defined voice.',
    quote: 'From a blank profile to 800+ engaged, targeted followers in 7 months, built entirely from a repeatable content system.',
    stats: [
      { val: '0 → 800+', label: 'Followers',        sub: 'in 7 months',              icon: 'fa-solid fa-users' },
      { val: '1',        label: 'Podcast Recording', sub: 'became weeks of content', icon: 'fa-solid fa-video' },
    ],
    body: 'Dr. Golshani, a Beverly Hills plastic and reconstructive surgeon, was starting an Instagram presence from zero in a high-stakes, high-trust niche. We built a repeatable content engine that turned a single podcast recording into weeks of accuracy-first, client-approved content, growing the account from 0 to 800+ engaged followers in 7 months.',
    link: '/case-studies/plastic-surgeon-instagram-brand-growth',
    linkLabel: "Read Dr. Golshani's Case Study",
  },
  {
    img: '/casestudy/garnus-card.webp',
    client: 'Garnus India',
    intro: 'A brand-new Instagram presence with no followers, no content system, and no established voice.',
    quote: 'From a blank page to 447 followers and 50-60k+ organic views in 6 months, fully organic.',
    stats: [
      { val: '0 → 447', label: 'Followers',     sub: 'fully organic, in 6 months', icon: 'fa-solid fa-users' },
      { val: '50-60k+', label: 'Organic Views', sub: 'across the period',          icon: 'fa-solid fa-eye' },
    ],
    body: 'Garnus India launched a natural wooden essentials brand into a crowded home-and-lifestyle category with zero existing audience. We built a personality-led content system and influencer strategy, growing the account from 0 to 447 followers and 50-60k+ organic views in 6 months, entirely organic.',
    link: '/case-studies/ecommerce-instagram-organic-growth-garnus',
    linkLabel: "Read Garnus India's Case Study",
  },
];

/* ── DATA ─────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    title: 'SEO Blog & Article Writing',
    icon: 'fa-solid fa-pen-nib',
    desc: <>Most blog posts fail because they aren&apos;t optimized for search intent. As a dedicated blog writing agency, our SEO content writing service targets queries your buyers search for. We deliver well-researched, long-form articles that rank on Google and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>build real industry authority</span>.</>,
    href: '/content-marketing-and-creative-agency',
  },
  {
    title: 'Graphic Design & Branding',
    icon: 'fa-solid fa-palette',
    desc: 'Every channel needs visuals that align with your brand voice. We deliver social graphics, email headers, infographics, and pitch decks. Clean, custom design that makes your business look professional everywhere.',
    href: '/content-marketing-and-creative-agency',
  },
  {
    title: 'Ad Creative Design',
    icon: 'fa-solid fa-rectangle-ad',
    desc: 'Ads that blend in waste your ad spend. Our specialized ad creative design service produces high-performing static and animated graphics for Meta, Google Display, and LinkedIn. We design for high click-through rates and continually test visual variations.',
    href: '/content-marketing-and-creative-agency',
  },
  {
    title: 'Video Marketing & Editing',
    icon: 'fa-solid fa-video',
    desc: "Video delivers the highest engagement on every major platform. As a full-service social media content agency, we create short-form videos for ads and Reels, explainer videos for landing pages, and polished edits from raw footage tailored to each platform's format.",
    href: '/content-marketing-and-creative-agency',
  },
  {
    title: 'Brand Identity & Copywriting',
    icon: 'fa-solid fa-fingerprint',
    desc: 'A strong brand needs cohesive messaging and visuals. Our website copywriting service crafts clear web pages, while our designers build logos, color palettes, and brand guidelines. We ensure your tone of voice and visual identity stay sharp across all touchpoints.',
    href: '/content-marketing-and-creative-agency',
  },
  {
    title: 'Social Media Content',
    icon: 'fa-brands fa-instagram',
    desc: 'Keep your brand active without sinking hours into daily production. As a full-service social media content agency, we design custom social posts, carousel graphics, and short-form video content tailored for maximum audience engagement.',
    href: '/content-marketing-and-creative-agency',
  },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Discovery & Strategy', desc: 'We start by learning your business goals, target audience, and brand voice. For written assets, our SEO content writing service team conducts keyword research to map out search intent. For visual assets, we review your brand guidelines and analyze competitors. You get a clear, approved strategy before any creation starts.' },
  { num: 2, period: 'Dedicated In-House Production', desc: 'Our specialized writers, designers, and editors produce every asset according to the approved brief. Whether it is an article from our blog writing agency team, visual assets from our ad creative design service, or high-converting landing pages via our website copywriting service, every piece is polished internally before it reaches your inbox.' },
  { num: 3, period: 'Review & Easy Revisions', desc: <>You review every asset before anything goes live. If you need adjustments, we make them quickly with <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>standard revision rounds</span> included. As a full-service content marketing agency, our priority is producing work that meets your exact brand standards, nothing publishes without your final sign-off.</> },
  { num: 4, period: 'Performance Tracking & Optimization', desc: 'Once your assets are live, we monitor performance metrics closely. We track search engine rankings, click-through rates, and conversion numbers to identify top-performing assets. We refine and optimize your creative strategy every month to maximize long-term marketing ROI.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-people-group',  title: 'Writers, Designers, and Editors Under One Roof', desc: <>Your search strategy, social posts, ad graphics, and landing pages all come from the same dedicated team. No briefing three separate freelancers or managing messy handoffs. As your full-service content marketing agency, we keep your brand voice and visual style <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>completely aligned across every single channel</span>.</> },
  { dark: false, icon: 'fa-solid fa-circle-check',  title: 'No Long-Term Contracts or Lock-Ins',              desc: 'We earn your partnership every single month by delivering measurable growth. No rigid 12-month retainers, no cancellation penalties, and no hidden fees. You stay because your marketing generates real revenue, not because you are trapped in a contract.' },
  { dark: false, icon: 'fa-solid fa-paintbrush',     title: 'Tailored for Your Brand, Never Templates',        desc: 'We thoroughly study your brand voice, visual guidelines, and target audience before producing a single asset. Whether you need a specialized SEO content writing service from our blog writing agency or high-converting web pages via our website copywriting service, every asset sounds and looks uniquely like your company.' },
  { dark: false, icon: 'fa-solid fa-robot',          title: 'AI-Assisted Scale Without Quality Loss',           desc: <>For clients needing high asset volume, we use AI tools to speed up research and initial drafting, never to replace expert human creativity. Every piece is refined, structured, and approved by senior editors and designers. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>You get faster turnaround times and higher output at uncompromising quality</span>.</> },
  { dark: false, icon: 'fa-solid fa-eye',            title: 'Full Visibility & Real-Time Reporting',           desc: 'You always know exactly what is being created, when it goes live, and how it performs. You get full ownership of all raw design files, final assets, and editorial calendars, alongside clear monthly performance reports tracking keyword rankings, traffic growth, and conversion metrics.' },
  { dark: false, icon: 'fa-solid fa-building',       title: 'White-Label Content for Growing Agencies',        desc: "Running an agency? Scale your client deliverables without increasing your internal payroll. We fulfill long-form articles, high-converting assets from our ad creative design service, and social graphics from our social media content agency pod, all published under your agency's name with zero Isuremedia branding." },
];

const FAQS = [
  { q: 'What makes your SEO content writing service different from standard blog posts?', a: 'Our SEO content writing service focuses on keyword intent, topical depth, and lead conversion rather than generic writing. We map search intent by targeting high-value keywords your prospective clients are actively searching for. As a dedicated blog writing agency, our team builds structured content clusters to establish deep topical authority while integrating strategic call-to-actions that convert readers into paying leads.' },
  { q: 'How does your content help my business rank in AI search engines like ChatGPT and Google AI Overviews?', a: 'We format content with clear structural hierarchies, direct definitions, and factual summaries that AI search engines prioritize for citations. Our team organizes key insights using bold lead-ins, short paragraphs, and schema-friendly layouts that AI models easily extract. We replace generic fluff with information-dense expert data, ensuring search crawlers index your website as the authoritative primary source.' },
  { q: 'Do you use AI to write articles and design creative assets?', a: 'No, every final deliverable is researched, written, and designed by human experts. We only leverage AI tools to accelerate backend keyword research, data collection, and topic mapping. Human editors and visual artists refine every draft and visual to protect your brand from search engine penalties while maintaining an authentic, distinct voice tailored to your market.' },
  { q: 'What core content and design formats do you provide?', a: 'We provide full-funnel content and creative assets across organic search, paid advertising, social media, and web copywriting. Our services cover high-ranking SEO search articles, landing page sales copy from our website copywriting service, and conversion-focused ad graphics built by our ad creative design team. We also deliver custom carousel posts and short-form video assets through our social media content agency framework.' },
  { q: 'Can you match our existing brand voice and visual guidelines?', a: 'Yes, we perform a thorough brand audit before production to mirror your visual identity and messaging style exactly. Our team analyzes your current website, typography, color palettes, and past marketing materials to construct a unified style map. We then adapt our writing tone and graphic layouts so every asset sounds natural and looks completely consistent with your existing brand identity.' },
  { q: 'What is your standard delivery turnaround time?', a: <>Standard blog posts and social graphics are delivered within <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>3 to 5 business days</span>, while full website copy and ad campaigns take 5 to 10 business days. Clear delivery deadlines are established and agreed upon before work begins. Production schedules also adjust seamlessly based on your selected monthly plan scope and overall volume needs.</> },
  { q: 'How many rounds of revisions are included?', a: 'Every deliverable includes 1 to 2 standard revision rounds at no extra cost. We handle fast adjustments for copy tone, visual styling, or formatting tweaks to ensure complete alignment with your goals. Nothing goes live or gets published without your final review and sign-off.' },
  { q: 'Do I own full rights to the final content and design files?', a: 'Yes, you retain 100% full ownership and copyright of all copy, visual designs, and source files upon delivery. There are zero royalty fees or ongoing usage restrictions, meaning you are free to publish, modify, or repurpose your assets across any channel indefinitely. All original design source files and documents are transferred directly to your team upon completion.' },
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
              Frequently Asked <span style={{ color:'var(--ism-amber)' }}>Questions</span>
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Everything you need to know about our content strategy, process and deliverables.
            </p>
            <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
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
              How Quality Content & Creative <span style={{ color:'var(--ism-amber)' }}>Drive Business Revenue</span>
            </h1>

            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:680, margin:'0 auto 20px' }}>
              We are a full-service content marketing agency, we write, design and create everything your business needs to win online. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Get high-ranking blog posts, eye-catching ad designs, clean graphics and high-converting ad videos</span>.
            </p>

            <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:680, margin:'0 auto 36px' }}>
              Whether you need a dedicated blog writing agency to bring in traffic, a reliable social media content agency to run your channels, or a custom ad creative design service to lower your paid ad costs, we build everything to fit your exact brand voice.
            </p>

            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
              <a href="/appointment"
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
                How Quality Content & Creative <span style={{ color:'var(--ism-amber)' }}>Drive Business Revenue</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:580, margin:'0 auto', lineHeight:1.75 }}>
                Top five ways structured content and custom design scale your marketing performance.
              </p>
            </div>

            <div className="cc-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'SEO blogs bring in free, lasting traffic', text:<>Working with a blog writing agency for an SEO content writing service creates articles that rank on Google. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Each ranking post brings in steady leads month after month</span> without paying for ad clicks.</> },
                  { num:'02', title:'Eye-catching ad design lowers your lead costs', text:<>Good targeting gets your ad shown, but a specialized ad creative design service makes people stop scrolling. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>High-quality visuals get more clicks and lower your total ad spend</span>.</> },
                  { num:'03', title:'Clean design and clear copy build instant trust', text:<>Poor graphics and weak writing make your business look amateur. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Professional visual branding and a sharp website copywriting service help you win customers over competitors</span>.</> },
                  { num:'04', title:'Well-structured content gets cited by AI search', text:<>AI tools like ChatGPT pull answers directly from clear, informative articles. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Structuring your content properly ensures your brand gets recommended</span> while thin posts stay hidden.</> },
                  { num:'05', title:'Reusing one asset saves time and cuts costs', text:<>Working with a full-service content marketing agency and social media content agency lets you turn one main article into social posts, emails, and ad images. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>You get more marketing out of every asset you build</span>.</> },
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

              <div className="cc-strategy-mosaic" style={{ position:'relative', height:600, borderRadius:20, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src="/main-services/Why Content and Creative Drive Business Growth.webp" alt="Why Content and Creative Drive Business Growth" style={{ width:'100%', height:'100%', objectFit:'contain', display:'block' }} />
              </div>

            </div>

            <div style={{ textAlign:'center' }}>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 auto 22px', maxWidth:560 }}>
                Isuremedia produces every content format your marketing needs. We act as your unified content marketing agency, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>keeping your brand voice consistent</span> across search engines, social media platforms and paid ad channels.
              </p>
              <a href="/appointment"
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
                  src="/main-services/seo-women.webp"
                  alt="Content Creative"
                  style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', height:'128%', width:'auto', maxWidth:'none', objectFit:'contain', objectPosition:'bottom center', display:'block' }}
                />
              </div>
              <div style={{ padding:'40px 52px 40px 32px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>
                  See what better <span style={{ color:'var(--ism-amber)' }}>content can do</span> for your business.
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>
                  Partner with a full-service content marketing agency. Book a <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>free strategy session</span> to see how expert SEO writing and high-converting ad designs can grow your revenue.
                </p>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
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
              Content and Creative That Drive <span style={{ color:'var(--ism-amber)' }}>High Business Revenue</span>
            </h2>
            <div className="cc-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>
              <div style={{ borderRadius:14, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src="/main-services/Content and Creative That Drive Real Business Growth.webp" alt="Content and Creative That Drive Real Business Growth" style={{ width:'100%', display:'block', objectFit:'contain' }} />
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>
                  Good content does two main jobs: it brings in qualified buyers and guides them toward a purchase. Articles that rank well pull in people who are already searching for your services. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Visual ad designs that address customer pain points make users stop scrolling immediately</span>. Both channels build compounding value for your brand over time.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  We act as your complete content marketing agency to build scalable content engines. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Strategy, production, distribution, and measurement work as one system</span> so every single asset serves a clear business goal.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Whether you need a specialized SEO content writing service from a dedicated blog writing agency, custom graphics from an ad creative design service, or high-converting pages via a website copywriting service, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>we scale up production seamlessly while keeping quality high</span>.
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
        <Testimonials
          heading="What Our Clients Are Saying"
          subheading={<>Hear directly from brands and agencies who rely on <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>our content marketing agency</span>.</>}
        />

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
            @media (max-width: 900px) { .cc-svc-grid { grid-template-columns: repeat(2,1fr) !important; } .cc-svc-cell-1,.cc-svc-cell-3,.cc-svc-cell-5 { border-right: none !important; } .cc-svc-cell-0,.cc-svc-cell-1,.cc-svc-cell-2,.cc-svc-cell-3 { border-bottom: 1px solid #E8EAF0 !important; } }
            @media (max-width: 560px) { .cc-svc-grid { grid-template-columns: 1fr !important; } .cc-svc-cell { border-right: none !important; border-bottom: 1px solid #E8EAF0 !important; } .cc-svc-cell-5 { border-bottom: none !important; } }
          `}</style>
        </section>

        {/* ══ DARK NAVY ════════════════════════════════════════════════════ */}
        <section className="cc-section" style={{ background:'var(--color-navy)', padding:'90px 0', color:'#fff' }}>
          <div className="ism-container">
            <div className="cc-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              <div>
                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px', lineHeight:1.12 }}>
                  Why Quality Content Is Your{' '}
                  <span style={{ color:'var(--ism-amber)' }}>Best Investment</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>
                  Create high-value content once and let it drive traffic and sales for years.
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    Every marketing channel you run depends on great writing and design to convert. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>A single article from our SEO content writing service can rank high on Google</span> and bring in qualified leads for years.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    As a full-service content marketing agency, Isuremedia creates every format under one roof. From high-ranking blogs by our blog writing agency team to high-converting landing pages via our website copywriting service and scroll-stopping visuals from our ad creative design service. We keep your brand consistent so your marketing results keep compounding over time.
                  </p>
                </div>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.30)'; }}
                >
                  Book a Free Creative Consultation →
                </a>
              </div>
              <div style={{ borderRadius:16, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src="/main-services/Why Content and Creative Is a Great Investment.webp" alt="Why Content and Creative Is a Great Investment" style={{ width:'100%', display:'block', objectFit:'contain' }} />
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
              <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s' }}
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
                Start with the Right Scope{' '}
                <span style={{ color:'var(--ism-amber)' }}>for Your Growth Goals.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every plan delivers revenue-focused execution, transparent monthly billing, and dedicated strategy from a full-service content marketing agency.
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
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Full content strategy, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>SEO, social, email, and creative</span>, for growing brands.</p>
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
                Why Choose Isuremedia for Your <span style={{ color:'var(--ism-amber)' }}>Content & Creative</span>
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
                Ready to Publish Content<br />That Actually <span style={{ color:'var(--ism-amber)' }}>Brings in Sales?</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.80, margin:'0 0 36px', maxWidth:520 }}>
                Whether you need search articles from our SEO content writing service, sales pages from our website copywriting service, or ad graphics from our ad creative design service, the goal is simple: your marketing needs to bring in real customers. We combine the work of a dedicated blog writing agency and a social media content agency, and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>handle your entire production process in one place</span> so every piece of content helps grow your business.
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.55)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get a Free Content Review
                </a>
                <a href="/appointment" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'#fff', background:'transparent', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', border:'2px solid rgba(255,255,255,.40)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.40)'; e.currentTarget.style.background='transparent'; }}
                >
                  Talk to Our Team
                </a>
              </div>
            </div>
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'center', height:320 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" src="/result_footer/creative.webp" alt="Content Creative" style={{ height:'100%', width:'auto', objectFit:'contain', objectPosition:'bottom center', display:'block' }} />
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
