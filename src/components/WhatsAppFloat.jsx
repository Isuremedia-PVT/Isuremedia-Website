'use client';

import { WHATSAPP_HREF } from '@/data/contact';

export default function WhatsAppFloat() {
  return (
    <>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="wa-float-btn"
        style={{
          position: 'fixed',
          left: 24,
          bottom: 24,
          zIndex: 999,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(0,0,0,.25)',
          textDecoration: 'none',
          transition: 'transform .2s ease, box-shadow .2s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 8px 26px rgba(0,0,0,.32)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,.25)'; }}
      >
        <i className="fa-brands fa-whatsapp wa-float-icon" style={{ fontSize: 28, color: '#fff' }} />
      </a>
      <style>{`
        @media (max-width: 480px) {
          .wa-float-btn { width: 50px !important; height: 50px !important; left: 16px !important; bottom: 16px !important; }
          .wa-float-icon { font-size: 24px !important; }
        }
      `}</style>
    </>
  );
}
