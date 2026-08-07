'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing or using the services provided by Isuremedia Pvt. Ltd. ("ISM", "we", "us", or "our"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services. These terms apply to all clients, partners, and visitors engaging with ISM.',
  },
  {
    title: 'Services',
    body: 'ISM provides digital marketing services including but not limited to search engine optimisation, paid advertising management, website design and development, content creation, marketing automation, and white-label fulfillment. The scope, deliverables, timelines, and pricing for each engagement are defined in a separate Statement of Work or Service Agreement signed by both parties. ISM reserves the right to modify, suspend, or discontinue any service with reasonable notice.',
  },
  {
    title: 'Payment & Billing',
    body: 'All fees are as agreed in the relevant service agreement. Invoices are issued monthly or as otherwise agreed and are due within 14 days of the invoice date unless alternative terms have been agreed in writing. ISM reserves the right to suspend services for accounts that are more than 14 days overdue. Late payments may be subject to interest at a rate of 2% per month on the outstanding balance. All fees are exclusive of applicable taxes.',
  },
  {
    title: 'Intellectual Property',
    body: 'Upon receipt of full payment, all deliverables created specifically for the client — including website designs, copy, and creative assets — become the property of the client. Any pre-existing intellectual property, tools, frameworks, or methodologies used by ISM in delivering services remain the exclusive property of ISM. The client grants ISM a non-exclusive licence to use their brand assets solely for the purpose of delivering the agreed services.',
  },
  {
    title: 'Confidentiality',
    body: 'Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement, including but not limited to business strategies, client data, pricing, and campaign performance metrics. This obligation of confidentiality survives the termination of the service agreement. ISM will not disclose client information to third parties without prior written consent, except as required by law or as necessary to deliver the agreed services.',
  },
  {
    title: 'Limitation of Liability',
    body: 'ISM provides all services on a best-efforts basis. While we work to deliver results, digital marketing outcomes are influenced by many external factors including algorithm changes, market conditions, and competition. ISM does not guarantee specific rankings, traffic volumes, or revenue outcomes. To the maximum extent permitted by law, ISM\'s total liability for any claim arising from its services shall not exceed the total fees paid by the client in the three months preceding the claim.',
  },
  {
    title: 'Termination',
    body: 'Either party may terminate a service agreement with 30 days\' written notice. ISM may terminate immediately if the client breaches these terms, fails to pay, or engages in unlawful conduct. Upon termination, the client remains liable for all fees incurred up to the effective termination date. Any work in progress at the time of termination will be delivered upon receipt of payment for completed portions of the project.',
  },
  {
    title: 'Governing Law',
    body: 'These Terms of Service shall be governed by and construed in accordance with the laws of Uttarakhand, India. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Uttarakhand, India. If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.',
  },
  {
    title: 'Contact Us',
    body: 'If you have any questions about these Terms of Service or wish to discuss a specific arrangement, please contact us at: hello@isuremedia.com. Isuremedia Pvt. Ltd., India. We will respond to all enquiries within 2 business days.',
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '80px 0 64px', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Legal</span>
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(32px,4.5vw,56px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.8px', lineHeight: 1.1, marginBottom: 20 }}>
              Terms of Service
            </h1>
            <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              Last updated: January 2026 &nbsp;&bull;&nbsp; Isuremedia Pvt. Ltd.
            </p>
          </div>
        </section>

        {/* ── CONTENT ── */}
        <section style={{ padding: '80px 0 120px', background: '#fff' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 40px' }}>
            <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, marginBottom: 56 }}>
              Please read these Terms of Service carefully before using the services provided by Isuremedia Pvt. Ltd. These terms govern your use of our website and professional digital marketing services. By proceeding with any engagement, you confirm your acceptance of these terms.
            </p>

            {SECTIONS.map((s, i) => (
              <div key={i} style={{ marginBottom: 56, paddingBottom: 56, borderBottom: i < SECTIONS.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                <h2 style={{ fontFamily: J, fontSize: 'clamp(20px,2.2vw,28px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 20, letterSpacing: '-0.3px' }}>
                  {i + 1}. {s.title}
                </h2>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: 0 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
