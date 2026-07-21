'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── TYPES ────────────────────────────────────────────────────────────── */

interface Study {
  id: string;
  services: string[];
  industry: string;
  tag1: string;
  tag2: string;
  location: string;
  stat: string;
  statColor: string;
  headline: string;
  context: string;
  before: string;
  after: string;
  metricLabel: string;
  timeline: string;
  href: string;
  metrics?: { val: string; label: string }[];
}

/* ── DATA ─────────────────────────────────────────────────────────────── */

const SERVICE_FILTERS = ['All', 'SEO', 'PPC', 'Automation', 'White Label', 'Web Dev'];
const INDUSTRY_FILTERS = ['All', 'HVAC', 'E-Commerce', 'SaaS', 'Agencies', 'Law', 'Real Estate', 'Coaching'];

const SVC_STYLE: Record<string, { color: string; bg: string }> = {
  seo:           { color: 'var(--color-primary)', bg: 'rgba(30,77,195,.09)' },
  ppc:           { color: '#EA580C',              bg: 'rgba(234,88,12,.09)' },
  automation:    { color: '#16A34A',              bg: 'rgba(22,163,74,.09)' },
  'white-label': { color: '#7C3AED',              bg: 'rgba(124,58,237,.09)' },
  'web-dev':     { color: '#0891B2',              bg: 'rgba(8,145,178,.09)' },
};

const FEATURED: Study = {
  id: 'hvac-gohighlevel',
  services: ['automation', 'ppc'],
  industry: 'hvac',
  tag1: 'Home Services / HVAC',
  tag2: 'GoHighLevel + PPC',
  location: 'USA',
  stat: '+340%',
  statColor: '#16A34A',
  headline: '340% More Booked Jobs in 90 Days Without Increasing Ad Spend',
  context: 'An HVAC company was spending on Google Ads but converting poorly because follow-up was taking hours. We rebuilt the entire lead response system — same ad budget, triple the booked jobs.',
  before: '3+ hr response',
  after: '<90 sec response',
  metricLabel: 'lead response time',
  timeline: '90 days',
  href: '/case-studies/hvac-gohighlevel-automation',
  metrics: [
    { val: '+340%', label: 'Booked jobs' },
    { val: '<90 sec', label: 'Avg lead response' },
    { val: '$0', label: 'Extra ad spend' },
  ],
};

const STUDIES: Study[] = [
  {
    id: 'ecommerce-seo',
    services: ['seo'],
    industry: 'e-commerce',
    tag1: 'E-Commerce',
    tag2: 'Technical SEO + Content',
    location: 'UK',
    stat: '+218%',
    statColor: 'var(--color-primary)',
    headline: '218% More Organic Traffic in 8 Months',
    context: '18 months of flat organic traffic reversed with technical fixes and a topical content cluster strategy.',
    before: 'Flat 18 months',
    after: '+218% organic',
    metricLabel: 'organic traffic YoY',
    timeline: '8 months',
    href: '/case-studies/ecommerce-seo-organic-traffic',
  },
  {
    id: 'saas-linkedin',
    services: ['ppc'],
    industry: 'saas',
    tag1: 'SaaS',
    tag2: 'LinkedIn Ads + Google Search',
    location: 'USA',
    stat: '-61%',
    statColor: '#EA580C',
    headline: 'Cost Per Demo Down 61% in 90 Days',
    context: '$440+ cost per demo with the wrong audiences — rebuilt targeting, copy, and landing pages.',
    before: '$440+ per demo',
    after: '$158 per demo',
    metricLabel: 'cost per demo',
    timeline: '90 days',
    href: '/case-studies/saas-linkedin-ads-cost-per-demo',
  },
  {
    id: 'white-label-agency',
    services: ['white-label', 'seo', 'ppc'],
    industry: 'agencies',
    tag1: 'UK Digital Agency',
    tag2: 'White Label SEO + PPC',
    location: 'UK',
    stat: '12→31',
    statColor: '#7C3AED',
    headline: 'Agency Scaled From 12 to 31 Active Clients in 8 Months',
    context: 'Capped at 12 clients with a full team — ISM became their invisible white label delivery engine.',
    before: '12 active clients',
    after: '31 active clients',
    metricLabel: 'active client accounts',
    timeline: '8 months',
    href: '/case-studies/white-label-agency-scaling',
  },
  {
    id: 'coaching-ghl',
    services: ['automation'],
    industry: 'coaching',
    tag1: 'Coaching Business',
    tag2: 'GoHighLevel + Lead Nurture',
    location: 'USA',
    stat: '+72%',
    statColor: '#16A34A',
    headline: 'Discovery Call Bookings Up 72% in 60 Days',
    context: 'Large email list with poor conversion to paid programmes — fixed with nurture sequences and an AI chatbot.',
    before: 'Low call conversion',
    after: '+72% discovery calls',
    metricLabel: 'conversion to call',
    timeline: '60 days',
    href: '/case-studies/coaching-gohighlevel-lead-nurture',
  },
  {
    id: 'law-firm-seo',
    services: ['seo'],
    industry: 'law',
    tag1: 'Law Firm',
    tag2: 'Local SEO',
    location: 'USA',
    stat: '+180%',
    statColor: 'var(--color-primary)',
    headline: 'Page 3 to Google Map Pack in 5 Months',
    context: 'Competitive US legal market with no map pack visibility and a pipeline entirely dependent on referrals.',
    before: 'Page 3, no map pack',
    after: 'Top 3 map pack',
    metricLabel: 'organic leads +180%',
    timeline: '5 months',
    href: '/case-studies/law-firm-local-seo-map-pack',
  },
  {
    id: 'real-estate-ppc',
    services: ['ppc'],
    industry: 'real-estate',
    tag1: 'Real Estate',
    tag2: 'PPC + Landing Pages',
    location: 'USA',
    stat: '-53%',
    statColor: '#EA580C',
    headline: 'Cost Per Qualified Lead Down 53% in 60 Days',
    context: 'High CPL and low-quality leads from Google Ads — rebuilt targeting and built industry-specific landing pages.',
    before: 'High CPL',
    after: '-53% cost per lead',
    metricLabel: 'cost per qualified lead',
    timeline: '60 days',
    href: '/case-studies/real-estate-ppc-landing-pages',
  },
];

