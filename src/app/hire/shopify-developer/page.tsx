'use client';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const skills = [
  'Liquid templating',
  'Custom Shopify themes',
  'App integration',
  'Shopify Plus',
  'Product page optimisation',
  'Cart & checkout customisation',
  'Performance optimisation',
  'Headless Shopify',
];

const whatYouGet = [
  { icon: 'fa-solid fa-store', title: 'Conversion-Focused Shopify Builds', desc: 'Our developers don\'t just build stores — they build stores that sell. Every decision is made with your conversion rate in mind.' },
  { icon: 'fa-solid fa-bolt', title: 'Ready to Launch in 48 Hours', desc: 'We match you with the right Shopify developer from our vetted pool and get them onboarded fast. No lengthy hiring cycles.' },
  { icon: 'fa-solid fa-chart-line', title: 'E-Commerce Growth DNA', desc: 'Our team has shipped hundreds of Shopify projects. We know what drives revenue and we build with that knowledge baked in.' },
];

const engagements = [
  { title: 'Part-Time', hours: '20 hrs/week', desc: 'Best for store maintenance, landing pages, seasonal updates, or iterative conversion improvements.', price: 'From $800/mo' },
  { title: 'Full-Time', hours: '40 hrs/week', desc: 'A dedicated Shopify developer embedded in your team — ideal for full store builds, Shopify Plus migrations, or custom app work.', price: 'From $1,400/mo' },
  { title: 'Project-Based', hours: 'Fixed scope', desc: 'Got a specific store build or feature in mind? We scope it, price it, and deliver it on time.', price: 'Custom quote' },
];

const whyISM = [
  { icon: 'fa-solid fa-user-check', title: 'Rigorously Vetted Talent', desc: 'Every developer passes technical assessments, portfolio reviews, and communication checks before joining our pool.' },
  { icon: 'fa-solid fa-rotate', title: '5-Day Replacement Guarantee', desc: 'If your developer isn\'t the right fit, we replace them within 5 business days — guaranteed.' },
  { icon: 'fa-solid fa-clock', title: 'Flexible Timezones', desc: 'Developers available across US, UK, and Asian timezones so your store never waits.' },
  { icon: 'fa-solid fa-comments', title: 'Full Transparency', desc: 'Daily check-ins, weekly reports, and open Slack communication so you always know what\'s happening.' },
];

const steps = [
  { num: '01', title: 'Post Your Brief', desc: 'Share your store goals, tech requirements, and timeline.' },
  { num: '02', title: 'Interview Candidates', desc: 'We shortlist 2-3 vetted Shopify developers for you to choose from.' },
  { num: '03', title: 'Start Working', desc: 'Onboard your developer and begin building immediately.' },
  { num: '04', title: 'Deliver Results', desc: 'Track progress, approve milestones, and launch with confidence.' },
];

