'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const STATS = [
  { num: '4.9/5', label: 'Average Rating' },
  { num: '400+',  label: 'Client Reviews' },
  { num: '12+',   label: 'Industries Served' },
  { num: '98%',   label: 'Retention Rate' },
];

const TESTIMONIALS = [
  {
    quote: 'Isuremedia took our Google Ads from burning cash to generating a 6x ROAS. They genuinely care about results, not just managing a budget. Our pipeline has never looked better.',
    name: 'James Whitfield',
    type: 'HVAC Business Owner',
    initials: 'JW',
  },
  {
    quote: 'Our website traffic tripled within four months of starting SEO with Isuremedia. The team is transparent, fast, and they actually explain what they\'re doing and why.',
    name: 'Priya Sharma',
    type: 'E-Commerce Founder',
    initials: 'PS',
  },
  {
    quote: 'We tried three agencies before finding ISM. The difference is night and day. Monthly reporting is clear, results are measurable, and the team is always reachable.',
    name: 'David O\'Brien',
    type: 'Law Firm Partner',
    initials: 'DO',
  },
  {
    quote: 'Our funnel went from a 1.2% conversion rate to 4.8% after ISM rebuilt it from scratch. The ROI was evident within the first 30 days. Outstanding work.',
    name: 'Sarah Connolly',
    type: 'SaaS Startup CEO',
    initials: 'SC',
  },
  {
    quote: 'As a dental practice, we rely on local leads. Isuremedia\'s local SEO work has us ranking #1 in our area, and new patient enquiries are up over 180 per month.',
    name: 'Dr. Amir Khan',
    type: 'Dental Practice Owner',
    initials: 'AK',
  },
  {
    quote: 'The white-label team at ISM is a secret weapon for our agency. Impeccable delivery, zero client complaints, and always on time. We couldn\'t scale without them.',
    name: 'Rachel Thompson',
    type: 'Digital Agency Director',
    initials: 'RT',
  },
  {
    quote: 'Working with Isuremedia on our GoHighLevel setup was seamless. They understood our workflow, automated our follow-ups, and saved us 20+ hours per week.',
    name: 'Marcus Green',
    type: 'Real Estate Agent',
    initials: 'MG',
  },
  {
    quote: 'ISM built our entire brand from logo to website to social content. Cohesive, professional, and completely on brief. The brand has transformed how clients perceive us.',
    name: 'Elena Rossi',
    type: 'Boutique Brand Owner',
    initials: 'ER',
  },
  {
    quote: 'The ISM content team produces SEO articles that actually rank and actually read well. It\'s rare to find both quality and quantity. We\'re thrilled with the results.',
    name: 'Tom Adeyemi',
    type: 'Tech Blog Publisher',
    initials: 'TA',
  },
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

        {/* ── TESTIMONIAL CARDS ── */}
        <section style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div className="tm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--color-border)', padding: '36px 32px', transition: 'all .22s', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  {/* Stars */}
                  <div style={{ fontFamily: I, fontSize: 18, color: 'var(--ism-amber)', letterSpacing: 2, marginBottom: 20 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  {/* Quote */}
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 28, flex: 1 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: J, fontSize: 14, fontWeight: 800, color: '#fff' }}>{t.initials}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)' }}>{t.name}</div>
                      <div style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)' }}>{t.type}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.tm-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.tm-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
