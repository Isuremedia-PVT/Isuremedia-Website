'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'Backlink profile audit and competitor gap analysis',
  'Editorial outreach and guest post placements',
  'Digital PR and resource link building',
  'Niche edits and contextual link insertions',
  'Anchor text strategy and link velocity management',
  'Ongoing link monitoring and disavow management',
];

const WHY_MATTERS = [
  { icon: 'fa-solid fa-arrow-trend-up', title: 'Higher rankings across your most important pages', desc: 'Each high-quality referring domain strengthens your domain authority and improves rankings across your entire site — not just the specific page the link points to.' },
  { icon: 'fa-solid fa-chart-line', title: 'Rankings that compound over time', desc: 'Unlike paid ads that stop working the moment you stop paying, authority compounds. Every link you earn adds to a backlink profile that keeps working for you month after month.' },
  { icon: 'fa-solid fa-gauge-high', title: 'Faster results from other SEO work', desc: 'Content and on-page optimisation perform significantly better on a domain with authority behind it. Link building multiplies the return on every other SEO investment you make.' },
  { icon: 'fa-solid fa-robot', title: 'Visibility in AI search', desc: '73% of SEO professionals believe backlinks influence AI search visibility. Domains with strong backlink profiles are more likely to be cited by Google AI Overviews, ChatGPT, and Perplexity as authoritative sources.' },
  { icon: 'fa-solid fa-chess', title: 'An edge over competitors in your market', desc: 'Businesses that invest consistently in link building grow organic traffic twice as fast as those that do not. In competitive markets, a strong backlink profile is one of the hardest things for a competitor to replicate quickly.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Long-term protection of your rankings', desc: 'Sites with diverse, high-quality backlink profiles are far more resilient to Google algorithm updates. Low-quality links create vulnerability. Earned editorial links create stability.' },
];

const CARD_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const LINK_FACTORS = [
  { icon: 'fa-solid fa-newspaper', title: 'Editorial Links', impact: 'Highest value', desc: 'Links earned within the content of a real article on a credible, relevant website. These carry the most weight with Google because they represent a genuine editorial decision by a real publisher to reference your site.' },
  { icon: 'fa-solid fa-pen-nib', title: 'Guest Post Placements', impact: 'High value', desc: 'Original content written by Isuremedia and published on relevant industry websites with a contextual link back to your site. Guest posts on sites with a Domain Rating of 50 or above generate 5.2 times more ranking impact than lower-authority placements.' },
  { icon: 'fa-solid fa-bullhorn', title: 'Digital PR Links', impact: 'High value', desc: 'Links earned through data-driven content, original research, or newsworthy stories that journalists and publishers choose to reference. Digital PR is now the top-rated link building strategy among SEO professionals — it earns multiple links per campaign and builds brand authority alongside ranking authority.' },
  { icon: 'fa-solid fa-link-slash', title: 'Niche Edits', impact: 'Medium value', desc: 'Contextual links inserted into already-published, already-ranking articles on relevant websites. These benefit from the existing authority of the page and can produce ranking improvements faster than new content placements.' },
  { icon: 'fa-solid fa-building-columns', title: 'Resource and Directory Links', impact: 'Supporting value', desc: 'Links from high-quality, curated industry directories and resource pages. These build a natural and diverse backlink profile that looks healthy to Google and provides a consistent base of authority.' },
  { icon: 'fa-solid fa-shield-halved', title: 'What We Never Build', impact: 'Zero tolerance', desc: 'Links from private blog networks, paid link schemes, irrelevant websites, auto-generated directories, or any source that violates Google&apos;s link spam guidelines. These create risk, not authority, and the ranking gains they produce rarely last.' },
];

