'use client';

import CaseStudyDetail from '@/components/CaseStudyDetail';

export default function SignaturePoolsCaseStudyPage() {
  return (
    <CaseStudyDetail data={{
      client: 'Signature Pools',
      leadIn: 'Facebook leads were reaching GoHighLevel. Nothing structured happened after that.',
      hook: 'Now every lead moves through a defined pipeline with automated notifications and live reporting.',
      intro: <>Signature Pools generates leads through Facebook advertising, and those leads were already flowing into GoHighLevel with the sales team following up manually. What was missing was a structured sales process, <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>automated notifications, standardized handoffs, and reporting outside the CRM</span>.</>,
      meta: {
        industry: 'Swimming Pool Construction & Installation',
        location: 'United States',
        duration: '1 Week',
        services: 'GoHighLevel Pipeline & Automation Build',
      },
      heroImage: '/casestudy/signature-pools-banner.webp',
      resultHeadline: [
        { text: 'A business-specific pipeline, automated notifications, and ' },
        { text: 'a live Google Sheets reporting sync', highlight: true },
        { text: ', built and deployed in one week.' },
      ],
      stats: [
        { val: '15', label: 'Pipeline Stages Built', sub: 'mapped to the real sales process' },
        { val: '1 Week', label: 'Total Build Time', sub: 'discovery to deployment' },
        { val: '0', label: 'Manual Handoffs Needed', sub: 'lead transfer now one card move' },
        { val: 'Real-Time', label: 'Google Sheets Sync', sub: 'via Make and GHL webhooks' },
      ],
      quote: "The pipeline finally reflects how we actually sell. Our team gets notified the moment a lead is worth calling, transfers happen with one move instead of a phone call, and management can see exactly where every lead stands without opening the CRM.",
      quoteBy: 'Signature Pools Team',
      quoteRole: 'Pool Construction & Installation',
      problemHeading: 'Leads were arriving. Nothing structured happened next.',
      problemIntro: 'Facebook leads were successfully entering GoHighLevel, but there was no business-specific pipeline, no automated notifications, no standardized way to hand a qualified lead from caller to sales rep, and no reporting system outside the CRM itself.',
      problems: [
        { title: 'No business-specific sales pipeline', body: 'Opportunities moved through GoHighLevel without stages that reflected how Signature Pools actually qualifies and closes a lead.' },
        { title: 'No automated notifications', body: 'New leads, email replies, and SMS replies all required someone to notice them manually inside the CRM before follow-up could start.' },
        { title: 'Manual handoffs between callers and reps', body: 'Transferring a qualified lead from the caller to a sales representative depended on direct communication rather than a system that tracked it.' },
        { title: 'No reporting outside GoHighLevel', body: 'Management had no centralized, non-CRM view of lead status, and no reliable way to keep that view synchronized with what was happening inside GHL.' },
      ],
      overviewTags: [
        { label: 'GoHighLevel', tone: 'amber' },
        { label: 'Make (Integromat)', tone: 'blue' },
        { label: 'Google Sheets', tone: 'blue' },
        { label: 'Webhooks', tone: 'amber' },
      ],
      overviewHeading: 'A pipeline built around how the business actually sells.',
      overviewBody: [
        'We redesigned the lead management process inside GoHighLevel around Signature Pools\' real sales workflow, then layered automated notifications on top, for new leads, nurture replies, and qualified transfers, so every stage change triggers the right alert to the right person.',
        'To simplify handoffs, callers now transfer a qualified lead simply by moving its card into the Live Transfer stage, which automatically notifies the assigned rep. A Google Sheets integration built with Make and GoHighLevel webhooks keeps a centralized reporting sheet synchronized with every pipeline update.',
      ],
      overviewImage: '/casestudy/signature-pools-inner.webp',
      didHeading: 'From pipeline redesign to a live reporting sync, in five days.',
      didIntro: 'The build moved from discovery straight through to a tested, deployed system inside a single one-week engagement.',
      process: [
        { label: 'Discovery', title: 'The pipeline mapped to the real sales process', body: 'We reviewed the existing lead flow and designed a 15-stage pipeline running from New Lead through Sold, Referred Out, and Disqualified, matching how Signature Pools actually works a lead.' },
        { label: 'Automation', title: 'Notifications and lead-transfer workflows built', body: 'New lead, hot lead, and Live Transfer notifications were built so the right team member is alerted automatically, and qualified leads move to sales with a single card move instead of a phone call.' },
        { label: 'Reporting', title: 'Google Sheets synced through Make and tested end to end', body: 'Two Make scenarios were built, one to create a new spreadsheet row on lead creation, one to update the correct stage column on every pipeline movement, then tested across creation, movement, notifications, and reporting.' },
      ],
      impactHeading: 'What the team can do now that they could not before.',
      impactIntro: 'The project turned a basic lead-collection setup into a structured lead management operation, without adding headcount.',
      impactCards: [
        { label: 'Faster Response', title: 'Hot leads get flagged and routed the moment they engage', body: 'A reply to a nurture email or SMS automatically moves the opportunity into the Hot Lead stage and notifies the assigned salesperson for immediate follow-up.' },
        { label: 'Standardized Handoffs', title: 'Lead transfers no longer depend on manual coordination', body: 'Moving a card into Live Transfer/Warm Transfer updates status, notifies the sales rep, and gives management visibility, automatically, every time.' },
        { label: 'Centralized Reporting', title: 'Management can track leads without opening the CRM', body: 'The Google Sheets integration keeps a live, synchronized view of every lead and its pipeline stage, reducing manual tracking and administrative work.' },
        { label: 'Full Visibility', title: 'Every stage of the customer journey is tracked consistently', body: 'From first text to Sold or Disqualified, all 15 stages serve as both a tracking mechanism and an automation trigger, so nothing depends on someone remembering to update a record.' },
      ],
      nextHeading: 'Built to extend without rebuilding the foundation.',
      nextIntro: 'The pipeline and integration architecture were built to support more than day-one reporting, with room to grow as Signature Pools\' needs do.',
      nextCards: [
        { title: 'Deeper performance reporting', body: 'The same Make and webhook architecture can extend into stage-conversion and rep-performance reporting on top of the existing Google Sheets sync, without changing how the pipeline itself works.' },
        { title: 'Additional automation triggers', body: 'The notification framework built for new leads and hot leads is reusable for future triggers, review requests, appointment reminders, or seasonal campaigns, on top of the same 15-stage pipeline.' },
      ],
      ctaEyebrow: 'Your Growth Starts Here',
      ctaHeading: [
        { text: 'Leads landing in your CRM with ' },
        { text: 'no process behind them?', highlight: true },
      ],
      ctaBody: [
        { text: 'A CRM full of unstructured leads is a reporting and follow-up problem waiting to happen. If your pipeline should be doing more of the work automatically, ' },
        { text: 'that is exactly what we fix', highlight: true },
        { text: '. Talk to us today about what it looks like for your business.' },
      ],
      ctaPrimaryLabel: 'Get My Free Pipeline Audit',
      ctaPrimaryHref: '/services/white-label',
      ctaSecondaryLabel: 'Talk to Our Team',
      ctaSecondaryHref: '/contact',
      ctaImage: '/result_footer/white label.webp',
    }} />
  );
}
