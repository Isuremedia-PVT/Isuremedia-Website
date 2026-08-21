'use client';

import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';


const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const INDUSTRIES = [
  { icon: 'fa-solid fa-wrench',            tag: 'Home Services',   title: 'HVAC & Home Services',        desc: 'Local SEO, Google Ads, and automated follow-up so every call turns into a booked job.', href: '/contact', img: '/industries/HVAC.webp' },
  { icon: 'fa-solid fa-cart-shopping',      tag: 'Online Retail',  title: 'E-Commerce',                  desc: 'We handle SEO, paid ads, email, and creative together so your store keeps running even when one channel dips.', href: '/contact', img: '/industries/ecommerce.webp' },
  { icon: 'fa-solid fa-microchip',          tag: 'Software',       title: 'SaaS & Tech',                 desc: 'Content, LinkedIn Ads, and nurture sequences built to fill your pipeline with qualified demos.', href: '/contact', img: '/industries/saas-tech.webp' },
  { icon: 'fa-solid fa-bullhorn',           tag: 'Agency Partners',title: 'Marketing Agencies',          desc: 'White-label fulfillment under your brand, NDA-protected, deadline-reliable, and built to scale with you.', href: '/contact', img: '/industries/marketing-agencies.webp' },
  { icon: 'fa-solid fa-house',              tag: 'Property',       title: 'Real Estate',                 desc: 'Local SEO, Google Ads, and CRM automation that keep your pipeline full of ready buyers and sellers.', href: '/contact', img: '/industries/real-estate.webp' },
  { icon: 'fa-solid fa-scale-balanced',     tag: 'Legal',          title: 'Law Firms & Legal Services',  desc: 'Local SEO and a steady flow of reviews that build trust before a prospective client ever calls.', href: '/contact', img: '/industries/law-firms.webp' },
  { icon: 'fa-solid fa-stethoscope',        tag: 'Healthcare',     title: 'Healthcare & Medical Clinics',desc: 'Patient acquisition and appointment automation built around trust-first, compliance-conscious marketing.', href: '/contact', img: '/industries/health-wellness.webp' },
  { icon: 'fa-solid fa-tooth',              tag: 'Dental',         title: 'Dental Practices',            desc: 'Local SEO and review generation that keep new-patient chairs filled every single week.', href: '/contact', img: '/industries/Dental Practices.webp' },
  { icon: 'fa-solid fa-spa',                tag: 'Aesthetics',     title: 'Med Spas & Aesthetics',       desc: 'Social content and paid ads built to sell the result, not just the treatment menu.', href: '/contact', img: '/industries/Med Spas & Aesthetics.webp' },
  { icon: 'fa-solid fa-hammer',             tag: 'Renovation',     title: 'Home Renovation & Remodeling',desc: 'Before-and-after content and local ads that turn browsers into signed remodeling contracts.', href: '/contact', img: '/industries/Home Renovation &Remodeling.webp' },
  { icon: 'fa-solid fa-house-chimney',      tag: 'Roofing',        title: 'Roofing Contractors',         desc: 'Storm-response ad campaigns and local SEO that keep the phone ringing all season long.', href: '/contact', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=75' },
  { icon: 'fa-solid fa-faucet-drip',        tag: 'Plumbing',       title: 'Plumbing Services',           desc: 'Emergency-ready Google Ads and automated follow-up so no midnight call goes unanswered.', href: '/contact', img: '/industries/plumbing.webp' },
  { icon: 'fa-solid fa-bolt',               tag: 'Electrical',     title: 'Electrical Contractors',      desc: 'Local SEO and lead routing built for the jobs that come in needing same-day service.', href: '/contact', img: '/industries/-Electrical Contractors.webp' },
  { icon: 'fa-solid fa-seedling',           tag: 'Landscaping',    title: 'Landscaping & Lawn Care',     desc: 'Seasonal campaigns and route-based local SEO that keep your crews booked all year.', href: '/contact', img: '/industries/landscaping &lawncare_.webp' },
  { icon: 'fa-solid fa-bug',                tag: 'Pest Control',   title: 'Pest Control',                desc: 'Recurring-service marketing built around renewals, not just one-time treatment calls.', href: '/contact', img: '/industries/Pest control.webp' },
  { icon: 'fa-solid fa-dumbbell',           tag: 'Fitness',        title: 'Fitness Studios & Gyms',      desc: 'Membership funnels and local ads built to fill classes and keep churn low.', href: '/contact', img: '/industries/fittness gym.webp' },
  { icon: 'fa-solid fa-user-doctor',        tag: 'Wellness',       title: 'Chiropractic & Physical Therapy', desc: 'Local SEO and automated recall campaigns that keep patients coming back for their next visit.', href: '/contact', img: '/industries/Chiropractic & PhysicalTherapy.webp' },
  { icon: 'fa-solid fa-paw',                tag: 'Veterinary',     title: 'Veterinary Clinics',          desc: 'Local visibility and appointment reminders that keep your exam rooms full every week.', href: '/contact', img: '/industries/Veterinary Clinics.webp' },
  { icon: 'fa-solid fa-utensils',           tag: 'Hospitality',    title: 'Restaurants & Cafes',         desc: 'Social content and local SEO that turn nearby searches into filled tables.', href: '/contact', img: '/industries/restaurants-hospitality.webp' },
  { icon: 'fa-solid fa-bed',                tag: 'Hospitality',    title: 'Hotels & Hospitality',        desc: 'Paid media and content built to win direct bookings away from the big travel platforms.', href: '/contact', img: '/industries/-Hotels & Hospitality.webp' },
  { icon: 'fa-solid fa-scissors',           tag: 'Beauty',         title: 'Salons & Spas',               desc: 'Social content and booking automation that keep your chairs filled week after week.', href: '/contact', img: '/industries/Salons and spa.webp' },
  { icon: 'fa-solid fa-car',                tag: 'Automotive',     title: 'Auto Repair & Dealerships',   desc: 'Local SEO and service reminders that bring drivers back before the next big repair.', href: '/contact', img: '/industries/Auto Repair & Dealerships.webp' },
  { icon: 'fa-solid fa-truck',              tag: 'Moving',         title: 'Moving & Storage Companies',  desc: 'Seasonal ad campaigns and local SEO built around the exact weeks people are searching.', href: '/contact', img: '/industries/Moving & Storage Companies.webp' },
  { icon: 'fa-solid fa-shield-halved',      tag: 'Insurance',      title: 'Insurance Agencies',          desc: 'Lead-gen funnels and nurture sequences built for long consideration cycles and renewals.', href: '/contact', img: '/industries/-Insurance Agencies.webp' },
  { icon: 'fa-solid fa-chart-line',         tag: 'Financial',      title: 'Financial Advisors',          desc: 'Trust-first content and lead-gen funnels built for a compliance-conscious industry.', href: '/contact', img: '/industries/Financial Advisors.webp' },
  { icon: 'fa-solid fa-calculator',         tag: 'Accounting',     title: 'Accounting & Bookkeeping',    desc: 'Seasonal campaigns and referral-driven SEO built around your busiest filing months.', href: '/contact', img: '/industries/Accounting & Bookkeeping.webp' },
  { icon: 'fa-solid fa-store',              tag: 'Franchise',      title: 'Franchises & Multi-Location', desc: 'Multi-location SEO and centralized reporting that scale consistently across every site.', href: '/contact', img: '/industries/Franchises & Multi-Location.webp' },
  { icon: 'fa-solid fa-graduation-cap',     tag: 'Education',      title: 'Education & Online Courses',  desc: 'Content and funnels built to turn curious visitors into enrolled students.', href: '/contact', img: '/industries/education.webp' },
  { icon: 'fa-solid fa-hand-holding-heart', tag: 'Non-Profit',     title: 'Non-Profits & NGOs',          desc: 'Storytelling-led campaigns built to grow donors and volunteers, not just page views.', href: '/contact', img: '/industries/Ngos.webp' },
  { icon: 'fa-solid fa-champagne-glasses',  tag: 'Events',         title: 'Event Planning & Venues',     desc: 'Visual-first marketing and local SEO that keep your calendar booked further out.', href: '/contact', img: '/industries/Event Planning & Venues.webp' },
  { icon: 'fa-solid fa-broom',              tag: 'Cleaning',       title: 'Cleaning Services',           desc: 'Recurring-service funnels and local SEO built around trust and reliability.', href: '/contact', img: '/industries/Cleaning.webp' },
  { icon: 'fa-solid fa-solar-panel',        tag: 'Solar',          title: 'Solar & Renewable Energy',    desc: 'Lead-gen campaigns built for a long sales cycle and a high-consideration purchase.', href: '/contact', img: '/industries/Solar & Renewable Energy.webp' },
  { icon: 'fa-solid fa-helmet-safety',      tag: 'Construction',   title: 'Construction & Contractors',  desc: 'Portfolio-led content and local SEO that win the bigger jobs, not just the small ones.', href: '/contact', img: '/industries/Construction & Contractors.webp' },
  { icon: 'fa-solid fa-chalkboard-user',    tag: 'Coaching',       title: 'Coaches & Consultants',       desc: 'Personal-brand content and funnels built to turn followers into paying clients.', href: '/contact', img: '/industries/coaches-consultants.webp' },
  { icon: 'fa-solid fa-bag-shopping',       tag: 'Retail',         title: 'Retail Stores',               desc: 'Local SEO and social content that bring foot traffic back into your store.', href: '/contact', img: '/industries/Retail Store.webp' },
];

const WHY = [
  {
    icon: 'fa-solid fa-building',
    title: 'Industry Expertise',
    desc: 'We have worked in your sector long enough to know what Google punishes, what converts, and what actually moves the needle for your type of business.',
  },
  {
    icon: 'fa-solid fa-book-open',
    title: 'Proven Playbooks',
    desc: 'Every industry engagement starts from a battle-tested playbook refined across hundreds of client campaigns, not a blank-slate guess.',
  },
  {
    icon: 'fa-solid fa-user-tie',
    title: 'Dedicated Account Managers',
    desc: 'One point of contact who understands your industry, your goals, and your account inside out. Available, responsive, and accountable.',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="ind-hero-section" style={{ background: 'var(--color-bg-soft)', padding: '96px 0 110px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.14) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.10) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div className="ism-container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="ind-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center', position: 'relative', zIndex: 1 }}>

              {/* LEFT */}
              <div>
                <h1 style={{ fontFamily: J, fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.08, marginBottom: 20 }}>
                  Digital Marketing for <span style={{ color: 'var(--color-primary)' }}>Every Industry</span>
                </h1>
                <p style={{ fontFamily: I, fontSize: 18, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 36, maxWidth: 520 }}>
                  We specialise in the channels and strategies that move the needle in your sector. Browse your industry below to see exactly how we grow businesses like yours.
                </p>
                <div className="ind-hero-btns" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Get Free Strategy Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </a>
                  <a href="#industries-grid" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget).style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget).style.color = 'var(--color-primary)'; }}>
                    Browse Industries
                  </a>
                </div>
              </div>

              {/* RIGHT, image */}
              <div className="ind-hero-img-wrap" style={{ position: 'relative' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/banner/industry served.webp"
                    alt="Isuremedia team working across industries"
                    style={{ width: '100%', height: 420, objectFit: 'contain', display: 'block' }}
                    className="ind-hero-img"
                  />
                </div>
                <div className="ind-float-badge" style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', borderRadius: 14, padding: '16px 22px', boxShadow: '0 12px 32px rgba(0,35,83,.14)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-layer-group" style={{ color: 'var(--color-primary)', fontSize: 17 }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: J, fontSize: 20, fontWeight: 900, color: 'var(--color-navy)', lineHeight: 1 }}>35+</div>
                    <div style={{ fontFamily: I, fontSize: 11.5, color: 'var(--color-text-muted)' }}>Industries Served</div>
                  </div>
                </div>
              </div>

            </div>


          </div>

          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 70, zIndex: 1, pointerEvents: 'none' }}>
            <path d="M0,50 C360,110 1080,-10 1440,50 L1440,100 L0,100 Z" fill="#fff" />
          </svg>
        </section>

        {/* ── INDUSTRIES GRID ── */}
        <section id="industries-grid" className="ind-grid-section" style={{ padding: '96px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: J, fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>
                We Know Your Industry
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 600, margin: '0 auto' }}>
                35+ industries and counting. Find yours below, or reach out if you don&apos;t see it listed.
              </p>
            </div>
            <div className="ind-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
              {INDUSTRIES.map((ind, i) => (
                <a key={i} href={ind.href} className="ind-card" style={{ position: 'relative', display: 'block', height: 420, borderRadius: 24, overflow: 'hidden', textDecoration: 'none', boxShadow: '0 10px 30px rgba(0,35,83,.10)', transition: 'transform .25s, box-shadow .25s' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 22px 48px rgba(0,35,83,.20)'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = '0 10px 30px rgba(0,35,83,.10)'; }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img loading="lazy" src={ind.img} alt={ind.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,10,30,.92) 0%, rgba(0,10,30,.55) 42%, rgba(0,10,30,.05) 72%, transparent 100%)' }} />

                  <div style={{ position: 'absolute', top: 20, left: 20, right: 20, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: J, fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,.20)', backdropFilter: 'blur(6px)', borderRadius: 100, padding: '7px 16px' }}>{ind.tag}</span>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,.20)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={ind.icon} style={{ fontSize: 15, color: '#fff' }} />
                    </div>
                  </div>

                  <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24 }}>
                    <div style={{ width: 28, height: 3, background: 'var(--ism-amber)', borderRadius: 2, marginBottom: 14 }} />
                    <h3 style={{ fontFamily: J, fontSize: 21, fontWeight: 800, color: '#fff', letterSpacing: '-0.3px', margin: 0 }}>{ind.title}</h3>
                    <p className="ind-desc" style={{ fontFamily: I, fontSize: 13.5, color: 'rgba(255,255,255,.82)', lineHeight: 1.6, margin: 0, maxHeight: 0, opacity: 0, overflow: 'hidden', transition: 'max-height .3s ease, opacity .3s ease, margin-top .3s ease' }}>{ind.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <style>{`
            .ind-card:hover .ind-desc { max-height: 100px !important; opacity: 1 !important; margin-top: 10px !important; }
            @media(max-width:1024px){.ind-grid{grid-template-columns:repeat(2,1fr)!important;}}
            @media(max-width:600px){.ind-grid{grid-template-columns:1fr!important;} .ind-card{height:380px!important;}}
          `}</style>
        </section>

        {/* ── WHY ISUREMEDIA ── */}
        <section className="ind-why-section" style={{ padding: '104px 0', background: '#fff' }}>
          <div className="ism-container">
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontFamily: J, fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>
                Sector Knowledge That Makes the Difference
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
                Generic marketing burns budget. Industry-specific strategy compounds results.
              </p>
            </div>
            <div className="ind-why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {WHY.map((w, i) => (
                <div key={i} style={{ background: 'var(--color-bg-soft)', borderRadius: 16, border: '1px solid var(--color-border)', padding: '40px 32px', textAlign: 'center', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 6px 20px rgba(255,176,0,.30)' }}>
                    <i className={w.icon} style={{ fontSize: 22, color: 'var(--color-navy)' }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 18, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 14 }}>{w.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:860px){.ind-why-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:540px){.ind-why-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
      <style>{`
        /* ── Hero ── */
        @media (max-width: 900px) {
          .ind-hero-section { padding: 56px 0 100px !important; }
          .ind-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .ind-hero-img { height: 280px !important; }
        }
        @media (max-width: 540px) {
          .ind-hero-section { padding: 40px 0 110px !important; }
          .ind-hero-section svg { height: 38px !important; }
          .ind-hero-btns { flex-direction: column !important; align-items: stretch !important; gap: 12px !important; }
          .ind-hero-btns a { width: 100% !important; text-align: center !important; justify-content: center !important; box-sizing: border-box !important; }
          .ind-hero-img { height: 200px !important; }
          .ind-float-badge { bottom: 12px !important; left: 12px !important; padding: 12px 16px !important; }
        }
        /* ── Grid section ── */
        @media (max-width: 900px) {
          .ind-grid-section { padding: 64px 0 !important; }
          .ind-why-section { padding: 64px 0 !important; }
        }
        @media (max-width: 540px) {
          .ind-grid-section { padding: 48px 0 !important; }
          .ind-why-section { padding: 48px 0 !important; }
        }
      `}</style>
    </>
  );
}
