'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'AI visibility audit across Google AI Overviews, ChatGPT, and Perplexity',
  'Answer-ready content structure and AEO optimisation',
  'Entity clarity and knowledge graph optimisation',
  'FAQ and structured schema implementation',
  'E-E-A-T and authority signal strengthening',
  'GEO, Generative Engine Optimisation for AI citation',
];

const SHIFT_GAINS = [
  { icon: 'fa-solid fa-magnifying-glass-location', title: 'Visibility where your customers are already searching', desc: 'Hundreds of millions of people now use AI platforms to research, compare, and find businesses. Being recommended there puts your business in front of buyers at the moment they are forming their decision.' },
  { icon: 'fa-solid fa-bolt', title: 'Traffic that converts at a much higher rate', desc: 'AI search referral traffic converts at 14.2% on average, five times higher than standard organic traffic. The visitors who arrive from AI citations have already been pre-qualified by the AI’s recommendation.' },
  { icon: 'fa-solid fa-flag-checkered', title: 'A first-mover advantage that compounds', desc: 'The vast majority of local businesses have not taken any deliberate steps to optimise for AI search. Early movers in any category have a significant, time-limited window to establish presence before competitors catch up.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Resilience as search continues to evolve', desc: 'Businesses optimised for AI search are better positioned for every future platform shift. The signals that feed AI visibility, entity clarity, authoritative content, structured data, strong reviews, are durable across every search format.' },
  { icon: 'fa-solid fa-award', title: 'Credibility by association', desc: 'When ChatGPT or Google recommends your business, it carries an implied endorsement. Visitors who find you through AI recommendations arrive with a higher level of trust than visitors who find you through a standard search result.' },
];

const CARD_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const ANSWER_SOURCES = [
  { icon: 'fa-solid fa-file-lines', title: 'Your website content', desc: 'AI platforms crawl and index your site. Content that directly answers specific questions, in clear, plain language, structured with headings and concise paragraphs, gets extracted and cited. Thin, vague, or keyword-stuffed content gets ignored.' },
  { icon: 'fa-solid fa-code', title: 'Structured data and schema markup', desc: 'Schema tells AI systems exactly what your content is about. FAQ schema, Service schema, LocalBusiness schema, and Review schema all feed into how AI platforms understand and classify your business. Sites without schema are harder for AI to interpret and trust.' },
  { icon: 'fa-solid fa-map-location-dot', title: 'Your Google Business Profile', desc: 'For local and service-area queries, AI platforms, including Google AI Overviews, pull heavily from GBP data. Your categories, services, reviews, and Q and A all feed into whether you appear in AI-generated local recommendations.' },
  { icon: 'fa-solid fa-newspaper', title: 'Third-party mentions and citations', desc: 'AI systems weigh how often and where your business is mentioned across the web, news sites, industry publications, directories, review platforms, and social profiles. Consistent, authoritative third-party mentions build entity trust that AI platforms rely on.' },
  { icon: 'fa-solid fa-star', title: 'Reviews and ratings', desc: 'Review content, not just star ratings, feeds AI understanding of your business. AI platforms extract keywords from reviews to understand what services you actually deliver and how customers describe them.' },
  { icon: 'fa-solid fa-fingerprint', title: 'Entity clarity', desc: 'AI systems need to know unambiguously who your business is, what it does, where it operates, and how it relates to other entities on the web. Inconsistent NAP data, conflicting business descriptions, and missing knowledge graph signals make you harder to cite confidently.' },
  { icon: 'fa-solid fa-medal', title: 'E-E-A-T signals', desc: 'Experience, Expertise, Authoritativeness, and Trustworthiness, Google’s framework that now feeds directly into AI Overview citations. Businesses and content creators who demonstrate genuine expertise are cited more frequently than those who do not.' },
];

