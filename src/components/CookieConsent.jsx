'use client';

import { useEffect, useState } from 'react';
import { getConsent, saveConsent, DEFAULT_PREFS } from '@/data/cookieConsent';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const TOGGLES = [
  { key: 'essential', label: 'Essential', desc: 'Required for the site to function. Always on.', locked: true },
  { key: 'analytics', label: 'Analytics', desc: 'Helps us understand traffic and improve the site.' },
  { key: 'preference', label: 'Preference', desc: 'Remembers choices like language or region.' },
  { key: 'marketing', label: 'Marketing', desc: 'Used to show relevant ads and measure campaigns.' },
];

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  function acceptAll() {
    saveConsent({ analytics: true, preference: true, marketing: true });
    setVisible(false);
  }

  function rejectNonEssential() {
    saveConsent({ analytics: false, preference: false, marketing: false });
    setVisible(false);
  }

  function savePreferences() {
    saveConsent(prefs);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="cc-wrap"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      style={{
        position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 10000,
        padding: '20px 24px', background: 'var(--color-navy)',
        borderTop: '1px solid rgba(255,255,255,.10)', boxShadow: '0 -8px 32px rgba(0,0,0,.25)',
      }}
    >
      <div className="cc-inner" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="cc-row" style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, flex: '1 1 420px', minWidth: 260 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,176,0,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <i className="fa-solid fa-cookie-bite" style={{ fontSize: 17, color: 'var(--ism-amber)' }} />
            </div>
            <p style={{ fontFamily: I, fontSize: 14, color: 'rgba(255,255,255,.82)', lineHeight: 1.65, margin: 0 }}>
              We use cookies to run this site, understand how it&apos;s used, and personalize content. Choose what you&apos;re comfortable with, or read our{' '}
              <a href="/cookie-policy" style={{ color: 'var(--ism-amber)', textDecoration: 'underline' }}>Cookie Policy</a>
              {' '}and{' '}
              <a href="/privacy-policy" style={{ color: 'var(--ism-amber)', textDecoration: 'underline' }}>Privacy Policy</a>.
            </p>
          </div>

          <div className="cc-btns" style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', flexShrink: 0 }}>
            <button
              onClick={() => setExpanded(e => !e)}
              aria-expanded={expanded}
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.25)', color: '#fff', fontFamily: J, fontSize: 13, fontWeight: 600, padding: '11px 18px', borderRadius: 8, cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              {expanded ? 'Hide options' : 'Customize'}
            </button>
            <button
              onClick={rejectNonEssential}
              style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.25)', color: '#fff', fontFamily: J, fontSize: 13, fontWeight: 600, padding: '11px 18px', borderRadius: 8, cursor: 'pointer', whiteSpace: 'nowrap' }}
            >
              Reject Non-Essential
            </button>
            <button
              onClick={acceptAll}
              style={{ background: 'var(--ism-amber)', border: 'none', color: 'var(--color-navy)', fontFamily: J, fontSize: 13, fontWeight: 700, padding: '11px 22px', borderRadius: 8, cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(255,176,0,.30)' }}
            >
              Accept All
            </button>
          </div>
        </div>

        {expanded && (
          <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.10)' }}>
            <div className="cc-toggles" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 20 }}>
              {TOGGLES.map(t => (
                <div key={t.key} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, padding: '14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontFamily: J, fontSize: 13, fontWeight: 700, color: '#fff' }}>{t.label}</span>
                    <label className="cc-switch" style={{ position: 'relative', display: 'inline-block', width: 36, height: 20, opacity: t.locked ? 0.5 : 1 }}>
                      <input
                        type="checkbox"
                        checked={t.locked ? true : prefs[t.key]}
                        disabled={t.locked}
                        onChange={e => setPrefs(p => ({ ...p, [t.key]: e.target.checked }))}
                        style={{ opacity: 0, width: 0, height: 0 }}
                      />
                      <span aria-hidden style={{
                        position: 'absolute', inset: 0, borderRadius: 999, cursor: t.locked ? 'default' : 'pointer',
                        background: (t.locked || prefs[t.key]) ? 'var(--ism-amber)' : 'rgba(255,255,255,.25)', transition: 'background .18s',
                      }}>
                        <span style={{
                          position: 'absolute', top: 2, left: (t.locked || prefs[t.key]) ? 18 : 2, width: 16, height: 16,
                          borderRadius: '50%', background: '#fff', transition: 'left .18s',
                        }} />
                      </span>
                    </label>
                  </div>
                  <p style={{ fontFamily: I, fontSize: 12, color: 'rgba(255,255,255,.60)', lineHeight: 1.5, margin: 0 }}>{t.desc}</p>
                </div>
              ))}
            </div>
            <button
              onClick={savePreferences}
              style={{ background: 'var(--color-primary)', border: 'none', color: '#fff', fontFamily: J, fontSize: 13, fontWeight: 700, padding: '11px 22px', borderRadius: 8, cursor: 'pointer' }}
            >
              Save Preferences
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes ccSlideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .cc-wrap { animation: ccSlideUp .32s ease-out; }
        @media (max-width: 900px) {
          .cc-toggles { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 640px) {
          .cc-wrap { padding: 18px 16px !important; }
          .cc-row { flex-direction: column !important; align-items: stretch !important; }
          .cc-btns { width: 100% !important; }
          .cc-btns button { flex: 1 1 auto !important; }
          .cc-toggles { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
