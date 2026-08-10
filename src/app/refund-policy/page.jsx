'use client';

import LegalPage from '@/components/LegalPage';

const SECTIONS = [
  {
    title: 'Eligibility for Refunds',
    blocks: [
      { type: 'h4', text: '1.1. Refund Requests Within 7 Days' },
      { type: 'p', text: 'If you are not satisfied with our services for any reason, you may request a refund within 7 days from the date of your initial subscription or purchase.' },
      { type: 'p', text: 'Refunds requested within this time frame will be processed promptly, subject to the deductions outlined in Clause 4.' },
      { type: 'h4', text: '1.2. Refunds Beyond 7 Days' },
      { type: 'p', text: 'Refund requests made after 7 days from the date of subscription or purchase will not be entertained.' },
      { type: 'p', text: 'However, if you purchased a package of services (e.g., 40 hours) and have consumed only a portion of it (e.g., 10 hours), you will not be eligible for a refund for unused hours. Instead, you may retain the remaining balance of hours for future use in other services offered by Isuremedia.' },
      { type: 'p', text: 'Retained hours must be utilized within the validity period specified at the time of purchase (if applicable).' },
      { type: 'h4', text: '1.3. Refund Requests and Client Non-Responsiveness' },
      { type: 'p', text: 'If a refund request has been initiated by the client, but the client fails to respond to our communications within 7 days from the date of our first attempt to contact them, we reserve the right to consider the refund request void and close the case.' },
      { type: 'p', text: 'No refunds will be processed under such circumstances unless the client provides a valid reason for their non-responsiveness, which we may evaluate at our sole discretion.' },
    ],
  },
  {
    title: 'Non-Refundable Situations',
    blocks: [
      { type: 'p', text: 'Refunds will not be provided under the following circumstances:' },
      { type: 'ul', items: [
        'Services have been fully utilized or completed.',
        'Dissatisfaction resulting from the subscriber’s own technical issues, such as connectivity problems, unsupported devices, or software incompatibilities.',
        'Breach of terms of service or misuse of our services.',
        'Non-responsiveness or unreasonable delayed response.',
      ] },
    ],
  },
  {
    title: 'Refund Process',
    blocks: [
      { type: 'p', text: 'To request a refund, please contact our Customer Support team at support@isuremedia.com with your purchase details, reason for the refund, and any relevant documentation.' },
      { type: 'p', text: 'Once your request is reviewed and approved, refunds will be processed within 7 business days of approval, through our payment partner.' },
    ],
  },
  {
    title: 'Deduction of Payment Gateway/Partner Fees',
    blocks: [
      { type: 'p', text: 'Refunds will be processed after deducting any applicable fees charged by payment gateways or third-party payment partners. These fees are non-refundable and are deducted directly from the amount you initially paid.' },
    ],
  },
  {
    title: 'Exceptions and Adjustments',
    blocks: [
      { type: 'p', text: 'We may, at our sole discretion, offer a full or partial refund in exceptional circumstances. This is evaluated on a case-by-case basis. Please reach out to us to discuss your concerns if you believe an exception applies.' },
    ],
  },
  {
    title: 'Contact Information',
    blocks: [
      { type: 'p', text: 'For questions or assistance regarding our Refund Policy, please contact us:' },
      { type: 'p', text: 'Email: support@isuremedia.com' },
      { type: 'p', text: 'Note: By subscribing to or purchasing our services, you acknowledge that you have read, understood, and agreed to this Refund Policy. This policy is subject to change at our discretion, and any updates will be reflected on this page.' },
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Refund Policy"
      lastUpdated="Last updated: August 2026"
      intro="At Isuremedia, customer satisfaction is our top priority. We aim to deliver exceptional services that meet your expectations. However, we understand that there may be situations where you might seek a refund or clarification regarding our policies. Please read this Refund Policy carefully to understand your rights and obligations."
      sections={SECTIONS}
    />
  );
}
