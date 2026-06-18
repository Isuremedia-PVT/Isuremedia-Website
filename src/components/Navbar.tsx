'use client';

import { useState, useRef, useEffect } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ─── Dropdown data ─── */
const companyLinks = [
  { icon: 'fa-solid fa-circle-info',  label: 'About Us',      href: '/about'  },
  { icon: 'fa-solid fa-medal',        label: 'Certifications', href: '#'       },
  { icon: 'fa-solid fa-briefcase',    label: 'Careers',        href: '#'       },
  { icon: 'fa-solid fa-handshake',    label: 'Affiliates',     href: '#'       },
];

const serviceCategories = [
  {
    label: 'Websites & Funnels', icon: 'fa-solid fa-globe',
    items: ['Business Websites', 'Landing Pages', 'Sales Funnels', 'GoHighLevel Builds', 'Web Applications', 'CRO & Optimisation'],
  },
  {
    label: 'SEO', icon: 'fa-solid fa-magnifying-glass',
    items: ['Technical SEO', 'On-Page SEO', 'Local SEO', 'Link Building', 'AEO & AI Overviews', 'Content Strategy'],
  },
  {
    label: 'PPC / Paid Ads', icon: 'fa-solid fa-chart-bar',
    items: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'YouTube Ads', 'Retargeting', 'Conversion Tracking'],
  },
  {
    label: 'Brand & Creative', icon: 'fa-solid fa-palette',
    items: ['Content Marketing', 'SEO Blog Writing', 'Graphic Design', 'Video Editing', 'Social Media', 'Brand Identity'],
  },
  {
    label: 'White Label', icon: 'fa-solid fa-tag',
    items: ['White Label SEO', 'White Label PPC', 'White Label Web', 'Branded Reports', 'Agency Dashboards', 'Dedicated Pods'],
  },
  {
    label: 'Automation', icon: 'fa-solid fa-robot',
    items: ['GoHighLevel', 'CRM Setup', 'Lead Nurture', 'Email Automation', 'Appointment Booking', 'HubSpot & Zoho'],
  },
];

const resultCards = [
  {
    label: 'Case Studies',
    stat: '+360%', statLabel: 'Organic Traffic',
    overlay: 'linear-gradient(160deg,rgba(24,64,160,.88) 0%,rgba(30,77,195,.75) 100%)',
    img: 'https://picsum.photos/seed/analytics/400/300',
    icon: 'fa-solid fa-chart-line',
    shape1: '#1E4DC3', shape2: '#FFB000',
  },
  {
    label: 'Client Testimonials',
    stat: '200+', statLabel: 'Happy Clients',
    overlay: 'linear-gradient(160deg,rgba(13,107,78,.88) 0%,rgba(14,155,110,.75) 100%)',
    img: 'https://picsum.photos/seed/team/400/300',
    icon: 'fa-solid fa-star',
    shape1: '#0E9B6E', shape2: '#FFB000',
  },
  {
    label: 'Design Portfolio',
    stat: '500+', statLabel: 'Projects Done',
    overlay: 'linear-gradient(160deg,rgba(47,47,110,.90) 0%,rgba(76,76,200,.78) 100%)',
    img: 'https://picsum.photos/seed/design/400/300',
    icon: 'fa-solid fa-layer-group',
    shape1: '#4C4CC8', shape2: '#FFB000',
  },
  {
    label: 'Industries Served',
    stat: '50+', statLabel: 'Industries',
    overlay: 'linear-gradient(160deg,rgba(160,92,0,.90) 0%,rgba(212,134,10,.78) 100%)',
    img: 'https://picsum.photos/seed/business/400/300',
    icon: 'fa-solid fa-briefcase',
    shape1: '#D4860A', shape2: '#1E4DC3',
  },
  {
    label: 'Video Testimonials',
    stat: '95%', statLabel: 'Satisfaction',
    overlay: 'linear-gradient(160deg,rgba(15,25,65,.92) 0%,rgba(24,64,160,.80) 100%)',
    img: 'https://picsum.photos/seed/camera/400/300',
    icon: 'fa-solid fa-circle-play',
    shape1: '#1840A0', shape2: '#FFB000',
  },
];

