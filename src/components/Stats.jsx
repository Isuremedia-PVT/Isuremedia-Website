/* Stats, White background
   Spec: Stat/Number → Plus Jakarta Sans 800 / 64px / 1.10
   On white bg: Digital Blue (#1E4DC3) per visual hierarchy */
const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const stats = [
  { num: '10+',  label: 'Years of Expertise' },
  { num: '200+', label: 'Clients Worldwide' },
  { num: '$50M', label: 'Revenue Generated' },
  { num: '30+',  label: 'Industries Served' },
];

export default function Stats() {
  return (
    <section style={{ padding: '56px 0', background: '#fff' }}>
      <div className="ism-container">
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--color-border)', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--sh-sm)' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: '#fff', padding: '40px 24px', textAlign: 'center' }}>
              {/* Stat/Number, 64px / 800 / 1.10 */}
              <div style={{
                fontFamily: J,
                fontSize: 'clamp(40px, 4.5vw, 64px)',
                fontWeight: 800,
                lineHeight: 1.10,
                color: 'var(--color-primary)',
                marginBottom: 6,
                letterSpacing: '-1px',
              }}>
                {s.num}
              </div>
              {/* Amber accent line */}
              <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, margin: '0 auto 10px' }} />
              {/* Caption */}
              <div style={{
                fontFamily: I,
                fontSize: 14,
                fontWeight: 400,
                color: 'var(--color-text-muted)',
                lineHeight: 1.50,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
