'use client';

import LegalPage from '@/components/LegalPage';

const SECTIONS = [
  {
    title: 'Data Controller',
    blocks: [
      { type: 'p', text: 'Isuremedia operates as a data controller regarding the personal data of EEA residents. As a data controller, we determine the purposes and means of processing your personal data.' },
    ],
  },
  {
    title: 'Personal Data We Collect',
    blocks: [
      { type: 'p', text: 'We may collect and process the following personal data:' },
      { type: 'ul', items: [
        'Subscription for Updates: name, email.',
        'Billing & Delivery Address: full name, email address, country code, country/region, postal code, phone number, company name, street address, town/city, state, order notes.',
        'Website Usage Data: IP addresses, location, operating system details, browsing details, device, and connectivity details.',
        'Communication and Correspondence Data: Messages posted on message boards, personal correspondence, and correspondence about activities or postings on the platform.',
      ] },
    ],
  },
  {
    title: 'Legal Basis for Processing',
    blocks: [
      { type: 'p', text: 'We process your personal data based on one or more of the following legal grounds:' },
      { type: 'ul', items: [
        'Consent (Article 6(1)(a) GDPR)',
        'Performance of a contract (Article 6(1)(b) GDPR)',
        'Compliance with a legal obligation (Article 6(1)(c) GDPR)',
        'Protection of vital interests (Article 6(1)(d) GDPR)',
        'Performance of a task carried out in the public interest (Article 6(1)(e) GDPR)',
        'Legitimate interests (Article 6(1)(f) GDPR)',
      ] },
    ],
  },
  {
    title: 'Use of Personal Data',
    blocks: [
      { type: 'p', text: 'We use your personal data to:' },
      { type: 'ul', items: [
        'Ensure access to our website and services.',
        'Respond to your queries, support, and contact requests.',
        'Manage subscriptions to our promotional communications.',
        'Administer and fulfil contractual and regulatory obligations.',
        'Promote our brand, products, initiatives, and values through marketing communications.',
      ] },
    ],
  },
  {
    title: 'Data Transfers Outside the EEA',
    blocks: [
      { type: 'p', text: 'We may transfer your personal data to countries outside the EEA, including India, to perform the activities mentioned above. When transferring data, we ensure appropriate safeguards such as:' },
      { type: 'ul', items: [
        'Transfers to countries with an adequate level of data protection as decided by the European Commission.',
        'Use of contractual clauses approved by the European Commission.',
        'Transfers to organizations with binding corporate rules approved by EEA data protection authorities.',
        'Transfers necessary for contract performance or your requests.',
        'Transfers with your explicit consent.',
      ] },
    ],
  },
  {
    title: 'Your GDPR Rights',
    blocks: [
      { type: 'p', text: 'Under the GDPR, you have the right to:' },
      { type: 'ul', items: [
        'Request access to your personal data.',
        'Request correction of inaccurate or incomplete personal data.',
        'Request erasure of your personal data.',
        'Object to processing based on legitimate interests or direct marketing.',
        'Request restriction of processing.',
        'Data portability.',
        'Not be subject to automated decision-making with legal or significant effects.',
      ] },
    ],
  },
  {
    title: 'Contact Information',
    blocks: [
      { type: 'p', text: 'For any concerns, queries, or to exercise your rights, please contact our Data Protection Officer (DPO):' },
      { type: 'ul', items: ['Name:', 'Address:', 'Mail ID:', 'Telephone number:'] },
    ],
  },
];

export default function GDPRPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="GDPR Privacy Notice"
      lastUpdated="Last updated: August 2026"
      intro="This GDPR Privacy Notice explains how ISUREMEDIA PRIVATE LIMITED (collectively “Isuremedia,” “we,” “us,” “our”) collects, uses, and processes personal data of individuals residing in the European Economic Area (EEA) in compliance with the General Data Protection Regulation (GDPR)."
      sections={SECTIONS}
    />
  );
}
