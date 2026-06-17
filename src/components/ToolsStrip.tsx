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
  const doubled = [...tools, ...tools];

  return (
    <div style={{ padding: '36px 0', background: 'var(--color-bg-soft)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', overflow: 'hidden' }}>

      <p style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-text-heading)', textAlign: 'center', marginBottom: 22 }}>
        Tools We Use
      </p>

      {/* Scrolling track */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#F7F8FA,transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#F7F8FA,transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{ display: 'flex', gap: 12, alignItems: 'center', animation: 'ism-marquee 45s linear infinite', width: 'max-content' }}>
          {doubled.map((t, i) => (
            <div key={i} style={{ flexShrink: 0, background: '#fff', border: '1px solid var(--color-border)', borderRadius: 12, padding: '10px 18px', boxShadow: '0 1px 4px rgba(0,0,0,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 64, minWidth: 140 }}>
              <img
                src={t.src}
                alt={t.name}
                width={120}
                height={40}
                style={{ objectFit: 'contain', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
