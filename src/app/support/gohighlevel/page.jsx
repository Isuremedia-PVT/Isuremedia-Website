'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewsStrip from '@/components/ReviewsStrip';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const HERO_CARDS = [
  { label: 'White-Label Dedicated VA', icon: 'fa-solid fa-headset', bg: '#FFE3E9', color: '#E84C6B' },
  { label: 'Dedicated Project Manager', icon: 'fa-solid fa-user-tie', bg: '#FFE9D6', color: '#E8873F' },
  { label: 'GHL Unlimited Onboarding', icon: 'fa-solid fa-diagram-project', bg: '#E6F6EC', color: '#2FA35C' },
  { label: 'Graphics & Video Editing Support', icon: 'fa-solid fa-photo-film', bg: '#EFE7FF', color: '#7C4DE0' },
  { label: 'Other CRM Migration to GHL', icon: 'fa-solid fa-cloud-arrow-up', bg: '#E4F1FF', color: '#2E8FE0' },
  { label: 'Dedicated WordPress Support', icon: 'fa-brands fa-wordpress', bg: '#E4F1FF', color: '#21759B' },
  { label: 'Zapier, Make, Pabbly, API Expert', icon: 'fa-solid fa-bolt', bg: '#FFF3D6', color: '#E0A32E' },
  { label: 'Facebook Pixel Support', icon: 'fa-brands fa-facebook', bg: '#E4EAFF', color: '#3B5998' },
];

const FREE_BENEFITS = [
  'FREE Weekend Support',
  'FREE 3 Month Support',
  'FREE Funnel and Website Templates',
  'FREE Graphics Design Services',
];

const PERSONALIZED_SUPPORT = [
  'A Dedicated Project Manager',
  'A Dedicated VA',
  'Client Onboarding (Personalized 1-on-1 Calls and 2 Onboarding Calls with Project Managers)',
  'FREE Graphics Design Support',
  'FREE Video Editing Service',
  'FREE Go High Level API Developer',
  'FREE WordPress, Shopify Expert Support',
  'FREE Support for CRM Migrations to Your Agency (Kajabi, Kartra, ClickFunnel, Ontraport, Keap, Active Campaign, ConvertKit)',
];

const WHATS_MORE = [
  { title: 'Free Weekend Support', text: 'Benefit from weekend support via email with a response time of 12 hours, available with any plan.', icon: 'fa-solid fa-calendar-week', bg: '#E4F1FF', color: '#2E8FE0' },
  { title: 'Free Graphics Design Services', text: 'Included with Part-Time and Full-Time Virtual Assistant plans, get complimentary graphics design services to enhance your projects.', icon: 'fa-solid fa-palette', bg: '#EFE7FF', color: '#7C4DE0' },
  { title: 'Template Library Access', text: 'Explore our extensive library with free premium funnel/website templates. Additionally, request a new design for free, and receive a snapshot of your vision brought to life.', icon: 'fa-solid fa-layer-group', bg: '#E6F6EC', color: '#2FA35C' },
  { title: 'Free Application Support', text: 'Receive free support on various applications, including ZappyChat, PabblyConnect, Make.com, Zapier, ManyChat, Shopify, ClickFunnel, Kajabi, Ontraport, WordPress, Woo-Ecommerce, Active Campaign, MailChimp, GroupTrack, and more.', icon: 'fa-solid fa-puzzle-piece', bg: '#FFE9D6', color: '#E8873F' },
];

const SERVICE_CAPABILITIES = [
  { label: 'Managing calendars, appointments and emails', icon: 'fa-solid fa-calendar-check', bg: '#E4F1FF', color: '#2E8FE0' },
  { label: 'Set up email automations, tags, segments', icon: 'fa-solid fa-tags', bg: '#FFF3D6', color: '#E0A32E' },
  { label: 'Developing website', icon: 'fa-solid fa-code', bg: '#E4EAFF', color: '#3B5998' },
  { label: 'Automating Onboarding Processes', icon: 'fa-solid fa-gears', bg: '#FFE9D6', color: '#E8873F' },
  { label: 'White Labeling GoHighLevel', icon: 'fa-solid fa-tag', bg: '#E6F6EC', color: '#2FA35C' },
  { label: 'Building any type of funnel', icon: 'fa-solid fa-filter', bg: '#EFE7FF', color: '#7C4DE0' },
  { label: 'Product setup', icon: 'fa-solid fa-box', bg: '#FFE3E9', color: '#E84C6B' },
  { label: 'Triggered Setup', icon: 'fa-solid fa-bolt', bg: '#FFF3D6', color: '#E0A32E' },
  { label: 'Payment Gateway integration', icon: 'fa-solid fa-credit-card', bg: '#E6F6EC', color: '#2FA35C' },
  { label: 'Creating, Importing and Exporting Snapshots', icon: 'fa-solid fa-file-export', bg: '#E4F1FF', color: '#2E8FE0' },
  { label: 'Landing, Checkout and Thankyou Page', icon: 'fa-solid fa-receipt', bg: '#EFE7FF', color: '#7C4DE0' },
  { label: 'And much more', icon: 'fa-solid fa-circle-plus', bg: '#FFE9D6', color: '#E8873F' },
];