const OFFERINGS = [
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Backlink Audit & Competitor Gap Analysis', desc: 'We start by auditing your existing backlink profile — identifying your strongest links, flagging harmful ones, and mapping the gap between your domain authority and your top competitors.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80' },
  { icon: 'fa-solid fa-handshake', title: 'Editorial Outreach', desc: 'We identify relevant, high-authority websites in your industry and pitch content ideas that earn genuine editorial placements built around your target keywords and pages.', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=80' },
  { icon: 'fa-solid fa-pen-nib', title: 'Guest Post Campaigns', desc: 'We research, write, and place original content on real industry publications with editorial standards and genuine readership, each with a contextual, keyword-relevant link back to your site.', img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80' },
  { icon: 'fa-solid fa-bullhorn', title: 'Digital PR and Data-Led Campaigns', desc: 'We create original research, data studies, or newsworthy content assets and pitch them to relevant journalists and publications — earning the highest-authority links available.', img: 'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=500&q=80' },
  { icon: 'fa-solid fa-link-slash', title: 'Niche Edits and Link Insertions', desc: 'We secure placements inside already-published, already-ranking content on relevant websites — a fast and effective way to build authority without waiting for new content to mature.', img: 'https://images.unsplash.com/photo-1754548930574-6a995e5eb5a7?w=500&q=80' },
  { icon: 'fa-solid fa-font', title: 'Anchor Text Strategy & Link Monitoring', desc: 'We manage your anchor text profile deliberately and monitor your backlink profile continuously — handling disavow submissions where harmful links appear so your profile stays clean.', img: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?w=500&q=80' },
];

const SERVICES = [
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Backlink Audit & Competitor Gap Analysis', desc: 'We audit your existing backlink profile and map the gap between your domain authority and your top competitors, so we know exactly what your site needs.' },
  { icon: 'fa-solid fa-handshake', title: 'Editorial Outreach', desc: 'We pitch relevant, high-authority websites in your industry with content ideas that earn genuine editorial placements around your target keywords.' },
  { icon: 'fa-solid fa-pen-nib', title: 'Guest Post Campaigns', desc: 'We research, write, and place original content on real industry publications, every piece including a contextual link back to a target page on your site.' },
  { icon: 'fa-solid fa-bullhorn', title: 'Digital PR and Data-Led Campaigns', desc: 'We create original research and newsworthy content assets and pitch them to journalists and publications, earning the highest-authority links available.' },
  { icon: 'fa-solid fa-link-slash', title: 'Niche Edits and Link Insertions', desc: 'We secure placements inside already-published, already-ranking content on relevant websites for fast, effective authority gains.' },
  { icon: 'fa-solid fa-font', title: 'Anchor Text Strategy', desc: 'We manage your anchor text profile deliberately, varying anchor text across placements to build a natural, Google-safe backlink profile.' },
  { icon: 'fa-solid fa-chart-line', title: 'Link Monitoring & Disavow Management', desc: 'We monitor your backlink profile continuously for lost links and new spammy links, handling disavow submissions so your profile stays clean.' },
  { icon: 'fa-solid fa-clone', title: 'White-Label Link Building', desc: 'For agencies, we provide fully white-label link building delivered under your brand — no references to Isuremedia, full quality standards, scalable across your client base.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-arrow-trend-up', title: 'Businesses whose rankings have plateaued', desc: 'If your content is well-optimised but rankings are stuck, the missing variable is almost always domain authority. On-page SEO creates the conditions for ranking. Link building provides the authority signal that pushes you past competitors.', img: 'https://images.unsplash.com/photo-1745509267699-1b1db256601e?w=700&q=80' },
  { icon: 'fa-solid fa-seedling', title: 'New websites building authority from scratch', desc: 'A new domain with no backlinks starts at a significant disadvantage against established competitors. Consistent link building accelerates the authority-building process and compresses the time it takes to achieve competitive rankings.', img: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=700&q=80' },
  { icon: 'fa-solid fa-chess', title: 'Businesses in competitive markets', desc: 'In competitive industries — legal, finance, health, real estate, home services — the top-ranking businesses have strong backlink profiles. Competing without one means fighting with one hand tied behind your back.', img: 'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?w=700&q=80' },
  { icon: 'fa-solid fa-shield-halved', title: 'Businesses penalised for bad links in the past', desc: 'If a previous agency built spammy links that damaged your rankings, the first step is a full backlink audit and disavow campaign — followed by a clean, white-hat link building program that rebuilds your profile properly.', img: 'https://images.unsplash.com/photo-1642522029686-5485ea7e6042?w=700&q=80' },
  { icon: 'fa-solid fa-cart-shopping', title: 'E-commerce targeting category and product pages', desc: 'Category and product pages are high-value ranking targets that almost always need external link authority to compete. Link building on these pages directly affects revenue.', img: 'https://images.unsplash.com/photo-1531058240690-006c446962d8?w=700&q=80' },
  { icon: 'fa-solid fa-clone', title: 'Agencies needing white-label link building', desc: 'Isuremedia provides white-label link building for agencies at scale. Same quality standards, your brand on the deliverables, no client-facing Isuremedia references.', img: 'https://images.unsplash.com/photo-1766758196132-c81bdd247238?w=700&q=80' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-shield-halved', title: 'We only build white-hat links', desc: 'Every link we place is editorially earned on a real website with genuine traffic and editorial standards. We do not use private blog networks, link farms, or any method that violates Google&apos;s guidelines. Your rankings are built to last.' },
  { icon: 'fa-solid fa-eye', title: 'You see every placement before it goes live', desc: 'Before any outreach goes out, you review and approve the target sites. You know exactly where your links are being placed and why — no black-box processes, no surprises.' },
  { icon: 'fa-solid fa-robot', title: 'We cover AI search authority too', desc: '73% of SEO professionals believe backlinks influence AI search visibility. We build the kind of editorial authority that makes your domain one that AI systems cite and recommend.' },
  { icon: 'fa-solid fa-medal', title: 'Quality over volume, every time', desc: 'We would rather build five high-authority links per month than fifty low-quality ones. Targeted, high-authority links create compounding authority that holds through algorithm updates.' },
  { icon: 'fa-solid fa-chart-line', title: 'Full transparency on every link', desc: 'You receive a detailed monthly report covering every link built — the URL, the referring domain metrics, the anchor text, and the target page. Nothing is hidden.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no lock-in', desc: 'Link building takes time to compound. But we do not lock you in because we believe the results speak for themselves. Stay because rankings are improving, not because you signed a contract.' },
];

const PROCESS = [
  { n: '01', title: 'Backlink Audit & Strategy', desc: 'We audit your existing backlink profile, identify harmful links, benchmark your domain authority against your top competitors, and map the exact link building strategy your site needs.' },
  { n: '02', title: 'Target Site Research', desc: 'We identify the most relevant, highest-authority websites in your industry for outreach — sites with real traffic, real editorial standards, and genuine relevance. No bulk databases, no automated lists.' },
  { n: '03', title: 'Content Creation', desc: 'We write the content that earns the links — guest posts, digital PR assets, data studies, or linkable resources — each meeting the editorial standards of the target publication.' },
  { n: '04', title: 'Outreach & Placement', desc: 'We conduct manual outreach to editors, publishers, and journalists using personalised pitches. Once placements are secured, we send everything to you for review before it goes live.' },
  { n: '05', title: 'Reporting & Monitoring', desc: 'You receive a monthly report covering every link built, referring domain metrics, anchor text used, and impact on your target pages. We monitor your profile continuously for lost links and new spam.' },
];

const FAQS = [
  { q: 'Are backlinks still important for SEO in 2026?', a: 'Yes. Backlinks remain a confirmed top-three Google ranking factor in 2026. The number one result on Google has 3.8 times more backlinks than pages in positions two through ten. In competitive markets, a strong backlink profile is still one of the clearest separators between page one and page three.' },
  { q: 'What is the difference between good and bad link building?', a: 'Good link building earns editorially placed links on real, relevant websites with genuine traffic and editorial standards. Bad link building buys links from private blog networks, low-quality directories, or irrelevant sites that exist solely to sell links. Good links build authority that compounds over time. Bad links create a penalty risk that can damage your rankings significantly.' },
  { q: 'How long does it take to see results from link building?', a: 'Individual links typically index within two to six weeks. Measurable ranking improvements from a link building campaign typically appear within three to four months as the authority compounds across your domain.' },
  { q: 'How many links do I need?', a: 'This depends entirely on your target keywords and the backlink profiles of the sites currently ranking for them. We audit your competitors&apos; backlink profiles at the start of every engagement so you know exactly what volume of link building is required to close the gap.' },
  { q: 'Will link building get my site penalised?', a: 'White-hat, editorially earned links do not get sites penalised. Spammy link building — private blog networks, paid link schemes, link farms — creates penalty risk. Isuremedia builds only white-hat links, and we monitor your backlink profile for any harmful links that may appear from other sources.' },
  { q: 'What types of links do you build?', a: 'We build editorial links, guest post placements, digital PR links, niche edits, and resource links — depending on what your site needs and what will have the most impact for your target keywords. Every link type is white-hat, manually placed, and editorially earned.' },
  { q: 'Do you provide white-label link building for agencies?', a: 'Yes. We build links for agency clients under your brand with no Isuremedia references. Same quality standards, same transparent reporting, fully scalable across your client base.' },
  { q: 'How do you measure the quality of a link?', a: 'We assess each potential link placement on Domain Rating, organic traffic to the referring site, topical relevance to your industry, editorial standards of the publication, and anchor text appropriateness. A site with strong metrics but no relevance to your industry is a weak link regardless of its Domain Rating.' },
  { q: 'Can link building help with AI search visibility?', a: 'Yes. 73% of SEO professionals believe backlinks influence AI search results. Domains with strong editorial backlink profiles are more likely to be cited as authoritative sources in Google AI Overviews, ChatGPT, and Perplexity responses.' },
  { q: 'What happens to my rankings if I stop link building?', a: 'The links you have earned do not disappear when you stop building. Your domain authority holds in the short to medium term. However, competitors who continue building will gradually close the gap and overtake you over time.' },
];

/* ── FAQ 2-COL — matches the Local SEO page layout ── */
function LinkFAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="lb-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <div className="lb-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>Link Building</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: '0 0 32px' }}>
              Straight answers to the questions we hear most. No spin, no buzzwords.
            </p>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Get Started →
            </a>
          </div>
          {/* Right accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, border: `1px solid ${open === i ? 'var(--color-primary)' : 'var(--color-border)'}`, overflow: 'hidden', transition: 'border-color .2s' }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
                  <span style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)' }}>{faq.q}</span>
                  <i className="fa-solid fa-chevron-down" style={{ fontSize: 12, color: 'var(--ism-amber)', flexShrink: 0, transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .22s' }} />
                </button>
                {open === i && (
                  <div style={{ padding: '0 24px 20px' }}>
                    <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.78, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .lb-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .lb-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function LinkBuildingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="lb-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="lb-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* Left — copy */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Build the Authority That Gets Your Site to{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Page One.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  We earn{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>high-quality backlinks from real, relevant websites</span>{' '}
                  that tell Google your site is worth ranking. More referring domains, stronger domain authority, higher rankings — done the right way.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Get a Free Backlink Audit
                  </a>
                </div>
              </div>

              {/* Right — photo + floating badges */}
              <div className="lb-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://picsum.photos/seed/linkbuildinghero/640/720" alt="Link building outreach" style={{ width: '100%', height: 440, objectFit: 'cover', borderRadius: 24, display: 'block' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-link" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-building-columns" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>High-Authority Placement</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      (<img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />)
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>180+ Editorial Links Earned</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>100% White-Hat</span>
                </div>
              </div>

            </div>
          </div>

          {/* Curved bottom edge */}
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            style={{ position: 'absolute', left: 0, bottom: -1, width: '100%', height: 70, display: 'block' }}
            aria-hidden
          >
            <path d="M0,0 Q720,110 1440,0 L1440,100 L0,100 Z" fill="#F7F8FA" />
          </svg>

          <style>{`
            @media (max-width: 900px) {
              .lb-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .lb-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .lb-hero { padding: 48px 0 64px !important; }
            }
          `}</style>
        </section>

        {/* ══ 02. PROOF STRIP ══════════════════════════════════════════════ */}
        <ReviewsStrip />

        {/* ══ 03. BRIDGE SECTION ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="bridge-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)', gap: 64, alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(24px,2.8vw,40px)', color: 'var(--color-navy)', lineHeight: 1.2, letterSpacing: '-0.4px', marginBottom: 24 }}>
                  Your Competitors Are Outranking You Because Their Site Has More Authority.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  Content and on-page SEO can only take your rankings so far. When two pages are equally optimised, the one with stronger backlinks wins. Backlinks are still a confirmed top-three Google ranking factor in 2026 — and the gap between your site and your competitors is measured in referring domains.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  Isuremedia builds backlinks the right way. No link farms. No private blog networks. No paid placements on sites that exist only to sell links. Every link we build is{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>editorially placed on a real, relevant website</span>{' '}
                  — the kind Google trusts and rewards.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Claim Your Free Backlink Audit
                </a>
              </div>
              <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', border: '1px solid var(--color-border)', boxShadow: '0 20px 50px rgba(0,35,83,.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 6px 16px rgba(255,176,0,.35)' }}>
                    <i className="fa-solid fa-list-check" style={{ color: 'var(--color-navy)', fontSize: 15 }} />
                  </div>
                  <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', margin: 0 }}>What we take care of</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {BRIDGE_ITEMS.map((item, i) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '13px 0', borderBottom: i === BRIDGE_ITEMS.length - 1 ? 'none' : '1px solid var(--color-border)' }}>
                      <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', fontSize: 11 }} />
                      </div>
                      <span style={{ fontFamily: I, fontSize: 15, color: 'var(--color-navy)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`@media(max-width:860px){ .bridge-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } }`}</style>
        </section>

        {/* ══ 04. WHAT IS LINK BUILDING ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="lb-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="lb-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  Earn the Trust Signals Google Uses to Decide Who Ranks.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    A backlink is a link from another website to yours. When a reputable, relevant website links to your page, Google treats it as{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>a vote of confidence</span>{' '}
                    — a signal that your content is trustworthy, authoritative, and worth showing to people who search for what you offer.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Link building is the process of earning those links systematically. Not by buying them from link farms or publishing on low-quality directories — but by{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>placing content on real websites that Google already trusts</span>{' '}
                    so that trust transfers to your domain.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    The more high-quality referring domains pointing to your site, the stronger your domain authority — and the more competitive your pages become across every keyword you target. Link building does not just improve one ranking. It raises the ceiling for your entire site.
                  </p>
                </div>
              </div>
              <div className="lb-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                {/* Decorative background rings */}
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                {/* Central gauge */}
                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 302deg, var(--ism-blue-100) 302deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>84</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>Authority Score</span>
                  </div>
                </div>

                {/* Floating badge — Domain Authority */}
                <div className="lb-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-building-columns" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Referring DA</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>62 Avg</div>
                  </div>
                </div>

                {/* Floating badge — Placements */}
                <div className="lb-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-link" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Placements</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Live</div>
                  </div>
                </div>

                {/* Floating badge — Referring Domains */}
                <div className="lb-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Domains</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>+24%</div>
                  </div>
                </div>

                {/* Floating badge — Toxic Links */}
                <div className="lb-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-shield-halved" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Toxic Links</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>0%</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .lb-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .lb-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .lb-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .lb-score-badge{ padding:8px 10px !important; gap:7px !important; } .lb-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. WHY LINK BUILDING MATTERS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Authority Is What Separates Page One from Page Three.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Backlinks remain a confirmed top-three Google ranking factor in 2026. The number one result on Google has 3.8 times more backlinks than pages ranking in positions two through ten. Pages with at least one backlink are 77% more likely to rank in the top ten than pages with none at all. On-page optimisation and technical SEO create the right conditions for ranking. Link building is what gives Google the authority signal to actually put you there.
              </p>
            </div>
            <div className="why-matters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 48 }}>
              {WHY_MATTERS.map((w, i) => {
                const variant = CARD_VARIANTS[i % 3];
                return (
                  <div key={w.title} style={{ background: variant.cardBg, borderRadius: 16, padding: '30px 26px', border: variant.dark ? 'none' : '1px solid var(--color-border)' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: variant.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                      <i className={w.icon} style={{ color: variant.iconColor, fontSize: 19 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: variant.textColor, marginBottom: 8, lineHeight: 1.3 }}>{w.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13.5, color: variant.descColor, lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
                  </div>
                );
              })}
            </div>
            <div style={{ textAlign: 'center' }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Build Your Domain Authority
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .why-matters-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .why-matters-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. WHAT MAKES A LINK VALUABLE ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Quality and Relevance Are What Google Actually Rewards.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Not all links are equal. A single link from a trusted, relevant publication does more for your rankings than a hundred links from low-quality directories. Bad links — from link farms, paid networks, or irrelevant sites — do not just fail to help. They can actively hurt your rankings. Isuremedia builds only white-hat, editorially placed links.
              </p>
            </div>
            <div className="lb-factor-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {LINK_FACTORS.map((f, i) => {
                const hl = i === 0;
                return (
                  <div key={f.title} className={hl ? 'lb-factor-card lb-factor-card-hl' : 'lb-factor-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="lb-factor-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`lb-factor-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="lb-factor-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                        <span className="lb-factor-card-badge" style={{ fontFamily: J, fontSize: 10.5, fontWeight: 700, color: hl ? 'var(--ism-amber)' : 'var(--color-accent-hover)', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'color .25s ease' }}>{f.impact}</span>
                      </div>
                    </div>
                    <p className="lb-factor-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .lb-factor-card:not(.lb-factor-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .lb-factor-card:not(.lb-factor-card-hl):hover .lb-factor-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .lb-factor-card:not(.lb-factor-card-hl):hover .lb-factor-card-icon{ color: #fff !important; }
            .lb-factor-card:not(.lb-factor-card-hl):hover .lb-factor-card-title{ color: #fff !important; }
            .lb-factor-card:not(.lb-factor-card-hl):hover .lb-factor-card-badge{ color: var(--ism-amber) !important; }
            .lb-factor-card:not(.lb-factor-card-hl):hover .lb-factor-card-desc{ color: rgba(255,255,255,.85) !important; }
            .lb-factor-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .lb-factor-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 07. HOW WE BUILD YOUR LINKS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>White-Hat Links From Real Websites. Built to Last.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                No single tactic builds a strong link profile on its own. We combine several proven, white-hat methods so your authority grows from a genuinely diverse set of sources.
              </p>
            </div>
            <p style={{ textAlign: 'center', fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 32 }}>How Isuremedia Builds Your Link Profile</p>
            <div className="lb-offer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {OFFERINGS.map(g => (
                <div key={g.title} className="lb-offer-card" style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <div style={{ position: 'relative', height: 170, overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.img} alt="" className="lb-offer-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '22px 24px 26px' }}>
                    <div className="lb-offer-card-icon" style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, transition: 'background .2s ease' }}>
                      <i className={g.icon} style={{ color: 'var(--color-primary)', fontSize: 14 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15.5, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 8, lineHeight: 1.3 }}>{g.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.68, margin: 0 }}>{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .lb-offer-card{ transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
            .lb-offer-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.12); border-color: transparent; }
            .lb-offer-card-img{ transition: transform .4s ease; }
            .lb-offer-card:hover .lb-offer-card-img{ transform: scale(1.08); }
            .lb-offer-card:hover .lb-offer-card-icon{ background: var(--ism-amber); }
            .lb-offer-card:hover .lb-offer-card-icon i{ color: var(--color-navy) !important; }
            @media (max-width:900px){ .lb-offer-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .lb-offer-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 08. OUR LINK BUILDING SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our Link Building Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Everything Covered in Our Link Building Work.</p>
            </div>
            <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
              {SERVICES.map((s, i) => {
                const variant = CARD_VARIANTS[i % 3];
                return (
                  <div key={s.title} className="services-card" style={{ background: variant.cardBg, borderRadius: 16, padding: '28px 22px', border: variant.dark ? 'none' : '1px solid var(--color-border)' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: variant.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={s.icon} style={{ color: variant.iconColor, fontSize: 17 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: variant.textColor, marginBottom: 8, lineHeight: 1.3 }}>{s.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: variant.descColor, lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .services-card{ transition: transform .22s ease, box-shadow .22s ease; }
            .services-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.14); }
            @media (max-width:1100px){ .services-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .services-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 09. WHO THIS IS FOR ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Who Link Building Is Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If Your Rankings Have Hit a Ceiling, Authority Is Usually Why.</p>
            </div>
            <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {WHO_FOR.map(w => (
                <div key={w.title} className="who-card" style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 300, boxShadow: '0 4px 20px rgba(0,35,83,.08)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt="" className="who-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,35,83,.10) 0%, rgba(0,23,56,.94) 76%)' }} />
                  <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '26px 24px' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, flexShrink: 0 }}>
                      <i className={w.icon} style={{ color: 'var(--color-navy)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>{w.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.82)', lineHeight: 1.62, margin: 0 }}>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .who-card-img{ transition: transform .45s ease; }
            .who-card{ transition: transform .22s ease, box-shadow .22s ease; }
            .who-card:hover{ transform: translateY(-5px); box-shadow: 0 20px 44px rgba(0,35,83,.22); }
            .who-card:hover .who-card-img{ transform: scale(1.08); }
            @media (max-width:900px){ .who-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .who-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 10. MID-PAGE CTA STRIP ══════════════════════════════════════════════ */}
        <section style={{ padding: '56px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div className="mid-cta" style={{ background: 'var(--color-primary)', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
              <div aria-hidden style={{ position: 'absolute', top: '-30%', right: '-5%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', maxWidth: 560 }}>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Find out how your backlink profile compares to your top competitors.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  A free backlink audit will show you exactly where the authority gap is.
                </p>
              </div>
              <a href="/contact" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Run My Free Backlink Audit <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:640px) {
              .mid-cta { padding: 32px 24px !important; flex-direction: column !important; text-align: center; }
              .mid-cta-btn { width: 100%; justify-content: center !important; box-sizing: border-box; }
            }
          `}</style>
        </section>

        {/* ══ 11. WHY CHOOSE ISM FOR LINK BUILDING ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Businesses Choose Isuremedia for Link Building</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Editorial Links. Transparent Process. No Shortcuts.</p>
            </div>
            <div className="why-ism-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
              {WHY_ISM.slice(0, 2).map(b => (
                <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 26px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 20 }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: J, fontSize: 15.5, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              ))}

              <div className="why-ism-bento-row" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                {(() => { const b = WHY_ISM[2]; return (
                  <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 22px', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-amber-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={b.icon} style={{ color: 'var(--color-accent-hover)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                ); })()}

                <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 200 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://picsum.photos/seed/lbwhatmakesdifferent/700/620" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>

                {(() => { const b = WHY_ISM[3]; return (
                  <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 22px', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                ); })()}
              </div>

              {WHY_ISM.slice(4, 6).map(b => (
                <div key={b.title} className="why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 26px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 20 }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: J, fontSize: 15.5, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            .why-ism-card{ transition: transform .2s ease, box-shadow .2s ease; }
            .why-ism-card:hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0,35,83,.10); }
            @media(max-width:900px){ .why-ism-bento{ grid-template-columns:1fr !important; } .why-ism-bento-row{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 12. OUR LINK BUILDING PROCESS ══════════════════════════════════════════════ */}
        <section className="lb-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                How Isuremedia Builds <span style={{ color: 'var(--ism-amber)' }}>Links That Move Rankings</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Audit First. Target the Right Sites. Build Authority That Compounds.
              </p>
            </div>
            <div className="lb-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 28, left: '10%', width: '80%', height: 2, background: 'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex: 0 }} />
              {PROCESS.map((step, i) => (
                <div key={step.n} style={{ textAlign: 'center', padding: '0 16px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: i === 0 ? 'var(--ism-amber)' : 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: `0 4px 18px ${i === 0 ? 'rgba(255,176,0,.40)' : 'rgba(30,77,195,.30)'}`, border: '4px solid #fff' }}>
                    <span style={{ fontFamily: J, fontSize: 18, fontWeight: 900, color: '#fff' }}>{step.n}</span>
                  </div>
                  <div style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 10, lineHeight: 1.3 }}>{step.title}</div>
                  <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: 780, margin: '48px auto 0' }}>
              <strong style={{ color: 'var(--color-navy)' }}>Typical timeline:</strong> Individual link placements typically index within two to six weeks. Measurable ranking improvements from link building campaigns typically appear within three to four months as authority compounds across your domain.
            </p>
            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 22px rgba(255,176,0,.38)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Get a Free Backlink Audit
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .lb-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
              .lb-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 13. FAQ ══════════════════════════════════════════════ */}
        <LinkFAQAccordion />

        {/* ══ 14. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/- Link Building.webp" description={<>Every day your competitors keep earning links, the gap in domain authority gets harder to close. Content and on-page work can only take rankings so far without it. Reach out and we will help you <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>build the backlink profile Google actually trusts</span>.</>} heading="Ready to Earn" headingHighlight="Real Authority?" primaryLabel="Claim My Free Backlink Audit" secondaryLabel="Talk to a Link Building Specialist" />
      </main>
      <Footer />
    </>
  );
}
