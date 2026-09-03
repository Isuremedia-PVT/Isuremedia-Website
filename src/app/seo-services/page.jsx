'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import ClientResults from '@/components/ClientResults';
import ReviewsStrip from '@/components/ReviewsStrip';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── Related case studies (SEO) ──────────────────────────────────────── */
const RELATED_CASES = [
  {
    img: '/casestudy/garden-card.webp',
    client: 'Garden Solution Landscapes',
    intro: 'A great reputation and an active Google Business Profile, but almost no organic traffic.',
    quote: 'What Isuremedia built is a website and profile that finally reflect our reputation, and it shows up in the numbers every month.',
    stats: [
      { val: '800%', label: 'Organic Traffic Growth', sub: 'in 4 months', icon: 'fa-solid fa-chart-line' },
      { val: '348',  label: 'Quality Backlinks',      sub: 'up from 54',  icon: 'fa-solid fa-link'      },
    ],
    body: 'Garden Solution Landscapes came to Isuremedia with a strong local reputation the website was not converting into traffic. We rebuilt the technical foundation, recovered from a mid-campaign hosting migration, and built out local SEO, link building, and AEO in parallel, delivering 800% organic traffic growth, a top map pack position, and live Google AI Overview citations within four months.',
    link: '/case-studies/ecommerce-seo-organic-traffic',
    linkLabel: "Read Garden Solution Landscapes's Case Study",
  },
  {
    img: '/casestudy/broenlegalimmigration-card.webp',
    client: 'Brown Legal Immigration',
    intro: '100% of search traffic came from the map pack. The website was invisible.',
    quote: 'Isuremedia got us cited by name in the AI answers our clients are actually searching.',
    stats: [
      { val: '86%', label: 'Keywords on Page 1',   sub: '12 of 14 tracked',           icon: 'fa-solid fa-magnifying-glass-chart' },
      { val: '3',   label: 'AI Platforms Ranking', sub: 'Google, ChatGPT, Perplexity', icon: 'fa-solid fa-robot' },
    ],
    body: 'Brown Legal Immigration had strong local visibility through their Google Business Profile, but the website carried zero organic search presence. We built SEO and AEO in parallel, new practice-area content, technical fixes, and off-page authority, taking 86% of tracked keywords to page one and earning citations across Google AI Overview, ChatGPT, and Perplexity within three months.',
    link: '/case-studies/law-firm-local-seo-map-pack',
    linkLabel: "Read Brown Legal Immigration's Case Study",
  },
];

