'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

function Block({ b }) {
  if (b.type === 'p') {
    return <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: '0 0 18px', overflowWrap: 'anywhere' }}>{b.text}</p>;
  }
  if (b.type === 'h3') {
    return <h3 style={{ fontFamily: J, fontSize: 19, fontWeight: 800, color: 'var(--color-navy)', margin: '30px 0 14px', overflowWrap: 'anywhere' }}>{b.text}</h3>;
  }
  if (b.type === 'h4') {
    return <h4 style={{ fontFamily: J, fontSize: 16, fontWeight: 700, color: 'var(--color-navy)', margin: '22px 0 10px', overflowWrap: 'anywhere' }}>{b.text}</h4>;
  }
  if (b.type === 'ul') {
    return (
      <ul style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: '0 0 18px', paddingLeft: 22, overflowWrap: 'anywhere' }}>
        {b.items.map((it, i) => <li key={i} style={{ marginBottom: 8 }}>{it}</li>)}
      </ul>
    );
  }
  if (b.type === 'ol') {
    return (
      <ol style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: '0 0 18px', paddingLeft: 22, overflowWrap: 'anywhere' }}>
        {b.items.map((it, i) => <li key={i} style={{ marginBottom: 8 }}>{it}</li>)}
      </ol>
    );
  }
  return null;
}

export default function LegalPage({
  eyebrow = 'Legal',
  title,
  lastUpdated,
  intro,
  sections,
}) {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '80px 0 64px', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
              <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>{eyebrow}</span>
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(32px,4.5vw,56px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.8px', lineHeight: 1.1, marginBottom: 20 }}>
              {title}
            </h1>
            <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
              {lastUpdated} &nbsp;&bull;&nbsp; Isuremedia Pvt. Ltd.
            </p>
          </div>
        </section>

        {/* ── CONTENT ── */}
        <section style={{ padding: '80px 0 120px', background: '#fff' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 40px', overflowWrap: 'anywhere' }}>
            {intro && (
              <div style={{ marginBottom: 56 }}>
                {typeof intro === 'string'
                  ? <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.82, margin: 0 }}>{intro}</p>
                  : intro}
              </div>
            )}

            {sections.map((s, i) => (
              <div key={i} style={{ marginBottom: 56, paddingBottom: 56, borderBottom: i < sections.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                <h2 style={{ fontFamily: J, fontSize: 'clamp(20px,2.2vw,28px)', fontWeight: 800, color: 'var(--color-navy)', marginBottom: 20, letterSpacing: '-0.3px' }}>
                  {i + 1}. {s.title}
                </h2>
                {s.blocks.map((b, j) => <Block key={j} b={b} />)}
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
