'use client';

import { useState, useRef, useEffect } from 'react';
import { resultCards } from '@/components/ResultsStrip';
import { PHONE_US, PHONE_US_TEL, EMAIL, EMAIL_HREF } from '@/data/contact';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ─── Dropdown data ─── */
const companyLinks = [
  { icon: 'fa-solid fa-circle-info',  label: 'About Us',   href: '/about'      },
  { icon: 'fa-solid fa-briefcase',    label: 'Careers',    href: '/careers'    },
];

const serviceCategories = [
  {
    label: 'Web Development', icon: 'fa-solid fa-code', mainHref: '/websites-and-funnels',
    items: [
      { label: 'Landing Pages',                         href: '/landing-page-design-services'        },
      { label: 'GoHighLevel Funnels & Automation',      href: '/gohighlevel-developer'  },
      { label: 'ClickFunnels',                           href: '/clickfunnels-development'         },
      { label: 'Business Websites',                      href: '/business-website-design-services'    },
      { label: 'Sales Funnels',                           href: '/sales-funnel-design'        },
      { label: 'Kajabi',                                  href: '/kajabi-website-development'               },
      { label: 'WordPress Development',                   href: '/wordpress-development-services'            },
      { label: 'Shopify Development',                     href: '/shopify-development-services'              },
      { label: 'GoHighLevel Development',                 href: '/gohighlevel-development-services' },
      { label: 'PHP / Laravel Development',               href: '/php-laravel-development'          },
      { label: 'Node.js Development',                     href: '/nodejs-development-services'                 },
      { label: 'Python Development',                      href: '/python-development-services'               },
      { label: 'AI Development',                          href: '/ai-development-services'       },
      { label: 'Wix Development',                         href: '/wix-website-development'                  },
    ],
  },
  {
    label: 'SEO & Organic Growth', icon: 'fa-solid fa-magnifying-glass', mainHref: '/seo-services',
    items: [
      { label: 'Technical SEO',                     href: '/technical-seo' },
      { label: 'On-Page SEO',                       href: '/on-page-seo-services'   },
      { label: 'Local SEO',                         href: '/local-seo-services'     },
      { label: 'Link Building',                     href: '/link-building-service' },
      { label: 'AI SEO',                            href: '/ai-seo-services'        },
    ],
  },
  {
    label: 'PPC / Paid Marketing', icon: 'fa-solid fa-chart-bar', mainHref: '/ppc-marketing-agencies',
    items: [
      { label: 'Google Ads',                         href: '/google-ads-management'              },
      { label: 'Meta Ads (Facebook & Instagram)',    href: '/meta-ads-management'                },
      { label: 'TikTok Ads',                          href: '/tiktok-ads-management'              },
      { label: 'YouTube Ads',                         href: '/youtube-ads-management'             },
    ],
  },
  {
    label: 'Content & Creative', icon: 'fa-solid fa-palette', mainHref: '/content-marketing-and-creative-agency',
    items: [
      { label: 'SEO Blog Writing',                    href: '/seo-content-writing-services'    },
      { label: 'Graphic Design',                       href: '/graphic-design-agency'      },
      { label: 'Ad Creative Design',                   href: '/ad-creative-design-services'  },
      { label: 'Brand Identity & Visual Design',       href: '/brand-identity-design-services'      },
      { label: 'Video Marketing & Editing',            href: '/video-editing-services'     },
    ],
  },
  {
    label: 'White Label', icon: 'fa-solid fa-tag', mainHref: '/white-label-digital-marketing',
    items: [
      { label: 'White-Label SEO',                       href: '/white-label-seo-services'        },
      { label: 'White-Label PPC',                       href: '/white-label-ppc-services'        },
      { label: 'White-Label Web Development',           href: '/white-label-web-design-services' },
      { label: 'White-Label GoHighLevel Support',       href: '/gohighlevel-white-label-support-services' },
      { label: 'Dedicated Agency Pods',                 href: '/dedicated-agency-pods'  },
    ],
  },
  {
    label: 'Marketing Automation', icon: 'fa-solid fa-robot', mainHref: '/marketing-automation-agency',
    items: [
      { label: 'GoHighLevel Setup & Automation',            href: '/gohighlevel-automation-setup'     },
      { label: 'CRM Setup & Management',                    href: '/crm-setup-management'       },
      { label: 'Zapier Workflow Automation',                 href: '/zapier-workflow-automation'          },
      { label: 'Make Automation',                            href: '/make-automation-services' },
      { label: 'n8n Workflow Automation',                    href: '/n8n-workflow-automation'             },
      { label: 'AI Chatbot & Conversation Automation',       href: '/ai-chatbot-automation'      },
      { label: 'Appointment Booking Systems',                href: '/appointment-booking-automation' },
      { label: 'Lead Nurture Workflows',                     href: '/lead-nurture-workflows' },
      { label: 'Sales Pipeline Automation',                  href: '/sales-pipeline-automation' },
      { label: 'Email Marketing',                             href: '/email-marketing-automation' },
      { label: 'API Integration',                             href: '/api-integration-services' },
      { label: 'Zoho',                                        href: '/zoho-automation-setup'            },
    ],
  },
];

