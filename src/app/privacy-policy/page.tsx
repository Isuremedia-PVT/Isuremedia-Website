'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: 'We collect information you voluntarily provide when filling out forms on our website, including your name, email address, phone number, business name, and any details about your marketing requirements. We also automatically collect certain technical data when you visit our site, such as your IP address, browser type, device type, pages viewed, and the referring URL. This information is collected via cookies and similar tracking technologies.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use the information we collect to respond to your enquiries, provide our digital marketing services, send relevant communications about your project or account, improve our website and service offerings, and analyse site usage to enhance user experience. We do not sell, rent, or trade your personal data to third parties. We may use your contact details to send occasional marketing updates if you have opted in to receive them; you may opt out at any time.',
  },
  {
    title: 'Cookies & Tracking',
    body: 'Our website uses cookies — small text files stored on your device — to enhance your browsing experience, remember your preferences, and gather analytics data. We use first-party cookies for essential site functionality and third-party cookies (such as Google Analytics) to understand how visitors interact with our site. You can control cookie settings through your browser preferences. Disabling certain cookies may affect your ability to use some features of our website.',
  },
  {
    title: 'Third-Party Services',
    body: 'We use trusted third-party service providers to support our operations, including Google Analytics for website analytics, payment processors for billing, email delivery platforms, and cloud hosting providers. These third parties access your data only to the extent necessary to perform their specific functions and are contractually obligated to protect your information. We do not share your data with third parties for their own marketing purposes.',
  },
  {
    title: 'Data Retention',
    body: 'We retain your personal data for as long as necessary to fulfil the purposes described in this policy, to comply with our legal obligations, resolve disputes, and enforce our agreements. Client project data is typically retained for the duration of the engagement plus seven years for accounting and legal purposes. You may request deletion of your personal data at any time, subject to any legal retention requirements that may apply.',
  },
  {
    title: 'Your Rights',
    body: 'Depending on your jurisdiction, you may have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to or restrict certain processing activities, and request portability of your data in a structured, machine-readable format. To exercise any of these rights, please contact us using the details below. We will respond to your request within 30 days.',
  },
  {
    title: 'Contact Us',
    body: 'If you have any questions, concerns, or requests relating to this Privacy Policy or our data practices, please contact us at: hello@isuremedia.com. Our registered company is Isuremedia Pvt. Ltd. We are committed to handling your data responsibly and will do our best to resolve any concerns promptly.',
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              This Privacy Policy explains how Isuremedia Pvt. Ltd. (&ldquo;ISM&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and protects your personal information when you visit our website at isuremedia.com or engage with our services. By using our website, you agree to the terms of this Privacy Policy.
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
