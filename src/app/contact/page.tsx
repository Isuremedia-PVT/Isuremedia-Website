'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const services = [
  'Website Development',
  'SEO & Content',
  'Google / Meta Ads',
  'Social Media Marketing',
  'Marketing Automation',
  'White Label Services',
  'Other',
];

const contactInfo = [
  {
    icon: 'fa-solid fa-location-dot',
    title: 'India Office',
    lines: ['1st Floor, Chandra Complex, Gas Godam Road,', 'Haldwani, Uttarakhand 263139, India'],
  },
  {
    icon: 'fa-solid fa-location-dot',
    title: 'USA Office',
    lines: ['30 N, Gould St., Suite B,', 'Sheridan, 82801, Wyoming, United States'],
  },
  {
    icon: 'fa-solid fa-phone',
    title: 'Phone',
    lines: ['+91 70110 41363', '+1 646-588-1430'],
    href: 'tel:+917011041363',
  },
  {
    icon: 'fa-solid fa-envelope',
    title: 'Email',
    lines: ['hello@isuremedia.com'],
    href: 'mailto:hello@isuremedia.com',
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'Working Hours',
    lines: ['Mon – Fri: 9:00 AM – 7:00 PM IST', 'Sat: 10:00 AM – 4:00 PM IST'],
  },
];

