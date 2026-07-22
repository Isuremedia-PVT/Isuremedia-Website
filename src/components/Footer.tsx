'use client';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const cols = [
  {
    title: 'Services',
    links: [
      { label: 'Websites & Funnels',   href: '/services/websites-funnels'    },
      { label: 'SEO & Organic Growth', href: '/services/seo'                 },
      { label: 'PPC & Paid Marketing', href: '/services/ppc-paid-marketing'  },
      { label: 'Content & Creative',   href: '/services/content-creative'    },
      { label: 'White-Label',          href: '/services/white-label'         },
      { label: 'Marketing Automation', href: '/services/marketing-automation'},
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
      { label: 'Affiliates',    href: '/affiliates'     },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'HVAC & Home Services', href: '/industries/hvac-home-services' },
      { label: 'E-Commerce',           href: '/industries/ecommerce'          },
      { label: 'SaaS & Tech',          href: '/industries/saas-tech'          },
      { label: 'Marketing Agencies',   href: '/industries/marketing-agencies' },
      { label: 'Real Estate',          href: '/industries/real-estate'        },
      { label: 'All Industries',       href: '/industries'                    },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog',          href: '/blog'           },
      { label: 'Guides',        href: '/guides'         },
      { label: 'Free Tools',    href: '/freetools'      },
      { label: 'Privacy Policy',href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms'       },
      { label: 'Contact Us',    href: '/contact'        },
    ],
  },
];

const socials = [
  { icon: 'fa-brands fa-linkedin-in',  href: '#' },
  { icon: 'fa-brands fa-facebook-f',   href: '#' },
  { icon: 'fa-brands fa-instagram',    href: '#' },
  { icon: 'fa-brands fa-x-twitter',    href: '#' },
  { icon: 'fa-brands fa-youtube',      href: '#' },
];

const legalLinks = [
  { label: 'Sitemap',        href: '/sitemap'        },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms',          href: '/terms'          },
  { label: 'Cookie Policy',  href: '/cookie-policy'  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(130deg, #1840A0 0%, #1E4DC3 40%, #2F5FE8 75%, #3B6CF5 100%)', padding: '72px 0 0', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle bg glow top-right */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(30,77,195,.18) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', left: '-5%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(255,176,0,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>

        {/* ── Main grid ── */}
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '280px repeat(4,1fr)', gap: 48, paddingBottom: 56, borderBottom: '1px solid rgba(255,255,255,.08)' }}>

          {/* Brand column */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Isuremedia" style={{ height: 44, width: 'auto', objectFit: 'contain', objectPosition: 'left center', filter: 'brightness(0) invert(1)', display: 'block', marginBottom: 16 }} />
            <p style={{ fontFamily: I, fontSize: 13, color: 'rgba(255,255,255,.80)', lineHeight: 1.75, marginBottom: 24 }}>
              End to end digital marketing. One team. One strategy. Zero gaps.
            </p>

            {/* India Address */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10 }}>
              <i className="fa-solid fa-location-dot" style={{ fontSize: 11, color: 'var(--ism-amber)', marginTop: 3, flexShrink: 0 }} />
              <p style={{ fontFamily: I, fontSize: 12, color: 'rgba(255,255,255,.75)', lineHeight: 1.70, margin: 0 }}>
                1st Floor, Chandra Complex, Gas Godam Road,<br />
                Haldwani, Uttarakhand 263139, India
              </p>
            </div>

            {/* USA Address */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 16 }}>
              <i className="fa-solid fa-location-dot" style={{ fontSize: 11, color: 'var(--ism-amber)', marginTop: 3, flexShrink: 0 }} />
              <p style={{ fontFamily: I, fontSize: 12, color: 'rgba(255,255,255,.75)', lineHeight: 1.70, margin: 0 }}>
                30 N, Gould St., Suite B,<br />
                Sheridan, 82801, Wyoming, United States
              </p>
            </div>

            {/* Contacts */}
            {[
              { href: 'tel:+917011041363',          icon: 'fa-solid fa-phone',    label: '+91 70110 41363' },
              { href: 'tel:+16465881430',            icon: 'fa-solid fa-phone',    label: '+1 646-588-1430' },
              { href: 'mailto:hello@isuremedia.com', icon: 'fa-solid fa-envelope', label: 'hello@isuremedia.com' },
            ].map(c => (
              <a key={c.label} href={c.href}
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
                <a key={s.icon} href={s.href}
                  style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, textDecoration: 'none', transition: 'all .18s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.color = 'var(--color-navy)'; e.currentTarget.style.borderColor = 'var(--ism-amber)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.12)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.22)'; }}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <h5 style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--ism-amber)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 22 }}>{col.title}</h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href}
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: I, fontSize: 12, color: 'rgba(255,255,255,.65)', margin: 0 }}>
            All rights are reserved by ISUREMEDIA PVT. LTD. | Copyright © 2026
          </p>
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
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </footer>
  );
}
