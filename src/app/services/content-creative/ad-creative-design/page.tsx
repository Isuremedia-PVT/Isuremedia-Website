'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'Static image ad creative — single and multi-variant sets',
  'Carousel ad design — product and story-based formats',
  'Video ad thumbnails and static frames for video campaigns',
  'Display and banner ad sets — all standard IAB sizes',
  'UGC-style and native ad creative',
  'LinkedIn ad creative — sponsored content and conversation ads',
  'Creative strategy — messaging angles, hooks, and testing frameworks',
  'Creative refresh and fatigue management',
];

const WHY_MATTERS = [
  { icon: 'fa-solid fa-chart-line', title: 'Creative quality drives the majority of ad lift', desc: 'Nielsen analysis found 47% of the incremental sales lift from advertising is attributable to creative quality — more than targeting, reach, and frequency combined.' },
  { icon: 'fa-solid fa-hand', title: 'Stops the scroll before the message lands', desc: 'A visual or headline that does not create an immediate reason to stop is an impression that never became an engagement. Pattern interruption is what the first creative element is for.' },
  { icon: 'fa-solid fa-stopwatch', title: 'Communicates the offer before the click-away', desc: 'Most ads have one to three seconds to communicate enough of the offer to earn a click. Visual hierarchy determines whether the most important information lands first or gets buried.' },
  { icon: 'fa-solid fa-route', title: 'Matches the audience’s position in the funnel', desc: 'A cold prospect needs a different creative than a warm retargeting audience. The same creative served to both produces results for neither.' },
  { icon: 'fa-solid fa-shuffle', title: 'Format diversity keeps performance alive', desc: 'An account running only static single-image ads fatigues faster than one running static, carousel, video, and UGC-style formats in rotation.' },
  { icon: 'fa-solid fa-scale-balanced', title: 'Strong creative beats a stronger offer', desc: 'A strong offer with weak creative consistently underperforms a moderate offer with strong creative — true on Meta, Google Display, LinkedIn, and every paid channel.' },
];

const CARD_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const KEY_FACTORS = [
  { icon: 'fa-solid fa-chart-line', title: 'ROAS Plateauing', impact: 'Highest impact', desc: 'A ROAS plateau despite stable budgets is the earliest financial signal that creative effectiveness is declining — usually showing up before CTR or CPM move at all.' },
  { icon: 'fa-solid fa-triangle-exclamation', title: 'Meta Fatigue and Limited Labels', impact: 'High impact', desc: 'When Meta marks a creative as Creative Fatigue or Creative Limited in Ads Manager, the algorithm is telling you delivery is being throttled by audience saturation.' },
  { icon: 'fa-solid fa-coins', title: 'CPM Rising While CTR Holds Steady', impact: 'High impact', desc: 'This pattern means the algorithm is paying more to reach the diminishing unconverted portion of the audience — a direct cost of creative fatigue.' },
  { icon: 'fa-solid fa-arrow-up-right-dots', title: 'Frequency Rising Faster Than Usual', impact: 'Medium impact', desc: 'Rising frequency means the algorithm has concentrated delivery on fewer people — a sign that the creative pool has stopped reaching new audience segments.' },
  { icon: 'fa-solid fa-calendar-week', title: 'The Week-2-to-Week-5 Decline', impact: 'Medium impact', desc: 'Creative that performs well at week two is often fatigued by week five. The Andromeda ranking system concentrates delivery on strong performers, accelerating their own burnout.' },
  { icon: 'fa-solid fa-robot', title: 'Algorithmic Concentration', impact: 'Contextual', desc: 'Meta’s Andromeda system gives the algorithm granular creative-level signal. The better a creative performs, the faster it gets shown to the same people repeatedly.' },
  { icon: 'fa-solid fa-shuffle', title: 'Format Diversity Gaps', impact: 'Contextual', desc: 'Running the same static-to-carousel pipeline repeatedly does not solve creative decay — it accelerates it. Genuine format diversity is what prevents it.' },
  { icon: 'fa-solid fa-gauge-high', title: 'Wasted Impression Rate', impact: 'Growing fast', desc: '23% of all ad impressions are considered wasted due to overexposure and creative fatigue — budget spent reaching people who have already tuned the creative out.' },
];

