'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function EcommerceSEOCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Qualis Roofing',
      leadIn: 'Local visibility had been flat for months.',
      hook: 'Now they rank on page one for the keywords that actually bring in jobs.',
      intro: 'Qualis Roofing serves the Dallas–Fort Worth area and had been publishing content and running local campaigns for over a year with almost no movement in rankings. Two previous agencies had made promises neither could keep.',
      meta: {
        industry: 'Home Services / Roofing',
        location: 'United States',
        duration: '8 Months',
        services: 'Technical SEO & Content',
      },
      heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80',
      resultHeadline: [
        { text: 'Top 10 organic keyword rankings ' },
        { text: 'grew 427% year over year', highlight: true },
        { text: ', with organic conversions up 68% in the first six months alone.' },
      ],
      stats: [
        { val: '+427%', label: 'Top 10 Organic Keywords', sub: 'year over year' },
        { val: '+68%', label: 'Organic Conversions', sub: 'in 6 months' },
        { val: '340+', label: 'Technical Errors Fixed', sub: 'crawl & indexation' },
        { val: '89%', label: 'Core Web Vitals Pass Rate', sub: 'up from 40%' },
      ],
      quote: 'Since we started working with ISM, our SEO return on investment is in the 800% range.',
      quoteBy: 'Qualis Roofing',
      quoteRole: 'Owner, Dallas–Fort Worth',
      problemHeading: '18 months of flat traffic despite consistent publishing.',
      problemIntro: 'Qualis had been trading online for four years and publishing content regularly, but organic traffic had not moved in over a year. The audit surfaced technical problems that had been compounding quietly the whole time.',
      problems: [
        { title: 'Crawl budget wasted on duplicates', body: 'Duplicate location and service page variants were splitting ranking signals and burning crawl budget that should have gone to priority pages.' },
        { title: 'Category structure confused Google', body: 'There was no clear hierarchy telling Google which pages should rank for which service and location combinations.' },
        { title: 'Mobile load times were failing', body: 'Core Web Vitals were failing on 60% of pages, directly suppressing rankings on the mobile searches that make up most local traffic.' },
        { title: 'Content with no distribution strategy', body: 'Blog posts were published regularly but never linked into the site in a way that passed authority to the pages that needed to rank.' },
      ],
      overviewTags: [
        { label: 'Technical SEO', tone: 'blue' },
        { label: 'Content Strategy', tone: 'blue' },
        { label: 'Local SEO', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Qualis needed the technical foundation fixed before any amount of new content would matter, followed by a content and internal linking strategy that actually fed authority to the pages driving jobs.',
        'Isuremedia audited, rebuilt, and scaled the strategy across eight months of compounding work.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=700&q=80',
      didHeading: 'Fixed the technical foundation first, then built content on top of it.',
      didIntro: 'Every fix was sequenced so technical health was solid before content and internal linking work began compounding on top of it.',
      process: [
        { label: 'Audit & Fix', title: 'Technical foundation repaired', body: 'A full technical audit identified and resolved 340+ errors across crawlability, indexation, and Core Web Vitals, and consolidated duplicate category and location pages.' },
        { label: 'Architecture', title: 'Internal linking rebuilt', body: 'Link equity was redirected to flow properly from blog content into the product and category pages that actually needed to rank.' },
        { label: 'Content', title: 'Topical cluster built over 8 months', body: 'Eighteen SEO articles targeting informational queries were published and interlinked to feed authority directly into commercial pages, with schema markup added throughout.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'Eight months of compounding technical and content work turned into consistent, defensible ranking growth rather than one-off spikes.',
      impactCards: [
        { label: 'Compounding Growth', title: 'Traffic still climbing', body: 'Organic sessions are up 218% year on year and still climbing, rather than flattening out after an initial bump.' },
        { label: 'Higher Quality Traffic', title: 'Revenue outpacing traffic', body: 'Organic revenue grew faster than traffic itself, meaning the new visitors converting are the right kind of visitor.' },
        { label: 'Page One Rankings', title: '14 pages promoted to page one', body: 'Category pages moved from page three or worse to page one for their primary service and location terms.' },
        { label: 'A Passing Technical Score', title: 'Core Web Vitals fixed', body: 'Pass rate improved from 40% to 89%, removing a ranking ceiling that had been invisible until the audit.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The technical and content foundation built for Qualis opens up further growth that needs no rebuilding to unlock.',
      nextCards: [
        { title: 'Location page expansion', body: 'The same content and internal linking model can be replicated for new service areas as Qualis expands into neighboring counties.' },
        { title: 'Review and schema layer', body: 'Structured review data can now be layered onto existing schema markup to strengthen map pack visibility alongside organic rankings.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Ready to rank higher ' },
        { text: 'and bring in more customers?', highlight: true },
      ],
      ctaBody: [
        { text: 'If your traffic has been flat for more than six months, the problem is almost always technical, and ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you where the opportunity is.' },
      ],
      ctaPrimaryLabel: 'Get My Free SEO Audit',
      ctaPrimaryHref: '/services/seo',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/Seo (2).webp',
    }} />
  );
}
