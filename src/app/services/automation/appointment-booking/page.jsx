'use client';

import Navbar from '@/components/Navbar';
import ReviewsStrip from '@/components/ReviewsStrip';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const APB_BRIDGE_ITEMS = [
  'Booking page setup and branding',
  'Calendar sync across staff and locations',
  'Automated confirmation and reminder messages',
  'Rescheduling and cancellation automation',
  'Deposit and payment collection at booking',
  'No-show follow-up sequences',
  'Reporting on booking volume and no-show rate',
];

const APB_WHY_MATTERS = [
  { icon: 'fa-solid fa-calendar-check', title: 'Fewer no-shows', desc: 'Automated confirmations and reminder sequences cut no-show rates dramatically, so your calendar reflects the appointments that actually happen.' },
  { icon: 'fa-solid fa-bell', title: 'Reminders that actually land', desc: 'SMS and email reminders fire on a schedule you set, so clients show up prepared instead of forgetting entirely.' },
  { icon: 'fa-solid fa-clock', title: 'Saves hours of admin time', desc: 'No more phone tag or back-and-forth texts to find a time that works. Clients book themselves against real-time availability.' },
  { icon: 'fa-solid fa-credit-card', title: 'Deposits collected upfront', desc: 'Payment or deposit collection at the time of booking protects your calendar from no-shows and last-minute cancellations.' },
  { icon: 'fa-solid fa-users', title: 'Syncs every staff calendar', desc: 'Multiple staff members and locations stay in sync automatically, so double-bookings and scheduling conflicts stop happening.' },
  { icon: 'fa-solid fa-chart-line', title: 'Books around the clock', desc: 'Your booking page works nights, weekends, and holidays, capturing appointments even when the phones are off.' },
];

const APB_CARD_VARIANTS = [
  { cardBg: 'var(--ism-blue-50)', iconBg: 'var(--color-primary)', iconColor: '#fff', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--ism-amber-50)', iconBg: 'var(--ism-amber)', iconColor: 'var(--color-navy)', textColor: 'var(--color-navy)', descColor: 'var(--color-text-muted)' },
  { cardBg: 'var(--color-navy)', iconBg: 'rgba(255,255,255,.15)', iconColor: '#fff', textColor: '#fff', descColor: 'rgba(255,255,255,.75)', dark: true },
];

const APB_KEY_FACTORS = [
  { icon: 'fa-solid fa-magnifying-glass', title: 'Booking Page Setup', impact: 'Highest impact', desc: 'We build a branded booking page that reflects your services, staff, and availability, so clients can book in seconds.' },
  { icon: 'fa-solid fa-calendar-days', title: 'Calendar and Staff Sync', impact: 'High impact', desc: 'Every staff member and location calendar syncs in real time, eliminating double-bookings and scheduling conflicts.' },
  { icon: 'fa-solid fa-bell', title: 'Reminder Sequence Design', impact: 'High impact', desc: 'Confirmation, reminder, and follow-up messages timed to reduce no-shows without feeling like spam.' },
  { icon: 'fa-solid fa-arrows-rotate', title: 'Rescheduling Automation', impact: 'High impact', desc: 'Clients can reschedule or cancel themselves through a self-serve flow, cutting down on manual back-and-forth.' },
  { icon: 'fa-solid fa-credit-card', title: 'Deposit and Payment Integration', impact: 'High impact', desc: 'Deposits or full payment collected at the time of booking, protecting your calendar from no-shows.' },
  { icon: 'fa-solid fa-plug', title: 'CRM Integration', impact: 'Medium impact', desc: 'Bookings sync directly into your CRM so every appointment is tied to the right contact record automatically.' },
  { icon: 'fa-solid fa-vial', title: 'Testing and Validation', impact: 'Medium impact', desc: 'End-to-end QA across every staff calendar, reminder, and payment flow before it goes live.' },
  { icon: 'fa-solid fa-chart-line', title: 'Reporting', impact: 'Contextual', desc: 'Clear reporting on booking volume, no-show rate, and reminder performance so you can see what is working.' },
];