const socials = [
  { icon: 'fa-brands fa-linkedin-in', href: '#', label: 'LinkedIn' },
  { icon: 'fa-brands fa-facebook-f', href: '#', label: 'Facebook' },
  { icon: 'fa-brands fa-instagram', href: '#', label: 'Instagram' },
  { icon: 'fa-brands fa-x-twitter', href: '#', label: 'X / Twitter' },
  { icon: 'fa-brands fa-youtube', href: '#', label: 'YouTube' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  }

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero Banner ── */}
        <section style={{ background: 'linear-gradient(130deg,#1840A0 0%,#1E4DC3 40%,#2F5FE8 75%,#3B6CF5 100%)', padding: '88px 28px 72px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: 480, height: 480, background: 'radial-gradient(circle,rgba(255,176,0,.12) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 360, height: 360, background: 'radial-gradient(circle,rgba(30,77,195,.25) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(255,176,0,.15)', border: '1px solid rgba(255,176,0,.35)', fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--ism-amber)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 20 }}>
              <i className="fa-solid fa-headset" /> Get In Touch
            </span>
            <h1 style={{ color: '#fff', marginBottom: 16 }}>Let&apos;s Grow Your Business Together</h1>
            <p style={{ fontFamily: I, fontSize: 18, color: 'rgba(255,255,255,.82)', lineHeight: 1.75, maxWidth: 580, margin: '0 auto' }}>
              Tell us about your project and we&apos;ll get back to you within 24 hours with a custom strategy — no fluff, no commitment.
            </p>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '72px 28px 88px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 48, alignItems: 'start' }} className="contact-grid">

            {/* ── Contact Form ── */}
            <div style={{ background: '#fff', borderRadius: 20, padding: '44px 40px', boxShadow: 'var(--sh-lg)', border: '1px solid var(--color-border)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#E8F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <i className="fa-solid fa-check" style={{ fontSize: 30, color: '#0E9B6E' }} />
                  </div>
                  <h2 style={{ marginBottom: 12 }}>Message Received!</h2>
                  <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                    Thank you for reaching out. Our team will review your query and get back to you within <strong>24 hours</strong>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--color-primary)', border: 'none', cursor: 'pointer', transition: 'background .15s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-hover)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-primary)')}
                  >
                    Send Another Message <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ marginBottom: 6 }}>Send Us a Message</h2>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', marginBottom: 32 }}>Fill in the form and we&apos;ll craft a custom plan for you.</p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                    {/* Name + Email */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                      <Field label="Full Name" required>
                        <input
                          name="name" value={form.name} onChange={handleChange} required
                          placeholder="John Smith"
                          style={inputStyle}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                        />
                      </Field>
                      <Field label="Email Address" required>
                        <input
                          name="email" type="email" value={form.email} onChange={handleChange} required
                          placeholder="john@company.com"
                          style={inputStyle}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                        />
                      </Field>
                    </div>

                    {/* Phone + Service */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                      <Field label="Phone Number">
                        <input
                          name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          style={inputStyle}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                        />
                      </Field>
                      <Field label="Service Interested In">
                        <select
                          name="service" value={form.service} onChange={handleChange}
                          style={{ ...inputStyle, color: form.service ? 'var(--color-text-body)' : 'var(--color-text-muted)' }}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                        >
                          <option value="" disabled>Select a service…</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </Field>
                    </div>

                    {/* Message */}
                    <Field label="Your Message" required>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} required
                        placeholder="Tell us about your business goals, current challenges, and what you'd like to achieve…"
                        rows={5}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                      />
                    </Field>

                    <button
                      type="submit" disabled={loading}
                      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '16px 32px', borderRadius: 10, fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', background: loading ? '#e0aa00' : 'var(--ism-amber)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'all .18s', boxShadow: '0 6px 20px rgba(255,176,0,.30)', letterSpacing: '.03em' }}
                      onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'var(--color-accent-hover)'; }}
                      onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'var(--ism-amber)'; }}
                    >
                      {loading
                        ? <><i className="fa-solid fa-circle-notch fa-spin" /> Sending…</>
                        : <><i className="fa-solid fa-paper-plane" /> Send Message</>}
                    </button>

                    <p style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)', textAlign: 'center', marginTop: -4 }}>
                      <i className="fa-solid fa-lock" style={{ fontSize: 10, marginRight: 5, color: 'var(--color-primary)' }} />
                      Your information is 100% confidential and never shared.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* Contact Info Card */}
              <div style={{ background: '#fff', borderRadius: 20, padding: '32px 28px', boxShadow: 'var(--sh-md)', border: '1px solid var(--color-border)' }}>
                <h3 style={{ marginBottom: 24 }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {contactInfo.map(item => (
                    <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={item.icon} style={{ fontSize: 15, color: 'var(--color-primary)' }} />
                      </div>
                      <div>
                        <p style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 4 }}>{item.title}</p>
                        {item.href
                          ? item.lines.map(line => (
                              <a key={line} href={item.href} style={{ display: 'block', fontFamily: I, fontSize: 14, color: 'var(--color-text-body)', textDecoration: 'none', lineHeight: 1.6, transition: 'color .15s' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-body)')}
                              >{line}</a>
                            ))
                          : item.lines.map(line => (
                              <p key={line} style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>{line}</p>
                            ))
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Card */}
              <div style={{ background: 'linear-gradient(135deg,#1840A0 0%,#2F5FE8 100%)', borderRadius: 20, padding: '28px', boxShadow: 'var(--sh-md)' }}>
                <p style={{ fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Follow Us</p>
                <p style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.75)', marginBottom: 20 }}>Stay updated with tips, case studies & results.</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {socials.map(s => (
                    <a key={s.icon} href={s.href} aria-label={s.label}
                      style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, textDecoration: 'none', transition: 'all .18s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.color = 'var(--color-navy)'; e.currentTarget.style.borderColor = 'var(--ism-amber)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.14)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.22)'; }}
                    >
                      <i className={s.icon} />
                    </a>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* ── Map Section ── */}
        <section style={{ background: '#fff', padding: '0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px 80px' }}>
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--sh-md)', border: '1px solid var(--color-border)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.8383285634397!2d79.51780867541577!3d29.218339775327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09a5a5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sHaldwani%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ISureMedia Office Location"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontFamily: 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)', fontSize: 13, fontWeight: 600, color: 'var(--color-text-heading)' }}>
        {label}{required && <span style={{ color: '#E53E3E', marginLeft: 3 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
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
  appearance: 'none' as const,
};
