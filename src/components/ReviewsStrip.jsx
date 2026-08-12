export default function ReviewsStrip() {
  return (
    <section className="rs-section" style={{ background: '#F7F8FA', padding: '16px 0' }}>
      <div className="ism-container rs-wrap" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        <div className="rs-grid" style={{ display: 'grid', gridTemplateColumns: 'auto 1px auto 1px auto', alignItems: 'center', justifyContent: 'center' }}>

          {/* Google */}
          <div className="rs-item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 40px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Google.webp" alt="Google Reviews" className="rs-img" style={{ height: 90, width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }} />
          </div>

          <div className="rs-divider" style={{ width: 1, height: 48, background: 'var(--color-border)', alignSelf: 'center', margin: '0 auto' }} />

          {/* Upwork */}
          <div className="rs-item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 40px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/upwork.webp" alt="Upwork Reviews" className="rs-img" style={{ height: 110, width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }} />
          </div>

          <div className="rs-divider" style={{ width: 1, height: 48, background: 'var(--color-border)', alignSelf: 'center', margin: '0 auto' }} />

          {/* Client Reviews */}
          <div className="rs-item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 40px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Client.webp" alt="Client Reviews" className="rs-img" style={{ height: 90, width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }} />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) and (min-width: 769px) {
          .rs-grid { grid-template-columns: 1fr 1px 1fr 1px 1fr !important; }
          .rs-item { padding: 8px 16px !important; }
          .rs-img { height: auto !important; width: 100% !important; max-height: 92px !important; }
        }
        @media (max-width: 768px) {
          .rs-wrap { padding: 0 8px !important; }
          .rs-grid { grid-template-columns: 1fr 1fr 1fr !important; }
          .rs-divider { display: none !important; }
          .rs-item { padding: 4px 6px !important; }
          .rs-img { height: auto !important; width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