const APB_INCLUDED_CARDS = [
  { icon: 'fa-solid fa-calendar-check', title: 'Branded Booking Page', desc: 'A booking page that matches your brand and shows real-time availability for every service and staff member.', img: 'https://picsum.photos/seed/apb-included-1/500/400' },
  { icon: 'fa-solid fa-calendar-days', title: 'Calendar Sync Setup', desc: 'Every staff calendar and location connected and synced, so availability is always accurate.', img: 'https://picsum.photos/seed/apb-included-2/500/400' },
  { icon: 'fa-solid fa-bell', title: 'Reminder Automation', desc: 'Confirmation and reminder sequences by SMS and email, timed to cut no-shows without feeling intrusive.', img: 'https://picsum.photos/seed/apb-included-3/500/400' },
  { icon: 'fa-solid fa-credit-card', title: 'Deposit Collection', desc: 'Payment or deposit collection built into the booking flow to protect your calendar from no-shows.', img: 'https://picsum.photos/seed/apb-included-4/500/400' },
  { icon: 'fa-solid fa-arrow-rotate-left', title: 'No-Show Follow-Up', desc: 'Automated follow-up sequences for missed appointments to recover the booking or rebook the client.', img: 'https://picsum.photos/seed/apb-included-5/500/400' },
  { icon: 'fa-solid fa-file-lines', title: 'Documentation and Training', desc: 'Clear documentation and a live walkthrough so your team can manage the booking system confidently.', img: 'https://picsum.photos/seed/apb-included-6/500/400' },
];

const APB_SERVICES = [
  { icon: 'fa-solid fa-calendar-check', title: 'Online Booking Page Setup', desc: 'A branded booking page showing real-time availability across every service and staff member.' },
  { icon: 'fa-solid fa-calendar-days', title: 'Multi-Staff Calendar Sync', desc: 'Every staff and location calendar synced in real time to eliminate double-bookings.' },
  { icon: 'fa-solid fa-bell', title: 'Automated Reminders (SMS + Email)', desc: 'Confirmation and reminder sequences timed to cut no-shows without feeling like spam.' },
  { icon: 'fa-solid fa-arrows-rotate', title: 'Rescheduling and Cancellation Flows', desc: 'Self-serve rescheduling and cancellation so clients manage their own bookings.' },
  { icon: 'fa-solid fa-credit-card', title: 'Deposit and Payment Collection', desc: 'Payment or deposit collected at booking to protect your calendar and revenue.' },
  { icon: 'fa-solid fa-arrow-rotate-left', title: 'No-Show Recovery Sequences', desc: 'Automated follow-up when appointments are missed, to recover or rebook the client.' },
  { icon: 'fa-solid fa-plug', title: 'CRM Integration', desc: 'Bookings sync directly into your CRM so every appointment ties to the right contact.' },
  { icon: 'fa-solid fa-chart-line', title: 'Reporting Dashboards', desc: 'Clear reporting on booking volume, no-show rate, and reminder performance.' },
];

const APB_WHO_FOR = [
  { icon: 'fa-solid fa-stethoscope', title: 'Clinics and med spas', desc: 'Automated booking, reminders, and deposit collection keep treatment rooms full and reduce costly last-minute cancellations.', img: '/services-six-card/Marketing Automation Section/Appointment Booking Systems/Clinics and med spas.png' },
  { icon: 'fa-solid fa-scissors', title: 'Salons and personal services', desc: 'Clients book their own appointments around real-time stylist availability, and reminders keep chairs filled.', img: '/services-six-card/Marketing Automation Section/Appointment Booking Systems/Salons and personal services.png' },
  { icon: 'fa-solid fa-house', title: 'Home service contractors', desc: 'Estimate bookings sync straight to the right technician calendar, cutting the back-and-forth of scheduling site visits.', img: '/services-six-card/Marketing Automation Section/Appointment Booking Systems/Home service contractors.png' },
  { icon: 'fa-solid fa-headset', title: 'Consultants and coaches', desc: 'Discovery calls book automatically against your live availability, with reminders that keep show-up rates high.', img: '/services-six-card/Marketing Automation Section/Appointment Booking Systems/Consultants and coaches.png' },
  { icon: 'fa-solid fa-briefcase', title: 'Agencies booking discovery calls', desc: 'Sales calls fill your calendar automatically, with reminders and reschedule flows that protect your team’s time.', img: '/services-six-card/Marketing Automation Section/Appointment Booking Systems/Agencies booking discovery calls.png' },
  { icon: 'fa-solid fa-building', title: 'Multi-location businesses', desc: 'Every location and staff calendar stays in sync, so clients always book against accurate, real-time availability.', img: '/services-six-card/Marketing Automation Section/Appointment Booking Systems/Multi-location businesses.png' },
];

