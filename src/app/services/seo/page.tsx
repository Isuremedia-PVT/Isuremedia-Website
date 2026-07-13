'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── DATA ─────────────────────────────────────────────────────────── */

const PROOF_CARDS = [
  {
    client: 'Cornerstone Dog Training',
    badge: 'Technical SEO',
    metric: '+336%', metricLabel: 'organic traffic',
    period: 'in 5 months',
    stats: [['4/5','Keywords at #1'],['DA 27','from DA 21'],['4,260','Backlinks built'],['2x','AI Overviews']],
    bars: [18,22,20,28,35,40,48,56,65,74,84,100],
  },
  {
    client: 'Garden Solutions NZ',
    badge: 'Content + SEO',
    metric: '+550%', metricLabel: 'organic sessions',
    period: 'in 7 months',
    stats: [['1st','in 3 cities'],['DA 34','from DA 14'],['3,800','Backlinks built'],['8x','Leads growth']],
    bars: [12,18,22,24,30,38,45,55,62,72,85,100],
  },
  {
    client: 'Robert Morrison D.C.',
    badge: 'Local SEO',
    metric: '+225%', metricLabel: 'new patient calls',
    period: 'in 4 months',
    stats: [['#1','GBP ranking'],['DA 22','from DA 11'],['520','Citations built'],['3x','Review growth']],
    bars: [20,24,28,30,34,42,50,58,65,75,88,100],
  },
  {
    client: 'Geomatrix',
    badge: 'On-Page SEO',
    metric: '+410%', metricLabel: 'keyword rankings',
    period: 'in 6 months',
    stats: [['52','#1 keywords'],['DA 38','from DA 19'],['2,100','Backlinks built'],['5x','Traffic ROI']],
    bars: [15,19,23,28,33,40,48,57,65,74,88,100],
  },
  {
    client: 'Garnus India',
    badge: 'AI SEO',
    metric: '4×', metricLabel: 'organic reach',
    period: 'in 8 months',
    stats: [['82','Top-3 keywords'],['DA 41','from DA 22'],['5,600','Backlinks built'],['3x','AI Overview']],
    bars: [10,16,20,26,32,40,48,56,65,76,88,100],
  },
  {
    client: 'GoHighLevel Expert',
    badge: 'Technical SEO',
    metric: 'DA 5→16', metricLabel: 'domain authority',
    period: 'in 5 months',
    stats: [['28','#1 keywords'],['DA 16','from DA 5'],['1,240','Backlinks built'],['6x','Traffic growth']],
    bars: [8,14,18,24,30,36,44,52,62,74,86,100],
  },
];

const OLD_SEO = [
  'Keyword stuffing & thin content',
  'Buying links from spam sites',
  'Ignoring Core Web Vitals',
  'No E-E-A-T signals',
  'Ignoring AI search entirely',
  'One-size-fits-all templates',
];

const NEW_SEO = [
  'Topical authority mapping',
  'E-E-A-T optimisation',
  'Editorial link building',
  'AI search optimisation (AEO)',
  'Core Web Vitals mastery',
  'Entity-based content strategy',
];

