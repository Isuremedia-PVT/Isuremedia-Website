'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ── DATA ─────────────────────────────────────────────────────────────── */

const STATS = [
  { num: '1,000+', label: 'Content pieces produced monthly',              sub: 'Blogs, ads, social, email, video — every format' },
  { num: '3×',     label: 'Average engagement lift with new creative',     sub: 'vs. previous generic or inconsistent content' },
  { num: '40+',    label: 'In-house writers, designers, and video editors', sub: 'No outsourcing. One roof. One standard.' },
  { num: 'Zero',   label: 'Generic stock content',                         sub: 'Every piece is custom-built for your brand' },
];

const SERVICES = [
  { icon: 'fa-file-lines',  title: 'Content Marketing',                 desc: 'Full-service content marketing — strategy, production, publishing, and measurement. Built to grow organic authority and guide buyers through every stage of your funnel.', cta: 'See Content Marketing Services',        href: '/services/content-marketing' },
  { icon: 'fa-pen-nib',     title: 'SEO Blog Writing',                  desc: 'Keyword-researched, topically authoritative blog articles written for both search engines and real readers. Human-edited, properly structured, and built to rank.',           cta: 'See SEO Blog Writing Services',         href: '/services/seo-blog-writing' },
  { icon: 'fa-globe',       title: 'Website Copywriting',               desc: 'Homepage, service page, about page, and landing page copy written to convert visitors into leads. Every word earns its place.',                                                  cta: 'See Website Copywriting Services',      href: '/services/website-copywriting' },
  { icon: 'fa-hashtag',     title: 'Social Media Content & Management', desc: 'Content calendars, caption writing, creative assets, and posting management for organic social media. Consistent brand presence without you managing it.',                     cta: 'See Social Media Services',             href: '/services/social-media-content-management' },
  { icon: 'fa-palette',     title: 'Graphic Design',                    desc: 'Brand-aligned graphic design for digital channels — social posts, ad creatives, infographics, email headers, and presentation assets.',                                         cta: 'See Graphic Design Services',           href: '/services/graphic-design' },
  { icon: 'fa-star',        title: 'Brand Identity & Visual Design',    desc: 'Logo design, brand guidelines, colour systems, and typography — the visual foundation that makes everything else look intentional and consistent.',                              cta: 'See Brand Identity Services',           href: '/services/brand-identity-design' },
  { icon: 'fa-image',       title: 'Ad Creative Design',                desc: 'Static and animated creatives for paid ads across Google Display, Meta, LinkedIn, and YouTube. Designed to stop the scroll and get the click.',                                 cta: 'See Ad Creative Design Services',       href: '/services/ad-creative-design' },
  { icon: 'fa-video',       title: 'Video Marketing & Editing',         desc: 'Video scripting, editing, short-form reels, and long-form video content for social and paid campaigns. Strategy-led, not just edited footage.',                                  cta: 'See Video Marketing Services',          href: '/services/video-marketing-editing' },
  { icon: 'fa-envelope',    title: 'Email Marketing',                   desc: 'Email campaigns, drip sequences, list management, and newsletter production. Written, designed, and ready to send — or handed to your team fully prepared.',                     cta: 'See Email Marketing Services',          href: '/services/email-marketing' },
  { icon: 'fa-robot',       title: 'AI Content Production',             desc: 'AI-assisted content workflows for scale — SEO articles, product descriptions, social copy, and email sequences produced at volume, human-edited for quality and brand consistency.', cta: 'See AI Content Production Services', href: '/services/ai-content-production', isNew: true },
];

const DIFFERENTIATORS = [
  { num: '01', title: 'Brief once, receive consistently',   desc: 'One thorough brief captures your brand voice and goals. Every piece after that maintains them without you re-explaining.' },
  { num: '02', title: 'Feeds your SEO and paid channels',  desc: 'Our content team works alongside our SEO and PPC specialists. Every piece serves a live marketing objective.' },
  { num: '03', title: 'Scales without quality dropping',   desc: 'AI-assisted production handles volume without sacrificing brand consistency. Every piece is reviewed by a human before delivery.' },
  { num: '04', title: 'One team for everything',           desc: 'Copy, design, video, and email from the same team. Your brand looks and sounds consistent everywhere, not scattered.' },
];

const TIMELINE_STEPS = [
  { num: '01', title: 'Discovery and Brand Briefing',  desc: 'We start by understanding your brand voice, audience, tone, competitors, and what each piece of content needs to do. One thorough brief upfront prevents weeks of revisions later. Every writer and designer on your account works from this brief, every time.' },
  { num: '02', title: 'Strategy and Content Plan',     desc: 'We map out what to produce, in what format, for which channel, and why. A blog content calendar, an ad creative brief, a social posting schedule — everything planned before production starts. Every piece has a defined goal.' },
  { num: '03', title: 'Production and Quality Review', desc: 'Writers, designers, and video editors produce the content. Every piece goes through a quality review against your brand brief before you see it. We do not send first drafts and call them done. You receive polished, ready-to-publish work.' },
  { num: '04', title: 'Deliver, Publish, and Measure', desc: 'Assets are delivered in the format you need — ready to publish, or handed off to your team. We track what performs and feed that data back into the next production cycle. What works gets more of, what does not gets adjusted.' },
];

