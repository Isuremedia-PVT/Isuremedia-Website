'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function HvacCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Apex HVAC Services',
      leadIn: 'Every missed call was a missed job.',
      hook: 'Now every lead gets a response in under 90 seconds.',
      intro: 'Apex runs HVAC service and installation crews across three counties, generating leads through Google Ads and their Google Local Services listing. Follow-up was manual and inconsistent — often hours late, long enough for the customer to already book with a competitor.',
      meta: {
        industry: 'Home Services / HVAC',
        location: 'United States',
        duration: '90 Days',
        services: 'Marketing Automation & CRM',
      },
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      resultHeadline: [
        { text: 'Every new lead ' },
        { text: 'now gets an instant SMS and a booking link', highlight: true },
        { text: ' the moment they submit a form. No staff involvement. No delay.' },
      ],
      stats: [
        { val: '+340%', label: 'Booked Jobs', sub: 'in 90 days' },
        { val: '<90 sec', label: 'Avg Lead Response', sub: 'down from 3+ hours' },
        { val: '47%', label: 'Booking Rate', sub: 'up from 15%' },
        { val: '$0', label: 'Extra Ad Spend', sub: 'same monthly budget' },
      ],
      quote: "ISureMedia built exactly what we needed. Leads used to sit in an inbox for hours — now the system responds before the customer has even put their phone down.",
      quoteBy: 'Apex HVAC Services',
      quoteRole: 'Operations Manager, United States',
      problemHeading: 'Great ads. Broken follow-up. Lost revenue.',
      problemIntro: 'Apex was generating a healthy volume of leads from Google Ads and their Local Services listing, but almost half of them went nowhere. The problem was never the ads — it was everything that happened after the click.',
      problems: [
        { title: 'Response times measured in hours', body: 'Leads were checked manually a few times a day. By the time someone called back, the customer had already booked with whichever competitor answered first.' },
        { title: 'No shared pipeline across sources', body: 'Google Ads, the website form, and the Local Services listing each fed leads into a different inbox with no shared view of who had been contacted.' },
        { title: 'No-shows with no recovery', body: 'Booked appointments with no reminder sequence meant a meaningful share of jobs never actually happened.' },
        { title: 'Zero visibility into what was working', body: 'There was no reporting on response time, booking rate, or source quality — decisions were made on gut feel, not data.' },
      ],
      overviewTags: [
        { label: 'Marketing Automation', tone: 'blue' },
        { label: 'CRM', tone: 'blue' },
        { label: 'GoHighLevel', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Apex needed a single CRM that every lead source fed into, with automated follow-up fast enough to beat the competition to the phone — without adding headcount or asking the ad budget to work any harder.',
        'ISureMedia scoped, built, and launched the full system in under three weeks.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=700&q=80',
      didHeading: 'Built to fix the follow-up problem completely, not partially.',
      didIntro: 'Every lead, regardless of source, is validated, tagged, and routed into the same automated sequence the moment it arrives.',
      process: [
        { label: 'Foundation', title: 'One CRM, every lead source', body: 'Google Ads, the website form, and the Local Services listing were all connected into a single GoHighLevel pipeline with source tagging on every contact.' },
        { label: 'Response', title: 'Instant automated follow-up', body: 'A new lead triggers an SMS within 90 seconds, followed by a same-day email, a call reminder for the team the next day, and a nudge on day three if there is still no response.' },
        { label: 'Recovery', title: 'Booking and no-show automation', body: 'A booking widget lets leads schedule immediately without a phone call, and a no-show sequence automatically re-engages appointments that did not convert.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'The same ad spend, the same team, and a completely different outcome once follow-up stopped depending on someone being at their desk.',
      impactCards: [
        { label: 'Zero Missed Leads', title: 'Every lead gets an instant reply', body: 'Response fires regardless of the time of day or how busy the office is.' },
        { label: 'Faster Than Competitors', title: 'Beating rivals to the phone', body: 'Sub-90-second response time means Apex is calling back before most competitors have even seen the lead.' },
        { label: 'Fewer No-Shows', title: 'Reminder sequences recover jobs', body: 'Automated reminders cut the no-show rate by 40% without any extra staff time.' },
        { label: 'Clear Reporting', title: 'One dashboard, real-time data', body: 'Response time, booking rate, and source quality are now visible on a single dashboard, updated in real time.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The CRM foundation built for Apex opens up further automation that needs no re-engineering to unlock.',
      nextCards: [
        { title: 'Review generation on job completion', body: 'A completed job in the CRM can automatically trigger a review request, tying reputation growth directly to work performed rather than a manual ask.' },
        { title: 'Seasonal re-engagement campaigns', body: 'Past customers can be automatically segmented and re-engaged ahead of seasonal maintenance windows, using data that already lives in the CRM.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Running ads but not ' },
        { text: 'converting enough leads?', highlight: true },
      ],
      ctaBody: [
        { text: 'Slow follow-up is the most common reason good ad spend gets wasted. If leads are not being contacted in minutes, ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you where the leak is.' },
      ],
      ctaPrimaryLabel: 'Get My Free Automation Audit',
      ctaPrimaryHref: '/services/marketing-automation',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/marketing-automation-illustration.webp',
    }} />
  );
}
