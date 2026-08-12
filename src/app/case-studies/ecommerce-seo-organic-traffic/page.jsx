'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function GardenSolutionCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Garden Solution Landscapes',
      leadIn: 'A great reputation and an active Google Business Profile, but almost no organic traffic.',
      hook: 'Now growing 800% in organic traffic with a top map pack position and live AI Overview citations.',
      intro: <>Garden Solution Landscapes is an Auckland-based gardening and landscaping business offering garden maintenance, residential landscaping, stump grinding, and artificial lawn installation. The business came to Isuremedia to turn its website into <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>a consistent source of new organic leads</span>.</>,
      meta: {
        industry: 'Gardening & Landscaping',
        location: 'Auckland, New Zealand',
        duration: '4 Months',
        services: 'Local SEO, GBP, Technical SEO & AEO',
      },
      heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
      resultHeadline: [
        { text: 'A local landscaping business grew organic traffic ' },
        { text: '800% in four months', highlight: true },
        { text: ', while landing a map pack top position and its first Google AI Overview citations.' },
      ],
      stats: [
        { val: '800%', label: 'Organic Traffic Growth', sub: '50 to 450+ sessions/day' },
        { val: '#2', label: 'Map Pack Position', sub: '"garden maintenance auckland"' },
        { val: '348', label: 'Quality Backlinks', sub: 'up from 54, zero penalties' },
        { val: '3x', label: 'Click-Through Rate', sub: '0.7% to 2%' },
      ],
      quote: 'We knew our reputation was strong locally. What Isuremedia built is a website and profile that finally reflect that, and it shows up in the numbers every month.',
      quoteBy: 'Garden Solution Landscapes',
      quoteRole: 'Owner, Auckland, New Zealand',
      problemHeading: 'A strong local reputation the website was not converting into organic traffic.',
      problemIntro: 'The Google Business Profile was active and well-rated, but organic website traffic was minimal, and a mid-campaign hosting migration nearly derailed the technical foundation entirely.',
      problems: [
        { title: 'A thin organic keyword footprint', body: 'Most core service keywords sat on page two or lower. Service pages were thin, with minimal internal linking and weak on-page signals.' },
        { title: 'A competitive Auckland map pack', body: 'Established operators with 150+ reviews and years of citation history held the top map pack positions.' },
        { title: 'An undisclosed hosting migration mid-campaign', body: 'A DNS and IP change made without notice, landing during a Google algorithm update, temporarily disrupted the site’s technical footing.' },
        { title: 'Zero AI search visibility', body: 'Google AI Overviews were answering Auckland landscaping queries without mentioning the business, no FAQ schema, no structured answers to cite.' },
      ],
      overviewTags: [
        { label: 'Local SEO', tone: 'blue' },
        { label: 'AEO', tone: 'amber' },
        { label: 'Link Building', tone: 'blue' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Garden Solution Landscapes needed its website and Google Business Profile working as two reinforcing channels, a clean technical foundation, service pages built to rank, a real link-building program, and structured content that AI platforms could cite.',
        'Isuremedia built all of it in parallel, recovering from a mid-campaign hosting disruption without losing the timeline.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=700&q=80',
      didHeading: 'Recovered the technical foundation, then built organic, local, and AI visibility on top of it.',
      didIntro: 'Three phases run back-to-back, stabilise the site, build out on-page and local, then push authority and AI visibility.',
      process: [
        { label: 'Stabilise', title: 'Technical audit and DNS recovery', body: 'A full technical audit, a fast recovery from an undisclosed hosting migration, and schema markup across the site.' },
        { label: 'Build', title: 'Keyword, content and GBP optimisation', body: '24 keywords mapped across organic and GBP, service pages rebuilt, and the Google Business Profile fully optimised.' },
        { label: 'Authority', title: 'Link building and AI visibility', body: 'Backlinks grew from 54 to 348 with zero penalties, alongside an AEO content strategy targeting AI Overview trigger queries.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'Four months turned a minimal-traffic website into an 800% growth story, with the map pack and AI search now reinforcing the same local authority.',
      impactCards: [
        { label: 'Organic Traffic', title: '800% growth in four months', body: 'Sessions per day grew from roughly 50 to 450+, with click-through rate nearly tripling from 0.7% to 2%.' },
        { label: 'Map Pack', title: 'Top position for a core local search', body: '"Garden maintenance Auckland" now ranks position 2 in the local map pack, with several other queries at #1.' },
        { label: 'AI Search Visibility', title: 'Two live Google AI Overview citations', body: 'Garden Solution Landscapes is now cited by name for Auckland garden maintenance queries, including one with a website image panel.' },
        { label: 'Domain Authority', title: 'DA 15 to DA 24 with zero penalties', body: 'Backlinks grew from 54 to 348 with 100% retention, building sustainable authority rather than a short-term spike.' },
      ],
      keywordTable: {
        heading: 'Keyword movement over the first four months.',
        intro: 'The table below shows keywords that already had a ranking position at the start of the engagement.',
        rows: [
          { keyword: 'stump grinders auckland', start: 'Page 2, #8', current: 'Page 1, #1', change: 'Moved to Page 1, #1' },
          { keyword: 'yard cleanup services', start: 'Page 1, #3', current: 'Page 1, #1', change: 'Improved to #1' },
          { keyword: 'garden landscaping', start: 'Page 1, #8', current: 'Page 1, #1', change: 'Improved to #1' },
          { keyword: 'garden maintenance services', start: 'Page 1, #9', current: 'Page 1, #3', change: 'Improved' },
          { keyword: 'garden landscapes', start: 'Page 1, #1', current: 'Page 1, #3', change: 'Maintained Page 1' },
          { keyword: 'garden maintenance auckland', start: 'Page 2, #6', current: 'Page 2, #1', change: 'Improved' },
          { keyword: 'Landscapers Auckland', start: 'Page 2, #4', current: 'Page 2, #2', change: 'Improved' },
          { keyword: 'gardening services auckland', start: 'Page 2, #8', current: 'Page 2, #3', change: 'Improved' },
        ],
        note: 'New keywords including "landscaping companies auckland", "Artificial Lawn Installation", and several near-me variants that were not ranking at the start are now live on page one.',
      },
      aiCitations: {
        heading: 'Now cited in Google AI Overview for high-intent local queries.',
        intro: 'Google AI Overviews are citing Garden Solution Landscapes in answers to Auckland garden and landscaping queries.',
        rows: [
          { query: 'garden maintenance services', platform: 'Google AI Overview', detail: 'Featured with a website image panel alongside the AI answer.' },
          { query: 'top garden maintenance north shore', platform: 'Google AI Overview', detail: 'Cited among top-rated North Shore Auckland garden maintenance firms.' },
        ],
        note: 'The placement for "garden maintenance services" is especially significant, it includes a website panel image alongside the AI answer, giving the brand visual prominence at the point of highest user intent.',
      },
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'Several keywords sit on page two with a clear path to page one as domain authority keeps growing.',
      nextCards: [
        { title: 'Page two keywords ready to move', body: '"Landscapers Auckland", "garden maintenance auckland", and "gardening services auckland" are positioned to cross to page one with continued authority and content work.' },
        { title: 'AEO and review growth in parallel', body: 'AEO expansion into stump grinding and artificial lawn queries, alongside a review growth strategy to build past 38 GBP reviews.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Strong reputation, ' },
        { text: 'but not enough organic traffic?', highlight: true },
      ],
      ctaBody: [
        { text: 'If your Google Business Profile is carrying the business while your website sits idle, ' },
        { text: 'that is exactly the gap we close', highlight: true },
        { text: '. Talk to us and we will show you where the opportunity is.' },
      ],
      ctaPrimaryLabel: 'Get My Free Local SEO Audit',
      ctaPrimaryHref: '/services/seo/local-seo',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/local seo.webp',
    }} />
  );
}
