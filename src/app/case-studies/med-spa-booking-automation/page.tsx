'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function BloomAestheticsCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Bloom Aesthetics',
      leadIn: 'A quarter of every month\'s booked appointments were simply no-shows.',
      hook: 'Now reminders and rebooking happen automatically, with no staff time involved.',
      intro: 'Bloom Aesthetics is a med spa offering injectables, facials, and skin treatments. Appointments were booked by hand with no reminder system beyond staff memory, and rebooking after treatment depended entirely on someone remembering to ask.',
      meta: {
        industry: 'Healthcare / Med Spa',
        location: 'United States',
        duration: '90 Days',
        services: 'Booking Automation & CRM',
      },
      heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80',
      resultHeadline: [
        { text: 'Automated reminders and rebooking sequences ' },
        { text: 'cut no-shows by 61% and lifted rebooking to 74%', highlight: true },
        { text: ', with zero extra front-desk time.' },
      ],
      stats: [
        { val: '-61%', label: 'No-Show Rate', sub: 'in 90 days' },
        { val: '+74%', label: 'Rebooking Rate', sub: 'post-treatment' },
        { val: '0', label: 'Extra Staff Hours', sub: 'fully automated' },
        { val: '3x', label: 'Reminder Touchpoints', sub: 'per appointment' },
      ],
      quote: 'Rebooking used to be a full-time job. Now it just happens on its own.',
      quoteBy: 'Bloom Aesthetics',
      quoteRole: 'Owner, United States',
      problemHeading: 'No-shows and lost rebookings, one manual step at a time.',
      problemIntro: 'Bloom Aesthetics had a loyal client base, but every part of the booking lifecycle depended on a staff member remembering to follow up — and busy days meant that often did not happen.',
      problems: [
        { title: 'No reminder system beyond memory', body: 'Appointment reminders depended on whichever staff member had time that day, and busy days meant many appointments went unconfirmed.' },
        { title: 'Rebooking was an afterthought', body: 'Clients were rarely asked to rebook their next treatment before leaving, so most rebooking depended on the client remembering to call back.' },
        { title: 'No segmentation by treatment type', body: 'Injectable clients and facial clients received the same generic follow-up, even though their optimal rebooking windows are completely different.' },
        { title: 'No visibility into no-show patterns', body: 'There was no reporting on which appointment types or times were most prone to no-shows, so nothing was ever adjusted to fix it.' },
      ],
      overviewTags: [
        { label: 'GoHighLevel', tone: 'amber' },
        { label: 'Booking Automation', tone: 'blue' },
        { label: 'CRM', tone: 'blue' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Bloom Aesthetics needed automated reminders and treatment-specific rebooking sequences that ran on their own, without depending on staff to trigger every step by hand.',
        'Isuremedia built and launched the full automation system over a 90-day engagement.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=700&q=80',
      didHeading: 'Built to run the entire booking lifecycle on its own.',
      didIntro: 'Every appointment now moves through the same automated reminder and rebooking sequence with no manual step required.',
      process: [
        { label: 'Reminders', title: 'Automated multi-touch reminders', body: 'Every booking now triggers a text and email reminder sequence at set intervals before the appointment, with no staff involvement required.' },
        { label: 'Rebooking', title: 'Treatment-specific rebooking sequences', body: 'Each treatment type triggers a rebooking sequence timed to its own optimal window, rather than one generic follow-up for everyone.' },
        { label: 'Reporting', title: 'No-show and rebooking dashboards', body: 'A live dashboard now tracks no-show rate and rebooking rate by treatment type, surfacing patterns that were previously invisible.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'The same client base and the same staff now produce meaningfully fewer no-shows and far more repeat visits, without anyone doing extra work.',
      impactCards: [
        { label: 'Fewer Empty Chairs', title: 'No-show rate down 61%', body: 'Automated multi-touch reminders cut no-shows by more than half within the first 90 days.' },
        { label: 'Rebooking on Autopilot', title: 'Rebooking rate up to 74%', body: 'Treatment-specific sequences now bring clients back for their next visit without anyone having to ask.' },
        { label: 'Zero Extra Staff Time', title: 'Fully automated, no manual triggers', body: 'The entire reminder and rebooking lifecycle now runs without any staff member having to remember a single step.' },
        { label: 'Patterns Now Visible', title: 'Live no-show and rebooking data', body: 'Staff can now see exactly which treatment types or appointment slots need attention instead of guessing.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The automation system built for Bloom Aesthetics is ready to extend further without rebuilding the foundation.',
      nextCards: [
        { title: 'Membership and package renewal automation', body: 'The same sequence structure is ready to extend into automated renewal reminders for treatment packages and memberships.' },
        { title: 'Referral request automation', body: 'A satisfied client\'s rebooking confirmation can automatically trigger a referral request, tying growth directly to service already delivered.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Losing appointments ' },
        { text: 'to no-shows and no rebooking?', highlight: true },
      ],
      ctaBody: [
        { text: 'Manual reminders and follow-up depend on someone remembering every single time, and ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you where the opportunity is.' },
      ],
      ctaPrimaryLabel: 'Get My Free Automation Audit',
      ctaPrimaryHref: '/services/marketing-automation',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/Appointment Booking Systems.webp',
    }} />
  );
}
