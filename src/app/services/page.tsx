'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const J = 'var(--font-jakarta,"Plus Jakarta Sans",sans-serif)';
const I = 'var(--font-inter,Inter,sans-serif)';

const SERVICES = [
  {
    icon: 'fa-solid fa-globe',
    title: 'Websites & Funnels',
    desc: 'High-converting websites, landing pages, and sales funnels built on WordPress, Shopify, and GoHighLevel. Designed to look great and close.',
    href: '/services/websites-funnels',
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'SEO & Organic Growth',
    desc: 'Technical, on-page, and off-page SEO that earns sustainable first-page rankings. Real results without shortcuts or grey-hat tactics.',
    href: '/services/seo',
  },
  {
    icon: 'fa-solid fa-chart-bar',
    title: 'PPC & Paid Marketing',
    desc: 'Google Ads, Meta Ads, LinkedIn, YouTube, and retargeting campaigns managed to maximise ROAS and minimise wasted spend.',
    href: '/services/ppc-paid-marketing',
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'Content & Creative',
    desc: 'SEO blogs, website copy, ad creatives, social content, graphic design, and email campaigns that engage, rank, and convert.',
    href: '/services/content-creative',
  },
  {
    icon: 'fa-solid fa-tag',
    title: 'White-Label Fulfillment',
    desc: 'Unbranded delivery for agencies. SEO, PPC, web dev, content, GHL builds — delivered under your brand with NDA-protected confidentiality.',
    href: '/services/white-label',
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'Marketing Automation',
    desc: 'GoHighLevel, CRM setup, Zapier, Make, n8n, and AI chatbots that automate your lead follow-up, onboarding, and growth workflows.',
    href: '/services/marketing-automation',
  },
];

const STATS = [
  { num: '6',   label: 'Core Service Areas'      },
  { num: '50+', label: 'In-House Specialists'     },
  { num: '200+',label: 'Clients Served'           },
  { num: '10+', label: 'Years of Experience'      },
];

