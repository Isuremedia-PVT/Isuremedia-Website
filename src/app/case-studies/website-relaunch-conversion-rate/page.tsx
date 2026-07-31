'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function MiAmorCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Mi Amor',
      leadIn: 'A slow, outdated website was quietly costing them customers every single day.',
      hook: 'Now the funnel converts almost twice as well as the old site ever did.',
      intro: 'Mi Amor sells direct-to-consumer online, but their five-year-old website was slow, unclear about what they actually offered, and losing visitors before checkout ever loaded.',
      meta: {
        industry: 'E-Commerce / Retail',
        location: 'United States',
        duration: '90 Days',
        services: 'Website Redesign & CRO',
      },
      heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
      resultHeadline: [
        { text: 'A full funnel rebuild ' },
        { text: 'nearly doubled the site\'s conversion rate', highlight: true },
        { text: ' within the first quarter, with no change in ad spend.' },
      ],
      stats: [
        { val: '+112%', label: 'Conversion Rate', sub: 'after relaunch' },
        { val: '-38%', label: 'Bounce Rate', sub: 'first 90 days' },
        { val: '-2.1s', label: 'Page Load Time', sub: 'down from 5.8s' },
        { val: '+54%', label: 'Checkout Completion', sub: 'mobile & desktop' },
      ],
      quote: 'The new funnel our team built converts almost twice as well as our old site ever did.',
      quoteBy: 'Mi Amor',
      quoteRole: 'Founder, United States',
      problemHeading: 'A slow site was turning visitors away before they saw the offer.',
      problemIntro: 'Mi Amor was spending steadily to drive traffic, but the website itself was the leak. Visitors were bouncing before the page even finished loading.',
      problems: [
        { title: 'Page load times were bleeding traffic', body: 'Pages took nearly six seconds to load on mobile, well past the point where most visitors had already left.' },
        { title: 'The offer was not clear above the fold', body: 'A first-time visitor had to scroll several screens before understanding what Mi Amor actually sold and why it mattered.' },
        { title: 'Checkout had too much friction', body: 'An outdated multi-step checkout with no guest option was quietly costing sales at the final step, the most expensive place to lose a customer.' },
        { title: 'The site was not really built for mobile', body: 'The layout technically resized on phones, but buttons, forms, and images were never designed for how mobile visitors actually shop.' },
      ],
      overviewTags: [
        { label: 'Website Redesign', tone: 'blue' },
        { label: 'CRO', tone: 'blue' },
        { label: 'Web Development', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Mi Amor needed a complete funnel rebuild — faster load times, a clearer offer above the fold, and a streamlined checkout — not a cosmetic redesign layered on top of the same slow foundation.',
        'ISureMedia rebuilt the funnel end to end over a 90-day engagement.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80',
      didHeading: 'Rebuilt the funnel end to end, not just the homepage.',
      didIntro: 'Performance, messaging, and checkout were treated as one connected funnel rather than three separate fixes.',
      process: [
        { label: 'Performance', title: 'Speed fixed at the foundation', body: 'Images, scripts, and hosting were rebuilt from the ground up, cutting mobile load time from 5.8 seconds to under 4.' },
        { label: 'Messaging', title: 'A clear offer above the fold', body: 'The homepage and product pages were rewritten so a first-time visitor understands the offer within the first few seconds.' },
        { label: 'Checkout', title: 'Friction removed from checkout', body: 'A guest checkout option and a streamlined single-page flow replaced the old multi-step process, recovering sales that were being lost at the final click.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'The same traffic and the same ad spend now convert at nearly double the rate, simply because the site stopped getting in the way.',
      impactCards: [
        { label: 'Conversions Nearly Doubled', title: '+112% conversion rate', body: 'The same volume of traffic now converts at 112% higher than the old site ever managed.' },
        { label: 'Fewer Visitors Bouncing', title: 'Bounce rate down 38%', body: 'Bounce rate dropped 38% in the first 90 days as pages started loading fast enough to keep visitors around.' },
        { label: 'A Real Mobile Experience', title: 'Built for mobile, not resized', body: 'The site is now genuinely built for mobile shopping, not just resized to technically fit the screen.' },
        { label: 'Checkout That Completes', title: '+54% checkout completion', body: 'Checkout completion is up 54% now that the most expensive step in the funnel no longer causes drop-off.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The rebuilt funnel gives Mi Amor a foundation for further conversion gains that need no further rebuilding to unlock.',
      nextCards: [
        { title: 'Structured A/B testing roadmap', body: 'The new site is built to support ongoing split testing on headlines, pricing display, and checkout flow without engineering work each time.' },
        { title: 'Email capture expansion', body: 'The faster, clearer funnel is ready to layer in exit-intent and post-purchase email capture to grow the list alongside sales.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Is your website quietly ' },
        { text: 'leaking customers?', highlight: true },
      ],
      ctaBody: [
        { text: 'A slow, unclear, or friction-heavy site quietly costs you customers every single day, and ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you where the opportunity is.' },
      ],
      ctaPrimaryLabel: 'Get My Free Website Audit',
      ctaPrimaryHref: '/services/websites-funnels',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/sales-funnel-illustration.webp',
    }} />
  );
}