const resourceLinks = [
  { icon: 'fa-solid fa-newspaper',   label: 'Blog'   },
  { icon: 'fa-solid fa-book-open',   label: 'Guides' },
];

const whitelabelCategories = [
  {
    heading: 'Core Services',
    items: [
      { icon: 'fa-solid fa-magnifying-glass', label: 'White Label SEO' },
      { icon: 'fa-solid fa-chart-bar',        label: 'White Label PPC' },
      { icon: 'fa-solid fa-globe',            label: 'White Label Web Development' },
      { icon: 'fa-solid fa-share-nodes',      label: 'White Label Social Media Marketing' },
    ],
  },
  {
    heading: 'Content & Creative',
    items: [
      { icon: 'fa-solid fa-pen-nib',          label: 'White Label Content Marketing' },
      { icon: 'fa-solid fa-link',             label: 'White Label Link Building' },
      { icon: 'fa-solid fa-palette',          label: 'White Label Graphic Design' },
      { icon: 'fa-solid fa-video',            label: 'White Label Video Editing' },
    ],
  },
  {
    heading: 'Automation & Reporting',
    items: [
      { icon: 'fa-solid fa-robot',            label: 'White Label GoHighLevel Support' },
      { icon: 'fa-solid fa-chart-pie',        label: 'White Label Reporting & Dashboards' },
      { icon: 'fa-solid fa-users-gear',       label: 'Dedicated Agency Pods' },
      { icon: 'fa-solid fa-envelope',         label: 'White Label Email Marketing' },
    ],
  },
];

const navItems = [
  { label: 'Company',     type: 'company'   },
  { label: 'Services',    type: 'services'  },
  { label: 'Results',     type: 'work'      },
  { label: 'White Label', type: 'whitelabel' },
  { label: 'Hire a Team', type: 'link'      },
  { label: 'Resources',   type: 'resources' },
  { label: 'Contact',     type: 'contact'   },
];

