'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import { useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

/* ═══════════════════════════════════════════
   DATA, All copy from the final document
═══════════════════════════════════════════ */

const trustChips = [
  'NDA and IP protection included',
  'No contracts, cancel anytime',
  'Up and running in 48 hours',
];

const proofStats = [
  { num: '12+', label: 'Years of Expertise', desc: 'In digital marketing since 2013' },
  { num: '400+', label: 'Clients Worldwide', desc: 'SMBs, agencies, and growing brands' },
  { num: '$50M+', label: 'Measurable Growth', desc: 'Tracked across client campaigns' },
  { num: '40+', label: 'In-House Specialists', desc: 'Zero outsourcing, zero subcontracting' },
];

const whyWPCards = [
  { icon: 'fa-solid fa-shopping-cart', title: 'Built for Selling Purpose', desc: <>Shopify is designed around online commerce. Inventory, payments, shipping, product management, and checkout are <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>built into the platform</span> instead of being added after the fact.</> },
  { icon: 'fa-solid fa-gauge-high', title: 'Store Built to Handle Traffic', desc: <>Shopify provides hosted infrastructure, CDN delivery, and built-in performance features so your team can <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>focus on products, customers, and growth</span> rather than server management.</> },
  { icon: 'fa-solid fa-lock', title: 'Core Protections Managed for You', desc: <>Shopify handles core platform security, SSL, and payment compliance requirements, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>reducing the infrastructure work</span> your team would otherwise need to manage.</> },
  { icon: 'fa-solid fa-plug', title: 'Extend Your Store With the Tools You Need', desc: <>Shopify connects with apps for CRM, email, accounting, fulfillment, customer support, analytics, and marketing. We help <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>select and configure integrations</span> that fit your workflow.</> },
  { icon: 'fa-solid fa-chart-line', title: 'Understand Store Performance', desc: <>Shopify provides reporting and commerce data that help you track sales, products, customers, and conversion activity. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Additional analytics tools can be connected</span> when you need deeper reporting.</> },
  { icon: 'fa-solid fa-globe', title: 'Sell Across More Than One Channel', desc: <>Shopify supports selling across your online store and additional channels such as social platforms and marketplaces. Your team can <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>manage products and orders from a central system</span>.</> },
];

const servicesTabs = [
  { label: 'Custom Stores', icon: 'fa-solid fa-store' },
  { label: 'Theme Dev', icon: 'fa-solid fa-palette' },
  { label: 'Shopify Plus', icon: 'fa-solid fa-crown' },
  { label: 'App Dev', icon: 'fa-solid fa-puzzle-piece' },
  { label: 'Migrations', icon: 'fa-solid fa-right-left' },
  { label: 'Performance', icon: 'fa-solid fa-gauge-high' },
  { label: 'Checkout', icon: 'fa-solid fa-cash-register' },
  { label: 'Integrations', icon: 'fa-solid fa-link' },
];

const servicesData = [
  {
    num: '01', title: 'Custom Shopify Store Development',
    img: '/hire/shopify/Shopify Developer  custom store.webp',
    desc: <>Get a Shopify store built around your products, brand, customers, and sales process. Our developers <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>structure the storefront, templates, and functionality</span> around what your store actually needs.</>,
    bullets: [
      'Custom Shopify store setup and architecture',
      'Product page and collection page development',
      'Mobile-first responsive builds',
      'Multi-currency and multi-language store configuration',
      'Online Store 2.0 builds with sections and blocks',
      'Brand-aligned design implementation',
    ],
  },
  {
    num: '02', title: 'Shopify Theme Development',
    img: '/hire/shopify/theme dev.webp',
    desc: <>Customize an existing Shopify theme or build a custom storefront when your requirements go beyond the theme&apos;s standard options. We focus on <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>responsive design, maintainable code</span>, and a clear path for your team to manage content.</>,
    bullets: [
      'Custom Shopify theme development from scratch',
      'Liquid template development and optimization',
      'Shopify sections and blocks for flexible page layouts',
      'Theme customization and redesign',
      'Mobile UX optimization and performance tuning',
      'Cross-browser and device compatibility',
    ],
  },
  {
    num: '03', title: 'Shopify Plus Development',
    img: '/hire/shopify/Shopify Plus.webp',
    desc: <>For larger or more complex stores, we work with Shopify Plus features, advanced storefront requirements, custom processes, and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>integrations that support higher order volumes</span> and more involved operations.</>,
    bullets: [
      'Shopify Plus store setup and configuration',
      'Checkout UI extensions and customization',
      'Shopify Functions for custom discount and shipping logic',
      'Shopify Flow automation setup',
      'B2B company accounts, tiered pricing, and purchase orders',
      'Multi-store and Shopify Markets configuration',
    ],
  },
  {
    num: '04', title: 'Shopify App Development',
    img: '/hire/shopify/app dev.webp',
    desc: <>When an existing app cannot handle the workflow you need, we build or connect the right solution. This can include <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>custom functionality, third-party integrations, APIs</span>, and automated data flows.</>,
    bullets: [
      'Custom private app development',
      'Embedded admin app builds',
      'Custom storefront extensions',
      'Shopify API and webhook integrations',
      'App performance and compatibility optimization',
      'Existing app modification and customization',
    ],
  },
  {
    num: '05', title: 'Shopify Migration Services',
    img: '/hire/shopify/Migrations.webp',
    desc: <>Moving from WooCommerce to Shopify? We handle the storefront, product data, customer data, redirects, integrations, and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>technical migration work</span> needed to move platforms without losing important store functionality.</>,
    bullets: [
      'WooCommerce to Shopify migrations',
      'Magento to Shopify and Shopify Plus migrations',
      'URL structure and SEO preservation throughout',
      'Product, customer, and order data transfer',
      'Post-migration testing and issue resolution',
      'Staging environment setup and validation before go-live',
    ],
  },
  {
    num: '06', title: 'Speed and Performance Optimization',
    img: '/hire/shopify/performance.webp',
    desc: <>We identify what is slowing your storefront down, then improve theme code, assets, apps, and page structure to create a <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>faster shopping experience</span> across devices.</>,
    bullets: [
      'Core Web Vitals audit and optimization',
      'Theme and script performance improvements',
      'Image optimization and lazy loading',
      'App audit and unnecessary app removal',
      'CDN configuration and caching improvements',
      'Mobile performance improvements across all pages',
    ],
  },
  {
    num: '07', title: 'Checkout Optimization',
    img: '/hire/shopify/cheackout.webp',
    desc: <>We review the path from product discovery to checkout, identify friction points, and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>improve page structure, messaging, and user flow</span> to help more visitors complete their purchase.</>,
    bullets: [
      'Checkout flow audit and friction reduction',
      'Payment gateway setup and optimization',
      'Abandoned cart recovery configuration',
      'Shopify Plus checkout UI customization',
      'Post-purchase upsell and cross-sell setup',
      'Conversion-focused checkout improvements',
    ],
  },
  {
    num: '08', title: 'Integrations and Third-Party Connections',
    img: '/hire/shopify/integrayions.webp',
    desc: <>Keep your store updated and supported with ongoing development, issue resolution, app management, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>performance checks, and technical improvements</span> and integrations.</>,
    bullets: [
      'CRM integrations (HubSpot, Klaviyo, Salesforce)',
      'ERP and inventory system connections',
      'Email marketing platform setup (Mailchimp, Omnisend, ActiveCampaign)',
      'Payment and BNPL gateway integrations',
      'Zapier and Make automation connections',
      'Third-party analytics and tracking setup',
    ],
  },
];

