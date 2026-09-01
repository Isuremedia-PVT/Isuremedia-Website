'use client';

import { PHONE_IN, PHONE_IN_TEL, PHONE_IN2, PHONE_IN2_TEL, PHONE_US, PHONE_US_TEL, EMAIL, EMAIL_HREF } from '@/data/contact';

const I = 'var(--font-inter,Inter,sans-serif)';

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Websites & Funnels',   href: '/websites-and-funnels'    },
      { label: 'SEO & Organic Growth', href: '/seo-services'                 },
      { label: 'PPC & Paid Marketing', href: '/ppc-marketing-agencies'  },
      { label: 'Content & Creative',   href: '/content-marketing-and-creative-agency'    },
      { label: 'White-Label',          href: '/white-label-digital-marketing'         },
      { label: 'Marketing Automation', href: '/marketing-automation-agency'},
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',      href: '/about'          },
      { label: 'Portfolio',     href: '/portfolio'      },
      { label: 'Case Studies',  href: '/case-studies'   },
      { label: 'Testimonials',  href: '/testimonials'   },
      { label: 'Careers',       href: '/careers'        },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'All Industries',       href: '/industries'                    },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog',          href: 'https://blogs.isuremedia.com/'      },
      { label: 'Free Tools',    href: 'https://templates.isuremedia.com/' },
      { label: 'Privacy Policy',href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms'       },
      { label: 'Contact Us',    href: '/contact'        },
    ],
  },
];

const socials = [
  { icon: 'fa-brands fa-linkedin-in',  href: 'https://www.linkedin.com/company/isuremedia/' },
  { icon: 'fa-brands fa-facebook-f',   href: 'https://www.facebook.com/Isuremedia2017/' },
  { icon: 'fa-brands fa-instagram',    href: 'https://www.instagram.com/isuremedia/' },
  { icon: 'fa-brands fa-x-twitter',    href: 'https://x.com/isuremedia_' },
  { icon: 'fa-brands fa-youtube',      href: 'https://www.youtube.com/channel/UC5DR1JBq-Sf2QOlzvQsLeKw' },
  { icon: 'fa-brands fa-tumblr',       href: 'https://isuremedia.tumblr.com/' },
];

const legalLinks = [
  { label: 'Sitemap',        href: '/sitemap'        },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms',          href: '/terms'          },
  { label: 'Cookie Policy',  href: '/cookie-policy'  },
  { label: 'Refund Policy',  href: '/refund-policy'  },
  { label: 'GDPR',           href: '/gdpr'           },
];

export default function Footer() {
  return (
    <footer className="ftr-section" style={{ background: 'linear-gradient(130deg, #1840A0 0%, #1E4DC3 40%, #2F5FE8 75%, #3B6CF5 100%)', padding: '72px 0 0', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle bg glow top-right */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(30,77,195,.18) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '-5%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(255,176,0,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div className="ism-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Main grid ── */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '280px repeat(4,1fr)', gap: 48, paddingBottom: 56, borderBottom: '1px solid rgba(255,255,255,.08)' }}>

          {/* Brand column */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/isuremedia-light.webp" alt="Isuremedia" loading="lazy" style={{ height: 44, width: 'auto', objectFit: 'contain', objectPosition: 'left center', display: 'block', marginBottom: 16 }} />
            <span className="ftr-tagline" style={{ display: 'block', fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.80)', lineHeight: 1.75, marginBottom: 24 }}>
              End to end digital marketing. One team. One strategy. Zero gaps.
            </span>

            {/* India Address */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 16 }}>
              <i className="fa-solid fa-location-dot" style={{ fontSize: 11, color: 'var(--ism-amber)', marginTop: 3, flexShrink: 0 }} />
              <span className="ftr-address" style={{ display: 'block', fontFamily: I, fontSize: 12.5, color: 'rgba(255,255,255,.75)', lineHeight: 1.6, margin: 0 }}>
                Gas Godam Road, Chharayal Nayabad, First Floor, Chandra Complex<br />
                Haldwani, Nainital, Uttarakhand 263139, India
              </span>
            </div>

            {/* Contacts */}
            {[
              // { href: PHONE_IN_TEL,  icon: 'fa-solid fa-phone',    label: PHONE_IN  },
              { href: PHONE_IN2_TEL, icon: 'fa-solid fa-phone',    label: PHONE_IN2 },
              { href: PHONE_US_TEL,  icon: 'fa-solid fa-phone',    label: PHONE_US  },
              { href: EMAIL_HREF,    icon: 'fa-solid fa-envelope', label: EMAIL     },
            ].map(c => (
              <a key={c.label} href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{ fontFamily: I, fontSize: 12, color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 9, transition: 'color .15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ism-amber)')}
                onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
              >
                <i className={c.icon} style={{ fontSize: 10, color: 'var(--ism-amber)', flexShrink: 0 }} />
                {c.label}
              </a>
            ))}

            {/* Socials */}
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {socials.map(s => (
                <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 34, height: 34, borderRadius: 8, background: 'var(--ism-amber)', border: '1px solid var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-navy)', fontSize: 13, textDecoration: 'none', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(255,176,0,.45)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <span style={{ display: 'block', fontFamily: I, fontSize: 12, fontWeight: 700, color: 'var(--ism-amber)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 22 }}>{col.title}</span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href}
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.85)', textDecoration: 'none', transition: 'color .15s', display: 'flex', alignItems: 'center', gap: 6 }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--ism-amber)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.85)'; }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ism-amber)', flexShrink: 0, display: 'inline-block' }} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ── Bottom bar ── */}
        <div className="ftr-bottom-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ display: 'block', fontFamily: I, fontSize: 12, color: 'rgba(255,255,255,.65)', margin: 0 }}>
            All rights are reserved by Isuremedia PVT. LTD. | Copyright © 2026
          </span>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {legalLinks.map(item => (
              <a key={item.label} href={item.href}
                style={{ fontFamily: I, fontSize: 12, color: 'rgba(255,255,255,.65)', textDecoration: 'none', transition: 'color .15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,.65)')}
              >{item.label}</a>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 900px) {
          .ftr-section { padding: 48px 0 0 !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; padding-bottom: 36px !important; }
          .footer-grid > div:first-child { grid-column: span 2 !important; }
        }
        @media (max-width: 1100px) {
          .ftr-bottom-bar { padding-bottom: 88px !important; }
        }
        @media (max-width: 540px) {
          .ftr-section { padding: 36px 0 0 !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 24px !important; padding-bottom: 28px !important; }
          .footer-grid > div:first-child { grid-column: span 1 !important; }
          .ftr-tagline { font-size: 12px !important; }
          .ftr-address { font-size: 11.5px !important; }
          .ftr-bottom-bar { flex-direction: column !important; align-items: flex-start !important; }
          .ftr-bottom-bar > div { gap: 12px 16px !important; }
        }
      `}</style>
    </footer>
  );
}