/* ── HELPERS ──────────────────────────────────────────────────────────── */

function norm(s: string): string {
  return s.toLowerCase().replace(/[\s]+/g, '-');
}

function matchesFilters(study: Study, svc: string, ind: string): boolean {
  const svcKey = norm(svc);
  const indKey = norm(ind);
  const svcMatch = svc === 'All' || study.services.includes(svcKey);
  const indMatch = ind === 'All' || study.industry === indKey;
  return svcMatch && indMatch;
}

/* ── COMPONENTS ───────────────────────────────────────────────────────── */


function ServiceTag({ svc }: { svc: string }) {
  const style = SVC_STYLE[svc] ?? { color:'var(--color-text-muted)', bg:'var(--color-bg-soft)' };
  const label = svc === 'white-label' ? 'White Label' : svc === 'web-dev' ? 'Web Dev' : svc.toUpperCase();
  return (
    <span style={{ padding:'3px 10px', borderRadius:6, fontFamily:J, fontSize:11, fontWeight:700, color:style.color, background:style.bg, border:`1px solid ${style.color}30` }}>{label}</span>
  );
}

function StudyCard({ study }: { study: Study }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', padding:'28px 28px 24px', display:'flex', flexDirection:'column', gap:0, transition:'transform .22s, box-shadow .22s', transform: hovered ? 'translateY(-4px)' : '', boxShadow: hovered ? '0 16px 40px rgba(30,77,195,.10)' : '0 2px 12px rgba(0,0,0,.04)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tags */}
      <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:6, marginBottom:16 }}>
        <span style={{ fontFamily:I, fontSize:12, fontWeight:600, color:'var(--color-text-muted)' }}>{study.tag1}</span>
        <span style={{ color:'var(--color-border)', fontSize:12 }}>·</span>
        <div style={{ display:'flex', gap:4, flexWrap:'wrap' }}>
          {study.services.map(s => <ServiceTag key={s} svc={s} />)}
        </div>
        <span style={{ fontFamily:I, fontSize:11, color:'var(--color-text-muted)', marginLeft:2 }}>{study.location}</span>
      </div>

      {/* Big stat */}
      <div style={{ fontFamily:J, fontWeight:900, fontSize:'clamp(36px,3vw,52px)', color:study.statColor, lineHeight:1, letterSpacing:'-1.5px', marginBottom:8 }}>{study.stat}</div>

      {/* Headline */}
      <h3 style={{ margin:'0 0 10px', fontFamily:J, fontWeight:900, fontSize:'clamp(16px,1.4vw,20px)', color:'var(--color-navy)', lineHeight:1.25, letterSpacing:'-0.3px' }}>{study.headline}</h3>

      {/* Context */}
      <p style={{ margin:'0 0 20px', fontFamily:I, fontSize:13, color:'var(--color-text-muted)', lineHeight:1.65, flex:1 }}>{study.context}</p>

      {/* Metric strip */}
      <div style={{ display:'flex', alignItems:'center', gap:12, padding:'14px 16px', background:'var(--color-bg-soft)', borderRadius:10, border:'1px solid var(--color-border)', marginBottom:18, flexWrap:'wrap' }}>
        <div style={{ fontFamily:I, fontSize:12, color:'var(--color-text-muted)' }}>
          <span style={{ fontWeight:600, color:'var(--color-navy)' }}>{study.before}</span>
          {' '}<span style={{ color:'var(--color-text-muted)' }}>→</span>{' '}
          <span style={{ fontWeight:700, color:study.statColor }}>{study.after}</span>
          <span style={{ color:'var(--color-text-muted)', marginLeft:4 }}>{study.metricLabel}</span>
        </div>
        <div style={{ marginLeft:'auto', fontFamily:I, fontSize:11, fontWeight:600, color:'var(--color-text-muted)', display:'flex', alignItems:'center', gap:4, flexShrink:0 }}>
          <i className="fa-regular fa-clock" style={{ fontSize:11 }} />
          {study.timeline}
        </div>
      </div>

      {/* CTA */}
      <a href={study.href} style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:13, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', fontFamily:J, transition:'gap .18s' }}
        onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.gap='10px'; }}
        onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.gap='6px'; }}
      >
        Read Full Case Study →
      </a>
    </div>
  );
}

