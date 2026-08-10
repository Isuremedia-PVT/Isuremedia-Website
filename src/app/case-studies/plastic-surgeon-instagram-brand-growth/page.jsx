'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function DrGolshaniCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Dr. Daniel Golshani, M.D., F.A.C.S.',
      leadIn: 'A brand-new Instagram account with no followers, no content system, and no defined voice.',
      hook: 'Now a repeatable content engine has grown a targeted, engaged audience from zero in a high-trust medical niche.',
      intro: <>Dr. Daniel Golshani is a board-certified plastic and reconstructive surgeon in Beverly Hills, known for facelifts and rhinoplasty, who needed prospective patients to trust him before ever booking a consult. <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>The account was starting from zero — no followers, no content system, no defined voice</span>.</>,
      meta: {
        industry: 'Plastic & Reconstructive Surgery',
        location: 'Beverly Hills, United States',
        duration: '7 Months',
        services: 'Social Media Content & Strategy',
      },
      heroImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80',
      resultHeadline: [
        { text: 'From a blank profile to ' },
        { text: '800+ engaged, targeted followers in 7 months', highlight: true },
        { text: ', built entirely from a repeatable content system.' },
      ],
      stats: [
        { val: '0 → 800+', label: 'Followers', sub: 'in 7 months' },
        { val: '1', label: 'Podcast Recording', sub: 'became weeks of content' },
        { val: '100%', label: 'Client-Approved', sub: 'every post verified pre-publish' },
        { val: '3', label: 'Content Pillars', sub: 'myths, before/after, patient Q&A' },
      ],
      quote: '[Client quote pending — add a quote from Dr. Golshani about the brand-building process]',
      quoteBy: 'Dr. Daniel Golshani, M.D., F.A.C.S.',
      quoteRole: 'Board-Certified Plastic & Reconstructive Surgeon, Beverly Hills',
      problemHeading: 'Starting a medical brand from zero, with no room for error.',
      problemIntro: 'Building presence and trust from zero in a high-stakes, high-trust niche meant there was no room for generic content, inconsistent posting, or anything less than full medical accuracy.',
      problems: [
        { title: 'Zero existing presence', body: 'A brand-new account with no followers, no content system, and no defined voice to build from.' },
        { title: 'A high-stakes, high-trust niche', body: 'Prospective patients needed to trust him before ever booking a consult — there was no margin for generic or inconsistent content.' },
        { title: 'A busy surgeon with limited time', body: 'Content needed to be produced without adding meaningful time demands to an already full surgical schedule.' },
        { title: 'Every post needs medical accuracy', body: 'Medical content demands accuracy, so nothing could go live without a proper approval step first.' },
      ],
      overviewTags: [
        { label: 'Content System', tone: 'blue' },
        { label: 'Video Editing', tone: 'blue' },
        { label: 'Brand Voice', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Dr. Golshani needed a content system that could turn limited time into a consistent posting schedule, without ever compromising on medical accuracy or brand tone.',
        'Isuremedia built a repeatable production pipeline around a single recurring recording, with a strict approval-first workflow before anything went live.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1554774853-719586f82d77?w=700&q=80',
      didHeading: 'Built as a repeatable content engine, not one-off posts.',
      didIntro: 'Every part of the workflow — sourcing, editing, approval, and posting — was designed to run consistently without demanding more of the surgeon\'s time.',
      process: [
        { label: 'Content System', title: 'One recording, weeks of content', body: 'A single 1-2 hour podcast recording was cut into short, scroll-stopping clips, turning one conversation into weeks of posting material.' },
        { label: 'Production', title: 'Clean edits & an approval-first workflow', body: 'Every clip received clean cuts, captions, and sound design to match a premium Beverly Hills brand, and was client-verified before scheduling — accuracy over speed, always.' },
        { label: 'Content Pillars', title: 'Myths, transformations & real patient questions', body: 'Content was organised around myths and facts, before-and-after transformations, and real patient questions — the educational, credible, visual mix that builds trust in medicine.' },
      ],
      impactHeading: 'What changed in 7 months.',
      impactIntro: 'A blank profile became a credible, recognizable presence in one of the most competitive markets in the country.',
      impactCards: [
        { label: 'Audience Growth', title: '0 to 800+ engaged followers', body: 'Grew from a blank profile to a targeted, engaged audience in a highly competitive Beverly Hills market.' },
        { label: 'Brand Voice', title: 'A consistent, recognizable voice', body: 'Established a defined content style and tone held consistently across every post.' },
        { label: 'Content Engine', title: 'A repeatable system from one recording', body: 'Built a content engine that consistently turns a single podcast recording into weeks of on-brand material.' },
        { label: 'Trust Library', title: 'A library of trust-building content', body: 'Created a content library that keeps building credibility with prospective patients long after each post goes live.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The production system built for Dr. Golshani opens up further content growth that needs no re-engineering to unlock.',
      nextCards: [
        { title: 'Expanding into new content formats', body: 'The same podcast-to-clips system can extend into longer-form YouTube content without rebuilding the production process.' },
        { title: 'Patient testimonial content', body: 'The trust-building foundation already in place opens the door to a testimonial content pillar as more patients are willing to share their experience.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Need a medical or professional brand built ' },
        { text: 'from zero, the right way?', highlight: true },
      ],
      ctaBody: [
        { text: 'High-trust niches cannot afford generic content or inconsistent posting. If you need ' },
        { text: 'an accuracy-first content system built around your voice', highlight: true },
        { text: ', that is exactly what we do. Talk to us today.' },
      ],
      ctaPrimaryLabel: 'Get My Free Content Strategy Call',
      ctaPrimaryHref: '/services/content-creative',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/video edting.webp',
    }} />
  );
}