const APB_WHY_ISM = [
  { icon: 'fa-solid fa-plug', title: 'We integrate with what you already use', desc: 'Your existing calendar and CRM stay in place, we connect the booking system to them instead of forcing a rip-and-replace.' },
  { icon: 'fa-solid fa-bell', title: 'We reduce no-shows with tested sequences', desc: 'Reminder timing and messaging are built from what has actually reduced no-show rates across other client accounts, not guesswork.' },
  { icon: 'fa-solid fa-calendar-days', title: 'We sync multiple staff and locations correctly', desc: 'Complex multi-staff, multi-location calendars are set up and tested so double-bookings and conflicts do not happen after launch.' },
  { icon: 'fa-solid fa-credit-card', title: 'We set up deposit collection to protect your time', desc: 'Payment or deposit collection is configured at booking, so no-shows carry a real cost instead of costing you a free slot.' },
  { icon: 'fa-solid fa-file-lines', title: 'We document everything', desc: 'Every booking flow, reminder sequence, and calendar connection is documented so your team can manage it without us.' },
  { icon: 'fa-solid fa-calendar-check', title: 'Month to month, no lock-in', desc: 'We do not tie you into long contracts. You stay because your calendar is fuller and no-shows are down, not because you signed something months ago.' },
];

const APB_PROCESS = [
  { n: '01', title: 'Audit Current Booking Flow', desc: 'We map how appointments are currently booked, confirmed, and rescheduled, and find where time and revenue are leaking.' },
  { n: '02', title: 'Design Booking Page and Reminders', desc: 'We design the branded booking page and the reminder sequence timing before anything gets built.' },
  { n: '03', title: 'Build and Integrate', desc: 'The booking page, calendar sync, reminders, and payment collection are built and connected to your live tools.' },
  { n: '04', title: 'Test', desc: 'End-to-end QA across every staff calendar, reminder, and payment flow using real bookings before launch.' },
  { n: '05', title: 'Launch and Monitor', desc: 'We launch the system and monitor booking volume and no-show rate to fine-tune reminder timing after go-live.' },
];

const APB_FAQS = [
  { q: 'Which booking tools do you support?', a: 'We build and integrate booking systems using Calendly, GoHighLevel, Acuity, and similar platforms, choosing whichever fits your existing tech stack and calendar setup best.' },
  { q: 'How do reminders actually reduce no-shows?', a: 'A sequenced set of confirmation and reminder messages, sent by SMS and email at set intervals before the appointment, keeps the booking top of mind and gives clients an easy way to reschedule instead of simply not showing up.' },
  { q: 'Can the booking system collect deposits or payments?', a: 'Yes. We can configure deposit or full payment collection at the time of booking, which protects your calendar and gives clients a reason to follow through on the appointment.' },
  { q: 'Do you support multiple staff members and locations?', a: 'Yes. We set up and sync calendars across every staff member and location so clients always see accurate, real-time availability no matter where they book from.' },
  { q: 'Will this integrate with our existing CRM?', a: 'In most cases, yes. Bookings can sync directly into your CRM so every appointment is tied to the correct contact record without any manual data entry.' },
  { q: 'How does the rescheduling and cancellation flow work?', a: 'Clients get a self-serve link in their confirmation and reminder messages that lets them reschedule or cancel without calling or texting your team, and your calendar updates automatically.' },
  { q: 'Should reminders be sent by SMS or email?', a: 'We typically recommend both. SMS tends to get read faster and drives higher response rates, while email carries more detail. Most engagements use a combination timed around the appointment.' },
  { q: 'How long does it take to launch a booking system?', a: 'A typical engagement covering audit, booking page design, calendar sync, reminders, and testing moves from audit to launch in two to three weeks.' },
];

