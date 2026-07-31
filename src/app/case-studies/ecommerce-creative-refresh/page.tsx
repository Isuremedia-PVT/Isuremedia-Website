'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function FernOakCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Fern & Oak Interiors',
      leadIn: 'Product photography and ad creative looked homemade next to bigger competitors.',
      hook: 'Now every ad and product shot matches the premium brand they actually are.',
      intro: 'Fern & Oak Interiors designs and sells premium home decor pieces, but their product photography and ad creative had not kept pace with the quality of the products themselves, and it was starting to show in performance.',
      meta: {
        industry: 'E-Commerce / Home Decor',
        location: 'United States',
        duration: '4 Months',
        services: 'Creative & Ad Design',
      },
      heroImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80',
      resultHeadline: [
        { text: 'A full visual refresh ' },
        { text: 'more than doubled ad click-through rate', highlight: true },
        { text: ' while cutting cost per purchase by nearly a third.' },
      ],
      stats: [
        { val: '+2.6x', label: 'Ad Click-Through Rate', sub: 'after creative refresh' },
        { val: '-31%', label: 'Cost Per Purchase', sub: 'same ad spend' },
        { val: '120+', label: 'Product Photos Reshot', sub: 'in 4 months' },
        { val: '+44%', label: 'Add-to-Cart Rate', sub: 'on refreshed listings' },
      ],
      quote: 'Our ads finally look like the premium brand we actually are.',
      quoteBy: 'Fern & Oak Interiors',
      quoteRole: 'Founder, United States',
      problemHeading: 'Premium products, inconsistent visuals.',
      problemIntro: 'Fern & Oak\'s products were genuinely well made, but photography and ad creative had been produced piecemeal by different freelancers over several years, with no consistent visual identity.',
      problems: [
        { title: 'Product photos varied wildly in quality', body: 'Some listings had professional studio shots, others had phone photos from years earlier, with no consistency across the catalog.' },
        { title: 'Ad creative did not match the site', body: 'Ads used a completely different visual style from the product pages they linked to, creating a jarring experience for new visitors.' },
        { title: 'No system for new product launches', body: 'Every new product required starting the creative process from scratch, with no templates or style guide to speed things up.' },
        { title: 'Social content felt like an afterthought', body: 'Social posts were reused ad creative with no format built specifically for how people actually browse social feeds.' },
      ],
      overviewTags: [
        { label: 'Product Photography', tone: 'blue' },
        { label: 'Ad Creative', tone: 'blue' },
        { label: 'Brand Identity', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Fern & Oak needed a consistent visual identity across product photography, ad creative, and social — with a repeatable system for new launches, not another one-off photoshoot.',
        'ISureMedia rebuilt the full visual library over a four-month engagement.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80',
      didHeading: 'Rebuilt the visual identity as one repeatable system.',
      didIntro: 'Photography, ad creative, and social content were rebuilt around one consistent style guide rather than three separate efforts.',
      process: [
        { label: 'Photography', title: 'A consistent studio standard', body: 'Over 120 products were reshot to one consistent lighting, angle, and styling standard, replacing years of inconsistent freelance work.' },
        { label: 'Ad Creative', title: 'Templates matched to the brand', body: 'A set of ad creative templates was built directly from the new photography, so every ad now matches the product pages it links to.' },
        { label: 'Social', title: 'Format built for how people scroll', body: 'Social content was rebuilt around formats designed for feed browsing rather than repurposed ad creative.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'The same ad spend now performs meaningfully better simply because the creative matches the quality of the product.',
      impactCards: [
        { label: 'Ads People Actually Stop For', title: 'Click-through rate up 2.6x', body: 'The refreshed creative is stopping scroll at more than double the previous rate.' },
        { label: 'Cheaper Purchases', title: 'Cost per purchase down 31%', body: 'The same monthly ad spend now produces meaningfully more purchases.' },
        { label: 'A Repeatable System', title: 'New launches move faster', body: 'New product launches now follow an established template instead of starting the creative process from zero.' },
        { label: 'Listings That Convert Better', title: 'Add-to-cart rate up 44%', body: 'Refreshed product listings are converting browsers into cart adds at a meaningfully higher rate.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The visual system built for Fern & Oak is ready to extend into further formats without starting over.',
      nextCards: [
        { title: 'Short-form video product content', body: 'The same styling standard is ready to extend into short-form video content for social and paid channels.' },
        { title: 'Seasonal campaign templates', body: 'The template system built during this engagement is ready to be adapted for seasonal and holiday campaigns without a fresh photoshoot each time.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Do your products ' },
        { text: 'look better than your ads?', highlight: true },
      ],
      ctaBody: [
        { text: 'Inconsistent photography and creative quietly undersell great products every day, and ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you where the opportunity is.' },
      ],
      ctaPrimaryLabel: 'Get My Free Creative Audit',
      ctaPrimaryHref: '/services/content-creative',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/content-creative-illustration.webp',
    }} />
  );
}
