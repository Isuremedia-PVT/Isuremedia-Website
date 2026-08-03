'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function SummitGrowthCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Summit Growth Partners',
      leadIn: 'Winning bigger web design projects than a two-person dev team could deliver.',
      hook: 'Now ISM is the invisible development team behind every one of them.',
      intro: 'Summit Growth Partners is a US marketing agency whose sales team had started winning larger, more complex web design retainers — well beyond what their small in-house development team could realistically deliver on time.',
      meta: {
        industry: 'Marketing Agencies',
        location: 'United States',
        duration: '6 Months',
        services: 'White Label Web Development',
      },
      heroImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80',
      resultHeadline: [
        { text: 'ISM became Summit\'s invisible development team, ' },
        { text: 'growing web project capacity by 140%', highlight: true },
        { text: ' with zero new hires and no missed deadlines.' },
      ],
      stats: [
        { val: '+140%', label: 'Web Project Capacity', sub: 'no new hires' },
        { val: '100%', label: 'On-Time Delivery', sub: 'across all projects' },
        { val: '0', label: 'ISM Brand Mentions', sub: 'fully white label' },
        { val: '11', label: 'Projects Delivered', sub: 'in 6 months' },
      ],
      quote: 'ISM lets us say yes to projects we would have had to turn down six months ago.',
      quoteBy: 'Summit Growth Partners',
      quoteRole: 'Agency Owner, United States',
      problemHeading: 'Sales was winning faster than delivery could keep up.',
      problemIntro: 'Summit\'s two in-house developers were already fully booked when the sales team started closing larger, more technically demanding web design retainers.',
      problems: [
        { title: 'Every new deal risked a missed deadline', body: 'With no spare development capacity, each new signed project pushed existing client work further behind schedule.' },
        { title: 'Hiring would take too long', body: 'Recruiting and onboarding a senior developer typically takes months — far longer than the sales pipeline could wait.' },
        { title: 'No standard build process', body: 'Each developer built sites their own way, making it hard to bring in outside help without a steep ramp-up period.' },
        { title: 'Client-facing quality was inconsistent', body: 'Projects delivered under time pressure were noticeably rougher than those with a comfortable timeline, risking the agency\'s reputation.' },
      ],
      overviewTags: [
        { label: 'White Label Web Dev', tone: 'blue' },
        { label: 'Agency Ops', tone: 'blue' },
        { label: 'Web Development', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Summit needed a development partner that could plug in completely invisibly behind their brand, following their design handoffs and delivering to the same quality bar regardless of project volume.',
        'Isuremedia onboarded and scaled delivery capacity over a six-month engagement.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=700&q=80',
      didHeading: 'Built as an invisible extension of Summit\'s own dev team.',
      didIntro: 'Every project is built to Summit\'s own design handoff and delivered entirely under their brand, with no trace of ISM anywhere a client can see.',
      process: [
        { label: 'Handoff', title: 'A standardised design handoff process', body: 'A clear handoff process was established so any project, regardless of complexity, could move from design to development without back-and-forth delays.' },
        { label: 'Delivery', title: 'Fully white-labelled development', body: 'Every project is built and delivered entirely under the Summit brand — no ISM mention appears anywhere a client can see.' },
        { label: 'Quality', title: 'One quality bar, every project', body: 'A shared QA checklist ensures every project meets the same standard regardless of how many projects are in flight at once.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'Summit can now say yes to larger, more complex projects without asking whether the dev team has room for them.',
      impactCards: [
        { label: 'Capacity Without Hiring', title: 'Project capacity up 140%', body: 'Web project capacity more than doubled without adding a single developer to Summit\'s payroll.' },
        { label: 'Every Deadline Met', title: '100% on-time delivery', body: 'Every one of the eleven projects delivered during the engagement shipped on schedule.' },
        { label: 'Sales Team Unblocked', title: 'No more capacity checks before closing', body: 'The sales team can now close larger projects without first checking whether delivery has room.' },
        { label: 'Consistent Client Experience', title: 'One quality bar at any volume', body: 'Clients now receive the same quality of build whether it is the only project in flight or one of several.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The delivery infrastructure built for Summit is ready to extend into further service lines without rebuilding the model.',
      nextCards: [
        { title: 'White label SEO and content', body: 'The same invisible-delivery model already used for web development is ready to extend into SEO and content services.' },
        { title: 'Dedicated agency pod', body: 'As volume grows further, a dedicated pod of developers can be assigned exclusively to Summit\'s projects for even tighter continuity.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Winning bigger projects ' },
        { text: 'than your dev team can handle?', highlight: true },
      ],
      ctaBody: [
        { text: 'A capacity ceiling should never be the reason your sales team stops closing bigger deals, and ' },
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
