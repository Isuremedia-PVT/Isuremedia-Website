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
      { label: 'All Services', href: '/services' },
    ],
  },
  {
    section: 'SEO & Organic Growth',
    icon: 'fa-solid fa-magnifying-glass',
    links: [
      { label: 'SEO & Organic Growth', href: '/seo-services' },
      { label: 'Technical SEO',        href: '/technical-seo' },
      { label: 'On-Page SEO',          href: '/on-page-seo-services' },
      { label: 'Local SEO',            href: '/local-seo-services' },
      { label: 'Link Building',        href: '/link-building-service' },
      { label: 'AI SEO',               href: '/ai-seo-services' },
    ],
  },
  {
    section: 'Websites & Funnels',
    icon: 'fa-solid fa-code',
    links: [
      { label: 'Websites & Funnels',              href: '/websites-and-funnels' },
      { label: 'Landing Pages',                    href: '/landing-page-design-services' },
      { label: 'GoHighLevel Funnels & Automation',  href: '/gohighlevel-developer' },
      { label: 'ClickFunnels',                     href: '/clickfunnels-development' },
      { label: 'Business Websites',                href: '/business-website-design-services' },
      { label: 'Sales Funnels',                    href: '/sales-funnel-design' },
      { label: 'Kajabi',                           href: '/kajabi-website-development' },
      { label: 'WordPress Development',            href: '/wordpress-development-services' },
      { label: 'Shopify Development',              href: '/shopify-development-services' },
      { label: 'GoHighLevel Development',          href: '/gohighlevel-development-services' },
      { label: 'PHP / Laravel Development',        href: '/php-laravel-development' },
      { label: 'Node.js Development',              href: '/nodejs-development-services' },
      { label: 'Python Development',               href: '/python-development-services' },
      { label: 'AI Development',                   href: '/ai-development-services' },
      { label: 'Wix Development',                  href: '/wix-website-development' },
    ],
  },
  {
    section: 'PPC / Paid Marketing',
    icon: 'fa-solid fa-chart-bar',
    links: [
      { label: 'PPC & Paid Marketing',             href: '/ppc-marketing-agencies' },
      { label: 'Google Ads',                        href: '/google-ads-management' },
      { label: 'Meta Ads (Facebook & Instagram)',   href: '/meta-ads-management' },
      { label: 'TikTok Ads',                         href: '/tiktok-ads-management' },
      { label: 'YouTube Ads',                        href: '/youtube-ads-management' },
    ],
  },
  {
    section: 'Content & Creative',
    icon: 'fa-solid fa-palette',
    links: [
      { label: 'Content & Creative',               href: '/content-marketing-and-creative-agency' },
      { label: 'SEO Blog Writing',                  href: '/seo-content-writing-services' },
      { label: 'Graphic Design',                    href: '/graphic-design-agency' },
      { label: 'Ad Creative Design',                href: '/ad-creative-design-services' },
      { label: 'Brand Identity & Visual Design',    href: '/brand-identity-design-services' },
      { label: 'Video Marketing & Editing',         href: '/video-editing-services' },
    ],
  },
  {
    section: 'White Label',
    icon: 'fa-solid fa-tag',
    links: [
      { label: 'White-Label Fulfillment',           href: '/white-label-digital-marketing' },
      { label: 'White-Label SEO',                    href: '/white-label-seo-services' },
      { label: 'White-Label PPC',                    href: '/white-label-ppc-services' },
      { label: 'White-Label Web Development',        href: '/white-label-web-design-services' },
      { label: 'White-Label GoHighLevel Support',    href: '/gohighlevel-white-label-support-services' },
      { label: 'Dedicated Agency Pods',              href: '/dedicated-agency-pods' },
    ],
  },
  {
    section: 'Marketing Automation',
    icon: 'fa-solid fa-robot',
    links: [
      { label: 'Marketing Automation',                    href: '/marketing-automation-agency' },
      { label: 'GoHighLevel Setup & Automation',           href: '/gohighlevel-automation-setup' },
      { label: 'CRM Setup & Management',                   href: '/crm-setup-management' },
      { label: 'Zapier Workflow Automation',                href: '/zapier-workflow-automation' },
      { label: 'Make Automation',                           href: '/make-automation-services' },
      { label: 'n8n Workflow Automation',                   href: '/n8n-workflow-automation' },
      { label: 'AI Chatbot & Conversation Automation',      href: '/ai-chatbot-automation' },
      { label: 'Appointment Booking Systems',               href: '/appointment-booking-automation' },
      { label: 'Lead Nurture Workflows',                    href: '/lead-nurture-workflows' },
      { label: 'Sales Pipeline Automation',                 href: '/sales-pipeline-automation' },
      { label: 'Email Marketing',                           href: '/email-marketing-automation' },
      { label: 'API Integration',                           href: '/api-integration-services' },
      { label: 'Zoho',                                      href: '/zoho-automation-setup' },
    ],
  },
  {
    section: 'GoHighLevel Solutions',
    icon: 'fa-solid fa-robot',
    links: [
      { label: 'GoHighLevel Solutions & White Label Agency',   href: '/ghl-solutions' },
      { label: 'GoHighLevel White Label Support',              href: '/expert-gohighlevel-white-label-support-from-the-worlds-best' },
      { label: 'Hire a GoHighLevel Virtual Assistant',         href: '/support/gohighlevel' },
    ],
  },
  {
    section: 'Industries',
    icon: 'fa-solid fa-building',
    links: [
      { label: 'All Industries',          href: '/industries' },
    ],
  },
  {
    section: 'Hire a Team',
    icon: 'fa-solid fa-users',
    links: [
      { label: 'Hire a WordPress Developer',        href: '/hire-wordpress-developer'         },
      { label: 'Hire a Shopify Developer',          href: '/hire-shopify-developer'           },
      { label: 'Hire a Web Designer',               href: '/hire-web-designer'                },
      { label: 'Hire an SEO Expert',                href: '/hire-seo-experts'                  },
      { label: 'Hire a GoHighLevel Expert',         href: '/hire-gohighlevel-expert'          },
      { label: 'Hire a Marketing Automation Expert',href: '/hire-marketing-automation-expert' },
    ],
  },
  {
    section: 'Case Studies',
    icon: 'fa-solid fa-chart-line',
    links: [
      { label: 'All Case Studies',                          href: '/case-studies' },
      { label: 'Airtopia — GoHighLevel Venue Integration',   href: '/case-studies/roller-gohighlevel-venue-integration' },
      { label: 'AdOS — Internal AI Advertising Platform',    href: '/case-studies/ados-internal-ai-advertising-platform' },
      { label: 'Garden Solution Landscapes — Local SEO',     href: '/case-studies/ecommerce-seo-organic-traffic' },
      { label: 'Brown Legal Immigration — Local SEO',        href: '/case-studies/law-firm-local-seo-map-pack' },
      { label: 'Mentara Health — Exam Platform Development', href: '/case-studies/healthcare-exam-platform-development' },
      { label: 'Hijrah Walks — Payment Automation',          href: '/case-studies/travel-agency-payment-automation' },
      { label: 'Scrubs4U — Meta Ads ROAS Scaling',           href: '/case-studies/ecommerce-meta-ads-roas-scaling' },
      { label: 'Global Allianz — Meta Ads Lead Generation',  href: '/case-studies/immigration-meta-ads-lead-generation' },
      { label: 'Dr. Golshani — Instagram Brand Growth',      href: '/case-studies/plastic-surgeon-instagram-brand-growth' },
      { label: 'Garnus India — Instagram Organic Growth',    href: '/case-studies/ecommerce-instagram-organic-growth-garnus' },
      { label: 'Innovat3 Solutions — Multi-Agency GHL Scaling', href: '/case-studies/innovat3-multi-agency-ghl-scaling' },
      { label: 'Signature Pools — Lead Management Automation', href: '/case-studies/signature-pools-lead-management-automation' },
    ],
  },
  {
    section: 'Company',
    icon: 'fa-solid fa-building-user',
    links: [
      { label: 'About Isuremedia',   href: '/about' },
      { label: 'Portfolio',          href: '/portfolio' },
      { label: 'Testimonials',       href: '/testimonials' },
      { label: 'Careers',            href: '/careers' },
      { label: 'Contact',            href: '/contact' },
      { label: 'Book an Appointment',href: '/appointment' },
    ],
  },
  {
    section: 'Resources',
    icon: 'fa-solid fa-book-open',
    links: [
      { label: 'Blog',               href: 'https://blogs.isuremedia.com/' },
      { label: 'Free Tools',         href: 'https://templates.isuremedia.com/' },
    ],
  },
  {
    section: 'Legal',
    icon: 'fa-solid fa-scale-balanced',
    links: [
      { label: 'Privacy Policy',     href: '/privacy-policy' },
      { label: 'Terms of Service',   href: '/terms' },
      { label: 'Cookie Policy',      href: '/cookie-policy' },
      { label: 'Refund Policy',      href: '/refund-policy' },
      { label: 'GDPR',               href: '/gdpr' },
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
          <div className="ism-container">
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
                          onMouseEnter={e => { (e.currentTarget).style.color = 'var(--color-primary)'; }}
                          onMouseLeave={e => { (e.currentTarget).style.color = 'var(--color-text-muted)'; }}>
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