const RESULTS = [
  {
    tag: 'E-COMMERCE — SEO BLOG CONTENT + AD CREATIVES',
    headline: '218% More Organic Traffic in 8 Months',
    body: 'An online retailer had no consistent content strategy and ad creatives that were not converting. We built a topical cluster content plan, published 24 SEO articles over 8 months, and redesigned their Meta ad creative library. Organic traffic grew 218% and ad click-through improved by 91%.',
    metrics: [
      { val: '218%', label: 'Organic traffic growth' },
      { val: '91%',  label: 'Ad CTR improvement' },
      { val: '24',   label: 'SEO articles published' },
    ],
  },
  {
    tag: 'COACHING BUSINESS — BRAND IDENTITY + CONTENT MARKETING',
    headline: '3× More Inbound Enquiries in 6 Months',
    body: 'A business coach had no consistent brand identity and content that looked different every week. We built their brand guidelines, redesigned all digital assets, and launched a blog and social content programme. Inbound enquiries tripled in 6 months without increasing ad spend.',
    metrics: [
      { val: '3×',  label: 'Inbound enquiries' },
      { val: '0%',  label: 'Increase in ad spend' },
      { val: '6mo', label: 'To triple enquiries' },
    ],
  },
];

const INDUSTRIES = [
  'Real Estate & Property', 'E-Commerce', 'Marketing Agencies',
  'Coaches & Consultants', 'Law Firms', 'Home Services & HVAC',
  'Education & Online Courses', 'Health & Wellness', 'SaaS & Tech',
  'Finance & Fintech', 'Restaurants & Hospitality', 'Automotive',
];

const TOOL_CATEGORIES = [
  { label: 'Design and creative tools', tools: ['Adobe Creative Suite', 'Figma', 'Canva Pro', 'Adobe Premiere Pro', 'CapCut', 'DaVinci Resolve', 'After Effects'], color: 'rgba(30,77,195,.09)', tcolor: 'var(--color-primary)' },
  { label: 'Content and copy tools',    tools: ['SurferSEO', 'Clearscope', 'Grammarly', 'Notion', 'Airtable', 'ChatGPT (human-edited)'],                           color: 'rgba(255,176,0,.09)',  tcolor: '#B37800' },
  { label: 'Publishing and management', tools: ['Buffer', 'Later', 'Hootsuite', 'HubSpot', 'Mailchimp', 'Klaviyo', 'ActiveCampaign', 'WordPress'],                  color: 'rgba(52,199,89,.09)', tcolor: '#16A34A' },
];

const FAQS = [
  { q: 'What is content marketing and how is it different from just writing blog posts?', a: 'Content marketing is a strategic approach to creating and distributing content that attracts, nurtures, and converts your ideal buyers — not just publishing articles for the sake of volume. A blog post is one tactic within a content marketing strategy. We also build in social content, email, video, lead magnets, and creative assets that support your SEO, funnels, and ads. The blog is part of the system, not the whole thing.' },
  { q: 'How do you maintain brand voice across different content types?', a: 'We start every engagement with a brand voice and style brief. This documents your tone, vocabulary, audience, and examples of content you like and dislike. Every writer and designer on your account works from the same brief. We also do a calibration round — your first batch of content comes back with a feedback cycle so we dial in the voice before entering full production.' },
  { q: 'What is AI content production and should I be worried about quality?', a: 'AI content production means using AI tools to speed up research, structure drafts, and scale output. We use it for clients who need high volume — product descriptions, social captions, email variations — where speed matters. Every piece produced with AI assistance is reviewed, edited, and approved by a human writer before it leaves our team. You would not be able to tell the difference from fully human-written content. We never publish raw AI output.' },
  { q: 'Do you handle social media content and graphic design separately?', a: 'You can use them separately or together. Some clients need only the written captions and content calendar while they handle design in-house. Others need the full package — calendar, captions, and graphic assets for every post. We scope it based on what you actually need rather than selling you the whole package when part of it is enough.' },
  { q: 'Do you offer white label content marketing and graphic design for agencies?', a: 'Yes. Content production and graphic design are two of our most requested white label services for agencies. Blog writing, social content, ad creatives, email campaigns, and brand design are all delivered under your agency brand with no ISM branding. We also have dedicated production pods for agencies that need consistent, high-volume output across multiple client accounts.' },
  { q: 'How long does it take to start receiving content?', a: 'After the brand brief and strategy session, most clients receive their first batch of content within 7 to 10 business days. For high-urgency needs — ad creatives for a campaign launching next week or a landing page that needs copy today — we can turn around individual assets in 2 to 3 business days depending on complexity and current workload.' },
  { q: 'What types of video content do you produce?', a: 'We handle video scripting, editing, short-form reels and TikTok-style content, YouTube video editing, product demonstration videos, testimonial editing, and social-first video cuts. We work with footage you provide or brief you on what to record. We do not handle physical video shoots but can recommend trusted production partners for that.' },
  { q: 'What is the difference between graphic design and brand identity design?', a: 'Graphic design covers individual assets — social post templates, ad creatives, email headers, infographics, and presentation slides. Brand identity design is the foundational system those assets are built from — your logo, colour palette, typography, and brand guidelines. Most clients need graphic design ongoing, while brand identity is a one-time project that makes all the ongoing design work faster and more consistent.' },
];

const CONTENT_CARDS = [
  { label: 'Blog Content',   icon: 'fa-file-lines', color: '#1E4DC3', progress: 95 },
  { label: 'Ad Creative',    icon: 'fa-image',       color: '#FFB000', progress: 100 },
  { label: 'Social Post',    icon: 'fa-hashtag',     color: '#8B5CF6', progress: 88 },
  { label: 'Email',          icon: 'fa-envelope',    color: '#16A34A', progress: 100 },
  { label: 'Brand Identity', icon: 'fa-star',        color: '#EC4899', progress: 92 },
  { label: 'Video',          icon: 'fa-video',       color: '#F97316', progress: 80 },
];