const SERVICES = [
  {
    num: '01', cat: 'FOUNDATION',
    title: 'Technical SEO',
    desc: 'We fix the foundations first. Deep crawl audits, Core Web Vitals, indexing blockers, and site architecture Google can understand and rank.',
    href: '/services/seo/technical-seo',
    tags: ['Site Audit','Core Web Vitals','Crawlability','Schema'],
  },
  {
    num: '02', cat: 'FOUNDATION',
    title: 'On-Page SEO',
    desc: 'Every page optimised for the real intent behind the search — title tags, headings, internal links, and content structure aligned to what Google rewards in 2026.',
    href: '/services/seo/on-page-seo',
    tags: ['Keyword Mapping','Meta Optimisation','Internal Linking'],
  },
  {
    num: '03', cat: 'AUTHORITY',
    title: 'Link Building & Digital PR',
    desc: '7,000+ backlinks built across 150+ clients — zero penalties. Contextual, niche-relevant links through guest posts, digital PR, and niche edits. All white-hat.',
    href: '/services/seo/link-building',
    tags: ['Guest Posts','Digital PR','Niche Edits','Broken Links'],
  },
  {
    num: '04', cat: 'LOCAL',
    title: 'Local SEO & Google Business Profile',
    desc: 'Dominate the local 3-pack and Maps. Robert Morrison D.C. saw GBP views grow +577% and phone calls +878% in 6 months.',
    href: '/services/seo/local-seo',
    tags: ['GBP Optimisation','Local Citations','Review Strategy','Map Pack'],
  },
  {
    num: '05', cat: 'AI SEARCH · NEW',
    title: 'AEO & AI Search Optimisation',
    desc: 'Get cited in Google AI Overviews, ChatGPT, and Perplexity answers. We optimise your content to appear in AI generated answers — not just blue links.',
    href: '/services/seo/aeo',
    tags: ['AEO','GEO','Featured Snippets','Voice Search'],
  },
  {
    num: '06', cat: 'E-COMMERCE',
    title: 'E-Commerce SEO',
    desc: 'Product and category page optimisation that drives buyers, not browsers. Garnus India grew conversions from 6 to 45/month — a 650% increase.',
    href: '/services/seo/on-page-seo',
    tags: ['Product SEO','Category SEO','Shopping Feeds','CRO'],
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

const TESTIMONIALS = [
  { quote: 'They took our HVAC site from page 4 to position 1 in our city in 5 months. Inbound calls tripled.', name: 'James H.', role: 'HVAC Business Owner', initials: 'JH' },
  { quote: 'ROI on SEO with ISM completely outperforms our Google Ads spend. I wish we\'d started sooner.', name: 'Priya M.', role: 'E-Commerce Director', initials: 'PM' },
  { quote: 'The monthly reports are so clear. No agency jargon, just: here\'s what moved, here\'s why, here\'s next month.', name: 'Daniel K.', role: 'SaaS Founder', initials: 'DK' },
];

const TOOLS = ['Ahrefs','Semrush','Screaming Frog','Google Search Console','SurferSEO','Moz','PageSpeed Insights','Schema.org','Clearscope','BrightLocal'];

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
        <section className="seo-hero" style={{ background:'var(--color-bg-soft)', padding:'96px 0 80px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-15%', right:'-8%', width:700, height:700, background:'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'-10%', left:'-5%', width:500, height:500, background:'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents:'none' }} />

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>

            {/* Breadcrumb */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:7, fontFamily:I, fontSize:13, color:'var(--color-text-muted)', marginBottom:20 }}>
              <a href="/" style={{ color:'var(--color-text-muted)', textDecoration:'none', transition:'color .15s' }}
                onMouseEnter={e=>(e.currentTarget.style.color='var(--color-primary)')}
                onMouseLeave={e=>(e.currentTarget.style.color='var(--color-text-muted)')}>Home</a>
              <i className="fa-solid fa-chevron-right" style={{ fontSize:9, opacity:.5 }} />
              <a href="/services" style={{ color:'var(--color-text-muted)', textDecoration:'none', transition:'color .15s' }}
                onMouseEnter={e=>(e.currentTarget.style.color='var(--color-primary)')}
                onMouseLeave={e=>(e.currentTarget.style.color='var(--color-text-muted)')}>Services</a>
              <i className="fa-solid fa-chevron-right" style={{ fontSize:9, opacity:.5 }} />
              <span style={{ color:'var(--color-primary)', fontWeight:600 }}>SEO Services</span>
            </div>

            {/* Pill */}
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:100, background:'rgba(30,77,195,.07)', border:'1px solid rgba(30,77,195,.15)', fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.05em', marginBottom:24 }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:'#22C55E', display:'inline-block', boxShadow:'0 0 0 3px rgba(34,197,94,.25)', animation:'seo-pulse 2s infinite' }} />
              Full-Service SEO Since 2018 · 150+ Clients · 6 Countries
            </div>

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
            <div style={{ display:'flex', alignItems:'center', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:24 }}>
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

            {/* Trust badges */}
            <div className="seo-trust-badges" style={{ display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap', gap:'5px 18px', marginBottom:56, fontFamily:I, fontSize:13, color:'var(--color-text-muted)' }}>
              {['+225% avg traffic growth','7,000+ backlinks, zero penalties','AI Overviews in 5/6 accounts','No lock-in contracts'].map((b,i)=>(
                <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
                  <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11 }} />
                  {b}
                  {i<3 && <span style={{ color:'var(--color-border)', marginLeft:16 }}>·</span>}
                </span>
              ))}
            </div>

            {/* Browser Dashboard Mockup */}
            <div style={{ maxWidth:720, margin:'0 auto', borderRadius:16, overflow:'hidden', boxShadow:'0 28px 80px rgba(30,77,195,.16)', border:'1px solid rgba(0,0,0,.08)', background:'#fff' }}>
              {/* Browser chrome */}
              <div style={{ background:'#F3F4F6', padding:'10px 14px', display:'flex', alignItems:'center', gap:8, borderBottom:'1px solid #E5E7EB' }}>
                <div style={{ display:'flex', gap:5 }}>
                  {['#FF5F57','#FEBC2E','#28C840'].map(c=><div key={c} style={{ width:11, height:11, borderRadius:'50%', background:c }} />)}
                </div>
                <div style={{ flex:1, background:'#fff', borderRadius:6, padding:'5px 12px', fontFamily:I, fontSize:11, color:'#6B7280', border:'1px solid #E5E7EB', textAlign:'left' }}>
                  🔒 search.google.com/search-console — Cornerstone Dog Training (live client)
                </div>
              </div>
              {/* Dashboard body */}
              <div style={{ padding:'20px 24px 16px', display:'grid', gridTemplateColumns:'210px 1fr', gap:20, alignItems:'start' }} className="seo-dash-grid">
                <div style={{ textAlign:'left' }}>
                  <p style={{ fontFamily:J, fontSize:9, fontWeight:700, color:'#9CA3AF', letterSpacing:'.1em', textTransform:'uppercase', marginBottom:10 }}>ORGANIC PERFORMANCE — 12 MONTHS</p>
                  <div style={{ fontFamily:J, fontSize:52, fontWeight:900, color:'#111827', lineHeight:1, marginBottom:2 }}>960</div>
                  <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:3 }}>
                    <span style={{ display:'inline-flex', alignItems:'center', gap:4, fontFamily:J, fontSize:12, fontWeight:700, color:'#16A34A' }}>
                      <i className="fa-solid fa-caret-up" style={{ fontSize:10 }} /> +336%
                    </span>
                  </div>
                  <p style={{ fontFamily:I, fontSize:11, color:'#6B7280', marginBottom:14 }}>Daily organic visitors — up from 220/day</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:7 }}>
                    {[['4/5','Keywords at #1'],['DA 27','from DA 21'],['4,260','Backlinks built'],['2x','AI Overviews']].map(([v,l])=>(
                      <div key={v} style={{ background:'#F9FAFB', borderRadius:7, padding:'9px 11px', border:'1px solid #E5E7EB', textAlign:'left' }}>
                        <div style={{ fontFamily:J, fontSize:14, fontWeight:800, color:'#111827', lineHeight:1, marginBottom:3 }}>{v}</div>
                        <div style={{ fontFamily:I, fontSize:10, color:'#9CA3AF' }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ position:'relative' }}>
                  <div style={{ position:'absolute', top:0, right:0, background:'var(--ism-amber)', borderRadius:6, padding:'4px 10px', fontFamily:J, fontSize:9, fontWeight:700, color:'var(--color-navy)', zIndex:1 }}>
                    ▲ AI Overview Achieved
                  </div>
                  <div style={{ display:'flex', alignItems:'flex-end', gap:4, height:130, paddingTop:28, paddingBottom:8, borderBottom:'1px solid #E5E7EB' }}>
                    {[22,26,24,32,38,42,48,54,60,67,74,100].map((h,i)=>(
                      <div key={i} style={{ flex:1, height:`${h}%`, borderRadius:'3px 3px 0 0', background: i===11 ? 'var(--ism-amber)' : 'var(--color-primary)', opacity: i===11 ? 1 : 0.45+i*0.04 }} />
                    ))}
                  </div>
                  <div style={{ display:'flex', justifyContent:'space-between', paddingTop:5 }}>
                    {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m=>(
                      <div key={m} style={{ fontFamily:I, fontSize:9, color:'#9CA3AF', flex:1, textAlign:'center' }}>{m}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══ 1b. TICKER ═══════════════════════════════════════════════════ */}
        <div style={{ background:'#0A1628', borderBottom:'2px solid var(--ism-amber)', overflow:'hidden', padding:'13px 0' }}>
          <div style={{ display:'flex', gap:0, animation:'seo-ticker 32s linear infinite', whiteSpace:'nowrap' }}>
            {[...Array(2)].map((_,ri)=>(
              <div key={ri} style={{ display:'flex', flexShrink:0 }}>
                {['E-commerce conversions +490%','GoHighLevel Expert DA 5 → 16 in 5 months','Cornerstone Dog Training +336% traffic','Garden Solutions NZ +550% traffic','Robert Morrison D.C. +225% leads','Garnus India 4× organic reach','SaaS Platform +185% signups','HVAC Company 3× calls'].map((text,i)=>(
                  <span key={i} style={{ fontFamily:J, fontSize:12, fontWeight:600, color:'#fff', padding:'0 32px', display:'inline-flex', alignItems:'center', gap:10 }}>
                    <span style={{ color:'var(--ism-amber)' }}>↑</span>{text}
                    <span style={{ color:'rgba(255,255,255,.25)', marginLeft:8 }}>◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ══ 1c. TRUST BAR ════════════════════════════════════════════════ */}
        <div style={{ background:'#fff', borderBottom:'1px solid var(--color-border)', padding:'16px 28px' }}>
          <div style={{ maxWidth:1280, margin:'0 auto', display:'flex', alignItems:'center', gap:14, flexWrap:'wrap', justifyContent:'center' }}>
            <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-text-muted)', letterSpacing:'.1em', textTransform:'uppercase', marginRight:6 }}>TRUSTED BY</span>
            {[
              { icon:'fa-brands fa-google',   label:'Google Partner'        },
              { icon:'fa-brands fa-meta',     label:'Meta Business Partner' },
              { icon:'fa-solid fa-bolt',      label:'GoHighLevel Certified' },
              { icon:'fa-solid fa-star',      label:'Clutch Top Agency'     },
              { icon:'fa-brands fa-upwork',   label:'Upwork Top Rated'      },
            ].map(b=>(
              <div key={b.label} style={{ display:'inline-flex', alignItems:'center', gap:7, padding:'7px 16px', borderRadius:8, border:'1.5px solid var(--color-border)', fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-navy)', background:'var(--color-bg-soft)' }}>
                <i className={b.icon} style={{ fontSize:12, color:'var(--color-primary)' }} /> {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* ══ 1d. PROBLEM STRIP ════════════════════════════════════════════ */}
        <div style={{ background:'var(--color-navy)', padding:'18px 28px' }}>
          <div style={{ maxWidth:1280, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
            <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
              <span style={{ fontFamily:J, fontSize:10, fontWeight:800, color:'var(--ism-amber)', letterSpacing:'.12em', textTransform:'uppercase', flexShrink:0 }}>THE REAL PROBLEM</span>
              <span style={{ width:1, height:18, background:'rgba(255,255,255,.2)', flexShrink:0 }} />
              <p style={{ fontFamily:J, fontSize:14, fontWeight:700, color:'#fff', margin:0 }}>
                Your SEO isn&apos;t failing.{' '}
                <span style={{ color:'var(--ism-amber)' }}>Your SEO strategy is stuck in 2018.</span>
              </p>
            </div>
            <p style={{ fontFamily:I, fontSize:13, color:'rgba(255,255,255,.55)', margin:0 }}>
              Search has changed. Most agencies haven&apos;t caught up.
            </p>
          </div>
        </div>

        {/* ══ 2. CLIENT RESULTS ════════════════════════════════════════════ */}
        <section id="seo-results" className="seo-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <Pill text="Client Results" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 6px' }}>
                Real clients. Real numbers.{' '}
                <span style={{ color:'var(--ism-amber)', fontStyle:'italic' }}>All verifiable.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                A sample of results we have delivered across industries and SEO channels.
              </p>
            </div>
            <div className="seo-proof-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {PROOF_CARDS.map((c,i)=>(
                <div key={i} style={{ background:'var(--color-bg-soft)', borderRadius:16, border:'1px solid var(--color-border)', padding:'24px', transition:'all .22s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
                >
                  {/* Top row */}
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
                    <div>
                      <div style={{ fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-navy)', marginBottom:3 }}>{c.client}</div>
                      <div style={{ fontFamily:I, fontSize:12, color:'var(--color-text-muted)' }}>{c.period}</div>
                    </div>
                    <div style={{ background:'rgba(30,77,195,.09)', border:'1px solid rgba(30,77,195,.15)', borderRadius:100, padding:'3px 12px', fontFamily:J, fontSize:10, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.06em', textTransform:'uppercase', whiteSpace:'nowrap' }}>{c.badge}</div>
                  </div>
                  {/* Metric */}
                  <div style={{ fontFamily:J, fontSize:'clamp(32px,4vw,48px)', fontWeight:900, color:'var(--color-primary)', lineHeight:1, marginBottom:2 }}>{c.metric}</div>
                  <div style={{ fontFamily:I, fontSize:13, color:'var(--color-text-muted)', marginBottom:18 }}>{c.metricLabel}</div>
                  {/* Stats 2×2 */}
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:18 }}>
                    {c.stats.map(([v,l])=>(
                      <div key={v} style={{ background:'#fff', borderRadius:8, padding:'10px 12px', border:'1px solid var(--color-border)' }}>
                        <div style={{ fontFamily:J, fontSize:15, fontWeight:800, color:'var(--color-navy)', lineHeight:1, marginBottom:3 }}>{v}</div>
                        <div style={{ fontFamily:I, fontSize:10, color:'var(--color-text-muted)' }}>{l}</div>
                      </div>
                    ))}
                  </div>
                  {/* Mini bar chart */}
                  <div style={{ display:'flex', alignItems:'flex-end', gap:2, height:36, borderTop:'1px solid var(--color-border)', paddingTop:8 }}>
                    {c.bars.map((h,j)=>(
                      <div key={j} style={{ flex:1, height:`${h}%`, borderRadius:'2px 2px 0 0', background: j===11 ? 'var(--ism-amber)' : 'var(--color-primary)', opacity: j===11 ? 1 : 0.3+j*0.06 }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 3. OLD VS NEW SEO ════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="2026 Reality" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                Search in 2026 is not the same game.
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Are you playing by the new rules?
              </p>
            </div>
            <div className="seo-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
              {/* OLD SEO — white/light */}
              <div style={{ background:'#fff', borderRadius:16, padding:32, border:'1px solid var(--color-border)', boxShadow:'0 4px 24px rgba(0,0,0,.05)' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24 }}>
                  <div style={{ width:32, height:32, borderRadius:8, background:'rgba(239,68,68,.10)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <i className="fa-solid fa-xmark" style={{ color:'#EF4444', fontSize:14 }} />
                  </div>
                  <span style={{ fontFamily:J, fontSize:16, fontWeight:800, color:'var(--color-navy)' }}>Old SEO <span style={{ color:'var(--color-text-muted)', fontWeight:400 }}>(dying)</span></span>
                </div>
                <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:14 }}>
                  {OLD_SEO.map((item,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.5 }}>
                      <i className="fa-solid fa-xmark" style={{ color:'#EF4444', fontSize:12, marginTop:3, flexShrink:0 }} />
                      <span style={{ textDecoration:'line-through', opacity:.7 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* NEW SEO — dark navy */}
              <div style={{ background:'var(--color-navy)', borderRadius:16, padding:32, boxShadow:'0 8px 32px rgba(0,35,83,.20)' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24 }}>
                  <div style={{ width:32, height:32, borderRadius:8, background:'rgba(34,197,94,.20)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <i className="fa-solid fa-check" style={{ color:'#22C55E', fontSize:14 }} />
                  </div>
                  <span style={{ fontFamily:J, fontSize:16, fontWeight:800, color:'#fff' }}>Modern SEO <span style={{ color:'rgba(255,255,255,.55)', fontWeight:400 }}>(what we do)</span></span>
                </div>
                <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:14 }}>
                  {NEW_SEO.map((item,i)=>(
                    <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, fontFamily:I, fontSize:15, color:'rgba(255,255,255,.88)', lineHeight:1.5 }}>
                      <i className="fa-solid fa-check" style={{ color:'#22C55E', fontSize:12, marginTop:3, flexShrink:0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

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
            <div className="seo-svc-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
              {SERVICES.map((s,i)=>(
                <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 140px', background:'#fff', borderRadius:16, border:'1.5px solid #E8EAF0', overflow:'hidden', boxShadow:'0 2px 12px rgba(0,0,0,.04)', transition:'all .22s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-3px)'; el.style.boxShadow='0 12px 40px rgba(30,77,195,.10)'; el.style.borderColor='rgba(30,77,195,.25)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow='0 2px 12px rgba(0,0,0,.04)'; el.style.borderColor='#E8EAF0'; }}
                >
                  {/* Text */}
                  <div style={{ padding:'28px 24px 28px' }}>
                    <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.09em', textTransform:'uppercase', marginBottom:10 }}>
                      {s.num} — {s.cat}
                    </div>
                    <h3 style={{ fontFamily:J, fontSize:18, fontWeight:800, color:'var(--color-navy)', margin:'0 0 10px', lineHeight:1.25 }}>{s.title}</h3>
                    <p style={{ fontFamily:I, fontSize:13, color:'var(--color-text-muted)', lineHeight:1.72, margin:'0 0 18px' }}>{s.desc}</p>
                    {/* Tag chips */}
                    <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
                      {s.tags.map((tag,ti)=>(
                        <span key={ti} style={{ fontFamily:I, fontSize:11, fontWeight:500, color:'var(--color-text-muted)', background:'var(--color-bg-soft)', border:'1px solid var(--color-border)', borderRadius:100, padding:'3px 10px' }}>{tag}</span>
                      ))}
                    </div>
                    <a href={s.href} style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', letterSpacing:'.04em', transition:'gap .18s' }}
                      onMouseEnter={e=>(e.currentTarget.style.gap='10px')}
                      onMouseLeave={e=>(e.currentTarget.style.gap='6px')}
                    >
                      Learn more <i className="fa-solid fa-arrow-right" style={{ fontSize:10 }} />
                    </a>
                  </div>
                  {/* Illustration — light bg, simple artwork */}
                  <div className="seo-svc-illus" style={{ background:'#F7F8FB', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px 16px', borderLeft:'1.5px solid #E8EAF0' }}>
                    {i === 0 && (
                      /* Technical SEO — horizontal lines like a site structure */
                      <div style={{ width:'100%', display:'flex', flexDirection:'column', gap:8 }}>
                        {[100,80,90,55,70,40].map((w,li)=>(
                          <div key={li} style={{ height:6, width:`${w}%`, borderRadius:3, background: li===5 ? 'var(--ism-amber)' : li%2===0 ? 'var(--color-primary)' : '#CBD5E1', opacity: li===5 ? 1 : 0.5+li*0.08 }} />
                        ))}
                      </div>
                    )}
                    {i === 1 && (
                      /* On-Page SEO — SERP result card */
                      <div style={{ width:'100%', background:'#fff', borderRadius:8, border:'1px solid #E2E8F0', padding:'10px 12px', boxShadow:'0 2px 8px rgba(0,0,0,.06)' }}>
                        <div style={{ display:'inline-block', background:'var(--ism-amber)', borderRadius:4, padding:'2px 8px', fontFamily:J, fontSize:9, fontWeight:700, color:'var(--color-navy)', marginBottom:8 }}>#1 RESULT</div>
                        <div style={{ height:5, borderRadius:3, background:'var(--color-primary)', marginBottom:5, width:'90%' }} />
                        <div style={{ height:4, borderRadius:3, background:'#CBD5E1', marginBottom:3, width:'70%' }} />
                        <div style={{ height:4, borderRadius:3, background:'#CBD5E1', width:'85%', marginBottom:10 }} />
                        <div style={{ fontFamily:I, fontSize:9, color:'#94A3B8' }}>#2</div>
                        <div style={{ height:4, borderRadius:3, background:'#E2E8F0', width:'80%', marginTop:4 }} />
                      </div>
                    )}
                    {i === 2 && (
                      /* Link Building — node network */
                      <svg width="110" height="90" viewBox="0 0 110 90">
                        <line x1="55" y1="45" x2="20" y2="18" stroke="#CBD5E1" strokeWidth="1.5"/>
                        <line x1="55" y1="45" x2="88" y2="20" stroke="#CBD5E1" strokeWidth="1.5"/>
                        <line x1="55" y1="45" x2="15" y2="65" stroke="#CBD5E1" strokeWidth="1.5"/>
                        <line x1="55" y1="45" x2="90" y2="68" stroke="#CBD5E1" strokeWidth="1.5"/>
                        <line x1="55" y1="45" x2="55" y2="82" stroke="#CBD5E1" strokeWidth="1.5"/>
                        <circle cx="20" cy="18" r="6" fill="#1E4DC3" opacity="0.5"/>
                        <circle cx="88" cy="20" r="6" fill="#1E4DC3" opacity="0.5"/>
                        <circle cx="15" cy="65" r="6" fill="#1E4DC3" opacity="0.5"/>
                        <circle cx="90" cy="68" r="6" fill="#1E4DC3" opacity="0.5"/>
                        <circle cx="55" cy="82" r="6" fill="#1E4DC3" opacity="0.5"/>
                        <circle cx="55" cy="45" r="12" fill="#FFB000"/>
                      </svg>
                    )}
                    {i === 3 && (
                      /* Local SEO — map pin */
                      <div style={{ width:80, height:80, background:'#fff', borderRadius:12, border:'1px solid #E2E8F0', display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(0,0,0,.06)', position:'relative' }}>
                        <div style={{ width:36, height:36, borderRadius:'50% 50% 50% 0', background:'var(--ism-amber)', transform:'rotate(-45deg)', boxShadow:'0 4px 12px rgba(255,176,0,.4)', position:'absolute', top:'50%', left:'50%', marginTop:-24, marginLeft:-18 }}>
                          <div style={{ width:12, height:12, borderRadius:'50%', background:'#fff', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }} />
                        </div>
                      </div>
                    )}
                    {i === 4 && (
                      /* AEO — dark screen with lines */
                      <div style={{ width:'100%', background:'var(--color-navy)', borderRadius:10, padding:'14px 14px', boxShadow:'0 4px 16px rgba(0,35,83,.25)' }}>
                        <div style={{ display:'flex', alignItems:'center', gap:5, marginBottom:10 }}>
                          <div style={{ width:8, height:8, borderRadius:'50%', background:'rgba(255,255,255,.2)' }} />
                          <div style={{ height:4, borderRadius:2, background:'rgba(255,255,255,.15)', flex:1 }} />
                        </div>
                        {[90,70,80].map((w,li)=>(
                          <div key={li} style={{ height:5, borderRadius:3, background: li===0 ? 'var(--ism-amber)' : 'rgba(255,255,255,.15)', width:`${w}%`, marginBottom:li<2 ? 7 : 0 }} />
                        ))}
                      </div>
                    )}
                    {i === 5 && (
                      /* E-Commerce — bar chart */
                      <div style={{ width:'100%', display:'flex', alignItems:'flex-end', gap:5, height:80, position:'relative' }}>
                        {[30,44,38,52,60,75,58,82,70,100].map((h,bi)=>(
                          <div key={bi} style={{ flex:1, height:`${h}%`, borderRadius:'3px 3px 0 0', background: bi>=8 ? 'var(--ism-amber)' : 'var(--color-primary)', opacity: bi>=8 ? 1 : 0.3+bi*0.07 }} />
                        ))}
                        <div style={{ position:'absolute', bottom:-20, right:0, fontFamily:J, fontSize:10, fontWeight:700, color:'var(--ism-amber)' }}>+650% conversions</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                  40% of Gen Z starts product searches on TikTok or AI tools. ChatGPT has 100M+ daily users. Google AI Overviews appear in 15%+ of all searches. If you&apos;re not visible in these surfaces, you&apos;re losing customers you never knew you had.
                </p>

                {/* 3 feature items */}
                <div style={{ display:'flex', flexDirection:'column', gap:22, marginBottom:36 }}>
                  {[
                    {
                      color:'#E85D75', icon:'fa-solid fa-robot',
                      title:'Answer Engine Optimisation (AEO)',
                      desc:"Get cited as the answer in Google AI Overviews, featured snippets, and voice responses. We structure pages so AI extracts your answer first.",
                      stat:'5/6 ISureMedia clients in Google AI Overviews',
                    },
                    {
                      color:'#F59E0B', icon:'fa-solid fa-bolt',
                      title:'Generative Engine Optimisation (GEO)',
                      desc:'Optimise for ChatGPT, Perplexity, Gemini, and Bing Copilot. When users ask AI about your industry, your brand should be the citation.',
                      stat:'3x brand citation rate after GEO strategy',
                    },
                    {
                      color:'#A78BFA', icon:'fa-solid fa-microphone',
                      title:'Voice Search Optimisation',
                      desc:'Siri, Google Assistant, and Alexa pull from a single source. We engineer that source to be your website.',
                      stat:'27% of global searches are now voice-based',
                    },
                  ].map((item,i)=>(
                    <div key={i} style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
                      <div style={{ width:36, height:36, borderRadius:10, background:`${item.color}22`, border:`1px solid ${item.color}44`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>
                        <i className={item.icon} style={{ fontSize:14, color:item.color }} />
                      </div>
                      <div>
                        <div style={{ fontFamily:J, fontSize:15, fontWeight:800, color:'#fff', marginBottom:5 }}>{item.title}</div>
                        <div style={{ fontFamily:I, fontSize:13, color:'rgba(255,255,255,.60)', lineHeight:1.65, marginBottom:6 }}>{item.desc}</div>
                        <div style={{ fontFamily:J, fontSize:12, fontWeight:700, color:'var(--ism-amber)', letterSpacing:'.03em' }}>{item.stat}</div>
                      </div>
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

              {/* Right — Google Search + AI Overview mockup */}
              <div>
                <div style={{ background:'#fff', borderRadius:16, boxShadow:'0 24px 72px rgba(0,0,0,.40)', overflow:'hidden' }}>
                  {/* Google search bar */}
                  <div style={{ padding:'16px 20px', borderBottom:'1px solid #E8EAED' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                      <div style={{ display:'flex', gap:1, flexShrink:0 }}>
                        {['#4285F4','#EA4335','#FBBC05','#34A853'].map((c,ci)=>(
                          <span key={ci} style={{ fontFamily:J, fontSize:16, fontWeight:900, color:c, lineHeight:1 }}>
                            {['G','o','o','g'][ci]}
                          </span>
                        ))}
                        <span style={{ fontFamily:J, fontSize:16, fontWeight:900, color:'#4285F4', lineHeight:1 }}>le</span>
                      </div>
                      <div style={{ flex:1, background:'#F1F3F4', borderRadius:24, padding:'8px 16px', fontFamily:I, fontSize:12, color:'#5F6368', border:'1px solid #DADCE0' }}>
                        professional dog trainer in utah who offers online classes
                      </div>
                    </div>
                  </div>
                  {/* AI Overview */}
                  <div style={{ padding:'14px 20px 8px' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:6, marginBottom:10 }}>
                      <span style={{ color:'#1A73E8', fontSize:13 }}>✦</span>
                      <span style={{ fontFamily:I, fontSize:12, color:'#1A73E8', fontWeight:500 }}>AI Overview</span>
                      <span style={{ fontFamily:I, fontSize:12, color:'#5F6368' }}>· Generated by Google</span>
                    </div>
                    {/* Bordered AI answer */}
                    <div style={{ borderLeft:'3px solid #FBBC05', paddingLeft:12, marginBottom:12 }}>
                      <p style={{ fontFamily:I, fontSize:12, color:'#3C4043', lineHeight:1.65, margin:0 }}>
                        <span style={{ background:'rgba(26,115,232,.10)', borderRadius:3, padding:'0 3px', color:'#1A73E8', fontWeight:600 }}>Cornerstone Dog Training</span>
                        {' '}in Salt Lake City, Utah offers certified professional dog training with both{' '}
                        <span style={{ background:'rgba(26,115,232,.10)', borderRadius:3, padding:'0 3px', color:'#1A73E8', fontWeight:600 }}>in-person</span>
                        {' '}and{' '}
                        <span style={{ background:'rgba(26,115,232,.10)', borderRadius:3, padding:'0 3px', color:'#1A73E8', fontWeight:600 }}>online</span>
                        {' '}obedience programs. Their trainers work with dogs of all breeds and ages and have been highly rated for results-focused, humane training methods...
                      </p>
                    </div>
                    {/* Client badge row */}
                    <div style={{ display:'flex', alignItems:'center', gap:8, padding:'8px 10px', background:'#F8F9FA', borderRadius:8, marginBottom:12 }}>
                      <div style={{ width:22, height:22, borderRadius:6, background:'var(--color-primary)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <span style={{ fontFamily:J, fontSize:9, fontWeight:900, color:'#fff' }}>CD</span>
                      </div>
                      <span style={{ fontFamily:I, fontSize:11, color:'#3C4043', flex:1 }}>cornerstonedogtraining.com</span>
                      <span style={{ fontFamily:J, fontSize:10, fontWeight:700, color:'#0D6B4E', background:'rgba(13,107,78,.10)', borderRadius:100, padding:'2px 8px' }}>✓ ISureMedia Client</span>
                    </div>
                    {/* 4 client tiles */}
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, paddingBottom:4 }}>
                      {[
                        { name:'Cornerstone Dog Training', stat:'2 AI Overviews · Active' },
                        { name:'Garden Solutions NZ',      stat:'Map Pack + AIO · Active' },
                        { name:'Geomatrix India',          stat:'1 AI Overview · Active'  },
                        { name:'GoHighLevel Expert',       stat:'1 AI Overview · Active'  },
                      ].map((client,ci)=>(
                        <div key={ci} style={{ background:'#fff', border:'1px solid #E8EAED', borderRadius:8, padding:'10px 12px' }}>
                          <div style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'#3C4043', marginBottom:3 }}>{client.name}</div>
                          <div style={{ fontFamily:I, fontSize:10, color:'#0D6B4E', fontWeight:600 }}>{client.stat}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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

        {/* ══ 7. STATS BAR ════════════════════════════════════════════════ */}
        <section style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'64px 0' }}>
          <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
            <div className="seo-stats-row" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
              {[
                { num:'150+',  label:'Clients Served',     sub:'Across 20+ industries, 6 countries'          },
                { num:'+225%', label:'Avg Traffic Growth', sub:'Across all active SEO engagements'            },
                { num:'7,000+',label:'Backlinks Built',    sub:'Zero penalties. Ever.'                        },
                { num:'100%',  label:'Page 1 Rankings',    sub:'36 of 39 target keywords in Top 3'            },
              ].map((s,i)=>(
                <div key={i} style={{ padding:'0 32px', textAlign:'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,.18)' : 'none' }}>
                  <div style={{ fontFamily:J, fontSize:'clamp(34px,4vw,56px)', fontWeight:900, color:'var(--ism-amber)', lineHeight:1, marginBottom:10 }}>{s.num}</div>
                  <div style={{ fontFamily:J, fontSize:14, fontWeight:700, color:'#fff', marginBottom:5 }}>{s.label}</div>
                  <div style={{ fontFamily:I, fontSize:12, color:'rgba(255,255,255,.55)', lineHeight:1.4 }}>{s.sub}</div>
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

        {/* ══ 10. INDUSTRIES ══════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div className="seo-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>
              <div>
                <Pill text="Industry Expertise" />
                <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 8px', lineHeight:1.12 }}>
                  We know your niche.
                </h2>
                <div style={{ fontFamily:J, fontSize:'clamp(22px,2.5vw,36px)', fontWeight:900, color:'var(--ism-amber)', letterSpacing:'-0.5px', marginBottom:20, lineHeight:1.12 }}>
                  We know what ranks in it.
                </div>
                <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.78, margin:'0 0 20px' }}>
                  We have run SEO campaigns across 12+ industries. We know what Google rewards in your space, which competitors are vulnerable, and how to build topical authority fast.
                </p>
                <p style={{ fontFamily:I, fontSize:15, color:'var(--color-text-muted)', lineHeight:1.78, margin:0 }}>
                  No learning curve. We hit the ground running with an industry-specific keyword strategy from day one.
                </p>
              </div>
              <div>
                <div className="seo-niche-grid" style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
                  {INDUSTRIES.map((ind,i)=>(
                    <div key={i} style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#fff', border:'1px solid var(--color-border)', borderRadius:100, padding:'10px 18px', transition:'all .18s', cursor:'default' }}
                      onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor='var(--color-primary)'; el.style.background='var(--ism-blue-50)'; }}
                      onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.borderColor='var(--color-border)'; el.style.background='#fff'; }}
                    >
                      <i className="fa-solid fa-check-circle" style={{ fontSize:11, color:'var(--ism-amber)' }} />
                      <span style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-navy)' }}>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 11. TESTIMONIALS ════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'100px 0', background:'#fff' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:60 }}>
              <Pill text="Reviews" />
              <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', margin:'0 0 10px' }}>
                Real reviews from{' '}
                <span style={{ color:'var(--ism-amber)' }}>real clients.</span>
              </h2>
              <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Unscripted feedback from businesses we have helped rank and grow.
              </p>
            </div>
            <div className="seo-review-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {TESTIMONIALS.map((t,i)=>(
                <div key={i} style={{ background:'var(--color-bg-soft)', borderRadius:16, border:'1px solid var(--color-border)', padding:'36px 30px', transition:'all .22s' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform='translateY(-4px)'; el.style.boxShadow='0 16px 48px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.transform=''; el.style.boxShadow=''; }}
                >
                  <div style={{ display:'flex', gap:3, marginBottom:18 }}>
                    {[1,2,3,4,5].map(s=><i key={s} className="fa-solid fa-star" style={{ fontSize:13, color:'var(--ism-amber)' }} />)}
                  </div>
                  <p style={{ fontFamily:I, fontSize:15, color:'var(--color-navy)', lineHeight:1.75, margin:'0 0 28px', fontStyle:'italic' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                    <div style={{ width:44, height:44, borderRadius:'50%', background:'transparent', border:'2px solid var(--ism-amber)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <span style={{ fontFamily:J, fontSize:14, fontWeight:800, color:'var(--ism-amber)' }}>{t.initials}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', marginBottom:2 }}>{t.name}</div>
                      <div style={{ fontFamily:I, fontSize:12, color:'var(--color-text-muted)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 12. TOOLS STACK ═════════════════════════════════════════════ */}
        <section className="seo-section" style={{ padding:'72px 0', background:'var(--color-bg-soft)' }}>
          <div style={{ maxWidth:960, margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <p style={{ fontFamily:J, fontSize:'clamp(14px,1.5vw,17px)', fontWeight:700, color:'var(--color-text-muted)', letterSpacing:'.04em', marginBottom:32, textTransform:'uppercase' }}>
              The SEO stack we use to deliver results.
            </p>
            <div className="seo-tools-row" style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
              {TOOLS.map((tool,i)=>(
                <div key={i} style={{ display:'inline-flex', alignItems:'center', gap:8, background:'var(--ism-blue-50)', border:'1px solid var(--ism-blue-100)', borderRadius:100, padding:'10px 20px', transition:'all .18s', cursor:'default' }}
                  onMouseEnter={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.background='var(--color-primary)'; el.style.borderColor='var(--color-primary)'; const sp=el.querySelector('span') as HTMLElement; if(sp) sp.style.color='#fff'; }}
                  onMouseLeave={e=>{ const el=e.currentTarget as HTMLDivElement; el.style.background='var(--ism-blue-50)'; el.style.borderColor='var(--ism-blue-100)'; const sp=el.querySelector('span') as HTMLElement; if(sp) sp.style.color='var(--color-primary)'; }}
                >
                  <span style={{ fontFamily:J, fontSize:13, fontWeight:700, color:'var(--color-primary)', transition:'color .18s' }}>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 13. FAQ ══════════════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ 14. BOTTOM CTA ══════════════════════════════════════════════ */}
        <section className="seo-section" style={{ background:'var(--color-navy)', padding:'100px 0', textAlign:'center' }}>
          <div style={{ maxWidth:780, margin:'0 auto', padding:'0 24px' }}>
            <Pill text="Get Started" amber />
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,4vw,52px)', fontWeight:900, color:'#fff', letterSpacing:'-1px', margin:'0 0 18px', lineHeight:1.1 }}>
              See exactly what&apos;s holding<br className="seo-cta-br" />your rankings back — for free.
            </h2>
            <p style={{ fontFamily:I, fontSize:17, color:'rgba(255,255,255,.72)', lineHeight:1.78, margin:'0 0 40px', maxWidth:520, marginLeft:'auto', marginRight:'auto' }}>
              We&apos;ll analyse your site, identify the biggest ranking blockers, and show you a clear path to page 1 — at zero cost or obligation.
            </p>
            <a href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'17px 40px', borderRadius:10, fontFamily:J, fontSize:15, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 8px 28px rgba(255,176,0,.40)', transition:'all .18s', marginBottom:18 }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 14px 40px rgba(255,176,0,.55)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 28px rgba(255,176,0,.40)'; }}
            >
              Get Started →
            </a>
            <p style={{ fontFamily:I, fontSize:13, color:'rgba(255,255,255,.40)', margin:0 }}>
              No lock-in. No hard sell. Just clarity.
            </p>
          </div>
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
