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
    title: 'Technical SEO',
    icon: 'fa-solid fa-gear',
    color: '#1E4DC3',
    desc: 'We fix the foundations first. Deep crawl audits, Core Web Vitals, indexing blockers, and site architecture Google can understand and rank.',
    href: '/services/seo/technical-seo',
  },
  {
    title: 'On-Page SEO',
    icon: 'fa-solid fa-file-lines',
    color: '#F59E0B',
    desc: 'Every page optimised for the real intent behind the search — title tags, headings, internal links, and content structure aligned to what Google rewards.',
    href: '/services/seo/on-page-seo',
  },
  {
    title: 'Link Building & Digital PR',
    icon: 'fa-solid fa-link',
    color: '#10B981',
    desc: '7,000+ backlinks built across 150+ clients — zero penalties. Contextual, niche-relevant links through guest posts, digital PR, and niche edits.',
    href: '/services/seo/link-building',
  },
  {
    title: 'Local SEO & Google Business Profile',
    icon: 'fa-solid fa-location-dot',
    color: '#EF4444',
    desc: 'Dominate the local 3-pack and Maps. Robert Morrison D.C. saw GBP views grow +577% and phone calls +878% in 6 months.',
    href: '/services/seo/local-seo',
  },
  {
    title: 'AEO & AI Search Optimisation',
    icon: 'fa-solid fa-robot',
    color: '#8B5CF6',
    desc: 'Get cited in Google AI Overviews, ChatGPT, and Perplexity answers. We optimise your content to appear in AI-generated answers — not just blue links.',
    href: '/services/seo/aeo',
  },
  {
    title: 'E-Commerce SEO',
    icon: 'fa-solid fa-cart-shopping',
    color: '#F97316',
    desc: 'Product and category page optimisation that drives buyers, not browsers. Garnus India grew conversions from 6 to 45/month — a 650% increase.',
    href: '/services/seo/on-page-seo',
  },
];

const TIMELINE_STEPS = [
  { num: 1, period: 'Complete Digital Strategy',     desc: 'Full competitor analysis, keyword research, and a custom 90-day roadmap tailored to your industry and goals.', icon: 'fa-solid fa-map' },
  { num: 2, period: 'Technical Foundation',           desc: 'Site audit, Core Web Vitals fixes, crawl structure, schema markup — building the base everything else depends on.', icon: 'fa-solid fa-gear' },
  { num: 3, period: 'Content & Link Building',        desc: 'Topical authority content, on-page optimisation, and editorial backlinks to accelerate ranking velocity.', icon: 'fa-solid fa-file-pen' },
  { num: 4, period: 'Scale & Compound',               desc: "Rankings accelerate, traffic compounds. We scale what's working and report on revenue impact every single month.", icon: 'fa-solid fa-chart-line' },
];

const DIFFERENTIATORS = [
  { dark: true,  icon: 'fa-solid fa-microchip',   title: 'AI & AI-First Ready',         desc: 'We optimise for ChatGPT, Perplexity, and Google AI Overviews — not just traditional search. Your brand appears everywhere customers look.' },
  { dark: false, icon: 'fa-solid fa-users',        title: 'In-House Team Only',          desc: 'No outsourcing, no freelancers. Every campaign is run by our own specialists who know your business inside out.' },
  { dark: false, icon: 'fa-solid fa-chart-line',  title: 'Revenue-Backed Reporting',    desc: 'We don\'t report vanity metrics. We show you traffic growth, lead volume, and measurable revenue impact every month.' },
  { dark: false, icon: 'fa-solid fa-shield-check', title: 'Niche Experience (12+)',      desc: 'HVAC, e-commerce, SaaS, legal, dental — we\'ve ranked sites in 12+ industries and know what Google rewards in your space.' },
  { dark: false, icon: 'fa-solid fa-handshake',   title: 'No Lock-In Contracts',        desc: 'Month-to-month engagements. You stay because results keep coming, not because you\'re contractually obligated to.' },
  { dark: false, icon: 'fa-solid fa-tag',          title: 'White-Label Ready',           desc: 'Agencies trust us to deliver under their brand. Full NDA, white-label reports, and a seamless client experience.' },
];

