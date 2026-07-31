'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function MeridianCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Meridian Wealth Partners',
      leadIn: 'A well-written brochure site was generating almost no qualified consultations.',
      hook: 'Now it runs as a real lead-gen funnel, not just a digital business card.',
      intro: 'Meridian Wealth Partners is a boutique financial advisory firm. Their website read well and looked professional, but visitors had no clear next step and almost none of them ever booked a call.',
      meta: {
        industry: 'Financial Advisory',
        location: 'United States',
        duration: '90 Days',
        services: 'Website Redesign & Lead Gen',
      },
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      resultHeadline: [
        { text: 'A single-purpose lead funnel ' },
        { text: 'nearly tripled qualified consultation requests', highlight: true },
        { text: ' in the first quarter, on the same traffic.' },
      ],
      stats: [
        { val: '+186%', label: 'Consultation Requests', sub: 'in 90 days' },
        { val: '-44%', label: 'Cost Per Lead', sub: 'same ad spend' },
        { val: '68%', label: 'Form Completion Rate', sub: 'up from 22%' },
        { val: '3', label: 'Steps to Book', sub: 'down from 6' },
      ],
      quote: 'We finally have a website that brings in the right kind of client instead of just looking nice.',
      quoteBy: 'Meridian Wealth Partners',
      quoteRole: 'Managing Partner, United States',
      problemHeading: 'A beautiful site with no path to a conversation.',
      problemIntro: 'Meridian\'s site described their services thoroughly, but visitors had no obvious next step, and the few who did try to reach out ran into unnecessary friction.',
      problems: [
        { title: 'No single, clear call to action', body: 'Every page linked somewhere slightly different — a contact page, a phone number, a generic email — with no unified path toward booking a call.' },
        { title: 'The consultation form was too long', body: 'A ten-field form scared off visitors before they ever got to the submit button, and most who started it never finished.' },
        { title: 'No qualification before the call', body: 'Every enquiry landed directly on a partner\'s calendar, including many that were not a fit for the firm\'s minimum account size.' },
        { title: 'Mobile visitors converted at half the rate', body: 'The desktop-first layout made the booking flow noticeably harder to complete on a phone, where most first visits happened.' },
      ],
      overviewTags: [
        { label: 'Website Redesign', tone: 'blue' },
        { label: 'Lead Qualification', tone: 'blue' },
        { label: 'CRO', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'Meridian needed one clear funnel — a single offer, a short qualifying form, and an automated booking flow — replacing a site that was trying to be everything at once.',
        'ISureMedia redesigned and relaunched the funnel over a 90-day engagement.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=700&q=80',
      didHeading: 'Rebuilt around one offer and one path to a call.',
      didIntro: 'Every page on the site now leads toward the same short, qualifying path instead of several competing calls to action.',
      process: [
        { label: 'Offer', title: 'One clear consultation offer', body: 'Every page was rebuilt around a single, specific offer — a free portfolio review — replacing the scattered mix of generic contact options.' },
        { label: 'Qualification', title: 'A short form that pre-qualifies', body: 'The ten-field form was cut to four questions covering the details that actually matter, with unqualified leads routed to a nurture sequence instead of a partner\'s calendar.' },
        { label: 'Booking', title: 'Instant self-service scheduling', body: 'Qualified leads land directly on a live calendar to book a call themselves, removing the back-and-forth email that used to happen before every meeting.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'The same visibility and the same ad spend now produce meaningfully more of the right conversations.',
      impactCards: [
        { label: 'Nearly Triple the Requests', title: 'Consultations up 186%', body: 'The same traffic now converts at nearly three times the previous rate.' },
        { label: 'Cheaper Per Lead', title: 'Cost per lead down 44%', body: 'The same monthly ad spend now produces significantly more consultation requests.' },
        { label: 'Fewer Wasted Meetings', title: 'Only qualified leads reach partners', body: 'Partners now only see enquiries that already match the firm\'s minimum account size.' },
        { label: 'Mobile Finally Converts', title: 'Booking flow rebuilt for phones', body: 'The mobile experience now converts in line with desktop instead of trailing well behind it.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The funnel built for Meridian is ready to extend further without rebuilding the foundation.',
      nextCards: [
        { title: 'Automated nurture for unqualified leads', body: 'Leads that do not meet the minimum account size can be dropped into a long-term nurture sequence instead of being discarded.' },
        { title: 'Referral partner landing pages', body: 'The same funnel structure is ready to be replicated for dedicated referral-partner landing pages without extra engineering work.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Is your website ' },
        { text: 'a brochure instead of a funnel?', highlight: true },
      ],
      ctaBody: [
        { text: 'A site that looks good but has no clear next step quietly turns visitors away every day, and ' },
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