const techCategories = [
  { label: 'Frontend and Theme Development', tools: ['Liquid', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Alpine.js', 'Online Store 2.0', 'Dawn', 'Horizon', 'PageFly', 'GemPages', 'Shogun'] },
  { label: 'Shopify Development Tools', tools: ['Shopify CLI', 'VS Code', 'Theme Check', 'Git', 'GitHub', 'Storefront API', 'Admin GraphQL API', 'Metafields', 'Webhooks'] },
  { label: 'eCommerce and Payments', tools: ['Shopify Payments', 'Shop Pay', 'PayPal', 'Stripe', 'Apple Pay', 'Google Pay', 'Klarna', 'Afterpay', 'Shop Pay Installments'] },
  { label: 'CRM and Marketing Integrations', tools: ['Klaviyo', 'Omnisend', 'Mailchimp', 'HubSpot', 'Salesforce', 'Gorgias', 'Zapier', 'Make'] },
  { label: 'Performance and Testing', tools: ['Shopify Speed Score', 'Google Lighthouse', 'Google PageSpeed Insights', 'GTmetrix', 'Core Web Vitals', 'WebPageTest'] },
  { label: 'SEO and Tracking', tools: ['Smart SEO', 'JSON-LD for SEO', 'TinyIMG', 'Booster SEO', 'Google Analytics 4', 'Meta Pixel', 'Google Tag Manager', 'Google Search Console'] },
];

const whyISMCards = [
  { icon: 'fa-solid fa-building', title: 'Every Developer Is In-House', desc: <>Your store is <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>not passed to a freelancer</span> or subcontractor. The developer working on it is part of the Isuremedia team and accountable from start to finish.</> },
  { icon: 'fa-solid fa-file-lines', title: 'Everything Gets Documented', desc: <>Your theme changes, customizations, integrations, and technical decisions are documented so <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>another developer can understand the store</span> without rebuilding the context.</> },
  { icon: 'fa-solid fa-handshake', title: 'No Long-Term Contracts', desc: <>Ongoing work is available <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>month to month</span> when you need it. No unnecessary long-term commitment or exit penalties.</> },
  { icon: 'fa-solid fa-code', title: 'Shopify and Shopify Plus Depth', desc: <>Our developers work across standard Shopify and Shopify Plus, including themes, checkout-related functionality, apps, integrations, and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>more advanced store requirements</span>.</> },
  { icon: 'fa-solid fa-rocket', title: 'Built for Conversions', desc: <>A Shopify store needs to do more than launch. We build around <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>product discovery, page speed, checkout flow</span>, and the actions that move visitors toward purchase.</> },
  { icon: 'fa-solid fa-comments', title: 'Clear Communication Throughout', desc: <>You know what is being worked on, what has changed, and what comes next. Updates stay direct, timelines are clear, and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>scope changes are discussed before work is added</span>.</> },
];

const engagementModels = [
  {
    title: 'Project Based',
    tag: 'For businesses with a specific Shopify job to get done',
    desc: <>You have a clear requirement. A new store build, a migration from WooCommerce, a Shopify Plus setup, or a specific feature that needs building. The scope is agreed before work starts, you <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>know the cost upfront</span>, and one developer sees it through from start to finish.</>,
    bullets: [
      'Scoped and priced before any work begins',
      'One dedicated developer on your project throughout',
      'Delivered to your timeline with your sign-off at each stage',
      'No ongoing commitment once the project is complete',
    ],
  },
  {
    title: 'Monthly Retainer',
    tag: 'For stores that need ongoing Shopify development or support',
    desc: <>Your store needs regular attention around new product launches, seasonal campaigns, BFCM, performance improvements, and ongoing development. A dedicated developer works on your store every month, knows it properly, and is <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>there when something needs doing</span>.</>,
    bullets: [
      'Dedicated developer familiar with your store and codebase',
      'Covers updates, new features, seasonal builds, and fixes',
      'Month to month with no lock-in',
      'Same person each month, no handoffs or re-briefing',
    ],
  },
  {
    title: 'White Label',
    tag: 'For agencies delivering Shopify work to their own clients',
    desc: <>You handle the client relationship. Isuremedia handles the Shopify development behind the scenes under your brand. Your clients <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>never know we exist</span> and nothing we deliver carries any Isuremedia footprint.</>,
    bullets: [
      'All work delivered under your agency name',
      'No Isuremedia branding on any deliverable',
      'We never contact your clients directly',
      'Scales as your client pipeline grows',
    ],
  },
];

const faqs = [
  { q: 'What does a Shopify developer do?', a: <>A Shopify developer builds, customizes, integrates, and maintains Shopify stores. Their work can include <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>themes, storefront functionality, apps, APIs</span>, Shopify Plus, performance improvements, migrations, and checkout optimization.</> },
  { q: 'How much does it cost to hire a Shopify developer?', a: 'The cost of hiring a Shopify developer depends on the scope, complexity, platform requirements, and integrations involved. A specific theme change or fix usually requires less development time than a custom store, migration, or Shopify Plus project. The scope should be confirmed before development begins.' },
  { q: 'How quickly can a Shopify developer start my project?', a: <>A Shopify developer can typically start <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>within 48 hours</span> once the project is approved, the scope is confirmed, and the required store access and assets are available. Larger projects may require additional planning before development begins.</> },
  { q: 'Can I hire a Shopify developer for an existing store?', a: 'Yes. Shopify developers can improve and maintain existing stores as well as build new ones. Common work includes theme customization, bug fixes, app integrations, performance improvements, new features, and conversion-focused changes.' },
  { q: 'Can a Shopify developer build a custom Shopify store?', a: 'Yes. A Shopify developer can build a custom storefront around your brand, products, customer journey, and technical requirements instead of relying entirely on a pre-built theme.' },
  { q: 'Do you offer Shopify Plus development?', a: <>Yes. Shopify Plus development can include <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>advanced storefront work, custom integrations</span>, more complex workflows, and technical support for businesses using the Shopify Plus platform.</> },
  { q: 'Can you migrate a WooCommerce store to Shopify?', a: 'Yes. A WooCommerce to Shopify migration can include product and customer data, storefront setup, URL redirects, integrations, and other technical work required to move the store to Shopify.' },
  { q: 'Can you customize my existing Shopify theme?', a: 'Yes. Shopify theme customization can include layout changes, custom sections, templates, styling, functionality, and performance improvements. A custom theme may be recommended when the existing theme cannot support the required experience efficiently.' },
  { q: 'Do you build custom Shopify apps and integrations?', a: 'Yes. Shopify developers can build custom functionality or connect Shopify with third-party systems using apps, APIs, webhooks, and other integration methods when standard apps are not enough.' },
  { q: 'Do you offer white-label Shopify development for agencies?', a: <>Yes. We provide white-label Shopify development for agencies that need an execution partner behind the scenes. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Work can be delivered under the agency&apos;s brand</span> while the agency keeps the client relationship.</> },
  { q: 'Who owns the Shopify work after development?', a: 'Your business retains access to its Shopify store and related accounts. Development work should be documented so your team or another developer can understand and maintain the implementation after delivery.' },
];


/* ═══════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════ */

export default function HireShopifyDeveloper() {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Navbar />

      {/* ════════════════════════════════════════
          SECTION 01, HERO (Centered like Image 1)
      ════════════════════════════════════════ */}
      <section className="wp-hero" style={{ background: '#ffffff', padding: '92px 0 84px', position: 'relative', overflow: 'hidden' }}>
        {/* Soft background glows matching Image 1 */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 550, height: 550, background: 'radial-gradient(circle, rgba(255, 235, 179, 0.45) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '5%', right: '-8%', width: 650, height: 650, background: 'radial-gradient(circle, rgba(210, 225, 255, 0.55) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Heading */}
          <h1 style={{ fontFamily: J, fontWeight: 900, color: 'var(--color-navy)', marginBottom: 24, fontSize: 'clamp(36px, 4.5vw, 58px)', lineHeight: 1.12, letterSpacing: '-0.5px' }}>
            Hire a Shopify Developer for a <span style={{ color: 'var(--ism-amber)' }}>Faster, Higher-Converting Store</span>
          </h1>

          {/* Subheading */}
          <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 720, margin: '0 auto 32px' }}>
            Get a custom Shopify store built for <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>speed, conversions, and growth</span>, from theme development and Shopify Plus to app integrations, migrations, and checkout optimization.
          </p>

          {/* Trust Chips - Centered */}
          <div className="wp-trust-chips" style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}>
            {trustChips.map(chip => (
              <div key={chip} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid var(--color-border)', padding: '6px 14px', borderRadius: 100, boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(30,77,195,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="fa-solid fa-check" style={{ fontSize: 9, color: 'var(--color-primary)' }} />
                </div>
                <span style={{ fontFamily: I, fontSize: 13.5, fontWeight: 600, color: 'var(--color-navy)' }}>{chip}</span>
              </div>
            ))}
          </div>

          {/* CTAs - Centered */}
          <div className="wp-hero-btns" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a href="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
              Book a Free Store Audit <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
            </a>
            <a href="/appointment"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: '#fff', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s', boxShadow: '0 2px 8px rgba(30,77,195,0.06)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ism-blue-50)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = ''; }}>
              Talk to an Expert
            </a>
          </div>
        </div>

        {/* Smooth Divider */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 50%, transparent 100%)' }} />
      </section>





      {/* ════════════════════════════════════════
          SECTION 03, OVERVIEW (Deliver Perfectly Layout)
      ════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '100px 0' }}>
        <div className="ism-container">
          <div className="wp-overview-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            
            {/* Left Column: Text & List */}
            <div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 24 }}>
                Custom Shopify Development for <span style={{ color: 'var(--ism-amber)' }}>Every Stage of Your Store</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 20 }}>
                From custom storefronts and Shopify Plus to apps, integrations, performance, and checkout optimization, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>get the technical support your store needs</span> to sell effectively.
              </p>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 20 }}>
                Shopify development covers more than building pages. You may need a custom storefront, theme development, Shopify Plus configuration, app integrations, payment setup, performance work, or a migration from another platform.
              </p>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 32 }}>
                The right Shopify developer should understand how your store&apos;s <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>design, checkout, apps, data, and marketing stack</span> work together and how those decisions affect sales. That&apos;s the standard our Shopify development team works to.
              </p>
              
              {/* 2-Column List */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px', marginBottom: 40 }}>
                {[
                  'Custom Shopify Stores', 'Theme Development',
                  'Shopify Plus', 'App Development',
                  'Store Migrations', 'Performance Optimization'
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <i className="fa-solid fa-chevron-right" style={{ fontSize: 12, color: 'var(--color-text-muted)' }} />
                    <span style={{ fontFamily: I, fontSize: 15, fontWeight: 500, color: 'var(--color-navy)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 36px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                Get a Free Quote <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
            </div>

            {/* Right Column: Image */}
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', height: '100%', minHeight: 400 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/hire/banner/shopify.webp" alt="Shopify Developer" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </div>

          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .wp-overview-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .wp-overview-grid > div:last-child { min-height: 320px; }
          }
        `}</style>
      </section>


      {/* ════════════════════════════════════════
          SECTION 04, WHY WORDPRESS (Smart Framework Style)
      ════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '96px 0', overflow: 'hidden' }}>
        <div className="ism-container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', margin: '0 0 16px' }}>
              Why Businesses Choose Shopify <span style={{ color: 'var(--ism-amber)' }}>for Growth</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 640, margin: '0 auto' }}>
              A commerce platform built for selling, with the tools needed to run and expand an online store.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="wp-why-process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '64px 32px', position: 'relative', zIndex: 1 }}>
              {whyWPCards.map((card, i) => (
                <div key={card.title} className="wp-why-process-item" style={{ textAlign: 'center', padding: '0 8px', position: 'relative' }}>
                  {/* Square Box Container */}
                  <div style={{ position: 'relative', width: 140, height: 140, margin: '0 auto 36px', zIndex: 1 }}>
                    <div style={{ 
                      width: '100%', 
                      height: '100%', 
                      background: '#fff', 
                      borderRadius: 16, 
                      border: '1px solid rgba(0,0,0,0.06)', 
                      boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center'
                    }}>
                      <i className={card.icon} style={{ fontSize: 36, color: 'var(--ism-amber)' }} />
                    </div>
                    {/* Number Badge - REMOVED */}
                  </div>
                  {/* Text Content */}
                  <h3 style={{ fontFamily: J, fontSize: 18, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 12, letterSpacing: '-0.2px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.65, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .wp-why-process-item::before {
            content: "";
            position: absolute;
            top: 70px;
            left: 50%;
            width: 100%;
            border-top: 2px dotted rgba(0,0,0,0.15);
            z-index: 0;
          }
          .wp-why-process-item:nth-child(3n)::before {
            display: none;
          }
          @media (max-width: 900px) {
            .wp-why-process-grid { grid-template-columns: repeat(2,1fr) !important; gap: 48px 32px !important; }
            .wp-why-process-item::before { width: 100%; }
            .wp-why-process-item:nth-child(3n)::before { display: block; }
            .wp-why-process-item:nth-child(2n)::before { display: none; }
          }
          @media (max-width: 600px) {
            .wp-why-process-grid { grid-template-columns: 1fr !important; }
            .wp-why-process-item::before { display: none !important; }
          }
        `}</style>
      </section>


      {/* ════════════════════════════════════════
          SECTION 05, SERVICES (Homepage Style)
      ════════════════════════════════════════ */}
      <section id="services" className="svc-section" style={{ padding: '64px 0 72px', background: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative blobs */}
        <div aria-hidden style={{ position: 'absolute', top: '-80px', right: '-120px', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', bottom: '-60px', left: '-80px', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />

        <div className="ism-container" style={{ position: 'relative' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 52px' }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.5px' }}>
              Full Range of Our Shopify <span style={{ color: 'var(--ism-amber)' }}>Development Services</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.80 }}>
              From custom storefronts and Shopify Plus to <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>themes, apps, migrations, performance, and integrations</span>, we handle the technical work behind your store.
            </p>
          </div>

          {/* Tab bar */}
          <div style={{ marginBottom: 44, overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
            <div style={{ display: 'flex', width: 'max-content', margin: '0 auto', flexWrap: 'nowrap', gap: 4, background: '#fff', border: '1px solid var(--color-border)', borderRadius: 14, padding: '5px', boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
              {servicesTabs.map((t, i) => {
                const isActive = activeService === i;
                return (
                  <button key={t.label} onClick={() => setActiveService(i)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '7px 12px', borderRadius: 9,
                      fontFamily: J, fontSize: 11.5, fontWeight: 600,
                      cursor: 'pointer', border: 'none',
                      background: isActive ? 'var(--color-primary)' : 'transparent',
                      color: isActive ? '#fff' : 'var(--color-text-muted)',
                      transition: 'all .20s',
                      boxShadow: isActive ? '0 4px 14px rgba(30,77,195,.25)' : 'none',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#F0F4FF'; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                  >
                    <i className={t.icon} style={{ fontSize: 10.5, color: isActive ? 'var(--ism-amber)' : 'var(--color-primary)', transition: 'color .2s' }} />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Card */}
          {servicesData.map((svc, i) => {
            if (activeService !== i) return null;
            return (
              <div key={svc.num} className="svc-card svc-fadein" style={{
                position: 'relative',
                background: 'rgba(248,255,226,0.46)',
                borderRadius: 28,
                padding: '56px 60px 64px',
                maxWidth: 1240,
                margin: '0 auto',
                border: '1px solid rgba(180,210,80,.20)',
                overflow: 'hidden',
              }}>
                {/* Grid background */}
                <div aria-hidden className="svc-grid-bg" />

                {/* Decorative blobs */}
                <div aria-hidden style={{ position: 'absolute', top: '-60px', right: '-60px', width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle,rgba(30,77,195,.08) 0%,transparent 65%)', pointerEvents: 'none' }} />
                <div aria-hidden style={{ position: 'absolute', bottom: '-90px', left: '-50px', width: 280, height: 280, borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,176,0,.14) 0%,transparent 65%)', pointerEvents: 'none' }} />

                <div className="svc-top" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 48, alignItems: 'stretch', position: 'relative', zIndex: 1 }}>
                  {/* Left Column */}
                  <div className="svc-copy">
                    <h3 style={{ fontFamily: J, fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 14, lineHeight: 1.22, letterSpacing: '-0.3px' }}>
                      {svc.title}
                    </h3>

                    <p style={{ fontFamily: I, fontSize: 14.5, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 28 }}>
                      {svc.desc}
                    </p>

                    <p style={{ fontFamily: I, fontSize: 12.5, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 16 }}>
                      EVERYTHING INCLUDED IN {svc.title}
                    </p>

                    {/* Checklist, scrollable single-column list matching homepage */}
                    <div className="svc-checklist-wrap">
                      <div className="svc-checklist">
                        {svc.bullets.map(b => (
                          <div key={b} className="svc-check-item">
                            <span className="svc-check-dot" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                      <div className="svc-checklist-fade" aria-hidden />
                    </div>

                    {/* CTA Pill */}
                    <a href="/contact" className="svc-cta-pill">
                      Get a Free Proposal <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
                    </a>
                  </div>

                  {/* Right Column, Photo + floating badges */}
                  <div className="svc-photo-wrap" style={{ position: 'relative', minHeight: 320 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img loading="lazy" src={svc.img} alt={svc.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', borderRadius: 20, display: 'block' }} />
                    <div className="svc-pin svc-pin-a"><i className="fa-solid fa-location-dot" /></div>
                    <div className="svc-pin svc-pin-b"><i className="fa-solid fa-bolt" /></div>
                    <div className="svc-rating">
                      <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ════════════════════════════════════════
          SECTION 06, TECHNOLOGIES AND TOOLS
      ════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="ism-container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(32px,4vw,48px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.2, margin: 0 }}>
              Technologies and Tools<br />Our <span style={{ color: 'var(--ism-amber)' }}>Shopify Developers</span> Work With
            </h2>
          </div>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
            {techCategories.map((cat, idx) => {
              // Alternate between #3060e9 (blue) and #ffb000 (amber)
              const isBlue = idx % 2 === 0;
              const categoryColor = isBlue ? '#3060e9' : '#ffb000';
              const pillBgColor = isBlue ? '#EEF2FF' : '#FFF8E6';
              const pillTextColor = isBlue ? '#3060e9' : '#ffb000';
              
              return (
                <div key={cat.label} className="wp-tech-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap' }}>
                  <div style={{ 
                    fontFamily: J, 
                    fontSize: 15, 
                    fontWeight: 700, 
                    color: categoryColor,
                    minWidth: 180,
                    paddingTop: '6px',
                    lineHeight: 1.4
                  }}>
                    {cat.label}
                  </div>
                  <div className="wp-tech-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, flex: 1, alignItems: 'center' }}>
                    {cat.tools.map(tool => (
                      <span key={tool} style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        padding: '9px 16px', 
                        borderRadius: 6, 
                        background: pillBgColor,
                        border: `1.5px solid ${pillTextColor}`,
                        fontFamily: I, 
                        fontSize: 13, 
                        fontWeight: 600, 
                        color: pillTextColor, 
                        whiteSpace: 'nowrap',
                        transition: 'all .2s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = pillTextColor;
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = pillBgColor;
                        e.currentTarget.style.color = pillTextColor;
                        e.currentTarget.style.transform = '';
                      }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════
          SECTION 07, MID-PAGE CTA
      ════════════════════════════════════════ */}
      <section className="wp-mid-cta" style={{ paddingTop: 150, paddingBottom: 64, background: '#fff', overflow: 'visible' }}>
        <div className="ism-container">

          <div className="wp-cta-card" style={{ position: 'relative', background: 'var(--ism-blue-50)', borderRadius: 24, padding: '24px 60px', display: 'grid', gridTemplateColumns: '1fr clamp(220px, 30vw, 320px)', alignItems: 'end', gap: 60, minHeight: 180 }}>
            
            {/* Decorative glows */}
            <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(30,77,195,.06) 0%,transparent 65%)', pointerEvents: 'none', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', left: '10%', bottom: '-30%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(255,176,0,.08) 0%,transparent 65%)', pointerEvents: 'none', borderRadius: '50%' }} />

            {/* ── Left: Text + Buttons ── */}
            <div style={{ position: 'relative', zIndex: 2, padding: '10px 0', alignSelf: 'center' }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(24px,3vw,34px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, marginBottom: 16 }}>
                Got a Shopify Store That Is Not <span style={{ color: 'var(--ism-amber)' }}>Converting the Way It Should?</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 560, marginBottom: 24 }}>
                Tell us what your store needs and we&apos;ll recommend the right development solution that is <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>absolutely free</span>.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '14px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 6px 20px rgba(255,176,0,.35)', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
                >
                  Book a Free Store Audit <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                </a>
              </div>
            </div>

            {/* ── Right: Person Illustration (Bleeds Top, Flush Bottom) ── */}
            <div className="wp-cta-person" style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%', minHeight: 200, overflow: 'visible', marginBottom: -24 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/result_footer/ready_for_result.webp"
                alt="Shopify Developer CTA"
                style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 'auto', maxWidth: 'none', height: '125%', display: 'block', objectFit: 'contain', objectPosition: 'bottom center' }}
              />
            </div>

          </div>

        </div>

        <style>{`
          @media (max-width: 1024px) {
            .wp-cta-card { padding: 34px 30px !important; gap: 40px !important; }
            .wp-cta-person { margin-bottom: -34px !important; }
          }
          @media (max-width: 768px) {
            .wp-cta-card { grid-template-columns: 1fr !important; padding: 32px 24px !important; text-align: center; gap: 0 !important; overflow: hidden; }
            .wp-cta-person { position: static !important; width: 220px !important; height: 220px !important; aspect-ratio: auto !important; margin: 0 auto 24px !important; order: -1; overflow: hidden !important; }
            .wp-cta-person img { position: static !important; left: auto !important; transform: none !important; width: 100% !important; max-width: 220px !important; height: auto !important; }
            .wp-mid-cta h2 { font-size: 28px !important; }
            .wp-mid-cta p { margin: 0 auto 28px !important; }
            .wp-mid-cta a { justify-content: center; width: 100%; }
          }
        `}</style>
      </section>


      {/* ════════════════════════════════════════
          SECTION 08, WHY ISUREMEDIA
      ════════════════════════════════════════ */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="ism-container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(32px,4vw,48px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, margin: 0 }}>
              Why Businesses Choose Our Shopify<br />Developers from <span style={{ color: 'var(--ism-amber)' }}>Isuremedia</span>
            </h2>
          </div>
          <div className="wp-whyism-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, alignItems: 'flex-start' }}>
            {whyISMCards.map((card, idx) => {
              const isFeatured = idx === 1; // Middle card is featured
              return (
                <div key={card.title}
                  style={{
                    background: isFeatured ? '#fef5d4' : 'transparent',
                    borderRadius: 0,
                    padding: isFeatured ? '48px 32px 40px' : '40px 28px 32px',
                    border: 'none',
                    transition: 'transform .18s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: isFeatured ? 2 : 1,
                    transform: isFeatured ? 'translateY(-16px)' : 'none',
                    boxShadow: isFeatured ? '0 16px 40px rgba(254,245,212,.24)' : 'none',
                  }}
                  onMouseEnter={e => {
                    if (!isFeatured) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isFeatured) {
                      e.currentTarget.style.transform = '';
                    }
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                    <i className={card.icon} style={{ 
                      fontSize: 48, 
                      color: isFeatured ? '#1a1a1a' : '#ffd369',
                      opacity: 0.9
                    }} />
                  </div>
                  <h3 style={{
                    marginBottom: 12,
                    fontFamily: J,
                    fontSize: 16,
                    fontWeight: 700,
                    color: isFeatured ? 'rgba(0,0,0,0.85)' : 'var(--color-navy)',
                    letterSpacing: '-0.2px',
                    lineHeight: 1.3,
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontFamily: I,
                    fontSize: 13.5,
                    color: isFeatured ? 'rgba(0,0,0,0.7)' : 'var(--color-text-muted)',
                    lineHeight: 1.65,
                    margin: 0,
                    flex: 1,
                  }}>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .wp-whyism-grid { grid-template-columns: repeat(2,1fr) !important; gap: 28px 24px !important; }
            .wp-whyism-grid > div:nth-child(2) { grid-column: auto !important; transform: none !important; box-shadow: none !important; }
          }
          @media (max-width: 600px) {
            .wp-whyism-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>


      {/* ════════════════════════════════════════
          SECTION 09, ENGAGEMENT MODELS
      ════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-bg-soft)', padding: '96px 0' }}>
        <div className="ism-container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.15, marginBottom: 16 }}>
              Start With the Right <span style={{ color: 'var(--ism-amber)' }}>Shopify Development Plan</span>
            </h2>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 600, margin: '0 auto' }}>
              Choose project-based development, ongoing support, or <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>white-label Shopify delivery</span> based on how your store or agency operates.
            </p>
          </div>

          <div className="wp-eng-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, alignItems: 'stretch' }}>
            {engagementModels.map((eng, i) => (
              <div key={eng.title} style={{
                borderRadius: 16, padding: '40px 32px',
                border: i === 1 ? '2px solid var(--color-primary)' : 'none',
                background: '#fff',
                position: 'relative',
                display: 'flex', flexDirection: 'column',
                boxShadow: i === 1 ? '0 12px 36px rgba(0,0,0,0.08)' : '0 8px 30px rgba(0,0,0,0.05)',
                transform: i === 1 ? 'scale(1.02)' : 'none',
                zIndex: i === 1 ? 2 : 1,
              }}>
                {i === 1 && (
                  <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--ism-amber)', color: 'var(--color-navy)', fontFamily: J, fontSize: 11, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', padding: '6px 20px', borderRadius: 100, whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}
                
                {/* Tag */}
                <p style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: 'var(--color-primary)', marginBottom: 16, letterSpacing: '.06em', textTransform: 'uppercase' }}>
                  {eng.title}
                </p>
                
                {/* Title */}
                <h3 style={{ fontFamily: J, fontSize: 24, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 16, letterSpacing: '-0.3px' }}>
                  {eng.title}
                </h3>
                
                {/* Desc */}
                <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 32, minHeight: 78 }}>
                  {eng.desc}
                </p>
                
                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40, flex: 1 }}>
                  {eng.bullets.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <i className="fa-solid fa-check" style={{ fontSize: 12, color: 'var(--ism-amber)', marginTop: 4, flexShrink: 0 }} />
                      <span style={{ fontFamily: I, fontSize: 14, color: 'var(--color-navy)', lineHeight: 1.6, fontWeight: 500 }}>{b}</span>
                    </div>
                  ))}
                </div>
                
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 40px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,176,0,.50)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,176,0,.35)'; }}
            >
              Get Started <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }} />
            </a>
          </div>

          <style>{`
            @media (max-width: 1024px) {
              .wp-eng-grid { grid-template-columns: 1fr 1fr !important; }
              .wp-eng-grid > div:nth-child(3) { grid-column: span 2; max-width: 50%; margin: 0 auto; }
            }
            @media (max-width: 768px) {
              .wp-eng-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
              .wp-eng-grid > div:nth-child(3) { grid-column: auto; max-width: 100%; }
              .wp-eng-grid > div { transform: none !important; }
            }
          `}</style>
        </div>
      </section>


      {/* ════════════════════════════════════════
          SECTION 10, HOW IT WORKS (Using HowItWorks Component)
      ════════════════════════════════════════ */}
      <HowItWorks
        title="How We Take Your Project From Plan to Delivery"
        highlightWord="to Delivery"
        subtitle="Tell us what you need. We'll match the right Shopify development approach before the work begins."
        steps={[
          { num: 1, title: 'Share Your Requirement', text: 'Tell us what you need: a new store, a feature, a fix, a migration, or ongoing support. No long forms. Just explain what is going on.' },
          { num: 2, title: 'We Match You to the Right Setup', text: "Every Shopify project is different. We review the work involved and recommend the right developer, scope, and engagement." },
          { num: 3, title: 'Work Begins Within 48 Hours', text: 'Once the scope is approved and access is ready, your developer gets to work. They start with the requirements already agreed with you.' },
          { num: 4, title: 'You Stay in Control', text: 'Review work as it comes in and give feedback directly. Scope changes are discussed before anything outside the agreed work is added.' },
        ]}
        ctaText="Start Your Project"
        ctaHref="/contact"
        backgroundColor="#fff"
        titleColor="var(--ism-amber)"
      />


      {/* ════════════════════════════════════════
          SECTION 11, FAQ
      ════════════════════════════════════════ */}
      <section className="wp-faq-section" style={{ padding: '96px 0', background: 'var(--color-bg-soft)' }}>
        <div className="ism-container">
          <div className="wp-faq-grid" style={{ display: 'grid', gridTemplateColumns: 'clamp(280px, 35%, 360px) 1fr', gap: 64, alignItems: 'flex-start' }}>
            
            {/* ── Left Column: Title & CTA ── */}
            <div style={{ position: 'sticky', top: 120 }}>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 20 }}>
                FAQs About <br />
                <span style={{ color: 'var(--ism-amber)' }}>Shopify Development</span>
              </h2>
              <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 36 }}>
                Know about development, cost, timelines, Shopify Plus, migrations, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>ownership and ongoing support</span>.
              </p>
              <a href="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 800, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 6px 20px rgba(255,176,0,.25)'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}
              >
                Get Started <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </a>
            </div>

            {/* ── Right Column: FAQ Accordion ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} style={{ 
                    background: '#fff', 
                    border: `1px solid ${isOpen ? 'var(--color-primary)' : 'rgba(0,0,0,0.06)'}`, 
                    borderRadius: 12, 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                    transition: 'border-color 0.2s ease'
                  }}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      style={{ width: '100%', padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, cursor: 'pointer', background: 'transparent', border: 'none', textAlign: 'left' }}
                    >
                      <span style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.45, flex: 1 }}>{faq.q}</span>
                      <i 
                        className={`fa-solid fa-chevron-down`} 
                        style={{ 
                          fontSize: 14, 
                          color: 'var(--ism-amber)', 
                          transition: 'transform .3s ease', 
                          transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)' 
                        }} 
                      />
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 28px 26px' }}>
                        <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
          </div>

          <style>{`
            @media (max-width: 900px) {
              .wp-faq-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
              .wp-faq-grid > div:first-child { text-align: center; }
            }
          `}</style>
        </div>
      </section>


      {/* ════════════════════════════════════════
          SECTION 12, ENDING CTA
      ════════════════════════════════════════ */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="ism-container">
          <div style={{ background: 'linear-gradient(135deg,#1E4DC3 0%,#4484EE 100%)', borderRadius: 24, padding: '56px 60px', position: 'relative', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            {/* Decorative elements */}
            <div style={{ position: 'absolute', top: '-15%', right: '25%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents: 'none', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: '-20%', left: '5%', width: 300, height: 300, background: 'radial-gradient(circle,rgba(255,176,0,.12) 0%,transparent 65%)', pointerEvents: 'none', borderRadius: '50%' }} />

            {/* Left Column - Text */}
            <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
              <h2 style={{ fontFamily: J, color: '#fff', marginBottom: 20, lineHeight: 1.2, fontSize: 'clamp(28px, 3.5vw, 38px)' }}>
                Let&apos;s Build the Shopify Store <span style={{ color: 'var(--ism-amber)' }}>Your Business Needs</span>
              </h2>
              <p className="wp-end-cta-para" style={{ fontFamily: I, fontSize: 16, color: 'rgba(255,255,255,.85)', lineHeight: 1.78, marginBottom: 36, maxWidth: 640 }}>
                Whether you&apos;re building a new store, fixing what is not working, migrating from another platform, or adding new functionality, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>we&apos;ll help you choose the right development approach</span> and get the work moving.
              </p>
              <div className="wp-end-btns" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <a href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s', boxShadow: '0 6px 20px rgba(255,176,0,.35)', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                  Plan My Shopify Project <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                </a>
                <a href="/appointment"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: '#fff', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'all .18s', boxShadow: '0 4px 16px rgba(0,0,0,.12)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-bg-soft)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = ''; }}>
                  Talk to an Expert
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div style={{ position: 'relative', zIndex: 2, height: 'auto', minHeight: 300 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" 
                src="/result_footer/website &funnels.webp" 
                alt="Shopify Store Development" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
              />
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              .ism-container > div:has(> div > .wp-end-cta-para) {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
                padding: 40px 30px !important;
              }
            }
            @media (max-width: 600px) {
              .wp-end-btns {
                flex-direction: column !important;
                width: 100% !important;
              }
              .wp-end-btns a {
                width: 100% !important;
                justify-content: center !important;
              }
            }
          `}</style>
        </div>
      </section>

      <Footer />


      {/* ═══════════════════════════════════════════
          RESPONSIVE STYLES
      ═══════════════════════════════════════════ */}
      <style>{`
        /* ── Hero ── */
        @media (max-width: 768px) {
          .wp-hero { padding: 56px 0 48px !important; }
          .wp-trust-chips { gap: 14px !important; }
        }
        @media (max-width: 480px) {
          .wp-hero { padding: 44px 0 36px !important; }
          .wp-hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .wp-hero-btns a { justify-content: center !important; width: 100% !important; box-sizing: border-box !important; }
          .wp-trust-chips { flex-direction: column !important; gap: 10px !important; }
        }

        /* ── Proof Strip ── */
        @media (max-width: 900px) {
          .wp-proof-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          .wp-proof-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Why WordPress + Why ISM Cards ── */
        @media (max-width: 900px) {

        /* ── Services Section Homepage Styling ── */
        .svc-fadein { animation: svcFade .32s cubic-bezier(.4,0,.2,1) both; }
        @keyframes svcFade { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }

        .svc-photo-wrap { position: relative; height: 100%; min-height: 320px; }
        .svc-pin { position: absolute; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #fff; color: #fff; z-index: 2; }
        .svc-pin-a { top: -14px; right: 34px; width: 38px; height: 38px; background: var(--color-primary); box-shadow: 0 8px 18px rgba(30,77,195,.40); font-size: 14px; }
        .svc-pin-b { top: 92px; right: -14px; width: 30px; height: 30px; background: var(--ism-amber); box-shadow: 0 8px 18px rgba(255,176,0,.40); font-size: 11px; }
        .svc-rating { position: absolute; bottom: -16px; left: 20px; background: #fff; border-radius: 12px; padding: 9px 14px; display: flex; align-items: center; gap: 3px; box-shadow: 0 10px 24px rgba(0,35,83,.16); z-index: 2; }
        .svc-rating i { color: var(--ism-amber); font-size: 11px; }

        .svc-grid-bg {
          position: absolute; inset: 0; pointer-events: none; z-index: 0; border-radius: 28px; overflow: hidden;
          background-image:
            radial-gradient(circle 360px at 0% 0%,   transparent 340px, rgba(80,155,25,.055) 341px, rgba(80,155,25,.055) 343px, transparent 344px),
            radial-gradient(circle 260px at 0% 0%,   transparent 242px, rgba(80,155,25,.040) 242px, rgba(80,155,25,.040) 244px, transparent 245px),
            radial-gradient(circle 165px at 0% 0%,   transparent 149px, rgba(80,155,25,.030) 149px, rgba(80,155,25,.030) 151px, transparent 152px),
            radial-gradient(circle 320px at 100% 100%, transparent 302px, rgba(80,155,25,.048) 302px, rgba(80,155,25,.048) 304px, transparent 305px),
            radial-gradient(circle 220px at 100% 100%, transparent 204px, rgba(80,155,25,.035) 204px, rgba(80,155,25,.035) 206px, transparent 207px),
            radial-gradient(circle 128px at 100% 100%, transparent 114px, rgba(80,155,25,.025) 114px, rgba(80,155,25,.025) 116px, transparent 117px);
        }
        .svc-grid-bg::before {
          content: ''; position: absolute; top: 26px; left: 26px; width: 52px; height: 52px;
          border-top: 1.5px solid rgba(80,155,25,.12); border-left: 1.5px solid rgba(80,155,25,.12); border-radius: 6px 0 0 0;
        }
        .svc-grid-bg::after {
          content: ''; position: absolute; bottom: 26px; right: 26px; width: 52px; height: 52px;
          border-bottom: 1.5px solid rgba(80,155,25,.10); border-right: 1.5px solid rgba(80,155,25,.10); border-radius: 0 0 6px 0;
        }

        .svc-checklist-wrap { position: relative; margin-bottom: 28px; }
        .svc-checklist {
          max-height: 204px; overflow-y: auto; padding-right: 4px; padding-bottom: 2px;
          display: flex; flex-direction: column; gap: 8px;
          scrollbar-width: none;
        }
        .svc-checklist::-webkit-scrollbar { display: none; }
        .svc-checklist-fade {
          position: absolute; left: 0; right: 4px; bottom: 0; height: 28px;
          background: linear-gradient(to bottom, rgba(248,255,226,0) 0%, rgba(248,255,226,0.85) 90%);
          pointer-events: none; border-radius: 0 0 12px 12px;
        }

        .svc-check-item {
          display: flex; align-items: center; gap: 12px;
          text-decoration: none; flex-shrink: 0;
          padding: 11px 16px; border-radius: 12px;
          background: #fff; border: 1px solid rgba(30,77,195,.08);
          transition: background .18s, border-color .18s, transform .18s;
          cursor: pointer;
        }
        .svc-check-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-primary); flex-shrink: 0; transition: background .18s; }
        .svc-check-item span { font-family: var(--font-inter, Inter, sans-serif); font-size: 14px; font-weight: 700; color: var(--color-navy); line-height: 1.3; }
        .svc-check-item:hover {
          background: linear-gradient(135deg,#FFC229 0%,#FFB000 100%);
          border-color: transparent; transform: translateX(4px);
        }
        .svc-check-item:hover .svc-check-dot { background: var(--color-navy); }

        .svc-cta-pill {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg,#FFC229 0%,#FFB000 100%); color: var(--color-navy);
          font-family: var(--font-jakarta, "Plus Jakarta Sans", sans-serif); font-weight: 800; font-size: 13px;
          letter-spacing: .03em; text-transform: uppercase;
          padding: 15px 32px; border-radius: 100px;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 10px 30px rgba(255,176,0,.35);
          transition: all .18s;
        }
        .svc-cta-pill:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(255,176,0,.45); }

        @media (max-width: 900px) {
          .svc-card { padding: 40px 28px 48px !important; }
          .svc-top { grid-template-columns: minmax(0,1fr) !important; gap: 24px !important; }
          .svc-photo-wrap { order: -1; margin-bottom: 12px; height: auto; aspect-ratio: 16/9; min-height: unset !important; }
          .svc-checklist { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .svc-card { padding: 32px 18px 40px !important; }
          .svc-check-item { padding: 10px 12px !important; }
          .svc-cta-pill { white-space: normal !important; text-align: center; padding: 14px 22px !important; width: 100%; justify-content: center; }
        }

        /* ── Technologies ── */
        @media (max-width: 768px) {
          .wp-tech-row { grid-template-columns: 1fr !important; gap: 10px !important; }
        }

        /* ── Engagement Models ── */
        @media (max-width: 900px) {
          .wp-eng-grid { grid-template-columns: 1fr !important; max-width: 520px !important; margin: 0 auto !important; }
        }

        /* ── Process Timeline ── */
        @media (max-width: 900px) {
          .wp-process-grid { grid-template-columns: repeat(2,1fr) !important; }
          .wp-timeline-line { display: none !important; }
        }
        @media (max-width: 540px) {
          .wp-process-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Ending CTA ── */
        @media (max-width: 768px) {
          .wp-end-btns { flex-direction: column !important; align-items: stretch !important; }
          .wp-end-btns a { justify-content: center !important; width: 100% !important; box-sizing: border-box !important; white-space: normal !important; text-align: center !important; }
        }

        /* ── FAQ Sticky Fix ── */
        @media (max-width: 768px) {
          .wp-faq-grid > div:first-child { position: static !important; }
        }

        /* ════════════════════════════════════════
           MOBILE COMPREHENSIVE RESPONSIVE FIXES (320px - 480px)
        ════════════════════════════════════════ */
        @media (max-width: 480px) {
          /* ── Global Container & Section Padding ── */
          .ism-container { padding: 0 16px !important; }
          section { padding-top: 32px !important; padding-bottom: 32px !important; }

          /* ── Hero Section ── */
          .wp-hero { padding: 40px 16px 32px !important; }
          .wp-hero h1 { font-size: 28px !important; line-height: 1.2 !important; margin-bottom: 16px !important; }
          .wp-hero > div > p { font-size: 14px !important; line-height: 1.6 !important; margin-bottom: 20px !important; }
          .wp-trust-chips { flex-direction: column !important; gap: 8px !important; margin-bottom: 24px !important; }
          .wp-trust-chips > div { padding: 5px 10px !important; font-size: 11px !important; gap: 6px !important; }
          .wp-hero-btns { flex-direction: column !important; gap: 10px !important; }
          .wp-hero-btns a { width: 100% !important; padding: 12px 16px !important; font-size: 11px !important; }

          /* ── Overview Section ── */
          .wp-overview-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .wp-overview-grid > div:last-child { min-height: 220px !important; border-radius: 12px !important; }
          .wp-overview-grid h2 { font-size: 24px !important; line-height: 1.2 !important; margin-bottom: 14px !important; }
          .wp-overview-grid > div:first-child > p { font-size: 13px !important; line-height: 1.6 !important; margin-bottom: 12px !important; }
          .wp-overview-grid > div:first-child > div { grid-template-columns: 1fr 1fr !important; gap: 12px 16px !important; margin-bottom: 20px !important; }
          .wp-overview-grid > div:first-child > div > div { gap: 8px !important; }
          .wp-overview-grid > div:first-child > div i { font-size: 10px !important; }
          .wp-overview-grid > div:first-child > div span { font-size: 12px !important; }
          .wp-overview-grid > div:first-child > a { padding: 11px 20px !important; font-size: 11px !important; }

          /* ── Why Shopify Section ── */
          .wp-why-section { padding: 40px 0 !important; }
          .wp-why-section h2 { font-size: 24px !important; margin-bottom: 16px !important; }
          .wp-why-section > div:first-child > p { font-size: 13px !important; margin-bottom: 28px !important; }
          .wp-why-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .wp-why-grid > div { padding: 16px 14px !important; }
          .wp-why-grid i { font-size: 20px !important; }
          .wp-why-grid h3 { font-size: 14px !important; margin-bottom: 8px !important; }
          .wp-why-grid p { font-size: 12px !important; line-height: 1.5 !important; }

          /* ── Services Tabs ── */
          .svc-tabs-wrapper { padding: 0 !important; }
          .svc-tabs { gap: 8px !important; overflow-x: auto !important; padding-bottom: 8px !important; }
          .svc-tab { padding: 8px 12px !important; font-size: 11px !important; white-space: nowrap !important; }
          .svc-tab i { font-size: 12px !important; }

          /* ── Services Cards ── */
          .svc-card { padding: 24px 14px 32px !important; border-radius: 12px !important; }
          .svc-copy h3 { font-size: 16px !important; margin-bottom: 12px !important; }
          .svc-copy p { font-size: 12px !important; line-height: 1.5 !important; margin-bottom: 12px !important; }
          .svc-photo-wrap { min-height: 200px !important; }
          .svc-pin-a { width: 32px !important; height: 32px !important; font-size: 12px !important; }
          .svc-pin-b { width: 26px !important; height: 26px !important; font-size: 10px !important; }
          .svc-rating { padding: 6px 10px !important; font-size: 11px !important; bottom: -12px !important; left: 12px !important; }

          /* ── Tech & Tools Section ── */
          .wp-tech-section { padding: 40px 0 !important; }
          .wp-tech-section h2 { font-size: 22px !important; margin-bottom: 20px !important; }
          .wp-tech-row { flex-direction: column !important; gap: 14px !important; }
          .wp-tech-row > div:first-child { min-width: auto !important; font-size: 12px !important; font-weight: 600 !important; }
          .wp-tech-pills { gap: 6px !important; flex-wrap: wrap !important; }
          .wp-tech-pills span { padding: 6px 10px !important; font-size: 11px !important; border-radius: 6px !important; }

          /* ── Why Isuremedia Section ── */
          .wp-whyism-section { padding: 40px 0 !important; }
          .wp-whyism-section h2 { font-size: 24px !important; margin-bottom: 16px !important; }
          .wp-whyism-section > p { font-size: 13px !important; margin-bottom: 24px !important; }
          .wp-whyism-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .wp-whyism-grid > div { padding: 16px 12px !important; }
          .wp-whyism-grid > div:nth-child(2) { grid-column: auto !important; max-width: 100% !important; }
          .wp-whyism-grid h3 { font-size: 13px !important; margin-bottom: 8px !important; font-weight: 700 !important; }
          .wp-whyism-grid p { font-size: 11px !important; line-height: 1.5 !important; }

          /* ── Engagement Models ── */
          .wp-eng-section { padding: 40px 0 !important; }
          .wp-eng-section h2 { font-size: 24px !important; margin-bottom: 16px !important; }
          .wp-eng-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .wp-eng-grid > div { padding: 18px 14px !important; }
          .wp-eng-grid h3 { font-size: 14px !important; margin-bottom: 8px !important; }
          .wp-eng-grid p { font-size: 11px !important; line-height: 1.5 !important; margin-bottom: 10px !important; }
          .wp-eng-grid button { padding: 10px 16px !important; font-size: 11px !important; }

          /* ── How It Works ── */
          .hiw-section { padding: 40px 0 !important; }
          .hiw-grid { grid-template-columns: 1fr !important; gap: 16px !important; }

          /* ── FAQ Section ── */
          .wp-faq-section { padding: 40px 0 !important; }
          .wp-faq-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .wp-faq-grid > div:first-child { text-align: center !important; margin-bottom: 12px !important; }
          .wp-faq-grid h2 { font-size: 22px !important; margin-bottom: 12px !important; }
          .wp-faq-grid > div:first-child > p { font-size: 12px !important; margin-bottom: 16px !important; }
          .wp-faq-grid > div:first-child > a { padding: 10px 18px !important; font-size: 10px !important; }
          .wp-faq-grid > div:last-child { display: flex !important; flex-direction: column !important; gap: 12px !important; }
          .wp-faq-grid button { padding: 14px 12px !important; font-size: 12px !important; text-align: left !important; }
          .wp-faq-grid button i { font-size: 12px !important; }

          /* ── Ending CTA Section ── */
          .wp-end-section { padding: 32px 0 !important; }
          .ism-container > div:last-of-type { grid-template-columns: 1fr !important; gap: 16px !important; padding: 24px 14px !important; border-radius: 12px !important; }
          .ism-container > div:last-of-type h2 { font-size: 20px !important; margin-bottom: 10px !important; line-height: 1.2 !important; }
          .ism-container > div:last-of-type p { font-size: 12px !important; margin-bottom: 14px !important; line-height: 1.5 !important; }
          .wp-end-btns { flex-direction: column !important; gap: 8px !important; }
          .wp-end-btns a { width: 100% !important; padding: 10px 14px !important; font-size: 11px !important; }

          /* ── Hide Decorative Elements ── */
          .wp-hero::before,
          .wp-hero::after,
          .svc-grid-bg,
          .svc-grid-bg::before,
          .svc-grid-bg::after {
            display: none !important;
          }

          /* ── Smooth Typography Scaling ── */
          h2 { font-size: clamp(20px, 5vw, 24px) !important; }
          h3 { font-size: clamp(13px, 4vw, 16px) !important; }
          p { font-size: clamp(11px, 3.5vw, 13px) !important; }
        }

        /* ════════════════════════════════════════
           TABLET COMPREHENSIVE RESPONSIVE FIXES (481px - 768px)
        ════════════════════════════════════════ */
        @media (max-width: 768px) and (min-width: 481px) {
          /* ── Global ── */
          .ism-container { padding: 0 20px !important; }
          section { padding-top: 56px !important; padding-bottom: 56px !important; }

          /* ── Hero ── */
          .wp-hero { padding: 56px 20px 48px !important; }
          .wp-hero h1 { font-size: 32px !important; margin-bottom: 18px !important; }
          .wp-hero > div > p { font-size: 15px !important; margin-bottom: 24px !important; }
          .wp-trust-chips { gap: 12px !important; }
          .wp-hero-btns { flex-direction: column !important; }
          .wp-hero-btns a { width: 100% !important; font-size: 12px !important; }

          /* ── Overview ── */
          .wp-overview-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .wp-overview-grid > div:last-child { min-height: 300px !important; }
          .wp-overview-grid h2 { font-size: 32px !important; margin-bottom: 18px !important; }

          /* ── Why WordPress ── */
          .wp-why-grid { grid-template-columns: repeat(2,1fr) !important; gap: 20px !important; }

          /* ── Services ── */
          .svc-tabs { gap: 10px !important; }
          .svc-tab { padding: 10px 14px !important; font-size: 12px !important; }
          .svc-card { padding: 32px 22px 40px !important; }
          .svc-photo-wrap { min-height: 260px !important; }

          /* ── Tech ── */
          .wp-tech-row { flex-direction: column !important; gap: 16px !important; }

          /* ── Why Isuremedia ── */
          .wp-whyism-grid { grid-template-columns: repeat(2,1fr) !important; gap: 18px !important; }

          /* ── Engagement ── */
          .wp-eng-grid { grid-template-columns: 1fr !important; gap: 18px !important; }
          .wp-eng-grid > div:nth-child(3) { grid-column: auto; max-width: 100%; }

          /* ── FAQ ── */
          .wp-faq-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .wp-faq-grid > div:first-child { margin-bottom: 12px !important; }

          /* ── Ending CTA ── */
          .ism-container > div:last-of-type { grid-template-columns: 1fr !important; gap: 28px !important; padding: 32px 24px !important; }
          .wp-end-btns { flex-direction: column !important; }
          .wp-end-btns a { width: 100% !important; }
        }
      `}</style>
    </>
  );
}
