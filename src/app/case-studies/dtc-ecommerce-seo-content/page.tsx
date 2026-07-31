'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function CoastalSupplyCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Coastal Supply Co.',
      leadIn: 'Genuinely strong products were invisible on Google.',
      hook: 'Now organic search is the single biggest source of new customers.',
      intro: 'Coastal Supply Co. sells outdoor and watersport gear direct to consumers. Product quality and reviews were strong, but product and category pages rarely ranked past page two for the terms that actually drove purchases.',
      meta: {
        industry: 'E-Commerce / Outdoor Gear',
        location: 'United States',
        duration: '9 Months',
        services: 'Technical SEO & Content',
      },
      heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      resultHeadline: [
        { text: 'A rebuilt content and category strategy ' },
        { text: 'grew organic revenue 312% year over year', highlight: true },
        { text: ', with average rankings moving from position 9 to position 2.' },
      ],
      stats: [
        { val: '+312%', label: 'Organic Revenue', sub: 'year over year' },
        { val: '9→2', label: 'Avg Ranking Position', sub: 'top category terms' },
        { val: '+184%', label: 'Organic Sessions', sub: 'year over year' },
        { val: '46', label: 'Pages Ranking Page 1', sub: 'up from 12' },
      ],
      quote: 'Organic is now our single biggest source of new customers, and it keeps compounding.',
      quoteBy: 'Coastal Supply Co.',
      quoteRole: 'E-Commerce Director, United States',
      problemHeading: 'Strong products, thin pages, and no path to page one.',
      problemIntro: 'Coastal Supply had genuinely good reviews and margins, but their product and category pages were thin, generic, and rarely built around what buyers were actually searching for.',
      problems: [
        { title: 'Product pages read like a spec sheet', body: 'Descriptions covered dimensions and materials but never answered the actual questions buyers were searching for before purchasing.' },
        { title: 'Category pages had almost no content', body: 'Category pages were just product grids with no supporting copy, giving Google very little to understand what the page should rank for.' },
        { title: 'No supporting content cluster', body: 'There was no blog or guide content feeding authority into commercial pages, leaving them to rank on product strength alone.' },
        { title: 'Duplicate content across variants', body: 'Colour and size variants generated near-duplicate URLs that split ranking signals across near-identical pages.' },
      ],
      overviewTags: [
        { label: 'Technical SEO', tone: 'blue' },
        { label: 'Content Strategy', tone: 'blue' },
        { label: 'E-Commerce', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Coastal Supply needed product and category pages rebuilt around real buyer search intent, backed by a content cluster that fed authority directly into the pages that drive revenue.',
        'ISureMedia rebuilt the content and technical foundation over a nine-month engagement.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=700&q=80',
      didHeading: 'Rebuilt product and category pages around real buyer intent.',
      didIntro: 'Every fix fed the same goal — pages built around what buyers actually search for, with authority flowing to the commercial pages that convert.',
      process: [
        { label: 'Foundation', title: 'Variant duplication resolved', body: 'Colour and size variants were consolidated with canonical tags and a cleaner URL structure, stopping ranking signals from splitting across near-identical pages.' },
        { label: 'Content', title: 'Product and category pages rewritten', body: 'Pages were rebuilt around real buyer questions pulled from reviews and search data, not just specifications.' },
        { label: 'Authority', title: 'A supporting content cluster built', body: 'Buying guides and comparison content were published and interlinked to feed authority directly into product and category pages.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'Nine months of compounding content and technical work turned organic search from an afterthought into the top acquisition channel.',
      impactCards: [
        { label: 'Revenue Growing Fastest', title: 'Organic revenue up 312%', body: 'Organic revenue grew faster than any other channel and is still climbing.' },
        { label: 'Real Ranking Movement', title: 'Position 9 to position 2', body: 'Average ranking position for priority category terms moved from page one\'s bottom to its top.' },
        { label: 'More Pages Earning Traffic', title: '46 pages now rank page one', body: 'Up from just 12 pages before the engagement, spreading traffic across the catalog rather than a handful of pages.' },
        { label: 'A Channel That Compounds', title: 'Growth without more spend', body: 'Unlike paid channels, this growth keeps compounding without a matching increase in monthly spend.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The content and technical foundation built for Coastal Supply is ready to extend into further growth without starting over.',
      nextCards: [
        { title: 'International SEO expansion', body: 'The same content model is ready to be adapted for international markets Coastal Supply is now shipping to.' },
        { title: 'Structured review and Q&A schema', body: 'Existing product reviews can be marked up with structured schema to strengthen rich results and click-through rate further.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Great products, ' },
        { text: 'but invisible on Google?', highlight: true },
      ],
      ctaBody: [
        { text: 'Thin product pages and no content strategy quietly cap how much organic revenue you can ever earn, and ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you where the opportunity is.' },
      ],
      ctaPrimaryLabel: 'Get My Free SEO Audit',
      ctaPrimaryHref: '/services/seo',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/seo-analytics-illustration.webp',
    }} />
  );
}