const TOOL_LOGOS = [
  { label: 'Kajabi', icon: 'fa-solid fa-graduation-cap', color: '#0B5FFF' },
  { label: 'Shopify', icon: 'fa-brands fa-shopify', color: '#95BF47' },
  { label: 'WordPress', icon: 'fa-brands fa-wordpress', color: '#21759B' },
  { label: 'Zapier', icon: 'fa-solid fa-bolt', color: '#FF4A00' },
  { label: 'Make', icon: 'fa-solid fa-diagram-project', color: '#6D00CC' },
  { label: 'Pabbly Connect', icon: 'fa-solid fa-link', color: '#2FA35C' },
  { label: 'ManyChat', icon: 'fa-solid fa-comments', color: '#00B2FF' },
  { label: 'ClickFunnel', icon: 'fa-solid fa-filter', color: '#F95D27' },
  { label: 'Ontraport', icon: 'fa-solid fa-chart-line', color: '#0F2070' },
  { label: 'Mailchimp', icon: 'fa-solid fa-envelope', color: '#C79A00' },
];

const DETAILED_SERVICES = [
  "White-label GHL with client's branding colors and connect to your domain",
  'Verify domain in Mailgun and connect Mailgun to GHL',
  'Connect Twilio',
  'Setting up your SaaS product/pricing and funnels',
  'Create a website and membership site',
  'Setting up the workflow automation for different purposes',
  'Setting up products and integrating them into the funnels',
  'Connect Facebook and Instagram Lead Ads to the workflow',
  'Setting up the calendars',
  'Create pipeline and opportunity',
  'Setting up the review funnel and automation',
  'Apply a tag to all events so we can create a smart list for reporting',
  'Create beautiful contract forms, design forms, and calendars',
  'Connect the GHL form to WordPress and Wix websites',
];

const TESTIMONIALS = [
  { id: 'fw3mbpKINlk', name: 'Jonathan', company: 'businesswarrior.com', quote: 'You guys have been awesome. Just the technical availability, the implementation, the communication, you guys have just hit all the high marks.', video: true },
  { id: 'gGU8SC3epSI', name: 'Jennifer', company: 'Positive Approach Life & ADHD Coaching', quote: "They were very professional. They have multiple people working on your project so you really feel like you're working with a team.", video: true },
  { id: 'orSfNgD-jgk', name: 'Ed Owens', company: 'Grief Recovery Institute', quote: "They are very accessible, very timely in their response, very customer service focussed, and it's been a pleasure to work with Isuremedia.", video: true },
  { id: 'itCkmJ0lcQI', name: 'Stephen Petrucci', company: 'Systemized AI Growth Consultancy', quote: 'It saved me a lot of time and a lot of stress, and the quality of work I was blown away with.', video: true },
  { id: 'eQ8kni-hnt0', name: 'Rebecca Korn', company: 'RISE REIGN RULE', quote: 'The ways that they have supported my business, the ways that they have pushed back in certain ways, creative evolutions and the understanding with really hearing me has been something of true dream working with them.', video: true },
  { id: 'gNd2O1YVioo', name: 'William Haas', company: 'Vyve Wellness', quote: 'The thing that I liked the most working with them was they really took an opportunity to understand my business and knock out some strategy to show me how we might optimise what we already had in place.', video: true },
];

const PLAN_FEATURES_MONTHLY = {
  startup: [
    "20 Hours For GHL Tasks (Hours Won't Carry Over) — 1-2 hours daily",
    'Including 5 White Label Onboarding',
    'GHL Support',
    'Email, Zoom, WhatsApp, Slack Support',
    'Membership & Community Creation',
    'ClickUp for Task Management',
    'Custom Snapshot Build',
    'Custom Onboarding Build',
    'Twilio A2P 10DLC Registration',
    'GHL Funnel & Website Design',
    'GHL Website/Funnel On Page SEO',
    'Weekly Meetings On Zoom / Google Meet',
    'Addon Graphic Design/Video Editing (Social Posts, Website/Blog Banners, Meta Shorts, etc.) Up to 5 hours',
    'WordPress Development (Elementor Pro)',
    'WordPress Website Migration to GHL',
    'Support On Other CRMs Too (Kajabi, ClickFunnel, Kartra, Keap, Calendly, SquareSpace, Wix)',
    'Membership/Course Migration to GHL From Any App/CRM',
    'Work On Your Project Management App',
    'Other CRM Migration To GHL',
  ],
  growing: [
    '4 Hours daily Dedicated VA (5 days a week, 80 hrs/month)',
    'Project Manager for Communications',
    'GHL Support, 15 Onboardings',
    'Email, Zoom, WhatsApp, Slack Support',
    'Membership & Community Creation',
    'ClickUp for Task Management',
    'Custom Snapshot Build',
    'Custom Onboarding Build',
    'Twilio A2P 10DLC Registration',
    'GHL Funnel & Website Design',
    'GHL Website/Funnel On Page SEO',
    'Weekly Meetings On Zoom / Google Meet',
    'Addon Graphic Design/Video Editing (Social Posts, Website/Blog Banners, Meta Shorts, etc.) Up to 5 hours',
    'WordPress Development (Elementor Pro)',
    'WordPress Website Migration to GHL',
    'Support On Other CRMs Too (Kajabi, ClickFunnel, Kartra, Keap, Calendly, SquareSpace, Wix)',
    'Membership/Course Migration to GHL From Any App/CRM',
    'Work On Your Project Management App',
    'Other CRM Migration To GHL',
  ],
  enterprise: [
    '8 Hours Daily Dedicated VA (5 days a week, 160 hrs/month)',
    'Project Manager for Communications',
    'White Label Support',
    'Email, Zoom, WhatsApp, Slack Support',
    'Membership & Community Creation',
    'ClickUp for Task Management',
    'Custom Snapshot Build',
    'Custom Onboarding Build',
    'Twilio A2P 10DLC Registration',
    'GHL Funnel & Website Design',
    'GHL Website/Funnel On Page SEO',
    'Weekly Meetings On Zoom / Google Meet',
    'Addon Graphic Design/Video Editing (Social Posts, Website/Blog Banners, Meta Shorts, etc.) Up to 5 hours',
    'WordPress Development (Elementor Pro)',
    'WordPress Website Migration to GHL',
    'Support On Other CRMs Too (Kajabi, ClickFunnel, Kartra, Keap, Calendly, SquareSpace, Wix)',
    'Membership/Course Migration to GHL From Any App/CRM',
    'Work On Your Project Management App',
    'Other CRM Migration To GHL',
  ],
};

