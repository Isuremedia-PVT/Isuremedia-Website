'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const BRIDGE_ITEMS = [
  'Chatbot strategy and conversation flow design',
  'AI chatbot build and platform configuration',
  'Training on your business, services, and FAQs',
  'CRM integration — every conversation logged automatically',
  'Lead qualification and scoring within the conversation',
  'Appointment booking connected to your calendar',
  'Human handoff configuration for complex enquiries',
  'Performance monitoring and ongoing chatbot optimisation',
];

const WHY_MATTERS = [
  { icon: 'fa-solid fa-moon', title: 'Revenue recovered from after-hours leads', desc: 'The majority of website traffic happens outside business hours. A chatbot that engages, qualifies, and books immediately — at any hour — recovers revenue that was previously lost to timing alone.' },
  { icon: 'fa-solid fa-user-clock', title: 'Team time redirected to higher-value work', desc: 'Chatbots save businesses an average of 30% on customer support costs. The time recovered can be redirected to complex conversations and work that genuinely requires human judgment.' },
  { icon: 'fa-solid fa-filter', title: 'Lead quality improvement through consistent qualification', desc: 'A chatbot applies your qualification criteria consistently to every lead — no skipping questions, no shortcuts when the pipeline is full. Every lead that reaches your sales team has been through the same process.' },
  { icon: 'fa-solid fa-bolt', title: 'Immediate response to every enquiry', desc: '68% of customers say quick responses are the most positive aspect of chatbots. The moment a visitor starts a conversation, they get a response — not a form into a queue, not a reply in three hours.' },
  { icon: 'fa-solid fa-list-check', title: 'Lead qualification at scale', desc: 'A chatbot qualifies every lead against your criteria — budget, timeline, service fit, geography — and routes qualified leads to the right next step automatically.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Appointment booking without back-and-forth', desc: 'A qualified lead can book directly into your calendar within the conversation — no follow-up email chains, no scheduling back-and-forth. The call is booked before the conversation ends.' },
];

const CARD_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const KEY_FACTORS = [
  { icon: 'fa-solid fa-comments', title: 'Chatbot Strategy and Conversation Flow Design', impact: 'Highest impact', desc: 'Before any build begins, we map the full conversation strategy — what the chatbot handles, what it escalates, the qualification questions it asks, and the actions it triggers at each outcome.' },
  { icon: 'fa-solid fa-robot', title: 'AI Chatbot Build and Configuration', impact: 'High impact', desc: 'We build your chatbot on the platform that fits your business — GoHighLevel’s AI chatbot, a purpose-built AI agent on your website, or a channel-specific deployment.' },
  { icon: 'fa-solid fa-book', title: 'Business Training and Knowledge Base Setup', impact: 'High impact', desc: 'We train the chatbot on your services, pricing ranges, process, FAQs, and qualification criteria — so responses feel genuine rather than generic.' },
  { icon: 'fa-solid fa-database', title: 'CRM Integration and Lead Capture', impact: 'High impact', desc: 'Every chatbot conversation that produces a lead is automatically logged in your CRM — contact details captured, conversation summary recorded, pipeline stage updated.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Appointment Booking Integration', impact: 'Medium impact', desc: 'We connect the chatbot directly to your calendar system so qualified leads can book immediately within the conversation.' },
  { icon: 'fa-solid fa-list-check', title: 'Lead Qualification Logic', impact: 'Medium impact', desc: 'We configure the qualification questions and routing logic that determine what happens to each lead based on their answers.' },
  { icon: 'fa-solid fa-right-from-bracket', title: 'Human Handoff Configuration', impact: 'Contextual', desc: 'A clean handoff is the difference between a chatbot that frustrates and one that helps. We configure when and how the conversation is escalated with full context.' },
  { icon: 'fa-solid fa-chart-line', title: 'Performance Monitoring and Optimisation', impact: 'Growing fast', desc: 'We monitor conversation completion rates, escalation rates, and booking conversion, and make ongoing improvements based on what the data shows.' },
];

