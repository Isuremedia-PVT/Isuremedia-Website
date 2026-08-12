'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const TIME_SLOTS = [
  '9:00 AM','10:00 AM','11:00 AM','12:00 PM',
  '2:00 PM','3:00 PM','4:00 PM','5:00 PM',
];

const CALL_TYPES = [
  { id: 'strategy',  icon: 'fa-solid fa-chess',         label: 'Free Strategy Call',  dur: '30 min' },
  { id: 'audit',     icon: 'fa-solid fa-magnifying-glass-chart', label: 'Website / SEO Audit', dur: '45 min' },
  { id: 'proposal',  icon: 'fa-solid fa-file-lines',    label: 'Proposal Discussion', dur: '30 min' },
  { id: 'onboarding',icon: 'fa-solid fa-rocket',        label: 'Client Onboarding',   dur: '60 min' },
];

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

const inp = {
  width: '100%', padding: '12px 14px', borderRadius: 9,
  border: '1.5px solid var(--color-border)',
  fontFamily: I, fontSize: 14, color: 'var(--color-text-body)',
  background: '#FAFBFF', outline: 'none',
  transition: 'border-color .18s', boxSizing: 'border-box',
};

function Field({
  label,
  required,
  note,
  children
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontFamily: J, fontSize: 13, fontWeight: 600, color: 'var(--color-text-heading)' }}>
        {label}
        {required && <span style={{ color: '#E53E3E', marginLeft: 3 }}>*</span>}
        {note && <span style={{ fontFamily: I, fontSize: 12, fontWeight: 400, color: 'var(--color-text-muted)', marginLeft: 6 }}>{note}</span>}
      </label>
      {children}
    </div>
  );
}

