'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const STEPS = [
  { n: '01', title: 'We Get Prepared', desc: 'We\'ll review the information you shared and get familiar with what you\'re looking to achieve.' },
  { n: '02', title: 'We Talk Through Your Needs', desc: 'On the call, we\'ll learn more about your goals, answer your questions, and talk through what makes sense for you.' },
  { n: '03', title: 'You Decide What\'s Next', desc: 'If we\'re a good fit, we\'ll explain the next steps clearly. If not, you\'ll still leave the call with useful direction.' },
];

export default function AppointmentConfirmationPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            {/* Large checkmark */}
            <div style={{ marginBottom: 32 }}>
              <i className="fa-solid fa-calendar-check" style={{ fontSize: 64, color: 'var(--ism-amber)' }} />
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(28px,4vw,56px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.8px', lineHeight: 1.1, marginBottom: 20 }}>
              Thanks for Booking a Call With Us.
            </h1>
            <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 48, maxWidth: 560, margin: '0 auto 48px' }}>
              We&apos;re glad you reached out. Your meeting is confirmed, and the details are on their way to your inbox. Looking forward to meeting you.
            </p>
            {/* CTA buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                <i className="fa-solid fa-house" style={{ fontSize: 11 }} /> Back to Home
              </Link>
              <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget).style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget).style.color = 'var(--color-primary)'; }}>
                Explore Our Services <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHAT HAPPENS NEXT ── */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 18 }}>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.10em', textTransform: 'uppercase' }}>What Happens Next</span>
                <div style={{ width: 36, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>
                Let&apos;s Make the Most of Our Time Together
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 540, margin: '0 auto' }}>
                There&apos;s nothing else you need to do right now. Just keep an eye on your inbox for the meeting details, and we&apos;ll take it from there.
              </p>
            </div>
            <div className="ac-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
              {STEPS.map((s, i) => (
                <div key={i} style={{ background: 'var(--color-bg-soft)', borderRadius: 16, border: '1px solid var(--color-border)', padding: '40px 36px', textAlign: 'center', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 8px 24px rgba(30,77,195,.25)' }}>
                    <span style={{ fontFamily: J, fontSize: 16, fontWeight: 800, color: '#fff' }}>{s.n}</span>
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 19, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 14, lineHeight: 1.25 }}>{s.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.78, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:860px){.ac-steps-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

      </main>
      <Footer />
    </>
  );
}