const resourceLinks = [
  { icon: 'fa-solid fa-newspaper',  label: 'Blog',       href: 'https://blogs.isuremedia.com/'      },
  { icon: 'fa-solid fa-gift',       label: 'Free Tools', href: 'https://templates.isuremedia.com/' },
];

const whitelabelCategories = [
  {
    heading: 'Services',
    items: [
      { icon: 'fa-solid fa-magnifying-glass', label: 'White-Label SEO',                  href: '/white-label-seo-services'        },
      { icon: 'fa-solid fa-chart-bar',        label: 'White-Label PPC',                  href: '/white-label-ppc-services'        },
      { icon: 'fa-solid fa-globe',            label: 'White-Label Web Development',      href: '/white-label-web-design-services' },
      { icon: 'fa-solid fa-robot',            label: 'White-Label GoHighLevel Support',  href: '/gohighlevel-white-label-support-services' },
      { icon: 'fa-solid fa-users',            label: 'Dedicated Agency Pods',            href: '/dedicated-agency-pods'  },
    ],
  },
];

const hireLinks = [
  { icon: 'fa-brands fa-wordpress',       label: 'Hire a WordPress Developer',        href: '/hire-wordpress-developer'         },
  { icon: 'fa-brands fa-shopify',         label: 'Hire a Shopify Developer',          href: '/hire-shopify-developer'           },
  { icon: 'fa-solid fa-pen-ruler',        label: 'Hire a Web Designer',               href: '/hire-web-designer'                },
  { icon: 'fa-solid fa-magnifying-glass', label: 'Hire an SEO Expert',                href: '/hire-seo-experts'                  },
  { icon: 'fa-solid fa-robot',            label: 'Hire a GoHighLevel Expert',         href: '/hire-gohighlevel-expert'          },
  { icon: 'fa-solid fa-gears',            label: 'Hire a Marketing Automation Expert',href: '/hire-marketing-automation-expert' },
];

const navItems = [
  { label: 'Company',     type: 'company'    },
  { label: 'Services',    type: 'services'   },
  { label: 'Results',     type: 'work'       },
  { label: 'White Label', type: 'whitelabel' },
  { label: 'Hire a Team', type: 'hire'       },
  { label: 'Resources',   type: 'resources'  },
  { label: 'Contact',     type: 'contact'    },
];