const WHY = [
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Full-Service Under One Roof',
    desc: 'SEO, paid ads, web builds, content, automation — one team handles it all. No hand-offs. No gaps. No agencies blaming each other.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Data-Driven Strategy',
    desc: 'Every campaign is built on research and benchmarked against real numbers. We make decisions based on what the data actually says.',
  },
  {
    icon: 'fa-solid fa-file-chart-column',
    title: 'Transparent Reporting',
    desc: 'You get a live dashboard and regular reports that show exactly what is working, what changed, and what we are doing next.',
  },
  {
    icon: 'fa-solid fa-user-tie',
    title: 'Dedicated Account Managers',
    desc: 'One point of contact who knows your account inside out. Available, responsive, and accountable for your results.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section style={{ background: 'var(--color-bg-soft)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-15%', right: '-8%', width: 720, height: 720, background: 'radial-gradient(circle,rgba(30,77,195,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,176,0,.05) 0%,transparent 65%)', pointerEvents: 'none' }} />

          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative' }}>
            <div className="svc-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', minHeight: 480 }}>

              {/* Left — image only */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Artboard.png"
                  alt="Isuremedia Services"
                  style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', objectFit: 'contain' }}
                />
              </div>

              {/* Right — text */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 24 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
                  <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Our Services</span>
                </div>
                <h1 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,52px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-1px', lineHeight: 1.10, marginBottom: 20 }}>
                  One Agency. Every Digital Service You&apos;ll Ever Need.
                </h1>
                <p style={{ fontFamily: I, fontSize: 16, color: 'var(--color-text-muted)', lineHeight: 1.78, marginBottom: 36, maxWidth: 520 }}>
                  Strategy, execution, and growth — all under one roof. From websites and SEO to paid ads, content, automation, and white-label fulfillment, Isuremedia covers the full digital marketing stack so you never have to juggle agencies again.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 32px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-navy)', background: 'var(--ism-amber)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', boxShadow: '0 6px 20px rgba(255,176,0,.35)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-accent-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--ism-amber)'; e.currentTarget.style.transform = ''; }}>
                    Get Free Strategy Call <i className="fa-solid fa-arrow-right" style={{ fontSize: 11 }} />
                  </a>
                  <a href="#services-grid" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 8, fontFamily: J, fontSize: 14, fontWeight: 700, color: 'var(--color-primary)', background: 'transparent', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', border: '2px solid var(--color-primary)', transition: 'all .18s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-primary)'; }}>
                    View All Services
                  </a>
                </div>
              </div>

            </div>
          </div>
          <style>{`@media(max-width:768px){.svc-hero-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* ── STATS ── */}
        <section style={{ padding: '56px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--color-border)', borderRadius: 16, overflow: 'hidden' }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ background: '#fff', padding: '40px 24px', textAlign: 'center' }}>
                  <div style={{ fontFamily: J, fontSize: 'clamp(40px,4.5vw,64px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 6, letterSpacing: '-1px' }}>{s.num}</div>
                  <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, margin: '0 auto 10px' }} />
                  <div style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
        </section>

        {/* ── SERVICES GRID ── */}
        <section id="services-grid" style={{ padding: '104px 0', background: 'var(--color-bg-soft)' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>What We Do</span>
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>
                Every Service You Need to Grow
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 600, margin: '0 auto' }}>
                Six core service areas. One integrated strategy. Delivered by specialists who live and breathe digital growth.
              </p>
            </div>
            <div className="svc-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
              {SERVICES.map((s, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--color-border)', padding: '40px 36px', transition: 'all .22s', cursor: 'pointer' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--ism-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <i className={s.icon} style={{ fontSize: 22, color: 'var(--color-primary)' }} />
                  </div>
                  <div style={{ width: 32, height: 3, background: 'var(--ism-amber)', borderRadius: 2, marginBottom: 16 }} />
                  <h3 style={{ fontFamily: J, fontSize: 20, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: 24 }}>{s.desc}</p>
                  <a href={s.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: J, fontSize: 13, fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none', letterSpacing: '.04em', textTransform: 'uppercase', transition: 'gap .18s' }}
                    onMouseEnter={e => (e.currentTarget.style.gap = '12px')}
                    onMouseLeave={e => (e.currentTarget.style.gap = '7px')}>
                    Explore <i className="fa-solid fa-arrow-right" style={{ fontSize: 10 }} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.svc-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:600px){.svc-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        {/* ── WHY ISM ── */}
        <section style={{ padding: '104px 0', background: '#fff' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--ism-blue-50)', border: '1px solid var(--ism-blue-100)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-primary)', display: 'inline-block' }} />
                <span style={{ fontFamily: J, fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '.09em', textTransform: 'uppercase' }}>Why Isuremedia</span>
              </div>
              <h2 style={{ fontFamily: J, fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, color: 'var(--color-navy)', letterSpacing: '-0.5px', marginBottom: 16 }}>
                The Agency That Actually Delivers
              </h2>
              <p style={{ fontFamily: I, fontSize: 17, color: 'var(--color-text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
                We built Isuremedia around one promise: make the whole thing easier, and the results better.
              </p>
            </div>
            <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
              {WHY.map((w, i) => (
                <div key={i} style={{ background: 'var(--color-bg-soft)', borderRadius: 16, border: '1px solid var(--color-border)', padding: '36px 28px', textAlign: 'center', transition: 'all .22s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 18px 52px rgba(30,77,195,.14)'; el.style.borderColor = 'var(--color-primary)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ''; el.style.boxShadow = ''; el.style.borderColor = 'var(--color-border)'; }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--ism-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 6px 20px rgba(255,176,0,.30)' }}>
                    <i className={w.icon} style={{ fontSize: 20, color: 'var(--color-navy)' }} />
                  </div>
                  <h3 style={{ fontFamily: J, fontSize: 17, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 12 }}>{w.title}</h3>
                  <p style={{ fontFamily: I, fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.why-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:540px){.why-grid{grid-template-columns:1fr!important;}}`}</style>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
