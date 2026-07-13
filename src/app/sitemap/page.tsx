'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const SITEMAP = [
  {
    section: 'Services',
    icon: 'fa-solid fa-layer-group',
    links: [
      { label: 'All Services',           href: '/services' },
      { label: 'SEO & Organic Growth',   href: '/services/seo' },
      { label: 'PPC & Paid Marketing',   href: '/services/ppc-paid-marketing' },
      { label: 'Websites & Funnels',     href: '/services/websites-funnels' },
      { label: 'Content & Creative',     href: '/services/content-creative' },
      { label: 'White-Label Fulfillment',href: '/services/white-label' },
      { label: 'Marketing Automation',   href: '/services/marketing-automation' },
    ],
  },
  {
    section: 'Industries',
    icon: 'fa-solid fa-building',
    links: [
      { label: 'All Industries',          href: '/industries' },
      { label: 'HVAC & Home Services',    href: '/industries/hvac' },
      { label: 'Legal & Law Firms',       href: '/industries/legal' },
      { label: 'E-Commerce',              href: '/industries/ecommerce' },
      { label: 'Real Estate',             href: '/industries/real-estate' },
      { label: 'Healthcare',              href: '/industries/healthcare' },
      { label: 'SaaS & Technology',       href: '/industries/saas' },
    ],
  },
  {
    section: 'Hire a Team',
    icon: 'fa-solid fa-users',
    links: [
      { label: 'Hire Overview',             href: '/hire' },
      { label: 'Hire an SEO Specialist',    href: '/hire/seo-specialist' },
      { label: 'Hire a PPC Manager',        href: '/hire/ppc-manager' },
      { label: 'Hire a Web Developer',      href: '/hire/web-developer' },
      { label: 'Hire a Content Writer',     href: '/hire/content-writer' },
      { label: 'Hire a GHL Expert',         href: '/hire/ghl-expert' },
    ],
  },
  {
    section: 'Company',
    icon: 'fa-solid fa-building-user',
    links: [
      { label: 'About Isuremedia',   href: '/about' },
      { label: 'Case Studies',       href: '/case-studies' },
      { label: 'Portfolio',          href: '/portfolio' },
      { label: 'Testimonials',       href: '/testimonials' },
      { label: 'Careers',            href: '/careers' },
      { label: 'Affiliates',         href: '/affiliates' },
      { label: 'Contact',            href: '/contact' },
    ],
  },
  {
    section: 'Resources',
    icon: 'fa-solid fa-book-open',
    links: [
      { label: 'Free Guides',        href: '/guides' },
      { label: 'Blog',               href: '/blog' },
      { label: 'Case Studies',       href: '/case-studies' },
    ],
  },
  {
    section: 'Legal',
    icon: 'fa-solid fa-scale-balanced',
    links: [
      { label: 'Privacy Policy',     href: '/privacy-policy' },
      { label: 'Terms of Service',   href: '/terms' },
      { label: 'Cookie Policy',      href: '/cookie-policy' },
      { label: 'Sitemap',            href: '/sitemap' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '80px 0 64px', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Navigation</span>
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(32px,4.5vw,56px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.8px', lineHeight: 1.1, marginBottom: 20 }}>
              Sitemap
            </h1>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 540, margin: '0 auto' }}>
              A complete directory of every section on the Isuremedia website to help you find exactly what you&apos;re looking for.
            </p>
          </div>
        </section>

        {/* ── SITEMAP GRID ── */}
        <section style={{ padding: '80px 0 120px', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div className="sitemap-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
              {SITEMAP.map((group, i) => (
                <div key={i}>
                  {/* Section header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={group.icon} style={{ fontSize: 15, color: 'var(--color-primary)' }} />
                    </div>
                    <h2 style={{ fontFamily: J, fontSize: 16, fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>{group.section}</h2>
                  </div>
                  <div style={{ width: '100%', height: 2, background: 'var(--ism-amber)', borderRadius: 2, marginBottom: 20 }} />
                  {/* Links */}
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {group.links.map((link, j) => (
                      <li key={j}>
                        <a href={link.href} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid var(--color-border)', transition: 'color .18s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-text-muted)'; }}>
                          <i className="fa-solid fa-chevron-right" style={{ fontSize: 9, color: 'var(--color-primary)', flexShrink: 0 }} />
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.sitemap-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:560px){.sitemap-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

      </main>
      <Footer />
    </>
  );
}
