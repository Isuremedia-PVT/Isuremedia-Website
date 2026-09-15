import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

export const metadata = {
  title: "Page Not Found | Isuremedia",
  description: "The page you're looking for doesn't exist or has moved.",
};

const POPULAR_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: 'var(--color-bg-soft)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: J, fontSize: 'clamp(72px,12vw,140px)', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1, letterSpacing: '-2px', marginBottom: 8 }}>
              404
            </div>
            <h1 style={{ fontFamily: J, fontSize: 'clamp(24px,3.2vw,38px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', lineHeight: 1.2, marginBottom: 18 }}>
              We Couldn&apos;t Find That Page
            </h1>
            <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}>
              The page you&apos;re looking for may have been moved, renamed, or no longer exists. Let&apos;s get you back on track.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}>
                <i className="fa-solid fa-house" style={{ fontSize: 11 }} /> Back to Home
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}>
                Contact Us <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: I, fontSize: 13, color: 'var(--color-text-muted)' }}>Popular pages:</span>
              {POPULAR_LINKS.map((l, i) => (
                <span key={l.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  <Link href={l.href} style={{ fontFamily: I, fontSize: 13, fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'underline' }}>
                    {l.label}
                  </Link>
                  {i < POPULAR_LINKS.length - 1 && <span style={{ color: 'var(--color-border)' }}>·</span>}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