/* ── DATA ─────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    title: 'Technical SEO',
    icon: 'fa-solid fa-gear',
    desc: 'As a dedicated technical SEO agency, we eliminate crawl errors, optimize site speed, repair broken links, and configure clean schema markup so search bots index every valuable page without technical friction.',
    href: '/technical-seo',
  },
  {
    title: 'On-Page SEO',
    icon: 'fa-solid fa-file-lines',
    desc: 'We align your page copy, headers, title tags, meta descriptions, and internal linking structures with real buyer search intent, making it clear to search engines exactly what you sell and who to show it to.',
    href: '/on-page-seo-services',
  },
  {
    title: 'Local SEO',
    icon: 'fa-solid fa-location-dot',
    desc: 'Our targeted local SEO services optimize your Google Business Profile, build verified geo-citations, and publish location-specific landing pages so nearby buyers find your business first.',
    href: '/local-seo-services',
  },
  {
    title: 'E-Commerce SEO',
    icon: 'fa-solid fa-cart-shopping',
    desc: 'We structure online stores, optimize product descriptions, and refine category pages to rank for high-intent transactional searches, turning organic visitors directly into store checkouts.',
    href: '/on-page-seo-services',
  },
  {
    title: 'Link Building',
    icon: 'fa-solid fa-link',
    desc: <>Operating as an ethical link building agency, we earn high-authority editorial backlinks through <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>genuine outreach and digital PR</span>, forging long-term domain trust that protects your rank stability.</>,
    href: '/link-building-service',
  },
  {
    title: 'Keyword Research & Content Strategy',
    icon: 'fa-solid fa-pen-nib',
    desc: 'We pinpoint precisely what your ideal buyers query at every stage of their buying decision, building search-targeted content campaigns around commercial keywords that drive actual sales revenue.',
    href: '/on-page-seo-services',
  },
  {
    title: 'SEO Audits',
    icon: 'fa-solid fa-magnifying-glass-chart',
    desc: 'Our in-depth audit diagnoses your technical performance, on-page setup, backlink health, and competitor keyword gaps, providing a clear roadmap of what is holding you back and what to fix first.',
    href: '/technical-seo',
  },
  {
    title: 'AI SEO (AEO and GEO)',
    icon: 'fa-solid fa-robot',
    desc: 'As a cutting-edge AI SEO agency, our AEO optimisation service formats your digital assets so AI platforms like ChatGPT, Perplexity, and Google AI Overviews cite your brand as the expert recommendation.',
    href: '/ai-seo-services',
  },
  {
    title: 'White-Label SEO',
    icon: 'fa-solid fa-tag',
    desc: 'We deliver confidential, white-label execution for digital marketing agencies, executing elite technical, content and backlink strategies behind the scenes so your brand takes full credit for the results.',
    href: '/white-label-seo-services',
  },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Audit & Market Discovery',                             desc: 'We execute a deep technical audit evaluating site architecture, keyword positioning, and backlink authority. As a transparent search engine optimisation company, we establish a clear baseline before launching any work.' },
  { num: 2, period: 'Keyword Strategy & Funnel Mapping',                    desc: 'We map high-intent commercial search queries to match buyer intent. Every keyword target selected by our team is designed to attract visitors who are actively preparing to make a buying decision.' },
  { num: 3, period: 'Simultaneous Technical, Content & Link Building',      desc: 'Technical repairs go live, conversion copy is published, and backlink outreach launches simultaneously. Our AEO optimisation service runs concurrently so you capture both traditional Google results and AI search tools.' },
  { num: 4, period: 'Monthly Reporting & Strategy Refinement',              desc: <>Every month you receive a straightforward performance report detailing organic traffic, keyword positions, leads generated and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>completed tasks focusing strictly on business growth</span>.</> },
  { num: 5, period: 'Aggressive Campaign Scaling',                          desc: 'Once core terms hit Page 1, our AI SEO agency team expands your reach targeting secondary keyword clusters, publishing fresh content assets, and deepening authority to keep your growth compounding.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-sliders',       title: 'Flexible Plans Aligned to Your Budget',  desc: "High-performing search optimization shouldn't require enterprise-only budgets. We tailor campaigns directly to your growth goals, delivering the exact technical, content, and link assets needed to win without fluff." },
  { dark: false, icon: 'fa-solid fa-robot',          title: 'AI Search Optimization Built In',        desc: <>Millions of users now consult ChatGPT, Perplexity, and Google AI Overviews for purchase decisions. As a forward-thinking AI SEO agency, we structure your brand assets so <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>AI models reference your business as an authority</span>.</> },
  { dark: false, icon: 'fa-solid fa-circle-check',  title: 'Zero Long-Term Contract Lock-Ins',        desc: 'We earn your business month after month through tangible ranking gains. There are no exit fees, zero 12-month lock-in traps, and no awkward exit terms if you ever decide to pause.' },
  { dark: false, icon: 'fa-solid fa-shield-halved', title: 'Strict White-Hat Execution Only',         desc: "Shortcuts and cheap link networks result in severe Google penalties. Every technical adjustment and backlink created by our technical SEO agency follows search engine guidelines to keep your domain authority safe." },
  { dark: false, icon: 'fa-solid fa-eye',            title: 'Complete Visibility & Asset Ownership',   desc: 'You retain 100% control of your Google Analytics, Search Console and tracking system. Every month, we deliver transparent reports detailing your traffic, keywords and leads.' },
  { dark: false, icon: 'fa-solid fa-headset',        title: 'One Dedicated Account Specialist',        desc: 'You work with a dedicated specialist who knows your market inside and out. Your account lead tracks your campaign, runs your strategy, and provides clear updates without delays.' },
];

const INDUSTRIES = [
  'HVAC & Home Services','E-Commerce','SaaS & Tech','Real Estate',
  'Marketing Agencies','Dental & Medical','Legal Services','Finance & Fintech',
  'Education','Restaurants','Recruitment','Travel',
];


const FAQS = [
  { q: 'How long does SEO take to produce measurable leads and traffic?', a: <>Most websites begin seeing positive keyword movement within <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>3 to 6 months</span>, with substantial traffic gains and inbound sales leads materializing between months 6 and 9. Timelines vary based on site age, competitive difficulty, and technical fixes completed by your technical SEO agency.</> },
  { q: 'How is Isuremedia different from traditional SEO agencies?', a: 'Traditional agencies limit their focus to standard Google rankings. We operate as a full-funnel search company, combining technical site repairs, link building, and an advanced AEO optimisation service so your site ranks on Page 1 of Google while getting cited inside ChatGPT, Perplexity and Google AI Overviews.' },
  { q: 'Do you offer white-label SEO services for marketing agencies?', a: 'Yes. We act as an unbranded backend partner for marketing agencies delivering technical fixes, on-page optimization, content creation and backlink outreach under strict NDA agreements so your agency gets full credit.' },
  { q: 'What does your initial SEO site audit include?', a: 'Our comprehensive audit inspects underlying technical code, site speed bottlenecks, crawl errors, schema markup, on-page content relevance, backlink authority, and competitor search gaps to highlight what needs immediate fixing.' },
  { q: 'How much do professional SEO services cost?', a: 'Pricing is tailored to your market competition, target geographic footprint, and overall execution scope. We provide transparent, itemized campaign options immediately following your initial discovery audit.' },
  { q: 'Do you provide local SEO services for regional service businesses?', a: 'Yes. Our dedicated local SEO services optimize your Google Business Profile, correct local citations, create location landing pages, and implement review acquisition strategies to place your business at the top of Google Map Packs.' },
  { q: 'Can organic SEO work alongside paid search ad campaigns?', a: 'Absolutely. Combining paid ads with organic search dominates Google Search Engine Results Pages (SERPs). Paid ads bring instant visibility, while your organic search strategy builds a compounding digital asset that drops overall customer acquisition costs.' },
  { q: 'What steps do you take if search engine algorithms update?', a: 'Because our link building agency and content teams adhere strictly to white-hat search guidelines, our sites stay protected against core algorithm penalties. If search shifts occur, we analyze ranking telemetry instantly and refine your pages to maintain top positions.' },
  { q: 'What specific elements are covered within your SEO services?', a: 'Our full-service campaigns cover technical code repair, keyword mapping, on-page copywriting, white-hat link acquisition, Google Business Profile management, AI answer optimization, and monthly performance tracking.' },
  { q: 'What is AEO (Answer Engine Optimization) and why is it essential?', a: 'Answer Engine Optimization (AEO) formats website data so AI search engines like ChatGPT, Perplexity and Google AI Overviews can digest, trust and quote your website in direct answer summaries. Implementing AEO ensures your brand captures buyers as search habits migrate toward AI models.' },
];

/* ── PILL ─────────────────────────────────────────────────────────── */
function Pill({
  text,
  amber
}) {
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:8, background: amber ? 'rgba(255,176,0,.10)' : 'var(--ism-blue-50)', border:`1px solid ${amber ? 'rgba(255,176,0,.30)' : 'var(--ism-blue-100)'}`, borderRadius:100, padding:'6px 18px', marginBottom:20 }}>
      <span style={{ width:7, height:7, borderRadius:'50%', background: amber ? 'var(--ism-amber)' : 'var(--color-primary)', display:'inline-block' }} />
      <span style={{ fontFamily:J, fontSize:12, fontWeight:700, color: amber ? 'var(--ism-amber)' : 'var(--color-primary)', letterSpacing:'.09em', textTransform:"uppercase" }}>{text}</span>
    </div>
  );
}

