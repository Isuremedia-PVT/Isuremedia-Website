'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function HijrahWalksCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Hijrah Walks Expeditions',
      leadIn: 'Group size changes the price, but GoHighLevel checkout links can\'t do that natively.',
      hook: 'Now every applicant gets the right price and payment plan automatically, across a full yearly calendar.',
      intro: <>Hijrah Walks runs 12 monthly group expeditions, each priced per head based on group size, with an option to pay in three instalments tied to the departure date. GoHighLevel\'s native checkout builder has no logic for either, every booking previously needed <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>a manually adjusted link and manually tracked payment dates</span>.</>,
      meta: {
        industry: 'Travel & Events',
        location: 'International',
        duration: 'Ongoing Engagement',
        services: 'GoHighLevel & Custom Code Automation',
      },
      heroImage: '/casestudy/hijrah-banner.webp',
      resultHeadline: [
        { text: 'Every applicant now receives a ' },
        { text: 'personalised checkout link with the correct group price and an automated instalment schedule', highlight: true },
        { text: ' tied to their exact departure date.' },
      ],
      stats: [
        { val: '12×', label: 'Monthly Expeditions', sub: 'managed automatically' },
        { val: '0', label: 'Manual Invoices', sub: 'sent by the team' },
        { val: '3-Tier', label: 'Dynamic Group Pricing', sub: 'applied instantly' },
        { val: 'Event-Relative', label: 'Instalment Billing', sub: 'counts back from departure' },
      ],
      quote: 'What used to take our team hours each week, calculating prices, sending payment links, following up on instalments, now runs itself. Every applicant gets exactly the right checkout experience from the moment they register.',
      quoteBy: 'Hijrah Walks',
      quoteRole: 'Travel Expedition Agency',
      problemHeading: 'Group pricing and event-relative billing, neither exists natively in GoHighLevel.',
      problemIntro: 'Hijrah Walks needed every checkout link to reflect the correct per-head rate based on group size, and every instalment date to count backwards from that specific expedition\'s departure date. Neither is something GoHighLevel supports out of the box.',
      problems: [
        { title: 'No dynamic pricing by group size', body: 'GoHighLevel\'s checkout builder has no logic to adjust price based on how many people are registering together, every booking needed a manually adjusted link, unscalable across a full yearly calendar.' },
        { title: 'No event-relative billing', body: 'For applicants choosing the 3-instalment option, due dates needed to count backwards from each walk\'s specific departure date, GHL has no native relative-date billing feature.' },
        { title: 'No unified applicant tracking', body: 'Registration, deposit, pending instalments, final payment, and pre-walk communication had no single system tracking where each applicant stood.' },
        { title: 'Manual reconfiguration every cycle', body: 'With 12 expeditions running monthly, each with its own dates and pricing tiers, staff had to manually rebuild pricing and communication sequences for every single cycle.' },
      ],
      overviewTags: [
        { label: 'Custom Code', tone: 'blue' },
        { label: 'Payment Automation', tone: 'blue' },
        { label: 'GoHighLevel', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Hijrah Walks needed a dynamic pricing layer that calculated the correct group rate at the point of registration, plus an instalment billing system where every due date was calculated relative to the applicant\'s chosen expedition date, not a fixed calendar date.',
        'Isuremedia built a custom code layer alongside GoHighLevel workflows to handle both, structured around the agency\'s full 12-expedition yearly calendar.',
      ],
      overviewImage: '/casestudy/hijrah-inner.webp',
      didHeading: 'Built as a dynamic pricing and billing engine spanning a full yearly calendar.',
      didIntro: 'From the moment an applicant registers to the day they depart, every price, checkout link, and payment reminder is generated automatically.',
      process: [
        { label: 'Pricing', title: 'Dynamic pricing engine', body: 'A custom code layer sits between the registration form and GoHighLevel. It reads the group size, calculates the correct product amount, and generates a checkout link with the right price, without any manual intervention.' },
        { label: 'Billing', title: 'Event-relative instalment workflows', body: 'Three instalment checkout pages are dispatched automatically, with each trigger date calculated relative to the applicant\'s chosen expedition date, so timing is always correct regardless of when they book.' },
        { label: 'Tracking', title: 'Full applicant journey automation', body: 'Every stage, registration, deposit, pending instalments, final payment, pre-walk comms, is tracked and automated inside GHL with status tags and pipeline stages, across all 12 monthly expeditions.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'The same yearly expedition calendar, the same team, and a completely different operating model once pricing and billing stopped requiring manual calculation.',
      impactCards: [
        { label: 'Zero Manual Processing', title: 'Staff no longer calculate or chase payments', body: 'The system handles pricing, checkout links, and instalment follow-up entirely, no manual calculation, no manual reminders.' },
        { label: 'Less Payment Drop-Off', title: 'Correct pricing from the first click', body: 'Applicants receive the correct checkout link immediately, removing the friction that previously caused incomplete registrations.' },
        { label: 'Predictable Cash Flow', title: 'Instalments arrive on a fixed schedule', body: 'Payments are tied to each event\'s departure date, giving the agency clear, forecastable revenue across the year.' },
        { label: 'Scales Across All 12 Cycles', title: 'No manual reconfiguration between expeditions', body: 'The same system runs identically for every monthly walk, with each booking automatically inheriting the right dates, pricing, and communication sequence.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The pricing and billing foundation built for Hijrah Walks opens up further automation that needs no re-engineering to unlock.',
      nextCards: [
        { title: 'Waitlist and overflow automation', body: 'Expeditions that fill up can automatically route new applicants into a waitlist flow for the next available date, using data that already lives in the system.' },
        { title: 'Post-expedition review requests', body: 'A completed expedition in the pipeline can automatically trigger a review and referral request, tying reputation growth directly to each completed trip.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Still calculating prices and chasing ' },
        { text: 'payments by hand?', highlight: true },
      ],
      ctaBody: [
        { text: 'Manual pricing and instalment tracking is the most common reason bookings fall through. If your checkout experience is not tailored automatically to every applicant, ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you where the leak is.' },
      ],
      ctaPrimaryLabel: 'Get My Free Automation Audit',
      ctaPrimaryHref: '/marketing-automation-agency',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/Automation.webp',
    }} />
  );
}
