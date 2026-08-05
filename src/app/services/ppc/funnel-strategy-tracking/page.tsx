'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'Full funnel mapping and strategy development',
  'Conversion tracking setup across Google, Meta, and LinkedIn',
  'GA4 and Google Tag Manager implementation',
  'UTM structure and campaign attribution setup',
  'CRM and ad platform integration',
  'Landing page strategy and CRO',
  'Multi-touch attribution and reporting dashboards',
  'Funnel audit and performance analysis',
];

const WHY_MATTERS = [
  { icon: 'fa-solid fa-money-bill-trend-up', title: 'Budget goes to the wrong channels', desc: 'Without accurate attribution, businesses consistently overspend on channels that look productive on their own dashboards — and underspend on channels that are genuinely driving customers but receive no credit in last-click models.' },
  { icon: 'fa-solid fa-filter', title: 'Funnel leaks go unfound', desc: 'Every funnel has a stage where prospects drop out at a disproportionate rate. Without stage-level tracking, that leak is invisible. The budget keeps flowing in, the leak keeps losing prospects, and nobody knows why.' },
  { icon: 'fa-solid fa-gears', title: 'Ad platform optimisation breaks down', desc: 'Google Ads Smart Bidding and Meta’s algorithm both optimise toward the conversion signals you feed them. If those signals are wrong, the algorithm optimises toward the wrong outcomes.' },
  { icon: 'fa-solid fa-ban', title: 'Scaling becomes impossible', desc: 'You cannot confidently scale a campaign you cannot accurately measure. If you do not know which campaigns, landing pages, and offers are producing your best customers, adding budget means adding it everywhere and hoping.' },
];

const CARD_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const KEY_FACTORS = [
  { icon: 'fa-solid fa-code-compare', title: 'Platform Attribution Conflicts', impact: 'Highest impact', desc: 'Google Ads claims credit. Meta claims credit. LinkedIn claims credit. Add them all up and reported conversions run two to three times higher than the actual number of customers acquired, because every platform’s attribution model is designed to make that platform look good.' },
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'No Formal Measurement Framework', impact: 'High impact', desc: '68% of companies have no formal measurement for funnel performance at all, meaning budget decisions are made without any consistent way to judge what is actually working.' },
  { icon: 'fa-solid fa-database', title: 'Data Silos Between Platforms', impact: 'High impact', desc: '41% of marketers report data silos between platforms, meaning there is no single view of the customer journey across channels. Decisions get made on partial, disconnected data.' },
  { icon: 'fa-solid fa-comments', title: 'Lead Nurture Blind Spots', impact: 'High impact', desc: '79% of leads never convert due to lack of nurturing, meaning most funnels are losing the majority of their prospects at a stage nobody is monitoring.' },
  { icon: 'fa-solid fa-link', title: 'UTM and Campaign Attribution Gaps', impact: 'Medium impact', desc: 'Without a consistent UTM framework, traffic shows up as generic or unattributed in GA4 and your CRM. You cannot accurately credit revenue to the campaigns that actually produced it.' },
  { icon: 'fa-solid fa-plug', title: 'CRM and Ad Platform Disconnection', impact: 'Medium impact', desc: 'When your CRM is not connected to your ad platforms, algorithms optimise toward any form fill instead of the leads that actually convert into paying customers.' },
  { icon: 'fa-solid fa-filter', title: 'Last-Click Attribution Bias', impact: 'Medium impact', desc: 'Last-click attribution gives all conversion credit to the final channel a customer touched, systematically undercrediting the awareness campaigns that introduced them in the first place.' },
  { icon: 'fa-solid fa-arrow-trend-up', title: 'Integrated Tracking Payoff', impact: 'Proven payoff', desc: 'Businesses with fully integrated funnel tracking report 2.9 times higher conversion rates and 41.7% lower cost per lead than businesses without it.' },
];

