'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function AirtopiaCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Airtopia',
      leadIn: 'Every ROLLER venue was doing this by hand.',
      hook: 'Now none of them have to.',
      intro: 'Airtopia operates indoor entertainment venues across the US, including trampoline parks, family play centres, and similar destinations. They run ROLLER for venue operations and GoHighLevel for customer marketing. The two had never been connected.',
      meta: {
        industry: 'Family Entertainment Venues',
        location: 'United States',
        duration: '3 Weeks · 130+ hrs',
        services: 'Web Development & Integration',
      },
      heroImage: 'https://images.unsplash.com/photo-1751235640841-d8d1035a80f0?w=1200&q=80',
      resultHeadline: [
        { text: 'Every booking, membership, and waiver ' },
        { text: 'now syncs to GoHighLevel the moment it happens in ROLLER', highlight: true },
        { text: '. No staff involvement. No delay.' },
      ],
      stats: [
        { val: '80-90%', label: 'Reduction in Manual Data Work', sub: 'Estimated post-deployment' },
        { val: '130+', label: 'Engineering Hours Delivered', sub: 'Completed in 3 weeks' },
        { val: '60-80', label: 'Venue Locations Supported', sub: 'Multi-tenant from day one' },
        { val: 'Zero', label: 'Code Deploys Per New Venue', sub: 'Admin panel config only' },
      ],
      quote: "Isuremedia built exactly what we needed and did it properly. The architecture is solid, the admin panel is something we can actually use, and it solves a problem that every ROLLER venue has been working around manually for years.",
      quoteBy: 'Airtopia Team',
      quoteRole: 'Venue Technology, United States',
      problemHeading: 'Two platforms. Same venues. No connection.',
      problemIntro: 'ROLLER and GoHighLevel serve the same venue operators but have no native integration. Every week, staff were exporting customer records, cleaning them up, and importing them by hand. Real-time automation was out of reach entirely. A membership purchase could not trigger a welcome sequence the same day it happened.',
      problems: [
        { title: 'Customer identity arrives incomplete', body: 'ROLLER sends email in a separate waiver event, not the initial customer record. Without correlation logic, building a complete CRM contact from webhooks alone was not possible.' },
        { title: 'Bookings had no classification', body: 'A single booking event could be a membership, a party, or general admission. GoHighLevel had no way to distinguish them and could not apply the right automation per type.' },
        { title: 'Children created broken contacts', body: 'Minors attending venues receive ROLLER customer IDs but have no email. Without detection logic, every child record failed silently or created a stub contact in GoHighLevel.' },
        { title: 'No path to multi-venue scale', body: 'Even a working one-off fix would require re-engineering per location. There was no reusable, configurable solution that could onboard venues without developer involvement each time.' },
      ],
      overviewTags: [
        { label: 'Web Development', tone: 'blue' },
        { label: 'API Integration', tone: 'blue' },
        { label: 'GoHighLevel', tone: 'amber' },
        { label: 'ROLLER', tone: 'amber' },
      ],
      overviewHeading: 'What was needed.',
      overviewBody: [
        'The ask was not a one-off script. It was a production-grade, multi-tenant platform that any venue could connect to GoHighLevel through an admin panel, with no engineering work required per location.',
        'Isuremedia scoped, architected, and delivered the complete platform in three weeks.',
      ],
      overviewImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=700&q=80',
      didHeading: 'Built to solve the problem completely, not partially.',
      didIntro: 'Every ROLLER webhook is intercepted, validated, enriched where needed, and synced to GoHighLevel as a complete contact profile.',
      process: [
        { label: 'Architecture', title: 'Real-time sync with no waiting', body: 'The webhook returns immediately to ROLLER. A background processor handles GoHighLevel asynchronously. Field mappings live in a database and update via the admin panel instantly, no deployment needed.' },
        { label: 'Enrichment', title: 'Contacts that complete themselves', body: 'Records without an email are parked and completed automatically when the waiver arrives. Children are identified from waiver data and linked to the adult record rather than creating broken standalone contacts.' },
        { label: 'Classification', title: 'Every booking type handled correctly', body: 'Memberships, parties, and admissions classified using a configurable product catalog. GHL receives the right tags, custom fields, and booking note per type. New venues go live via the admin panel with no engineering work.' },
      ],
      impactHeading: 'What is now possible that was not before.',
      impactIntro: 'All 14 core features complete and in final pre-production validation. These are the operational outcomes from the moment it goes live.',
      impactCards: [
        { label: 'Same-Day Automation', title: 'Membership welcome sequences fire the same day someone joins', body: 'New members get the right first message within minutes of purchase, not the next day after a manual import.' },
        { label: 'Zero Staff Action', title: 'Party follow-ups start the moment a booking is confirmed', body: 'GoHighLevel starts the sequence automatically the moment ROLLER confirms the booking. No one has to trigger it.' },
        { label: 'Hours Saved Weekly', title: 'Several hours returned to staff at every connected location', body: 'Manual exports, spreadsheet cleanup, and GoHighLevel imports are eliminated entirely. Every week, across every venue.' },
        { label: 'No Engineer Needed', title: 'New venues go live in a day with no developer involvement', body: 'OAuth connection, webhook registration, field mapping in the admin panel. That is the entire onboarding process.' },
      ],
      nextHeading: 'Already planned. Already architected.',
      nextIntro: 'The foundation built for Airtopia opens two significant opportunities that require no re-engineering to pursue.',
      nextCards: [
        { title: 'Re-engagement on real visit data', body: 'Attendance tracking in the next phase will let venues identify customers by visit frequency and trigger targeted re-engagement sequences automatically. A lapsed customer who visited six times and stopped is worth chasing. The data to do it is already in ROLLER.' },
        { title: 'GoHighLevel Marketplace listing', body: 'The OAuth architecture is already in place. A Marketplace listing would allow any ROLLER venue to self-serve onboarding at scale without Isuremedia involvement per connection. The platform was built for this from day one.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Running multiple platforms that ' },
        { text: "don't talk to each other?", highlight: true },
      ],
      ctaBody: [
        { text: 'Disconnected systems mean manual work, delayed follow-up, and lost revenue. If your tools should be talking to each other but are not, ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today and we will show you what is possible.' },
      ],
      ctaPrimaryLabel: 'Get My Free Integration Audit',
      ctaPrimaryHref: '/services/websites-funnels',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/Api.webp',
    }} />
  );
}