const CHANNELS = [
  { icon: 'fa-solid fa-globe', title: 'Website Deployment', desc: 'A trained AI agent embedded directly on your site that engages every visitor the moment they land, answering questions and qualifying leads instantly.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80' },
  { icon: 'fa-brands fa-whatsapp', title: 'WhatsApp Business', desc: 'The same qualification and booking logic deployed inside WhatsApp — where a huge share of your customers already message you.', img: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&q=80' },
  { icon: 'fa-solid fa-robot', title: 'GoHighLevel AI Chatbot', desc: 'Chatbot deployed directly inside your GHL account so every conversation, booking, and lead lives in one connected system, fully integrated with your CRM and pipelines.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80' },
  { icon: 'fa-brands fa-facebook-f', title: 'Facebook Messenger', desc: 'Capture and qualify leads coming from your Facebook page and ads without them ever having to leave the conversation.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80' },
  { icon: 'fa-brands fa-instagram', title: 'Instagram DM', desc: 'Turn Instagram enquiries into qualified, booked appointments automatically instead of getting lost in a crowded inbox.', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&q=80' },
  { icon: 'fa-solid fa-comment-dots', title: 'Channel-Specific Deployment', desc: 'Wherever your customers are most active, we deploy the same trained chatbot logic so every conversation is handled consistently.', img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&q=80' },
];

const SERVICES = [
  { icon: 'fa-solid fa-comments', title: 'Chatbot Strategy and Conversation Flow Design', desc: 'We map the conversation strategy around how your customers actually enquire, not a generic template.' },
  { icon: 'fa-solid fa-robot', title: 'AI Chatbot Build and Configuration', desc: 'Built on the platform that fits your business, including all conversation flows, response logic, and escalation pathways.' },
  { icon: 'fa-solid fa-book', title: 'Business Training and Knowledge Base Setup', desc: 'Trained on your services, pricing, process, FAQs, and qualification criteria for responses that feel genuine.' },
  { icon: 'fa-solid fa-database', title: 'CRM Integration and Lead Capture', desc: 'Every conversation that produces a lead is automatically logged — no manual import, no lost data.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Appointment Booking Integration', desc: 'Connected directly to your calendar so qualified leads can book immediately within the conversation.' },
  { icon: 'fa-solid fa-list-check', title: 'Lead Qualification Logic', desc: 'Qualification questions and routing logic that send qualified leads to booking and complex enquiries to a human.' },
  { icon: 'fa-solid fa-right-from-bracket', title: 'Human Handoff Configuration', desc: 'Clear handoff pathways with full conversation context passed to the team member taking over.' },
  { icon: 'fa-solid fa-chart-line', title: 'Performance Monitoring and Optimisation', desc: 'Ongoing improvements to conversation flows, responses, and qualification logic based on real data.' },
];

const WHO_FOR = [
  { icon: 'fa-solid fa-truck', title: 'Service businesses with after-hours enquiry traffic', desc: 'HVAC, plumbing, dental, legal, real estate, coaching — any service business where potential customers enquire outside business hours needs a system that engages them immediately.', img: 'https://images.unsplash.com/photo-1641199788912-9a7385a35c82?w=700&q=80' },
  { icon: 'fa-solid fa-headset', title: 'Teams that spend too much time on repetitive questions', desc: 'If your team is answering the same questions dozens of times a week — pricing, availability, process — a chatbot handles those automatically and frees the team for conversations that need a human.', img: 'https://images.unsplash.com/photo-1642522029686-5485ea7e6042?w=700&q=80' },
  { icon: 'fa-solid fa-store', title: 'E-commerce businesses handling high volumes', desc: 'Product questions, order status, returns, sizing — routine enquiries handled at any volume without increasing headcount. Salesforce projects 50% of service cases resolved by AI by 2027.', img: 'https://images.unsplash.com/photo-1590650046871-92c887180603?w=700&q=80' },
  { icon: 'fa-solid fa-building-columns', title: 'B2B businesses qualifying inbound leads', desc: 'A chatbot that asks the right qualification questions — company size, budget, timeline, need — before routing to a sales rep produces significantly higher-quality conversations.', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80' },
  { icon: 'fa-solid fa-bullhorn', title: 'Local service businesses running paid ad campaigns', desc: 'A paid ad that drives traffic to a landing page with a chatbot converts at a higher rate than one that drives to a contact form, because it provides immediate, interactive engagement.', img: 'https://images.unsplash.com/photo-1745509267699-1b1db256601e?w=700&q=80' },
  { icon: 'fa-solid fa-building', title: 'High-volume businesses that cannot scale headcount', desc: 'A chatbot handles 500 or 5,000 simultaneous conversations with no difference in quality or speed. Scaling human support by the same ratio would require proportionally more headcount and cost.', img: 'https://images.unsplash.com/photo-1617565817140-53081ee8f047?w=700&q=80' },
];

const WHY_ISM = [
  { icon: 'fa-solid fa-crosshairs', title: 'We design scope before we build anything', desc: 'The most common reason chatbot implementations fail is scope creep. We define the chatbot’s scope precisely before building anything, so what it does, it does excellently.' },
  { icon: 'fa-solid fa-book', title: 'We train on your business, not a generic knowledge base', desc: 'A chatbot that knows your services, pricing, process, and most common customer questions produces conversations that feel helpful rather than frustrating.' },
  { icon: 'fa-solid fa-plug', title: 'We integrate with your full automation stack', desc: 'CRM updates, pipeline stage changes, booking confirmations, nurture sequence enrolment — the chatbot does not exist in isolation from your business.' },
  { icon: 'fa-solid fa-right-from-bracket', title: 'We configure human handoff properly', desc: 'A chatbot that traps visitors in a conversation they cannot escape is worse than no chatbot. We configure clear, graceful handoff pathways with full context passed to the human.' },
  { icon: 'fa-solid fa-chart-line', title: 'We monitor and improve after launch', desc: 'We review performance data monthly and make conversation flow improvements, response updates, and qualification logic adjustments based on what the data shows.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no lock-in', desc: 'Ongoing monitoring and optimisation is month to month. You stay because the chatbot is performing, not because you signed a contract.' },
];

const PROCESS = [
  { n: '01', title: 'Strategy and Scope Definition', desc: 'We define the chatbot’s scope — what it handles, what it escalates, the qualification questions it asks — and map conversation flows before any build begins.' },
  { n: '02', title: 'Knowledge Base and Training Data Build', desc: 'We build the knowledge base — services, pricing ranges, process, geography, FAQs, and qualification criteria — that the chatbot draws on to answer questions.' },
  { n: '03', title: 'Conversation Flow Build and Configuration', desc: 'Opening messages, question sequences, branching logic, qualification routing, booking integration, and human handoff configuration — every path is mapped and built.' },
  { n: '04', title: 'CRM and Integration Setup', desc: 'We connect the chatbot to your CRM, booking system, and nurture sequences, configuring the triggers that fire when each conversation outcome is reached.' },
  { n: '05', title: 'Testing, Launch, and Monitoring', desc: 'We test every flow end to end, launch the chatbot, and monitor completion, capture, and booking rates in the first weeks — making immediate adjustments where needed.' },
];

const FAQS = [
  { q: 'What is the difference between an AI chatbot and a scripted chatbot?', a: 'A scripted chatbot follows a fixed decision tree — it can only respond to options it was explicitly programmed to handle. An AI chatbot uses a language model to understand natural language, maintain conversation context, and produce responses to questions it has not been explicitly scripted for.' },
  { q: 'Will the chatbot frustrate visitors if it cannot answer a question?', a: 'Only if the handoff is not configured properly. We build chatbots with clear, graceful escalation pathways — when a question is outside scope, the chatbot acknowledges it clearly, collects contact details, and arranges a human follow-up with full conversation context.' },
  { q: 'What platform do you build chatbots on?', a: 'We build on GoHighLevel’s AI chatbot for clients already on GHL — fully integrated with their CRM, pipelines, and booking system. We also build custom AI chatbots for website deployment and channel-specific deployments for WhatsApp, Facebook Messenger, and Instagram DM.' },
  { q: 'Can the chatbot book appointments directly?', a: 'Yes. We connect the chatbot to your calendar system — GoHighLevel calendar, Calendly, or another booking tool — so a qualified lead can book a call directly within the conversation.' },
  { q: 'How do you train the chatbot to know about our business?', a: 'We build a knowledge base from the information you provide — your services, pricing ranges, process, geography, team, and most common customer questions. The knowledge base is updated whenever your services or pricing change.' },
  { q: 'Can the chatbot qualify leads before they reach our sales team?', a: 'Yes. We configure the qualification questions that determine whether a lead matches your ideal customer profile and route qualified leads to booking and unqualified leads to a different outcome, all within the conversation.' },
  { q: 'What happens to leads who interact with the chatbot but do not book?', a: 'We configure the chatbot to capture contact details from every visitor who engages, regardless of whether they book. Those contacts are added to your CRM and enrolled in the appropriate nurture sequence.' },
  { q: 'How do we measure whether the chatbot is working?', a: 'We track conversation completion rates, lead capture rates, booking rates, and escalation rates, and review conversations to identify where visitors are dropping out. Monthly reporting covers all of this in plain English.' },
  { q: 'Do customers actually use chatbots or do they prefer to speak to a human?', a: '62% of customers prefer chatbots over waiting for a human agent for straightforward questions. The preference for a human rises for complex or sensitive situations — which is exactly why we build clear human handoff into every chatbot we deploy.' },
  { q: 'Can you build a chatbot that works on WhatsApp or Instagram DM?', a: 'Yes. We build chatbots for website deployment and channel-specific deployments for WhatsApp, Facebook Messenger, and Instagram DM — engaging customers where they already are rather than asking them to navigate to a contact form.' },
];

/* ── FAQ 2-COL — matches the Local SEO page layout ── */
function ChatbotFAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="chatbot-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <div className="chatbot-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>AI Chatbots</span>
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
          .chatbot-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .chatbot-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function AIChatbotPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="chatbot-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="chatbot-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* Left — copy */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Qualify Leads, Answer Questions, and Book Appointments Around the{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Clock.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  We build and deploy AI chatbots that engage your website visitors, qualify inbound leads, handle routine enquiries, and book appointments automatically —{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>24 hours a day, 7 days a week</span> — so your team only steps in for the conversations that need a human.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Get a Free Chatbot Strategy Call
                  </a>
                </div>
              </div>

              {/* Right — photo + floating badges */}
              <div className="chatbot-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/banner/ai-chatbot.webp" alt="AI chatbot lead qualification" style={{ width: '100%', height: 440, objectFit: 'contain', borderRadius: 24, display: 'block' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-comment-dots" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-clock" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>24/7 Availability</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      (<img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />)
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>300+ Chatbots Deployed</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>Lead Qualified</span>
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
              .chatbot-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .chatbot-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .chatbot-hero { padding: 48px 0 64px !important; }
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
                  Every Lead That Arrives When Nobody Is Available Is a Lead That Goes Somewhere Else.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  A lead comes in at 9 PM on a Tuesday. Your office is closed. The enquiry sits in an inbox. By 9 AM Wednesday when someone picks it up, the prospect has already spoken to a competitor who responded within minutes. This happens more often than most businesses realise — and it is a silent, consistent revenue leak.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  Isuremedia builds AI chatbots that are{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>properly trained, properly integrated, and properly handoff-configured</span> — so they handle what they should handle and transfer what they should transfer, without frustrating the visitor in the process.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Claim Your Free Chatbot Strategy Call
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

        {/* ══ 04. WHAT IS AI CHATBOT AUTOMATION ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="chatbot-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="chatbot-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  Always-On Lead Qualification and Customer Engagement — Without Adding Headcount.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    An AI chatbot is a software system that engages website visitors or messaging app users in a conversation — answering questions, collecting information, qualifying leads, and{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>routing the right enquiries to the right people automatically</span>, without human intervention for routine interactions.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Modern AI chatbots use large language models to understand natural language, maintain context through a conversation, and produce responses that feel genuinely conversational. They can be{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>trained on your specific business</span> — your services, pricing, FAQs, and qualification criteria.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Conversation automation goes beyond the chatbot itself. It includes the integration of chatbot interactions with your CRM, booking system, nurture sequences, and sales pipeline — so every conversation produces the right action in your business systems automatically.
                  </p>
                </div>
              </div>
              <div className="chatbot-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                {/* Decorative background rings */}
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                {/* Central gauge */}
                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 338deg, var(--ism-blue-100) 338deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>94</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>Qualification Score</span>
                  </div>
                </div>

                {/* Floating badge — Response Time */}
                <div className="chatbot-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-bolt" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Response Time</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>Instant</div>
                  </div>
                </div>

                {/* Floating badge — Booking Rate */}
                <div className="chatbot-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-calendar-check" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Booking Rate</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>+42%</div>
                  </div>
                </div>

                {/* Floating badge — CRM Sync */}
                <div className="chatbot-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-database" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>CRM Sync</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>Instant</div>
                  </div>
                </div>

                {/* Floating badge — Lead Quality */}
                <div className="chatbot-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-star" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Lead Quality</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>High</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .chatbot-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .chatbot-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .chatbot-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .chatbot-score-badge{ padding:8px 10px !important; gap:7px !important; } .chatbot-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. WHY IT MATTERS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>24/7 Lead Engagement. Faster Response. Lower Cost Per Qualified Lead.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                57% of companies say chatbots deliver significant ROI within the first year. Businesses see an average return of $3.50 for every $1 spent on AI customer service, and a 67% increase in sales through chatbot assistance. The returns come from three places at once.
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
                Build a Chatbot That Qualifies Your Leads Around the Clock
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .why-matters-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .why-matters-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. KEY FACTORS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>The Honest Answer About What a Chatbot Can and Cannot Do.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                74% of AI chatbot implementations have been pulled offline or rolled back — almost always because the chatbot was built to do too much. A properly built chatbot is precise about its scope. These are the factors Isuremedia builds into every engagement.
              </p>
            </div>
            <div className="chatbot-factor-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {KEY_FACTORS.map((f, i) => {
                const hl = i === 0;
                return (
                  <div key={f.title} className={hl ? 'chatbot-factor-card chatbot-factor-card-hl' : 'chatbot-factor-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="chatbot-factor-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`chatbot-factor-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="chatbot-factor-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                        <span className="chatbot-factor-card-badge" style={{ fontFamily: J, fontSize: 10.5, fontWeight: 700, color: hl ? 'var(--ism-amber)' : 'var(--color-accent-hover)', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'color .25s ease' }}>{f.impact}</span>
                      </div>
                    </div>
                    <p className="chatbot-factor-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .chatbot-factor-card:not(.chatbot-factor-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .chatbot-factor-card:not(.chatbot-factor-card-hl):hover .chatbot-factor-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .chatbot-factor-card:not(.chatbot-factor-card-hl):hover .chatbot-factor-card-icon{ color: #fff !important; }
            .chatbot-factor-card:not(.chatbot-factor-card-hl):hover .chatbot-factor-card-title{ color: #fff !important; }
            .chatbot-factor-card:not(.chatbot-factor-card-hl):hover .chatbot-factor-card-badge{ color: var(--ism-amber) !important; }
            .chatbot-factor-card:not(.chatbot-factor-card-hl):hover .chatbot-factor-card-desc{ color: rgba(255,255,255,.85) !important; }
            .chatbot-factor-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .chatbot-factor-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 07. WHERE WE DEPLOY YOUR CHATBOT ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>One Chatbot Brain. Every Channel Your Customers Use.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                Your customers do not all message the same way. We deploy the same trained chatbot logic across whichever channels your business relies on, so every conversation is handled consistently.
              </p>
            </div>
            <p style={{ textAlign: 'center', fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 32 }}>Where We Deploy Your Chatbot</p>
            <div className="channel-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {CHANNELS.map(g => (
                <div key={g.title} className="channel-card" style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <div style={{ position: 'relative', height: 170, overflow: 'hidden' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={g.img} alt="" className="channel-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: '22px 24px 26px' }}>
                    <div className="channel-card-icon" style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, transition: 'background .2s ease' }}>
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
            .channel-card{ transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
            .channel-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.12); border-color: transparent; }
            .channel-card-img{ transition: transform .4s ease; }
            .channel-card:hover .channel-card-img{ transform: scale(1.08); }
            .channel-card:hover .channel-card-icon{ background: var(--ism-amber); }
            .channel-card:hover .channel-card-icon i{ color: var(--color-navy) !important; }
            @media (max-width:900px){ .channel-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .channel-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 09. OUR AI CHATBOT SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our AI Chatbot and Conversation Automation Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Strategy, Build, Training, Integration, and Ongoing Optimisation.</p>
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Who AI Chatbot Services Are Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If Leads Are Arriving When Nobody Is Available, This Is What Changes That.</p>
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
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Your business is losing leads every night and weekend to competitors who respond faster.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  A free strategy call will show you exactly what an AI chatbot could handle for your business.
                </p>
              </div>
              <a href="/contact" className="mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Book My Free Chatbot Strategy Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Businesses Choose Isuremedia for AI Chatbot Build and Automation</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Properly Scoped. Properly Trained. Properly Integrated.</p>
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
                  <img src="https://picsum.photos/seed/chatbotwhatmakesdifferent/700/620" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
        <section className="chatbot-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                Strategy to Live Chatbot in <span style={{ color: 'var(--ism-amber)' }}>Five Steps</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                A standard lead qualification and booking chatbot takes one to two weeks from strategy to deployment.
              </p>
            </div>
            <div className="chatbot-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, position: 'relative' }}>
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
                Build My AI Chatbot
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .chatbot-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
              .chatbot-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 14. FAQ ══════════════════════════════════════════════ */}
        <ChatbotFAQAccordion />

        {/* ══ 15. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/ai chatbaoat.webp" description={<>Leads don't wait for business hours, and neither should your response. An AI chatbot qualifies visitors, answers their questions, and books appointments the moment they show up on your site. Talk to us today and we will help you <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>capture leads around the clock</span>.</>} heading="Ready for Leads Handled" headingHighlight="Around the Clock?" primaryLabel="Build My AI Chatbot" secondaryLabel="Talk to a Chatbot Specialist" />
      </main>
      <Footer />
    </>
  );
}