const PLATFORMS = [
  { icon: 'fa-brands fa-google', title: 'Google AI Overviews', desc: 'The most important AI surface for most businesses. AI Overviews now appear on 60% of US Google searches and are the first thing most users see. Being cited here means your business appears above every organic result on the page.', img: 'https://images.unsplash.com/photo-1586125674857-4eb86880905d?w=500&q=80' },
  { icon: 'fa-solid fa-comments', title: 'ChatGPT Search', desc: '883 million monthly users. 2.5 billion daily prompts. ChatGPT is now the fifth most visited website globally and processes queries that would previously have gone to Google. When someone asks ChatGPT for a recommendation in your category, you need to be in the answer.', img: 'https://images.unsplash.com/photo-1751448582395-27fc57293f1a?w=500&q=80' },
  { icon: 'fa-solid fa-compass', title: 'Perplexity', desc: 'Perplexity’s 18 to 22% click-through rate on cited sources is materially higher than Google AI Overviews, the businesses it recommends get the traffic. Perplexity is disproportionately used by researchers, professionals, and high-value buyers, making citations here particularly valuable.', img: 'https://images.unsplash.com/photo-1778735940467-1335c201966d?w=500&q=80' },
  { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Google Gemini', desc: 'Google’s AI assistant surfaces across Search, Google Workspace, and Android. Gemini uses Google’s index and entity graph, the same signals that feed traditional Google rankings, plus structured data and GBP signals.', img: 'https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?w=500&q=80' },
  { icon: 'fa-brands fa-microsoft', title: 'Microsoft Copilot', desc: 'Integrated into Bing, Windows, and Microsoft 365, Copilot handles hundreds of millions of queries per month with a heavy skew toward professional and enterprise users. High-value B2B and professional service businesses benefit significantly from Copilot visibility.', img: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?w=500&q=80' },
];

const SERVICES = [
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'AI Visibility Audit', desc: 'We test your business across Google AI Overviews, ChatGPT, Perplexity, and Gemini, using the actual queries your customers search for. You get a clear picture of where you are being cited, where you are invisible, and exactly what is causing each gap.' },
  { icon: 'fa-solid fa-file-lines', title: 'Answer-Ready Content Optimisation', desc: 'We restructure your existing content, or create new content, specifically for AI extraction. Clear question-and-answer formats, concise direct answers, proper heading structure, and the right content depth for AI platforms to parse and cite with confidence.' },
  { icon: 'fa-solid fa-code', title: 'AEO and FAQ Schema Implementation', desc: 'We implement FAQ schema, HowTo schema, Service schema, and other structured data types that directly feed AI understanding of your content. This makes your pages machine-readable in the way AI platforms require to cite them confidently.' },
  { icon: 'fa-solid fa-fingerprint', title: 'Entity Optimisation and Knowledge Graph Signals', desc: 'We make sure your business is clearly and consistently defined across every platform where AI systems look for entity data, your website, Google Business Profile, industry directories, and social profiles. Inconsistent entity data is one of the most common reasons businesses are passed over in AI citations.' },
  { icon: 'fa-solid fa-medal', title: 'E-E-A-T Authority Building', desc: 'We strengthen the Experience, Expertise, Authoritativeness, and Trustworthiness signals that Google and AI platforms use to decide which sources to trust. This includes author credibility signals, expert content development, and third-party citation building on relevant publications.' },
  { icon: 'fa-solid fa-diagram-project', title: 'GEO, Generative Engine Optimisation', desc: 'GEO is the discipline of structuring your online presence specifically for AI generation, making sure AI platforms can pull accurate, relevant, up-to-date information about your business and use it to construct confident recommendations.' },
  { icon: 'fa-solid fa-map-location-dot', title: 'Google Business Profile for AI Search', desc: 'GBP is a primary data source for AI-generated local recommendations. We optimise every element of your GBP, categories, services, Q and A, review strategy, specifically for AI extraction, not just traditional local search.' },
  { icon: 'fa-solid fa-chart-line', title: 'AI Search Monitoring and Reporting', desc: 'We track your visibility across AI platforms continuously, testing the queries that matter to your business and reporting on where you appear, where you do not, and what is changing month over month.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-arrow-trend-down', title: 'Businesses whose organic traffic is declining', desc: 'If your rankings have held but traffic has dropped, AI Overviews are almost certainly taking clicks from your organic results. AI SEO addresses the root cause directly.', img: 'https://images.unsplash.com/photo-1745509267699-1b1db256601e?w=700&q=80' },
  { icon: 'fa-solid fa-chess', title: 'Businesses in competitive markets', desc: 'In competitive industries, AI citations are becoming the new page-one position. Being recommended by ChatGPT or Google AI Overviews in a competitive category gives you a visibility edge that organic rankings alone cannot replicate.', img: 'https://images.unsplash.com/photo-1523875194681-bedd468c58bf?w=700&q=80' },
  { icon: 'fa-solid fa-briefcase', title: 'Professional service businesses', desc: 'Lawyers, accountants, consultants, financial advisors, healthcare providers, professional services are heavily researched through AI tools before a contact decision is made. AI visibility in these categories has a direct and measurable impact on enquiry volume.', img: 'https://images.unsplash.com/photo-1642522029686-5485ea7e6042?w=700&q=80' },
  { icon: 'fa-solid fa-truck', title: 'Local and service-area businesses', desc: 'AI platforms increasingly surface local recommendations for service queries. HVAC, plumbing, dental, legal, real estate, if your customers search locally, AI search is already part of their discovery process.', img: 'https://images.unsplash.com/photo-1641199788912-9a7385a35c82?w=700&q=80' },
  { icon: 'fa-solid fa-server', title: 'B2B businesses and SaaS companies', desc: 'AI search adoption is highest among professional and technical buyers, the exact audience B2B businesses need to reach. Perplexity and ChatGPT are now primary research tools for procurement decisions in many industries.', img: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=700&q=80' },
  { icon: 'fa-solid fa-rocket', title: 'Forward-thinking businesses that want first-mover advantage', desc: 'The vast majority of businesses in any category have not started AI SEO. The window to establish presence before competitors is open right now. Early movers compound their advantage over time as AI systems develop stronger associations with their brand.', img: 'https://images.unsplash.com/photo-1484383707950-89c8d3276e53?w=700&q=80' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'We test before we claim', desc: 'Before any engagement, we run your business through the actual queries your customers use across multiple AI platforms. You see exactly where you are visible and where you are not, before we start and after we deliver.' },
  { icon: 'fa-solid fa-layer-group', title: 'We cover every major AI platform', desc: 'Google AI Overviews, ChatGPT, Perplexity, Gemini, and Copilot. Not just one surface. We optimise for the full AI search landscape so you are not building visibility on a single platform while missing the rest.' },
  { icon: 'fa-solid fa-puzzle-piece', title: 'AI SEO is built into everything we do', desc: 'Every service Isuremedia delivers, local SEO, technical SEO, on-page SEO, link building, content, is now built with AI visibility in mind. AEO is not an add-on. It is embedded in the way we work across your entire search presence.' },
  { icon: 'fa-solid fa-screwdriver-wrench', title: 'We do the implementation, not just the strategy', desc: 'Schema markup, entity optimisation, content restructuring, GBP optimisation for AI search, we handle the execution, not just the recommendations. If it needs to be done, we do it.' },
  { icon: 'fa-solid fa-chart-line', title: 'Plain English reporting on AI visibility', desc: 'AI search is new enough that most reporting is technical and hard to interpret. We track your AI visibility in plain English, which queries you appear for, which platforms cite you, and what has changed month over month.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no lock-in', desc: 'AI search is evolving fast. We do not lock you into long contracts because the strategy needs to evolve with the platforms. You stay because your visibility is improving, not because you are obligated to.' },
];

const PROCESS = [
  { n: '01', title: 'AI Visibility Audit', desc: 'We test your business across Google AI Overviews, ChatGPT, Perplexity, and Gemini using the actual queries your customers search. We map where you appear, where you do not, and what signals are causing each gap. This is the starting point for everything that follows.' },
  { n: '02', title: 'Entity and Signal Audit', desc: 'We audit your entity clarity, how consistently and completely your business is defined across your website, GBP, directories, social profiles, and third-party mentions. We identify every inconsistency that reduces AI confidence in recommending your business.' },
  { n: '03', title: 'Content and Schema Optimisation', desc: 'We restructure your key pages for AI extraction, answer-first content, proper heading structure, concise direct answers, FAQ schema, Service schema, and any other structured data your pages need. We also optimise your GBP specifically for AI-generated local recommendations.' },
  { n: '04', title: 'Authority and E-E-A-T Signals', desc: 'We strengthen the trust signals AI platforms use to evaluate credibility, third-party citations on relevant publications, review strategy, author expertise signals, and entity associations across the web.' },
  { n: '05', title: 'Monitoring and Ongoing Optimisation', desc: 'AI search changes fast. We monitor your visibility across platforms monthly, test new queries as your business evolves, and adjust your strategy as AI platforms update their citation logic and ranking signals.' },
];

const FAQS = [
  { q: 'What is the difference between AI SEO, AEO, and GEO?', a: 'AI SEO is the broad practice of optimising your online presence for AI-powered search platforms. AEO, Answer Engine Optimisation, focuses specifically on structuring content so AI systems extract it as a direct answer. GEO, Generative Engine Optimisation, focuses on making your brand a source that AI generation models cite when constructing responses. All three overlap significantly and Isuremedia works across all of them.' },
  { q: 'Will AI SEO replace traditional SEO?', a: 'No. Traditional SEO and AI SEO work together. Google still handles the majority of searches and organic rankings still matter. AI SEO extends your visibility into the growing share of searches that are handled by AI platforms, it does not replace the work of ranking in traditional search results. The businesses winning in 2026 are doing both.' },
  { q: 'How do I know if my business is being recommended in AI search?', a: 'You can test this manually by asking ChatGPT, Perplexity, and Google directly for recommendations in your category and location. A more complete picture comes from a structured AI visibility audit, testing the range of queries your customers actually use across multiple platforms. Isuremedia provides this as a free starting point.' },
  { q: 'How long does it take to appear in AI search results?', a: 'Perplexity typically reflects optimisation changes within thirty to sixty days. Google AI Overviews and ChatGPT generally take longer, most businesses see measurable improvement within eight to twelve weeks of implementing core AI visibility signals. Timelines vary depending on how established your domain authority is and how competitive your category is.' },
  { q: 'Can any business appear in AI search results or only big brands?', a: 'Any business can appear in AI search results. AI platforms do not inherently favour large brands, they favour businesses whose online presence is structured in a way they can read, trust, and cite. A well-optimised small business with clear entity signals and answer-ready content will consistently outperform a large brand with a poorly structured online presence.' },
  { q: 'What is entity optimisation and why does it matter for AI search?', a: 'Entity optimisation is the process of ensuring your business is clearly and consistently defined across every platform where AI systems look for information. AI platforms need to know unambiguously who you are and what you do before they will cite you confidently. Inconsistent or missing entity signals are one of the most common reasons businesses are passed over in AI recommendations.' },
  { q: 'Does AI SEO affect my traditional Google rankings?', a: 'The signals that feed AI visibility, strong content, structured data, entity clarity, authoritative backlinks, E-E-A-T signals, are the same signals that feed traditional Google rankings. AI SEO and traditional SEO share a foundation. Improving one almost always improves the other.' },
  { q: 'What schema types are most important for AI search visibility?', a: 'FAQ schema, Service schema, LocalBusiness schema, and Organization schema are the most impactful for most businesses. These help AI platforms parse your content, understand your services, and verify your business identity. We implement and validate all relevant schema types as part of our AI SEO work.' },
  { q: 'My traffic has been dropping but my rankings look fine. Is AI search the reason?', a: 'Quite possibly. When AI Overviews appear on a search result, click-through rates on organic results below them drop by 38%. Your ranking can stay the same while traffic falls because the AI Overview above you is taking the clicks instead. An AI visibility audit will show whether this is happening on your most important search terms.' },
  { q: 'How do you measure success in AI search?', a: 'We track visibility across platforms, which queries trigger citations of your business, on which platforms, and how that changes month over month. We also track referral traffic from AI platforms and conversion rates from that traffic. AI search reporting is different from traditional rank tracking and we build it around the metrics that actually reflect business impact.' },
];

/* ── FAQ 2-COL, matches the Local SEO page layout ── */
function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="aiseo-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <div className="aiseo-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>AI SEO and AEO</span>
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
          .aiseo-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .aiseo-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function AISEOPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="aiseo-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="aiseo-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* Left, copy */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Get Your Business Into AI Search Results Before Your Competitors{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Do.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  ChatGPT, Perplexity, Google AI Overviews, and Gemini are now where buying decisions start. We optimise your business to{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>be the answer those platforms recommend</span>{' '}
                 , not the one they ignore.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Get a Free AI Visibility Audit
                  </a>
                </div>
              </div>

              {/* Right, photo + floating badges */}
              <div className="aiseo-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/banner/ai seo.webp" alt="AI SEO" style={{ width: '100%', height: 440, objectFit: 'contain', borderRadius: 24, display: 'block' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-robot" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>Cited by AI Overview</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      (<img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />)
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>150+ Businesses Made AI-Visible</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>You&apos;re in the Answer</span>
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
              .aiseo-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .aiseo-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .aiseo-hero { padding: 48px 0 64px !important; }
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
                  Your Business Might Already Be Invisible in AI Search and Not Know It.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  AI Overviews now appear on 60% of US Google searches. ChatGPT crossed 900 million weekly users in early 2026. Perplexity, Gemini, and Copilot are handling hundreds of millions of queries every week. When someone asks one of these platforms who the best option is in your category, your business either shows up or it does not. Most businesses are not showing up, not because they are not good enough, but because their online presence is not structured in a way AI systems can read, trust, and cite.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  Isuremedia fixes that. We optimise your content, your entity signals, your structured data, and your authority so AI platforms have{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>every reason to recommend your business</span>{' '}
                  over competitors.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Claim Your Free AI Visibility Audit
                </a>
              </div>
              <div style={{ background: '#fff', borderRadius: 20, padding: '36px 32px', border: '1px solid var(--color-border)', boxShadow: '0 20px 50px rgba(0,35,83,.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 6px 16px rgba(255,176,0,.35)' }}>
                    <i className="fa-solid fa-list-check" style={{ color: 'var(--color-navy)', fontSize: 15 }} />
                  </div>
                  <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', margin: 0 }}>What we handle for you</p>
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

        {/* ══ 04. WHAT IS AI SEO AND AEO ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="aiseo-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="aiseo-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  Show Up Where the Next Generation of Search Is Already Happening.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    AI SEO is the practice of optimising your online presence so AI-powered search platforms can find, understand, trust, and recommend your business. AEO, Answer Engine Optimisation, is a specific discipline within that, focused on{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>structuring your content so AI systems extract it as a direct answer</span>{' '}
                    to a user&apos;s question.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Traditional SEO targets keyword rankings in Google&apos;s blue-link results. AI SEO targets something different,{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>the answers that ChatGPT, Perplexity, Google AI Overviews, and Gemini generate</span>{' '}
                    when someone asks a question related to your business or industry.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    The distinction matters because AI search works differently. There is no page two. There is no position seven. AI platforms surface one answer, or a short list of sources, and the businesses cited in those answers get the attention. Everyone else gets nothing. AEO and GEO, Generative Engine Optimisation, are the disciplines that determine which businesses those platforms choose to recommend. Isuremedia does both.
                  </p>
                </div>
              </div>
              <div className="aiseo-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                {/* Decorative background rings */}
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                {/* Central gauge */}
                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 313deg, var(--ism-blue-100) 313deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>87</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>AI Visibility</span>
                  </div>
                </div>

                {/* Floating badge, ChatGPT */}
                <div className="aiseo-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-comments" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>ChatGPT</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>Cited</div>
                  </div>
                </div>

                {/* Floating badge, AI Overview */}
                <div className="aiseo-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-brands fa-google" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>AI Overview</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Top Answer</div>
                  </div>
                </div>

                {/* Floating badge, Perplexity */}
                <div className="aiseo-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-compass" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Perplexity</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>Cited</div>
                  </div>
                </div>

                {/* Floating badge, Gemini */}
                <div className="aiseo-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-wand-magic-sparkles" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Gemini</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Cited</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .aiseo-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .aiseo-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .aiseo-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .aiseo-score-badge{ padding:8px 10px !important; gap:7px !important; } .aiseo-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. THE SHIFT THAT IS ALREADY HAPPENING ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>The Gap Between AI-Visible and AI-Invisible Businesses Is Growing Every Month.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                This is not a future trend. It is happening right now, and the numbers make it clear. AI Overviews now appear on roughly 60% of US Google searches, up from 25% just twelve months ago. ChatGPT processes 2.5 billion prompts every day. AI search traffic converts at 14.2% compared to Google&apos;s 2.8%, five times higher per visit. The users arriving from AI search are not browsing. They are ready to act.
                At the same time, click-through rates on traditional organic results drop 38% when an AI Overview is present on the same page. That traffic is not disappearing. It is going to the businesses the AI cites instead.
              </p>
            </div>
            <div className="shift-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 48 }}>
              {SHIFT_GAINS.map((w, i) => {
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
                See Where Your Business Stands in AI Search
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .shift-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .shift-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. WHERE AI SYSTEMS PULL THEIR ANSWERS FROM ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Understanding This Is What Separates Businesses That Get Cited from Those That Do Not.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                AI platforms do not guess. They pull information from specific, identifiable sources, and businesses that structure their online presence around those sources get recommended. Businesses that do not, stay invisible.
              </p>
            </div>
            <div className="answer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {ANSWER_SOURCES.map((f, i) => {
                const hl = i === 0;
                return (
                  <div key={f.title} className={hl ? 'answer-card answer-card-hl' : 'answer-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="answer-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`answer-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <h3 className="answer-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                    </div>
                    <p className="answer-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .answer-card:not(.answer-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .answer-card:not(.answer-card-hl):hover .answer-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .answer-card:not(.answer-card-hl):hover .answer-card-icon{ color: #fff !important; }
            .answer-card:not(.answer-card-hl):hover .answer-card-title{ color: #fff !important; }
            .answer-card:not(.answer-card-hl):hover .answer-card-desc{ color: rgba(255,255,255,.85) !important; }
            .answer-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .answer-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 07. THE PLATFORMS WE OPTIMISE FOR ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>One Strategy. Every Platform Where Your Customers Are Searching.</h2>
            </div>
            <p style={{ textAlign: 'center', fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 32 }}>The AI Platforms We Optimise Your Business For</p>
            <div className="platform-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {PLATFORMS.map(g => (
                <div key={g.title} className="platform-card" style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <div style={{ position: 'relative', height: 170, overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.img} alt="" className="platform-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '22px 24px 26px' }}>
                    <div className="platform-card-icon" style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, transition: 'background .2s ease' }}>
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
            .platform-card{ transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
            .platform-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.12); border-color: transparent; }
            .platform-card-img{ transition: transform .4s ease; }
            .platform-card:hover .platform-card-img{ transform: scale(1.08); }
            .platform-card:hover .platform-card-icon{ background: var(--ism-amber); }
            .platform-card:hover .platform-card-icon i{ color: var(--color-navy) !important; }
            @media (max-width:900px){ .platform-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .platform-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 08. WHAT AI INVISIBILITY IS COSTING YOU ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>This Is Happening Right Now. Not in the Future.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  When an AI Overview appears on a Google search result, click-through rates on traditional organic results drop by{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>38%</span>.{' '}
                  That traffic does not disappear. It goes to the businesses the AI cites in the summary above the results.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  If your business is not one of them, you are losing traffic you used to get, silently, with no warning and no obvious explanation for why your numbers are declining.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  AI search traffic converts at{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>14.2% on average</span>{' '}
                 , five times higher than standard organic traffic. The visitors AI platforms send are pre-qualified and high-intent. Missing out on them is not just a traffic problem. It is a revenue problem.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  The vast majority of local businesses have not taken any deliberate steps to optimise for AI search. That gap is closing fast. The businesses that move now establish presence before competitors catch up. The ones that wait are already behind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 09. ISM AI SEO AND AEO SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our AI SEO and AEO Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Everything It Takes to Get Your Business Cited, Recommended, and Found in AI Search.</p>
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

        {/* ══ 10. WHO THIS IS FOR ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Who AI SEO and AEO Is Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If Your Customers Are Searching, Some of Them Are Using AI Already.</p>
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

        {/* ══ 11. MID-PAGE CTA STRIP ══════════════════════════════════════════════ */}
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="mid-cta" style={{ background: 'var(--color-primary)', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
              <div aria-hidden style={{ position: 'absolute', top: '-30%', right: '-5%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', maxWidth: 560 }}>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Find out whether your business shows up when customers ask AI for a recommendation in your category.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  A free AI visibility audit tests the actual queries your customers use across Google, ChatGPT, and Perplexity.
                </p>
              </div>
              <a href="/contact" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Run My Free AI Visibility Audit <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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

        {/* ══ 12. WHY CHOOSE ISM ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Businesses Choose Isuremedia for AI SEO and AEO</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Real AI Visibility Work. Not Just a Rebadged SEO Service.</p>
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
                  <img src="https://picsum.photos/seed/aiseowhatmakesdifferent/700/620" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

        {/* ══ 13. OUR PROCESS ══════════════════════════════════════════════ */}
        <section className="aiseo-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                How Isuremedia Builds Your <span style={{ color: 'var(--ism-amber)' }}>AI Search Visibility</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Audit Across Every Platform. Fix What Matters. Track What Changes.
              </p>
            </div>
            <div className="aiseo-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, position: 'relative' }}>
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
              <strong style={{ color: 'var(--color-navy)' }}>Typical timeline:</strong> Initial AI visibility improvements are typically measurable within eight to twelve weeks of implementing core signals. Perplexity often updates within thirty to sixty days. Google AI Overviews and ChatGPT typically take longer to reflect changes.
            </p>
            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 22px rgba(255,176,0,.38)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Get a Free AI Visibility Audit
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .aiseo-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
              .aiseo-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 14. FAQ ══════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ 15. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/AI seo.webp" description={<>ChatGPT, Perplexity, and Google AI Overviews are answering your customers' questions right now, with or without your business in the answer. The only question is whether you show up as the recommendation or stay invisible. Talk to us today and let's <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>get your business cited by AI</span>.</>} heading="Ready to Get" headingHighlight="Cited by AI?" primaryLabel="Get My Free AI Visibility Audit" secondaryLabel="Talk to an AI Search Expert" />
      </main>
      <Footer />
    </>
  );
}
