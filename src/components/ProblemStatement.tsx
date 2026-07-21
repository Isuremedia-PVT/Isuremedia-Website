const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

export default function ProblemStatement() {
  return (
    <section style={{
      background: 'linear-gradient(130deg, #1840A0 0%, #1E4DC3 40%, #2F5FE8 75%, #3B6CF5 100%)',
      padding: '72px 0 68px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative glows */}
      <div style={{ position: 'absolute', right: '-5%', top: '-20%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: '-8%', bottom: '-30%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,35,83,.35) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div className="ps-container" style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
          <div style={{ width: 28, height: 3, background: 'var(--ism-amber)', borderRadius: 2 }} />
          <p style={{
            fontFamily: J,
            fontSize: 11,
            fontWeight: 700,
            color: 'var(--ism-amber)',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            The Truth
          </p>
        </div>

        {/* Heading white */}
        <h2 style={{
          fontFamily: J,
          fontSize: 'clamp(30px, 3.4vw, 50px)',
          fontWeight: 700,
          lineHeight: 1.15,
          color: '#fff',
          letterSpacing: '-0.5px',
          marginBottom: 2,
        }}>
          You are not short on marketing.
        </h2>

        {/* Amber heading */}
        <h2 style={{
          fontFamily: J,
          fontSize: 'clamp(30px, 3.4vw, 50px)',
          fontWeight: 700,
          lineHeight: 1.15,
          color: 'var(--ism-amber)',
          letterSpacing: '-0.5px',
          marginBottom: 2,
        }}>
          You are short on results.
        </h2>

        {/* Ghost heading */}
        <h2 style={{
          fontFamily: J,
          fontSize: 'clamp(30px, 3.4vw, 50px)',
          fontWeight: 700,
          lineHeight: 1.15,
          color: 'rgba(255,255,255,.52)',
          letterSpacing: '-0.5px',
          marginBottom: 0,
        }}>
          We cover every corner of your digital growth.
        </h2>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .ps-container { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
