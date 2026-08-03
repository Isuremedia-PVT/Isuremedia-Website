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
    title: 'Technical SEO',
    icon: 'fa-solid fa-gear',
    desc: 'Your website needs to be built in a way Google can read, crawl, and rank. We fix what holds your site back — slow load times, broken pages, crawl errors, and messy structure. Most businesses do not know these issues exist until they see the rankings they are missing.',
    href: '/services/seo/technical-seo',
  },
  {
    title: 'On-Page SEO',
    icon: 'fa-solid fa-file-lines',
    desc: 'Every page on your site needs to be set up for the right search. We work on your headings, copy, title tags, meta descriptions, and internal links so Google knows exactly what each page is about and who to show it to.',
    href: '/services/seo/on-page-seo',
  },
  {
    title: 'Local SEO',
    icon: 'fa-solid fa-location-dot',
    desc: 'If your customers are in a specific city or area, you need to show up when they search nearby. We set up your Google Business Profile, build local citations, and create location pages so your business appears when local buyers are looking.',
    href: '/services/seo/local-seo',
  },
  {
    title: 'E-Commerce SEO',
    icon: 'fa-solid fa-cart-shopping',
    desc: 'Product and category pages need to rank for searches where people are ready to buy. We optimise your store structure, product descriptions, and site architecture so visitors landing on your pages are already looking to purchase.',
    href: '/services/seo/on-page-seo',
  },
  {
    title: 'Link Building',
    icon: 'fa-solid fa-link',
    desc: 'Google ranks websites higher when trusted sites link to them. We build those links through real outreach and digital PR, not shortcuts that get sites penalised. Every link we earn adds to your authority and holds up long term.',
    href: '/services/seo/link-building',
  },
  {
    title: 'Keyword Research & Content Strategy',
    icon: 'fa-solid fa-pen-nib',
    desc: 'Ranking on the wrong searches brings the wrong people. We research what your customers type into Google at every stage of the buying process and build your content strategy around those searches — the right keywords, in the right content, on the right pages.',
    href: '/services/seo/on-page-seo',
  },
  {
    title: 'SEO Audits',
    icon: 'fa-solid fa-magnifying-glass-chart',
    desc: 'Before anything else, you need to know where you stand. Our audit covers your technical health, on-page setup, backlink profile, and keyword gaps. You get a clear report showing what is holding your rankings back and what to fix first.',
    href: '/services/seo/technical-seo',
  },
  {
    title: 'AI SEO (AEO and GEO)',
    icon: 'fa-solid fa-robot',
    desc: 'Google AI Overviews, ChatGPT, and Perplexity are now part of how people search. We structure your content so these tools cite your business in their answers. Most agencies still only optimise for traditional Google results. We cover both.',
    href: '/services/seo/aeo',
  },
  {
    title: 'White-Label SEO',
    icon: 'fa-solid fa-tag',
    desc: 'If you run a marketing agency and need SEO delivered under your brand, we handle everything behind the scenes. Your clients get the results, your brand gets the credit. No footprint, no subcontracting.',
    href: '/services/seo/on-page-seo',
  },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Site Audit & Business Discovery',                     desc: 'We run a full audit of your site covering technical health, current rankings, content gaps, and backlink profile. You get a clear picture of where things stand before any work starts.' },
  { num: 2, period: 'Keyword Research & Strategy',                          desc: 'We map out what your buyers are searching for at every stage, from first search to ready to buy. Every keyword we target is one real people search for and that brings people close to a decision.' },
  { num: 3, period: 'Technical, Content & Link Building — All at Once',     desc: 'Technical fixes go live, content goes up, and link building runs in parallel. Every campaign also includes AI Search and AEO optimisation from day one so you show up in Google, ChatGPT, and Perplexity.' },
  { num: 4, period: 'Monthly Reporting & Refinement',                       desc: 'Every month you get a plain report covering traffic, rankings, leads, and everything we worked on. No vanity metrics — just what moved, what did not, and what we are doing next.' },
  { num: 5, period: 'Scale What Is Working',                                desc: 'Once your core keywords are ranking and traffic is growing, we expand — new keyword clusters, new content, deeper link authority, and broader AI search coverage. The work compounds month by month.' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-sliders',       title: 'Flexible Plans for Every Budget',        desc: 'SEO should not be something only large companies can afford. We build plans around what your business needs right now, not a fixed package with services you do not need — a campaign built for your goals and your budget.' },
  { dark: false, icon: 'fa-solid fa-robot',          title: 'We Get You Found in AI Search',          desc: 'People are asking ChatGPT, Perplexity, and Google AI Overviews for answers, and those tools recommend specific businesses. We structure your content and build your authority so AI systems read it, trust it, and cite it.' },
  { dark: false, icon: 'fa-solid fa-circle-check',  title: 'You Are Free to Leave Any Time',         desc: 'We do not hold clients with long contracts because we do not need to. Our work speaks for itself every month. There are no penalties, no minimum terms, and no awkward exit process.' },
  { dark: false, icon: 'fa-solid fa-shield-halved', title: 'We Only Use White Hat SEO',              desc: 'Some agencies use shortcuts that end in Google penalties taking months or years to recover from. Every link we build and every optimisation we make follows Google\'s guidelines so your rankings are safe and built to last.' },
  { dark: false, icon: 'fa-solid fa-eye',            title: 'Full Visibility Into Everything We Do',  desc: 'Every month you get a clear report covering traffic, keyword rankings, leads, and a full breakdown of completed work. You keep direct access to Google Analytics and Search Console at all times — your data belongs to you.' },
  { dark: false, icon: 'fa-solid fa-headset',        title: 'Regular Updates, One Dedicated Contact', desc: 'You get one person assigned to your account from day one. That person knows your business, tracks your campaign, and is your direct line for any question or update — never passed around or left waiting.' },
];

