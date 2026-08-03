'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function LawFirmCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Whitfield & Cole Law',
      leadIn: 'Buried on page three with no map pack visibility.',
      hook: 'Now ranking in the top 3 map pack results for every core practice area.',
      intro: 'Whitfield & Cole is a personal injury firm competing in one of the most saturated legal markets in the country, with a pipeline that had become almost entirely dependent on referrals.',
      meta: {
        industry: 'Legal / Law Firm',
        location: 'United States',
        duration: '5 Months',
        services: 'Local SEO',
      },
      heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      resultHeadline: [
        { text: 'The firm moved from page three ' },
        { text: 'into the top 3 Google Map Pack results', highlight: true },
        { text: ' for every core practice area within five months.' },
      ],
      stats: [
        { val: 'Top 3', label: 'Map Pack Positions', sub: 'core practice areas' },
        { val: '+180%', label: 'Organic Leads', sub: 'in 5 months' },
        { val: '47', label: 'Google Reviews', sub: 'up from 11' },
        { val: '5', label: 'Months to Page One', sub: 'from page three' },
      ],
      quote: 'Every recommendation ISM made was backed by data, not guesswork — and it showed up in the rankings within weeks.',
      quoteBy: 'Whitfield & Cole Law',
      quoteRole: 'Managing Partner, United States',
      problemHeading: 'Invisible on Maps in the most competitive local market there is.',
      problemIntro: 'Legal is one of the most contested local search categories in the country. Whitfield & Cole had a strong reputation locally, but almost none of that trust was visible to Google.',
      problems: [
        { title: 'Google Business Profile was incomplete', body: 'Service categories, attributes, and posts were left mostly blank, giving Google very little signal about what the firm actually specialised in.' },
        { title: 'Review volume was far too thin', body: 'Eleven reviews is not enough signal to compete with firms carrying hundreds, regardless of how satisfied past clients actually were.' },
        { title: 'No practice-area landing pages', body: 'A single generic services page tried to rank for personal injury, auto accidents, and workers\' comp all at once, and lost on all three.' },
        { title: 'Citations were inconsistent', body: 'The firm\'s name, address, and phone number varied slightly across directories, which is enough to quietly undermine local ranking signals.' },
      ],
      overviewTags: [
        { label: 'Local SEO', tone: 'blue' },
        { label: 'Google Business Profile', tone: 'blue' },
        { label: 'Reviews', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Whitfield & Cole needed a complete local SEO foundation — a fully optimised Google Business Profile, dedicated practice-area pages, and a system for consistently generating reviews from real clients.',
        'Isuremedia rebuilt all three in parallel over a five-month engagement.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
      didHeading: 'Rebuilt the local SEO foundation practice area by practice area.',
      didIntro: 'Profile, pages, and reviews were treated as one connected system rather than three separate projects.',
      process: [
        { label: 'Profile', title: 'Google Business Profile optimised', body: 'Every service category, attribute, and photo was filled out completely, with a consistent weekly posting cadence added on top.' },
        { label: 'Pages', title: 'Dedicated practice-area pages', body: 'Personal injury, auto accidents, and workers\' comp each received their own optimised page instead of competing for the same generic URL.' },
        { label: 'Reviews', title: 'A repeatable review system', body: 'An automated post-case review request sequence took the firm from 11 reviews to 47 within the engagement.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'Five months of local SEO fundamentals turned an almost entirely referral-dependent pipeline into one with a consistent flow of organic leads.',
      impactCards: [
        { label: 'Map Pack Visibility', title: 'Top 3 for every practice area', body: 'The firm now appears in the top 3 map pack results for every core practice area, the exact placement most local searchers click first.' },
        { label: 'Referrals No Longer Carry It', title: 'Organic leads now share the load', body: 'Organic leads now make up a meaningful share of new cases, reducing dependence on referral relationships alone.' },
        { label: 'A Review Engine', title: 'Reviews on a repeatable cadence', body: 'Reviews now accumulate on a repeatable cadence instead of depending on someone remembering to ask.' },
        { label: 'Consistent Citations', title: 'One identity, every directory', body: 'Name, address, and phone number are now identical across every directory, removing a quiet drag on rankings.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The local SEO foundation built for Whitfield & Cole is ready to extend further without starting over.',
      nextCards: [
        { title: 'Additional office locations', body: 'The same practice-area and Google Business Profile playbook is ready to roll out as the firm opens further offices.' },
        { title: 'Video testimonial content', body: 'The review pipeline already in place can be extended to capture video testimonials for use across the site and paid social.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Invisible on Google Maps ' },
        { text: 'in your own local market?', highlight: true },
      ],
      ctaBody: [
        { text: 'If your firm is not showing up in the map pack, most of your best local searches never see you at all, and ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you where the opportunity is.' },
      ],
      ctaPrimaryLabel: 'Get My Free Local SEO Audit',
      ctaPrimaryHref: '/services/seo/local-seo',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/local seo.webp',
    }} />
  );
}
