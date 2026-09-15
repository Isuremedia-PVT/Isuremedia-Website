import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const SITE_URL = 'https://isuremedia.com';
const APP_DIR = path.join(process.cwd(), 'src', 'app');

// Routes that exist as page.jsx files but are dead ends in production:
// nginx.conf 301-redirects every /services/<category>[/<page>] and
// /hire/<page> URL to a flat top-level equivalent (Aug 2026 slug
// migration), so they'd never resolve to their own content for a visitor
// or a crawler. The bare /services hub is the one exception, it isn't
// redirected. Pages meant to be reached only via a form submission, not
// organic search, are excluded too.
function isExcluded(urlPath) {
  if (urlPath !== '/services' && urlPath.startsWith('/services/')) return true;
  if (urlPath.startsWith('/hire/')) return true;
  if (urlPath === '/sitemap') return true; // human-readable HTML sitemap, not the XML one; also disallowed in robots.txt
  if (urlPath === '/thank-you' || urlPath === '/appointment-confirmation') return true;
  return false;
}

function priorityFor(urlPath) {
  if (urlPath === '/') return 1;
  const depth = urlPath.split('/').filter(Boolean).length;
  if (depth === 1) return 0.8;
  return 0.6;
}

function findPages(dir, base = '') {
  const pages = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip route groups/parallel routes and dynamic segments, neither of
      // which this site uses, but skip defensively rather than emit a bad URL.
      if (entry.name.startsWith('(') || entry.name.startsWith('[')) continue;
      pages.push(...findPages(full, `${base}/${entry.name}`));
    } else if (entry.name === 'page.jsx' || entry.name === 'page.js') {
      const urlPath = base === '' ? '/' : base;
      if (!isExcluded(urlPath)) {
        pages.push({ urlPath, file: full });
      }
    }
  }
  return pages;
}

export default function sitemap() {
  const pages = findPages(APP_DIR);

  return pages
    .sort((a, b) => a.urlPath.localeCompare(b.urlPath))
    .map(({ urlPath, file }) => ({
      url: `${SITE_URL}${urlPath}`,
      lastModified: fs.statSync(file).mtime,
      changeFrequency: urlPath === '/' ? 'weekly' : 'monthly',
      priority: priorityFor(urlPath),
    }));
}
