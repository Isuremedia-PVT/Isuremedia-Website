'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function SaaSLinkedInCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'TruckAC+',
      leadIn: 'Paid media was live everywhere, but none of it was tied together.',
      hook: 'Now every channel feeds one full-funnel strategy.',
      intro: 'TruckAC+ sells aftermarket climate control units for commercial trucking fleets, running paid social, PPC, and programmatic campaigns independently with no shared measurement or retargeting strategy between them.',
      meta: {
        industry: 'E-Commerce / Automotive Parts',
        location: 'United States',
        duration: '6 Months',
        services: 'Paid Media & Funnel Strategy',
      },
      heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
      resultHeadline: [
        { text: 'A rebuilt full-funnel paid strategy ' },
        { text: 'generated a 23X return on ad spend', highlight: true },
        { text: ', adding over $350K in ad revenue in six months.' },
      ],
      stats: [
        { val: '+$350K', label: 'Ad Revenue', sub: 'ROAS optimised' },
        { val: '+1,092', label: 'Website Purchases', sub: 'in 6 months' },
        { val: '23X', label: 'Return on Ad Spend', sub: 'blended across channels' },
        { val: '3', label: 'Channels Unified', sub: 'social, PPC, programmatic' },
      ],
      quote: 'ISM is handling business the way they said they would in the beginning.',
      quoteBy: 'TruckAC+',
      quoteRole: 'Marketing Director, United States',
      problemHeading: 'Three channels, three strategies, no shared funnel.',
      problemIntro: 'TruckAC+ was spending steadily across social, PPC, and programmatic, but each channel was run in isolation with no shared audience data or retargeting logic connecting them.',
      problems: [
        { title: 'No cross-channel retargeting', body: 'A visitor who clicked a social ad and left was invisible to the PPC and programmatic campaigns, so the same buyer was never re-engaged consistently.' },
        { title: 'Attribution told an incomplete story', body: 'Each platform reported its own last-click numbers, making it impossible to see which channel actually drove a sale versus which one got the credit.' },
        { title: 'Creative was not matched to funnel stage', body: 'The same broad product ads ran to cold and warm audiences alike, wasting spend on messaging that was not built for where the buyer actually was.' },
        { title: 'Seasonal demand was not planned for', body: 'Fleet buying cycles are seasonal, but budget pacing stayed flat year-round instead of flexing to match demand.' },
      ],
      overviewTags: [
        { label: 'Paid Social', tone: 'blue' },
        { label: 'PPC', tone: 'blue' },
        { label: 'Programmatic', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'TruckAC+ needed one funnel strategy spanning all three channels, with shared audience data, stage-matched creative, and a single source of truth for what was actually driving revenue.',
        'Isuremedia rebuilt tracking, retargeting, and creative as one connected system over six months.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80',
      didHeading: 'Rebuilt as one connected funnel, not three separate campaigns.',
      didIntro: 'Every channel now feeds a shared pool of audience and attribution data instead of operating as its own silo.',
      process: [
        { label: 'Foundation', title: 'Unified tracking and attribution', body: 'A shared measurement layer was built across social, PPC, and programmatic so every touchpoint rolled up to one true picture of what drove each sale.' },
        { label: 'Audience', title: 'Cross-channel retargeting', body: 'Visitors from any channel were pooled into shared retargeting audiences, so a click on social could be followed up through PPC and programmatic instead of going cold.' },
        { label: 'Creative', title: 'Stage-matched ad creative', body: 'Cold, warm, and retargeting audiences each received creative built for that stage, replacing the single generic product ad running everywhere.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'A full-funnel approach across three previously disconnected channels exceeded both performance benchmarks and seasonal targets.',
      impactCards: [
        { label: 'One True Number', title: 'Shared attribution across channels', body: 'A single shared attribution model now shows exactly which channel and creative combination is driving each sale.' },
        { label: 'No Cold Retargeting Gaps', title: 'Consistent follow-up everywhere', body: 'A buyer who engages on any channel is now followed consistently across all three instead of disappearing after one click.' },
        { label: 'Demand-Matched Budget', title: 'Spend flexes with the season', body: 'Spend now paces up and down with seasonal fleet buying cycles instead of running flat year-round.' },
        { label: 'Stage-Matched Creative', title: 'Messaging built for the buyer', body: 'Cold, warm, and retargeting audiences each see messaging built for where they actually are in the funnel.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The shared measurement and audience layer built for TruckAC+ opens up further growth that needs no rebuilding to unlock.',
      nextCards: [
        { title: 'Lifecycle email integration', body: 'The same audience data can feed lifecycle email flows, extending the funnel past the ad click into post-purchase and repeat-buyer campaigns.' },
        { title: 'New product line expansion', body: 'The unified funnel structure is ready to onboard new product lines without rebuilding tracking or retargeting from scratch.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Running paid media on multiple channels ' },
        { text: 'with no shared strategy?', highlight: true },
      ],
      ctaBody: [
        { text: 'Disconnected channels usually mean wasted spend and no clear picture of what is actually working — ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you how it all connects.' },
      ],
      ctaPrimaryLabel: 'Get My Free Ads Audit',
      ctaPrimaryHref: '/services/ppc-paid-marketing',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/LinkedIn Ads.webp',
    }} />
  );
}
