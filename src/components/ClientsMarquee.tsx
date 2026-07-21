'use client';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';

const clients = Array.from({ length: 16 }, (_, i) => ({
  name: `Client ${i + 1}`,
  src: `/company_logo/${i + 1}.webp`,
}));


export default function ClientsMarquee() {
  const row = [...clients, ...clients];

  const logoCard = (c: { name: string; src: string }, i: number) => (
    <div key={i} style={{
      flexShrink: 0,
      background: '#fff',
      borderRadius: 14,
      padding: '12px 26px',
      border: '1px solid var(--color-border)',
      boxShadow: '0 2px 10px rgba(0,0,0,.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 84,
      minWidth: 185,
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={c.src}
        alt={c.name}
        width={165}
        height={58}
        style={{ height: 54, width: 'auto', maxWidth: 165, objectFit: 'contain', display: 'block' }}
      />
    </div>
  );

  return (
    <div style={{ padding: '64px 0 56px', background: '#fff', borderTop: '1px solid var(--color-border)', overflow: 'hidden' }}>

      {/* ── Header ── */}
      <div style={{ textAlign: 'center', marginBottom: 36, padding: '0 28px' }}>
        <h2 style={{ fontFamily: J, fontSize: 'clamp(20px,2.2vw,30px)', fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.18, letterSpacing: '-0.4px', margin: 0 }}>
          Agencies &amp; Businesses We&apos;ve Scaled
        </h2>
      </div>

      {/* ── Single row — scrolls left ── */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to right,#fff,transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 120, background: 'linear-gradient(to left,#fff,transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', gap: 14, alignItems: 'center', animation: 'ism-marquee 42s linear infinite', width: 'max-content' }}>
          {row.map((c, i) => logoCard(c, i))}
        </div>
      </div>

    </div>
  );
}