const BUSINESS_PAINS = [
  'Your content looks inconsistent because different people are producing different things with no shared brand brief',
  'You publish content occasionally but there is no system or strategy behind it',
  'Your ad creatives look generic and your social content is not getting the engagement it should',
  'You need a full content and design team but cannot justify hiring a full team in-house',
  'You want SEO content, ad creatives, social posts, email, and video handled by one team who understand your goals',
];

const AGENCY_PAINS = [
  'Your clients need ongoing content and creative production and you need a reliable white label partner to deliver it consistently',
  'You want blog writing, graphic design, ad creatives, and social content delivered under your agency brand',
  'You need a production team that can handle volume per client without compromising on brand consistency',
  'You want AI-assisted production available for high-volume clients who need rapid content output at scale',
  'You need a creative partner who understands marketing objectives, not just how to produce assets',
];

const TICKER_ITEMS = [
  'Content Marketing', 'SEO Blog Writing', 'Graphic Design', 'Ad Creative', 'Video Editing',
  'Brand Identity', 'Website Copywriting', 'Social Media Content', 'Email Marketing', 'AI Production',
];

/* ── COMPONENTS ───────────────────────────────────────────────────────── */

function Pill({ text, amber, purple }: { text: string; amber?: boolean; purple?: boolean }) {
  const bg     = purple ? 'rgba(168,85,247,.10)' : amber ? 'rgba(255,176,0,.10)' : 'var(--ism-blue-50)';
  const border = purple ? 'rgba(168,85,247,.30)' : amber ? 'rgba(255,176,0,.30)' : 'var(--ism-blue-100)';
  const dot    = purple ? '#9333EA' : amber ? 'var(--ism-amber)' : 'var(--color-primary)';
  const color  = purple ? '#9333EA' : amber ? 'var(--ism-amber)' : 'var(--color-primary)';
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:bg, border:`1px solid ${border}`, borderRadius:100, padding:'6px 18px', marginBottom:20 }}>
      <span style={{ width:7, height:7, borderRadius:'50%', background:dot, display:'inline-block' }} />
      <span style={{ fontFamily:J, fontSize:12, fontWeight:700, color, letterSpacing:'.09em', textTransform:'uppercase' as const }}>{text}</span>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="cnt-section" style={{ padding:'100px 0', background:'#F0F5FF' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div className="cnt-faq-grid" style={{ display:'grid', gridTemplateColumns:'380px 1fr', gap:64, alignItems:'start' }}>
          {/* Left sticky */}
          <div style={{ position:'sticky', top:100 }}>
            <Pill text="FAQ" />
            <h2 style={{ fontFamily:J, fontSize:'clamp(26px,3vw,40px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-0.5px', marginBottom:14, marginTop:0, lineHeight:1.15 }}>
              Questions we get asked before every content engagement.
            </h2>
            <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.75, margin:'0 0 32px' }}>
              Honest answers about brand voice, quality, timelines, and how we handle AI-assisted production.
            </p>
            <a href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', borderRadius:8, fontFamily:J, fontSize:14, fontWeight:700, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 10px 28px rgba(255,176,0,.45)'; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Book a Free Creative Strategy Call →
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

