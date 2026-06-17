'use client';

/* Clients marquee — Digital Blue bg, white logo-image cards
   Images live in /public/clients/*.svg (swap for real PNGs when ready) */
const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';

const clients = Array.from({ length: 16 }, (_, i) => ({
  name: `Client ${i + 1}`,
  src: `/company_logo/${i + 1}.webp`,
}));

export default function ClientsMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <div style={{
      padding: '40px 0 36px',
      background: 'var(--color-bg-soft)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
      overflow: 'hidden',
    }}>
      {/* Label */}
      <p style={{
        fontFamily: J,
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--color-text-muted)',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 24,
      }}>
        Agencies &amp; Businesses We&apos;ve Scaled
      </p>

      {/* Scrolling track */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right, var(--color-bg-soft), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left, var(--color-bg-soft), transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          animation: 'ism-marquee 40s linear infinite',
          width: 'max-content',
        }}>
          {doubled.map((c, i) => (
            <div key={i} style={{
              flexShrink: 0,
              background: '#fff',
              borderRadius: 12,
              padding: '10px 20px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 1px 4px rgba(0,0,0,.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              minWidth: 150,
            }}>
              {/* swap src="/clients/name.png" when real logo is ready */}
              <img
                src={c.src}
                alt={c.name}
                width={150}
                height={40}
                style={{ height: 40, width: 150, objectFit: 'contain', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
