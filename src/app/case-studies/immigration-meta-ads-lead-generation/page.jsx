'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function GlobalAllianzCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Global Allianz',
      leadIn: 'Lead volume was inconsistent and Cost Per Lead was too high to scale profitably.',
      hook: 'Now Spanish-language creative and refined targeting drive over 300 leads a month at a fraction of the cost.',
      intro: <>Global Allianz is an immigration law firm helping individuals and families across the United States navigate family petitions, green cards, and citizenship. Lead generation campaigns were already running, but <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>high cost per lead and inconsistent volume limited how far the firm could scale</span>.</>,
      meta: {
        industry: 'Immigration Legal Services',
        location: 'United States',
        duration: '24-Month Engagement',
        services: 'Meta Ads Lead Generation',
      },
      heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
      resultHeadline: [
        { text: 'With only a 33% increase in ad spend, ' },
        { text: 'lead volume grew 1,309% while Cost Per Lead dropped over 90%', highlight: true },
        { text: '.' },
      ],
      stats: [
        { val: '7,250', label: 'Total Results Generated', sub: 'across the engagement' },
        { val: '+1,309%', label: 'Lead Volume Growth', sub: '22 → 310 leads' },
        { val: '−90.5%', label: 'Cost Per Lead', sub: '$72.99 → $6.91' },
        { val: '+57.9%', label: 'CTR Improvement', sub: '1.40% → 2.21%' },
      ],
      quote: '[Client quote pending — replace with Global Allianz\'s actual testimonial]',
      quoteBy: 'Global Allianz',
      quoteRole: 'Immigration Legal Services Team',
      problemHeading: 'Inconsistent lead volume and a Cost Per Lead too high to scale.',
      problemIntro: 'Global Allianz was already generating immigration leads through Meta Ads, but volume was inconsistent, cost per lead was high, and existing creative was not building enough trust to convert Spanish-speaking prospects into qualified inquiries.',
      problems: [
        { title: 'Inconsistent lead volume', body: 'Lead flow varied significantly month to month, making it difficult to plan intake capacity or forecast growth.' },
        { title: 'High Cost Per Lead', body: 'Acquisition costs were high enough to limit how aggressively the firm could invest in scaling the campaigns.' },
        { title: 'Low engagement with existing creative', body: 'Ad creative was not resonating strongly enough with the target audience, and needed messaging that built trust and urgency.' },
        { title: 'Difficulty reaching qualified inquiries', body: 'Campaigns needed continuous testing and refinement to consistently attract genuinely qualified immigration inquiries rather than low-intent clicks.' },
      ],
      overviewTags: [
        { label: 'Meta Ads', tone: 'amber' },
        { label: 'Lead Generation', tone: 'blue' },
        { label: 'Spanish-Language Creative', tone: 'blue' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Global Allianz needed campaigns restructured around higher-quality lead forms, audiences refined toward high-intent Spanish-speaking communities, and creative that built trust around a genuinely difficult, high-stakes decision.',
        'Isuremedia rebuilt the account around educational, trust-building Spanish-language creative, refined targeting, and continuous testing of messaging, audiences, and lead quality.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80',
      didHeading: 'Built around trust-building creative and continuous refinement.',
      didIntro: 'Every part of the account — campaigns, audiences, and creative — was rebuilt around what Spanish-speaking immigration prospects actually needed to see to take the next step.',
      process: [
        { label: 'Campaigns', title: 'Restructuring & lead form refinement', body: 'Lead generation campaigns were restructured with optimized budget allocation and refined lead forms designed to attract higher-quality inquiries.' },
        { label: 'Creative', title: 'Spanish-language, trust-building messaging', body: 'Educational static and video creatives in Spanish focused on real immigration pain points, payment plans, and attorney support, testing emotional, urgency, and informational angles.' },
        { label: 'Audience', title: 'High-intent targeting & retargeting', body: 'Targeting was refined toward high-intent Spanish-speaking communities, with retargeting campaigns re-engaging interested prospects and audience segments optimized on lead quality.' },
      ],
      impactHeading: 'What changed across the engagement.',
      impactIntro: 'With only a 33.4% increase in ad spend, the account moved from an inconsistent, expensive lead source to a scalable, cost-efficient growth channel.',
      impactCards: [
        { label: 'Lead Volume', title: '1,309% increase in leads', body: 'Leads grew from 22 to 310 in the same 2-month comparison window two years apart.' },
        { label: 'Cost Efficiency', title: '90.5% lower Cost Per Lead', body: 'CPL dropped from $72.99 to $6.91 even as lead volume grew dramatically.' },
        { label: 'Engagement', title: '57.9% higher CTR', body: 'Click-through rate improved from 1.40% to 2.21% as trust-building creative resonated more strongly.' },
        { label: 'Traffic Cost', title: 'Lower CPC and CPM', body: 'CPC fell 44.2% to $0.82 and CPM fell 12.4% to $18.02 — cheaper, more efficient reach.' },
      ],
      metricsTable: {
        heading: 'Two Years of Optimization, Side by Side',
        intro: 'Comparing the same two-month window two years apart shows the full impact of campaign, creative, and audience optimization.',
        beforeLabel: 'May–Jun 2024',
        afterLabel: 'May–Jun 2026',
        rows: [
          { label: 'Total Ad Spend', before: '$1,605.92', after: '$2,141.67', change: '+33.4%' },
          { label: 'Leads', before: '22', after: '310', change: '+1,309%' },
          { label: 'Average CPL', before: '$72.99', after: '$6.91', change: '−90.5%' },
          { label: 'Reach', before: '36,996', after: '40,102', change: '+8.4%' },
          { label: 'CTR', before: '1.40%', after: '2.21%', change: '+57.9%' },
          { label: 'CPC', before: '$1.47', after: '$0.82', change: '−44.2%' },
          { label: 'CPM', before: '$20.56', after: '$18.02', change: '−12.4%' },
        ],
        note: 'All figures reflect a like-for-like 2-month comparison window two years apart.',
      },
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The targeting and creative framework built for Global Allianz opens up further scaling that needs no re-engineering to unlock.',
      nextCards: [
        { title: 'Expanding into new practice areas', body: 'The trust-building creative framework already proven for family petitions and green cards can extend to other immigration services without rebuilding the approach from scratch.' },
        { title: 'Deeper lead-quality scoring', body: 'Lead quality data already gathered can feed a scoring system that prioritises intake around the highest-value inquiries.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Paying too much for ' },
        { text: 'inconsistent leads?', highlight: true },
      ],
      ctaBody: [
        { text: 'High Cost Per Lead and inconsistent volume are the most common reasons a lead-gen account stalls. If your Meta Ads need ' },
        { text: 'trust-building creative and continuous optimization', highlight: true },
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
