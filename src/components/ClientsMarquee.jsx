'use client';

import { useEffect, useState } from 'react';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const clients = [
  // Newest clients first
  { name: 'Fourth Strategies', src: '/company_logo/fourth-strategies.webp' },
  { name: 'Dot Com Media', src: '/company_logo/dot-com-media.webp' },
  { name: 'Positive Approach Coaching', src: '/company_logo/positive-approach-coaching.webp' },
  { name: 'Gestion Portail Santé', src: '/company_logo/gestion-portail-sante.webp' },
  { name: 'Think Holistic Fitness', src: '/company_logo/think-holistic-fitness.webp' },
  { name: 'CareGenius', src: '/company_logo/caregenius.webp' },
  { name: 'Blue Moth', src: '/company_logo/blue-moth.webp' },
  { name: 'Leadium', src: '/company_logo/leadium.png' },
  // Existing clients
  { name: 'Andrea Petrone', src: '/company_logo/andrea-petrone.webp' },
  { name: 'Business Growth Machine', src: '/company_logo/business-growth-machine.webp' },
  { name: 'Dog Trainer Sales Club', src: '/company_logo/dog-trainer-sales-club.webp' },
  { name: 'Dr. Robert Morrison', src: '/company_logo/dr-robert-morrison.webp' },
  { name: 'Outdoorscapes', src: '/company_logo/outdoorscapes.webp' },
  { name: 'Jurissa International Bank', src: '/company_logo/jurissa-international-bank.webp' },
  { name: 'AgentMate', src: '/company_logo/agentmate.webp' },
  { name: 'Mi Amor', src: '/company_logo/mi-amor.webp' },
  { name: 'ProMailShop', src: '/company_logo/promailshop.webp' },
  { name: 'Salesley', src: '/company_logo/salesley.webp' },
  { name: 'Scrubs4U', src: '/company_logo/scrubs4u.webp' },
  { name: 'TyCan', src: '/company_logo/tycan.webp' },
  { name: 'Tortlink', src: '/company_logo/tortlink.webp' },
  { name: 'Uttarakhand Business Listing', src: '/company_logo/uttarakhand-business-listing.webp' },
];

export default function ClientsMarquee() {
  const row = [...clients, ...clients];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % clients.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ background: '#F2F3F5', padding: '0', overflow: 'hidden' }}>
      <div className="cm-row" style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'stretch', minHeight: 96 }}>

        {/* LEFT — label */}
        <div className="cm-label" style={{ flexShrink: 0, width: 260, display: 'flex', alignItems: 'center', padding: '20px 40px', borderRight: '1px solid var(--color-border)', background: '#F2F3F5' }}>
          <div>
            <div className="cm-eyebrow" style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.4, marginBottom: 4 }}>Trusted by</div>
            <div className="cm-heading" style={{ fontFamily: J, fontSize: 20, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.25 }}>
              100+ Agencies<br />&amp; Businesses
            </div>
          </div>
        </div>

        {/* RIGHT — continuous marquee (desktop) */}
        <div className="cm-marquee" style={{ flex: 1, minWidth: 0, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <div className="cm-fade" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right,#F2F3F5,transparent)', zIndex: 2, pointerEvents: 'none' }} />
          <div className="cm-fade" style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left,#F2F3F5,transparent)', zIndex: 2, pointerEvents: 'none' }} />

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

        {/* RIGHT — single-logo slide (mobile) */}
        <div className="cm-single" style={{ flex: 1, minWidth: 0, display: 'none', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={active}
            src={clients[active].src}
            alt={clients[active].name}
            className="cm-single-img"
            style={{ height: 44, width: 'auto', maxWidth: '90%', objectFit: 'contain', display: 'block' }}
          />
        </div>

      </div>
      <style>{`
        @keyframes cmSlideFade { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }
        .cm-single-img { animation: cmSlideFade .4s ease both; }

        @media (max-width: 1024px) and (min-width: 769px) {
          .cm-row { align-items: stretch !important; min-height: 76px !important; }
          .cm-label { width: 220px !important; padding: 14px 20px !important; }
        }
        @media (max-width: 768px) {
          .cm-row { align-items: stretch !important; min-height: 76px !important; }
          .cm-label { width: 50% !important; padding: 14px 16px !important; }
          .cm-marquee { display: none !important; }
          .cm-single { display: flex !important; border-left: 1px solid var(--color-border); }
        }
        @media (max-width: 480px) {
          .cm-label { padding: 12px 14px !important; }
          .cm-eyebrow { font-size: 11px !important; }
          .cm-heading { font-size: 15px !important; }
        }
      `}</style>
    </div>
  );
}
