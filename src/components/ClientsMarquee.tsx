'use client';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const clients = [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(n => ({
  name: `Client ${n}`,
  src: `/company_logo/${n}.webp`,
}));

export default function ClientsMarquee() {
  const row = [...clients, ...clients];

  return (
    <div style={{ background: '#F2F3F5', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'stretch', minHeight: 96 }}>

        {/* LEFT — label */}
        <div style={{ flexShrink: 0, width: 260, display: 'flex', alignItems: 'center', padding: '20px 40px', borderRight: '1px solid var(--color-border)', background: '#F2F3F5' }}>
          <div>
            <div style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.4, marginBottom: 4 }}>Trusted by</div>
            <div style={{ fontFamily: J, fontSize: 20, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.25 }}>
              100+ Agencies<br />&amp; Businesses
            </div>
          </div>
        </div>

        {/* RIGHT — marquee */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#F2F3F5,transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#F2F3F5,transparent)', zIndex: 2, pointerEvents: 'none' }} />

          <div style={{ display: 'flex', gap: 40, alignItems: 'center', animation: 'ism-marquee 40s linear infinite', width: 'max-content', padding: '0 20px' }}>
            {row.map((c, i) => (
              <div key={i} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.src}
                  alt={c.name}
                  style={{ height: 52, width: 'auto', maxWidth: 160, objectFit: 'contain', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
