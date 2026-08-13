'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function AdOSCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Isuremedia, AdOS Platform',
      leadIn: 'Managing 100+ campaigns across 20–25 Meta ad accounts manually was consuming 20 hours a week.',
      hook: 'Now a single AI-powered internal platform runs a full account analysis in under a minute.',
      intro: <>Isuremedia manages Meta advertising for clients across HVAC, B2B, e-commerce, and marketing agencies, 20 to 25 active ad accounts and 100+ campaigns running at once. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>The manual effort to monitor and optimize all of it was consuming roughly 20 hours a week</span>, so we built AdOS, a full-stack, AI-powered advertising operating system, entirely in-house.</>,
      meta: {
        industry: 'Digital Marketing Agency (Internal Platform)',
        location: 'India',
        duration: '~1 Month · Single Developer',
        services: 'Custom Full-Stack Development & AI Integration',
      },
      heroImage: '/casestudy/Web-banner.webp',
      resultHeadline: [
        { text: 'A single developer delivered a full-stack AI platform in about a month, ' },
        { text: 'cutting manual campaign management time by 60–75%', highlight: true },
        { text: ' across 100+ live campaigns.' },
      ],
      stats: [
        { val: '60–75%', label: 'Less Manual Effort', sub: 'down from 20 hrs/week' },
        { val: '100+', label: 'Campaigns Managed', sub: 'across 20-25 ad accounts' },
        { val: '<60 sec', label: 'Full Account Analysis', sub: 'via AI, was hours manually' },
        { val: '1 Dev · ~1 Mo', label: 'Full-Stack Build', sub: 'design to delivery' },
      ],
      quote: '[Team quote pending, add a quote from the Isuremedia team about using AdOS]',
      quoteBy: 'Isuremedia',
      quoteRole: 'Internal Platform Team',
      problemHeading: 'Manual campaign management was consuming 20 hours a week.',
      problemIntro: 'As Isuremedia scaled to 20–25 active ad accounts and 100+ simultaneous campaigns, a workflow built entirely around manual access to Meta Ads Manager became unsustainable, consuming time that should have gone toward strategy, not repetitive operations.',
      problems: [
        { title: 'Excessive manual effort', body: 'The team spent roughly 20 hours a week manually logging into Meta Ads Manager, switching between 20-25 client accounts, and generating reports by hand.' },
        { title: 'Delayed optimization cycles', body: 'Manual, periodic reviews meant a delay between a campaign underperforming and corrective action being taken, wasting client ad spend along the way.' },
        { title: 'No centralized knowledge system', body: 'Winning hooks, copy angles, and competitor intelligence lived in fragmented notes and individual memory, with no structured way to capture or reuse it.' },
        { title: 'Inconsistent reporting', body: 'Client performance reporting was manual, inconsistent in format, and time-consuming to produce, with no single source of truth across accounts.' },
      ],
      overviewTags: [
        { label: 'NestJS + React', tone: 'blue' },
        { label: 'Meta Graph API', tone: 'blue' },
        { label: 'AI (Claude & GPT-4o)', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Isuremedia needed a single platform to centralize campaign management, automate performance analysis with AI, and give the team a scalable foundation to grow without proportional increases in manual effort.',
        'A single full-stack developer designed, architected, and delivered AdOS, a NestJS and React platform integrated directly with the Meta Graph API and powered by Claude and GPT-4o via OpenRouter, in approximately one month.',
      ],
      overviewImage: '/casestudy/website-inner.webp',
      didHeading: 'Built as a full-stack platform, not a dashboard bolted onto Meta Ads Manager.',
      didIntro: 'Every part of the campaign workflow, connection, management, analysis, and research, was rebuilt directly into a single internal tool.',
      process: [
        { label: 'Foundation', title: 'Architecture, auth & Meta connection', body: 'Designed the database schema and system architecture, built JWT authentication with role-based access, and connected client Meta ad accounts directly to the platform.' },
        { label: 'Meta Integration', title: 'Live campaign management via Graph API', body: 'Built custom cursor-based pagination for Meta\'s Graph API and full create, edit, pause, and activate operations, so the team never needs to open Meta Ads Manager directly.' },
        { label: 'AI & Research', title: 'Analysis engine, research tools & knowledge base', body: 'Integrated Claude and GPT-4o via OpenRouter for full-account and per-campaign analysis, plus a research engine and a self-building knowledge base and hooks database.' },
      ],
      impactHeading: 'What changed once AdOS went live.',
      impactIntro: 'The platform turned a manual, hours-heavy workflow into a single dashboard the whole team works from.',
      impactCards: [
        { label: 'Time Savings', title: '60-75% less manual management time', body: 'Campaign review, analysis, and reporting consolidated into a single dashboard, down from roughly 20 hours a week.' },
        { label: 'AI Analysis', title: 'Full account analysis in under a minute', body: 'What previously required hours of manual review now runs in 30-60 seconds, with prioritized, specific recommendations.' },
        { label: 'Knowledge Retention', title: 'Institutional knowledge captured automatically', body: 'The Knowledge Base and Hooks Database now capture winning angles and competitor intelligence that used to live only in individual memory.' },
        { label: 'Full Coverage', title: 'Every campaign gets reviewed, not just some', body: '39+ campaigns, 66+ ad sets, and 192+ ads are tracked in real time from a single dashboard, no campaign is overlooked.' },
      ],
      metricsTable: {
        heading: 'Manual Workflow vs. AdOS',
        intro: 'What changed operationally once the platform replaced manual Meta Ads Manager review.',
        beforeLabel: 'Before AdOS',
        afterLabel: 'With AdOS',
        rows: [
          { label: 'Weekly Manual Effort', before: '~20 hours', after: '5–8 hours', change: '−60-75%' },
          { label: 'Full Account Analysis', before: 'Several hours, manual', after: '30-60 seconds, AI-driven', change: 'Near-instant' },
          { label: 'Campaigns Actively Reviewed', before: 'Whichever got reviewed that day', after: '100+, every one', change: 'Full coverage' },
          { label: 'Competitor Research', before: 'Ad-hoc, inconsistent', after: 'On-demand, structured', change: 'Systematic' },
          { label: 'Institutional Knowledge', before: 'Notes & individual memory', after: 'Structured Knowledge Base & Hooks DB', change: 'Captured & reusable' },
        ],
        note: 'Figures reflect Isuremedia\'s internal operational comparison before and after AdOS went live.',
      },
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The Phase 1 architecture was designed with a clear path to Phase 2 without needing to be rebuilt.',
      nextCards: [
        { title: 'Meta System User Token', body: 'Moving to a permanent, non-expiring Meta token via Business Verification will eliminate the periodic token-refresh friction from Phase 1.' },
        { title: 'Multi-tenant SaaS potential', body: 'The architecture is designed for a Phase 2 evolution into a multi-tenant platform, potentially offering AdOS as a service to other agencies.' },
      ],
      ctaEyebrow: 'Build With Isuremedia',
      ctaHeading: [
        { text: 'Drowning in manual ' },
        { text: 'campaign management busywork?', highlight: true },
      ],
      ctaBody: [
        { text: 'If your team is spending hours a week on repetitive Meta Ads review instead of strategy, ' },
        { text: 'that is exactly the kind of internal tool we build', highlight: true },
        { text: '. Talk to us about what a platform like AdOS could look like for your business.' },
      ],
      ctaPrimaryLabel: 'Get My Free Platform Consultation',
      ctaPrimaryHref: '/services/websites-funnels',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/Api.webp',
    }} />
  );
}