const INDUSTRIES = [
  'HVAC & Home Services','E-Commerce','SaaS & Tech','Real Estate',
  'Marketing Agencies','Dental & Medical','Legal Services','Finance & Fintech',
  'Education','Restaurants','Recruitment','Travel',
];


const FAQS = [
  { q: 'How long does SEO take to show results?', a: 'Most clients see meaningful ranking improvements within 3–6 months. For competitive niches, expect 6–12 months for significant traffic growth. The results compound over time unlike paid ads.' },
  { q: 'Do you guarantee first-page rankings?', a: 'No ethical SEO agency can guarantee specific rankings — Google\'s algorithm is outside anyone\'s control. What we guarantee is a transparent process, consistent effort, and a track record of getting clients to page 1.' },
  { q: 'What makes ISM different from other SEO agencies?', a: 'Three things: we don\'t outsource, we don\'t lock you in, and we report on revenue — not just rankings. We\'ve ranked 300+ sites across 12+ industries.' },
  { q: 'Do you do black-hat SEO?', a: 'Never. 100% white-hat methods only. PBNs, link farms, and cloaking create short-term gains and long-term penalties. We build authority that lasts.' },
  { q: 'Can you work with my existing team / developer?', a: 'Yes. We integrate with your team seamlessly. We provide clear technical specs, implementation guides, and can work directly in your CMS.' },
  { q: 'What does a typical SEO retainer include?', a: 'Monthly deliverables vary by plan, but typically include: technical fixes, content production, link building, rank tracking, and a detailed performance report with next-month priorities.' },
  { q: 'Do you offer white-label SEO for agencies?', a: 'Yes. We work with 20+ agencies under white-label. Full NDA, client-ready reports under your branding, and a dedicated account manager for partner agencies.' },
  { q: 'How do you handle AI search like ChatGPT and Perplexity?', a: 'We use Answer Engine Optimisation (AEO) — entity optimisation, structured data, FAQ schema, and brand citation building so your business appears inside AI-generated answers, not just blue links.' },
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
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div className="seo-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          {/* Left */}
          <div style={{ position:'sticky', top:100 }}>
            <Pill text="FAQ" />
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Honest answers to what every client asks us.
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              No spin. No buzzwords. Just the truth about how SEO works and what we do differently.
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
        <section className="seo-hero" style={{ background:'var(--color-bg-soft)', padding:'96px 0 64px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-15%', right:'-8%', width:700, height:700, background:'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'-10%', left:'-5%', width:500, height:500, background:'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents:'none' }} />

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>

            <h1 style={{ fontFamily:J, fontSize:'clamp(38px,5.5vw,72px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-2px', lineHeight:1.06, margin:'0 auto 24px', maxWidth:940 }}>
              Rank on Google. Rank in AI Search. Rank{' '}
              <span style={{ color:'var(--ism-amber)', position:'relative', display:'inline-block' }}>
                everywhere
                <svg style={{ position:'absolute', bottom:-6, left:0, width:'100%' }} height="8" viewBox="0 0 220 8" preserveAspectRatio="none">
                  <path d="M2 6 Q55 1 110 5 Q165 8 218 2" stroke="var(--ism-amber)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              {' '}your customers look.
            </h1>

            <p style={{ fontFamily:I, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--color-text-muted)', lineHeight:1.78, maxWidth:600, margin:'0 auto 36px' }}>
              Search has changed. Google still matters — but your customers now find answers on ChatGPT, Perplexity, Google AI Overviews, and voice assistants too. We build the SEO engine that covers all of it.
            </p>

            {/* CTAs */}
            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Get Started →
              </a>
              <a href="#seo-results"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 36px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
              >
                See SEO Results
              </a>
            </div>

          </div>
        </section>

        {/* ══ 1b. REVIEWS BAR ══════════════════════════════════════════════ */}
        <div style={{ background:'var(--color-bg-soft)', borderTop:'1px solid var(--color-border)', borderBottom:'1px solid var(--color-border)', padding:'32px 28px' }}>
          <div style={{ maxWidth:1280, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', gap:56, flexWrap:'wrap' }}>

            {/* Google */}
            <div style={{ display:'flex', alignItems:'center', gap:16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/google-review-icon.webp"
                alt="Google" width={44} height={44}
                style={{ width:44, height:44, objectFit:'contain', display:'block', flexShrink:0 }} />
              <div>
                <div style={{ display:'flex', gap:2, marginBottom:4 }}>
                  {[...Array(5)].map((_,i)=>(
                    <i key={i} className="fa-solid fa-star" style={{ color:'var(--ism-amber)', fontSize:14 }} />
                  ))}
                </div>
                <div style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)' }}>
                  <span style={{ fontSize:18, fontWeight:900 }}>150+</span> Google Reviews
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width:1, height:52, background:'var(--color-border)', flexShrink:0 }} />

            {/* Clutch */}
            <div style={{ display:'flex', alignItems:'center', gap:16 }}>
              <div style={{ width:44, height:44, borderRadius:10, background:'var(--color-primary)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <span style={{ fontFamily:J, fontSize:15, fontWeight:900, color:'#fff' }}>C</span>
              </div>
              <div>
                <div style={{ display:'flex', gap:2, marginBottom:4 }}>
                  {[...Array(5)].map((_,i)=>(
                    <i key={i} className="fa-solid fa-star" style={{ color:'var(--ism-amber)', fontSize:14 }} />
                  ))}
                </div>
                <div style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)' }}>
                  <span style={{ fontSize:18, fontWeight:900 }}>100+</span> Clutch Reviews
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width:1, height:52, background:'var(--color-border)', flexShrink:0 }} />

            {/* Client count */}
            <div style={{ display:'flex', alignItems:'center', gap:16 }}>
              <div style={{ display:'flex' }}>
                {['#4F46E5','#0EA5E9','#10B981','#F59E0B','#EF4444','#8B5CF6'].map((c,i)=>(
                  <div key={i} style={{ width:38, height:38, borderRadius:'50%', border:'2px solid var(--color-bg-soft)', marginLeft:i===0?0:-10, background:c, display:'flex', alignItems:'center', justifyContent:'center', zIndex:6-i, position:'relative', flexShrink:0 }}>
                    <i className="fa-solid fa-user" style={{ fontSize:14, color:'#fff' }} />
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display:'flex', gap:2, marginBottom:4 }}>
                  {[...Array(5)].map((_,i)=>(
                    <i key={i} className="fa-solid fa-star" style={{ color:'var(--ism-amber)', fontSize:14 }} />
                  ))}
                </div>
                <div style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)' }}>
                  <span style={{ fontSize:18, fontWeight:900 }}>1,000+</span> Client Reviews
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ══ 2. STRATEGY SECTION ══════════════════════════════════════════ */}
        <section style={{ background:'#fff', padding:'88px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>

            {/* Heading */}
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,38px)', fontWeight:800, color:'var(--color-navy)', textAlign:'center', letterSpacing:'-0.4px', lineHeight:1.2, margin:'0 auto 52px', maxWidth:820 }}>
              A Strategy-First Digital Marketing Agency to Grow Your Business
            </h2>

            {/* Two-col layout */}
            <div className="seo-strategy-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center', marginBottom:48 }}>

              {/* Left — text */}
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>
                  Our results-driven digital marketing company maps your fastest path to growth by providing you with a custom strategy. We start with a deep audit to help us build a channel-by-channel plan to increase your qualified leads and revenue.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Isuremedia is a versatile and full-service digital marketing agency that doesn&apos;t rely on smoke and mirrors to attract new clients. Instead, we use our deep search engine optimisation (SEO) expertise and artificial intelligence (AI)-driven strategies to help businesses achieve long-term, sustainable growth.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Invest in our affordable digital marketing services and get maximum return on your investment.
                </p>
              </div>

              {/* Right — video thumbnail */}
              <div style={{ position:'relative', borderRadius:14, overflow:'hidden', boxShadow:'0 16px 56px rgba(0,0,0,.14)', cursor:'pointer' }}
                onMouseEnter={e=>{ (e.currentTarget.querySelector('.seo-play-btn') as HTMLElement).style.transform='translate(-50%,-50%) scale(1.10)'; }}
                onMouseLeave={e=>{ (e.currentTarget.querySelector('.seo-play-btn') as HTMLElement).style.transform='translate(-50%,-50%) scale(1)'; }}
              >
                <div style={{ width:'100%', aspectRatio:'16/9', background:'linear-gradient(135deg,#2D5016 0%,#4A7C24 40%,#6B9E3A 70%,#8BC34A 100%)', display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
                  <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'28px 32px' }}>
                    <p style={{ fontFamily:J, fontSize:'clamp(18px,2.2vw,26px)', fontWeight:900, color:'var(--ism-amber)', lineHeight:1.25, margin:'0 0 8px' }}>
                      Turning Complex Digital Marketing
                    </p>
                    <p style={{ fontFamily:J, fontSize:'clamp(18px,2.2vw,26px)', fontWeight:900, color:'#fff', lineHeight:1.25, margin:0 }}>
                      Into Real Growth
                    </p>
                  </div>
                  <div style={{ position:'absolute', bottom:14, left:14, background:'rgba(0,0,0,.60)', borderRadius:6, padding:'6px 14px' }}>
                    <span style={{ fontFamily:J, fontSize:12, fontWeight:700, color:'#fff', letterSpacing:'.04em' }}>Client Testimonial</span>
                  </div>
                </div>
                <div className="seo-play-btn" style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:60, height:60, borderRadius:'50%', background:'rgba(255,255,255,.92)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 6px 20px rgba(0,0,0,.25)', transition:'transform .18s' }}>
                  <i className="fa-solid fa-play" style={{ color:'var(--color-primary)', fontSize:20, marginLeft:4 }} />
                </div>
              </div>

            </div>

            {/* CTA */}
            <div style={{ textAlign:'center' }}>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
              >
                Grow My Business Now <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
              </a>
            </div>

          </div>
          <style>{`
            @media (max-width: 768px) {
              .seo-strategy-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ══ 3. CLIENT RESULTS ════════════════════════════════════════════ */}
        <div id="seo-results">
          <ClientResults />
        </div>

        {/* ══ CTA BANNER ═══════════════════════════════════════════════════ */}
        <section style={{ background:'#fff', padding:'90px 28px 72px' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', position:'relative' }}>

            {/* Card — no shadow, image overflows upward via section padding-top */}
            <div style={{ background:'#F5F5E6', borderRadius:24, display:'grid', gridTemplateColumns:'380px 1fr', minHeight:380 }} className="seo-cta-banner-grid">

              {/* Left col — empty space for the absolute image */}
              <div />

              {/* Right — text */}
              <div style={{ padding:'64px 64px 64px 40px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start' }}>
                <h2 style={{ fontFamily:J, fontSize:'clamp(24px,2.6vw,38px)', fontWeight:900, color:'#1A1A1A', lineHeight:1.22, letterSpacing:'-0.4px', margin:'0 0 20px' }}>
                  You&apos;ve Finally Found<br />the Right SEO Agency With Answers
                </h2>
                <p style={{ fontFamily:I, fontSize:15, color:'#555', lineHeight:1.82, margin:'0 0 40px', maxWidth:460 }}>
                  Isuremedia has the SEO solutions you&apos;ve been searching for. Don&apos;t let another day go by where your competitors are looking down on you. It&apos;s time to be discovered!
                </p>
                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Increase My Leads Now <i className="fa-solid fa-arrow-right" style={{ fontSize:12 }} />
                </a>
              </div>

            </div>

            {/* Image — positioned absolute, bottom:0 aligns woman's feet with card bottom, height overflows upward */}
            <div style={{ position:'absolute', bottom:0, left:0, width:400, height:'calc(100% + 90px)', pointerEvents:'none', borderBottomLeftRadius:24, overflow:'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/wp-content/themes/thrive-agency/images/unblockseo-women.svg"
                alt="SEO Expert"
                style={{ position:'absolute', bottom:0, left:0, height:'100%', width:'100%', objectFit:'contain', objectPosition:'bottom center', display:'block' }}
              />
            </div>

          </div>
          <style>{`
            @media (max-width: 900px) {
              .seo-cta-banner-grid { grid-template-columns: 1fr !important; }
              .seo-cta-banner-grid > div:first-child { display: none !important; }
            }
          `}</style>
        </section>

        {/* ══ 3b. IMAGE + TEXT SECTION ════════════════════════════════════ */}
        <section style={{ background:'var(--color-bg-soft)', padding:'88px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 28px' }}>
            <h2 style={{ fontFamily:J, fontSize:'clamp(22px,2.8vw,38px)', fontWeight:800, color:'var(--color-navy)', textAlign:'center', letterSpacing:'-0.4px', lineHeight:1.2, margin:'0 auto 52px', maxWidth:820 }}>
              Proven SEO Strategies That Drive Real Business Growth
            </h2>
            <div className="seo-imgtext-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }}>

              {/* Left — image */}
              <div style={{ borderRadius:14, overflow:'hidden', boxShadow:'0 16px 56px rgba(0,0,0,.10)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Artboard.png"
                  alt="SEO Growth Strategy"
                  style={{ width:'100%', display:'block', objectFit:'cover' }}
                />
              </div>

              {/* Right — text */}
              <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-primary)', lineHeight:1.80, margin:0 }}>
                  Our results-driven SEO strategies are built around your business goals — not vanity metrics. We analyse your market, competitors, and audience to craft a channel-by-channel plan that drives qualified traffic and revenue.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  From technical foundations to link authority and AI search visibility, every service we deliver is designed to compound over time. You don&apos;t just rank — you dominate.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.80, margin:0 }}>
                  Whether you&apos;re a local business, an e-commerce brand, or a SaaS company, we have the industry-specific experience to accelerate your growth from day one.
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
              .seo-imgtext-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>

        {/* ══ 11. TESTIMONIALS ════════════════════════════════════════════ */}
        <Testimonials />

        {/* ══ 4. SERVICES GRID ════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Our Services" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                Every SEO service you need.
              </h2>
              <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Every service is connected — technical fixes enable rankings, rankings drive traffic, content converts it.
              </p>
            </div>
            <div className="seo-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid #E8EAF0', borderRadius:16, overflow:'hidden' }}>
              {SERVICES.map((s,i)=>(
                <div key={i}
                  className={`seo-svc-cell seo-svc-cell-${i}`}
                  style={{
                    padding:'36px 32px',
                    borderRight: (i+1)%3 === 0 ? 'none' : '1px solid #E8EAF0',
                    borderBottom: i < 3 ? '1px solid #E8EAF0' : 'none',
                    background:'#fff',
                    transition:'background .18s',
                    cursor:'default',
                  }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.background='#F7F8FD'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.background='#fff'; }}
                >
                  {/* Icon + Title */}
                  <div style={{ display:'flex', alignItems:'flex-start', gap:14, marginBottom:18 }}>
                    <div style={{ width:46, height:46, borderRadius:10, background:`${s.color}18`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <i className={s.icon} style={{ fontSize:20, color:s.color }} />
                    </div>
                    <h3 style={{ fontFamily:J, fontSize:16, fontWeight:800, color:'var(--color-navy)', margin:0, lineHeight:1.3, paddingTop:6 }}>{s.title}</h3>
                  </div>
                  {/* Description */}
                  <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', lineHeight:1.80, margin:'0 0 22px' }}>{s.desc}</p>
                  {/* Link */}
                  <a href={s.href}
                    style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:J, fontSize:12, fontWeight:700, color:s.color, textDecoration:'none', letterSpacing:'.03em', transition:'gap .18s' }}
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
              .seo-svc-cell-1, .seo-svc-cell-3, .seo-svc-cell-5 { border-right: none !important; }
              .seo-svc-cell-0, .seo-svc-cell-1, .seo-svc-cell-2, .seo-svc-cell-3 { border-bottom: 1px solid #E8EAF0 !important; }
              .seo-svc-cell-4, .seo-svc-cell-5 { border-bottom: none !important; }
            }
            @media (max-width: 560px) {
              .seo-svc-grid { grid-template-columns: 1fr !important; }
              .seo-svc-cell { border-right: none !important; border-bottom: 1px solid #E8EAF0 !important; }
              .seo-svc-cell-5 { border-bottom: none !important; }
            }
          `}</style>
        </section>

        {/* ══ 5. AEO — DARK ═══════════════════════════════════════════════ */}
        <section className="seo-section" style={{ background:'var(--color-navy)', padding:'90px 0', color:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div className="seo-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
              {/* Left */}
              <div>
                {/* Pill */}
                <div style={{ display:'inline-flex', alignItems:'center', gap:7, padding:'5px 16px', borderRadius:100, border:'1.5px solid rgba(255,176,0,.5)', fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:22 }}>
                  <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--ism-amber)', display:'inline-block' }} />
                  THE FUTURE OF SEARCH IS HERE
                </div>

                <h2 style={{ fontFamily:J, fontSize:'clamp(28px,3.2vw,46px)', fontWeight:900, color:'#fff', letterSpacing:'-0.5px', margin:'0 0 20px', lineHeight:1.12 }}>
                  Your customers are finding answers inside AI —{' '}
                  <span style={{ color:'var(--ism-amber)' }}>not just Google.</span>
                </h2>

                <p style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.68)', lineHeight:1.78, margin:'0 0 32px' }}>
                  40% of Gen Z searches on AI tools first. If you&apos;re not visible in these surfaces, you&apos;re losing customers you never knew you had.
                </p>

                {/* Points */}
                <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:36 }}>
                  {[
                    { icon:'fa-solid fa-robot',      text:'Get cited in Google AI Overviews & featured snippets' },
                    { icon:'fa-solid fa-bolt',        text:'Appear in ChatGPT, Perplexity, and Gemini answers'   },
                    { icon:'fa-solid fa-microphone',  text:'Optimised for Siri, Alexa & Google Assistant'        },
                  ].map((item,i)=>(
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:12 }}>
                      <i className={item.icon} style={{ fontSize:14, color:'var(--ism-amber)', flexShrink:0 }} />
                      <span style={{ fontFamily:I, fontSize:15, color:'rgba(255,255,255,.80)', lineHeight:1.6 }}>{item.text}</span>
                    </div>
                  ))}
                </div>

                <a href="/services/seo/aeo"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.06em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.30)', transition:'all .18s' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.30)'; }}
                >
                  Talk to an AEO Expert →
                </a>
              </div>

              {/* Right — image */}
              <div style={{ borderRadius:16, overflow:'hidden', boxShadow:'0 24px 72px rgba(0,0,0,.35)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Artboard.png"
                  alt="AI Search Optimisation"
                  style={{ width:'100%', display:'block', objectFit:'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. TIMELINE ══════════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <Pill text="Our Process" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                4 months to measurable growth.
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Month by month, no guesswork.
              </p>
            </div>
            <div className="seo-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:0, position:'relative' }}>
              <div style={{ position:'absolute', top:28, left:'12.5%', width:'75%', height:2, background:'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex:0 }} />
              {TIMELINE_STEPS.map((step,i)=>(
                <div key={i} style={{ textAlign:'center', padding:'0 20px', position:'relative', zIndex:1 }}>
                  <div style={{ width:56, height:56, borderRadius:'50%', background: i===0 ? 'var(--ism-amber)' : 'var(--color-primary)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', boxShadow:`0 4px 18px ${i===0 ? 'rgba(255,176,0,.40)' : 'rgba(30,77,195,.30)'}`, border:'4px solid #fff' }}>
                    <span style={{ fontFamily:J, fontSize:18, fontWeight:900, color:'#fff' }}>{step.num}</span>
                  </div>
                  <div style={{ fontFamily:J, fontSize:12, fontWeight:800, color:'var(--color-navy)', marginBottom:10, lineHeight:1.3 }}>{step.period}</div>
                  <p style={{ fontFamily:I, fontSize:13, color:'var(--color-text-muted)', lineHeight:1.65, margin:0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 8. PRICING PLANS ════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <Pill text="Plans" />
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
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <Pill text="Why Choose Us" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(24px,3vw,42px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 6px', maxWidth:640, marginLeft:'auto', marginRight:'auto', lineHeight:1.2 }}>
                What makes us different from{' '}
                <span style={{ color:'var(--ism-amber)' }}>every other SEO agency.</span>
              </h2>
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
        <section style={{ background:'#fff', padding:'60px 28px' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', background:'var(--color-primary)', borderRadius:24, padding:'60px 64px', display:'grid', gridTemplateColumns:'1fr 420px', gap:48, alignItems:'center', position:'relative', overflow:'hidden' }} className="seo-rfr-grid">

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
                Ready for{' '}
                <span style={{ color:'var(--ism-amber)' }}>Results?</span>
              </h2>

              <p style={{ fontFamily:I, fontSize:16, color:'rgba(255,255,255,.75)', lineHeight:1.80, margin:'0 0 36px', maxWidth:520 }}>
                Whether you run a local business, a growing brand, or a digital agency, the question is the same. Are you getting the growth your marketing should be delivering? If not, you are in the right place. Talk to us today and we will help you identify and achieve your biggest growth opportunities.
              </p>

              {/* Buttons */}
              <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 32px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(255,176,0,.55)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
                >
                  Get My Free Proposal
                </a>
                <span style={{ fontFamily:I, fontSize:13, color:'rgba(255,255,255,.50)', fontWeight:600 }}>or</span>
                <a href="tel:+917300007650"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'15px 28px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, color:'#fff', background:'transparent', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', border:'2px solid rgba(255,255,255,.40)', transition:'all .18s', whiteSpace:'nowrap' }}
                  onMouseEnter={e=>{ e.currentTarget.style.borderColor='#fff'; e.currentTarget.style.background='rgba(255,255,255,.08)'; }}
                  onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.40)'; e.currentTarget.style.background='transparent'; }}
                >
                  <i className="fa-solid fa-phone" style={{ fontSize:12 }} /> Call +91-730-000-7650
                </a>
              </div>
            </div>

            {/* Right — image only */}
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'center', height:320 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-3039f85/thriveagency.com/files/jeff-vosburg-img.png"
                alt="Client"
                style={{ height:'100%', width:'auto', objectFit:'contain', objectPosition:'bottom center', display:'block' }}
              />
            </div>

          </div>
          <style>{`
            @media (max-width: 900px) {
              .seo-rfr-grid { grid-template-columns: 1fr !important; padding: 40px 28px !important; }
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
      `}</style>
    </>
  );
}
