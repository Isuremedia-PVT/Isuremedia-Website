'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function Scrubs4UCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Scrubs4U',
      leadIn: 'Purchases were inconsistent and rising acquisition costs made it hard to scale profitably.',
      hook: 'Now the account runs on a disciplined, data-driven system delivering 3.54x all-time ROAS.',
      intro: <>Scrubs4U is a premium medical apparel brand selling scrubs to nurses, doctors, and healthcare workers across the United States and Canada. Meta Ads were already running, but <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>creative fatigue and rising acquisition costs made it difficult to scale profitably</span>.</>,
      meta: {
        industry: 'Medical Apparel (E-commerce)',
        location: 'United States & Canada',
        duration: '12-Month Engagement',
        services: 'Meta Ads Management',
      },
      heroImage: '/casestudy/PPC scrub--banner.webp',
      resultHeadline: [
        { text: 'A 7.9% increase in ad spend delivered a ' },
        { text: '173.6% increase in revenue and a 154% improvement in ROAS', highlight: true },
        { text: ' over twelve months.' },
      ],
      stats: [
        { val: '3.54x', label: 'All-Time ROAS', sub: 'across full engagement' },
        { val: '$541K', label: 'Revenue Generated', sub: 'from $152,956.59 spend' },
        { val: '+173.6%', label: 'Revenue Growth', sub: 'same 30-day window YoY' },
        { val: '−11.6%', label: 'Cost Per Purchase', sub: 'down to $39.53' },
      ],
      quote: '[Client quote pending, replace with Scrubs4U\'s actual testimonial]',
      quoteBy: 'Scrubs4U',
      quoteRole: 'E-commerce Team',
      problemHeading: 'Inconsistent purchase volume, creative fatigue, and rising acquisition costs.',
      problemIntro: 'Scrubs4U was already running Meta Ads, but purchase volume was inconsistent, existing creatives had fatigued, and acquisition costs were climbing, making it difficult to scale spend without losing efficiency.',
      problems: [
        { title: 'Inconsistent purchase volume', body: 'Purchases fluctuated month to month with no reliable, repeatable pattern to scale from.' },
        { title: 'Creative fatigue', body: 'The same creative assets had been shown repeatedly, causing performance to decline as audiences became fatigued.' },
        { title: 'Rising acquisition costs', body: 'Cost per purchase was climbing, putting pressure on margins as the brand tried to grow.' },
        { title: 'Difficulty scaling profitably', body: 'Every attempt to increase budget saw efficiency drop, with no system in place to keep growth profitable.' },
      ],
      overviewTags: [
        { label: 'Meta Ads', tone: 'amber' },
        { label: 'Campaign Optimization', tone: 'blue' },
        { label: 'Creative Testing', tone: 'blue' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Scrubs4U needed a system built on continuous optimization rather than one-time changes, restructured campaigns, refined audience targeting, and a steady pipeline of new creative to prevent fatigue from eroding performance.',
        'Isuremedia rebuilt the account around weekly analysis, creative and audience testing, and disciplined scaling of whatever was proven to work.',
      ],
      overviewImage: '/casestudy/scrub-inner.webp',
      didHeading: 'Built around continuous optimization, not one-time changes.',
      didIntro: 'Every part of the account, campaigns, creative, and audiences, was treated as something to keep testing and improving, not something to set and leave.',
      process: [
        { label: 'Campaigns', title: 'Restructuring & budget optimization', body: 'Campaigns were restructured with refined audience targeting and optimized budget allocation to improve efficiency from the foundation up.' },
        { label: 'Creative', title: 'New angles, video & static testing', body: 'New marketing angles were introduced alongside video creatives and static image variations, testing emotional versus product-focused messaging.' },
        { label: 'Optimization', title: 'Weekly testing & scaling', body: 'Weekly performance analysis drove ongoing creative and audience testing, with winning combinations scaled systematically.' },
      ],
      impactHeading: 'What changed in twelve months.',
      impactIntro: 'With only a 7.9% increase in advertising spend, the account moved from an inconsistent channel to a scalable, profitable growth engine.',
      impactCards: [
        { label: 'Revenue', title: '173.6% increase in revenue', body: 'Revenue grew from $9,620.49 to $26,325.81 across the same 30-day comparison window one year apart.' },
        { label: 'ROAS', title: '154% improvement in ROAS', body: 'Return on ad spend climbed from 2.26x to 5.74x with only a 7.9% increase in spend.' },
        { label: 'Cost Efficiency', title: '11.6% lower cost per purchase', body: 'CPA dropped from $44.73 to $39.53 even as purchase volume increased.' },
        { label: 'Engagement', title: 'Higher CTR, lower CPC & CPM', body: 'CTR rose 30.8% to 2.38%, while CPC fell to $0.45 and CPM to $10.80, cheaper, more engaging traffic.' },
      ],
      metricsTable: {
        heading: 'One Year of Optimization, Side by Side',
        intro: 'Comparing the same 30-day window one year apart shows the full impact of continuous campaign, creative, and audience optimization.',
        beforeLabel: 'Jul–Aug 2025',
        afterLabel: 'Jul–Aug 2026',
        rows: [
          { label: 'Total Ad Spend', before: '$4,249.03', after: '$4,585.62', change: '+7.9%' },
          { label: 'Purchases', before: '95', after: '116', change: '+22.1%' },
          { label: 'Revenue', before: '$9,620.49', after: '$26,325.81', change: '+173.6%' },
          { label: 'ROAS', before: '2.26x', after: '5.74x', change: '+154.0%' },
          { label: 'CPA', before: '$44.73', after: '$39.53', change: '−11.6%' },
          { label: 'CTR', before: '1.82%', after: '2.38%', change: '+30.8%' },
          { label: 'CPC', before: '$0.64', after: '$0.45', change: '−29.7%' },
          { label: 'CPM', before: '$11.63', after: '$10.80', change: '−7.1%' },
        ],
        note: 'All figures reflect a like-for-like 30-day comparison window one year apart.',
      },
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The testing framework built for Scrubs4U opens up further scaling that needs no re-engineering to unlock.',
      nextCards: [
        { title: 'Expanding winning creative angles', body: 'The emotional-versus-product-focused testing framework already in place can extend to new product lines without rebuilding the testing process.' },
        { title: 'Broader channel expansion', body: 'The audience and creative data gathered on Meta can inform expansion into adjacent paid channels with a head start on what already converts.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Ad spend growing but ' },
        { text: 'ROAS staying flat?', highlight: true },
      ],
      ctaBody: [
        { text: 'Creative fatigue and rising acquisition costs are the most common reasons profitable scaling stalls. If your Meta Ads need ' },
        { text: 'continuous optimization, not one-time fixes', highlight: true },
        { text: ', that is exactly what we do. Talk to us today.' },
      ],
      ctaPrimaryLabel: 'Get My Free Meta Ads Audit',
      ctaPrimaryHref: '/services/ppc-paid-marketing',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/meta ads.webp',
    }} />
  );
}
