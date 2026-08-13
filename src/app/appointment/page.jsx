'use client';

import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const EXPECT_STEPS = [
  { num: '01', title: 'Pick a Slot.', body: 'Choose the date and time that works for you. No long waits, slots are available within 24 hours.' },
  { num: '02', title: 'We Prepare.', body: 'Before the call we review your business, your goals, and prepare real, actionable ideas, not a generic pitch.' },
  { num: '03', title: 'You Get Clarity.', body: 'Walk away with a clear growth plan, honest recommendations, and next steps you can act on immediately.' },
];

const CONTACT_QUICK = [
  { icon: 'fa-solid fa-phone',    label: 'Call Us',  text: '+91 70110 41363', href: 'tel:+917011041363' },
  { icon: 'fa-solid fa-envelope', label: 'Email',    text: 'info@isuremedia.com', href: 'mailto:info@isuremedia.com' },
  { icon: 'fa-solid fa-clock',    label: 'Hours',    text: 'Mon–Fri 9 AM – 7 PM IST' },
  { icon: 'fa-solid fa-globe',    label: 'Time Zone', text: 'All timings are IST (UTC+5:30)' },
];

export default function AppointmentPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: 'hidden' }}>

        {/* ══ 01. HERO ══ */}
        <section className="appt-hero" style={{ background: 'linear-gradient(135deg,#EEF2FF 0%,#E8EFFF 55%,#EEF2FF 100%)', padding: '72px 0 80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -80, right: -60, width: 460, height: 460, background: 'rgba(30,77,195,0.18)', borderRadius: '58% 42% 50% 50% / 46% 58% 42% 54%', filter: 'blur(50px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -50, width: 360, height: 360, background: 'rgba(30,77,195,0.10)', borderRadius: '46% 54% 62% 38% / 54% 46% 54% 46%', filter: 'blur(44px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '30%', left: '40%', width: 280, height: 280, background: 'rgba(255,176,0,0.10)', borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none' }} />

          <div className="appt-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
            <div className="appt-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', minHeight: 380 }}>

              {/* LEFT */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(32px,4.5vw,60px)', color: 'var(--color-navy)', lineHeight: 1.06, letterSpacing: '-0.5px', marginBottom: 20 }}>
                  Book a Free Strategy Call.
                </h1>
                <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 440, marginBottom: 40 }}>
                  Pick a time that works for you. We show up prepared, with real ideas for your business, not a generic pitch.
                </p>

                {/* Trust chips */}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {[
                    { icon: 'fa-solid fa-circle-check', text: 'No commitment' },
                    { icon: 'fa-solid fa-circle-check', text: '100% free' },
                    { icon: 'fa-solid fa-circle-check', text: 'Reply in 2 hrs' },
                  ].map(b => (
                    <div key={b.text} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 20, background: 'rgba(14,155,110,.08)', border: '1px solid rgba(14,155,110,.2)' }}>
                      <i className={b.icon} style={{ fontSize: 11, color: '#0E9B6E' }} />
                      <span style={{ fontFamily: J, fontSize: 12, fontWeight: 600, color: '#0E9B6E' }}>{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT, quick info */}
              <div className="appt-quick-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {CONTACT_QUICK.map(c => (
                  <div key={c.label} style={{ background: '#fff', borderRadius: 14, padding: '20px 18px', boxShadow: '0 2px 16px rgba(30,77,195,.08)', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                      <i className={c.icon} style={{ fontSize: 16, color: 'var(--color-primary)' }} />
                    </div>
                    <p style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 5 }}>{c.label}</p>
                    {c.href
                      ? <a href={c.href} style={{ fontFamily: I, fontSize: 13, color: 'var(--color-navy)', fontWeight: 600, textDecoration: 'none' }}>{c.text}</a>
                      : <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-navy)', fontWeight: 600, margin: 0 }}>{c.text}</p>
                    }
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ══ 02. BOOKING SECTION ══ */}
        <section id="booking-form" style={{ background: '#F7F8FA', padding: '80px 0 96px', borderTop: '1px solid var(--color-border)' }}>
          <div className="appt-booking-grid appt-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 48, alignItems: 'start' }}>

            {/* ── Booking Card ── */}
            <div className="appt-card" style={{ background: '#fff', borderRadius: 24, padding: '48px 44px', boxShadow: '0 4px 32px rgba(0,0,0,.07)', border: '1px solid var(--color-border)' }}>
              <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2.4vw,30px)', color: 'var(--color-navy)', lineHeight: 1.15, letterSpacing: '-0.3px', marginBottom: 8 }}>
                Schedule Your Free Consultation.
              </h2>
              <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 24 }}>
                Pick a date and time that works for you, and we&apos;ll take it from there.
              </p>

              <iframe
                src="https://crm.isuremedia.com/widget/booking/mFLOVdTlqvxDoiTYuVvw"
                style={{ width: '100%', height: 810, border: 'none', borderRadius: 4, display: 'block' }}
                id="inline-mFLOVdTlqvxDoiTYuVvw"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Appointment Booking"
                data-height="810"
                data-layout-iframe-id="inline-mFLOVdTlqvxDoiTYuVvw"
                data-form-id="mFLOVdTlqvxDoiTYuVvw"
                title="Appointment Booking"
                data-initial-iframe-hidden="true"
                data-unique-id-mapped="true"
                data-iframe-resizer-initialized="true"
                scrolling="no"
              />
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
            </div>

            {/* ── Right Panel ── */}
            <div className="appt-right-panel">
              <div className="appt-panel-inner" style={{ background: 'linear-gradient(145deg,#0F2070 0%,#1E4DC3 55%,#2558E0 100%)', borderRadius: 24, padding: '40px 32px', boxShadow: '0 8px 40px rgba(30,77,195,.22)', position: 'sticky', top: 24 }}>
                <h3 style={{ fontFamily: J, fontWeight: 900, fontSize: 20, color: '#fff', lineHeight: 1.3, letterSpacing: '-0.2px', marginBottom: 32 }}>
                  Your consultation is one click away.
                </h3>

                {EXPECT_STEPS.map((step, i) => (
                  <div key={step.num} style={{ display: 'flex', gap: 14 }}>
                    <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,176,0,0.18)', border: '1.5px solid rgba(255,176,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: J, fontSize: 10, fontWeight: 800, color: 'var(--ism-amber)', letterSpacing: '.04em' }}>
                        {step.num}
                      </div>
                      {i < EXPECT_STEPS.length - 1 && (
                        <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,.14)', marginTop: 5, marginBottom: 5 }} />
                      )}
                    </div>
                    <div style={{ paddingTop: 4, paddingBottom: i < EXPECT_STEPS.length - 1 ? 0 : 28 }}>
                      <p style={{ fontFamily: J, fontSize: 13.5, fontWeight: 800, color: '#fff', marginBottom: 5, lineHeight: 1.3 }}>
                        Step {step.num}: {step.title}
                      </p>
                      <p style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.70)', lineHeight: 1.65, margin: '0 0 16px' }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(255,255,255,.12)', margin: '4px 0 24px' }} />

                {/* Trust badges */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { icon: 'fa-solid fa-shield-halved', text: 'Your info is 100% confidential' },
                    { icon: 'fa-solid fa-ban',           text: 'No sales pressure on the call' },
                    { icon: 'fa-solid fa-bolt',          text: 'Confirmation sent within 2 hours' },
                  ].map(b => (
                    <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(255,255,255,.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={b.icon} style={{ fontSize: 11, color: 'var(--ism-amber)' }} />
                      </div>
                      <span style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.75)' }}>{b.text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 28, padding: '18px 20px', borderRadius: 14, background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)' }}>
                  <p style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--ism-amber)', letterSpacing: '.05em', textTransform: 'uppercase', marginBottom: 6 }}>Prefer to call us?</p>
                  <a href="tel:+917011041363" style={{ fontFamily: I, fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <i className="fa-solid fa-phone" style={{ fontSize: 12 }} /> +91 70110 41363
                  </a>
                  <a href="tel:+16465881430" style={{ fontFamily: I, fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                    <i className="fa-solid fa-phone" style={{ fontSize: 12 }} /> +1 646-588-1430
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* ─── Large tablet (≤1100px) ─── */
        @media (max-width: 1100px) {
          .appt-booking-grid { grid-template-columns: 1fr 320px !important; gap: 28px !important; }
        }

        /* ─── Tablet (≤860px) ─── */
        @media (max-width: 860px) {
          .appt-hero { padding: 48px 0 52px !important; }
          .appt-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; min-height: unset !important; }
          .appt-quick-cards { grid-template-columns: repeat(4,1fr) !important; gap: 12px !important; }
          .appt-booking-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .appt-panel-inner { position: static !important; }
        }

        /* ─── Mobile (≤640px) ─── */
        @media (max-width: 640px) {
          .appt-container { padding: 0 20px !important; }
          .appt-hero { padding: 40px 0 44px !important; }
          .appt-quick-cards { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
          .appt-card { padding: 24px 18px !important; border-radius: 16px !important; }
          .appt-panel-inner { padding: 28px 22px !important; border-radius: 18px !important; }
        }

        /* ─── Small mobile (≤400px) ─── */
        @media (max-width: 400px) {
          .appt-quick-cards { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
