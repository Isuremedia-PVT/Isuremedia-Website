'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function BrightPathCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'BrightPath Dental',
      leadIn: 'Google Ads were generating clicks, but most calls were the wrong kind of patient.',
      hook: 'Now every dollar is targeted at the procedures that actually grow the practice.',
      intro: 'BrightPath Dental runs a busy general and cosmetic practice. Their Google Ads campaigns were live and spending steadily, but broad targeting and generic ad copy meant the front desk spent most of its day on calls that were never going to book.',
      meta: {
        industry: 'Healthcare / Dental',
        location: 'United States',
        duration: '60 Days',
        services: 'Google Ads & Landing Pages',
      },
      heroImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
      resultHeadline: [
        { text: 'Rebuilt targeting and dedicated landing pages ' },
        { text: 'cut cost per qualified lead by more than half', highlight: true },
        { text: ', while booked appointments from ads nearly doubled.' },
      ],
      stats: [
        { val: '-52%', label: 'Cost Per Qualified Lead', sub: 'in 60 days' },
        { val: '+96%', label: 'Booked Appointments', sub: 'from ad traffic' },
        { val: '4', label: 'Dedicated Landing Pages', sub: 'by procedure' },
        { val: '+61%', label: 'Front Desk Time Saved', sub: 'on unqualified calls' },
      ],
      quote: 'Our front desk stopped dreading the phone — the leads coming in now are the right fit.',
      quoteBy: 'BrightPath Dental',
      quoteRole: 'Practice Manager, United States',
      problemHeading: 'Volume without the right kind of patient.',
      problemIntro: 'BrightPath\'s ads were technically performing — plenty of clicks and calls — but almost all of them landed on the same generic homepage with no way to tell a high-value cosmetic enquiry from a low-value one.',
      problems: [
        { title: 'One ad, every procedure', body: 'The same broad ad ran for cleanings, whitening, and implants alike, with no way to bid or message differently by procedure value.' },
        { title: 'Every click landed on the homepage', body: 'Clicks from a specific search for "same day crowns" landed on a generic homepage with no answer to that exact question.' },
        { title: 'No call tracking by campaign', body: 'There was no way to tell which specific ad or keyword was actually producing booked appointments versus just phone taps.' },
        { title: 'Front desk absorbed the mismatch', body: 'Staff spent a meaningful share of the day on calls for services BrightPath does not even offer, screened out only after picking up the phone.' },
      ],
      overviewTags: [
        { label: 'Google Ads', tone: 'blue' },
        { label: 'Landing Pages', tone: 'blue' },
        { label: 'Call Tracking', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'BrightPath needed campaigns split by procedure value, each pointing to a dedicated landing page, with call tracking that finally showed which keyword was driving real appointments.',
        'ISureMedia rebuilt the campaign structure and landing pages over a 60-day engagement.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=700&q=80',
      didHeading: 'Rebuilt around procedure value, not one generic campaign.',
      didIntro: 'Every high-value procedure now has its own campaign, its own landing page, and its own tracked phone number.',
      process: [
        { label: 'Structure', title: 'Campaigns split by procedure', body: 'High-value procedures like implants and cosmetic work were separated into their own campaigns with bidding matched to their actual value.' },
        { label: 'Landing Pages', title: 'Four dedicated procedure pages', body: 'Each priority procedure now has its own landing page answering the exact question that brought the visitor there.' },
        { label: 'Tracking', title: 'Call tracking by campaign', body: 'Dynamic call tracking numbers were added so every booked appointment can be traced back to the exact keyword and ad that produced it.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'The same monthly ad budget now produces fewer, higher-quality calls instead of a high volume of mismatched ones.',
      impactCards: [
        { label: 'Cheaper Qualified Leads', title: 'Cost per qualified lead down 52%', body: 'The same monthly budget now produces meaningfully more of the right kind of enquiry.' },
        { label: 'Nearly Double the Bookings', title: 'Booked appointments up 96%', body: 'Booked appointments from ad traffic nearly doubled without increasing spend.' },
        { label: 'Front Desk Time Back', title: '61% less time on mismatched calls', body: 'Staff now spend far less time on calls for procedures BrightPath does not offer.' },
        { label: 'Real Attribution', title: 'Every booking traced to its source', body: 'Call tracking now shows exactly which keyword and ad produced each booked appointment.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The campaign and tracking structure built for BrightPath is ready to extend without rebuilding from scratch.',
      nextCards: [
        { title: 'Automated review requests post-visit', body: 'The call tracking system already in place can trigger an automated review request the moment a tracked appointment is marked complete.' },
        { title: 'Expansion to a second location', body: 'The same campaign and landing page structure is ready to be replicated for BrightPath\'s planned second location.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Getting clicks ' },
        { text: 'but the wrong kind of patient?', highlight: true },
      ],
      ctaBody: [
        { text: 'Broad targeting and one generic landing page usually mean wasted spend on the wrong enquiries, and ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you where the opportunity is.' },
      ],
      ctaPrimaryLabel: 'Get My Free Ads Audit',
      ctaPrimaryHref: '/services/ppc-paid-marketing',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/ppc-advertising-illustration.webp',
    }} />
  );
}
