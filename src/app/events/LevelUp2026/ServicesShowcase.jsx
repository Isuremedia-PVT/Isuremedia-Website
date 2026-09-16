'use client';

import { useState } from 'react';

const TABS = [
  {
    label: 'GoHighLevel Development',
    icon: 'fa-gears',
    heading: 'GoHighLevel Builds That Convert',
    desc: 'Full GHL implementation, from your first funnel to full automation.',
    items: ['Funnels & landing pages', 'Onboarding flows & pipelines', 'Calendars & forms', 'Memberships & custom integrations'],
    href: '/gohighlevel-development-services',
    cta: 'Explore GHL Development →',
  },
  {
    label: 'White-Label Fulfillment',
    icon: 'fa-tags',
    heading: 'Delivered Under Your Brand',
    desc: 'Behind-the-scenes execution so your agency stays front and center.',
    items: ['Behind-the-scenes execution', 'Project coordination', 'QA & testing', 'Ongoing support'],
    href: '/gohighlevel-white-label-support-services',
    cta: 'Explore White-Label Services →',
  },
  {
    label: 'Marketing Automation',
    icon: 'fa-bolt',
    heading: 'Automation That Converts Leads',
    desc: 'Workflows and systems that turn leads into customers automatically.',
    items: ['Lead routing & follow-up', 'CRM setup', 'Email & SMS integrations', 'Conversion-focused automations'],
    href: '/marketing-automation-agency',
    cta: 'Explore Automation Services →',
  },
  {
    label: 'Websites & Funnels',
    icon: 'fa-globe',
    heading: 'Websites & Funnels Built to Convert',
    desc: 'We design and build websites and sales funnels that turn visitors into leads and customers.',
    items: ['Landing & campaign pages', 'WordPress & Shopify', 'GoHighLevel sites', 'Migrations & redesigns'],
    href: '/websites-and-funnels',
    cta: 'Explore Web & Funnel Services →',
  },
  {
    label: 'SEO & Paid Marketing',
    icon: 'fa-magnifying-glass-chart',
    heading: 'SEO & Paid Media That Convert',
    desc: 'Technical SEO and paid media that turn traffic into qualified leads.',
    items: ['Technical SEO & content planning', 'Google & Meta Ads', 'LinkedIn Ads', 'Tracking & reporting'],
    href: '/seo-services',
    cta: 'Explore SEO & Paid Services →',
  },
  {
    label: 'Content & Creative',
    icon: 'fa-palette',
    heading: 'Creative That Keeps You On-Brand',
    desc: 'Design and content production that keeps every campaign on-brand.',
    items: ['Graphic design', 'Video editing', 'Social assets', 'Creative production'],
    href: '/graphic-design-agency',
    cta: 'Explore Creative Services →',
  },
];

const ORBIT_POS = [
  { top: '0%', left: '50%' },
  { top: '25%', left: '95%' },
  { top: '75%', left: '95%' },
  { top: '100%', left: '50%' },
  { top: '75%', left: '5%' },
  { top: '25%', left: '5%' },
];

export default function ServicesShowcase() {
  const [active, setActive] = useState(3);
  const tab = TABS[active];

  return (
    <div className="showcase">
      <div className="showcase-tabs">
        {TABS.map((t, i) => (
          <button
            key={t.label}
            type="button"
            className={`showcase-tab${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <i className={`fa-solid ${t.icon}`} /> {t.label}
          </button>
        ))}
      </div>

      <div className="showcase-panel">
        <div className="showcase-text">
          <h3>{tab.heading}</h3>
          <p>{tab.desc}</p>
          <div className="showcase-list-label">Everything included</div>
          <ul className="showcase-list">
            {tab.items.map((item) => (
              <li key={item}><i className="fa-solid fa-check" /> {item}</li>
            ))}
          </ul>
          <a className="btn btn-primary" href={tab.href}>{tab.cta}</a>
        </div>
        <div className="showcase-visual">
          <div className="showcase-ring" />
          <div className="showcase-hub"><i className={`fa-solid ${tab.icon}`} /></div>
          {TABS.map((t, i) => (
            <div
              key={t.label}
              className={`showcase-orbit${i === active ? ' is-active' : ''}`}
              style={ORBIT_POS[i]}
              title={t.label}
            >
              <i className={`fa-solid ${t.icon}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
