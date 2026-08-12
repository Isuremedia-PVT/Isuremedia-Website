'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const NAVY = 'var(--color-navy)';
const MUTED = 'var(--color-text-muted)';
const BORDER = 'var(--color-border)';
const AMBER_BG = 'var(--ism-amber-50)';
const AMBER_BORDER = 'var(--ism-amber-200)';

const STAT_ICONS = ['fa-solid fa-chart-line', 'fa-solid fa-stopwatch', 'fa-solid fa-users', 'fa-solid fa-bolt'];
const PROBLEM_ICONS = ['fa-solid fa-triangle-exclamation', 'fa-solid fa-link-slash', 'fa-solid fa-circle-exclamation', 'fa-solid fa-chart-line'];
const IMPACT_ICONS = ['fa-solid fa-bolt', 'fa-solid fa-medal', 'fa-solid fa-clock', 'fa-solid fa-magnifying-glass-chart'];

function Eyebrow({
  children
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <div style={{ width: 26, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
      <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--color-primary)' }}>{children}</span>
    </div>
  );
}

export default function CaseStudyDetail({
  data: d
}) {
  return (
    <>
      <Navbar />
      <main style={{ background: '#fff', fontFamily: I }}>

        {/* IDENTITY */}
        <section>
          <div className="ism-container">
            <h1 style={{ fontFamily: J, fontWeight: 800, color: NAVY, letterSpacing: '-1px', marginBottom: 12 }}>{d.client}</h1>
            <p style={{ color: MUTED, marginBottom: 14, lineHeight: 1.5, maxWidth: 640 }}>
              {d.leadIn} <strong style={{ color: NAVY }}>{d.hook}</strong>
            </p>
            <p style={{ color: MUTED, lineHeight: 1.8, maxWidth: 600, marginBottom: 28 }}>{d.intro}</p>

            <div className="csd-meta" style={{ display: 'flex', border: `1px solid ${BORDER}`, borderRadius: 10, overflow: 'hidden', width: 'fit-content', boxShadow: 'var(--sh-xs)' }}>
              {[
                ['Industry', d.meta.industry],
                ['Location', d.meta.location],
                ['Duration', d.meta.duration],
                ['Service Used', d.meta.services],
              ].map(([label, val], i) => (
                <div key={i} style={{ padding: '12px 22px', borderRight: i < 3 ? `1px solid ${BORDER}` : 'none', background: i === 3 ? 'var(--color-bg-soft)' : 'transparent' }}>
                  <div style={{ fontFamily: J, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: MUTED, opacity: 0.6, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: J, fontSize: 13.5, fontWeight: 700, color: i === 3 ? 'var(--color-primary)' : NAVY, whiteSpace: 'nowrap' }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HERO IMAGE */}
        <section>
          <div className="ism-container">
            <div style={{ borderRadius: 16, overflow: 'hidden', height: 420, boxShadow: 'var(--sh-lg)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.heroImage} alt={d.client} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        <section>
          <div className="ism-container">
            <h2 style={{ fontFamily: J, fontWeight: 800, color: NAVY, letterSpacing: '-0.4px', marginBottom: 24, maxWidth: 780 }}>
              {d.resultHeadline.map((p, i) => (
                <span key={i} style={{ color: p.highlight ? 'var(--color-primary)' : NAVY }}>{p.text}</span>
              ))}
            </h2>
            <div className="csd-stats" style={{ border: `1px solid ${AMBER_BORDER}`, borderRadius: 14, overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', boxShadow: 'var(--sh-sm)' }}>
              {d.stats.map((s, i) => (
                <div key={i} style={{ padding: '22px 20px', borderRight: i < d.stats.length - 1 ? `1px solid ${AMBER_BORDER}` : 'none', background: AMBER_BG }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <i className={STAT_ICONS[i % STAT_ICONS.length]} style={{ color: '#fff', fontSize: 14 }} />
                  </div>
                  <div style={{ fontFamily: J, fontSize: 26, fontWeight: 800, color: NAVY, letterSpacing: '-1px', lineHeight: 1, marginBottom: 6 }}>{s.val}</div>
                  <div style={{ fontFamily: J, fontSize: 12.5, color: NAVY, fontWeight: 700, lineHeight: 1.35 }}>{s.label}</div>
                  <div style={{ fontSize: 11.5, color: MUTED, opacity: 0.75, marginTop: 2 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE STRIP */}
        <section style={{ background: 'linear-gradient(135deg,#1840A0,#2F5FE8)' }}>
          <div className="ism-container">
            <div className="csd-quote-grid" style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 24 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fa-solid fa-quote-left" style={{ color: 'var(--ism-amber)', fontSize: 20 }} />
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: J, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.14em', color: 'rgba(255,255,255,.55)', marginBottom: 14 }}>From the Client</span>
                <div style={{ fontFamily: J, fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(22px,2.6vw,32px)', color: '#fff', lineHeight: 1.45, marginBottom: 18, maxWidth: 820 }}>&ldquo;{d.quote}&rdquo;</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--ism-amber)' }}>{d.quoteBy}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,.55)' }}>{d.quoteRole}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section>
          <div className="ism-container">
            <Eyebrow>The Problem</Eyebrow>
            <h2 style={{ fontFamily: J, fontWeight: 800, color: NAVY, letterSpacing: '-0.4px', marginBottom: 14 }}>{d.problemHeading}</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, maxWidth: 760, marginBottom: 12 }}>{d.problemIntro}</p>

            <div className="csd-problem-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }}>
              {d.problems.map((p, i) => (
                <div key={i} className="csd-card-hover" style={{ display: 'flex', gap: 16, borderRadius: 14, border: `1px solid ${BORDER}`, background: '#fff', padding: '20px 22px', boxShadow: 'var(--sh-xs)' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: i % 2 === 0 ? 'rgba(255,176,0,.12)' : 'rgba(30,77,195,.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={PROBLEM_ICONS[i % PROBLEM_ICONS.length]} style={{ color: i % 2 === 0 ? 'var(--ism-amber)' : 'var(--color-primary)', fontSize: 15 }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: J, fontWeight: 800, color: NAVY, marginBottom: 6 }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section>
          <div className="ism-container">
            <div className="csd-overview" style={{ borderRadius: 18, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 300px', minHeight: 260, border: `1px solid ${AMBER_BORDER}`, boxShadow: 'var(--sh-sm)' }}>
              <div style={{ background: AMBER_BG, padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Eyebrow>Overview</Eyebrow>
                <h2 style={{ fontFamily: J, fontWeight: 800, color: NAVY, letterSpacing: '-0.4px', marginBottom: 14 }}>{d.overviewHeading}</h2>
                <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                  {d.overviewTags.map((t, i) => (
                    <span key={i} style={{ fontFamily: J, fontSize: 11.5, fontWeight: 700, padding: '4px 12px', borderRadius: 20, background: t.tone === 'blue' ? 'rgba(30,77,195,0.09)' : 'rgba(255,176,0,0.18)', color: t.tone === 'blue' ? 'var(--color-primary)' : '#a07000' }}>{t.label}</span>
                  ))}
                </div>
                {d.overviewBody.map((p, i) => (
                  <p key={i} style={{ color: MUTED, lineHeight: 1.8, marginBottom: i < d.overviewBody.length - 1 ? 12 : 0 }}>{p}</p>
                ))}
              </div>
              <div className="csd-overview-right">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.overviewImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DID */}
        <section>
          <div className="ism-container">
            <Eyebrow>What We Did</Eyebrow>
            <h2 style={{ fontFamily: J, fontWeight: 800, color: NAVY, letterSpacing: '-0.4px', marginBottom: 14, maxWidth: 760 }}>{d.didHeading}</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, maxWidth: 680, marginBottom: 12 }}>{d.didIntro}</p>

            <div style={{ marginTop: 28 }}>
              <div className="csd-steps-track" style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr 80px 1fr', alignItems: 'center', marginBottom: 14 }}>
                {d.process.flatMap((p, i) => {
                  const items = [];
                  if (i > 0) {
                    items.push(<div key={`c-${i}`} className="csd-connector" style={{ height: 2, background: 'var(--color-primary)', opacity: 0.2, position: 'relative', top: -12 }} />);
                  }
                  items.push(
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: J, fontSize: 15, fontWeight: 800, position: 'relative', zIndex: 2, boxShadow: '0 0 0 4px #fff, 0 0 0 6px var(--color-primary)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span style={{ fontFamily: J, fontSize: 10.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', textAlign: 'center', color: 'var(--color-primary)' }}>{p.label}</span>
                    </div>
                  );
                  return items;
                })}
              </div>
              <div className="csd-steps-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
                {d.process.map((p, i) => (
                  <div key={i} className="csd-card-hover" style={{ border: `1px solid ${BORDER}`, borderTop: '3px solid var(--color-primary)', borderRadius: 14, padding: '22px 20px', background: '#fff', boxShadow: 'var(--sh-xs)' }}>
                    <h3 style={{ fontFamily: J, fontWeight: 800, color: NAVY, marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THE IMPACT */}
        <section>
          <div className="ism-container">
            <Eyebrow>The Impact</Eyebrow>
            <h2 style={{ fontFamily: J, fontWeight: 800, color: NAVY, letterSpacing: '-0.4px', marginBottom: 14, maxWidth: 760 }}>{d.impactHeading}</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, maxWidth: 680, marginBottom: 12 }}>{d.impactIntro}</p>

            <div className="csd-impact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }}>
              {d.impactCards.map((c, i) => (
                <div key={i} className="csd-card-hover" style={{ background: AMBER_BG, border: `1px solid ${AMBER_BORDER}`, borderRadius: 14, padding: '22px 24px', display: 'flex', gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={IMPACT_ICONS[i % IMPACT_ICONS.length]} style={{ color: '#fff', fontSize: 16 }} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontFamily: J, fontSize: 10.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.1em', color: '#a07000', marginBottom: 6 }}>{c.label}</span>
                    <h3 style={{ fontFamily: J, fontWeight: 800, color: NAVY, marginBottom: 6 }}>{c.title}</h3>
                    <p style={{ color: MUTED, lineHeight: 1.65, margin: 0 }}>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METRICS COMPARISON TABLE (optional, before/after KPI table for PPC etc.) */}
        {d.metricsTable && (
          <section>
            <div className="ism-container">
              <Eyebrow>Performance Comparison</Eyebrow>
              <h2 style={{ fontFamily: J, fontWeight: 800, color: NAVY, letterSpacing: '-0.4px', marginBottom: 14, maxWidth: 760 }}>{d.metricsTable.heading}</h2>
              {d.metricsTable.intro && <p style={{ color: MUTED, lineHeight: 1.8, maxWidth: 680, marginBottom: 20 }}>{d.metricsTable.intro}</p>}

              <div className="csd-table-scroll" style={{ overflowX: 'auto', marginTop: 20 }}>
                <div className="csd-kw-table" style={{ border: `1px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--sh-xs)', minWidth: 560 }}>
                  <div className="csd-kw-row" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1.3fr', background: 'var(--color-bg-soft)' }}>
                    {['KPI', d.metricsTable.beforeLabel || 'Before', d.metricsTable.afterLabel || 'After', 'Change'].map((h, i) => (
                      <div key={i} style={{ padding: '13px 18px', fontFamily: J, fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.08em', color: MUTED }}>{h}</div>
                    ))}
                  </div>
                  {d.metricsTable.rows.map((r, i) => (
                    <div key={i} className="csd-kw-row" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1.3fr', borderTop: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#fff' : 'var(--color-bg-soft)' }}>
                      <div style={{ padding: '13px 18px', fontFamily: J, fontSize: 13.5, fontWeight: 700, color: NAVY }}>{r.label}</div>
                      <div style={{ padding: '13px 18px', fontFamily: I, fontSize: 13, color: MUTED }}>{r.before}</div>
                      <div style={{ padding: '13px 18px', fontFamily: I, fontSize: 13, color: 'var(--color-primary)', fontWeight: 700 }}>{r.after}</div>
                      <div style={{ padding: '13px 18px', fontFamily: I, fontSize: 12.5, color: r.improved === false ? '#B45309' : '#1E9E5A', fontWeight: 700 }}>{r.change}</div>
                    </div>
                  ))}
                </div>
              </div>
              {d.metricsTable.note && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: 16, fontSize: 13.5 }}>{d.metricsTable.note}</p>}
            </div>
          </section>
        )}

        {/* KEYWORD RANKINGS TABLE (optional) */}
        {d.keywordTable && (
          <section>
            <div className="ism-container">
              <Eyebrow>Keyword Rankings</Eyebrow>
              <h2 style={{ fontFamily: J, fontWeight: 800, color: NAVY, letterSpacing: '-0.4px', marginBottom: 14, maxWidth: 760 }}>{d.keywordTable.heading}</h2>
              {d.keywordTable.intro && <p style={{ color: MUTED, lineHeight: 1.8, maxWidth: 680, marginBottom: 20 }}>{d.keywordTable.intro}</p>}

              <div className="csd-table-scroll" style={{ overflowX: 'auto', marginTop: 20 }}>
                <div className="csd-kw-table" style={{ border: `1px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--sh-xs)', minWidth: 560 }}>
                  <div className="csd-kw-row" style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1.3fr', background: 'var(--color-bg-soft)' }}>
                    {['Keyword', 'Start', 'Current', 'Change'].map((h, i) => (
                      <div key={i} style={{ padding: '13px 18px', fontFamily: J, fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.08em', color: MUTED }}>{h}</div>
                    ))}
                  </div>
                  {d.keywordTable.rows.map((r, i) => (
                    <div key={i} className="csd-kw-row" style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1.3fr', borderTop: `1px solid ${BORDER}`, background: i % 2 === 0 ? '#fff' : 'var(--color-bg-soft)' }}>
                      <div style={{ padding: '13px 18px', fontFamily: J, fontSize: 13.5, fontWeight: 700, color: NAVY }}>{r.keyword}</div>
                      <div style={{ padding: '13px 18px', fontFamily: I, fontSize: 13, color: MUTED }}>{r.start}</div>
                      <div style={{ padding: '13px 18px', fontFamily: I, fontSize: 13, color: 'var(--color-primary)', fontWeight: 700 }}>{r.current}</div>
                      <div style={{ padding: '13px 18px', fontFamily: I, fontSize: 12.5, color: '#1E9E5A', fontWeight: 700 }}>{r.change}</div>
                    </div>
                  ))}
                </div>
              </div>
              {d.keywordTable.note && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: 16, fontSize: 13.5 }}>{d.keywordTable.note}</p>}
            </div>
          </section>
        )}

        {/* AI SEARCH CITATIONS TABLE (optional) */}
        {d.aiCitations && (
          <section style={{ background: 'var(--color-bg-soft)' }}>
            <div className="ism-container">
              <Eyebrow>AI Search Visibility</Eyebrow>
              <h2 style={{ fontFamily: J, fontWeight: 800, color: NAVY, letterSpacing: '-0.4px', marginBottom: 14, maxWidth: 760 }}>{d.aiCitations.heading}</h2>
              {d.aiCitations.intro && <p style={{ color: MUTED, lineHeight: 1.8, maxWidth: 680, marginBottom: 20 }}>{d.aiCitations.intro}</p>}

              <div className="csd-table-scroll" style={{ overflowX: 'auto', marginTop: 20 }}>
                <div className="csd-ai-table" style={{ border: `1px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--sh-xs)', background: '#fff', minWidth: 640 }}>
                  <div className="csd-ai-row" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2.4fr', background: 'var(--color-bg-soft)' }}>
                    {['Query / Keyword', 'Platform', 'Appearance Details'].map((h, i) => (
                      <div key={i} style={{ padding: '13px 18px', fontFamily: J, fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.08em', color: MUTED }}>{h}</div>
                    ))}
                  </div>
                  {d.aiCitations.rows.map((r, i) => (
                    <div key={i} className="csd-ai-row" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 2.4fr', borderTop: `1px solid ${BORDER}` }}>
                      <div style={{ padding: '13px 18px', fontFamily: J, fontSize: 13.5, fontWeight: 700, color: NAVY }}>{r.query}</div>
                      <div style={{ padding: '13px 18px' }}>
                        <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20, background: AMBER_BG, color: '#a07000', whiteSpace: 'nowrap' }}>{r.platform}</span>
                      </div>
                      <div style={{ padding: '13px 18px', fontFamily: I, fontSize: 13, color: MUTED, lineHeight: 1.55 }}>{r.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
              {d.aiCitations.note && <p style={{ color: MUTED, lineHeight: 1.7, marginTop: 16, fontSize: 13.5 }}>{d.aiCitations.note}</p>}
            </div>
          </section>
        )}

        {/* WHAT IS NEXT */}
        <section>
          <div className="ism-container">
            <Eyebrow>What Is Next</Eyebrow>
            <h2 style={{ fontFamily: J, fontWeight: 800, color: NAVY, letterSpacing: '-0.4px', marginBottom: 14, maxWidth: 760 }}>{d.nextHeading}</h2>
            <p style={{ color: MUTED, lineHeight: 1.8, maxWidth: 680, marginBottom: 12 }}>{d.nextIntro}</p>

            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', display: 'grid', gridTemplateColumns: '4px 1fr', marginTop: 20, boxShadow: 'var(--sh-xs)' }}>
              <div style={{ background: 'var(--color-primary)' }} />
              <div style={{ padding: '24px 28px' }}>
                <div className="csd-roadmap-items" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  {d.nextCards.map((c, i) => (
                    <div key={i}>
                      <h3 style={{ fontFamily: J, fontWeight: 800, color: NAVY, marginBottom: 6 }}>{c.title}</h3>
                      <p style={{ color: MUTED, lineHeight: 1.65, margin: 0 }}>{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="ism-container">
            <div className="csd-cta-grid" style={{ background: 'var(--color-primary)', borderRadius: 24, padding: '48px 52px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 40, alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

              <div style={{ position: 'absolute', top: '-30%', right: '30%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />

              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <div style={{ width: 28, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                  <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--ism-amber)', letterSpacing: '.12em', textTransform: 'uppercase' }}>{d.ctaEyebrow}</span>
                </div>

                <h2 style={{ fontFamily: J, fontWeight: 900, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: 16 }}>
                  {d.ctaHeading.map((p, i) => (
                    <span key={i} style={{ color: p.highlight ? 'var(--ism-amber)' : '#fff' }}>{p.text}</span>
                  ))}
                </h2>

                <p style={{ color: 'rgba(255,255,255,.78)', lineHeight: 1.75, marginBottom: 30, maxWidth: 480 }}>
                  {d.ctaBody.map((p, i) => (
                    p.highlight
                      ? <span key={i} style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>{p.text}</span>
                      : <span key={i}>{p.text}</span>
                  ))}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <a href={d.ctaPrimaryHref}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 30px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s', whiteSpace: 'nowrap' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,176,0,.55)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,176,0,.35)'; }}
                  >
                    {d.ctaPrimaryLabel}
                  </a>
                  <a href={d.ctaSecondaryHref}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 26px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 700, color: '#fff', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid rgba(255,255,255,.40)', transition: 'all .18s', whiteSpace: 'nowrap' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.40)'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    {d.ctaSecondaryLabel}
                  </a>
                </div>
              </div>

              <div className="csd-cta-img" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: 300 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.ctaImage} alt="" style={{ height: '100%', width: 'auto', objectFit: 'contain', objectPosition: 'bottom center', display: 'block' }} />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        .csd-card-hover { transition: transform .2s, box-shadow .2s; }
        .csd-card-hover:hover { transform: translateY(-3px); box-shadow: var(--sh-md); }
        @media (max-width: 900px) {
          .csd-meta { flex-wrap: wrap; width: auto !important; }
          .csd-stats { grid-template-columns: repeat(2,1fr) !important; }
          .csd-quote-grid { grid-template-columns: 1fr !important; }
          .csd-overview { grid-template-columns: 1fr !important; }
          .csd-overview-right { display: none; }
          .csd-problem-grid { grid-template-columns: 1fr !important; }
          .csd-steps-track { display: none !important; }
          .csd-steps-cards { grid-template-columns: 1fr !important; }
          .csd-impact-grid { grid-template-columns: 1fr !important; }
          .csd-roadmap-items { grid-template-columns: 1fr !important; gap: 20px !important; }
          .csd-cta-grid { grid-template-columns: 1fr !important; padding: 32px 28px !important; }
          .csd-cta-img { display: none; }
        }
        @media (max-width: 480px) {
          .csd-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
