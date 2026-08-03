'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function WhiteLabelCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Northline Digital',
      leadIn: 'Capped at 12 clients with a full internal team.',
      hook: 'Now scaled to 31 active accounts with zero new hires.',
      intro: 'Northline Digital is a UK-based marketing agency that had hit a delivery ceiling — every client won meant either turning away new business or stretching an already-full team even thinner.',
      meta: {
        industry: 'Marketing Agencies',
        location: 'United Kingdom',
        duration: '8 Months',
        services: 'White Label SEO & PPC',
      },
      heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80',
      resultHeadline: [
        { text: 'ISM became Northline\'s invisible delivery team, ' },
        { text: 'scaling them from 12 to 31 active clients', highlight: true },
        { text: ' in eight months without a single new hire.' },
      ],
      stats: [
        { val: '12→31', label: 'Active Client Accounts', sub: 'in 8 months' },
        { val: '19', label: 'New Client Accounts', sub: 'onboarded' },
        { val: '0', label: 'ISM Brand Mentions', sub: 'fully white label' },
        { val: '90%+', label: 'Client Satisfaction', sub: 'across all accounts' },
      ],
      quote: 'ISM became our invisible delivery team — our clients have no idea the work is outsourced.',
      quoteBy: 'Northline Digital',
      quoteRole: 'Founder, United Kingdom',
      problemHeading: 'A full team, a capped ceiling, and no way to grow without hiring.',
      problemIntro: 'Northline had a strong sales pipeline but a delivery team that was already at capacity. Every new client signed meant existing accounts got less attention, not more.',
      problems: [
        { title: 'Hiring could not keep pace with sales', body: 'Recruiting and training an in-house SEO or PPC specialist takes months — far longer than the sales team was closing new business.' },
        { title: 'Quality dropped as volume grew', body: 'Stretching the existing team across more accounts meant strategy time per client kept shrinking, and it was starting to show in results.' },
        { title: 'No consistent delivery process', body: 'Each account manager ran campaigns their own way, so there was no repeatable playbook new team members could be trained on quickly.' },
        { title: 'Client-facing reporting ate delivery time', body: 'A meaningful share of the team\'s week went into building reports instead of doing the strategic work the reports were meant to reflect.' },
      ],
      overviewTags: [
        { label: 'White Label SEO', tone: 'blue' },
        { label: 'White Label PPC', tone: 'blue' },
        { label: 'Agency Ops', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Northline needed a delivery partner that could plug in behind their brand completely invisibly, following their existing account structure and reporting format so clients never knew delivery had moved.',
        'Isuremedia onboarded, standardised, and scaled delivery across eight months of growth.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=700&q=80',
      didHeading: 'Built as an invisible extension of Northline\'s own team.',
      didIntro: 'Every account is delivered and reported entirely under the Northline brand, with no trace of ISM anywhere a client can see.',
      process: [
        { label: 'Onboarding', title: 'A repeatable delivery playbook', body: 'Every new account is onboarded through the same standardised process, so ramp-up time for a new client is measured in days, not weeks.' },
        { label: 'Delivery', title: 'Fully white-labelled execution', body: 'SEO and PPC work is delivered and reported entirely under the Northline brand — no ISM mention appears anywhere a client can see.' },
        { label: 'Reporting', title: 'Automated client reporting', body: 'Reporting was templated and automated so account managers spend their time on strategy calls instead of building slide decks.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'Northline can now say yes to new business without asking whether the team has the bandwidth to deliver.',
      impactCards: [
        { label: 'Growth Without Hiring', title: 'Client count nearly tripled', body: 'Client count nearly tripled without adding a single person to Northline\'s payroll.' },
        { label: 'Consistent Quality at Scale', title: 'One playbook, every account', body: 'Every account follows the same playbook, so quality no longer drops as the client roster grows.' },
        { label: 'Sales Team Unblocked', title: 'No more capacity checks', body: 'The sales team can now close new business without checking delivery capacity first.' },
        { label: 'Hours Back for Strategy', title: 'Less reporting, more strategy', body: 'Account managers spend meaningfully more of their week on client strategy instead of manual reporting.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The delivery infrastructure built for Northline is ready to extend into further service lines without rebuilding the model.',
      nextCards: [
        { title: 'White label content and web', body: 'The same invisible-delivery model already used for SEO and PPC is ready to extend into content and web design services.' },
        { title: 'Dedicated agency pod', body: 'As volume grows further, a dedicated pod of specialists can be assigned exclusively to Northline\'s accounts for even tighter continuity.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Turning away clients ' },
        { text: 'because delivery is maxed out?', highlight: true },
      ],
      ctaBody: [
        { text: 'A capped delivery team should never be the reason your sales team stops closing new business — ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you how we would plug in behind your brand.' },
      ],
      ctaPrimaryLabel: 'Get My Free White Label Audit',
      ctaPrimaryHref: '/services/white-label',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/white label.webp',
    }} />
  );
}
