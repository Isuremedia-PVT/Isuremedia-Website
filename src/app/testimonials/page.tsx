'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const STATS = [
  { num: '4.9/5', label: 'Average Rating' },
  { num: '400+',  label: 'Client Reviews' },
  { num: '12+',   label: 'Industries Served' },
  { num: '98%',   label: 'Retention Rate' },
];


export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '104px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Client Reviews</span>
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(34px,5vw,68px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, maxWidth: 860, margin: '0 auto 24px' }}>
              What Our Clients Say
            </h1>
            <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 620, margin: '0 auto 44px' }}>
              Don&apos;t take our word for it. Hear directly from the businesses we&apos;ve helped grow — from local trades to global SaaS companies.
            </p>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
              Become Our Next Success Story <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
            </a>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
            <div className="tm-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--color-border)', borderRadius: 16, overflow: 'hidden' }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: '40px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 'clamp(36px,4vw,60px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 6, letterSpacing: '-1px' }}>{s.num}</div>
                  <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, margin: '0 auto 10px' }} />
                  <div style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:640px){.tm-stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
        </section>

        {/* ── TESTIMONIAL SLIDER ── */}
        <Testimonials />

        {/* ── VIDEO TESTIMONIAL ── */}
        <section style={{ padding: '100px 0 112px', background: '#fff', position: 'relative', overflow: 'hidden' }}>

          {/* Dot grid texture */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(30,77,195,.045) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

            {/* Rule label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 72 }}>
              <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
              <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Do Not Take Our Word for It</span>
              <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
            </div>

            <div className="tm-video-grid" style={{ display: 'grid', gridTemplateColumns: '420px 1fr', gap: 80, alignItems: 'center' }}>

              {/* ── LEFT: Quote ── */}
              <div>
                {/* Giant decorative quote mark */}
                <div style={{ fontFamily: 'Georgia,"Times New Roman",serif', fontSize: 160, lineHeight: 0.75, color: 'var(--ism-amber)', marginBottom: 16, userSelect: 'none' }}>&ldquo;</div>

                <p style={{ fontFamily: J, fontSize: 'clamp(18px,1.9vw,24px)', fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.58, margin: '0 0 36px', letterSpacing: '-0.3px' }}>
                  [One sentence pulled verbatim from the client video — pending.]
                </p>

                <div style={{ width: 44, height: 4, background: 'var(--ism-amber)', borderRadius: 2, marginBottom: 32 }} />

                {/* Client row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
                  <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-primary) 0%, #3B6CF5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 6px 20px rgba(30,77,195,.30)' }}>
                    <i className="fa-solid fa-user" style={{ color: '#fff', fontSize: 20 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 16, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.2, marginBottom: 4 }}>[Client Name]</div>
                    <div style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)' }}>[Company Name]</div>
                  </div>
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: 4, marginBottom: 28 }}>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 17 }} />
                  ))}
                </div>

                {/* Google verified badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#F7F8FA', border: '1px solid var(--color-border)', borderRadius: 10, padding: '10px 18px' }}>
                  <span style={{ fontFamily: 'Arial,sans-serif', fontWeight: 700, fontSize: 17, lineHeight: 1 }}>
                    <span style={{ color: '#4285F4' }}>G</span><span style={{ color: '#EA4335' }}>o</span><span style={{ color: '#FBBC05' }}>o</span><span style={{ color: '#4285F4' }}>g</span><span style={{ color: '#34A853' }}>l</span><span style={{ color: '#EA4335' }}>e</span>
                  </span>
                  <span style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)', fontWeight: 500 }}>Verified Review</span>
                </div>
              </div>

              {/* ── RIGHT: Video ── */}
              <div style={{ position: 'relative' }}>
                {/* Amber shadow box behind video */}
                <div style={{ position: 'absolute', top: 18, left: 18, right: -18, bottom: -18, background: 'var(--ism-amber)', borderRadius: 24, opacity: 0.15 }} />
                {/* Blue shadow box */}
                <div style={{ position: 'absolute', top: 8, left: 8, right: -8, bottom: -8, background: 'var(--color-primary)', borderRadius: 24, opacity: 0.10 }} />
                <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', paddingTop: '56.25%', boxShadow: '0 28px 72px rgba(0,35,83,.18)' }}>
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                    title="Client Testimonial Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
                  />
                </div>
              </div>

            </div>
          </div>

          <style>{`
            @media (max-width: 960px) {
              .tm-video-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            }
            @media (max-width: 768px) {
              .tm-video-grid { padding: 0 !important; }
            }
          `}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
