'use client';

import { useState } from 'react';

/* FAQ — Soft White background */
const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const faqs = [
  {
    q: 'How is Isuremedia different from other digital marketing agencies?',
    a: 'Unlike traditional agencies that specialise in one or two areas, Isuremedia is a full service agency. We handle every aspect of your digital marketing under one roof — SEO, PPC, web, content, CRM, and automation — with one accountable team that owns your results. No fragmented vendors, no finger-pointing.',
  },
  {
    q: 'Do you offer white label services for agencies?',
    a: 'Yes — we are a white label partner for 50+ agencies worldwide. We execute campaigns under your brand, maintain strict confidentiality with your clients, and deliver agency-quality results with branded reports and dashboards.',
  },
  {
    q: 'What is the minimum contract term?',
    a: 'We typically recommend a 6 month engagement to see meaningful, compounding results. However, flexible 3 month starter plans are available. PPC campaigns can show measurable results within the first 30 days.',
  },
  {
    q: 'How quickly can you get started?',
    a: 'After our discovery call and strategy alignment, we onboard new clients within 5–7 business days. PPC campaigns can go live within 48–72 hours.',
  },
  {
    q: 'Do you guarantee results?',
    a: 'We set clear, data driven KPIs at the start of every engagement and report on them transparently every month. We\'ve consistently delivered an average traffic growth of 225% and ROI of 340%+ across our clients. If we\'re not hitting targets, we talk — no hiding.',
  },
  {
    q: 'What services are included in white label fulfillment?',
    a: 'Our white label programme covers SEO, PPC, web design, content creation, social media management, and marketing automation — all delivered under your brand with client ready reports.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="faq-section" style={{ padding: '64px 0', background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 50%, #eff6ff 100%)' }}>
      <div className="ism-container">

        <div style={{ textAlign: 'center', maxWidth: 580, margin: '0 auto 52px' }}>
          <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: 700, color: 'var(--color-text-heading)', lineHeight: 1.20, marginBottom: 14 }}>
            Answers Before You Decide
          </h2>
          <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.75 }}>
            Everything you need to know <span style={{ background: 'rgba(255,176,0,.35)', borderRadius: 4, padding: '1px 6px', fontWeight: 700 }}>before working with us</span>.
          </p>
        </div>

        <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} style={{ background: '#fff', border: `1px solid ${isOpen ? 'var(--ism-blue-100)' : 'var(--color-border)'}`, borderRadius: 14, overflow: 'hidden', boxShadow: isOpen ? 'var(--sh-sm)' : '' }}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, cursor: 'pointer', background: 'transparent', border: 'none', textAlign: 'left' }}
                >
                  <span style={{ fontFamily: J, fontSize: 15, fontWeight: 700, color: isOpen ? 'var(--color-primary)' : 'var(--color-text-heading)', lineHeight: 1.45, flex: 1 }}>{faq.q}</span>
                  <span style={{ width: 28, height: 28, borderRadius: '50%', background: isOpen ? 'var(--color-primary)' : 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 16, color: isOpen ? '#fff' : 'var(--color-primary)', fontWeight: 700, transition: 'all .2s', transform: isOpen ? 'rotate(45deg)' : '' }}>+</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 22px' }}>
                    <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.78 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', marginBottom: 14 }}>Still have questions?</p>
          <a href="#cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: '#fff', background: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'all .18s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary-hover)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--color-primary)'; }}
          >
            Talk to Us <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-section { padding: 44px 0 !important; }
        }
        @media (max-width: 480px) {
          .faq-section { padding: 32px 0 !important; }
          .faq-section button { padding: 16px 18px !important; }
        }
      `}</style>
    </section>
  );
}
