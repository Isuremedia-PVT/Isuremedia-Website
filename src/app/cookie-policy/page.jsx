'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const SECTIONS = [
  {
    title: 'What Are Cookies',
    body: 'Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide reporting information to website owners. Cookies may be set by the website you are visiting ("first-party cookies") or by third-party services used by that website ("third-party cookies").',
  },
  {
    title: 'How We Use Cookies',
    body: 'Isuremedia Pvt. Ltd. uses cookies on isuremedia.com to make our website function correctly, understand how visitors use our site, remember your preferences across sessions, and improve the overall experience. We also use cookies to measure the effectiveness of our marketing and to provide relevant content to visitors. We do not use cookies to collect personally identifiable information without your consent.',
  },
  {
    title: 'Types of Cookies We Use',
    body: 'We use the following types of cookies: (1) Essential Cookies — these are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting your privacy preferences or filling in forms. (2) Analytics Cookies — these allow us to count visits and traffic sources so we can measure and improve the performance of our site. We use Google Analytics for this purpose. (3) Preference Cookies — these enable the website to remember choices you make, such as your language preference or region, to provide a more personalised experience. (4) Marketing Cookies — these may be set through our site by advertising partners to build a profile of your interests and show relevant adverts on other sites.',
  },
  {
    title: 'Third-Party Cookies',
    body: 'Some cookies on our website are placed by third-party services. These include Google Analytics, which helps us understand traffic patterns and user behaviour; Google Ads, for tracking conversions from our advertising campaigns; Meta Pixel, for measuring the effectiveness of Facebook and Instagram advertising; and other analytics or chat tools we may use from time to time. These third parties have their own privacy policies and we encourage you to review them.',
  },
  {
    title: 'Managing Cookies',
    body: 'You can control and manage cookies in several ways. Most web browsers allow you to accept, decline, or delete cookies through your browser settings. Please note that removing or blocking some cookies may impact your experience on our website and some features may not function properly. You can also opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout. For opt-out options relating to advertising cookies, you can visit Your Online Choices at youronlinechoices.com.',
  },
  {
    title: 'Contact Us',
    body: 'If you have any questions about our use of cookies or this Cookie Policy, please contact us at: hello@isuremedia.com. Isuremedia Pvt. Ltd., India. We update this policy periodically to reflect changes in our cookie usage or applicable regulations. The date at the top of this page indicates when this policy was last revised.',
  },
];

export default function CookiePolicyPage() {
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
              Cookie Policy
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
              This Cookie Policy explains how Isuremedia Pvt. Ltd. uses cookies and similar tracking technologies on our website. By continuing to browse isuremedia.com, you consent to our use of cookies as described in this policy.
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
