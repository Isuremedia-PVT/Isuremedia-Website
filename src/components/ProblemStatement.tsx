const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

export default function ProblemStatement() {
  return (
    <section className="ps-section" style={{
      background: 'linear-gradient(130deg, #1840A0 0%, #1E4DC3 40%, #2F5FE8 75%, #3B6CF5 100%)',
      padding: '72px 0 68px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative glows */}
      <div style={{ position: 'absolute', right: '-5%', top: '-20%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,255,255,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: '-8%', bottom: '-30%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,35,83,.35) 0%,transparent 65%)', pointerEvents: 'none' }} />

      <div className="ism-container ps-container" style={{ position: 'relative', zIndex: 1 }}>

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
          color: 'rgba(255,255,255,.78)',
          letterSpacing: '-0.5px',
          marginBottom: 0,
        }}>
          We cover every corner of your digital growth.
        </h2>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .ps-section { padding: 44px 0 40px !important; }
          .ps-container { padding: 0 20px !important; max-width: 100% !important; }
        }
        @media (max-width: 480px) {
          .ps-section { padding: 36px 0 32px !important; }
        }
      `}</style>
    </section>
  );
}