export default function HireShopifyDeveloper() {
  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div style={{ background: 'var(--color-bg-soft)', borderBottom: '1px solid var(--color-border)', padding: '12px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
          <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', margin: 0 }}>
            <a href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>›</span>
            <a href="/hire" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Hire a Team</a>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>›</span>
            Shopify Developer
          </p>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--color-bg-soft)', padding: '88px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0%', left: '2%', width: 380, height: 380, background: 'radial-gradient(circle,rgba(255,176,0,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
            <i className="fa-solid fa-store" style={{ fontSize: 12, color: 'var(--color-primary)' }} />
            <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Hire a Team</span>
          </div>
          <h1 style={{ maxWidth: 780, marginBottom: 24 }}>Hire a Shopify Developer — Conversion-Focused E-Commerce Builds</h1>
          <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 620, marginBottom: 40 }}>
            Get a dedicated Shopify developer who understands e-commerce conversion, Liquid templating, and app ecosystems — vetted by Isuremedia and ready to start in 48 hours.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
              Hire Now <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
            </a>
            <a href="#how-it-works"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: '#fff', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ism-blue-50)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = ''; }}>
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ marginBottom: 16 }}>What You Get When You Hire From ISM</h2>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', maxWidth: 560, margin: '0 auto' }}>Shopify expertise that drives real store performance.</p>
          </div>
          <div className="wyg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
            {whatYouGet.map(item => (
              <div key={item.title} style={{ background: 'var(--color-bg-soft)', borderRadius: 16, padding: '36px 32px', border: '1px solid var(--color-border)' }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <i className={item.icon} style={{ fontSize: 20, color: 'var(--color-primary)' }} />
                </div>
                <h3 style={{ marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section style={{ background: 'var(--color-bg-soft)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
          <div className="skills-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: 16 }}>Skills & Expertise</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 32 }}>
                From Liquid templating to Shopify Plus enterprise builds — our developers cover the full Shopify stack with a relentless focus on speed, conversion, and clean code.
              </p>
              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Discuss Your Store <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {skills.map(skill => (
                <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#fff', borderRadius: 10, padding: '14px 18px', border: '1px solid var(--color-border)' }}>
                  <i className="fa-solid fa-check" style={{ fontSize: 12, color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontFamily: I, fontSize: 14, fontWeight: 500, color: 'var(--color-navy)' }}>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ marginBottom: 16 }}>Engagement Models</h2>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', maxWidth: 500, margin: '0 auto' }}>Flexible options for every stage of your store's growth.</p>
          </div>
          <div className="eng-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
            {engagements.map((eng, i) => (
              <div key={eng.title} style={{ borderRadius: 16, padding: '36px 32px', border: i === 1 ? '2px solid var(--color-primary)' : '1px solid var(--color-border)', background: i === 1 ? 'var(--ism-blue-50)' : '#fff', position: 'relative' }}>
                {i === 1 && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: '#fff', fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 100 }}>Most Popular</div>}
                <h3 style={{ marginBottom: 6 }}>{eng.title}</h3>
                <p style={{ fontFamily: J, fontSize: 13, fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 16 }}>{eng.hours}</p>
                <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 24 }}>{eng.desc}</p>
                <p style={{ fontFamily: J, fontSize: 20, fontWeight: 800, color: 'var(--color-primary)', marginBottom: 24 }}>{eng.price}</p>
                <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 700, color: i === 1 ? 'var(--color-navy)' : 'var(--color-primary)', background: i === 1 ? 'var(--ism-amber)' : 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: i === 1 ? 'none' : '2px solid var(--color-primary)', transition: 'all .18s' }}>Get Started</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ISM */}
      <section style={{ background: 'var(--color-bg-soft)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ marginBottom: 16 }}>Why Hire From Isuremedia?</h2>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', maxWidth: 520, margin: '0 auto' }}>We are your long-term Shopify hiring partner.</p>
          </div>
          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
            {whyISM.map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: 14, padding: '28px 24px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <i className={item.icon} style={{ fontSize: 18, color: 'var(--color-primary)' }} />
                </div>
                <h3 style={{ fontSize: 17, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="how-it-works" style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ marginBottom: 16 }}>How the Process Works</h2>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', maxWidth: 480, margin: '0 auto' }}>From brief to first commit in as little as 48 hours.</p>
          </div>
          <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ position: 'relative', textAlign: 'center', padding: '32px 24px' }}>
                {i < steps.length - 1 && <div style={{ position: 'absolute', top: 44, right: '-14%', width: '28%', height: 2, background: 'var(--ism-blue-100)' }} />}
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 6px 20px rgba(30,77,195,.3)' }}>
                  <span style={{ fontFamily: J, fontSize: 16, fontWeight: 800, color: '#fff' }}>{step.num}</span>
                </div>
                <h3 style={{ fontSize: 18, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <style>{`
        @media (max-width: 900px) {
          .wyg-grid, .eng-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr 1fr !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .skills-inner { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 540px) {
          .why-grid, .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
