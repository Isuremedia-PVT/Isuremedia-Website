# Isuremedia Website

Corporate marketing site for [isuremedia.com](https://isuremedia.com) — built with Next.js 16 static export, served via Nginx on AWS EC2.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (static export) |
| UI | React 19, Tailwind CSS 4 |
| Icons | FontAwesome 7 (free) |
| Carousel | Embla Carousel 8 |
| Language | TypeScript / JSX mix |
| Server | Nginx on AWS EC2 (eu-north-1) |
| CDN | Cloudflare (proxied) |
| CI/CD | GitHub Actions → rsync to EC2 |

## Local Development

**Requirements:** Node.js ≥ 20.9.0

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Build

```bash
npm run build
```

Outputs a fully static site to `out/`. Because `output: "export"` is set in `next.config.ts`, Next.js redirects/rewrites/headers are not supported — those live in `nginx.conf` instead.

## Deployment

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. Install deps (`npm ci`)
2. Build (`npm run build`)
3. Rsync `out/` to the EC2 server

### Required GitHub Secrets

| Secret | Value |
|---|---|
| `EC2_HOST` | EC2 elastic IP or hostname |
| `EC2_USER` | SSH user (e.g. `ubuntu`) |
| `EC2_SSH_KEY` | Private SSH key (PEM, no passphrase) |

## Project Structure

```
src/
  app/              # Next.js App Router pages
    page.jsx        # Homepage (schema, hero, all sections)
    services/       # Service detail pages
    hire/           # Hire a [role] pages
    industries/     # Industry-specific landing pages
    case-studies/   # Case study pages
    contact/
    about/
    careers/
    ...
  components/       # Shared UI components
    Navbar.jsx
    Footer.jsx
    CTASection.jsx
    Hero.jsx
    Services.jsx
    FAQ.jsx
    ...
  data/
    contact.js      # Single source of truth for all phone/email/WhatsApp links
public/             # Static assets (images, fonts, etc.)
nginx.conf          # Nginx config for the EC2 server
Dockerfile          # Multi-stage build (Node build → Nginx serve)
```

## Key Conventions

**Contact details** — never hardcode phone numbers or emails inline. Import from `src/data/contact.js`:

```js
import { PHONE_US, PHONE_US_TEL, EMAIL, EMAIL_HREF } from '@/data/contact';
```

**Images** — all assets are WebP. Add `loading="lazy"` on every `<img>` that is not in the above-the-fold hero. Do not add `loading="lazy"` to hero/banner images.

**External links** — always include `target="_blank" rel="noopener noreferrer"` on any `href` that starts with `http`.

**Blog / Free Tools redirects** — `/blog` and `/freetools` are handled by Nginx redirects (to `blogs.isuremedia.com` and `templates.isuremedia.com`). Do not create Next.js pages for these routes.

**Schema** — Organization and WebSite JSON-LD lives in `src/app/page.jsx`. Keep the logo URL absolute (`https://isuremedia.com/...`).

## Branches

| Branch | Purpose |
|---|---|
| `main` | Production — every push deploys |
| `main-backup` | Clean snapshot of main before optimizations (August 2026) |
| `site-updates-2026-08-20` | Previous update batch |

## Contacts

- **India:** +91 70110 41363
- **US:** +1 646-588-1430
- **Email:** info@isuremedia.com
