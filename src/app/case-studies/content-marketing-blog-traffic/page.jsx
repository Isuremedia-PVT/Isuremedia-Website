'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function BloomBrightCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Bloom & Bright Co.',
      leadIn: 'Content was still going out every week, but engagement had been sliding for months.',
      hook: 'Now every piece actually sounds like them, not generic marketing copy.',
      intro: <>Bloom & Bright is a lifestyle and wellness brand that never stopped publishing, but their blog and social content had <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>drifted into the same generic voice</span> as every competitor in the category.</>,
      meta: {
        industry: 'Lifestyle & Wellness Retail',
        location: 'United States',
        duration: '5 Months',
        services: 'Content Marketing & Social',
      },
      heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80',
      resultHeadline: [
        { text: 'A rebuilt content calendar and brand voice ' },
        { text: 'grew blog traffic 3.4x', highlight: true },
        { text: ' and lifted social engagement 61% in under six months.' },
      ],
      stats: [
        { val: '+3.4x', label: 'Blog Organic Traffic', sub: 'in 5 months' },
        { val: '+61%', label: 'Social Engagement', sub: 'quarter over quarter' },
        { val: '+2.8x', label: 'Email Open Rate', sub: 'after voice refresh' },
        { val: '40', label: 'Pieces Published', sub: 'over 5 months' },
      ],
      quote: 'Every piece of content actually sounds like us now, not like generic marketing copy.',
      quoteBy: 'Bloom & Bright Co.',
      quoteRole: 'Brand Manager, United States',
      problemHeading: 'Publishing consistently, but sounding like everyone else in the category.',
      problemIntro: 'Bloom & Bright had never stopped producing content, but the volume was masking a deeper problem — none of it sounded distinctly like them anymore.',
      problems: [
        { title: 'The brand voice had disappeared', body: 'Years of different writers and agencies had slowly flattened the voice into the same generic wellness-brand tone used across the category.' },
        { title: 'Topics were chosen by guesswork', body: 'Blog topics were picked based on what seemed popular rather than the questions real buyers were actually searching for.' },
        { title: 'Content was never repurposed', body: 'Every blog post and social update was created from scratch, with no system for turning one piece of content into several.' },
        { title: 'Engagement was declining quietly', body: 'Follower counts kept climbing, but engagement per post had been sliding for months with no one tracking why.' },
      ],
      overviewTags: [
        { label: 'Content Marketing', tone: 'blue' },
        { label: 'Social Media', tone: 'blue' },
        { label: 'Brand Voice', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Bloom & Bright needed their brand voice rebuilt from research on their actual customers, a content calendar driven by real buyer questions, and a repurposing system so every piece of content worked harder.',
        'Isuremedia rebuilt the voice, calendar, and distribution system over a five-month engagement.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=700&q=80',
      didHeading: 'Rebuilt the voice first, then the calendar around it.',
      didIntro: 'Voice, production, and distribution were rebuilt as one connected system rather than three separate workstreams.',
      process: [
        { label: 'Voice', title: 'A distinct brand voice, defined', body: 'Customer interviews and a review of top-performing past content were used to define a voice guide that made every future piece sound distinctly like Bloom & Bright.' },
        { label: 'Production', title: 'A calendar built on real questions', body: 'Topics were sourced directly from customer service tickets, reviews, and search data instead of guessing what might perform.' },
        { label: 'Distribution', title: 'One piece, several formats', body: 'Every blog post was systematically repurposed into social captions, email content, and short-form video scripts instead of starting from zero each time.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'The same publishing cadence now produces measurably better results because every piece is built around a real question in a voice people recognise.',
      impactCards: [
        { label: 'Traffic Growing, Not Flat', title: 'Blog traffic up 3.4x', body: 'Blog organic traffic has grown 3.4x in five months and is still climbing rather than plateauing.' },
        { label: 'Engagement Recovered', title: 'Social engagement up 61%', body: 'Social engagement is up 61% quarter over quarter after months of quiet decline.' },
        { label: 'A Voice People Recognise', title: 'Tone shows up in feedback', body: 'Customer feedback now regularly references the brand\'s tone specifically, something that never happened with the generic voice.' },
        { label: 'More Output, Same Team', title: 'One post, a week of content', body: 'The repurposing system means each blog post now produces a week of social and email content instead of one single asset.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The voice guide and content system built for Bloom & Bright is ready to extend into further channels without starting over.',
      nextCards: [
        { title: 'Short-form video expansion', body: 'The repurposing system already scripts video content, and is ready to scale into a consistent short-form video publishing cadence.' },
        { title: 'Influencer voice alignment', body: 'The same brand voice guide can be shared with influencer partners to keep sponsored content consistent with owned content.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Publishing consistently ' },
        { text: 'but sounding just like everyone else?', highlight: true },
      ],
      ctaBody: [
        { text: 'Volume without a distinct voice rarely moves the needle on engagement, and ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you where the opportunity is.' },
      ],
      ctaPrimaryLabel: 'Get My Free Content Audit',
      ctaPrimaryHref: '/services/content-creative',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/SEO Blog Writing.webp',
    }} />
  );
}
