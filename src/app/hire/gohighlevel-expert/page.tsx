'use client';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const skills = [
  'GHL sub-account setup',
  'Funnel building',
  'CRM configuration',
  'Pipeline automation',
  'SMS/Email sequences',
  'Reputation management',
  'White-label setup',
  'Snapshot creation',
];

const whatYouGet = [
  { icon: 'fa-solid fa-rocket', title: 'GHL Built to Scale', desc: 'Our experts don\'t just click through GHL — they architect systems that automate your sales and marketing pipeline end to end.' },
  { icon: 'fa-solid fa-bolt', title: 'Onboarded in 48 Hours', desc: 'We match you with a vetted GHL expert fast. Whether you\'re setting up from scratch or migrating clients, they hit the ground running.' },
  { icon: 'fa-solid fa-sitemap', title: 'Full Platform Mastery', desc: 'From white-label setup to snapshot creation and complex automations — our experts cover every corner of GoHighLevel.' },
];

const engagements = [
  { title: 'Part-Time', hours: '20 hrs/week', desc: 'Ideal for ongoing sub-account management, funnel tweaks, or automation maintenance for growing agencies.', price: 'From $900/mo' },
  { title: 'Full-Time', hours: '40 hrs/week', desc: 'A dedicated GHL expert embedded in your team — perfect for agencies onboarding multiple clients or building complex SaaS snapshots.', price: 'From $1,600/mo' },
  { title: 'Project-Based', hours: 'Fixed scope', desc: 'Need a full GHL setup, snapshot, or migration completed? We scope and deliver it.', price: 'Custom quote' },
];

const whyISM = [
  { icon: 'fa-solid fa-user-check', title: 'Certified & Experienced', desc: 'Our GHL experts have worked inside agencies and SaaS businesses — they understand the platform and the business model behind it.' },
  { icon: 'fa-solid fa-rotate', title: 'Replacement Guarantee', desc: 'If the expert isn\'t the right fit, we replace them within 5 business days at no cost.' },
  { icon: 'fa-solid fa-diagram-project', title: 'Systems-Thinking Experts', desc: 'They don\'t just build funnels — they build automated growth systems that run while you sleep.' },
  { icon: 'fa-solid fa-comments', title: 'Agency-Ready Communication', desc: 'Our experts understand client-facing work and deliver professional, white-label-ready outputs.' },
];

const steps = [
  { num: '01', title: 'Post Your Brief', desc: 'Share your GHL goals, agency structure, and what needs to be built.' },
  { num: '02', title: 'Interview Candidates', desc: 'We shortlist 2-3 vetted GHL experts suited to your use case.' },
  { num: '03', title: 'Start Working', desc: 'Your expert begins building immediately with full access to your GHL account.' },
  { num: '04', title: 'Deliver Results', desc: 'Review systems, approve automations, and launch with confidence.' },
];

export default function HireGoHighLevelExpert() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--color-bg-soft)', borderBottom: '1px solid var(--color-border)', padding: '12px 0' }}>
        <div className="ism-container">
          <p style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)', margin: 0 }}>
            <a href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>›</span>
            <a href="/hire" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Hire a Team</a>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>›</span>
            GoHighLevel Expert
          </p>
        </div>
      </div>

      <section style={{ background: 'var(--color-bg-soft)', padding: '88px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0%', left: '2%', width: 380, height: 380, background: 'radial-gradient(circle,rgba(255,176,0,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
            <i className="fa-solid fa-gears" style={{ fontSize: 12, color: 'var(--color-primary)' }} />
            <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Hire a Team</span>
          </div>
          <h1 style={{ maxWidth: 780, marginBottom: 24 }}>Hire a GoHighLevel Expert — Build, Automate, and Scale Your GHL</h1>
          <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 620, marginBottom: 40 }}>
            Get a dedicated GHL expert from Isuremedia who can set up sub-accounts, build funnels, automate pipelines, and create white-label snapshots — ready to start in 48 hours.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
              Hire Now <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
            </a>
            <a href="#how-it-works" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: '#fff', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ism-blue-50)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = ''; }}>
              See How It Works
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="ism-container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ marginBottom: 16 }}>What You Get When You Hire From ISM</h2>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', maxWidth: 560, margin: '0 auto' }}>GHL expertise for agencies and SaaS businesses that want to scale.</p>
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

      <section style={{ background: 'var(--color-bg-soft)', padding: '80px 0' }}>
        <div className="ism-container">
          <div className="skills-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: 16 }}>Skills & Expertise</h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 32 }}>
                From initial sub-account setup to advanced snapshot creation and white-label configuration — our GHL experts have done it all. For agencies, SaaS operators, and service businesses.
              </p>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Discuss Your GHL Project <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
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

      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div className="ism-container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ marginBottom: 16 }}>Engagement Models</h2>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', maxWidth: 500, margin: '0 auto' }}>GHL support at the level your agency needs right now.</p>
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

      <section style={{ background: 'var(--color-bg-soft)', padding: '80px 0' }}>
        <div className="ism-container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ marginBottom: 16 }}>Why Hire From Isuremedia?</h2>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', maxWidth: 520, margin: '0 auto' }}>We are the GHL agency behind the agencies.</p>
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

      <section id="how-it-works" style={{ background: '#fff', padding: '80px 0' }}>
        <div className="ism-container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ marginBottom: 16 }}>How the Process Works</h2>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', maxWidth: 480, margin: '0 auto' }}>From brief to live GHL systems in as little as 48 hours.</p>
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