/* ── FAQ 2-COL, matches the Local SEO page layout ── */
function APBFAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '100px 0', background: 'var(--color-bg-soft)' }}>
      <div className="ism-container">
        <div className="apb-faq-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <div className="apb-faq-sticky" style={{ position: 'sticky', top: 100 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,40px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 14, marginTop: 0, lineHeight: 1.15 }}>
              Questions About <span style={{ color: 'var(--ism-amber)' }}>Appointment Booking</span>
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
            {APB_FAQS.map((faq, i) => (
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
          .apb-faq-grid { grid-template-columns: minmax(0,1fr) !important; gap: 32px !important; }
          .apb-faq-sticky { position: static !important; }
        }
      `}</style>
    </section>
  );
}

export default function AppointmentBookingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ══ 01. HERO ══════════════════════════════════════════════ */}
        <section className="apb-hero" style={{ background: 'linear-gradient(160deg,var(--ism-blue-50) 0%,#fff 60%)', padding: '88px 0 96px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div className="ism-container">
            <div className="apb-hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* Left, copy */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(30px,3.8vw,54px)', color: 'var(--color-navy)', lineHeight: 1.14, letterSpacing: '-0.5px', marginBottom: 22 }}>
                  Booking Systems That Fill Your Calendar Without the{' '}
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    Back-and-Forth.
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.2vw,17px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 520, marginBottom: 36 }}>
                  Automated online booking, calendar sync, and reminder sequences that{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>fill your calendar and cut no-shows</span>, without another round of scheduling texts and calls.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                  <a href="/contact"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Automate My Booking Calendar
                  </a>
                </div>
              </div>

              {/* Right, photo + floating badges */}
              <div className="apb-hero-photo" style={{ position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/banner/appointment-booking.webp" alt="Appointment booking automation" style={{ width: '100%', height: 440, objectFit: 'contain', borderRadius: 24, display: 'block' }} />

                <div style={{ position: 'absolute', top: -18, left: -18, width: 56, height: 56, borderRadius: 16, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 26px rgba(30,77,195,.40)' }}>
                  <i className="fa-solid fa-calendar-check" style={{ color: '#fff', fontSize: 22 }} />
                </div>

                <div style={{ position: 'absolute', top: 26, right: -20, background: '#fff', borderRadius: 14, padding: '12px 18px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <i className="fa-solid fa-bell" style={{ color: 'var(--ism-amber)', fontSize: 14 }} />
                  <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)' }}>Automated Reminders</span>
                </div>

                <div style={{ position: 'absolute', bottom: 28, left: -24, background: '#fff', borderRadius: 14, padding: '12px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                    {[1, 2, 3, 4].map(n => (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      (<img key={n} src={`/placeholders/avatar-${n}.svg`} alt="" aria-hidden style={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #fff', marginLeft: n === 1 ? 0 : -8, display: 'block' }} />)
                    ))}
                  </div>
                  <span style={{ fontFamily: I, fontSize: 11, fontWeight: 600, color: 'var(--color-text-muted)' }}>1,200+ Bookings/Month</span>
                </div>

                <div style={{ position: 'absolute', bottom: -16, right: 12, background: '#fff', borderRadius: 14, padding: '10px 16px', boxShadow: '0 14px 32px rgba(0,35,83,.16)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#0E9B6E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 10 }} />
                  </span>
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: '#0E9B6E' }}>Calendar Synced</span>
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
              .apb-hero-grid { grid-template-columns: minmax(0,1fr) !important; gap: 60px !important; }
              .apb-hero-photo { margin: 0 12px 24px; }
            }
            @media (max-width: 480px) {
              .apb-hero { padding: 48px 0 64px !important; }
            }
          `}</style>
        </section>

        {/* ══ 02. PROOF STRIP ══════════════════════════════════════════════ */}
        <ReviewsStrip />

        {/* ══ 03. BRIDGE SECTION ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="apb-bridge-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)', gap: 64, alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(24px,2.8vw,40px)', color: 'var(--color-navy)', lineHeight: 1.2, letterSpacing: '-0.4px', marginBottom: 24 }}>
                  Every Missed Call Is a Booking You Didn't Get.
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 16 }}>
                  Most service businesses still book appointments through a string of texts, calls, and back-and-forth emails, and every round trip is a chance for the client to lose interest, book a competitor, or simply forget. Add in no-shows from clients who never got a proper reminder, and the calendar leaks revenue every single week.
                </p>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 32 }}>
                  We build booking systems that let clients see real availability and{' '}
                  <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>book themselves in seconds</span>, then keep them accountable with automated reminders, so your calendar fills up and stays full, without anyone on your team chasing a booking by hand.
                </p>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Audit My Booking Flow
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
                  {APB_BRIDGE_ITEMS.map((item, i) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '13px 0', borderBottom: i === APB_BRIDGE_ITEMS.length - 1 ? 'none' : '1px solid var(--color-border)' }}>
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
          <style>{`@media(max-width:860px){ .apb-bridge-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } }`}</style>
        </section>

        {/* ══ 04. WHAT IS APPOINTMENT BOOKING AUTOMATION ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="apb-whatis-box" style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 24, padding: '56px 56px', boxShadow: '0 24px 64px rgba(0,35,83,.08)' }}>
            <div className="apb-whatis-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.85fr)', gap: 64, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', lineHeight: 1.22, letterSpacing: '-0.4px', marginBottom: 20 }}>
                  The Fastest Way to Stop Chasing Bookings by Phone.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    An appointment booking system gives clients a branded page where they{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>see real-time availability across every staff member and location and book themselves in seconds</span>.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    Automated confirmation and reminder sequences fire the moment a booking is made,{' '}
                    <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700, color: 'var(--color-navy)' }}>no manual texts, no forgotten reminder calls, no missed appointments</span>. Clients get exactly what they need to show up, and can reschedule themselves if they cannot.
                  </p>
                  <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0 }}>
                    We design and build the booking flow that eliminates the manual steps between a client wanting an appointment and it landing on your calendar, sync, reminders, deposits, and follow-up, so your team spends time serving clients, not scheduling them.
                  </p>
                </div>
              </div>
              <div className="apb-score-wrap" style={{ position: 'relative', height: 340, borderRadius: 20, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                {/* Decorative background rings */}
                <div aria-hidden style={{ position: 'absolute', width: 260, height: 260, borderRadius: '50%', border: '1px dashed var(--ism-blue-100)' }} />

                {/* Central gauge */}
                <div style={{ position: 'relative', width: 168, height: 168, borderRadius: '50%', background: 'conic-gradient(var(--ism-amber) 0deg 328deg, var(--ism-blue-100) 328deg 360deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 38px rgba(0,35,83,.14)' }}>
                  <div style={{ width: 134, height: 134, borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>-38%</span>
                    <span style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.05em', textTransform: 'uppercase', marginTop: 4 }}>No-Shows</span>
                  </div>
                </div>

                {/* Floating badge, Reminder Delivery */}
                <div className="apb-score-badge" style={{ position: 'absolute', top: 18, left: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-bell" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Reminder Delivery</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>98%+</div>
                  </div>
                </div>

                {/* Floating badge, Staff Calendars Synced */}
                <div className="apb-score-badge" style={{ position: 'absolute', top: 30, right: -6, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(255,176,0,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-calendar-days" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Staff Calendars</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Fully Synced</div>
                  </div>
                </div>

                {/* Floating badge, Deposit Collection */}
                <div className="apb-score-badge" style={{ position: 'absolute', bottom: 8, left: -10, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(30,158,90,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-credit-card" style={{ color: '#1E9E5A', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>Deposit Collection</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#1E9E5A' }}>Built In</div>
                  </div>
                </div>

                {/* Floating badge, No-Show Rate */}
                <div className="apb-score-badge" style={{ position: 'absolute', bottom: 24, right: 4, display: 'flex', alignItems: 'center', gap: 10, background: '#fff', borderRadius: 12, padding: '10px 14px', boxShadow: '0 10px 26px rgba(0,35,83,.16)' }}>
                  <div style={{ width: 30, height: 30, borderRadius: 9, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-arrow-trend-down" style={{ color: 'var(--color-primary)', fontSize: 12 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2 }}>No-Show Rate</div>
                    <div style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)' }}>Trending Down</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <style>{`
            @media(max-width:860px){ .apb-whatis-grid{ grid-template-columns:minmax(0,1fr) !important; gap:40px !important; } .apb-whatis-grid > div:last-child{ order:-1; } }
            @media(max-width:640px){ .apb-whatis-box{ padding:32px 24px !important; } }
            @media(max-width:500px){ .apb-score-badge{ padding:8px 10px !important; gap:7px !important; } .apb-score-badge > div:first-child{ width:24px !important; height:24px !important; } }
          `}</style>
        </section>

        {/* ══ 05. WHY IT MATTERS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>Why Booking Automation Pays for Itself.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                A properly built booking system eliminates hours of scheduling admin every week and puts a real dent in your no-show rate.
              </p>
            </div>
            <div className="apb-why-matters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 48 }}>
              {APB_WHY_MATTERS.map((w, i) => {
                const variant = APB_CARD_VARIANTS[i % 3];
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
                See What Booking Automation Could Save You
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:900px){ .apb-why-matters-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .apb-why-matters-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 06. KEY FACTORS ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 18 }}>What Goes Into Every Booking System Build.</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>
                A booking system that actually reduces no-shows is not an accident. It is deliberate design across page setup, calendar sync, reminder timing, and testing. These are the factors Isuremedia builds into every appointment booking engagement.
              </p>
            </div>
            <div className="apb-factor-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {APB_KEY_FACTORS.map((f, i) => {
                const hl = i === 0;
                return (
                  <div key={f.title} className={hl ? 'apb-factor-card apb-factor-card-hl' : 'apb-factor-card'} style={{ background: hl ? 'linear-gradient(135deg,#1840A0,#2F5FE8)' : '#fff', borderRadius: 16, padding: '28px 26px', border: hl ? 'none' : '1px solid var(--color-border)', boxShadow: hl ? '0 16px 36px rgba(24,64,160,.28)' : 'none', transition: 'transform .2s ease, box-shadow .2s ease, background .25s ease, border-color .25s ease' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                      <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
                        <div className="apb-factor-card-diamond" style={{ position: 'absolute', inset: 0, borderRadius: 12, border: `2px solid ${hl ? 'rgba(255,255,255,.5)' : 'var(--ism-blue-100)'}`, transform: 'rotate(45deg)', transition: 'border-color .25s ease' }} />
                        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`apb-factor-card-icon ${f.icon}`} style={{ color: hl ? '#fff' : 'var(--color-primary)', fontSize: 17, transition: 'color .25s ease' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="apb-factor-card-title" style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: hl ? '#fff' : 'var(--color-navy)', margin: 0, lineHeight: 1.3, transition: 'color .25s ease' }}>{f.title}</h3>
                        <span className="apb-factor-card-badge" style={{ fontFamily: J, fontSize: 10.5, fontWeight: 700, color: hl ? 'var(--ism-amber)' : 'var(--color-accent-hover)', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'color .25s ease' }}>{f.impact}</span>
                      </div>
                    </div>
                    <p className="apb-factor-card-desc" style={{ fontFamily: I, fontSize: 14, color: hl ? 'rgba(255,255,255,.85)' : 'var(--color-text-muted)', lineHeight: 1.72, margin: 0, transition: 'color .25s ease' }}>{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            .apb-factor-card:not(.apb-factor-card-hl):hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(24,64,160,.28) !important; background: linear-gradient(135deg,#1840A0,#2F5FE8) !important; border-color: transparent !important; }
            .apb-factor-card:not(.apb-factor-card-hl):hover .apb-factor-card-diamond{ border-color: rgba(255,255,255,.5) !important; }
            .apb-factor-card:not(.apb-factor-card-hl):hover .apb-factor-card-icon{ color: #fff !important; }
            .apb-factor-card:not(.apb-factor-card-hl):hover .apb-factor-card-title{ color: #fff !important; }
            .apb-factor-card:not(.apb-factor-card-hl):hover .apb-factor-card-badge{ color: var(--ism-amber) !important; }
            .apb-factor-card:not(.apb-factor-card-hl):hover .apb-factor-card-desc{ color: rgba(255,255,255,.85) !important; }
            .apb-factor-card-hl:hover{ transform: translateY(-4px); box-shadow: 0 20px 44px rgba(24,64,160,.36); }
            @media (max-width:700px){ .apb-factor-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 09. OUR APPOINTMENT BOOKING SERVICES ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Our Appointment Booking Services</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Everything It Takes to Fill Your Calendar and Cut No-Shows.</p>
            </div>
            <div className="apb-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
              {APB_SERVICES.map((s, i) => {
                const variant = APB_CARD_VARIANTS[i % 3];
                return (
                  <div key={s.title} className="apb-services-card" style={{ background: variant.cardBg, borderRadius: 16, padding: '28px 22px', border: variant.dark ? 'none' : '1px solid var(--color-border)' }}>
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
            .apb-services-card{ transition: transform .22s ease, box-shadow .22s ease; }
            .apb-services-card:hover{ transform: translateY(-5px); box-shadow: 0 18px 40px rgba(0,35,83,.14); }
            @media (max-width:1100px){ .apb-services-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .apb-services-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 10. WHO THIS IS FOR ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Who Appointment Booking Automation Is Built For</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>If Your Calendar Fills Up Through Texts and Phone Calls, This Is for You.</p>
            </div>
            <div className="apb-who-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {APB_WHO_FOR.map(w => (
                <div key={w.title} className="apb-who-card" style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 300, boxShadow: '0 4px 20px rgba(0,35,83,.08)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt="" className="apb-who-card-img" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
            .apb-who-card-img{ transition: transform .45s ease; }
            .apb-who-card{ transition: transform .22s ease, box-shadow .22s ease; }
            .apb-who-card:hover{ transform: translateY(-5px); box-shadow: 0 20px 44px rgba(0,35,83,.22); }
            .apb-who-card:hover .apb-who-card-img{ transform: scale(1.08); }
            @media (max-width:900px){ .apb-who-grid{ grid-template-columns:repeat(2,1fr) !important; } }
            @media (max-width:600px){ .apb-who-grid{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 11. MID-PAGE CTA STRIP ══════════════════════════════════════════════ */}
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div className="ism-container">
            <div className="apb-mid-cta" style={{ background: 'var(--color-primary)', borderRadius: 20, padding: '40px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
              <div aria-hidden style={{ position: 'absolute', top: '-30%', right: '-5%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', maxWidth: 560 }}>
                <h3 style={{ fontFamily: J, fontSize: 'clamp(18px,2vw,24px)', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>Your calendar is still filling up through texts and phone tag.</h3>
                <p style={{ fontFamily: I, fontSize: 14.5, color: 'rgba(255,255,255,.80)', lineHeight: 1.65, margin: 0 }}>
                  Find out how many hours a week, and how many missed appointments, automated booking could save you.
                </p>
              </div>
              <a href="/contact" className="apb-mid-cta-btn"
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 9, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 8px 24px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,176,0,.45)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,176,0,.35)'; }}>
                Automate My Booking Calendar <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width:640px) {
              .apb-mid-cta { padding: 32px 24px !important; flex-direction: column !important; text-align: center; }
              .apb-mid-cta-btn { width: 100%; justify-content: center !important; box-sizing: border-box; }
            }
          `}</style>
        </section>

        {/* ══ 12. WHY CHOOSE ISM ══════════════════════════════════════════════ */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
              <h2 style={{ fontFamily: J, fontWeight: 800, fontSize: 'clamp(22px,2.6vw,38px)', color: 'var(--color-navy)', letterSpacing: '-0.4px', marginBottom: 14 }}>Why Businesses Choose Isuremedia for Booking Automation</h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>Integrated, Tested, and Built to Actually Reduce No-Shows.</p>
            </div>
            <div className="apb-why-ism-bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
              {APB_WHY_ISM.slice(0, 2).map(b => (
                <div key={b.title} className="apb-why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 26px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 20 }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: J, fontSize: 15.5, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                </div>
              ))}

              <div className="apb-why-ism-bento-row" style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                {(() => { const b = APB_WHY_ISM[2]; return (
                  <div key={b.title} className="apb-why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 22px', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-amber-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={b.icon} style={{ color: 'var(--color-accent-hover)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                ); })()}

                <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', minHeight: 200 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="\services-mid-image\automation.webp" alt="What makes Isuremedia different" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>

                {(() => { const b = APB_WHY_ISM[3]; return (
                  <div key={b.title} className="apb-why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 22px', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                      <i className={b.icon} style={{ color: 'var(--color-primary)', fontSize: 18 }} />
                    </div>
                    <h3 style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 6, lineHeight: 1.3 }}>{b.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                  </div>
                ); })()}
              </div>

              {APB_WHY_ISM.slice(4, 6).map(b => (
                <div key={b.title} className="apb-why-ism-card" style={{ background: '#fff', borderRadius: 16, padding: '24px 26px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'flex-start', gap: 18 }}>
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
            .apb-why-ism-card{ transition: transform .2s ease, box-shadow .2s ease; }
            .apb-why-ism-card:hover{ transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0,35,83,.10); }
            @media(max-width:900px){ .apb-why-ism-bento{ grid-template-columns:1fr !important; } .apb-why-ism-bento-row{ grid-template-columns:1fr !important; } }
          `}</style>
        </section>

        {/* ══ 13. OUR PROCESS ══════════════════════════════════════════════ */}
        <section className="apb-section" style={{ padding: '100px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 14px' }}>
                Audit to Launched Booking System in <span style={{ color: 'var(--ism-amber)' }}>Five Steps</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                We audit, design, build, test, and monitor every booking flow so your calendar fills up and stays full after launch.
              </p>
            </div>
            <div className="apb-timeline" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, position: 'relative' }}>
              <div style={{ position: 'absolute', top: 28, left: '10%', width: '80%', height: 2, background: 'linear-gradient(90deg,var(--ism-amber),var(--color-primary))', zIndex: 0 }} />
              {APB_PROCESS.map((step, i) => (
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
                Automate My Booking Calendar
              </a>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .apb-timeline { grid-template-columns: 1fr !important; gap: 40px !important; }
              .apb-timeline > *:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:var(--ism-amber); margin:20px auto 0; }
            }
          `}</style>
        </section>

        {/* ══ 14. FAQ ══════════════════════════════════════════════ */}
        <APBFAQAccordion />

        {/* ══ 15. ENDING CTA ══════════════════════════════════════════════ */}
        <CTASection image="/result_footer/Appointment Booking Systems.webp" description={<>Every missed call and back-and-forth email is a booking that almost happened. A properly built scheduling system fills your calendar automatically, day and night, without anyone chasing a reply. Talk to us today and we will help you <span style={{ background: 'var(--ism-amber)', color: 'var(--color-navy)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>stop losing bookings to bad timing</span>.</>} heading="Ready to Fill Your" headingHighlight="Calendar?" primaryLabel="Build My Booking System" secondaryLabel="Talk to a Scheduling Expert" />
      </main>
      <Footer />
    </>
  );
}