const INDUSTRIES = [
  'HVAC & Home Services','E-Commerce','SaaS & Tech','Real Estate',
  'Marketing Agencies','Dental & Medical','Legal Services','Finance & Fintech',
  'Education','Restaurants','Recruitment','Travel',
];


const FAQS = [
  { q: 'How long does SEO take to show results?', a: 'Most businesses see ranking movement within three to six months, with meaningful traffic and leads following at six to nine. The timeline depends on how competitive your industry is and the current state of your site. We tell you what to expect honestly at the start.' },
  { q: 'How is Isuremedia different from other SEO agencies?', a: 'Three things. We never outsource — your campaign is handled entirely in-house. We run technical SEO, content, and link building together because that is how results compound. And we include AI Search optimisation on every campaign because search has changed.' },
  { q: 'Do you offer white-label SEO for agencies?', a: 'Yes. If you run a marketing agency and need SEO delivered under your brand, we handle everything behind the scenes. Your clients see your name on the work — we have no footprint in the relationship.' },
  { q: 'What does your SEO audit cover?', a: 'Technical health (speed, crawlability, Core Web Vitals, indexation), on-page (keyword mapping, title tags, headings, internal linking), and off-page (backlink profile, toxic links, competitor gaps). You get a prioritised action plan, not just a list of issues.' },
  { q: 'How much does SEO cost?', a: 'It depends on your site size, how competitive your industry is, and what the campaign needs to do. We do not have fixed packages because copy-paste packages produce copy-paste results. We review your site for free and give you an honest picture of cost and outcome.' },
  { q: 'Do you do local SEO for small businesses?', a: 'Yes. Local SEO is one of our core services — Google Business Profile, local citations, location pages, and map pack rankings. It works particularly well for service businesses and any business that serves a specific area.' },
  { q: 'Can SEO and paid ads work together?', a: 'Yes, and they work better together than either does alone. Paid ads get you in front of buyers immediately; SEO builds the long-term foundation that keeps traffic coming without ongoing ad spend. The fastest-growing businesses usually do both.' },
  { q: 'What happens if my rankings drop?', a: 'Rankings fluctuate — Google updates its algorithm regularly and competitor activity affects rankings too. When movement happens, we investigate immediately, identify the cause, and adjust the strategy. You are told what happened and what we are doing about it.' },
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
              Rank on Google.<br />
              Show Up in AI Search.<br />
              <span style={{ color:'var(--ism-amber)' }}>Grow Your Business.</span>
            </h1>

            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:600, margin:'0 auto 36px' }}>
              We get your business to Page&nbsp;1 on Google and into AI Search results — so the right people find you, contact you, and buy.
            </p>

            {/* CTAs */}
            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Start Growing Organically
              </a>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
              >
                Claim Free Audit Now
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
                Why SEO Should Be the <span style={{ color:'var(--ism-amber)' }}>Foundation</span> of Your Growth
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', maxWidth:580, margin:'0 auto', lineHeight:1.75 }}>
                Organic search is the largest single source of traffic on the internet. Here is what that means for your business.
              </p>
            </div>

            {/* Two-col */}
            <div className="seo-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center', marginBottom:52 }}>

              {/* Left — 4 numbered points */}
              <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
                {[
                  { num:'01', title:'Most of your customers start with a search', text:'53% of all website traffic comes from organic search — more than paid ads, social, and email combined. That is why we start every campaign by understanding what your customers are typing.' },
                  { num:'02', title:'Being on Page 2 is basically being invisible', text:'The #1 result on Google gets 39.8% of all clicks. Position 2 gets 18.7%. Page 2 gets less than 1%. Getting you to page one is the minimum we work from, not the goal.' },
                  { num:'03', title:'Organic leads convert better', text:'Organic leads convert at nearly 9 times the rate of outbound. The people finding you through search already want what you sell — we make sure those are the searches your site shows up for.' },
                  { num:'04', title:'AI Search Is the Biggest Shift Since Google Itself', text:'Getting cited inside ChatGPT, Perplexity, and Google AI Overviews now matters as much as ranking on page one. We make sure our clients show up in both places.' },
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

              {/* Right — Image mosaic */}
              <div className="seo-strategy-mosaic" style={{ position:'relative', height:460 }}>

                {/* Image 1 — large, right */}
                <div style={{ position:'absolute', top:30, right:0, width:260, height:320, borderRadius:20, overflow:'hidden', boxShadow:'0 20px 56px rgba(0,0,0,.14)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="SEO" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                </div>

                {/* Image 2 — tall, left */}
                <div style={{ position:'absolute', top:60, left:0, width:192, height:300, borderRadius:20, overflow:'hidden', boxShadow:'0 16px 44px rgba(0,0,0,.12)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="SEO" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                </div>

                {/* Image 3 — small top-left */}
                <div style={{ position:'absolute', top:0, left:52, width:120, height:112, borderRadius:14, overflow:'hidden', boxShadow:'0 8px 28px rgba(0,0,0,.12)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="SEO" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                </div>

                {/* Image 4 — small bottom-center */}
                <div style={{ position:'absolute', bottom:0, left:140, width:172, height:125, borderRadius:14, overflow:'hidden', boxShadow:'0 8px 28px rgba(0,0,0,.12)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="SEO" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                </div>

                {/* Image 5 — small bottom-right */}
                <div style={{ position:'absolute', bottom:18, right:0, width:118, height:108, borderRadius:14, overflow:'hidden', boxShadow:'0 8px 24px rgba(0,0,0,.12)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.42connect.com/wp-content/uploads/2025/09/meyers-roman.jpg" alt="SEO" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                </div>

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
          <ClientResults />
        </div>

        {/* ══ CTA BANNER ═══════════════════════════════════════════════════ */}
        <section className="seo-cta-banner cta-bleed" style={{ background:'#fff', padding:'118px 28px 64px', overflow:'visible' }}>
          <div className="ism-container">

            {/* Card — image bleeds above the card on desktop only; left/right/bottom stay clipped to the box via clip-path (overflow-x/y can't do "one side only" without silently clipping both) */}
            <div style={{ background:'#F5F5E6', borderRadius:24, display:'grid', gridTemplateColumns:'340px 1fr', minHeight:280, clipPath:'inset(-180px 0px 0px 0px round 24px)' }} className="seo-cta-banner-grid">

              {/* Left col — image flush to the bottom, head bleeding above the card */}
              <div style={{ position:'relative', overflow:'visible', minHeight:280 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/unblockseo-women.svg"
                  alt="SEO Expert"
                  style={{ position:'absolute', bottom:0, left:'50%', transform:'translateX(-50%)', height:'128%', width:'auto', maxWidth:'none', objectFit:'contain', objectPosition:'bottom center', display:'block' }}
                />
              </div>

              {/* Right — text */}
              <div style={{ padding:'44px 52px 44px 36px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 16px' }}>
                  Your next customer is searching right now. Are you <span style={{ color:'var(--ism-amber)' }}>showing up?</span>
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 32px', maxWidth:460 }}>
                  Get a free SEO audit and find out why your site is not getting the traffic it should.
                </p>
                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Run My Free SEO Audit <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
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
              Proven SEO Strategies That Drive <span style={{ color:'var(--ism-amber)' }}>Real Business Growth</span>
            </h2>
            <div className="seo-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>

              {/* Left — image */}
              <div style={{ borderRadius:14, overflow:'hidden', boxShadow:'0 16px 56px rgba(0,0,0,.10)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Seo (2).webp"
                  alt="SEO Growth Strategy"
                  style={{ width:'100%', display:'block', objectFit:'cover' }}
                />
              </div>

              {/* Right — text */}
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>
                  SEO builds on itself in a way most channels do not. Content you publish today keeps earning rankings next year, and links you build today add to your authority permanently. Every piece of work compounds.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  The businesses that start SEO earliest are hardest to displace later — the longer you wait, the more ground competitors cover. Few marketing decisions have a compounding advantage that never goes away.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Isuremedia handles all of this — the rankings, the AI citations, and making sure every visitor landing on your site already wants what you sell.
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
        <Testimonials />

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
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.background='#F7F8FD'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.background='#fff'; }}
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

        {/* ══ 5. AEO — DARK ═══════════════════════════════════════════════ */}
        <section className="seo-section" style={{ background:'var(--color-navy)', padding:'90px 0', color:'#fff' }}>
          <div className="ism-container">
            <div className="seo-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              {/* Left */}
              <div>
                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 12px', lineHeight:1.12 }}>
                  Why SEO Is a{' '}
                  <span style={{ color:'var(--ism-amber)' }}>Great Investment</span>
                </h2>

                <p style={{ fontFamily:I, fontSize:15, color:'var(--ism-amber)', fontWeight:600, lineHeight:1.6, margin:'0 0 24px' }}>
                  Turn Your Website Into Your Best-Performing Sales Channel
                </p>

                <div style={{ display:'flex', flexDirection:'column', gap:16, marginBottom:36 }}>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>Most marketing stops when you stop paying.</strong> A ranked page keeps sending traffic every day — no ongoing cost per click.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>Organic leads convert 9× better than outbound.</strong> The people finding you through search already want what you sell.
                  </p>
                  <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.75)', lineHeight:1.75, margin:0 }}>
                    <strong style={{ color:'#fff', fontWeight:700 }}>AI Search has changed where answers come from.</strong> We build for Google and AI — ChatGPT, Perplexity, Overviews — so you show up in both.
                  </p>
                </div>

                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.30)'; }}
                >
                  Start Building Your SEO Asset →
                </a>
              </div>

              {/* Right — image */}
              <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 24px 72px rgba(0,0,0,.35)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/AI seo.webp"
                  alt="AI Search Optimisation"
                  style={{ width:'100%', display:'block', objectFit:'cover' }}
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
                Isuremedia&apos;s Proven SEO System for <span style={{ color:'var(--ism-amber)' }}>Measurable Growth</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Your First Step Toward Bigger Rankings and Better Business
              </p>
            </div>
            <div className="seo-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:0, position:'relative' }}>
              <div style={{ position:'absolute', top:28, left:'10%', width:'80%', height:2, background:'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex:0 }} />
              {TIMELINE_STEPS.map((step,i)=>(
                <div key={i} style={{ textAlign:'center', padding:'0 16px', position:'relative', zIndex:1 }}>
                  <div style={{ width:56, height:56, borderRadius:'50%', background: i===0 ? 'var(--ism-amber)' : 'var(--color-primary)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', boxShadow:`0 4px 18px ${i===0 ? 'rgba(255,176,0,.40)' : 'rgba(30,77,195,.30)'}`, border:'4px solid #fff' }}>
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
                Get a Free SEO Audit
              </a>
            </div>
          </div>
        </section>

        {/* ══ 8. PRICING PLANS ════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px' }}>
                Start with the right scope{' '}
                <span style={{ color:'var(--ism-amber)' }}>for your goals.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every plan includes a dedicated SEO manager and monthly reporting.
              </p>
            </div>
            <div className="seo-plan-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, alignItems:'start' }}>
              {/* LOCAL SEO */}
              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
              >
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>LOCAL SEO</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Local SEO</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Ideal for service businesses — HVAC, dental, legal, restaurants.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['GBP optimisation & management','Local citation building','On-page geo-targeting','Review acquisition strategy','Monthly ranking report','Competitor gap analysis'].map((f,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:10, fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.4 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11, marginTop:3, flexShrink:0 }} />{f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" style={{ display:'block', textAlign:'center', padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(255,176,0,.40)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}
                >
                  Get Local SEO
                </a>
              </div>

              {/* GROWTH SEO — Featured */}
              <div style={{ background:'#fff', borderRadius:16, border:'2px solid var(--color-primary)', padding:'36px 32px', transform:'scale(1.04)', boxShadow:'0 16px 56px rgba(30,77,195,.18)', position:'relative', transition:'all .22s' }}>
                <div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', background:'var(--ism-amber)', borderRadius:100, padding:'5px 18px', whiteSpace:'nowrap' }}>
                  <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-navy)', letterSpacing:'.08em', textTransform:'uppercase' }}>Most Popular</span>
                </div>
                <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.10em', textTransform:'uppercase', marginBottom:10 }}>GROWTH SEO</div>
                <div style={{ fontFamily:J, fontSize:22, fontWeight:900, color:'var(--color-navy)', marginBottom:8 }}>Growth SEO</div>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.6, margin:'0 0 24px' }}>Full SEO campaign — technical + content + links + monthly reporting.</p>
                <ul style={{ listStyle:'none', margin:'0 0 32px', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
                  {['Full technical SEO audit & fixes','On-page & content optimisation','Link building & digital PR','AI & AEO optimisation','Advanced rank tracking','Monthly strategy call + report'].map((f,i)=>(
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

              {/* ENTERPRISE */}
              <div style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 32px', transition:'all .22s' }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
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

        {/* ══ 9. WHY DIFFERENT ════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 14px', maxWidth:700, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>
                Why Our SEO Services Drive <span style={{ color:'var(--ism-amber)' }}>Better Growth</span> for Your Business
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Get the organic traffic your business deserves.
              </p>
            </div>
            <div className="seo-diff-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {DIFFERENTIATORS.map((d,i)=>(
                <div key={i} style={{ background: d.dark ? 'var(--color-navy)' : 'var(--color-bg-soft)', borderRadius:16, border:`1px solid ${d.dark ? 'transparent' : 'var(--color-border)'}`, padding:'36px 30px', transition:'all .22s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
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
                Ready to rank higher<br />and bring in <span style={{ color:'var(--ism-amber)' }}>more customers?</span>
              </h2>

              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.80, margin:'0 0 36px', maxWidth:520 }}>
                Whether you are a local business, a growing brand, or a marketing agency, the question is the same. Are your best customers finding you on Google? If not, talk to us and we will show you where the opportunity is.
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
                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'#fff', background:'transparent', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', border:'2px solid rgba(255,255,255,.40)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.40)'; e.currentTarget.style.background='transparent'; }}
                >
                  Talk to Our Team
                </a>
              </div>
            </div>

            {/* Right — image only */}
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

        /* Hero trust badge row — tighten on small screens */
        @media (max-width: 480px) {
          .seo-trust-badges { gap: 6px 10px !important; font-size: 12px !important; }
        }

        /* Bottom CTA <br> tag — hide forced break on mobile */
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
