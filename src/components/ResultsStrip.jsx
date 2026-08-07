'use client';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

export const resultCards = [
  {
    label: 'Case Studies',
    stat: '+360%', statLabel: 'Organic Traffic',
    overlay: 'linear-gradient(160deg,rgba(24,64,160,.88) 0%,rgba(30,77,195,.75) 100%)',
    img: 'https://picsum.photos/seed/analytics/400/300',
    icon: 'fa-solid fa-chart-line',
    shape1: '#1E4DC3', shape2: '#FFB000',
    href: '/case-studies',
  },
  {
    label: 'Client Testimonials',
    stat: '200+', statLabel: 'Happy Clients',
    overlay: 'linear-gradient(160deg,rgba(13,107,78,.88) 0%,rgba(14,155,110,.75) 100%)',
    img: 'https://picsum.photos/seed/team/400/300',
    icon: 'fa-solid fa-star',
    shape1: '#0E9B6E', shape2: '#FFB000',
    href: '/testimonials#image-testimonials',
  },
  {
    label: 'Design Portfolio',
    stat: '500+', statLabel: 'Projects Done',
    overlay: 'linear-gradient(160deg,rgba(47,47,110,.90) 0%,rgba(76,76,200,.78) 100%)',
    img: 'https://picsum.photos/seed/design/400/300',
    icon: 'fa-solid fa-layer-group',
    shape1: '#4C4CC8', shape2: '#FFB000',
    href: '/portfolio',
  },
  {
    label: 'Industries Served',
    stat: '35+', statLabel: 'Industries',
    overlay: 'linear-gradient(160deg,rgba(160,92,0,.90) 0%,rgba(212,134,10,.78) 100%)',
    img: 'https://picsum.photos/seed/business/400/300',
    icon: 'fa-solid fa-briefcase',
    shape1: '#D4860A', shape2: '#1E4DC3',
    href: '/industries',
  },
  {
    label: 'Video Testimonials',
    stat: '95%', statLabel: 'Satisfaction',
    overlay: 'linear-gradient(160deg,rgba(15,25,65,.92) 0%,rgba(24,64,160,.80) 100%)',
    img: 'https://picsum.photos/seed/camera/400/300',
    icon: 'fa-solid fa-circle-play',
    shape1: '#1840A0', shape2: '#FFB000',
    href: '/testimonials#video-testimonials',
  },
];

export default function ResultsStrip() {
  return (
    <div className="rstrip-wrap">
      <p style={{ fontFamily: J, fontSize: 12, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 16 }}>Our Results</p>
      <div className="rstrip-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14 }}>
        {resultCards.map(card => (
          <a key={card.label} href={card.href}
            style={{ textDecoration: 'none', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 190, position: 'relative', transition: 'transform .18s, box-shadow .18s', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 14px 34px rgba(0,0,0,.28)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={card.img} alt="" aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: card.overlay }} />
            <div style={{ position: 'absolute', bottom: -22, right: -22, width: 80, height: 80, borderRadius: '50%', background: card.shape1, opacity: 0.28 }} />
            <div style={{ position: 'absolute', top: -12, right: 28, width: 44, height: 44, borderRadius: '50%', background: card.shape2, opacity: 0.32 }} />
            <div style={{ position: 'relative', zIndex: 2, padding: '22px 16px 18px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={card.icon} style={{ fontSize: 15, color: '#fff' }} />
                </div>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: 8, color: '#fff' }} />
                </div>
              </div>
              <div>
                <div style={{ fontFamily: J, fontSize: 12, fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '.04em', lineHeight: 1.3, marginBottom: 6 }}>{card.label}</div>
                <div style={{ fontFamily: J, fontSize: 20, fontWeight: 900, color: 'var(--ism-amber)', lineHeight: 1 }}>{card.stat}</div>
                <div style={{ fontFamily: I, fontSize: 10, color: 'rgba(255,255,255,.65)', marginTop: 2 }}>{card.statLabel}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .rstrip-grid { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 560px) {
          .rstrip-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
