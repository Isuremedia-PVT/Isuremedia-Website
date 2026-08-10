'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'Google Business Profile setup and optimisation',
  'Local citations and NAP consistency across the web',
  'On-page content optimised for local search',
  'Review generation and reputation management',
  'AI search and Google Maps visibility',
];

const WHY_MATTERS = [
  { icon: 'fa-solid fa-map-location-dot', title: 'Map pack visibility', desc: '93% of local intent searches trigger a local pack in Google results. The three businesses in it capture the overwhelming share of clicks, calls, and direction requests.' },
  { icon: 'fa-solid fa-bolt', title: 'High-intent traffic', desc: '76% of near me mobile searches lead to a physical visit within 24 hours. People searching locally are not window shopping.' },
  { icon: 'fa-solid fa-address-card', title: 'Consistent business information', desc: 'Your name, address, phone number, and hours need to be accurate everywhere online. Inconsistencies cost you rankings and customer trust.' },
  { icon: 'fa-solid fa-star', title: 'More and better reviews', desc: '78% of consumers will not consider a business rated below four stars. Your review profile is often the first thing a potential customer looks at.' },
  { icon: 'fa-solid fa-robot', title: 'Visibility in AI search', desc: 'Google AI Overviews, ChatGPT, and Perplexity are increasingly the first place people go for local recommendations. Local SEO now includes being visible there too.' },
  { icon: 'fa-solid fa-chart-line', title: 'Long-term compounding returns', desc: 'Paid ads stop the moment you stop paying. Local SEO builds authority over time and keeps delivering traffic without ongoing ad spend.' },
];

const WHY_MATTERS_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const RANKING_FACTORS = [
  { icon: 'fa-solid fa-map-location-dot', title: 'Google Business Profile', impact: 'Highest impact', desc: 'Your GBP is the single most important factor in local rankings. Google looks at how complete your profile is, whether your business category is accurate, how often you post updates, and how many photos you have. An incomplete or unoptimised GBP costs you visibility every single day.' },
  { icon: 'fa-solid fa-address-card', title: 'NAP Consistency', impact: 'High impact', desc: 'Your name, address, and phone number need to be identical everywhere your business appears online — your website, Google, directories, social profiles. Any mismatch sends a trust signal to Google that your information is unreliable.' },
  { icon: 'fa-solid fa-star', title: 'Reviews and Ratings', impact: 'High impact', desc: 'Google looks at how many reviews you have, how recent they are, your average rating, and whether you respond to them. 97% of consumers read reviews before choosing a local business. Your review profile affects both your rankings and whether someone clicks once they find you.' },
  { icon: 'fa-solid fa-list-check', title: 'Local Citations', impact: 'Medium impact', desc: 'A citation is any mention of your business online — in directories, data aggregators, local listings, and industry platforms. The more consistent and widespread your citations are, the stronger the signal to Google that your business is established in your area.' },
  { icon: 'fa-solid fa-file-lines', title: 'On-Page Local Signals', impact: 'Medium impact', desc: 'Your website needs to tell Google where you operate. That means location keywords in page titles, headings, and body content, your address in the footer, local schema markup, and dedicated pages for each service area or location you cover.' },
  { icon: 'fa-solid fa-link', title: 'Local Link Authority', impact: 'Medium impact', desc: 'Links from local news outlets, business associations, chambers of commerce, and community organisations build geographic authority for your website. These carry strong local relevance signals that generic links cannot replicate.' },
  { icon: 'fa-solid fa-location-crosshairs', title: 'Proximity and User Experience', impact: 'Contextual', desc: 'Google factors in how close the searcher is to your business. Alongside proximity, your website load speed and mobile experience affect rankings. 70% of local searches happen on mobile. A slow or difficult site loses customers before they ever contact you.' },
  { icon: 'fa-solid fa-robot', title: 'AI Search Visibility', impact: 'Growing fast', desc: 'Google AI Overviews, ChatGPT, and Perplexity now surface local business recommendations directly in search. Businesses with optimised GBPs, structured data, and strong review profiles are the ones appearing in these AI-generated answers. This is no longer optional.' },
];

