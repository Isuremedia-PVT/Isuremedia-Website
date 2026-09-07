// Shared helpers for reading/writing the visitor's cookie-consent choice.
// Kept separate from the banner component so any future analytics/pixel
// script can check `hasConsent('analytics')` etc. before loading, without
// importing the UI component.

export const CONSENT_KEY = 'ism_cookie_consent';
export const CONSENT_VERSION = 1;

const DEFAULTS = { essential: true, analytics: false, preference: false, marketing: false };

export function getConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(prefs) {
  if (typeof window === 'undefined') return;
  const record = {
    version: CONSENT_VERSION,
    essential: true,
    analytics: !!prefs.analytics,
    preference: !!prefs.preference,
    marketing: !!prefs.marketing,
    decidedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    // localStorage unavailable (private mode, blocked storage) — the
    // banner will just re-show next visit, which is an acceptable fallback.
  }
  return record;
}

export function hasConsent(category) {
  if (category === 'essential') return true;
  const record = getConsent();
  return !!(record && record[category]);
}

export const DEFAULT_PREFS = DEFAULTS;