/* Reusable CTA card shown in the right panel of each dropdown */
function CtaCard({ heading, sub, btnLabel }: { heading: string; sub: string; btnLabel: string }) {
  return (
    <div style={{ background: 'linear-gradient(135deg,#EFF4FF 0%,#E0E9FF 100%)', borderRadius: 14, padding: '24px 20px', border: '1px solid #C7D7FD', display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i className="fa-solid fa-rocket" style={{ fontSize: 16, color: '#fff' }} />
      </div>
      <p style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-text-heading)', lineHeight: 1.35, margin: 0 }}>{heading}</p>
      <p style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.60, margin: 0 }}>{sub}</p>
      <a href="#cta"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 18px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 600, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', transition: 'all .15s', alignSelf: 'flex-start', marginTop: 4 }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
      >
        {btnLabel} <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
      </a>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu]           = useState<string | null>(null);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openNav  = (key: string) => { if (timer.current) clearTimeout(timer.current); setOpenMenu(key); };
  const closeNav = ()            => { timer.current = setTimeout(() => setOpenMenu(null), 130); };

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  /* ── Shared dropdown wrapper ── */
  const Dropdown = ({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) => (
    <div
      onMouseEnter={() => { if (timer.current) clearTimeout(timer.current); }}
      onMouseLeave={closeNav}
      style={{ position: 'fixed', top: 104, left: '50%', transform: 'translateX(-50%)', width: wide ? 860 : 640, background: '#fff', borderRadius: 16, border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(0,0,0,.12)', padding: '28px 28px 24px', zIndex: 300, display: 'grid', gridTemplateColumns: wide ? '1fr 1fr 1fr auto' : '1fr auto', gap: 0 }}
    >
      {children}
    </div>
  );

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 200, background: '#fff', borderBottom: '1px solid #E2E8F0', boxShadow: '0 1px 10px rgba(0,0,0,.05)' }}>

      {/* ── Top utility bar ── */}
      <div className="nav-top-bar" style={{ background: 'linear-gradient(130deg, #1840A0 0%, #1E4DC3 40%, #2F5FE8 75%, #3B6CF5 100%)', padding: '7px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Left — social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {[
              { icon: 'fa-brands fa-linkedin-in',  href: '#' },
              { icon: 'fa-brands fa-facebook-f',   href: '#' },
              { icon: 'fa-brands fa-instagram',    href: '#' },
              { icon: 'fa-brands fa-x-twitter',    href: '#' },
            ].map(s => (
              <a key={s.icon} href={s.href}
                style={{ color: '#fff', fontSize: 12, textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ism-amber)')}
                onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>

          {/* Right — phone, email, CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <a href="tel:+917300007650" style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: I, fontSize: 12, fontWeight: 500, color: '#fff', textDecoration: 'none', transition: 'color .15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ism-amber)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
            >
              <i className="fa-solid fa-phone" style={{ fontSize: 10, color: 'var(--ism-amber)' }} />
              +91-73-0000-7650
            </a>
            <a href="mailto:hello@isuremedia.com" style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: I, fontSize: 12, fontWeight: 500, color: '#fff', textDecoration: 'none', transition: 'color .15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ism-amber)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
            >
              <i className="fa-solid fa-envelope" style={{ fontSize: 10, color: 'var(--ism-amber)' }} />
              hello@isuremedia.com
            </a>
            <a href="#cta"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 14px', borderRadius: 6, fontFamily: J, fontSize: 11, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.03em', textTransform: 'uppercase', transition: 'all .15s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; }}
            >
              Request a Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 9 }} />
            </a>
          </div>

        </div>
      </div>

      {/* ── Main nav row ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 62 }}>

        {/* ── Logo ── */}
        <a href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Isuremedia" style={{ height: 52, width: 'auto', display: 'block' }} />
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex" style={{ alignItems: 'center', gap: 2 }}>
          {navItems.map(item => {
            const isOpen = openMenu === item.type;
            const hasDropdown = item.type !== 'link' && item.type !== 'contact';
            return (
              <div key={item.label} style={{ position: 'relative' }}
                onMouseEnter={() => hasDropdown ? openNav(item.type) : undefined}
                onMouseLeave={() => hasDropdown ? closeNav() : undefined}
              >
                <a href={item.type === 'contact' ? '/contact' : item.type === 'link' ? '#' : undefined}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: I, fontSize: 14, fontWeight: 500, color: isOpen ? 'var(--color-primary)' : 'var(--color-text-body)', textDecoration: 'none', padding: '8px 13px', borderRadius: 7, transition: 'all .15s', whiteSpace: 'nowrap', background: isOpen ? 'var(--ism-blue-50,#EFF4FF)' : 'transparent', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-primary)'; e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)'; }}
                  onMouseLeave={e => { if (!isOpen) { e.currentTarget.style.color = 'var(--color-text-body)'; e.currentTarget.style.background = 'transparent'; } }}
                >
                  {item.label}
                  {hasDropdown && (
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transform: isOpen ? 'rotate(180deg)' : '', transition: 'transform .2s' }}>
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>

                {/* Company dropdown */}
                {isOpen && item.type === 'company' && (
                  <Dropdown>
                    <div style={{ paddingRight: 24, borderRight: '1px solid #E2E8F0' }}>
                      <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 14 }}>Company</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {companyLinks.map(l => (
                          <a key={l.label} href={l.href}
                            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 10, textDecoration: 'none', transition: 'background .15s' }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          >
                            <div style={{ width: 32, height: 32, borderRadius: 8, background: '#F1F5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <i className={l.icon} style={{ fontSize: 13, color: 'var(--color-primary)' }} />
                            </div>
                            <span style={{ fontFamily: I, fontSize: 14, fontWeight: 500, color: 'var(--color-text-heading)' }}>{l.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div style={{ paddingLeft: 24, minWidth: 220 }}>
                      <CtaCard heading="Scale Your Business with Isuremedia" sub="Book a free strategy call with our team." btnLabel="Book Free Call" />
                    </div>
                  </Dropdown>
                )}

                {/* Services dropdown */}
                {isOpen && item.type === 'services' && (
                  <div
                    onMouseEnter={() => { if (timer.current) clearTimeout(timer.current); }}
                    onMouseLeave={closeNav}
                    style={{ position: 'fixed', top: 104, left: '50%', transform: 'translateX(-50%)', width: 1020, background: '#fff', borderRadius: 16, border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(0,0,0,.12)', zIndex: 300, overflow: 'hidden' }}
                  >
                    {/* Icon tab row */}
                    <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', background: '#FAFBFF' }}>
                      {serviceCategories.map((cat, i) => {
                        const isTab = activeServiceTab === i;
                        return (
                          <div key={cat.label} onMouseEnter={() => setActiveServiceTab(i)}
                            style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', cursor: 'pointer', borderBottom: isTab ? '2px solid var(--color-primary)' : '2px solid transparent', background: isTab ? '#EFF4FF' : 'transparent', transition: 'all .15s' }}
                          >
                            <div style={{ width: 34, height: 34, borderRadius: 8, background: isTab ? 'var(--color-primary)' : '#F1F5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .15s' }}>
                              <i className={cat.icon} style={{ fontSize: 14, color: isTab ? '#fff' : 'var(--color-primary)' }} />
                            </div>
                            <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: isTab ? 'var(--color-primary)' : 'var(--color-text-muted)', lineHeight: 1.3, transition: 'color .15s' }}>{cat.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Content area */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', padding: '24px 28px 28px', gap: 24 }}>
                      {/* Links grid — 3 cols */}
                      <div>
                        <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 14 }}>{serviceCategories[activeServiceTab].label}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '4px 12px' }}>
                          {serviceCategories[activeServiceTab].items.map(s => (
                            <a key={s} href="#" className="nav-svc-link"
                              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', borderRadius: 8, textDecoration: 'none', transition: 'background .15s' }}
                            >
                              <i className="fa-solid fa-arrow-right nav-svc-icon" style={{ fontSize: 9, flexShrink: 0 }} />
                              <span className="nav-svc-text" style={{ fontFamily: I, fontSize: 13, fontWeight: 500 }}>{s}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                      {/* CTA card */}
                      <div>
                        <CtaCard heading="Not sure which service fits?" sub="Talk to our team and get a custom plan built for your business." btnLabel="Get Free Audit" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Results dropdown */}
                {isOpen && item.type === 'work' && (
                  <div
                    onMouseEnter={() => { if (timer.current) clearTimeout(timer.current); }}
                    onMouseLeave={closeNav}
                    style={{ position: 'fixed', top: 104, left: '50%', transform: 'translateX(-50%)', width: 1020, background: '#fff', borderRadius: 16, border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(0,0,0,.12)', zIndex: 300, padding: '24px 24px 28px' }}
                  >
                    <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 16 }}>Our Results</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10 }}>
                      {resultCards.map(card => (
                        <a key={card.label} href="#"
                          style={{ textDecoration: 'none', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 180, position: 'relative', transition: 'transform .18s, box-shadow .18s', cursor: 'pointer' }}
                          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.30)'; }}
                          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                        >
                          {/* BG image */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={card.img} alt="" aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                          {/* Color overlay */}
                          <div style={{ position: 'absolute', inset: 0, background: card.overlay }} />
                          {/* Decorative shapes */}
                          <div style={{ position: 'absolute', bottom: -22, right: -22, width: 80, height: 80, borderRadius: '50%', background: card.shape1, opacity: 0.28 }} />
                          <div style={{ position: 'absolute', top: -12, right: 28, width: 44, height: 44, borderRadius: '50%', background: card.shape2, opacity: 0.32 }} />
                          {/* Content */}
                          <div style={{ position: 'relative', zIndex: 2, padding: '22px 16px 18px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                            {/* Icon + arrow row */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className={card.icon} style={{ fontSize: 15, color: '#fff' }} />
                              </div>
                              <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fa-solid fa-arrow-right" style={{ fontSize: 8, color: '#fff' }} />
                              </div>
                            </div>
                            {/* Label + stat */}
                            <div>
                              <div style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '.04em', lineHeight: 1.3, marginBottom: 6 }}>{card.label}</div>
                              <div style={{ fontFamily: J, fontSize: 20, fontWeight: 900, color: 'var(--ism-amber)', lineHeight: 1 }}>{card.stat}</div>
                              <div style={{ fontFamily: I, fontSize: 10, color: 'rgba(255,255,255,.65)', marginTop: 2 }}>{card.statLabel}</div>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* White Label dropdown */}
                {isOpen && item.type === 'whitelabel' && (
                  <div
                    onMouseEnter={() => { if (timer.current) clearTimeout(timer.current); }}
                    onMouseLeave={closeNav}
                    style={{ position: 'fixed', top: 104, left: '50%', transform: 'translateX(-50%)', width: 900, background: '#fff', borderRadius: 16, border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(0,0,0,.12)', zIndex: 300, padding: '24px 28px 28px' }}
                  >
                    <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 20 }}>White Label Services</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 220px', gap: 24 }}>

                      {whitelabelCategories.map(cat => (
                        <div key={cat.heading}>
                          <p style={{ fontFamily: J, fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 10 }}>{cat.heading}</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {cat.items.map(l => (
                              <a key={l.label} href="#"
                                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, textDecoration: 'none', transition: 'background .15s' }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                              >
                                <div style={{ width: 28, height: 28, borderRadius: 7, background: '#F1F5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                  <i className={l.icon} style={{ fontSize: 11, color: 'var(--color-primary)' }} />
                                </div>
                                <span style={{ fontFamily: I, fontSize: 13, fontWeight: 500, color: 'var(--color-text-heading)', lineHeight: 1.3 }}>{l.label}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* CTA card */}
                      <div>
                        <CtaCard
                          heading="Scale Your Agency Without Hiring"
                          sub="Our 40+ in house specialists handle delivery under your brand."
                          btnLabel="Get Started"
                        />
                      </div>

                    </div>
                  </div>
                )}

                {/* Resources dropdown */}
                {isOpen && item.type === 'resources' && (
                  <Dropdown>
                    <div style={{ paddingRight: 24, borderRight: '1px solid #E2E8F0' }}>
                      <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 14 }}>Resources</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {resourceLinks.map(l => (
                          <a key={l.label} href="#"
                            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 10, textDecoration: 'none', transition: 'background .15s' }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          >
                            <div style={{ width: 32, height: 32, borderRadius: 8, background: '#F1F5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <i className={l.icon} style={{ fontSize: 13, color: 'var(--color-primary)' }} />
                            </div>
                            <span style={{ fontFamily: I, fontSize: 14, fontWeight: 500, color: 'var(--color-text-heading)' }}>{l.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div style={{ paddingLeft: 24, minWidth: 220 }}>
                      <CtaCard heading="Get Valuable Marketing Insights" sub="Explore our free resources, guides, and tools." btnLabel="Explore Freebies" />
                    </div>
                  </Dropdown>
                )}
              </div>
            );
          })}
        </nav>


        {/* ── Mobile Hamburger ── */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: 'block', width: 22, height: 2, background: 'var(--color-text-body)', borderRadius: 2, transition: 'all .2s',
                transform: mobileOpen ? (i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : '') : '',
                opacity: mobileOpen && i === 1 ? 0 : 1
              }} />
            ))}
          </div>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #E2E8F0', padding: '12px 20px 20px', boxShadow: '0 8px 24px rgba(0,0,0,.08)' }}>
          {navItems.map(item => {
            const hasDropdown = item.type !== 'link' && item.type !== 'contact';
            const isExpanded  = mobileSection === item.type;
            const links = item.type === 'company' ? companyLinks : item.type === 'resources' ? resourceLinks : [];
            const wlLinks = whitelabelCategories.flatMap(c => c.items);

            return (
              <div key={item.label}>
                {hasDropdown ? (
                  <>
                    <button onClick={() => setMobileSection(isExpanded ? null : item.type)}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: I, fontSize: 15, fontWeight: 500, color: 'var(--color-text-body)', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 12px', borderRadius: 8 }}>
                      {item.label}
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transform: isExpanded ? 'rotate(180deg)' : '', transition: 'transform .2s' }}>
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <div style={{ paddingLeft: 14, marginBottom: 4 }}>
                        {item.type === 'services'
                          ? serviceCategories.flatMap(g => g.items).map(s => (
                              <a key={s} href="#" onClick={() => setMobileOpen(false)}
                                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, textDecoration: 'none', fontFamily: I, fontSize: 14, color: 'var(--color-text-body)' }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                              >
                                <i className="fa-solid fa-arrow-right" style={{ fontSize: 9, color: 'var(--color-primary)' }} /> {s}
                              </a>
                            ))
                          : item.type === 'whitelabel'
                          ? wlLinks.map(l => (
                              <a key={l.label} href="#" onClick={() => setMobileOpen(false)}
                                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, textDecoration: 'none', fontFamily: I, fontSize: 14, color: 'var(--color-text-body)' }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                              >
                                <i className={l.icon} style={{ fontSize: 12, color: 'var(--color-primary)' }} /> {l.label}
                              </a>
                            ))
                          : item.type === 'work'
                          ? resultCards.map(c => (
                              <a key={c.label} href="#" onClick={() => setMobileOpen(false)}
                                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, textDecoration: 'none', fontFamily: I, fontSize: 14, color: 'var(--color-text-body)' }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                              >
                                <i className={c.icon} style={{ fontSize: 12, color: 'var(--color-primary)' }} /> {c.label}
                              </a>
                            ))
                          : links.map(l => (
                              <a key={l.label} href="#" onClick={() => setMobileOpen(false)}
                                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, textDecoration: 'none', fontFamily: I, fontSize: 14, color: 'var(--color-text-body)' }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                              >
                                <i className={l.icon} style={{ fontSize: 12, color: 'var(--color-primary)' }} /> {l.label}
                              </a>
                            ))
                        }
                      </div>
                    )}
                  </>
                ) : (
                  <a href={item.type === 'contact' ? '/contact' : '#'} onClick={() => setMobileOpen(false)}
                    style={{ display: 'block', fontFamily: I, fontSize: 15, fontWeight: 500, color: 'var(--color-text-body)', textDecoration: 'none', padding: '10px 12px', borderRadius: 8 }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >{item.label}</a>
                )}
              </div>
            );
          })}

          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="tel:+16465881430"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--ism-amber)', textDecoration: 'none' }}>
              <i className="fa-solid fa-phone" style={{ fontSize: 12 }} /> +1 646-588-1430
            </a>
            <a href="#cta" onClick={() => setMobileOpen(false)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '12px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 600, color: '#fff', background: 'var(--color-primary)', textDecoration: 'none' }}>
              Request a Call →
            </a>
          </div>
        </div>
      )}
      <style>{`
        .nav-svc-icon { color: var(--ism-amber); transition: color .15s; }
        .nav-svc-text { color: var(--color-text-heading); transition: color .15s; }
        .nav-svc-link:hover { background: var(--ism-blue-50, #EFF4FF); }
        .nav-svc-link:hover .nav-svc-icon { color: var(--color-primary) !important; }
        .nav-svc-link:hover .nav-svc-text { color: var(--color-primary) !important; }
        @media (max-width: 768px) {
          .nav-top-bar { display: none !important; }
        }
      `}</style>
    </header>
  );
}