const PLAN_FEATURES_HOURLY = [
  'White Label Support',
  'Email, Zoom, WhatsApp, Slack Support',
  'Membership & Community Creation',
  'ClickUp For Task Management',
  'Custom Snapshot Build',
  'Custom Onboarding Build',
  'Twilio A2P 10DLC Registration',
  'ZappyChat / ChatGPT / Close Bot Expert',
  'GHL Funnel & Website Design',
  'GHL Website/Funnel On Page SEO',
  'Weekly Meetings On Zoom / Google Meet Regarding Project Discussions',
  'WordPress Development (Elementor Pro)',
  'WordPress Website Migration To GHL',
  'Adobe Premiere, Camtasia',
  'Canva (Design/Editing)',
  'PDF Design',
  'Support On Other CRMs Too (Kajabi, ClickFunnel, Kartra, Keap, HubSpot, Calendly, SquareSpace, Wix)',
  'Membership/Course Migration To GHL From Any App/CRM',
  'Work On Your Project Management App',
  'Shopify Support (Create And Manage Store)',
  'Dedicated Development Team For Advanced Coding Requests (HTML/CSS/JavaScript)',
  'Other CRM Migration To GHL',
];

const PLANS = [
  {
    key: 'startup',
    name: 'STARTUP',
    hours: '10 HOURS',
    price: '$599',
    salePrice: '$500',
    hourlyRate: '$29/Hour',
    billing: 'One Time Payment (Valid for 1 Month)',
    monthlyHref: 'https://go.isuremedia.com/startup-plan-checkout',
    hourlyHref: 'https://go.isuremedia.com/10hr-plan-checkout',
  },
  {
    key: 'growing',
    name: 'GROWING',
    hours: '20 HOURS',
    price: '$1,699',
    salePrice: '$1,000',
    hourlyRate: '$21/Hour',
    billing: 'One Time Payment (Valid for 1 Month)',
    monthlyHref: 'https://go.isuremedia.com/growing-plan-checkout',
    hourlyHref: 'https://go.isuremedia.com/20hr-plan-checkout',
  },
  {
    key: 'enterprise',
    name: 'ENTERPRISE',
    hours: '40 HOURS',
    price: '$2,999',
    salePrice: '$2,000',
    hourlyRate: '$19/Hour',
    billing: 'One Time Payment (Valid for 3 Months)',
    monthlyHref: 'https://go.isuremedia.com/enterprise-plan-checkout',
    hourlyHref: 'https://go.isuremedia.com/40hr-plan-checkout',
  },
];

const FAQS = [
  { q: 'Are you limited to GHL?', a: 'We are not limited to GHL, you can ask to create a WordPress website, webmaster work, creating an email template, graphics work (Logo / Banners / Infographics), setting up email, moving or migrating your CRM or Hosting, recreate ClickFunnel funnels in Go High Level and many more. Please refer to the services that we offer.' },
  { q: 'Can you migrate my old CRM to Go High Level?', a: 'Yes, of course, we can migrate your old CRM to Go High Level. We have experience working on HubSpot, Infusionsoft, Salesforce, Ontraport, Active Campaign, ConvertKit, Leadpages, ClickFunnels, Dropfunnel, and many more.' },
  { q: 'Do you offer any prebuilt funnels, landing pages, websites, or addons?', a: 'Yes, we do have some cool stuff. Please check out our marketplace.' },
  { q: 'Can you do white-label backend colors based on our branding?', a: 'Yes, we can.' },
  { q: 'Is there any limit on the number of funnels that you will create?', a: 'No, as long as we are working for you as VA, we will work as per your instructions.' },
  { q: 'What task management apps are you familiar with?', a: 'We are familiar with most task management systems, like ClickUp, Asana, Wrike, Teamwork, Podio, and Basecamp.' },
];

const APPOINTMENT_HREF = '/appointment';
const SCHEDULE_HREF = 'https://ads.isuremedia.com/schedule/';

const SUCCESS_VIDEO_ID = 'ARaEiSO5tXE';

function SuccessVideo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', paddingTop: '56.25%', boxShadow: '0 20px 56px rgba(0,35,83,.16)', background: '#000' }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${SUCCESS_VIDEO_ID}?rel=0&modestbranding=1&autoplay=1`}
          title="GoHighLevel Support Success Story"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label="Play video"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', padding: 0, cursor: 'pointer', background: `url(https://img.youtube.com/vi/${SUCCESS_VIDEO_ID}/maxresdefault.jpg) center/cover no-repeat` }}
        >
          <span style={{ position: 'absolute', inset: 0, background: 'rgba(0,20,60,.18)' }} />
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 74, height: 74, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 28px rgba(0,0,0,.35)' }}>
            <i className="fa-solid fa-play" style={{ color: 'var(--color-navy)', fontSize: 24, marginLeft: 4 }} />
          </span>
        </button>
      )}
    </div>
  );
}