const GBP_ITEMS = [
  { icon: 'fa-solid fa-clipboard-check', title: 'Full profile setup and optimisation', desc: 'We make sure every section of your profile is complete — business categories, service descriptions, attributes, hours, and contact details. Nothing left blank, nothing left to chance.', img: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?w=500&q=80' },
  { icon: 'fa-solid fa-camera', title: 'Photo and video management', desc: 'Profiles with photos receive significantly more clicks and direction requests. We manage your photo library and keep it current with real images of your business, team, and work.', img: 'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=500&q=80' },
  { icon: 'fa-solid fa-bullhorn', title: 'Google Posts and updates', desc: 'Regular posts signal to Google that your business is active. We publish updates, offers, and announcements consistently so your profile stays fresh in both rankings and first impressions.', img: 'https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?w=500&q=80' },
  { icon: 'fa-solid fa-comments', title: 'Q and A management', desc: 'The questions section on your GBP gets populated whether you manage it or not. We pre-populate it with the questions your customers actually ask and make sure the answers represent your business accurately.', img: 'https://images.unsplash.com/photo-1766066014237-00645c74e9c6?w=500&q=80' },
  { icon: 'fa-solid fa-reply', title: 'Review response strategy', desc: 'Responding to reviews is a ranking signal and a trust signal. We help you build a response process that keeps your profile active and shows potential customers that your business is attentive.', img: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=500&q=80' },
  { icon: 'fa-solid fa-list', title: 'Service and product listings', desc: 'Every service you offer can be listed with a description and pricing indicator. We set these up properly so your profile communicates exactly what you do to both Google and the visitor.', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=500&q=80' },
];

const SERVICES = [
  { icon: 'fa-solid fa-map-location-dot', title: 'Google Business Profile Optimisation', desc: 'Your GBP is the most visible part of your local presence. We set it up completely, optimise every section, manage your photos and posts, handle Q and A, and keep it active so Google keeps ranking it.' },
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Local SEO Audit', desc: 'Before we touch anything, we audit your current local presence — your GBP, citations, on-page signals, competitor rankings, and review profile. You get a clear picture of where you stand and exactly what needs fixing.' },
  { icon: 'fa-solid fa-building-columns', title: 'Citation Building and Management', desc: 'We build and manage your business listings across directories, data aggregators, and local platforms. Every listing is checked for NAP consistency so your information is accurate everywhere it appears.' },
  { icon: 'fa-solid fa-file-lines', title: 'On-Page Local SEO', desc: 'We optimise your website for local search — location keywords, page titles, headings, local schema markup, and dedicated service area pages. Your site becomes a strong local signal, not just a brochure.' },
  { icon: 'fa-solid fa-star', title: 'Review Generation', desc: 'We help you build a consistent review strategy that increases your volume, improves your rating, and generates the kind of keyword-rich reviews that feed local rankings. More reviews, more trust, more calls.' },
  { icon: 'fa-solid fa-link', title: 'Local Link Building', desc: 'We earn links from local news sites, business directories, associations, and community organisations in your area. These build the geographic authority that puts you above competitors who rely on generic backlinks.' },
  { icon: 'fa-solid fa-location-dot', title: 'Location and Service Area Pages', desc: 'If you serve multiple areas or have more than one location, we build and optimise dedicated pages for each. Each page targets the right local keywords and gives Google a clear signal about where you operate.' },
  { icon: 'fa-solid fa-robot', title: 'AI Search and Local Visibility', desc: 'We optimise your business to appear in Google AI Overviews, ChatGPT, and Perplexity local recommendations. This includes structured data, entity optimisation, and answer-shaped content that AI systems can extract and cite directly.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-store', title: 'Single-location businesses', desc: 'Restaurants, salons, dental practices, law firms, gyms, retail shops — any business with one physical location that wants more foot traffic and phone calls from nearby customers.', img: 'https://images.unsplash.com/photo-1766758196132-c81bdd247238?w=700&q=80' },
  { icon: 'fa-solid fa-truck', title: 'Service-area businesses', desc: 'Plumbers, electricians, HVAC contractors, cleaners, landscapers — businesses that travel to the customer and serve a defined area without a public-facing shopfront. Local SEO works just as well without a physical address.', img: 'https://images.unsplash.com/photo-1641199788912-9a7385a35c82?w=700&q=80' },
  { icon: 'fa-solid fa-building', title: 'Multi-location businesses', desc: 'Businesses with two or more locations need local SEO handled per location. Each site needs its own GBP, its own citations, and its own local page to rank independently in its area.', img: 'https://images.unsplash.com/photo-1617565817140-53081ee8f047?w=700&q=80' },
  { icon: 'fa-solid fa-sitemap', title: 'Franchises', desc: 'Franchise owners need visibility at the local level, not just brand-wide. We handle local SEO for individual franchise locations so each one performs in its own market.', img: 'https://images.unsplash.com/photo-1784646583927-3159480116ac?w=700&q=80' },
  { icon: 'fa-solid fa-arrow-trend-down', title: 'Businesses losing ground to competitors', desc: 'If you have been in business for years but newer competitors are outranking you locally, it is almost always a local SEO problem — not a product or service problem. We fix what is holding your rankings back.', img: 'https://images.unsplash.com/photo-1745509267699-1b1db256601e?w=700&q=80' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-user-tie', title: 'We handle everything in-house', desc: 'No subcontractors. No outsourced work. Your local SEO is handled by the same team start to finish — the people who built the strategy are the people doing the work.' },
  { icon: 'fa-solid fa-robot', title: 'We cover AI search, not just Google', desc: 'Most local SEO agencies are still optimising for the Google of three years ago. We make sure your business shows up in Google AI Overviews, ChatGPT, and Perplexity — where more local searches are heading every month.' },
  { icon: 'fa-solid fa-sliders', title: 'Flexible plans for every budget', desc: 'Local SEO should not be out of reach for a small business. We offer plans that work at different budgets and scale as your results grow. No long contracts, no surprise fees.' },
  { icon: 'fa-solid fa-chart-line', title: 'Full visibility into everything we do', desc: 'You get regular reports in plain English — not dashboards full of numbers that mean nothing. You will always know what we are working on, what has improved, and what is coming next.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no lock-in', desc: 'We do not tie you into long contracts because we believe the results speak for themselves. You stay because it is working, not because you signed something twelve months ago.' },
  { icon: 'fa-solid fa-headset', title: 'One dedicated contact', desc: 'You will not be passed between account managers or left waiting for replies. You have one person who knows your business, answers your questions, and is responsible for your results.' },
];

const PROCESS = [
  { n: '01', title: 'Local SEO Audit', desc: 'We start by auditing your full local presence — your GBP, citations, on-page signals, competitor rankings, and review profile. This tells us exactly where you stand and what is holding you back before we touch anything.' },
  { n: '02', title: 'Strategy and Setup', desc: 'Based on the audit, we build a local SEO plan specific to your business, your location, and your competitors. We set up or optimise your GBP, fix citation inconsistencies, and make the on-page changes your site needs.' },
  { n: '03', title: 'Citation Building and Content', desc: 'We build your citations across the right directories and platforms, create or optimise your service area pages, and develop the local content that tells Google exactly where you operate and what you offer.' },
  { n: '04', title: 'Review and Authority Building', desc: 'We implement your review generation strategy and begin building local links from relevant sources in your area. This is where your local authority starts compounding over time.' },
  { n: '05', title: 'Reporting and Ongoing Optimisation', desc: 'You receive regular reports covering your rankings, GBP performance, traffic, and call volume. We review what is working, adjust what is not, and keep building on the gains each month.' },
];

const FAQS = [
  { q: 'How long does local SEO take to show results?', a: 'Map pack visibility can improve in two to four weeks for less competitive searches. Meaningful organic ranking improvements typically take three to six months. Local SEO is not instant, but the results compound over time and keep delivering without ongoing ad spend.' },
  { q: 'What is the Google local pack and why does it matter?', a: 'The local pack is the map with three business listings that appears at the top of Google when someone searches with local intent. Businesses in it get 126% more traffic and 93% more calls than those ranked below it. Getting into the local pack is the primary goal of local SEO.' },
  { q: 'Do I need a physical address to do local SEO?', a: 'No. Service-area businesses — plumbers, electricians, cleaners, contractors — can rank in local search without a public-facing address. You define your service area in Google and we optimise around that.' },
  { q: 'What is the difference between local SEO and regular SEO?', a: 'Regular SEO targets national or global search rankings. Local SEO targets customers in a specific geographic area. It uses different signals — your GBP, NAP consistency, local citations, proximity — and produces different results: calls, visits, and local leads rather than general website traffic.' },
  { q: 'How important are Google reviews for local SEO?', a: 'Very important. Review volume, recency, your average rating, and your response rate are all ranking signals. 97% of consumers read reviews before choosing a local business and 78% will not consider a business rated below four stars. Reviews affect both where you rank and whether someone contacts you once they find you.' },
  { q: 'What is NAP consistency and why does it matter?', a: 'NAP stands for name, address, and phone number. Google cross-references your business information across hundreds of sources online. If your details are inconsistent — different phone numbers, abbreviated addresses — it signals untrustworthiness and hurts your rankings.' },
  { q: 'Can local SEO help my business show up in AI search results?', a: 'Yes. Google AI Overviews, ChatGPT, and Perplexity are increasingly surfacing local business recommendations. Businesses with optimised GBPs, strong review profiles, structured data, and clear service descriptions are the ones appearing in these AI answers. We include AI search optimisation in our local SEO work.' },
  { q: 'How much does local SEO cost?', a: 'Local SEO pricing varies depending on your location, the competitiveness of your industry, and how many locations you have. We offer flexible plans that work at different budgets. The best starting point is a free audit so we can give you an honest picture of what your situation requires.' },
  { q: 'Do you work with businesses that have multiple locations?', a: 'Yes. Multi-location businesses need local SEO handled per location — separate GBPs, separate citations, separate local pages. We have experience managing local SEO across multiple locations and can scale the work accordingly.' },
  { q: 'What happens if I stop doing local SEO?', a: 'Your rankings will gradually decline as competitors continue optimising and your GBP becomes stale. Local SEO is not a one-time fix. It requires ongoing attention to maintain and build on rankings. That said, the authority you build does not disappear overnight — it fades slowly, not instantly.' },
];

/* ── FAQ 2-COL — matches the main /services/seo page layout ── */
function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="lseo-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <div className="lseo-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>Local SEO</span>
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
          .lseo-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .lseo-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function LocalSEOPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="lseo-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="lseo-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* Left — copy */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Get Found by People Searching in Your{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Area.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  We put your business where local customers are looking — Google Search, Google Maps, Google Business Profile, and AI search results.{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>Get found, get calls, get customers</span>.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Run My Free Local Audit
                  </a>
                </div>
              </div>

              {/* Right — photo + floating badges */}
              <div className="lseo-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://picsum.photos/seed/localseohero/640/720" alt="Local business owner" style={{ width: '100%', height: 440, objectFit: 'cover', borderRadius: 24, display: 'block' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-map-location-dot" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>Top 3 Map Pack</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      (<img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />)
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>200+ Local Businesses Ranked</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>You&apos;re on the Map</span>
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
              .lseo-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .lseo-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .lseo-hero { padding: 48px 0 64px !important; }
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
                  Get More Local Customers Without Spending More on Ads.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  Most local businesses lose customers to competitors who simply show up higher on Google. Your product or service may be better. But if you are not visible when someone nearby searches, it does not matter.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  Isuremedia helps you fix that. We{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>handle everything that goes into ranking locally</span>{' '}
                  so you can focus on running your business.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Claim Your Free Local SEO Audit
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

        {/* ══ 04. WHAT IS LOCAL SEO ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="lseo-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="lseo-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  Make Your Business the Obvious Choice in Your Area.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    When someone searches for a local business, Google shows a map and three results at the top of the page. Those three spots get the majority of clicks and calls. Local SEO is everything that goes into{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>earning one of those spots</span>{' '}
                    for your business.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Unlike broader SEO, local SEO targets customers in a specific area. A plumber in Dallas, a dentist in Melbourne, a law firm in Toronto — local SEO makes sure{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>the right people in the right location</span>{' '}
                    find your business when they search.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    It covers your Google Business Profile, how consistent your business details are across the web, the volume and quality of your reviews, your website&apos;s local content, and increasingly, how your business appears in AI search results. All of these work together to determine where you rank locally.
                  </p>
                </div>
              </div>
              <div className="lseo-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                {/* Decorative background rings */}
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                {/* Central gauge */}
                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 331deg, var(--ism-blue-100) 331deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>92</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>Local Score</span>
                  </div>
                </div>

                {/* Floating badge — GBP */}
                <div className="lseo-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-store" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>GBP Score</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>92%</div>
                  </div>
                </div>

                {/* Floating badge — Reviews */}
                <div className="lseo-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Reviews</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>4.8 ★</div>
                  </div>
                </div>

                {/* Floating badge — Traffic */}
                <div className="lseo-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-arrow-trend-up" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Traffic</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>+38%</div>
                  </div>
                </div>

                {/* Floating badge — Map Pack */}
                <div className="lseo-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Map Pack</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Top 3</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .lseo-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .lseo-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .lseo-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .lseo-score-badge{ padding:8px 10px !important; gap:7px !important; } .lseo-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. WHY LOCAL SEO MATTERS FOR YOUR BUSINESS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Local Search Is Where Buying Decisions Happen.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Most people searching for a local business have already made up their mind to buy. They just need to find who to buy from. 28% of local searches lead directly to a purchase, and 90% of consumers who search for local business information make a purchase within one week.
                The question is not whether local customers are searching for what you offer. They are, every day. The question is whether they find your business or your competitor&apos;s.
              </p>
            </div>
            <div className="why-matters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 48 }}>
              {WHY_MATTERS.map((w, i) => {
                const variant = WHY_MATTERS_VARIANTS[i % 3];
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
                Accelerate Your Local Growth
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .why-matters-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .why-matters-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. LOCAL RANKING FACTORS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Fix These and Your Business Starts Showing Up.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Google does not pick local results randomly. It looks at a specific set of signals for every business and ranks accordingly. Every factor below is something Isuremedia actively works on for every local SEO client.
              </p>
            </div>
            <div className="ranking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {RANKING_FACTORS.map((f, i) => {
                const hl = i === 0;
                return (
                  <div key={f.title} className={hl ? 'ranking-card ranking-card-hl' : 'ranking-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="ranking-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`ranking-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="ranking-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                        <span className="ranking-card-badge" style={{ fontFamily: J, fontSize: 10.5, fontWeight: 700, color: hl ? 'var(--ism-amber)' : 'var(--color-accent-hover)', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'color .25s ease' }}>{f.impact}</span>
                      </div>
                    </div>
                    <p className="ranking-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .ranking-card:not(.ranking-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .ranking-card:not(.ranking-card-hl):hover .ranking-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .ranking-card:not(.ranking-card-hl):hover .ranking-card-icon{ color: #fff !important; }
            .ranking-card:not(.ranking-card-hl):hover .ranking-card-title{ color: #fff !important; }
            .ranking-card:not(.ranking-card-hl):hover .ranking-card-badge{ color: var(--ism-amber) !important; }
            .ranking-card:not(.ranking-card-hl):hover .ranking-card-desc{ color: rgba(255,255,255,.85) !important; }
            .ranking-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .ranking-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 07. GOOGLE BUSINESS PROFILE ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Get It Right and Everything Else Gets Easier.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                When someone searches for a local business, the first thing they see is not your website. It is your Google Business Profile — your name, rating, photos, hours, reviews, and a button to call or get directions. That first impression decides whether they contact you or scroll past.
                A complete, optimised GBP makes customers 2.7 times more likely to view your business as reputable and 70% more likely to visit. GBP actions have increased 41% year over year. Most businesses are leaving this entirely unmanaged.
              </p>
            </div>
            <p style={{ textAlign: 'center', fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 32 }}>What Isuremedia does with your GBP</p>
            <div className="gbp-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {GBP_ITEMS.map(g => (
                <div key={g.title} className="gbp-card" style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <div style={{ position: 'relative', height: 170, overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.img} alt="" className="gbp-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '22px 24px 26px' }}>
                    <div className="gbp-card-icon" style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, transition: 'background .2s ease' }}>
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
            .gbp-card{ transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
            .gbp-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.12); border-color: transparent; }
            .gbp-card-img{ transition: transform .4s ease; }
            .gbp-card:hover .gbp-card-img{ transform: scale(1.08); }
            .gbp-card:hover .gbp-card-icon{ background: var(--ism-amber); }
            .gbp-card:hover .gbp-card-icon i{ color: var(--color-navy) !important; }
            @media (max-width:900px){ .gbp-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .gbp-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 08. ISM LOCAL SEO SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our Local SEO Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Everything Your Business Needs to Rank, Get Found, and Get Calls.</p>
            </div>
            <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
              {SERVICES.map((s, i) => {
                const variant = WHY_MATTERS_VARIANTS[i % 3];
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Who Local SEO Is Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If Customers Search for You Locally, This Is for You.</p>
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
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Your next customer is searching for a business like yours right now.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  Find out if they can find you.
                </p>
              </div>
              <a href="/contact" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Run My Free Local SEO Audit <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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

        {/* ══ 11. WHY CHOOSE ISM FOR LOCAL SEO ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Businesses Choose Isuremedia for Local SEO</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Results You Can See. Reporting You Can Understand.</p>
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
                  <img src="https://picsum.photos/seed/lseowhatmakesdifferent/700/620" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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

        {/* ══ 12. OUR LOCAL SEO PROCESS ══════════════════════════════════════════════ */}
        <section className="lseo-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                Isuremedia&apos;s Proven Local SEO System for <span style={{ color: 'var(--ism-amber)' }}>Measurable Growth</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Your First Step Toward Bigger Rankings and Better Business
              </p>
            </div>
            <div className="lseo-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, position: 'relative' }}>
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
            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: 56 }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 22px rgba(255,176,0,.38)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Get a Free Local SEO Audit
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .lseo-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
              .lseo-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 13. FAQ ══════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ 14. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/local seo.webp" description={<>Whether you run a single storefront, a service-area business, or a growing multi-location brand, nearby customers are searching for you right now. The question is whether Google is putting your business in front of them or a competitor's. Reach out today and we will help you <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>win the local map pack in your area</span>.</>} heading="Ready to Win" headingHighlight="Your Local Market?" primaryLabel="Run My Free Local SEO Audit" secondaryLabel="Call +1 646-588-1430" />
      </main>
      <Footer />
    </>
  );
}
