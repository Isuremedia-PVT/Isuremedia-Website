const tools = [
  { name: 'WordPress',      src: '/tools_logo/wordpress.webp' },
  { name: 'Wix',            src: '/tools_logo/wix 1.webp' },
  { name: 'Canva',          src: '/tools_logo/Canva-New-Logo.webp' },
  { name: 'HubSpot',        src: '/tools_logo/hubspot-logo_resized.webp' },
  { name: 'Semrush',        src: '/tools_logo/semrush.webp' },
  { name: 'Zapier',         src: '/tools_logo/zap.webp' },
  { name: 'Mailchimp',      src: '/tools_logo/mailchimp (1).webp' },
  { name: 'Screaming Frog', src: '/tools_logo/screamfrog.webp' },
  { name: 'Surfer SEO',     src: '/tools_logo/surfer-logos-id02Tp1TA0.webp' },
  { name: 'Illustrator',    src: '/tools_logo/adobe illustratior.webp' },
  { name: 'Premiere Pro',   src: '/tools_logo/Adobe-Premierepro-course-delhi-removebg-preview-e1723458185723.webp' },
  { name: 'Adobe XD',       src: '/tools_logo/adobe-xd.webp' },
  { name: 'Shopify',        src: '/tools_logo/shopfy 1.webp' },
  { name: 'Vercel',         src: '/tools_logo/vercel.webp' },
  { name: 'GitHub',         src: '/tools_logo/github-logo-2_resized.webp' },
  { name: 'Postman',        src: '/tools_logo/postman.webp' },
  { name: 'Zoho',           src: '/tools_logo/zo6615zeae-zoho-logo-zoho-logo-cdc-small-business (1) 1.webp' },
  { name: 'Claude AI',      src: '/tools_logo/claud.webp' },
];

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';

export default function ToolsStrip() {
  const row1 = [...tools, ...tools];

  const card = (t, i) => (
    <div key={i} style={{
      flexShrink: 0,
      background: '#fff',
      border: '1.5px solid var(--color-border)',
      borderRadius: 16,
      padding: '14px 28px',
      boxShadow: '0 2px 12px rgba(0,0,0,.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 82,
      minWidth: 178,
      transition: 'box-shadow .2s, border-color .2s, transform .2s',
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={t.src}
        alt={t.name}
        width={158}
        height={52}
        style={{ objectFit: 'contain', display: 'block', height: 46, width: 'auto', maxWidth: 158 }}
      />
    </div>
  );

  return (
    <div className="ts-section" style={{ padding: '52px 0 48px', background: 'var(--color-bg-soft)', overflow: 'hidden' }}>

      {/* ── Header ── */}
      <div style={{ textAlign: 'center', marginBottom: 32, padding: '0 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, maxWidth: 380, margin: '0 auto 10px' }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, var(--color-border))' }} />
          <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-navy)', letterSpacing: '.08em', textTransform: 'uppercase', whiteSpace: 'nowrap', margin: 0 }}>
            Tools We Use
          </p>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, var(--color-border))' }} />
        </div>
      </div>

      {/* ── Single row — scrolls left ── */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="ts-fade" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right, var(--color-bg-soft), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div className="ts-fade" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left, var(--color-bg-soft), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', animation: 'ism-marquee 50s linear infinite', width: 'max-content' }}>
          {row1.map((t, i) => card(t, i))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ts-section { padding: 32px 0 28px !important; }
        }
        @media (max-width: 480px) {
          .ts-section { padding: 24px 0 20px !important; }
          .ts-fade { width: 48px !important; }
        }
      `}</style>
    </div>
  );
}
