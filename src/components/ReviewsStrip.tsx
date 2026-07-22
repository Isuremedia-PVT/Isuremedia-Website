export default function ReviewsStrip() {
  return (
    <section style={{ background: '#F7F8FA', padding: '16px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="rs-wrap" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        <div className="rs-grid" style={{ display: 'grid', gridTemplateColumns: 'auto 1px auto 1px auto', alignItems: 'center', justifyContent: 'center' }}>

          {/* Google */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 40px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Google.png" alt="Google Reviews" style={{ height: 90, objectFit: 'contain', display: 'block' }} />
          </div>

          <div style={{ width: 1, height: 48, background: 'var(--color-border)', alignSelf: 'center', margin: '0 auto' }} />

          {/* Upwork */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 40px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/upwork.png" alt="Upwork Reviews" style={{ height: 110, objectFit: 'contain', display: 'block' }} />
          </div>

          <div style={{ width: 1, height: 48, background: 'var(--color-border)', alignSelf: 'center', margin: '0 auto' }} />

          {/* Client Reviews */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 40px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Client.png" alt="Client Reviews" style={{ height: 90, objectFit: 'contain', display: 'block' }} />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .rs-wrap { padding: 0 20px !important; }
          .rs-grid { grid-template-columns: 1fr !important; }
          .rs-grid > div[style*="width: 1"] { display: none !important; }
          .rs-grid > div { justify-content: flex-start !important; padding: 12px 0 !important; border-bottom: 1px solid var(--color-border); }
          .rs-grid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