const FUNNEL_STAGES = [
  { icon: 'fa-solid fa-bullhorn', title: 'Top of Funnel — Awareness', desc: 'The prospect discovers your business for the first time through paid search, Meta ads, organic search, LinkedIn, content, or referral. Tracked by impressions, clicks, cost per click, and landing page conversion rate.', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80' },
  { icon: 'fa-solid fa-comments', title: 'Middle of Funnel — Consideration', desc: 'The prospect knows you exist and is evaluating fit through retargeting, email nurture, content, case studies, and testimonials. Tracked by return visits, engagement, and lead form fills.', img: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=500&q=80' },
  { icon: 'fa-solid fa-bullseye', title: 'Bottom of Funnel — Conversion', desc: 'The prospect is ready to act through direct, branded search, retargeting with a direct offer, or sales outreach. Tracked by form submissions, calls, bookings, and cost per conversion.', img: 'https://images.unsplash.com/photo-1757301714935-c8127a21abc6?w=500&q=80' },
  { icon: 'fa-solid fa-arrow-trend-up', title: 'Post-Conversion — Retention & Referral', desc: 'The customer is onboarded, delivers results, and becomes a repeat buyer or referral source through email and CRM automation. Tracked by repeat purchase rate and lifetime value by channel.', img: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=500&q=80' },
];

const SERVICES = [
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Funnel Audit and Strategy Development', desc: 'We map your current funnel, identify where prospects enter and drop out, and build a strategy that defines the right content, offers, and channels for each stage of the buying journey.' },
  { icon: 'fa-solid fa-code-compare', title: 'Conversion Tracking Setup and Verification', desc: 'We set up and verify conversion tracking across Google Ads, Meta, and LinkedIn for every action that matters — form fills, calls, bookings, purchases, demo requests.' },
  { icon: 'fa-solid fa-gauge', title: 'GA4 and Google Tag Manager Implementation', desc: 'Properly implemented with the right event tracking, conversion goals, audience definitions, and UTM parameter structure for a cross-channel view of the customer journey.' },
  { icon: 'fa-solid fa-link', title: 'UTM Structure and Campaign Attribution', desc: 'A consistent UTM parameter framework across every campaign, channel, and piece of content, making attribution clean, comparable, and trustworthy for budget decisions.' },
  { icon: 'fa-solid fa-plug', title: 'CRM and Ad Platform Integration', desc: 'We connect your CRM — HubSpot, GoHighLevel, Salesforce, or whatever you use — to your ad platforms so lead quality feeds back into campaign optimisation.' },
  { icon: 'fa-solid fa-file-lines', title: 'Landing Page Strategy and CRO', desc: 'We audit your landing pages at each funnel stage for message match, clarity of offer, trust signals, form friction, and call-to-action effectiveness.' },
  { icon: 'fa-solid fa-chart-pie', title: 'Multi-Touch Attribution and Reporting', desc: 'Attribution models and reporting dashboards that give you a cross-channel view of the customer journey, beyond last-click, so budget decisions are made on the full picture.' },
  { icon: 'fa-solid fa-repeat', title: 'Ongoing Funnel Monitoring and Optimisation', desc: 'We monitor funnel performance continuously, identify new leaks, and adjust strategy, tracking, and landing pages as the funnel evolves. Monthly reports show the full picture.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-money-bill-trend-up', title: 'Businesses spending on ads without clear results', desc: 'If you are running Google, Meta, or LinkedIn Ads and cannot clearly explain which campaigns are producing your customers, the problem is almost always tracking and funnel structure — not the platforms themselves.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80' },
  { icon: 'fa-solid fa-database', title: 'Businesses with data everywhere but no clarity', desc: 'Multiple dashboards, conflicting numbers, platform attribution that does not match your CRM — if your marketing data is fragmented and contradictory, we build the unified tracking framework you are missing.', img: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?w=700&q=80' },
  { icon: 'fa-solid fa-arrow-trend-up', title: 'Businesses preparing to scale ad spend', desc: 'Scaling ad spend without proper tracking is expensive guesswork. Before you double your budget, you need to know which campaigns, landing pages, and offers are producing your best customers.', img: 'https://images.unsplash.com/photo-1622127739239-1905bbaa21b8?w=700&q=80' },
  { icon: 'fa-solid fa-filter', title: 'Businesses with high traffic but low conversion', desc: 'If your ads generate clicks and your site gets visitors but the conversion rate is lower than it should be, the issue is almost always a disconnect somewhere in the funnel.', img: 'https://images.unsplash.com/photo-1770013413878-2530e2c3d82b?w=700&q=80' },
  { icon: 'fa-solid fa-cart-shopping', title: 'E-commerce businesses optimising for revenue', desc: 'Revenue optimisation requires full-funnel visibility, from the ad that drove the first click to the product that closed the sale to the email that drove the repeat purchase.', img: 'https://images.unsplash.com/photo-1744854185479-2985c1678fe1?w=700&q=80' },
  { icon: 'fa-solid fa-sitemap', title: 'Businesses building a strategy from scratch', desc: 'Getting the funnel strategy and tracking infrastructure right at the start means every campaign you run produces clean, trustworthy data from day one.', img: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=700&q=80' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-code-compare', title: 'We fix tracking before we scale anything', desc: 'We do not run more ads on a broken tracking setup. Before any campaign is scaled or optimised, we verify that the conversion data feeding it is accurate. Clean data first. Everything else follows.' },
  { icon: 'fa-solid fa-plug', title: 'We connect your full stack', desc: 'Ad platforms, GA4, CRM, GoHighLevel automation — we connect everything so your marketing data flows into a single coherent picture of the customer journey.' },
  { icon: 'fa-solid fa-chart-pie', title: 'We make attribution honest', desc: 'Platform-reported conversions are always optimistic. We build attribution frameworks that give you an accurate cross-channel view, not a number every platform inflates.' },
  { icon: 'fa-solid fa-money-bill-trend-up', title: 'We optimise for revenue, not leads', desc: 'A lead that does not close is worth nothing. We build tracking that connects ad spend to revenue, not just form fills, so budget decisions are made against outcomes that matter.' },
  { icon: 'fa-solid fa-chart-line', title: 'Plain English reporting', desc: 'Funnel and attribution data can be made to look extremely complicated. We report in plain English — where the funnel is converting, where it is losing people, and what we are changing next month.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no lock-in', desc: 'You stay because the funnel is improving and the data is getting clearer, not because you are locked into a contract.' },
];

const PROCESS = [
  { n: '01', title: 'Funnel Audit & Current State', desc: 'We audit your existing funnel end to end — every channel, touchpoint, and conversion event — and identify what is tracked, what is missing, and where the biggest leaks are.' },
  { n: '02', title: 'Funnel Strategy & Stage Mapping', desc: 'We map your ideal funnel, defining the awareness, consideration, and conversion stages for your business and the tracking events that mark progress through each one.' },
  { n: '03', title: 'Tracking Infrastructure Build', desc: 'We implement GA4, Google Tag Manager, Meta pixel, Conversions API, LinkedIn Insight Tag, UTM framework, and CRM integration — every event tested and verified.' },
  { n: '04', title: 'Landing Page & Funnel Optimisation', desc: 'We audit and improve the landing pages and conversion points at each stage — message match, offer clarity, trust signals, and call-to-action effectiveness.' },
  { n: '05', title: 'Attribution & Reporting Setup', desc: 'We build the attribution model and reporting dashboard that gives you a cross-channel view of the customer journey, not just which channel got the last click.' },
  { n: '06', title: 'Ongoing Monitoring & Refinement', desc: 'We monitor conversion rates at every stage monthly, identify new leaks as they appear, and make adjustments to strategy, tracking, and conversion points continuously.' },
];

const FAQS = [
  { q: 'What is a marketing funnel and why does it matter?', a: 'A marketing funnel is the path a customer takes from first hearing about your business to making a purchase or becoming a client. It matters because every stage of that path has a conversion rate, and improving any one of them increases the revenue your marketing produces without spending more on traffic. Businesses with a documented, tracked funnel generate 2.3 times more ROI than those without one.' },
  { q: 'What is conversion tracking and why is mine probably broken?', a: 'Conversion tracking is the system that records when a visitor takes a specific action — filling in a form, making a call, booking an appointment, making a purchase. Most conversion tracking setups are partially broken, missing events, duplicating conversions, or tracking the wrong actions entirely. When the data feeding ad platform algorithms is wrong, campaign performance suffers.' },
  { q: 'Why do my Google Ads and Meta dashboards show more conversions than I actually have customers?', a: 'Every ad platform uses its own attribution model and claims credit for conversions that other platforms also claim. A customer who clicked a Meta ad, then a Google ad, then converted will typically be counted by both. This is not fraud, it is how platform attribution works. Cross-platform attribution through GA4 and a unified tracking framework gives you a more accurate picture.' },
  { q: 'What is UTM tracking and why does it matter?', a: 'UTM parameters are tags added to URLs that identify the source, medium, and campaign that brought a visitor to your site. Consistent UTM tracking is what allows you to compare performance across channels in GA4 and your CRM, rather than having traffic show up as generic or unattributed.' },
  { q: 'What is the difference between last-click attribution and multi-touch attribution?', a: 'Last-click attribution gives all conversion credit to the final channel a customer interacted with before converting. Multi-touch attribution distributes credit across all the channels that contributed. Last-click systematically undercredits top-of-funnel channels and overcredits bottom-of-funnel channels.' },
  { q: 'How do I know where my funnel is leaking?', a: 'With proper stage-level tracking, you can see the conversion rate at each stage — how many awareness visitors become consideration prospects, how many become leads, how many become customers. A significantly lower conversion rate at any stage indicates a leak.' },
  { q: 'What does integrating my CRM with my ad platforms actually do?', a: 'When your CRM is connected to your ad platforms, lead quality and downstream conversion data from your sales process feeds back into the ad algorithms. Instead of optimising toward any form fill, Google Ads and Meta can optimise toward the type of lead that actually converts.' },
  { q: 'Do I need funnel strategy work if I already have campaigns running?', a: 'Yes, particularly if your campaigns are not producing the results you expect. Running campaigns without a mapped funnel means you are driving traffic to a journey that has not been deliberately designed. Fixing an existing funnel often produces more impact than launching new campaigns on a broken foundation.' },
  { q: 'How does this work with GoHighLevel?', a: 'GoHighLevel is ISureMedia’s primary automation platform and integrates directly with our funnel strategy work. We connect GHL to your ad platforms, build the pipeline stages that match your funnel, and track conversion through the CRM so every lead is attributed to the campaign that produced it.' },
  { q: 'What reporting will I receive?', a: 'Monthly reports covering the full funnel — traffic by channel, conversion rate at each stage, cost per conversion by channel, attribution of revenue to campaigns, and specific funnel leaks identified with recommended fixes. Everything in plain English.' },
];

/* ── FAQ 2-COL ── */
function FunnelFAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="funnel-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          <div className="funnel-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>Funnel Tracking</span>
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
          .funnel-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .funnel-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function FunnelStrategyTrackingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="funnel-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="funnel-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Know Exactly What Your Marketing Is Producing. Build a Funnel That{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Converts.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  We map the full journey from first click to closed customer, set up tracking that gives you an accurate picture of what is working, and build the funnel strategy that turns more of your marketing spend into measurable revenue.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Get a Free Funnel and Tracking Audit
                  </a>
                </div>
              </div>

              <div className="funnel-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://picsum.photos/seed/funneltracking2026/640/720" alt="Funnel strategy and tracking" style={{ width: '100%', height: 440, objectFit: 'cover', borderRadius: 24, display: 'block', boxShadow: '0 30px 70px rgba(0,35,83,.18)' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-diagram-project" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>Full-Funnel Tracked</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>120+ Funnels Tracked</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>Data You Can Trust</span>
                </div>
              </div>

            </div>
          </div>

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
              .funnel-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .funnel-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .funnel-hero { padding: 48px 0 64px !important; }
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
                  If You Cannot Tell Which Marketing Is Working, You Are Guessing With Your Budget.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  Most businesses running paid ads have the same problem. Money goes in. Leads or sales come out. But the question of which channel, which campaign, which ad, and which landing page actually produced each customer cannot be answered. Not accurately.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  Without that answer, budget decisions are educated guesses — spending more on what feels like it is working, cutting what the numbers do not explain, and wondering why growth is slower than it should be. ISureMedia fixes the measurement problem first, mapping your full marketing funnel and building the strategy that connects every channel to real business outcomes.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Claim Your Free Funnel and Tracking Audit
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

        {/* ══ 04. WHAT IS FUNNEL STRATEGY AND TRACKING ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="funnel-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="funnel-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  Connect Every Marketing Action to a Business Outcome.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    A marketing funnel is the path a customer takes from first becoming aware of your business to making a purchase or becoming a client. Most businesses have one — awareness, consideration, conversion — but most have not mapped it deliberately, and most have not set up the tracking infrastructure to see where people are dropping out and why.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Funnel strategy is{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>the deliberate design of that path</span>{' '}
                    — defining the stages, the content and offers at each stage, the channels that feed each part of the funnel, and the handoffs that move a prospect from one stage to the next.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Funnel tracking is{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>the infrastructure that shows you what is actually happening</span>{' '}
                    — which channels bring in prospects, which pages convert them, and which campaigns are genuinely producing revenue. Together, they turn marketing spend from a cost into a measurable, optimisable investment.
                  </p>
                </div>
              </div>
              <div className="funnel-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 338deg, var(--ism-blue-100) 338deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>94</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>Funnel Health</span>
                  </div>
                </div>

                <div className="funnel-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-code-compare" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Tracking Accuracy</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>98%</div>
                  </div>
                </div>

                <div className="funnel-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-chart-pie" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Attribution</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Multi-Touch</div>
                  </div>
                </div>

                <div className="funnel-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-diagram-project" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Funnel Stages</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>4/4</div>
                  </div>
                </div>

                <div className="funnel-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-money-bill-trend-up" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Cost Per Lead</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>-41.7%</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .funnel-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .funnel-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .funnel-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .funnel-score-badge{ padding:8px 10px !important; gap:7px !important; } .funnel-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. WHY YOUR DATA IS PROBABLY LYING TO YOU ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Platform-Reported Numbers and Real Business Results Are Not the Same Thing.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Every ad platform reports conversions. Google Ads claims credit. Meta claims credit. LinkedIn claims credit. Add them all up and the total reported across platforms is typically two to three times higher than the actual number of customers your business acquired. This is not a minor discrepancy — it means businesses are routinely reallocating budget toward channels that look like they are performing, and away from channels that are actually producing. Here is what that costs you.
              </p>
            </div>
            <div className="why-matters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginBottom: 48 }}>
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
                See Where Your Funnel Is Leaking
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:600px){ .why-matters-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. KEY TRACKING FACTORS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Fix These and Your Data Starts Telling the Truth.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Your tracking is only as reliable as its weakest link. Every factor below is something ISureMedia actively audits and fixes for every funnel strategy and tracking client.
              </p>
            </div>
            <div className="factors-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {KEY_FACTORS.map((f, i) => {
                const hl = i === 0;
                return (
                  <div key={f.title} className={hl ? 'factors-card factors-card-hl' : 'factors-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="factors-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`factors-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="factors-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                        <span className="factors-card-badge" style={{ fontFamily: J, fontSize: 10.5, fontWeight: 700, color: hl ? 'var(--ism-amber)' : 'var(--color-accent-hover)', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'color .25s ease' }}>{f.impact}</span>
                      </div>
                    </div>
                    <p className="factors-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .factors-card:not(.factors-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .factors-card:not(.factors-card-hl):hover .factors-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .factors-card:not(.factors-card-hl):hover .factors-card-icon{ color: #fff !important; }
            .factors-card:not(.factors-card-hl):hover .factors-card-title{ color: #fff !important; }
            .factors-card:not(.factors-card-hl):hover .factors-card-badge{ color: var(--ism-amber) !important; }
            .factors-card:not(.factors-card-hl):hover .factors-card-desc{ color: rgba(255,255,255,.85) !important; }
            .factors-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .factors-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 07. THE FUNNEL FRAMEWORK ISM BUILDS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>From First Touch to Closed Customer. Every Stage Defined and Measured.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                A funnel is not one campaign run harder. It is a set of distinct stages, each with its own channels, goal, and tracking events, connected into a single measurable system.
              </p>
            </div>
            <p style={{ textAlign: 'center', fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 32 }}>How ISureMedia maps and builds your marketing funnel</p>
            <div className="stages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {FUNNEL_STAGES.map(g => (
                <div key={g.title} className="stages-card" style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <div style={{ position: 'relative', height: 170, overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.img} alt="" className="stages-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '22px 24px 26px' }}>
                    <div className="stages-card-icon" style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, transition: 'background .2s ease' }}>
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
            .stages-card{ transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
            .stages-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.12); border-color: transparent; }
            .stages-card-img{ transition: transform .4s ease; }
            .stages-card:hover .stages-card-img{ transform: scale(1.08); }
            .stages-card:hover .stages-card-icon{ background: var(--ism-amber); }
            .stages-card:hover .stages-card-icon i{ color: var(--color-navy) !important; }
            @media (max-width:900px){ .stages-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .stages-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 08. THE COST OF WAITING ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>The Tracking Setup Is Not a Technical Afterthought.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  Every month your funnel runs on inaccurate data is a month of budget decisions made on numbers that do not reflect reality — money moved toward channels that only{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>look productive on a dashboard</span>{' '}
                  , and away from the ones actually producing customers.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  Google Ads Smart Bidding and Meta&apos;s algorithm both optimise toward whatever conversion signal you feed them. If that signal is wrong, the algorithm spends your budget chasing the wrong outcome — and keeps doing so until someone fixes the tracking underneath it.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  It is the foundation of every intelligent marketing decision that follows. The businesses that fix this first are not the ones with the biggest budgets — they are the ones who stopped scaling on guesswork and started scaling on a funnel they can{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>actually measure</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 09. OUR FUNNEL AND TRACKING SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our Funnel Strategy and Tracking Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Build the Funnel. Fix the Tracking. Make Every Budget Decision on Real Data.</p>
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Who Funnel Strategy and Tracking Is Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If You Are Spending on Marketing Without a Clear Picture of What Is Working, This Is Where to Start.</p>
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
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Find out where your funnel is leaking and what your marketing is actually producing.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  A free funnel and tracking audit will show you exactly which stages are costing you customers — and what it will take to fix them.
                </p>
              </div>
              <a href="/contact" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Run My Free Funnel and Tracking Audit <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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

        {/* ══ 12. WHY CHOOSE ISM FOR FUNNEL STRATEGY AND TRACKING ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Businesses Choose ISureMedia for Funnel Strategy and Tracking</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Strategy and Infrastructure Together. Not One Without the Other.</p>
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
                  <img src="https://picsum.photos/seed/funnelwhatmakesdifferent2026/700/620" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
        <section className="funnel-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                How ISureMedia Builds Funnel Strategy and <span style={{ color: 'var(--ism-amber)' }}>Tracking Infrastructure</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Audit. Map. Build. Measure. Optimise.
              </p>
            </div>
            <div className="funnel-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 28, left: '8%', width: '84%', height: 2, background: 'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex: 0 }} />
              {PROCESS.map((step, i) => (
                <div key={step.n} style={{ textAlign: 'center', padding: '0 12px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: i === 0 ? 'var(--ism-amber)' : 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: `0 4px 18px ${i === 0 ? 'rgba(255,176,0,.40)' : 'rgba(30,77,195,.30)'}`, border: '4px solid #fff' }}>
                    <span style={{ fontFamily: J, fontSize: 18, fontWeight: 900, color: '#fff' }}>{step.n}</span>
                  </div>
                  <div style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 10, lineHeight: 1.3 }}>{step.title}</div>
                  <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 56 }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 22px rgba(255,176,0,.38)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Get a Free Funnel and Tracking Audit
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .funnel-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
              .funnel-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 14. FAQ ══════════════════════════════════════════════ */}
        <FunnelFAQAccordion />

        {/* ══ 15. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/Funnel Strategy & Tracking Setup.webp" />
      </main>
      <Footer />
    </>
  );
}