/* ── FAQ 2-COL ────────────────────────────────────────────────────── */
function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section className="seo-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="seo-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          {/* Left */}
          <div className="seo-faq-sticky" style={{ position:'sticky', top:100 }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions About <span style={{ color:'var(--ism-amber)' }}>SEO</span>
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
export default function SEOPage() {
  const [hoveredStep, setHoveredStep] = useState(null);
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <section className="seo-hero" style={{ background:'linear-gradient(160deg,#EDF2FF 0%,#F7F8FA 48%,#FFFBEB 100%)', padding:'96px 0 64px', position:'relative', overflow:'hidden' }}>
          {/* Blue glow top-right */}
          <div style={{ position:'absolute', top:-80, right:-60, width:460, height:460, background:'rgba(30,77,195,0.18)', borderRadius:'58% 42% 50% 50% / 46% 58% 42% 54%', filter:'blur(50px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:-60, left:-50, width:360, height:360, background:'rgba(255,176,0,0.13)', borderRadius:'46% 54% 62% 38% / 54% 46% 54% 46%', filter:'blur(44px)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', top:'25%', left:'38%', width:260, height:260, background:'rgba(30,77,195,0.08)', borderRadius:'50% 50% 38% 62% / 62% 38% 62% 38%', filter:'blur(38px)', pointerEvents:'none' }} />
          {/* Decorative dot grid top-left */}
          <div style={{ position:'absolute', top:32, left:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(30,77,195,.18) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />
          {/* Decorative dot grid bottom-right */}
          <div style={{ position:'absolute', bottom:32, right:32, width:160, height:160, backgroundImage:'radial-gradient(circle,rgba(255,176,0,.25) 1px,transparent 1px)', backgroundSize:'20px 20px', pointerEvents:'none', opacity:.5 }} />

          <div className="ism-container" style={{ textAlign:'center', position:'relative' }}>

            <h1 style={{ fontFamily:J, fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-2px', lineHeight:1.06, margin:'0 auto 24px', maxWidth:940 }}>
              SEO Services That Get You Found on Google and in AI Search.<br />
              <span style={{ color:'var(--ism-amber)' }}>Turn Searches Into Customers.</span>
            </h1>

            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:600, margin:'0 auto 20px' }}>
              Our SEO and AIO strategies help your business appear where customers search, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>build visibility, and drive more qualified leads</span>.
            </p>

            <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:680, margin:'0 auto 36px' }}>
              Getting top rankings is meaningless if your site traffic doesn&apos;t convert into cash flow. As a specialized search engine optimisation company, we build complete search strategies engineered to capture market share and drive bottom-line growth. Whether you need an AI SEO agency to capture modern answer engines or an elite link building agency to forge unshakeable domain authority, we deliver measurable ROI along with vanity metrics.
            </p>

            {/* CTAs */}
            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
              <a href="/appointment"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Claim Free Audit Now
              </a>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget).style.background='var(--color-primary)'; (e.currentTarget).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget).style.background='transparent'; (e.currentTarget).style.color='var(--color-primary)'; }}
              >
                Start Growing Organically
              </a>
            </div>

          </div>
        </section>

        {/* ══ 1b. REVIEWS BAR ══════════════════════════════════════════════ */}
        <ReviewsStrip />

        {/* ══ 2. STRATEGY SECTION ══════════════════════════════════════════ */}
        <section className="seo-strategy-section" style={{ background:'#fff', padding:'88px 0' }}>
          <div className="ism-container">

            {/* Heading */}
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,40px)', fontWeight:800, color:'var(--color-navy)', letterSpacing:'-0.4px', lineHeight:1.2, maxWidth:820, margin:'0 auto 14px' }}>
                Why SEO Is the <span style={{ color:'var(--ism-amber)' }}>Highest-Margin Investment</span> You Can Make
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:580, margin:'0 auto', lineHeight:1.75 }}>
                Organic search captures more buying intent than any other digital channel. Here is why it belongs at the core of your growth.
              </p>
            </div>

            {/* Two-col */}
            <div className="seo-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              {/* Left, 4 numbered points */}
              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'Most buyers begin with a search query', text:<>53% of all web traffic originates from organic search, dwarfing paid ads, social media, and cold email combined. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>That unmatched buyer intent is why we start every growth campaign here</span>.</> },
                  { num:'02', title:'Page 2 is almost invisible', text:<>The top result on Google claims <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>nearly 40% of all clicks</span>, while Page 2 receives less than 1%. As your dedicated technical SEO agency, we relentlessly optimize your site to secure high-converting Page 1 placements.</> },
                  { num:'03', title:'Organic traffic converts at higher rates', text:<>Organic search leads convert at nearly <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>9x the rate of cold outbound marketing</span>. When visitors land on your site via search, they are already looking for the exact solution you provide.</> },
                  { num:'04', title:'AI search is rewriting the rules', text:<>Getting cited in ChatGPT, Perplexity, and Google AI Overviews is now as critical as traditional web rankings. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Our AEO optimisation service positions your brand as the primary authority</span> across both frontiers.</> },
                  { num:'05', title:'Rankings compound while ad costs rise', text:<>Paid ad channels demand more cash for every click. Partnering with a proven link building agency builds long-term domain authority, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>generating continuous traffic that compounds over time</span>.</> },
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

              {/* Right, Image mosaic */}
              <div className="seo-strategy-mosaic" style={{ position:'relative', height:600, borderRadius:20, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img loading="lazy" src="/main-services/Why SEO Should Be the Foundation of Your Growth.webp" alt="Why SEO Should Be the Foundation of Your Growth" style={{ width:'100%', height:'100%', objectFit:'contain', display:'block' }} />
              </div>

            </div>

            {/* CTA */}
            <div style={{ textAlign:'center' }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 36px', borderRadius:9, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 24px rgba(255,176,0,.38)', transition:'all .18s', whiteSpace:'nowrap' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 30px rgba(255,176,0,.52)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 24px rgba(255,176,0,.38)'; }}
              >
                Claim Your Free SEO Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
              </a>
            </div>

          </div>
          <style>{`
            @media (max-width: 768px) {
              .seo-strategy-section { padding: 56px 0 !important; }
              .seo-strategy-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
              .seo-strategy-mosaic { display: none !important; }
            }
            @media (max-width: 480px) {
              .seo-strategy-section { padding: 44px 0 !important; }
            }
          `}</style>
        </section>

        {/* ══ 3. CLIENT RESULTS ════════════════════════════════════════════ */}
        <div id="seo-results">
          <ClientResults cases={RELATED_CASES} heading="Related SEO Results" />
        </div>

        {/* ══ CTA BANNER ═══════════════════════════════════════════════════ */}
        <section className="seo-cta-banner cta-bleed" style={{ background:'#fff', padding:'118px 28px 64px', overflow:'visible' }}>
          <div className="ism-container">

            {/* Card, image bleeds above the card on desktop only; left/right/bottom stay clipped to the box via clip-path (overflow-x/y can't do "one side only" without silently clipping both) */}
            <div style={{ background:'#F5F5E6', borderRadius:24, display:'grid', gridTemplateColumns:'340px 1fr', minHeight:280, clipPath:'inset(-180px 0px 0px 0px round 24px)' }} className="seo-cta-banner-grid">

              {/* Left col, image flush to the bottom, head bleeding above the card */}
              <div style={{ position:'relative', overflow:'visible', minHeight:280 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/main-services/seo-women.webp"
                  alt="SEO Expert"
                  style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', height:'128%', width:'auto', maxWidth:'none', objectFit:'contain', objectPosition:'bottom center', display:'block' }}
                />
              </div>

              {/* Right, text */}
              <div style={{ padding:'44px 52px 44px 36px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>
                  High-Intent Buyers Are Searching Right Now. <span style={{ color:'var(--ism-amber)' }}>Will They Find You?</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>
                  Request your free SEO audit today to reveal hidden ranking blockage and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>capture lost market share</span>.
                </p>
                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get My Free SEO Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                </a>
              </div>

            </div>

          </div>
          <style>{`
            @media (max-width: 900px) {
              .seo-cta-banner { padding: 64px 28px !important; }
              .seo-cta-banner-grid { grid-template-columns: 1fr !important; }
              .seo-cta-banner-grid > div:first-child { display: none !important; }
            }
            @media (max-width: 768px) {
              .seo-cta-banner { padding: 36px 20px !important; }
            }
          `}</style>
        </section>

        {/* ══ 3b. IMAGE + TEXT SECTION ════════════════════════════════════ */}
        <section className="seo-imgtext-section" style={{ background:'var(--color-bg-soft)', padding:'88px 0' }}>
          <div className="ism-container">
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,38px)', fontWeight:800, color:'var(--color-navy)', textAlign:'center', letterSpacing:'-0.4px', lineHeight:1.2, margin:'0 auto 52px', maxWidth:820 }}>
              Drive Measurable Business Growth with <span style={{ color:'var(--ism-amber)' }}>Proven SEO</span>
            </h2>
            <div className="seo-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>

              {/* Left, image */}
              <div style={{ borderRadius:14, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/main-services/Proven SEO Strategies That Drive Real Business Growth.webp"
                  alt="Proven SEO Strategies That Drive Real Business Growth"
                  style={{ width:'100%', display:'block', objectFit:'contain' }}
                />
              </div>

              {/* Right, text */}
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Search engine optimization offers a unique compounding advantage that traditional paid channels simply cannot match. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>High-value content engineered today keeps acquiring top rankings next year</span>, while backlink authority acquired today permanently elevates your entire domain. Every optimization stacks up to build a defensive digital moat around your brand.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Businesses that invest in professional SEO services early become <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>almost impossible for competitors to dethrone later</span>. Few digital investments yield a permanent competitive edge that never expires. Our team executes the entire strategy, eliminating technical flaws, securing AI search citations, and making sure every visitor landing on your pages is primed to convert.
                </p>
                <div style={{ marginTop:8 }}>
                  <a href="/contact"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                  >
                    Get My Free SEO Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                  </a>
                </div>
              </div>

            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .seo-imgtext-section { padding: 56px 0 !important; }
              .seo-imgtext-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
            @media (max-width: 480px) {
              .seo-imgtext-section { padding: 44px 0 !important; }
            }
          `}</style>
        </section>

        {/* ══ 11. TESTIMONIALS ════════════════════════════════════════════ */}
        <Testimonials
          heading="What Business Leaders Say About Working With Us"
          subheading={<>Hear from businesses and agencies who trust us to <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>scale their organic growth</span>.</>}
        />

        {/* ══ 4. SERVICES GRID ════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 12px' }}>
                Our Complete <span style={{ color:'var(--ism-amber)' }}>SEO Services</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Show up higher on Google and get more of the right people to your website.
              </p>
            </div>
            <div className="seo-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #E8EAF0', borderRadius:16, overflow:'hidden' }}>
              {SERVICES.map((s,i)=>(
                <div key={i}
                  className={`seo-svc-cell seo-svc-cell-${i}`}
                  style={{
                    padding:'36px 32px',
                    borderRight: (i+1)%3 === 0 ? 'none' : '1px solid #E8EAF0',
                    borderBottom: i < 6 ? '1px solid #E8EAF0' : 'none',
                    background:'#fff',
                    transition:'background .18s',
                    cursor:'default',
                  }}
                  onMouseEnter={e=>{ (e.currentTarget).style.background='#F7F8FD'; }}
                  onMouseLeave={e=>{ (e.currentTarget).style.background='#fff'; }}
                >
                  {/* Icon + Title */}
                  <div style={{ display:'flex', alignItems:'flex-start', gap:14, marginBottom:18 }}>
                    <div style={{ width:46, height:46, borderRadius:10, background:'var(--ism-blue-50,rgba(30,77,195,.08))', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <i className={s.icon} style={{ fontSize:20, color:'var(--color-primary)' }} />
                    </div>
                    <h3 style={{ fontFamily:J, fontSize:16, fontWeight:800, color:'var(--color-navy)', margin:0, lineHeight:1.3, paddingTop:6 }}>{s.title}</h3>
                  </div>
                  {/* Description */}
                  <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.80, margin:'0 0 22px' }}>{s.desc}</p>
                  {/* Link */}
                  <a href={s.href}
                    style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', letterSpacing:'.03em', transition:'gap .18s' }}
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
            @media (max-width: 900px) {
              .seo-svc-grid { grid-template-columns: repeat(2,1fr) !important; }
              .seo-svc-cell-1, .seo-svc-cell-3, .seo-svc-cell-5, .seo-svc-cell-7 { border-right: none !important; }
              .seo-svc-cell-0, .seo-svc-cell-1, .seo-svc-cell-2, .seo-svc-cell-3,
              .seo-svc-cell-4, .seo-svc-cell-5, .seo-svc-cell-6, .seo-svc-cell-7 { border-bottom: 1px solid #E8EAF0 !important; }
              .seo-svc-cell-8 { border-bottom: none !important; border-right: none !important; }
            }
            @media (max-width: 560px) {
              .seo-svc-grid { grid-template-columns: 1fr !important; }
              .seo-svc-cell { border-right: none !important; border-bottom: 1px solid #E8EAF0 !important; }
              .seo-svc-cell-8 { border-bottom: none !important; }
            }
          `}</style>
        </section>

        {/* ══ 5. AEO, DARK ═══════════════════════════════════════════════ */}
        <section className="seo-section" style={{ background:'var(--color-navy)', padding:'90px 0', color:'#fff' }}>
          <div className="ism-container">
            <div className="seo-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              {/* Left */}
              <div>
                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px', lineHeight:1.12 }}>
                  Why SEO Services Is a{' '}
                  <span style={{ color:'var(--ism-amber)' }}>Great Investment</span>
                </h2>

                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>
                  Build an Organic Search Foundation That Generates Leads 24/7
                </p>

                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>Most marketing stops when you stop paying.</strong> A ranked page keeps sending traffic every day with <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>no ongoing cost per click</span>, and organic leads convert 9× better than outbound marketing because we build for Google search engine rankings and AI answer platforms alike. As a specialized search engine optimisation company, we optimize your site architecture so every targeted keyword earns recurring, high-converting organic visitors without reliance on ad budgets.
                  </p>
                </div>

                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.30)'; }}
                >
                  Lock In Long-Term Organic Traffic →
                </a>
              </div>

              {/* Right, image */}
              <div style={{ borderRadius:16, overflow:'hidden' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/main-services/Why SEO Is a Great Investment.webp"
                  alt="Why SEO Is a Great Investment"
                  style={{ width:'100%', display:'block', objectFit:'contain' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. TIMELINE ══════════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                Isuremedia&apos;s Proven 5-Step SEO <span style={{ color:'var(--ism-amber)' }}>Roadmap for Organic Growth</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                How our SEO experts plan, execute and scale multi-channel campaigns to deliver maximum return on investment.
              </p>
            </div>
            <div className="seo-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:0, position:'relative' }}>
              <div style={{ position:'absolute', top:28, left:'10%', width:'80%', height:2, background:'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex:0 }} />
              {TIMELINE_STEPS.map((step,i)=>(
                <div key={i} style={{ textAlign:'center', padding:'0 16px', position:'relative', zIndex:1 }}>
                  <div
                    onMouseEnter={()=>setHoveredStep(i)}
                    onMouseLeave={()=>setHoveredStep(null)}
                    style={{ width:56, height:56, borderRadius:'50%', background: hoveredStep===i ? (i===0?'var(--color-primary)':'var(--ism-amber)') : (i===0 ? 'var(--ism-amber)' : 'var(--color-primary)'), display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', boxShadow: hoveredStep===i ? (i===0?'0 8px 26px rgba(30,77,195,.45)':'0 8px 26px rgba(255,176,0,.55)') : `0 4px 18px ${i===0 ? 'rgba(255,176,0,.40)' : 'rgba(30,77,195,.30)'}`, border:'4px solid #fff', transition:'background .22s ease, box-shadow .22s ease, transform .22s ease', transform: hoveredStep===i ? 'scale(1.12)' : 'scale(1)', cursor:'default' }}
                  >
                    <span style={{ fontFamily:J, fontSize:18, fontWeight:900, color:'#fff' }}>{step.num}</span>
                  </div>
                  <div style={{ fontFamily:J, fontSize:12, fontWeight:800, color:'var(--color-navy)', marginBottom:10, lineHeight:1.3 }}>{step.period}</div>
                  <p style={{ fontFamily:I, fontSize:13, color:'var(--color-text-muted)', lineHeight:1.65, margin:0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            {/* CTA */}
            <div style={{ textAlign:'center', marginTop:56 }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Claim Your Free SEO Audit
              </a>
            </div>
          </div>
        </section>

        {/* ══ 8. PRICING PLANS ════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                Choose the Right SEO Scope{' '}
                <span style={{ color:'var(--ism-amber)' }}>to Hit Your Revenue Targets.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every plan includes a <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>dedicated SEO/campaign manager</span>, transparent monthly reporting and no long-term contracts.
              </p>
            </div>
            <div className="seo-plan-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, alignItems:'start' }}>
              {/* LOCAL SEO */}
              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget; el.style.transform=''; el.style.boxShadow=''; }}
              >
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>LOCAL SEO</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Local SEO</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Ideal for service businesses, HVAC, dental, legal, restaurants.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['GBP optimisation & management','Local citation building','On-page geo-targeting','Review acquisition strategy','Monthly ranking report','Competitor gap analysis'].map((f,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.4 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11, marginTop:3, flexShrink:0 }} />{f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* GROWTH SEO, Featured */}
              <div style={{ background:'#fff', borderRadius:16, border:'2px solid var(--color-primary)', padding:'36px 32px', transform:'scale(1.04)', boxShadow:'0 16px 56px rgba(30,77,195,.18)', position:'relative', transition:'all .22s' }}>
                <div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', background:'var(--ism-amber)', borderRadius:100, padding:'5px 18px', whiteSpace:'nowrap' }}>
                  <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-navy)', letterSpacing:'.08em', textTransform:'uppercase' }}>Most Popular</span>
                </div>
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>GROWTH SEO</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Growth SEO</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Full SEO campaign, technical + content + links + monthly reporting.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['Full technical SEO audit & fixes','On-page & content optimisation','Link building & digital PR','AI & AEO optimisation','Advanced rank tracking','Monthly strategy call + report'].map((f,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.4 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11, marginTop:3, flexShrink:0 }} />{f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ENTERPRISE */}
              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget; el.style.transform=''; el.style.boxShadow=''; }}
              >
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>ENTERPRISE</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Enterprise / White-Label</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>For agencies and enterprise brands needing custom, scalable SEO.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['Custom multi-channel SEO strategy','Dedicated campaign manager','NDA & white-label reporting','Enterprise rank tracking suite','Quarterly strategy workshops','Priority support & SLA'].map((f,i)=>(
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

        {/* ══ 9. WHY DIFFERENT ════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px', maxWidth:700, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>
                Why Go with <span style={{ color:'var(--ism-amber)' }}>Our SEO Services</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Built for modern search engines, total accountability and lasting organic success.
              </p>
            </div>
            <div className="seo-diff-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {DIFFERENTIATORS.map((d,i)=>(
                <div key={i} style={{ background: d.dark ? 'var(--color-navy)' : 'var(--color-bg-soft)', borderRadius:16, border:`1px solid ${d.dark ? 'transparent' : 'var(--color-border)'}`, padding:'36px 30px', transition:'all .22s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget; el.style.transform=''; el.style.boxShadow=''; }}
                >
                  <div style={{ width:48, height:48, borderRadius:12, background: d.dark ? 'rgba(255,176,0,.15)' : 'rgba(30,77,195,.10)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20 }}>
                    <i className={d.icon} style={{ fontSize:20, color: d.dark ? 'var(--ism-amber)' : 'var(--color-primary)' }} />
                  </div>
                  <h3 style={{ fontFamily:J, fontSize:18, fontWeight:800, color: d.dark ? '#fff' : 'var(--color-navy)', margin:'0 0 10px' }}>{d.title}</h3>
                  <p style={{ fontFamily:I, fontSize:14, color: d.dark ? 'rgba(255,255,255,.7)' : 'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 13. FAQ ══════════════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ 14. READY FOR RESULTS CTA ═══════════════════════════════════ */}
        <section style={{ background:'#fff', padding:'60px 0' }}>
          <div className="ism-container">
          <div style={{ background:'var(--color-primary)', borderRadius:24, padding:'60px 64px', display:'grid', gridTemplateColumns:'1fr 420px', gap:48, alignItems:'center', position:'relative', overflow:'hidden' }} className="seo-rfr-grid">

            {/* Glow */}
            <div style={{ position:'absolute', top:'-30%', right:'30%', width:500, height:500, background:'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents:'none' }} />

            {/* Left */}
            <div>
              {/* Label */}
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                <div style={{ width:28, height:3, background:'var(--ism-amber)', borderRadius:2 }} />
                <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.12em', textTransform:'uppercase' }}>Your Growth Starts Here</span>
              </div>

              <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.5vw,48px)', fontWeight:900, color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px', margin:'0 0 20px' }}>
                Ready to Rank Higher and Turn<br />Search Traffic Into <span style={{ color:'var(--ism-amber)' }}>Revenue?</span>
              </h2>

              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.80, margin:'0 0 36px', maxWidth:520 }}>
                Whether you are a local business owner, an expanding brand or a digital agency lead, the core question stays the same: are your best potential buyers <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>finding your website on Google and AI search platforms</span>? If not, talk to our team today. We will audit your existing search performance, pinpoint the biggest ranking opportunities and build your dominant organic search presence.
              </p>

              {/* Buttons */}
              <div className="seo-rfr-btns" style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.55)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get My Free SEO Audit
                </a>
                <a href="/appointment"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'#fff', background:'transparent', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', border:'2px solid rgba(255,255,255,.40)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.40)'; e.currentTarget.style.background='transparent'; }}
                >
                  Talk to Our Team
                </a>
              </div>
            </div>

            {/* Right, image only */}
            <div className="seo-rfr-img" style={{ display:'flex', alignItems:'flex-end', justifyContent:'center', height:320 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/result_footer/Seo (2).webp"
                alt="SEO Growth"
                style={{ height:'100%', width:'auto', objectFit:'contain', objectPosition:'bottom center', display:'block' }}
              />
            </div>

          </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .seo-rfr-grid { grid-template-columns: 1fr !important; padding: 40px 28px !important; }
              .seo-rfr-img { display: none !important; }
            }
            @media (max-width: 480px) {
              .seo-rfr-grid { padding: 32px 20px !important; }
            }
          `}</style>
        </section>

      </main>
      <Footer />

      <style>{`
        /* Proof cards */
        .seo-proof-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media (max-width: 900px)  { .seo-proof-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px)  { .seo-proof-grid { grid-template-columns: 1fr !important; } }

        /* Services grid */
        .seo-svc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 900px)  { .seo-svc-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px)  { .seo-svc-grid > * { grid-template-columns: 1fr !important; } }

        /* Plans grid */
        .seo-plan-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media (max-width: 900px)  { .seo-plan-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px)  { .seo-plan-grid > *:nth-child(2) { transform: none !important; } }

        /* Split 2-col */
        @media (max-width: 900px)  { .seo-split { grid-template-columns: 1fr !important; gap: 36px !important; } }

        /* Stats row */
        @media (max-width: 700px)  { .seo-stats-row { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 700px)  { .seo-stats-row > *:nth-child(2) { border-right: none !important; } }
        @media (max-width: 700px)  { .seo-stats-row > * { padding: 24px 16px !important; border-bottom: 1px solid rgba(255,255,255,.12); } }
        @media (max-width: 400px)  { .seo-stats-row { grid-template-columns: 1fr !important; } }

        /* Timeline */
        @media (max-width: 900px)  {
          .seo-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
          .seo-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
        }

        /* Diff grid */
        .seo-diff-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media (max-width: 900px)  { .seo-diff-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px)  { .seo-diff-grid { grid-template-columns: 1fr !important; } }

        /* Niche grid */
        @media (max-width: 900px)  { .seo-niche-grid { justify-content: center !important; } }

        /* Review grid */
        .seo-review-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        @media (max-width: 900px)  { .seo-review-grid { grid-template-columns: 1fr !important; } }

        /* Tools */
        .seo-tools-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }

        /* Dashboard mockup */
        @media (max-width: 620px) { .seo-dash-grid { grid-template-columns: 1fr !important; } }

        /* FAQ 2-col */
        .seo-faq-grid { display: grid; grid-template-columns: 380px 1fr; gap: 64px; }
        @media (max-width: 900px)  { .seo-faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }

        /* Animations */
        @keyframes seo-ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes seo-pulse  { 0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.25) } 50% { box-shadow: 0 0 0 6px rgba(34,197,94,.05) } }

        /* ── Mobile padding ───────────────────────────────────────────── */
        @media (max-width: 640px) {
          .seo-hero    { padding: 56px 0 44px !important; }
          .seo-section { padding-top: 60px !important; padding-bottom: 60px !important; }
        }

        /* Service card illustration: borderLeft → borderTop when stacked */
        @media (max-width: 900px) {
          .seo-svc-illus { border-left: none !important; border-top: 1.5px solid #E8EAF0 !important; min-height: 110px; }
        }

        /* Hero trust badge row, tighten on small screens */
        @media (max-width: 480px) {
          .seo-trust-badges { gap: 6px 10px !important; font-size: 12px !important; }
        }

        /* Bottom CTA <br> tag, hide forced break on mobile */
        @media (max-width: 640px) {
          .seo-cta-br { display: none; }
        }

        /* Reviews bar dividers hidden when wrapping */
        @media (max-width: 600px) {
          .seo-reviews-bar { padding: 24px 20px !important; }
          .seo-reviews-divider { display: none !important; }
        }

        /* Hero section padding on mobile */
        @media (max-width: 480px) {
          .seo-hero { padding: 48px 0 36px !important; }
        }

        /* Plan grid: unscale featured card on mobile */
        @media (max-width: 768px) {
          .seo-plan-grid > *:nth-child(2) { transform: none !important; }
        }

        /* CTA section inner padding */
        @media (max-width: 480px) {
          .seo-rfr-grid { padding: 32px 20px !important; }
          .seo-rfr-btns { flex-direction: column !important; align-items: stretch !important; }
          .seo-rfr-btns a { justify-content: center !important; width: 100% !important; box-sizing: border-box !important; }
        }

        /* FAQ sticky left: disable sticky on mobile */
        @media (max-width: 900px) {
          .seo-faq-sticky { position: static !important; }
        }
      `}</style>
    </>
  );
}