/* ══ PAGE ═════════════════════════════════════════════════════════════════ */
export default function ContentCreativePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <section className="cnt-hero" style={{ background:'#fff', padding:'80px 0 72px', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'-10%', right:'-5%', width:600, height:600, background:'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents:'none' }} />
          <div style={{ position:'absolute', bottom:'-10%', left:'-4%', width:400, height:400, background:'radial-gradient(circle,rgba(255,176,0,.04) 0%,transparent 65%)', pointerEvents:'none' }} />

          <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 24px' }}>
            <div className="cnt-hero-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }}>

              {/* LEFT */}
              <div>
                {/* Breadcrumb */}
                <div style={{ display:'flex', alignItems:'center', gap:7, fontFamily:I, fontSize:13, color:'var(--color-text-muted)', marginBottom:20 }}>
                  <a href="/" style={{ color:'var(--color-text-muted)', textDecoration:'none', transition:'color .15s' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='var(--color-primary)')}
                    onMouseLeave={e=>(e.currentTarget.style.color='var(--color-text-muted)')}>Home</a>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize:9, opacity:.5 }} />
                  <a href="/services" style={{ color:'var(--color-text-muted)', textDecoration:'none', transition:'color .15s' }}
                    onMouseEnter={e=>(e.currentTarget.style.color='var(--color-primary)')}
                    onMouseLeave={e=>(e.currentTarget.style.color='var(--color-text-muted)')}>Services</a>
                  <i className="fa-solid fa-chevron-right" style={{ fontSize:9, opacity:.5 }} />
                  <span style={{ color:'var(--color-primary)', fontWeight:600 }}>Brand &amp; Creative</span>
                </div>

                {/* Label pill with pulse */}
                <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:100, background:'rgba(30,77,195,.07)', border:'1px solid rgba(30,77,195,.15)', fontFamily:J, fontSize:12, fontWeight:700, color:'var(--color-primary)', letterSpacing:'.05em', marginBottom:24 }}>
                  <span style={{ width:8, height:8, borderRadius:'50%', background:'#22C55E', display:'inline-block', boxShadow:'0 0 0 3px rgba(34,197,94,.25)', animation:'cnt-pulse 2s infinite' }} />
                  BRAND &amp; CREATIVE SERVICES
                </div>

                <h1 style={{ fontFamily:J, fontSize:'clamp(26px,2.8vw,44px)', fontWeight:900, color:'var(--color-navy)', letterSpacing:'-1px', lineHeight:1.1, margin:'0 0 20px' }}>
                  Content Marketing and Creative Services Built to Attract, Engage, and Convert —{' '}
                  <span style={{ color:'var(--ism-amber)', position:'relative', display:'inline-block' }}>
                    Not Just Fill a Calendar
                    <svg style={{ position:'absolute', bottom:-4, left:0, width:'100%' }} height="6" viewBox="0 0 260 6" preserveAspectRatio="none">
                      <path d="M2 4 Q65 1 130 4 Q195 7 258 2" stroke="var(--ism-amber)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily:I, fontSize:16, color:'var(--color-text-muted)', lineHeight:1.78, margin:'0 0 32px', maxWidth:460 }}>
                  We write, design, film, and produce the content that powers your SEO, ads, and funnels. Copy, graphics, social content, video, email, and AI-assisted production — all in-house, all connected to your marketing goals.
                </p>

                {/* CTAs */}
                <div style={{ display:'flex', alignItems:'center', gap:12, flexWrap:'wrap', marginBottom:28 }}>
                  <a href="/contact"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-navy)', background:'var(--ism-amber)', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 6px 22px rgba(255,176,0,.38)', transition:'all .18s', border:'2px solid var(--ism-amber)', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 12px 30px rgba(255,176,0,.50)'; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 6px 22px rgba(255,176,0,.38)'; }}
                  >
                    Book a Free Creative Strategy Call →
                  </a>
                  <a href="#cnt-services"
                    style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:8, fontFamily:J, fontSize:13, fontWeight:800, color:'var(--color-primary)', background:'transparent', textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', border:'2px solid var(--color-primary)', transition:'all .18s', whiteSpace:'nowrap' }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color='#fff'; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='transparent'; (e.currentTarget as HTMLAnchorElement).style.color='var(--color-primary)'; }}
                  >
                    See Our Services ↓
                  </a>
                </div>

                {/* Trust badges */}
                <div style={{ display:'flex', alignItems:'center', gap:'6px 16px', flexWrap:'wrap', fontFamily:I, fontSize:13, color:'var(--color-text-muted)' }}>
                  {['1,000+ content pieces delivered monthly','In-house writers and designers only','AI-assisted production available'].map((b, i) => (
                    <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:6 }}>
                      <i className="fa-solid fa-check" style={{ color:'var(--ism-amber)', fontSize:11 }} />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT: 3×2 content type grid */}
              <div style={{ position:'relative' }}>
                <div style={{ background:'var(--color-navy)', borderRadius:16, padding:24, boxShadow:'0 32px 80px rgba(30,77,195,.18)', border:'1px solid rgba(0,0,0,.08)' }}>
                  {/* Browser chrome */}
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16, padding:'8px 10px', background:'rgba(255,255,255,.05)', borderRadius:8, border:'1px solid rgba(255,255,255,.07)' }}>
                    <div style={{ display:'flex', gap:5 }}>
                      {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width:11, height:11, borderRadius:'50%', background:c }} />)}
                    </div>
                    <span style={{ fontSize:10, color:'rgba(255,255,255,.40)', fontFamily:I, letterSpacing:'.05em', textTransform:'uppercase' as const, marginLeft:4 }}>Content Production — Live</span>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10 }}>
                    {CONTENT_CARDS.map(card => (
                      <div key={card.label} style={{ background:'rgba(255,255,255,.06)', borderRadius:10, padding:'14px 12px', border:'1px solid rgba(255,255,255,.08)' }}>
                        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10 }}>
                          <div style={{ width:28, height:28, borderRadius:6, background:`${card.color}22`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                            <i className={`fa-solid ${card.icon}`} style={{ color:card.color, fontSize:12 }} />
                          </div>
                          <span style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,.85)', fontFamily:J, lineHeight:1.2 }}>{card.label}</span>
                        </div>
                        <div style={{ background:'rgba(255,255,255,.1)', borderRadius:4, height:4, overflow:'hidden' }}>
                          <div style={{ height:'100%', width:`${card.progress}%`, background:card.color, borderRadius:4 }} />
                        </div>
                        <div style={{ display:'flex', justifyContent:'space-between', marginTop:5 }}>
                          <span style={{ fontSize:9, color:'rgba(255,255,255,.4)', fontFamily:I }}>Progress</span>
                          <span style={{ fontSize:9, color:card.color, fontFamily:I, fontWeight:700 }}>{card.progress}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop:14, padding:'10px 16px', background:'rgba(255,255,255,.04)', borderRadius:8, border:'1px solid rgba(255,255,255,.06)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:12, color:'rgba(255,255,255,.55)', fontFamily:I }}>Monthly output</span>
                    <span style={{ fontSize:14, fontWeight:700, color:'var(--ism-amber)', fontFamily:J }}>1,000+ pieces</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ 2. TICKER STRIP ══════════════════════════════════════════════ */}
        <div style={{ background:'#0A1628', borderBottom:'2px solid var(--ism-amber)', overflow:'hidden', padding:'14px 0' }}>
          <div style={{ display:'flex', animation:'cnt-ticker 28s linear infinite', whiteSpace:'nowrap' }}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:12, padding:'0 28px', fontFamily:J, fontSize:13, fontWeight:700, color:'rgba(255,255,255,.75)', letterSpacing:'.06em', textTransform:'uppercase' as const, flexShrink:0 }}>
                <span style={{ color:'var(--ism-amber)', fontSize:16 }}>✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ══ 3. STATS ═════════════════════════════════════════════════════ */}
        <section style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'64px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div className="cnt-stats-row" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
              {STATS.map(s => (
                <div key={s.num} style={{ textAlign:'center', padding:'32px 20px', borderRadius:14, background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.12)' }}>
                  <div style={{ fontSize:40, fontWeight:900, fontFamily:J, color:'var(--ism-amber)', lineHeight:1 }}>{s.num}</div>
                  <div style={{ marginTop:8, fontSize:14, fontWeight:700, color:'#fff', fontFamily:J, lineHeight:1.4 }}>{s.label}</div>
                  <div style={{ marginTop:6, fontSize:12, color:'rgba(255,255,255,.60)', fontFamily:I, lineHeight:1.5 }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 4. WHAT WE SOLVE ═════════════════════════════════════════════ */}
        <section className="cnt-section" style={{ background:'#fff', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ maxWidth:680, margin:'0 auto', textAlign:'center' }}>
              <Pill text="The Problem We Solve" />
              <h2 style={{ margin:'0 0 24px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,2.8vw,40px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                Your Content Looks Inconsistent Because It Was Made by Five Different People With No Shared Brief.
              </h2>
              <p style={{ fontSize:16, lineHeight:1.8, color:'var(--color-text-muted)', fontFamily:I, marginBottom:20 }}>
                You can have the best SEO strategy, the sharpest ad targeting, and the most optimised funnel. But if the blog post is thin, the ad creative looks generic, and the social content is inconsistent — none of it converts. People do not buy from strategy. They buy from what they see, read, and feel.
              </p>
              <p style={{ fontSize:16, lineHeight:1.8, color:'var(--color-text-muted)', fontFamily:I, marginBottom:48 }}>
                We produce the content and creative that makes your marketing actually land. Copy that converts, design that communicates, and video that keeps people watching — all connected to the campaigns and channels they need to feed.
              </p>
            </div>
            <div className="cnt-callouts" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }}>
              {[
                { icon:'fa-bullseye',      title:'Content that serves a purpose',   desc:'Every piece is written or designed to do a specific job — rank, convert, nurture, or build trust. Nothing produced just to fill a calendar.' },
                { icon:'fa-arrows-rotate', title:'Consistent across every channel', desc:'Your blog, ads, social, email, and website all sound and look like the same brand. No disjointed output from five different freelancers.' },
                { icon:'fa-link',          title:'Connected to your full strategy', desc:'Our content team works alongside your SEO and PPC specialists. Everything feeds everything else instead of operating in a silo.' },
              ].map(c => (
                <div key={c.title}
                  style={{ padding:'28px 24px', background:'var(--color-bg-soft)', borderRadius:14, border:'1px solid var(--color-border)', transition:'transform .22s, box-shadow .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 40px rgba(30,77,195,.10)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow=''; }}
                >
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(30,77,195,.1)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16 }}>
                    <i className={`fa-solid ${c.icon}`} style={{ color:'var(--color-primary)', fontSize:20 }} />
                  </div>
                  <h4 style={{ margin:'0 0 8px', fontFamily:J, fontWeight:700, fontSize:15, color:'var(--color-navy)' }}>{c.title}</h4>
                  <p style={{ margin:0, fontSize:13, lineHeight:1.65, color:'var(--color-text-muted)', fontFamily:I }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. SERVICE CARDS ═════════════════════════════════════════════ */}
        <section id="cnt-services" className="cnt-section" style={{ background:'var(--color-bg-soft)', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Our Brand & Creative Services" />
              <h2 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,2.5vw,40px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                Every Content and Creative Service You Need. All In-House.
              </h2>
              <p style={{ fontSize:16, color:'var(--color-text-muted)', fontFamily:I, maxWidth:600, margin:'0 auto', lineHeight:1.7 }}>
                From long-form SEO content to ad creatives and brand identity — one team producing everything your marketing needs to perform.
              </p>
            </div>
            <div className="cnt-svc-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
              {SERVICES.map(svc => (
                <div key={svc.title}
                  style={{ position:'relative', padding:'28px 24px', background:'#fff', borderRadius:14, border:'1px solid var(--color-border)', borderLeft:'3px solid var(--color-primary)', boxShadow:'0 2px 12px rgba(0,0,0,.04)', transition:'transform .22s, box-shadow .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 40px rgba(30,77,195,.12)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow='0 2px 12px rgba(0,0,0,.04)'; }}
                >
                  {svc.isNew && (
                    <div style={{ position:'absolute', top:16, right:16 }}>
                      <Pill text="New" purple />
                    </div>
                  )}
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(30,77,195,.1)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16 }}>
                    <i className={`fa-solid ${svc.icon}`} style={{ color:'var(--color-primary)', fontSize:20 }} />
                  </div>
                  <h3 style={{ margin:'0 0 10px', fontFamily:J, fontWeight:700, fontSize:16, color:'var(--color-navy)', lineHeight:1.3 }}>{svc.title}</h3>
                  <p style={{ margin:'0 0 20px', fontSize:13, lineHeight:1.7, color:'var(--color-text-muted)', fontFamily:I }}>{svc.desc}</p>
                  <a href={svc.href} style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:13, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', fontFamily:J }}>
                    {svc.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 6. DIFFERENTIATORS ═══════════════════════════════════════════ */}
        <section className="cnt-section" style={{ background:'#fff', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Why It Works Differently Here" />
              <h2 style={{ margin:'0 0 0', fontFamily:J, fontWeight:900, fontSize:'clamp(22px,2.2vw,36px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                Content and Creative That Is Built Into Your Marketing, Not Bolted On
              </h2>
            </div>
            <div className="cnt-diff-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
              {DIFFERENTIATORS.map(d => (
                <div key={d.num}
                  style={{ padding:'32px 24px', background:'var(--color-bg-soft)', borderRadius:14, border:'1px solid var(--color-border)', transition:'transform .22s, box-shadow .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 40px rgba(30,77,195,.10)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow=''; }}
                >
                  <div style={{ fontFamily:J, fontSize:30, fontWeight:900, color:'var(--color-primary)', lineHeight:1, marginBottom:16 }}>{d.num}</div>
                  <h4 style={{ margin:'0 0 10px', fontFamily:J, fontWeight:700, fontSize:15, color:'var(--color-navy)', lineHeight:1.3 }}>{d.title}</h4>
                  <p style={{ margin:0, fontSize:13, lineHeight:1.65, color:'var(--color-text-muted)', fontFamily:I }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. PROCESS ═══════════════════════════════════════════════════ */}
        <section className="cnt-section" style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="How We Produce Your Content" amber />
              <h2 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,2.5vw,40px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'#fff' }}>
                From Brief to Final Asset Without the Back and Forth
              </h2>
              <p style={{ fontSize:16, color:'rgba(255,255,255,.70)', fontFamily:I, maxWidth:500, margin:'0 auto' }}>
                Four steps. Clear ownership at every stage. Consistent output every time.
              </p>
            </div>
            <div className="cnt-timeline" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
              {TIMELINE_STEPS.map((step, i) => (
                <div key={step.num}
                  style={{ position:'relative', padding:'32px 24px', background:'rgba(255,255,255,.07)', borderRadius:14, border:'1px solid rgba(255,255,255,.12)', transition:'transform .22s, background .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.background='rgba(255,255,255,.11)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.background='rgba(255,255,255,.07)'; }}
                >
                  {i < TIMELINE_STEPS.length - 1 && (
                    <div className="cnt-step-arrow" style={{ position:'absolute', top:40, right:-13, zIndex:2 }}>
                      <i className="fa-solid fa-chevron-right" style={{ color:'var(--ism-amber)', fontSize:14 }} />
                    </div>
                  )}
                  <div style={{ fontFamily:J, fontSize:32, fontWeight:900, color:'var(--ism-amber)', lineHeight:1, marginBottom:16 }}>{step.num}</div>
                  <h4 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:700, fontSize:15, color:'#fff', lineHeight:1.3 }}>{step.title}</h4>
                  <p style={{ margin:0, fontSize:13, lineHeight:1.65, color:'rgba(255,255,255,.68)', fontFamily:I }}>{step.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign:'center', marginTop:52 }}>
              <p style={{ fontSize:15, color:'rgba(255,255,255,.72)', fontFamily:I, maxWidth:580, margin:'0 auto 24px', lineHeight:1.7 }}>
                Book a Free Creative Strategy Call — We will review your current content, identify the gaps, and show you exactly what a connected content plan looks like.
              </p>
              <a href="/contact"
                style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 28px', background:'var(--ism-amber)', color:'var(--color-navy)', borderRadius:8, fontFamily:J, fontWeight:700, fontSize:14, textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', boxShadow:'0 6px 20px rgba(255,176,0,.35)', transition:'all .18s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 10px 28px rgba(255,176,0,.50)'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 6px 20px rgba(255,176,0,.35)'; }}
              >
                Book a Free Creative Strategy Call →
              </a>
            </div>
          </div>
        </section>

        {/* ══ 8. WHO THIS IS FOR ═══════════════════════════════════════════ */}
        <section className="cnt-section" style={{ background:'var(--ism-blue-50,#F0F5FF)', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:48 }}>
              <Pill text="Who We Produce Content For" />
              <h2 style={{ margin:'0', fontFamily:J, fontWeight:900, fontSize:'clamp(24px,2.5vw,38px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                Whether You Run a Business or an Agency, We Have Done This Before.
              </h2>
            </div>
            <div className="cnt-split" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32 }}>
              {/* Businesses */}
              <div style={{ padding:'40px 36px', background:'#fff', borderRadius:16, border:'1px solid var(--color-border)', boxShadow:'0 4px 20px rgba(0,0,0,.05)', transition:'transform .22s, box-shadow .22s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 40px rgba(30,77,195,.10)'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow='0 4px 20px rgba(0,0,0,.05)'; }}
              >
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(30,77,195,.1)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <i className="fa-solid fa-building" style={{ color:'var(--color-primary)', fontSize:20 }} />
                  </div>
                  <h3 style={{ margin:0, fontFamily:J, fontWeight:900, fontSize:18, color:'var(--color-navy)' }}>For Businesses</h3>
                </div>
                <ul style={{ margin:'0 0 28px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:12 }}>
                  {BUSINESS_PAINS.map(item => (
                    <li key={item} style={{ display:'flex', gap:10, fontSize:14, color:'var(--color-text-muted)', fontFamily:I, lineHeight:1.6 }}>
                      <i className="fa-solid fa-circle-check" style={{ color:'var(--color-primary)', flexShrink:0, marginTop:3, fontSize:13 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'13px 22px', background:'var(--color-primary)', color:'#fff', borderRadius:8, fontFamily:J, fontWeight:700, fontSize:13, textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', transition:'all .18s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='#1840A0'; (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.transform=''; }}
                >
                  Book a Free Creative Call for Businesses →
                </a>
              </div>

              {/* Agencies */}
              <div style={{ padding:'40px 36px', background:'var(--color-navy)', borderRadius:16, border:'1px solid rgba(255,255,255,.06)', boxShadow:'0 4px 24px rgba(0,0,0,.14)', transition:'transform .22s, box-shadow .22s' }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 20px 50px rgba(0,0,0,.22)'; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow='0 4px 24px rgba(0,0,0,.14)'; }}
              >
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
                  <div style={{ width:44, height:44, borderRadius:10, background:'rgba(255,176,0,.15)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <i className="fa-solid fa-briefcase" style={{ color:'var(--ism-amber)', fontSize:20 }} />
                  </div>
                  <h3 style={{ margin:0, fontFamily:J, fontWeight:900, fontSize:18, color:'#fff' }}>For Agencies</h3>
                </div>
                <ul style={{ margin:'0 0 28px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:12 }}>
                  {AGENCY_PAINS.map(item => (
                    <li key={item} style={{ display:'flex', gap:10, fontSize:14, color:'rgba(255,255,255,.78)', fontFamily:I, lineHeight:1.6 }}>
                      <i className="fa-solid fa-circle-check" style={{ color:'var(--ism-amber)', flexShrink:0, marginTop:3, fontSize:13 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="/contact"
                  style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'13px 22px', background:'var(--ism-amber)', color:'var(--color-navy)', borderRadius:8, fontFamily:J, fontWeight:700, fontSize:13, textDecoration:'none', letterSpacing:'.04em', textTransform:'uppercase', transition:'all .18s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.opacity='.88'; (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-2px)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.opacity='1'; (e.currentTarget as HTMLAnchorElement).style.transform=''; }}
                >
                  Book a Free Call for Agencies →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 9. RESULTS ═══════════════════════════════════════════════════ */}
        <section className="cnt-section" style={{ background:'#fff', padding:'100px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:56 }}>
              <Pill text="Real Results" />
              <h2 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:900, fontSize:'clamp(24px,2.5vw,38px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                What Happens When Content and Creative Are Done Properly
              </h2>
              <p style={{ fontSize:16, color:'var(--color-text-muted)', fontFamily:I, maxWidth:560, margin:'0 auto', lineHeight:1.7 }}>
                Real outcomes from content and creative engagements our in-house team delivered.
              </p>
            </div>
            <div className="cnt-results-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:28 }}>
              {RESULTS.map(r => (
                <div key={r.headline}
                  style={{ padding:'36px 32px', background:'var(--color-bg-soft)', borderRadius:16, border:'1px solid rgba(30,77,195,.1)', transition:'transform .22s, box-shadow .22s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLDivElement).style.transform='translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow='0 16px 40px rgba(30,77,195,.10)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLDivElement).style.transform=''; (e.currentTarget as HTMLDivElement).style.boxShadow=''; }}
                >
                  <span style={{ display:'inline-block', fontSize:10, fontWeight:700, letterSpacing:'.1em', color:'var(--color-primary)', textTransform:'uppercase', fontFamily:I, marginBottom:16 }}>{r.tag}</span>
                  <h3 style={{ margin:'0 0 16px', fontFamily:J, fontWeight:900, fontSize:'clamp(20px,1.8vw,28px)', color:'var(--color-navy)', lineHeight:1.2, letterSpacing:'-0.3px' }}>{r.headline}</h3>
                  <p style={{ margin:'0 0 24px', fontSize:14, lineHeight:1.75, color:'var(--color-text-muted)', fontFamily:I }}>{r.body}</p>
                  <div style={{ display:'flex', gap:20, borderTop:'1px solid rgba(30,77,195,.1)', paddingTop:20, marginBottom:20 }}>
                    {r.metrics.map(m => (
                      <div key={m.label} style={{ flex:1 }}>
                        <div style={{ fontFamily:J, fontWeight:900, fontSize:22, color:'var(--color-primary)' }}>{m.val}</div>
                        <div style={{ fontSize:11, color:'var(--color-text-muted)', fontFamily:I, marginTop:2, lineHeight:1.4 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <a href="#" style={{ fontSize:13, fontWeight:700, color:'var(--color-primary)', textDecoration:'none', fontFamily:J }}>Read Full Case Study →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 10. INDUSTRIES ═══════════════════════════════════════════════ */}
        <section className="cnt-section" style={{ background:'var(--color-bg-soft)', padding:'80px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', textAlign:'center' }}>
            <Pill text="Industries We Serve" />
            <h2 style={{ margin:'0 0 12px', fontFamily:J, fontWeight:900, fontSize:'clamp(22px,2.2vw,36px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
              We Have Produced Content and Creative Across These Industries.
            </h2>
            <p style={{ fontSize:15, color:'var(--color-text-muted)', fontFamily:I, maxWidth:600, margin:'0 auto 36px', lineHeight:1.7 }}>
              The content strategy that works for a law firm is completely different from what works for an e-commerce brand. We know the difference and we build for it.
            </p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center', marginBottom:28 }}>
              {INDUSTRIES.map(ind => (
                <span key={ind}
                  style={{ padding:'8px 20px', background:'#fff', border:'1px solid var(--color-border)', borderRadius:100, fontSize:13, color:'var(--color-navy)', fontFamily:I, fontWeight:600, cursor:'pointer', transition:'all .18s' }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLSpanElement).style.background='var(--color-primary)'; (e.currentTarget as HTMLSpanElement).style.color='#fff'; (e.currentTarget as HTMLSpanElement).style.borderColor='var(--color-primary)'; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLSpanElement).style.background='#fff'; (e.currentTarget as HTMLSpanElement).style.color='var(--color-navy)'; (e.currentTarget as HTMLSpanElement).style.borderColor='var(--color-border)'; }}
                >{ind}</span>
              ))}
            </div>
            <p style={{ fontSize:14, color:'var(--color-text-muted)', fontFamily:I }}>
              Don&apos;t see your industry?{' '}
              <a href="/contact" style={{ color:'var(--color-primary)', fontWeight:700, textDecoration:'none' }}>Book a call and let&apos;s talk. →</a>
            </p>
          </div>
        </section>

        {/* ══ 11. TOOLS ════════════════════════════════════════════════════ */}
        <section className="cnt-section" style={{ background:'#fff', padding:'80px 0' }}>
          <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
            <div style={{ textAlign:'center', marginBottom:48 }}>
              <Pill text="Tools and Platforms We Use" />
              <h2 style={{ margin:'0', fontFamily:J, fontWeight:900, fontSize:'clamp(22px,2.2vw,36px)', lineHeight:1.15, letterSpacing:'-0.5px', color:'var(--color-navy)' }}>
                We Produce Content Across Every Major Platform and Design Tool
              </h2>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              {TOOL_CATEGORIES.map(cat => (
                <div key={cat.label} style={{ padding:'18px 24px', background:'var(--color-bg-soft)', borderRadius:12, border:'1px solid var(--color-border)' }}>
                  <div className="cnt-tool-row" style={{ display:'flex', flexWrap:'wrap', alignItems:'center', gap:12 }}>
                    <span style={{ fontSize:11, fontWeight:700, color:'var(--color-text-muted)', fontFamily:I, letterSpacing:'.06em', textTransform:'uppercase', minWidth:180, flexShrink:0 }}>{cat.label}</span>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                      {cat.tools.map(t => (
                        <span key={t} style={{ padding:'5px 12px', background:cat.color, color:cat.tcolor, borderRadius:6, fontSize:12, fontWeight:600, fontFamily:I }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 12. FAQ ══════════════════════════════════════════════════════ */}
        <FAQSection />

        {/* ══ 13. BOTTOM CTA ═══════════════════════════════════════════════ */}
        <section className="cnt-section" style={{ background:'linear-gradient(135deg,#1840A0,#2F5FE8)', padding:'100px 0', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:800, height:800, background:'radial-gradient(circle,rgba(255,255,255,.04) 0%,transparent 60%)', pointerEvents:'none' }} />
          <div style={{ maxWidth:800, margin:'0 auto', padding:'0 24px', textAlign:'center', position:'relative' }}>
            <h2 style={{ margin:'0 0 16px', fontFamily:J, fontWeight:900, fontSize:'clamp(26px,3vw,44px)', color:'#fff', lineHeight:1.1, letterSpacing:'-0.5px' }}>
              Ready to Have Content and Creative<br className="cnt-cta-br" /> That Actually Moves People?
            </h2>
            <p style={{ fontSize:16, color:'rgba(255,255,255,.72)', fontFamily:I, margin:'0 auto 36px', maxWidth:560, lineHeight:1.75 }}>
              Book a free 30-minute creative strategy call. We will review your current content and creative, identify what is missing, and show you what a connected content plan looks like for your business.
            </p>
            <a href="/contact"
              style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'16px 32px', background:'var(--ism-amber)', color:'var(--color-navy)', borderRadius:8, fontFamily:J, fontWeight:800, fontSize:15, textDecoration:'none', letterSpacing:'.05em', textTransform:'uppercase', boxShadow:'0 8px 28px rgba(255,176,0,.45)', transition:'all .18s' }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform='translateY(-3px)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 14px 36px rgba(255,176,0,.60)'; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLAnchorElement).style.transform=''; (e.currentTarget as HTMLAnchorElement).style.boxShadow='0 8px 28px rgba(255,176,0,.45)'; }}
            >
              Book a Free Creative Strategy Call →
            </a>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'10px 28px', justifyContent:'center', marginTop:32 }}>
              {['No contract required','In-house writers and designers','AI production available at scale','White-label ready for agencies'].map(b => (
                <span key={b} style={{ display:'flex', alignItems:'center', gap:6, fontSize:13, color:'rgba(255,255,255,.60)', fontFamily:I }}>
                  <i className="fa-solid fa-circle-check" style={{ color:'var(--ism-amber)', fontSize:11 }} />
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        @keyframes cnt-pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.25); }
          50%      { box-shadow: 0 0 0 7px rgba(34,197,94,.08); }
        }
        @keyframes cnt-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (max-width: 640px) {
          .cnt-hero    { padding: 56px 0 44px !important; }
          .cnt-section { padding-top: 60px !important; padding-bottom: 60px !important; }
          .cnt-cta-br  { display: none; }
        }
        @media (max-width: 900px) {
          .cnt-hero-grid    { grid-template-columns: 1fr !important; gap: 40px !important; }
          .cnt-stats-row    { grid-template-columns: 1fr 1fr !important; }
          .cnt-callouts     { grid-template-columns: 1fr 1fr !important; }
          .cnt-svc-grid     { grid-template-columns: 1fr 1fr !important; }
          .cnt-diff-grid    { grid-template-columns: 1fr 1fr !important; }
          .cnt-timeline     { grid-template-columns: 1fr 1fr !important; }
          .cnt-split        { grid-template-columns: 1fr !important; }
          .cnt-results-grid { grid-template-columns: 1fr !important; }
          .cnt-faq-grid     { grid-template-columns: 1fr !important; }
          .cnt-step-arrow   { display: none !important; }
        }
        @media (max-width: 600px) {
          .cnt-svc-grid  { grid-template-columns: 1fr !important; }
          .cnt-callouts  { grid-template-columns: 1fr !important; }
          .cnt-diff-grid { grid-template-columns: 1fr !important; }
          .cnt-timeline  { grid-template-columns: 1fr !important; }
          .cnt-tool-row  { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </>
  );
}
