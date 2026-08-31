'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function GarnusIndiaCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Garnus India',
      leadIn: 'A brand-new Instagram presence with no followers, no content system, and no established voice.',
      hook: 'Now a personality-led content system has grown a fully organic, engaged audience from absolute zero.',
      intro: <>Garnus India is a premium e-commerce brand crafting natural wooden essentials for kitchen and home, selling direct through garnusindia.com. Launching into a crowded home-and-lifestyle category, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>the brand needed to build awareness from zero with no existing content, community, or voice</span>.</>,
      meta: {
        industry: 'Natural Wooden Essentials (E-commerce)',
        location: 'India',
        duration: '6 Months',
        services: 'Social Media Content & Influencer Strategy',
      },
      heroImage: '/casestudy/Garnus-banner.webp',
      resultHeadline: [
        { text: 'From a blank page to ' },
        { text: '447 followers and 50-60k+ organic views in 6 months', highlight: true },
        { text: ', fully organic with zero paid reach.' },
      ],
      stats: [
        { val: '0 → 447', label: 'Followers', sub: 'fully organic, in 6 months' },
        { val: '50-60k+', label: 'Organic Views', sub: 'across the period' },
        { val: '4-5', label: 'Influencer Collabs', sub: 'home, kitchen & lifestyle niche' },
        { val: '0', label: 'Paid Reach Used', sub: 'entirely organic growth' },
      ],
      quote: '[Client quote pending, replace with Garnus India\'s actual testimonial]',
      quoteBy: 'Garnus India',
      quoteRole: 'E-commerce Brand Team',
      problemHeading: 'Launching a product brand into a crowded space, with no audience to start.',
      problemIntro: 'Garnus India needed to build brand awareness from absolute zero in a competitive home-and-lifestyle market already full of similar wooden-product brands, with no existing content, community, or voice to build from.',
      problems: [
        { title: 'Zero existing presence', body: 'A brand-new Instagram page with no followers, no content system, and no established voice to build from.' },
        { title: 'A crowded, competitive category', body: 'The home and kitchen lifestyle space is full of similar wooden-product brands, making it hard to stand out with generic content.' },
        { title: 'No community or engagement', body: 'There was no existing audience or community interaction to build early momentum from.' },
        { title: 'Turning a new page into a scroll-stopping presence', body: 'The brand needed a recognisable identity that could earn attention, not just post product photos into the void.' },
      ],
      overviewTags: [
        { label: 'Content & Brand Voice', tone: 'blue' },
        { label: 'Influencer Collabs', tone: 'blue' },
        { label: 'Campaign-Led Growth', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Garnus India needed a distinct, personality-led content style that stopped the scroll rather than blending into a category full of similar wooden-product brands, creative-first, not just product shots.',
        'Isuremedia built a content and influencer strategy combining playful, relatable creatives, festive and sale campaigns, and mid-tier creator partnerships to build awareness from the ground up.',
      ],
      overviewImage: '/casestudy/Garnus-inner.webp',
      didHeading: 'Built around a recognisable voice, not just a content calendar.',
      didIntro: 'Every part of the strategy, creative style, campaigns, and partnerships, was designed to make Garnus India recognisable in a category full of near-identical products.',
      process: [
        { label: 'Voice', title: 'Personality-led creative & consistency', body: 'Built a distinct, playful, relatable content style that stood out from typical product shots, maintained with a steady posting rhythm and active engagement.' },
        { label: 'Campaigns', title: 'Festive & sale campaign creatives', body: 'Ran themed social campaigns around festive seasons, offers, and sales to spike attention and reach at the moments buyers were most active.' },
        { label: 'Partnerships', title: 'Mid-tier influencer collaborations', body: 'Partnered with 4-5 mid-tier creators in the home, kitchen, and lifestyle niche to put the brand in front of relevant, ready-made audiences.' },
      ],
      impactHeading: 'What changed in 6 months.',
      impactIntro: 'A blank page became an active, recognisable brand presence, proving awareness can be built from the ground up with the right creative and consistent execution.',
      impactCards: [
        { label: 'Audience Growth', title: '0 to 447 followers, fully organic', body: 'Grew a targeted, engaged following from absolute zero with no paid promotion.' },
        { label: 'Reach', title: '50-60k+ organic views', body: 'Personality-led creatives and campaign content earned significant organic reach across the period.' },
        { label: 'Brand Voice', title: 'A distinct, recognisable identity', body: 'Established a content style and tone that stood out from a category full of similar wooden-product brands.' },
        { label: 'Expanded Reach', title: '4-5 influencer collaborations', body: 'Creator partnerships in the home, kitchen, and lifestyle niche expanded the brand into new, relevant audiences.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The content and partnership framework built for Garnus India opens up further growth that needs no re-engineering to unlock.',
      nextCards: [
        { title: 'Scaling influencer partnerships', body: 'The creator-partnership playbook already proven with 4-5 collaborations can extend to a larger roster without rebuilding the vetting and briefing process.' },
        { title: 'UGC and community content', body: 'The engaged audience already built opens the door to a user-generated content pillar as more customers share their own Garnus setups.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Launching a brand with ' },
        { text: 'zero audience to start from?', highlight: true },
      ],
      ctaBody: [
        { text: 'A crowded category is the most common reason a new brand struggles to get noticed. If you need ' },
        { text: 'a distinct voice and a content system built from zero', highlight: true },
        { text: ', that is exactly what we do. Talk to us today.' },
      ],
      ctaPrimaryLabel: 'Get My Free Content Strategy Call',
      ctaPrimaryHref: '/content-marketing-and-creative-agency',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/video edting.webp',
    }} />
  );
}