/* Reusable CTA card shown in the right panel of each dropdown */
function CtaCard({
  heading,
  sub,
  btnLabel,
  href = '#cta'
}) {
  const isExternal = href.startsWith('http');
  return (
    <div style={{ background: 'linear-gradient(135deg,#EFF4FF 0%,#E0E9FF 100%)', borderRadius: 14, padding: '24px 20px', border: '1px solid #C7D7FD', display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i className="fa-solid fa-rocket" style={{ fontSize: 16, color: '#fff' }} />
      </div>
      <p style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-text-heading)', lineHeight: 1.35, margin: 0 }}>{heading}</p>
      <p style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)', lineHeight: 1.60, margin: 0 }}>{sub}</p>
      <a href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
  const [openMenu, setOpenMenu]           = useState(null);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [mobileServiceCat, setMobileServiceCat] = useState(null);
  const [visible, setVisible]             = useState(true);
  const [scrolled, setScrolled]           = useState(false);
  const timer      = useRef(null);
  const lastScrollY = useRef(0);
  const headerRef  = useRef(null);

  const openNav  = (key) => { if (timer.current) clearTimeout(timer.current); setOpenMenu(key); };
  const closeNav = ()            => { timer.current = setTimeout(() => setOpenMenu(null), 280); };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      if (y < 80) {
        setVisible(true);
      } else {
        setVisible(y < lastScrollY.current);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  /* ── Close the mobile menu on an outside click/tap ── */
  useEffect(() => {
    if (!mobileOpen) return;
    const onOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileOpen(false);
        setMobileSection(null);
        setMobileServiceCat(null);
      }
    };
    document.addEventListener('mousedown', onOutside);
    document.addEventListener('touchstart', onOutside);
    return () => {
      document.removeEventListener('mousedown', onOutside);
      document.removeEventListener('touchstart', onOutside);
    };
  }, [mobileOpen]);

  /* ── Shared dropdown wrapper ── */
  const Dropdown = ({
    children,
    wide = false
  }) => (
    <div
      onMouseEnter={() => { if (timer.current) clearTimeout(timer.current); }}
      onMouseLeave={closeNav}
      style={{ position: 'fixed', top: 104, left: '50%', transform: 'translateX(-50%)', width: wide ? 860 : 640, background: '#fff', borderRadius: 16, border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(0,0,0,.12)', padding: '28px 28px 24px', zIndex: 10000, display: 'grid', gridTemplateColumns: wide ? '1fr 1fr 1fr auto' : '1fr auto', gap: 0 }}
    >
      {children}
    </div>
  );

  return (
    <header ref={headerRef} style={{ position: 'sticky', top: 0, zIndex: 9999, background: '#fff', borderBottom: '1px solid #E2E8F0', boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,.10)' : '0 1px 10px rgba(0,0,0,.05)', transform: visible ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s' }}>

      {/* ── Top utility bar ── */}
      <div className="nav-top-bar" style={{ background: 'linear-gradient(130deg, #1840A0 0%, #1E4DC3 40%, #2F5FE8 75%, #3B6CF5 100%)', padding: '7px 0' }}>
        <div className="ism-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Left, social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {[
              { icon: 'fa-brands fa-linkedin-in',  href: 'https://www.linkedin.com/company/isuremedia/' },
              { icon: 'fa-brands fa-facebook-f',   href: 'https://www.facebook.com/Isuremedia2017/' },
              { icon: 'fa-brands fa-instagram',    href: 'https://www.instagram.com/isuremedia/' },
              { icon: 'fa-brands fa-x-twitter',    href: 'https://x.com/isuremedia_' },
            ].map(s => (
              <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ color: '#fff', fontSize: 12, textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ism-amber)')}
                onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>

          {/* Right, phone, email, CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
            <a href={PHONE_US_TEL} style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: I, fontSize: 12, fontWeight: 500, color: '#fff', textDecoration: 'none', transition: 'color .15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ism-amber)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
            >
              <i className="fa-solid fa-phone" style={{ fontSize: 10, color: 'var(--ism-amber)' }} />
              {PHONE_US}
            </a>
            <a href={EMAIL_HREF} style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: I, fontSize: 12, fontWeight: 500, color: '#fff', textDecoration: 'none', transition: 'color .15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ism-amber)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
            >
              <i className="fa-solid fa-envelope" style={{ fontSize: 10, color: 'var(--ism-amber)' }} />
              {EMAIL}
            </a>
            <a href="/appointment"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 11px', borderRadius: 6, fontFamily: J, fontSize: 10, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.03em', transition: 'all .15s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; }}
            >
              REQUEST A CALL <i className="fa-solid fa-arrow-right" style={{ fontSize: 8 }} />
            </a>
          </div>

        </div>
      </div>

      {/* ── Main nav row ── */}
      <div className="ism-container nav-main-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 62 }}>

        {/* ── Logo ── */}
        <a href="/" className="nav-logo" style={{ textDecoration: 'none', flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/isuremedia-dark.webp" alt="Isuremedia" style={{ height: 40, width: 'auto', display: 'block' }} />
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
                      <CtaCard heading="Scale Your Business with Isuremedia" sub="Book a free strategy call with our team." btnLabel="Book Free Call" href="/appointment" />
                    </div>
                  </Dropdown>
                )}

                {/* Services dropdown */}
                {isOpen && item.type === 'services' && (
                  <div
                    onMouseEnter={() => { if (timer.current) clearTimeout(timer.current); }}
                    onMouseLeave={closeNav}
                    style={{ position: 'fixed', top: 104, left: '50%', transform: 'translateX(-50%)', width: 1020, maxWidth: 'calc(100vw - 32px)', background: '#fff', borderRadius: 16, border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(0,0,0,.12)', zIndex: 10000, overflow: 'hidden' }}
                  >
                    {/* Icon tab row */}
                    <div style={{ display: 'flex', borderBottom: '1px solid #E2E8F0', background: '#FAFBFF' }}>
                      {serviceCategories.map((cat, i) => {
                        const isTab = activeServiceTab === i;
                        return (
                          <a key={cat.label} href={cat.mainHref} onMouseEnter={() => setActiveServiceTab(i)}
                            style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', cursor: 'pointer', borderBottom: isTab ? '2px solid var(--color-primary)' : '2px solid transparent', background: isTab ? '#EFF4FF' : 'transparent', transition: 'all .15s', textDecoration: 'none' }}
                          >
                            <div style={{ width: 34, height: 34, borderRadius: 8, background: isTab ? 'var(--color-primary)' : '#F1F5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all .15s' }}>
                              <i className={cat.icon} style={{ fontSize: 14, color: isTab ? '#fff' : 'var(--color-primary)' }} />
                            </div>
                            <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: isTab ? 'var(--color-primary)' : 'var(--color-text-muted)', lineHeight: 1.3, transition: 'color .15s' }}>{cat.label}</span>
                          </a>
                        );
                      })}
                    </div>

                    {/* Content area */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', padding: '24px 28px 28px', gap: 24 }}>
                      {/* Links grid, 3 cols */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                          <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', margin: 0 }}>{serviceCategories[activeServiceTab].label}</p>
                          <a href={serviceCategories[activeServiceTab].mainHref} style={{ fontFamily: I, fontSize: 12, fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5, transition: 'opacity .15s' }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = '.7')}
                            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                          >View all <i className="fa-solid fa-arrow-right" style={{ fontSize: 9 }} /></a>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '4px 12px' }}>
                          {serviceCategories[activeServiceTab].items.map(s => (
                            <a key={s.label} href={s.href} className="nav-svc-link"
                              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', borderRadius: 8, textDecoration: 'none', transition: 'background .15s' }}
                            >
                              <i className="fa-solid fa-arrow-right nav-svc-icon" style={{ fontSize: 9, flexShrink: 0 }} />
                              <span className="nav-svc-text" style={{ fontFamily: I, fontSize: 13, fontWeight: 500 }}>{s.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                      {/* CTA card */}
                      <div>
                        <CtaCard heading="Not sure which service fits?" sub="Talk to our team and get a custom plan built for your business." btnLabel="Get Started" href="/appointment" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Results dropdown */}
                {isOpen && item.type === 'work' && (
                  <div
                    onMouseEnter={() => { if (timer.current) clearTimeout(timer.current); }}
                    onMouseLeave={closeNav}
                    style={{ position: 'fixed', top: 104, left: '50%', transform: 'translateX(-50%)', width: 1020, maxWidth: 'calc(100vw - 32px)', background: '#fff', borderRadius: 16, border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(0,0,0,.12)', zIndex: 10000, padding: '24px 24px 28px' }}
                  >
                    <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 16 }}>Our Results</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10 }}>
                      {resultCards.map(card => (
                        <a key={card.label} href={card.href}
                          style={{ textDecoration: 'none', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 180, position: 'relative', transition: 'transform .18s, box-shadow .18s', cursor: 'pointer' }}
                          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,.30)'; }}
                          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                        >
                          {/* BG image */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={card.img} alt="" aria-hidden loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
                    style={{ position: 'fixed', top: 104, left: '50%', transform: 'translateX(-50%)', width: 720, maxWidth: 'calc(100vw - 32px)', background: '#fff', borderRadius: 16, border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(0,0,0,.12)', zIndex: 10000, padding: '24px 28px 28px' }}
                  >
                    <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 20 }}>White Label Services</p>
                    <div className="wl-nav-items-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, alignContent: 'start', alignSelf: 'start' }}>
                      {whitelabelCategories.flatMap(cat => cat.items).map(l => (
                        <a key={l.label} href={l.href}
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
                )}

                {/* Resources dropdown */}
                {isOpen && item.type === 'resources' && (
                  <Dropdown>
                    <div style={{ paddingRight: 24, borderRight: '1px solid #E2E8F0' }}>
                      <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 14 }}>Resources</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {resourceLinks.map(l => (
                          <a key={l.label} href={l.href}
                            {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
                      <CtaCard heading="Get Valuable Marketing Insights" sub="Explore our free resources, guides, and tools." btnLabel="Explore Freebies" href="https://templates.isuremedia.com/" />
                    </div>
                  </Dropdown>
                )}

                {/* Hire a Team dropdown */}
                {isOpen && item.type === 'hire' && (
                  <div
                    onMouseEnter={() => { if (timer.current) clearTimeout(timer.current); }}
                    onMouseLeave={closeNav}
                    style={{ position: 'fixed', top: 104, left: '50%', transform: 'translateX(-50%)', width: 760, maxWidth: 'calc(100vw - 32px)', background: '#fff', borderRadius: 16, border: '1px solid #E2E8F0', boxShadow: '0 16px 48px rgba(0,0,0,.12)', zIndex: 10000, padding: '24px 28px 28px' }}
                  >
                    <p style={{ fontFamily: J, fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 16 }}>Hire a Specialist</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                      {hireLinks.map(l => (
                        <a key={l.label} href={l.href}
                          style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '14px 16px', borderRadius: 12, textDecoration: 'none', border: '1px solid #E8EEFF', background: '#FAFBFF', transition: 'all .15s' }}
                          onMouseEnter={e => { e.currentTarget.style.background = '#EFF4FF'; e.currentTarget.style.borderColor = 'var(--color-primary)'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = '#FAFBFF'; e.currentTarget.style.borderColor = '#E8EEFF'; }}
                        >
                          <div style={{ width: 40, height: 40, borderRadius: 10, background: '#E8EEFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <i className={l.icon} style={{ fontSize: 16, color: 'var(--color-primary)' }} />
                          </div>
                          <span style={{ fontFamily: I, fontSize: 13, fontWeight: 600, color: 'var(--color-text-heading)', lineHeight: 1.35 }}>{l.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
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
        <div className="nav-mobile-menu" style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#fff', borderTop: '1px solid #E2E8F0', padding: '12px 20px 20px', boxShadow: '0 8px 24px rgba(0,0,0,.08)', overflowY: 'auto', maxHeight: 'calc(100vh - 62px)', zIndex: 9998 }}>
          {navItems.map(item => {
            const hasDropdown = item.type !== 'link' && item.type !== 'contact';
            const isExpanded  = mobileSection === item.type;
            const links = item.type === 'company' ? companyLinks : item.type === 'resources' ? resourceLinks : item.type === 'hire' ? hireLinks : [];
            const wlLinks = whitelabelCategories.flatMap(c => c.items);

            return (
              <div key={item.label}>
                {hasDropdown ? (
                  <>
                    <button onClick={() => { setMobileSection(isExpanded ? null : item.type); setMobileServiceCat(null); }}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: I, fontSize: 15, fontWeight: 500, color: 'var(--color-text-body)', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 12px', borderRadius: 8 }}>
                      {item.label}
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transform: isExpanded ? 'rotate(180deg)' : '', transition: 'transform .2s' }}>
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <div style={{ paddingLeft: 14, marginBottom: 4 }}>
                        {item.type === 'services'
                          ? serviceCategories.map((cat, ci) => {
                              const catExpanded = mobileServiceCat === ci;
                              return (
                                <div key={cat.label}>
                                  <button onClick={() => setMobileServiceCat(catExpanded ? null : ci)}
                                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'none', border: 'none', cursor: 'pointer', fontFamily: I, fontSize: 14, fontWeight: 600, color: 'var(--color-text-body)' }}
                                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                  >
                                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                      <i className={cat.icon} style={{ fontSize: 12, color: 'var(--color-primary)' }} /> {cat.label}
                                    </span>
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ transform: catExpanded ? 'rotate(180deg)' : '', transition: 'transform .2s', flexShrink: 0 }}>
                                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </button>
                                  {catExpanded && (
                                    <div style={{ paddingLeft: 14 }}>
                                      {cat.items.map(s => (
                                        <a key={s.label} href={s.href} onClick={() => setMobileOpen(false)}
                                          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', borderRadius: 8, textDecoration: 'none', fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)' }}
                                          onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                        >
                                          <i className="fa-solid fa-arrow-right" style={{ fontSize: 9, color: 'var(--color-primary)' }} /> {s.label}
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })
                          : item.type === 'whitelabel'
                          ? wlLinks.map(l => (
                              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, textDecoration: 'none', fontFamily: I, fontSize: 14, color: 'var(--color-text-body)' }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                              >
                                <i className={l.icon} style={{ fontSize: 12, color: 'var(--color-primary)' }} /> {l.label}
                              </a>
                            ))
                          : item.type === 'work'
                          ? resultCards.map(c => (
                              <a key={c.label} href={c.href} onClick={() => setMobileOpen(false)}
                                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, textDecoration: 'none', fontFamily: I, fontSize: 14, color: 'var(--color-text-body)' }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'var(--ism-blue-50,#EFF4FF)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                              >
                                <i className={c.icon} style={{ fontSize: 12, color: 'var(--color-primary)' }} /> {c.label}
                              </a>
                            ))
                          : links.map(l => (
                              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
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
            <a href={PHONE_US_TEL}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--ism-amber)', textDecoration: 'none' }}>
              <i className="fa-solid fa-phone" style={{ fontSize: 12 }} /> {PHONE_US}
            </a>
            <a href="/appointment" onClick={() => setMobileOpen(false)}
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
        @media (max-width: 1024px) {
          .nav-top-bar { display: none !important; }
        }
        @media (max-width: 768px) {
          .nav-main-row { padding: 0 20px !important; }
        }
        @media (max-width: 480px) {
          .nav-logo img { height: 42px !important; }
          .nav-mobile-menu { padding: 10px 16px 16px !important; }
        }
      `}</style>
    </header>
  );
}