/* ══ PAGE ═════════════════════════════════════════════════════════════════ */
export default function CaseStudiesPage() {
  const [activeSvc, setActiveSvc] = useState('All');
  const [activeInd, setActiveInd] = useState('All');

  const featuredVisible = matchesFilters(FEATURED, activeSvc, activeInd);

  const filtered = useMemo(
    () => STUDIES.filter(s => matchesFilters(s, activeSvc, activeInd)),
    [activeSvc, activeInd]
  );

  const totalShowing = filtered.length + (featuredVisible ? 1 : 0);

  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. INTRO + FILTERS ═══════════════════════════════════════════ */}
        <section style={{ background:'#fff', padding:'72px 0 56px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-10%', right:'-5%', width:500, height:500, background:'radial-gradient(circle,rgba(30,77,195,.05) 0%,transparent 65%)', pointerEvents:'none' }} />

          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            {/* Breadcrumb */}
            <div style={{ display:'flex', alignItems:'center', gap:7, fontFamily:I, fontSize:13, color:'var(--color-text-muted)', marginBottom:24 }}>
              <a href="/" style={{ color:'var(--color-text-muted)', textDecoration:'none', transition:'color .15s' }}
                onMouseEnter={e=>(e.currentTarget.style.color='var(--color-primary)')}
                onMouseLeave={e=>(e.currentTarget.style.color='var(--color-text-muted)')}>Home</a>
              <i className="fa-solid fa-chevron-right" style={{ fontSize:9, opacity:.5 }} />
              <span style={{ color:'var(--color-primary)', fontWeight:600 }}>Case Studies</span>
            </div>

            <div style={{ maxWidth:640, marginBottom:40 }}>
              <h1 style={{ fontFamily:J, fontWeight:900, fontSize:'clamp(32px,4vw,56px)', color:'var(--color-navy)', letterSpacing:'-1.5px', lineHeight:1.05, margin:'0 0 16px' }}>
                Real Campaigns.<br />Documented Results.
              </h1>
              <p style={{ fontFamily:I, fontSize:17, color:'var(--color-text-muted)', lineHeight:1.75, margin:0 }}>
                Filter by service or industry to find the most relevant example for your situation.
              </p>
            </div>

            {/* Filter rows */}
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {/* Service filter */}
              <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
                <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-text-muted)', letterSpacing:'.07em', textTransform:'uppercase', marginRight:4, flexShrink:0 }}>Service:</span>
                {SERVICE_FILTERS.map(f => (
                  <button key={f} onClick={() => setActiveSvc(f)}
                    style={{ padding:'7px 16px', borderRadius:100, fontFamily:J, fontSize:12, fontWeight:700, cursor:'pointer', transition:'all .18s', border: activeSvc === f ? '1.5px solid var(--color-primary)' : '1.5px solid var(--color-border)', background: activeSvc === f ? 'var(--color-primary)' : '#fff', color: activeSvc === f ? '#fff' : 'var(--color-text-muted)' }}>
                    {f}
                  </button>
                ))}
              </div>
              {/* Industry filter */}
              <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
                <span style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-text-muted)', letterSpacing:'.07em', textTransform:'uppercase', marginRight:4, flexShrink:0 }}>Industry:</span>
                {INDUSTRY_FILTERS.map(f => (
                  <button key={f} onClick={() => setActiveInd(f)}
                    style={{ padding:'7px 16px', borderRadius:100, fontFamily:J, fontSize:12, fontWeight:700, cursor:'pointer', transition:'all .18s', border: activeInd === f ? '1.5px solid var(--color-primary)' : '1.5px solid var(--color-border)', background: activeInd === f ? 'var(--color-primary)' : '#fff', color: activeInd === f ? '#fff' : 'var(--color-text-muted)' }}>
                    {f}
                  </button>
                ))}
              </div>

              {/* Results count */}
              {(activeSvc !== 'All' || activeInd !== 'All') && (
                <div style={{ fontFamily:I, fontSize:13, color:'var(--color-text-muted)', marginTop:4, display:'flex', alignItems:'center', gap:8 }}>
                  <i className="fa-solid fa-filter" style={{ fontSize:11, color:'var(--color-primary)' }} />
                  {totalShowing === 0
                    ? 'No results match this filter combination.'
                    : `Showing ${totalShowing} case ${totalShowing === 1 ? 'study' : 'studies'}`}
                  <button onClick={() => { setActiveSvc('All'); setActiveInd('All'); }}
                    style={{ fontFamily:J, fontSize:11, fontWeight:700, color:'var(--color-primary)', background:'none', border:'none', cursor:'pointer', textDecoration:'underline', padding:0 }}>
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ══ 2. FEATURED CASE STUDY ═══════════════════════════════════════ */}
        {featuredVisible && (
          <section style={{ background:'var(--color-bg-soft)', padding:'0 0 48px' }}>
            <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
              <div className="cs-featured" style={{ background:'var(--color-navy)', borderRadius:20, padding:'40px 40px', display:'grid', gridTemplateColumns:'1fr auto auto', gap:40, alignItems:'center', boxShadow:'0 20px 60px rgba(0,35,83,.18)', position:'relative', overflow:'hidden' }}>
                {/* Radial decorator */}
                <div style={{ position:'absolute', top:'-20%', right:'20%', width:400, height:400, background:'radial-gradient(circle,rgba(30,77,195,.20) 0%,transparent 65%)', pointerEvents:'none' }} />

                {/* LEFT: tags + headline + context */}
                <div style={{ position:'relative', minWidth:0 }}>
                  <div style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:8, marginBottom:16 }}>
                    <span style={{ padding:'4px 12px', borderRadius:100, fontFamily:I, fontSize:11, fontWeight:700, color:'rgba(255,255,255,.60)', background:'rgba(255,255,255,.08)', border:'1px solid rgba(255,255,255,.12)' }}>{FEATURED.tag1}</span>
                    <span style={{ color:'rgba(255,255,255,.25)', fontSize:12 }}>·</span>
                    {FEATURED.services.map(s => {
                      const st = SVC_STYLE[s] ?? {};
                      return <span key={s} style={{ padding:'3px 10px', borderRadius:6, fontFamily:J, fontSize:11, fontWeight:700, color:st.color ?? '#fff', background: `${st.color ?? '#fff'}18` }}>{s === 'automation' ? 'AUTOMATION' : s.toUpperCase()}</span>;
                    })}
                    <span style={{ fontFamily:I, fontSize:11, color:'rgba(255,255,255,.40)' }}>{FEATURED.location}</span>
                  </div>

                  <div style={{ fontFamily:J, fontSize:48, fontWeight:900, color:'var(--ism-amber)', lineHeight:1, letterSpacing:'-2px', marginBottom:12 }}>{FEATURED.stat}</div>
                  <h2 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:900, fontSize:'clamp(18px,1.8vw,26px)', color:'#fff', lineHeight:1.25, letterSpacing:'-0.4px' }}>{FEATURED.headline}</h2>
                  <p style={{ margin:0, fontFamily:I, fontSize:14, color:'rgba(255,255,255,.65)', lineHeight:1.75, maxWidth:480 }}>{FEATURED.context}</p>
                </div>

                {/* MIDDLE: 3 metrics */}
                <div className="cs-feat-metrics" style={{ display:'flex', flexDirection:'column', gap:10, flexShrink:0 }}>
                  {(FEATURED.metrics ?? []).map(m => (
                    <div key={m.label} style={{ padding:'16px 20px', background:'rgba(255,255,255,.07)', borderRadius:12, border:'1px solid rgba(255,255,255,.10)', textAlign:'center', minWidth:120 }}>
                      <div style={{ fontFamily:J, fontWeight:900, fontSize:22, color:'var(--ism-amber)', lineHeight:1 }}>{m.val}</div>
                      <div style={{ fontFamily:I, fontSize:11, color:'rgba(255,255,255,.55)', marginTop:4, lineHeight:1.3 }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* RIGHT: CTA */}
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12, flexShrink:0, position:'relative' }}>
                  <div style={{ fontFamily:I, fontSize:11, color:'rgba(255,255,255,.40)', textTransform:'uppercase', letterSpacing:'.06em', textAlign:'center', marginBottom:4 }}>Featured Study</div>
                  <a href={FEATURED.href}
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', background:'var(--ism-amber)', color:'var(--color-navy)', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.40)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 10px 28px rgba(255,176,0,.55)'; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 6px 20px rgba(255,176,0,.40)'; }}
                  >
                    Read Full Case Study →
                  </a>
                  <div style={{ display:'flex', flexDirection:'column', gap:4, marginTop:4 }}>
                    {[`Industry: ${FEATURED.tag1}`, `Service: ${FEATURED.tag2}`, `Timeline: ${FEATURED.timeline}`].map(l => (
                      <span key={l} style={{ fontFamily:I, fontSize:11, color:'rgba(255,255,255,.38)', textAlign:'center', lineHeight:1.4 }}>{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ══ 3. CASE STUDY CARDS GRID ═════════════════════════════════════ */}
        <section style={{ background: featuredVisible ? 'var(--color-bg-soft)' : '#fff', padding:'48px 0 100px' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            {filtered.length === 0 && !featuredVisible ? (
              <div style={{ textAlign:'center', padding:'80px 24px' }}>
                <div style={{ width:56, height:56, borderRadius:14, background:'rgba(30,77,195,.08)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px' }}>
                  <i className="fa-solid fa-magnifying-glass" style={{ color:'var(--color-primary)', fontSize:22 }} />
                </div>
                <h3 style={{ fontFamily:J, fontWeight:900, fontSize:20, color:'var(--color-navy)', margin:'0 0 8px' }}>No case studies match this filter.</h3>
                <p style={{ fontFamily:I, fontSize:14, color:'var(--color-text-muted)', margin:'0 0 20px' }}>Try a different service or industry combination.</p>
                <button onClick={() => { setActiveSvc('All'); setActiveInd('All'); }}
                  style={{ padding:'11px 22px', background:'var(--color-primary)', color:'#fff', border:'none', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:700, cursor:'pointer' }}>
                  Show All Case Studies
                </button>
              </div>
            ) : (
              <div className="cs-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
                {filtered.map(study => <StudyCard key={study.id} study={study} />)}
              </div>
            )}
          </div>
        </section>

        {/* ══ 4. BOTTOM CTA ════════════════════════════════════════════════ */}
        <section style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'100px 0', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:700, height:700, background:'radial-gradient(circle,rgba(255,255,255,.04) 0%,transparent 60%)', pointerEvents:'none' }} />
          <div style={{ maxWidth:720, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>
            <h2 style={{ margin:'0 0 16px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,3vw,44px)', color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px' }}>
              Have a Similar Challenge to One of These?
            </h2>
            <p style={{ fontSize:16, color:'rgba(255,255,255,.72)', fontFamily:I, margin:'0 auto 36px', maxWidth:520, lineHeight:1.75 }}>
              Tell us what you are working on. We will tell you whether we have done it before and how.
            </p>
            <a href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 32px', background:'var(--ism-amber)', color:'var(--color-navy)', borderRadius:8, fontFamily:J, fontWeight:800, fontSize:15, textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 8px 28px rgba(255,176,0,.45)', transition:'all .18s' }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 14px 36px rgba(255,176,0,.60)'; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 8px 28px rgba(255,176,0,.45)'; }}
            >
              Book a Free Strategy Call →
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .cs-featured      { grid-template-columns: 1fr !important; gap: 28px !important; }
          .cs-feat-metrics  { flex-direction: row !important; flex-wrap: wrap; justify-content: center; }
          .cs-grid          { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .cs-feat-metrics  { flex-direction: column !important; align-items: stretch !important; }
        }
      `}</style>
    </>
  );
}