function GhlAdsForm() {
  const IFRAME_ID = 'inline-NcnHKprMg8S2zPjUEHAL';
  const FORM_ID = 'NcnHKprMg8S2zPjUEHAL';

  useEffect(() => {
    const iframe = document.getElementById(IFRAME_ID);
    if (!iframe) return;

    // Primary: GHL/Salesley post a message with the real content height once the
    // form finishes rendering inside the iframe. Trust that over any static guess.
    const onMessage = (e) => {
      const data = e.data;
      if (!data || typeof data !== 'object') return;
      const matchesForm = data.formId === FORM_ID || data.id === FORM_ID || !('formId' in data) && !('id' in data);
      const height = data.height ?? data.formHeight ?? data.contentHeight;
      if (matchesForm && height) {
        const px = typeof height === 'number' ? height : parseInt(height, 10);
        if (px && px > 0) iframe.style.height = px + 'px';
      }
    };
    window.addEventListener('message', onMessage);

    // Fallback: some embed scripts resize via inline style/attribute mutation
    // instead of postMessage. Just make sure no internal scrollbar appears.
    const observer = new MutationObserver(() => {
      if (iframe.getAttribute('scrolling') !== 'no') iframe.setAttribute('scrolling', 'no');
    });
    observer.observe(iframe, { attributes: true, attributeFilter: ['scrolling'] });

    return () => {
      window.removeEventListener('message', onMessage);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <iframe
        src="https://link.salesley.com/widget/form/NcnHKprMg8S2zPjUEHAL"
        style={{ width: '100%', border: 'none', borderRadius: 8, height: 490, display: 'block' }}
        id={IFRAME_ID}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Ads-Form"
        data-height="490"
        data-layout-iframe-id={IFRAME_ID}
        data-form-id={FORM_ID}
        title="Ads-Form"
        data-initial-iframe-hidden="true"
        data-unique-id-mapped="true"
        data-iframe-resizer-initialized="true"
        scrolling="no"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      <Script src="https://link.salesley.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}

function HeroCardsGrid({ items }) {
  return (
    <div className="ghl-hero-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
      {items.map((item, i) => (
        <div key={i} style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 14, padding: '26px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, boxShadow: 'var(--sh-sm)' }}>
          <span style={{ width: 56, height: 56, borderRadius: 14, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i className={item.icon} style={{ color: item.color, fontSize: 22 }} />
          </span>
          <span style={{ fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.4 }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function CardsGrid({ items, columns = 4 }) {
  return (
    <div className="ghl-cards-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns},1fr)`, gap: 16 }}>
      {items.map((item, i) => (
        <div key={i} style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 14, padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 14, boxShadow: 'var(--sh-sm)' }}>
          <span style={{ width: 48, height: 48, borderRadius: 12, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i className={item.icon} style={{ color: item.color, fontSize: 19 }} />
          </span>
          <span style={{ fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.45 }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function TestimonialMedia({ id, video, name }) {
  const [playing, setPlaying] = useState(false);
  if (video) {
    return (
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--color-navy)' }}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={`${name} client testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${name} testimonial`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', padding: 0, cursor: 'pointer', background: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg) center/cover no-repeat` }}
          >
            <span style={{ position: 'absolute', inset: 0, background: 'rgba(0,20,60,.18)' }} />
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 48, height: 48, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 18px rgba(0,0,0,.35)' }}>
              <i className="fa-solid fa-play" style={{ color: 'var(--color-navy)', fontSize: 15, marginLeft: 2 }} />
            </span>
          </button>
        )}
      </div>
    );
  }
  return (
    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg) center/cover no-repeat` }} />
  );
}

function ToolLogoCloud({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid var(--color-border)', borderRadius: 100, padding: '9px 22px 9px 9px', boxShadow: 'var(--sh-sm)' }}>
          <span style={{ width: 30, height: 30, borderRadius: '50%', background: `${item.color}1A`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i className={item.icon} style={{ color: item.color, fontSize: 14 }} />
          </span>
          <span style={{ fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)' }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function CTAButton({ href, children, filled = true, external = false
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 34px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 800, textDecoration: 'none', letterSpacing: '.05em', textTransform: 'uppercase', transition: 'all .18s',
        color: filled ? 'var(--color-navy)' : 'var(--color-primary)',
        background: filled ? 'var(--ism-amber)' : 'transparent',
        border: filled ? '2px solid var(--ism-amber)' : '2px solid var(--color-primary)',
        boxShadow: filled ? '0 6px 20px rgba(255,176,0,.35)' : 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
    >
      {children}
    </a>
  );
}

function PricingTable() {
  const [mode, setMode] = useState('monthly');
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
        <div style={{ display: 'inline-flex', background: '#fff', border: '1px solid var(--color-border)', borderRadius: 100, padding: 5, gap: 4 }}>
          {['monthly', 'hourly'].map(m => (
            <button key={m} onClick={() => setMode(m)}
              style={{ padding: '10px 26px', borderRadius: 100, border: 'none', cursor: 'pointer', fontFamily: J, fontSize: 13, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase',
                background: mode === m ? 'var(--ism-amber)' : 'transparent',
                color: mode === m ? 'var(--color-navy)' : 'var(--color-text-muted)',
                transition: 'all .18s' }}
            >
              {m === 'monthly' ? 'Monthly' : 'Hourly'}
            </button>
          ))}
        </div>
      </div>

      <div className="ghl-pricing-plans" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
        {PLANS.map(plan => (
          <div key={plan.key} style={{ background: '#fff', border: `2px solid ${plan.key === 'growing' ? 'var(--color-primary)' : 'var(--color-border)'}`, borderRadius: 16, padding: '32px 26px', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: plan.key === 'growing' ? '0 12px 32px rgba(30,77,195,.14)' : 'var(--sh-sm)' }}>
            {plan.key === 'growing' && (
              <span style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: '#fff', fontFamily: J, fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100 }}>
                Most Popular
              </span>
            )}
            <div style={{ fontFamily: J, fontSize: 13, fontWeight: 800, letterSpacing: '.1em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 8 }}>
              {mode === 'monthly' ? plan.name : plan.hours}
            </div>

            {mode === 'monthly' ? (
              <>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 2 }}>
                  <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)' }}>{plan.price}</span>
                  <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)' }}>/Month</span>
                </div>
                <div style={{ fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--ism-amber)', marginBottom: 16 }}>{plan.hourlyRate}</div>
              </>
            ) : (
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: J, fontSize: 34, fontWeight: 900, color: 'var(--color-navy)' }}>{plan.salePrice}</span>
              </div>
            )}
            <div style={{ fontFamily: I, fontSize: 12.5, color: 'var(--color-text-muted)', marginBottom: 22 }}>{plan.billing}</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 26, flex: 1 }}>
              {(mode === 'monthly' ? PLAN_FEATURES_MONTHLY[plan.key] : PLAN_FEATURES_HOURLY).map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', fontSize: 11, marginTop: 4, flexShrink: 0 }} />
                  <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-heading)', lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
            </div>

            <a href={mode === 'monthly' ? plan.monthlyHref : plan.hourlyHref} target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: 8, fontFamily: J, fontSize: 13, fontWeight: 800, letterSpacing: '.05em', textTransform: 'uppercase', textDecoration: 'none',
                background: 'var(--color-primary)', color: '#fff' }}
            >
              Purchase Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ background: '#fff', border: `1px solid ${isOpen ? 'var(--color-primary)' : 'var(--color-border)'}`, borderRadius: 14, overflow: 'hidden' }}>
            <button onClick={() => setOpen(isOpen ? null : i)}
              style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, cursor: 'pointer', background: 'transparent', border: 'none', textAlign: 'left' }}
            >
              <span style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: isOpen ? 'var(--color-primary)' : 'var(--color-navy)' }}>{faq.q}</span>
              <span style={{ width: 28, height: 28, borderRadius: '50%', background: isOpen ? 'var(--color-primary)' : 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 16, color: isOpen ? '#fff' : 'var(--color-primary)', fontWeight: 700, transform: isOpen ? 'rotate(45deg)' : '', transition: 'all .2s' }}>+</span>
            </button>
            {isOpen && (
              <div style={{ padding: '0 24px 22px' }}>
                <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SectionHeading({ children, sub
}) {
  return (
    <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 44px' }}>
      <h2 style={{ fontFamily: J, fontSize: 'clamp(24px,3vw,38px)', fontWeight: 800, color: 'var(--color-navy)', letterSpacing: '-0.4px', lineHeight: 1.2, marginBottom: sub ? 14 : 0 }}>
        {children}
      </h2>
      {sub && <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{sub}</p>}
    </div>
  );
}

export default function SupportGoHighLevelPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(160deg,#EDF2FF 0%,#F7F8FA 48%,#FFFBEB 100%)', padding: '56px 0 48px', position: 'relative', overflow: 'hidden' }}>
          <span style={{ position: 'absolute', top: 148, left: '8%', width: 28, height: 28, borderRadius: '50%', border: '2px solid rgba(232,76,107,.35)', pointerEvents: 'none' }} />
          <div className="ism-container" style={{ textAlign: 'center', position: 'relative' }}>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(30px,4.5vw,56px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1.5px', lineHeight: 1.12, margin: '0 auto 22px', maxWidth: 900 }}>
              Get an Entire{' '}
              <span style={{ position: 'relative', display: 'inline-block', color: 'var(--color-primary)' }}>
                Team of Experts
                <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                  <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>{' '}
              with a Price of Single Go High Level Virtual Assistant
            </h1>
            <p style={{ fontFamily: I, fontSize: 'clamp(15px,1.6vw,18px)', color: 'var(--color-text-muted)', lineHeight: 1.78, maxWidth: 620, margin: '0 auto 36px' }}>
              White-label GoHighLevel support, dedicated project management, and everything your agency needs to <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>run GHL on autopilot</span>.
            </p>
            <div style={{ marginBottom: 52 }}>
              <CTAButton href={APPOINTMENT_HREF}>Click Here to Schedule a Call</CTAButton>
            </div>
            <div style={{ maxWidth: 980, margin: '0 auto' }}>
              <HeroCardsGrid items={HERO_CARDS} />
            </div>
          </div>
        </section>

        <ReviewsStrip />

        {/* SAVE HUNDREDS MONTHLY */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '56px 0' }}>
          <div className="ism-container">
            <h2 style={{ fontFamily: J, fontSize: 'clamp(26px,3.2vw,40px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 36, textAlign: 'center', lineHeight: 1.25 }}>
              Hire Our{' '}
              <span style={{ position: 'relative', display: 'inline-block', color: 'var(--color-primary)' }}>
                GoHighLevel Experts
                <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                  <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>{' '}
              and Be the Next Success Story
            </h2>

            <div style={{ maxWidth: 860, margin: '0 auto 52px' }}>
              <SuccessVideo />
            </div>

            <div className="ghl-save-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
              <div className="ghl-form-card" style={{ background: '#fff', borderRadius: 18, padding: 22, boxShadow: 'var(--sh-sm)', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontFamily: J, fontSize: 19, fontWeight: 700, color: 'var(--color-navy)', textAlign: 'center', margin: '10px 0 20px' }}>
                  Need to Discuss Requirements? Begin Here with the Form
                </h3>
                <GhlAdsForm />
              </div>

              <div style={{ background: '#fff', borderRadius: 18, padding: '38px 36px', boxShadow: 'var(--sh-sm)', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: J, fontSize: 30, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <i className="fa-solid fa-sack-dollar" style={{ color: 'var(--ism-amber)', fontSize: 26 }} />
                  Save{' '}
                  <span style={{ position: 'relative', display: 'inline-block', color: 'var(--color-primary)' }}>
                    Hundreds
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>{' '}
                  Monthly!
                </h3>
                <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: 28 }}>
                  Struggling to get GHL virtual assistant support at unbeatable pricing? Here&apos;s the solution! <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Save hundreds monthly</span> while unlocking the full potential of GoHighLevel. Elevate your business, cut costs, and boost client retention with our professional GoHighLevel support. Agency owners, we&apos;ve got you covered with all your GHL tech needs, providing GHL white-label support and more.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                  {FREE_BENEFITS.map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', fontSize: 13 }} />
                      </span>
                      <span style={{ fontFamily: J, fontSize: 15.5, fontWeight: 700, color: 'var(--color-navy)' }}>{b}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: 22, borderTop: '1px solid var(--color-border)' }}>
                  <CTAButton href={APPOINTMENT_HREF}>Hire Your VA Now</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATION + PERSONALIZED SUPPORT */}
        <section style={{ background: '#fff', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading>
              What Makes Us Different from Other{' '}
              <span style={{ position: 'relative', display: 'inline-block', color: 'var(--color-primary)' }}>
                GHL VAs?
                <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                  <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </SectionHeading>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 56 }}>
              <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                We are not just limited to GHL. Our dynamic team, consisting of skilled web developers specialising in WordPress, Wix, and Shopify, creative graphic designers, GHL experts, and dedicated project managers, collaborates seamlessly to <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>deliver outstanding results</span> for your projects.
              </p>
              <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                With experience working with clients from various industries worldwide, we have successfully met unique requirements and consistently satisfied our clients. Our mastery of GHL automation allows us to provide the right solutions, utilising third-party tools like Zapier, Pabbly Connect, Integromat, Google Sheets, ManyChat, and more.
              </p>
              <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                We also specialize in creating GHL SaaS landing pages, GoHighLevel SaaS mode website templates, GoHighLevel website templates, and provide GoHighLevel templates.
              </p>
            </div>

            <SectionHeading>Enjoy Personalised Support With</SectionHeading>
            <div className="ghl-personalized-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '10px 24px', marginBottom: 28, background: 'var(--color-bg-soft)', border: '1px solid var(--color-border)', borderRadius: 16, padding: '32px 36px' }}>
              {PERSONALIZED_SUPPORT.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--color-primary)', fontSize: 14, marginTop: 4, flexShrink: 0 }} />
                  <span style={{ fontFamily: I, fontSize: 15, color: 'var(--color-navy)', lineHeight: 1.7 }}>{item}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.8, textAlign: 'center', fontStyle: 'italic' }}>
              Our commitment is to bring unparalleled value and expertise to every project.
            </p>
          </div>
        </section>

        {/* WHAT'S MORE */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '60px 0' }}>
          <div className="ism-container">
            <SectionHeading sub="Even more value packed into every plan.">What&apos;s More?</SectionHeading>
            <div className="ghl-whatsmore-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginBottom: 48 }}>
              {WHATS_MORE.map((item, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 16, padding: '28px 26px', display: 'flex', gap: 18, boxShadow: 'var(--sh-sm)' }}>
                  <span style={{ width: 50, height: 50, borderRadius: 13, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={item.icon} style={{ color: item.color, fontSize: 20 }} />
                  </span>
                  <div>
                    <h3 style={{ fontFamily: J, fontSize: 17, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', textAlign: 'center', marginBottom: 20 }}>
              Free Support Across 20+ Platforms
            </p>
            <div style={{ marginBottom: 44 }}>
              <ToolLogoCloud items={TOOL_LOGOS} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <CTAButton href={APPOINTMENT_HREF}>Hire Your VA at Just $19 Per Hour</CTAButton>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading>
              What{' '}
              <span style={{ position: 'relative', display: 'inline-block', color: 'var(--color-primary)' }}>
                GoHighLevel Services
                <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                  <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>{' '}
              Do We Offer?
            </SectionHeading>
            <div style={{ maxWidth: 820, margin: '0 auto 40px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                We offer top-tier GoHighLevel support and guidance, ensuring a seamless experience for individuals and agencies.
              </p>
              <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                Our experienced team provides a guaranteed and experienced solution for all your Go HighLevel tasks, including funnel and landing page development, campaign and script content production, complex automations, integrations, GHL VA services, and expertise in GHL SaaS landing pages.
              </p>
              <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                With expertise in GoHighLevel CRM and GoHighLevel SaaS, we understand the diverse needs of business owners and are ready to assist you. Contact us today and be worry-free with our comprehensive GoHighLevel support and services.
              </p>
            </div>

            <div style={{ marginBottom: 40 }}>
              <CardsGrid items={SERVICE_CAPABILITIES} columns={4} />
            </div>

            <div className="ghl-detailed-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '10px 32px' }}>
              {DETAILED_SERVICES.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <i className="fa-solid fa-chevron-right" style={{ color: 'var(--ism-amber)', fontSize: 11, marginTop: 5, flexShrink: 0 }} />
                  <span style={{ fontFamily: I, fontSize: 14.5, color: 'var(--color-text-heading)', lineHeight: 1.7 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXTENDED SERVICES CTA */}
        <section style={{ background: '#fff', padding: '48px 0' }}>
          <div className="ism-container">
            <div className="ghl-extended-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
              <div>
                <h2 style={{ fontFamily: J, fontSize: 'clamp(24px,3vw,38px)', fontWeight: 800, color: 'var(--color-navy)', letterSpacing: '-0.4px', lineHeight: 1.2, marginBottom: 18 }}>
                  Wait&hellip; There Is More for{' '}
                  <span style={{ position: 'relative', display: 'inline-block', color: 'var(--color-primary)' }}>
                    Your Agency
                    <svg viewBox="0 0 100 12" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -6, width: '100%', height: 10 }} aria-hidden>
                      <path d="M2,8 Q50,0 98,7" fill="none" stroke="var(--ism-amber)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  </span>
                </h2>
                <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: 14 }}>
                  We&apos;re not limited to GHL, we receive a lot of requests where an agency hires a WordPress expert to build the site or migrate the client WordPress site to GHL. Or, they can sell services of WordPress or Shopify store development or integration and make more money.
                </p>
                <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: 28 }}>
                  Long story short, if you ever need support with any technical challenges on WordPress, Shopify, or Wix platforms, our support is just one email away.
                </p>
                <CTAButton href={APPOINTMENT_HREF}>Book Your Call Now</CTAButton>
              </div>
              <div className="ghl-extended-icons" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { icon: 'fa-brands fa-wordpress', bg: '#E4F1FF', color: '#21759B' },
                  { icon: 'fa-brands fa-shopify', bg: '#E6F6EC', color: '#95BF47' },
                  { icon: 'fa-brands fa-wix', bg: '#FFE9D6', color: '#000000' },
                ].map((p, i) => (
                  <span key={i} style={{ width: 72, height: 72, borderRadius: 18, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--sh-sm)' }}>
                    <i className={p.icon} style={{ color: p.color, fontSize: 30 }} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MIGRATION & CUSTOMIZATION */}
        <section style={{ background: '#fff', padding: '56px 0' }}>
          <div className="ism-container" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
              Looking to shift your business from WordPress, Shopify, or Wix to GoHighLevel (GHL)? We&apos;ve got the expertise to seamlessly migrate your data and guide you through the setup process.
            </p>
            <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
              Need specific customizations for your website? Our VAs are here to make your platform uniquely yours. From design tweaks to functional enhancements, we&apos;ve got the skills to bring your vision to life.
            </p>
            <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
              Our VAs are well-versed in WordPress, Shopify, Wix, and GHL, ensuring comprehensive support. We don&apos;t believe in one-size-fits-all. Our solutions are customised to suit your unique requirements.
            </p>
            <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: 8 }}>
              You are investing in <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>only one VA capable of tackling various tasks</span>, saving you money on hiring separate WordPress or Shopify experts. Save time and energy by letting our VAs handle the technicalities, leaving you free to focus on what you do best for running your business.
            </p>
            <div>
              <CTAButton href={APPOINTMENT_HREF} filled={false}>Get Your VA at Nominal Prices</CTAButton>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading>Don&apos;t Listen to Us, Hear Them Out Yourself</SectionHeading>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <a href="https://youtube.com/playlist?list=PLPOWZtmP8ntqL3REUDzylLpQtCY_EmVjV&si=k-21I9TZlg1gvn2O" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase' }}>
                Explore More →
              </a>
            </div>
            <div className="ghl-testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--sh-sm)' }}>
                  <TestimonialMedia id={t.id} video={t.video} name={t.name} />
                  <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                    <div style={{ display: 'flex', gap: 3 }}>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <i key={s} className="fa-solid fa-star" style={{ color: 'var(--ism-amber)', fontSize: 12 }} />
                      ))}
                    </div>
                    <p style={{ fontFamily: I, fontSize: 13.5, color: 'var(--color-text-muted)', lineHeight: 1.75, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                    <div>
                      <div style={{ fontFamily: J, fontSize: 13.5, fontWeight: 700, color: 'var(--color-navy)' }}>{t.name}</div>
                      {t.company && <div style={{ fontFamily: I, fontSize: 12, color: 'var(--color-text-muted)' }}>{t.company}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT CENTER */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '56px 0' }}>
          <div className="ism-container">
            <SectionHeading sub="Whether you're an existing GoHighLevel customer or just considering it, we are here to help.">
              GoHighLevel Support Center and Virtual Support
            </SectionHeading>

            <div className="ghl-support-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, alignItems: 'center', marginBottom: 48 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                  We can assist you in migrating from another service provider to GoHighLevel, troubleshoot any issues, and set up your projects according to your unique requirements. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Give your business an incredible boost</span>, regardless of its size, with a leading CRM solution that combines diverse marketing and sales tools under one roof.
                </p>
                <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                  Imagine the possibilities: increased productivity across your team, streamlined client and lead management, more leads closed, and vital business relationships strengthened. Our partnership with Go High Level allows you to reduce operational costs and enhance client retention.
                </p>
                <div>
                  <CTAButton href={APPOINTMENT_HREF}>Contact Us Today</CTAButton>
                </div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 18, padding: '30px 28px', boxShadow: 'var(--sh-sm)' }}>
                <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 16 }}>
                  One Platform Replaces
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { icon: 'fa-solid fa-envelope-open-text', label: 'Email marketing' },
                    { icon: 'fa-solid fa-filter', label: 'Funnel builders' },
                    { icon: 'fa-solid fa-clipboard-list', label: 'Forms & survey creators' },
                    { icon: 'fa-solid fa-calendar-check', label: 'Appointment management' },
                    { icon: 'fa-solid fa-comment-sms', label: 'Text & voicemail marketing' },
                    { icon: 'fa-solid fa-phone-volume', label: 'Call tracking tools' },
                    { icon: 'fa-solid fa-globe', label: 'Website builders' },
                  ].map((tool, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <i className={tool.icon} style={{ color: 'var(--color-primary)', fontSize: 14, width: 18 }} />
                      <span style={{ fontFamily: I, fontSize: 14, color: 'var(--color-navy)', fontWeight: 600 }}>{tool.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, textAlign: 'center' }}>
              Ready to unlock the full potential of Go High Level? We also offer GoHighLevel white label support for agency owners, ensuring professional assistance tailored to your specific needs.
            </p>
          </div>
        </section>

        {/* PRICING */}
        <section style={{ background: '#fff', padding: '60px 0' }}>
          <div className="ism-container">
            <SectionHeading>Special Limited Time Offer</SectionHeading>
            <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: 16, textAlign: 'center' }}>
              At Isuremedia, we specialize in crafting custom snapshots that elevate our clients&apos; agencies to new heights. With a diverse portfolio spanning multiple niches, we bring a wealth of experience and expertise to the table.
            </p>
            <p style={{ fontFamily: I, fontSize: 15.5, color: 'var(--color-text-muted)', lineHeight: 1.85, textAlign: 'center', marginBottom: 44 }}>
              Our experience spans diverse sectors including real estate, business and holistic coaching, consulting, Shopify store marketing, dog training, insurance, solar energy, digital marketing agencies, yoga and wellness, gym and fitness, online course creation, healthcare services, and much more.
            </p>
            <PricingTable />

            <div className="ghl-pricing-guidance-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 56 }}>
              <div style={{ background: 'var(--color-bg-soft)', borderRadius: 14, padding: '28px 26px', textAlign: 'center' }}>
                <h3 style={{ fontFamily: J, fontSize: 17, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 10 }}>Confused, which pricing plan suits you best?</h3>
                <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 18 }}>Don&apos;t stress! Click now to answer a quick questionnaire and get the perfect plan in one simple step.</p>
                <CTAButton href={APPOINTMENT_HREF} filled={false}>Click Here</CTAButton>
              </div>
              <div style={{ background: 'var(--color-bg-soft)', borderRadius: 14, padding: '28px 26px', textAlign: 'center' }}>
                <h3 style={{ fontFamily: J, fontSize: 17, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 10 }}>Want to customize your pricing plan?</h3>
                <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 18 }}>Book a discovery call, discuss your needs, and uncover the ideal plan tailored just for you.</p>
                <CTAButton href={SCHEDULE_HREF} external>Book Your Call Now</CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '60px 0' }}>
          <div className="ism-container">
            <SectionHeading>FAQs</SectionHeading>
            <FAQAccordion />
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .ghl-hero-cards { grid-template-columns: repeat(2,1fr) !important; }
          .ghl-cards-grid { grid-template-columns: repeat(2,1fr) !important; }
          .ghl-pricing-plans { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .ghl-save-grid { grid-template-columns: 1fr !important; }
          .ghl-support-grid { grid-template-columns: 1fr !important; }
          .ghl-extended-grid { grid-template-columns: 1fr !important; }
          .ghl-extended-icons { flex-direction: row !important; justify-content: center; }
          .ghl-testimonials-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 768px) {
          .ghl-hero-cards { grid-template-columns: repeat(2,1fr) !important; gap: 12px !important; }
          .ghl-cards-grid { grid-template-columns: repeat(2,1fr) !important; }
          .ghl-personalized-grid { grid-template-columns: 1fr !important; padding: 24px 20px !important; }
          .ghl-whatsmore-grid { grid-template-columns: 1fr !important; }
          .ghl-detailed-services-grid { grid-template-columns: 1fr !important; }
          .ghl-testimonials-grid { grid-template-columns: 1fr !important; }
          .ghl-pricing-guidance-grid { grid-template-columns: 1fr !important; }
          .ghl-form-card { padding: 12px !important; }
        }
        @media (max-width: 480px) {
          .ghl-hero-cards { grid-template-columns: 1fr !important; }
          .ghl-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