export default function AppointmentPage() {
  const today = useMemo(() => new Date(), []);

  const [calYear,  setCalYear]  = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [selDate,  setSelDate]  = useState(null);
  const [selTime,  setSelTime]  = useState(null);
  const [selType,  setSelType]  = useState('strategy');
  const [form, setForm]  = useState({ name: '', email: '', phone: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [step, setStep] = useState(1); // 1=date, 2=time, 3=details

  /* ── Calendar helpers ── */
  const daysInMonth   = new Date(calYear, calMonth + 1, 0).getDate();
  const firstWeekday  = new Date(calYear, calMonth, 1).getDay();

  function isDisabled(day) {
    const d = new Date(calYear, calMonth, day);
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d < todayMidnight || d.getDay() === 0 || d.getDay() === 6;
  }

  function isSelected(day) {
    if (!selDate) return false;
    return selDate.getDate() === day && selDate.getMonth() === calMonth && selDate.getFullYear() === calYear;
  }

  function isToday(day) {
    return today.getDate() === day && today.getMonth() === calMonth && today.getFullYear() === calYear;
  }

  function prevMonth() {
    if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
    else setCalMonth(m => m - 1);
    setSelDate(null); setSelTime(null); setStep(1);
  }

  function nextMonth() {
    if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
    else setCalMonth(m => m + 1);
    setSelDate(null); setSelTime(null); setStep(1);
  }

  function pickDate(day) {
    if (isDisabled(day)) return;
    setSelDate(new Date(calYear, calMonth, day));
    setSelTime(null);
    setStep(2);
  }

  function pickTime(t) {
    setSelTime(t);
    setStep(3);
  }

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  }

  const formatDate = (d) =>
    d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  /* ── Calendar grid cells ── */
  const cells = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

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

                {/* CTA Buttons */}
                <div className="appt-hero-btns" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 36 }}>
                  <a href="#booking-form"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                  >
                    Book Free Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </a>
                  <a href="tel:+917011041363"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 4px 16px rgba(30,77,195,.25)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = 'var(--color-primary-hover)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.background = 'var(--color-primary)'; }}
                  >
                    <i className="fa-solid fa-phone" style={{ fontSize: 11 }} /> Call Us Now
                  </a>
                </div>

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

              {submitted ? (
                /* ── Success state ── */
                (<div style={{ textAlign: 'center', padding: '48px 20px' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#E8F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
                    <i className="fa-solid fa-calendar-check" style={{ fontSize: 34, color: '#0E9B6E' }} />
                  </div>
                  <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 26, color: 'var(--color-navy)', marginBottom: 12 }}>Appointment Requested!</h2>
                  <div style={{ background: '#F7F8FA', borderRadius: 14, padding: '20px 24px', margin: '20px auto', maxWidth: 380, border: '1px solid var(--color-border)', textAlign: 'left' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {[
                        { icon: 'fa-solid fa-calendar', label: 'Date', val: selDate ? formatDate(selDate) : '' },
                        { icon: 'fa-solid fa-clock',    label: 'Time', val: `${selTime} IST` },
                        { icon: 'fa-solid fa-video',    label: 'Type', val: CALL_TYPES.find(c => c.id === selType)?.label ?? '' },
                      ].map(r => (
                        <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 32, height: 32, borderRadius: 8, background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <i className={r.icon} style={{ fontSize: 12, color: 'var(--color-primary)' }} />
                          </div>
                          <div>
                            <p style={{ fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '.06em', margin: 0 }}>{r.label}</p>
                            <p style={{ fontFamily: I, fontSize: 13, fontWeight: 600, color: 'var(--color-navy)', margin: 0 }}>{r.val}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
                    We&apos;ll send a confirmation to <strong>{form.email}</strong>.<br />Expect to hear from us within <strong>2 hours</strong>.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setSelDate(null); setSelTime(null); setStep(1); setForm({ name: '', email: '', phone: '', notes: '' }); }}
                    style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--color-primary)', border: 'none', cursor: 'pointer' }}>
                    Book Another <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </button>
                </div>)

              ) : (
                <>
                  <h2 style={{ fontFamily: J, fontWeight: 900, fontSize: 'clamp(22px,2.4vw,30px)', color: 'var(--color-navy)', lineHeight: 1.15, letterSpacing: '-0.3px', marginBottom: 8 }}>
                    Schedule Your Free Consultation.
                  </h2>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 32 }}>
                    Choose your call type, pick a date and time, and we&apos;ll take it from there.
                  </p>

                  {/* ── Step indicators ── */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 32 }}>
                    {(['Choose Type', 'Pick Date & Time', 'Your Details']).map((label, idx) => {
                      const sn = idx + 1;
                      const done = step > sn;
                      const active = step === sn;
                      return (
                        <div key={label} style={{ display: 'flex', alignItems: 'center', flex: idx < 2 ? 1 : 'unset' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                            <div style={{ width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: J, fontSize: 11, fontWeight: 800, background: done ? '#0E9B6E' : active ? 'var(--color-primary)' : '#E5E7EB', color: (done || active) ? '#fff' : 'var(--color-text-muted)', transition: 'all .2s', flexShrink: 0 }}>
                              {done ? <i className="fa-solid fa-check" style={{ fontSize: 10 }} /> : sn}
                            </div>
                            <span className="step-label" style={{ fontFamily: J, fontSize: 12, fontWeight: 600, color: active ? 'var(--color-primary)' : done ? '#0E9B6E' : 'var(--color-text-muted)' }}>{label}</span>
                          </div>
                          {idx < 2 && <div style={{ flex: 1, height: 2, background: done ? '#0E9B6E' : '#E5E7EB', margin: '0 10px', transition: 'background .2s' }} />}
                        </div>
                      );
                    })}
                  </div>

                  {/* ── Step 1: Call Type + Calendar ── */}
                  <div style={{ marginBottom: 28 }}>
                    <p style={{ fontFamily: J, fontSize: 12, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 12 }}>Call Type</p>
                    <div className="call-type-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32 }}>
                      {CALL_TYPES.map(ct => {
                        const active = selType === ct.id;
                        return (
                          <button key={ct.id} type="button" onClick={() => setSelType(ct.id)}
                            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderRadius: 12, border: `1.5px solid ${active ? 'var(--color-primary)' : 'var(--color-border)'}`, background: active ? '#EEF2FF' : '#FAFBFF', cursor: 'pointer', textAlign: 'left', transition: 'all .15s' }}>
                            <div style={{ width: 36, height: 36, borderRadius: 10, background: active ? 'var(--color-primary)' : '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .15s' }}>
                              <i className={ct.icon} style={{ fontSize: 14, color: active ? '#fff' : 'var(--color-text-muted)' }} />
                            </div>
                            <div>
                              <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: active ? 'var(--color-primary)' : 'var(--color-text-heading)', margin: 0, lineHeight: 1.3 }}>{ct.label}</p>
                              <p style={{ fontFamily: I, fontSize: 11, color: 'var(--color-text-muted)', margin: 0 }}>{ct.dur}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* ── Calendar ── */}
                    <p style={{ fontFamily: J, fontSize: 12, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 12 }}>Select Date</p>
                    <div style={{ border: '1.5px solid var(--color-border)', borderRadius: 16, overflow: 'hidden' }}>
                      {/* Month header */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#FAFBFF', borderBottom: '1px solid var(--color-border)' }}>
                        <button type="button" onClick={prevMonth}
                          style={{ width: 34, height: 34, borderRadius: 8, border: '1.5px solid var(--color-border)', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}
                          onMouseEnter={e => { e.currentTarget.style.background = '#EEF2FF'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}>
                          <i className="fa-solid fa-chevron-left" style={{ fontSize: 11, color: 'var(--color-text-muted)' }} />
                        </button>
                        <span style={{ fontFamily: J, fontSize: 15, fontWeight: 800, color: 'var(--color-navy)' }}>
                          {MONTHS[calMonth]} {calYear}
                        </span>
                        <button type="button" onClick={nextMonth}
                          style={{ width: 34, height: 34, borderRadius: 8, border: '1.5px solid var(--color-border)', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s' }}
                          onMouseEnter={e => { e.currentTarget.style.background = '#EEF2FF'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}>
                          <i className="fa-solid fa-chevron-right" style={{ fontSize: 11, color: 'var(--color-text-muted)' }} />
                        </button>
                      </div>

                      {/* Day headers */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', background: '#F7F8FA', borderBottom: '1px solid var(--color-border)' }}>
                        {DAYS.map(d => (
                          <div key={d} style={{ padding: '10px 0', textAlign: 'center', fontFamily: J, fontSize: 11, fontWeight: 700, color: d === 'Sun' || d === 'Sat' ? '#CBD5E1' : 'var(--color-text-muted)', letterSpacing: '.04em' }}>{d}</div>
                        ))}
                      </div>

                      {/* Date cells */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', padding: '8px' }}>
                        {cells.map((day, idx) => {
                          if (!day) return <div key={`empty-${idx}`} />;
                          const disabled = isDisabled(day);
                          const selected = isSelected(day);
                          const tod = isToday(day);
                          return (
                            <button key={day} type="button" onClick={() => pickDate(day)} disabled={disabled}
                              style={{
                                aspectRatio: '1', borderRadius: 10, border: selected ? '2px solid var(--color-primary)' : tod ? '1.5px solid rgba(30,77,195,.3)' : '2px solid transparent',
                                background: selected ? 'var(--color-primary)' : tod ? '#EEF2FF' : 'transparent',
                                color: selected ? '#fff' : disabled ? '#CBD5E1' : tod ? 'var(--color-primary)' : 'var(--color-text-body)',
                                fontFamily: J, fontSize: 13, fontWeight: selected ? 800 : tod ? 700 : 500,
                                cursor: disabled ? 'not-allowed' : 'pointer', transition: 'all .15s', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2px',
                              }}
                              onMouseEnter={e => { if (!disabled && !selected) { e.currentTarget.style.background = '#EEF2FF'; e.currentTarget.style.color = 'var(--color-primary)'; } }}
                              onMouseLeave={e => { if (!disabled && !selected) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = tod ? 'var(--color-primary)' : 'var(--color-text-body)'; } }}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                      <p style={{ fontFamily: I, fontSize: 11.5, color: 'var(--color-text-muted)', padding: '8px 20px 14px', margin: 0 }}>
                        <i className="fa-solid fa-circle-info" style={{ marginRight: 5, color: 'var(--color-primary)', opacity: .7 }} />
                        Weekends unavailable. All sessions via Google Meet / Zoom.
                      </p>
                    </div>
                  </div>

                  {/* ── Step 2: Time Slots ── */}
                  {selDate && (
                    <div style={{ marginBottom: 28 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <p style={{ fontFamily: J, fontSize: 12, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--color-primary)', margin: 0 }}>Select Time</p>
                        <span style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)' }}>, {formatDate(selDate)}</span>
                      </div>
                      <div className="time-slot-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
                        {TIME_SLOTS.map(t => {
                          const active = selTime === t;
                          return (
                            <button key={t} type="button" onClick={() => pickTime(t)}
                              style={{ padding: '11px 8px', borderRadius: 10, border: `1.5px solid ${active ? 'var(--color-primary)' : 'var(--color-border)'}`, background: active ? 'var(--color-primary)' : '#FAFBFF', color: active ? '#fff' : 'var(--color-text-body)', fontFamily: J, fontSize: 12, fontWeight: active ? 700 : 500, cursor: 'pointer', transition: 'all .15s', textAlign: 'center' }}
                              onMouseEnter={e => { if (!active) { e.currentTarget.style.background = '#EEF2FF'; e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.color = 'var(--color-primary)'; } }}
                              onMouseLeave={e => { if (!active) { e.currentTarget.style.background = '#FAFBFF'; e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-text-body)'; } }}
                            >{t}</button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* ── Step 3: Details Form ── */}
                  {selTime && (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                      <div style={{ height: 1, background: 'var(--color-border)', margin: '4px 0' }} />
                      <p style={{ fontFamily: J, fontSize: 12, fontWeight: 700, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--color-primary)', margin: 0 }}>Your Details</p>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="appt-form-row">
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

                      <Field label="Phone" note="Optional">
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inp}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} />
                      </Field>

                      <Field label="What would you like to discuss?" note="Optional">
                        <textarea name="notes" value={form.notes} onChange={handleChange}
                          placeholder="Brief context about your business, goals, or any specific questions…"
                          rows={3}
                          style={{ ...inp, resize: 'vertical', minHeight: 88, boxSizing: 'border-box' }}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} />
                      </Field>

                      {/* Booking summary pill */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderRadius: 10, background: '#EEF2FF', border: '1px solid rgba(30,77,195,.2)', flexWrap: 'wrap' }}>
                        <i className="fa-solid fa-calendar-check" style={{ fontSize: 14, color: 'var(--color-primary)' }} />
                        <span style={{ fontFamily: J, fontSize: 13, fontWeight: 600, color: 'var(--color-navy)' }}>
                          {CALL_TYPES.find(c => c.id === selType)?.label} · {selDate ? `${selDate.getDate()} ${MONTHS[selDate.getMonth()]}` : ''} · {selTime} IST
                        </span>
                        <button type="button" onClick={() => { setSelTime(null); setStep(2); }}
                          style={{ marginLeft: 'auto', fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
                          Change
                        </button>
                      </div>

                      <button type="submit" disabled={loading}
                        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '16px 32px', borderRadius: 10, fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', background: loading ? '#e0aa00' : 'var(--ism-amber)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'all .18s', boxShadow: '0 6px 20px rgba(255,176,0,.30)', letterSpacing: '.03em' }}
                        onMouseEnter={e => { if (!loading) e.currentTarget.style.background = 'var(--color-accent-hover)'; }}
                        onMouseLeave={e => { if (!loading) e.currentTarget.style.background = 'var(--ism-amber)'; }}
                      >
                        {loading
                          ? <><i className="fa-solid fa-circle-notch fa-spin" /> Booking…</>
                          : <>Confirm Appointment <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} /></>}
                      </button>

                      <p style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', textAlign: 'center', marginTop: -6 }}>
                        No spam · No pitch on the first call · Cancel anytime
                      </p>
                    </form>
                  )}

                  {/* Prompt when no date selected yet */}
                  {!selDate && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', borderRadius: 12, background: '#F7F8FA', border: '1px dashed var(--color-border)', marginTop: 4 }}>
                      <i className="fa-solid fa-hand-pointer" style={{ fontSize: 16, color: 'var(--color-primary)', opacity: .6 }} />
                      <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', margin: 0 }}>
                        Select a date above to see available time slots.
                      </p>
                    </div>
                  )}
                </>
              )}
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
          .appt-hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .appt-hero-btns a { justify-content: center !important; }
          .appt-quick-cards { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
          .appt-card { padding: 24px 18px !important; border-radius: 16px !important; }
          .appt-panel-inner { padding: 28px 22px !important; border-radius: 18px !important; }
          .call-type-grid { grid-template-columns: 1fr 1fr !important; }
          .time-slot-grid { grid-template-columns: repeat(4,1fr) !important; }
          .appt-form-row { grid-template-columns: 1fr !important; }
          .step-label { display: none; }
        }

        /* ─── Small mobile (≤400px) ─── */
        @media (max-width: 400px) {
          .appt-quick-cards { grid-template-columns: 1fr 1fr !important; }
          .call-type-grid { grid-template-columns: 1fr !important; }
          .time-slot-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
      `}</style>
    </>
  );
}
