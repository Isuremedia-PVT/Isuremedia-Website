'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function Innovat3CaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Innovat3 Solutions',
      leadIn: 'One GoHighLevel agency account, run mostly by hand.',
      hook: 'Now a technical backbone spanning 3 agencies and 20+ managed sub-accounts.',
      intro: <>Innovat3 Solutions is a Miami-based AI automation and growth consultancy positioning itself as South Florida&apos;s premier AI consultancy, building voice AI agents, custom apps, and workflow automations for clients across 25+ industry niches. Every client-facing system runs on GoHighLevel behind Innovat3&apos;s own brand, and <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>Isuremedia is the white-label technical team building it</span>.</>,
      meta: {
        industry: 'AI Automation & Business Consulting',
        location: 'Miami, FL, United States',
        duration: 'Ongoing · 1–2 Years',
        services: 'White-Label GoHighLevel Development',
      },
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      resultHeadline: [
        { text: 'What started as one agency account is now ' },
        { text: '3 agencies, 20+ live sub-accounts, and 100+ websites built', highlight: true },
        { text: ', with new accounts added on an ongoing basis.' },
      ],
      stats: [
        { val: '1 → 3', label: 'Agencies Under Management', sub: 'grown from a single account' },
        { val: '20+', label: 'Active Sub-Accounts', sub: 'provisioned and maintained' },
        { val: '100+', label: 'Websites Built', sub: 'and shipping on an ongoing basis' },
        { val: '25+', label: 'Niches Served', sub: 'home services, medical, legal, beauty & more' },
      ],
      quote: "Isuremedia functions as our embedded build team. Every sub-account follows the same standards whether it's agency one or agency three, and that consistency is what let us keep signing clients without our own technical capacity becoming the bottleneck.",
      quoteBy: 'Innovat3 Solutions Team',
      quoteRole: 'Miami, FL',
      problemHeading: 'The sales relationships scaled faster than the build capacity.',
      problemIntro: 'When Innovat3 first approached Isuremedia, they were running a single GoHighLevel agency account with a largely manual, ad-hoc setup. As they signed more clients across more verticals, the gap between what they could sell and what they could build in-house widened fast.',
      problems: [
        { title: 'No in-house build capacity', body: 'There was no internal team able to build and configure GHL sub-accounts at the pace new clients were being onboarded across 25+ niches.' },
        { title: 'Automation built manually, per client', body: 'Lead routing, follow-up sequences, and referral workflows were being configured by hand for every new account, a process that could not hold as volume grew.' },
        { title: 'Client sites needed a premium feel', body: 'Websites had to match a premium, tech-forward consultancy brand, not read as a templated GoHighLevel funnel.' },
        { title: 'No consistency across agency brands', body: 'As Innovat3 launched additional agency brands, they needed infrastructure and build standards that stayed uniform across every one of them.' },
      ],
      overviewTags: [
        { label: 'GoHighLevel', tone: 'amber' },
        { label: 'White-Label Development', tone: 'blue' },
        { label: 'Custom Integrations', tone: 'blue' },
        { label: 'Voice AI', tone: 'amber' },
      ],
      overviewHeading: 'An embedded technical team, not a one-off vendor.',
      overviewBody: [
        'Isuremedia was brought on as Innovat3\'s dedicated white-label GoHighLevel partner. The engagement started with a single agency account and, over roughly 1-2 years, expanded into full technical ownership across Innovat3\'s growing agency portfolio.',
        'The scope covers five pillars: client website development, custom integrations beyond native GHL, sub-account setup and management, custom automation and referral logic, and voice and conversation AI, all delivered entirely under the Innovat3 brand.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
      didHeading: 'Five pillars, one team building all of them.',
      didIntro: 'Every sub-account gets the same build standards, whether it is client website work, a custom integration, or the automation logic running behind it.',
      process: [
        { label: 'Websites', title: '100+ client-facing sites, built to a premium standard', body: 'We design and build the websites Innovat3 sells into each of its 25+ niches, fast, mobile-optimized, and feeding directly into GHL forms, calendars, and pipelines, including replicating custom designs from Lovable directly into GHL-hosted sites.' },
        { label: 'Infrastructure', title: 'Sub-account setup, custom integrations, and dashboards', body: 'Every new sub-account, pipelines, calendars, custom fields, snapshots, is provisioned under Innovat3\'s white-label brand. We also connect GHL to third-party tools beyond its native limits, including a real-time Lovable dashboard sync and a custom React storefront integration.' },
        { label: 'Automation & AI', title: 'Custom workflow logic and always-on voice AI', body: 'Referral tracking, lead routing, and intake logic are built to each client\'s exact process, including a full referral management system for an insurance client. Voice and conversation AI agents handle inbound leads during evenings, weekends, and staffing gaps.' },
      ],
      impactHeading: 'What changed once the infrastructure was in place.',
      impactIntro: 'What began as white-label support for a single Innovat3 agency has grown into infrastructure support across their expanding multi-agency structure.',
      impactCards: [
        { label: 'Website Delivery', title: '100+ websites shipped, with new builds ongoing', body: 'Client-facing sites across 25+ niches ship on a continuous basis without Innovat3 needing an in-house design or development team.' },
        { label: 'Real-Time Sync', title: 'Purchases sync to a live dashboard the moment they happen', body: 'A custom Lovable dashboard integration means every purchase across every product is reflected in real time, giving clients a single unified view without cross-referencing systems.' },
        { label: 'Referral Automation', title: 'The full referral lifecycle now runs natively in GHL', body: 'For an insurance agency client, the referral portal, tracking, and payments all run inside GoHighLevel, covering origination through to close.' },
        { label: 'Always-On Coverage', title: 'Voice AI answers every lead, regardless of when it comes in', body: 'Inbound leads during evenings, weekends, and gaps in staff availability are handled by voice and conversation AI tailored to each business\'s niche, so no lead goes untouched.' },
      ],
      nextHeading: 'Scaling with Innovat3, not just for them.',
      nextIntro: 'As Innovat3 continues expanding into new niches and agency brands, the infrastructure is built so the next sub-account onboards as smoothly as the first.',
      nextCards: [
        { title: 'Onboarding built to stay smooth at any scale', body: 'Consistent build standards, naming conventions, and QA process mean sub-account #21 onboards exactly as cleanly as sub-account #1, with no re-engineering required as Innovat3 adds new agency brands.' },
        { title: 'Deeper capability than standard white-label GHL', body: 'Custom dashboards, storefront integrations, and voice AI go beyond standard sub-account setup, capabilities most white-label providers don\'t offer, giving Innovat3 room to keep differentiating as it grows.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Need a white-label technical team that ' },
        { text: 'scales with your agency?', highlight: true },
      ],
      ctaBody: [
        { text: 'If your sales pipeline is outrunning your build capacity, ' },
        { text: 'that is exactly what a white-label partner should fix', highlight: true },
        { text: '. Talk to us today about what it looks like for your agency.' },
      ],
      ctaPrimaryLabel: 'Get My Free Partner Proposal',
      ctaPrimaryHref: '/services/white-label',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/white label.webp',
    }} />
  );
}
