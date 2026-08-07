'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const SERVICE_OPTIONS = [
  'SEO',
  'Paid ads',
  'Websites and funnels',
  'Marketing automation',
  'White-label fulfillment',
  'Content and creative',
  "Not sure yet — let's talk",
];

const STEPS = [
  {
    num: '01',
    title: 'Start the Conversation.',
    body: 'Come as you are. Bring your goals, your challenges, or just the feeling that your business deserves more. We will help you build from there.',
  },
  {
    num: '02',
    title: 'See the Transformation.',
    body: 'We bring the right expertise, the right strategy, and the full execution to help every business and agency we work with reach their real potential.',
  },
  {
    num: '03',
    title: 'Never Stop Growing.',
    body: 'The market will keep changing. Your competition will keep pushing. We make sure you stay ahead, keep winning, and never stop growing.',
  },
];

const CONTACT_INFO = [
  {
    icon: 'fa-solid fa-location-dot',
    label: 'India Office',
    lines: ['Chandra Complex, Gas Godam Road', 'Haldwani, Uttarakhand, India'],
  },
  {
    icon: 'fa-solid fa-location-dot',
    label: 'USA Office',
    lines: ['30 N, Gould St., Suite B,', 'Sheridan, 82801, Wyoming, United States'],
  },
  {
    icon: 'fa-solid fa-phone',
    label: 'Phone',
    lines: ['+91 70110 41363', '+1 646-588-1430'],
    hrefs: ['tel:+917011041363', 'tel:+16465881430'],
  },
  {
    icon: 'fa-solid fa-envelope',
    label: 'Email',
    lines: ['hello@isuremedia.com'],
    hrefs: ['mailto:hello@isuremedia.com'],
  },
  {
    icon: 'fa-solid fa-clock',
    label: 'Working Hours',
    lines: ['Mon – Fri: 9 AM – 7 PM IST', 'Sat: 10 AM – 4 PM IST'],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', website: '', message: '' });
  const [services, setServices] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function toggleSvc(s) {
    setServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  return (
    <>
      <Navbar />
      <main style={{ overflowX: 'hidden' }}>

        {/* ══ 01. HERO ═════════════════════════════════════════════════════ */}
        <section className="ct-hero-section" style={{ background: 'linear-gradient(135deg,#EEF2FF 0%,#E8EFFF 55%,#EEF2FF 100%)', padding: '72px 0 80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -80, right: -60, width: 460, height: 460, background: 'rgba(30,77,195,0.18)', borderRadius: '58% 42% 50% 50% / 46% 58% 42% 54%', filter: 'blur(50px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -50, width: 360, height: 360, background: 'rgba(30,77,195,0.10)', borderRadius: '46% 54% 62% 38% / 54% 46% 54% 46%', filter: 'blur(44px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '30%', left: '40%', width: 280, height: 280, background: 'rgba(255,176,0,0.10)', borderRadius: '50% 50% 38% 62% / 62% 38% 62% 38%', filter: 'blur(40px)', pointerEvents: 'none' }} />

          <div className="ism-container ct-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
            <div className="ct-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', minHeight: 380 }}>

              {/* LEFT */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(32px,4.5vw,60px)', color: 'var(--color-navy)', lineHeight: 1.06, letterSpacing: '-0.5px', marginBottom: 20 }}>
                  Get in Touch
                </h1>
                <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 440, marginBottom: 40 }}>
                  Your proposal is one form away. Your answers are one call away.
                </p>
                <div className="ct-hero-btns" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <a href="#proposal-form"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                  >
                    Get a Free Proposal <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </a>
                  <a href="#proposal-form"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 4px 16px rgba(30,77,195,.25)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'var(--color-primary-hover)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'var(--color-primary)'; }}
                  >
                    Book a Strategy Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </a>
                </div>
              </div>

              {/* RIGHT — quick info cards */}
              <div className="ct-quick-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { icon: 'fa-solid fa-location-dot', title: 'India Office', text: 'Haldwani, Uttarakhand' },
                  { icon: 'fa-solid fa-location-dot', title: 'USA Office', text: 'Sheridan, Wyoming' },
                  { icon: 'fa-solid fa-phone', title: 'Call Us', text: '+91 70110 41363' },
                  { icon: 'fa-solid fa-envelope', title: 'Email', text: 'hello@isuremedia.com' },
                ].map(c => (
                  <div key={c.title} style={{ background: '#fff', borderRadius: 14, padding: '20px 18px', boxShadow: '0 2px 16px rgba(30,77,195,.08)', border: '1px solid var(--color-border)' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                      <i className={c.icon} style={{ fontSize: 16, color: 'var(--color-primary)' }} />
                    </div>
                    <p style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: 5 }}>{c.title}</p>
                    <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-navy)', fontWeight: 600, margin: 0, lineHeight: 1.5, wordBreak: 'break-word' }}>{c.text}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ══ 02. FORM + RIGHT PANEL ════════════════════════════════════════ */}
        <section id="proposal-form" className="ct-section-pad" style={{ background: '#F7F8FA', padding: '80px 0 96px', borderTop: '1px solid var(--color-border)' }}>
          <div className="contact-grid ism-container ct-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 48, alignItems: 'start' }}>

            {/* ── Form Card ── */}
            <div className="ct-form-card" style={{ background: '#fff', borderRadius: 24, padding: '48px 44px', boxShadow: '0 4px 32px rgba(0,0,0,.07)', border: '1px solid var(--color-border)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#E8F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <i className="fa-solid fa-check" style={{ fontSize: 30, color: '#0E9B6E' }} />
                  </div>
                  <h2 style={{ fontFamily: J, fontWeight: 900, color: 'var(--color-navy)', marginBottom: 12 }}>Proposal Request Received!</h2>
                  <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                    We&apos;ll review your details and get back to you within <strong>24 hours</strong> with a custom proposal.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', website: '', message: '' }); setServices([]); }}
                    style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--color-primary)', border: 'none', cursor: 'pointer' }}
                  >
                    Submit Another <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2.4vw,30px)', color: 'var(--color-navy)', lineHeight: 1.15, letterSpacing: '-0.3px', marginBottom: 8 }}>
                    Experience Measurable Growth.
                  </h2>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 28 }}>
                    Choose Isuremedia and give your business the growth it deserves.
                  </p>


                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                      <Field label="Full name" required>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Harish Pandey" style={inp}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} />
                      </Field>
                      <Field label="Email" required>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="harish@yourbusiness.com" style={inp}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} />
                      </Field>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                      <Field label="Phone" note="Optional">
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 555 000 0000" style={inp}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} />
                      </Field>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <label style={{ fontFamily: J, fontSize: 13, fontWeight: 600, color: 'var(--color-text-heading)' }}>
                          Website <span style={{ fontFamily: I, fontSize: 12, fontWeight: 400, color: 'var(--color-text-muted)' }}>Optional</span>
                        </label>
                        <input name="website" value={form.website} onChange={handleChange} placeholder="yourbusiness.com" style={inp}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} />
                        <p style={{ fontFamily: I, fontSize: 11.5, color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                          Your website helps us prepare something useful before we reach out.
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <label style={{ fontFamily: J, fontSize: 13, fontWeight: 600, color: 'var(--color-text-heading)' }}>
                        I am interested in <span style={{ color: '#E53E3E' }}>*</span>
                      </label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {SERVICE_OPTIONS.map(s => {
                          const active = services.includes(s);
                          return (
                            <button key={s} type="button" onClick={() => toggleSvc(s)} className="ct-pill"
                              style={{ padding: '8px 14px', borderRadius: 8, border: `1.5px solid ${active ? 'var(--color-primary)' : 'var(--color-border)'}`, background: active ? '#EEF2FF' : '#F7F8FA', color: active ? 'var(--color-primary)' : 'var(--color-text-muted)', fontFamily: J, fontSize: 13, fontWeight: active ? 700 : 500, cursor: 'pointer', transition: 'all .15s' }}>
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <textarea
                        name="message" value={form.message} onChange={handleChange}
                        placeholder="What should we know before we reach out?"
                        rows={4}
                        style={{ ...inp, resize: 'vertical', minHeight: 110, width: '100%', boxSizing: "border-box" }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                      />
                      <p style={{ fontFamily: I, fontSize: 11.5, color: 'var(--color-text-muted)', marginTop: 4 }}>
                        Optional. Your goals, your situation, anything relevant.
                      </p>
                    </div>

                    <button type="submit" disabled={loading}
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '16px 32px', borderRadius: 10, fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', background: loading ? '#e0aa00' : 'var(--ism-amber)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'all .18s', boxShadow: '0 6px 20px rgba(255,176,0,.30)', letterSpacing: '.03em' }}
                      onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'var(--color-accent-hover)'; }}
                      onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'var(--ism-amber)'; }}
                    >
                      {loading
                        ? <><i className="fa-solid fa-circle-notch fa-spin" /> Sending…</>
                        : <>Send my free proposal <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></>}
                    </button>

                    <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', textAlign: 'center', marginTop: -4 }}>
                      No long-term contracts · No pitch on the first call · Month to month
                    </p>

                    <div style={{ textAlign: 'center', marginTop: -8 }}>
                      <a href="#proposal-form" style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none' }}>
                        Prefer to talk? Book a free call <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                      </a>
                    </div>

                  </form>
                </>
              )}
            </div>

            {/* ── Right Panel ── */}
            <div className="ct-right-panel">
              <div className="ct-panel-inner" style={{ background: 'linear-gradient(145deg,#0F2070 0%,#1E4DC3 55%,#2558E0 100%)', borderRadius: 24, padding: '40px 32px', boxShadow: '0 8px 40px rgba(30,77,195,.22)', position: 'sticky', top: 24 }}>
                <h3 style={{ fontFamily: J, fontWeight: 900, fontSize: 20, color: '#fff', lineHeight: 1.3, letterSpacing: '-0.2px', marginBottom: 32 }}>
                  The growth you want is one call away.
                </h3>

                {STEPS.map((step, i) => (
                  <div key={step.num} style={{ display: 'flex', gap: 14 }}>
                    <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,176,0,0.18)', border: '1.5px solid rgba(255,176,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: J, fontSize: 10, fontWeight: 800, color: 'var(--ism-amber)', letterSpacing: '.04em' }}>
                        {step.num}
                      </div>
                      {i < STEPS.length - 1 && (
                        <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,.14)', marginTop: 5, marginBottom: 5 }} />
                      )}
                    </div>
                    <div style={{ paddingTop: 4, paddingBottom: i < STEPS.length - 1 ? 0 : 28 }}>
                      <p style={{ fontFamily: J, fontSize: 13.5, fontWeight: 800, color: '#fff', marginBottom: 5, lineHeight: 1.3 }}>
                        Step {step.num}: {step.title}
                      </p>
                      <p style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.70)', lineHeight: 1.65, margin: '0 0 16px' }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}

                <a href="#proposal-form"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.03em', transition: 'all .18s', boxShadow: '0 4px 16px rgba(255,176,0,.35)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                >
                  Skip the wait. Book a 30-minute call <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ══ 03. CONTACT INFO + MAP ════════════════════════════════════════ */}
        <section className="ct-section-pad" style={{ background: '#fff', padding: '80px 0 88px', borderTop: '1px solid var(--color-border)' }}>
          <div className="ism-container ct-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

            {/* Info grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1fr 1fr 1.1fr', gap: 20, marginBottom: 64 }} className="cinfo-grid">
              {CONTACT_INFO.map(item => (
                <div key={item.label} style={{ background: '#fff', borderRadius: 16, padding: '28px 24px', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', boxShadow: '0 4px 20px rgba(30,77,195,.07)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <i className={item.icon} style={{ fontSize: 16, color: 'var(--color-primary)' }} />
                  </div>
                  <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 10 }}>{item.label}</p>
                  {item.lines.map((line, li) =>
                    item.hrefs?.[li]
                      ? <a key={li} href={item.hrefs[li]} style={{ display: 'block', fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', textDecoration: 'none', lineHeight: 1.7, transition: 'color .15s' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}>{line}</a>
                      : <p key={li} style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>{line}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,.08)', border: '1px solid var(--color-border)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.8383285634397!2d79.51780867541577!3d29.218339775327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09a5a5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sHaldwani%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Isuremedia Office Location"
              />
            </div>

          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        /* ─── Large tablet (≤1100px) ─── */
        @media (max-width: 1100px) {
          .contact-grid { grid-template-columns: 1fr 320px !important; gap: 28px !important; }
          .cinfo-grid { grid-template-columns: repeat(3,1fr) !important; }
        }

        /* ─── Tablet (≤860px) ─── */
        @media (max-width: 860px) {
          .ct-hero-section { padding: 48px 0 52px !important; }
          .ct-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; min-height: unset !important; }
          .ct-quick-cards { grid-template-columns: repeat(4,1fr) !important; gap: 12px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .ct-panel-inner { position: static !important; }
          .cinfo-grid { grid-template-columns: repeat(3,1fr) !important; }
        }

        /* ─── Mobile (≤640px) ─── */
        @media (max-width: 640px) {
          .ct-container { padding: 0 20px !important; }
          .ct-hero-section { padding: 40px 0 44px !important; }
          .ct-section-pad { padding: 52px 0 60px !important; }
          .ct-hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .ct-hero-btns a { justify-content: center !important; }
          .ct-quick-cards { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .cinfo-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .ct-form-card { padding: 24px 18px !important; border-radius: 16px !important; }
          .ct-panel-inner { padding: 28px 22px !important; border-radius: 18px !important; }
          .ct-pill { padding: 7px 11px !important; font-size: 12px !important; }
        }

        /* ─── Small mobile (≤400px) ─── */
        @media (max-width: 400px) {
          .ct-quick-cards { grid-template-columns: 1fr 1fr !important; }
          .cinfo-grid { grid-template-columns: 1fr !important; }
          .ct-pill { font-size: 11px !important; padding: 6px 10px !important; }
        }
      `}</style>
    </>
  );
}

function Field({
  label,
  required,
  note,
  children
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontFamily: 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)', fontSize: 13, fontWeight: 600, color: 'var(--color-text-heading)' }}>
        {label}
        {required && <span style={{ color: '#E53E3E', marginLeft: 3 }}>*</span>}
        {note && <span style={{ fontFamily: 'var(--font-inter,Inter,sans-serif)', fontSize: 12, fontWeight: 400, color: 'var(--color-text-muted)', marginLeft: 6 }}>{note}</span>}
      </label>
      {children}
    </div>
  );
}

const inp = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 9,
  border: '1.5px solid var(--color-border)',
  fontFamily: 'var(--font-inter,Inter,sans-serif)',
  fontSize: 14,
  color: 'var(--color-text-body)',
  background: '#FAFBFF',
  outline: 'none',
  transition: 'border-color .18s',
  boxSizing: 'border-box',
};
