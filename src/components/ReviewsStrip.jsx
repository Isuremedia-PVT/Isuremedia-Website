export default function ReviewsStrip() {
  return (
    <section className="rs-section" style={{ background: '#F7F8FA', padding: '16px 0' }}>
      <div className="ism-container rs-wrap" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>

        <div className="rs-grid" style={{ display: 'grid', gridTemplateColumns: 'auto 1px auto 1px auto', alignItems: 'center', justifyContent: 'center' }}>

          {/* Google */}
          <div className="rs-item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '8px 40px' }}>
            <a href="https://www.google.com/maps/place/Isuremedia+Private+Limited/@29.1985821,79.4835494,17z/data=!3m2!4b1!5s0x39a09b4f3fbe1675:0xb03c9b4c838bcb6c!4m6!3m5!1s0x39a09b59125c64b7:0xa50d6b8635f8ce83!8m2!3d29.1985821!4d79.4861243!16s%2Fg%2F11c6pqx1_6?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Google.webp" alt="Google Reviews" className="rs-img" style={{ height: 90, width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }} />
            </a>
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
            <a href="https://share.google/hQMI70Qc8akOncmq9" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Client.webp" alt="Client Reviews" className="rs-img" style={{ height: 90, width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block' }} />
            </a>
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