const FORMATS = [
  { icon: 'fa-solid fa-image', title: 'Static Image Ad Creative', desc: 'Single and multi-variant static sets designed to the platform’s visual norms, the campaign objective, and the audience’s position in the funnel.', img: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=500&q=80' },
  { icon: 'fa-solid fa-images', title: 'Carousel Ad Design', desc: 'Product, story-based, and benefit-led carousels designed as a sequence where each frame advances the narrative or presents a new element of the offer.', img: 'https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?w=500&q=80' },
  { icon: 'fa-solid fa-table-cells-large', title: 'Display and Banner Ad Sets', desc: 'Full sets in all standard IAB display sizes plus Google Responsive Display assets, with animated display ads in HTML5 where required.', img: 'https://images.unsplash.com/photo-1558698972-c50e325e6799?w=500&q=80' },
  { icon: 'fa-solid fa-video', title: 'UGC-Style and Native Ad Creative', desc: 'Creative designed to look native to the platform rather than obviously branded — testimonial creative, founder-led formats, and native content treatments.', img: 'https://images.unsplash.com/photo-1620912189868-30778f884588?w=500&q=80' },
  { icon: 'fa-brands fa-linkedin', title: 'LinkedIn Ad Creative', desc: 'Sponsored Content ads, Document Ads, and Conversation Ad copy designed for the LinkedIn feed’s professional context and B2B audiences.', img: 'https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?w=500&q=80' },
  { icon: 'fa-solid fa-clapperboard', title: 'Video Ad Thumbnails and Static Frames', desc: 'Thumbnail design for YouTube and video campaigns, static frame ads, and end-card design for video creative across placements where video cannot run.', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80' },
];

const SERVICES = [
  { icon: 'fa-solid fa-lightbulb', title: 'Creative Strategy and Messaging Framework', desc: 'The angles, hooks, and value propositions the creative set is built around — developed before any design begins.' },
  { icon: 'fa-solid fa-image', title: 'Static Image Ad Creative', desc: 'Multi-variant static sets for A/B testing across hooks, value propositions, and visual approaches.' },
  { icon: 'fa-solid fa-images', title: 'Carousel Ad Design', desc: 'Sequenced carousel formats that consistently outperform single-image for consideration and comparison-stage audiences.' },
  { icon: 'fa-solid fa-table-cells-large', title: 'Display and Banner Ad Sets', desc: 'Full IAB size sets and Google Responsive Display assets, including animated HTML5 display ads where required.' },
  { icon: 'fa-solid fa-video', title: 'UGC-Style and Native Ad Creative', desc: 'Creative that performs above polished branded ads in cold prospecting because it does not trigger the scroll-past response.' },
  { icon: 'fa-brands fa-linkedin', title: 'LinkedIn Ad Creative', desc: 'Sponsored Content, Document Ads, and Conversation Ad copy built for the professional context LinkedIn rewards.' },
  { icon: 'fa-solid fa-clapperboard', title: 'Video Ad Thumbnails', desc: 'Thumbnails and static frame ads that complement existing video content across every placement.' },
  { icon: 'fa-solid fa-arrows-rotate', title: 'Creative Refresh and Rotation Planning', desc: 'Refresh sets produced on a schedule matched to your audience size and spend, ahead of the fatigue curve, not after it.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Businesses running campaigns that are not converting', desc: 'If targeting is sound and budget is adequate but results are not there, the creative is almost certainly where the problem lives. We audit before we build.', img: 'https://images.unsplash.com/photo-1745509267699-1b1db256601e?w=700&q=80' },
  { icon: 'fa-solid fa-arrow-trend-down', title: 'Advertisers experiencing creative fatigue', desc: 'If performance was strong and has declined without targeting or budget changes, fatigue is the most likely cause. We diagnose it and implement a rotation plan.', img: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=700&q=80' },
  { icon: 'fa-solid fa-gauge-high', title: 'Businesses scaling paid ad spend', desc: 'A larger budget reaches a larger audience faster — which means it saturates faster too. We build the production system that keeps creative supply ahead of demand.', img: 'https://images.unsplash.com/photo-1590650046871-92c887180603?w=700&q=80' },
  { icon: 'fa-solid fa-cart-shopping', title: 'E-commerce businesses on Meta and Google', desc: 'Product-specific visual treatment, offer clarity, and constant format variety to compete in increasingly crowded feeds — at the volume e-commerce campaigns require.', img: 'https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?w=700&q=80' },
  { icon: 'fa-brands fa-linkedin', title: 'B2B businesses running LinkedIn campaigns', desc: 'Professional visual treatment, specific pain-point framing, and the credibility signals B2B buyers respond to — not repurposed Meta creative.', img: 'https://images.unsplash.com/photo-1642522029686-5485ea7e6042?w=700&q=80' },
  { icon: 'fa-solid fa-people-group', title: 'Agencies white-labelling ad creative', desc: 'Performance ad creative produced for your clients under your brand — same quality, client-specific application, no Isuremedia references.', img: 'https://images.unsplash.com/photo-1784646583927-3159480116ac?w=700&q=80' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-chart-line', title: 'We understand paid media, not just design', desc: 'How creative fatigue develops, how Andromeda scores creative quality, how format affects delivery — we design with platform mechanics in mind, not just visual output.' },
  { icon: 'fa-solid fa-lightbulb', title: 'We build messaging frameworks before we design', desc: 'A creative set built around one angle fatigues faster than one built around three or four distinct angles. The framework comes before the design.' },
  { icon: 'fa-solid fa-vial', title: 'We design for testing from the start', desc: 'Clear variant differences on the specific element being tested, consistent everything else — producing clean test data instead of a test that tells you nothing.' },
  { icon: 'fa-solid fa-diagram-project', title: 'We connect creative to campaign strategy', desc: 'The creative brief connects to the objective, the funnel stage, the audience temperature, and the landing page — so creative and campaign work as one system.' },
  { icon: 'fa-solid fa-arrows-rotate', title: 'We manage refresh before fatigue sets in', desc: 'For retainer clients, new creative variants are in production before the existing set hits its fatigue window — no gap in performance.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no lock-in', desc: 'Ongoing creative retainers are month to month. You stay because the creative is performing, not because you signed a contract.' },
];

const PROCESS = [
  { n: '01', title: 'Creative Audit', desc: 'For existing campaigns, we audit current creative — performance by asset, fatigue indicators, format diversity, and messaging angle coverage — before recommending what to build.' },
  { n: '02', title: 'Messaging Framework', desc: 'We develop the specific angles, hooks, and value propositions the creative set will be built around, so the set has genuine variety from day one.' },
  { n: '03', title: 'Brief and Format Selection', desc: 'We brief the creative set — formats, dimensions, copy direction, visual approach, and testing structure — based on platform, audience, and fatigue prevention.' },
  { n: '04', title: 'Design and Production', desc: 'We produce the creative set to the brief, the brand system, and the platform’s visual norms, with clean multi-variant sets for testing.' },
  { n: '05', title: 'Test, Refresh, and Deliver', desc: 'Creative is delivered in every required format, monitored for fatigue indicators, and the next refresh cycle is already in production before ROAS declines.' },
];

const FAQS = [
  { q: 'How often does ad creative need to be refreshed?', a: 'For audiences under 500,000, creative can fatigue in two to three weeks at moderate spend. For larger audiences, four to six weeks before fatigue becomes visible in ROAS. The Andromeda algorithm’s concentration of delivery on top performers means fatigue arrives faster than it used to.' },
  { q: 'What is the difference between creative fatigue and creative failure?', a: 'Creative failure never performed — wrong message, wrong audience, wrong hierarchy. Creative fatigue performed well and then declined because the audience has seen it too many times. Failure requires a new approach. Fatigue requires new variants of an approach that was already working.' },
  { q: 'Which formats perform best on Meta in 2026?', a: 'Video generates 20 to 40% higher conversion for products requiring demonstration. Static images deliver 40 to 60% lower CPMs. UGC-style creative outperforms polished branded creative in cold prospecting. The answer for most accounts is format diversity in rotation, not one optimal format.' },
  { q: 'Do you write the ad copy or just design the visuals?', a: 'Both. Headline, primary text, and description copy are produced alongside the visual design as part of every brief — the hook in the headline and the visual hook need to work together.' },
  { q: 'Can you design for Google Display as well as Meta?', a: 'Yes. We produce full IAB display banner sets alongside Meta creative, ensuring consistent visual identity across channels running simultaneously.' },
  { q: 'What is UGC-style creative and why does it perform differently?', a: 'It mimics the visual style of organic content rather than a polished brand ad. It performs better in cold prospecting because it does not trigger the scroll-past response audiences apply to obvious ads.' },
  { q: 'Can you produce creative for LinkedIn as well as Meta?', a: 'Yes. LinkedIn creative requires different visual treatment — credibility signals and professional pain-point framing. We produce it as distinct work, not repurposed Meta assets.' },
  { q: 'Do you provide source files so we can make copy updates ourselves?', a: 'Yes. Source files are included with every delivery, so copy and offer updates can be made independently without briefing a new round.' },
  { q: 'How do you handle creative for different funnel stages?', a: 'Cold, warm, and hot creative have different jobs. Cold builds awareness. Warm addresses the objection that blocked the first conversion. Hot removes the last barrier with urgency or proof. We brief and design each stage separately.' },
  { q: 'Can you audit our existing creative before we commission new work?', a: 'Yes. A creative audit is our standard starting point — reviewing performance by creative, fatigue indicators, format diversity, and messaging coverage before recommending what to build.' },
];

/* ── FAQ 2-COL — matches the Local SEO page layout ── */
function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="acd-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <div className="acd-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>Ad Creative Design</span>
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
          .acd-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .acd-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function AdCreativeDesignPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="acd-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="acd-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* Left — copy */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Creative That Stops the Scroll and Converts the{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Click.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  We design performance ad creative for Meta, Google, LinkedIn, and other paid channels — static images, carousel sets, video thumbnails, display banners, and UGC-style visuals — built around messaging frameworks that drive conversions and refreshed frequently enough to prevent creative fatigue from killing your campaign performance.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Get a Free Creative Audit
                  </a>
                </div>
              </div>

              {/* Right — photo + floating badges */}
              <div className="acd-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://picsum.photos/seed/adcreativehero2/640/720" alt="Ad creative design in production" style={{ width: '100%', height: 440, objectFit: 'cover', borderRadius: 24, display: 'block', boxShadow: '0 30px 70px rgba(0,35,83,.18)' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-rectangle-ad" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-chart-line" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>47% of Ad Lift</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>Campaigns Refreshed Every Month</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>Built to Beat Fatigue</span>
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
              .acd-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .acd-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .acd-hero { padding: 48px 0 64px !important; }
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
                  Your Ad Budget Is Paying for Impressions. Your Creative Is Deciding Whether They Convert.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  Creative is the single most impactful element in any paid campaign — responsible for 56% of all auction outcomes on Meta, more than bid strategy, audience targeting, and placements combined. Your targeting gets your ad in front of the right person. Your creative decides what they do next.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  Isuremedia produces ad creative that is built for performance — designed around the specific objective, the specific audience, and the specific platform — and refreshed at the cadence your campaigns need to keep ROAS climbing rather than decaying.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Claim Your Free Creative Audit
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

        {/* ══ 04. CREATIVE FATIGUE IS THE BIGGEST THREAT ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="acd-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="acd-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  The Algorithm Finds Your Best Creative and Burns It Out Faster Than You Think.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Meta&apos;s Andromeda ranking system gives the algorithm significantly more granular signal on creative-level performance than its predecessor. When a creative performs well, the algorithm concentrates delivery on it — and{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>a creative performing well at week two is often fatigued by week five</span>.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    After just four repeated exposures to the same creative, the likelihood of conversion drops by approximately 45%.{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>Click-through rates fall by 40% and conversion rates decline by as much as 60%</span>{' '}
                    at similar frequency levels — and the decline shows up as a ROAS plateau before it shows up anywhere else.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    The answer is not more volume of the same thing. Running the same static-to-carousel pipeline fifty times a month does not solve creative decay — it accelerates it. What prevents fatigue is genuine format diversity, a rotation of messaging angles, and a production system that delivers new variants before the existing ones exhaust their audience.
                  </p>
                </div>
              </div>
              <div className="acd-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                {/* Decorative background rings */}
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                {/* Central gauge */}
                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 306deg, var(--ism-blue-100) 306deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>85</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>Freshness Score</span>
                  </div>
                </div>

                {/* Floating badge — ROAS */}
                <div className="acd-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-chart-line" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>ROAS</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>Climbing</div>
                  </div>
                </div>

                {/* Floating badge — CTR */}
                <div className="acd-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-arrow-pointer" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>CTR</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Stable</div>
                  </div>
                </div>

                {/* Floating badge — Fatigue Risk */}
                <div className="acd-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-shuffle" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Fatigue Risk</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>Low</div>
                  </div>
                </div>

                {/* Floating badge — Refresh */}
                <div className="acd-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-arrows-rotate" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Next Refresh</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>On Schedule</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .acd-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .acd-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .acd-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .acd-score-badge{ padding:8px 10px !important; gap:7px !important; } .acd-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. WHY AD CREATIVE QUALITY DETERMINES CAMPAIGN PERFORMANCE ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>The Best Targeting Cannot Save a Creative That Fails to Stop the Scroll.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Most campaign performance problems are diagnosed as targeting or budget problems because those are the levers media buyers can adjust. Creative is often left unchanged while everything around it is optimised — even though it is doing most of the work.
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
                Get a Creative Audit
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .why-matters-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .why-matters-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. CREATIVE FATIGUE WARNING SIGNS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>The Creative Fatigue Warning Signs to Watch For.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Creative fatigue is a silent threat — it rarely announces itself until budget has already been wasted. Every signal below is something Isuremedia actively monitors for every ad creative client.
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

        {/* ══ 07. AD FORMATS WE PRODUCE ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Performance Creative Across Every Format Your Campaigns Need.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Different platforms and different funnel stages call for different formats. We produce every one to the platform&apos;s exact specs — nothing stretched, cropped, or left underperforming.
              </p>
            </div>
            <p style={{ textAlign: 'center', fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 32 }}>What Isuremedia Produces for Every Campaign</p>
            <div className="formats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {FORMATS.map(g => (
                <div key={g.title} className="formats-card" style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <div style={{ position: 'relative', height: 170, overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.img} alt="" className="formats-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '22px 24px 26px' }}>
                    <div className="formats-card-icon" style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, transition: 'background .2s ease' }}>
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
            .formats-card{ transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
            .formats-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.12); border-color: transparent; }
            .formats-card-img{ transition: transform .4s ease; }
            .formats-card:hover .formats-card-img{ transform: scale(1.08); }
            .formats-card:hover .formats-card-icon{ background: var(--ism-amber); }
            .formats-card:hover .formats-card-icon i{ color: var(--color-navy) !important; }
            @media (max-width:900px){ .formats-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .formats-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 08. WHAT CREATIVE FATIGUE IS COSTING YOU ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>This Is Happening in Your Account Right Now.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  After just four repeated exposures to the same creative, the likelihood of conversion drops by approximately{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>45%</span>.{' '}
                  Click-through rates fall by 40% and conversion rates decline by as much as 60% at similar frequency levels.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>23% of all ad impressions</span>{' '}
                  are considered wasted due to overexposure and creative fatigue — budget spent reaching people who have already tuned the creative out.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                  The decline shows up as a ROAS plateau before it shows up in CTR or CPM — which means most advertisers do not catch it until significant budget has already been wasted. Running more of the same creative does not fix this. It accelerates it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 09. OUR AD CREATIVE SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our Ad Creative Design Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Performance Creative Across Every Format Your Paid Campaigns Need.</p>
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Who Ad Creative Design Is Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If Your Campaigns Are Running but Your Creative Is Not Keeping Up, This Is What Changes That.</p>
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
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Find out whether your ad creative is helping or hurting your campaign performance.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  A free creative audit will show you the specific issues affecting your existing creative — and what a properly built replacement set would look like.
                </p>
              </div>
              <a href="/contact" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Get My Free Creative Audit <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Businesses Choose Isuremedia for Ad Creative Design</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Performance-Led. Platform-Specific. Built to Test and Refresh.</p>
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
                  <img src="https://picsum.photos/seed/acdwhatmakesdifferent2/700/620" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
        <section className="acd-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                How Isuremedia Designs and Delivers <span style={{ color: 'var(--ism-amber)' }}>Ad Creative</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Strategy. Brief. Design. Test. Refresh.
              </p>
            </div>
            <div className="acd-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, position: 'relative' }}>
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
              <strong style={{ color: 'var(--color-navy)' }}>Typical timelines:</strong> Single-format creative sets — two to three business days. Multi-format campaign sets — three to five business days. Full creative systems with strategy and multiple format variants — five to seven business days.
            </p>
            {/* CTA */}
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', boxShadow: '0 6px 22px rgba(255,176,0,.38)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,176,0,.50)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 22px rgba(255,176,0,.38)'; }}
              >
                Get Ad Creative Samples
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .acd-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
              .acd-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 14. FAQ ══════════════════════════════════════════════ */}
        <FAQAccordion />

        {/* ══ 15. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/ads creative.webp" />
      </main>
      <Footer />
    </>
  );
}
